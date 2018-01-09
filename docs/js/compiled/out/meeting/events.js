// Compiled by ClojureScript 1.9.908 {}
goog.provide('meeting.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('meeting.db');
goog.require('cljs_time.core');
if(typeof meeting.events.last_id !== 'undefined'){
} else {
meeting.events.last_id = cljs.core.atom.call(null,(0));
}
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103),(function (cofx,_){
return cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103),cljs.core.swap_BANG_.call(null,meeting.events.last_id,cljs.core.inc));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","initialize-db","meeting.events/initialize-db",1529113988),(function (_,___$1){
return meeting.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),(function (db,p__49594){
var vec__49595 = p__49594;
var _ = cljs.core.nth.call(null,vec__49595,(0),null);
var active_panel = cljs.core.nth.call(null,vec__49595,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),(function (db,p__49598){
var vec__49599 = p__49598;
var _ = cljs.core.nth.call(null,vec__49599,(0),null);
var id = cljs.core.nth.call(null,vec__49599,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036),id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922),(function (db,p__49602){
var vec__49603 = p__49602;
var _ = cljs.core.nth.call(null,vec__49603,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__49603,(1),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","delete-meeting!","meeting.events/delete-meeting!",2001083377),(function (db,p__49606){
var vec__49607 = p__49606;
var _ = cljs.core.nth.call(null,vec__49607,(0),null);
var id = cljs.core.nth.call(null,vec__49607,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.dissoc,id);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","create-meeting!","meeting.events/create-meeting!",-427757798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103))], null),(function (cofx,p__49610){
var vec__49611 = p__49610;
var _ = cljs.core.nth.call(null,vec__49611,(0),null);
var new_meeting = cljs.core.nth.call(null,vec__49611,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.conj.call(null,new_meeting,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx)], null))]))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","set-hash!","meeting.events/set-hash!",1048468244),(function (cofx,p__49614){
var vec__49615 = p__49614;
var _ = cljs.core.nth.call(null,vec__49615,(0),null);
var location = cljs.core.nth.call(null,vec__49615,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),location], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),(function (location){
return window.location.hash = location;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","update-meeting!","meeting.events/update-meeting!",716738413),(function (db,p__49618){
var vec__49619 = p__49618;
var _ = cljs.core.nth.call(null,vec__49619,(0),null);
var meeting__$1 = cljs.core.nth.call(null,vec__49619,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138),new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036).cljs$core$IFn$_invoke$arity$1(db)], null),cljs.core.merge,meeting__$1);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","filter!","meeting.events/filter!",-1924726221),(function (db,p__49622){
var vec__49623 = p__49622;
var _ = cljs.core.nth.call(null,vec__49623,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"filter","filter",-948537934));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","reset-filter!","meeting.events/reset-filter!",376919552),(function (db,p__49626){
var vec__49627 = p__49626;
var _ = cljs.core.nth.call(null,vec__49627,(0),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-filter-date!","meeting.events/set-filter-date!",1112430115),(function (db,p__49630){
var vec__49631 = p__49630;
var _ = cljs.core.nth.call(null,vec__49631,(0),null);
var d = cljs.core.nth.call(null,vec__49631,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173),d);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","timer-set-inprocess!","meeting.events/timer-set-inprocess!",1182894788),(function (db,p__49636){
var vec__49637 = p__49636;
var _ = cljs.core.nth.call(null,vec__49637,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"meetings","meetings",39002138),cljs.core.merge.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__49637,_){
return (function (p1__49635_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__49635_SHARP_)],[cljs.core.assoc.call(null,cljs.core.second.call(null,p1__49635_SHARP_),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"inprocess","inprocess",2078629075))]);
});})(vec__49637,_))
,cljs.core.filter.call(null,((function (vec__49637,_){
return (function (p1__49634_SHARP_){
var and__27184__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__49634_SHARP_)),new cljs.core.Keyword(null,"planned","planned",-1213840184));
if(and__27184__auto__){
return cljs_time.core.before_QMARK_.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__49634_SHARP_)),cljs_time.core.now.call(null));
} else {
return and__27184__auto__;
}
});})(vec__49637,_))
,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db))))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","timer-set-done!","meeting.events/timer-set-done!",169803683),(function (db,p__49642){
var vec__49643 = p__49642;
var _ = cljs.core.nth.call(null,vec__49643,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"meetings","meetings",39002138),cljs.core.merge.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__49643,_){
return (function (p1__49641_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__49641_SHARP_)],[cljs.core.assoc.call(null,cljs.core.second.call(null,p1__49641_SHARP_),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188))]);
});})(vec__49643,_))
,cljs.core.filter.call(null,((function (vec__49643,_){
return (function (p1__49640_SHARP_){
var and__27184__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__49640_SHARP_)),new cljs.core.Keyword(null,"inprocess","inprocess",2078629075));
if(and__27184__auto__){
return cljs_time.core.before_QMARK_.call(null,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__49640_SHARP_)),cljs_time.core.now.call(null));
} else {
return and__27184__auto__;
}
});})(vec__49643,_))
,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db))))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","timer-set-now!","meeting.events/timer-set-now!",195627536),(function (db,p__49646){
var vec__49647 = p__49646;
var _ = cljs.core.nth.call(null,vec__49647,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"now","now",-1650525531),cljs_time.core.now.call(null));
}));

//# sourceMappingURL=events.js.map?rel=1515496321935
