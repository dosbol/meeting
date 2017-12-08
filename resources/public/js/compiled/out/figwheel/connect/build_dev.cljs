(ns figwheel.connect.build-dev (:require [figwheel.client] [meeting.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/meeting.core.mount-root (apply js/meeting.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'meeting.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

