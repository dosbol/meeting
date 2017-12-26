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
var seq__43854 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__43855 = null;
var count__43856 = (0);
var i__43857 = (0);
while(true){
if((i__43857 < count__43856)){
var vec__43858 = cljs.core._nth.call(null,chunk__43855,i__43857);
var effect_key = cljs.core.nth.call(null,vec__43858,(0),null);
var effect_value = cljs.core.nth.call(null,vec__43858,(1),null);
var temp__4655__auto___43864 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___43864)){
var effect_fn_43865 = temp__4655__auto___43864;
effect_fn_43865.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__43866 = seq__43854;
var G__43867 = chunk__43855;
var G__43868 = count__43856;
var G__43869 = (i__43857 + (1));
seq__43854 = G__43866;
chunk__43855 = G__43867;
count__43856 = G__43868;
i__43857 = G__43869;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43854);
if(temp__4657__auto__){
var seq__43854__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43854__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__43854__$1);
var G__43870 = cljs.core.chunk_rest.call(null,seq__43854__$1);
var G__43871 = c__28034__auto__;
var G__43872 = cljs.core.count.call(null,c__28034__auto__);
var G__43873 = (0);
seq__43854 = G__43870;
chunk__43855 = G__43871;
count__43856 = G__43872;
i__43857 = G__43873;
continue;
} else {
var vec__43861 = cljs.core.first.call(null,seq__43854__$1);
var effect_key = cljs.core.nth.call(null,vec__43861,(0),null);
var effect_value = cljs.core.nth.call(null,vec__43861,(1),null);
var temp__4655__auto___43874 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___43874)){
var effect_fn_43875 = temp__4655__auto___43874;
effect_fn_43875.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__43876 = cljs.core.next.call(null,seq__43854__$1);
var G__43877 = null;
var G__43878 = (0);
var G__43879 = (0);
seq__43854 = G__43876;
chunk__43855 = G__43877;
count__43856 = G__43878;
i__43857 = G__43879;
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
var seq__43880 = cljs.core.seq.call(null,value);
var chunk__43881 = null;
var count__43882 = (0);
var i__43883 = (0);
while(true){
if((i__43883 < count__43882)){
var map__43884 = cljs.core._nth.call(null,chunk__43881,i__43883);
var map__43884__$1 = ((((!((map__43884 == null)))?((((map__43884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43884.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43884):map__43884);
var effect = map__43884__$1;
var ms = cljs.core.get.call(null,map__43884__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__43884__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__43880,chunk__43881,count__43882,i__43883,map__43884,map__43884__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__43880,chunk__43881,count__43882,i__43883,map__43884,map__43884__$1,effect,ms,dispatch))
,ms);
}

var G__43888 = seq__43880;
var G__43889 = chunk__43881;
var G__43890 = count__43882;
var G__43891 = (i__43883 + (1));
seq__43880 = G__43888;
chunk__43881 = G__43889;
count__43882 = G__43890;
i__43883 = G__43891;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43880);
if(temp__4657__auto__){
var seq__43880__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43880__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__43880__$1);
var G__43892 = cljs.core.chunk_rest.call(null,seq__43880__$1);
var G__43893 = c__28034__auto__;
var G__43894 = cljs.core.count.call(null,c__28034__auto__);
var G__43895 = (0);
seq__43880 = G__43892;
chunk__43881 = G__43893;
count__43882 = G__43894;
i__43883 = G__43895;
continue;
} else {
var map__43886 = cljs.core.first.call(null,seq__43880__$1);
var map__43886__$1 = ((((!((map__43886 == null)))?((((map__43886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43886):map__43886);
var effect = map__43886__$1;
var ms = cljs.core.get.call(null,map__43886__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__43886__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__43880,chunk__43881,count__43882,i__43883,map__43886,map__43886__$1,effect,ms,dispatch,seq__43880__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__43880,chunk__43881,count__43882,i__43883,map__43886,map__43886__$1,effect,ms,dispatch,seq__43880__$1,temp__4657__auto__))
,ms);
}

var G__43896 = cljs.core.next.call(null,seq__43880__$1);
var G__43897 = null;
var G__43898 = (0);
var G__43899 = (0);
seq__43880 = G__43896;
chunk__43881 = G__43897;
count__43882 = G__43898;
i__43883 = G__43899;
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
var seq__43900 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__43901 = null;
var count__43902 = (0);
var i__43903 = (0);
while(true){
if((i__43903 < count__43902)){
var event = cljs.core._nth.call(null,chunk__43901,i__43903);
re_frame.router.dispatch.call(null,event);

var G__43904 = seq__43900;
var G__43905 = chunk__43901;
var G__43906 = count__43902;
var G__43907 = (i__43903 + (1));
seq__43900 = G__43904;
chunk__43901 = G__43905;
count__43902 = G__43906;
i__43903 = G__43907;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43900);
if(temp__4657__auto__){
var seq__43900__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43900__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__43900__$1);
var G__43908 = cljs.core.chunk_rest.call(null,seq__43900__$1);
var G__43909 = c__28034__auto__;
var G__43910 = cljs.core.count.call(null,c__28034__auto__);
var G__43911 = (0);
seq__43900 = G__43908;
chunk__43901 = G__43909;
count__43902 = G__43910;
i__43903 = G__43911;
continue;
} else {
var event = cljs.core.first.call(null,seq__43900__$1);
re_frame.router.dispatch.call(null,event);

var G__43912 = cljs.core.next.call(null,seq__43900__$1);
var G__43913 = null;
var G__43914 = (0);
var G__43915 = (0);
seq__43900 = G__43912;
chunk__43901 = G__43913;
count__43902 = G__43914;
i__43903 = G__43915;
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
var seq__43916 = cljs.core.seq.call(null,value);
var chunk__43917 = null;
var count__43918 = (0);
var i__43919 = (0);
while(true){
if((i__43919 < count__43918)){
var event = cljs.core._nth.call(null,chunk__43917,i__43919);
clear_event.call(null,event);

var G__43920 = seq__43916;
var G__43921 = chunk__43917;
var G__43922 = count__43918;
var G__43923 = (i__43919 + (1));
seq__43916 = G__43920;
chunk__43917 = G__43921;
count__43918 = G__43922;
i__43919 = G__43923;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43916);
if(temp__4657__auto__){
var seq__43916__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43916__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__43916__$1);
var G__43924 = cljs.core.chunk_rest.call(null,seq__43916__$1);
var G__43925 = c__28034__auto__;
var G__43926 = cljs.core.count.call(null,c__28034__auto__);
var G__43927 = (0);
seq__43916 = G__43924;
chunk__43917 = G__43925;
count__43918 = G__43926;
i__43919 = G__43927;
continue;
} else {
var event = cljs.core.first.call(null,seq__43916__$1);
clear_event.call(null,event);

var G__43928 = cljs.core.next.call(null,seq__43916__$1);
var G__43929 = null;
var G__43930 = (0);
var G__43931 = (0);
seq__43916 = G__43928;
chunk__43917 = G__43929;
count__43918 = G__43930;
i__43919 = G__43931;
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

//# sourceMappingURL=fx.js.map?rel=1514289242275
