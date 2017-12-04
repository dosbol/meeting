(ns meeting.views
  (:require [re-frame.core :as re-frame]
            [meeting.subs :as subs]
            ))


;; home

(defn home-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div (str "Hello. This is the Home Page.")
     [:div [:a {:href "#/meetings"} "test #/meetings"]]
     [:div [:a {:href "#/meetings/2"} "test #/meetings/2"]]]))


;; meeting

(defn meeting-panel []
  (let [id (re-frame/subscribe [::subs/id])]
    [:div "This is the Meeting Page."
    [:div [:a {:href "#/"} "go to Home Page"]]]))


;; main

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :meeting-panel [meeting-panel]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [show-panel @active-panel]))
