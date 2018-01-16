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
var G__51753 = (new goog.History());
goog.events.listen(G__51753,goog.history.EventType.NAVIGATE,((function (G__51753){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__51753))
);

G__51753.setEnabled(true);

return G__51753;
});
meeting.routes.app_routes = (function meeting$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__35784__auto___51774 = (function (params__35785__auto__){
if(cljs.core.map_QMARK_.call(null,params__35785__auto__)){
var map__51754 = params__35785__auto__;
var map__51754__$1 = ((((!((map__51754 == null)))?((((map__51754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51754):map__51754);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","unset-error!","meeting.events/unset-error!",1576637477)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35785__auto__)){
var vec__51756 = params__35785__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","unset-error!","meeting.events/unset-error!",1576637477)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__35784__auto___51774);


var action__35784__auto___51775 = (function (params__35785__auto__){
if(cljs.core.map_QMARK_.call(null,params__35785__auto__)){
var map__51759 = params__35785__auto__;
var map__51759__$1 = ((((!((map__51759 == null)))?((((map__51759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51759):map__51759);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"create-panel","create-panel",1560138019)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35785__auto__)){
var vec__51761 = params__35785__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"create-panel","create-panel",1560138019)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/meetings/new",action__35784__auto___51775);


var action__35784__auto___51776 = (function (params__35785__auto__){
if(cljs.core.map_QMARK_.call(null,params__35785__auto__)){
var map__51764 = params__35785__auto__;
var map__51764__$1 = ((((!((map__51764 == null)))?((((map__51764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51764):map__51764);
var id = cljs.core.get.call(null,map__51764__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"view-panel","view-panel",2108152132)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35785__auto__)){
var vec__51766 = params__35785__auto__;
var id = cljs.core.nth.call(null,vec__51766,(0),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"view-panel","view-panel",2108152132)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/meetings/:id",action__35784__auto___51776);


var action__35784__auto___51777 = (function (params__35785__auto__){
if(cljs.core.map_QMARK_.call(null,params__35785__auto__)){
var map__51769 = params__35785__auto__;
var map__51769__$1 = ((((!((map__51769 == null)))?((((map__51769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51769):map__51769);
var id = cljs.core.get.call(null,map__51769__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"edit-panel","edit-panel",189647123)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35785__auto__)){
var vec__51771 = params__35785__auto__;
var id = cljs.core.nth.call(null,vec__51771,(0),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),new cljs.core.Keyword(null,"edit-panel","edit-panel",189647123)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),parseInt(id)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/meetings/:id/edit",action__35784__auto___51777);


return meeting.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1516102015008
