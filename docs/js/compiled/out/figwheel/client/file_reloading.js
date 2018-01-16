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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37197_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37197_SHARP_));
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
var seq__37198 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37199 = null;
var count__37200 = (0);
var i__37201 = (0);
while(true){
if((i__37201 < count__37200)){
var n = cljs.core._nth.call(null,chunk__37199,i__37201);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37202 = seq__37198;
var G__37203 = chunk__37199;
var G__37204 = count__37200;
var G__37205 = (i__37201 + (1));
seq__37198 = G__37202;
chunk__37199 = G__37203;
count__37200 = G__37204;
i__37201 = G__37205;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37198);
if(temp__4657__auto__){
var seq__37198__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37198__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37198__$1);
var G__37206 = cljs.core.chunk_rest.call(null,seq__37198__$1);
var G__37207 = c__28034__auto__;
var G__37208 = cljs.core.count.call(null,c__28034__auto__);
var G__37209 = (0);
seq__37198 = G__37206;
chunk__37199 = G__37207;
count__37200 = G__37208;
i__37201 = G__37209;
continue;
} else {
var n = cljs.core.first.call(null,seq__37198__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37210 = cljs.core.next.call(null,seq__37198__$1);
var G__37211 = null;
var G__37212 = (0);
var G__37213 = (0);
seq__37198 = G__37210;
chunk__37199 = G__37211;
count__37200 = G__37212;
i__37201 = G__37213;
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

var seq__37223_37231 = cljs.core.seq.call(null,deps);
var chunk__37224_37232 = null;
var count__37225_37233 = (0);
var i__37226_37234 = (0);
while(true){
if((i__37226_37234 < count__37225_37233)){
var dep_37235 = cljs.core._nth.call(null,chunk__37224_37232,i__37226_37234);
topo_sort_helper_STAR_.call(null,dep_37235,(depth + (1)),state);

var G__37236 = seq__37223_37231;
var G__37237 = chunk__37224_37232;
var G__37238 = count__37225_37233;
var G__37239 = (i__37226_37234 + (1));
seq__37223_37231 = G__37236;
chunk__37224_37232 = G__37237;
count__37225_37233 = G__37238;
i__37226_37234 = G__37239;
continue;
} else {
var temp__4657__auto___37240 = cljs.core.seq.call(null,seq__37223_37231);
if(temp__4657__auto___37240){
var seq__37223_37241__$1 = temp__4657__auto___37240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37223_37241__$1)){
var c__28034__auto___37242 = cljs.core.chunk_first.call(null,seq__37223_37241__$1);
var G__37243 = cljs.core.chunk_rest.call(null,seq__37223_37241__$1);
var G__37244 = c__28034__auto___37242;
var G__37245 = cljs.core.count.call(null,c__28034__auto___37242);
var G__37246 = (0);
seq__37223_37231 = G__37243;
chunk__37224_37232 = G__37244;
count__37225_37233 = G__37245;
i__37226_37234 = G__37246;
continue;
} else {
var dep_37247 = cljs.core.first.call(null,seq__37223_37241__$1);
topo_sort_helper_STAR_.call(null,dep_37247,(depth + (1)),state);

var G__37248 = cljs.core.next.call(null,seq__37223_37241__$1);
var G__37249 = null;
var G__37250 = (0);
var G__37251 = (0);
seq__37223_37231 = G__37248;
chunk__37224_37232 = G__37249;
count__37225_37233 = G__37250;
i__37226_37234 = G__37251;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37227){
var vec__37228 = p__37227;
var seq__37229 = cljs.core.seq.call(null,vec__37228);
var first__37230 = cljs.core.first.call(null,seq__37229);
var seq__37229__$1 = cljs.core.next.call(null,seq__37229);
var x = first__37230;
var xs = seq__37229__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37228,seq__37229,first__37230,seq__37229__$1,x,xs,get_deps__$1){
return (function (p1__37214_SHARP_){
return clojure.set.difference.call(null,p1__37214_SHARP_,x);
});})(vec__37228,seq__37229,first__37230,seq__37229__$1,x,xs,get_deps__$1))
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
var seq__37252 = cljs.core.seq.call(null,provides);
var chunk__37253 = null;
var count__37254 = (0);
var i__37255 = (0);
while(true){
if((i__37255 < count__37254)){
var prov = cljs.core._nth.call(null,chunk__37253,i__37255);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37256_37264 = cljs.core.seq.call(null,requires);
var chunk__37257_37265 = null;
var count__37258_37266 = (0);
var i__37259_37267 = (0);
while(true){
if((i__37259_37267 < count__37258_37266)){
var req_37268 = cljs.core._nth.call(null,chunk__37257_37265,i__37259_37267);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37268,prov);

var G__37269 = seq__37256_37264;
var G__37270 = chunk__37257_37265;
var G__37271 = count__37258_37266;
var G__37272 = (i__37259_37267 + (1));
seq__37256_37264 = G__37269;
chunk__37257_37265 = G__37270;
count__37258_37266 = G__37271;
i__37259_37267 = G__37272;
continue;
} else {
var temp__4657__auto___37273 = cljs.core.seq.call(null,seq__37256_37264);
if(temp__4657__auto___37273){
var seq__37256_37274__$1 = temp__4657__auto___37273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37256_37274__$1)){
var c__28034__auto___37275 = cljs.core.chunk_first.call(null,seq__37256_37274__$1);
var G__37276 = cljs.core.chunk_rest.call(null,seq__37256_37274__$1);
var G__37277 = c__28034__auto___37275;
var G__37278 = cljs.core.count.call(null,c__28034__auto___37275);
var G__37279 = (0);
seq__37256_37264 = G__37276;
chunk__37257_37265 = G__37277;
count__37258_37266 = G__37278;
i__37259_37267 = G__37279;
continue;
} else {
var req_37280 = cljs.core.first.call(null,seq__37256_37274__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37280,prov);

var G__37281 = cljs.core.next.call(null,seq__37256_37274__$1);
var G__37282 = null;
var G__37283 = (0);
var G__37284 = (0);
seq__37256_37264 = G__37281;
chunk__37257_37265 = G__37282;
count__37258_37266 = G__37283;
i__37259_37267 = G__37284;
continue;
}
} else {
}
}
break;
}

