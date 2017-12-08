// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28286__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28286__auto__){
return or__28286__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28286__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35921_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35921_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35922 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35923 = null;
var count__35924 = (0);
var i__35925 = (0);
while(true){
if((i__35925 < count__35924)){
var n = cljs.core._nth.call(null,chunk__35923,i__35925);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35926 = seq__35922;
var G__35927 = chunk__35923;
var G__35928 = count__35924;
var G__35929 = (i__35925 + (1));
seq__35922 = G__35926;
chunk__35923 = G__35927;
count__35924 = G__35928;
i__35925 = G__35929;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35922);
if(temp__4657__auto__){
var seq__35922__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35922__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35922__$1);
var G__35930 = cljs.core.chunk_rest.call(null,seq__35922__$1);
var G__35931 = c__29125__auto__;
var G__35932 = cljs.core.count.call(null,c__29125__auto__);
var G__35933 = (0);
seq__35922 = G__35930;
chunk__35923 = G__35931;
count__35924 = G__35932;
i__35925 = G__35933;
continue;
} else {
var n = cljs.core.first.call(null,seq__35922__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35934 = cljs.core.next.call(null,seq__35922__$1);
var G__35935 = null;
var G__35936 = (0);
var G__35937 = (0);
seq__35922 = G__35934;
chunk__35923 = G__35935;
count__35924 = G__35936;
i__35925 = G__35937;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35947_35955 = cljs.core.seq.call(null,deps);
var chunk__35948_35956 = null;
var count__35949_35957 = (0);
var i__35950_35958 = (0);
while(true){
if((i__35950_35958 < count__35949_35957)){
var dep_35959 = cljs.core._nth.call(null,chunk__35948_35956,i__35950_35958);
topo_sort_helper_STAR_.call(null,dep_35959,(depth + (1)),state);

var G__35960 = seq__35947_35955;
var G__35961 = chunk__35948_35956;
var G__35962 = count__35949_35957;
var G__35963 = (i__35950_35958 + (1));
seq__35947_35955 = G__35960;
chunk__35948_35956 = G__35961;
count__35949_35957 = G__35962;
i__35950_35958 = G__35963;
continue;
} else {
var temp__4657__auto___35964 = cljs.core.seq.call(null,seq__35947_35955);
if(temp__4657__auto___35964){
var seq__35947_35965__$1 = temp__4657__auto___35964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35947_35965__$1)){
var c__29125__auto___35966 = cljs.core.chunk_first.call(null,seq__35947_35965__$1);
var G__35967 = cljs.core.chunk_rest.call(null,seq__35947_35965__$1);
var G__35968 = c__29125__auto___35966;
var G__35969 = cljs.core.count.call(null,c__29125__auto___35966);
var G__35970 = (0);
seq__35947_35955 = G__35967;
chunk__35948_35956 = G__35968;
count__35949_35957 = G__35969;
i__35950_35958 = G__35970;
continue;
} else {
var dep_35971 = cljs.core.first.call(null,seq__35947_35965__$1);
topo_sort_helper_STAR_.call(null,dep_35971,(depth + (1)),state);

var G__35972 = cljs.core.next.call(null,seq__35947_35965__$1);
var G__35973 = null;
var G__35974 = (0);
var G__35975 = (0);
seq__35947_35955 = G__35972;
chunk__35948_35956 = G__35973;
count__35949_35957 = G__35974;
i__35950_35958 = G__35975;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35951){
var vec__35952 = p__35951;
var seq__35953 = cljs.core.seq.call(null,vec__35952);
var first__35954 = cljs.core.first.call(null,seq__35953);
var seq__35953__$1 = cljs.core.next.call(null,seq__35953);
var x = first__35954;
var xs = seq__35953__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35952,seq__35953,first__35954,seq__35953__$1,x,xs,get_deps__$1){
return (function (p1__35938_SHARP_){
return clojure.set.difference.call(null,p1__35938_SHARP_,x);
});})(vec__35952,seq__35953,first__35954,seq__35953__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35976 = cljs.core.seq.call(null,provides);
var chunk__35977 = null;
var count__35978 = (0);
var i__35979 = (0);
while(true){
if((i__35979 < count__35978)){
var prov = cljs.core._nth.call(null,chunk__35977,i__35979);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35980_35988 = cljs.core.seq.call(null,requires);
var chunk__35981_35989 = null;
var count__35982_35990 = (0);
var i__35983_35991 = (0);
while(true){
if((i__35983_35991 < count__35982_35990)){
var req_35992 = cljs.core._nth.call(null,chunk__35981_35989,i__35983_35991);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35992,prov);

var G__35993 = seq__35980_35988;
var G__35994 = chunk__35981_35989;
var G__35995 = count__35982_35990;
var G__35996 = (i__35983_35991 + (1));
seq__35980_35988 = G__35993;
chunk__35981_35989 = G__35994;
count__35982_35990 = G__35995;
i__35983_35991 = G__35996;
continue;
} else {
var temp__4657__auto___35997 = cljs.core.seq.call(null,seq__35980_35988);
if(temp__4657__auto___35997){
var seq__35980_35998__$1 = temp__4657__auto___35997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35980_35998__$1)){
var c__29125__auto___35999 = cljs.core.chunk_first.call(null,seq__35980_35998__$1);
var G__36000 = cljs.core.chunk_rest.call(null,seq__35980_35998__$1);
var G__36001 = c__29125__auto___35999;
var G__36002 = cljs.core.count.call(null,c__29125__auto___35999);
var G__36003 = (0);
seq__35980_35988 = G__36000;
chunk__35981_35989 = G__36001;
count__35982_35990 = G__36002;
i__35983_35991 = G__36003;
continue;
} else {
var req_36004 = cljs.core.first.call(null,seq__35980_35998__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36004,prov);

var G__36005 = cljs.core.next.call(null,seq__35980_35998__$1);
var G__36006 = null;
var G__36007 = (0);
var G__36008 = (0);
seq__35980_35988 = G__36005;
chunk__35981_35989 = G__36006;
count__35982_35990 = G__36007;
i__35983_35991 = G__36008;
continue;
}
} else {
}
}
break;
}

var G__36009 = seq__35976;
var G__36010 = chunk__35977;
var G__36011 = count__35978;
var G__36012 = (i__35979 + (1));
seq__35976 = G__36009;
chunk__35977 = G__36010;
count__35978 = G__36011;
i__35979 = G__36012;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35976);
if(temp__4657__auto__){
var seq__35976__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35976__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35976__$1);
var G__36013 = cljs.core.chunk_rest.call(null,seq__35976__$1);
var G__36014 = c__29125__auto__;
var G__36015 = cljs.core.count.call(null,c__29125__auto__);
var G__36016 = (0);
seq__35976 = G__36013;
chunk__35977 = G__36014;
count__35978 = G__36015;
i__35979 = G__36016;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35976__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35984_36017 = cljs.core.seq.call(null,requires);
var chunk__35985_36018 = null;
var count__35986_36019 = (0);
var i__35987_36020 = (0);
while(true){
if((i__35987_36020 < count__35986_36019)){
var req_36021 = cljs.core._nth.call(null,chunk__35985_36018,i__35987_36020);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36021,prov);

var G__36022 = seq__35984_36017;
var G__36023 = chunk__35985_36018;
var G__36024 = count__35986_36019;
var G__36025 = (i__35987_36020 + (1));
seq__35984_36017 = G__36022;
chunk__35985_36018 = G__36023;
count__35986_36019 = G__36024;
i__35987_36020 = G__36025;
continue;
} else {
var temp__4657__auto___36026__$1 = cljs.core.seq.call(null,seq__35984_36017);
if(temp__4657__auto___36026__$1){
var seq__35984_36027__$1 = temp__4657__auto___36026__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35984_36027__$1)){
var c__29125__auto___36028 = cljs.core.chunk_first.call(null,seq__35984_36027__$1);
var G__36029 = cljs.core.chunk_rest.call(null,seq__35984_36027__$1);
var G__36030 = c__29125__auto___36028;
var G__36031 = cljs.core.count.call(null,c__29125__auto___36028);
var G__36032 = (0);
seq__35984_36017 = G__36029;
chunk__35985_36018 = G__36030;
count__35986_36019 = G__36031;
i__35987_36020 = G__36032;
continue;
} else {
var req_36033 = cljs.core.first.call(null,seq__35984_36027__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36033,prov);

var G__36034 = cljs.core.next.call(null,seq__35984_36027__$1);
var G__36035 = null;
var G__36036 = (0);
var G__36037 = (0);
seq__35984_36017 = G__36034;
chunk__35985_36018 = G__36035;
count__35986_36019 = G__36036;
i__35987_36020 = G__36037;
continue;
}
} else {
}
}
break;
}

