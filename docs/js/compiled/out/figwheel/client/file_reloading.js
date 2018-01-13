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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37138_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37138_SHARP_));
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
var seq__37139 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37140 = null;
var count__37141 = (0);
var i__37142 = (0);
while(true){
if((i__37142 < count__37141)){
var n = cljs.core._nth.call(null,chunk__37140,i__37142);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37143 = seq__37139;
var G__37144 = chunk__37140;
var G__37145 = count__37141;
var G__37146 = (i__37142 + (1));
seq__37139 = G__37143;
chunk__37140 = G__37144;
count__37141 = G__37145;
i__37142 = G__37146;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37139);
if(temp__4657__auto__){
var seq__37139__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37139__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37139__$1);
var G__37147 = cljs.core.chunk_rest.call(null,seq__37139__$1);
var G__37148 = c__28034__auto__;
var G__37149 = cljs.core.count.call(null,c__28034__auto__);
var G__37150 = (0);
seq__37139 = G__37147;
chunk__37140 = G__37148;
count__37141 = G__37149;
i__37142 = G__37150;
continue;
} else {
var n = cljs.core.first.call(null,seq__37139__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37151 = cljs.core.next.call(null,seq__37139__$1);
var G__37152 = null;
var G__37153 = (0);
var G__37154 = (0);
seq__37139 = G__37151;
chunk__37140 = G__37152;
count__37141 = G__37153;
i__37142 = G__37154;
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

var seq__37164_37172 = cljs.core.seq.call(null,deps);
var chunk__37165_37173 = null;
var count__37166_37174 = (0);
var i__37167_37175 = (0);
while(true){
if((i__37167_37175 < count__37166_37174)){
var dep_37176 = cljs.core._nth.call(null,chunk__37165_37173,i__37167_37175);
topo_sort_helper_STAR_.call(null,dep_37176,(depth + (1)),state);

var G__37177 = seq__37164_37172;
var G__37178 = chunk__37165_37173;
var G__37179 = count__37166_37174;
var G__37180 = (i__37167_37175 + (1));
seq__37164_37172 = G__37177;
chunk__37165_37173 = G__37178;
count__37166_37174 = G__37179;
i__37167_37175 = G__37180;
continue;
} else {
var temp__4657__auto___37181 = cljs.core.seq.call(null,seq__37164_37172);
if(temp__4657__auto___37181){
var seq__37164_37182__$1 = temp__4657__auto___37181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37164_37182__$1)){
var c__28034__auto___37183 = cljs.core.chunk_first.call(null,seq__37164_37182__$1);
var G__37184 = cljs.core.chunk_rest.call(null,seq__37164_37182__$1);
var G__37185 = c__28034__auto___37183;
var G__37186 = cljs.core.count.call(null,c__28034__auto___37183);
var G__37187 = (0);
seq__37164_37172 = G__37184;
chunk__37165_37173 = G__37185;
count__37166_37174 = G__37186;
i__37167_37175 = G__37187;
continue;
} else {
var dep_37188 = cljs.core.first.call(null,seq__37164_37182__$1);
topo_sort_helper_STAR_.call(null,dep_37188,(depth + (1)),state);

var G__37189 = cljs.core.next.call(null,seq__37164_37182__$1);
var G__37190 = null;
var G__37191 = (0);
var G__37192 = (0);
seq__37164_37172 = G__37189;
chunk__37165_37173 = G__37190;
count__37166_37174 = G__37191;
i__37167_37175 = G__37192;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37168){
var vec__37169 = p__37168;
var seq__37170 = cljs.core.seq.call(null,vec__37169);
var first__37171 = cljs.core.first.call(null,seq__37170);
var seq__37170__$1 = cljs.core.next.call(null,seq__37170);
var x = first__37171;
var xs = seq__37170__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37169,seq__37170,first__37171,seq__37170__$1,x,xs,get_deps__$1){
return (function (p1__37155_SHARP_){
return clojure.set.difference.call(null,p1__37155_SHARP_,x);
});})(vec__37169,seq__37170,first__37171,seq__37170__$1,x,xs,get_deps__$1))
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
var seq__37193 = cljs.core.seq.call(null,provides);
var chunk__37194 = null;
var count__37195 = (0);
var i__37196 = (0);
while(true){
if((i__37196 < count__37195)){
var prov = cljs.core._nth.call(null,chunk__37194,i__37196);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37197_37205 = cljs.core.seq.call(null,requires);
var chunk__37198_37206 = null;
var count__37199_37207 = (0);
var i__37200_37208 = (0);
while(true){
if((i__37200_37208 < count__37199_37207)){
var req_37209 = cljs.core._nth.call(null,chunk__37198_37206,i__37200_37208);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37209,prov);

var G__37210 = seq__37197_37205;
var G__37211 = chunk__37198_37206;
var G__37212 = count__37199_37207;
var G__37213 = (i__37200_37208 + (1));
seq__37197_37205 = G__37210;
chunk__37198_37206 = G__37211;
count__37199_37207 = G__37212;
i__37200_37208 = G__37213;
continue;
} else {
var temp__4657__auto___37214 = cljs.core.seq.call(null,seq__37197_37205);
if(temp__4657__auto___37214){
var seq__37197_37215__$1 = temp__4657__auto___37214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37197_37215__$1)){
var c__28034__auto___37216 = cljs.core.chunk_first.call(null,seq__37197_37215__$1);
var G__37217 = cljs.core.chunk_rest.call(null,seq__37197_37215__$1);
var G__37218 = c__28034__auto___37216;
var G__37219 = cljs.core.count.call(null,c__28034__auto___37216);
var G__37220 = (0);
seq__37197_37205 = G__37217;
chunk__37198_37206 = G__37218;
count__37199_37207 = G__37219;
i__37200_37208 = G__37220;
continue;
} else {
var req_37221 = cljs.core.first.call(null,seq__37197_37215__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37221,prov);

var G__37222 = cljs.core.next.call(null,seq__37197_37215__$1);
var G__37223 = null;
var G__37224 = (0);
var G__37225 = (0);
seq__37197_37205 = G__37222;
chunk__37198_37206 = G__37223;
count__37199_37207 = G__37224;
i__37200_37208 = G__37225;
continue;
}
} else {
}
}
break;
}

