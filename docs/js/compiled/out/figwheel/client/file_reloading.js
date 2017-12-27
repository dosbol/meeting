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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33298_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33298_SHARP_));
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
var seq__33299 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33300 = null;
var count__33301 = (0);
var i__33302 = (0);
while(true){
if((i__33302 < count__33301)){
var n = cljs.core._nth.call(null,chunk__33300,i__33302);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33303 = seq__33299;
var G__33304 = chunk__33300;
var G__33305 = count__33301;
var G__33306 = (i__33302 + (1));
seq__33299 = G__33303;
chunk__33300 = G__33304;
count__33301 = G__33305;
i__33302 = G__33306;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33299);
if(temp__4657__auto__){
var seq__33299__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33299__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__33299__$1);
var G__33307 = cljs.core.chunk_rest.call(null,seq__33299__$1);
var G__33308 = c__28034__auto__;
var G__33309 = cljs.core.count.call(null,c__28034__auto__);
var G__33310 = (0);
seq__33299 = G__33307;
chunk__33300 = G__33308;
count__33301 = G__33309;
i__33302 = G__33310;
continue;
} else {
var n = cljs.core.first.call(null,seq__33299__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33311 = cljs.core.next.call(null,seq__33299__$1);
var G__33312 = null;
var G__33313 = (0);
var G__33314 = (0);
seq__33299 = G__33311;
chunk__33300 = G__33312;
count__33301 = G__33313;
i__33302 = G__33314;
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

var seq__33324_33332 = cljs.core.seq.call(null,deps);
var chunk__33325_33333 = null;
var count__33326_33334 = (0);
var i__33327_33335 = (0);
while(true){
if((i__33327_33335 < count__33326_33334)){
var dep_33336 = cljs.core._nth.call(null,chunk__33325_33333,i__33327_33335);
topo_sort_helper_STAR_.call(null,dep_33336,(depth + (1)),state);

var G__33337 = seq__33324_33332;
var G__33338 = chunk__33325_33333;
var G__33339 = count__33326_33334;
var G__33340 = (i__33327_33335 + (1));
seq__33324_33332 = G__33337;
chunk__33325_33333 = G__33338;
count__33326_33334 = G__33339;
i__33327_33335 = G__33340;
continue;
} else {
var temp__4657__auto___33341 = cljs.core.seq.call(null,seq__33324_33332);
if(temp__4657__auto___33341){
var seq__33324_33342__$1 = temp__4657__auto___33341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33324_33342__$1)){
var c__28034__auto___33343 = cljs.core.chunk_first.call(null,seq__33324_33342__$1);
var G__33344 = cljs.core.chunk_rest.call(null,seq__33324_33342__$1);
var G__33345 = c__28034__auto___33343;
var G__33346 = cljs.core.count.call(null,c__28034__auto___33343);
var G__33347 = (0);
seq__33324_33332 = G__33344;
chunk__33325_33333 = G__33345;
count__33326_33334 = G__33346;
i__33327_33335 = G__33347;
continue;
} else {
var dep_33348 = cljs.core.first.call(null,seq__33324_33342__$1);
topo_sort_helper_STAR_.call(null,dep_33348,(depth + (1)),state);

var G__33349 = cljs.core.next.call(null,seq__33324_33342__$1);
var G__33350 = null;
var G__33351 = (0);
var G__33352 = (0);
seq__33324_33332 = G__33349;
chunk__33325_33333 = G__33350;
count__33326_33334 = G__33351;
i__33327_33335 = G__33352;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33328){
var vec__33329 = p__33328;
var seq__33330 = cljs.core.seq.call(null,vec__33329);
var first__33331 = cljs.core.first.call(null,seq__33330);
var seq__33330__$1 = cljs.core.next.call(null,seq__33330);
var x = first__33331;
var xs = seq__33330__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33329,seq__33330,first__33331,seq__33330__$1,x,xs,get_deps__$1){
return (function (p1__33315_SHARP_){
return clojure.set.difference.call(null,p1__33315_SHARP_,x);
});})(vec__33329,seq__33330,first__33331,seq__33330__$1,x,xs,get_deps__$1))
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
var seq__33353 = cljs.core.seq.call(null,provides);
var chunk__33354 = null;
var count__33355 = (0);
var i__33356 = (0);
while(true){
if((i__33356 < count__33355)){
var prov = cljs.core._nth.call(null,chunk__33354,i__33356);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33357_33365 = cljs.core.seq.call(null,requires);
var chunk__33358_33366 = null;
var count__33359_33367 = (0);
var i__33360_33368 = (0);
while(true){
if((i__33360_33368 < count__33359_33367)){
var req_33369 = cljs.core._nth.call(null,chunk__33358_33366,i__33360_33368);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33369,prov);

var G__33370 = seq__33357_33365;
var G__33371 = chunk__33358_33366;
var G__33372 = count__33359_33367;
var G__33373 = (i__33360_33368 + (1));
seq__33357_33365 = G__33370;
chunk__33358_33366 = G__33371;
count__33359_33367 = G__33372;
i__33360_33368 = G__33373;
continue;
} else {
var temp__4657__auto___33374 = cljs.core.seq.call(null,seq__33357_33365);
if(temp__4657__auto___33374){
var seq__33357_33375__$1 = temp__4657__auto___33374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33357_33375__$1)){
var c__28034__auto___33376 = cljs.core.chunk_first.call(null,seq__33357_33375__$1);
var G__33377 = cljs.core.chunk_rest.call(null,seq__33357_33375__$1);
var G__33378 = c__28034__auto___33376;
var G__33379 = cljs.core.count.call(null,c__28034__auto___33376);
var G__33380 = (0);
seq__33357_33365 = G__33377;
chunk__33358_33366 = G__33378;
count__33359_33367 = G__33379;
i__33360_33368 = G__33380;
continue;
} else {
var req_33381 = cljs.core.first.call(null,seq__33357_33375__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33381,prov);

var G__33382 = cljs.core.next.call(null,seq__33357_33375__$1);
var G__33383 = null;
var G__33384 = (0);
var G__33385 = (0);
seq__33357_33365 = G__33382;
chunk__33358_33366 = G__33383;
count__33359_33367 = G__33384;
i__33360_33368 = G__33385;
continue;
}
} else {
}
}
break;
}

