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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37190_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37190_SHARP_));
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
var seq__37191 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37192 = null;
var count__37193 = (0);
var i__37194 = (0);
while(true){
if((i__37194 < count__37193)){
var n = cljs.core._nth.call(null,chunk__37192,i__37194);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37195 = seq__37191;
var G__37196 = chunk__37192;
var G__37197 = count__37193;
var G__37198 = (i__37194 + (1));
seq__37191 = G__37195;
chunk__37192 = G__37196;
count__37193 = G__37197;
i__37194 = G__37198;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37191);
if(temp__4657__auto__){
var seq__37191__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37191__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37191__$1);
var G__37199 = cljs.core.chunk_rest.call(null,seq__37191__$1);
var G__37200 = c__28034__auto__;
var G__37201 = cljs.core.count.call(null,c__28034__auto__);
var G__37202 = (0);
seq__37191 = G__37199;
chunk__37192 = G__37200;
count__37193 = G__37201;
i__37194 = G__37202;
continue;
} else {
var n = cljs.core.first.call(null,seq__37191__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37203 = cljs.core.next.call(null,seq__37191__$1);
var G__37204 = null;
var G__37205 = (0);
var G__37206 = (0);
seq__37191 = G__37203;
chunk__37192 = G__37204;
count__37193 = G__37205;
i__37194 = G__37206;
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

var seq__37216_37224 = cljs.core.seq.call(null,deps);
var chunk__37217_37225 = null;
var count__37218_37226 = (0);
var i__37219_37227 = (0);
while(true){
if((i__37219_37227 < count__37218_37226)){
var dep_37228 = cljs.core._nth.call(null,chunk__37217_37225,i__37219_37227);
topo_sort_helper_STAR_.call(null,dep_37228,(depth + (1)),state);

var G__37229 = seq__37216_37224;
var G__37230 = chunk__37217_37225;
var G__37231 = count__37218_37226;
var G__37232 = (i__37219_37227 + (1));
seq__37216_37224 = G__37229;
chunk__37217_37225 = G__37230;
count__37218_37226 = G__37231;
i__37219_37227 = G__37232;
continue;
} else {
var temp__4657__auto___37233 = cljs.core.seq.call(null,seq__37216_37224);
if(temp__4657__auto___37233){
var seq__37216_37234__$1 = temp__4657__auto___37233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37216_37234__$1)){
var c__28034__auto___37235 = cljs.core.chunk_first.call(null,seq__37216_37234__$1);
var G__37236 = cljs.core.chunk_rest.call(null,seq__37216_37234__$1);
var G__37237 = c__28034__auto___37235;
var G__37238 = cljs.core.count.call(null,c__28034__auto___37235);
var G__37239 = (0);
seq__37216_37224 = G__37236;
chunk__37217_37225 = G__37237;
count__37218_37226 = G__37238;
i__37219_37227 = G__37239;
continue;
} else {
var dep_37240 = cljs.core.first.call(null,seq__37216_37234__$1);
topo_sort_helper_STAR_.call(null,dep_37240,(depth + (1)),state);

var G__37241 = cljs.core.next.call(null,seq__37216_37234__$1);
var G__37242 = null;
var G__37243 = (0);
var G__37244 = (0);
seq__37216_37224 = G__37241;
chunk__37217_37225 = G__37242;
count__37218_37226 = G__37243;
i__37219_37227 = G__37244;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37220){
var vec__37221 = p__37220;
var seq__37222 = cljs.core.seq.call(null,vec__37221);
var first__37223 = cljs.core.first.call(null,seq__37222);
var seq__37222__$1 = cljs.core.next.call(null,seq__37222);
var x = first__37223;
var xs = seq__37222__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37221,seq__37222,first__37223,seq__37222__$1,x,xs,get_deps__$1){
return (function (p1__37207_SHARP_){
return clojure.set.difference.call(null,p1__37207_SHARP_,x);
});})(vec__37221,seq__37222,first__37223,seq__37222__$1,x,xs,get_deps__$1))
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
var seq__37245 = cljs.core.seq.call(null,provides);
var chunk__37246 = null;
var count__37247 = (0);
var i__37248 = (0);
while(true){
if((i__37248 < count__37247)){
var prov = cljs.core._nth.call(null,chunk__37246,i__37248);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37249_37257 = cljs.core.seq.call(null,requires);
var chunk__37250_37258 = null;
var count__37251_37259 = (0);
var i__37252_37260 = (0);
while(true){
if((i__37252_37260 < count__37251_37259)){
var req_37261 = cljs.core._nth.call(null,chunk__37250_37258,i__37252_37260);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37261,prov);

var G__37262 = seq__37249_37257;
var G__37263 = chunk__37250_37258;
var G__37264 = count__37251_37259;
var G__37265 = (i__37252_37260 + (1));
seq__37249_37257 = G__37262;
chunk__37250_37258 = G__37263;
count__37251_37259 = G__37264;
i__37252_37260 = G__37265;
continue;
} else {
var temp__4657__auto___37266 = cljs.core.seq.call(null,seq__37249_37257);
if(temp__4657__auto___37266){
var seq__37249_37267__$1 = temp__4657__auto___37266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37249_37267__$1)){
var c__28034__auto___37268 = cljs.core.chunk_first.call(null,seq__37249_37267__$1);
var G__37269 = cljs.core.chunk_rest.call(null,seq__37249_37267__$1);
var G__37270 = c__28034__auto___37268;
var G__37271 = cljs.core.count.call(null,c__28034__auto___37268);
var G__37272 = (0);
seq__37249_37257 = G__37269;
chunk__37250_37258 = G__37270;
count__37251_37259 = G__37271;
i__37252_37260 = G__37272;
continue;
} else {
var req_37273 = cljs.core.first.call(null,seq__37249_37267__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37273,prov);

var G__37274 = cljs.core.next.call(null,seq__37249_37267__$1);
var G__37275 = null;
var G__37276 = (0);
var G__37277 = (0);
seq__37249_37257 = G__37274;
chunk__37250_37258 = G__37275;
count__37251_37259 = G__37276;
i__37252_37260 = G__37277;
continue;
}
} else {
}
}
break;
}

