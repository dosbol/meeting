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
var seq__45410 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__45411 = null;
var count__45412 = (0);
var i__45413 = (0);
while(true){
if((i__45413 < count__45412)){
var vec__45414 = cljs.core._nth.call(null,chunk__45411,i__45413);
var effect_key = cljs.core.nth.call(null,vec__45414,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45414,(1),null);
var temp__4655__auto___45420 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___45420)){
var effect_fn_45421 = temp__4655__auto___45420;
effect_fn_45421.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__45422 = seq__45410;
var G__45423 = chunk__45411;
var G__45424 = count__45412;
var G__45425 = (i__45413 + (1));
seq__45410 = G__45422;
chunk__45411 = G__45423;
count__45412 = G__45424;
i__45413 = G__45425;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45410);
if(temp__4657__auto__){
var seq__45410__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45410__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45410__$1);
var G__45426 = cljs.core.chunk_rest.call(null,seq__45410__$1);
var G__45427 = c__28034__auto__;
var G__45428 = cljs.core.count.call(null,c__28034__auto__);
var G__45429 = (0);
seq__45410 = G__45426;
chunk__45411 = G__45427;
count__45412 = G__45428;
i__45413 = G__45429;
continue;
} else {
var vec__45417 = cljs.core.first.call(null,seq__45410__$1);
var effect_key = cljs.core.nth.call(null,vec__45417,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45417,(1),null);
var temp__4655__auto___45430 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___45430)){
var effect_fn_45431 = temp__4655__auto___45430;
effect_fn_45431.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__45432 = cljs.core.next.call(null,seq__45410__$1);
var G__45433 = null;
var G__45434 = (0);
var G__45435 = (0);
seq__45410 = G__45432;
chunk__45411 = G__45433;
count__45412 = G__45434;
i__45413 = G__45435;
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
var seq__45436 = cljs.core.seq.call(null,value);
var chunk__45437 = null;
var count__45438 = (0);
var i__45439 = (0);
while(true){
if((i__45439 < count__45438)){
var map__45440 = cljs.core._nth.call(null,chunk__45437,i__45439);
var map__45440__$1 = ((((!((map__45440 == null)))?((((map__45440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45440):map__45440);
var effect = map__45440__$1;
var ms = cljs.core.get.call(null,map__45440__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45440__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45436,chunk__45437,count__45438,i__45439,map__45440,map__45440__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45436,chunk__45437,count__45438,i__45439,map__45440,map__45440__$1,effect,ms,dispatch))
,ms);
}

var G__45444 = seq__45436;
var G__45445 = chunk__45437;
var G__45446 = count__45438;
var G__45447 = (i__45439 + (1));
seq__45436 = G__45444;
chunk__45437 = G__45445;
count__45438 = G__45446;
i__45439 = G__45447;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45436);
if(temp__4657__auto__){
var seq__45436__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45436__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45436__$1);
var G__45448 = cljs.core.chunk_rest.call(null,seq__45436__$1);
var G__45449 = c__28034__auto__;
var G__45450 = cljs.core.count.call(null,c__28034__auto__);
var G__45451 = (0);
seq__45436 = G__45448;
chunk__45437 = G__45449;
count__45438 = G__45450;
i__45439 = G__45451;
continue;
} else {
var map__45442 = cljs.core.first.call(null,seq__45436__$1);
var map__45442__$1 = ((((!((map__45442 == null)))?((((map__45442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45442):map__45442);
var effect = map__45442__$1;
var ms = cljs.core.get.call(null,map__45442__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45442__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45436,chunk__45437,count__45438,i__45439,map__45442,map__45442__$1,effect,ms,dispatch,seq__45436__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45436,chunk__45437,count__45438,i__45439,map__45442,map__45442__$1,effect,ms,dispatch,seq__45436__$1,temp__4657__auto__))
,ms);
}

var G__45452 = cljs.core.next.call(null,seq__45436__$1);
var G__45453 = null;
var G__45454 = (0);
var G__45455 = (0);
seq__45436 = G__45452;
chunk__45437 = G__45453;
count__45438 = G__45454;
i__45439 = G__45455;
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
var seq__45456 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__45457 = null;
var count__45458 = (0);
var i__45459 = (0);
while(true){
if((i__45459 < count__45458)){
var event = cljs.core._nth.call(null,chunk__45457,i__45459);
re_frame.router.dispatch.call(null,event);

var G__45460 = seq__45456;
var G__45461 = chunk__45457;
var G__45462 = count__45458;
var G__45463 = (i__45459 + (1));
seq__45456 = G__45460;
chunk__45457 = G__45461;
count__45458 = G__45462;
i__45459 = G__45463;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45456);
if(temp__4657__auto__){
var seq__45456__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45456__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45456__$1);
var G__45464 = cljs.core.chunk_rest.call(null,seq__45456__$1);
var G__45465 = c__28034__auto__;
var G__45466 = cljs.core.count.call(null,c__28034__auto__);
var G__45467 = (0);
seq__45456 = G__45464;
chunk__45457 = G__45465;
count__45458 = G__45466;
i__45459 = G__45467;
continue;
} else {
var event = cljs.core.first.call(null,seq__45456__$1);
re_frame.router.dispatch.call(null,event);

var G__45468 = cljs.core.next.call(null,seq__45456__$1);
var G__45469 = null;
var G__45470 = (0);
var G__45471 = (0);
seq__45456 = G__45468;
chunk__45457 = G__45469;
count__45458 = G__45470;
i__45459 = G__45471;
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
var seq__45472 = cljs.core.seq.call(null,value);
var chunk__45473 = null;
var count__45474 = (0);
var i__45475 = (0);
while(true){
if((i__45475 < count__45474)){
var event = cljs.core._nth.call(null,chunk__45473,i__45475);
clear_event.call(null,event);

var G__45476 = seq__45472;
var G__45477 = chunk__45473;
var G__45478 = count__45474;
var G__45479 = (i__45475 + (1));
seq__45472 = G__45476;
chunk__45473 = G__45477;
count__45474 = G__45478;
i__45475 = G__45479;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45472);
if(temp__4657__auto__){
var seq__45472__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45472__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45472__$1);
var G__45480 = cljs.core.chunk_rest.call(null,seq__45472__$1);
var G__45481 = c__28034__auto__;
var G__45482 = cljs.core.count.call(null,c__28034__auto__);
var G__45483 = (0);
seq__45472 = G__45480;
chunk__45473 = G__45481;
count__45474 = G__45482;
i__45475 = G__45483;
continue;
} else {
var event = cljs.core.first.call(null,seq__45472__$1);
clear_event.call(null,event);

var G__45484 = cljs.core.next.call(null,seq__45472__$1);
var G__45485 = null;
var G__45486 = (0);
var G__45487 = (0);
seq__45472 = G__45484;
chunk__45473 = G__45485;
count__45474 = G__45486;
i__45475 = G__45487;
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

//# sourceMappingURL=fx.js.map?rel=1516093641050
