// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__45520_45530 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__45521_45531 = null;
var count__45522_45532 = (0);
var i__45523_45533 = (0);
while(true){
if((i__45523_45533 < count__45522_45532)){
var vec__45524_45534 = cljs.core._nth.call(null,chunk__45521_45531,i__45523_45533);
var k_45535 = cljs.core.nth.call(null,vec__45524_45534,(0),null);
var rxn_45536 = cljs.core.nth.call(null,vec__45524_45534,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_45536);

var G__45537 = seq__45520_45530;
var G__45538 = chunk__45521_45531;
var G__45539 = count__45522_45532;
var G__45540 = (i__45523_45533 + (1));
seq__45520_45530 = G__45537;
chunk__45521_45531 = G__45538;
count__45522_45532 = G__45539;
i__45523_45533 = G__45540;
continue;
} else {
var temp__4657__auto___45541 = cljs.core.seq.call(null,seq__45520_45530);
if(temp__4657__auto___45541){
var seq__45520_45542__$1 = temp__4657__auto___45541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45520_45542__$1)){
var c__28034__auto___45543 = cljs.core.chunk_first.call(null,seq__45520_45542__$1);
var G__45544 = cljs.core.chunk_rest.call(null,seq__45520_45542__$1);
var G__45545 = c__28034__auto___45543;
var G__45546 = cljs.core.count.call(null,c__28034__auto___45543);
var G__45547 = (0);
seq__45520_45530 = G__45544;
chunk__45521_45531 = G__45545;
count__45522_45532 = G__45546;
i__45523_45533 = G__45547;
continue;
} else {
var vec__45527_45548 = cljs.core.first.call(null,seq__45520_45542__$1);
var k_45549 = cljs.core.nth.call(null,vec__45527_45548,(0),null);
var rxn_45550 = cljs.core.nth.call(null,vec__45527_45548,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_45550);

var G__45551 = cljs.core.next.call(null,seq__45520_45542__$1);
var G__45552 = null;
var G__45553 = (0);
var G__45554 = (0);
seq__45520_45530 = G__45551;
chunk__45521_45531 = G__45552;
count__45522_45532 = G__45553;
i__45523_45533 = G__45554;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_45555 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33995__auto___45568 = re_frame.interop.now.call(null);
var duration__33996__auto___45569 = (end__33995__auto___45568 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__45556_45570 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__45557_45571 = null;
var count__45558_45572 = (0);
var i__45559_45573 = (0);
while(true){
if((i__45559_45573 < count__45558_45572)){
var vec__45560_45574 = cljs.core._nth.call(null,chunk__45557_45571,i__45559_45573);
var k__33997__auto___45575 = cljs.core.nth.call(null,vec__45560_45574,(0),null);
var cb__33998__auto___45576 = cljs.core.nth.call(null,vec__45560_45574,(1),null);
try{cb__33998__auto___45576.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33996__auto___45569,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e45563){if((e45563 instanceof java.lang.Exception)){
var e__33999__auto___45577 = e45563;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33997__auto___45575,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33999__auto___45577);
} else {
throw e45563;

}
}
var G__45578 = seq__45556_45570;
var G__45579 = chunk__45557_45571;
var G__45580 = count__45558_45572;
var G__45581 = (i__45559_45573 + (1));
seq__45556_45570 = G__45578;
chunk__45557_45571 = G__45579;
count__45558_45572 = G__45580;
i__45559_45573 = G__45581;
continue;
} else {
var temp__4657__auto___45582 = cljs.core.seq.call(null,seq__45556_45570);
if(temp__4657__auto___45582){
var seq__45556_45583__$1 = temp__4657__auto___45582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45556_45583__$1)){
var c__28034__auto___45584 = cljs.core.chunk_first.call(null,seq__45556_45583__$1);
var G__45585 = cljs.core.chunk_rest.call(null,seq__45556_45583__$1);
var G__45586 = c__28034__auto___45584;
var G__45587 = cljs.core.count.call(null,c__28034__auto___45584);
var G__45588 = (0);
seq__45556_45570 = G__45585;
chunk__45557_45571 = G__45586;
count__45558_45572 = G__45587;
i__45559_45573 = G__45588;
continue;
} else {
var vec__45564_45589 = cljs.core.first.call(null,seq__45556_45583__$1);
var k__33997__auto___45590 = cljs.core.nth.call(null,vec__45564_45589,(0),null);
var cb__33998__auto___45591 = cljs.core.nth.call(null,vec__45564_45589,(1),null);
try{cb__33998__auto___45591.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33996__auto___45569,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e45567){if((e45567 instanceof java.lang.Exception)){
var e__33999__auto___45592 = e45567;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33997__auto___45590,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33999__auto___45592);
} else {
throw e45567;

}
}
var G__45593 = cljs.core.next.call(null,seq__45556_45583__$1);
var G__45594 = null;
var G__45595 = (0);
var G__45596 = (0);
seq__45556_45570 = G__45593;
chunk__45557_45571 = G__45594;
count__45558_45572 = G__45595;
i__45559_45573 = G__45596;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_45555;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45597 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45597;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var G__45599 = arguments.length;
switch (G__45599) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var G__45602 = arguments.length;
switch (G__45602) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_45603 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45630 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45630;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45631 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45631;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45632 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45632;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33995__auto___45633 = re_frame.interop.now.call(null);
var duration__33996__auto___45634 = (end__33995__auto___45633 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__45604_45635 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__45605_45636 = null;
var count__45606_45637 = (0);
var i__45607_45638 = (0);
while(true){
if((i__45607_45638 < count__45606_45637)){
var vec__45608_45639 = cljs.core._nth.call(null,chunk__45605_45636,i__45607_45638);
var k__33997__auto___45640 = cljs.core.nth.call(null,vec__45608_45639,(0),null);
var cb__33998__auto___45641 = cljs.core.nth.call(null,vec__45608_45639,(1),null);
try{cb__33998__auto___45641.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33996__auto___45634,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e45611){if((e45611 instanceof java.lang.Exception)){
var e__33999__auto___45642 = e45611;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33997__auto___45640,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33999__auto___45642);
} else {
throw e45611;

}
}
var G__45643 = seq__45604_45635;
var G__45644 = chunk__45605_45636;
var G__45645 = count__45606_45637;
var G__45646 = (i__45607_45638 + (1));
seq__45604_45635 = G__45643;
chunk__45605_45636 = G__45644;
count__45606_45637 = G__45645;
i__45607_45638 = G__45646;
continue;
} else {
var temp__4657__auto___45647 = cljs.core.seq.call(null,seq__45604_45635);
if(temp__4657__auto___45647){
var seq__45604_45648__$1 = temp__4657__auto___45647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45604_45648__$1)){
var c__28034__auto___45649 = cljs.core.chunk_first.call(null,seq__45604_45648__$1);
var G__45650 = cljs.core.chunk_rest.call(null,seq__45604_45648__$1);
var G__45651 = c__28034__auto___45649;
var G__45652 = cljs.core.count.call(null,c__28034__auto___45649);
var G__45653 = (0);
seq__45604_45635 = G__45650;
chunk__45605_45636 = G__45651;
count__45606_45637 = G__45652;
i__45607_45638 = G__45653;
continue;
} else {
var vec__45612_45654 = cljs.core.first.call(null,seq__45604_45648__$1);
var k__33997__auto___45655 = cljs.core.nth.call(null,vec__45612_45654,(0),null);
var cb__33998__auto___45656 = cljs.core.nth.call(null,vec__45612_45654,(1),null);
try{cb__33998__auto___45656.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33996__auto___45634,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e45615){if((e45615 instanceof java.lang.Exception)){
var e__33999__auto___45657 = e45615;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33997__auto___45655,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33999__auto___45657);
} else {
throw e45615;

}
}
var G__45658 = cljs.core.next.call(null,seq__45604_45648__$1);
var G__45659 = null;
var G__45660 = (0);
var G__45661 = (0);
seq__45604_45635 = G__45658;
chunk__45605_45636 = G__45659;
count__45606_45637 = G__45660;
i__45607_45638 = G__45661;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_45603;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45662 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45662;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45663 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45663;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45664 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45664;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_45616 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45665 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45665;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45666 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45666;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___45667 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___45667)){
var not_reactive_45668 = temp__4657__auto___45667;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_45668);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45669 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45669;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_45616){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_45616))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_45616){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_45616))
);
return re_frame.subs.cache_and_return.call(null,query,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_45616){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_45616))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33995__auto___45670 = re_frame.interop.now.call(null);
var duration__33996__auto___45671 = (end__33995__auto___45670 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__45617_45672 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__45618_45673 = null;
var count__45619_45674 = (0);
var i__45620_45675 = (0);
while(true){
if((i__45620_45675 < count__45619_45674)){
var vec__45621_45676 = cljs.core._nth.call(null,chunk__45618_45673,i__45620_45675);
var k__33997__auto___45677 = cljs.core.nth.call(null,vec__45621_45676,(0),null);
var cb__33998__auto___45678 = cljs.core.nth.call(null,vec__45621_45676,(1),null);
try{cb__33998__auto___45678.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33996__auto___45671,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e45624){if((e45624 instanceof java.lang.Exception)){
var e__33999__auto___45679 = e45624;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33997__auto___45677,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33999__auto___45679);
} else {
throw e45624;

}
}
var G__45680 = seq__45617_45672;
var G__45681 = chunk__45618_45673;
var G__45682 = count__45619_45674;
var G__45683 = (i__45620_45675 + (1));
seq__45617_45672 = G__45680;
chunk__45618_45673 = G__45681;
count__45619_45674 = G__45682;
i__45620_45675 = G__45683;
continue;
} else {
var temp__4657__auto___45684 = cljs.core.seq.call(null,seq__45617_45672);
if(temp__4657__auto___45684){
var seq__45617_45685__$1 = temp__4657__auto___45684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45617_45685__$1)){
var c__28034__auto___45686 = cljs.core.chunk_first.call(null,seq__45617_45685__$1);
var G__45687 = cljs.core.chunk_rest.call(null,seq__45617_45685__$1);
var G__45688 = c__28034__auto___45686;
var G__45689 = cljs.core.count.call(null,c__28034__auto___45686);
var G__45690 = (0);
seq__45617_45672 = G__45687;
chunk__45618_45673 = G__45688;
count__45619_45674 = G__45689;
i__45620_45675 = G__45690;
continue;
} else {
var vec__45625_45691 = cljs.core.first.call(null,seq__45617_45685__$1);
var k__33997__auto___45692 = cljs.core.nth.call(null,vec__45625_45691,(0),null);
var cb__33998__auto___45693 = cljs.core.nth.call(null,vec__45625_45691,(1),null);
try{cb__33998__auto___45693.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33996__auto___45671,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e45628){if((e45628 instanceof java.lang.Exception)){
var e__33999__auto___45694 = e45628;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33997__auto___45692,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33999__auto___45694);
} else {
throw e45628;

}
}
var G__45695 = cljs.core.next.call(null,seq__45617_45685__$1);
var G__45696 = null;
var G__45697 = (0);
var G__45698 = (0);
seq__45617_45672 = G__45695;
chunk__45618_45673 = G__45696;
count__45619_45674 = G__45697;
i__45620_45675 = G__45698;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_45616;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45699 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45699;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45700 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45700;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___45701 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___45701)){
var not_reactive_45702 = temp__4657__auto___45701;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_45702);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45703 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45703;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,query,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return.call(null,query,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__45704){
var vec__45705 = p__45704;
var k = cljs.core.nth.call(null,vec__45705,(0),null);
var v = cljs.core.nth.call(null,vec__45705,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45708 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45708;

} else {
}

return signals__$1;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__28371__auto__ = [];
var len__28364__auto___45741 = arguments.length;
var i__28365__auto___45742 = (0);
while(true){
if((i__28365__auto___45742 < len__28364__auto___45741)){
args__28371__auto__.push((arguments[i__28365__auto___45742]));

var G__45743 = (i__28365__auto___45742 + (1));
i__28365__auto___45742 = G__45743;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__45711 = cljs.core.count.call(null,input_args);
switch (G__45711) {
case (0):
return ((function (G__45711,computation_fn,input_args,err_header){
return (function() {
var G__45745 = null;
var G__45745__1 = (function (_){
return re_frame.db.app_db;
});
var G__45745__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__45745 = function(_,___$1){
switch(arguments.length){
case 1:
return G__45745__1.call(this,_);
case 2:
return G__45745__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__45745.cljs$core$IFn$_invoke$arity$1 = G__45745__1;
G__45745.cljs$core$IFn$_invoke$arity$2 = G__45745__2;
return G__45745;
})()
;})(G__45711,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__45712 = input_args;
var marker = cljs.core.nth.call(null,vec__45712,(0),null);
var vec = cljs.core.nth.call(null,vec__45712,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__45712,marker,vec,G__45711,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,vec);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,vec);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(vec__45712,marker,vec,G__45711,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs))){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__45711,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__45711,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_45715 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{var subscription = computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45746 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45746;

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33995__auto___45747 = re_frame.interop.now.call(null);
var duration__33996__auto___45748 = (end__33995__auto___45747 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__45716_45749 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__45717_45750 = null;
var count__45718_45751 = (0);
var i__45719_45752 = (0);
while(true){
if((i__45719_45752 < count__45718_45751)){
var vec__45720_45753 = cljs.core._nth.call(null,chunk__45717_45750,i__45719_45752);
var k__33997__auto___45754 = cljs.core.nth.call(null,vec__45720_45753,(0),null);
var cb__33998__auto___45755 = cljs.core.nth.call(null,vec__45720_45753,(1),null);
try{cb__33998__auto___45755.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33996__auto___45748,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e45723){if((e45723 instanceof java.lang.Exception)){
var e__33999__auto___45756 = e45723;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33997__auto___45754,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33999__auto___45756);
} else {
throw e45723;

}
}
var G__45757 = seq__45716_45749;
var G__45758 = chunk__45717_45750;
var G__45759 = count__45718_45751;
var G__45760 = (i__45719_45752 + (1));
seq__45716_45749 = G__45757;
chunk__45717_45750 = G__45758;
count__45718_45751 = G__45759;
i__45719_45752 = G__45760;
continue;
} else {
var temp__4657__auto___45761 = cljs.core.seq.call(null,seq__45716_45749);
if(temp__4657__auto___45761){
var seq__45716_45762__$1 = temp__4657__auto___45761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45716_45762__$1)){
var c__28034__auto___45763 = cljs.core.chunk_first.call(null,seq__45716_45762__$1);
var G__45764 = cljs.core.chunk_rest.call(null,seq__45716_45762__$1);
var G__45765 = c__28034__auto___45763;
var G__45766 = cljs.core.count.call(null,c__28034__auto___45763);
var G__45767 = (0);
seq__45716_45749 = G__45764;
chunk__45717_45750 = G__45765;
count__45718_45751 = G__45766;
i__45719_45752 = G__45767;
continue;
} else {
var vec__45724_45768 = cljs.core.first.call(null,seq__45716_45762__$1);
var k__33997__auto___45769 = cljs.core.nth.call(null,vec__45724_45768,(0),null);
var cb__33998__auto___45770 = cljs.core.nth.call(null,vec__45724_45768,(1),null);
try{cb__33998__auto___45770.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33996__auto___45748,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e45727){if((e45727 instanceof java.lang.Exception)){
var e__33999__auto___45771 = e45727;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33997__auto___45769,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33999__auto___45771);
} else {
throw e45727;

}
}
var G__45772 = cljs.core.next.call(null,seq__45716_45762__$1);
var G__45773 = null;
var G__45774 = (0);
var G__45775 = (0);
seq__45716_45749 = G__45772;
chunk__45717_45750 = G__45773;
count__45718_45751 = G__45774;
i__45719_45752 = G__45775;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_45715;
}} else {
var subscription = computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45776 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45776;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_45728 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{var subscription = computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45777 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45777;

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33995__auto___45778 = re_frame.interop.now.call(null);
var duration__33996__auto___45779 = (end__33995__auto___45778 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__45729_45780 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__45730_45781 = null;
var count__45731_45782 = (0);
var i__45732_45783 = (0);
while(true){
if((i__45732_45783 < count__45731_45782)){
var vec__45733_45784 = cljs.core._nth.call(null,chunk__45730_45781,i__45732_45783);
var k__33997__auto___45785 = cljs.core.nth.call(null,vec__45733_45784,(0),null);
var cb__33998__auto___45786 = cljs.core.nth.call(null,vec__45733_45784,(1),null);
try{cb__33998__auto___45786.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33996__auto___45779,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e45736){if((e45736 instanceof java.lang.Exception)){
var e__33999__auto___45787 = e45736;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33997__auto___45785,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33999__auto___45787);
} else {
throw e45736;

}
}
var G__45788 = seq__45729_45780;
var G__45789 = chunk__45730_45781;
var G__45790 = count__45731_45782;
var G__45791 = (i__45732_45783 + (1));
seq__45729_45780 = G__45788;
chunk__45730_45781 = G__45789;
count__45731_45782 = G__45790;
i__45732_45783 = G__45791;
continue;
} else {
var temp__4657__auto___45792 = cljs.core.seq.call(null,seq__45729_45780);
if(temp__4657__auto___45792){
var seq__45729_45793__$1 = temp__4657__auto___45792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45729_45793__$1)){
var c__28034__auto___45794 = cljs.core.chunk_first.call(null,seq__45729_45793__$1);
var G__45795 = cljs.core.chunk_rest.call(null,seq__45729_45793__$1);
var G__45796 = c__28034__auto___45794;
var G__45797 = cljs.core.count.call(null,c__28034__auto___45794);
var G__45798 = (0);
seq__45729_45780 = G__45795;
chunk__45730_45781 = G__45796;
count__45731_45782 = G__45797;
i__45732_45783 = G__45798;
continue;
} else {
var vec__45737_45799 = cljs.core.first.call(null,seq__45729_45793__$1);
var k__33997__auto___45800 = cljs.core.nth.call(null,vec__45737_45799,(0),null);
var cb__33998__auto___45801 = cljs.core.nth.call(null,vec__45737_45799,(1),null);
try{cb__33998__auto___45801.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33996__auto___45779,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e45740){if((e45740 instanceof java.lang.Exception)){
var e__33999__auto___45802 = e45740;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33997__auto___45800,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33999__auto___45802);
} else {
throw e45740;

}
}
var G__45803 = cljs.core.next.call(null,seq__45729_45793__$1);
var G__45804 = null;
var G__45805 = (0);
var G__45806 = (0);
seq__45729_45780 = G__45803;
chunk__45730_45781 = G__45804;
count__45731_45782 = G__45805;
i__45732_45783 = G__45806;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_45728;
}} else {
var subscription = computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__34000__auto___45807 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__34000__auto___45807;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq45709){
var G__45710 = cljs.core.first.call(null,seq45709);
var seq45709__$1 = cljs.core.next.call(null,seq45709);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__45710,seq45709__$1);
});


//# sourceMappingURL=subs.js.map?rel=1516093642134
