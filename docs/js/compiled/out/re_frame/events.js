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
var make_chain = (function (p1__44719_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__44719_SHARP_));
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

var temp__4657__auto___44720 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___44720)){
var not_i_44721 = temp__4657__auto___44720;
if(cljs.core.fn_QMARK_.call(null,not_i_44721)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_44721);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_44721);
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
var _STAR_handling_STAR_44722 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_44723 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__30775__auto___44736 = re_frame.interop.now.call(null);
var duration__30776__auto___44737 = (end__30775__auto___44736 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__44724_44738 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__44725_44739 = null;
var count__44726_44740 = (0);
var i__44727_44741 = (0);
while(true){
if((i__44727_44741 < count__44726_44740)){
var vec__44728_44742 = cljs.core._nth.call(null,chunk__44725_44739,i__44727_44741);
var k__30777__auto___44743 = cljs.core.nth.call(null,vec__44728_44742,(0),null);
var cb__30778__auto___44744 = cljs.core.nth.call(null,vec__44728_44742,(1),null);
try{cb__30778__auto___44744.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30776__auto___44737,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e44731){if((e44731 instanceof java.lang.Exception)){
var e__30779__auto___44745 = e44731;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30777__auto___44743,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30779__auto___44745);
} else {
throw e44731;

}
}
var G__44746 = seq__44724_44738;
var G__44747 = chunk__44725_44739;
var G__44748 = count__44726_44740;
var G__44749 = (i__44727_44741 + (1));
seq__44724_44738 = G__44746;
chunk__44725_44739 = G__44747;
count__44726_44740 = G__44748;
i__44727_44741 = G__44749;
continue;
} else {
var temp__4657__auto___44750 = cljs.core.seq.call(null,seq__44724_44738);
if(temp__4657__auto___44750){
var seq__44724_44751__$1 = temp__4657__auto___44750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44724_44751__$1)){
var c__29125__auto___44752 = cljs.core.chunk_first.call(null,seq__44724_44751__$1);
var G__44753 = cljs.core.chunk_rest.call(null,seq__44724_44751__$1);
var G__44754 = c__29125__auto___44752;
var G__44755 = cljs.core.count.call(null,c__29125__auto___44752);
var G__44756 = (0);
seq__44724_44738 = G__44753;
chunk__44725_44739 = G__44754;
count__44726_44740 = G__44755;
i__44727_44741 = G__44756;
continue;
} else {
var vec__44732_44757 = cljs.core.first.call(null,seq__44724_44751__$1);
var k__30777__auto___44758 = cljs.core.nth.call(null,vec__44732_44757,(0),null);
var cb__30778__auto___44759 = cljs.core.nth.call(null,vec__44732_44757,(1),null);
try{cb__30778__auto___44759.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30776__auto___44737,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e44735){if((e44735 instanceof java.lang.Exception)){
var e__30779__auto___44760 = e44735;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30777__auto___44758,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30779__auto___44760);
} else {
throw e44735;

}
}
var G__44761 = cljs.core.next.call(null,seq__44724_44751__$1);
var G__44762 = null;
var G__44763 = (0);
var G__44764 = (0);
seq__44724_44738 = G__44761;
chunk__44725_44739 = G__44762;
count__44726_44740 = G__44763;
i__44727_44741 = G__44764;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_44723;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_44722;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1512672439815
