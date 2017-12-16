(ns meeting.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))

(re-frame/reg-sub
  ::db
  (fn [db _]
   db))

(re-frame/reg-sub
  ::meetings
  (fn [db _]
   (vals (:meetings db))))

(re-frame/reg-sub
  ::meetings-raw
  (fn [db _]
   (:meetings db)))

(re-frame/reg-sub
 ::active-meeting-id
 (fn [db _]
   (:active-meeting-id db)))

(re-frame/reg-sub
  ::active-meeting
  (fn [_]
    [(re-frame/subscribe [::active-meeting-id])
    (re-frame/subscribe [::meetings-raw])])
  (fn [[id meetings]]
    (get meetings id)))