var G__37278 = seq__37245;
var G__37279 = chunk__37246;
var G__37280 = count__37247;
var G__37281 = (i__37248 + (1));
seq__37245 = G__37278;
chunk__37246 = G__37279;
count__37247 = G__37280;
i__37248 = G__37281;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37245);
if(temp__4657__auto__){
var seq__37245__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37245__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37245__$1);
var G__37282 = cljs.core.chunk_rest.call(null,seq__37245__$1);
var G__37283 = c__28034__auto__;
var G__37284 = cljs.core.count.call(null,c__28034__auto__);
var G__37285 = (0);
seq__37245 = G__37282;
chunk__37246 = G__37283;
count__37247 = G__37284;
i__37248 = G__37285;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37245__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37253_37286 = cljs.core.seq.call(null,requires);
var chunk__37254_37287 = null;
var count__37255_37288 = (0);
var i__37256_37289 = (0);
while(true){
if((i__37256_37289 < count__37255_37288)){
var req_37290 = cljs.core._nth.call(null,chunk__37254_37287,i__37256_37289);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37290,prov);

var G__37291 = seq__37253_37286;
var G__37292 = chunk__37254_37287;
var G__37293 = count__37255_37288;
var G__37294 = (i__37256_37289 + (1));
seq__37253_37286 = G__37291;
chunk__37254_37287 = G__37292;
count__37255_37288 = G__37293;
i__37256_37289 = G__37294;
continue;
} else {
var temp__4657__auto___37295__$1 = cljs.core.seq.call(null,seq__37253_37286);
if(temp__4657__auto___37295__$1){
var seq__37253_37296__$1 = temp__4657__auto___37295__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37253_37296__$1)){
var c__28034__auto___37297 = cljs.core.chunk_first.call(null,seq__37253_37296__$1);
var G__37298 = cljs.core.chunk_rest.call(null,seq__37253_37296__$1);
var G__37299 = c__28034__auto___37297;
var G__37300 = cljs.core.count.call(null,c__28034__auto___37297);
var G__37301 = (0);
seq__37253_37286 = G__37298;
chunk__37254_37287 = G__37299;
count__37255_37288 = G__37300;
i__37256_37289 = G__37301;
continue;
} else {
var req_37302 = cljs.core.first.call(null,seq__37253_37296__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37302,prov);

var G__37303 = cljs.core.next.call(null,seq__37253_37296__$1);
var G__37304 = null;
var G__37305 = (0);
var G__37306 = (0);
seq__37253_37286 = G__37303;
chunk__37254_37287 = G__37304;
count__37255_37288 = G__37305;
i__37256_37289 = G__37306;
continue;
}
} else {
}
}
break;
}

