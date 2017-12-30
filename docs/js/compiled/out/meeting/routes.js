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
var G__47406 = (new goog.History());
goog.events.listen(G__47406,goog.history.EventType.NAVIGATE,((function (G__47406){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__47406))
);

G__47406.setEnabled(true);

return G__47406;
});
meeting.routes.app_routes = (function meeting$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__35707__auto___47427 = (function (params__35708__auto__){
if(cljs.core.map_QMARK_.call(null,params__35708__auto__)){
var map__47407 = params__35708__auto__;
var map__47407__$1 = ((((!((map__47407 == null)))?((((map__47407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47407):map__47407);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35708__auto__)){
var vec__47409 = params__35708__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__35707__auto___47427);


var action__35707__auto___47428 = (function (params__35708__auto__){
if(cljs.core.map_QMARK_.call(null,params__35708__auto__)){
var map__47412 = params__35708__auto__;
var map__47412__$1 = ((((!((map__47412 == null)))?((((map__47412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47412):map__47412);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"create-panel","create-panel",1560138019)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35708__auto__)){
var vec__47414 = params__35708__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"create-panel","create-panel",1560138019)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/meetings/new",action__35707__auto___47428);


var action__35707__auto___47429 = (function (params__35708__auto__){
if(cljs.core.map_QMARK_.call(null,params__35708__auto__)){
var map__47417 = params__35708__auto__;
var map__47417__$1 = ((((!((map__47417 == null)))?((((map__47417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47417):map__47417);
var id = cljs.core.get.call(null,map__47417__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"view-panel","view-panel",2108152132)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35708__auto__)){
var vec__47419 = params__35708__auto__;
var id = cljs.core.nth.call(null,vec__47419,(0),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"view-panel","view-panel",2108152132)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/meetings/:id",action__35707__auto___47429);


var action__35707__auto___47430 = (function (params__35708__auto__){
if(cljs.core.map_QMARK_.call(null,params__35708__auto__)){
var map__47422 = params__35708__auto__;
var map__47422__$1 = ((((!((map__47422 == null)))?((((map__47422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47422):map__47422);
var id = cljs.core.get.call(null,map__47422__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"edit-panel","edit-panel",189647123)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35708__auto__)){
var vec__47424 = params__35708__auto__;
var id = cljs.core.nth.call(null,vec__47424,(0),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"edit-panel","edit-panel",189647123)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/meetings/:id/edit",action__35707__auto___47430);


return meeting.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1514665553242
