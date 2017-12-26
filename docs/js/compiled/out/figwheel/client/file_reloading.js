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
var or__27195__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27195__auto__){
return or__27195__auto__;
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
var or__27195__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
var or__27195__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27195__auto____$1)){
return or__27195__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33299_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33299_SHARP_));
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
var seq__33300 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33301 = null;
var count__33302 = (0);
var i__33303 = (0);
while(true){
if((i__33303 < count__33302)){
var n = cljs.core._nth.call(null,chunk__33301,i__33303);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33304 = seq__33300;
var G__33305 = chunk__33301;
var G__33306 = count__33302;
var G__33307 = (i__33303 + (1));
seq__33300 = G__33304;
chunk__33301 = G__33305;
count__33302 = G__33306;
i__33303 = G__33307;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33300);
if(temp__4657__auto__){
var seq__33300__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33300__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__33300__$1);
var G__33308 = cljs.core.chunk_rest.call(null,seq__33300__$1);
var G__33309 = c__28034__auto__;
var G__33310 = cljs.core.count.call(null,c__28034__auto__);
var G__33311 = (0);
seq__33300 = G__33308;
chunk__33301 = G__33309;
count__33302 = G__33310;
i__33303 = G__33311;
continue;
} else {
var n = cljs.core.first.call(null,seq__33300__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33312 = cljs.core.next.call(null,seq__33300__$1);
var G__33313 = null;
var G__33314 = (0);
var G__33315 = (0);
seq__33300 = G__33312;
chunk__33301 = G__33313;
count__33302 = G__33314;
i__33303 = G__33315;
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

var seq__33325_33333 = cljs.core.seq.call(null,deps);
var chunk__33326_33334 = null;
var count__33327_33335 = (0);
var i__33328_33336 = (0);
while(true){
if((i__33328_33336 < count__33327_33335)){
var dep_33337 = cljs.core._nth.call(null,chunk__33326_33334,i__33328_33336);
topo_sort_helper_STAR_.call(null,dep_33337,(depth + (1)),state);

var G__33338 = seq__33325_33333;
var G__33339 = chunk__33326_33334;
var G__33340 = count__33327_33335;
var G__33341 = (i__33328_33336 + (1));
seq__33325_33333 = G__33338;
chunk__33326_33334 = G__33339;
count__33327_33335 = G__33340;
i__33328_33336 = G__33341;
continue;
} else {
var temp__4657__auto___33342 = cljs.core.seq.call(null,seq__33325_33333);
if(temp__4657__auto___33342){
var seq__33325_33343__$1 = temp__4657__auto___33342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33325_33343__$1)){
var c__28034__auto___33344 = cljs.core.chunk_first.call(null,seq__33325_33343__$1);
var G__33345 = cljs.core.chunk_rest.call(null,seq__33325_33343__$1);
var G__33346 = c__28034__auto___33344;
var G__33347 = cljs.core.count.call(null,c__28034__auto___33344);
var G__33348 = (0);
seq__33325_33333 = G__33345;
chunk__33326_33334 = G__33346;
count__33327_33335 = G__33347;
i__33328_33336 = G__33348;
continue;
} else {
var dep_33349 = cljs.core.first.call(null,seq__33325_33343__$1);
topo_sort_helper_STAR_.call(null,dep_33349,(depth + (1)),state);

var G__33350 = cljs.core.next.call(null,seq__33325_33343__$1);
var G__33351 = null;
var G__33352 = (0);
var G__33353 = (0);
seq__33325_33333 = G__33350;
chunk__33326_33334 = G__33351;
count__33327_33335 = G__33352;
i__33328_33336 = G__33353;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33329){
var vec__33330 = p__33329;
var seq__33331 = cljs.core.seq.call(null,vec__33330);
var first__33332 = cljs.core.first.call(null,seq__33331);
var seq__33331__$1 = cljs.core.next.call(null,seq__33331);
var x = first__33332;
var xs = seq__33331__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33330,seq__33331,first__33332,seq__33331__$1,x,xs,get_deps__$1){
return (function (p1__33316_SHARP_){
return clojure.set.difference.call(null,p1__33316_SHARP_,x);
});})(vec__33330,seq__33331,first__33332,seq__33331__$1,x,xs,get_deps__$1))
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
var seq__33354 = cljs.core.seq.call(null,provides);
var chunk__33355 = null;
var count__33356 = (0);
var i__33357 = (0);
while(true){
if((i__33357 < count__33356)){
var prov = cljs.core._nth.call(null,chunk__33355,i__33357);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33358_33366 = cljs.core.seq.call(null,requires);
var chunk__33359_33367 = null;
var count__33360_33368 = (0);
var i__33361_33369 = (0);
while(true){
if((i__33361_33369 < count__33360_33368)){
var req_33370 = cljs.core._nth.call(null,chunk__33359_33367,i__33361_33369);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33370,prov);

var G__33371 = seq__33358_33366;
var G__33372 = chunk__33359_33367;
var G__33373 = count__33360_33368;
var G__33374 = (i__33361_33369 + (1));
seq__33358_33366 = G__33371;
chunk__33359_33367 = G__33372;
count__33360_33368 = G__33373;
i__33361_33369 = G__33374;
continue;
} else {
var temp__4657__auto___33375 = cljs.core.seq.call(null,seq__33358_33366);
if(temp__4657__auto___33375){
var seq__33358_33376__$1 = temp__4657__auto___33375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33358_33376__$1)){
var c__28034__auto___33377 = cljs.core.chunk_first.call(null,seq__33358_33376__$1);
var G__33378 = cljs.core.chunk_rest.call(null,seq__33358_33376__$1);
var G__33379 = c__28034__auto___33377;
var G__33380 = cljs.core.count.call(null,c__28034__auto___33377);
var G__33381 = (0);
seq__33358_33366 = G__33378;
chunk__33359_33367 = G__33379;
count__33360_33368 = G__33380;
i__33361_33369 = G__33381;
continue;
} else {
var req_33382 = cljs.core.first.call(null,seq__33358_33376__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33382,prov);

var G__33383 = cljs.core.next.call(null,seq__33358_33376__$1);
var G__33384 = null;
var G__33385 = (0);
var G__33386 = (0);
seq__33358_33366 = G__33383;
chunk__33359_33367 = G__33384;
count__33360_33368 = G__33385;
i__33361_33369 = G__33386;
continue;
}
} else {
}
}
break;
}

