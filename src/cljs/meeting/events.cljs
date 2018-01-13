(ns meeting.events
  (:require [re-frame.core :as re-frame]
            [meeting.db :as db]
            [cljs-time.core    :refer [now before?]]))

;;helper
(defonce last-id (atom 2))

(re-frame/reg-cofx
  :meeting-id
  (fn [cofx _]
    (assoc cofx :meeting-id (swap! last-id inc))))

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
 [(re-frame/inject-cofx :meeting-id)]
 (fn [cofx [_ new-meeting]]      
   {:db (update-in (:db cofx) [:meetings] conj {(:meeting-id cofx) (conj new-meeting {:id (:meeting-id cofx)})})}))

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