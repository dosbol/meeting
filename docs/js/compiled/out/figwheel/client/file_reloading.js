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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37193_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37193_SHARP_));
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
var seq__37194 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37195 = null;
var count__37196 = (0);
var i__37197 = (0);
while(true){
if((i__37197 < count__37196)){
var n = cljs.core._nth.call(null,chunk__37195,i__37197);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37198 = seq__37194;
var G__37199 = chunk__37195;
var G__37200 = count__37196;
var G__37201 = (i__37197 + (1));
seq__37194 = G__37198;
chunk__37195 = G__37199;
count__37196 = G__37200;
i__37197 = G__37201;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37194);
if(temp__4657__auto__){
var seq__37194__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37194__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37194__$1);
var G__37202 = cljs.core.chunk_rest.call(null,seq__37194__$1);
var G__37203 = c__28034__auto__;
var G__37204 = cljs.core.count.call(null,c__28034__auto__);
var G__37205 = (0);
seq__37194 = G__37202;
chunk__37195 = G__37203;
count__37196 = G__37204;
i__37197 = G__37205;
continue;
} else {
var n = cljs.core.first.call(null,seq__37194__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37206 = cljs.core.next.call(null,seq__37194__$1);
var G__37207 = null;
var G__37208 = (0);
var G__37209 = (0);
seq__37194 = G__37206;
chunk__37195 = G__37207;
count__37196 = G__37208;
i__37197 = G__37209;
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

var seq__37219_37227 = cljs.core.seq.call(null,deps);
var chunk__37220_37228 = null;
var count__37221_37229 = (0);
var i__37222_37230 = (0);
while(true){
if((i__37222_37230 < count__37221_37229)){
var dep_37231 = cljs.core._nth.call(null,chunk__37220_37228,i__37222_37230);
topo_sort_helper_STAR_.call(null,dep_37231,(depth + (1)),state);

var G__37232 = seq__37219_37227;
var G__37233 = chunk__37220_37228;
var G__37234 = count__37221_37229;
var G__37235 = (i__37222_37230 + (1));
seq__37219_37227 = G__37232;
chunk__37220_37228 = G__37233;
count__37221_37229 = G__37234;
i__37222_37230 = G__37235;
continue;
} else {
var temp__4657__auto___37236 = cljs.core.seq.call(null,seq__37219_37227);
if(temp__4657__auto___37236){
var seq__37219_37237__$1 = temp__4657__auto___37236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37219_37237__$1)){
var c__28034__auto___37238 = cljs.core.chunk_first.call(null,seq__37219_37237__$1);
var G__37239 = cljs.core.chunk_rest.call(null,seq__37219_37237__$1);
var G__37240 = c__28034__auto___37238;
var G__37241 = cljs.core.count.call(null,c__28034__auto___37238);
var G__37242 = (0);
seq__37219_37227 = G__37239;
chunk__37220_37228 = G__37240;
count__37221_37229 = G__37241;
i__37222_37230 = G__37242;
continue;
} else {
var dep_37243 = cljs.core.first.call(null,seq__37219_37237__$1);
topo_sort_helper_STAR_.call(null,dep_37243,(depth + (1)),state);

var G__37244 = cljs.core.next.call(null,seq__37219_37237__$1);
var G__37245 = null;
var G__37246 = (0);
var G__37247 = (0);
seq__37219_37227 = G__37244;
chunk__37220_37228 = G__37245;
count__37221_37229 = G__37246;
i__37222_37230 = G__37247;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37223){
var vec__37224 = p__37223;
var seq__37225 = cljs.core.seq.call(null,vec__37224);
var first__37226 = cljs.core.first.call(null,seq__37225);
var seq__37225__$1 = cljs.core.next.call(null,seq__37225);
var x = first__37226;
var xs = seq__37225__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37224,seq__37225,first__37226,seq__37225__$1,x,xs,get_deps__$1){
return (function (p1__37210_SHARP_){
return clojure.set.difference.call(null,p1__37210_SHARP_,x);
});})(vec__37224,seq__37225,first__37226,seq__37225__$1,x,xs,get_deps__$1))
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
var seq__37248 = cljs.core.seq.call(null,provides);
var chunk__37249 = null;
var count__37250 = (0);
var i__37251 = (0);
while(true){
if((i__37251 < count__37250)){
var prov = cljs.core._nth.call(null,chunk__37249,i__37251);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37252_37260 = cljs.core.seq.call(null,requires);
var chunk__37253_37261 = null;
var count__37254_37262 = (0);
var i__37255_37263 = (0);
while(true){
if((i__37255_37263 < count__37254_37262)){
var req_37264 = cljs.core._nth.call(null,chunk__37253_37261,i__37255_37263);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37264,prov);

var G__37265 = seq__37252_37260;
var G__37266 = chunk__37253_37261;
var G__37267 = count__37254_37262;
var G__37268 = (i__37255_37263 + (1));
seq__37252_37260 = G__37265;
chunk__37253_37261 = G__37266;
count__37254_37262 = G__37267;
i__37255_37263 = G__37268;
continue;
} else {
var temp__4657__auto___37269 = cljs.core.seq.call(null,seq__37252_37260);
if(temp__4657__auto___37269){
var seq__37252_37270__$1 = temp__4657__auto___37269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37252_37270__$1)){
var c__28034__auto___37271 = cljs.core.chunk_first.call(null,seq__37252_37270__$1);
var G__37272 = cljs.core.chunk_rest.call(null,seq__37252_37270__$1);
var G__37273 = c__28034__auto___37271;
var G__37274 = cljs.core.count.call(null,c__28034__auto___37271);
var G__37275 = (0);
seq__37252_37260 = G__37272;
chunk__37253_37261 = G__37273;
count__37254_37262 = G__37274;
i__37255_37263 = G__37275;
continue;
} else {
var req_37276 = cljs.core.first.call(null,seq__37252_37270__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37276,prov);

var G__37277 = cljs.core.next.call(null,seq__37252_37270__$1);
var G__37278 = null;
var G__37279 = (0);
var G__37280 = (0);
seq__37252_37260 = G__37277;
chunk__37253_37261 = G__37278;
count__37254_37262 = G__37279;
i__37255_37263 = G__37280;
continue;
}
} else {
}
}
break;
}

