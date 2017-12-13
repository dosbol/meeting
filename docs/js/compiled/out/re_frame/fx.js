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
var seq__44847 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__44848 = null;
var count__44849 = (0);
var i__44850 = (0);
while(true){
if((i__44850 < count__44849)){
var vec__44851 = cljs.core._nth.call(null,chunk__44848,i__44850);
var effect_key = cljs.core.nth.call(null,vec__44851,(0),null);
var effect_value = cljs.core.nth.call(null,vec__44851,(1),null);
var temp__4655__auto___44857 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___44857)){
var effect_fn_44858 = temp__4655__auto___44857;
effect_fn_44858.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__44859 = seq__44847;
var G__44860 = chunk__44848;
var G__44861 = count__44849;
var G__44862 = (i__44850 + (1));
seq__44847 = G__44859;
chunk__44848 = G__44860;
count__44849 = G__44861;
i__44850 = G__44862;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44847);
if(temp__4657__auto__){
var seq__44847__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44847__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__44847__$1);
var G__44863 = cljs.core.chunk_rest.call(null,seq__44847__$1);
var G__44864 = c__29125__auto__;
var G__44865 = cljs.core.count.call(null,c__29125__auto__);
var G__44866 = (0);
seq__44847 = G__44863;
chunk__44848 = G__44864;
count__44849 = G__44865;
i__44850 = G__44866;
continue;
} else {
var vec__44854 = cljs.core.first.call(null,seq__44847__$1);
var effect_key = cljs.core.nth.call(null,vec__44854,(0),null);
var effect_value = cljs.core.nth.call(null,vec__44854,(1),null);
var temp__4655__auto___44867 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___44867)){
var effect_fn_44868 = temp__4655__auto___44867;
effect_fn_44868.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__44869 = cljs.core.next.call(null,seq__44847__$1);
var G__44870 = null;
var G__44871 = (0);
var G__44872 = (0);
seq__44847 = G__44869;
chunk__44848 = G__44870;
count__44849 = G__44871;
i__44850 = G__44872;
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
var seq__44873 = cljs.core.seq.call(null,value);
var chunk__44874 = null;
var count__44875 = (0);
var i__44876 = (0);
while(true){
if((i__44876 < count__44875)){
var map__44877 = cljs.core._nth.call(null,chunk__44874,i__44876);
var map__44877__$1 = ((((!((map__44877 == null)))?((((map__44877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44877):map__44877);
var effect = map__44877__$1;
var ms = cljs.core.get.call(null,map__44877__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__44877__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__44873,chunk__44874,count__44875,i__44876,map__44877,map__44877__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__44873,chunk__44874,count__44875,i__44876,map__44877,map__44877__$1,effect,ms,dispatch))
,ms);
}

var G__44881 = seq__44873;
var G__44882 = chunk__44874;
var G__44883 = count__44875;
var G__44884 = (i__44876 + (1));
seq__44873 = G__44881;
chunk__44874 = G__44882;
count__44875 = G__44883;
i__44876 = G__44884;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44873);
if(temp__4657__auto__){
var seq__44873__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44873__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__44873__$1);
var G__44885 = cljs.core.chunk_rest.call(null,seq__44873__$1);
var G__44886 = c__29125__auto__;
var G__44887 = cljs.core.count.call(null,c__29125__auto__);
var G__44888 = (0);
seq__44873 = G__44885;
chunk__44874 = G__44886;
count__44875 = G__44887;
i__44876 = G__44888;
continue;
} else {
var map__44879 = cljs.core.first.call(null,seq__44873__$1);
var map__44879__$1 = ((((!((map__44879 == null)))?((((map__44879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44879.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44879):map__44879);
var effect = map__44879__$1;
var ms = cljs.core.get.call(null,map__44879__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__44879__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__44873,chunk__44874,count__44875,i__44876,map__44879,map__44879__$1,effect,ms,dispatch,seq__44873__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__44873,chunk__44874,count__44875,i__44876,map__44879,map__44879__$1,effect,ms,dispatch,seq__44873__$1,temp__4657__auto__))
,ms);
}

var G__44889 = cljs.core.next.call(null,seq__44873__$1);
var G__44890 = null;
var G__44891 = (0);
var G__44892 = (0);
seq__44873 = G__44889;
chunk__44874 = G__44890;
count__44875 = G__44891;
i__44876 = G__44892;
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
var seq__44893 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__44894 = null;
var count__44895 = (0);
var i__44896 = (0);
while(true){
if((i__44896 < count__44895)){
var event = cljs.core._nth.call(null,chunk__44894,i__44896);
re_frame.router.dispatch.call(null,event);

var G__44897 = seq__44893;
var G__44898 = chunk__44894;
var G__44899 = count__44895;
var G__44900 = (i__44896 + (1));
seq__44893 = G__44897;
chunk__44894 = G__44898;
count__44895 = G__44899;
i__44896 = G__44900;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44893);
if(temp__4657__auto__){
var seq__44893__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44893__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__44893__$1);
var G__44901 = cljs.core.chunk_rest.call(null,seq__44893__$1);
var G__44902 = c__29125__auto__;
var G__44903 = cljs.core.count.call(null,c__29125__auto__);
var G__44904 = (0);
seq__44893 = G__44901;
chunk__44894 = G__44902;
count__44895 = G__44903;
i__44896 = G__44904;
continue;
} else {
var event = cljs.core.first.call(null,seq__44893__$1);
re_frame.router.dispatch.call(null,event);

var G__44905 = cljs.core.next.call(null,seq__44893__$1);
var G__44906 = null;
var G__44907 = (0);
var G__44908 = (0);
seq__44893 = G__44905;
chunk__44894 = G__44906;
count__44895 = G__44907;
i__44896 = G__44908;
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
var seq__44909 = cljs.core.seq.call(null,value);
var chunk__44910 = null;
var count__44911 = (0);
var i__44912 = (0);
while(true){
if((i__44912 < count__44911)){
var event = cljs.core._nth.call(null,chunk__44910,i__44912);
clear_event.call(null,event);

var G__44913 = seq__44909;
var G__44914 = chunk__44910;
var G__44915 = count__44911;
var G__44916 = (i__44912 + (1));
seq__44909 = G__44913;
chunk__44910 = G__44914;
count__44911 = G__44915;
i__44912 = G__44916;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44909);
if(temp__4657__auto__){
var seq__44909__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44909__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__44909__$1);
var G__44917 = cljs.core.chunk_rest.call(null,seq__44909__$1);
var G__44918 = c__29125__auto__;
var G__44919 = cljs.core.count.call(null,c__29125__auto__);
var G__44920 = (0);
seq__44909 = G__44917;
chunk__44910 = G__44918;
count__44911 = G__44919;
i__44912 = G__44920;
continue;
} else {
var event = cljs.core.first.call(null,seq__44909__$1);
clear_event.call(null,event);

var G__44921 = cljs.core.next.call(null,seq__44909__$1);
var G__44922 = null;
var G__44923 = (0);
var G__44924 = (0);
seq__44909 = G__44921;
chunk__44910 = G__44922;
count__44911 = G__44923;
i__44912 = G__44924;
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

//# sourceMappingURL=fx.js.map?rel=1513190830620