var G__36038 = cljs.core.next.call(null,seq__35976__$1);
var G__36039 = null;
var G__36040 = (0);
var G__36041 = (0);
seq__35976 = G__36038;
chunk__35977 = G__36039;
count__35978 = G__36040;
i__35979 = G__36041;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36042_36046 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36043_36047 = null;
var count__36044_36048 = (0);
var i__36045_36049 = (0);
while(true){
if((i__36045_36049 < count__36044_36048)){
var ns_36050 = cljs.core._nth.call(null,chunk__36043_36047,i__36045_36049);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36050);

var G__36051 = seq__36042_36046;
var G__36052 = chunk__36043_36047;
var G__36053 = count__36044_36048;
var G__36054 = (i__36045_36049 + (1));
seq__36042_36046 = G__36051;
chunk__36043_36047 = G__36052;
count__36044_36048 = G__36053;
i__36045_36049 = G__36054;
continue;
} else {
var temp__4657__auto___36055 = cljs.core.seq.call(null,seq__36042_36046);
if(temp__4657__auto___36055){
var seq__36042_36056__$1 = temp__4657__auto___36055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36042_36056__$1)){
var c__29125__auto___36057 = cljs.core.chunk_first.call(null,seq__36042_36056__$1);
var G__36058 = cljs.core.chunk_rest.call(null,seq__36042_36056__$1);
var G__36059 = c__29125__auto___36057;
var G__36060 = cljs.core.count.call(null,c__29125__auto___36057);
var G__36061 = (0);
seq__36042_36046 = G__36058;
chunk__36043_36047 = G__36059;
count__36044_36048 = G__36060;
i__36045_36049 = G__36061;
continue;
} else {
var ns_36062 = cljs.core.first.call(null,seq__36042_36056__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36062);

var G__36063 = cljs.core.next.call(null,seq__36042_36056__$1);
var G__36064 = null;
var G__36065 = (0);
var G__36066 = (0);
seq__36042_36046 = G__36063;
chunk__36043_36047 = G__36064;
count__36044_36048 = G__36065;
i__36045_36049 = G__36066;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28286__auto__ = goog.require__;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36067__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36068__i = 0, G__36068__a = new Array(arguments.length -  0);
while (G__36068__i < G__36068__a.length) {G__36068__a[G__36068__i] = arguments[G__36068__i + 0]; ++G__36068__i;}
  args = new cljs.core.IndexedSeq(G__36068__a,0,null);
} 
return G__36067__delegate.call(this,args);};
G__36067.cljs$lang$maxFixedArity = 0;
G__36067.cljs$lang$applyTo = (function (arglist__36069){
var args = cljs.core.seq(arglist__36069);
return G__36067__delegate(args);
});
G__36067.cljs$core$IFn$_invoke$arity$variadic = G__36067__delegate;
return G__36067;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36070_SHARP_,p2__36071_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36070_SHARP_)].join('')),p2__36071_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36072_SHARP_,p2__36073_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36072_SHARP_)].join(''),p2__36073_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36074 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36074.addCallback(((function (G__36074){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36074))
);

G__36074.addErrback(((function (G__36074){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36074))
);

return G__36074;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36075 = cljs.core._EQ_;
var expr__36076 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36075.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36076))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36075,expr__36076){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36075,expr__36076))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36075,expr__36076){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36078){if((e36078 instanceof Error)){
var e = e36078;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36078;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36075,expr__36076))
} else {
if(cljs.core.truth_(pred__36075.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36076))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36075.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36076))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36075.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36076))){
return ((function (pred__36075,expr__36076){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36079){if((e36079 instanceof Error)){
var e = e36079;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36079;

}
}})());
});
;})(pred__36075,expr__36076))
} else {
return ((function (pred__36075,expr__36076){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36075,expr__36076))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36080,callback){
var map__36081 = p__36080;
var map__36081__$1 = ((((!((map__36081 == null)))?((((map__36081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36081):map__36081);
var file_msg = map__36081__$1;
var request_url = cljs.core.get.call(null,map__36081__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36081,map__36081__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36081,map__36081__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto__){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto__){
return (function (state_36105){
var state_val_36106 = (state_36105[(1)]);
if((state_val_36106 === (7))){
var inst_36101 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36107_36124 = state_36105__$1;
(statearr_36107_36124[(2)] = inst_36101);

(statearr_36107_36124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (1))){
var state_36105__$1 = state_36105;
var statearr_36108_36125 = state_36105__$1;
(statearr_36108_36125[(2)] = null);

(statearr_36108_36125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (4))){
var inst_36085 = (state_36105[(7)]);
var inst_36085__$1 = (state_36105[(2)]);
var state_36105__$1 = (function (){var statearr_36109 = state_36105;
(statearr_36109[(7)] = inst_36085__$1);

return statearr_36109;
})();
if(cljs.core.truth_(inst_36085__$1)){
var statearr_36110_36126 = state_36105__$1;
(statearr_36110_36126[(1)] = (5));

} else {
var statearr_36111_36127 = state_36105__$1;
(statearr_36111_36127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (6))){
var state_36105__$1 = state_36105;
var statearr_36112_36128 = state_36105__$1;
(statearr_36112_36128[(2)] = null);

(statearr_36112_36128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (3))){
var inst_36103 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36105__$1,inst_36103);
} else {
if((state_val_36106 === (2))){
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36105__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36106 === (11))){
var inst_36097 = (state_36105[(2)]);
var state_36105__$1 = (function (){var statearr_36113 = state_36105;
(statearr_36113[(8)] = inst_36097);

return statearr_36113;
})();
var statearr_36114_36129 = state_36105__$1;
(statearr_36114_36129[(2)] = null);

(statearr_36114_36129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (9))){
var inst_36091 = (state_36105[(9)]);
var inst_36089 = (state_36105[(10)]);
var inst_36093 = inst_36091.call(null,inst_36089);
var state_36105__$1 = state_36105;
var statearr_36115_36130 = state_36105__$1;
(statearr_36115_36130[(2)] = inst_36093);

(statearr_36115_36130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (5))){
var inst_36085 = (state_36105[(7)]);
var inst_36087 = figwheel.client.file_reloading.blocking_load.call(null,inst_36085);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36105__$1,(8),inst_36087);
} else {
if((state_val_36106 === (10))){
var inst_36089 = (state_36105[(10)]);
var inst_36095 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36089);
var state_36105__$1 = state_36105;
var statearr_36116_36131 = state_36105__$1;
(statearr_36116_36131[(2)] = inst_36095);

(statearr_36116_36131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (8))){
var inst_36091 = (state_36105[(9)]);
var inst_36085 = (state_36105[(7)]);
var inst_36089 = (state_36105[(2)]);
var inst_36090 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36091__$1 = cljs.core.get.call(null,inst_36090,inst_36085);
var state_36105__$1 = (function (){var statearr_36117 = state_36105;
(statearr_36117[(9)] = inst_36091__$1);

(statearr_36117[(10)] = inst_36089);

return statearr_36117;
})();
if(cljs.core.truth_(inst_36091__$1)){
var statearr_36118_36132 = state_36105__$1;
(statearr_36118_36132[(1)] = (9));

} else {
var statearr_36119_36133 = state_36105__$1;
(statearr_36119_36133[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32751__auto__))
;
return ((function (switch__32663__auto__,c__32751__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32664__auto__ = null;
var figwheel$client$file_reloading$state_machine__32664__auto____0 = (function (){
var statearr_36120 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36120[(0)] = figwheel$client$file_reloading$state_machine__32664__auto__);

(statearr_36120[(1)] = (1));

return statearr_36120;
});
var figwheel$client$file_reloading$state_machine__32664__auto____1 = (function (state_36105){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_36105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e36121){if((e36121 instanceof Object)){
var ex__32667__auto__ = e36121;
var statearr_36122_36134 = state_36105;
(statearr_36122_36134[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36135 = state_36105;
state_36105 = G__36135;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32664__auto__ = function(state_36105){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32664__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32664__auto____1.call(this,state_36105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32664__auto____0;
figwheel$client$file_reloading$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32664__auto____1;
return figwheel$client$file_reloading$state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto__))
})();
var state__32753__auto__ = (function (){var statearr_36123 = f__32752__auto__.call(null);
(statearr_36123[(6)] = c__32751__auto__);

return statearr_36123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto__))
);

return c__32751__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36136,callback){
var map__36137 = p__36136;
var map__36137__$1 = ((((!((map__36137 == null)))?((((map__36137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36137):map__36137);
var file_msg = map__36137__$1;
var namespace = cljs.core.get.call(null,map__36137__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36137,map__36137__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36137,map__36137__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36139){
var map__36140 = p__36139;
var map__36140__$1 = ((((!((map__36140 == null)))?((((map__36140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36140):map__36140);
var file_msg = map__36140__$1;
var namespace = cljs.core.get.call(null,map__36140__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36142){
var map__36143 = p__36142;
var map__36143__$1 = ((((!((map__36143 == null)))?((((map__36143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36143):map__36143);
var file_msg = map__36143__$1;
var namespace = cljs.core.get.call(null,map__36143__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28274__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28274__auto__){
var or__28286__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28274__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36145,callback){
var map__36146 = p__36145;
var map__36146__$1 = ((((!((map__36146 == null)))?((((map__36146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36146):map__36146);
var file_msg = map__36146__$1;
var request_url = cljs.core.get.call(null,map__36146__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36146__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32751__auto___36196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___36196,out){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___36196,out){
return (function (state_36181){
var state_val_36182 = (state_36181[(1)]);
if((state_val_36182 === (1))){
var inst_36155 = cljs.core.seq.call(null,files);
var inst_36156 = cljs.core.first.call(null,inst_36155);
var inst_36157 = cljs.core.next.call(null,inst_36155);
var inst_36158 = files;
var state_36181__$1 = (function (){var statearr_36183 = state_36181;
(statearr_36183[(7)] = inst_36158);

(statearr_36183[(8)] = inst_36156);

(statearr_36183[(9)] = inst_36157);

return statearr_36183;
})();
var statearr_36184_36197 = state_36181__$1;
(statearr_36184_36197[(2)] = null);

(statearr_36184_36197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36182 === (2))){
var inst_36158 = (state_36181[(7)]);
var inst_36164 = (state_36181[(10)]);
var inst_36163 = cljs.core.seq.call(null,inst_36158);
var inst_36164__$1 = cljs.core.first.call(null,inst_36163);
var inst_36165 = cljs.core.next.call(null,inst_36163);
var inst_36166 = (inst_36164__$1 == null);
var inst_36167 = cljs.core.not.call(null,inst_36166);
var state_36181__$1 = (function (){var statearr_36185 = state_36181;
(statearr_36185[(11)] = inst_36165);

(statearr_36185[(10)] = inst_36164__$1);

return statearr_36185;
})();
if(inst_36167){
var statearr_36186_36198 = state_36181__$1;
(statearr_36186_36198[(1)] = (4));

} else {
var statearr_36187_36199 = state_36181__$1;
(statearr_36187_36199[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36182 === (3))){
var inst_36179 = (state_36181[(2)]);
var state_36181__$1 = state_36181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36181__$1,inst_36179);
} else {
if((state_val_36182 === (4))){
var inst_36164 = (state_36181[(10)]);
var inst_36169 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36164);
var state_36181__$1 = state_36181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36181__$1,(7),inst_36169);
} else {
if((state_val_36182 === (5))){
var inst_36175 = cljs.core.async.close_BANG_.call(null,out);
var state_36181__$1 = state_36181;
var statearr_36188_36200 = state_36181__$1;
(statearr_36188_36200[(2)] = inst_36175);

(statearr_36188_36200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36182 === (6))){
var inst_36177 = (state_36181[(2)]);
var state_36181__$1 = state_36181;
var statearr_36189_36201 = state_36181__$1;
(statearr_36189_36201[(2)] = inst_36177);

(statearr_36189_36201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36182 === (7))){
var inst_36165 = (state_36181[(11)]);
var inst_36171 = (state_36181[(2)]);
var inst_36172 = cljs.core.async.put_BANG_.call(null,out,inst_36171);
var inst_36158 = inst_36165;
var state_36181__$1 = (function (){var statearr_36190 = state_36181;
(statearr_36190[(7)] = inst_36158);

(statearr_36190[(12)] = inst_36172);

return statearr_36190;
})();
var statearr_36191_36202 = state_36181__$1;
(statearr_36191_36202[(2)] = null);

(statearr_36191_36202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__32751__auto___36196,out))
;
return ((function (switch__32663__auto__,c__32751__auto___36196,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32664__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32664__auto____0 = (function (){
var statearr_36192 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36192[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32664__auto__);

(statearr_36192[(1)] = (1));

return statearr_36192;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32664__auto____1 = (function (state_36181){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_36181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e36193){if((e36193 instanceof Object)){
var ex__32667__auto__ = e36193;
var statearr_36194_36203 = state_36181;
(statearr_36194_36203[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36204 = state_36181;
state_36181 = G__36204;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32664__auto__ = function(state_36181){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32664__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32664__auto____1.call(this,state_36181);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32664__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32664__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___36196,out))
})();
var state__32753__auto__ = (function (){var statearr_36195 = f__32752__auto__.call(null);
(statearr_36195[(6)] = c__32751__auto___36196);

return statearr_36195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___36196,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36205,opts){
var map__36206 = p__36205;
var map__36206__$1 = ((((!((map__36206 == null)))?((((map__36206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36206):map__36206);
var eval_body = cljs.core.get.call(null,map__36206__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36206__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28274__auto__ = eval_body;
if(cljs.core.truth_(and__28274__auto__)){
return typeof eval_body === 'string';
} else {
return and__28274__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36208){var e = e36208;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36209_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36209_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36210){
var vec__36211 = p__36210;
var k = cljs.core.nth.call(null,vec__36211,(0),null);
var v = cljs.core.nth.call(null,vec__36211,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36214){
var vec__36215 = p__36214;
var k = cljs.core.nth.call(null,vec__36215,(0),null);
var v = cljs.core.nth.call(null,vec__36215,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36221,p__36222){
var map__36223 = p__36221;
var map__36223__$1 = ((((!((map__36223 == null)))?((((map__36223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36223):map__36223);
var opts = map__36223__$1;
var before_jsload = cljs.core.get.call(null,map__36223__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36223__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36223__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36224 = p__36222;
var map__36224__$1 = ((((!((map__36224 == null)))?((((map__36224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36224):map__36224);
var msg = map__36224__$1;
var files = cljs.core.get.call(null,map__36224__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36224__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36224__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36378){
var state_val_36379 = (state_36378[(1)]);
if((state_val_36379 === (7))){
var inst_36241 = (state_36378[(7)]);
var inst_36238 = (state_36378[(8)]);
var inst_36240 = (state_36378[(9)]);
var inst_36239 = (state_36378[(10)]);
var inst_36246 = cljs.core._nth.call(null,inst_36239,inst_36241);
var inst_36247 = figwheel.client.file_reloading.eval_body.call(null,inst_36246,opts);
var inst_36248 = (inst_36241 + (1));
var tmp36380 = inst_36238;
var tmp36381 = inst_36240;
var tmp36382 = inst_36239;
var inst_36238__$1 = tmp36380;
var inst_36239__$1 = tmp36382;
var inst_36240__$1 = tmp36381;
var inst_36241__$1 = inst_36248;
var state_36378__$1 = (function (){var statearr_36383 = state_36378;
(statearr_36383[(11)] = inst_36247);

(statearr_36383[(7)] = inst_36241__$1);

(statearr_36383[(8)] = inst_36238__$1);

(statearr_36383[(9)] = inst_36240__$1);

(statearr_36383[(10)] = inst_36239__$1);

return statearr_36383;
})();
var statearr_36384_36467 = state_36378__$1;
(statearr_36384_36467[(2)] = null);

(statearr_36384_36467[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (20))){
var inst_36281 = (state_36378[(12)]);
var inst_36289 = figwheel.client.file_reloading.sort_files.call(null,inst_36281);
var state_36378__$1 = state_36378;
var statearr_36385_36468 = state_36378__$1;
(statearr_36385_36468[(2)] = inst_36289);

(statearr_36385_36468[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (27))){
var state_36378__$1 = state_36378;
var statearr_36386_36469 = state_36378__$1;
(statearr_36386_36469[(2)] = null);

(statearr_36386_36469[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (1))){
var inst_36230 = (state_36378[(13)]);
var inst_36227 = before_jsload.call(null,files);
var inst_36228 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36229 = (function (){return ((function (inst_36230,inst_36227,inst_36228,state_val_36379,c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36218_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36218_SHARP_);
});
;})(inst_36230,inst_36227,inst_36228,state_val_36379,c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36230__$1 = cljs.core.filter.call(null,inst_36229,files);
var inst_36231 = cljs.core.not_empty.call(null,inst_36230__$1);
var state_36378__$1 = (function (){var statearr_36387 = state_36378;
(statearr_36387[(14)] = inst_36227);

(statearr_36387[(15)] = inst_36228);

(statearr_36387[(13)] = inst_36230__$1);

return statearr_36387;
})();
if(cljs.core.truth_(inst_36231)){
var statearr_36388_36470 = state_36378__$1;
(statearr_36388_36470[(1)] = (2));

} else {
var statearr_36389_36471 = state_36378__$1;
(statearr_36389_36471[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (24))){
var state_36378__$1 = state_36378;
var statearr_36390_36472 = state_36378__$1;
(statearr_36390_36472[(2)] = null);

(statearr_36390_36472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (39))){
var inst_36331 = (state_36378[(16)]);
var state_36378__$1 = state_36378;
var statearr_36391_36473 = state_36378__$1;
(statearr_36391_36473[(2)] = inst_36331);

(statearr_36391_36473[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (46))){
var inst_36373 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
var statearr_36392_36474 = state_36378__$1;
(statearr_36392_36474[(2)] = inst_36373);

(statearr_36392_36474[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (4))){
var inst_36275 = (state_36378[(2)]);
var inst_36276 = cljs.core.List.EMPTY;
var inst_36277 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36276);
var inst_36278 = (function (){return ((function (inst_36275,inst_36276,inst_36277,state_val_36379,c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36219_SHARP_){
var and__28274__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36219_SHARP_);
if(cljs.core.truth_(and__28274__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36219_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36219_SHARP_)));
} else {
return and__28274__auto__;
}
});
;})(inst_36275,inst_36276,inst_36277,state_val_36379,c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36279 = cljs.core.filter.call(null,inst_36278,files);
var inst_36280 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36281 = cljs.core.concat.call(null,inst_36279,inst_36280);
var state_36378__$1 = (function (){var statearr_36393 = state_36378;
(statearr_36393[(17)] = inst_36277);

(statearr_36393[(12)] = inst_36281);

(statearr_36393[(18)] = inst_36275);

return statearr_36393;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36394_36475 = state_36378__$1;
(statearr_36394_36475[(1)] = (16));

} else {
var statearr_36395_36476 = state_36378__$1;
(statearr_36395_36476[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (15))){
var inst_36265 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
var statearr_36396_36477 = state_36378__$1;
(statearr_36396_36477[(2)] = inst_36265);

(statearr_36396_36477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (21))){
var inst_36291 = (state_36378[(19)]);
var inst_36291__$1 = (state_36378[(2)]);
var inst_36292 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36291__$1);
var state_36378__$1 = (function (){var statearr_36397 = state_36378;
(statearr_36397[(19)] = inst_36291__$1);

return statearr_36397;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36378__$1,(22),inst_36292);
} else {
if((state_val_36379 === (31))){
var inst_36376 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36378__$1,inst_36376);
} else {
if((state_val_36379 === (32))){
var inst_36331 = (state_36378[(16)]);
var inst_36336 = inst_36331.cljs$lang$protocol_mask$partition0$;
var inst_36337 = (inst_36336 & (64));
var inst_36338 = inst_36331.cljs$core$ISeq$;
var inst_36339 = (cljs.core.PROTOCOL_SENTINEL === inst_36338);
var inst_36340 = (inst_36337) || (inst_36339);
var state_36378__$1 = state_36378;
if(cljs.core.truth_(inst_36340)){
var statearr_36398_36478 = state_36378__$1;
(statearr_36398_36478[(1)] = (35));

} else {
var statearr_36399_36479 = state_36378__$1;
(statearr_36399_36479[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (40))){
var inst_36353 = (state_36378[(20)]);
var inst_36352 = (state_36378[(2)]);
var inst_36353__$1 = cljs.core.get.call(null,inst_36352,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36354 = cljs.core.get.call(null,inst_36352,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36355 = cljs.core.not_empty.call(null,inst_36353__$1);
var state_36378__$1 = (function (){var statearr_36400 = state_36378;
(statearr_36400[(20)] = inst_36353__$1);

(statearr_36400[(21)] = inst_36354);

return statearr_36400;
})();
if(cljs.core.truth_(inst_36355)){
var statearr_36401_36480 = state_36378__$1;
(statearr_36401_36480[(1)] = (41));

} else {
var statearr_36402_36481 = state_36378__$1;
(statearr_36402_36481[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (33))){
var state_36378__$1 = state_36378;
var statearr_36403_36482 = state_36378__$1;
(statearr_36403_36482[(2)] = false);

(statearr_36403_36482[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (13))){
var inst_36251 = (state_36378[(22)]);
var inst_36255 = cljs.core.chunk_first.call(null,inst_36251);
var inst_36256 = cljs.core.chunk_rest.call(null,inst_36251);
var inst_36257 = cljs.core.count.call(null,inst_36255);
var inst_36238 = inst_36256;
var inst_36239 = inst_36255;
var inst_36240 = inst_36257;
var inst_36241 = (0);
var state_36378__$1 = (function (){var statearr_36404 = state_36378;
(statearr_36404[(7)] = inst_36241);

(statearr_36404[(8)] = inst_36238);

(statearr_36404[(9)] = inst_36240);

(statearr_36404[(10)] = inst_36239);

return statearr_36404;
})();
var statearr_36405_36483 = state_36378__$1;
(statearr_36405_36483[(2)] = null);

(statearr_36405_36483[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (22))){
var inst_36291 = (state_36378[(19)]);
var inst_36295 = (state_36378[(23)]);
var inst_36294 = (state_36378[(24)]);
var inst_36299 = (state_36378[(25)]);
var inst_36294__$1 = (state_36378[(2)]);
var inst_36295__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36294__$1);
var inst_36296 = (function (){var all_files = inst_36291;
var res_SINGLEQUOTE_ = inst_36294__$1;
var res = inst_36295__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36291,inst_36295,inst_36294,inst_36299,inst_36294__$1,inst_36295__$1,state_val_36379,c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36220_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36220_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36291,inst_36295,inst_36294,inst_36299,inst_36294__$1,inst_36295__$1,state_val_36379,c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36297 = cljs.core.filter.call(null,inst_36296,inst_36294__$1);
var inst_36298 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36299__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36298);
var inst_36300 = cljs.core.not_empty.call(null,inst_36299__$1);
var state_36378__$1 = (function (){var statearr_36406 = state_36378;
(statearr_36406[(23)] = inst_36295__$1);

(statearr_36406[(24)] = inst_36294__$1);

(statearr_36406[(26)] = inst_36297);

(statearr_36406[(25)] = inst_36299__$1);

return statearr_36406;
})();
if(cljs.core.truth_(inst_36300)){
var statearr_36407_36484 = state_36378__$1;
(statearr_36407_36484[(1)] = (23));

} else {
var statearr_36408_36485 = state_36378__$1;
(statearr_36408_36485[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (36))){
var state_36378__$1 = state_36378;
var statearr_36409_36486 = state_36378__$1;
(statearr_36409_36486[(2)] = false);

(statearr_36409_36486[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (41))){
var inst_36353 = (state_36378[(20)]);
var inst_36357 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36358 = cljs.core.map.call(null,inst_36357,inst_36353);
var inst_36359 = cljs.core.pr_str.call(null,inst_36358);
var inst_36360 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36359)].join('');
var inst_36361 = figwheel.client.utils.log.call(null,inst_36360);
var state_36378__$1 = state_36378;
var statearr_36410_36487 = state_36378__$1;
(statearr_36410_36487[(2)] = inst_36361);

(statearr_36410_36487[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (43))){
var inst_36354 = (state_36378[(21)]);
var inst_36364 = (state_36378[(2)]);
var inst_36365 = cljs.core.not_empty.call(null,inst_36354);
var state_36378__$1 = (function (){var statearr_36411 = state_36378;
(statearr_36411[(27)] = inst_36364);

return statearr_36411;
})();
if(cljs.core.truth_(inst_36365)){
var statearr_36412_36488 = state_36378__$1;
(statearr_36412_36488[(1)] = (44));

} else {
var statearr_36413_36489 = state_36378__$1;
(statearr_36413_36489[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (29))){
var inst_36291 = (state_36378[(19)]);
var inst_36295 = (state_36378[(23)]);
var inst_36294 = (state_36378[(24)]);
var inst_36331 = (state_36378[(16)]);
var inst_36297 = (state_36378[(26)]);
var inst_36299 = (state_36378[(25)]);
var inst_36327 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36330 = (function (){var all_files = inst_36291;
var res_SINGLEQUOTE_ = inst_36294;
var res = inst_36295;
var files_not_loaded = inst_36297;
var dependencies_that_loaded = inst_36299;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36291,inst_36295,inst_36294,inst_36331,inst_36297,inst_36299,inst_36327,state_val_36379,c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36329){
var map__36414 = p__36329;
var map__36414__$1 = ((((!((map__36414 == null)))?((((map__36414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36414):map__36414);
var namespace = cljs.core.get.call(null,map__36414__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36291,inst_36295,inst_36294,inst_36331,inst_36297,inst_36299,inst_36327,state_val_36379,c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36331__$1 = cljs.core.group_by.call(null,inst_36330,inst_36297);
var inst_36333 = (inst_36331__$1 == null);
var inst_36334 = cljs.core.not.call(null,inst_36333);
var state_36378__$1 = (function (){var statearr_36416 = state_36378;
(statearr_36416[(16)] = inst_36331__$1);

(statearr_36416[(28)] = inst_36327);

return statearr_36416;
})();
if(inst_36334){
var statearr_36417_36490 = state_36378__$1;
(statearr_36417_36490[(1)] = (32));

} else {
var statearr_36418_36491 = state_36378__$1;
(statearr_36418_36491[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (44))){
var inst_36354 = (state_36378[(21)]);
var inst_36367 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36354);
var inst_36368 = cljs.core.pr_str.call(null,inst_36367);
var inst_36369 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36368)].join('');
var inst_36370 = figwheel.client.utils.log.call(null,inst_36369);
var state_36378__$1 = state_36378;
var statearr_36419_36492 = state_36378__$1;
(statearr_36419_36492[(2)] = inst_36370);

(statearr_36419_36492[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (6))){
var inst_36272 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
var statearr_36420_36493 = state_36378__$1;
(statearr_36420_36493[(2)] = inst_36272);

(statearr_36420_36493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (28))){
var inst_36297 = (state_36378[(26)]);
var inst_36324 = (state_36378[(2)]);
var inst_36325 = cljs.core.not_empty.call(null,inst_36297);
var state_36378__$1 = (function (){var statearr_36421 = state_36378;
(statearr_36421[(29)] = inst_36324);

return statearr_36421;
})();
if(cljs.core.truth_(inst_36325)){
var statearr_36422_36494 = state_36378__$1;
(statearr_36422_36494[(1)] = (29));

} else {
var statearr_36423_36495 = state_36378__$1;
(statearr_36423_36495[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (25))){
var inst_36295 = (state_36378[(23)]);
var inst_36311 = (state_36378[(2)]);
var inst_36312 = cljs.core.not_empty.call(null,inst_36295);
var state_36378__$1 = (function (){var statearr_36424 = state_36378;
(statearr_36424[(30)] = inst_36311);

return statearr_36424;
})();
if(cljs.core.truth_(inst_36312)){
var statearr_36425_36496 = state_36378__$1;
(statearr_36425_36496[(1)] = (26));

} else {
var statearr_36426_36497 = state_36378__$1;
(statearr_36426_36497[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (34))){
var inst_36347 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
if(cljs.core.truth_(inst_36347)){
var statearr_36427_36498 = state_36378__$1;
(statearr_36427_36498[(1)] = (38));

} else {
var statearr_36428_36499 = state_36378__$1;
(statearr_36428_36499[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (17))){
var state_36378__$1 = state_36378;
var statearr_36429_36500 = state_36378__$1;
(statearr_36429_36500[(2)] = recompile_dependents);

(statearr_36429_36500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (3))){
var state_36378__$1 = state_36378;
var statearr_36430_36501 = state_36378__$1;
(statearr_36430_36501[(2)] = null);

(statearr_36430_36501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (12))){
var inst_36268 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
var statearr_36431_36502 = state_36378__$1;
(statearr_36431_36502[(2)] = inst_36268);

(statearr_36431_36502[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (2))){
var inst_36230 = (state_36378[(13)]);
var inst_36237 = cljs.core.seq.call(null,inst_36230);
var inst_36238 = inst_36237;
var inst_36239 = null;
var inst_36240 = (0);
var inst_36241 = (0);
var state_36378__$1 = (function (){var statearr_36432 = state_36378;
(statearr_36432[(7)] = inst_36241);

(statearr_36432[(8)] = inst_36238);

(statearr_36432[(9)] = inst_36240);

(statearr_36432[(10)] = inst_36239);

return statearr_36432;
})();
var statearr_36433_36503 = state_36378__$1;
(statearr_36433_36503[(2)] = null);

(statearr_36433_36503[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (23))){
var inst_36291 = (state_36378[(19)]);
var inst_36295 = (state_36378[(23)]);
var inst_36294 = (state_36378[(24)]);
var inst_36297 = (state_36378[(26)]);
var inst_36299 = (state_36378[(25)]);
var inst_36302 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36304 = (function (){var all_files = inst_36291;
var res_SINGLEQUOTE_ = inst_36294;
var res = inst_36295;
var files_not_loaded = inst_36297;
var dependencies_that_loaded = inst_36299;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36291,inst_36295,inst_36294,inst_36297,inst_36299,inst_36302,state_val_36379,c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36303){
var map__36434 = p__36303;
var map__36434__$1 = ((((!((map__36434 == null)))?((((map__36434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36434):map__36434);
var request_url = cljs.core.get.call(null,map__36434__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36291,inst_36295,inst_36294,inst_36297,inst_36299,inst_36302,state_val_36379,c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36305 = cljs.core.reverse.call(null,inst_36299);
var inst_36306 = cljs.core.map.call(null,inst_36304,inst_36305);
var inst_36307 = cljs.core.pr_str.call(null,inst_36306);
var inst_36308 = figwheel.client.utils.log.call(null,inst_36307);
var state_36378__$1 = (function (){var statearr_36436 = state_36378;
(statearr_36436[(31)] = inst_36302);

return statearr_36436;
})();
var statearr_36437_36504 = state_36378__$1;
(statearr_36437_36504[(2)] = inst_36308);

(statearr_36437_36504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (35))){
var state_36378__$1 = state_36378;
var statearr_36438_36505 = state_36378__$1;
(statearr_36438_36505[(2)] = true);

(statearr_36438_36505[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (19))){
var inst_36281 = (state_36378[(12)]);
var inst_36287 = figwheel.client.file_reloading.expand_files.call(null,inst_36281);
var state_36378__$1 = state_36378;
var statearr_36439_36506 = state_36378__$1;
(statearr_36439_36506[(2)] = inst_36287);

(statearr_36439_36506[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (11))){
var state_36378__$1 = state_36378;
var statearr_36440_36507 = state_36378__$1;
(statearr_36440_36507[(2)] = null);

(statearr_36440_36507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (9))){
var inst_36270 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
var statearr_36441_36508 = state_36378__$1;
(statearr_36441_36508[(2)] = inst_36270);

(statearr_36441_36508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (5))){
var inst_36241 = (state_36378[(7)]);
var inst_36240 = (state_36378[(9)]);
var inst_36243 = (inst_36241 < inst_36240);
var inst_36244 = inst_36243;
var state_36378__$1 = state_36378;
if(cljs.core.truth_(inst_36244)){
var statearr_36442_36509 = state_36378__$1;
(statearr_36442_36509[(1)] = (7));

} else {
var statearr_36443_36510 = state_36378__$1;
(statearr_36443_36510[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (14))){
var inst_36251 = (state_36378[(22)]);
var inst_36260 = cljs.core.first.call(null,inst_36251);
var inst_36261 = figwheel.client.file_reloading.eval_body.call(null,inst_36260,opts);
var inst_36262 = cljs.core.next.call(null,inst_36251);
var inst_36238 = inst_36262;
var inst_36239 = null;
var inst_36240 = (0);
var inst_36241 = (0);
var state_36378__$1 = (function (){var statearr_36444 = state_36378;
(statearr_36444[(32)] = inst_36261);

(statearr_36444[(7)] = inst_36241);

(statearr_36444[(8)] = inst_36238);

(statearr_36444[(9)] = inst_36240);

(statearr_36444[(10)] = inst_36239);

return statearr_36444;
})();
var statearr_36445_36511 = state_36378__$1;
(statearr_36445_36511[(2)] = null);

(statearr_36445_36511[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (45))){
var state_36378__$1 = state_36378;
var statearr_36446_36512 = state_36378__$1;
(statearr_36446_36512[(2)] = null);

(statearr_36446_36512[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (26))){
var inst_36291 = (state_36378[(19)]);
var inst_36295 = (state_36378[(23)]);
var inst_36294 = (state_36378[(24)]);
var inst_36297 = (state_36378[(26)]);
var inst_36299 = (state_36378[(25)]);
var inst_36314 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36316 = (function (){var all_files = inst_36291;
var res_SINGLEQUOTE_ = inst_36294;
var res = inst_36295;
var files_not_loaded = inst_36297;
var dependencies_that_loaded = inst_36299;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36291,inst_36295,inst_36294,inst_36297,inst_36299,inst_36314,state_val_36379,c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36315){
var map__36447 = p__36315;
var map__36447__$1 = ((((!((map__36447 == null)))?((((map__36447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36447):map__36447);
var namespace = cljs.core.get.call(null,map__36447__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36447__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36291,inst_36295,inst_36294,inst_36297,inst_36299,inst_36314,state_val_36379,c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36317 = cljs.core.map.call(null,inst_36316,inst_36295);
var inst_36318 = cljs.core.pr_str.call(null,inst_36317);
var inst_36319 = figwheel.client.utils.log.call(null,inst_36318);
var inst_36320 = (function (){var all_files = inst_36291;
var res_SINGLEQUOTE_ = inst_36294;
var res = inst_36295;
var files_not_loaded = inst_36297;
var dependencies_that_loaded = inst_36299;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36291,inst_36295,inst_36294,inst_36297,inst_36299,inst_36314,inst_36316,inst_36317,inst_36318,inst_36319,state_val_36379,c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36291,inst_36295,inst_36294,inst_36297,inst_36299,inst_36314,inst_36316,inst_36317,inst_36318,inst_36319,state_val_36379,c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36321 = setTimeout(inst_36320,(10));
var state_36378__$1 = (function (){var statearr_36449 = state_36378;
(statearr_36449[(33)] = inst_36319);

(statearr_36449[(34)] = inst_36314);

return statearr_36449;
})();
var statearr_36450_36513 = state_36378__$1;
(statearr_36450_36513[(2)] = inst_36321);

(statearr_36450_36513[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (16))){
var state_36378__$1 = state_36378;
var statearr_36451_36514 = state_36378__$1;
(statearr_36451_36514[(2)] = reload_dependents);

(statearr_36451_36514[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (38))){
var inst_36331 = (state_36378[(16)]);
var inst_36349 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36331);
var state_36378__$1 = state_36378;
var statearr_36452_36515 = state_36378__$1;
(statearr_36452_36515[(2)] = inst_36349);

(statearr_36452_36515[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (30))){
var state_36378__$1 = state_36378;
var statearr_36453_36516 = state_36378__$1;
(statearr_36453_36516[(2)] = null);

(statearr_36453_36516[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (10))){
var inst_36251 = (state_36378[(22)]);
var inst_36253 = cljs.core.chunked_seq_QMARK_.call(null,inst_36251);
var state_36378__$1 = state_36378;
if(inst_36253){
var statearr_36454_36517 = state_36378__$1;
(statearr_36454_36517[(1)] = (13));

} else {
var statearr_36455_36518 = state_36378__$1;
(statearr_36455_36518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (18))){
var inst_36285 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
if(cljs.core.truth_(inst_36285)){
var statearr_36456_36519 = state_36378__$1;
(statearr_36456_36519[(1)] = (19));

} else {
var statearr_36457_36520 = state_36378__$1;
(statearr_36457_36520[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (42))){
var state_36378__$1 = state_36378;
var statearr_36458_36521 = state_36378__$1;
(statearr_36458_36521[(2)] = null);

(statearr_36458_36521[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (37))){
var inst_36344 = (state_36378[(2)]);
var state_36378__$1 = state_36378;
var statearr_36459_36522 = state_36378__$1;
(statearr_36459_36522[(2)] = inst_36344);

(statearr_36459_36522[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36379 === (8))){
var inst_36251 = (state_36378[(22)]);
var inst_36238 = (state_36378[(8)]);
var inst_36251__$1 = cljs.core.seq.call(null,inst_36238);
var state_36378__$1 = (function (){var statearr_36460 = state_36378;
(statearr_36460[(22)] = inst_36251__$1);

return statearr_36460;
})();
if(inst_36251__$1){
var statearr_36461_36523 = state_36378__$1;
(statearr_36461_36523[(1)] = (10));

} else {
var statearr_36462_36524 = state_36378__$1;
(statearr_36462_36524[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32663__auto__,c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32664__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32664__auto____0 = (function (){
var statearr_36463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36463[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32664__auto__);

(statearr_36463[(1)] = (1));

return statearr_36463;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32664__auto____1 = (function (state_36378){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_36378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e36464){if((e36464 instanceof Object)){
var ex__32667__auto__ = e36464;
var statearr_36465_36525 = state_36378;
(statearr_36465_36525[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36526 = state_36378;
state_36378 = G__36526;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32664__auto__ = function(state_36378){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32664__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32664__auto____1.call(this,state_36378);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32664__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32664__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32753__auto__ = (function (){var statearr_36466 = f__32752__auto__.call(null);
(statearr_36466[(6)] = c__32751__auto__);

return statearr_36466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto__,map__36223,map__36223__$1,opts,before_jsload,on_jsload,reload_dependents,map__36224,map__36224__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32751__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36529,link){
var map__36530 = p__36529;
var map__36530__$1 = ((((!((map__36530 == null)))?((((map__36530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36530):map__36530);
var file = cljs.core.get.call(null,map__36530__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36530,map__36530__$1,file){
return (function (p1__36527_SHARP_,p2__36528_SHARP_){
if(cljs.core._EQ_.call(null,p1__36527_SHARP_,p2__36528_SHARP_)){
return p1__36527_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36530,map__36530__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36533){
var map__36534 = p__36533;
var map__36534__$1 = ((((!((map__36534 == null)))?((((map__36534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36534):map__36534);
var match_length = cljs.core.get.call(null,map__36534__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36534__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36532_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36532_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36536_SHARP_,p2__36537_SHARP_){
return cljs.core.assoc.call(null,p1__36536_SHARP_,cljs.core.get.call(null,p2__36537_SHARP_,key),p2__36537_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_36538 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36538);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36538);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36539,p__36540){
var map__36541 = p__36539;
var map__36541__$1 = ((((!((map__36541 == null)))?((((map__36541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36541):map__36541);
var on_cssload = cljs.core.get.call(null,map__36541__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36542 = p__36540;
var map__36542__$1 = ((((!((map__36542 == null)))?((((map__36542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36542):map__36542);
var files_msg = map__36542__$1;
var files = cljs.core.get.call(null,map__36542__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1512672343974
