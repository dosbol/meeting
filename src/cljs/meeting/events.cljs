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

;;validation interceptors

(def blank-title?
  (re-frame.core/->interceptor
    :id      :blank-title?
    :before  (fn [context]
               (let [{db :db [event {title :title}] :event} (:coeffects context)]
                 (if (string/blank? title)
                     (assoc-in context [:coeffects :error] "Title required")
                     context)))))

(def blank-start?
  (re-frame.core/->interceptor
    :id      :blank-start?
    :before  (fn [context]
               (let [{db :db [event {start :start}] :event error :error} (:coeffects context)]
                 (if (and (not error) (string/blank? start))
                     (assoc-in context [:coeffects :error] "Start date-time required")
                     context)))))

(def blank-end?
  (re-frame.core/->interceptor
    :id      :blank-end?
    :before  (fn [context]
               (let [{db :db [event {end :end}] :event error :error} (:coeffects context)]
                 (if (and (not error) (string/blank? end))
                     (assoc-in context [:coeffects :error] "End date-time required")
                     context)))))

(def invalid-format-start?
  (re-frame.core/->interceptor
    :id      :invalid-format-start?
    :before  (fn [context]
               (let [{db :db [event {start :start}] :event error :error} (:coeffects context)]
                 (if (and (not error)
                          (not (re-matches #"\d{2}\.\d{2}\.\d{4}\s+\d{2}:\d{2}\s+(AM|PM)" start)))
                     (assoc-in context [:coeffects :error] "Start date-time format is invalid(should be dd.MM.yyyy hh:mm AM)")
                     context)))))

(def invalid-format-end?
  (re-frame.core/->interceptor
    :id      :invalid-format-end?
    :before  (fn [context]
               (let [{db :db [event {end :end}] :event error :error} (:coeffects context)]
                 (if (and (not error)
                          (not (re-matches #"\d{2}\.\d{2}\.\d{4}\s+\d{2}:\d{2}\s+(AM|PM)" end)))
                     (assoc-in context [:coeffects :error] "End date-time format is invalid(should be dd.MM.yyyy hh:mm AM)")
                     context)))))

(def invalid-date-start?
  (re-frame.core/->interceptor
    :id      :invalid-date-start?
    :before  (fn [context]
               (let [{db :db [event {start :start}] :event error :error} (:coeffects context)]
                 (if (not error)
                     (try (do (parse datetime-formatter start) context)
                          (catch :default e 
                            (assoc-in context [:coeffects :error] "Start date-time is not valid")))
                     context)))))

(def invalid-date-end?
  (re-frame.core/->interceptor
    :id      :invalid-date-end?
    :before  (fn [context]
               (let [{db :db [event {end :end}] :event error :error} (:coeffects context)]
                 (if (not error)
                     (try (do (parse datetime-formatter end) context)
                          (catch :default e 
                            (assoc-in context [:coeffects :error] "End date-time is not valid")))
                     context)))))

(def past-time-start?
  (re-frame.core/->interceptor
    :id      :past-time-start?
    :before  (fn [context]
               (let [{db :db [event {start :start}] :event error :error} (:coeffects context)]
                 (if (and (not error)
                          (before? (parse datetime-formatter start) (now)))
                            (assoc-in context [:coeffects :error] "Start date-time could not be in past")
                     context)))))

(def end-before-start?
  (re-frame.core/->interceptor
    :id      :end-before-start?
    :before  (fn [context]
               (let [{db :db [event {start :start end :end}] :event error :error} (:coeffects context)]
                 (if (and (not error)
                          (before? (parse datetime-formatter end) (parse datetime-formatter start)))
                            (assoc-in context [:coeffects :error] "End date-time could not be before start date-time")
                     context)))))

(def meeting-overlaps?
  (re-frame.core/->interceptor
    :id      :meeting-overlaps?
    :before  (fn [context]
               (let [{db :db [event {start :start end :end}] :event error :error} (:coeffects context)]
                 (if (and (not error)
                          (< 0 (count (filter #(overlaps? (:start %) (:end %)
                                                     (parse datetime-formatter start)
                                                     (parse datetime-formatter end)) (vals (:meetings db))))))
                            (assoc-in context [:coeffects :error] "Meeting overlaps with existing meetings")
                     context)))))

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

 [blank-title?
  blank-start?
  invalid-format-start?
  invalid-date-start?
  past-time-start?
  blank-end?
  invalid-format-end?
  invalid-date-end?
  end-before-start?
  meeting-overlaps?

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

(re-frame/reg-event-db
 ::update-meeting!
 (fn [db [_ meeting]]
   (update-in db [:meetings (:active-meeting-id db)] merge meeting)))

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