var G__37226 = seq__37193;
var G__37227 = chunk__37194;
var G__37228 = count__37195;
var G__37229 = (i__37196 + (1));
seq__37193 = G__37226;
chunk__37194 = G__37227;
count__37195 = G__37228;
i__37196 = G__37229;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37193);
if(temp__4657__auto__){
var seq__37193__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37193__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37193__$1);
var G__37230 = cljs.core.chunk_rest.call(null,seq__37193__$1);
var G__37231 = c__28034__auto__;
var G__37232 = cljs.core.count.call(null,c__28034__auto__);
var G__37233 = (0);
seq__37193 = G__37230;
chunk__37194 = G__37231;
count__37195 = G__37232;
i__37196 = G__37233;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37193__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37201_37234 = cljs.core.seq.call(null,requires);
var chunk__37202_37235 = null;
var count__37203_37236 = (0);
var i__37204_37237 = (0);
while(true){
if((i__37204_37237 < count__37203_37236)){
var req_37238 = cljs.core._nth.call(null,chunk__37202_37235,i__37204_37237);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37238,prov);

var G__37239 = seq__37201_37234;
var G__37240 = chunk__37202_37235;
var G__37241 = count__37203_37236;
var G__37242 = (i__37204_37237 + (1));
seq__37201_37234 = G__37239;
chunk__37202_37235 = G__37240;
count__37203_37236 = G__37241;
i__37204_37237 = G__37242;
continue;
} else {
var temp__4657__auto___37243__$1 = cljs.core.seq.call(null,seq__37201_37234);
if(temp__4657__auto___37243__$1){
var seq__37201_37244__$1 = temp__4657__auto___37243__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37201_37244__$1)){
var c__28034__auto___37245 = cljs.core.chunk_first.call(null,seq__37201_37244__$1);
var G__37246 = cljs.core.chunk_rest.call(null,seq__37201_37244__$1);
var G__37247 = c__28034__auto___37245;
var G__37248 = cljs.core.count.call(null,c__28034__auto___37245);
var G__37249 = (0);
seq__37201_37234 = G__37246;
chunk__37202_37235 = G__37247;
count__37203_37236 = G__37248;
i__37204_37237 = G__37249;
continue;
} else {
var req_37250 = cljs.core.first.call(null,seq__37201_37244__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37250,prov);

var G__37251 = cljs.core.next.call(null,seq__37201_37244__$1);
var G__37252 = null;
var G__37253 = (0);
var G__37254 = (0);
seq__37201_37234 = G__37251;
chunk__37202_37235 = G__37252;
count__37203_37236 = G__37253;
i__37204_37237 = G__37254;
continue;
}
} else {
}
}
break;
}

