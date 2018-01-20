(ns meeting.subs
  (:require [re-frame.core :as re-frame]
            [cljs-time.core    :refer [within? after? before? equal? plus hours local-date-time] :as ct]))

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
    (let [m (get meetings id)]
      (if id 
        (assoc-in 
          (assoc-in m [:start] (plus (:start m) (hours (:diff (:timezone m)))))
          [:end]
          (plus (:end m) (hours (:diff (:timezone m)))))))))

(re-frame/reg-sub
  ::showing
  (fn [db _]
   (:showing db)))

(re-frame/reg-sub
  ::filter-date
  (fn [db _]
   (:filter-date db)))

(re-frame/reg-sub
  ::visible-meetings
  (fn [_]
    [(re-frame/subscribe [::meetings])
    (re-frame/subscribe [::filter-date])])
  (fn [[meetings d]]
    (if (nil? d)
        meetings
        (->>
          meetings
          (map #(update-in % [:start] local-date-time))
          (map #(update-in % [:end] local-date-time))
          (filter #(or (within? % d) 
                       (equal? (ct/date-time (ct/year (:start %))
                                              (ct/month (:start %))
                                              (ct/day (:start %))) d)))))))

(re-frame/reg-sub
  ::error
  (fn [db _]
   (:error db)))