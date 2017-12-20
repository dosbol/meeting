(ns meeting.views
  (:require [re-frame.core :as re-frame]
            [reagent.core  :as reagent]
            [meeting.subs :as subs]
            [meeting.events :as events]
            ))

;;util
(defn cons-meeting []
  {:title (.-value (.getElementById js/document "title"))
   :begin (.-value (.getElementById js/document "begin"))
   :end (.-value (.getElementById js/document "end"))
   :timezone (.-value (.getElementById js/document "timezone"))})

;; home page

(defn meeting-row
  []
  (fn [{:keys [id title]}]
    [:tr 
      [:td id]
      [:td title]
      [:td 
        [:a
          {:href (str "#/meetings/" id)} "view"]
        " | "
        [:a
          {:href (str "#/meetings/" id "/edit")} "edit"]
        " | "
        [:a
          {:on-click #(re-frame/dispatch [::events/delete-meeting! id]) :href "#"} "delete"]]]))

(defn meeting-table
  []
  (let [meetings @(re-frame/subscribe [::subs/meetings])]
        [:table
          [:thead
            [:tr [:th "ID"] [:th "Title"] [:th "Actions"]]]
          [:tbody
           (for [meeting  meetings]
             ^{:key (:id meeting)} [meeting-row meeting])]]))

(defn home-panel []
    [:div (str "Hello. This is the Home Page.")
     [:div [:a {:href "#/meetings/new"} "create meeting"]]
     (when (seq @(re-frame/subscribe [::subs/meetings]))
      [meeting-table])])


;; create panel

(defn input-text
  [{:keys [props, text]}]
  (let [inner (reagent/atom text) id (:id props)]
    (fn [] 
      [:div
        [:label {:for id} id " : "]
        [:input (merge props
                          {:type        "text"
                           :name        id
                           :value       @inner
                           :on-change   #(reset! inner (-> % .-target .-value))})]])))
(defn input-select
  [{:keys [props, selected]}]
  (let [inner (reagent/atom selected) id (:id props)]
    (fn [] 
      [:div
        [:label {:for id} id " : "]
        [:select (merge props {:value @inner :name id :on-change #(reset! inner (-> % .-target .-value))})
          [:option {:value ""} "choose timezone"]
          [:option {:value :moscow} "Moscow"]
          [:option {:value :khabarovsk} "Khabarovsk"]
          [:option {:value :greenwich} "Greenwich"]]])))

(defn create-panel []
    [:div "This is the Meeting Page."
    [:div [:a {:href "#/"} "go to Home Page"]]
    [:form
      [input-text {:props {:id "title"}}]
      [input-text {:props {:id "begin"}}]
      [input-text {:props {:id "end"}}]
      [input-select {:props {:id "timezone"}:selected ""}]
      [:button {:type :button
                :on-click #(do (re-frame/dispatch 
                  [::events/create-meeting! (cons-meeting)])
                  (re-frame/dispatch [::events/set-hash! ""]))}
              "create meeting"]]])

;; view panel

(defn view-panel []
    [:div "This is the view Page."
    [:div [:a {:href "#/"} "go to Home Page"]]
    (let [meeting @(re-frame/subscribe [::subs/active-meeting])]
        [:table
          [:thead
            [:tr [:th "ID"] [:th "Title"] [:th "timezone"] [:th "Begin"] [:th "End"]]]
          [:tbody
            [:tr [:td (:id meeting)] [:td (:title meeting)] [:td (:timezone meeting)]
                 [:td (:begin meeting)] [:td (:end meeting)]]]])])

;; edit panel

(defn edit-panel []
  (let [meeting @(re-frame/subscribe [::subs/active-meeting])]
    (fn []
      [:div "This is the edit Page."
      [:div [:a {:href "#/"} "go to Home Page"]]
      [:form
        [input-text {:props {:id "title"} :text (:title meeting)}]
        [input-text {:props {:id "begin"} :text (:begin meeting)}]
        [input-text {:props {:id "end"} :text (:end meeting)}]
        [input-select {:props {:id "timezone"} :selected (:timezone meeting)}]
        [:button {:type :button
                  :on-click #(do (re-frame/dispatch 
                  [::events/update-meeting! (cons-meeting)])
                  (re-frame/dispatch [::events/set-hash! ""]))}
              "save"]]])))

;; main

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :create-panel [create-panel]
    :view-panel [view-panel]
    :edit-panel [edit-panel]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [:div
      [show-panel @active-panel]
      [:h4 "Database"]
        [:pre (with-out-str (cljs.pprint/pprint @(re-frame/subscribe [::subs/db])))]]))