var G__37307 = cljs.core.next.call(null,seq__37245__$1);
var G__37308 = null;
var G__37309 = (0);
var G__37310 = (0);
seq__37245 = G__37307;
chunk__37246 = G__37308;
count__37247 = G__37309;
i__37248 = G__37310;
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
var seq__37311_37315 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37312_37316 = null;
var count__37313_37317 = (0);
var i__37314_37318 = (0);
while(true){
if((i__37314_37318 < count__37313_37317)){
var ns_37319 = cljs.core._nth.call(null,chunk__37312_37316,i__37314_37318);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37319);

var G__37320 = seq__37311_37315;
var G__37321 = chunk__37312_37316;
var G__37322 = count__37313_37317;
var G__37323 = (i__37314_37318 + (1));
seq__37311_37315 = G__37320;
chunk__37312_37316 = G__37321;
count__37313_37317 = G__37322;
i__37314_37318 = G__37323;
continue;
} else {
var temp__4657__auto___37324 = cljs.core.seq.call(null,seq__37311_37315);
if(temp__4657__auto___37324){
var seq__37311_37325__$1 = temp__4657__auto___37324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37311_37325__$1)){
var c__28034__auto___37326 = cljs.core.chunk_first.call(null,seq__37311_37325__$1);
var G__37327 = cljs.core.chunk_rest.call(null,seq__37311_37325__$1);
var G__37328 = c__28034__auto___37326;
var G__37329 = cljs.core.count.call(null,c__28034__auto___37326);
var G__37330 = (0);
seq__37311_37315 = G__37327;
chunk__37312_37316 = G__37328;
count__37313_37317 = G__37329;
i__37314_37318 = G__37330;
continue;
} else {
var ns_37331 = cljs.core.first.call(null,seq__37311_37325__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37331);

var G__37332 = cljs.core.next.call(null,seq__37311_37325__$1);
var G__37333 = null;
var G__37334 = (0);
var G__37335 = (0);
seq__37311_37315 = G__37332;
chunk__37312_37316 = G__37333;
count__37313_37317 = G__37334;
i__37314_37318 = G__37335;
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
var G__37336__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37337__i = 0, G__37337__a = new Array(arguments.length -  0);
while (G__37337__i < G__37337__a.length) {G__37337__a[G__37337__i] = arguments[G__37337__i + 0]; ++G__37337__i;}
  args = new cljs.core.IndexedSeq(G__37337__a,0,null);
} 
return G__37336__delegate.call(this,args);};
G__37336.cljs$lang$maxFixedArity = 0;
G__37336.cljs$lang$applyTo = (function (arglist__37338){
var args = cljs.core.seq(arglist__37338);
return G__37336__delegate(args);
});
G__37336.cljs$core$IFn$_invoke$arity$variadic = G__37336__delegate;
return G__37336;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37339_SHARP_,p2__37340_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37339_SHARP_)].join('')),p2__37340_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37341_SHARP_,p2__37342_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37341_SHARP_)].join(''),p2__37342_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37343 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37343.addCallback(((function (G__37343){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37343))
);

G__37343.addErrback(((function (G__37343){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37343))
);

return G__37343;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37344 = cljs.core._EQ_;
var expr__37345 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37344.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37345))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37344,expr__37345){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37344,expr__37345))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37344,expr__37345){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37347){if((e37347 instanceof Error)){
var e = e37347;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37347;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37344,expr__37345))
} else {
if(cljs.core.truth_(pred__37344.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37345))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37344.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37345))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37344.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37345))){
return ((function (pred__37344,expr__37345){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37348){if((e37348 instanceof Error)){
var e = e37348;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37348;

}
}})());
});
;})(pred__37344,expr__37345))
} else {
return ((function (pred__37344,expr__37345){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37344,expr__37345))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37349,callback){
var map__37350 = p__37349;
var map__37350__$1 = ((((!((map__37350 == null)))?((((map__37350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37350):map__37350);
var file_msg = map__37350__$1;
var request_url = cljs.core.get.call(null,map__37350__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37350,map__37350__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37350,map__37350__$1,file_msg,request_url))
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
return (function (state_37374){
var state_val_37375 = (state_37374[(1)]);
if((state_val_37375 === (7))){
var inst_37370 = (state_37374[(2)]);
var state_37374__$1 = state_37374;
var statearr_37376_37393 = state_37374__$1;
(statearr_37376_37393[(2)] = inst_37370);

(statearr_37376_37393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37375 === (1))){
var state_37374__$1 = state_37374;
var statearr_37377_37394 = state_37374__$1;
(statearr_37377_37394[(2)] = null);

(statearr_37377_37394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37375 === (4))){
var inst_37354 = (state_37374[(7)]);
var inst_37354__$1 = (state_37374[(2)]);
var state_37374__$1 = (function (){var statearr_37378 = state_37374;
(statearr_37378[(7)] = inst_37354__$1);

return statearr_37378;
})();
if(cljs.core.truth_(inst_37354__$1)){
var statearr_37379_37395 = state_37374__$1;
(statearr_37379_37395[(1)] = (5));

} else {
var statearr_37380_37396 = state_37374__$1;
(statearr_37380_37396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37375 === (6))){
var state_37374__$1 = state_37374;
var statearr_37381_37397 = state_37374__$1;
(statearr_37381_37397[(2)] = null);

(statearr_37381_37397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37375 === (3))){
var inst_37372 = (state_37374[(2)]);
var state_37374__$1 = state_37374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37374__$1,inst_37372);
} else {
if((state_val_37375 === (2))){
var state_37374__$1 = state_37374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37374__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37375 === (11))){
var inst_37366 = (state_37374[(2)]);
var state_37374__$1 = (function (){var statearr_37382 = state_37374;
(statearr_37382[(8)] = inst_37366);

return statearr_37382;
})();
var statearr_37383_37398 = state_37374__$1;
(statearr_37383_37398[(2)] = null);

(statearr_37383_37398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37375 === (9))){
var inst_37358 = (state_37374[(9)]);
var inst_37360 = (state_37374[(10)]);
var inst_37362 = inst_37360.call(null,inst_37358);
var state_37374__$1 = state_37374;
var statearr_37384_37399 = state_37374__$1;
(statearr_37384_37399[(2)] = inst_37362);

(statearr_37384_37399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37375 === (5))){
var inst_37354 = (state_37374[(7)]);
var inst_37356 = figwheel.client.file_reloading.blocking_load.call(null,inst_37354);
var state_37374__$1 = state_37374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37374__$1,(8),inst_37356);
} else {
if((state_val_37375 === (10))){
var inst_37358 = (state_37374[(9)]);
var inst_37364 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37358);
var state_37374__$1 = state_37374;
var statearr_37385_37400 = state_37374__$1;
(statearr_37385_37400[(2)] = inst_37364);

(statearr_37385_37400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37375 === (8))){
var inst_37354 = (state_37374[(7)]);
var inst_37360 = (state_37374[(10)]);
var inst_37358 = (state_37374[(2)]);
var inst_37359 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37360__$1 = cljs.core.get.call(null,inst_37359,inst_37354);
var state_37374__$1 = (function (){var statearr_37386 = state_37374;
(statearr_37386[(9)] = inst_37358);

(statearr_37386[(10)] = inst_37360__$1);

return statearr_37386;
})();
if(cljs.core.truth_(inst_37360__$1)){
var statearr_37387_37401 = state_37374__$1;
(statearr_37387_37401[(1)] = (9));

} else {
var statearr_37388_37402 = state_37374__$1;
(statearr_37388_37402[(1)] = (10));

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
var statearr_37389 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37389[(0)] = figwheel$client$file_reloading$state_machine__30537__auto__);

(statearr_37389[(1)] = (1));

return statearr_37389;
});
var figwheel$client$file_reloading$state_machine__30537__auto____1 = (function (state_37374){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_37374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e37390){if((e37390 instanceof Object)){
var ex__30540__auto__ = e37390;
var statearr_37391_37403 = state_37374;
(statearr_37391_37403[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37404 = state_37374;
state_37374 = G__37404;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30537__auto__ = function(state_37374){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30537__auto____1.call(this,state_37374);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30537__auto____0;
figwheel$client$file_reloading$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30537__auto____1;
return figwheel$client$file_reloading$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_37392 = f__30625__auto__.call(null);
(statearr_37392[(6)] = c__30624__auto__);

return statearr_37392;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37405,callback){
var map__37406 = p__37405;
var map__37406__$1 = ((((!((map__37406 == null)))?((((map__37406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37406):map__37406);
var file_msg = map__37406__$1;
var namespace = cljs.core.get.call(null,map__37406__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37406,map__37406__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37406,map__37406__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37408){
var map__37409 = p__37408;
var map__37409__$1 = ((((!((map__37409 == null)))?((((map__37409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37409):map__37409);
var file_msg = map__37409__$1;
var namespace = cljs.core.get.call(null,map__37409__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37411){
var map__37412 = p__37411;
var map__37412__$1 = ((((!((map__37412 == null)))?((((map__37412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37412):map__37412);
var file_msg = map__37412__$1;
var namespace = cljs.core.get.call(null,map__37412__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37414,callback){
var map__37415 = p__37414;
var map__37415__$1 = ((((!((map__37415 == null)))?((((map__37415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37415):map__37415);
var file_msg = map__37415__$1;
var request_url = cljs.core.get.call(null,map__37415__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37415__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30624__auto___37465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___37465,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___37465,out){
return (function (state_37450){
var state_val_37451 = (state_37450[(1)]);
if((state_val_37451 === (1))){
var inst_37424 = cljs.core.seq.call(null,files);
var inst_37425 = cljs.core.first.call(null,inst_37424);
var inst_37426 = cljs.core.next.call(null,inst_37424);
var inst_37427 = files;
var state_37450__$1 = (function (){var statearr_37452 = state_37450;
(statearr_37452[(7)] = inst_37427);

(statearr_37452[(8)] = inst_37426);

(statearr_37452[(9)] = inst_37425);

return statearr_37452;
})();
var statearr_37453_37466 = state_37450__$1;
(statearr_37453_37466[(2)] = null);

(statearr_37453_37466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37451 === (2))){
var inst_37427 = (state_37450[(7)]);
var inst_37433 = (state_37450[(10)]);
var inst_37432 = cljs.core.seq.call(null,inst_37427);
var inst_37433__$1 = cljs.core.first.call(null,inst_37432);
var inst_37434 = cljs.core.next.call(null,inst_37432);
var inst_37435 = (inst_37433__$1 == null);
var inst_37436 = cljs.core.not.call(null,inst_37435);
var state_37450__$1 = (function (){var statearr_37454 = state_37450;
(statearr_37454[(11)] = inst_37434);

(statearr_37454[(10)] = inst_37433__$1);

return statearr_37454;
})();
if(inst_37436){
var statearr_37455_37467 = state_37450__$1;
(statearr_37455_37467[(1)] = (4));

} else {
var statearr_37456_37468 = state_37450__$1;
(statearr_37456_37468[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37451 === (3))){
var inst_37448 = (state_37450[(2)]);
var state_37450__$1 = state_37450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37450__$1,inst_37448);
} else {
if((state_val_37451 === (4))){
var inst_37433 = (state_37450[(10)]);
var inst_37438 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37433);
var state_37450__$1 = state_37450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37450__$1,(7),inst_37438);
} else {
if((state_val_37451 === (5))){
var inst_37444 = cljs.core.async.close_BANG_.call(null,out);
var state_37450__$1 = state_37450;
var statearr_37457_37469 = state_37450__$1;
(statearr_37457_37469[(2)] = inst_37444);

(statearr_37457_37469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37451 === (6))){
var inst_37446 = (state_37450[(2)]);
var state_37450__$1 = state_37450;
var statearr_37458_37470 = state_37450__$1;
(statearr_37458_37470[(2)] = inst_37446);

(statearr_37458_37470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37451 === (7))){
var inst_37434 = (state_37450[(11)]);
var inst_37440 = (state_37450[(2)]);
var inst_37441 = cljs.core.async.put_BANG_.call(null,out,inst_37440);
var inst_37427 = inst_37434;
var state_37450__$1 = (function (){var statearr_37459 = state_37450;
(statearr_37459[(12)] = inst_37441);

(statearr_37459[(7)] = inst_37427);

return statearr_37459;
})();
var statearr_37460_37471 = state_37450__$1;
(statearr_37460_37471[(2)] = null);

(statearr_37460_37471[(1)] = (2));


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
});})(c__30624__auto___37465,out))
;
return ((function (switch__30536__auto__,c__30624__auto___37465,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____0 = (function (){
var statearr_37461 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37461[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__);

(statearr_37461[(1)] = (1));

return statearr_37461;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____1 = (function (state_37450){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_37450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e37462){if((e37462 instanceof Object)){
var ex__30540__auto__ = e37462;
var statearr_37463_37472 = state_37450;
(statearr_37463_37472[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37473 = state_37450;
state_37450 = G__37473;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__ = function(state_37450){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____1.call(this,state_37450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___37465,out))
})();
var state__30626__auto__ = (function (){var statearr_37464 = f__30625__auto__.call(null);
(statearr_37464[(6)] = c__30624__auto___37465);

return statearr_37464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___37465,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37474,opts){
var map__37475 = p__37474;
var map__37475__$1 = ((((!((map__37475 == null)))?((((map__37475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37475):map__37475);
var eval_body = cljs.core.get.call(null,map__37475__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37475__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37477){var e = e37477;
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
return (function (p1__37478_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37478_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37479){
var vec__37480 = p__37479;
var k = cljs.core.nth.call(null,vec__37480,(0),null);
var v = cljs.core.nth.call(null,vec__37480,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37483){
var vec__37484 = p__37483;
var k = cljs.core.nth.call(null,vec__37484,(0),null);
var v = cljs.core.nth.call(null,vec__37484,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37490,p__37491){
var map__37492 = p__37490;
var map__37492__$1 = ((((!((map__37492 == null)))?((((map__37492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37492):map__37492);
var opts = map__37492__$1;
var before_jsload = cljs.core.get.call(null,map__37492__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37492__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37492__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37493 = p__37491;
var map__37493__$1 = ((((!((map__37493 == null)))?((((map__37493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37493):map__37493);
var msg = map__37493__$1;
var files = cljs.core.get.call(null,map__37493__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37493__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37493__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37647){
var state_val_37648 = (state_37647[(1)]);
if((state_val_37648 === (7))){
var inst_37507 = (state_37647[(7)]);
var inst_37508 = (state_37647[(8)]);
var inst_37510 = (state_37647[(9)]);
var inst_37509 = (state_37647[(10)]);
var inst_37515 = cljs.core._nth.call(null,inst_37508,inst_37510);
var inst_37516 = figwheel.client.file_reloading.eval_body.call(null,inst_37515,opts);
var inst_37517 = (inst_37510 + (1));
var tmp37649 = inst_37507;
var tmp37650 = inst_37508;
var tmp37651 = inst_37509;
var inst_37507__$1 = tmp37649;
var inst_37508__$1 = tmp37650;
var inst_37509__$1 = tmp37651;
var inst_37510__$1 = inst_37517;
var state_37647__$1 = (function (){var statearr_37652 = state_37647;
(statearr_37652[(7)] = inst_37507__$1);

(statearr_37652[(11)] = inst_37516);

(statearr_37652[(8)] = inst_37508__$1);

(statearr_37652[(9)] = inst_37510__$1);

(statearr_37652[(10)] = inst_37509__$1);

return statearr_37652;
})();
var statearr_37653_37736 = state_37647__$1;
(statearr_37653_37736[(2)] = null);

(statearr_37653_37736[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (20))){
var inst_37550 = (state_37647[(12)]);
var inst_37558 = figwheel.client.file_reloading.sort_files.call(null,inst_37550);
var state_37647__$1 = state_37647;
var statearr_37654_37737 = state_37647__$1;
(statearr_37654_37737[(2)] = inst_37558);

(statearr_37654_37737[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (27))){
var state_37647__$1 = state_37647;
var statearr_37655_37738 = state_37647__$1;
(statearr_37655_37738[(2)] = null);

(statearr_37655_37738[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (1))){
var inst_37499 = (state_37647[(13)]);
var inst_37496 = before_jsload.call(null,files);
var inst_37497 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37498 = (function (){return ((function (inst_37499,inst_37496,inst_37497,state_val_37648,c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37487_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37487_SHARP_);
});
;})(inst_37499,inst_37496,inst_37497,state_val_37648,c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37499__$1 = cljs.core.filter.call(null,inst_37498,files);
var inst_37500 = cljs.core.not_empty.call(null,inst_37499__$1);
var state_37647__$1 = (function (){var statearr_37656 = state_37647;
(statearr_37656[(14)] = inst_37497);

(statearr_37656[(15)] = inst_37496);

(statearr_37656[(13)] = inst_37499__$1);

return statearr_37656;
})();
if(cljs.core.truth_(inst_37500)){
var statearr_37657_37739 = state_37647__$1;
(statearr_37657_37739[(1)] = (2));

} else {
var statearr_37658_37740 = state_37647__$1;
(statearr_37658_37740[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (24))){
var state_37647__$1 = state_37647;
var statearr_37659_37741 = state_37647__$1;
(statearr_37659_37741[(2)] = null);

(statearr_37659_37741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (39))){
var inst_37600 = (state_37647[(16)]);
var state_37647__$1 = state_37647;
var statearr_37660_37742 = state_37647__$1;
(statearr_37660_37742[(2)] = inst_37600);

(statearr_37660_37742[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (46))){
var inst_37642 = (state_37647[(2)]);
var state_37647__$1 = state_37647;
var statearr_37661_37743 = state_37647__$1;
(statearr_37661_37743[(2)] = inst_37642);

(statearr_37661_37743[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (4))){
var inst_37544 = (state_37647[(2)]);
var inst_37545 = cljs.core.List.EMPTY;
var inst_37546 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37545);
var inst_37547 = (function (){return ((function (inst_37544,inst_37545,inst_37546,state_val_37648,c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37488_SHARP_){
var and__27183__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37488_SHARP_);
if(cljs.core.truth_(and__27183__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37488_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37488_SHARP_)));
} else {
return and__27183__auto__;
}
});
;})(inst_37544,inst_37545,inst_37546,state_val_37648,c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37548 = cljs.core.filter.call(null,inst_37547,files);
var inst_37549 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37550 = cljs.core.concat.call(null,inst_37548,inst_37549);
var state_37647__$1 = (function (){var statearr_37662 = state_37647;
(statearr_37662[(17)] = inst_37544);

(statearr_37662[(18)] = inst_37546);

(statearr_37662[(12)] = inst_37550);

return statearr_37662;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37663_37744 = state_37647__$1;
(statearr_37663_37744[(1)] = (16));

} else {
var statearr_37664_37745 = state_37647__$1;
(statearr_37664_37745[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (15))){
var inst_37534 = (state_37647[(2)]);
var state_37647__$1 = state_37647;
var statearr_37665_37746 = state_37647__$1;
(statearr_37665_37746[(2)] = inst_37534);

(statearr_37665_37746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (21))){
var inst_37560 = (state_37647[(19)]);
var inst_37560__$1 = (state_37647[(2)]);
var inst_37561 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37560__$1);
var state_37647__$1 = (function (){var statearr_37666 = state_37647;
(statearr_37666[(19)] = inst_37560__$1);

return statearr_37666;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37647__$1,(22),inst_37561);
} else {
if((state_val_37648 === (31))){
var inst_37645 = (state_37647[(2)]);
var state_37647__$1 = state_37647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37647__$1,inst_37645);
} else {
if((state_val_37648 === (32))){
var inst_37600 = (state_37647[(16)]);
var inst_37605 = inst_37600.cljs$lang$protocol_mask$partition0$;
var inst_37606 = (inst_37605 & (64));
var inst_37607 = inst_37600.cljs$core$ISeq$;
var inst_37608 = (cljs.core.PROTOCOL_SENTINEL === inst_37607);
var inst_37609 = (inst_37606) || (inst_37608);
var state_37647__$1 = state_37647;
if(cljs.core.truth_(inst_37609)){
var statearr_37667_37747 = state_37647__$1;
(statearr_37667_37747[(1)] = (35));

} else {
var statearr_37668_37748 = state_37647__$1;
(statearr_37668_37748[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (40))){
var inst_37622 = (state_37647[(20)]);
var inst_37621 = (state_37647[(2)]);
var inst_37622__$1 = cljs.core.get.call(null,inst_37621,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37623 = cljs.core.get.call(null,inst_37621,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37624 = cljs.core.not_empty.call(null,inst_37622__$1);
var state_37647__$1 = (function (){var statearr_37669 = state_37647;
(statearr_37669[(20)] = inst_37622__$1);

(statearr_37669[(21)] = inst_37623);

return statearr_37669;
})();
if(cljs.core.truth_(inst_37624)){
var statearr_37670_37749 = state_37647__$1;
(statearr_37670_37749[(1)] = (41));

} else {
var statearr_37671_37750 = state_37647__$1;
(statearr_37671_37750[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (33))){
var state_37647__$1 = state_37647;
var statearr_37672_37751 = state_37647__$1;
(statearr_37672_37751[(2)] = false);

(statearr_37672_37751[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (13))){
var inst_37520 = (state_37647[(22)]);
var inst_37524 = cljs.core.chunk_first.call(null,inst_37520);
var inst_37525 = cljs.core.chunk_rest.call(null,inst_37520);
var inst_37526 = cljs.core.count.call(null,inst_37524);
var inst_37507 = inst_37525;
var inst_37508 = inst_37524;
var inst_37509 = inst_37526;
var inst_37510 = (0);
var state_37647__$1 = (function (){var statearr_37673 = state_37647;
(statearr_37673[(7)] = inst_37507);

(statearr_37673[(8)] = inst_37508);

(statearr_37673[(9)] = inst_37510);

(statearr_37673[(10)] = inst_37509);

return statearr_37673;
})();
var statearr_37674_37752 = state_37647__$1;
(statearr_37674_37752[(2)] = null);

(statearr_37674_37752[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (22))){
var inst_37564 = (state_37647[(23)]);
var inst_37563 = (state_37647[(24)]);
var inst_37560 = (state_37647[(19)]);
var inst_37568 = (state_37647[(25)]);
var inst_37563__$1 = (state_37647[(2)]);
var inst_37564__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37563__$1);
var inst_37565 = (function (){var all_files = inst_37560;
var res_SINGLEQUOTE_ = inst_37563__$1;
var res = inst_37564__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37564,inst_37563,inst_37560,inst_37568,inst_37563__$1,inst_37564__$1,state_val_37648,c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37489_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37489_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37564,inst_37563,inst_37560,inst_37568,inst_37563__$1,inst_37564__$1,state_val_37648,c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37566 = cljs.core.filter.call(null,inst_37565,inst_37563__$1);
var inst_37567 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37568__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37567);
var inst_37569 = cljs.core.not_empty.call(null,inst_37568__$1);
var state_37647__$1 = (function (){var statearr_37675 = state_37647;
(statearr_37675[(23)] = inst_37564__$1);

(statearr_37675[(24)] = inst_37563__$1);

(statearr_37675[(26)] = inst_37566);

(statearr_37675[(25)] = inst_37568__$1);

return statearr_37675;
})();
if(cljs.core.truth_(inst_37569)){
var statearr_37676_37753 = state_37647__$1;
(statearr_37676_37753[(1)] = (23));

} else {
var statearr_37677_37754 = state_37647__$1;
(statearr_37677_37754[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (36))){
var state_37647__$1 = state_37647;
var statearr_37678_37755 = state_37647__$1;
(statearr_37678_37755[(2)] = false);

(statearr_37678_37755[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (41))){
var inst_37622 = (state_37647[(20)]);
var inst_37626 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37627 = cljs.core.map.call(null,inst_37626,inst_37622);
var inst_37628 = cljs.core.pr_str.call(null,inst_37627);
var inst_37629 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37628)].join('');
var inst_37630 = figwheel.client.utils.log.call(null,inst_37629);
var state_37647__$1 = state_37647;
var statearr_37679_37756 = state_37647__$1;
(statearr_37679_37756[(2)] = inst_37630);

(statearr_37679_37756[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (43))){
var inst_37623 = (state_37647[(21)]);
var inst_37633 = (state_37647[(2)]);
var inst_37634 = cljs.core.not_empty.call(null,inst_37623);
var state_37647__$1 = (function (){var statearr_37680 = state_37647;
(statearr_37680[(27)] = inst_37633);

return statearr_37680;
})();
if(cljs.core.truth_(inst_37634)){
var statearr_37681_37757 = state_37647__$1;
(statearr_37681_37757[(1)] = (44));

} else {
var statearr_37682_37758 = state_37647__$1;
(statearr_37682_37758[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (29))){
var inst_37564 = (state_37647[(23)]);
var inst_37563 = (state_37647[(24)]);
var inst_37560 = (state_37647[(19)]);
var inst_37566 = (state_37647[(26)]);
var inst_37568 = (state_37647[(25)]);
var inst_37600 = (state_37647[(16)]);
var inst_37596 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37599 = (function (){var all_files = inst_37560;
var res_SINGLEQUOTE_ = inst_37563;
var res = inst_37564;
var files_not_loaded = inst_37566;
var dependencies_that_loaded = inst_37568;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37564,inst_37563,inst_37560,inst_37566,inst_37568,inst_37600,inst_37596,state_val_37648,c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37598){
var map__37683 = p__37598;
var map__37683__$1 = ((((!((map__37683 == null)))?((((map__37683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37683):map__37683);
var namespace = cljs.core.get.call(null,map__37683__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37564,inst_37563,inst_37560,inst_37566,inst_37568,inst_37600,inst_37596,state_val_37648,c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37600__$1 = cljs.core.group_by.call(null,inst_37599,inst_37566);
var inst_37602 = (inst_37600__$1 == null);
var inst_37603 = cljs.core.not.call(null,inst_37602);
var state_37647__$1 = (function (){var statearr_37685 = state_37647;
(statearr_37685[(28)] = inst_37596);

(statearr_37685[(16)] = inst_37600__$1);

return statearr_37685;
})();
if(inst_37603){
var statearr_37686_37759 = state_37647__$1;
(statearr_37686_37759[(1)] = (32));

} else {
var statearr_37687_37760 = state_37647__$1;
(statearr_37687_37760[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (44))){
var inst_37623 = (state_37647[(21)]);
var inst_37636 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37623);
var inst_37637 = cljs.core.pr_str.call(null,inst_37636);
var inst_37638 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37637)].join('');
var inst_37639 = figwheel.client.utils.log.call(null,inst_37638);
var state_37647__$1 = state_37647;
var statearr_37688_37761 = state_37647__$1;
(statearr_37688_37761[(2)] = inst_37639);

(statearr_37688_37761[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (6))){
var inst_37541 = (state_37647[(2)]);
var state_37647__$1 = state_37647;
var statearr_37689_37762 = state_37647__$1;
(statearr_37689_37762[(2)] = inst_37541);

(statearr_37689_37762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (28))){
var inst_37566 = (state_37647[(26)]);
var inst_37593 = (state_37647[(2)]);
var inst_37594 = cljs.core.not_empty.call(null,inst_37566);
var state_37647__$1 = (function (){var statearr_37690 = state_37647;
(statearr_37690[(29)] = inst_37593);

return statearr_37690;
})();
if(cljs.core.truth_(inst_37594)){
var statearr_37691_37763 = state_37647__$1;
(statearr_37691_37763[(1)] = (29));

} else {
var statearr_37692_37764 = state_37647__$1;
(statearr_37692_37764[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (25))){
var inst_37564 = (state_37647[(23)]);
var inst_37580 = (state_37647[(2)]);
var inst_37581 = cljs.core.not_empty.call(null,inst_37564);
var state_37647__$1 = (function (){var statearr_37693 = state_37647;
(statearr_37693[(30)] = inst_37580);

return statearr_37693;
})();
if(cljs.core.truth_(inst_37581)){
var statearr_37694_37765 = state_37647__$1;
(statearr_37694_37765[(1)] = (26));

} else {
var statearr_37695_37766 = state_37647__$1;
(statearr_37695_37766[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (34))){
var inst_37616 = (state_37647[(2)]);
var state_37647__$1 = state_37647;
if(cljs.core.truth_(inst_37616)){
var statearr_37696_37767 = state_37647__$1;
(statearr_37696_37767[(1)] = (38));

} else {
var statearr_37697_37768 = state_37647__$1;
(statearr_37697_37768[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (17))){
var state_37647__$1 = state_37647;
var statearr_37698_37769 = state_37647__$1;
(statearr_37698_37769[(2)] = recompile_dependents);

(statearr_37698_37769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (3))){
var state_37647__$1 = state_37647;
var statearr_37699_37770 = state_37647__$1;
(statearr_37699_37770[(2)] = null);

(statearr_37699_37770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (12))){
var inst_37537 = (state_37647[(2)]);
var state_37647__$1 = state_37647;
var statearr_37700_37771 = state_37647__$1;
(statearr_37700_37771[(2)] = inst_37537);

(statearr_37700_37771[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (2))){
var inst_37499 = (state_37647[(13)]);
var inst_37506 = cljs.core.seq.call(null,inst_37499);
var inst_37507 = inst_37506;
var inst_37508 = null;
var inst_37509 = (0);
var inst_37510 = (0);
var state_37647__$1 = (function (){var statearr_37701 = state_37647;
(statearr_37701[(7)] = inst_37507);

(statearr_37701[(8)] = inst_37508);

(statearr_37701[(9)] = inst_37510);

(statearr_37701[(10)] = inst_37509);

return statearr_37701;
})();
var statearr_37702_37772 = state_37647__$1;
(statearr_37702_37772[(2)] = null);

(statearr_37702_37772[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (23))){
var inst_37564 = (state_37647[(23)]);
var inst_37563 = (state_37647[(24)]);
var inst_37560 = (state_37647[(19)]);
var inst_37566 = (state_37647[(26)]);
var inst_37568 = (state_37647[(25)]);
var inst_37571 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37573 = (function (){var all_files = inst_37560;
var res_SINGLEQUOTE_ = inst_37563;
var res = inst_37564;
var files_not_loaded = inst_37566;
var dependencies_that_loaded = inst_37568;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37564,inst_37563,inst_37560,inst_37566,inst_37568,inst_37571,state_val_37648,c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37572){
var map__37703 = p__37572;
var map__37703__$1 = ((((!((map__37703 == null)))?((((map__37703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37703):map__37703);
var request_url = cljs.core.get.call(null,map__37703__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37564,inst_37563,inst_37560,inst_37566,inst_37568,inst_37571,state_val_37648,c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37574 = cljs.core.reverse.call(null,inst_37568);
var inst_37575 = cljs.core.map.call(null,inst_37573,inst_37574);
var inst_37576 = cljs.core.pr_str.call(null,inst_37575);
var inst_37577 = figwheel.client.utils.log.call(null,inst_37576);
var state_37647__$1 = (function (){var statearr_37705 = state_37647;
(statearr_37705[(31)] = inst_37571);

return statearr_37705;
})();
var statearr_37706_37773 = state_37647__$1;
(statearr_37706_37773[(2)] = inst_37577);

(statearr_37706_37773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (35))){
var state_37647__$1 = state_37647;
var statearr_37707_37774 = state_37647__$1;
(statearr_37707_37774[(2)] = true);

(statearr_37707_37774[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (19))){
var inst_37550 = (state_37647[(12)]);
var inst_37556 = figwheel.client.file_reloading.expand_files.call(null,inst_37550);
var state_37647__$1 = state_37647;
var statearr_37708_37775 = state_37647__$1;
(statearr_37708_37775[(2)] = inst_37556);

(statearr_37708_37775[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (11))){
var state_37647__$1 = state_37647;
var statearr_37709_37776 = state_37647__$1;
(statearr_37709_37776[(2)] = null);

(statearr_37709_37776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (9))){
var inst_37539 = (state_37647[(2)]);
var state_37647__$1 = state_37647;
var statearr_37710_37777 = state_37647__$1;
(statearr_37710_37777[(2)] = inst_37539);

(statearr_37710_37777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (5))){
var inst_37510 = (state_37647[(9)]);
var inst_37509 = (state_37647[(10)]);
var inst_37512 = (inst_37510 < inst_37509);
var inst_37513 = inst_37512;
var state_37647__$1 = state_37647;
if(cljs.core.truth_(inst_37513)){
var statearr_37711_37778 = state_37647__$1;
(statearr_37711_37778[(1)] = (7));

} else {
var statearr_37712_37779 = state_37647__$1;
(statearr_37712_37779[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (14))){
var inst_37520 = (state_37647[(22)]);
var inst_37529 = cljs.core.first.call(null,inst_37520);
var inst_37530 = figwheel.client.file_reloading.eval_body.call(null,inst_37529,opts);
var inst_37531 = cljs.core.next.call(null,inst_37520);
var inst_37507 = inst_37531;
var inst_37508 = null;
var inst_37509 = (0);
var inst_37510 = (0);
var state_37647__$1 = (function (){var statearr_37713 = state_37647;
(statearr_37713[(7)] = inst_37507);

(statearr_37713[(8)] = inst_37508);

(statearr_37713[(9)] = inst_37510);

(statearr_37713[(10)] = inst_37509);

(statearr_37713[(32)] = inst_37530);

return statearr_37713;
})();
var statearr_37714_37780 = state_37647__$1;
(statearr_37714_37780[(2)] = null);

(statearr_37714_37780[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (45))){
var state_37647__$1 = state_37647;
var statearr_37715_37781 = state_37647__$1;
(statearr_37715_37781[(2)] = null);

(statearr_37715_37781[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (26))){
var inst_37564 = (state_37647[(23)]);
var inst_37563 = (state_37647[(24)]);
var inst_37560 = (state_37647[(19)]);
var inst_37566 = (state_37647[(26)]);
var inst_37568 = (state_37647[(25)]);
var inst_37583 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37585 = (function (){var all_files = inst_37560;
var res_SINGLEQUOTE_ = inst_37563;
var res = inst_37564;
var files_not_loaded = inst_37566;
var dependencies_that_loaded = inst_37568;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37564,inst_37563,inst_37560,inst_37566,inst_37568,inst_37583,state_val_37648,c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37584){
var map__37716 = p__37584;
var map__37716__$1 = ((((!((map__37716 == null)))?((((map__37716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37716):map__37716);
var namespace = cljs.core.get.call(null,map__37716__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37716__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37564,inst_37563,inst_37560,inst_37566,inst_37568,inst_37583,state_val_37648,c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37586 = cljs.core.map.call(null,inst_37585,inst_37564);
var inst_37587 = cljs.core.pr_str.call(null,inst_37586);
var inst_37588 = figwheel.client.utils.log.call(null,inst_37587);
var inst_37589 = (function (){var all_files = inst_37560;
var res_SINGLEQUOTE_ = inst_37563;
var res = inst_37564;
var files_not_loaded = inst_37566;
var dependencies_that_loaded = inst_37568;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37564,inst_37563,inst_37560,inst_37566,inst_37568,inst_37583,inst_37585,inst_37586,inst_37587,inst_37588,state_val_37648,c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37564,inst_37563,inst_37560,inst_37566,inst_37568,inst_37583,inst_37585,inst_37586,inst_37587,inst_37588,state_val_37648,c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37590 = setTimeout(inst_37589,(10));
var state_37647__$1 = (function (){var statearr_37718 = state_37647;
(statearr_37718[(33)] = inst_37588);

(statearr_37718[(34)] = inst_37583);

return statearr_37718;
})();
var statearr_37719_37782 = state_37647__$1;
(statearr_37719_37782[(2)] = inst_37590);

(statearr_37719_37782[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (16))){
var state_37647__$1 = state_37647;
var statearr_37720_37783 = state_37647__$1;
(statearr_37720_37783[(2)] = reload_dependents);

(statearr_37720_37783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (38))){
var inst_37600 = (state_37647[(16)]);
var inst_37618 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37600);
var state_37647__$1 = state_37647;
var statearr_37721_37784 = state_37647__$1;
(statearr_37721_37784[(2)] = inst_37618);

(statearr_37721_37784[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (30))){
var state_37647__$1 = state_37647;
var statearr_37722_37785 = state_37647__$1;
(statearr_37722_37785[(2)] = null);

(statearr_37722_37785[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (10))){
var inst_37520 = (state_37647[(22)]);
var inst_37522 = cljs.core.chunked_seq_QMARK_.call(null,inst_37520);
var state_37647__$1 = state_37647;
if(inst_37522){
var statearr_37723_37786 = state_37647__$1;
(statearr_37723_37786[(1)] = (13));

} else {
var statearr_37724_37787 = state_37647__$1;
(statearr_37724_37787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (18))){
var inst_37554 = (state_37647[(2)]);
var state_37647__$1 = state_37647;
if(cljs.core.truth_(inst_37554)){
var statearr_37725_37788 = state_37647__$1;
(statearr_37725_37788[(1)] = (19));

} else {
var statearr_37726_37789 = state_37647__$1;
(statearr_37726_37789[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (42))){
var state_37647__$1 = state_37647;
var statearr_37727_37790 = state_37647__$1;
(statearr_37727_37790[(2)] = null);

(statearr_37727_37790[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (37))){
var inst_37613 = (state_37647[(2)]);
var state_37647__$1 = state_37647;
var statearr_37728_37791 = state_37647__$1;
(statearr_37728_37791[(2)] = inst_37613);

(statearr_37728_37791[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37648 === (8))){
var inst_37520 = (state_37647[(22)]);
var inst_37507 = (state_37647[(7)]);
var inst_37520__$1 = cljs.core.seq.call(null,inst_37507);
var state_37647__$1 = (function (){var statearr_37729 = state_37647;
(statearr_37729[(22)] = inst_37520__$1);

return statearr_37729;
})();
if(inst_37520__$1){
var statearr_37730_37792 = state_37647__$1;
(statearr_37730_37792[(1)] = (10));

} else {
var statearr_37731_37793 = state_37647__$1;
(statearr_37731_37793[(1)] = (11));

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
});})(c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30536__auto__,c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____0 = (function (){
var statearr_37732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37732[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__);

(statearr_37732[(1)] = (1));

return statearr_37732;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____1 = (function (state_37647){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_37647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e37733){if((e37733 instanceof Object)){
var ex__30540__auto__ = e37733;
var statearr_37734_37794 = state_37647;
(statearr_37734_37794[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37795 = state_37647;
state_37647 = G__37795;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__ = function(state_37647){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____1.call(this,state_37647);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30626__auto__ = (function (){var statearr_37735 = f__30625__auto__.call(null);
(statearr_37735[(6)] = c__30624__auto__);

return statearr_37735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto__,map__37492,map__37492__$1,opts,before_jsload,on_jsload,reload_dependents,map__37493,map__37493__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30624__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37798,link){
var map__37799 = p__37798;
var map__37799__$1 = ((((!((map__37799 == null)))?((((map__37799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37799):map__37799);
var file = cljs.core.get.call(null,map__37799__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37799,map__37799__$1,file){
return (function (p1__37796_SHARP_,p2__37797_SHARP_){
if(cljs.core._EQ_.call(null,p1__37796_SHARP_,p2__37797_SHARP_)){
return p1__37796_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37799,map__37799__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37802){
var map__37803 = p__37802;
var map__37803__$1 = ((((!((map__37803 == null)))?((((map__37803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37803):map__37803);
var match_length = cljs.core.get.call(null,map__37803__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37803__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37801_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37801_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37805_SHARP_,p2__37806_SHARP_){
return cljs.core.assoc.call(null,p1__37805_SHARP_,cljs.core.get.call(null,p2__37806_SHARP_,key),p2__37806_SHARP_);
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
var loaded_f_datas_37807 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37807);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37807);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37808,p__37809){
var map__37810 = p__37808;
var map__37810__$1 = ((((!((map__37810 == null)))?((((map__37810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37810):map__37810);
var on_cssload = cljs.core.get.call(null,map__37810__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37811 = p__37809;
var map__37811__$1 = ((((!((map__37811 == null)))?((((map__37811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37811):map__37811);
var files_msg = map__37811__$1;
var files = cljs.core.get.call(null,map__37811__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1516053487135
