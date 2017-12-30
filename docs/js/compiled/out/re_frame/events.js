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
var make_chain = (function (p1__45213_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__45213_SHARP_));
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

var temp__4657__auto___45214 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___45214)){
var not_i_45215 = temp__4657__auto___45214;
if(cljs.core.fn_QMARK_.call(null,not_i_45215)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_45215);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_45215);
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
var _STAR_handling_STAR_45216 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_45217 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33996__auto___45230 = re_frame.interop.now.call(null);
var duration__33997__auto___45231 = (end__33996__auto___45230 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__45218_45232 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__45219_45233 = null;
var count__45220_45234 = (0);
var i__45221_45235 = (0);
while(true){
if((i__45221_45235 < count__45220_45234)){
var vec__45222_45236 = cljs.core._nth.call(null,chunk__45219_45233,i__45221_45235);
var k__33998__auto___45237 = cljs.core.nth.call(null,vec__45222_45236,(0),null);
var cb__33999__auto___45238 = cljs.core.nth.call(null,vec__45222_45236,(1),null);
try{cb__33999__auto___45238.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33997__auto___45231,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e45225){if((e45225 instanceof java.lang.Exception)){
var e__34000__auto___45239 = e45225;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33998__auto___45237,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__34000__auto___45239);
} else {
throw e45225;

}
}
var G__45240 = seq__45218_45232;
var G__45241 = chunk__45219_45233;
var G__45242 = count__45220_45234;
var G__45243 = (i__45221_45235 + (1));
seq__45218_45232 = G__45240;
chunk__45219_45233 = G__45241;
count__45220_45234 = G__45242;
i__45221_45235 = G__45243;
continue;
} else {
var temp__4657__auto___45244 = cljs.core.seq.call(null,seq__45218_45232);
if(temp__4657__auto___45244){
var seq__45218_45245__$1 = temp__4657__auto___45244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45218_45245__$1)){
var c__28035__auto___45246 = cljs.core.chunk_first.call(null,seq__45218_45245__$1);
var G__45247 = cljs.core.chunk_rest.call(null,seq__45218_45245__$1);
var G__45248 = c__28035__auto___45246;
var G__45249 = cljs.core.count.call(null,c__28035__auto___45246);
var G__45250 = (0);
seq__45218_45232 = G__45247;
chunk__45219_45233 = G__45248;
count__45220_45234 = G__45249;
i__45221_45235 = G__45250;
continue;
} else {
var vec__45226_45251 = cljs.core.first.call(null,seq__45218_45245__$1);
var k__33998__auto___45252 = cljs.core.nth.call(null,vec__45226_45251,(0),null);
var cb__33999__auto___45253 = cljs.core.nth.call(null,vec__45226_45251,(1),null);
try{cb__33999__auto___45253.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33997__auto___45231,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e45229){if((e45229 instanceof java.lang.Exception)){
var e__34000__auto___45254 = e45229;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__33998__auto___45252,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__34000__auto___45254);
} else {
throw e45229;

}
}
var G__45255 = cljs.core.next.call(null,seq__45218_45245__$1);
var G__45256 = null;
var G__45257 = (0);
var G__45258 = (0);
seq__45218_45232 = G__45255;
chunk__45219_45233 = G__45256;
count__45220_45234 = G__45257;
i__45221_45235 = G__45258;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_45217;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_45216;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1514660198792
