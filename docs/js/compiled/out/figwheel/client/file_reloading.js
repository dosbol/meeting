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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37135_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37135_SHARP_));
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
var seq__37136 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37137 = null;
var count__37138 = (0);
var i__37139 = (0);
while(true){
if((i__37139 < count__37138)){
var n = cljs.core._nth.call(null,chunk__37137,i__37139);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37140 = seq__37136;
var G__37141 = chunk__37137;
var G__37142 = count__37138;
var G__37143 = (i__37139 + (1));
seq__37136 = G__37140;
chunk__37137 = G__37141;
count__37138 = G__37142;
i__37139 = G__37143;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37136);
if(temp__4657__auto__){
var seq__37136__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37136__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37136__$1);
var G__37144 = cljs.core.chunk_rest.call(null,seq__37136__$1);
var G__37145 = c__28034__auto__;
var G__37146 = cljs.core.count.call(null,c__28034__auto__);
var G__37147 = (0);
seq__37136 = G__37144;
chunk__37137 = G__37145;
count__37138 = G__37146;
i__37139 = G__37147;
continue;
} else {
var n = cljs.core.first.call(null,seq__37136__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37148 = cljs.core.next.call(null,seq__37136__$1);
var G__37149 = null;
var G__37150 = (0);
var G__37151 = (0);
seq__37136 = G__37148;
chunk__37137 = G__37149;
count__37138 = G__37150;
i__37139 = G__37151;
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

var seq__37161_37169 = cljs.core.seq.call(null,deps);
var chunk__37162_37170 = null;
var count__37163_37171 = (0);
var i__37164_37172 = (0);
while(true){
if((i__37164_37172 < count__37163_37171)){
var dep_37173 = cljs.core._nth.call(null,chunk__37162_37170,i__37164_37172);
topo_sort_helper_STAR_.call(null,dep_37173,(depth + (1)),state);

var G__37174 = seq__37161_37169;
var G__37175 = chunk__37162_37170;
var G__37176 = count__37163_37171;
var G__37177 = (i__37164_37172 + (1));
seq__37161_37169 = G__37174;
chunk__37162_37170 = G__37175;
count__37163_37171 = G__37176;
i__37164_37172 = G__37177;
continue;
} else {
var temp__4657__auto___37178 = cljs.core.seq.call(null,seq__37161_37169);
if(temp__4657__auto___37178){
var seq__37161_37179__$1 = temp__4657__auto___37178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37161_37179__$1)){
var c__28034__auto___37180 = cljs.core.chunk_first.call(null,seq__37161_37179__$1);
var G__37181 = cljs.core.chunk_rest.call(null,seq__37161_37179__$1);
var G__37182 = c__28034__auto___37180;
var G__37183 = cljs.core.count.call(null,c__28034__auto___37180);
var G__37184 = (0);
seq__37161_37169 = G__37181;
chunk__37162_37170 = G__37182;
count__37163_37171 = G__37183;
i__37164_37172 = G__37184;
continue;
} else {
var dep_37185 = cljs.core.first.call(null,seq__37161_37179__$1);
topo_sort_helper_STAR_.call(null,dep_37185,(depth + (1)),state);

var G__37186 = cljs.core.next.call(null,seq__37161_37179__$1);
var G__37187 = null;
var G__37188 = (0);
var G__37189 = (0);
seq__37161_37169 = G__37186;
chunk__37162_37170 = G__37187;
count__37163_37171 = G__37188;
i__37164_37172 = G__37189;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37165){
var vec__37166 = p__37165;
var seq__37167 = cljs.core.seq.call(null,vec__37166);
var first__37168 = cljs.core.first.call(null,seq__37167);
var seq__37167__$1 = cljs.core.next.call(null,seq__37167);
var x = first__37168;
var xs = seq__37167__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37166,seq__37167,first__37168,seq__37167__$1,x,xs,get_deps__$1){
return (function (p1__37152_SHARP_){
return clojure.set.difference.call(null,p1__37152_SHARP_,x);
});})(vec__37166,seq__37167,first__37168,seq__37167__$1,x,xs,get_deps__$1))
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
var seq__37190 = cljs.core.seq.call(null,provides);
var chunk__37191 = null;
var count__37192 = (0);
var i__37193 = (0);
while(true){
if((i__37193 < count__37192)){
var prov = cljs.core._nth.call(null,chunk__37191,i__37193);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37194_37202 = cljs.core.seq.call(null,requires);
var chunk__37195_37203 = null;
var count__37196_37204 = (0);
var i__37197_37205 = (0);
while(true){
if((i__37197_37205 < count__37196_37204)){
var req_37206 = cljs.core._nth.call(null,chunk__37195_37203,i__37197_37205);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37206,prov);

var G__37207 = seq__37194_37202;
var G__37208 = chunk__37195_37203;
var G__37209 = count__37196_37204;
var G__37210 = (i__37197_37205 + (1));
seq__37194_37202 = G__37207;
chunk__37195_37203 = G__37208;
count__37196_37204 = G__37209;
i__37197_37205 = G__37210;
continue;
} else {
var temp__4657__auto___37211 = cljs.core.seq.call(null,seq__37194_37202);
if(temp__4657__auto___37211){
var seq__37194_37212__$1 = temp__4657__auto___37211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37194_37212__$1)){
var c__28034__auto___37213 = cljs.core.chunk_first.call(null,seq__37194_37212__$1);
var G__37214 = cljs.core.chunk_rest.call(null,seq__37194_37212__$1);
var G__37215 = c__28034__auto___37213;
var G__37216 = cljs.core.count.call(null,c__28034__auto___37213);
var G__37217 = (0);
seq__37194_37202 = G__37214;
chunk__37195_37203 = G__37215;
count__37196_37204 = G__37216;
i__37197_37205 = G__37217;
continue;
} else {
var req_37218 = cljs.core.first.call(null,seq__37194_37212__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37218,prov);

var G__37219 = cljs.core.next.call(null,seq__37194_37212__$1);
var G__37220 = null;
var G__37221 = (0);
var G__37222 = (0);
seq__37194_37202 = G__37219;
chunk__37195_37203 = G__37220;
count__37196_37204 = G__37221;
i__37197_37205 = G__37222;
continue;
}
} else {
}
}
break;
}