var G__37285 = seq__37252;
var G__37286 = chunk__37253;
var G__37287 = count__37254;
var G__37288 = (i__37255 + (1));
seq__37252 = G__37285;
chunk__37253 = G__37286;
count__37254 = G__37287;
i__37255 = G__37288;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37252);
if(temp__4657__auto__){
var seq__37252__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37252__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37252__$1);
var G__37289 = cljs.core.chunk_rest.call(null,seq__37252__$1);
var G__37290 = c__28034__auto__;
var G__37291 = cljs.core.count.call(null,c__28034__auto__);
var G__37292 = (0);
seq__37252 = G__37289;
chunk__37253 = G__37290;
count__37254 = G__37291;
i__37255 = G__37292;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37252__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37260_37293 = cljs.core.seq.call(null,requires);
var chunk__37261_37294 = null;
var count__37262_37295 = (0);
var i__37263_37296 = (0);
while(true){
if((i__37263_37296 < count__37262_37295)){
var req_37297 = cljs.core._nth.call(null,chunk__37261_37294,i__37263_37296);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37297,prov);

var G__37298 = seq__37260_37293;
var G__37299 = chunk__37261_37294;
var G__37300 = count__37262_37295;
var G__37301 = (i__37263_37296 + (1));
seq__37260_37293 = G__37298;
chunk__37261_37294 = G__37299;
count__37262_37295 = G__37300;
i__37263_37296 = G__37301;
continue;
} else {
var temp__4657__auto___37302__$1 = cljs.core.seq.call(null,seq__37260_37293);
if(temp__4657__auto___37302__$1){
var seq__37260_37303__$1 = temp__4657__auto___37302__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37260_37303__$1)){
var c__28034__auto___37304 = cljs.core.chunk_first.call(null,seq__37260_37303__$1);
var G__37305 = cljs.core.chunk_rest.call(null,seq__37260_37303__$1);
var G__37306 = c__28034__auto___37304;
var G__37307 = cljs.core.count.call(null,c__28034__auto___37304);
var G__37308 = (0);
seq__37260_37293 = G__37305;
chunk__37261_37294 = G__37306;
count__37262_37295 = G__37307;
i__37263_37296 = G__37308;
continue;
} else {
var req_37309 = cljs.core.first.call(null,seq__37260_37303__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37309,prov);

var G__37310 = cljs.core.next.call(null,seq__37260_37303__$1);
var G__37311 = null;
var G__37312 = (0);
var G__37313 = (0);
seq__37260_37293 = G__37310;
chunk__37261_37294 = G__37311;
count__37262_37295 = G__37312;
i__37263_37296 = G__37313;
continue;
}
} else {
}
}
break;
}

