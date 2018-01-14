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
var seq__45348 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__45349 = null;
var count__45350 = (0);
var i__45351 = (0);
while(true){
if((i__45351 < count__45350)){
var vec__45352 = cljs.core._nth.call(null,chunk__45349,i__45351);
var effect_key = cljs.core.nth.call(null,vec__45352,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45352,(1),null);
var temp__4655__auto___45358 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___45358)){
var effect_fn_45359 = temp__4655__auto___45358;
effect_fn_45359.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__45360 = seq__45348;
var G__45361 = chunk__45349;
var G__45362 = count__45350;
var G__45363 = (i__45351 + (1));
seq__45348 = G__45360;
chunk__45349 = G__45361;
count__45350 = G__45362;
i__45351 = G__45363;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45348);
if(temp__4657__auto__){
var seq__45348__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45348__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45348__$1);
var G__45364 = cljs.core.chunk_rest.call(null,seq__45348__$1);
var G__45365 = c__28034__auto__;
var G__45366 = cljs.core.count.call(null,c__28034__auto__);
var G__45367 = (0);
seq__45348 = G__45364;
chunk__45349 = G__45365;
count__45350 = G__45366;
i__45351 = G__45367;
continue;
} else {
var vec__45355 = cljs.core.first.call(null,seq__45348__$1);
var effect_key = cljs.core.nth.call(null,vec__45355,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45355,(1),null);
var temp__4655__auto___45368 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___45368)){
var effect_fn_45369 = temp__4655__auto___45368;
effect_fn_45369.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__45370 = cljs.core.next.call(null,seq__45348__$1);
var G__45371 = null;
var G__45372 = (0);
var G__45373 = (0);
seq__45348 = G__45370;
chunk__45349 = G__45371;
count__45350 = G__45372;
i__45351 = G__45373;
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
var seq__45374 = cljs.core.seq.call(null,value);
var chunk__45375 = null;
var count__45376 = (0);
var i__45377 = (0);
while(true){
if((i__45377 < count__45376)){
var map__45378 = cljs.core._nth.call(null,chunk__45375,i__45377);
var map__45378__$1 = ((((!((map__45378 == null)))?((((map__45378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45378.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45378):map__45378);
var effect = map__45378__$1;
var ms = cljs.core.get.call(null,map__45378__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45378__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45374,chunk__45375,count__45376,i__45377,map__45378,map__45378__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45374,chunk__45375,count__45376,i__45377,map__45378,map__45378__$1,effect,ms,dispatch))
,ms);
}

var G__45382 = seq__45374;
var G__45383 = chunk__45375;
var G__45384 = count__45376;
var G__45385 = (i__45377 + (1));
seq__45374 = G__45382;
chunk__45375 = G__45383;
count__45376 = G__45384;
i__45377 = G__45385;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45374);
if(temp__4657__auto__){
var seq__45374__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45374__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45374__$1);
var G__45386 = cljs.core.chunk_rest.call(null,seq__45374__$1);
var G__45387 = c__28034__auto__;
var G__45388 = cljs.core.count.call(null,c__28034__auto__);
var G__45389 = (0);
seq__45374 = G__45386;
chunk__45375 = G__45387;
count__45376 = G__45388;
i__45377 = G__45389;
continue;
} else {
var map__45380 = cljs.core.first.call(null,seq__45374__$1);
var map__45380__$1 = ((((!((map__45380 == null)))?((((map__45380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45380):map__45380);
var effect = map__45380__$1;
var ms = cljs.core.get.call(null,map__45380__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45380__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45374,chunk__45375,count__45376,i__45377,map__45380,map__45380__$1,effect,ms,dispatch,seq__45374__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45374,chunk__45375,count__45376,i__45377,map__45380,map__45380__$1,effect,ms,dispatch,seq__45374__$1,temp__4657__auto__))
,ms);
}

var G__45390 = cljs.core.next.call(null,seq__45374__$1);
var G__45391 = null;
var G__45392 = (0);
var G__45393 = (0);
seq__45374 = G__45390;
chunk__45375 = G__45391;
count__45376 = G__45392;
i__45377 = G__45393;
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
var seq__45394 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__45395 = null;
var count__45396 = (0);
var i__45397 = (0);
while(true){
if((i__45397 < count__45396)){
var event = cljs.core._nth.call(null,chunk__45395,i__45397);
re_frame.router.dispatch.call(null,event);

var G__45398 = seq__45394;
var G__45399 = chunk__45395;
var G__45400 = count__45396;
var G__45401 = (i__45397 + (1));
seq__45394 = G__45398;
chunk__45395 = G__45399;
count__45396 = G__45400;
i__45397 = G__45401;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45394);
if(temp__4657__auto__){
var seq__45394__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45394__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45394__$1);
var G__45402 = cljs.core.chunk_rest.call(null,seq__45394__$1);
var G__45403 = c__28034__auto__;
var G__45404 = cljs.core.count.call(null,c__28034__auto__);
var G__45405 = (0);
seq__45394 = G__45402;
chunk__45395 = G__45403;
count__45396 = G__45404;
i__45397 = G__45405;
continue;
} else {
var event = cljs.core.first.call(null,seq__45394__$1);
re_frame.router.dispatch.call(null,event);

var G__45406 = cljs.core.next.call(null,seq__45394__$1);
var G__45407 = null;
var G__45408 = (0);
var G__45409 = (0);
seq__45394 = G__45406;
chunk__45395 = G__45407;
count__45396 = G__45408;
i__45397 = G__45409;
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
var seq__45410 = cljs.core.seq.call(null,value);
var chunk__45411 = null;
var count__45412 = (0);
var i__45413 = (0);
while(true){
if((i__45413 < count__45412)){
var event = cljs.core._nth.call(null,chunk__45411,i__45413);
clear_event.call(null,event);

var G__45414 = seq__45410;
var G__45415 = chunk__45411;
var G__45416 = count__45412;
var G__45417 = (i__45413 + (1));
seq__45410 = G__45414;
chunk__45411 = G__45415;
count__45412 = G__45416;
i__45413 = G__45417;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45410);
if(temp__4657__auto__){
var seq__45410__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45410__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45410__$1);
var G__45418 = cljs.core.chunk_rest.call(null,seq__45410__$1);
var G__45419 = c__28034__auto__;
var G__45420 = cljs.core.count.call(null,c__28034__auto__);
var G__45421 = (0);
seq__45410 = G__45418;
chunk__45411 = G__45419;
count__45412 = G__45420;
i__45413 = G__45421;
continue;
} else {
var event = cljs.core.first.call(null,seq__45410__$1);
clear_event.call(null,event);

var G__45422 = cljs.core.next.call(null,seq__45410__$1);
var G__45423 = null;
var G__45424 = (0);
var G__45425 = (0);
seq__45410 = G__45422;
chunk__45411 = G__45423;
count__45412 = G__45424;
i__45413 = G__45425;
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

//# sourceMappingURL=fx.js.map?rel=1515953310742
