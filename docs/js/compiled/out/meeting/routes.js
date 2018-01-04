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
var G__46421 = (new goog.History());
goog.events.listen(G__46421,goog.history.EventType.NAVIGATE,((function (G__46421){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__46421))
);

G__46421.setEnabled(true);

return G__46421;
});
meeting.routes.app_routes = (function meeting$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__35705__auto___46442 = (function (params__35706__auto__){
if(cljs.core.map_QMARK_.call(null,params__35706__auto__)){
var map__46422 = params__35706__auto__;
var map__46422__$1 = ((((!((map__46422 == null)))?((((map__46422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46422):map__46422);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35706__auto__)){
var vec__46424 = params__35706__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__35705__auto___46442);


var action__35705__auto___46443 = (function (params__35706__auto__){
if(cljs.core.map_QMARK_.call(null,params__35706__auto__)){
var map__46427 = params__35706__auto__;
var map__46427__$1 = ((((!((map__46427 == null)))?((((map__46427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46427):map__46427);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"create-panel","create-panel",1560138019)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35706__auto__)){
var vec__46429 = params__35706__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"create-panel","create-panel",1560138019)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/meetings/new",action__35705__auto___46443);


var action__35705__auto___46444 = (function (params__35706__auto__){
if(cljs.core.map_QMARK_.call(null,params__35706__auto__)){
var map__46432 = params__35706__auto__;
var map__46432__$1 = ((((!((map__46432 == null)))?((((map__46432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46432):map__46432);
var id = cljs.core.get.call(null,map__46432__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"view-panel","view-panel",2108152132)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35706__auto__)){
var vec__46434 = params__35706__auto__;
var id = cljs.core.nth.call(null,vec__46434,(0),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"view-panel","view-panel",2108152132)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/meetings/:id",action__35705__auto___46444);


var action__35705__auto___46445 = (function (params__35706__auto__){
if(cljs.core.map_QMARK_.call(null,params__35706__auto__)){
var map__46437 = params__35706__auto__;
var map__46437__$1 = ((((!((map__46437 == null)))?((((map__46437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46437):map__46437);
var id = cljs.core.get.call(null,map__46437__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"edit-panel","edit-panel",189647123)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35706__auto__)){
var vec__46439 = params__35706__auto__;
var id = cljs.core.nth.call(null,vec__46439,(0),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"edit-panel","edit-panel",189647123)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/meetings/:id/edit",action__35705__auto___46445);


return meeting.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1515063458102
