(ns meeting.db
  (:require [cljs.spec.alpha :as s]
            [cljs-time.core  :refer [minutes from-now floor minute]]))

(s/def ::id int?)
(s/def ::title string?)
(s/def ::status  #{:planned :inprocess :done})
(s/def ::begin int?)                                        ;;int for now
(s/def ::end int?)                                          ;;int for now
(s/def ::meeting (s/keys :req-un [::id ::title ::status ::begin ::end]))
(s/def ::meetings (s/and                                       
                 (s/map-of ::id ::meeting)                     
                 #(instance? PersistentTreeMap %)           
                 ))
(s/def ::showing #{:all :filter})
(s/def ::db (s/keys :req-un [::meetings ::showing]))

(def default-db
  {:meetings {1
                {:title "meeting with mr. X"
                :status :planned
                :timezone :greenwich
                :start (floor (-> 2 minutes from-now) minute)
                :end (floor (-> 3 minutes from-now) minute)
                :id 1}
              2
                {:title "meeting with mr. Y"
                :status :planned
                :timezone :greenwich
                :start (floor (-> 4 minutes from-now) minute)
                :end (floor (-> 5 minutes from-now) minute)
                :id 2}}})
