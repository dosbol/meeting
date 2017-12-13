(ns meeting.events
  (:require [re-frame.core :as re-frame]
            [meeting.db :as db]))

;;helper
(defonce last-id (atom 0))

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
 (fn [db [_ id]]      ;;todo: filter meetings
   db))

(re-frame/reg-event-fx
 ::create-meeting!
 [(re-frame/inject-cofx :meeting-id)]
 (fn [cofx [_ new-meeting]]      
   {:db (update-in (:db cofx) [:meetings] conj {(:meeting-id cofx) new-meeting})}))

(re-frame/reg-event-fx 
 ::set-hash!
 (fn [cofx [_ location]]
   {:change-loc location}))

(re-frame/reg-fx
 :change-loc
  (fn [location]
    (set! (.-hash js/window.location) location)))