var G__37255 = cljs.core.next.call(null,seq__37193__$1);
var G__37256 = null;
var G__37257 = (0);
var G__37258 = (0);
seq__37193 = G__37255;
chunk__37194 = G__37256;
count__37195 = G__37257;
i__37196 = G__37258;
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
var seq__37259_37263 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37260_37264 = null;
var count__37261_37265 = (0);
var i__37262_37266 = (0);
while(true){
if((i__37262_37266 < count__37261_37265)){
var ns_37267 = cljs.core._nth.call(null,chunk__37260_37264,i__37262_37266);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37267);

var G__37268 = seq__37259_37263;
var G__37269 = chunk__37260_37264;
var G__37270 = count__37261_37265;
var G__37271 = (i__37262_37266 + (1));
seq__37259_37263 = G__37268;
chunk__37260_37264 = G__37269;
count__37261_37265 = G__37270;
i__37262_37266 = G__37271;
continue;
} else {
var temp__4657__auto___37272 = cljs.core.seq.call(null,seq__37259_37263);
if(temp__4657__auto___37272){
var seq__37259_37273__$1 = temp__4657__auto___37272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37259_37273__$1)){
var c__28034__auto___37274 = cljs.core.chunk_first.call(null,seq__37259_37273__$1);
var G__37275 = cljs.core.chunk_rest.call(null,seq__37259_37273__$1);
var G__37276 = c__28034__auto___37274;
var G__37277 = cljs.core.count.call(null,c__28034__auto___37274);
var G__37278 = (0);
seq__37259_37263 = G__37275;
chunk__37260_37264 = G__37276;
count__37261_37265 = G__37277;
i__37262_37266 = G__37278;
continue;
} else {
var ns_37279 = cljs.core.first.call(null,seq__37259_37273__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37279);

var G__37280 = cljs.core.next.call(null,seq__37259_37273__$1);
var G__37281 = null;
var G__37282 = (0);
var G__37283 = (0);
seq__37259_37263 = G__37280;
chunk__37260_37264 = G__37281;
count__37261_37265 = G__37282;
i__37262_37266 = G__37283;
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
var G__37284__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37285__i = 0, G__37285__a = new Array(arguments.length -  0);
while (G__37285__i < G__37285__a.length) {G__37285__a[G__37285__i] = arguments[G__37285__i + 0]; ++G__37285__i;}
  args = new cljs.core.IndexedSeq(G__37285__a,0,null);
} 
return G__37284__delegate.call(this,args);};
G__37284.cljs$lang$maxFixedArity = 0;
G__37284.cljs$lang$applyTo = (function (arglist__37286){
var args = cljs.core.seq(arglist__37286);
return G__37284__delegate(args);
});
G__37284.cljs$core$IFn$_invoke$arity$variadic = G__37284__delegate;
return G__37284;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37287_SHARP_,p2__37288_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37287_SHARP_)].join('')),p2__37288_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37289_SHARP_,p2__37290_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37289_SHARP_)].join(''),p2__37290_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37291 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37291.addCallback(((function (G__37291){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37291))
);

G__37291.addErrback(((function (G__37291){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37291))
);

return G__37291;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37292 = cljs.core._EQ_;
var expr__37293 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37292.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37293))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37292,expr__37293){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37292,expr__37293))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37292,expr__37293){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37295){if((e37295 instanceof Error)){
var e = e37295;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37295;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37292,expr__37293))
} else {
if(cljs.core.truth_(pred__37292.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37293))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37292.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37293))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37292.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37293))){
return ((function (pred__37292,expr__37293){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37296){if((e37296 instanceof Error)){
var e = e37296;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37296;

}
}})());
});
;})(pred__37292,expr__37293))
} else {
return ((function (pred__37292,expr__37293){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37292,expr__37293))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37297,callback){
var map__37298 = p__37297;
var map__37298__$1 = ((((!((map__37298 == null)))?((((map__37298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37298):map__37298);
var file_msg = map__37298__$1;
var request_url = cljs.core.get.call(null,map__37298__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37298,map__37298__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37298,map__37298__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto__){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto__){
return (function (state_37322){
var state_val_37323 = (state_37322[(1)]);
if((state_val_37323 === (7))){
var inst_37318 = (state_37322[(2)]);
var state_37322__$1 = state_37322;
var statearr_37324_37341 = state_37322__$1;
(statearr_37324_37341[(2)] = inst_37318);

(statearr_37324_37341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (1))){
var state_37322__$1 = state_37322;
var statearr_37325_37342 = state_37322__$1;
(statearr_37325_37342[(2)] = null);

(statearr_37325_37342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (4))){
var inst_37302 = (state_37322[(7)]);
var inst_37302__$1 = (state_37322[(2)]);
var state_37322__$1 = (function (){var statearr_37326 = state_37322;
(statearr_37326[(7)] = inst_37302__$1);

return statearr_37326;
})();
if(cljs.core.truth_(inst_37302__$1)){
var statearr_37327_37343 = state_37322__$1;
(statearr_37327_37343[(1)] = (5));

} else {
var statearr_37328_37344 = state_37322__$1;
(statearr_37328_37344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (6))){
var state_37322__$1 = state_37322;
var statearr_37329_37345 = state_37322__$1;
(statearr_37329_37345[(2)] = null);

(statearr_37329_37345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (3))){
var inst_37320 = (state_37322[(2)]);
var state_37322__$1 = state_37322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37322__$1,inst_37320);
} else {
if((state_val_37323 === (2))){
var state_37322__$1 = state_37322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37322__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37323 === (11))){
var inst_37314 = (state_37322[(2)]);
var state_37322__$1 = (function (){var statearr_37330 = state_37322;
(statearr_37330[(8)] = inst_37314);

return statearr_37330;
})();
var statearr_37331_37346 = state_37322__$1;
(statearr_37331_37346[(2)] = null);

(statearr_37331_37346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (9))){
var inst_37306 = (state_37322[(9)]);
var inst_37308 = (state_37322[(10)]);
var inst_37310 = inst_37308.call(null,inst_37306);
var state_37322__$1 = state_37322;
var statearr_37332_37347 = state_37322__$1;
(statearr_37332_37347[(2)] = inst_37310);

(statearr_37332_37347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (5))){
var inst_37302 = (state_37322[(7)]);
var inst_37304 = figwheel.client.file_reloading.blocking_load.call(null,inst_37302);
var state_37322__$1 = state_37322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37322__$1,(8),inst_37304);
} else {
if((state_val_37323 === (10))){
var inst_37306 = (state_37322[(9)]);
var inst_37312 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37306);
var state_37322__$1 = state_37322;
var statearr_37333_37348 = state_37322__$1;
(statearr_37333_37348[(2)] = inst_37312);

(statearr_37333_37348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37323 === (8))){
var inst_37302 = (state_37322[(7)]);
var inst_37308 = (state_37322[(10)]);
var inst_37306 = (state_37322[(2)]);
var inst_37307 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37308__$1 = cljs.core.get.call(null,inst_37307,inst_37302);
var state_37322__$1 = (function (){var statearr_37334 = state_37322;
(statearr_37334[(9)] = inst_37306);

(statearr_37334[(10)] = inst_37308__$1);

return statearr_37334;
})();
if(cljs.core.truth_(inst_37308__$1)){
var statearr_37335_37349 = state_37322__$1;
(statearr_37335_37349[(1)] = (9));

} else {
var statearr_37336_37350 = state_37322__$1;
(statearr_37336_37350[(1)] = (10));

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
});})(c__30623__auto__))
;
return ((function (switch__30535__auto__,c__30623__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30536__auto__ = null;
var figwheel$client$file_reloading$state_machine__30536__auto____0 = (function (){
var statearr_37337 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37337[(0)] = figwheel$client$file_reloading$state_machine__30536__auto__);

(statearr_37337[(1)] = (1));

return statearr_37337;
});
var figwheel$client$file_reloading$state_machine__30536__auto____1 = (function (state_37322){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_37322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e37338){if((e37338 instanceof Object)){
var ex__30539__auto__ = e37338;
var statearr_37339_37351 = state_37322;
(statearr_37339_37351[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37352 = state_37322;
state_37322 = G__37352;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30536__auto__ = function(state_37322){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30536__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30536__auto____1.call(this,state_37322);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30536__auto____0;
figwheel$client$file_reloading$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30536__auto____1;
return figwheel$client$file_reloading$state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto__))
})();
var state__30625__auto__ = (function (){var statearr_37340 = f__30624__auto__.call(null);
(statearr_37340[(6)] = c__30623__auto__);

return statearr_37340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto__))
);

return c__30623__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37353,callback){
var map__37354 = p__37353;
var map__37354__$1 = ((((!((map__37354 == null)))?((((map__37354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37354):map__37354);
var file_msg = map__37354__$1;
var namespace = cljs.core.get.call(null,map__37354__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37354,map__37354__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37354,map__37354__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37356){
var map__37357 = p__37356;
var map__37357__$1 = ((((!((map__37357 == null)))?((((map__37357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37357):map__37357);
var file_msg = map__37357__$1;
var namespace = cljs.core.get.call(null,map__37357__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37359){
var map__37360 = p__37359;
var map__37360__$1 = ((((!((map__37360 == null)))?((((map__37360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37360):map__37360);
var file_msg = map__37360__$1;
var namespace = cljs.core.get.call(null,map__37360__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37362,callback){
var map__37363 = p__37362;
var map__37363__$1 = ((((!((map__37363 == null)))?((((map__37363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37363):map__37363);
var file_msg = map__37363__$1;
var request_url = cljs.core.get.call(null,map__37363__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37363__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30623__auto___37413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___37413,out){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___37413,out){
return (function (state_37398){
var state_val_37399 = (state_37398[(1)]);
if((state_val_37399 === (1))){
var inst_37372 = cljs.core.seq.call(null,files);
var inst_37373 = cljs.core.first.call(null,inst_37372);
var inst_37374 = cljs.core.next.call(null,inst_37372);
var inst_37375 = files;
var state_37398__$1 = (function (){var statearr_37400 = state_37398;
(statearr_37400[(7)] = inst_37374);

(statearr_37400[(8)] = inst_37375);

(statearr_37400[(9)] = inst_37373);

return statearr_37400;
})();
var statearr_37401_37414 = state_37398__$1;
(statearr_37401_37414[(2)] = null);

(statearr_37401_37414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37399 === (2))){
var inst_37381 = (state_37398[(10)]);
var inst_37375 = (state_37398[(8)]);
var inst_37380 = cljs.core.seq.call(null,inst_37375);
var inst_37381__$1 = cljs.core.first.call(null,inst_37380);
var inst_37382 = cljs.core.next.call(null,inst_37380);
var inst_37383 = (inst_37381__$1 == null);
var inst_37384 = cljs.core.not.call(null,inst_37383);
var state_37398__$1 = (function (){var statearr_37402 = state_37398;
(statearr_37402[(10)] = inst_37381__$1);

(statearr_37402[(11)] = inst_37382);

return statearr_37402;
})();
if(inst_37384){
var statearr_37403_37415 = state_37398__$1;
(statearr_37403_37415[(1)] = (4));

} else {
var statearr_37404_37416 = state_37398__$1;
(statearr_37404_37416[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37399 === (3))){
var inst_37396 = (state_37398[(2)]);
var state_37398__$1 = state_37398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37398__$1,inst_37396);
} else {
if((state_val_37399 === (4))){
var inst_37381 = (state_37398[(10)]);
var inst_37386 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37381);
var state_37398__$1 = state_37398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37398__$1,(7),inst_37386);
} else {
if((state_val_37399 === (5))){
var inst_37392 = cljs.core.async.close_BANG_.call(null,out);
var state_37398__$1 = state_37398;
var statearr_37405_37417 = state_37398__$1;
(statearr_37405_37417[(2)] = inst_37392);

(statearr_37405_37417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37399 === (6))){
var inst_37394 = (state_37398[(2)]);
var state_37398__$1 = state_37398;
var statearr_37406_37418 = state_37398__$1;
(statearr_37406_37418[(2)] = inst_37394);

(statearr_37406_37418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37399 === (7))){
var inst_37382 = (state_37398[(11)]);
var inst_37388 = (state_37398[(2)]);
var inst_37389 = cljs.core.async.put_BANG_.call(null,out,inst_37388);
var inst_37375 = inst_37382;
var state_37398__$1 = (function (){var statearr_37407 = state_37398;
(statearr_37407[(12)] = inst_37389);

(statearr_37407[(8)] = inst_37375);

return statearr_37407;
})();
var statearr_37408_37419 = state_37398__$1;
(statearr_37408_37419[(2)] = null);

(statearr_37408_37419[(1)] = (2));


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
});})(c__30623__auto___37413,out))
;
return ((function (switch__30535__auto__,c__30623__auto___37413,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30536__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30536__auto____0 = (function (){
var statearr_37409 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37409[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30536__auto__);

(statearr_37409[(1)] = (1));

return statearr_37409;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30536__auto____1 = (function (state_37398){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_37398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e37410){if((e37410 instanceof Object)){
var ex__30539__auto__ = e37410;
var statearr_37411_37420 = state_37398;
(statearr_37411_37420[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37421 = state_37398;
state_37398 = G__37421;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30536__auto__ = function(state_37398){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30536__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30536__auto____1.call(this,state_37398);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30536__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30536__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___37413,out))
})();
var state__30625__auto__ = (function (){var statearr_37412 = f__30624__auto__.call(null);
(statearr_37412[(6)] = c__30623__auto___37413);

return statearr_37412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___37413,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37422,opts){
var map__37423 = p__37422;
var map__37423__$1 = ((((!((map__37423 == null)))?((((map__37423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37423):map__37423);
var eval_body = cljs.core.get.call(null,map__37423__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37423__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37425){var e = e37425;
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
return (function (p1__37426_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37426_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37427){
var vec__37428 = p__37427;
var k = cljs.core.nth.call(null,vec__37428,(0),null);
var v = cljs.core.nth.call(null,vec__37428,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37431){
var vec__37432 = p__37431;
var k = cljs.core.nth.call(null,vec__37432,(0),null);
var v = cljs.core.nth.call(null,vec__37432,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37438,p__37439){
var map__37440 = p__37438;
var map__37440__$1 = ((((!((map__37440 == null)))?((((map__37440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37440):map__37440);
var opts = map__37440__$1;
var before_jsload = cljs.core.get.call(null,map__37440__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37440__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37440__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37441 = p__37439;
var map__37441__$1 = ((((!((map__37441 == null)))?((((map__37441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37441):map__37441);
var msg = map__37441__$1;
var files = cljs.core.get.call(null,map__37441__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37441__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37441__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37595){
var state_val_37596 = (state_37595[(1)]);
if((state_val_37596 === (7))){
var inst_37456 = (state_37595[(7)]);
var inst_37457 = (state_37595[(8)]);
var inst_37458 = (state_37595[(9)]);
var inst_37455 = (state_37595[(10)]);
var inst_37463 = cljs.core._nth.call(null,inst_37456,inst_37458);
var inst_37464 = figwheel.client.file_reloading.eval_body.call(null,inst_37463,opts);
var inst_37465 = (inst_37458 + (1));
var tmp37597 = inst_37456;
var tmp37598 = inst_37457;
var tmp37599 = inst_37455;
var inst_37455__$1 = tmp37599;
var inst_37456__$1 = tmp37597;
var inst_37457__$1 = tmp37598;
var inst_37458__$1 = inst_37465;
var state_37595__$1 = (function (){var statearr_37600 = state_37595;
(statearr_37600[(7)] = inst_37456__$1);

(statearr_37600[(8)] = inst_37457__$1);

(statearr_37600[(9)] = inst_37458__$1);

(statearr_37600[(10)] = inst_37455__$1);

(statearr_37600[(11)] = inst_37464);

return statearr_37600;
})();
var statearr_37601_37684 = state_37595__$1;
(statearr_37601_37684[(2)] = null);

(statearr_37601_37684[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (20))){
var inst_37498 = (state_37595[(12)]);
var inst_37506 = figwheel.client.file_reloading.sort_files.call(null,inst_37498);
var state_37595__$1 = state_37595;
var statearr_37602_37685 = state_37595__$1;
(statearr_37602_37685[(2)] = inst_37506);

(statearr_37602_37685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (27))){
var state_37595__$1 = state_37595;
var statearr_37603_37686 = state_37595__$1;
(statearr_37603_37686[(2)] = null);

(statearr_37603_37686[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (1))){
var inst_37447 = (state_37595[(13)]);
var inst_37444 = before_jsload.call(null,files);
var inst_37445 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37446 = (function (){return ((function (inst_37447,inst_37444,inst_37445,state_val_37596,c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37435_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37435_SHARP_);
});
;})(inst_37447,inst_37444,inst_37445,state_val_37596,c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37447__$1 = cljs.core.filter.call(null,inst_37446,files);
var inst_37448 = cljs.core.not_empty.call(null,inst_37447__$1);
var state_37595__$1 = (function (){var statearr_37604 = state_37595;
(statearr_37604[(14)] = inst_37445);

(statearr_37604[(13)] = inst_37447__$1);

(statearr_37604[(15)] = inst_37444);

return statearr_37604;
})();
if(cljs.core.truth_(inst_37448)){
var statearr_37605_37687 = state_37595__$1;
(statearr_37605_37687[(1)] = (2));

} else {
var statearr_37606_37688 = state_37595__$1;
(statearr_37606_37688[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (24))){
var state_37595__$1 = state_37595;
var statearr_37607_37689 = state_37595__$1;
(statearr_37607_37689[(2)] = null);

(statearr_37607_37689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (39))){
var inst_37548 = (state_37595[(16)]);
var state_37595__$1 = state_37595;
var statearr_37608_37690 = state_37595__$1;
(statearr_37608_37690[(2)] = inst_37548);

(statearr_37608_37690[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (46))){
var inst_37590 = (state_37595[(2)]);
var state_37595__$1 = state_37595;
var statearr_37609_37691 = state_37595__$1;
(statearr_37609_37691[(2)] = inst_37590);

(statearr_37609_37691[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (4))){
var inst_37492 = (state_37595[(2)]);
var inst_37493 = cljs.core.List.EMPTY;
var inst_37494 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37493);
var inst_37495 = (function (){return ((function (inst_37492,inst_37493,inst_37494,state_val_37596,c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37436_SHARP_){
var and__27183__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37436_SHARP_);
if(cljs.core.truth_(and__27183__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37436_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37436_SHARP_)));
} else {
return and__27183__auto__;
}
});
;})(inst_37492,inst_37493,inst_37494,state_val_37596,c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37496 = cljs.core.filter.call(null,inst_37495,files);
var inst_37497 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37498 = cljs.core.concat.call(null,inst_37496,inst_37497);
var state_37595__$1 = (function (){var statearr_37610 = state_37595;
(statearr_37610[(12)] = inst_37498);

(statearr_37610[(17)] = inst_37492);

(statearr_37610[(18)] = inst_37494);

return statearr_37610;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37611_37692 = state_37595__$1;
(statearr_37611_37692[(1)] = (16));

} else {
var statearr_37612_37693 = state_37595__$1;
(statearr_37612_37693[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (15))){
var inst_37482 = (state_37595[(2)]);
var state_37595__$1 = state_37595;
var statearr_37613_37694 = state_37595__$1;
(statearr_37613_37694[(2)] = inst_37482);

(statearr_37613_37694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (21))){
var inst_37508 = (state_37595[(19)]);
var inst_37508__$1 = (state_37595[(2)]);
var inst_37509 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37508__$1);
var state_37595__$1 = (function (){var statearr_37614 = state_37595;
(statearr_37614[(19)] = inst_37508__$1);

return statearr_37614;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37595__$1,(22),inst_37509);
} else {
if((state_val_37596 === (31))){
var inst_37593 = (state_37595[(2)]);
var state_37595__$1 = state_37595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37595__$1,inst_37593);
} else {
if((state_val_37596 === (32))){
var inst_37548 = (state_37595[(16)]);
var inst_37553 = inst_37548.cljs$lang$protocol_mask$partition0$;
var inst_37554 = (inst_37553 & (64));
var inst_37555 = inst_37548.cljs$core$ISeq$;
var inst_37556 = (cljs.core.PROTOCOL_SENTINEL === inst_37555);
var inst_37557 = (inst_37554) || (inst_37556);
var state_37595__$1 = state_37595;
if(cljs.core.truth_(inst_37557)){
var statearr_37615_37695 = state_37595__$1;
(statearr_37615_37695[(1)] = (35));

} else {
var statearr_37616_37696 = state_37595__$1;
(statearr_37616_37696[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (40))){
var inst_37570 = (state_37595[(20)]);
var inst_37569 = (state_37595[(2)]);
var inst_37570__$1 = cljs.core.get.call(null,inst_37569,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37571 = cljs.core.get.call(null,inst_37569,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37572 = cljs.core.not_empty.call(null,inst_37570__$1);
var state_37595__$1 = (function (){var statearr_37617 = state_37595;
(statearr_37617[(20)] = inst_37570__$1);

(statearr_37617[(21)] = inst_37571);

return statearr_37617;
})();
if(cljs.core.truth_(inst_37572)){
var statearr_37618_37697 = state_37595__$1;
(statearr_37618_37697[(1)] = (41));

} else {
var statearr_37619_37698 = state_37595__$1;
(statearr_37619_37698[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (33))){
var state_37595__$1 = state_37595;
var statearr_37620_37699 = state_37595__$1;
(statearr_37620_37699[(2)] = false);

(statearr_37620_37699[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (13))){
var inst_37468 = (state_37595[(22)]);
var inst_37472 = cljs.core.chunk_first.call(null,inst_37468);
var inst_37473 = cljs.core.chunk_rest.call(null,inst_37468);
var inst_37474 = cljs.core.count.call(null,inst_37472);
var inst_37455 = inst_37473;
var inst_37456 = inst_37472;
var inst_37457 = inst_37474;
var inst_37458 = (0);
var state_37595__$1 = (function (){var statearr_37621 = state_37595;
(statearr_37621[(7)] = inst_37456);

(statearr_37621[(8)] = inst_37457);

(statearr_37621[(9)] = inst_37458);

(statearr_37621[(10)] = inst_37455);

return statearr_37621;
})();
var statearr_37622_37700 = state_37595__$1;
(statearr_37622_37700[(2)] = null);

(statearr_37622_37700[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (22))){
var inst_37516 = (state_37595[(23)]);
var inst_37508 = (state_37595[(19)]);
var inst_37512 = (state_37595[(24)]);
var inst_37511 = (state_37595[(25)]);
var inst_37511__$1 = (state_37595[(2)]);
var inst_37512__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37511__$1);
var inst_37513 = (function (){var all_files = inst_37508;
var res_SINGLEQUOTE_ = inst_37511__$1;
var res = inst_37512__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37516,inst_37508,inst_37512,inst_37511,inst_37511__$1,inst_37512__$1,state_val_37596,c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37437_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37437_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37516,inst_37508,inst_37512,inst_37511,inst_37511__$1,inst_37512__$1,state_val_37596,c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37514 = cljs.core.filter.call(null,inst_37513,inst_37511__$1);
var inst_37515 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37516__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37515);
var inst_37517 = cljs.core.not_empty.call(null,inst_37516__$1);
var state_37595__$1 = (function (){var statearr_37623 = state_37595;
(statearr_37623[(23)] = inst_37516__$1);

(statearr_37623[(26)] = inst_37514);

(statearr_37623[(24)] = inst_37512__$1);

(statearr_37623[(25)] = inst_37511__$1);

return statearr_37623;
})();
if(cljs.core.truth_(inst_37517)){
var statearr_37624_37701 = state_37595__$1;
(statearr_37624_37701[(1)] = (23));

} else {
var statearr_37625_37702 = state_37595__$1;
(statearr_37625_37702[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (36))){
var state_37595__$1 = state_37595;
var statearr_37626_37703 = state_37595__$1;
(statearr_37626_37703[(2)] = false);

(statearr_37626_37703[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (41))){
var inst_37570 = (state_37595[(20)]);
var inst_37574 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37575 = cljs.core.map.call(null,inst_37574,inst_37570);
var inst_37576 = cljs.core.pr_str.call(null,inst_37575);
var inst_37577 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37576)].join('');
var inst_37578 = figwheel.client.utils.log.call(null,inst_37577);
var state_37595__$1 = state_37595;
var statearr_37627_37704 = state_37595__$1;
(statearr_37627_37704[(2)] = inst_37578);

(statearr_37627_37704[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (43))){
var inst_37571 = (state_37595[(21)]);
var inst_37581 = (state_37595[(2)]);
var inst_37582 = cljs.core.not_empty.call(null,inst_37571);
var state_37595__$1 = (function (){var statearr_37628 = state_37595;
(statearr_37628[(27)] = inst_37581);

return statearr_37628;
})();
if(cljs.core.truth_(inst_37582)){
var statearr_37629_37705 = state_37595__$1;
(statearr_37629_37705[(1)] = (44));

} else {
var statearr_37630_37706 = state_37595__$1;
(statearr_37630_37706[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (29))){
var inst_37516 = (state_37595[(23)]);
var inst_37508 = (state_37595[(19)]);
var inst_37514 = (state_37595[(26)]);
var inst_37512 = (state_37595[(24)]);
var inst_37511 = (state_37595[(25)]);
var inst_37548 = (state_37595[(16)]);
var inst_37544 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37547 = (function (){var all_files = inst_37508;
var res_SINGLEQUOTE_ = inst_37511;
var res = inst_37512;
var files_not_loaded = inst_37514;
var dependencies_that_loaded = inst_37516;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37516,inst_37508,inst_37514,inst_37512,inst_37511,inst_37548,inst_37544,state_val_37596,c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37546){
var map__37631 = p__37546;
var map__37631__$1 = ((((!((map__37631 == null)))?((((map__37631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37631.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37631):map__37631);
var namespace = cljs.core.get.call(null,map__37631__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37516,inst_37508,inst_37514,inst_37512,inst_37511,inst_37548,inst_37544,state_val_37596,c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37548__$1 = cljs.core.group_by.call(null,inst_37547,inst_37514);
var inst_37550 = (inst_37548__$1 == null);
var inst_37551 = cljs.core.not.call(null,inst_37550);
var state_37595__$1 = (function (){var statearr_37633 = state_37595;
(statearr_37633[(28)] = inst_37544);

(statearr_37633[(16)] = inst_37548__$1);

return statearr_37633;
})();
if(inst_37551){
var statearr_37634_37707 = state_37595__$1;
(statearr_37634_37707[(1)] = (32));

} else {
var statearr_37635_37708 = state_37595__$1;
(statearr_37635_37708[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (44))){
var inst_37571 = (state_37595[(21)]);
var inst_37584 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37571);
var inst_37585 = cljs.core.pr_str.call(null,inst_37584);
var inst_37586 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37585)].join('');
var inst_37587 = figwheel.client.utils.log.call(null,inst_37586);
var state_37595__$1 = state_37595;
var statearr_37636_37709 = state_37595__$1;
(statearr_37636_37709[(2)] = inst_37587);

(statearr_37636_37709[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (6))){
var inst_37489 = (state_37595[(2)]);
var state_37595__$1 = state_37595;
var statearr_37637_37710 = state_37595__$1;
(statearr_37637_37710[(2)] = inst_37489);

(statearr_37637_37710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (28))){
var inst_37514 = (state_37595[(26)]);
var inst_37541 = (state_37595[(2)]);
var inst_37542 = cljs.core.not_empty.call(null,inst_37514);
var state_37595__$1 = (function (){var statearr_37638 = state_37595;
(statearr_37638[(29)] = inst_37541);

return statearr_37638;
})();
if(cljs.core.truth_(inst_37542)){
var statearr_37639_37711 = state_37595__$1;
(statearr_37639_37711[(1)] = (29));

} else {
var statearr_37640_37712 = state_37595__$1;
(statearr_37640_37712[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (25))){
var inst_37512 = (state_37595[(24)]);
var inst_37528 = (state_37595[(2)]);
var inst_37529 = cljs.core.not_empty.call(null,inst_37512);
var state_37595__$1 = (function (){var statearr_37641 = state_37595;
(statearr_37641[(30)] = inst_37528);

return statearr_37641;
})();
if(cljs.core.truth_(inst_37529)){
var statearr_37642_37713 = state_37595__$1;
(statearr_37642_37713[(1)] = (26));

} else {
var statearr_37643_37714 = state_37595__$1;
(statearr_37643_37714[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (34))){
var inst_37564 = (state_37595[(2)]);
var state_37595__$1 = state_37595;
if(cljs.core.truth_(inst_37564)){
var statearr_37644_37715 = state_37595__$1;
(statearr_37644_37715[(1)] = (38));

} else {
var statearr_37645_37716 = state_37595__$1;
(statearr_37645_37716[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (17))){
var state_37595__$1 = state_37595;
var statearr_37646_37717 = state_37595__$1;
(statearr_37646_37717[(2)] = recompile_dependents);

(statearr_37646_37717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (3))){
var state_37595__$1 = state_37595;
var statearr_37647_37718 = state_37595__$1;
(statearr_37647_37718[(2)] = null);

(statearr_37647_37718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (12))){
var inst_37485 = (state_37595[(2)]);
var state_37595__$1 = state_37595;
var statearr_37648_37719 = state_37595__$1;
(statearr_37648_37719[(2)] = inst_37485);

(statearr_37648_37719[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (2))){
var inst_37447 = (state_37595[(13)]);
var inst_37454 = cljs.core.seq.call(null,inst_37447);
var inst_37455 = inst_37454;
var inst_37456 = null;
var inst_37457 = (0);
var inst_37458 = (0);
var state_37595__$1 = (function (){var statearr_37649 = state_37595;
(statearr_37649[(7)] = inst_37456);

(statearr_37649[(8)] = inst_37457);

(statearr_37649[(9)] = inst_37458);

(statearr_37649[(10)] = inst_37455);

return statearr_37649;
})();
var statearr_37650_37720 = state_37595__$1;
(statearr_37650_37720[(2)] = null);

(statearr_37650_37720[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (23))){
var inst_37516 = (state_37595[(23)]);
var inst_37508 = (state_37595[(19)]);
var inst_37514 = (state_37595[(26)]);
var inst_37512 = (state_37595[(24)]);
var inst_37511 = (state_37595[(25)]);
var inst_37519 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37521 = (function (){var all_files = inst_37508;
var res_SINGLEQUOTE_ = inst_37511;
var res = inst_37512;
var files_not_loaded = inst_37514;
var dependencies_that_loaded = inst_37516;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37516,inst_37508,inst_37514,inst_37512,inst_37511,inst_37519,state_val_37596,c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37520){
var map__37651 = p__37520;
var map__37651__$1 = ((((!((map__37651 == null)))?((((map__37651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37651):map__37651);
var request_url = cljs.core.get.call(null,map__37651__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37516,inst_37508,inst_37514,inst_37512,inst_37511,inst_37519,state_val_37596,c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37522 = cljs.core.reverse.call(null,inst_37516);
var inst_37523 = cljs.core.map.call(null,inst_37521,inst_37522);
var inst_37524 = cljs.core.pr_str.call(null,inst_37523);
var inst_37525 = figwheel.client.utils.log.call(null,inst_37524);
var state_37595__$1 = (function (){var statearr_37653 = state_37595;
(statearr_37653[(31)] = inst_37519);

return statearr_37653;
})();
var statearr_37654_37721 = state_37595__$1;
(statearr_37654_37721[(2)] = inst_37525);

(statearr_37654_37721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (35))){
var state_37595__$1 = state_37595;
var statearr_37655_37722 = state_37595__$1;
(statearr_37655_37722[(2)] = true);

(statearr_37655_37722[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (19))){
var inst_37498 = (state_37595[(12)]);
var inst_37504 = figwheel.client.file_reloading.expand_files.call(null,inst_37498);
var state_37595__$1 = state_37595;
var statearr_37656_37723 = state_37595__$1;
(statearr_37656_37723[(2)] = inst_37504);

(statearr_37656_37723[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (11))){
var state_37595__$1 = state_37595;
var statearr_37657_37724 = state_37595__$1;
(statearr_37657_37724[(2)] = null);

(statearr_37657_37724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (9))){
var inst_37487 = (state_37595[(2)]);
var state_37595__$1 = state_37595;
var statearr_37658_37725 = state_37595__$1;
(statearr_37658_37725[(2)] = inst_37487);

(statearr_37658_37725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (5))){
var inst_37457 = (state_37595[(8)]);
var inst_37458 = (state_37595[(9)]);
var inst_37460 = (inst_37458 < inst_37457);
var inst_37461 = inst_37460;
var state_37595__$1 = state_37595;
if(cljs.core.truth_(inst_37461)){
var statearr_37659_37726 = state_37595__$1;
(statearr_37659_37726[(1)] = (7));

} else {
var statearr_37660_37727 = state_37595__$1;
(statearr_37660_37727[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (14))){
var inst_37468 = (state_37595[(22)]);
var inst_37477 = cljs.core.first.call(null,inst_37468);
var inst_37478 = figwheel.client.file_reloading.eval_body.call(null,inst_37477,opts);
var inst_37479 = cljs.core.next.call(null,inst_37468);
var inst_37455 = inst_37479;
var inst_37456 = null;
var inst_37457 = (0);
var inst_37458 = (0);
var state_37595__$1 = (function (){var statearr_37661 = state_37595;
(statearr_37661[(7)] = inst_37456);

(statearr_37661[(32)] = inst_37478);

(statearr_37661[(8)] = inst_37457);

(statearr_37661[(9)] = inst_37458);

(statearr_37661[(10)] = inst_37455);

return statearr_37661;
})();
var statearr_37662_37728 = state_37595__$1;
(statearr_37662_37728[(2)] = null);

(statearr_37662_37728[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (45))){
var state_37595__$1 = state_37595;
var statearr_37663_37729 = state_37595__$1;
(statearr_37663_37729[(2)] = null);

(statearr_37663_37729[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (26))){
var inst_37516 = (state_37595[(23)]);
var inst_37508 = (state_37595[(19)]);
var inst_37514 = (state_37595[(26)]);
var inst_37512 = (state_37595[(24)]);
var inst_37511 = (state_37595[(25)]);
var inst_37531 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37533 = (function (){var all_files = inst_37508;
var res_SINGLEQUOTE_ = inst_37511;
var res = inst_37512;
var files_not_loaded = inst_37514;
var dependencies_that_loaded = inst_37516;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37516,inst_37508,inst_37514,inst_37512,inst_37511,inst_37531,state_val_37596,c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37532){
var map__37664 = p__37532;
var map__37664__$1 = ((((!((map__37664 == null)))?((((map__37664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37664):map__37664);
var namespace = cljs.core.get.call(null,map__37664__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37664__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37516,inst_37508,inst_37514,inst_37512,inst_37511,inst_37531,state_val_37596,c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37534 = cljs.core.map.call(null,inst_37533,inst_37512);
var inst_37535 = cljs.core.pr_str.call(null,inst_37534);
var inst_37536 = figwheel.client.utils.log.call(null,inst_37535);
var inst_37537 = (function (){var all_files = inst_37508;
var res_SINGLEQUOTE_ = inst_37511;
var res = inst_37512;
var files_not_loaded = inst_37514;
var dependencies_that_loaded = inst_37516;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37516,inst_37508,inst_37514,inst_37512,inst_37511,inst_37531,inst_37533,inst_37534,inst_37535,inst_37536,state_val_37596,c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37516,inst_37508,inst_37514,inst_37512,inst_37511,inst_37531,inst_37533,inst_37534,inst_37535,inst_37536,state_val_37596,c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37538 = setTimeout(inst_37537,(10));
var state_37595__$1 = (function (){var statearr_37666 = state_37595;
(statearr_37666[(33)] = inst_37531);

(statearr_37666[(34)] = inst_37536);

return statearr_37666;
})();
var statearr_37667_37730 = state_37595__$1;
(statearr_37667_37730[(2)] = inst_37538);

(statearr_37667_37730[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (16))){
var state_37595__$1 = state_37595;
var statearr_37668_37731 = state_37595__$1;
(statearr_37668_37731[(2)] = reload_dependents);

(statearr_37668_37731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (38))){
var inst_37548 = (state_37595[(16)]);
var inst_37566 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37548);
var state_37595__$1 = state_37595;
var statearr_37669_37732 = state_37595__$1;
(statearr_37669_37732[(2)] = inst_37566);

(statearr_37669_37732[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (30))){
var state_37595__$1 = state_37595;
var statearr_37670_37733 = state_37595__$1;
(statearr_37670_37733[(2)] = null);

(statearr_37670_37733[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (10))){
var inst_37468 = (state_37595[(22)]);
var inst_37470 = cljs.core.chunked_seq_QMARK_.call(null,inst_37468);
var state_37595__$1 = state_37595;
if(inst_37470){
var statearr_37671_37734 = state_37595__$1;
(statearr_37671_37734[(1)] = (13));

} else {
var statearr_37672_37735 = state_37595__$1;
(statearr_37672_37735[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (18))){
var inst_37502 = (state_37595[(2)]);
var state_37595__$1 = state_37595;
if(cljs.core.truth_(inst_37502)){
var statearr_37673_37736 = state_37595__$1;
(statearr_37673_37736[(1)] = (19));

} else {
var statearr_37674_37737 = state_37595__$1;
(statearr_37674_37737[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (42))){
var state_37595__$1 = state_37595;
var statearr_37675_37738 = state_37595__$1;
(statearr_37675_37738[(2)] = null);

(statearr_37675_37738[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (37))){
var inst_37561 = (state_37595[(2)]);
var state_37595__$1 = state_37595;
var statearr_37676_37739 = state_37595__$1;
(statearr_37676_37739[(2)] = inst_37561);

(statearr_37676_37739[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37596 === (8))){
var inst_37455 = (state_37595[(10)]);
var inst_37468 = (state_37595[(22)]);
var inst_37468__$1 = cljs.core.seq.call(null,inst_37455);
var state_37595__$1 = (function (){var statearr_37677 = state_37595;
(statearr_37677[(22)] = inst_37468__$1);

return statearr_37677;
})();
if(inst_37468__$1){
var statearr_37678_37740 = state_37595__$1;
(statearr_37678_37740[(1)] = (10));

} else {
var statearr_37679_37741 = state_37595__$1;
(statearr_37679_37741[(1)] = (11));

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
});})(c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30535__auto__,c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30536__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30536__auto____0 = (function (){
var statearr_37680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37680[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30536__auto__);

(statearr_37680[(1)] = (1));

return statearr_37680;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30536__auto____1 = (function (state_37595){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_37595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e37681){if((e37681 instanceof Object)){
var ex__30539__auto__ = e37681;
var statearr_37682_37742 = state_37595;
(statearr_37682_37742[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37743 = state_37595;
state_37595 = G__37743;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30536__auto__ = function(state_37595){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30536__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30536__auto____1.call(this,state_37595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30536__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30536__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30625__auto__ = (function (){var statearr_37683 = f__30624__auto__.call(null);
(statearr_37683[(6)] = c__30623__auto__);

return statearr_37683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto__,map__37440,map__37440__$1,opts,before_jsload,on_jsload,reload_dependents,map__37441,map__37441__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30623__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37746,link){
var map__37747 = p__37746;
var map__37747__$1 = ((((!((map__37747 == null)))?((((map__37747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37747):map__37747);
var file = cljs.core.get.call(null,map__37747__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37747,map__37747__$1,file){
return (function (p1__37744_SHARP_,p2__37745_SHARP_){
if(cljs.core._EQ_.call(null,p1__37744_SHARP_,p2__37745_SHARP_)){
return p1__37744_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37747,map__37747__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37750){
var map__37751 = p__37750;
var map__37751__$1 = ((((!((map__37751 == null)))?((((map__37751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37751):map__37751);
var match_length = cljs.core.get.call(null,map__37751__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37751__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37749_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37749_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37753_SHARP_,p2__37754_SHARP_){
return cljs.core.assoc.call(null,p1__37753_SHARP_,cljs.core.get.call(null,p2__37754_SHARP_,key),p2__37754_SHARP_);
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
var loaded_f_datas_37755 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37755);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37755);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37756,p__37757){
var map__37758 = p__37756;
var map__37758__$1 = ((((!((map__37758 == null)))?((((map__37758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37758):map__37758);
var on_cssload = cljs.core.get.call(null,map__37758__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37759 = p__37757;
var map__37759__$1 = ((((!((map__37759 == null)))?((((map__37759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37759):map__37759);
var files_msg = map__37759__$1;
var files = cljs.core.get.call(null,map__37759__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1515855011249