var G__33387 = seq__33354;
var G__33388 = chunk__33355;
var G__33389 = count__33356;
var G__33390 = (i__33357 + (1));
seq__33354 = G__33387;
chunk__33355 = G__33388;
count__33356 = G__33389;
i__33357 = G__33390;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33354);
if(temp__4657__auto__){
var seq__33354__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33354__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__33354__$1);
var G__33391 = cljs.core.chunk_rest.call(null,seq__33354__$1);
var G__33392 = c__28034__auto__;
var G__33393 = cljs.core.count.call(null,c__28034__auto__);
var G__33394 = (0);
seq__33354 = G__33391;
chunk__33355 = G__33392;
count__33356 = G__33393;
i__33357 = G__33394;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33354__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33362_33395 = cljs.core.seq.call(null,requires);
var chunk__33363_33396 = null;
var count__33364_33397 = (0);
var i__33365_33398 = (0);
while(true){
if((i__33365_33398 < count__33364_33397)){
var req_33399 = cljs.core._nth.call(null,chunk__33363_33396,i__33365_33398);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33399,prov);

var G__33400 = seq__33362_33395;
var G__33401 = chunk__33363_33396;
var G__33402 = count__33364_33397;
var G__33403 = (i__33365_33398 + (1));
seq__33362_33395 = G__33400;
chunk__33363_33396 = G__33401;
count__33364_33397 = G__33402;
i__33365_33398 = G__33403;
continue;
} else {
var temp__4657__auto___33404__$1 = cljs.core.seq.call(null,seq__33362_33395);
if(temp__4657__auto___33404__$1){
var seq__33362_33405__$1 = temp__4657__auto___33404__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33362_33405__$1)){
var c__28034__auto___33406 = cljs.core.chunk_first.call(null,seq__33362_33405__$1);
var G__33407 = cljs.core.chunk_rest.call(null,seq__33362_33405__$1);
var G__33408 = c__28034__auto___33406;
var G__33409 = cljs.core.count.call(null,c__28034__auto___33406);
var G__33410 = (0);
seq__33362_33395 = G__33407;
chunk__33363_33396 = G__33408;
count__33364_33397 = G__33409;
i__33365_33398 = G__33410;
continue;
} else {
var req_33411 = cljs.core.first.call(null,seq__33362_33405__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33411,prov);

var G__33412 = cljs.core.next.call(null,seq__33362_33405__$1);
var G__33413 = null;
var G__33414 = (0);
var G__33415 = (0);
seq__33362_33395 = G__33412;
chunk__33363_33396 = G__33413;
count__33364_33397 = G__33414;
i__33365_33398 = G__33415;
continue;
}
} else {
}
}
break;
}

