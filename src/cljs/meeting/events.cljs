(ns meeting.events
  (:require [re-frame.core :as re-frame]
            [meeting.db :as db]
            [cljs-time.core    :refer [now before? date? overlaps?]]
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

(defn filter-queue [f q] (apply conj #queue[] (vec (filter f q))))
(defn not-in? [coll elem] (not (contains? (set coll) elem)))
(defn not-in-validation-interceptors? [elem] (not-in? validation-interceptors elem))
;;validation interceptors

(def blank-title?
  (re-frame.core/->interceptor
    :id      :blank-title?
    :before  (fn [context]
               (let [{db :db [event {title :title}] :event} (:coeffects context)]
                 (if (string/blank? title)
                     (update-in (assoc-in context [:coeffects :error] "Title required")       ;; assoc error message
                                [:queue] #(filter-queue not-in-validation-interceptors? %))   ;; skip other validation-interceptors          
                     context)))))

(def blank-start?
  (re-frame.core/->interceptor
    :id      :blank-start?
    :before  (fn [context]
               (let [{db :db [event {start :start}] :event error :error} (:coeffects context)]
                 (if (string/blank? start)
                     (update-in (assoc-in context [:coeffects :error] "Start date-time required")
                                [:queue] #(filter-queue not-in-validation-interceptors? %))
                     context)))))

(def blank-end?
  (re-frame.core/->interceptor
    :id      :blank-end?
    :before  (fn [context]
               (let [{db :db [event {end :end}] :event error :error} (:coeffects context)]
                 (if (string/blank? end)
                     (update-in (assoc-in context [:coeffects :error] "End date-time required")
                                [:queue] #(filter-queue not-in-validation-interceptors? %))
                     context)))))

(def invalid-format-start?
  (re-frame.core/->interceptor
    :id      :invalid-format-start?
    :before  (fn [context]
               (let [{db :db [event {start :start}] :event error :error} (:coeffects context)]
                 (if (not (re-matches #"\d{2}\.\d{2}\.\d{4}\s+\d{2}:\d{2}\s+(AM|PM)" start))
                     (update-in (assoc-in context [:coeffects :error] "Start date-time format is invalid(should be dd.MM.yyyy hh:mm AM)")
                                [:queue] #(filter-queue not-in-validation-interceptors? %))
                     context)))))

(def invalid-format-end?
  (re-frame.core/->interceptor
    :id      :invalid-format-end?
    :before  (fn [context]
               (let [{db :db [event {end :end}] :event error :error} (:coeffects context)]
                 (if (not (re-matches #"\d{2}\.\d{2}\.\d{4}\s+\d{2}:\d{2}\s+(AM|PM)" end))
                     (update-in (assoc-in context [:coeffects :error] "End date-time format is invalid(should be dd.MM.yyyy hh:mm AM)")
                                [:queue] #(filter-queue not-in-validation-interceptors? %))
                     context)))))

(def invalid-date-start?
  (re-frame.core/->interceptor
    :id      :invalid-date-start?
    :before  (fn [context]
               (let [{db :db [event {start :start}] :event error :error} (:coeffects context)]
                 (try (do (parse datetime-formatter start) context)
                    (catch :default e 
                      (update-in (assoc-in context [:coeffects :error] "Start date-time is not valid")
                                  [:queue] #(filter-queue not-in-validation-interceptors? %))))))))

(def invalid-date-end?
  (re-frame.core/->interceptor
    :id      :invalid-date-end?
    :before  (fn [context]
               (let [{db :db [event {end :end}] :event error :error} (:coeffects context)]
                 (try (do (parse datetime-formatter end) context)
                    (catch :default e 
                      (update-in (assoc-in context [:coeffects :error] "End date-time is not valid")
                                  [:queue] #(filter-queue not-in-validation-interceptors? %))))))))

(def past-time-start?
  (re-frame.core/->interceptor
    :id      :past-time-start?
    :before  (fn [context]
               (let [{db :db [event {start :start}] :event error :error} (:coeffects context)]
                 (if (before? (parse datetime-formatter start) (now))
                     (update-in (assoc-in context [:coeffects :error] "Start date-time could not be in past")
                                [:queue] #(filter-queue not-in-validation-interceptors? %))
                     context)))))

(def end-before-start?
  (re-frame.core/->interceptor
    :id      :end-before-start?
    :before  (fn [context]
               (let [{db :db [event {start :start end :end}] :event error :error} (:coeffects context)]
                 (if (before? (parse datetime-formatter end) (parse datetime-formatter start))
                      (update-in (assoc-in context [:coeffects :error] "End date-time could not be before start date-time")
                                  [:queue] #(filter-queue not-in-validation-interceptors? %))
                     context)))))

(def meeting-overlaps?
  (re-frame.core/->interceptor
    :id      :meeting-overlaps?
    :before  (fn [context]
               (let [{db :db [event {start :start end :end id :id}] :event error :error} (:coeffects context)]
                 (if (seq (filter #(and (overlaps? (:start %) (:end %)
                                                     (parse datetime-formatter start)
                                                     (parse datetime-formatter end))
                                        (not= id (:id %)))
                              (vals (:meetings db))))
                    (assoc-in context [:coeffects :error] "Meeting overlaps with existing meetings")
                     context)))))

(def validation-interceptors 
  [ blank-title?
    blank-start?
    invalid-format-start?
    invalid-date-start?
    past-time-start?
    blank-end?
    invalid-format-end?
    invalid-date-end?
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
            {:db (update-in (dissoc (:db cofx) :error) [:meetings] conj 
              {(:meeting-id cofx) 
                (merge (conj new-meeting {:id (:meeting-id cofx)}) 
                  {:start (parse datetime-formatter (:start new-meeting))
                   :end (parse datetime-formatter (:end new-meeting))})})
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
            {:db (update-in (dissoc (:db cofx) :error) [:meetings (:active-meeting-id (:db cofx))] 
                  merge 
                  (merge meeting {:start (parse datetime-formatter (:start meeting))
                                  :end (parse datetime-formatter (:end meeting))}))
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
