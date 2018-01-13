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
var make_chain = (function (p1__45231_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__45231_SHARP_));
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

var temp__4657__auto___45232 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___45232)){
var not_i_45233 = temp__4657__auto___45232;
if(cljs.core.fn_QMARK_.call(null,not_i_45233)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_45233);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_45233);
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
var _STAR_handling_STAR_45234 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_45235 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33994__auto___45248 = re_frame.interop.now.call(null);
var duration__33995__auto___45249 = (end__33994__auto___45248 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__45236_45250 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__45237_45251 = null;
var count__45238_45252 = (0);
var i__45239_45253 = (0);
while(true){
if((i__45239_45253 < count__45238_45252)){
var vec__45240_45254 = cljs.core._nth.call(null,chunk__45237_45251,i__45239_45253);
var k__33996__auto___45255 = cljs.core.nth.call(null,vec__45240_45254,(0),null);
var cb__33997__auto___45256 = cljs.core.nth.call(null,vec__45240_45254,(1),null);
try{cb__33997__auto___45256.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33995__auto___45249,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e45243){if((e45243 instanceof java.lang.Exception)){
var e__33998__auto___45257 = e45243;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33996__auto___45255,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33998__auto___45257);
} else {
throw e45243;

}
}
var G__45258 = seq__45236_45250;
var G__45259 = chunk__45237_45251;
var G__45260 = count__45238_45252;
var G__45261 = (i__45239_45253 + (1));
seq__45236_45250 = G__45258;
chunk__45237_45251 = G__45259;
count__45238_45252 = G__45260;
i__45239_45253 = G__45261;
continue;
} else {
var temp__4657__auto___45262 = cljs.core.seq.call(null,seq__45236_45250);
if(temp__4657__auto___45262){
var seq__45236_45263__$1 = temp__4657__auto___45262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45236_45263__$1)){
var c__28034__auto___45264 = cljs.core.chunk_first.call(null,seq__45236_45263__$1);
var G__45265 = cljs.core.chunk_rest.call(null,seq__45236_45263__$1);
var G__45266 = c__28034__auto___45264;
var G__45267 = cljs.core.count.call(null,c__28034__auto___45264);
var G__45268 = (0);
seq__45236_45250 = G__45265;
chunk__45237_45251 = G__45266;
count__45238_45252 = G__45267;
i__45239_45253 = G__45268;
continue;
} else {
var vec__45244_45269 = cljs.core.first.call(null,seq__45236_45263__$1);
var k__33996__auto___45270 = cljs.core.nth.call(null,vec__45244_45269,(0),null);
var cb__33997__auto___45271 = cljs.core.nth.call(null,vec__45244_45269,(1),null);
try{cb__33997__auto___45271.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33995__auto___45249,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e45247){if((e45247 instanceof java.lang.Exception)){
var e__33998__auto___45272 = e45247;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33996__auto___45270,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__33998__auto___45272);
} else {
throw e45247;

}
}
var G__45273 = cljs.core.next.call(null,seq__45236_45263__$1);
var G__45274 = null;
var G__45275 = (0);
var G__45276 = (0);
seq__45236_45250 = G__45273;
chunk__45237_45251 = G__45274;
count__45238_45252 = G__45275;
i__45239_45253 = G__45276;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_45235;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_45234;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1515855060599
