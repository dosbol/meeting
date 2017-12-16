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
var G__33466 = (new goog.History());
goog.events.listen(G__33466,goog.history.EventType.NAVIGATE,((function (G__33466){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__33466))
);

G__33466.setEnabled(true);

return G__33466;
});
meeting.routes.app_routes = (function meeting$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__31642__auto___33487 = (function (params__31643__auto__){
if(cljs.core.map_QMARK_.call(null,params__31643__auto__)){
var map__33467 = params__31643__auto__;
var map__33467__$1 = ((((!((map__33467 == null)))?((((map__33467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33467):map__33467);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31643__auto__)){
var vec__33469 = params__31643__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__31642__auto___33487);


var action__31642__auto___33488 = (function (params__31643__auto__){
if(cljs.core.map_QMARK_.call(null,params__31643__auto__)){
var map__33472 = params__31643__auto__;
var map__33472__$1 = ((((!((map__33472 == null)))?((((map__33472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33472):map__33472);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"create-panel","create-panel",1560138019)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31643__auto__)){
var vec__33474 = params__31643__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"create-panel","create-panel",1560138019)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/meetings/new",action__31642__auto___33488);


var action__31642__auto___33489 = (function (params__31643__auto__){
if(cljs.core.map_QMARK_.call(null,params__31643__auto__)){
var map__33477 = params__31643__auto__;
var map__33477__$1 = ((((!((map__33477 == null)))?((((map__33477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33477):map__33477);
var id = cljs.core.get.call(null,map__33477__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"view-panel","view-panel",2108152132)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31643__auto__)){
var vec__33479 = params__31643__auto__;
var id = cljs.core.nth.call(null,vec__33479,(0),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"view-panel","view-panel",2108152132)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/meetings/:id",action__31642__auto___33489);


var action__31642__auto___33490 = (function (params__31643__auto__){
if(cljs.core.map_QMARK_.call(null,params__31643__auto__)){
var map__33482 = params__31643__auto__;
var map__33482__$1 = ((((!((map__33482 == null)))?((((map__33482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33482):map__33482);
var id = cljs.core.get.call(null,map__33482__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"edit-panel","edit-panel",189647123)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31643__auto__)){
var vec__33484 = params__31643__auto__;
var id = cljs.core.nth.call(null,vec__33484,(0),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"edit-panel","edit-panel",189647123)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/meetings/:id/edit",action__31642__auto___33490);


return meeting.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1513458754478