var G__37281 = seq__37248;
var G__37282 = chunk__37249;
var G__37283 = count__37250;
var G__37284 = (i__37251 + (1));
seq__37248 = G__37281;
chunk__37249 = G__37282;
count__37250 = G__37283;
i__37251 = G__37284;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37248);
if(temp__4657__auto__){
var seq__37248__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37248__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37248__$1);
var G__37285 = cljs.core.chunk_rest.call(null,seq__37248__$1);
var G__37286 = c__28034__auto__;
var G__37287 = cljs.core.count.call(null,c__28034__auto__);
var G__37288 = (0);
seq__37248 = G__37285;
chunk__37249 = G__37286;
count__37250 = G__37287;
i__37251 = G__37288;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37248__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37256_37289 = cljs.core.seq.call(null,requires);
var chunk__37257_37290 = null;
var count__37258_37291 = (0);
var i__37259_37292 = (0);
while(true){
if((i__37259_37292 < count__37258_37291)){
var req_37293 = cljs.core._nth.call(null,chunk__37257_37290,i__37259_37292);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37293,prov);

var G__37294 = seq__37256_37289;
var G__37295 = chunk__37257_37290;
var G__37296 = count__37258_37291;
var G__37297 = (i__37259_37292 + (1));
seq__37256_37289 = G__37294;
chunk__37257_37290 = G__37295;
count__37258_37291 = G__37296;
i__37259_37292 = G__37297;
continue;
} else {
var temp__4657__auto___37298__$1 = cljs.core.seq.call(null,seq__37256_37289);
if(temp__4657__auto___37298__$1){
var seq__37256_37299__$1 = temp__4657__auto___37298__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37256_37299__$1)){
var c__28034__auto___37300 = cljs.core.chunk_first.call(null,seq__37256_37299__$1);
var G__37301 = cljs.core.chunk_rest.call(null,seq__37256_37299__$1);
var G__37302 = c__28034__auto___37300;
var G__37303 = cljs.core.count.call(null,c__28034__auto___37300);
var G__37304 = (0);
seq__37256_37289 = G__37301;
chunk__37257_37290 = G__37302;
count__37258_37291 = G__37303;
i__37259_37292 = G__37304;
continue;
} else {
var req_37305 = cljs.core.first.call(null,seq__37256_37299__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37305,prov);

var G__37306 = cljs.core.next.call(null,seq__37256_37299__$1);
var G__37307 = null;
var G__37308 = (0);
var G__37309 = (0);
seq__37256_37289 = G__37306;
chunk__37257_37290 = G__37307;
count__37258_37291 = G__37308;
i__37259_37292 = G__37309;
continue;
}
} else {
}
}
break;
}

