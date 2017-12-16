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
    (do
      (re-frame/dispatch [::events/set-active-panel :home-panel])
      (re-frame/dispatch [::events/unset-active-meeting-id])))

  (defroute "/meetings/new" []
    (re-frame/dispatch [::events/set-active-panel :create-panel]))


  (defroute "/meetings/:id" [id]
    (do
      (re-frame/dispatch [::events/set-active-panel :view-panel])
      (re-frame/dispatch [::events/set-active-meeting-id (js/parseInt id)])))

  (defroute "/meetings/:id/edit" [id]
    (do
      (re-frame/dispatch [::events/set-active-panel :edit-panel])
      (re-frame/dispatch [::events/set-active-meeting-id (js/parseInt id)])))
  ;; --------------------
  (hook-browser-navigation!))
