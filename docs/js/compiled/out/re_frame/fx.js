// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__45403 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__45404 = null;
var count__45405 = (0);
var i__45406 = (0);
while(true){
if((i__45406 < count__45405)){
var vec__45407 = cljs.core._nth.call(null,chunk__45404,i__45406);
var effect_key = cljs.core.nth.call(null,vec__45407,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45407,(1),null);
var temp__4655__auto___45413 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___45413)){
var effect_fn_45414 = temp__4655__auto___45413;
effect_fn_45414.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__45415 = seq__45403;
var G__45416 = chunk__45404;
var G__45417 = count__45405;
var G__45418 = (i__45406 + (1));
seq__45403 = G__45415;
chunk__45404 = G__45416;
count__45405 = G__45417;
i__45406 = G__45418;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45403);
if(temp__4657__auto__){
var seq__45403__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45403__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45403__$1);
var G__45419 = cljs.core.chunk_rest.call(null,seq__45403__$1);
var G__45420 = c__28034__auto__;
var G__45421 = cljs.core.count.call(null,c__28034__auto__);
var G__45422 = (0);
seq__45403 = G__45419;
chunk__45404 = G__45420;
count__45405 = G__45421;
i__45406 = G__45422;
continue;
} else {
var vec__45410 = cljs.core.first.call(null,seq__45403__$1);
var effect_key = cljs.core.nth.call(null,vec__45410,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45410,(1),null);
var temp__4655__auto___45423 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___45423)){
var effect_fn_45424 = temp__4655__auto___45423;
effect_fn_45424.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__45425 = cljs.core.next.call(null,seq__45403__$1);
var G__45426 = null;
var G__45427 = (0);
var G__45428 = (0);
seq__45403 = G__45425;
chunk__45404 = G__45426;
count__45405 = G__45427;
i__45406 = G__45428;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__45429 = cljs.core.seq.call(null,value);
var chunk__45430 = null;
var count__45431 = (0);
var i__45432 = (0);
while(true){
if((i__45432 < count__45431)){
var map__45433 = cljs.core._nth.call(null,chunk__45430,i__45432);
var map__45433__$1 = ((((!((map__45433 == null)))?((((map__45433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45433):map__45433);
var effect = map__45433__$1;
var ms = cljs.core.get.call(null,map__45433__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45433__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45429,chunk__45430,count__45431,i__45432,map__45433,map__45433__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45429,chunk__45430,count__45431,i__45432,map__45433,map__45433__$1,effect,ms,dispatch))
,ms);
}

var G__45437 = seq__45429;
var G__45438 = chunk__45430;
var G__45439 = count__45431;
var G__45440 = (i__45432 + (1));
seq__45429 = G__45437;
chunk__45430 = G__45438;
count__45431 = G__45439;
i__45432 = G__45440;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45429);
if(temp__4657__auto__){
var seq__45429__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45429__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45429__$1);
var G__45441 = cljs.core.chunk_rest.call(null,seq__45429__$1);
var G__45442 = c__28034__auto__;
var G__45443 = cljs.core.count.call(null,c__28034__auto__);
var G__45444 = (0);
seq__45429 = G__45441;
chunk__45430 = G__45442;
count__45431 = G__45443;
i__45432 = G__45444;
continue;
} else {
var map__45435 = cljs.core.first.call(null,seq__45429__$1);
var map__45435__$1 = ((((!((map__45435 == null)))?((((map__45435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45435):map__45435);
var effect = map__45435__$1;
var ms = cljs.core.get.call(null,map__45435__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45435__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45429,chunk__45430,count__45431,i__45432,map__45435,map__45435__$1,effect,ms,dispatch,seq__45429__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45429,chunk__45430,count__45431,i__45432,map__45435,map__45435__$1,effect,ms,dispatch,seq__45429__$1,temp__4657__auto__))
,ms);
}

var G__45445 = cljs.core.next.call(null,seq__45429__$1);
var G__45446 = null;
var G__45447 = (0);
var G__45448 = (0);
seq__45429 = G__45445;
chunk__45430 = G__45446;
count__45431 = G__45447;
i__45432 = G__45448;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__45449 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__45450 = null;
var count__45451 = (0);
var i__45452 = (0);
while(true){
if((i__45452 < count__45451)){
var event = cljs.core._nth.call(null,chunk__45450,i__45452);
re_frame.router.dispatch.call(null,event);

var G__45453 = seq__45449;
var G__45454 = chunk__45450;
var G__45455 = count__45451;
var G__45456 = (i__45452 + (1));
seq__45449 = G__45453;
chunk__45450 = G__45454;
count__45451 = G__45455;
i__45452 = G__45456;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45449);
if(temp__4657__auto__){
var seq__45449__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45449__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45449__$1);
var G__45457 = cljs.core.chunk_rest.call(null,seq__45449__$1);
var G__45458 = c__28034__auto__;
var G__45459 = cljs.core.count.call(null,c__28034__auto__);
var G__45460 = (0);
seq__45449 = G__45457;
chunk__45450 = G__45458;
count__45451 = G__45459;
i__45452 = G__45460;
continue;
} else {
var event = cljs.core.first.call(null,seq__45449__$1);
re_frame.router.dispatch.call(null,event);

var G__45461 = cljs.core.next.call(null,seq__45449__$1);
var G__45462 = null;
var G__45463 = (0);
var G__45464 = (0);
seq__45449 = G__45461;
chunk__45450 = G__45462;
count__45451 = G__45463;
i__45452 = G__45464;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__45465 = cljs.core.seq.call(null,value);
var chunk__45466 = null;
var count__45467 = (0);
var i__45468 = (0);
while(true){
if((i__45468 < count__45467)){
var event = cljs.core._nth.call(null,chunk__45466,i__45468);
clear_event.call(null,event);

var G__45469 = seq__45465;
var G__45470 = chunk__45466;
var G__45471 = count__45467;
var G__45472 = (i__45468 + (1));
seq__45465 = G__45469;
chunk__45466 = G__45470;
count__45467 = G__45471;
i__45468 = G__45472;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45465);
if(temp__4657__auto__){
var seq__45465__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45465__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45465__$1);
var G__45473 = cljs.core.chunk_rest.call(null,seq__45465__$1);
var G__45474 = c__28034__auto__;
var G__45475 = cljs.core.count.call(null,c__28034__auto__);
var G__45476 = (0);
seq__45465 = G__45473;
chunk__45466 = G__45474;
count__45467 = G__45475;
i__45468 = G__45476;
continue;
} else {
var event = cljs.core.first.call(null,seq__45465__$1);
clear_event.call(null,event);

var G__45477 = cljs.core.next.call(null,seq__45465__$1);
var G__45478 = null;
var G__45479 = (0);
var G__45480 = (0);
seq__45465 = G__45477;
chunk__45466 = G__45478;
count__45467 = G__45479;
i__45468 = G__45480;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1516053540480
