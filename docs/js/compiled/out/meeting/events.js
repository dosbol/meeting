// Compiled by ClojureScript 1.9.908 {}
goog.provide('meeting.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('meeting.db');
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),(function (db,p__46358){
var vec__46359 = p__46358;
var _ = cljs.core.nth.call(null,vec__46359,(0),null);
var active_panel = cljs.core.nth.call(null,vec__46359,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),(function (db,p__46362){
var vec__46363 = p__46362;
var _ = cljs.core.nth.call(null,vec__46363,(0),null);
var id = cljs.core.nth.call(null,vec__46363,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036),id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922),(function (db,p__46366){
var vec__46367 = p__46366;
var _ = cljs.core.nth.call(null,vec__46367,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__46367,(1),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","delete-meeting!","meeting.events/delete-meeting!",2001083377),(function (db,p__46370){
var vec__46371 = p__46370;
var _ = cljs.core.nth.call(null,vec__46371,(0),null);
var id = cljs.core.nth.call(null,vec__46371,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.dissoc,id);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","create-meeting!","meeting.events/create-meeting!",-427757798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103))], null),(function (cofx,p__46374){
var vec__46375 = p__46374;
var _ = cljs.core.nth.call(null,vec__46375,(0),null);
var new_meeting = cljs.core.nth.call(null,vec__46375,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.conj.call(null,new_meeting,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx)], null))]))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","set-hash!","meeting.events/set-hash!",1048468244),(function (cofx,p__46378){
var vec__46379 = p__46378;
var _ = cljs.core.nth.call(null,vec__46379,(0),null);
var location = cljs.core.nth.call(null,vec__46379,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),location], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),(function (location){
return window.location.hash = location;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","update-meeting!","meeting.events/update-meeting!",716738413),(function (db,p__46382){
var vec__46383 = p__46382;
var _ = cljs.core.nth.call(null,vec__46383,(0),null);
var meeting__$1 = cljs.core.nth.call(null,vec__46383,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138),new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036).cljs$core$IFn$_invoke$arity$1(db)], null),cljs.core.merge,meeting__$1);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","filter!","meeting.events/filter!",-1924726221),(function (db,p__46386){
var vec__46387 = p__46386;
var _ = cljs.core.nth.call(null,vec__46387,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"filter","filter",-948537934));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","reset-filter!","meeting.events/reset-filter!",376919552),(function (db,p__46390){
var vec__46391 = p__46390;
var _ = cljs.core.nth.call(null,vec__46391,(0),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-filter-date!","meeting.events/set-filter-date!",1112430115),(function (db,p__46394){
var vec__46395 = p__46394;
var _ = cljs.core.nth.call(null,vec__46395,(0),null);
var d = cljs.core.nth.call(null,vec__46395,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173),d);
}));

//# sourceMappingURL=events.js.map?rel=1515063457506
