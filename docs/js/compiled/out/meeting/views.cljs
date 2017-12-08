(ns meeting.views
  (:require [re-frame.core :as re-frame]
            [meeting.subs :as subs]
            ))


;; home

(defn home-panel []
    [:div (str "Hello. This is the Home Page.")
     [:div [:a {:href "#/meetings"} "test #/meetings"]]
     [:div [:a {:href "#/meetings/2"} "test #/meetings/2"]]])


;; meeting

(defn meeting-panel []
    [:div "This is the Meeting Page."
    [:div [:a {:href "#/"} "go to Home Page"]]])


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
    [:div
      [show-panel @active-panel]
      [:h4 "Database"]
        [:pre (with-out-str (cljs.pprint/pprint @(re-frame/subscribe [::subs/db])))]]))
