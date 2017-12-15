(ns meeting.views
  (:require [re-frame.core :as re-frame]
            [reagent.core  :as reagent]
            [meeting.subs :as subs]
            [meeting.events :as events]
            ))

;; home page

(defn meeting-item
  []
  (fn [{:keys [id title]}]
    [:li 
      [:div.view
        [:label
          title]
        [:button
          {:on-click #(re-frame/dispatch [::events/delete-meeting! id])} "delete"]]]))

(defn meeting-list
  []
  (let [meetings @(re-frame/subscribe [::subs/meetings])]
        [:ul#meeting-list
          (for [meeting  meetings]
            ^{:key (:id meeting)} [meeting-item meeting])]))

(defn home-panel []
    [:div (str "Hello. This is the Home Page.")
     [:div [:a {:href "#/meetings"} "create meeting"]]
     (when (seq @(re-frame/subscribe [::subs/meetings]))
      [meeting-list])])


;; meeting page

(defn input-title
  [{:keys [props]}]
  (let [inner (reagent/atom "")]
    (fn [] [:input (merge props
                          {:type        "text"
                           :value       @inner
                           :on-change   #(reset! inner (-> % .-target .-value))})])))

(defn meeting-panel []
    [:div "This is the Meeting Page."
    [:div [:a {:href "#/"} "go to Home Page"]]
    [:form
      [input-title {:props {:id "titlecreate"}}]
      [:button {:type :button
                :on-click #(do (re-frame/dispatch 
                  [::events/create-meeting! {:title (.-value (.getElementById js/document "titlecreate"))}])
                  (re-frame/dispatch [::events/set-hash! ""]))}
              "create meeting"]]])


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
