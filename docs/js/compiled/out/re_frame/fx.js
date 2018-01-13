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
var seq__45351 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__45352 = null;
var count__45353 = (0);
var i__45354 = (0);
while(true){
if((i__45354 < count__45353)){
var vec__45355 = cljs.core._nth.call(null,chunk__45352,i__45354);
var effect_key = cljs.core.nth.call(null,vec__45355,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45355,(1),null);
var temp__4655__auto___45361 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___45361)){
var effect_fn_45362 = temp__4655__auto___45361;
effect_fn_45362.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__45363 = seq__45351;
var G__45364 = chunk__45352;
var G__45365 = count__45353;
var G__45366 = (i__45354 + (1));
seq__45351 = G__45363;
chunk__45352 = G__45364;
count__45353 = G__45365;
i__45354 = G__45366;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45351);
if(temp__4657__auto__){
var seq__45351__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45351__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45351__$1);
var G__45367 = cljs.core.chunk_rest.call(null,seq__45351__$1);
var G__45368 = c__28034__auto__;
var G__45369 = cljs.core.count.call(null,c__28034__auto__);
var G__45370 = (0);
seq__45351 = G__45367;
chunk__45352 = G__45368;
count__45353 = G__45369;
i__45354 = G__45370;
continue;
} else {
var vec__45358 = cljs.core.first.call(null,seq__45351__$1);
var effect_key = cljs.core.nth.call(null,vec__45358,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45358,(1),null);
var temp__4655__auto___45371 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___45371)){
var effect_fn_45372 = temp__4655__auto___45371;
effect_fn_45372.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__45373 = cljs.core.next.call(null,seq__45351__$1);
var G__45374 = null;
var G__45375 = (0);
var G__45376 = (0);
seq__45351 = G__45373;
chunk__45352 = G__45374;
count__45353 = G__45375;
i__45354 = G__45376;
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
var seq__45377 = cljs.core.seq.call(null,value);
var chunk__45378 = null;
var count__45379 = (0);
var i__45380 = (0);
while(true){
if((i__45380 < count__45379)){
var map__45381 = cljs.core._nth.call(null,chunk__45378,i__45380);
var map__45381__$1 = ((((!((map__45381 == null)))?((((map__45381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45381):map__45381);
var effect = map__45381__$1;
var ms = cljs.core.get.call(null,map__45381__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45381__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45377,chunk__45378,count__45379,i__45380,map__45381,map__45381__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45377,chunk__45378,count__45379,i__45380,map__45381,map__45381__$1,effect,ms,dispatch))
,ms);
}

var G__45385 = seq__45377;
var G__45386 = chunk__45378;
var G__45387 = count__45379;
var G__45388 = (i__45380 + (1));
seq__45377 = G__45385;
chunk__45378 = G__45386;
count__45379 = G__45387;
i__45380 = G__45388;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45377);
if(temp__4657__auto__){
var seq__45377__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45377__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45377__$1);
var G__45389 = cljs.core.chunk_rest.call(null,seq__45377__$1);
var G__45390 = c__28034__auto__;
var G__45391 = cljs.core.count.call(null,c__28034__auto__);
var G__45392 = (0);
seq__45377 = G__45389;
chunk__45378 = G__45390;
count__45379 = G__45391;
i__45380 = G__45392;
continue;
} else {
var map__45383 = cljs.core.first.call(null,seq__45377__$1);
var map__45383__$1 = ((((!((map__45383 == null)))?((((map__45383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45383):map__45383);
var effect = map__45383__$1;
var ms = cljs.core.get.call(null,map__45383__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45383__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45377,chunk__45378,count__45379,i__45380,map__45383,map__45383__$1,effect,ms,dispatch,seq__45377__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45377,chunk__45378,count__45379,i__45380,map__45383,map__45383__$1,effect,ms,dispatch,seq__45377__$1,temp__4657__auto__))
,ms);
}

var G__45393 = cljs.core.next.call(null,seq__45377__$1);
var G__45394 = null;
var G__45395 = (0);
var G__45396 = (0);
seq__45377 = G__45393;
chunk__45378 = G__45394;
count__45379 = G__45395;
i__45380 = G__45396;
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
var seq__45397 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__45398 = null;
var count__45399 = (0);
var i__45400 = (0);
while(true){
if((i__45400 < count__45399)){
var event = cljs.core._nth.call(null,chunk__45398,i__45400);
re_frame.router.dispatch.call(null,event);

var G__45401 = seq__45397;
var G__45402 = chunk__45398;
var G__45403 = count__45399;
var G__45404 = (i__45400 + (1));
seq__45397 = G__45401;
chunk__45398 = G__45402;
count__45399 = G__45403;
i__45400 = G__45404;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45397);
if(temp__4657__auto__){
var seq__45397__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45397__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45397__$1);
var G__45405 = cljs.core.chunk_rest.call(null,seq__45397__$1);
var G__45406 = c__28034__auto__;
var G__45407 = cljs.core.count.call(null,c__28034__auto__);
var G__45408 = (0);
seq__45397 = G__45405;
chunk__45398 = G__45406;
count__45399 = G__45407;
i__45400 = G__45408;
continue;
} else {
var event = cljs.core.first.call(null,seq__45397__$1);
re_frame.router.dispatch.call(null,event);

var G__45409 = cljs.core.next.call(null,seq__45397__$1);
var G__45410 = null;
var G__45411 = (0);
var G__45412 = (0);
seq__45397 = G__45409;
chunk__45398 = G__45410;
count__45399 = G__45411;
i__45400 = G__45412;
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
var seq__45413 = cljs.core.seq.call(null,value);
var chunk__45414 = null;
var count__45415 = (0);
var i__45416 = (0);
while(true){
if((i__45416 < count__45415)){
var event = cljs.core._nth.call(null,chunk__45414,i__45416);
clear_event.call(null,event);

var G__45417 = seq__45413;
var G__45418 = chunk__45414;
var G__45419 = count__45415;
var G__45420 = (i__45416 + (1));
seq__45413 = G__45417;
chunk__45414 = G__45418;
count__45415 = G__45419;
i__45416 = G__45420;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45413);
if(temp__4657__auto__){
var seq__45413__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45413__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45413__$1);
var G__45421 = cljs.core.chunk_rest.call(null,seq__45413__$1);
var G__45422 = c__28034__auto__;
var G__45423 = cljs.core.count.call(null,c__28034__auto__);
var G__45424 = (0);
seq__45413 = G__45421;
chunk__45414 = G__45422;
count__45415 = G__45423;
i__45416 = G__45424;
continue;
} else {
var event = cljs.core.first.call(null,seq__45413__$1);
clear_event.call(null,event);

var G__45425 = cljs.core.next.call(null,seq__45413__$1);
var G__45426 = null;
var G__45427 = (0);
var G__45428 = (0);
seq__45413 = G__45425;
chunk__45414 = G__45426;
count__45415 = G__45427;
i__45416 = G__45428;
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

//# sourceMappingURL=fx.js.map?rel=1515855061531
