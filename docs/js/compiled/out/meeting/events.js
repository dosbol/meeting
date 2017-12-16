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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),(function (db,p__33353){
var vec__33354 = p__33353;
var _ = cljs.core.nth.call(null,vec__33354,(0),null);
var active_panel = cljs.core.nth.call(null,vec__33354,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),(function (db,p__33357){
var vec__33358 = p__33357;
var _ = cljs.core.nth.call(null,vec__33358,(0),null);
var id = cljs.core.nth.call(null,vec__33358,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036),id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922),(function (db,p__33361){
var vec__33362 = p__33361;
var _ = cljs.core.nth.call(null,vec__33362,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33362,(1),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","delete-meeting!","meeting.events/delete-meeting!",2001083377),(function (db,p__33365){
var vec__33366 = p__33365;
var _ = cljs.core.nth.call(null,vec__33366,(0),null);
var id = cljs.core.nth.call(null,vec__33366,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.dissoc,id);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","create-meeting!","meeting.events/create-meeting!",-427757798),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103))], null),(function (cofx,p__33369){
var vec__33370 = p__33369;
var _ = cljs.core.nth.call(null,vec__33370,(0),null);
var new_meeting = cljs.core.nth.call(null,vec__33370,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.conj.call(null,new_meeting,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx)], null))]))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","set-hash!","meeting.events/set-hash!",1048468244),(function (cofx,p__33373){
var vec__33374 = p__33373;
var _ = cljs.core.nth.call(null,vec__33374,(0),null);
var location = cljs.core.nth.call(null,vec__33374,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),location], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),(function (location){
return window.location.hash = location;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","update-meeting!","meeting.events/update-meeting!",716738413),(function (db,p__33377){
var vec__33378 = p__33377;
var _ = cljs.core.nth.call(null,vec__33378,(0),null);
var meeting__$1 = cljs.core.nth.call(null,vec__33378,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138),new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036).cljs$core$IFn$_invoke$arity$1(db)], null),cljs.core.merge,meeting__$1);
}));

//# sourceMappingURL=events.js.map?rel=1513458549340
