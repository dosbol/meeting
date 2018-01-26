(ns meeting.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [meeting.core-test]))

(doo-tests 'meeting.core-test)
