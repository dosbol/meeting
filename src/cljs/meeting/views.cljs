(ns meeting.views
  (:require [re-frame.core :as re-frame]
            [reagent.core  :as reagent]
            [meeting.subs :as subs]
            [meeting.events :as events]
            ))

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

(defn input-title
  [{:keys [props, title]}]
  (let [inner (reagent/atom title)]
    (fn [] [:input (merge props
                          {:type        "text"
                           :value       @inner
                           :on-change   #(reset! inner (-> % .-target .-value))})])))

(defn create-panel []
    [:div "This is the Meeting Page."
    [:div [:a {:href "#/"} "go to Home Page"]]
    [:form
      [input-title {:props {:id "titlecreate"} :title ""}]
      [:button {:type :button
                :on-click #(do (re-frame/dispatch 
                  [::events/create-meeting! {:title (.-value (.getElementById js/document "titlecreate"))}])
                  (re-frame/dispatch [::events/set-hash! ""]))}
              "create meeting"]]])

;; view panel

(defn view-panel []
    [:div "This is the view Page."
    [:div [:a {:href "#/"} "go to Home Page"]]
    (let [meeting @(re-frame/subscribe [::subs/active-meeting])]
        [:table
          [:thead
            [:tr [:th "ID"] [:th "Title"]]]
          [:tbody
            [:tr [:td (:id meeting)] [:td (:title meeting)]]]])])

;; edit panel

(defn edit-panel []
    [:div "This is the edit Page."
    [:div [:a {:href "#/"} "go to Home Page"]]
    [:form
      [input-title {:props {:id "titleedit"} :title (:title @(re-frame/subscribe [::subs/active-meeting]))}]
      [:button {:type :button
                :on-click #(do (re-frame/dispatch 
                  [::events/update-meeting! {:title (.-value (.getElementById js/document "titleedit"))}])
                  (re-frame/dispatch [::events/set-hash! ""]))}
              "save"]]])

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