var G__37314 = cljs.core.next.call(null,seq__37252__$1);
var G__37315 = null;
var G__37316 = (0);
var G__37317 = (0);
seq__37252 = G__37314;
chunk__37253 = G__37315;
count__37254 = G__37316;
i__37255 = G__37317;
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
var seq__37318_37322 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37319_37323 = null;
var count__37320_37324 = (0);
var i__37321_37325 = (0);
while(true){
if((i__37321_37325 < count__37320_37324)){
var ns_37326 = cljs.core._nth.call(null,chunk__37319_37323,i__37321_37325);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37326);

var G__37327 = seq__37318_37322;
var G__37328 = chunk__37319_37323;
var G__37329 = count__37320_37324;
var G__37330 = (i__37321_37325 + (1));
seq__37318_37322 = G__37327;
chunk__37319_37323 = G__37328;
count__37320_37324 = G__37329;
i__37321_37325 = G__37330;
continue;
} else {
var temp__4657__auto___37331 = cljs.core.seq.call(null,seq__37318_37322);
if(temp__4657__auto___37331){
var seq__37318_37332__$1 = temp__4657__auto___37331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37318_37332__$1)){
var c__28034__auto___37333 = cljs.core.chunk_first.call(null,seq__37318_37332__$1);
var G__37334 = cljs.core.chunk_rest.call(null,seq__37318_37332__$1);
var G__37335 = c__28034__auto___37333;
var G__37336 = cljs.core.count.call(null,c__28034__auto___37333);
var G__37337 = (0);
seq__37318_37322 = G__37334;
chunk__37319_37323 = G__37335;
count__37320_37324 = G__37336;
i__37321_37325 = G__37337;
continue;
} else {
var ns_37338 = cljs.core.first.call(null,seq__37318_37332__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37338);

var G__37339 = cljs.core.next.call(null,seq__37318_37332__$1);
var G__37340 = null;
var G__37341 = (0);
var G__37342 = (0);
seq__37318_37322 = G__37339;
chunk__37319_37323 = G__37340;
count__37320_37324 = G__37341;
i__37321_37325 = G__37342;
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
var G__37343__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37344__i = 0, G__37344__a = new Array(arguments.length -  0);
while (G__37344__i < G__37344__a.length) {G__37344__a[G__37344__i] = arguments[G__37344__i + 0]; ++G__37344__i;}
  args = new cljs.core.IndexedSeq(G__37344__a,0,null);
} 
return G__37343__delegate.call(this,args);};
G__37343.cljs$lang$maxFixedArity = 0;
G__37343.cljs$lang$applyTo = (function (arglist__37345){
var args = cljs.core.seq(arglist__37345);
return G__37343__delegate(args);
});
G__37343.cljs$core$IFn$_invoke$arity$variadic = G__37343__delegate;
return G__37343;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37346_SHARP_,p2__37347_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37346_SHARP_)].join('')),p2__37347_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37348_SHARP_,p2__37349_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37348_SHARP_)].join(''),p2__37349_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37350 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37350.addCallback(((function (G__37350){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37350))
);

G__37350.addErrback(((function (G__37350){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37350))
);

return G__37350;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37351 = cljs.core._EQ_;
var expr__37352 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37351.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37352))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37351,expr__37352){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37351,expr__37352))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37351,expr__37352){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37354){if((e37354 instanceof Error)){
var e = e37354;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37354;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37351,expr__37352))
} else {
if(cljs.core.truth_(pred__37351.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37352))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37351.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37352))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37351.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37352))){
return ((function (pred__37351,expr__37352){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37355){if((e37355 instanceof Error)){
var e = e37355;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37355;

}
}})());
});
;})(pred__37351,expr__37352))
} else {
return ((function (pred__37351,expr__37352){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37351,expr__37352))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37356,callback){
var map__37357 = p__37356;
var map__37357__$1 = ((((!((map__37357 == null)))?((((map__37357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37357):map__37357);
var file_msg = map__37357__$1;
var request_url = cljs.core.get.call(null,map__37357__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37357,map__37357__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37357,map__37357__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto__){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto__){
return (function (state_37381){
var state_val_37382 = (state_37381[(1)]);
if((state_val_37382 === (7))){
var inst_37377 = (state_37381[(2)]);
var state_37381__$1 = state_37381;
var statearr_37383_37400 = state_37381__$1;
(statearr_37383_37400[(2)] = inst_37377);

(statearr_37383_37400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37382 === (1))){
var state_37381__$1 = state_37381;
var statearr_37384_37401 = state_37381__$1;
(statearr_37384_37401[(2)] = null);

(statearr_37384_37401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37382 === (4))){
var inst_37361 = (state_37381[(7)]);
var inst_37361__$1 = (state_37381[(2)]);
var state_37381__$1 = (function (){var statearr_37385 = state_37381;
(statearr_37385[(7)] = inst_37361__$1);

return statearr_37385;
})();
if(cljs.core.truth_(inst_37361__$1)){
var statearr_37386_37402 = state_37381__$1;
(statearr_37386_37402[(1)] = (5));

} else {
var statearr_37387_37403 = state_37381__$1;
(statearr_37387_37403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37382 === (6))){
var state_37381__$1 = state_37381;
var statearr_37388_37404 = state_37381__$1;
(statearr_37388_37404[(2)] = null);

(statearr_37388_37404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37382 === (3))){
var inst_37379 = (state_37381[(2)]);
var state_37381__$1 = state_37381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37381__$1,inst_37379);
} else {
if((state_val_37382 === (2))){
var state_37381__$1 = state_37381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37381__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37382 === (11))){
var inst_37373 = (state_37381[(2)]);
var state_37381__$1 = (function (){var statearr_37389 = state_37381;
(statearr_37389[(8)] = inst_37373);

return statearr_37389;
})();
var statearr_37390_37405 = state_37381__$1;
(statearr_37390_37405[(2)] = null);

(statearr_37390_37405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37382 === (9))){
var inst_37367 = (state_37381[(9)]);
var inst_37365 = (state_37381[(10)]);
var inst_37369 = inst_37367.call(null,inst_37365);
var state_37381__$1 = state_37381;
var statearr_37391_37406 = state_37381__$1;
(statearr_37391_37406[(2)] = inst_37369);

(statearr_37391_37406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37382 === (5))){
var inst_37361 = (state_37381[(7)]);
var inst_37363 = figwheel.client.file_reloading.blocking_load.call(null,inst_37361);
var state_37381__$1 = state_37381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37381__$1,(8),inst_37363);
} else {
if((state_val_37382 === (10))){
var inst_37365 = (state_37381[(10)]);
var inst_37371 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37365);
var state_37381__$1 = state_37381;
var statearr_37392_37407 = state_37381__$1;
(statearr_37392_37407[(2)] = inst_37371);

(statearr_37392_37407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37382 === (8))){
var inst_37367 = (state_37381[(9)]);
var inst_37361 = (state_37381[(7)]);
var inst_37365 = (state_37381[(2)]);
var inst_37366 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37367__$1 = cljs.core.get.call(null,inst_37366,inst_37361);
var state_37381__$1 = (function (){var statearr_37393 = state_37381;
(statearr_37393[(9)] = inst_37367__$1);

(statearr_37393[(10)] = inst_37365);

return statearr_37393;
})();
if(cljs.core.truth_(inst_37367__$1)){
var statearr_37394_37408 = state_37381__$1;
(statearr_37394_37408[(1)] = (9));

} else {
var statearr_37395_37409 = state_37381__$1;
(statearr_37395_37409[(1)] = (10));

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
});})(c__30624__auto__))
;
return ((function (switch__30536__auto__,c__30624__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30537__auto__ = null;
var figwheel$client$file_reloading$state_machine__30537__auto____0 = (function (){
var statearr_37396 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37396[(0)] = figwheel$client$file_reloading$state_machine__30537__auto__);

(statearr_37396[(1)] = (1));

return statearr_37396;
});
var figwheel$client$file_reloading$state_machine__30537__auto____1 = (function (state_37381){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_37381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e37397){if((e37397 instanceof Object)){
var ex__30540__auto__ = e37397;
var statearr_37398_37410 = state_37381;
(statearr_37398_37410[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37411 = state_37381;
state_37381 = G__37411;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30537__auto__ = function(state_37381){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30537__auto____1.call(this,state_37381);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30537__auto____0;
figwheel$client$file_reloading$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30537__auto____1;
return figwheel$client$file_reloading$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_37399 = f__30625__auto__.call(null);
(statearr_37399[(6)] = c__30624__auto__);

return statearr_37399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto__))
);

return c__30624__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37412,callback){
var map__37413 = p__37412;
var map__37413__$1 = ((((!((map__37413 == null)))?((((map__37413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37413):map__37413);
var file_msg = map__37413__$1;
var namespace = cljs.core.get.call(null,map__37413__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37413,map__37413__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37413,map__37413__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37415){
var map__37416 = p__37415;
var map__37416__$1 = ((((!((map__37416 == null)))?((((map__37416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37416):map__37416);
var file_msg = map__37416__$1;
var namespace = cljs.core.get.call(null,map__37416__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37418){
var map__37419 = p__37418;
var map__37419__$1 = ((((!((map__37419 == null)))?((((map__37419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37419):map__37419);
var file_msg = map__37419__$1;
var namespace = cljs.core.get.call(null,map__37419__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37421,callback){
var map__37422 = p__37421;
var map__37422__$1 = ((((!((map__37422 == null)))?((((map__37422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37422):map__37422);
var file_msg = map__37422__$1;
var request_url = cljs.core.get.call(null,map__37422__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37422__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30624__auto___37472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___37472,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___37472,out){
return (function (state_37457){
var state_val_37458 = (state_37457[(1)]);
if((state_val_37458 === (1))){
var inst_37431 = cljs.core.seq.call(null,files);
var inst_37432 = cljs.core.first.call(null,inst_37431);
var inst_37433 = cljs.core.next.call(null,inst_37431);
var inst_37434 = files;
var state_37457__$1 = (function (){var statearr_37459 = state_37457;
(statearr_37459[(7)] = inst_37434);

(statearr_37459[(8)] = inst_37433);

(statearr_37459[(9)] = inst_37432);

return statearr_37459;
})();
var statearr_37460_37473 = state_37457__$1;
(statearr_37460_37473[(2)] = null);

(statearr_37460_37473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37458 === (2))){
var inst_37434 = (state_37457[(7)]);
var inst_37440 = (state_37457[(10)]);
var inst_37439 = cljs.core.seq.call(null,inst_37434);
var inst_37440__$1 = cljs.core.first.call(null,inst_37439);
var inst_37441 = cljs.core.next.call(null,inst_37439);
var inst_37442 = (inst_37440__$1 == null);
var inst_37443 = cljs.core.not.call(null,inst_37442);
var state_37457__$1 = (function (){var statearr_37461 = state_37457;
(statearr_37461[(11)] = inst_37441);

(statearr_37461[(10)] = inst_37440__$1);

return statearr_37461;
})();
if(inst_37443){
var statearr_37462_37474 = state_37457__$1;
(statearr_37462_37474[(1)] = (4));

} else {
var statearr_37463_37475 = state_37457__$1;
(statearr_37463_37475[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37458 === (3))){
var inst_37455 = (state_37457[(2)]);
var state_37457__$1 = state_37457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37457__$1,inst_37455);
} else {
if((state_val_37458 === (4))){
var inst_37440 = (state_37457[(10)]);
var inst_37445 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37440);
var state_37457__$1 = state_37457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37457__$1,(7),inst_37445);
} else {
if((state_val_37458 === (5))){
var inst_37451 = cljs.core.async.close_BANG_.call(null,out);
var state_37457__$1 = state_37457;
var statearr_37464_37476 = state_37457__$1;
(statearr_37464_37476[(2)] = inst_37451);

(statearr_37464_37476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37458 === (6))){
var inst_37453 = (state_37457[(2)]);
var state_37457__$1 = state_37457;
var statearr_37465_37477 = state_37457__$1;
(statearr_37465_37477[(2)] = inst_37453);

(statearr_37465_37477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37458 === (7))){
var inst_37441 = (state_37457[(11)]);
var inst_37447 = (state_37457[(2)]);
var inst_37448 = cljs.core.async.put_BANG_.call(null,out,inst_37447);
var inst_37434 = inst_37441;
var state_37457__$1 = (function (){var statearr_37466 = state_37457;
(statearr_37466[(7)] = inst_37434);

(statearr_37466[(12)] = inst_37448);

return statearr_37466;
})();
var statearr_37467_37478 = state_37457__$1;
(statearr_37467_37478[(2)] = null);

(statearr_37467_37478[(1)] = (2));


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
});})(c__30624__auto___37472,out))
;
return ((function (switch__30536__auto__,c__30624__auto___37472,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____0 = (function (){
var statearr_37468 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37468[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__);

(statearr_37468[(1)] = (1));

return statearr_37468;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____1 = (function (state_37457){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_37457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e37469){if((e37469 instanceof Object)){
var ex__30540__auto__ = e37469;
var statearr_37470_37479 = state_37457;
(statearr_37470_37479[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37480 = state_37457;
state_37457 = G__37480;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__ = function(state_37457){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____1.call(this,state_37457);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___37472,out))
})();
var state__30626__auto__ = (function (){var statearr_37471 = f__30625__auto__.call(null);
(statearr_37471[(6)] = c__30624__auto___37472);

return statearr_37471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___37472,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37481,opts){
var map__37482 = p__37481;
var map__37482__$1 = ((((!((map__37482 == null)))?((((map__37482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37482):map__37482);
var eval_body = cljs.core.get.call(null,map__37482__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37482__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37484){var e = e37484;
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
return (function (p1__37485_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37485_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37486){
var vec__37487 = p__37486;
var k = cljs.core.nth.call(null,vec__37487,(0),null);
var v = cljs.core.nth.call(null,vec__37487,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37490){
var vec__37491 = p__37490;
var k = cljs.core.nth.call(null,vec__37491,(0),null);
var v = cljs.core.nth.call(null,vec__37491,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37497,p__37498){
var map__37499 = p__37497;
var map__37499__$1 = ((((!((map__37499 == null)))?((((map__37499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37499):map__37499);
var opts = map__37499__$1;
var before_jsload = cljs.core.get.call(null,map__37499__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37499__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37499__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37500 = p__37498;
var map__37500__$1 = ((((!((map__37500 == null)))?((((map__37500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37500):map__37500);
var msg = map__37500__$1;
var files = cljs.core.get.call(null,map__37500__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37500__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37500__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37654){
var state_val_37655 = (state_37654[(1)]);
if((state_val_37655 === (7))){
var inst_37515 = (state_37654[(7)]);
var inst_37516 = (state_37654[(8)]);
var inst_37514 = (state_37654[(9)]);
var inst_37517 = (state_37654[(10)]);
var inst_37522 = cljs.core._nth.call(null,inst_37515,inst_37517);
var inst_37523 = figwheel.client.file_reloading.eval_body.call(null,inst_37522,opts);
var inst_37524 = (inst_37517 + (1));
var tmp37656 = inst_37515;
var tmp37657 = inst_37516;
var tmp37658 = inst_37514;
var inst_37514__$1 = tmp37658;
var inst_37515__$1 = tmp37656;
var inst_37516__$1 = tmp37657;
var inst_37517__$1 = inst_37524;
var state_37654__$1 = (function (){var statearr_37659 = state_37654;
(statearr_37659[(11)] = inst_37523);

(statearr_37659[(7)] = inst_37515__$1);

(statearr_37659[(8)] = inst_37516__$1);

(statearr_37659[(9)] = inst_37514__$1);

(statearr_37659[(10)] = inst_37517__$1);

return statearr_37659;
})();
var statearr_37660_37743 = state_37654__$1;
(statearr_37660_37743[(2)] = null);

(statearr_37660_37743[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (20))){
var inst_37557 = (state_37654[(12)]);
var inst_37565 = figwheel.client.file_reloading.sort_files.call(null,inst_37557);
var state_37654__$1 = state_37654;
var statearr_37661_37744 = state_37654__$1;
(statearr_37661_37744[(2)] = inst_37565);

(statearr_37661_37744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (27))){
var state_37654__$1 = state_37654;
var statearr_37662_37745 = state_37654__$1;
(statearr_37662_37745[(2)] = null);

(statearr_37662_37745[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (1))){
var inst_37506 = (state_37654[(13)]);
var inst_37503 = before_jsload.call(null,files);
var inst_37504 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37505 = (function (){return ((function (inst_37506,inst_37503,inst_37504,state_val_37655,c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37494_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37494_SHARP_);
});
;})(inst_37506,inst_37503,inst_37504,state_val_37655,c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37506__$1 = cljs.core.filter.call(null,inst_37505,files);
var inst_37507 = cljs.core.not_empty.call(null,inst_37506__$1);
var state_37654__$1 = (function (){var statearr_37663 = state_37654;
(statearr_37663[(13)] = inst_37506__$1);

(statearr_37663[(14)] = inst_37503);

(statearr_37663[(15)] = inst_37504);

return statearr_37663;
})();
if(cljs.core.truth_(inst_37507)){
var statearr_37664_37746 = state_37654__$1;
(statearr_37664_37746[(1)] = (2));

} else {
var statearr_37665_37747 = state_37654__$1;
(statearr_37665_37747[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (24))){
var state_37654__$1 = state_37654;
var statearr_37666_37748 = state_37654__$1;
(statearr_37666_37748[(2)] = null);

(statearr_37666_37748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (39))){
var inst_37607 = (state_37654[(16)]);
var state_37654__$1 = state_37654;
var statearr_37667_37749 = state_37654__$1;
(statearr_37667_37749[(2)] = inst_37607);

(statearr_37667_37749[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (46))){
var inst_37649 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
var statearr_37668_37750 = state_37654__$1;
(statearr_37668_37750[(2)] = inst_37649);

(statearr_37668_37750[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (4))){
var inst_37551 = (state_37654[(2)]);
var inst_37552 = cljs.core.List.EMPTY;
var inst_37553 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37552);
var inst_37554 = (function (){return ((function (inst_37551,inst_37552,inst_37553,state_val_37655,c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37495_SHARP_){
var and__27183__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37495_SHARP_);
if(cljs.core.truth_(and__27183__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37495_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37495_SHARP_)));
} else {
return and__27183__auto__;
}
});
;})(inst_37551,inst_37552,inst_37553,state_val_37655,c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37555 = cljs.core.filter.call(null,inst_37554,files);
var inst_37556 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37557 = cljs.core.concat.call(null,inst_37555,inst_37556);
var state_37654__$1 = (function (){var statearr_37669 = state_37654;
(statearr_37669[(17)] = inst_37551);

(statearr_37669[(12)] = inst_37557);

(statearr_37669[(18)] = inst_37553);

return statearr_37669;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37670_37751 = state_37654__$1;
(statearr_37670_37751[(1)] = (16));

} else {
var statearr_37671_37752 = state_37654__$1;
(statearr_37671_37752[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (15))){
var inst_37541 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
var statearr_37672_37753 = state_37654__$1;
(statearr_37672_37753[(2)] = inst_37541);

(statearr_37672_37753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (21))){
var inst_37567 = (state_37654[(19)]);
var inst_37567__$1 = (state_37654[(2)]);
var inst_37568 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37567__$1);
var state_37654__$1 = (function (){var statearr_37673 = state_37654;
(statearr_37673[(19)] = inst_37567__$1);

return statearr_37673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37654__$1,(22),inst_37568);
} else {
if((state_val_37655 === (31))){
var inst_37652 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37654__$1,inst_37652);
} else {
if((state_val_37655 === (32))){
var inst_37607 = (state_37654[(16)]);
var inst_37612 = inst_37607.cljs$lang$protocol_mask$partition0$;
var inst_37613 = (inst_37612 & (64));
var inst_37614 = inst_37607.cljs$core$ISeq$;
var inst_37615 = (cljs.core.PROTOCOL_SENTINEL === inst_37614);
var inst_37616 = (inst_37613) || (inst_37615);
var state_37654__$1 = state_37654;
if(cljs.core.truth_(inst_37616)){
var statearr_37674_37754 = state_37654__$1;
(statearr_37674_37754[(1)] = (35));

} else {
var statearr_37675_37755 = state_37654__$1;
(statearr_37675_37755[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (40))){
var inst_37629 = (state_37654[(20)]);
var inst_37628 = (state_37654[(2)]);
var inst_37629__$1 = cljs.core.get.call(null,inst_37628,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37630 = cljs.core.get.call(null,inst_37628,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37631 = cljs.core.not_empty.call(null,inst_37629__$1);
var state_37654__$1 = (function (){var statearr_37676 = state_37654;
(statearr_37676[(21)] = inst_37630);

(statearr_37676[(20)] = inst_37629__$1);

return statearr_37676;
})();
if(cljs.core.truth_(inst_37631)){
var statearr_37677_37756 = state_37654__$1;
(statearr_37677_37756[(1)] = (41));

} else {
var statearr_37678_37757 = state_37654__$1;
(statearr_37678_37757[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (33))){
var state_37654__$1 = state_37654;
var statearr_37679_37758 = state_37654__$1;
(statearr_37679_37758[(2)] = false);

(statearr_37679_37758[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (13))){
var inst_37527 = (state_37654[(22)]);
var inst_37531 = cljs.core.chunk_first.call(null,inst_37527);
var inst_37532 = cljs.core.chunk_rest.call(null,inst_37527);
var inst_37533 = cljs.core.count.call(null,inst_37531);
var inst_37514 = inst_37532;
var inst_37515 = inst_37531;
var inst_37516 = inst_37533;
var inst_37517 = (0);
var state_37654__$1 = (function (){var statearr_37680 = state_37654;
(statearr_37680[(7)] = inst_37515);

(statearr_37680[(8)] = inst_37516);

(statearr_37680[(9)] = inst_37514);

(statearr_37680[(10)] = inst_37517);

return statearr_37680;
})();
var statearr_37681_37759 = state_37654__$1;
(statearr_37681_37759[(2)] = null);

(statearr_37681_37759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (22))){
var inst_37575 = (state_37654[(23)]);
var inst_37567 = (state_37654[(19)]);
var inst_37570 = (state_37654[(24)]);
var inst_37571 = (state_37654[(25)]);
var inst_37570__$1 = (state_37654[(2)]);
var inst_37571__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37570__$1);
var inst_37572 = (function (){var all_files = inst_37567;
var res_SINGLEQUOTE_ = inst_37570__$1;
var res = inst_37571__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37575,inst_37567,inst_37570,inst_37571,inst_37570__$1,inst_37571__$1,state_val_37655,c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37496_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37496_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37575,inst_37567,inst_37570,inst_37571,inst_37570__$1,inst_37571__$1,state_val_37655,c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37573 = cljs.core.filter.call(null,inst_37572,inst_37570__$1);
var inst_37574 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37575__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37574);
var inst_37576 = cljs.core.not_empty.call(null,inst_37575__$1);
var state_37654__$1 = (function (){var statearr_37682 = state_37654;
(statearr_37682[(23)] = inst_37575__$1);

(statearr_37682[(26)] = inst_37573);

(statearr_37682[(24)] = inst_37570__$1);

(statearr_37682[(25)] = inst_37571__$1);

return statearr_37682;
})();
if(cljs.core.truth_(inst_37576)){
var statearr_37683_37760 = state_37654__$1;
(statearr_37683_37760[(1)] = (23));

} else {
var statearr_37684_37761 = state_37654__$1;
(statearr_37684_37761[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (36))){
var state_37654__$1 = state_37654;
var statearr_37685_37762 = state_37654__$1;
(statearr_37685_37762[(2)] = false);

(statearr_37685_37762[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (41))){
var inst_37629 = (state_37654[(20)]);
var inst_37633 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37634 = cljs.core.map.call(null,inst_37633,inst_37629);
var inst_37635 = cljs.core.pr_str.call(null,inst_37634);
var inst_37636 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37635)].join('');
var inst_37637 = figwheel.client.utils.log.call(null,inst_37636);
var state_37654__$1 = state_37654;
var statearr_37686_37763 = state_37654__$1;
(statearr_37686_37763[(2)] = inst_37637);

(statearr_37686_37763[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (43))){
var inst_37630 = (state_37654[(21)]);
var inst_37640 = (state_37654[(2)]);
var inst_37641 = cljs.core.not_empty.call(null,inst_37630);
var state_37654__$1 = (function (){var statearr_37687 = state_37654;
(statearr_37687[(27)] = inst_37640);

return statearr_37687;
})();
if(cljs.core.truth_(inst_37641)){
var statearr_37688_37764 = state_37654__$1;
(statearr_37688_37764[(1)] = (44));

} else {
var statearr_37689_37765 = state_37654__$1;
(statearr_37689_37765[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (29))){
var inst_37575 = (state_37654[(23)]);
var inst_37607 = (state_37654[(16)]);
var inst_37567 = (state_37654[(19)]);
var inst_37573 = (state_37654[(26)]);
var inst_37570 = (state_37654[(24)]);
var inst_37571 = (state_37654[(25)]);
var inst_37603 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37606 = (function (){var all_files = inst_37567;
var res_SINGLEQUOTE_ = inst_37570;
var res = inst_37571;
var files_not_loaded = inst_37573;
var dependencies_that_loaded = inst_37575;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37575,inst_37607,inst_37567,inst_37573,inst_37570,inst_37571,inst_37603,state_val_37655,c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37605){
var map__37690 = p__37605;
var map__37690__$1 = ((((!((map__37690 == null)))?((((map__37690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37690):map__37690);
var namespace = cljs.core.get.call(null,map__37690__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37575,inst_37607,inst_37567,inst_37573,inst_37570,inst_37571,inst_37603,state_val_37655,c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37607__$1 = cljs.core.group_by.call(null,inst_37606,inst_37573);
var inst_37609 = (inst_37607__$1 == null);
var inst_37610 = cljs.core.not.call(null,inst_37609);
var state_37654__$1 = (function (){var statearr_37692 = state_37654;
(statearr_37692[(16)] = inst_37607__$1);

(statearr_37692[(28)] = inst_37603);

return statearr_37692;
})();
if(inst_37610){
var statearr_37693_37766 = state_37654__$1;
(statearr_37693_37766[(1)] = (32));

} else {
var statearr_37694_37767 = state_37654__$1;
(statearr_37694_37767[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (44))){
var inst_37630 = (state_37654[(21)]);
var inst_37643 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37630);
var inst_37644 = cljs.core.pr_str.call(null,inst_37643);
var inst_37645 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37644)].join('');
var inst_37646 = figwheel.client.utils.log.call(null,inst_37645);
var state_37654__$1 = state_37654;
var statearr_37695_37768 = state_37654__$1;
(statearr_37695_37768[(2)] = inst_37646);

(statearr_37695_37768[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (6))){
var inst_37548 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
var statearr_37696_37769 = state_37654__$1;
(statearr_37696_37769[(2)] = inst_37548);

(statearr_37696_37769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (28))){
var inst_37573 = (state_37654[(26)]);
var inst_37600 = (state_37654[(2)]);
var inst_37601 = cljs.core.not_empty.call(null,inst_37573);
var state_37654__$1 = (function (){var statearr_37697 = state_37654;
(statearr_37697[(29)] = inst_37600);

return statearr_37697;
})();
if(cljs.core.truth_(inst_37601)){
var statearr_37698_37770 = state_37654__$1;
(statearr_37698_37770[(1)] = (29));

} else {
var statearr_37699_37771 = state_37654__$1;
(statearr_37699_37771[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (25))){
var inst_37571 = (state_37654[(25)]);
var inst_37587 = (state_37654[(2)]);
var inst_37588 = cljs.core.not_empty.call(null,inst_37571);
var state_37654__$1 = (function (){var statearr_37700 = state_37654;
(statearr_37700[(30)] = inst_37587);

return statearr_37700;
})();
if(cljs.core.truth_(inst_37588)){
var statearr_37701_37772 = state_37654__$1;
(statearr_37701_37772[(1)] = (26));

} else {
var statearr_37702_37773 = state_37654__$1;
(statearr_37702_37773[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (34))){
var inst_37623 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
if(cljs.core.truth_(inst_37623)){
var statearr_37703_37774 = state_37654__$1;
(statearr_37703_37774[(1)] = (38));

} else {
var statearr_37704_37775 = state_37654__$1;
(statearr_37704_37775[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (17))){
var state_37654__$1 = state_37654;
var statearr_37705_37776 = state_37654__$1;
(statearr_37705_37776[(2)] = recompile_dependents);

(statearr_37705_37776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (3))){
var state_37654__$1 = state_37654;
var statearr_37706_37777 = state_37654__$1;
(statearr_37706_37777[(2)] = null);

(statearr_37706_37777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (12))){
var inst_37544 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
var statearr_37707_37778 = state_37654__$1;
(statearr_37707_37778[(2)] = inst_37544);

(statearr_37707_37778[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (2))){
var inst_37506 = (state_37654[(13)]);
var inst_37513 = cljs.core.seq.call(null,inst_37506);
var inst_37514 = inst_37513;
var inst_37515 = null;
var inst_37516 = (0);
var inst_37517 = (0);
var state_37654__$1 = (function (){var statearr_37708 = state_37654;
(statearr_37708[(7)] = inst_37515);

(statearr_37708[(8)] = inst_37516);

(statearr_37708[(9)] = inst_37514);

(statearr_37708[(10)] = inst_37517);

return statearr_37708;
})();
var statearr_37709_37779 = state_37654__$1;
(statearr_37709_37779[(2)] = null);

(statearr_37709_37779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (23))){
var inst_37575 = (state_37654[(23)]);
var inst_37567 = (state_37654[(19)]);
var inst_37573 = (state_37654[(26)]);
var inst_37570 = (state_37654[(24)]);
var inst_37571 = (state_37654[(25)]);
var inst_37578 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37580 = (function (){var all_files = inst_37567;
var res_SINGLEQUOTE_ = inst_37570;
var res = inst_37571;
var files_not_loaded = inst_37573;
var dependencies_that_loaded = inst_37575;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37575,inst_37567,inst_37573,inst_37570,inst_37571,inst_37578,state_val_37655,c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37579){
var map__37710 = p__37579;
var map__37710__$1 = ((((!((map__37710 == null)))?((((map__37710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37710):map__37710);
var request_url = cljs.core.get.call(null,map__37710__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37575,inst_37567,inst_37573,inst_37570,inst_37571,inst_37578,state_val_37655,c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37581 = cljs.core.reverse.call(null,inst_37575);
var inst_37582 = cljs.core.map.call(null,inst_37580,inst_37581);
var inst_37583 = cljs.core.pr_str.call(null,inst_37582);
var inst_37584 = figwheel.client.utils.log.call(null,inst_37583);
var state_37654__$1 = (function (){var statearr_37712 = state_37654;
(statearr_37712[(31)] = inst_37578);

return statearr_37712;
})();
var statearr_37713_37780 = state_37654__$1;
(statearr_37713_37780[(2)] = inst_37584);

(statearr_37713_37780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (35))){
var state_37654__$1 = state_37654;
var statearr_37714_37781 = state_37654__$1;
(statearr_37714_37781[(2)] = true);

(statearr_37714_37781[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (19))){
var inst_37557 = (state_37654[(12)]);
var inst_37563 = figwheel.client.file_reloading.expand_files.call(null,inst_37557);
var state_37654__$1 = state_37654;
var statearr_37715_37782 = state_37654__$1;
(statearr_37715_37782[(2)] = inst_37563);

(statearr_37715_37782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (11))){
var state_37654__$1 = state_37654;
var statearr_37716_37783 = state_37654__$1;
(statearr_37716_37783[(2)] = null);

(statearr_37716_37783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (9))){
var inst_37546 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
var statearr_37717_37784 = state_37654__$1;
(statearr_37717_37784[(2)] = inst_37546);

(statearr_37717_37784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (5))){
var inst_37516 = (state_37654[(8)]);
var inst_37517 = (state_37654[(10)]);
var inst_37519 = (inst_37517 < inst_37516);
var inst_37520 = inst_37519;
var state_37654__$1 = state_37654;
if(cljs.core.truth_(inst_37520)){
var statearr_37718_37785 = state_37654__$1;
(statearr_37718_37785[(1)] = (7));

} else {
var statearr_37719_37786 = state_37654__$1;
(statearr_37719_37786[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (14))){
var inst_37527 = (state_37654[(22)]);
var inst_37536 = cljs.core.first.call(null,inst_37527);
var inst_37537 = figwheel.client.file_reloading.eval_body.call(null,inst_37536,opts);
var inst_37538 = cljs.core.next.call(null,inst_37527);
var inst_37514 = inst_37538;
var inst_37515 = null;
var inst_37516 = (0);
var inst_37517 = (0);
var state_37654__$1 = (function (){var statearr_37720 = state_37654;
(statearr_37720[(7)] = inst_37515);

(statearr_37720[(32)] = inst_37537);

(statearr_37720[(8)] = inst_37516);

(statearr_37720[(9)] = inst_37514);

(statearr_37720[(10)] = inst_37517);

return statearr_37720;
})();
var statearr_37721_37787 = state_37654__$1;
(statearr_37721_37787[(2)] = null);

(statearr_37721_37787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (45))){
var state_37654__$1 = state_37654;
var statearr_37722_37788 = state_37654__$1;
(statearr_37722_37788[(2)] = null);

(statearr_37722_37788[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (26))){
var inst_37575 = (state_37654[(23)]);
var inst_37567 = (state_37654[(19)]);
var inst_37573 = (state_37654[(26)]);
var inst_37570 = (state_37654[(24)]);
var inst_37571 = (state_37654[(25)]);
var inst_37590 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37592 = (function (){var all_files = inst_37567;
var res_SINGLEQUOTE_ = inst_37570;
var res = inst_37571;
var files_not_loaded = inst_37573;
var dependencies_that_loaded = inst_37575;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37575,inst_37567,inst_37573,inst_37570,inst_37571,inst_37590,state_val_37655,c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37591){
var map__37723 = p__37591;
var map__37723__$1 = ((((!((map__37723 == null)))?((((map__37723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37723):map__37723);
var namespace = cljs.core.get.call(null,map__37723__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37723__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37575,inst_37567,inst_37573,inst_37570,inst_37571,inst_37590,state_val_37655,c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37593 = cljs.core.map.call(null,inst_37592,inst_37571);
var inst_37594 = cljs.core.pr_str.call(null,inst_37593);
var inst_37595 = figwheel.client.utils.log.call(null,inst_37594);
var inst_37596 = (function (){var all_files = inst_37567;
var res_SINGLEQUOTE_ = inst_37570;
var res = inst_37571;
var files_not_loaded = inst_37573;
var dependencies_that_loaded = inst_37575;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37575,inst_37567,inst_37573,inst_37570,inst_37571,inst_37590,inst_37592,inst_37593,inst_37594,inst_37595,state_val_37655,c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37575,inst_37567,inst_37573,inst_37570,inst_37571,inst_37590,inst_37592,inst_37593,inst_37594,inst_37595,state_val_37655,c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37597 = setTimeout(inst_37596,(10));
var state_37654__$1 = (function (){var statearr_37725 = state_37654;
(statearr_37725[(33)] = inst_37590);

(statearr_37725[(34)] = inst_37595);

return statearr_37725;
})();
var statearr_37726_37789 = state_37654__$1;
(statearr_37726_37789[(2)] = inst_37597);

(statearr_37726_37789[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (16))){
var state_37654__$1 = state_37654;
var statearr_37727_37790 = state_37654__$1;
(statearr_37727_37790[(2)] = reload_dependents);

(statearr_37727_37790[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (38))){
var inst_37607 = (state_37654[(16)]);
var inst_37625 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37607);
var state_37654__$1 = state_37654;
var statearr_37728_37791 = state_37654__$1;
(statearr_37728_37791[(2)] = inst_37625);

(statearr_37728_37791[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (30))){
var state_37654__$1 = state_37654;
var statearr_37729_37792 = state_37654__$1;
(statearr_37729_37792[(2)] = null);

(statearr_37729_37792[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (10))){
var inst_37527 = (state_37654[(22)]);
var inst_37529 = cljs.core.chunked_seq_QMARK_.call(null,inst_37527);
var state_37654__$1 = state_37654;
if(inst_37529){
var statearr_37730_37793 = state_37654__$1;
(statearr_37730_37793[(1)] = (13));

} else {
var statearr_37731_37794 = state_37654__$1;
(statearr_37731_37794[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (18))){
var inst_37561 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
if(cljs.core.truth_(inst_37561)){
var statearr_37732_37795 = state_37654__$1;
(statearr_37732_37795[(1)] = (19));

} else {
var statearr_37733_37796 = state_37654__$1;
(statearr_37733_37796[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (42))){
var state_37654__$1 = state_37654;
var statearr_37734_37797 = state_37654__$1;
(statearr_37734_37797[(2)] = null);

(statearr_37734_37797[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (37))){
var inst_37620 = (state_37654[(2)]);
var state_37654__$1 = state_37654;
var statearr_37735_37798 = state_37654__$1;
(statearr_37735_37798[(2)] = inst_37620);

(statearr_37735_37798[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37655 === (8))){
var inst_37527 = (state_37654[(22)]);
var inst_37514 = (state_37654[(9)]);
var inst_37527__$1 = cljs.core.seq.call(null,inst_37514);
var state_37654__$1 = (function (){var statearr_37736 = state_37654;
(statearr_37736[(22)] = inst_37527__$1);

return statearr_37736;
})();
if(inst_37527__$1){
var statearr_37737_37799 = state_37654__$1;
(statearr_37737_37799[(1)] = (10));

} else {
var statearr_37738_37800 = state_37654__$1;
(statearr_37738_37800[(1)] = (11));

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
});})(c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30536__auto__,c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____0 = (function (){
var statearr_37739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37739[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__);

(statearr_37739[(1)] = (1));

return statearr_37739;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____1 = (function (state_37654){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_37654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e37740){if((e37740 instanceof Object)){
var ex__30540__auto__ = e37740;
var statearr_37741_37801 = state_37654;
(statearr_37741_37801[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37802 = state_37654;
state_37654 = G__37802;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__ = function(state_37654){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____1.call(this,state_37654);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30626__auto__ = (function (){var statearr_37742 = f__30625__auto__.call(null);
(statearr_37742[(6)] = c__30624__auto__);

return statearr_37742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto__,map__37499,map__37499__$1,opts,before_jsload,on_jsload,reload_dependents,map__37500,map__37500__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30624__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37805,link){
var map__37806 = p__37805;
var map__37806__$1 = ((((!((map__37806 == null)))?((((map__37806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37806):map__37806);
var file = cljs.core.get.call(null,map__37806__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37806,map__37806__$1,file){
return (function (p1__37803_SHARP_,p2__37804_SHARP_){
if(cljs.core._EQ_.call(null,p1__37803_SHARP_,p2__37804_SHARP_)){
return p1__37803_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37806,map__37806__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37809){
var map__37810 = p__37809;
var map__37810__$1 = ((((!((map__37810 == null)))?((((map__37810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37810):map__37810);
var match_length = cljs.core.get.call(null,map__37810__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37810__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37808_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37808_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37812_SHARP_,p2__37813_SHARP_){
return cljs.core.assoc.call(null,p1__37812_SHARP_,cljs.core.get.call(null,p2__37813_SHARP_,key),p2__37813_SHARP_);
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
var loaded_f_datas_37814 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37814);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37814);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37815,p__37816){
var map__37817 = p__37815;
var map__37817__$1 = ((((!((map__37817 == null)))?((((map__37817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37817):map__37817);
var on_cssload = cljs.core.get.call(null,map__37817__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37818 = p__37816;
var map__37818__$1 = ((((!((map__37818 == null)))?((((map__37818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37818):map__37818);
var files_msg = map__37818__$1;
var files = cljs.core.get.call(null,map__37818__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1516093590482