var G__33386 = seq__33353;
var G__33387 = chunk__33354;
var G__33388 = count__33355;
var G__33389 = (i__33356 + (1));
seq__33353 = G__33386;
chunk__33354 = G__33387;
count__33355 = G__33388;
i__33356 = G__33389;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33353);
if(temp__4657__auto__){
var seq__33353__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33353__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__33353__$1);
var G__33390 = cljs.core.chunk_rest.call(null,seq__33353__$1);
var G__33391 = c__28034__auto__;
var G__33392 = cljs.core.count.call(null,c__28034__auto__);
var G__33393 = (0);
seq__33353 = G__33390;
chunk__33354 = G__33391;
count__33355 = G__33392;
i__33356 = G__33393;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33353__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33361_33394 = cljs.core.seq.call(null,requires);
var chunk__33362_33395 = null;
var count__33363_33396 = (0);
var i__33364_33397 = (0);
while(true){
if((i__33364_33397 < count__33363_33396)){
var req_33398 = cljs.core._nth.call(null,chunk__33362_33395,i__33364_33397);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33398,prov);

var G__33399 = seq__33361_33394;
var G__33400 = chunk__33362_33395;
var G__33401 = count__33363_33396;
var G__33402 = (i__33364_33397 + (1));
seq__33361_33394 = G__33399;
chunk__33362_33395 = G__33400;
count__33363_33396 = G__33401;
i__33364_33397 = G__33402;
continue;
} else {
var temp__4657__auto___33403__$1 = cljs.core.seq.call(null,seq__33361_33394);
if(temp__4657__auto___33403__$1){
var seq__33361_33404__$1 = temp__4657__auto___33403__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33361_33404__$1)){
var c__28034__auto___33405 = cljs.core.chunk_first.call(null,seq__33361_33404__$1);
var G__33406 = cljs.core.chunk_rest.call(null,seq__33361_33404__$1);
var G__33407 = c__28034__auto___33405;
var G__33408 = cljs.core.count.call(null,c__28034__auto___33405);
var G__33409 = (0);
seq__33361_33394 = G__33406;
chunk__33362_33395 = G__33407;
count__33363_33396 = G__33408;
i__33364_33397 = G__33409;
continue;
} else {
var req_33410 = cljs.core.first.call(null,seq__33361_33404__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33410,prov);

var G__33411 = cljs.core.next.call(null,seq__33361_33404__$1);
var G__33412 = null;
var G__33413 = (0);
var G__33414 = (0);
seq__33361_33394 = G__33411;
chunk__33362_33395 = G__33412;
count__33363_33396 = G__33413;
i__33364_33397 = G__33414;
continue;
}
} else {
}
}
break;
}

