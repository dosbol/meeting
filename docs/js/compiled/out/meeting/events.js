// Compiled by ClojureScript 1.9.908 {}
goog.provide('meeting.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('meeting.db');
goog.require('cljs_time.core');
if(typeof meeting.events.last_id !== 'undefined'){
} else {
meeting.events.last_id = cljs.core.atom.call(null,(2));
}
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103),(function (cofx,_){
return cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103),cljs.core.swap_BANG_.call(null,meeting.events.last_id,cljs.core.inc));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","initialize-db","meeting.events/initialize-db",1529113988),(function (_,___$1){
return meeting.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),(function (db,p__46364){
var vec__46365 = p__46364;
var _ = cljs.core.nth.call(null,vec__46365,(0),null);
var active_panel = cljs.core.nth.call(null,vec__46365,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),(function (db,p__46368){
var vec__46369 = p__46368;
var _ = cljs.core.nth.call(null,vec__46369,(0),null);
var id = cljs.core.nth.call(null,vec__46369,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036),id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922),(function (db,p__46372){
var vec__46373 = p__46372;
var _ = cljs.core.nth.call(null,vec__46373,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__46373,(1),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","delete-meeting!","meeting.events/delete-meeting!",2001083377),(function (db,p__46376){
var vec__46377 = p__46376;
var _ = cljs.core.nth.call(null,vec__46377,(0),null);
var id = cljs.core.nth.call(null,vec__46377,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.dissoc,id);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","create-meeting!","meeting.events/create-meeting!",-427757798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103))], null),(function (cofx,p__46380){
var vec__46381 = p__46380;
var _ = cljs.core.nth.call(null,vec__46381,(0),null);
var new_meeting = cljs.core.nth.call(null,vec__46381,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.conj.call(null,new_meeting,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx)], null))]))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","set-hash!","meeting.events/set-hash!",1048468244),(function (cofx,p__46384){
var vec__46385 = p__46384;
var _ = cljs.core.nth.call(null,vec__46385,(0),null);
var location = cljs.core.nth.call(null,vec__46385,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),location], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),(function (location){
return window.location.hash = location;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","update-meeting!","meeting.events/update-meeting!",716738413),(function (db,p__46388){
var vec__46389 = p__46388;
var _ = cljs.core.nth.call(null,vec__46389,(0),null);
var meeting__$1 = cljs.core.nth.call(null,vec__46389,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138),new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036).cljs$core$IFn$_invoke$arity$1(db)], null),cljs.core.merge,meeting__$1);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","filter!","meeting.events/filter!",-1924726221),(function (db,p__46392){
var vec__46393 = p__46392;
var _ = cljs.core.nth.call(null,vec__46393,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"filter","filter",-948537934));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","reset-filter!","meeting.events/reset-filter!",376919552),(function (db,p__46396){
var vec__46397 = p__46396;
var _ = cljs.core.nth.call(null,vec__46397,(0),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-filter-date!","meeting.events/set-filter-date!",1112430115),(function (db,p__46400){
var vec__46401 = p__46400;
var _ = cljs.core.nth.call(null,vec__46401,(0),null);
var d = cljs.core.nth.call(null,vec__46401,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173),d);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","timer-set-inprocess!","meeting.events/timer-set-inprocess!",1182894788),(function (db,p__46406){
var vec__46407 = p__46406;
var _ = cljs.core.nth.call(null,vec__46407,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"meetings","meetings",39002138),cljs.core.merge.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__46407,_){
return (function (p1__46405_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__46405_SHARP_)],[cljs.core.assoc.call(null,cljs.core.second.call(null,p1__46405_SHARP_),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"inprocess","inprocess",2078629075))]);
});})(vec__46407,_))
,cljs.core.filter.call(null,((function (vec__46407,_){
return (function (p1__46404_SHARP_){
var and__27183__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__46404_SHARP_)),new cljs.core.Keyword(null,"planned","planned",-1213840184));
if(and__27183__auto__){
return cljs_time.core.before_QMARK_.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__46404_SHARP_)),cljs_time.core.now.call(null));
} else {
return and__27183__auto__;
}
});})(vec__46407,_))
,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db))))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","timer-set-done!","meeting.events/timer-set-done!",169803683),(function (db,p__46412){
var vec__46413 = p__46412;
var _ = cljs.core.nth.call(null,vec__46413,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"meetings","meetings",39002138),cljs.core.merge.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__46413,_){
return (function (p1__46411_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__46411_SHARP_)],[cljs.core.assoc.call(null,cljs.core.second.call(null,p1__46411_SHARP_),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188))]);
});})(vec__46413,_))
,cljs.core.filter.call(null,((function (vec__46413,_){
return (function (p1__46410_SHARP_){
var and__27183__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__46410_SHARP_)),new cljs.core.Keyword(null,"inprocess","inprocess",2078629075));
if(and__27183__auto__){
return cljs_time.core.before_QMARK_.call(null,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__46410_SHARP_)),cljs_time.core.now.call(null));
} else {
return and__27183__auto__;
}
});})(vec__46413,_))
,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db))))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","timer-set-now!","meeting.events/timer-set-now!",195627536),(function (db,p__46416){
var vec__46417 = p__46416;
var _ = cljs.core.nth.call(null,vec__46417,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"now","now",-1650525531),cljs_time.core.now.call(null));
}));

//# sourceMappingURL=events.js.map?rel=1515861713460
