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
var make_chain = (function (p1__44747_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__44747_SHARP_));
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

var temp__4657__auto___44748 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___44748)){
var not_i_44749 = temp__4657__auto___44748;
if(cljs.core.fn_QMARK_.call(null,not_i_44749)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_44749);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_44749);
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
var _STAR_handling_STAR_44750 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_44751 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__30775__auto___44764 = re_frame.interop.now.call(null);
var duration__30776__auto___44765 = (end__30775__auto___44764 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__44752_44766 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__44753_44767 = null;
var count__44754_44768 = (0);
var i__44755_44769 = (0);
while(true){
if((i__44755_44769 < count__44754_44768)){
var vec__44756_44770 = cljs.core._nth.call(null,chunk__44753_44767,i__44755_44769);
var k__30777__auto___44771 = cljs.core.nth.call(null,vec__44756_44770,(0),null);
var cb__30778__auto___44772 = cljs.core.nth.call(null,vec__44756_44770,(1),null);
try{cb__30778__auto___44772.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30776__auto___44765,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e44759){if((e44759 instanceof java.lang.Exception)){
var e__30779__auto___44773 = e44759;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30777__auto___44771,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30779__auto___44773);
} else {
throw e44759;

}
}
var G__44774 = seq__44752_44766;
var G__44775 = chunk__44753_44767;
var G__44776 = count__44754_44768;
var G__44777 = (i__44755_44769 + (1));
seq__44752_44766 = G__44774;
chunk__44753_44767 = G__44775;
count__44754_44768 = G__44776;
i__44755_44769 = G__44777;
continue;
} else {
var temp__4657__auto___44778 = cljs.core.seq.call(null,seq__44752_44766);
if(temp__4657__auto___44778){
var seq__44752_44779__$1 = temp__4657__auto___44778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44752_44779__$1)){
var c__29125__auto___44780 = cljs.core.chunk_first.call(null,seq__44752_44779__$1);
var G__44781 = cljs.core.chunk_rest.call(null,seq__44752_44779__$1);
var G__44782 = c__29125__auto___44780;
var G__44783 = cljs.core.count.call(null,c__29125__auto___44780);
var G__44784 = (0);
seq__44752_44766 = G__44781;
chunk__44753_44767 = G__44782;
count__44754_44768 = G__44783;
i__44755_44769 = G__44784;
continue;
} else {
var vec__44760_44785 = cljs.core.first.call(null,seq__44752_44779__$1);
var k__30777__auto___44786 = cljs.core.nth.call(null,vec__44760_44785,(0),null);
var cb__30778__auto___44787 = cljs.core.nth.call(null,vec__44760_44785,(1),null);
try{cb__30778__auto___44787.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30776__auto___44765,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e44763){if((e44763 instanceof java.lang.Exception)){
var e__30779__auto___44788 = e44763;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30777__auto___44786,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30779__auto___44788);
} else {
throw e44763;

}
}
var G__44789 = cljs.core.next.call(null,seq__44752_44779__$1);
var G__44790 = null;
var G__44791 = (0);
var G__44792 = (0);
seq__44752_44766 = G__44789;
chunk__44753_44767 = G__44790;
count__44754_44768 = G__44791;
i__44755_44769 = G__44792;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_44751;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_44750;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1513400494994