var G__33415 = cljs.core.next.call(null,seq__33353__$1);
var G__33416 = null;
var G__33417 = (0);
var G__33418 = (0);
seq__33353 = G__33415;
chunk__33354 = G__33416;
count__33355 = G__33417;
i__33356 = G__33418;
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
var seq__33419_33423 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33420_33424 = null;
var count__33421_33425 = (0);
var i__33422_33426 = (0);
while(true){
if((i__33422_33426 < count__33421_33425)){
var ns_33427 = cljs.core._nth.call(null,chunk__33420_33424,i__33422_33426);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33427);

var G__33428 = seq__33419_33423;
var G__33429 = chunk__33420_33424;
var G__33430 = count__33421_33425;
var G__33431 = (i__33422_33426 + (1));
seq__33419_33423 = G__33428;
chunk__33420_33424 = G__33429;
count__33421_33425 = G__33430;
i__33422_33426 = G__33431;
continue;
} else {
var temp__4657__auto___33432 = cljs.core.seq.call(null,seq__33419_33423);
if(temp__4657__auto___33432){
var seq__33419_33433__$1 = temp__4657__auto___33432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33419_33433__$1)){
var c__28034__auto___33434 = cljs.core.chunk_first.call(null,seq__33419_33433__$1);
var G__33435 = cljs.core.chunk_rest.call(null,seq__33419_33433__$1);
var G__33436 = c__28034__auto___33434;
var G__33437 = cljs.core.count.call(null,c__28034__auto___33434);
var G__33438 = (0);
seq__33419_33423 = G__33435;
chunk__33420_33424 = G__33436;
count__33421_33425 = G__33437;
i__33422_33426 = G__33438;
continue;
} else {
var ns_33439 = cljs.core.first.call(null,seq__33419_33433__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33439);

var G__33440 = cljs.core.next.call(null,seq__33419_33433__$1);
var G__33441 = null;
var G__33442 = (0);
var G__33443 = (0);
seq__33419_33423 = G__33440;
chunk__33420_33424 = G__33441;
count__33421_33425 = G__33442;
i__33422_33426 = G__33443;
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
var G__33444__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33445__i = 0, G__33445__a = new Array(arguments.length -  0);
while (G__33445__i < G__33445__a.length) {G__33445__a[G__33445__i] = arguments[G__33445__i + 0]; ++G__33445__i;}
  args = new cljs.core.IndexedSeq(G__33445__a,0,null);
} 
return G__33444__delegate.call(this,args);};
G__33444.cljs$lang$maxFixedArity = 0;
G__33444.cljs$lang$applyTo = (function (arglist__33446){
var args = cljs.core.seq(arglist__33446);
return G__33444__delegate(args);
});
G__33444.cljs$core$IFn$_invoke$arity$variadic = G__33444__delegate;
return G__33444;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__33447_SHARP_,p2__33448_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33447_SHARP_)].join('')),p2__33448_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__33449_SHARP_,p2__33450_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33449_SHARP_)].join(''),p2__33450_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__33451 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__33451.addCallback(((function (G__33451){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__33451))
);

G__33451.addErrback(((function (G__33451){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__33451))
);

return G__33451;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33452 = cljs.core._EQ_;
var expr__33453 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33452.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33453))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33452,expr__33453){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33452,expr__33453))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33452,expr__33453){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33455){if((e33455 instanceof Error)){
var e = e33455;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33455;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33452,expr__33453))
} else {
if(cljs.core.truth_(pred__33452.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33453))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33452.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__33453))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33452.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33453))){
return ((function (pred__33452,expr__33453){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33456){if((e33456 instanceof Error)){
var e = e33456;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33456;

}
}})());
});
;})(pred__33452,expr__33453))
} else {
return ((function (pred__33452,expr__33453){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33452,expr__33453))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33457,callback){
var map__33458 = p__33457;
var map__33458__$1 = ((((!((map__33458 == null)))?((((map__33458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33458):map__33458);
var file_msg = map__33458__$1;
var request_url = cljs.core.get.call(null,map__33458__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33458,map__33458__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33458,map__33458__$1,file_msg,request_url))
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
return (function (state_33482){
var state_val_33483 = (state_33482[(1)]);
if((state_val_33483 === (7))){
var inst_33478 = (state_33482[(2)]);
var state_33482__$1 = state_33482;
var statearr_33484_33501 = state_33482__$1;
(statearr_33484_33501[(2)] = inst_33478);

(statearr_33484_33501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33483 === (1))){
var state_33482__$1 = state_33482;
var statearr_33485_33502 = state_33482__$1;
(statearr_33485_33502[(2)] = null);

(statearr_33485_33502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33483 === (4))){
var inst_33462 = (state_33482[(7)]);
var inst_33462__$1 = (state_33482[(2)]);
var state_33482__$1 = (function (){var statearr_33486 = state_33482;
(statearr_33486[(7)] = inst_33462__$1);

return statearr_33486;
})();
if(cljs.core.truth_(inst_33462__$1)){
var statearr_33487_33503 = state_33482__$1;
(statearr_33487_33503[(1)] = (5));

} else {
var statearr_33488_33504 = state_33482__$1;
(statearr_33488_33504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33483 === (6))){
var state_33482__$1 = state_33482;
var statearr_33489_33505 = state_33482__$1;
(statearr_33489_33505[(2)] = null);

(statearr_33489_33505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33483 === (3))){
var inst_33480 = (state_33482[(2)]);
var state_33482__$1 = state_33482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33482__$1,inst_33480);
} else {
if((state_val_33483 === (2))){
var state_33482__$1 = state_33482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33482__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33483 === (11))){
var inst_33474 = (state_33482[(2)]);
var state_33482__$1 = (function (){var statearr_33490 = state_33482;
(statearr_33490[(8)] = inst_33474);

return statearr_33490;
})();
var statearr_33491_33506 = state_33482__$1;
(statearr_33491_33506[(2)] = null);

(statearr_33491_33506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33483 === (9))){
var inst_33468 = (state_33482[(9)]);
var inst_33466 = (state_33482[(10)]);
var inst_33470 = inst_33468.call(null,inst_33466);
var state_33482__$1 = state_33482;
var statearr_33492_33507 = state_33482__$1;
(statearr_33492_33507[(2)] = inst_33470);

(statearr_33492_33507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33483 === (5))){
var inst_33462 = (state_33482[(7)]);
var inst_33464 = figwheel.client.file_reloading.blocking_load.call(null,inst_33462);
var state_33482__$1 = state_33482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33482__$1,(8),inst_33464);
} else {
if((state_val_33483 === (10))){
var inst_33466 = (state_33482[(10)]);
var inst_33472 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33466);
var state_33482__$1 = state_33482;
var statearr_33493_33508 = state_33482__$1;
(statearr_33493_33508[(2)] = inst_33472);

(statearr_33493_33508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33483 === (8))){
var inst_33468 = (state_33482[(9)]);
var inst_33462 = (state_33482[(7)]);
var inst_33466 = (state_33482[(2)]);
var inst_33467 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33468__$1 = cljs.core.get.call(null,inst_33467,inst_33462);
var state_33482__$1 = (function (){var statearr_33494 = state_33482;
(statearr_33494[(9)] = inst_33468__$1);

(statearr_33494[(10)] = inst_33466);

return statearr_33494;
})();
if(cljs.core.truth_(inst_33468__$1)){
var statearr_33495_33509 = state_33482__$1;
(statearr_33495_33509[(1)] = (9));

} else {
var statearr_33496_33510 = state_33482__$1;
(statearr_33496_33510[(1)] = (10));

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
var statearr_33497 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33497[(0)] = figwheel$client$file_reloading$state_machine__29658__auto__);

(statearr_33497[(1)] = (1));

return statearr_33497;
});
var figwheel$client$file_reloading$state_machine__29658__auto____1 = (function (state_33482){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_33482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e33498){if((e33498 instanceof Object)){
var ex__29661__auto__ = e33498;
var statearr_33499_33511 = state_33482;
(statearr_33499_33511[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33512 = state_33482;
state_33482 = G__33512;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29658__auto__ = function(state_33482){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29658__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29658__auto____1.call(this,state_33482);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29658__auto____0;
figwheel$client$file_reloading$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29658__auto____1;
return figwheel$client$file_reloading$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto__))
})();
var state__29747__auto__ = (function (){var statearr_33500 = f__29746__auto__.call(null);
(statearr_33500[(6)] = c__29745__auto__);

return statearr_33500;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33513,callback){
var map__33514 = p__33513;
var map__33514__$1 = ((((!((map__33514 == null)))?((((map__33514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33514):map__33514);
var file_msg = map__33514__$1;
var namespace = cljs.core.get.call(null,map__33514__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33514,map__33514__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33514,map__33514__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33516){
var map__33517 = p__33516;
var map__33517__$1 = ((((!((map__33517 == null)))?((((map__33517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33517):map__33517);
var file_msg = map__33517__$1;
var namespace = cljs.core.get.call(null,map__33517__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33519){
var map__33520 = p__33519;
var map__33520__$1 = ((((!((map__33520 == null)))?((((map__33520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33520):map__33520);
var file_msg = map__33520__$1;
var namespace = cljs.core.get.call(null,map__33520__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33522,callback){
var map__33523 = p__33522;
var map__33523__$1 = ((((!((map__33523 == null)))?((((map__33523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33523):map__33523);
var file_msg = map__33523__$1;
var request_url = cljs.core.get.call(null,map__33523__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33523__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29745__auto___33573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___33573,out){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___33573,out){
return (function (state_33558){
var state_val_33559 = (state_33558[(1)]);
if((state_val_33559 === (1))){
var inst_33532 = cljs.core.seq.call(null,files);
var inst_33533 = cljs.core.first.call(null,inst_33532);
var inst_33534 = cljs.core.next.call(null,inst_33532);
var inst_33535 = files;
var state_33558__$1 = (function (){var statearr_33560 = state_33558;
(statearr_33560[(7)] = inst_33535);

(statearr_33560[(8)] = inst_33533);

(statearr_33560[(9)] = inst_33534);

return statearr_33560;
})();
var statearr_33561_33574 = state_33558__$1;
(statearr_33561_33574[(2)] = null);

(statearr_33561_33574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (2))){
var inst_33535 = (state_33558[(7)]);
var inst_33541 = (state_33558[(10)]);
var inst_33540 = cljs.core.seq.call(null,inst_33535);
var inst_33541__$1 = cljs.core.first.call(null,inst_33540);
var inst_33542 = cljs.core.next.call(null,inst_33540);
var inst_33543 = (inst_33541__$1 == null);
var inst_33544 = cljs.core.not.call(null,inst_33543);
var state_33558__$1 = (function (){var statearr_33562 = state_33558;
(statearr_33562[(10)] = inst_33541__$1);

(statearr_33562[(11)] = inst_33542);

return statearr_33562;
})();
if(inst_33544){
var statearr_33563_33575 = state_33558__$1;
(statearr_33563_33575[(1)] = (4));

} else {
var statearr_33564_33576 = state_33558__$1;
(statearr_33564_33576[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (3))){
var inst_33556 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33558__$1,inst_33556);
} else {
if((state_val_33559 === (4))){
var inst_33541 = (state_33558[(10)]);
var inst_33546 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33541);
var state_33558__$1 = state_33558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33558__$1,(7),inst_33546);
} else {
if((state_val_33559 === (5))){
var inst_33552 = cljs.core.async.close_BANG_.call(null,out);
var state_33558__$1 = state_33558;
var statearr_33565_33577 = state_33558__$1;
(statearr_33565_33577[(2)] = inst_33552);

(statearr_33565_33577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (6))){
var inst_33554 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33566_33578 = state_33558__$1;
(statearr_33566_33578[(2)] = inst_33554);

(statearr_33566_33578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (7))){
var inst_33542 = (state_33558[(11)]);
var inst_33548 = (state_33558[(2)]);
var inst_33549 = cljs.core.async.put_BANG_.call(null,out,inst_33548);
var inst_33535 = inst_33542;
var state_33558__$1 = (function (){var statearr_33567 = state_33558;
(statearr_33567[(12)] = inst_33549);

(statearr_33567[(7)] = inst_33535);

return statearr_33567;
})();
var statearr_33568_33579 = state_33558__$1;
(statearr_33568_33579[(2)] = null);

(statearr_33568_33579[(1)] = (2));


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
});})(c__29745__auto___33573,out))
;
return ((function (switch__29657__auto__,c__29745__auto___33573,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto____0 = (function (){
var statearr_33569 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33569[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto__);

(statearr_33569[(1)] = (1));

return statearr_33569;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto____1 = (function (state_33558){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_33558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e33570){if((e33570 instanceof Object)){
var ex__29661__auto__ = e33570;
var statearr_33571_33580 = state_33558;
(statearr_33571_33580[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33581 = state_33558;
state_33558 = G__33581;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto__ = function(state_33558){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto____1.call(this,state_33558);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___33573,out))
})();
var state__29747__auto__ = (function (){var statearr_33572 = f__29746__auto__.call(null);
(statearr_33572[(6)] = c__29745__auto___33573);

return statearr_33572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___33573,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33582,opts){
var map__33583 = p__33582;
var map__33583__$1 = ((((!((map__33583 == null)))?((((map__33583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33583):map__33583);
var eval_body = cljs.core.get.call(null,map__33583__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33583__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e33585){var e = e33585;
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
return (function (p1__33586_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33586_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__33587){
var vec__33588 = p__33587;
var k = cljs.core.nth.call(null,vec__33588,(0),null);
var v = cljs.core.nth.call(null,vec__33588,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33591){
var vec__33592 = p__33591;
var k = cljs.core.nth.call(null,vec__33592,(0),null);
var v = cljs.core.nth.call(null,vec__33592,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33598,p__33599){
var map__33600 = p__33598;
var map__33600__$1 = ((((!((map__33600 == null)))?((((map__33600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33600):map__33600);
var opts = map__33600__$1;
var before_jsload = cljs.core.get.call(null,map__33600__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33600__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33600__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33601 = p__33599;
var map__33601__$1 = ((((!((map__33601 == null)))?((((map__33601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33601):map__33601);
var msg = map__33601__$1;
var files = cljs.core.get.call(null,map__33601__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33601__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33601__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33755){
var state_val_33756 = (state_33755[(1)]);
if((state_val_33756 === (7))){
var inst_33615 = (state_33755[(7)]);
var inst_33618 = (state_33755[(8)]);
var inst_33617 = (state_33755[(9)]);
var inst_33616 = (state_33755[(10)]);
var inst_33623 = cljs.core._nth.call(null,inst_33616,inst_33618);
var inst_33624 = figwheel.client.file_reloading.eval_body.call(null,inst_33623,opts);
var inst_33625 = (inst_33618 + (1));
var tmp33757 = inst_33615;
var tmp33758 = inst_33617;
var tmp33759 = inst_33616;
var inst_33615__$1 = tmp33757;
var inst_33616__$1 = tmp33759;
var inst_33617__$1 = tmp33758;
var inst_33618__$1 = inst_33625;
var state_33755__$1 = (function (){var statearr_33760 = state_33755;
(statearr_33760[(7)] = inst_33615__$1);

(statearr_33760[(11)] = inst_33624);

(statearr_33760[(8)] = inst_33618__$1);

(statearr_33760[(9)] = inst_33617__$1);

(statearr_33760[(10)] = inst_33616__$1);

return statearr_33760;
})();
var statearr_33761_33844 = state_33755__$1;
(statearr_33761_33844[(2)] = null);

(statearr_33761_33844[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (20))){
var inst_33658 = (state_33755[(12)]);
var inst_33666 = figwheel.client.file_reloading.sort_files.call(null,inst_33658);
var state_33755__$1 = state_33755;
var statearr_33762_33845 = state_33755__$1;
(statearr_33762_33845[(2)] = inst_33666);

(statearr_33762_33845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (27))){
var state_33755__$1 = state_33755;
var statearr_33763_33846 = state_33755__$1;
(statearr_33763_33846[(2)] = null);

(statearr_33763_33846[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (1))){
var inst_33607 = (state_33755[(13)]);
var inst_33604 = before_jsload.call(null,files);
var inst_33605 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33606 = (function (){return ((function (inst_33607,inst_33604,inst_33605,state_val_33756,c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33595_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33595_SHARP_);
});
;})(inst_33607,inst_33604,inst_33605,state_val_33756,c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33607__$1 = cljs.core.filter.call(null,inst_33606,files);
var inst_33608 = cljs.core.not_empty.call(null,inst_33607__$1);
var state_33755__$1 = (function (){var statearr_33764 = state_33755;
(statearr_33764[(14)] = inst_33605);

(statearr_33764[(15)] = inst_33604);

(statearr_33764[(13)] = inst_33607__$1);

return statearr_33764;
})();
if(cljs.core.truth_(inst_33608)){
var statearr_33765_33847 = state_33755__$1;
(statearr_33765_33847[(1)] = (2));

} else {
var statearr_33766_33848 = state_33755__$1;
(statearr_33766_33848[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (24))){
var state_33755__$1 = state_33755;
var statearr_33767_33849 = state_33755__$1;
(statearr_33767_33849[(2)] = null);

(statearr_33767_33849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (39))){
var inst_33708 = (state_33755[(16)]);
var state_33755__$1 = state_33755;
var statearr_33768_33850 = state_33755__$1;
(statearr_33768_33850[(2)] = inst_33708);

(statearr_33768_33850[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (46))){
var inst_33750 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33769_33851 = state_33755__$1;
(statearr_33769_33851[(2)] = inst_33750);

(statearr_33769_33851[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (4))){
var inst_33652 = (state_33755[(2)]);
var inst_33653 = cljs.core.List.EMPTY;
var inst_33654 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33653);
var inst_33655 = (function (){return ((function (inst_33652,inst_33653,inst_33654,state_val_33756,c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33596_SHARP_){
var and__27183__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33596_SHARP_);
if(cljs.core.truth_(and__27183__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33596_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33596_SHARP_)));
} else {
return and__27183__auto__;
}
});
;})(inst_33652,inst_33653,inst_33654,state_val_33756,c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33656 = cljs.core.filter.call(null,inst_33655,files);
var inst_33657 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33658 = cljs.core.concat.call(null,inst_33656,inst_33657);
var state_33755__$1 = (function (){var statearr_33770 = state_33755;
(statearr_33770[(12)] = inst_33658);

(statearr_33770[(17)] = inst_33652);

(statearr_33770[(18)] = inst_33654);

return statearr_33770;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33771_33852 = state_33755__$1;
(statearr_33771_33852[(1)] = (16));

} else {
var statearr_33772_33853 = state_33755__$1;
(statearr_33772_33853[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (15))){
var inst_33642 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33773_33854 = state_33755__$1;
(statearr_33773_33854[(2)] = inst_33642);

(statearr_33773_33854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (21))){
var inst_33668 = (state_33755[(19)]);
var inst_33668__$1 = (state_33755[(2)]);
var inst_33669 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33668__$1);
var state_33755__$1 = (function (){var statearr_33774 = state_33755;
(statearr_33774[(19)] = inst_33668__$1);

return statearr_33774;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33755__$1,(22),inst_33669);
} else {
if((state_val_33756 === (31))){
var inst_33753 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33755__$1,inst_33753);
} else {
if((state_val_33756 === (32))){
var inst_33708 = (state_33755[(16)]);
var inst_33713 = inst_33708.cljs$lang$protocol_mask$partition0$;
var inst_33714 = (inst_33713 & (64));
var inst_33715 = inst_33708.cljs$core$ISeq$;
var inst_33716 = (cljs.core.PROTOCOL_SENTINEL === inst_33715);
var inst_33717 = (inst_33714) || (inst_33716);
var state_33755__$1 = state_33755;
if(cljs.core.truth_(inst_33717)){
var statearr_33775_33855 = state_33755__$1;
(statearr_33775_33855[(1)] = (35));

} else {
var statearr_33776_33856 = state_33755__$1;
(statearr_33776_33856[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (40))){
var inst_33730 = (state_33755[(20)]);
var inst_33729 = (state_33755[(2)]);
var inst_33730__$1 = cljs.core.get.call(null,inst_33729,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33731 = cljs.core.get.call(null,inst_33729,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33732 = cljs.core.not_empty.call(null,inst_33730__$1);
var state_33755__$1 = (function (){var statearr_33777 = state_33755;
(statearr_33777[(20)] = inst_33730__$1);

(statearr_33777[(21)] = inst_33731);

return statearr_33777;
})();
if(cljs.core.truth_(inst_33732)){
var statearr_33778_33857 = state_33755__$1;
(statearr_33778_33857[(1)] = (41));

} else {
var statearr_33779_33858 = state_33755__$1;
(statearr_33779_33858[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (33))){
var state_33755__$1 = state_33755;
var statearr_33780_33859 = state_33755__$1;
(statearr_33780_33859[(2)] = false);

(statearr_33780_33859[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (13))){
var inst_33628 = (state_33755[(22)]);
var inst_33632 = cljs.core.chunk_first.call(null,inst_33628);
var inst_33633 = cljs.core.chunk_rest.call(null,inst_33628);
var inst_33634 = cljs.core.count.call(null,inst_33632);
var inst_33615 = inst_33633;
var inst_33616 = inst_33632;
var inst_33617 = inst_33634;
var inst_33618 = (0);
var state_33755__$1 = (function (){var statearr_33781 = state_33755;
(statearr_33781[(7)] = inst_33615);

(statearr_33781[(8)] = inst_33618);

(statearr_33781[(9)] = inst_33617);

(statearr_33781[(10)] = inst_33616);

return statearr_33781;
})();
var statearr_33782_33860 = state_33755__$1;
(statearr_33782_33860[(2)] = null);

(statearr_33782_33860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (22))){
var inst_33676 = (state_33755[(23)]);
var inst_33671 = (state_33755[(24)]);
var inst_33668 = (state_33755[(19)]);
var inst_33672 = (state_33755[(25)]);
var inst_33671__$1 = (state_33755[(2)]);
var inst_33672__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33671__$1);
var inst_33673 = (function (){var all_files = inst_33668;
var res_SINGLEQUOTE_ = inst_33671__$1;
var res = inst_33672__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33676,inst_33671,inst_33668,inst_33672,inst_33671__$1,inst_33672__$1,state_val_33756,c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33597_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33597_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33676,inst_33671,inst_33668,inst_33672,inst_33671__$1,inst_33672__$1,state_val_33756,c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33674 = cljs.core.filter.call(null,inst_33673,inst_33671__$1);
var inst_33675 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33676__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33675);
var inst_33677 = cljs.core.not_empty.call(null,inst_33676__$1);
var state_33755__$1 = (function (){var statearr_33783 = state_33755;
(statearr_33783[(23)] = inst_33676__$1);

(statearr_33783[(26)] = inst_33674);

(statearr_33783[(24)] = inst_33671__$1);

(statearr_33783[(25)] = inst_33672__$1);

return statearr_33783;
})();
if(cljs.core.truth_(inst_33677)){
var statearr_33784_33861 = state_33755__$1;
(statearr_33784_33861[(1)] = (23));

} else {
var statearr_33785_33862 = state_33755__$1;
(statearr_33785_33862[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (36))){
var state_33755__$1 = state_33755;
var statearr_33786_33863 = state_33755__$1;
(statearr_33786_33863[(2)] = false);

(statearr_33786_33863[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (41))){
var inst_33730 = (state_33755[(20)]);
var inst_33734 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33735 = cljs.core.map.call(null,inst_33734,inst_33730);
var inst_33736 = cljs.core.pr_str.call(null,inst_33735);
var inst_33737 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33736)].join('');
var inst_33738 = figwheel.client.utils.log.call(null,inst_33737);
var state_33755__$1 = state_33755;
var statearr_33787_33864 = state_33755__$1;
(statearr_33787_33864[(2)] = inst_33738);

(statearr_33787_33864[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (43))){
var inst_33731 = (state_33755[(21)]);
var inst_33741 = (state_33755[(2)]);
var inst_33742 = cljs.core.not_empty.call(null,inst_33731);
var state_33755__$1 = (function (){var statearr_33788 = state_33755;
(statearr_33788[(27)] = inst_33741);

return statearr_33788;
})();
if(cljs.core.truth_(inst_33742)){
var statearr_33789_33865 = state_33755__$1;
(statearr_33789_33865[(1)] = (44));

} else {
var statearr_33790_33866 = state_33755__$1;
(statearr_33790_33866[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (29))){
var inst_33676 = (state_33755[(23)]);
var inst_33708 = (state_33755[(16)]);
var inst_33674 = (state_33755[(26)]);
var inst_33671 = (state_33755[(24)]);
var inst_33668 = (state_33755[(19)]);
var inst_33672 = (state_33755[(25)]);
var inst_33704 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33707 = (function (){var all_files = inst_33668;
var res_SINGLEQUOTE_ = inst_33671;
var res = inst_33672;
var files_not_loaded = inst_33674;
var dependencies_that_loaded = inst_33676;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33676,inst_33708,inst_33674,inst_33671,inst_33668,inst_33672,inst_33704,state_val_33756,c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33706){
var map__33791 = p__33706;
var map__33791__$1 = ((((!((map__33791 == null)))?((((map__33791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33791):map__33791);
var namespace = cljs.core.get.call(null,map__33791__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33676,inst_33708,inst_33674,inst_33671,inst_33668,inst_33672,inst_33704,state_val_33756,c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33708__$1 = cljs.core.group_by.call(null,inst_33707,inst_33674);
var inst_33710 = (inst_33708__$1 == null);
var inst_33711 = cljs.core.not.call(null,inst_33710);
var state_33755__$1 = (function (){var statearr_33793 = state_33755;
(statearr_33793[(16)] = inst_33708__$1);

(statearr_33793[(28)] = inst_33704);

return statearr_33793;
})();
if(inst_33711){
var statearr_33794_33867 = state_33755__$1;
(statearr_33794_33867[(1)] = (32));

} else {
var statearr_33795_33868 = state_33755__$1;
(statearr_33795_33868[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (44))){
var inst_33731 = (state_33755[(21)]);
var inst_33744 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33731);
var inst_33745 = cljs.core.pr_str.call(null,inst_33744);
var inst_33746 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33745)].join('');
var inst_33747 = figwheel.client.utils.log.call(null,inst_33746);
var state_33755__$1 = state_33755;
var statearr_33796_33869 = state_33755__$1;
(statearr_33796_33869[(2)] = inst_33747);

(statearr_33796_33869[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (6))){
var inst_33649 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33797_33870 = state_33755__$1;
(statearr_33797_33870[(2)] = inst_33649);

(statearr_33797_33870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (28))){
var inst_33674 = (state_33755[(26)]);
var inst_33701 = (state_33755[(2)]);
var inst_33702 = cljs.core.not_empty.call(null,inst_33674);
var state_33755__$1 = (function (){var statearr_33798 = state_33755;
(statearr_33798[(29)] = inst_33701);

return statearr_33798;
})();
if(cljs.core.truth_(inst_33702)){
var statearr_33799_33871 = state_33755__$1;
(statearr_33799_33871[(1)] = (29));

} else {
var statearr_33800_33872 = state_33755__$1;
(statearr_33800_33872[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (25))){
var inst_33672 = (state_33755[(25)]);
var inst_33688 = (state_33755[(2)]);
var inst_33689 = cljs.core.not_empty.call(null,inst_33672);
var state_33755__$1 = (function (){var statearr_33801 = state_33755;
(statearr_33801[(30)] = inst_33688);

return statearr_33801;
})();
if(cljs.core.truth_(inst_33689)){
var statearr_33802_33873 = state_33755__$1;
(statearr_33802_33873[(1)] = (26));

} else {
var statearr_33803_33874 = state_33755__$1;
(statearr_33803_33874[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (34))){
var inst_33724 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
if(cljs.core.truth_(inst_33724)){
var statearr_33804_33875 = state_33755__$1;
(statearr_33804_33875[(1)] = (38));

} else {
var statearr_33805_33876 = state_33755__$1;
(statearr_33805_33876[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (17))){
var state_33755__$1 = state_33755;
var statearr_33806_33877 = state_33755__$1;
(statearr_33806_33877[(2)] = recompile_dependents);

(statearr_33806_33877[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (3))){
var state_33755__$1 = state_33755;
var statearr_33807_33878 = state_33755__$1;
(statearr_33807_33878[(2)] = null);

(statearr_33807_33878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (12))){
var inst_33645 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33808_33879 = state_33755__$1;
(statearr_33808_33879[(2)] = inst_33645);

(statearr_33808_33879[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (2))){
var inst_33607 = (state_33755[(13)]);
var inst_33614 = cljs.core.seq.call(null,inst_33607);
var inst_33615 = inst_33614;
var inst_33616 = null;
var inst_33617 = (0);
var inst_33618 = (0);
var state_33755__$1 = (function (){var statearr_33809 = state_33755;
(statearr_33809[(7)] = inst_33615);

(statearr_33809[(8)] = inst_33618);

(statearr_33809[(9)] = inst_33617);

(statearr_33809[(10)] = inst_33616);

return statearr_33809;
})();
var statearr_33810_33880 = state_33755__$1;
(statearr_33810_33880[(2)] = null);

(statearr_33810_33880[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (23))){
var inst_33676 = (state_33755[(23)]);
var inst_33674 = (state_33755[(26)]);
var inst_33671 = (state_33755[(24)]);
var inst_33668 = (state_33755[(19)]);
var inst_33672 = (state_33755[(25)]);
var inst_33679 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33681 = (function (){var all_files = inst_33668;
var res_SINGLEQUOTE_ = inst_33671;
var res = inst_33672;
var files_not_loaded = inst_33674;
var dependencies_that_loaded = inst_33676;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33676,inst_33674,inst_33671,inst_33668,inst_33672,inst_33679,state_val_33756,c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33680){
var map__33811 = p__33680;
var map__33811__$1 = ((((!((map__33811 == null)))?((((map__33811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33811):map__33811);
var request_url = cljs.core.get.call(null,map__33811__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33676,inst_33674,inst_33671,inst_33668,inst_33672,inst_33679,state_val_33756,c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33682 = cljs.core.reverse.call(null,inst_33676);
var inst_33683 = cljs.core.map.call(null,inst_33681,inst_33682);
var inst_33684 = cljs.core.pr_str.call(null,inst_33683);
var inst_33685 = figwheel.client.utils.log.call(null,inst_33684);
var state_33755__$1 = (function (){var statearr_33813 = state_33755;
(statearr_33813[(31)] = inst_33679);

return statearr_33813;
})();
var statearr_33814_33881 = state_33755__$1;
(statearr_33814_33881[(2)] = inst_33685);

(statearr_33814_33881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (35))){
var state_33755__$1 = state_33755;
var statearr_33815_33882 = state_33755__$1;
(statearr_33815_33882[(2)] = true);

(statearr_33815_33882[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (19))){
var inst_33658 = (state_33755[(12)]);
var inst_33664 = figwheel.client.file_reloading.expand_files.call(null,inst_33658);
var state_33755__$1 = state_33755;
var statearr_33816_33883 = state_33755__$1;
(statearr_33816_33883[(2)] = inst_33664);

(statearr_33816_33883[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (11))){
var state_33755__$1 = state_33755;
var statearr_33817_33884 = state_33755__$1;
(statearr_33817_33884[(2)] = null);

(statearr_33817_33884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (9))){
var inst_33647 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33818_33885 = state_33755__$1;
(statearr_33818_33885[(2)] = inst_33647);

(statearr_33818_33885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (5))){
var inst_33618 = (state_33755[(8)]);
var inst_33617 = (state_33755[(9)]);
var inst_33620 = (inst_33618 < inst_33617);
var inst_33621 = inst_33620;
var state_33755__$1 = state_33755;
if(cljs.core.truth_(inst_33621)){
var statearr_33819_33886 = state_33755__$1;
(statearr_33819_33886[(1)] = (7));

} else {
var statearr_33820_33887 = state_33755__$1;
(statearr_33820_33887[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (14))){
var inst_33628 = (state_33755[(22)]);
var inst_33637 = cljs.core.first.call(null,inst_33628);
var inst_33638 = figwheel.client.file_reloading.eval_body.call(null,inst_33637,opts);
var inst_33639 = cljs.core.next.call(null,inst_33628);
var inst_33615 = inst_33639;
var inst_33616 = null;
var inst_33617 = (0);
var inst_33618 = (0);
var state_33755__$1 = (function (){var statearr_33821 = state_33755;
(statearr_33821[(7)] = inst_33615);

(statearr_33821[(32)] = inst_33638);

(statearr_33821[(8)] = inst_33618);

(statearr_33821[(9)] = inst_33617);

(statearr_33821[(10)] = inst_33616);

return statearr_33821;
})();
var statearr_33822_33888 = state_33755__$1;
(statearr_33822_33888[(2)] = null);

(statearr_33822_33888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (45))){
var state_33755__$1 = state_33755;
var statearr_33823_33889 = state_33755__$1;
(statearr_33823_33889[(2)] = null);

(statearr_33823_33889[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (26))){
var inst_33676 = (state_33755[(23)]);
var inst_33674 = (state_33755[(26)]);
var inst_33671 = (state_33755[(24)]);
var inst_33668 = (state_33755[(19)]);
var inst_33672 = (state_33755[(25)]);
var inst_33691 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33693 = (function (){var all_files = inst_33668;
var res_SINGLEQUOTE_ = inst_33671;
var res = inst_33672;
var files_not_loaded = inst_33674;
var dependencies_that_loaded = inst_33676;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33676,inst_33674,inst_33671,inst_33668,inst_33672,inst_33691,state_val_33756,c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33692){
var map__33824 = p__33692;
var map__33824__$1 = ((((!((map__33824 == null)))?((((map__33824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33824):map__33824);
var namespace = cljs.core.get.call(null,map__33824__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33824__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33676,inst_33674,inst_33671,inst_33668,inst_33672,inst_33691,state_val_33756,c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33694 = cljs.core.map.call(null,inst_33693,inst_33672);
var inst_33695 = cljs.core.pr_str.call(null,inst_33694);
var inst_33696 = figwheel.client.utils.log.call(null,inst_33695);
var inst_33697 = (function (){var all_files = inst_33668;
var res_SINGLEQUOTE_ = inst_33671;
var res = inst_33672;
var files_not_loaded = inst_33674;
var dependencies_that_loaded = inst_33676;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33676,inst_33674,inst_33671,inst_33668,inst_33672,inst_33691,inst_33693,inst_33694,inst_33695,inst_33696,state_val_33756,c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33676,inst_33674,inst_33671,inst_33668,inst_33672,inst_33691,inst_33693,inst_33694,inst_33695,inst_33696,state_val_33756,c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33698 = setTimeout(inst_33697,(10));
var state_33755__$1 = (function (){var statearr_33826 = state_33755;
(statearr_33826[(33)] = inst_33691);

(statearr_33826[(34)] = inst_33696);

return statearr_33826;
})();
var statearr_33827_33890 = state_33755__$1;
(statearr_33827_33890[(2)] = inst_33698);

(statearr_33827_33890[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (16))){
var state_33755__$1 = state_33755;
var statearr_33828_33891 = state_33755__$1;
(statearr_33828_33891[(2)] = reload_dependents);

(statearr_33828_33891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (38))){
var inst_33708 = (state_33755[(16)]);
var inst_33726 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33708);
var state_33755__$1 = state_33755;
var statearr_33829_33892 = state_33755__$1;
(statearr_33829_33892[(2)] = inst_33726);

(statearr_33829_33892[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (30))){
var state_33755__$1 = state_33755;
var statearr_33830_33893 = state_33755__$1;
(statearr_33830_33893[(2)] = null);

(statearr_33830_33893[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (10))){
var inst_33628 = (state_33755[(22)]);
var inst_33630 = cljs.core.chunked_seq_QMARK_.call(null,inst_33628);
var state_33755__$1 = state_33755;
if(inst_33630){
var statearr_33831_33894 = state_33755__$1;
(statearr_33831_33894[(1)] = (13));

} else {
var statearr_33832_33895 = state_33755__$1;
(statearr_33832_33895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (18))){
var inst_33662 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
if(cljs.core.truth_(inst_33662)){
var statearr_33833_33896 = state_33755__$1;
(statearr_33833_33896[(1)] = (19));

} else {
var statearr_33834_33897 = state_33755__$1;
(statearr_33834_33897[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (42))){
var state_33755__$1 = state_33755;
var statearr_33835_33898 = state_33755__$1;
(statearr_33835_33898[(2)] = null);

(statearr_33835_33898[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (37))){
var inst_33721 = (state_33755[(2)]);
var state_33755__$1 = state_33755;
var statearr_33836_33899 = state_33755__$1;
(statearr_33836_33899[(2)] = inst_33721);

(statearr_33836_33899[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33756 === (8))){
var inst_33615 = (state_33755[(7)]);
var inst_33628 = (state_33755[(22)]);
var inst_33628__$1 = cljs.core.seq.call(null,inst_33615);
var state_33755__$1 = (function (){var statearr_33837 = state_33755;
(statearr_33837[(22)] = inst_33628__$1);

return statearr_33837;
})();
if(inst_33628__$1){
var statearr_33838_33900 = state_33755__$1;
(statearr_33838_33900[(1)] = (10));

} else {
var statearr_33839_33901 = state_33755__$1;
(statearr_33839_33901[(1)] = (11));

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
});})(c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29657__auto__,c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto____0 = (function (){
var statearr_33840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33840[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto__);

(statearr_33840[(1)] = (1));

return statearr_33840;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto____1 = (function (state_33755){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_33755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e33841){if((e33841 instanceof Object)){
var ex__29661__auto__ = e33841;
var statearr_33842_33902 = state_33755;
(statearr_33842_33902[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33903 = state_33755;
state_33755 = G__33903;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto__ = function(state_33755){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto____1.call(this,state_33755);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29747__auto__ = (function (){var statearr_33843 = f__29746__auto__.call(null);
(statearr_33843[(6)] = c__29745__auto__);

return statearr_33843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto__,map__33600,map__33600__$1,opts,before_jsload,on_jsload,reload_dependents,map__33601,map__33601__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29745__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33906,link){
var map__33907 = p__33906;
var map__33907__$1 = ((((!((map__33907 == null)))?((((map__33907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33907):map__33907);
var file = cljs.core.get.call(null,map__33907__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__33907,map__33907__$1,file){
return (function (p1__33904_SHARP_,p2__33905_SHARP_){
if(cljs.core._EQ_.call(null,p1__33904_SHARP_,p2__33905_SHARP_)){
return p1__33904_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__33907,map__33907__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33910){
var map__33911 = p__33910;
var map__33911__$1 = ((((!((map__33911 == null)))?((((map__33911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33911):map__33911);
var match_length = cljs.core.get.call(null,map__33911__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33911__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33909_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33909_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33913_SHARP_,p2__33914_SHARP_){
return cljs.core.assoc.call(null,p1__33913_SHARP_,cljs.core.get.call(null,p2__33914_SHARP_,key),p2__33914_SHARP_);
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
var loaded_f_datas_33915 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33915);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33915);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33916,p__33917){
var map__33918 = p__33916;
var map__33918__$1 = ((((!((map__33918 == null)))?((((map__33918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33918):map__33918);
var on_cssload = cljs.core.get.call(null,map__33918__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33919 = p__33917;
var map__33919__$1 = ((((!((map__33919 == null)))?((((map__33919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33919):map__33919);
var files_msg = map__33919__$1;
var files = cljs.core.get.call(null,map__33919__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1514366036880
