// Compiled by ClojureScript 1.9.908 {}
goog.provide('meeting.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('meeting.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","initialize-db","meeting.events/initialize-db",1529113988),(function (_,___$1){
return meeting.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),(function (db,p__45881){
var vec__45882 = p__45881;
var _ = cljs.core.nth.call(null,vec__45882,(0),null);
var active_panel = cljs.core.nth.call(null,vec__45882,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),(function (db,p__45885){
var vec__45886 = p__45885;
var _ = cljs.core.nth.call(null,vec__45886,(0),null);
var id = cljs.core.nth.call(null,vec__45886,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036),id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922),(function (db,p__45889){
var vec__45890 = p__45889;
var _ = cljs.core.nth.call(null,vec__45890,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__45890,(1),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","delete-meeting!","meeting.events/delete-meeting!",2001083377),(function (db,p__45893){
var vec__45894 = p__45893;
var _ = cljs.core.nth.call(null,vec__45894,(0),null);
var id = cljs.core.nth.call(null,vec__45894,(1),null);
return db;
}));

//# sourceMappingURL=events.js.map?rel=1512677427734
