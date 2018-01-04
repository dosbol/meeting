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
var seq__45331 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__45332 = null;
var count__45333 = (0);
var i__45334 = (0);
while(true){
if((i__45334 < count__45333)){
var vec__45335 = cljs.core._nth.call(null,chunk__45332,i__45334);
var effect_key = cljs.core.nth.call(null,vec__45335,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45335,(1),null);
var temp__4655__auto___45341 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___45341)){
var effect_fn_45342 = temp__4655__auto___45341;
effect_fn_45342.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__45343 = seq__45331;
var G__45344 = chunk__45332;
var G__45345 = count__45333;
var G__45346 = (i__45334 + (1));
seq__45331 = G__45343;
chunk__45332 = G__45344;
count__45333 = G__45345;
i__45334 = G__45346;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45331);
if(temp__4657__auto__){
var seq__45331__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45331__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45331__$1);
var G__45347 = cljs.core.chunk_rest.call(null,seq__45331__$1);
var G__45348 = c__28034__auto__;
var G__45349 = cljs.core.count.call(null,c__28034__auto__);
var G__45350 = (0);
seq__45331 = G__45347;
chunk__45332 = G__45348;
count__45333 = G__45349;
i__45334 = G__45350;
continue;
} else {
var vec__45338 = cljs.core.first.call(null,seq__45331__$1);
var effect_key = cljs.core.nth.call(null,vec__45338,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45338,(1),null);
var temp__4655__auto___45351 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___45351)){
var effect_fn_45352 = temp__4655__auto___45351;
effect_fn_45352.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__45353 = cljs.core.next.call(null,seq__45331__$1);
var G__45354 = null;
var G__45355 = (0);
var G__45356 = (0);
seq__45331 = G__45353;
chunk__45332 = G__45354;
count__45333 = G__45355;
i__45334 = G__45356;
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
var seq__45357 = cljs.core.seq.call(null,value);
var chunk__45358 = null;
var count__45359 = (0);
var i__45360 = (0);
while(true){
if((i__45360 < count__45359)){
var map__45361 = cljs.core._nth.call(null,chunk__45358,i__45360);
var map__45361__$1 = ((((!((map__45361 == null)))?((((map__45361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45361):map__45361);
var effect = map__45361__$1;
var ms = cljs.core.get.call(null,map__45361__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45361__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45357,chunk__45358,count__45359,i__45360,map__45361,map__45361__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45357,chunk__45358,count__45359,i__45360,map__45361,map__45361__$1,effect,ms,dispatch))
,ms);
}

var G__45365 = seq__45357;
var G__45366 = chunk__45358;
var G__45367 = count__45359;
var G__45368 = (i__45360 + (1));
seq__45357 = G__45365;
chunk__45358 = G__45366;
count__45359 = G__45367;
i__45360 = G__45368;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45357);
if(temp__4657__auto__){
var seq__45357__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45357__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45357__$1);
var G__45369 = cljs.core.chunk_rest.call(null,seq__45357__$1);
var G__45370 = c__28034__auto__;
var G__45371 = cljs.core.count.call(null,c__28034__auto__);
var G__45372 = (0);
seq__45357 = G__45369;
chunk__45358 = G__45370;
count__45359 = G__45371;
i__45360 = G__45372;
continue;
} else {
var map__45363 = cljs.core.first.call(null,seq__45357__$1);
var map__45363__$1 = ((((!((map__45363 == null)))?((((map__45363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45363):map__45363);
var effect = map__45363__$1;
var ms = cljs.core.get.call(null,map__45363__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45363__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45357,chunk__45358,count__45359,i__45360,map__45363,map__45363__$1,effect,ms,dispatch,seq__45357__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45357,chunk__45358,count__45359,i__45360,map__45363,map__45363__$1,effect,ms,dispatch,seq__45357__$1,temp__4657__auto__))
,ms);
}

var G__45373 = cljs.core.next.call(null,seq__45357__$1);
var G__45374 = null;
var G__45375 = (0);
var G__45376 = (0);
seq__45357 = G__45373;
chunk__45358 = G__45374;
count__45359 = G__45375;
i__45360 = G__45376;
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
var seq__45377 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__45378 = null;
var count__45379 = (0);
var i__45380 = (0);
while(true){
if((i__45380 < count__45379)){
var event = cljs.core._nth.call(null,chunk__45378,i__45380);
re_frame.router.dispatch.call(null,event);

var G__45381 = seq__45377;
var G__45382 = chunk__45378;
var G__45383 = count__45379;
var G__45384 = (i__45380 + (1));
seq__45377 = G__45381;
chunk__45378 = G__45382;
count__45379 = G__45383;
i__45380 = G__45384;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45377);
if(temp__4657__auto__){
var seq__45377__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45377__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45377__$1);
var G__45385 = cljs.core.chunk_rest.call(null,seq__45377__$1);
var G__45386 = c__28034__auto__;
var G__45387 = cljs.core.count.call(null,c__28034__auto__);
var G__45388 = (0);
seq__45377 = G__45385;
chunk__45378 = G__45386;
count__45379 = G__45387;
i__45380 = G__45388;
continue;
} else {
var event = cljs.core.first.call(null,seq__45377__$1);
re_frame.router.dispatch.call(null,event);

var G__45389 = cljs.core.next.call(null,seq__45377__$1);
var G__45390 = null;
var G__45391 = (0);
var G__45392 = (0);
seq__45377 = G__45389;
chunk__45378 = G__45390;
count__45379 = G__45391;
i__45380 = G__45392;
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
var seq__45393 = cljs.core.seq.call(null,value);
var chunk__45394 = null;
var count__45395 = (0);
var i__45396 = (0);
while(true){
if((i__45396 < count__45395)){
var event = cljs.core._nth.call(null,chunk__45394,i__45396);
clear_event.call(null,event);

var G__45397 = seq__45393;
var G__45398 = chunk__45394;
var G__45399 = count__45395;
var G__45400 = (i__45396 + (1));
seq__45393 = G__45397;
chunk__45394 = G__45398;
count__45395 = G__45399;
i__45396 = G__45400;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45393);
if(temp__4657__auto__){
var seq__45393__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45393__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45393__$1);
var G__45401 = cljs.core.chunk_rest.call(null,seq__45393__$1);
var G__45402 = c__28034__auto__;
var G__45403 = cljs.core.count.call(null,c__28034__auto__);
var G__45404 = (0);
seq__45393 = G__45401;
chunk__45394 = G__45402;
count__45395 = G__45403;
i__45396 = G__45404;
continue;
} else {
var event = cljs.core.first.call(null,seq__45393__$1);
clear_event.call(null,event);

var G__45405 = cljs.core.next.call(null,seq__45393__$1);
var G__45406 = null;
var G__45407 = (0);
var G__45408 = (0);
seq__45393 = G__45405;
chunk__45394 = G__45406;
count__45395 = G__45407;
i__45396 = G__45408;
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

//# sourceMappingURL=fx.js.map?rel=1515054968559
