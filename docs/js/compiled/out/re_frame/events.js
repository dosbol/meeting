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
var make_chain = (function (p1__43734_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__43734_SHARP_));
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

var temp__4657__auto___43735 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___43735)){
var not_i_43736 = temp__4657__auto___43735;
if(cljs.core.fn_QMARK_.call(null,not_i_43736)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_43736);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_43736);
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
var _STAR_handling_STAR_43737 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_43738 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__34576__auto___43751 = re_frame.interop.now.call(null);
var duration__34577__auto___43752 = (end__34576__auto___43751 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__43739_43753 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__43740_43754 = null;
var count__43741_43755 = (0);
var i__43742_43756 = (0);
while(true){
if((i__43742_43756 < count__43741_43755)){
var vec__43743_43757 = cljs.core._nth.call(null,chunk__43740_43754,i__43742_43756);
var k__34578__auto___43758 = cljs.core.nth.call(null,vec__43743_43757,(0),null);
var cb__34579__auto___43759 = cljs.core.nth.call(null,vec__43743_43757,(1),null);
try{cb__34579__auto___43759.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34577__auto___43752,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e43746){if((e43746 instanceof java.lang.Exception)){
var e__34580__auto___43760 = e43746;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__34578__auto___43758,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__34580__auto___43760);
} else {
throw e43746;

}
}
var G__43761 = seq__43739_43753;
var G__43762 = chunk__43740_43754;
var G__43763 = count__43741_43755;
var G__43764 = (i__43742_43756 + (1));
seq__43739_43753 = G__43761;
chunk__43740_43754 = G__43762;
count__43741_43755 = G__43763;
i__43742_43756 = G__43764;
continue;
} else {
var temp__4657__auto___43765 = cljs.core.seq.call(null,seq__43739_43753);
if(temp__4657__auto___43765){
var seq__43739_43766__$1 = temp__4657__auto___43765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43739_43766__$1)){
var c__28034__auto___43767 = cljs.core.chunk_first.call(null,seq__43739_43766__$1);
var G__43768 = cljs.core.chunk_rest.call(null,seq__43739_43766__$1);
var G__43769 = c__28034__auto___43767;
var G__43770 = cljs.core.count.call(null,c__28034__auto___43767);
var G__43771 = (0);
seq__43739_43753 = G__43768;
chunk__43740_43754 = G__43769;
count__43741_43755 = G__43770;
i__43742_43756 = G__43771;
continue;
} else {
var vec__43747_43772 = cljs.core.first.call(null,seq__43739_43766__$1);
var k__34578__auto___43773 = cljs.core.nth.call(null,vec__43747_43772,(0),null);
var cb__34579__auto___43774 = cljs.core.nth.call(null,vec__43747_43772,(1),null);
try{cb__34579__auto___43774.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34577__auto___43752,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e43750){if((e43750 instanceof java.lang.Exception)){
var e__34580__auto___43775 = e43750;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__34578__auto___43773,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__34580__auto___43775);
} else {
throw e43750;

}
}
var G__43776 = cljs.core.next.call(null,seq__43739_43766__$1);
var G__43777 = null;
var G__43778 = (0);
var G__43779 = (0);
seq__43739_43753 = G__43776;
chunk__43740_43754 = G__43777;
count__43741_43755 = G__43778;
i__43742_43756 = G__43779;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_43738;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_43737;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1514289241385
