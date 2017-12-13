// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__44727_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__44727_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___44728 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___44728)){
var not_i_44729 = temp__4657__auto___44728;
if(cljs.core.fn_QMARK_.call(null,not_i_44729)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_44729);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_44729);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_44730 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_44731 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__30775__auto___44744 = re_frame.interop.now.call(null);
var duration__30776__auto___44745 = (end__30775__auto___44744 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__44732_44746 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__44733_44747 = null;
var count__44734_44748 = (0);
var i__44735_44749 = (0);
while(true){
if((i__44735_44749 < count__44734_44748)){
var vec__44736_44750 = cljs.core._nth.call(null,chunk__44733_44747,i__44735_44749);
var k__30777__auto___44751 = cljs.core.nth.call(null,vec__44736_44750,(0),null);
var cb__30778__auto___44752 = cljs.core.nth.call(null,vec__44736_44750,(1),null);
try{cb__30778__auto___44752.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30776__auto___44745,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e44739){if((e44739 instanceof java.lang.Exception)){
var e__30779__auto___44753 = e44739;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30777__auto___44751,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30779__auto___44753);
} else {
throw e44739;

}
}
var G__44754 = seq__44732_44746;
var G__44755 = chunk__44733_44747;
var G__44756 = count__44734_44748;
var G__44757 = (i__44735_44749 + (1));
seq__44732_44746 = G__44754;
chunk__44733_44747 = G__44755;
count__44734_44748 = G__44756;
i__44735_44749 = G__44757;
continue;
} else {
var temp__4657__auto___44758 = cljs.core.seq.call(null,seq__44732_44746);
if(temp__4657__auto___44758){
var seq__44732_44759__$1 = temp__4657__auto___44758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44732_44759__$1)){
var c__29125__auto___44760 = cljs.core.chunk_first.call(null,seq__44732_44759__$1);
var G__44761 = cljs.core.chunk_rest.call(null,seq__44732_44759__$1);
var G__44762 = c__29125__auto___44760;
var G__44763 = cljs.core.count.call(null,c__29125__auto___44760);
var G__44764 = (0);
seq__44732_44746 = G__44761;
chunk__44733_44747 = G__44762;
count__44734_44748 = G__44763;
i__44735_44749 = G__44764;
continue;
} else {
var vec__44740_44765 = cljs.core.first.call(null,seq__44732_44759__$1);
var k__30777__auto___44766 = cljs.core.nth.call(null,vec__44740_44765,(0),null);
var cb__30778__auto___44767 = cljs.core.nth.call(null,vec__44740_44765,(1),null);
try{cb__30778__auto___44767.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30776__auto___44745,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e44743){if((e44743 instanceof java.lang.Exception)){
var e__30779__auto___44768 = e44743;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30777__auto___44766,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30779__auto___44768);
} else {
throw e44743;

}
}
var G__44769 = cljs.core.next.call(null,seq__44732_44759__$1);
var G__44770 = null;
var G__44771 = (0);
var G__44772 = (0);
seq__44732_44746 = G__44769;
chunk__44733_44747 = G__44770;
count__44734_44748 = G__44771;
i__44735_44749 = G__44772;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_44731;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_44730;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1513190829817
