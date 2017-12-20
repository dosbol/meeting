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
var seq__44881 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__44882 = null;
var count__44883 = (0);
var i__44884 = (0);
while(true){
if((i__44884 < count__44883)){
var vec__44885 = cljs.core._nth.call(null,chunk__44882,i__44884);
var effect_key = cljs.core.nth.call(null,vec__44885,(0),null);
var effect_value = cljs.core.nth.call(null,vec__44885,(1),null);
var temp__4655__auto___44891 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___44891)){
var effect_fn_44892 = temp__4655__auto___44891;
effect_fn_44892.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__44893 = seq__44881;
var G__44894 = chunk__44882;
var G__44895 = count__44883;
var G__44896 = (i__44884 + (1));
seq__44881 = G__44893;
chunk__44882 = G__44894;
count__44883 = G__44895;
i__44884 = G__44896;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44881);
if(temp__4657__auto__){
var seq__44881__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44881__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__44881__$1);
var G__44897 = cljs.core.chunk_rest.call(null,seq__44881__$1);
var G__44898 = c__29125__auto__;
var G__44899 = cljs.core.count.call(null,c__29125__auto__);
var G__44900 = (0);
seq__44881 = G__44897;
chunk__44882 = G__44898;
count__44883 = G__44899;
i__44884 = G__44900;
continue;
} else {
var vec__44888 = cljs.core.first.call(null,seq__44881__$1);
var effect_key = cljs.core.nth.call(null,vec__44888,(0),null);
var effect_value = cljs.core.nth.call(null,vec__44888,(1),null);
var temp__4655__auto___44901 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___44901)){
var effect_fn_44902 = temp__4655__auto___44901;
effect_fn_44902.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__44903 = cljs.core.next.call(null,seq__44881__$1);
var G__44904 = null;
var G__44905 = (0);
var G__44906 = (0);
seq__44881 = G__44903;
chunk__44882 = G__44904;
count__44883 = G__44905;
i__44884 = G__44906;
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
var seq__44907 = cljs.core.seq.call(null,value);
var chunk__44908 = null;
var count__44909 = (0);
var i__44910 = (0);
while(true){
if((i__44910 < count__44909)){
var map__44911 = cljs.core._nth.call(null,chunk__44908,i__44910);
var map__44911__$1 = ((((!((map__44911 == null)))?((((map__44911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44911):map__44911);
var effect = map__44911__$1;
var ms = cljs.core.get.call(null,map__44911__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__44911__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__44907,chunk__44908,count__44909,i__44910,map__44911,map__44911__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__44907,chunk__44908,count__44909,i__44910,map__44911,map__44911__$1,effect,ms,dispatch))
,ms);
}

var G__44915 = seq__44907;
var G__44916 = chunk__44908;
var G__44917 = count__44909;
var G__44918 = (i__44910 + (1));
seq__44907 = G__44915;
chunk__44908 = G__44916;
count__44909 = G__44917;
i__44910 = G__44918;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44907);
if(temp__4657__auto__){
var seq__44907__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44907__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__44907__$1);
var G__44919 = cljs.core.chunk_rest.call(null,seq__44907__$1);
var G__44920 = c__29125__auto__;
var G__44921 = cljs.core.count.call(null,c__29125__auto__);
var G__44922 = (0);
seq__44907 = G__44919;
chunk__44908 = G__44920;
count__44909 = G__44921;
i__44910 = G__44922;
continue;
} else {
var map__44913 = cljs.core.first.call(null,seq__44907__$1);
var map__44913__$1 = ((((!((map__44913 == null)))?((((map__44913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44913):map__44913);
var effect = map__44913__$1;
var ms = cljs.core.get.call(null,map__44913__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__44913__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__44907,chunk__44908,count__44909,i__44910,map__44913,map__44913__$1,effect,ms,dispatch,seq__44907__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__44907,chunk__44908,count__44909,i__44910,map__44913,map__44913__$1,effect,ms,dispatch,seq__44907__$1,temp__4657__auto__))
,ms);
}

var G__44923 = cljs.core.next.call(null,seq__44907__$1);
var G__44924 = null;
var G__44925 = (0);
var G__44926 = (0);
seq__44907 = G__44923;
chunk__44908 = G__44924;
count__44909 = G__44925;
i__44910 = G__44926;
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
var seq__44927 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__44928 = null;
var count__44929 = (0);
var i__44930 = (0);
while(true){
if((i__44930 < count__44929)){
var event = cljs.core._nth.call(null,chunk__44928,i__44930);
re_frame.router.dispatch.call(null,event);

var G__44931 = seq__44927;
var G__44932 = chunk__44928;
var G__44933 = count__44929;
var G__44934 = (i__44930 + (1));
seq__44927 = G__44931;
chunk__44928 = G__44932;
count__44929 = G__44933;
i__44930 = G__44934;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44927);
if(temp__4657__auto__){
var seq__44927__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44927__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__44927__$1);
var G__44935 = cljs.core.chunk_rest.call(null,seq__44927__$1);
var G__44936 = c__29125__auto__;
var G__44937 = cljs.core.count.call(null,c__29125__auto__);
var G__44938 = (0);
seq__44927 = G__44935;
chunk__44928 = G__44936;
count__44929 = G__44937;
i__44930 = G__44938;
continue;
} else {
var event = cljs.core.first.call(null,seq__44927__$1);
re_frame.router.dispatch.call(null,event);

var G__44939 = cljs.core.next.call(null,seq__44927__$1);
var G__44940 = null;
var G__44941 = (0);
var G__44942 = (0);
seq__44927 = G__44939;
chunk__44928 = G__44940;
count__44929 = G__44941;
i__44930 = G__44942;
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
var seq__44943 = cljs.core.seq.call(null,value);
var chunk__44944 = null;
var count__44945 = (0);
var i__44946 = (0);
while(true){
if((i__44946 < count__44945)){
var event = cljs.core._nth.call(null,chunk__44944,i__44946);
clear_event.call(null,event);

var G__44947 = seq__44943;
var G__44948 = chunk__44944;
var G__44949 = count__44945;
var G__44950 = (i__44946 + (1));
seq__44943 = G__44947;
chunk__44944 = G__44948;
count__44945 = G__44949;
i__44946 = G__44950;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44943);
if(temp__4657__auto__){
var seq__44943__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44943__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__44943__$1);
var G__44951 = cljs.core.chunk_rest.call(null,seq__44943__$1);
var G__44952 = c__29125__auto__;
var G__44953 = cljs.core.count.call(null,c__29125__auto__);
var G__44954 = (0);
seq__44943 = G__44951;
chunk__44944 = G__44952;
count__44945 = G__44953;
i__44946 = G__44954;
continue;
} else {
var event = cljs.core.first.call(null,seq__44943__$1);
clear_event.call(null,event);

var G__44955 = cljs.core.next.call(null,seq__44943__$1);
var G__44956 = null;
var G__44957 = (0);
var G__44958 = (0);
seq__44943 = G__44955;
chunk__44944 = G__44956;
count__44945 = G__44957;
i__44946 = G__44958;
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

//# sourceMappingURL=fx.js.map?rel=1513768368593
