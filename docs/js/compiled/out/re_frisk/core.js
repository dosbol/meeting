// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frisk.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('re_frame.core');
goog.require('re_frame.db');
goog.require('re_frame.subs');
goog.require('re_frisk.data');
goog.require('re_frisk.devtool');
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value){
var cntx = cljs.core.get.call(null,new cljs.core.Keyword(null,"contexts","contexts",4351546).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)),cljs.core.first.call(null,value));
var indx = cljs.core.count.call(null,cljs.core.deref.call(null,re_frisk.data.re_frame_events));
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_events,cljs.core.conj,(cljs.core.truth_(cntx)?cljs.core.assoc.call(null,cntx,new cljs.core.Keyword(null,"event","event",301435442),value,new cljs.core.Keyword(null,"indx","indx",1571035590),indx):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),value,new cljs.core.Keyword(null,"indx","indx",1571035590),indx], null)));
});
re_frisk.core.re_frame_sub = (function re_frisk$core$re_frame_sub(var_args){
var args__28371__auto__ = [];
var len__28364__auto___45837 = arguments.length;
var i__28365__auto___45838 = (0);
while(true){
if((i__28365__auto___45838 < len__28364__auto___45837)){
args__28371__auto__.push((arguments[i__28365__auto___45838]));

var G__45839 = (i__28365__auto___45838 + (1));
i__28365__auto___45838 = G__45839;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_frisk.core.re_frame_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_frisk.core.re_frame_sub.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"id-handler","id-handler",1013135509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__45834_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__45834_SHARP_)],[cljs.core.deref.call(null,cljs.core.second.call(null,p1__45834_SHARP_))]);
}),cljs.core.remove.call(null,(function (p1__45835_SHARP_){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.ffirst.call(null,p1__45835_SHARP_)),new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709))) || ((cljs.core.second.call(null,p1__45835_SHARP_) == null));
}),cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))));
});

re_frisk.core.re_frame_sub.cljs$lang$maxFixedArity = (0);

re_frisk.core.re_frame_sub.cljs$lang$applyTo = (function (seq45836){
return re_frisk.core.re_frame_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45836));
});

re_frisk.core.render_re_frisk = (function re_frisk$core$render_re_frisk(params){
var div = document.createElement("div");
document.body.appendChild(div);

onbeforeunload = ((function (div){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"win","win",-1624642689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)))){
return new cljs.core.Keyword(null,"win","win",-1624642689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)).alert("Application has been closed or refreshed. Debugger has been stopped!");
} else {
return null;
}
});})(div))
;

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.devtool.re_frisk_shell,params], null),div);
});
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___45845 = arguments.length;
var i__28365__auto___45846 = (0);
while(true){
if((i__28365__auto___45846 < len__28364__auto___45845)){
args__28371__auto__.push((arguments[i__28365__auto___45846]));

var G__45847 = (i__28365__auto___45846 + (1));
i__28365__auto___45846 = G__45847;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__45841){
var vec__45842 = p__45841;
var opts = cljs.core.nth.call(null,vec__45842,(0),null);
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

if(cljs.core.truth_(re_frame.core.reg_sub)){
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709),((function (vec__45842,opts){
return (function (db,_){
return db;
});})(vec__45842,opts))
);
} else {
re_frame.core.register_sub.call(null,new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709),((function (vec__45842,opts){
return (function (db,_){
return reagent.ratom.make_reaction.call(null,((function (vec__45842,opts){
return (function (){
return cljs.core.deref.call(null,db);
});})(vec__45842,opts))
);
});})(vec__45842,opts))
);
}

cljs.core.reset_BANG_.call(null,re_frisk.data.re_frame_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app-db","app-db",865606302),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709)], null)),new cljs.core.Keyword(null,"id-handler","id-handler",1013135509),reagent.core.atom.call(null,"not connected")], null));

cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"prefs","prefs",-1818938470),opts);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"events?","events?",-780512682).cljs$core$IFn$_invoke$arity$1(opts),false)){
} else {
re_frame.core.add_post_event_callback.call(null,re_frisk.core.post_event_callback);
}