var G__37223 = seq__37190;
var G__37224 = chunk__37191;
var G__37225 = count__37192;
var G__37226 = (i__37193 + (1));
seq__37190 = G__37223;
chunk__37191 = G__37224;
count__37192 = G__37225;
i__37193 = G__37226;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37190);
if(temp__4657__auto__){
var seq__37190__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37190__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37190__$1);
var G__37227 = cljs.core.chunk_rest.call(null,seq__37190__$1);
var G__37228 = c__28034__auto__;
var G__37229 = cljs.core.count.call(null,c__28034__auto__);
var G__37230 = (0);
seq__37190 = G__37227;
chunk__37191 = G__37228;
count__37192 = G__37229;
i__37193 = G__37230;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37190__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37198_37231 = cljs.core.seq.call(null,requires);
var chunk__37199_37232 = null;
var count__37200_37233 = (0);
var i__37201_37234 = (0);
while(true){
if((i__37201_37234 < count__37200_37233)){
var req_37235 = cljs.core._nth.call(null,chunk__37199_37232,i__37201_37234);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37235,prov);

var G__37236 = seq__37198_37231;
var G__37237 = chunk__37199_37232;
var G__37238 = count__37200_37233;
var G__37239 = (i__37201_37234 + (1));
seq__37198_37231 = G__37236;
chunk__37199_37232 = G__37237;
count__37200_37233 = G__37238;
i__37201_37234 = G__37239;
continue;
} else {
var temp__4657__auto___37240__$1 = cljs.core.seq.call(null,seq__37198_37231);
if(temp__4657__auto___37240__$1){
var seq__37198_37241__$1 = temp__4657__auto___37240__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37198_37241__$1)){
var c__28034__auto___37242 = cljs.core.chunk_first.call(null,seq__37198_37241__$1);
var G__37243 = cljs.core.chunk_rest.call(null,seq__37198_37241__$1);
var G__37244 = c__28034__auto___37242;
var G__37245 = cljs.core.count.call(null,c__28034__auto___37242);
var G__37246 = (0);
seq__37198_37231 = G__37243;
chunk__37199_37232 = G__37244;
count__37200_37233 = G__37245;
i__37201_37234 = G__37246;
continue;
} else {
var req_37247 = cljs.core.first.call(null,seq__37198_37241__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37247,prov);

var G__37248 = cljs.core.next.call(null,seq__37198_37241__$1);
var G__37249 = null;
var G__37250 = (0);
var G__37251 = (0);
seq__37198_37231 = G__37248;
chunk__37199_37232 = G__37249;
count__37200_37233 = G__37250;
i__37201_37234 = G__37251;
continue;
}
} else {
}
}
break;
}

