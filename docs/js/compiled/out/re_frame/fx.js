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
var seq__45333 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__45334 = null;
var count__45335 = (0);
var i__45336 = (0);
while(true){
if((i__45336 < count__45335)){
var vec__45337 = cljs.core._nth.call(null,chunk__45334,i__45336);
var effect_key = cljs.core.nth.call(null,vec__45337,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45337,(1),null);
var temp__4655__auto___45343 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___45343)){
var effect_fn_45344 = temp__4655__auto___45343;
effect_fn_45344.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__45345 = seq__45333;
var G__45346 = chunk__45334;
var G__45347 = count__45335;
var G__45348 = (i__45336 + (1));
seq__45333 = G__45345;
chunk__45334 = G__45346;
count__45335 = G__45347;
i__45336 = G__45348;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45333);
if(temp__4657__auto__){
var seq__45333__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45333__$1)){
var c__28035__auto__ = cljs.core.chunk_first.call(null,seq__45333__$1);
var G__45349 = cljs.core.chunk_rest.call(null,seq__45333__$1);
var G__45350 = c__28035__auto__;
var G__45351 = cljs.core.count.call(null,c__28035__auto__);
var G__45352 = (0);
seq__45333 = G__45349;
chunk__45334 = G__45350;
count__45335 = G__45351;
i__45336 = G__45352;
continue;
} else {
var vec__45340 = cljs.core.first.call(null,seq__45333__$1);
var effect_key = cljs.core.nth.call(null,vec__45340,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45340,(1),null);
var temp__4655__auto___45353 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___45353)){
var effect_fn_45354 = temp__4655__auto___45353;
effect_fn_45354.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__45355 = cljs.core.next.call(null,seq__45333__$1);
var G__45356 = null;
var G__45357 = (0);
var G__45358 = (0);
seq__45333 = G__45355;
chunk__45334 = G__45356;
count__45335 = G__45357;
i__45336 = G__45358;
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
var seq__45359 = cljs.core.seq.call(null,value);
var chunk__45360 = null;
var count__45361 = (0);
var i__45362 = (0);
while(true){
if((i__45362 < count__45361)){
var map__45363 = cljs.core._nth.call(null,chunk__45360,i__45362);
var map__45363__$1 = ((((!((map__45363 == null)))?((((map__45363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45363):map__45363);
var effect = map__45363__$1;
var ms = cljs.core.get.call(null,map__45363__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45363__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45359,chunk__45360,count__45361,i__45362,map__45363,map__45363__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45359,chunk__45360,count__45361,i__45362,map__45363,map__45363__$1,effect,ms,dispatch))
,ms);
}

var G__45367 = seq__45359;
var G__45368 = chunk__45360;
var G__45369 = count__45361;
var G__45370 = (i__45362 + (1));
seq__45359 = G__45367;
chunk__45360 = G__45368;
count__45361 = G__45369;
i__45362 = G__45370;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45359);
if(temp__4657__auto__){
var seq__45359__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45359__$1)){
var c__28035__auto__ = cljs.core.chunk_first.call(null,seq__45359__$1);
var G__45371 = cljs.core.chunk_rest.call(null,seq__45359__$1);
var G__45372 = c__28035__auto__;
var G__45373 = cljs.core.count.call(null,c__28035__auto__);
var G__45374 = (0);
seq__45359 = G__45371;
chunk__45360 = G__45372;
count__45361 = G__45373;
i__45362 = G__45374;
continue;
} else {
var map__45365 = cljs.core.first.call(null,seq__45359__$1);
var map__45365__$1 = ((((!((map__45365 == null)))?((((map__45365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45365):map__45365);
var effect = map__45365__$1;
var ms = cljs.core.get.call(null,map__45365__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45365__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45359,chunk__45360,count__45361,i__45362,map__45365,map__45365__$1,effect,ms,dispatch,seq__45359__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45359,chunk__45360,count__45361,i__45362,map__45365,map__45365__$1,effect,ms,dispatch,seq__45359__$1,temp__4657__auto__))
,ms);
}

var G__45375 = cljs.core.next.call(null,seq__45359__$1);
var G__45376 = null;
var G__45377 = (0);
var G__45378 = (0);
seq__45359 = G__45375;
chunk__45360 = G__45376;
count__45361 = G__45377;
i__45362 = G__45378;
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
var seq__45379 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__45380 = null;
var count__45381 = (0);
var i__45382 = (0);
while(true){
if((i__45382 < count__45381)){
var event = cljs.core._nth.call(null,chunk__45380,i__45382);
re_frame.router.dispatch.call(null,event);

var G__45383 = seq__45379;
var G__45384 = chunk__45380;
var G__45385 = count__45381;
var G__45386 = (i__45382 + (1));
seq__45379 = G__45383;
chunk__45380 = G__45384;
count__45381 = G__45385;
i__45382 = G__45386;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45379);
if(temp__4657__auto__){
var seq__45379__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45379__$1)){
var c__28035__auto__ = cljs.core.chunk_first.call(null,seq__45379__$1);
var G__45387 = cljs.core.chunk_rest.call(null,seq__45379__$1);
var G__45388 = c__28035__auto__;
var G__45389 = cljs.core.count.call(null,c__28035__auto__);
var G__45390 = (0);
seq__45379 = G__45387;
chunk__45380 = G__45388;
count__45381 = G__45389;
i__45382 = G__45390;
continue;
} else {
var event = cljs.core.first.call(null,seq__45379__$1);
re_frame.router.dispatch.call(null,event);

var G__45391 = cljs.core.next.call(null,seq__45379__$1);
var G__45392 = null;
var G__45393 = (0);
var G__45394 = (0);
seq__45379 = G__45391;
chunk__45380 = G__45392;
count__45381 = G__45393;
i__45382 = G__45394;
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
var seq__45395 = cljs.core.seq.call(null,value);
var chunk__45396 = null;
var count__45397 = (0);
var i__45398 = (0);
while(true){
if((i__45398 < count__45397)){
var event = cljs.core._nth.call(null,chunk__45396,i__45398);
clear_event.call(null,event);

var G__45399 = seq__45395;
var G__45400 = chunk__45396;
var G__45401 = count__45397;
var G__45402 = (i__45398 + (1));
seq__45395 = G__45399;
chunk__45396 = G__45400;
count__45397 = G__45401;
i__45398 = G__45402;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45395);
if(temp__4657__auto__){
var seq__45395__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45395__$1)){
var c__28035__auto__ = cljs.core.chunk_first.call(null,seq__45395__$1);
var G__45403 = cljs.core.chunk_rest.call(null,seq__45395__$1);
var G__45404 = c__28035__auto__;
var G__45405 = cljs.core.count.call(null,c__28035__auto__);
var G__45406 = (0);
seq__45395 = G__45403;
chunk__45396 = G__45404;
count__45397 = G__45405;
i__45398 = G__45406;
continue;
} else {
var event = cljs.core.first.call(null,seq__45395__$1);
clear_event.call(null,event);

var G__45407 = cljs.core.next.call(null,seq__45395__$1);
var G__45408 = null;
var G__45409 = (0);
var G__45410 = (0);
seq__45395 = G__45407;
chunk__45396 = G__45408;
count__45397 = G__45409;
i__45398 = G__45410;
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

//# sourceMappingURL=fx.js.map?rel=1514660200125
