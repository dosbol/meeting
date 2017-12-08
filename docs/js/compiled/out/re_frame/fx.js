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
var seq__44839 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__44840 = null;
var count__44841 = (0);
var i__44842 = (0);
while(true){
if((i__44842 < count__44841)){
var vec__44843 = cljs.core._nth.call(null,chunk__44840,i__44842);
var effect_key = cljs.core.nth.call(null,vec__44843,(0),null);
var effect_value = cljs.core.nth.call(null,vec__44843,(1),null);
var temp__4655__auto___44849 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___44849)){
var effect_fn_44850 = temp__4655__auto___44849;
effect_fn_44850.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__44851 = seq__44839;
var G__44852 = chunk__44840;
var G__44853 = count__44841;
var G__44854 = (i__44842 + (1));
seq__44839 = G__44851;
chunk__44840 = G__44852;
count__44841 = G__44853;
i__44842 = G__44854;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44839);
if(temp__4657__auto__){
var seq__44839__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44839__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__44839__$1);
var G__44855 = cljs.core.chunk_rest.call(null,seq__44839__$1);
var G__44856 = c__29125__auto__;
var G__44857 = cljs.core.count.call(null,c__29125__auto__);
var G__44858 = (0);
seq__44839 = G__44855;
chunk__44840 = G__44856;
count__44841 = G__44857;
i__44842 = G__44858;
continue;
} else {
var vec__44846 = cljs.core.first.call(null,seq__44839__$1);
var effect_key = cljs.core.nth.call(null,vec__44846,(0),null);
var effect_value = cljs.core.nth.call(null,vec__44846,(1),null);
var temp__4655__auto___44859 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___44859)){
var effect_fn_44860 = temp__4655__auto___44859;
effect_fn_44860.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__44861 = cljs.core.next.call(null,seq__44839__$1);
var G__44862 = null;
var G__44863 = (0);
var G__44864 = (0);
seq__44839 = G__44861;
chunk__44840 = G__44862;
count__44841 = G__44863;
i__44842 = G__44864;
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
var seq__44865 = cljs.core.seq.call(null,value);
var chunk__44866 = null;
var count__44867 = (0);
var i__44868 = (0);
while(true){
if((i__44868 < count__44867)){
var map__44869 = cljs.core._nth.call(null,chunk__44866,i__44868);
var map__44869__$1 = ((((!((map__44869 == null)))?((((map__44869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44869):map__44869);
var effect = map__44869__$1;
var ms = cljs.core.get.call(null,map__44869__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__44869__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__44865,chunk__44866,count__44867,i__44868,map__44869,map__44869__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__44865,chunk__44866,count__44867,i__44868,map__44869,map__44869__$1,effect,ms,dispatch))
,ms);
}

var G__44873 = seq__44865;
var G__44874 = chunk__44866;
var G__44875 = count__44867;
var G__44876 = (i__44868 + (1));
seq__44865 = G__44873;
chunk__44866 = G__44874;
count__44867 = G__44875;
i__44868 = G__44876;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44865);
if(temp__4657__auto__){
var seq__44865__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44865__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__44865__$1);
var G__44877 = cljs.core.chunk_rest.call(null,seq__44865__$1);
var G__44878 = c__29125__auto__;
var G__44879 = cljs.core.count.call(null,c__29125__auto__);
var G__44880 = (0);
seq__44865 = G__44877;
chunk__44866 = G__44878;
count__44867 = G__44879;
i__44868 = G__44880;
continue;
} else {
var map__44871 = cljs.core.first.call(null,seq__44865__$1);
var map__44871__$1 = ((((!((map__44871 == null)))?((((map__44871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44871):map__44871);
var effect = map__44871__$1;
var ms = cljs.core.get.call(null,map__44871__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__44871__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__44865,chunk__44866,count__44867,i__44868,map__44871,map__44871__$1,effect,ms,dispatch,seq__44865__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__44865,chunk__44866,count__44867,i__44868,map__44871,map__44871__$1,effect,ms,dispatch,seq__44865__$1,temp__4657__auto__))
,ms);
}

var G__44881 = cljs.core.next.call(null,seq__44865__$1);
var G__44882 = null;
var G__44883 = (0);
var G__44884 = (0);
seq__44865 = G__44881;
chunk__44866 = G__44882;
count__44867 = G__44883;
i__44868 = G__44884;
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
var seq__44885 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__44886 = null;
var count__44887 = (0);
var i__44888 = (0);
while(true){
if((i__44888 < count__44887)){
var event = cljs.core._nth.call(null,chunk__44886,i__44888);
re_frame.router.dispatch.call(null,event);

var G__44889 = seq__44885;
var G__44890 = chunk__44886;
var G__44891 = count__44887;
var G__44892 = (i__44888 + (1));
seq__44885 = G__44889;
chunk__44886 = G__44890;
count__44887 = G__44891;
i__44888 = G__44892;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44885);
if(temp__4657__auto__){
var seq__44885__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44885__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__44885__$1);
var G__44893 = cljs.core.chunk_rest.call(null,seq__44885__$1);
var G__44894 = c__29125__auto__;
var G__44895 = cljs.core.count.call(null,c__29125__auto__);
var G__44896 = (0);
seq__44885 = G__44893;
chunk__44886 = G__44894;
count__44887 = G__44895;
i__44888 = G__44896;
continue;
} else {
var event = cljs.core.first.call(null,seq__44885__$1);
re_frame.router.dispatch.call(null,event);

var G__44897 = cljs.core.next.call(null,seq__44885__$1);
var G__44898 = null;
var G__44899 = (0);
var G__44900 = (0);
seq__44885 = G__44897;
chunk__44886 = G__44898;
count__44887 = G__44899;
i__44888 = G__44900;
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
var seq__44901 = cljs.core.seq.call(null,value);
var chunk__44902 = null;
var count__44903 = (0);
var i__44904 = (0);
while(true){
if((i__44904 < count__44903)){
var event = cljs.core._nth.call(null,chunk__44902,i__44904);
clear_event.call(null,event);

var G__44905 = seq__44901;
var G__44906 = chunk__44902;
var G__44907 = count__44903;
var G__44908 = (i__44904 + (1));
seq__44901 = G__44905;
chunk__44902 = G__44906;
count__44903 = G__44907;
i__44904 = G__44908;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44901);
if(temp__4657__auto__){
var seq__44901__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44901__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__44901__$1);
var G__44909 = cljs.core.chunk_rest.call(null,seq__44901__$1);
var G__44910 = c__29125__auto__;
var G__44911 = cljs.core.count.call(null,c__29125__auto__);
var G__44912 = (0);
seq__44901 = G__44909;
chunk__44902 = G__44910;
count__44903 = G__44911;
i__44904 = G__44912;
continue;
} else {
var event = cljs.core.first.call(null,seq__44901__$1);
clear_event.call(null,event);

var G__44913 = cljs.core.next.call(null,seq__44901__$1);
var G__44914 = null;
var G__44915 = (0);
var G__44916 = (0);
seq__44901 = G__44913;
chunk__44902 = G__44914;
count__44903 = G__44915;
i__44904 = G__44916;
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

//# sourceMappingURL=fx.js.map?rel=1512672441170