var G__33416 = cljs.core.next.call(null,seq__33354__$1);
var G__33417 = null;
var G__33418 = (0);
var G__33419 = (0);
seq__33354 = G__33416;
chunk__33355 = G__33417;
count__33356 = G__33418;
i__33357 = G__33419;
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
var seq__33420_33424 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33421_33425 = null;
var count__33422_33426 = (0);
var i__33423_33427 = (0);
while(true){
if((i__33423_33427 < count__33422_33426)){
var ns_33428 = cljs.core._nth.call(null,chunk__33421_33425,i__33423_33427);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33428);

var G__33429 = seq__33420_33424;
var G__33430 = chunk__33421_33425;
var G__33431 = count__33422_33426;
var G__33432 = (i__33423_33427 + (1));
seq__33420_33424 = G__33429;
chunk__33421_33425 = G__33430;
count__33422_33426 = G__33431;
i__33423_33427 = G__33432;
continue;
} else {
var temp__4657__auto___33433 = cljs.core.seq.call(null,seq__33420_33424);
if(temp__4657__auto___33433){
var seq__33420_33434__$1 = temp__4657__auto___33433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33420_33434__$1)){
var c__28034__auto___33435 = cljs.core.chunk_first.call(null,seq__33420_33434__$1);
var G__33436 = cljs.core.chunk_rest.call(null,seq__33420_33434__$1);
var G__33437 = c__28034__auto___33435;
var G__33438 = cljs.core.count.call(null,c__28034__auto___33435);
var G__33439 = (0);
seq__33420_33424 = G__33436;
chunk__33421_33425 = G__33437;
count__33422_33426 = G__33438;
i__33423_33427 = G__33439;
continue;
} else {
var ns_33440 = cljs.core.first.call(null,seq__33420_33434__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33440);

var G__33441 = cljs.core.next.call(null,seq__33420_33434__$1);
var G__33442 = null;
var G__33443 = (0);
var G__33444 = (0);
seq__33420_33424 = G__33441;
chunk__33421_33425 = G__33442;
count__33422_33426 = G__33443;
i__33423_33427 = G__33444;
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
goog.require_figwheel_backup_ = (function (){var or__27195__auto__ = goog.require__;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
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
var G__33445__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33446__i = 0, G__33446__a = new Array(arguments.length -  0);
while (G__33446__i < G__33446__a.length) {G__33446__a[G__33446__i] = arguments[G__33446__i + 0]; ++G__33446__i;}
  args = new cljs.core.IndexedSeq(G__33446__a,0,null);
} 
return G__33445__delegate.call(this,args);};
G__33445.cljs$lang$maxFixedArity = 0;
G__33445.cljs$lang$applyTo = (function (arglist__33447){
var args = cljs.core.seq(arglist__33447);
return G__33445__delegate(args);
});
G__33445.cljs$core$IFn$_invoke$arity$variadic = G__33445__delegate;
return G__33445;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__33448_SHARP_,p2__33449_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33448_SHARP_)].join('')),p2__33449_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__33450_SHARP_,p2__33451_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33450_SHARP_)].join(''),p2__33451_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__33452 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__33452.addCallback(((function (G__33452){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__33452))
);

G__33452.addErrback(((function (G__33452){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__33452))
);

return G__33452;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33453 = cljs.core._EQ_;
var expr__33454 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33453.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33454))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33453,expr__33454){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33453,expr__33454))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33453,expr__33454){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33456){if((e33456 instanceof Error)){
var e = e33456;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33456;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33453,expr__33454))
} else {
if(cljs.core.truth_(pred__33453.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33454))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33453.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__33454))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33453.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33454))){
return ((function (pred__33453,expr__33454){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33457){if((e33457 instanceof Error)){
var e = e33457;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33457;

}
}})());
});
;})(pred__33453,expr__33454))
} else {
return ((function (pred__33453,expr__33454){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33453,expr__33454))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33458,callback){
var map__33459 = p__33458;
var map__33459__$1 = ((((!((map__33459 == null)))?((((map__33459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33459):map__33459);
var file_msg = map__33459__$1;
var request_url = cljs.core.get.call(null,map__33459__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33459,map__33459__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33459,map__33459__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto__){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto__){
return (function (state_33483){
var state_val_33484 = (state_33483[(1)]);
if((state_val_33484 === (7))){
var inst_33479 = (state_33483[(2)]);
var state_33483__$1 = state_33483;
var statearr_33485_33502 = state_33483__$1;
(statearr_33485_33502[(2)] = inst_33479);

(statearr_33485_33502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (1))){
var state_33483__$1 = state_33483;
var statearr_33486_33503 = state_33483__$1;
(statearr_33486_33503[(2)] = null);

(statearr_33486_33503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (4))){
var inst_33463 = (state_33483[(7)]);
var inst_33463__$1 = (state_33483[(2)]);
var state_33483__$1 = (function (){var statearr_33487 = state_33483;
(statearr_33487[(7)] = inst_33463__$1);

return statearr_33487;
})();
if(cljs.core.truth_(inst_33463__$1)){
var statearr_33488_33504 = state_33483__$1;
(statearr_33488_33504[(1)] = (5));

} else {
var statearr_33489_33505 = state_33483__$1;
(statearr_33489_33505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (6))){
var state_33483__$1 = state_33483;
var statearr_33490_33506 = state_33483__$1;
(statearr_33490_33506[(2)] = null);

(statearr_33490_33506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (3))){
var inst_33481 = (state_33483[(2)]);
var state_33483__$1 = state_33483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33483__$1,inst_33481);
} else {
if((state_val_33484 === (2))){
var state_33483__$1 = state_33483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33483__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33484 === (11))){
var inst_33475 = (state_33483[(2)]);
var state_33483__$1 = (function (){var statearr_33491 = state_33483;
(statearr_33491[(8)] = inst_33475);

return statearr_33491;
})();
var statearr_33492_33507 = state_33483__$1;
(statearr_33492_33507[(2)] = null);

(statearr_33492_33507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (9))){
var inst_33469 = (state_33483[(9)]);
var inst_33467 = (state_33483[(10)]);
var inst_33471 = inst_33469.call(null,inst_33467);
var state_33483__$1 = state_33483;
var statearr_33493_33508 = state_33483__$1;
(statearr_33493_33508[(2)] = inst_33471);

(statearr_33493_33508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (5))){
var inst_33463 = (state_33483[(7)]);
var inst_33465 = figwheel.client.file_reloading.blocking_load.call(null,inst_33463);
var state_33483__$1 = state_33483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33483__$1,(8),inst_33465);
} else {
if((state_val_33484 === (10))){
var inst_33467 = (state_33483[(10)]);
var inst_33473 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33467);
var state_33483__$1 = state_33483;
var statearr_33494_33509 = state_33483__$1;
(statearr_33494_33509[(2)] = inst_33473);

(statearr_33494_33509[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33484 === (8))){
var inst_33469 = (state_33483[(9)]);
var inst_33463 = (state_33483[(7)]);
var inst_33467 = (state_33483[(2)]);
var inst_33468 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33469__$1 = cljs.core.get.call(null,inst_33468,inst_33463);
var state_33483__$1 = (function (){var statearr_33495 = state_33483;
(statearr_33495[(9)] = inst_33469__$1);

(statearr_33495[(10)] = inst_33467);

return statearr_33495;
})();
if(cljs.core.truth_(inst_33469__$1)){
var statearr_33496_33510 = state_33483__$1;
(statearr_33496_33510[(1)] = (9));

} else {
var statearr_33497_33511 = state_33483__$1;
(statearr_33497_33511[(1)] = (10));

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
});})(c__29745__auto__))
;
return ((function (switch__29657__auto__,c__29745__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29658__auto__ = null;
var figwheel$client$file_reloading$state_machine__29658__auto____0 = (function (){
var statearr_33498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33498[(0)] = figwheel$client$file_reloading$state_machine__29658__auto__);

(statearr_33498[(1)] = (1));

return statearr_33498;
});
var figwheel$client$file_reloading$state_machine__29658__auto____1 = (function (state_33483){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_33483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e33499){if((e33499 instanceof Object)){
var ex__29661__auto__ = e33499;
var statearr_33500_33512 = state_33483;
(statearr_33500_33512[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33513 = state_33483;
state_33483 = G__33513;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29658__auto__ = function(state_33483){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29658__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29658__auto____1.call(this,state_33483);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29658__auto____0;
figwheel$client$file_reloading$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29658__auto____1;
return figwheel$client$file_reloading$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto__))
})();
var state__29747__auto__ = (function (){var statearr_33501 = f__29746__auto__.call(null);
(statearr_33501[(6)] = c__29745__auto__);

return statearr_33501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto__))
);

return c__29745__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33514,callback){
var map__33515 = p__33514;
var map__33515__$1 = ((((!((map__33515 == null)))?((((map__33515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33515):map__33515);
var file_msg = map__33515__$1;
var namespace = cljs.core.get.call(null,map__33515__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33515,map__33515__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33515,map__33515__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33517){
var map__33518 = p__33517;
var map__33518__$1 = ((((!((map__33518 == null)))?((((map__33518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33518):map__33518);
var file_msg = map__33518__$1;
var namespace = cljs.core.get.call(null,map__33518__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33520){
var map__33521 = p__33520;
var map__33521__$1 = ((((!((map__33521 == null)))?((((map__33521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33521):map__33521);
var file_msg = map__33521__$1;
var namespace = cljs.core.get.call(null,map__33521__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27183__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27183__auto__){
var or__27195__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
var or__27195__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27195__auto____$1)){
return or__27195__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27183__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33523,callback){
var map__33524 = p__33523;
var map__33524__$1 = ((((!((map__33524 == null)))?((((map__33524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33524):map__33524);
var file_msg = map__33524__$1;
var request_url = cljs.core.get.call(null,map__33524__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33524__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29745__auto___33574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___33574,out){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___33574,out){
return (function (state_33559){
var state_val_33560 = (state_33559[(1)]);
if((state_val_33560 === (1))){
var inst_33533 = cljs.core.seq.call(null,files);
var inst_33534 = cljs.core.first.call(null,inst_33533);
var inst_33535 = cljs.core.next.call(null,inst_33533);
var inst_33536 = files;
var state_33559__$1 = (function (){var statearr_33561 = state_33559;
(statearr_33561[(7)] = inst_33535);

(statearr_33561[(8)] = inst_33536);

(statearr_33561[(9)] = inst_33534);

return statearr_33561;
})();
var statearr_33562_33575 = state_33559__$1;
(statearr_33562_33575[(2)] = null);

(statearr_33562_33575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (2))){
var inst_33536 = (state_33559[(8)]);
var inst_33542 = (state_33559[(10)]);
var inst_33541 = cljs.core.seq.call(null,inst_33536);
var inst_33542__$1 = cljs.core.first.call(null,inst_33541);
var inst_33543 = cljs.core.next.call(null,inst_33541);
var inst_33544 = (inst_33542__$1 == null);
var inst_33545 = cljs.core.not.call(null,inst_33544);
var state_33559__$1 = (function (){var statearr_33563 = state_33559;
(statearr_33563[(11)] = inst_33543);

(statearr_33563[(10)] = inst_33542__$1);

return statearr_33563;
})();
if(inst_33545){
var statearr_33564_33576 = state_33559__$1;
(statearr_33564_33576[(1)] = (4));

} else {
var statearr_33565_33577 = state_33559__$1;
(statearr_33565_33577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (3))){
var inst_33557 = (state_33559[(2)]);
var state_33559__$1 = state_33559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33559__$1,inst_33557);
} else {
if((state_val_33560 === (4))){
var inst_33542 = (state_33559[(10)]);
var inst_33547 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33542);
var state_33559__$1 = state_33559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33559__$1,(7),inst_33547);
} else {
if((state_val_33560 === (5))){
var inst_33553 = cljs.core.async.close_BANG_.call(null,out);
var state_33559__$1 = state_33559;
var statearr_33566_33578 = state_33559__$1;
(statearr_33566_33578[(2)] = inst_33553);

(statearr_33566_33578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (6))){
var inst_33555 = (state_33559[(2)]);
var state_33559__$1 = state_33559;
var statearr_33567_33579 = state_33559__$1;
(statearr_33567_33579[(2)] = inst_33555);

(statearr_33567_33579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (7))){
var inst_33543 = (state_33559[(11)]);
var inst_33549 = (state_33559[(2)]);
var inst_33550 = cljs.core.async.put_BANG_.call(null,out,inst_33549);
var inst_33536 = inst_33543;
var state_33559__$1 = (function (){var statearr_33568 = state_33559;
(statearr_33568[(12)] = inst_33550);

(statearr_33568[(8)] = inst_33536);

return statearr_33568;
})();
var statearr_33569_33580 = state_33559__$1;
(statearr_33569_33580[(2)] = null);

(statearr_33569_33580[(1)] = (2));


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
});})(c__29745__auto___33574,out))
;
return ((function (switch__29657__auto__,c__29745__auto___33574,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto____0 = (function (){
var statearr_33570 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33570[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto__);

(statearr_33570[(1)] = (1));

return statearr_33570;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto____1 = (function (state_33559){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_33559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e33571){if((e33571 instanceof Object)){
var ex__29661__auto__ = e33571;
var statearr_33572_33581 = state_33559;
(statearr_33572_33581[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33582 = state_33559;
state_33559 = G__33582;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto__ = function(state_33559){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto____1.call(this,state_33559);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___33574,out))
})();
var state__29747__auto__ = (function (){var statearr_33573 = f__29746__auto__.call(null);
(statearr_33573[(6)] = c__29745__auto___33574);

return statearr_33573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___33574,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33583,opts){
var map__33584 = p__33583;
var map__33584__$1 = ((((!((map__33584 == null)))?((((map__33584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33584):map__33584);
var eval_body = cljs.core.get.call(null,map__33584__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33584__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27183__auto__ = eval_body;
if(cljs.core.truth_(and__27183__auto__)){
return typeof eval_body === 'string';
} else {
return and__27183__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33586){var e = e33586;
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
return (function (p1__33587_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33587_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__33588){
var vec__33589 = p__33588;
var k = cljs.core.nth.call(null,vec__33589,(0),null);
var v = cljs.core.nth.call(null,vec__33589,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33592){
var vec__33593 = p__33592;
var k = cljs.core.nth.call(null,vec__33593,(0),null);
var v = cljs.core.nth.call(null,vec__33593,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33599,p__33600){
var map__33601 = p__33599;
var map__33601__$1 = ((((!((map__33601 == null)))?((((map__33601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33601):map__33601);
var opts = map__33601__$1;
var before_jsload = cljs.core.get.call(null,map__33601__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33601__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33601__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33602 = p__33600;
var map__33602__$1 = ((((!((map__33602 == null)))?((((map__33602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33602):map__33602);
var msg = map__33602__$1;
var files = cljs.core.get.call(null,map__33602__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33602__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33602__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33756){
var state_val_33757 = (state_33756[(1)]);
if((state_val_33757 === (7))){
var inst_33619 = (state_33756[(7)]);
var inst_33618 = (state_33756[(8)]);
var inst_33617 = (state_33756[(9)]);
var inst_33616 = (state_33756[(10)]);
var inst_33624 = cljs.core._nth.call(null,inst_33617,inst_33619);
var inst_33625 = figwheel.client.file_reloading.eval_body.call(null,inst_33624,opts);
var inst_33626 = (inst_33619 + (1));
var tmp33758 = inst_33618;
var tmp33759 = inst_33617;
var tmp33760 = inst_33616;
var inst_33616__$1 = tmp33760;
var inst_33617__$1 = tmp33759;
var inst_33618__$1 = tmp33758;
var inst_33619__$1 = inst_33626;
var state_33756__$1 = (function (){var statearr_33761 = state_33756;
(statearr_33761[(7)] = inst_33619__$1);

(statearr_33761[(8)] = inst_33618__$1);

(statearr_33761[(9)] = inst_33617__$1);

(statearr_33761[(10)] = inst_33616__$1);

(statearr_33761[(11)] = inst_33625);

return statearr_33761;
})();
var statearr_33762_33845 = state_33756__$1;
(statearr_33762_33845[(2)] = null);

(statearr_33762_33845[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (20))){
var inst_33659 = (state_33756[(12)]);
var inst_33667 = figwheel.client.file_reloading.sort_files.call(null,inst_33659);
var state_33756__$1 = state_33756;
var statearr_33763_33846 = state_33756__$1;
(statearr_33763_33846[(2)] = inst_33667);

(statearr_33763_33846[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (27))){
var state_33756__$1 = state_33756;
var statearr_33764_33847 = state_33756__$1;
(statearr_33764_33847[(2)] = null);

(statearr_33764_33847[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (1))){
var inst_33608 = (state_33756[(13)]);
var inst_33605 = before_jsload.call(null,files);
var inst_33606 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33607 = (function (){return ((function (inst_33608,inst_33605,inst_33606,state_val_33757,c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33596_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33596_SHARP_);
});
;})(inst_33608,inst_33605,inst_33606,state_val_33757,c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33608__$1 = cljs.core.filter.call(null,inst_33607,files);
var inst_33609 = cljs.core.not_empty.call(null,inst_33608__$1);
var state_33756__$1 = (function (){var statearr_33765 = state_33756;
(statearr_33765[(14)] = inst_33605);

(statearr_33765[(15)] = inst_33606);

(statearr_33765[(13)] = inst_33608__$1);

return statearr_33765;
})();
if(cljs.core.truth_(inst_33609)){
var statearr_33766_33848 = state_33756__$1;
(statearr_33766_33848[(1)] = (2));

} else {
var statearr_33767_33849 = state_33756__$1;
(statearr_33767_33849[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (24))){
var state_33756__$1 = state_33756;
var statearr_33768_33850 = state_33756__$1;
(statearr_33768_33850[(2)] = null);

(statearr_33768_33850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (39))){
var inst_33709 = (state_33756[(16)]);
var state_33756__$1 = state_33756;
var statearr_33769_33851 = state_33756__$1;
(statearr_33769_33851[(2)] = inst_33709);

(statearr_33769_33851[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (46))){
var inst_33751 = (state_33756[(2)]);
var state_33756__$1 = state_33756;
var statearr_33770_33852 = state_33756__$1;
(statearr_33770_33852[(2)] = inst_33751);

(statearr_33770_33852[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (4))){
var inst_33653 = (state_33756[(2)]);
var inst_33654 = cljs.core.List.EMPTY;
var inst_33655 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33654);
var inst_33656 = (function (){return ((function (inst_33653,inst_33654,inst_33655,state_val_33757,c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33597_SHARP_){
var and__27183__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33597_SHARP_);
if(cljs.core.truth_(and__27183__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33597_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33597_SHARP_)));
} else {
return and__27183__auto__;
}
});
;})(inst_33653,inst_33654,inst_33655,state_val_33757,c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33657 = cljs.core.filter.call(null,inst_33656,files);
var inst_33658 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33659 = cljs.core.concat.call(null,inst_33657,inst_33658);
var state_33756__$1 = (function (){var statearr_33771 = state_33756;
(statearr_33771[(17)] = inst_33655);

(statearr_33771[(12)] = inst_33659);

(statearr_33771[(18)] = inst_33653);

return statearr_33771;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33772_33853 = state_33756__$1;
(statearr_33772_33853[(1)] = (16));

} else {
var statearr_33773_33854 = state_33756__$1;
(statearr_33773_33854[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (15))){
var inst_33643 = (state_33756[(2)]);
var state_33756__$1 = state_33756;
var statearr_33774_33855 = state_33756__$1;
(statearr_33774_33855[(2)] = inst_33643);

(statearr_33774_33855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (21))){
var inst_33669 = (state_33756[(19)]);
var inst_33669__$1 = (state_33756[(2)]);
var inst_33670 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33669__$1);
var state_33756__$1 = (function (){var statearr_33775 = state_33756;
(statearr_33775[(19)] = inst_33669__$1);

return statearr_33775;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33756__$1,(22),inst_33670);
} else {
if((state_val_33757 === (31))){
var inst_33754 = (state_33756[(2)]);
var state_33756__$1 = state_33756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33756__$1,inst_33754);
} else {
if((state_val_33757 === (32))){
var inst_33709 = (state_33756[(16)]);
var inst_33714 = inst_33709.cljs$lang$protocol_mask$partition0$;
var inst_33715 = (inst_33714 & (64));
var inst_33716 = inst_33709.cljs$core$ISeq$;
var inst_33717 = (cljs.core.PROTOCOL_SENTINEL === inst_33716);
var inst_33718 = (inst_33715) || (inst_33717);
var state_33756__$1 = state_33756;
if(cljs.core.truth_(inst_33718)){
var statearr_33776_33856 = state_33756__$1;
(statearr_33776_33856[(1)] = (35));

} else {
var statearr_33777_33857 = state_33756__$1;
(statearr_33777_33857[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (40))){
var inst_33731 = (state_33756[(20)]);
var inst_33730 = (state_33756[(2)]);
var inst_33731__$1 = cljs.core.get.call(null,inst_33730,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33732 = cljs.core.get.call(null,inst_33730,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33733 = cljs.core.not_empty.call(null,inst_33731__$1);
var state_33756__$1 = (function (){var statearr_33778 = state_33756;
(statearr_33778[(20)] = inst_33731__$1);

(statearr_33778[(21)] = inst_33732);

return statearr_33778;
})();
if(cljs.core.truth_(inst_33733)){
var statearr_33779_33858 = state_33756__$1;
(statearr_33779_33858[(1)] = (41));

} else {
var statearr_33780_33859 = state_33756__$1;
(statearr_33780_33859[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (33))){
var state_33756__$1 = state_33756;
var statearr_33781_33860 = state_33756__$1;
(statearr_33781_33860[(2)] = false);

(statearr_33781_33860[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (13))){
var inst_33629 = (state_33756[(22)]);
var inst_33633 = cljs.core.chunk_first.call(null,inst_33629);
var inst_33634 = cljs.core.chunk_rest.call(null,inst_33629);
var inst_33635 = cljs.core.count.call(null,inst_33633);
var inst_33616 = inst_33634;
var inst_33617 = inst_33633;
var inst_33618 = inst_33635;
var inst_33619 = (0);
var state_33756__$1 = (function (){var statearr_33782 = state_33756;
(statearr_33782[(7)] = inst_33619);

(statearr_33782[(8)] = inst_33618);

(statearr_33782[(9)] = inst_33617);

(statearr_33782[(10)] = inst_33616);

return statearr_33782;
})();
var statearr_33783_33861 = state_33756__$1;
(statearr_33783_33861[(2)] = null);

(statearr_33783_33861[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (22))){
var inst_33669 = (state_33756[(19)]);
var inst_33677 = (state_33756[(23)]);
var inst_33673 = (state_33756[(24)]);
var inst_33672 = (state_33756[(25)]);
var inst_33672__$1 = (state_33756[(2)]);
var inst_33673__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33672__$1);
var inst_33674 = (function (){var all_files = inst_33669;
var res_SINGLEQUOTE_ = inst_33672__$1;
var res = inst_33673__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33669,inst_33677,inst_33673,inst_33672,inst_33672__$1,inst_33673__$1,state_val_33757,c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33598_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33598_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33669,inst_33677,inst_33673,inst_33672,inst_33672__$1,inst_33673__$1,state_val_33757,c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33675 = cljs.core.filter.call(null,inst_33674,inst_33672__$1);
var inst_33676 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33677__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33676);
var inst_33678 = cljs.core.not_empty.call(null,inst_33677__$1);
var state_33756__$1 = (function (){var statearr_33784 = state_33756;
(statearr_33784[(23)] = inst_33677__$1);

(statearr_33784[(26)] = inst_33675);

(statearr_33784[(24)] = inst_33673__$1);

(statearr_33784[(25)] = inst_33672__$1);

return statearr_33784;
})();
if(cljs.core.truth_(inst_33678)){
var statearr_33785_33862 = state_33756__$1;
(statearr_33785_33862[(1)] = (23));

} else {
var statearr_33786_33863 = state_33756__$1;
(statearr_33786_33863[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (36))){
var state_33756__$1 = state_33756;
var statearr_33787_33864 = state_33756__$1;
(statearr_33787_33864[(2)] = false);

(statearr_33787_33864[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (41))){
var inst_33731 = (state_33756[(20)]);
var inst_33735 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33736 = cljs.core.map.call(null,inst_33735,inst_33731);
var inst_33737 = cljs.core.pr_str.call(null,inst_33736);
var inst_33738 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33737)].join('');
var inst_33739 = figwheel.client.utils.log.call(null,inst_33738);
var state_33756__$1 = state_33756;
var statearr_33788_33865 = state_33756__$1;
(statearr_33788_33865[(2)] = inst_33739);

(statearr_33788_33865[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (43))){
var inst_33732 = (state_33756[(21)]);
var inst_33742 = (state_33756[(2)]);
var inst_33743 = cljs.core.not_empty.call(null,inst_33732);
var state_33756__$1 = (function (){var statearr_33789 = state_33756;
(statearr_33789[(27)] = inst_33742);

return statearr_33789;
})();
if(cljs.core.truth_(inst_33743)){
var statearr_33790_33866 = state_33756__$1;
(statearr_33790_33866[(1)] = (44));

} else {
var statearr_33791_33867 = state_33756__$1;
(statearr_33791_33867[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (29))){
var inst_33669 = (state_33756[(19)]);
var inst_33677 = (state_33756[(23)]);
var inst_33709 = (state_33756[(16)]);
var inst_33675 = (state_33756[(26)]);
var inst_33673 = (state_33756[(24)]);
var inst_33672 = (state_33756[(25)]);
var inst_33705 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33708 = (function (){var all_files = inst_33669;
var res_SINGLEQUOTE_ = inst_33672;
var res = inst_33673;
var files_not_loaded = inst_33675;
var dependencies_that_loaded = inst_33677;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33669,inst_33677,inst_33709,inst_33675,inst_33673,inst_33672,inst_33705,state_val_33757,c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33707){
var map__33792 = p__33707;
var map__33792__$1 = ((((!((map__33792 == null)))?((((map__33792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33792):map__33792);
var namespace = cljs.core.get.call(null,map__33792__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33669,inst_33677,inst_33709,inst_33675,inst_33673,inst_33672,inst_33705,state_val_33757,c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33709__$1 = cljs.core.group_by.call(null,inst_33708,inst_33675);
var inst_33711 = (inst_33709__$1 == null);
var inst_33712 = cljs.core.not.call(null,inst_33711);
var state_33756__$1 = (function (){var statearr_33794 = state_33756;
(statearr_33794[(16)] = inst_33709__$1);

(statearr_33794[(28)] = inst_33705);

return statearr_33794;
})();
if(inst_33712){
var statearr_33795_33868 = state_33756__$1;
(statearr_33795_33868[(1)] = (32));

} else {
var statearr_33796_33869 = state_33756__$1;
(statearr_33796_33869[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (44))){
var inst_33732 = (state_33756[(21)]);
var inst_33745 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33732);
var inst_33746 = cljs.core.pr_str.call(null,inst_33745);
var inst_33747 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33746)].join('');
var inst_33748 = figwheel.client.utils.log.call(null,inst_33747);
var state_33756__$1 = state_33756;
var statearr_33797_33870 = state_33756__$1;
(statearr_33797_33870[(2)] = inst_33748);

(statearr_33797_33870[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (6))){
var inst_33650 = (state_33756[(2)]);
var state_33756__$1 = state_33756;
var statearr_33798_33871 = state_33756__$1;
(statearr_33798_33871[(2)] = inst_33650);

(statearr_33798_33871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (28))){
var inst_33675 = (state_33756[(26)]);
var inst_33702 = (state_33756[(2)]);
var inst_33703 = cljs.core.not_empty.call(null,inst_33675);
var state_33756__$1 = (function (){var statearr_33799 = state_33756;
(statearr_33799[(29)] = inst_33702);

return statearr_33799;
})();
if(cljs.core.truth_(inst_33703)){
var statearr_33800_33872 = state_33756__$1;
(statearr_33800_33872[(1)] = (29));

} else {
var statearr_33801_33873 = state_33756__$1;
(statearr_33801_33873[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (25))){
var inst_33673 = (state_33756[(24)]);
var inst_33689 = (state_33756[(2)]);
var inst_33690 = cljs.core.not_empty.call(null,inst_33673);
var state_33756__$1 = (function (){var statearr_33802 = state_33756;
(statearr_33802[(30)] = inst_33689);

return statearr_33802;
})();
if(cljs.core.truth_(inst_33690)){
var statearr_33803_33874 = state_33756__$1;
(statearr_33803_33874[(1)] = (26));

} else {
var statearr_33804_33875 = state_33756__$1;
(statearr_33804_33875[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (34))){
var inst_33725 = (state_33756[(2)]);
var state_33756__$1 = state_33756;
if(cljs.core.truth_(inst_33725)){
var statearr_33805_33876 = state_33756__$1;
(statearr_33805_33876[(1)] = (38));

} else {
var statearr_33806_33877 = state_33756__$1;
(statearr_33806_33877[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (17))){
var state_33756__$1 = state_33756;
var statearr_33807_33878 = state_33756__$1;
(statearr_33807_33878[(2)] = recompile_dependents);

(statearr_33807_33878[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (3))){
var state_33756__$1 = state_33756;
var statearr_33808_33879 = state_33756__$1;
(statearr_33808_33879[(2)] = null);

(statearr_33808_33879[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (12))){
var inst_33646 = (state_33756[(2)]);
var state_33756__$1 = state_33756;
var statearr_33809_33880 = state_33756__$1;
(statearr_33809_33880[(2)] = inst_33646);

(statearr_33809_33880[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (2))){
var inst_33608 = (state_33756[(13)]);
var inst_33615 = cljs.core.seq.call(null,inst_33608);
var inst_33616 = inst_33615;
var inst_33617 = null;
var inst_33618 = (0);
var inst_33619 = (0);
var state_33756__$1 = (function (){var statearr_33810 = state_33756;
(statearr_33810[(7)] = inst_33619);

(statearr_33810[(8)] = inst_33618);

(statearr_33810[(9)] = inst_33617);

(statearr_33810[(10)] = inst_33616);

return statearr_33810;
})();
var statearr_33811_33881 = state_33756__$1;
(statearr_33811_33881[(2)] = null);

(statearr_33811_33881[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (23))){
var inst_33669 = (state_33756[(19)]);
var inst_33677 = (state_33756[(23)]);
var inst_33675 = (state_33756[(26)]);
var inst_33673 = (state_33756[(24)]);
var inst_33672 = (state_33756[(25)]);
var inst_33680 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33682 = (function (){var all_files = inst_33669;
var res_SINGLEQUOTE_ = inst_33672;
var res = inst_33673;
var files_not_loaded = inst_33675;
var dependencies_that_loaded = inst_33677;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33669,inst_33677,inst_33675,inst_33673,inst_33672,inst_33680,state_val_33757,c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33681){
var map__33812 = p__33681;
var map__33812__$1 = ((((!((map__33812 == null)))?((((map__33812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33812):map__33812);
var request_url = cljs.core.get.call(null,map__33812__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33669,inst_33677,inst_33675,inst_33673,inst_33672,inst_33680,state_val_33757,c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33683 = cljs.core.reverse.call(null,inst_33677);
var inst_33684 = cljs.core.map.call(null,inst_33682,inst_33683);
var inst_33685 = cljs.core.pr_str.call(null,inst_33684);
var inst_33686 = figwheel.client.utils.log.call(null,inst_33685);
var state_33756__$1 = (function (){var statearr_33814 = state_33756;
(statearr_33814[(31)] = inst_33680);

return statearr_33814;
})();
var statearr_33815_33882 = state_33756__$1;
(statearr_33815_33882[(2)] = inst_33686);

(statearr_33815_33882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (35))){
var state_33756__$1 = state_33756;
var statearr_33816_33883 = state_33756__$1;
(statearr_33816_33883[(2)] = true);

(statearr_33816_33883[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (19))){
var inst_33659 = (state_33756[(12)]);
var inst_33665 = figwheel.client.file_reloading.expand_files.call(null,inst_33659);
var state_33756__$1 = state_33756;
var statearr_33817_33884 = state_33756__$1;
(statearr_33817_33884[(2)] = inst_33665);

(statearr_33817_33884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (11))){
var state_33756__$1 = state_33756;
var statearr_33818_33885 = state_33756__$1;
(statearr_33818_33885[(2)] = null);

(statearr_33818_33885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (9))){
var inst_33648 = (state_33756[(2)]);
var state_33756__$1 = state_33756;
var statearr_33819_33886 = state_33756__$1;
(statearr_33819_33886[(2)] = inst_33648);

(statearr_33819_33886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (5))){
var inst_33619 = (state_33756[(7)]);
var inst_33618 = (state_33756[(8)]);
var inst_33621 = (inst_33619 < inst_33618);
var inst_33622 = inst_33621;
var state_33756__$1 = state_33756;
if(cljs.core.truth_(inst_33622)){
var statearr_33820_33887 = state_33756__$1;
(statearr_33820_33887[(1)] = (7));

} else {
var statearr_33821_33888 = state_33756__$1;
(statearr_33821_33888[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (14))){
var inst_33629 = (state_33756[(22)]);
var inst_33638 = cljs.core.first.call(null,inst_33629);
var inst_33639 = figwheel.client.file_reloading.eval_body.call(null,inst_33638,opts);
var inst_33640 = cljs.core.next.call(null,inst_33629);
var inst_33616 = inst_33640;
var inst_33617 = null;
var inst_33618 = (0);
var inst_33619 = (0);
var state_33756__$1 = (function (){var statearr_33822 = state_33756;
(statearr_33822[(7)] = inst_33619);

(statearr_33822[(8)] = inst_33618);

(statearr_33822[(9)] = inst_33617);

(statearr_33822[(10)] = inst_33616);

(statearr_33822[(32)] = inst_33639);

return statearr_33822;
})();
var statearr_33823_33889 = state_33756__$1;
(statearr_33823_33889[(2)] = null);

(statearr_33823_33889[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (45))){
var state_33756__$1 = state_33756;
var statearr_33824_33890 = state_33756__$1;
(statearr_33824_33890[(2)] = null);

(statearr_33824_33890[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (26))){
var inst_33669 = (state_33756[(19)]);
var inst_33677 = (state_33756[(23)]);
var inst_33675 = (state_33756[(26)]);
var inst_33673 = (state_33756[(24)]);
var inst_33672 = (state_33756[(25)]);
var inst_33692 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33694 = (function (){var all_files = inst_33669;
var res_SINGLEQUOTE_ = inst_33672;
var res = inst_33673;
var files_not_loaded = inst_33675;
var dependencies_that_loaded = inst_33677;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33669,inst_33677,inst_33675,inst_33673,inst_33672,inst_33692,state_val_33757,c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33693){
var map__33825 = p__33693;
var map__33825__$1 = ((((!((map__33825 == null)))?((((map__33825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33825):map__33825);
var namespace = cljs.core.get.call(null,map__33825__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33825__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33669,inst_33677,inst_33675,inst_33673,inst_33672,inst_33692,state_val_33757,c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33695 = cljs.core.map.call(null,inst_33694,inst_33673);
var inst_33696 = cljs.core.pr_str.call(null,inst_33695);
var inst_33697 = figwheel.client.utils.log.call(null,inst_33696);
var inst_33698 = (function (){var all_files = inst_33669;
var res_SINGLEQUOTE_ = inst_33672;
var res = inst_33673;
var files_not_loaded = inst_33675;
var dependencies_that_loaded = inst_33677;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33669,inst_33677,inst_33675,inst_33673,inst_33672,inst_33692,inst_33694,inst_33695,inst_33696,inst_33697,state_val_33757,c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33669,inst_33677,inst_33675,inst_33673,inst_33672,inst_33692,inst_33694,inst_33695,inst_33696,inst_33697,state_val_33757,c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33699 = setTimeout(inst_33698,(10));
var state_33756__$1 = (function (){var statearr_33827 = state_33756;
(statearr_33827[(33)] = inst_33692);

(statearr_33827[(34)] = inst_33697);

return statearr_33827;
})();
var statearr_33828_33891 = state_33756__$1;
(statearr_33828_33891[(2)] = inst_33699);

(statearr_33828_33891[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (16))){
var state_33756__$1 = state_33756;
var statearr_33829_33892 = state_33756__$1;
(statearr_33829_33892[(2)] = reload_dependents);

(statearr_33829_33892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (38))){
var inst_33709 = (state_33756[(16)]);
var inst_33727 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33709);
var state_33756__$1 = state_33756;
var statearr_33830_33893 = state_33756__$1;
(statearr_33830_33893[(2)] = inst_33727);

(statearr_33830_33893[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (30))){
var state_33756__$1 = state_33756;
var statearr_33831_33894 = state_33756__$1;
(statearr_33831_33894[(2)] = null);

(statearr_33831_33894[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (10))){
var inst_33629 = (state_33756[(22)]);
var inst_33631 = cljs.core.chunked_seq_QMARK_.call(null,inst_33629);
var state_33756__$1 = state_33756;
if(inst_33631){
var statearr_33832_33895 = state_33756__$1;
(statearr_33832_33895[(1)] = (13));

} else {
var statearr_33833_33896 = state_33756__$1;
(statearr_33833_33896[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (18))){
var inst_33663 = (state_33756[(2)]);
var state_33756__$1 = state_33756;
if(cljs.core.truth_(inst_33663)){
var statearr_33834_33897 = state_33756__$1;
(statearr_33834_33897[(1)] = (19));

} else {
var statearr_33835_33898 = state_33756__$1;
(statearr_33835_33898[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (42))){
var state_33756__$1 = state_33756;
var statearr_33836_33899 = state_33756__$1;
(statearr_33836_33899[(2)] = null);

(statearr_33836_33899[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (37))){
var inst_33722 = (state_33756[(2)]);
var state_33756__$1 = state_33756;
var statearr_33837_33900 = state_33756__$1;
(statearr_33837_33900[(2)] = inst_33722);

(statearr_33837_33900[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33757 === (8))){
var inst_33629 = (state_33756[(22)]);
var inst_33616 = (state_33756[(10)]);
var inst_33629__$1 = cljs.core.seq.call(null,inst_33616);
var state_33756__$1 = (function (){var statearr_33838 = state_33756;
(statearr_33838[(22)] = inst_33629__$1);

return statearr_33838;
})();
if(inst_33629__$1){
var statearr_33839_33901 = state_33756__$1;
(statearr_33839_33901[(1)] = (10));

} else {
var statearr_33840_33902 = state_33756__$1;
(statearr_33840_33902[(1)] = (11));

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
});})(c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29657__auto__,c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto____0 = (function (){
var statearr_33841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33841[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto__);

(statearr_33841[(1)] = (1));

return statearr_33841;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto____1 = (function (state_33756){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_33756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e33842){if((e33842 instanceof Object)){
var ex__29661__auto__ = e33842;
var statearr_33843_33903 = state_33756;
(statearr_33843_33903[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33904 = state_33756;
state_33756 = G__33904;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto__ = function(state_33756){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto____1.call(this,state_33756);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29747__auto__ = (function (){var statearr_33844 = f__29746__auto__.call(null);
(statearr_33844[(6)] = c__29745__auto__);

return statearr_33844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto__,map__33601,map__33601__$1,opts,before_jsload,on_jsload,reload_dependents,map__33602,map__33602__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29745__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33907,link){
var map__33908 = p__33907;
var map__33908__$1 = ((((!((map__33908 == null)))?((((map__33908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33908):map__33908);
var file = cljs.core.get.call(null,map__33908__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__33908,map__33908__$1,file){
return (function (p1__33905_SHARP_,p2__33906_SHARP_){
if(cljs.core._EQ_.call(null,p1__33905_SHARP_,p2__33906_SHARP_)){
return p1__33905_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__33908,map__33908__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33911){
var map__33912 = p__33911;
var map__33912__$1 = ((((!((map__33912 == null)))?((((map__33912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33912):map__33912);
var match_length = cljs.core.get.call(null,map__33912__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33912__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33910_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33910_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33914_SHARP_,p2__33915_SHARP_){
return cljs.core.assoc.call(null,p1__33914_SHARP_,cljs.core.get.call(null,p2__33915_SHARP_,key),p2__33915_SHARP_);
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
var loaded_f_datas_33916 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33916);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33916);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33917,p__33918){
var map__33919 = p__33917;
var map__33919__$1 = ((((!((map__33919 == null)))?((((map__33919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33919):map__33919);
var on_cssload = cljs.core.get.call(null,map__33919__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33920 = p__33918;
var map__33920__$1 = ((((!((map__33920 == null)))?((((map__33920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33920):map__33920);
var files_msg = map__33920__$1;
var files = cljs.core.get.call(null,map__33920__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1514289174688
