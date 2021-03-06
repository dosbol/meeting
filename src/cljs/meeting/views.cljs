(ns meeting.views
  (:require [re-frame.core :as re-frame]
            [reagent.core  :as reagent]
            [meeting.subs :as subs]
            [meeting.events :as events]
            [re-com.core :refer [input-text single-dropdown datepicker-dropdown button input-time]]
            [cljs-time.core    :refer [now days minus plus day-of-week before? hours local-date-time]]
            [cljs-time.coerce  :refer [to-local-date]]
            [cljs-time.format  :refer [formatter unparse parse]]))

(def timezones [{:id :moscow :label "Moscow" :diff 3}
                {:id :khabarovsk :label "Khabarovsk" :diff 10}
                {:id :greenwich :label "Greenwich" :diff 0}])                
(def datetime-formatter (formatter "dd.MM.yyyy hh:mm A"))

;; home page

(defn meeting-row
  [meeting]
  (fn [{:keys [id title start end status]}]
    [:tr 
      [:td id]
      [:td title]
      [:td (unparse datetime-formatter (local-date-time start))]
      [:td (unparse datetime-formatter (local-date-time end))]
      [:td status]
      [:td 
        [:a
          {:href (str "#/meetings/" id)} "view"]
        " | "
        (if (= status :planned)
          [:span 
            [:a
              {:href (str "#/meetings/" id "/edit")}"edit"]
            " | "])
        [:a
          {:on-click #(re-frame/dispatch [::events/delete-meeting! id]) :href "#"} "delete"]]]))

(defn meeting-table
  []
  (let [meetings @(re-frame/subscribe [::subs/visible-meetings])]
      (when (seq meetings)
        [:table.meeting
          [:thead
            [:tr [:th "ID"] [:th "Title"] [:th "Start(local time)"] [:th "End(local time)"] [:th "Status"] [:th "Actions"]]]
          [:tbody
           (for [meeting  meetings]
             ^{:key (:id meeting)} [meeting-row meeting])]])))

(defn home-panel 
  []
  (let [filter-date (reagent/atom @(re-frame/subscribe [::subs/filter-date]))]
    (fn [] 
      [:div "Hello. This is the Home Page."
        [:div [:a {:href "#/meetings/new"} "create meeting"]]
        
          [datepicker-dropdown
            :model         filter-date
            :format        "dd.MM.yyyy"
            :on-change     (fn [d] (do
                                        (re-frame/dispatch [::events/set-filter-date! d])
                                        (reset! filter-date d)))]
          [button
            :label            "clear filter"
            :on-click          #(do (reset! filter-date nil) (re-frame/dispatch [::events/reset-filter!]))]
          [meeting-table]])))

;; create

(defn create-panel 
  []
  (let [new-meeting (reagent/atom {:status :planned})]
    (fn [] 
      [:div "This is the Meeting Page."
        [:div [:a {:href "#/"} "go to Home Page"]]
        [:div {:style {:font-weight :bold}} "Template for copy-paste: " (unparse datetime-formatter (plus (now) (days 1)))]
        [:div {:style {:color :red}} @(re-frame/subscribe [::subs/error])]
        [:form
          [:table.meeting
            [:tbody
              [:tr
                [:td "Title"]
                [:td
                  [input-text
                    :model        ""
                    :placeholder  "title"
                    :on-change    #(swap! new-meeting assoc :title %)]]]
              [:tr
                [:td "Timezone"]
                [:td    
                  [single-dropdown
                    :choices     timezones
                    :model       nil
                    :on-change   (fn [id] (swap! new-meeting assoc :timezone (some #(if (= id (:id %)) %) timezones)))
                    :placeholder "choose timezone"]]]
              [:tr
                [:td "Start datetime"]
                [:td    
                  [input-text
                    :model        ""
                    :placeholder  "dd.MM.yyyy hh:mm A"
                    :change-on-blur? true
                    :on-change    #(swap! new-meeting assoc :start %)]]]
              [:tr
                [:td "End datetime"]
                [:td
                  [input-text
                    :model        ""
                    :placeholder  "dd.MM.yyyy hh:mm A"
                    :change-on-blur? true
                    :on-change    #(swap! new-meeting assoc :end %)]]]
              [:tr
                [:td]
                [:td
                  [:button {:type :button
                            :on-click #(re-frame/dispatch [::events/create-meeting! @new-meeting])}
                          "create meeting"]]]]]]])))

;; view panel

(defn view-panel 
  []
  (let [meeting @(re-frame/subscribe [::subs/active-meeting])]
    (fn [] 
      [:div "This is the view Page."
        [:div [:a {:href "#/"} "go to Home Page"]]
          [:table.meeting
            [:thead
              [:tr 
                [:th "ID"]
                [:th "Title"]
                [:th "timezone"]
                [:th (str "Begin(" (:label (:timezone meeting)) " time)")]
                [:th (str "End("(:label (:timezone meeting)) " time)")]]]
            [:tbody
              [:tr [:td (:id meeting)]
                  [:td (:title meeting)]
                  [:td (:label (:timezone meeting))]
                  [:td (unparse datetime-formatter (:start meeting))]
                  [:td (unparse datetime-formatter (:end meeting))]]]]])))

;; edit panel

(defn edit-panel 
  []
  (let [active-meeting @(re-frame/subscribe [::subs/active-meeting])
        meeting (reagent/atom (merge active-meeting {:start (unparse datetime-formatter (:start active-meeting))
                                                     :end (unparse datetime-formatter (:end active-meeting))}))]
    (fn [] 
      [:div "This is the edit Page."
        [:div [:a {:href "#/"} "go to Home Page"]]
        [:div {:style {:color :red}} @(re-frame/subscribe [::subs/error])]
        [:form
        [:table.meeting
          [:tbody
            [:tr
              [:td "Title"]
              [:td  
                [input-text
                  :model        (:title @meeting)
                  :placeholder  "title"
                  :on-change    #(swap! meeting assoc :title %)]]]
            [:tr
              [:td "Timezone"]
              [:td  
                [single-dropdown
                  :choices     timezones
                  :model       (:id (:timezone @meeting))
                  :on-change   (fn [id] (swap! meeting assoc :timezone (some #(if (= id (:id %)) %) timezones)))
                  :placeholder "choose timezone"]]]
            [:tr
              [:td "Start datetime"]
              [:td  
                [input-text
                  :model        (:start @meeting)
                  :placeholder  "dd.MM.yyyy hh:mm A"
                  :change-on-blur? true
                  :on-change    #(swap! meeting assoc :start %)]]]
            [:tr
              [:td "End datetime"]
              [:td  
                [input-text
                  :model        (:end @meeting)
                  :placeholder  "dd.MM.yyyy hh:mm A"
                  :change-on-blur? true
                  :on-change    #(swap! meeting assoc :end %)]]]
            [:tr
              [:td]
              [:td  
                [:button {:type :button
                          :on-click #(re-frame/dispatch [::events/update-meeting! @meeting])}
                      "save"]]]]]]])))

;; main

(defn- panels 
  [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :create-panel [create-panel]
    :view-panel [view-panel]
    :edit-panel [edit-panel]
    [:div]))

(defn show-panel 
  [panel-name]
  [panels panel-name])

(defn main-panel 
  []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    (fn [] 
      [:div
        [show-panel @active-panel]
        [:h4 "Database"]
          [:pre (with-out-str (cljs.pprint/pprint @(re-frame/subscribe [::subs/db])))]])))