if(cljs.core.truth_(re_frame.subs.query__GT_reaction)){
cljs.core.add_watch.call(null,re_frame.db.app_db,new cljs.core.Keyword(null,"re-frisk-watcher","re-frisk-watcher",1126824275),re_frisk.core.re_frame_sub);

re_frisk.core.re_frame_sub.call(null);
} else {
}

return setTimeout(re_frisk.core.render_re_frisk,(100),opts);
}
});

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq45840){
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45840));
});

re_frisk.core.enable_frisk_BANG_ = (function re_frisk$core$enable_frisk_BANG_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___45849 = arguments.length;
var i__28365__auto___45850 = (0);
while(true){
if((i__28365__auto___45850 < len__28364__auto___45849)){
args__28371__auto__.push((arguments[i__28365__auto___45850]));

var G__45851 = (i__28365__auto___45850 + (1));
i__28365__auto___45850 = G__45851;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

return setTimeout(re_frisk.core.render_re_frisk,(100),cljs.core.first.call(null,params));
}
});

re_frisk.core.enable_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_frisk_BANG_.cljs$lang$applyTo = (function (seq45848){
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45848));
});

re_frisk.core.add_data = (function re_frisk$core$add_data(key,data){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc,key,data);
});
re_frisk.core.add_in_data = (function re_frisk$core$add_in_data(keys,data){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,keys,data);
});
re_frisk.core.watch_context = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"re-frisk-watch-context","re-frisk-watch-context",1102368726),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contexts","contexts",4351546),cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context))),new cljs.core.Keyword(null,"before","before",-1633692388)], null),context);

return context;
}));
re_frisk.core.reg_view = (function re_frisk$core$reg_view(view,subs,events){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"events","events",1792552201)], null),cljs.core.set.call(null,events));

cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"subs","subs",-186681991)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__45852_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__45852_SHARP_],[re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45852_SHARP_], null))]);
}),subs)));

var seq__45853 = cljs.core.seq.call(null,subs);
var chunk__45854 = null;
var count__45855 = (0);
var i__45856 = (0);
while(true){
if((i__45856 < count__45855)){
var s = cljs.core._nth.call(null,chunk__45854,i__45856);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));

var G__45857 = seq__45853;
var G__45858 = chunk__45854;
var G__45859 = count__45855;
var G__45860 = (i__45856 + (1));
seq__45853 = G__45857;
chunk__45854 = G__45858;
count__45855 = G__45859;
i__45856 = G__45860;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45853);
if(temp__4657__auto__){
var seq__45853__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45853__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45853__$1);
var G__45861 = cljs.core.chunk_rest.call(null,seq__45853__$1);
var G__45862 = c__28034__auto__;
var G__45863 = cljs.core.count.call(null,c__28034__auto__);
var G__45864 = (0);
seq__45853 = G__45861;
chunk__45854 = G__45862;
count__45855 = G__45863;
i__45856 = G__45864;
continue;
} else {
var s = cljs.core.first.call(null,seq__45853__$1);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));

var G__45865 = cljs.core.next.call(null,seq__45853__$1);
var G__45866 = null;
var G__45867 = (0);
var G__45868 = (0);
seq__45853 = G__45865;
chunk__45854 = G__45866;
count__45855 = G__45867;
i__45856 = G__45868;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
re_frisk.core.unmount_view = (function re_frisk$core$unmount_view(view){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,view);
} else {
return null;
}
});
(function (){var or__27195__auto__ = re_frame.core.reg_event_db;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return re_frame.core.register_handler;
}
})().call(null,new cljs.core.Keyword("re-frisk","update-db","re-frisk/update-db",-658524246),(function (_,p__45869){
var vec__45870 = p__45869;
var ___$1 = cljs.core.nth.call(null,vec__45870,(0),null);
var value = cljs.core.nth.call(null,vec__45870,(1),null);
return value;
}));

//# sourceMappingURL=core.js.map?rel=1515855063900
