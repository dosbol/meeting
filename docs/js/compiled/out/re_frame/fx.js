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
var seq__44867 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__44868 = null;
var count__44869 = (0);
var i__44870 = (0);
while(true){
if((i__44870 < count__44869)){
var vec__44871 = cljs.core._nth.call(null,chunk__44868,i__44870);
var effect_key = cljs.core.nth.call(null,vec__44871,(0),null);
var effect_value = cljs.core.nth.call(null,vec__44871,(1),null);
var temp__4655__auto___44877 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___44877)){
var effect_fn_44878 = temp__4655__auto___44877;
effect_fn_44878.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__44879 = seq__44867;
var G__44880 = chunk__44868;
var G__44881 = count__44869;
var G__44882 = (i__44870 + (1));
seq__44867 = G__44879;
chunk__44868 = G__44880;
count__44869 = G__44881;
i__44870 = G__44882;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44867);
if(temp__4657__auto__){
var seq__44867__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44867__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__44867__$1);
var G__44883 = cljs.core.chunk_rest.call(null,seq__44867__$1);
var G__44884 = c__29125__auto__;
var G__44885 = cljs.core.count.call(null,c__29125__auto__);
var G__44886 = (0);
seq__44867 = G__44883;
chunk__44868 = G__44884;
count__44869 = G__44885;
i__44870 = G__44886;
continue;
} else {
var vec__44874 = cljs.core.first.call(null,seq__44867__$1);
var effect_key = cljs.core.nth.call(null,vec__44874,(0),null);
var effect_value = cljs.core.nth.call(null,vec__44874,(1),null);
var temp__4655__auto___44887 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___44887)){
var effect_fn_44888 = temp__4655__auto___44887;
effect_fn_44888.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__44889 = cljs.core.next.call(null,seq__44867__$1);
var G__44890 = null;
var G__44891 = (0);
var G__44892 = (0);
seq__44867 = G__44889;
chunk__44868 = G__44890;
count__44869 = G__44891;
i__44870 = G__44892;
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
var seq__44893 = cljs.core.seq.call(null,value);
var chunk__44894 = null;
var count__44895 = (0);
var i__44896 = (0);
while(true){
if((i__44896 < count__44895)){
var map__44897 = cljs.core._nth.call(null,chunk__44894,i__44896);
var map__44897__$1 = ((((!((map__44897 == null)))?((((map__44897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44897.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44897):map__44897);
var effect = map__44897__$1;
var ms = cljs.core.get.call(null,map__44897__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__44897__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__44893,chunk__44894,count__44895,i__44896,map__44897,map__44897__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__44893,chunk__44894,count__44895,i__44896,map__44897,map__44897__$1,effect,ms,dispatch))
,ms);
}

var G__44901 = seq__44893;
var G__44902 = chunk__44894;
var G__44903 = count__44895;
var G__44904 = (i__44896 + (1));
seq__44893 = G__44901;
chunk__44894 = G__44902;
count__44895 = G__44903;
i__44896 = G__44904;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44893);
if(temp__4657__auto__){
var seq__44893__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44893__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__44893__$1);
var G__44905 = cljs.core.chunk_rest.call(null,seq__44893__$1);
var G__44906 = c__29125__auto__;
var G__44907 = cljs.core.count.call(null,c__29125__auto__);
var G__44908 = (0);
seq__44893 = G__44905;
chunk__44894 = G__44906;
count__44895 = G__44907;
i__44896 = G__44908;
continue;
} else {
var map__44899 = cljs.core.first.call(null,seq__44893__$1);
var map__44899__$1 = ((((!((map__44899 == null)))?((((map__44899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44899):map__44899);
var effect = map__44899__$1;
var ms = cljs.core.get.call(null,map__44899__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__44899__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__44893,chunk__44894,count__44895,i__44896,map__44899,map__44899__$1,effect,ms,dispatch,seq__44893__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__44893,chunk__44894,count__44895,i__44896,map__44899,map__44899__$1,effect,ms,dispatch,seq__44893__$1,temp__4657__auto__))
,ms);
}

var G__44909 = cljs.core.next.call(null,seq__44893__$1);
var G__44910 = null;
var G__44911 = (0);
var G__44912 = (0);
seq__44893 = G__44909;
chunk__44894 = G__44910;
count__44895 = G__44911;
i__44896 = G__44912;
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
var seq__44913 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__44914 = null;
var count__44915 = (0);
var i__44916 = (0);
while(true){
if((i__44916 < count__44915)){
var event = cljs.core._nth.call(null,chunk__44914,i__44916);
re_frame.router.dispatch.call(null,event);

var G__44917 = seq__44913;
var G__44918 = chunk__44914;
var G__44919 = count__44915;
var G__44920 = (i__44916 + (1));
seq__44913 = G__44917;
chunk__44914 = G__44918;
count__44915 = G__44919;
i__44916 = G__44920;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44913);
if(temp__4657__auto__){
var seq__44913__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44913__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__44913__$1);
var G__44921 = cljs.core.chunk_rest.call(null,seq__44913__$1);
var G__44922 = c__29125__auto__;
var G__44923 = cljs.core.count.call(null,c__29125__auto__);
var G__44924 = (0);
seq__44913 = G__44921;
chunk__44914 = G__44922;
count__44915 = G__44923;
i__44916 = G__44924;
continue;
} else {
var event = cljs.core.first.call(null,seq__44913__$1);
re_frame.router.dispatch.call(null,event);

var G__44925 = cljs.core.next.call(null,seq__44913__$1);
var G__44926 = null;
var G__44927 = (0);
var G__44928 = (0);
seq__44913 = G__44925;
chunk__44914 = G__44926;
count__44915 = G__44927;
i__44916 = G__44928;
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
var seq__44929 = cljs.core.seq.call(null,value);
var chunk__44930 = null;
var count__44931 = (0);
var i__44932 = (0);
while(true){
if((i__44932 < count__44931)){
var event = cljs.core._nth.call(null,chunk__44930,i__44932);
clear_event.call(null,event);

var G__44933 = seq__44929;
var G__44934 = chunk__44930;
var G__44935 = count__44931;
var G__44936 = (i__44932 + (1));
seq__44929 = G__44933;
chunk__44930 = G__44934;
count__44931 = G__44935;
i__44932 = G__44936;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44929);
if(temp__4657__auto__){
var seq__44929__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44929__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__44929__$1);
var G__44937 = cljs.core.chunk_rest.call(null,seq__44929__$1);
var G__44938 = c__29125__auto__;
var G__44939 = cljs.core.count.call(null,c__29125__auto__);
var G__44940 = (0);
seq__44929 = G__44937;
chunk__44930 = G__44938;
count__44931 = G__44939;
i__44932 = G__44940;
continue;
} else {
var event = cljs.core.first.call(null,seq__44929__$1);
clear_event.call(null,event);

var G__44941 = cljs.core.next.call(null,seq__44929__$1);
var G__44942 = null;
var G__44943 = (0);
var G__44944 = (0);
seq__44929 = G__44941;
chunk__44930 = G__44942;
count__44931 = G__44943;
i__44932 = G__44944;
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

//# sourceMappingURL=fx.js.map?rel=1513400495866
