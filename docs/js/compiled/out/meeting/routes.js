// Compiled by ClojureScript 1.9.908 {}
goog.provide('meeting.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('meeting.events');
meeting.routes.hook_browser_navigation_BANG_ = (function meeting$routes$hook_browser_navigation_BANG_(){
var G__46446 = (new goog.History());
goog.events.listen(G__46446,goog.history.EventType.NAVIGATE,((function (G__46446){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__46446))
);

G__46446.setEnabled(true);

return G__46446;
});
meeting.routes.app_routes = (function meeting$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__35725__auto___46467 = (function (params__35726__auto__){
if(cljs.core.map_QMARK_.call(null,params__35726__auto__)){
var map__46447 = params__35726__auto__;
var map__46447__$1 = ((((!((map__46447 == null)))?((((map__46447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46447):map__46447);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35726__auto__)){
var vec__46449 = params__35726__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__35725__auto___46467);


var action__35725__auto___46468 = (function (params__35726__auto__){
if(cljs.core.map_QMARK_.call(null,params__35726__auto__)){
var map__46452 = params__35726__auto__;
var map__46452__$1 = ((((!((map__46452 == null)))?((((map__46452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46452):map__46452);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"create-panel","create-panel",1560138019)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35726__auto__)){
var vec__46454 = params__35726__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"create-panel","create-panel",1560138019)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/meetings/new",action__35725__auto___46468);


var action__35725__auto___46469 = (function (params__35726__auto__){
if(cljs.core.map_QMARK_.call(null,params__35726__auto__)){
var map__46457 = params__35726__auto__;
var map__46457__$1 = ((((!((map__46457 == null)))?((((map__46457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46457):map__46457);
var id = cljs.core.get.call(null,map__46457__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"view-panel","view-panel",2108152132)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35726__auto__)){
var vec__46459 = params__35726__auto__;
var id = cljs.core.nth.call(null,vec__46459,(0),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"view-panel","view-panel",2108152132)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/meetings/:id",action__35725__auto___46469);


var action__35725__auto___46470 = (function (params__35726__auto__){
if(cljs.core.map_QMARK_.call(null,params__35726__auto__)){
var map__46462 = params__35726__auto__;
var map__46462__$1 = ((((!((map__46462 == null)))?((((map__46462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46462.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46462):map__46462);
var id = cljs.core.get.call(null,map__46462__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"edit-panel","edit-panel",189647123)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35726__auto__)){
var vec__46464 = params__35726__auto__;
var id = cljs.core.nth.call(null,vec__46464,(0),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"edit-panel","edit-panel",189647123)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/meetings/:id/edit",action__35725__auto___46470);


return meeting.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1515861713997
