(ns meeting.views
  (:require [re-frame.core :as re-frame]
            [reagent.core  :as reagent]
            [meeting.subs :as subs]
            [meeting.events :as events]
            [re-com.core :refer [input-text single-dropdown datepicker-dropdown button input-time]]
            [cljs-time.core    :refer [now days minus plus day-of-week before?]]
            [cljs-time.coerce  :refer [to-local-date]]
            [cljs-time.format  :refer [formatter unparse parse]]))

(def skeleton {:title "" :status :planned})
(def timezones [{:id :moscow :label "Moscow"}
                {:id :khabarovsk :label "Khabarovsk"}
                {:id :greenwich :label "Greenwich"}])

(defonce new-meeting (reagent/atom skeleton))
(defonce active-meeting (reagent/atom skeleton))

;; home page

(defn meeting-row
  []
  (fn [{:keys [id title start status]}]
    [:tr 
      [:td id]
      [:td title]
      [:td (unparse (formatter "dd.MM.yyyy hh:mm A") start)]
      [:td status]
      [:td 
        [:a
          {:href (str "#/meetings/" id)} "view"]
        " | "
        (if (= status :planned)
          [:span 
            [:a
              {:href (str "#/meetings/" id "/edit")} "edit"]
            " | "])
        [:a
          {:on-click #(re-frame/dispatch [::events/delete-meeting! id]) :href "#"} "delete"]]]))

(defn meeting-table
  []
  (let [meetings @(re-frame/subscribe [::subs/visible-meetings])]
    (when (seq meetings)
        [:table
          [:thead
            [:tr [:th "ID"] [:th "Title"] [:th "Start"] [:th "Status"] [:th "Actions"]]]
          [:tbody
           (for [meeting  meetings]
             ^{:key (:id meeting)} [meeting-row meeting])]])))

(defn home-panel []
    (let [filter-date (reagent/atom nil)]
    [:div (str "Hello. This is the Home Page.")
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
      [meeting-table]]))

;; create

(defn create-panel []
  (do 
    (reset! new-meeting skeleton)
    (let [begin-date (reagent/atom nil) 
          end-date (reagent/atom nil)
          begin-time  (reagent/atom 0)
          end-time  (reagent/atom 0)]
      [:div "This is the Meeting Page."
      [:div [:a {:href "#/"} "go to Home Page"]]
      [:form
        [input-text
          :model        ""
          :placeholder  "title"
          :on-change    #(swap! new-meeting assoc :title %)]
        [single-dropdown
          :choices     timezones
          :model       nil
          :on-change   #(swap! new-meeting assoc :timezone %)
          :placeholder "choose timezone"]
        [:br]
        [input-text
          :model        ""
          :placeholder  "dd.MM.yyyy hh:mm A"
          :change-on-blur? true
          :on-change    #(swap! new-meeting assoc :start (parse (formatter "dd.MM.yyyy hh:mm A") %))]
        ; [datepicker-dropdown
        ;   :model        begin-date
        ;   :format        "dd.MM.yyyy"
        ;   :on-change     (fn [d] (do (swap! new-meeting assoc :begin-date d)(reset! begin-date d)))]
        ; [input-time
        ;   :model        begin-time
        ;   :show-icon?   true
        ;   :on-change    (fn [t] (do (swap! new-meeting assoc :begin-time t)(reset! begin-time t)))]
        [input-text
          :model        ""
          :placeholder  "dd.MM.yyyy hh:mm A"
          :change-on-blur? true
          :on-change    #(swap! new-meeting assoc :end (parse (formatter "dd.MM.yyyy hh:mm A") %))]
        ; [datepicker-dropdown
        ;   :model        end-date
        ;   :format        "dd.MM.yyyy"
        ;   :on-change     (fn [d] (do (swap! new-meeting assoc :end-date d)(reset! end-date d)))]
        ; [input-time
        ;   :model        end-time
        ;   :show-icon?   true
        ;   :on-change    (fn [t] (do (swap! new-meeting assoc :end-time t)(reset! end-time t)))]
        [:br]
        [:button {:type :button
                  :on-click #(do (re-frame/dispatch 
                    [::events/create-meeting! @new-meeting])
                    (re-frame/dispatch [::events/set-hash! ""]))}
                "create meeting"]]])))

;; view panel

(defn view-panel []
    [:div "This is the view Page."
    [:div [:a {:href "#/"} "go to Home Page"]]
    (let [meeting @(re-frame/subscribe [::subs/active-meeting])]
        [:table
          [:thead
            [:tr [:th "ID"]
            [:th "Title"]
            [:th "timezone"]
            [:th "Begin"]
            [:th "End"]]]
          [:tbody
            [:tr [:td (:id meeting)]
                 [:td (:title meeting)]
                 [:td (:timezone meeting)]
                 [:td (unparse (formatter "dd.MM.yyyy hh:mm A") (:start meeting))]
                 [:td (unparse (formatter "dd.MM.yyyy hh:mm A") (:end meeting))]]]])])

;; edit panel

(defn edit-panel []
  (do
    (reset! active-meeting @(re-frame/subscribe [::subs/active-meeting]))
    (fn []
      (let [start (reagent/atom (unparse (formatter "dd.MM.yyyy hh:mm A") (:start @active-meeting)))
            end (reagent/atom (unparse (formatter "dd.MM.yyyy hh:mm A") (:end @active-meeting)))]
        [:div "This is the edit Page."
        [:div [:a {:href "#/"} "go to Home Page"]]
        [:form
          [input-text
            :model        (:title @active-meeting)
            :placeholder  "title"
            :on-change    #(swap! active-meeting assoc :title %)]
          [single-dropdown
            :choices     timezones
            :model       (:timezone @active-meeting)
            :on-change   #(swap! active-meeting assoc :timezone %)
            :placeholder "choose timezone"]
          [:br]
          [input-text
            :model        start
            :placeholder  "dd.MM.yyyy hh:mm A"
            :change-on-blur? true
            :on-change    #(swap! active-meeting assoc :start (parse (formatter "dd.MM.yyyy hh:mm A") %))]
          ; [datepicker-dropdown
          ;   :model        begin-date
          ;   :format        "dd.MM.yyyy"
          ;   :on-change     (fn [d] (do (swap! active-meeting assoc :begin-date d)(reset! begin-date d)))]
          ; [input-time
          ;   :model        begin-time
          ;   :show-icon?   true
          ;   :on-change    (fn [t] (do (swap! active-meeting assoc :begin-time t)(reset! begin-time t)))]
          [input-text
            :model        end
            :placeholder  "dd.MM.yyyy hh:mm A"
            :change-on-blur? true
            :on-change    #(swap! active-meeting assoc :end (parse (formatter "dd.MM.yyyy hh:mm A") %))]
          ; [datepicker-dropdown
          ;   :model        end-date
          ;   :format        "dd.MM.yyyy"
          ;   :on-change     (fn [d] (do (swap! active-meeting assoc :end-date d)(reset! end-date d)))]
          ; [input-time
          ;   :model        end-time
          ;   :show-icon?   true
          ;   :on-change    (fn [t] (do (swap! active-meeting assoc :end-time t)(reset! end-time t)))]
          [:br]
          [:button {:type :button
                    :on-click #(do (re-frame/dispatch 
                    [::events/update-meeting! @active-meeting])
                    (re-frame/dispatch [::events/set-hash! ""]))}
                "save"]]]))))

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