var G__37252 = cljs.core.next.call(null,seq__37190__$1);
var G__37253 = null;
var G__37254 = (0);
var G__37255 = (0);
seq__37190 = G__37252;
chunk__37191 = G__37253;
count__37192 = G__37254;
i__37193 = G__37255;
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
var seq__37256_37260 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37257_37261 = null;
var count__37258_37262 = (0);
var i__37259_37263 = (0);
while(true){
if((i__37259_37263 < count__37258_37262)){
var ns_37264 = cljs.core._nth.call(null,chunk__37257_37261,i__37259_37263);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37264);

var G__37265 = seq__37256_37260;
var G__37266 = chunk__37257_37261;
var G__37267 = count__37258_37262;
var G__37268 = (i__37259_37263 + (1));
seq__37256_37260 = G__37265;
chunk__37257_37261 = G__37266;
count__37258_37262 = G__37267;
i__37259_37263 = G__37268;
continue;
} else {
var temp__4657__auto___37269 = cljs.core.seq.call(null,seq__37256_37260);
if(temp__4657__auto___37269){
var seq__37256_37270__$1 = temp__4657__auto___37269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37256_37270__$1)){
var c__28034__auto___37271 = cljs.core.chunk_first.call(null,seq__37256_37270__$1);
var G__37272 = cljs.core.chunk_rest.call(null,seq__37256_37270__$1);
var G__37273 = c__28034__auto___37271;
var G__37274 = cljs.core.count.call(null,c__28034__auto___37271);
var G__37275 = (0);
seq__37256_37260 = G__37272;
chunk__37257_37261 = G__37273;
count__37258_37262 = G__37274;
i__37259_37263 = G__37275;
continue;
} else {
var ns_37276 = cljs.core.first.call(null,seq__37256_37270__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37276);

var G__37277 = cljs.core.next.call(null,seq__37256_37270__$1);
var G__37278 = null;
var G__37279 = (0);
var G__37280 = (0);
seq__37256_37260 = G__37277;
chunk__37257_37261 = G__37278;
count__37258_37262 = G__37279;
i__37259_37263 = G__37280;
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
var G__37281__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37281 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37282__i = 0, G__37282__a = new Array(arguments.length -  0);
while (G__37282__i < G__37282__a.length) {G__37282__a[G__37282__i] = arguments[G__37282__i + 0]; ++G__37282__i;}
  args = new cljs.core.IndexedSeq(G__37282__a,0,null);
} 
return G__37281__delegate.call(this,args);};
G__37281.cljs$lang$maxFixedArity = 0;
G__37281.cljs$lang$applyTo = (function (arglist__37283){
var args = cljs.core.seq(arglist__37283);
return G__37281__delegate(args);
});
G__37281.cljs$core$IFn$_invoke$arity$variadic = G__37281__delegate;
return G__37281;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37284_SHARP_,p2__37285_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37284_SHARP_)].join('')),p2__37285_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37286_SHARP_,p2__37287_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37286_SHARP_)].join(''),p2__37287_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37288 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37288.addCallback(((function (G__37288){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37288))
);

G__37288.addErrback(((function (G__37288){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37288))
);

return G__37288;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37289 = cljs.core._EQ_;
var expr__37290 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37289.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37290))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37289,expr__37290){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37289,expr__37290))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37289,expr__37290){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37292){if((e37292 instanceof Error)){
var e = e37292;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37292;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37289,expr__37290))
} else {
if(cljs.core.truth_(pred__37289.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37290))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37289.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37290))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37289.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37290))){
return ((function (pred__37289,expr__37290){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37293){if((e37293 instanceof Error)){
var e = e37293;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37293;

}
}})());
});
;})(pred__37289,expr__37290))
} else {
return ((function (pred__37289,expr__37290){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37289,expr__37290))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37294,callback){
var map__37295 = p__37294;
var map__37295__$1 = ((((!((map__37295 == null)))?((((map__37295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37295):map__37295);
var file_msg = map__37295__$1;
var request_url = cljs.core.get.call(null,map__37295__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37295,map__37295__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37295,map__37295__$1,file_msg,request_url))
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
return (function (state_37319){
var state_val_37320 = (state_37319[(1)]);
if((state_val_37320 === (7))){
var inst_37315 = (state_37319[(2)]);
var state_37319__$1 = state_37319;
var statearr_37321_37338 = state_37319__$1;
(statearr_37321_37338[(2)] = inst_37315);

(statearr_37321_37338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (1))){
var state_37319__$1 = state_37319;
var statearr_37322_37339 = state_37319__$1;
(statearr_37322_37339[(2)] = null);

(statearr_37322_37339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (4))){
var inst_37299 = (state_37319[(7)]);
var inst_37299__$1 = (state_37319[(2)]);
var state_37319__$1 = (function (){var statearr_37323 = state_37319;
(statearr_37323[(7)] = inst_37299__$1);

return statearr_37323;
})();
if(cljs.core.truth_(inst_37299__$1)){
var statearr_37324_37340 = state_37319__$1;
(statearr_37324_37340[(1)] = (5));

} else {
var statearr_37325_37341 = state_37319__$1;
(statearr_37325_37341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (6))){
var state_37319__$1 = state_37319;
var statearr_37326_37342 = state_37319__$1;
(statearr_37326_37342[(2)] = null);

(statearr_37326_37342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (3))){
var inst_37317 = (state_37319[(2)]);
var state_37319__$1 = state_37319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37319__$1,inst_37317);
} else {
if((state_val_37320 === (2))){
var state_37319__$1 = state_37319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37319__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37320 === (11))){
var inst_37311 = (state_37319[(2)]);
var state_37319__$1 = (function (){var statearr_37327 = state_37319;
(statearr_37327[(8)] = inst_37311);

return statearr_37327;
})();
var statearr_37328_37343 = state_37319__$1;
(statearr_37328_37343[(2)] = null);

(statearr_37328_37343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (9))){
var inst_37305 = (state_37319[(9)]);
var inst_37303 = (state_37319[(10)]);
var inst_37307 = inst_37305.call(null,inst_37303);
var state_37319__$1 = state_37319;
var statearr_37329_37344 = state_37319__$1;
(statearr_37329_37344[(2)] = inst_37307);

(statearr_37329_37344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (5))){
var inst_37299 = (state_37319[(7)]);
var inst_37301 = figwheel.client.file_reloading.blocking_load.call(null,inst_37299);
var state_37319__$1 = state_37319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37319__$1,(8),inst_37301);
} else {
if((state_val_37320 === (10))){
var inst_37303 = (state_37319[(10)]);
var inst_37309 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37303);
var state_37319__$1 = state_37319;
var statearr_37330_37345 = state_37319__$1;
(statearr_37330_37345[(2)] = inst_37309);

(statearr_37330_37345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37320 === (8))){
var inst_37299 = (state_37319[(7)]);
var inst_37305 = (state_37319[(9)]);
var inst_37303 = (state_37319[(2)]);
var inst_37304 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37305__$1 = cljs.core.get.call(null,inst_37304,inst_37299);
var state_37319__$1 = (function (){var statearr_37331 = state_37319;
(statearr_37331[(9)] = inst_37305__$1);

(statearr_37331[(10)] = inst_37303);

return statearr_37331;
})();
if(cljs.core.truth_(inst_37305__$1)){
var statearr_37332_37346 = state_37319__$1;
(statearr_37332_37346[(1)] = (9));

} else {
var statearr_37333_37347 = state_37319__$1;
(statearr_37333_37347[(1)] = (10));

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
var statearr_37334 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37334[(0)] = figwheel$client$file_reloading$state_machine__30537__auto__);

(statearr_37334[(1)] = (1));

return statearr_37334;
});
var figwheel$client$file_reloading$state_machine__30537__auto____1 = (function (state_37319){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_37319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e37335){if((e37335 instanceof Object)){
var ex__30540__auto__ = e37335;
var statearr_37336_37348 = state_37319;
(statearr_37336_37348[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37349 = state_37319;
state_37319 = G__37349;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30537__auto__ = function(state_37319){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30537__auto____1.call(this,state_37319);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30537__auto____0;
figwheel$client$file_reloading$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30537__auto____1;
return figwheel$client$file_reloading$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_37337 = f__30625__auto__.call(null);
(statearr_37337[(6)] = c__30624__auto__);

return statearr_37337;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37350,callback){
var map__37351 = p__37350;
var map__37351__$1 = ((((!((map__37351 == null)))?((((map__37351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37351):map__37351);
var file_msg = map__37351__$1;
var namespace = cljs.core.get.call(null,map__37351__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37351,map__37351__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37351,map__37351__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37353){
var map__37354 = p__37353;
var map__37354__$1 = ((((!((map__37354 == null)))?((((map__37354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37354):map__37354);
var file_msg = map__37354__$1;
var namespace = cljs.core.get.call(null,map__37354__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37356){
var map__37357 = p__37356;
var map__37357__$1 = ((((!((map__37357 == null)))?((((map__37357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37357):map__37357);
var file_msg = map__37357__$1;
var namespace = cljs.core.get.call(null,map__37357__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37359,callback){
var map__37360 = p__37359;
var map__37360__$1 = ((((!((map__37360 == null)))?((((map__37360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37360):map__37360);
var file_msg = map__37360__$1;
var request_url = cljs.core.get.call(null,map__37360__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37360__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30624__auto___37410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___37410,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___37410,out){
return (function (state_37395){
var state_val_37396 = (state_37395[(1)]);
if((state_val_37396 === (1))){
var inst_37369 = cljs.core.seq.call(null,files);
var inst_37370 = cljs.core.first.call(null,inst_37369);
var inst_37371 = cljs.core.next.call(null,inst_37369);
var inst_37372 = files;
var state_37395__$1 = (function (){var statearr_37397 = state_37395;
(statearr_37397[(7)] = inst_37370);

(statearr_37397[(8)] = inst_37372);

(statearr_37397[(9)] = inst_37371);

return statearr_37397;
})();
var statearr_37398_37411 = state_37395__$1;
(statearr_37398_37411[(2)] = null);

(statearr_37398_37411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (2))){
var inst_37378 = (state_37395[(10)]);
var inst_37372 = (state_37395[(8)]);
var inst_37377 = cljs.core.seq.call(null,inst_37372);
var inst_37378__$1 = cljs.core.first.call(null,inst_37377);
var inst_37379 = cljs.core.next.call(null,inst_37377);
var inst_37380 = (inst_37378__$1 == null);
var inst_37381 = cljs.core.not.call(null,inst_37380);
var state_37395__$1 = (function (){var statearr_37399 = state_37395;
(statearr_37399[(10)] = inst_37378__$1);

(statearr_37399[(11)] = inst_37379);

return statearr_37399;
})();
if(inst_37381){
var statearr_37400_37412 = state_37395__$1;
(statearr_37400_37412[(1)] = (4));

} else {
var statearr_37401_37413 = state_37395__$1;
(statearr_37401_37413[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (3))){
var inst_37393 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37395__$1,inst_37393);
} else {
if((state_val_37396 === (4))){
var inst_37378 = (state_37395[(10)]);
var inst_37383 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37378);
var state_37395__$1 = state_37395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37395__$1,(7),inst_37383);
} else {
if((state_val_37396 === (5))){
var inst_37389 = cljs.core.async.close_BANG_.call(null,out);
var state_37395__$1 = state_37395;
var statearr_37402_37414 = state_37395__$1;
(statearr_37402_37414[(2)] = inst_37389);

(statearr_37402_37414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (6))){
var inst_37391 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37403_37415 = state_37395__$1;
(statearr_37403_37415[(2)] = inst_37391);

(statearr_37403_37415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (7))){
var inst_37379 = (state_37395[(11)]);
var inst_37385 = (state_37395[(2)]);
var inst_37386 = cljs.core.async.put_BANG_.call(null,out,inst_37385);
var inst_37372 = inst_37379;
var state_37395__$1 = (function (){var statearr_37404 = state_37395;
(statearr_37404[(12)] = inst_37386);

(statearr_37404[(8)] = inst_37372);

return statearr_37404;
})();
var statearr_37405_37416 = state_37395__$1;
(statearr_37405_37416[(2)] = null);

(statearr_37405_37416[(1)] = (2));


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
});})(c__30624__auto___37410,out))
;
return ((function (switch__30536__auto__,c__30624__auto___37410,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____0 = (function (){
var statearr_37406 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37406[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__);

(statearr_37406[(1)] = (1));

return statearr_37406;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____1 = (function (state_37395){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_37395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e37407){if((e37407 instanceof Object)){
var ex__30540__auto__ = e37407;
var statearr_37408_37417 = state_37395;
(statearr_37408_37417[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37418 = state_37395;
state_37395 = G__37418;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__ = function(state_37395){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____1.call(this,state_37395);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___37410,out))
})();
var state__30626__auto__ = (function (){var statearr_37409 = f__30625__auto__.call(null);
(statearr_37409[(6)] = c__30624__auto___37410);

return statearr_37409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___37410,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37419,opts){
var map__37420 = p__37419;
var map__37420__$1 = ((((!((map__37420 == null)))?((((map__37420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37420):map__37420);
var eval_body = cljs.core.get.call(null,map__37420__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37420__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37422){var e = e37422;
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
return (function (p1__37423_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37423_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37424){
var vec__37425 = p__37424;
var k = cljs.core.nth.call(null,vec__37425,(0),null);
var v = cljs.core.nth.call(null,vec__37425,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37428){
var vec__37429 = p__37428;
var k = cljs.core.nth.call(null,vec__37429,(0),null);
var v = cljs.core.nth.call(null,vec__37429,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37435,p__37436){
var map__37437 = p__37435;
var map__37437__$1 = ((((!((map__37437 == null)))?((((map__37437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37437):map__37437);
var opts = map__37437__$1;
var before_jsload = cljs.core.get.call(null,map__37437__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37437__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37437__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37438 = p__37436;
var map__37438__$1 = ((((!((map__37438 == null)))?((((map__37438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37438):map__37438);
var msg = map__37438__$1;
var files = cljs.core.get.call(null,map__37438__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37438__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37438__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37592){
var state_val_37593 = (state_37592[(1)]);
if((state_val_37593 === (7))){
var inst_37453 = (state_37592[(7)]);
var inst_37452 = (state_37592[(8)]);
var inst_37454 = (state_37592[(9)]);
var inst_37455 = (state_37592[(10)]);
var inst_37460 = cljs.core._nth.call(null,inst_37453,inst_37455);
var inst_37461 = figwheel.client.file_reloading.eval_body.call(null,inst_37460,opts);
var inst_37462 = (inst_37455 + (1));
var tmp37594 = inst_37453;
var tmp37595 = inst_37452;
var tmp37596 = inst_37454;
var inst_37452__$1 = tmp37595;
var inst_37453__$1 = tmp37594;
var inst_37454__$1 = tmp37596;
var inst_37455__$1 = inst_37462;
var state_37592__$1 = (function (){var statearr_37597 = state_37592;
(statearr_37597[(11)] = inst_37461);

(statearr_37597[(7)] = inst_37453__$1);

(statearr_37597[(8)] = inst_37452__$1);

(statearr_37597[(9)] = inst_37454__$1);

(statearr_37597[(10)] = inst_37455__$1);

return statearr_37597;
})();
var statearr_37598_37681 = state_37592__$1;
(statearr_37598_37681[(2)] = null);

(statearr_37598_37681[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (20))){
var inst_37495 = (state_37592[(12)]);
var inst_37503 = figwheel.client.file_reloading.sort_files.call(null,inst_37495);
var state_37592__$1 = state_37592;
var statearr_37599_37682 = state_37592__$1;
(statearr_37599_37682[(2)] = inst_37503);

(statearr_37599_37682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (27))){
var state_37592__$1 = state_37592;
var statearr_37600_37683 = state_37592__$1;
(statearr_37600_37683[(2)] = null);

(statearr_37600_37683[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (1))){
var inst_37444 = (state_37592[(13)]);
var inst_37441 = before_jsload.call(null,files);
var inst_37442 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37443 = (function (){return ((function (inst_37444,inst_37441,inst_37442,state_val_37593,c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37432_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37432_SHARP_);
});
;})(inst_37444,inst_37441,inst_37442,state_val_37593,c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37444__$1 = cljs.core.filter.call(null,inst_37443,files);
var inst_37445 = cljs.core.not_empty.call(null,inst_37444__$1);
var state_37592__$1 = (function (){var statearr_37601 = state_37592;
(statearr_37601[(14)] = inst_37441);

(statearr_37601[(15)] = inst_37442);

(statearr_37601[(13)] = inst_37444__$1);

return statearr_37601;
})();
if(cljs.core.truth_(inst_37445)){
var statearr_37602_37684 = state_37592__$1;
(statearr_37602_37684[(1)] = (2));

} else {
var statearr_37603_37685 = state_37592__$1;
(statearr_37603_37685[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (24))){
var state_37592__$1 = state_37592;
var statearr_37604_37686 = state_37592__$1;
(statearr_37604_37686[(2)] = null);

(statearr_37604_37686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (39))){
var inst_37545 = (state_37592[(16)]);
var state_37592__$1 = state_37592;
var statearr_37605_37687 = state_37592__$1;
(statearr_37605_37687[(2)] = inst_37545);

(statearr_37605_37687[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (46))){
var inst_37587 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37606_37688 = state_37592__$1;
(statearr_37606_37688[(2)] = inst_37587);

(statearr_37606_37688[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (4))){
var inst_37489 = (state_37592[(2)]);
var inst_37490 = cljs.core.List.EMPTY;
var inst_37491 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37490);
var inst_37492 = (function (){return ((function (inst_37489,inst_37490,inst_37491,state_val_37593,c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37433_SHARP_){
var and__27183__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37433_SHARP_);
if(cljs.core.truth_(and__27183__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37433_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37433_SHARP_)));
} else {
return and__27183__auto__;
}
});
;})(inst_37489,inst_37490,inst_37491,state_val_37593,c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37493 = cljs.core.filter.call(null,inst_37492,files);
var inst_37494 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37495 = cljs.core.concat.call(null,inst_37493,inst_37494);
var state_37592__$1 = (function (){var statearr_37607 = state_37592;
(statearr_37607[(12)] = inst_37495);

(statearr_37607[(17)] = inst_37489);

(statearr_37607[(18)] = inst_37491);

return statearr_37607;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37608_37689 = state_37592__$1;
(statearr_37608_37689[(1)] = (16));

} else {
var statearr_37609_37690 = state_37592__$1;
(statearr_37609_37690[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (15))){
var inst_37479 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37610_37691 = state_37592__$1;
(statearr_37610_37691[(2)] = inst_37479);

(statearr_37610_37691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (21))){
var inst_37505 = (state_37592[(19)]);
var inst_37505__$1 = (state_37592[(2)]);
var inst_37506 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37505__$1);
var state_37592__$1 = (function (){var statearr_37611 = state_37592;
(statearr_37611[(19)] = inst_37505__$1);

return statearr_37611;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37592__$1,(22),inst_37506);
} else {
if((state_val_37593 === (31))){
var inst_37590 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37592__$1,inst_37590);
} else {
if((state_val_37593 === (32))){
var inst_37545 = (state_37592[(16)]);
var inst_37550 = inst_37545.cljs$lang$protocol_mask$partition0$;
var inst_37551 = (inst_37550 & (64));
var inst_37552 = inst_37545.cljs$core$ISeq$;
var inst_37553 = (cljs.core.PROTOCOL_SENTINEL === inst_37552);
var inst_37554 = (inst_37551) || (inst_37553);
var state_37592__$1 = state_37592;
if(cljs.core.truth_(inst_37554)){
var statearr_37612_37692 = state_37592__$1;
(statearr_37612_37692[(1)] = (35));

} else {
var statearr_37613_37693 = state_37592__$1;
(statearr_37613_37693[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (40))){
var inst_37567 = (state_37592[(20)]);
var inst_37566 = (state_37592[(2)]);
var inst_37567__$1 = cljs.core.get.call(null,inst_37566,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37568 = cljs.core.get.call(null,inst_37566,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37569 = cljs.core.not_empty.call(null,inst_37567__$1);
var state_37592__$1 = (function (){var statearr_37614 = state_37592;
(statearr_37614[(20)] = inst_37567__$1);

(statearr_37614[(21)] = inst_37568);

return statearr_37614;
})();
if(cljs.core.truth_(inst_37569)){
var statearr_37615_37694 = state_37592__$1;
(statearr_37615_37694[(1)] = (41));

} else {
var statearr_37616_37695 = state_37592__$1;
(statearr_37616_37695[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (33))){
var state_37592__$1 = state_37592;
var statearr_37617_37696 = state_37592__$1;
(statearr_37617_37696[(2)] = false);

(statearr_37617_37696[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (13))){
var inst_37465 = (state_37592[(22)]);
var inst_37469 = cljs.core.chunk_first.call(null,inst_37465);
var inst_37470 = cljs.core.chunk_rest.call(null,inst_37465);
var inst_37471 = cljs.core.count.call(null,inst_37469);
var inst_37452 = inst_37470;
var inst_37453 = inst_37469;
var inst_37454 = inst_37471;
var inst_37455 = (0);
var state_37592__$1 = (function (){var statearr_37618 = state_37592;
(statearr_37618[(7)] = inst_37453);

(statearr_37618[(8)] = inst_37452);

(statearr_37618[(9)] = inst_37454);

(statearr_37618[(10)] = inst_37455);

return statearr_37618;
})();
var statearr_37619_37697 = state_37592__$1;
(statearr_37619_37697[(2)] = null);

(statearr_37619_37697[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (22))){
var inst_37513 = (state_37592[(23)]);
var inst_37505 = (state_37592[(19)]);
var inst_37508 = (state_37592[(24)]);
var inst_37509 = (state_37592[(25)]);
var inst_37508__$1 = (state_37592[(2)]);
var inst_37509__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37508__$1);
var inst_37510 = (function (){var all_files = inst_37505;
var res_SINGLEQUOTE_ = inst_37508__$1;
var res = inst_37509__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37513,inst_37505,inst_37508,inst_37509,inst_37508__$1,inst_37509__$1,state_val_37593,c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37434_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37434_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37513,inst_37505,inst_37508,inst_37509,inst_37508__$1,inst_37509__$1,state_val_37593,c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37511 = cljs.core.filter.call(null,inst_37510,inst_37508__$1);
var inst_37512 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37513__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37512);
var inst_37514 = cljs.core.not_empty.call(null,inst_37513__$1);
var state_37592__$1 = (function (){var statearr_37620 = state_37592;
(statearr_37620[(23)] = inst_37513__$1);

(statearr_37620[(24)] = inst_37508__$1);

(statearr_37620[(26)] = inst_37511);

(statearr_37620[(25)] = inst_37509__$1);

return statearr_37620;
})();
if(cljs.core.truth_(inst_37514)){
var statearr_37621_37698 = state_37592__$1;
(statearr_37621_37698[(1)] = (23));

} else {
var statearr_37622_37699 = state_37592__$1;
(statearr_37622_37699[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (36))){
var state_37592__$1 = state_37592;
var statearr_37623_37700 = state_37592__$1;
(statearr_37623_37700[(2)] = false);

(statearr_37623_37700[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (41))){
var inst_37567 = (state_37592[(20)]);
var inst_37571 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37572 = cljs.core.map.call(null,inst_37571,inst_37567);
var inst_37573 = cljs.core.pr_str.call(null,inst_37572);
var inst_37574 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37573)].join('');
var inst_37575 = figwheel.client.utils.log.call(null,inst_37574);
var state_37592__$1 = state_37592;
var statearr_37624_37701 = state_37592__$1;
(statearr_37624_37701[(2)] = inst_37575);

(statearr_37624_37701[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (43))){
var inst_37568 = (state_37592[(21)]);
var inst_37578 = (state_37592[(2)]);
var inst_37579 = cljs.core.not_empty.call(null,inst_37568);
var state_37592__$1 = (function (){var statearr_37625 = state_37592;
(statearr_37625[(27)] = inst_37578);

return statearr_37625;
})();
if(cljs.core.truth_(inst_37579)){
var statearr_37626_37702 = state_37592__$1;
(statearr_37626_37702[(1)] = (44));

} else {
var statearr_37627_37703 = state_37592__$1;
(statearr_37627_37703[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (29))){
var inst_37513 = (state_37592[(23)]);
var inst_37505 = (state_37592[(19)]);
var inst_37508 = (state_37592[(24)]);
var inst_37545 = (state_37592[(16)]);
var inst_37511 = (state_37592[(26)]);
var inst_37509 = (state_37592[(25)]);
var inst_37541 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37544 = (function (){var all_files = inst_37505;
var res_SINGLEQUOTE_ = inst_37508;
var res = inst_37509;
var files_not_loaded = inst_37511;
var dependencies_that_loaded = inst_37513;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37513,inst_37505,inst_37508,inst_37545,inst_37511,inst_37509,inst_37541,state_val_37593,c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37543){
var map__37628 = p__37543;
var map__37628__$1 = ((((!((map__37628 == null)))?((((map__37628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37628):map__37628);
var namespace = cljs.core.get.call(null,map__37628__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37513,inst_37505,inst_37508,inst_37545,inst_37511,inst_37509,inst_37541,state_val_37593,c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37545__$1 = cljs.core.group_by.call(null,inst_37544,inst_37511);
var inst_37547 = (inst_37545__$1 == null);
var inst_37548 = cljs.core.not.call(null,inst_37547);
var state_37592__$1 = (function (){var statearr_37630 = state_37592;
(statearr_37630[(28)] = inst_37541);

(statearr_37630[(16)] = inst_37545__$1);

return statearr_37630;
})();
if(inst_37548){
var statearr_37631_37704 = state_37592__$1;
(statearr_37631_37704[(1)] = (32));

} else {
var statearr_37632_37705 = state_37592__$1;
(statearr_37632_37705[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (44))){
var inst_37568 = (state_37592[(21)]);
var inst_37581 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37568);
var inst_37582 = cljs.core.pr_str.call(null,inst_37581);
var inst_37583 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37582)].join('');
var inst_37584 = figwheel.client.utils.log.call(null,inst_37583);
var state_37592__$1 = state_37592;
var statearr_37633_37706 = state_37592__$1;
(statearr_37633_37706[(2)] = inst_37584);

(statearr_37633_37706[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (6))){
var inst_37486 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37634_37707 = state_37592__$1;
(statearr_37634_37707[(2)] = inst_37486);

(statearr_37634_37707[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (28))){
var inst_37511 = (state_37592[(26)]);
var inst_37538 = (state_37592[(2)]);
var inst_37539 = cljs.core.not_empty.call(null,inst_37511);
var state_37592__$1 = (function (){var statearr_37635 = state_37592;
(statearr_37635[(29)] = inst_37538);

return statearr_37635;
})();
if(cljs.core.truth_(inst_37539)){
var statearr_37636_37708 = state_37592__$1;
(statearr_37636_37708[(1)] = (29));

} else {
var statearr_37637_37709 = state_37592__$1;
(statearr_37637_37709[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (25))){
var inst_37509 = (state_37592[(25)]);
var inst_37525 = (state_37592[(2)]);
var inst_37526 = cljs.core.not_empty.call(null,inst_37509);
var state_37592__$1 = (function (){var statearr_37638 = state_37592;
(statearr_37638[(30)] = inst_37525);

return statearr_37638;
})();
if(cljs.core.truth_(inst_37526)){
var statearr_37639_37710 = state_37592__$1;
(statearr_37639_37710[(1)] = (26));

} else {
var statearr_37640_37711 = state_37592__$1;
(statearr_37640_37711[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (34))){
var inst_37561 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
if(cljs.core.truth_(inst_37561)){
var statearr_37641_37712 = state_37592__$1;
(statearr_37641_37712[(1)] = (38));

} else {
var statearr_37642_37713 = state_37592__$1;
(statearr_37642_37713[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (17))){
var state_37592__$1 = state_37592;
var statearr_37643_37714 = state_37592__$1;
(statearr_37643_37714[(2)] = recompile_dependents);

(statearr_37643_37714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (3))){
var state_37592__$1 = state_37592;
var statearr_37644_37715 = state_37592__$1;
(statearr_37644_37715[(2)] = null);

(statearr_37644_37715[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (12))){
var inst_37482 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37645_37716 = state_37592__$1;
(statearr_37645_37716[(2)] = inst_37482);

(statearr_37645_37716[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (2))){
var inst_37444 = (state_37592[(13)]);
var inst_37451 = cljs.core.seq.call(null,inst_37444);
var inst_37452 = inst_37451;
var inst_37453 = null;
var inst_37454 = (0);
var inst_37455 = (0);
var state_37592__$1 = (function (){var statearr_37646 = state_37592;
(statearr_37646[(7)] = inst_37453);

(statearr_37646[(8)] = inst_37452);

(statearr_37646[(9)] = inst_37454);

(statearr_37646[(10)] = inst_37455);

return statearr_37646;
})();
var statearr_37647_37717 = state_37592__$1;
(statearr_37647_37717[(2)] = null);

(statearr_37647_37717[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (23))){
var inst_37513 = (state_37592[(23)]);
var inst_37505 = (state_37592[(19)]);
var inst_37508 = (state_37592[(24)]);
var inst_37511 = (state_37592[(26)]);
var inst_37509 = (state_37592[(25)]);
var inst_37516 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37518 = (function (){var all_files = inst_37505;
var res_SINGLEQUOTE_ = inst_37508;
var res = inst_37509;
var files_not_loaded = inst_37511;
var dependencies_that_loaded = inst_37513;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37513,inst_37505,inst_37508,inst_37511,inst_37509,inst_37516,state_val_37593,c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37517){
var map__37648 = p__37517;
var map__37648__$1 = ((((!((map__37648 == null)))?((((map__37648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37648.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37648):map__37648);
var request_url = cljs.core.get.call(null,map__37648__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37513,inst_37505,inst_37508,inst_37511,inst_37509,inst_37516,state_val_37593,c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37519 = cljs.core.reverse.call(null,inst_37513);
var inst_37520 = cljs.core.map.call(null,inst_37518,inst_37519);
var inst_37521 = cljs.core.pr_str.call(null,inst_37520);
var inst_37522 = figwheel.client.utils.log.call(null,inst_37521);
var state_37592__$1 = (function (){var statearr_37650 = state_37592;
(statearr_37650[(31)] = inst_37516);

return statearr_37650;
})();
var statearr_37651_37718 = state_37592__$1;
(statearr_37651_37718[(2)] = inst_37522);

(statearr_37651_37718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (35))){
var state_37592__$1 = state_37592;
var statearr_37652_37719 = state_37592__$1;
(statearr_37652_37719[(2)] = true);

(statearr_37652_37719[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (19))){
var inst_37495 = (state_37592[(12)]);
var inst_37501 = figwheel.client.file_reloading.expand_files.call(null,inst_37495);
var state_37592__$1 = state_37592;
var statearr_37653_37720 = state_37592__$1;
(statearr_37653_37720[(2)] = inst_37501);

(statearr_37653_37720[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (11))){
var state_37592__$1 = state_37592;
var statearr_37654_37721 = state_37592__$1;
(statearr_37654_37721[(2)] = null);

(statearr_37654_37721[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (9))){
var inst_37484 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37655_37722 = state_37592__$1;
(statearr_37655_37722[(2)] = inst_37484);

(statearr_37655_37722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (5))){
var inst_37454 = (state_37592[(9)]);
var inst_37455 = (state_37592[(10)]);
var inst_37457 = (inst_37455 < inst_37454);
var inst_37458 = inst_37457;
var state_37592__$1 = state_37592;
if(cljs.core.truth_(inst_37458)){
var statearr_37656_37723 = state_37592__$1;
(statearr_37656_37723[(1)] = (7));

} else {
var statearr_37657_37724 = state_37592__$1;
(statearr_37657_37724[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (14))){
var inst_37465 = (state_37592[(22)]);
var inst_37474 = cljs.core.first.call(null,inst_37465);
var inst_37475 = figwheel.client.file_reloading.eval_body.call(null,inst_37474,opts);
var inst_37476 = cljs.core.next.call(null,inst_37465);
var inst_37452 = inst_37476;
var inst_37453 = null;
var inst_37454 = (0);
var inst_37455 = (0);
var state_37592__$1 = (function (){var statearr_37658 = state_37592;
(statearr_37658[(7)] = inst_37453);

(statearr_37658[(8)] = inst_37452);

(statearr_37658[(9)] = inst_37454);

(statearr_37658[(32)] = inst_37475);

(statearr_37658[(10)] = inst_37455);

return statearr_37658;
})();
var statearr_37659_37725 = state_37592__$1;
(statearr_37659_37725[(2)] = null);

(statearr_37659_37725[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (45))){
var state_37592__$1 = state_37592;
var statearr_37660_37726 = state_37592__$1;
(statearr_37660_37726[(2)] = null);

(statearr_37660_37726[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (26))){
var inst_37513 = (state_37592[(23)]);
var inst_37505 = (state_37592[(19)]);
var inst_37508 = (state_37592[(24)]);
var inst_37511 = (state_37592[(26)]);
var inst_37509 = (state_37592[(25)]);
var inst_37528 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37530 = (function (){var all_files = inst_37505;
var res_SINGLEQUOTE_ = inst_37508;
var res = inst_37509;
var files_not_loaded = inst_37511;
var dependencies_that_loaded = inst_37513;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37513,inst_37505,inst_37508,inst_37511,inst_37509,inst_37528,state_val_37593,c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37529){
var map__37661 = p__37529;
var map__37661__$1 = ((((!((map__37661 == null)))?((((map__37661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37661):map__37661);
var namespace = cljs.core.get.call(null,map__37661__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37661__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37513,inst_37505,inst_37508,inst_37511,inst_37509,inst_37528,state_val_37593,c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37531 = cljs.core.map.call(null,inst_37530,inst_37509);
var inst_37532 = cljs.core.pr_str.call(null,inst_37531);
var inst_37533 = figwheel.client.utils.log.call(null,inst_37532);
var inst_37534 = (function (){var all_files = inst_37505;
var res_SINGLEQUOTE_ = inst_37508;
var res = inst_37509;
var files_not_loaded = inst_37511;
var dependencies_that_loaded = inst_37513;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37513,inst_37505,inst_37508,inst_37511,inst_37509,inst_37528,inst_37530,inst_37531,inst_37532,inst_37533,state_val_37593,c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37513,inst_37505,inst_37508,inst_37511,inst_37509,inst_37528,inst_37530,inst_37531,inst_37532,inst_37533,state_val_37593,c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37535 = setTimeout(inst_37534,(10));
var state_37592__$1 = (function (){var statearr_37663 = state_37592;
(statearr_37663[(33)] = inst_37533);

(statearr_37663[(34)] = inst_37528);

return statearr_37663;
})();
var statearr_37664_37727 = state_37592__$1;
(statearr_37664_37727[(2)] = inst_37535);

(statearr_37664_37727[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (16))){
var state_37592__$1 = state_37592;
var statearr_37665_37728 = state_37592__$1;
(statearr_37665_37728[(2)] = reload_dependents);

(statearr_37665_37728[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (38))){
var inst_37545 = (state_37592[(16)]);
var inst_37563 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37545);
var state_37592__$1 = state_37592;
var statearr_37666_37729 = state_37592__$1;
(statearr_37666_37729[(2)] = inst_37563);

(statearr_37666_37729[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (30))){
var state_37592__$1 = state_37592;
var statearr_37667_37730 = state_37592__$1;
(statearr_37667_37730[(2)] = null);

(statearr_37667_37730[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (10))){
var inst_37465 = (state_37592[(22)]);
var inst_37467 = cljs.core.chunked_seq_QMARK_.call(null,inst_37465);
var state_37592__$1 = state_37592;
if(inst_37467){
var statearr_37668_37731 = state_37592__$1;
(statearr_37668_37731[(1)] = (13));

} else {
var statearr_37669_37732 = state_37592__$1;
(statearr_37669_37732[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (18))){
var inst_37499 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
if(cljs.core.truth_(inst_37499)){
var statearr_37670_37733 = state_37592__$1;
(statearr_37670_37733[(1)] = (19));

} else {
var statearr_37671_37734 = state_37592__$1;
(statearr_37671_37734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (42))){
var state_37592__$1 = state_37592;
var statearr_37672_37735 = state_37592__$1;
(statearr_37672_37735[(2)] = null);

(statearr_37672_37735[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (37))){
var inst_37558 = (state_37592[(2)]);
var state_37592__$1 = state_37592;
var statearr_37673_37736 = state_37592__$1;
(statearr_37673_37736[(2)] = inst_37558);

(statearr_37673_37736[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37593 === (8))){
var inst_37465 = (state_37592[(22)]);
var inst_37452 = (state_37592[(8)]);
var inst_37465__$1 = cljs.core.seq.call(null,inst_37452);
var state_37592__$1 = (function (){var statearr_37674 = state_37592;
(statearr_37674[(22)] = inst_37465__$1);

return statearr_37674;
})();
if(inst_37465__$1){
var statearr_37675_37737 = state_37592__$1;
(statearr_37675_37737[(1)] = (10));

} else {
var statearr_37676_37738 = state_37592__$1;
(statearr_37676_37738[(1)] = (11));

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
});})(c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30536__auto__,c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____0 = (function (){
var statearr_37677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37677[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__);

(statearr_37677[(1)] = (1));

return statearr_37677;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____1 = (function (state_37592){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_37592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e37678){if((e37678 instanceof Object)){
var ex__30540__auto__ = e37678;
var statearr_37679_37739 = state_37592;
(statearr_37679_37739[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37740 = state_37592;
state_37592 = G__37740;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__ = function(state_37592){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____1.call(this,state_37592);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30626__auto__ = (function (){var statearr_37680 = f__30625__auto__.call(null);
(statearr_37680[(6)] = c__30624__auto__);

return statearr_37680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto__,map__37437,map__37437__$1,opts,before_jsload,on_jsload,reload_dependents,map__37438,map__37438__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30624__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37743,link){
var map__37744 = p__37743;
var map__37744__$1 = ((((!((map__37744 == null)))?((((map__37744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37744):map__37744);
var file = cljs.core.get.call(null,map__37744__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37744,map__37744__$1,file){
return (function (p1__37741_SHARP_,p2__37742_SHARP_){
if(cljs.core._EQ_.call(null,p1__37741_SHARP_,p2__37742_SHARP_)){
return p1__37741_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37744,map__37744__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37747){
var map__37748 = p__37747;
var map__37748__$1 = ((((!((map__37748 == null)))?((((map__37748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37748):map__37748);
var match_length = cljs.core.get.call(null,map__37748__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37748__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37746_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37746_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37750_SHARP_,p2__37751_SHARP_){
return cljs.core.assoc.call(null,p1__37750_SHARP_,cljs.core.get.call(null,p2__37751_SHARP_,key),p2__37751_SHARP_);
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
var loaded_f_datas_37752 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37752);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37752);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37753,p__37754){
var map__37755 = p__37753;
var map__37755__$1 = ((((!((map__37755 == null)))?((((map__37755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37755):map__37755);
var on_cssload = cljs.core.get.call(null,map__37755__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37756 = p__37754;
var map__37756__$1 = ((((!((map__37756 == null)))?((((map__37756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37756):map__37756);
var files_msg = map__37756__$1;
var files = cljs.core.get.call(null,map__37756__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1515953259439
