(ns meeting.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [meeting.events :as events]
            [meeting.routes :as routes]
            [meeting.views :as views]
            [meeting.config :as config]))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))

(defn dispatch-timer-event []
  (do 
    (re-frame/dispatch [::events/timer-manage-status!])
    (re-frame/dispatch [::events/timer-set-now!])))

(defonce do-timer (js/setInterval dispatch-timer-event 1000))