var G__37310 = cljs.core.next.call(null,seq__37248__$1);
var G__37311 = null;
var G__37312 = (0);
var G__37313 = (0);
seq__37248 = G__37310;
chunk__37249 = G__37311;
count__37250 = G__37312;
i__37251 = G__37313;
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
var seq__37314_37318 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37315_37319 = null;
var count__37316_37320 = (0);
var i__37317_37321 = (0);
while(true){
if((i__37317_37321 < count__37316_37320)){
var ns_37322 = cljs.core._nth.call(null,chunk__37315_37319,i__37317_37321);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37322);

var G__37323 = seq__37314_37318;
var G__37324 = chunk__37315_37319;
var G__37325 = count__37316_37320;
var G__37326 = (i__37317_37321 + (1));
seq__37314_37318 = G__37323;
chunk__37315_37319 = G__37324;
count__37316_37320 = G__37325;
i__37317_37321 = G__37326;
continue;
} else {
var temp__4657__auto___37327 = cljs.core.seq.call(null,seq__37314_37318);
if(temp__4657__auto___37327){
var seq__37314_37328__$1 = temp__4657__auto___37327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37314_37328__$1)){
var c__28034__auto___37329 = cljs.core.chunk_first.call(null,seq__37314_37328__$1);
var G__37330 = cljs.core.chunk_rest.call(null,seq__37314_37328__$1);
var G__37331 = c__28034__auto___37329;
var G__37332 = cljs.core.count.call(null,c__28034__auto___37329);
var G__37333 = (0);
seq__37314_37318 = G__37330;
chunk__37315_37319 = G__37331;
count__37316_37320 = G__37332;
i__37317_37321 = G__37333;
continue;
} else {
var ns_37334 = cljs.core.first.call(null,seq__37314_37328__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37334);

var G__37335 = cljs.core.next.call(null,seq__37314_37328__$1);
var G__37336 = null;
var G__37337 = (0);
var G__37338 = (0);
seq__37314_37318 = G__37335;
chunk__37315_37319 = G__37336;
count__37316_37320 = G__37337;
i__37317_37321 = G__37338;
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
var G__37339__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37340__i = 0, G__37340__a = new Array(arguments.length -  0);
while (G__37340__i < G__37340__a.length) {G__37340__a[G__37340__i] = arguments[G__37340__i + 0]; ++G__37340__i;}
  args = new cljs.core.IndexedSeq(G__37340__a,0,null);
} 
return G__37339__delegate.call(this,args);};
G__37339.cljs$lang$maxFixedArity = 0;
G__37339.cljs$lang$applyTo = (function (arglist__37341){
var args = cljs.core.seq(arglist__37341);
return G__37339__delegate(args);
});
G__37339.cljs$core$IFn$_invoke$arity$variadic = G__37339__delegate;
return G__37339;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37342_SHARP_,p2__37343_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37342_SHARP_)].join('')),p2__37343_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37344_SHARP_,p2__37345_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37344_SHARP_)].join(''),p2__37345_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37346 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37346.addCallback(((function (G__37346){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37346))
);

G__37346.addErrback(((function (G__37346){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37346))
);

return G__37346;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37347 = cljs.core._EQ_;
var expr__37348 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37347.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37348))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37347,expr__37348){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37347,expr__37348))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37347,expr__37348){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37350){if((e37350 instanceof Error)){
var e = e37350;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37350;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37347,expr__37348))
} else {
if(cljs.core.truth_(pred__37347.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37348))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37347.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37348))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37347.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37348))){
return ((function (pred__37347,expr__37348){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37351){if((e37351 instanceof Error)){
var e = e37351;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37351;

}
}})());
});
;})(pred__37347,expr__37348))
} else {
return ((function (pred__37347,expr__37348){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37347,expr__37348))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37352,callback){
var map__37353 = p__37352;
var map__37353__$1 = ((((!((map__37353 == null)))?((((map__37353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37353):map__37353);
var file_msg = map__37353__$1;
var request_url = cljs.core.get.call(null,map__37353__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37353,map__37353__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37353,map__37353__$1,file_msg,request_url))
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
return (function (state_37377){
var state_val_37378 = (state_37377[(1)]);
if((state_val_37378 === (7))){
var inst_37373 = (state_37377[(2)]);
var state_37377__$1 = state_37377;
var statearr_37379_37396 = state_37377__$1;
(statearr_37379_37396[(2)] = inst_37373);

(statearr_37379_37396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (1))){
var state_37377__$1 = state_37377;
var statearr_37380_37397 = state_37377__$1;
(statearr_37380_37397[(2)] = null);

(statearr_37380_37397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (4))){
var inst_37357 = (state_37377[(7)]);
var inst_37357__$1 = (state_37377[(2)]);
var state_37377__$1 = (function (){var statearr_37381 = state_37377;
(statearr_37381[(7)] = inst_37357__$1);

return statearr_37381;
})();
if(cljs.core.truth_(inst_37357__$1)){
var statearr_37382_37398 = state_37377__$1;
(statearr_37382_37398[(1)] = (5));

} else {
var statearr_37383_37399 = state_37377__$1;
(statearr_37383_37399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (6))){
var state_37377__$1 = state_37377;
var statearr_37384_37400 = state_37377__$1;
(statearr_37384_37400[(2)] = null);

(statearr_37384_37400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (3))){
var inst_37375 = (state_37377[(2)]);
var state_37377__$1 = state_37377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37377__$1,inst_37375);
} else {
if((state_val_37378 === (2))){
var state_37377__$1 = state_37377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37377__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37378 === (11))){
var inst_37369 = (state_37377[(2)]);
var state_37377__$1 = (function (){var statearr_37385 = state_37377;
(statearr_37385[(8)] = inst_37369);

return statearr_37385;
})();
var statearr_37386_37401 = state_37377__$1;
(statearr_37386_37401[(2)] = null);

(statearr_37386_37401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (9))){
var inst_37361 = (state_37377[(9)]);
var inst_37363 = (state_37377[(10)]);
var inst_37365 = inst_37363.call(null,inst_37361);
var state_37377__$1 = state_37377;
var statearr_37387_37402 = state_37377__$1;
(statearr_37387_37402[(2)] = inst_37365);

(statearr_37387_37402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (5))){
var inst_37357 = (state_37377[(7)]);
var inst_37359 = figwheel.client.file_reloading.blocking_load.call(null,inst_37357);
var state_37377__$1 = state_37377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37377__$1,(8),inst_37359);
} else {
if((state_val_37378 === (10))){
var inst_37361 = (state_37377[(9)]);
var inst_37367 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37361);
var state_37377__$1 = state_37377;
var statearr_37388_37403 = state_37377__$1;
(statearr_37388_37403[(2)] = inst_37367);

(statearr_37388_37403[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37378 === (8))){
var inst_37357 = (state_37377[(7)]);
var inst_37363 = (state_37377[(10)]);
var inst_37361 = (state_37377[(2)]);
var inst_37362 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37363__$1 = cljs.core.get.call(null,inst_37362,inst_37357);
var state_37377__$1 = (function (){var statearr_37389 = state_37377;
(statearr_37389[(9)] = inst_37361);

(statearr_37389[(10)] = inst_37363__$1);

return statearr_37389;
})();
if(cljs.core.truth_(inst_37363__$1)){
var statearr_37390_37404 = state_37377__$1;
(statearr_37390_37404[(1)] = (9));

} else {
var statearr_37391_37405 = state_37377__$1;
(statearr_37391_37405[(1)] = (10));

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
var statearr_37392 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37392[(0)] = figwheel$client$file_reloading$state_machine__30537__auto__);

(statearr_37392[(1)] = (1));

return statearr_37392;
});
var figwheel$client$file_reloading$state_machine__30537__auto____1 = (function (state_37377){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_37377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e37393){if((e37393 instanceof Object)){
var ex__30540__auto__ = e37393;
var statearr_37394_37406 = state_37377;
(statearr_37394_37406[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37407 = state_37377;
state_37377 = G__37407;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30537__auto__ = function(state_37377){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30537__auto____1.call(this,state_37377);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30537__auto____0;
figwheel$client$file_reloading$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30537__auto____1;
return figwheel$client$file_reloading$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_37395 = f__30625__auto__.call(null);
(statearr_37395[(6)] = c__30624__auto__);

return statearr_37395;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37408,callback){
var map__37409 = p__37408;
var map__37409__$1 = ((((!((map__37409 == null)))?((((map__37409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37409):map__37409);
var file_msg = map__37409__$1;
var namespace = cljs.core.get.call(null,map__37409__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37409,map__37409__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37409,map__37409__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37411){
var map__37412 = p__37411;
var map__37412__$1 = ((((!((map__37412 == null)))?((((map__37412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37412):map__37412);
var file_msg = map__37412__$1;
var namespace = cljs.core.get.call(null,map__37412__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37414){
var map__37415 = p__37414;
var map__37415__$1 = ((((!((map__37415 == null)))?((((map__37415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37415):map__37415);
var file_msg = map__37415__$1;
var namespace = cljs.core.get.call(null,map__37415__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37417,callback){
var map__37418 = p__37417;
var map__37418__$1 = ((((!((map__37418 == null)))?((((map__37418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37418):map__37418);
var file_msg = map__37418__$1;
var request_url = cljs.core.get.call(null,map__37418__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37418__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30624__auto___37468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___37468,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___37468,out){
return (function (state_37453){
var state_val_37454 = (state_37453[(1)]);
if((state_val_37454 === (1))){
var inst_37427 = cljs.core.seq.call(null,files);
var inst_37428 = cljs.core.first.call(null,inst_37427);
var inst_37429 = cljs.core.next.call(null,inst_37427);
var inst_37430 = files;
var state_37453__$1 = (function (){var statearr_37455 = state_37453;
(statearr_37455[(7)] = inst_37428);

(statearr_37455[(8)] = inst_37430);

(statearr_37455[(9)] = inst_37429);

return statearr_37455;
})();
var statearr_37456_37469 = state_37453__$1;
(statearr_37456_37469[(2)] = null);

(statearr_37456_37469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37454 === (2))){
var inst_37430 = (state_37453[(8)]);
var inst_37436 = (state_37453[(10)]);
var inst_37435 = cljs.core.seq.call(null,inst_37430);
var inst_37436__$1 = cljs.core.first.call(null,inst_37435);
var inst_37437 = cljs.core.next.call(null,inst_37435);
var inst_37438 = (inst_37436__$1 == null);
var inst_37439 = cljs.core.not.call(null,inst_37438);
var state_37453__$1 = (function (){var statearr_37457 = state_37453;
(statearr_37457[(11)] = inst_37437);

(statearr_37457[(10)] = inst_37436__$1);

return statearr_37457;
})();
if(inst_37439){
var statearr_37458_37470 = state_37453__$1;
(statearr_37458_37470[(1)] = (4));

} else {
var statearr_37459_37471 = state_37453__$1;
(statearr_37459_37471[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37454 === (3))){
var inst_37451 = (state_37453[(2)]);
var state_37453__$1 = state_37453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37453__$1,inst_37451);
} else {
if((state_val_37454 === (4))){
var inst_37436 = (state_37453[(10)]);
var inst_37441 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37436);
var state_37453__$1 = state_37453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37453__$1,(7),inst_37441);
} else {
if((state_val_37454 === (5))){
var inst_37447 = cljs.core.async.close_BANG_.call(null,out);
var state_37453__$1 = state_37453;
var statearr_37460_37472 = state_37453__$1;
(statearr_37460_37472[(2)] = inst_37447);

(statearr_37460_37472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37454 === (6))){
var inst_37449 = (state_37453[(2)]);
var state_37453__$1 = state_37453;
var statearr_37461_37473 = state_37453__$1;
(statearr_37461_37473[(2)] = inst_37449);

(statearr_37461_37473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37454 === (7))){
var inst_37437 = (state_37453[(11)]);
var inst_37443 = (state_37453[(2)]);
var inst_37444 = cljs.core.async.put_BANG_.call(null,out,inst_37443);
var inst_37430 = inst_37437;
var state_37453__$1 = (function (){var statearr_37462 = state_37453;
(statearr_37462[(8)] = inst_37430);

(statearr_37462[(12)] = inst_37444);

return statearr_37462;
})();
var statearr_37463_37474 = state_37453__$1;
(statearr_37463_37474[(2)] = null);

(statearr_37463_37474[(1)] = (2));


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
});})(c__30624__auto___37468,out))
;
return ((function (switch__30536__auto__,c__30624__auto___37468,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____0 = (function (){
var statearr_37464 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37464[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__);

(statearr_37464[(1)] = (1));

return statearr_37464;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____1 = (function (state_37453){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_37453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e37465){if((e37465 instanceof Object)){
var ex__30540__auto__ = e37465;
var statearr_37466_37475 = state_37453;
(statearr_37466_37475[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37476 = state_37453;
state_37453 = G__37476;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__ = function(state_37453){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____1.call(this,state_37453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___37468,out))
})();
var state__30626__auto__ = (function (){var statearr_37467 = f__30625__auto__.call(null);
(statearr_37467[(6)] = c__30624__auto___37468);

return statearr_37467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___37468,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37477,opts){
var map__37478 = p__37477;
var map__37478__$1 = ((((!((map__37478 == null)))?((((map__37478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37478):map__37478);
var eval_body = cljs.core.get.call(null,map__37478__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37478__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37480){var e = e37480;
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
return (function (p1__37481_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37481_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37482){
var vec__37483 = p__37482;
var k = cljs.core.nth.call(null,vec__37483,(0),null);
var v = cljs.core.nth.call(null,vec__37483,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37486){
var vec__37487 = p__37486;
var k = cljs.core.nth.call(null,vec__37487,(0),null);
var v = cljs.core.nth.call(null,vec__37487,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37493,p__37494){
var map__37495 = p__37493;
var map__37495__$1 = ((((!((map__37495 == null)))?((((map__37495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37495):map__37495);
var opts = map__37495__$1;
var before_jsload = cljs.core.get.call(null,map__37495__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37495__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37495__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37496 = p__37494;
var map__37496__$1 = ((((!((map__37496 == null)))?((((map__37496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37496):map__37496);
var msg = map__37496__$1;
var files = cljs.core.get.call(null,map__37496__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37496__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37496__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37650){
var state_val_37651 = (state_37650[(1)]);
if((state_val_37651 === (7))){
var inst_37513 = (state_37650[(7)]);
var inst_37512 = (state_37650[(8)]);
var inst_37511 = (state_37650[(9)]);
var inst_37510 = (state_37650[(10)]);
var inst_37518 = cljs.core._nth.call(null,inst_37511,inst_37513);
var inst_37519 = figwheel.client.file_reloading.eval_body.call(null,inst_37518,opts);
var inst_37520 = (inst_37513 + (1));
var tmp37652 = inst_37512;
var tmp37653 = inst_37511;
var tmp37654 = inst_37510;
var inst_37510__$1 = tmp37654;
var inst_37511__$1 = tmp37653;
var inst_37512__$1 = tmp37652;
var inst_37513__$1 = inst_37520;
var state_37650__$1 = (function (){var statearr_37655 = state_37650;
(statearr_37655[(7)] = inst_37513__$1);

(statearr_37655[(8)] = inst_37512__$1);

(statearr_37655[(9)] = inst_37511__$1);

(statearr_37655[(10)] = inst_37510__$1);

(statearr_37655[(11)] = inst_37519);

return statearr_37655;
})();
var statearr_37656_37739 = state_37650__$1;
(statearr_37656_37739[(2)] = null);

(statearr_37656_37739[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (20))){
var inst_37553 = (state_37650[(12)]);
var inst_37561 = figwheel.client.file_reloading.sort_files.call(null,inst_37553);
var state_37650__$1 = state_37650;
var statearr_37657_37740 = state_37650__$1;
(statearr_37657_37740[(2)] = inst_37561);

(statearr_37657_37740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (27))){
var state_37650__$1 = state_37650;
var statearr_37658_37741 = state_37650__$1;
(statearr_37658_37741[(2)] = null);

(statearr_37658_37741[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (1))){
var inst_37502 = (state_37650[(13)]);
var inst_37499 = before_jsload.call(null,files);
var inst_37500 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37501 = (function (){return ((function (inst_37502,inst_37499,inst_37500,state_val_37651,c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37490_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37490_SHARP_);
});
;})(inst_37502,inst_37499,inst_37500,state_val_37651,c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37502__$1 = cljs.core.filter.call(null,inst_37501,files);
var inst_37503 = cljs.core.not_empty.call(null,inst_37502__$1);
var state_37650__$1 = (function (){var statearr_37659 = state_37650;
(statearr_37659[(14)] = inst_37500);

(statearr_37659[(15)] = inst_37499);

(statearr_37659[(13)] = inst_37502__$1);

return statearr_37659;
})();
if(cljs.core.truth_(inst_37503)){
var statearr_37660_37742 = state_37650__$1;
(statearr_37660_37742[(1)] = (2));

} else {
var statearr_37661_37743 = state_37650__$1;
(statearr_37661_37743[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (24))){
var state_37650__$1 = state_37650;
var statearr_37662_37744 = state_37650__$1;
(statearr_37662_37744[(2)] = null);

(statearr_37662_37744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (39))){
var inst_37603 = (state_37650[(16)]);
var state_37650__$1 = state_37650;
var statearr_37663_37745 = state_37650__$1;
(statearr_37663_37745[(2)] = inst_37603);

(statearr_37663_37745[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (46))){
var inst_37645 = (state_37650[(2)]);
var state_37650__$1 = state_37650;
var statearr_37664_37746 = state_37650__$1;
(statearr_37664_37746[(2)] = inst_37645);

(statearr_37664_37746[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (4))){
var inst_37547 = (state_37650[(2)]);
var inst_37548 = cljs.core.List.EMPTY;
var inst_37549 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37548);
var inst_37550 = (function (){return ((function (inst_37547,inst_37548,inst_37549,state_val_37651,c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37491_SHARP_){
var and__27183__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37491_SHARP_);
if(cljs.core.truth_(and__27183__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37491_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37491_SHARP_)));
} else {
return and__27183__auto__;
}
});
;})(inst_37547,inst_37548,inst_37549,state_val_37651,c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37551 = cljs.core.filter.call(null,inst_37550,files);
var inst_37552 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37553 = cljs.core.concat.call(null,inst_37551,inst_37552);
var state_37650__$1 = (function (){var statearr_37665 = state_37650;
(statearr_37665[(17)] = inst_37549);

(statearr_37665[(12)] = inst_37553);

(statearr_37665[(18)] = inst_37547);

return statearr_37665;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37666_37747 = state_37650__$1;
(statearr_37666_37747[(1)] = (16));

} else {
var statearr_37667_37748 = state_37650__$1;
(statearr_37667_37748[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (15))){
var inst_37537 = (state_37650[(2)]);
var state_37650__$1 = state_37650;
var statearr_37668_37749 = state_37650__$1;
(statearr_37668_37749[(2)] = inst_37537);

(statearr_37668_37749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (21))){
var inst_37563 = (state_37650[(19)]);
var inst_37563__$1 = (state_37650[(2)]);
var inst_37564 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37563__$1);
var state_37650__$1 = (function (){var statearr_37669 = state_37650;
(statearr_37669[(19)] = inst_37563__$1);

return statearr_37669;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37650__$1,(22),inst_37564);
} else {
if((state_val_37651 === (31))){
var inst_37648 = (state_37650[(2)]);
var state_37650__$1 = state_37650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37650__$1,inst_37648);
} else {
if((state_val_37651 === (32))){
var inst_37603 = (state_37650[(16)]);
var inst_37608 = inst_37603.cljs$lang$protocol_mask$partition0$;
var inst_37609 = (inst_37608 & (64));
var inst_37610 = inst_37603.cljs$core$ISeq$;
var inst_37611 = (cljs.core.PROTOCOL_SENTINEL === inst_37610);
var inst_37612 = (inst_37609) || (inst_37611);
var state_37650__$1 = state_37650;
if(cljs.core.truth_(inst_37612)){
var statearr_37670_37750 = state_37650__$1;
(statearr_37670_37750[(1)] = (35));

} else {
var statearr_37671_37751 = state_37650__$1;
(statearr_37671_37751[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (40))){
var inst_37625 = (state_37650[(20)]);
var inst_37624 = (state_37650[(2)]);
var inst_37625__$1 = cljs.core.get.call(null,inst_37624,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37626 = cljs.core.get.call(null,inst_37624,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37627 = cljs.core.not_empty.call(null,inst_37625__$1);
var state_37650__$1 = (function (){var statearr_37672 = state_37650;
(statearr_37672[(20)] = inst_37625__$1);

(statearr_37672[(21)] = inst_37626);

return statearr_37672;
})();
if(cljs.core.truth_(inst_37627)){
var statearr_37673_37752 = state_37650__$1;
(statearr_37673_37752[(1)] = (41));

} else {
var statearr_37674_37753 = state_37650__$1;
(statearr_37674_37753[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (33))){
var state_37650__$1 = state_37650;
var statearr_37675_37754 = state_37650__$1;
(statearr_37675_37754[(2)] = false);

(statearr_37675_37754[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (13))){
var inst_37523 = (state_37650[(22)]);
var inst_37527 = cljs.core.chunk_first.call(null,inst_37523);
var inst_37528 = cljs.core.chunk_rest.call(null,inst_37523);
var inst_37529 = cljs.core.count.call(null,inst_37527);
var inst_37510 = inst_37528;
var inst_37511 = inst_37527;
var inst_37512 = inst_37529;
var inst_37513 = (0);
var state_37650__$1 = (function (){var statearr_37676 = state_37650;
(statearr_37676[(7)] = inst_37513);

(statearr_37676[(8)] = inst_37512);

(statearr_37676[(9)] = inst_37511);

(statearr_37676[(10)] = inst_37510);

return statearr_37676;
})();
var statearr_37677_37755 = state_37650__$1;
(statearr_37677_37755[(2)] = null);

(statearr_37677_37755[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (22))){
var inst_37563 = (state_37650[(19)]);
var inst_37567 = (state_37650[(23)]);
var inst_37566 = (state_37650[(24)]);
var inst_37571 = (state_37650[(25)]);
var inst_37566__$1 = (state_37650[(2)]);
var inst_37567__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37566__$1);
var inst_37568 = (function (){var all_files = inst_37563;
var res_SINGLEQUOTE_ = inst_37566__$1;
var res = inst_37567__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37563,inst_37567,inst_37566,inst_37571,inst_37566__$1,inst_37567__$1,state_val_37651,c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37492_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37492_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37563,inst_37567,inst_37566,inst_37571,inst_37566__$1,inst_37567__$1,state_val_37651,c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37569 = cljs.core.filter.call(null,inst_37568,inst_37566__$1);
var inst_37570 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37571__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37570);
var inst_37572 = cljs.core.not_empty.call(null,inst_37571__$1);
var state_37650__$1 = (function (){var statearr_37678 = state_37650;
(statearr_37678[(23)] = inst_37567__$1);

(statearr_37678[(26)] = inst_37569);

(statearr_37678[(24)] = inst_37566__$1);

(statearr_37678[(25)] = inst_37571__$1);

return statearr_37678;
})();
if(cljs.core.truth_(inst_37572)){
var statearr_37679_37756 = state_37650__$1;
(statearr_37679_37756[(1)] = (23));

} else {
var statearr_37680_37757 = state_37650__$1;
(statearr_37680_37757[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (36))){
var state_37650__$1 = state_37650;
var statearr_37681_37758 = state_37650__$1;
(statearr_37681_37758[(2)] = false);

(statearr_37681_37758[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (41))){
var inst_37625 = (state_37650[(20)]);
var inst_37629 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37630 = cljs.core.map.call(null,inst_37629,inst_37625);
var inst_37631 = cljs.core.pr_str.call(null,inst_37630);
var inst_37632 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37631)].join('');
var inst_37633 = figwheel.client.utils.log.call(null,inst_37632);
var state_37650__$1 = state_37650;
var statearr_37682_37759 = state_37650__$1;
(statearr_37682_37759[(2)] = inst_37633);

(statearr_37682_37759[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (43))){
var inst_37626 = (state_37650[(21)]);
var inst_37636 = (state_37650[(2)]);
var inst_37637 = cljs.core.not_empty.call(null,inst_37626);
var state_37650__$1 = (function (){var statearr_37683 = state_37650;
(statearr_37683[(27)] = inst_37636);

return statearr_37683;
})();
if(cljs.core.truth_(inst_37637)){
var statearr_37684_37760 = state_37650__$1;
(statearr_37684_37760[(1)] = (44));

} else {
var statearr_37685_37761 = state_37650__$1;
(statearr_37685_37761[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (29))){
var inst_37603 = (state_37650[(16)]);
var inst_37563 = (state_37650[(19)]);
var inst_37567 = (state_37650[(23)]);
var inst_37569 = (state_37650[(26)]);
var inst_37566 = (state_37650[(24)]);
var inst_37571 = (state_37650[(25)]);
var inst_37599 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37602 = (function (){var all_files = inst_37563;
var res_SINGLEQUOTE_ = inst_37566;
var res = inst_37567;
var files_not_loaded = inst_37569;
var dependencies_that_loaded = inst_37571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37603,inst_37563,inst_37567,inst_37569,inst_37566,inst_37571,inst_37599,state_val_37651,c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37601){
var map__37686 = p__37601;
var map__37686__$1 = ((((!((map__37686 == null)))?((((map__37686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37686):map__37686);
var namespace = cljs.core.get.call(null,map__37686__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37603,inst_37563,inst_37567,inst_37569,inst_37566,inst_37571,inst_37599,state_val_37651,c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37603__$1 = cljs.core.group_by.call(null,inst_37602,inst_37569);
var inst_37605 = (inst_37603__$1 == null);
var inst_37606 = cljs.core.not.call(null,inst_37605);
var state_37650__$1 = (function (){var statearr_37688 = state_37650;
(statearr_37688[(16)] = inst_37603__$1);

(statearr_37688[(28)] = inst_37599);

return statearr_37688;
})();
if(inst_37606){
var statearr_37689_37762 = state_37650__$1;
(statearr_37689_37762[(1)] = (32));

} else {
var statearr_37690_37763 = state_37650__$1;
(statearr_37690_37763[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (44))){
var inst_37626 = (state_37650[(21)]);
var inst_37639 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37626);
var inst_37640 = cljs.core.pr_str.call(null,inst_37639);
var inst_37641 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37640)].join('');
var inst_37642 = figwheel.client.utils.log.call(null,inst_37641);
var state_37650__$1 = state_37650;
var statearr_37691_37764 = state_37650__$1;
(statearr_37691_37764[(2)] = inst_37642);

(statearr_37691_37764[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (6))){
var inst_37544 = (state_37650[(2)]);
var state_37650__$1 = state_37650;
var statearr_37692_37765 = state_37650__$1;
(statearr_37692_37765[(2)] = inst_37544);

(statearr_37692_37765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (28))){
var inst_37569 = (state_37650[(26)]);
var inst_37596 = (state_37650[(2)]);
var inst_37597 = cljs.core.not_empty.call(null,inst_37569);
var state_37650__$1 = (function (){var statearr_37693 = state_37650;
(statearr_37693[(29)] = inst_37596);

return statearr_37693;
})();
if(cljs.core.truth_(inst_37597)){
var statearr_37694_37766 = state_37650__$1;
(statearr_37694_37766[(1)] = (29));

} else {
var statearr_37695_37767 = state_37650__$1;
(statearr_37695_37767[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (25))){
var inst_37567 = (state_37650[(23)]);
var inst_37583 = (state_37650[(2)]);
var inst_37584 = cljs.core.not_empty.call(null,inst_37567);
var state_37650__$1 = (function (){var statearr_37696 = state_37650;
(statearr_37696[(30)] = inst_37583);

return statearr_37696;
})();
if(cljs.core.truth_(inst_37584)){
var statearr_37697_37768 = state_37650__$1;
(statearr_37697_37768[(1)] = (26));

} else {
var statearr_37698_37769 = state_37650__$1;
(statearr_37698_37769[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (34))){
var inst_37619 = (state_37650[(2)]);
var state_37650__$1 = state_37650;
if(cljs.core.truth_(inst_37619)){
var statearr_37699_37770 = state_37650__$1;
(statearr_37699_37770[(1)] = (38));

} else {
var statearr_37700_37771 = state_37650__$1;
(statearr_37700_37771[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (17))){
var state_37650__$1 = state_37650;
var statearr_37701_37772 = state_37650__$1;
(statearr_37701_37772[(2)] = recompile_dependents);

(statearr_37701_37772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (3))){
var state_37650__$1 = state_37650;
var statearr_37702_37773 = state_37650__$1;
(statearr_37702_37773[(2)] = null);

(statearr_37702_37773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (12))){
var inst_37540 = (state_37650[(2)]);
var state_37650__$1 = state_37650;
var statearr_37703_37774 = state_37650__$1;
(statearr_37703_37774[(2)] = inst_37540);

(statearr_37703_37774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (2))){
var inst_37502 = (state_37650[(13)]);
var inst_37509 = cljs.core.seq.call(null,inst_37502);
var inst_37510 = inst_37509;
var inst_37511 = null;
var inst_37512 = (0);
var inst_37513 = (0);
var state_37650__$1 = (function (){var statearr_37704 = state_37650;
(statearr_37704[(7)] = inst_37513);

(statearr_37704[(8)] = inst_37512);

(statearr_37704[(9)] = inst_37511);

(statearr_37704[(10)] = inst_37510);

return statearr_37704;
})();
var statearr_37705_37775 = state_37650__$1;
(statearr_37705_37775[(2)] = null);

(statearr_37705_37775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (23))){
var inst_37563 = (state_37650[(19)]);
var inst_37567 = (state_37650[(23)]);
var inst_37569 = (state_37650[(26)]);
var inst_37566 = (state_37650[(24)]);
var inst_37571 = (state_37650[(25)]);
var inst_37574 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37576 = (function (){var all_files = inst_37563;
var res_SINGLEQUOTE_ = inst_37566;
var res = inst_37567;
var files_not_loaded = inst_37569;
var dependencies_that_loaded = inst_37571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37563,inst_37567,inst_37569,inst_37566,inst_37571,inst_37574,state_val_37651,c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37575){
var map__37706 = p__37575;
var map__37706__$1 = ((((!((map__37706 == null)))?((((map__37706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37706):map__37706);
var request_url = cljs.core.get.call(null,map__37706__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37563,inst_37567,inst_37569,inst_37566,inst_37571,inst_37574,state_val_37651,c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37577 = cljs.core.reverse.call(null,inst_37571);
var inst_37578 = cljs.core.map.call(null,inst_37576,inst_37577);
var inst_37579 = cljs.core.pr_str.call(null,inst_37578);
var inst_37580 = figwheel.client.utils.log.call(null,inst_37579);
var state_37650__$1 = (function (){var statearr_37708 = state_37650;
(statearr_37708[(31)] = inst_37574);

return statearr_37708;
})();
var statearr_37709_37776 = state_37650__$1;
(statearr_37709_37776[(2)] = inst_37580);

(statearr_37709_37776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (35))){
var state_37650__$1 = state_37650;
var statearr_37710_37777 = state_37650__$1;
(statearr_37710_37777[(2)] = true);

(statearr_37710_37777[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (19))){
var inst_37553 = (state_37650[(12)]);
var inst_37559 = figwheel.client.file_reloading.expand_files.call(null,inst_37553);
var state_37650__$1 = state_37650;
var statearr_37711_37778 = state_37650__$1;
(statearr_37711_37778[(2)] = inst_37559);

(statearr_37711_37778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (11))){
var state_37650__$1 = state_37650;
var statearr_37712_37779 = state_37650__$1;
(statearr_37712_37779[(2)] = null);

(statearr_37712_37779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (9))){
var inst_37542 = (state_37650[(2)]);
var state_37650__$1 = state_37650;
var statearr_37713_37780 = state_37650__$1;
(statearr_37713_37780[(2)] = inst_37542);

(statearr_37713_37780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (5))){
var inst_37513 = (state_37650[(7)]);
var inst_37512 = (state_37650[(8)]);
var inst_37515 = (inst_37513 < inst_37512);
var inst_37516 = inst_37515;
var state_37650__$1 = state_37650;
if(cljs.core.truth_(inst_37516)){
var statearr_37714_37781 = state_37650__$1;
(statearr_37714_37781[(1)] = (7));

} else {
var statearr_37715_37782 = state_37650__$1;
(statearr_37715_37782[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (14))){
var inst_37523 = (state_37650[(22)]);
var inst_37532 = cljs.core.first.call(null,inst_37523);
var inst_37533 = figwheel.client.file_reloading.eval_body.call(null,inst_37532,opts);
var inst_37534 = cljs.core.next.call(null,inst_37523);
var inst_37510 = inst_37534;
var inst_37511 = null;
var inst_37512 = (0);
var inst_37513 = (0);
var state_37650__$1 = (function (){var statearr_37716 = state_37650;
(statearr_37716[(7)] = inst_37513);

(statearr_37716[(32)] = inst_37533);

(statearr_37716[(8)] = inst_37512);

(statearr_37716[(9)] = inst_37511);

(statearr_37716[(10)] = inst_37510);

return statearr_37716;
})();
var statearr_37717_37783 = state_37650__$1;
(statearr_37717_37783[(2)] = null);

(statearr_37717_37783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (45))){
var state_37650__$1 = state_37650;
var statearr_37718_37784 = state_37650__$1;
(statearr_37718_37784[(2)] = null);

(statearr_37718_37784[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (26))){
var inst_37563 = (state_37650[(19)]);
var inst_37567 = (state_37650[(23)]);
var inst_37569 = (state_37650[(26)]);
var inst_37566 = (state_37650[(24)]);
var inst_37571 = (state_37650[(25)]);
var inst_37586 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37588 = (function (){var all_files = inst_37563;
var res_SINGLEQUOTE_ = inst_37566;
var res = inst_37567;
var files_not_loaded = inst_37569;
var dependencies_that_loaded = inst_37571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37563,inst_37567,inst_37569,inst_37566,inst_37571,inst_37586,state_val_37651,c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37587){
var map__37719 = p__37587;
var map__37719__$1 = ((((!((map__37719 == null)))?((((map__37719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37719):map__37719);
var namespace = cljs.core.get.call(null,map__37719__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37719__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37563,inst_37567,inst_37569,inst_37566,inst_37571,inst_37586,state_val_37651,c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37589 = cljs.core.map.call(null,inst_37588,inst_37567);
var inst_37590 = cljs.core.pr_str.call(null,inst_37589);
var inst_37591 = figwheel.client.utils.log.call(null,inst_37590);
var inst_37592 = (function (){var all_files = inst_37563;
var res_SINGLEQUOTE_ = inst_37566;
var res = inst_37567;
var files_not_loaded = inst_37569;
var dependencies_that_loaded = inst_37571;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37563,inst_37567,inst_37569,inst_37566,inst_37571,inst_37586,inst_37588,inst_37589,inst_37590,inst_37591,state_val_37651,c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37563,inst_37567,inst_37569,inst_37566,inst_37571,inst_37586,inst_37588,inst_37589,inst_37590,inst_37591,state_val_37651,c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37593 = setTimeout(inst_37592,(10));
var state_37650__$1 = (function (){var statearr_37721 = state_37650;
(statearr_37721[(33)] = inst_37586);

(statearr_37721[(34)] = inst_37591);

return statearr_37721;
})();
var statearr_37722_37785 = state_37650__$1;
(statearr_37722_37785[(2)] = inst_37593);

(statearr_37722_37785[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (16))){
var state_37650__$1 = state_37650;
var statearr_37723_37786 = state_37650__$1;
(statearr_37723_37786[(2)] = reload_dependents);

(statearr_37723_37786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (38))){
var inst_37603 = (state_37650[(16)]);
var inst_37621 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37603);
var state_37650__$1 = state_37650;
var statearr_37724_37787 = state_37650__$1;
(statearr_37724_37787[(2)] = inst_37621);

(statearr_37724_37787[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (30))){
var state_37650__$1 = state_37650;
var statearr_37725_37788 = state_37650__$1;
(statearr_37725_37788[(2)] = null);

(statearr_37725_37788[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (10))){
var inst_37523 = (state_37650[(22)]);
var inst_37525 = cljs.core.chunked_seq_QMARK_.call(null,inst_37523);
var state_37650__$1 = state_37650;
if(inst_37525){
var statearr_37726_37789 = state_37650__$1;
(statearr_37726_37789[(1)] = (13));

} else {
var statearr_37727_37790 = state_37650__$1;
(statearr_37727_37790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (18))){
var inst_37557 = (state_37650[(2)]);
var state_37650__$1 = state_37650;
if(cljs.core.truth_(inst_37557)){
var statearr_37728_37791 = state_37650__$1;
(statearr_37728_37791[(1)] = (19));

} else {
var statearr_37729_37792 = state_37650__$1;
(statearr_37729_37792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (42))){
var state_37650__$1 = state_37650;
var statearr_37730_37793 = state_37650__$1;
(statearr_37730_37793[(2)] = null);

(statearr_37730_37793[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (37))){
var inst_37616 = (state_37650[(2)]);
var state_37650__$1 = state_37650;
var statearr_37731_37794 = state_37650__$1;
(statearr_37731_37794[(2)] = inst_37616);

(statearr_37731_37794[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (8))){
var inst_37523 = (state_37650[(22)]);
var inst_37510 = (state_37650[(10)]);
var inst_37523__$1 = cljs.core.seq.call(null,inst_37510);
var state_37650__$1 = (function (){var statearr_37732 = state_37650;
(statearr_37732[(22)] = inst_37523__$1);

return statearr_37732;
})();
if(inst_37523__$1){
var statearr_37733_37795 = state_37650__$1;
(statearr_37733_37795[(1)] = (10));

} else {
var statearr_37734_37796 = state_37650__$1;
(statearr_37734_37796[(1)] = (11));

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
});})(c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30536__auto__,c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____0 = (function (){
var statearr_37735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37735[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__);

(statearr_37735[(1)] = (1));

return statearr_37735;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____1 = (function (state_37650){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_37650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e37736){if((e37736 instanceof Object)){
var ex__30540__auto__ = e37736;
var statearr_37737_37797 = state_37650;
(statearr_37737_37797[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37798 = state_37650;
state_37650 = G__37798;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__ = function(state_37650){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____1.call(this,state_37650);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30626__auto__ = (function (){var statearr_37738 = f__30625__auto__.call(null);
(statearr_37738[(6)] = c__30624__auto__);

return statearr_37738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto__,map__37495,map__37495__$1,opts,before_jsload,on_jsload,reload_dependents,map__37496,map__37496__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30624__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37801,link){
var map__37802 = p__37801;
var map__37802__$1 = ((((!((map__37802 == null)))?((((map__37802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37802):map__37802);
var file = cljs.core.get.call(null,map__37802__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37802,map__37802__$1,file){
return (function (p1__37799_SHARP_,p2__37800_SHARP_){
if(cljs.core._EQ_.call(null,p1__37799_SHARP_,p2__37800_SHARP_)){
return p1__37799_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37802,map__37802__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37805){
var map__37806 = p__37805;
var map__37806__$1 = ((((!((map__37806 == null)))?((((map__37806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37806):map__37806);
var match_length = cljs.core.get.call(null,map__37806__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37806__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37804_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37804_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37808_SHARP_,p2__37809_SHARP_){
return cljs.core.assoc.call(null,p1__37808_SHARP_,cljs.core.get.call(null,p2__37809_SHARP_,key),p2__37809_SHARP_);
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
var loaded_f_datas_37810 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37810);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37810);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37811,p__37812){
var map__37813 = p__37811;
var map__37813__$1 = ((((!((map__37813 == null)))?((((map__37813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37813):map__37813);
var on_cssload = cljs.core.get.call(null,map__37813__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37814 = p__37812;
var map__37814__$1 = ((((!((map__37814 == null)))?((((map__37814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37814):map__37814);
var files_msg = map__37814__$1;
var files = cljs.core.get.call(null,map__37814__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1517373781631
