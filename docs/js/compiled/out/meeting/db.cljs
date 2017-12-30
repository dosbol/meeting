(ns meeting.db
  (:require [cljs.spec.alpha :as s]))

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
  {:meetings (sorted-map)})
