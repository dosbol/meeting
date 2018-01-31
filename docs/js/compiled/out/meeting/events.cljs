(ns meeting.events
  (:require [re-frame.core :as re-frame]
            [meeting.db :as db]
            [cljs-time.core    :refer [now before? date? overlaps? minus hours]]
            [clojure.string :as string]
            [cljs-time.format  :refer [formatter unparse parse]]))

;;helper
(defonce last-id (atom 2))

(re-frame/reg-cofx
  :meeting-id
  (fn [cofx _]
    (assoc cofx :meeting-id (swap! last-id inc))))

(def datetime-formatter (formatter "dd.MM.yyyy hh:mm A"))

;;helper function for modifying :queue in :context
(declare validation-interceptors)

(defn filter-queue 
  [f q] 
  (apply conj #queue[] (vec (filter f q))))

(defn not-in? 
  [coll elem] 
  (not (contains? (set coll) elem)))

(defn not-in-validation-interceptors? 
  [elem] 
  (not-in? validation-interceptors elem))

(defn assoc-error-fiter-queue 
  [context error-string]
    (-> context
        (assoc-in [:coeffects :error] error-string)                                ;; assoc error message
        (update-in [:queue] #(filter-queue not-in-validation-interceptors? %))))   ;; skip other validation-interceptors)

;;validation interceptors helpers

(defn blank-interceptor-before 
  [key]
  (fn [context]
    (let [{[_ {field key}] :event} (:coeffects context)]
      (if (string/blank? field)
          (assoc-error-fiter-queue context (str (name key) " required"))
          context))))

(defn inv-format-interceptor-before 
  [key]
  (fn [context]
    (let [{[_ {field key}] :event} (:coeffects context)]
      (if (not (re-matches #"\d{2}\.\d{2}\.\d{4}\s+\d{2}:\d{2}\s+(AM|PM)" field))
          (assoc-error-fiter-queue context (str (name key) " date-time format is invalid(should be dd.MM.yyyy hh:mm AM)"))
          context))))

(defn inv-date-interceptor-before 
  [key]
  (fn [context]
    (let [{[_ {field key}] :event} (:coeffects context)]    
      (try (assoc-in context [:coeffects :event 1 key] (parse datetime-formatter field))  ;futher interceptors and event-handler will work with datetime(not string)
           (catch :default e
              (assoc-error-fiter-queue context (str (name key) " date-time is not valid")))))))

(defn time-to-utc! 
  [key]
  (fn [context]
    (let [{[_ {field key timezone :timezone}] :event} (:coeffects context)]    
      (assoc-in context [:coeffects :event 1 key] (minus field (hours (:diff timezone)))))))

;;validation interceptors

(def blank-title?
  (re-frame.core/->interceptor
    :id      :blank-title?
    :before  (blank-interceptor-before :title)))

(def blank-timezone?
  (re-frame.core/->interceptor
    :id      :blank-timezone?
    :before  (blank-interceptor-before :timezone)))

(def blank-start?
  (re-frame.core/->interceptor
    :id      :blank-start?
    :before  (blank-interceptor-before :start)))

(def blank-end?
  (re-frame.core/->interceptor
    :id      :blank-end?
    :before  (blank-interceptor-before :end)))

(def invalid-format-start?
  (re-frame.core/->interceptor
    :id      :invalid-format-start?
    :before  (inv-format-interceptor-before :start)))

(def invalid-format-end?
  (re-frame.core/->interceptor
    :id      :invalid-format-end?
    :before  (inv-format-interceptor-before :end)))

(def invalid-date-start?
  (re-frame.core/->interceptor
    :id      :invalid-date-start?
    :before  (inv-date-interceptor-before :start)))

(def invalid-date-end?
  (re-frame.core/->interceptor
    :id      :invalid-date-end?
    :before  (inv-date-interceptor-before :end)))

(def time-to-utc-start!
  (re-frame.core/->interceptor
    :id      :time-to-utc-start!
    :before  (time-to-utc! :start)))

(def time-to-utc-end!
  (re-frame.core/->interceptor
    :id      :time-to-utc-start!
    :before  (time-to-utc! :end)))

(def past-time-start?
  (re-frame.core/->interceptor
    :id      :past-time-start?
    :before  (fn [context]
               (let [{db :db [event {start :start}] :event error :error} (:coeffects context)]
                 (if (before? start (now))
                    (assoc-error-fiter-queue context "Start date-time could not be in past")
                    context)))))

(def end-before-start?
  (re-frame.core/->interceptor
    :id      :end-before-start?
    :before  (fn [context]
               (let [{db :db [event {start :start end :end}] :event error :error} (:coeffects context)]
                 (if (before? end start)
                    (assoc-error-fiter-queue context "End date-time could not be before start date-time")
                    context)))))

(def meeting-overlaps?
  (re-frame.core/->interceptor
    :id      :meeting-overlaps?
    :before  (fn [context]
               (let [{db :db [event {start :start end :end id :id}] :event error :error} (:coeffects context)]
                 (if (seq (filter #(and (overlaps?  (:start %)
                                                    (:end %)
                                                    start
                                                    end)
                                        (not= id (:id %)))
                              (vals (:meetings db))))
                    (assoc-error-fiter-queue context "Meeting overlaps with existing meetings")
                     context)))))

(def validation-interceptors 
  [ blank-title?
    blank-timezone?
    blank-start?
    invalid-format-start?
    invalid-date-start?
    time-to-utc-start!
    past-time-start?
    blank-end?
    invalid-format-end?
    invalid-date-end?
    time-to-utc-end!
    end-before-start?
    meeting-overlaps?])

;;init
(re-frame/reg-event-db
 ::initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(re-frame/reg-event-db
 ::set-active-meeting-id
 (fn [db [_ id]]
   (assoc db :active-meeting-id id)))

(re-frame/reg-event-db
 ::unset-active-meeting-id
 (fn [db [_ _]]
   (dissoc db :active-meeting-id)))

(re-frame/reg-event-db
 ::delete-meeting!
 (fn [db [_ id]]
   (update-in db [:meetings] dissoc id)))

(re-frame/reg-event-fx
 ::create-meeting!
 [validation-interceptors
  (re-frame/inject-cofx :meeting-id)]
 (fn [cofx [_ new-meeting]]
    (if-not (:error cofx)      
            {:db (->  (:db cofx)
                      (dissoc :error)
                      (update-in [:meetings] conj {(:meeting-id cofx) (conj new-meeting {:id (:meeting-id cofx)})}))
            :change-loc ""}
            {:db (assoc (:db cofx) :error (:error cofx))})))

(re-frame/reg-event-fx 
 ::set-hash!
 (fn [cofx [_ location]]
   {:change-loc location}))

(re-frame/reg-fx
 :change-loc
  (fn [location]
    (set! (.-hash js/window.location) location)))

(re-frame/reg-event-fx
 ::update-meeting!
 [validation-interceptors]
 (fn [cofx [_ meeting]]
    (if-not (:error cofx)      
            {:db  (-> (:db cofx)
                      (dissoc :error)
                      (assoc-in [:meetings (:active-meeting-id (:db cofx))] meeting))
             :change-loc ""}
            {:db (assoc (:db cofx) :error (:error cofx))})))

(re-frame/reg-event-db
 ::filter!
 (fn [db [_]]
   (assoc db :showing :filter)))

(re-frame/reg-event-db
 ::reset-filter!
 (fn [db [_]]
   (dissoc db :filter-date)))

(re-frame/reg-event-db
 ::set-filter-date!
 (fn [db [_ d]]
   (assoc db :filter-date d)))

(re-frame/reg-event-db
 ::timer-manage-status!
 (fn [db [_]]
    (let [started  (->> (:meetings db)
                        (filter #(and (= (:status (second %)) :planned) (before? (:start (second %)) (now))))
                        (map #(hash-map (first %) (assoc (second %) :status :inprocess)))
                        (into {}))
          done     (->> (merge (:meetings db) started)
                        (filter #(and (= (:status (second %)) :inprocess) (before? (:end (second %)) (now))))
                        (map #(hash-map (first %) (assoc (second %) :status :done)))
                        (into {}))]
      (assoc db :meetings (merge (:meetings db) started done)))))

(re-frame/reg-event-db
 ::timer-set-now!
 (fn [db [_]]
    (assoc db :now (now))))

(re-frame/reg-event-db
 ::unset-error!
 (fn [db [_ _]]
   (dissoc db :error)))
