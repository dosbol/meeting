(ns meeting.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.History)
  (:require [secretary.core :as secretary]
            [goog.events :as gevents]
            [goog.history.EventType :as EventType]
            [re-frame.core :as re-frame]
            [meeting.events :as events]
            ))

(defn hook-browser-navigation! []
  (doto (History.)
    (gevents/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  (secretary/set-config! :prefix "#")
  ;; --------------------
  ;; define routes here
  (defroute "/" []
    (re-frame/dispatch [::events/set-active-panel :home-panel]))

  (defroute "/meetings" []
    (re-frame/dispatch [::events/set-active-panel :meeting-panel]))


  (defroute "/meetings/:id" [id]
    (do
      (re-frame/dispatch [::events/set-active-panel :meeting-panel])
      (re-frame/dispatch [::events/set-active-meeting-id id])))

  ;; --------------------
  (hook-browser-navigation!))
