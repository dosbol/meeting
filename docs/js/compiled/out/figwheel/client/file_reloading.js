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
var or__27196__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27196__auto__){
return or__27196__auto__;
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
var or__27196__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
var or__27196__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27196__auto____$1)){
return or__27196__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37124_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37124_SHARP_));
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
var seq__37125 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37126 = null;
var count__37127 = (0);
var i__37128 = (0);
while(true){
if((i__37128 < count__37127)){
var n = cljs.core._nth.call(null,chunk__37126,i__37128);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37129 = seq__37125;
var G__37130 = chunk__37126;
var G__37131 = count__37127;
var G__37132 = (i__37128 + (1));
seq__37125 = G__37129;
chunk__37126 = G__37130;
count__37127 = G__37131;
i__37128 = G__37132;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37125);
if(temp__4657__auto__){
var seq__37125__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37125__$1)){
var c__28035__auto__ = cljs.core.chunk_first.call(null,seq__37125__$1);
var G__37133 = cljs.core.chunk_rest.call(null,seq__37125__$1);
var G__37134 = c__28035__auto__;
var G__37135 = cljs.core.count.call(null,c__28035__auto__);
var G__37136 = (0);
seq__37125 = G__37133;
chunk__37126 = G__37134;
count__37127 = G__37135;
i__37128 = G__37136;
continue;
} else {
var n = cljs.core.first.call(null,seq__37125__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37137 = cljs.core.next.call(null,seq__37125__$1);
var G__37138 = null;
var G__37139 = (0);
var G__37140 = (0);
seq__37125 = G__37137;
chunk__37126 = G__37138;
count__37127 = G__37139;
i__37128 = G__37140;
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

var seq__37150_37158 = cljs.core.seq.call(null,deps);
var chunk__37151_37159 = null;
var count__37152_37160 = (0);
var i__37153_37161 = (0);
while(true){
if((i__37153_37161 < count__37152_37160)){
var dep_37162 = cljs.core._nth.call(null,chunk__37151_37159,i__37153_37161);
topo_sort_helper_STAR_.call(null,dep_37162,(depth + (1)),state);

var G__37163 = seq__37150_37158;
var G__37164 = chunk__37151_37159;
var G__37165 = count__37152_37160;
var G__37166 = (i__37153_37161 + (1));
seq__37150_37158 = G__37163;
chunk__37151_37159 = G__37164;
count__37152_37160 = G__37165;
i__37153_37161 = G__37166;
continue;
} else {
var temp__4657__auto___37167 = cljs.core.seq.call(null,seq__37150_37158);
if(temp__4657__auto___37167){
var seq__37150_37168__$1 = temp__4657__auto___37167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37150_37168__$1)){
var c__28035__auto___37169 = cljs.core.chunk_first.call(null,seq__37150_37168__$1);
var G__37170 = cljs.core.chunk_rest.call(null,seq__37150_37168__$1);
var G__37171 = c__28035__auto___37169;
var G__37172 = cljs.core.count.call(null,c__28035__auto___37169);
var G__37173 = (0);
seq__37150_37158 = G__37170;
chunk__37151_37159 = G__37171;
count__37152_37160 = G__37172;
i__37153_37161 = G__37173;
continue;
} else {
var dep_37174 = cljs.core.first.call(null,seq__37150_37168__$1);
topo_sort_helper_STAR_.call(null,dep_37174,(depth + (1)),state);

var G__37175 = cljs.core.next.call(null,seq__37150_37168__$1);
var G__37176 = null;
var G__37177 = (0);
var G__37178 = (0);
seq__37150_37158 = G__37175;
chunk__37151_37159 = G__37176;
count__37152_37160 = G__37177;
i__37153_37161 = G__37178;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37154){
var vec__37155 = p__37154;
var seq__37156 = cljs.core.seq.call(null,vec__37155);
var first__37157 = cljs.core.first.call(null,seq__37156);
var seq__37156__$1 = cljs.core.next.call(null,seq__37156);
var x = first__37157;
var xs = seq__37156__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37155,seq__37156,first__37157,seq__37156__$1,x,xs,get_deps__$1){
return (function (p1__37141_SHARP_){
return clojure.set.difference.call(null,p1__37141_SHARP_,x);
});})(vec__37155,seq__37156,first__37157,seq__37156__$1,x,xs,get_deps__$1))
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
var seq__37179 = cljs.core.seq.call(null,provides);
var chunk__37180 = null;
var count__37181 = (0);
var i__37182 = (0);
while(true){
if((i__37182 < count__37181)){
var prov = cljs.core._nth.call(null,chunk__37180,i__37182);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37183_37191 = cljs.core.seq.call(null,requires);
var chunk__37184_37192 = null;
var count__37185_37193 = (0);
var i__37186_37194 = (0);
while(true){
if((i__37186_37194 < count__37185_37193)){
var req_37195 = cljs.core._nth.call(null,chunk__37184_37192,i__37186_37194);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37195,prov);

var G__37196 = seq__37183_37191;
var G__37197 = chunk__37184_37192;
var G__37198 = count__37185_37193;
var G__37199 = (i__37186_37194 + (1));
seq__37183_37191 = G__37196;
chunk__37184_37192 = G__37197;
count__37185_37193 = G__37198;
i__37186_37194 = G__37199;
continue;
} else {
var temp__4657__auto___37200 = cljs.core.seq.call(null,seq__37183_37191);
if(temp__4657__auto___37200){
var seq__37183_37201__$1 = temp__4657__auto___37200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37183_37201__$1)){
var c__28035__auto___37202 = cljs.core.chunk_first.call(null,seq__37183_37201__$1);
var G__37203 = cljs.core.chunk_rest.call(null,seq__37183_37201__$1);
var G__37204 = c__28035__auto___37202;
var G__37205 = cljs.core.count.call(null,c__28035__auto___37202);
var G__37206 = (0);
seq__37183_37191 = G__37203;
chunk__37184_37192 = G__37204;
count__37185_37193 = G__37205;
i__37186_37194 = G__37206;
continue;
} else {
var req_37207 = cljs.core.first.call(null,seq__37183_37201__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37207,prov);

var G__37208 = cljs.core.next.call(null,seq__37183_37201__$1);
var G__37209 = null;
var G__37210 = (0);
var G__37211 = (0);
seq__37183_37191 = G__37208;
chunk__37184_37192 = G__37209;
count__37185_37193 = G__37210;
i__37186_37194 = G__37211;
continue;
}
} else {
}
}
break;
}

var G__37212 = seq__37179;
var G__37213 = chunk__37180;
var G__37214 = count__37181;
var G__37215 = (i__37182 + (1));
seq__37179 = G__37212;
chunk__37180 = G__37213;
count__37181 = G__37214;
i__37182 = G__37215;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37179);
if(temp__4657__auto__){
var seq__37179__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37179__$1)){
var c__28035__auto__ = cljs.core.chunk_first.call(null,seq__37179__$1);
var G__37216 = cljs.core.chunk_rest.call(null,seq__37179__$1);
var G__37217 = c__28035__auto__;
var G__37218 = cljs.core.count.call(null,c__28035__auto__);
var G__37219 = (0);
seq__37179 = G__37216;
chunk__37180 = G__37217;
count__37181 = G__37218;
i__37182 = G__37219;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37179__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37187_37220 = cljs.core.seq.call(null,requires);
var chunk__37188_37221 = null;
var count__37189_37222 = (0);
var i__37190_37223 = (0);
while(true){
if((i__37190_37223 < count__37189_37222)){
var req_37224 = cljs.core._nth.call(null,chunk__37188_37221,i__37190_37223);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37224,prov);

var G__37225 = seq__37187_37220;
var G__37226 = chunk__37188_37221;
var G__37227 = count__37189_37222;
var G__37228 = (i__37190_37223 + (1));
seq__37187_37220 = G__37225;
chunk__37188_37221 = G__37226;
count__37189_37222 = G__37227;
i__37190_37223 = G__37228;
continue;
} else {
var temp__4657__auto___37229__$1 = cljs.core.seq.call(null,seq__37187_37220);
if(temp__4657__auto___37229__$1){
var seq__37187_37230__$1 = temp__4657__auto___37229__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37187_37230__$1)){
var c__28035__auto___37231 = cljs.core.chunk_first.call(null,seq__37187_37230__$1);
var G__37232 = cljs.core.chunk_rest.call(null,seq__37187_37230__$1);
var G__37233 = c__28035__auto___37231;
var G__37234 = cljs.core.count.call(null,c__28035__auto___37231);
var G__37235 = (0);
seq__37187_37220 = G__37232;
chunk__37188_37221 = G__37233;
count__37189_37222 = G__37234;
i__37190_37223 = G__37235;
continue;
} else {
var req_37236 = cljs.core.first.call(null,seq__37187_37230__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37236,prov);

var G__37237 = cljs.core.next.call(null,seq__37187_37230__$1);
var G__37238 = null;
var G__37239 = (0);
var G__37240 = (0);
seq__37187_37220 = G__37237;
chunk__37188_37221 = G__37238;
count__37189_37222 = G__37239;
i__37190_37223 = G__37240;
continue;
}
} else {
}
}
break;
}

var G__37241 = cljs.core.next.call(null,seq__37179__$1);
var G__37242 = null;
var G__37243 = (0);
var G__37244 = (0);
seq__37179 = G__37241;
chunk__37180 = G__37242;
count__37181 = G__37243;
i__37182 = G__37244;
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
var seq__37245_37249 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37246_37250 = null;
var count__37247_37251 = (0);
var i__37248_37252 = (0);
while(true){
if((i__37248_37252 < count__37247_37251)){
var ns_37253 = cljs.core._nth.call(null,chunk__37246_37250,i__37248_37252);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37253);

var G__37254 = seq__37245_37249;
var G__37255 = chunk__37246_37250;
var G__37256 = count__37247_37251;
var G__37257 = (i__37248_37252 + (1));
seq__37245_37249 = G__37254;
chunk__37246_37250 = G__37255;
count__37247_37251 = G__37256;
i__37248_37252 = G__37257;
continue;
} else {
var temp__4657__auto___37258 = cljs.core.seq.call(null,seq__37245_37249);
if(temp__4657__auto___37258){
var seq__37245_37259__$1 = temp__4657__auto___37258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37245_37259__$1)){
var c__28035__auto___37260 = cljs.core.chunk_first.call(null,seq__37245_37259__$1);
var G__37261 = cljs.core.chunk_rest.call(null,seq__37245_37259__$1);
var G__37262 = c__28035__auto___37260;
var G__37263 = cljs.core.count.call(null,c__28035__auto___37260);
var G__37264 = (0);
seq__37245_37249 = G__37261;
chunk__37246_37250 = G__37262;
count__37247_37251 = G__37263;
i__37248_37252 = G__37264;
continue;
} else {
var ns_37265 = cljs.core.first.call(null,seq__37245_37259__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37265);

var G__37266 = cljs.core.next.call(null,seq__37245_37259__$1);
var G__37267 = null;
var G__37268 = (0);
var G__37269 = (0);
seq__37245_37249 = G__37266;
chunk__37246_37250 = G__37267;
count__37247_37251 = G__37268;
i__37248_37252 = G__37269;
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
goog.require_figwheel_backup_ = (function (){var or__27196__auto__ = goog.require__;
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
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
var G__37270__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37270 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37271__i = 0, G__37271__a = new Array(arguments.length -  0);
while (G__37271__i < G__37271__a.length) {G__37271__a[G__37271__i] = arguments[G__37271__i + 0]; ++G__37271__i;}
  args = new cljs.core.IndexedSeq(G__37271__a,0,null);
} 
return G__37270__delegate.call(this,args);};
G__37270.cljs$lang$maxFixedArity = 0;
G__37270.cljs$lang$applyTo = (function (arglist__37272){
var args = cljs.core.seq(arglist__37272);
return G__37270__delegate(args);
});
G__37270.cljs$core$IFn$_invoke$arity$variadic = G__37270__delegate;
return G__37270;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37273_SHARP_,p2__37274_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37273_SHARP_)].join('')),p2__37274_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37275_SHARP_,p2__37276_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37275_SHARP_)].join(''),p2__37276_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37277 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37277.addCallback(((function (G__37277){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37277))
);

G__37277.addErrback(((function (G__37277){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37277))
);

return G__37277;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37278 = cljs.core._EQ_;
var expr__37279 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37278.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37279))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37278,expr__37279){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37278,expr__37279))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37278,expr__37279){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37281){if((e37281 instanceof Error)){
var e = e37281;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37281;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37278,expr__37279))
} else {
if(cljs.core.truth_(pred__37278.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37279))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37278.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37279))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37278.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37279))){
return ((function (pred__37278,expr__37279){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37282){if((e37282 instanceof Error)){
var e = e37282;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37282;

}
}})());
});
;})(pred__37278,expr__37279))
} else {
return ((function (pred__37278,expr__37279){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37278,expr__37279))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37283,callback){
var map__37284 = p__37283;
var map__37284__$1 = ((((!((map__37284 == null)))?((((map__37284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37284):map__37284);
var file_msg = map__37284__$1;
var request_url = cljs.core.get.call(null,map__37284__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37284,map__37284__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37284,map__37284__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto__){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto__){
return (function (state_37308){
var state_val_37309 = (state_37308[(1)]);
if((state_val_37309 === (7))){
var inst_37304 = (state_37308[(2)]);
var state_37308__$1 = state_37308;
var statearr_37310_37327 = state_37308__$1;
(statearr_37310_37327[(2)] = inst_37304);

(statearr_37310_37327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (1))){
var state_37308__$1 = state_37308;
var statearr_37311_37328 = state_37308__$1;
(statearr_37311_37328[(2)] = null);

(statearr_37311_37328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (4))){
var inst_37288 = (state_37308[(7)]);
var inst_37288__$1 = (state_37308[(2)]);
var state_37308__$1 = (function (){var statearr_37312 = state_37308;
(statearr_37312[(7)] = inst_37288__$1);

return statearr_37312;
})();
if(cljs.core.truth_(inst_37288__$1)){
var statearr_37313_37329 = state_37308__$1;
(statearr_37313_37329[(1)] = (5));

} else {
var statearr_37314_37330 = state_37308__$1;
(statearr_37314_37330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (6))){
var state_37308__$1 = state_37308;
var statearr_37315_37331 = state_37308__$1;
(statearr_37315_37331[(2)] = null);

(statearr_37315_37331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (3))){
var inst_37306 = (state_37308[(2)]);
var state_37308__$1 = state_37308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37308__$1,inst_37306);
} else {
if((state_val_37309 === (2))){
var state_37308__$1 = state_37308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37308__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37309 === (11))){
var inst_37300 = (state_37308[(2)]);
var state_37308__$1 = (function (){var statearr_37316 = state_37308;
(statearr_37316[(8)] = inst_37300);

return statearr_37316;
})();
var statearr_37317_37332 = state_37308__$1;
(statearr_37317_37332[(2)] = null);

(statearr_37317_37332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (9))){
var inst_37292 = (state_37308[(9)]);
var inst_37294 = (state_37308[(10)]);
var inst_37296 = inst_37294.call(null,inst_37292);
var state_37308__$1 = state_37308;
var statearr_37318_37333 = state_37308__$1;
(statearr_37318_37333[(2)] = inst_37296);

(statearr_37318_37333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (5))){
var inst_37288 = (state_37308[(7)]);
var inst_37290 = figwheel.client.file_reloading.blocking_load.call(null,inst_37288);
var state_37308__$1 = state_37308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37308__$1,(8),inst_37290);
} else {
if((state_val_37309 === (10))){
var inst_37292 = (state_37308[(9)]);
var inst_37298 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37292);
var state_37308__$1 = state_37308;
var statearr_37319_37334 = state_37308__$1;
(statearr_37319_37334[(2)] = inst_37298);

(statearr_37319_37334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (8))){
var inst_37294 = (state_37308[(10)]);
var inst_37288 = (state_37308[(7)]);
var inst_37292 = (state_37308[(2)]);
var inst_37293 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37294__$1 = cljs.core.get.call(null,inst_37293,inst_37288);
var state_37308__$1 = (function (){var statearr_37320 = state_37308;
(statearr_37320[(9)] = inst_37292);

(statearr_37320[(10)] = inst_37294__$1);

return statearr_37320;
})();
if(cljs.core.truth_(inst_37294__$1)){
var statearr_37321_37335 = state_37308__$1;
(statearr_37321_37335[(1)] = (9));

} else {
var statearr_37322_37336 = state_37308__$1;
(statearr_37322_37336[(1)] = (10));

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
});})(c__30625__auto__))
;
return ((function (switch__30537__auto__,c__30625__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30538__auto__ = null;
var figwheel$client$file_reloading$state_machine__30538__auto____0 = (function (){
var statearr_37323 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37323[(0)] = figwheel$client$file_reloading$state_machine__30538__auto__);

(statearr_37323[(1)] = (1));

return statearr_37323;
});
var figwheel$client$file_reloading$state_machine__30538__auto____1 = (function (state_37308){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_37308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e37324){if((e37324 instanceof Object)){
var ex__30541__auto__ = e37324;
var statearr_37325_37337 = state_37308;
(statearr_37325_37337[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37338 = state_37308;
state_37308 = G__37338;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30538__auto__ = function(state_37308){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30538__auto____1.call(this,state_37308);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30538__auto____0;
figwheel$client$file_reloading$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30538__auto____1;
return figwheel$client$file_reloading$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__))
})();
var state__30627__auto__ = (function (){var statearr_37326 = f__30626__auto__.call(null);
(statearr_37326[(6)] = c__30625__auto__);

return statearr_37326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto__))
);

return c__30625__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37339,callback){
var map__37340 = p__37339;
var map__37340__$1 = ((((!((map__37340 == null)))?((((map__37340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37340):map__37340);
var file_msg = map__37340__$1;
var namespace = cljs.core.get.call(null,map__37340__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37340,map__37340__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37340,map__37340__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37342){
var map__37343 = p__37342;
var map__37343__$1 = ((((!((map__37343 == null)))?((((map__37343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37343):map__37343);
var file_msg = map__37343__$1;
var namespace = cljs.core.get.call(null,map__37343__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37345){
var map__37346 = p__37345;
var map__37346__$1 = ((((!((map__37346 == null)))?((((map__37346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37346):map__37346);
var file_msg = map__37346__$1;
var namespace = cljs.core.get.call(null,map__37346__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27184__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27184__auto__){
var or__27196__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
var or__27196__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27196__auto____$1)){
return or__27196__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27184__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37348,callback){
var map__37349 = p__37348;
var map__37349__$1 = ((((!((map__37349 == null)))?((((map__37349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37349):map__37349);
var file_msg = map__37349__$1;
var request_url = cljs.core.get.call(null,map__37349__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37349__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30625__auto___37399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___37399,out){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___37399,out){
return (function (state_37384){
var state_val_37385 = (state_37384[(1)]);
if((state_val_37385 === (1))){
var inst_37358 = cljs.core.seq.call(null,files);
var inst_37359 = cljs.core.first.call(null,inst_37358);
var inst_37360 = cljs.core.next.call(null,inst_37358);
var inst_37361 = files;
var state_37384__$1 = (function (){var statearr_37386 = state_37384;
(statearr_37386[(7)] = inst_37359);

(statearr_37386[(8)] = inst_37361);

(statearr_37386[(9)] = inst_37360);

return statearr_37386;
})();
var statearr_37387_37400 = state_37384__$1;
(statearr_37387_37400[(2)] = null);

(statearr_37387_37400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37385 === (2))){
var inst_37367 = (state_37384[(10)]);
var inst_37361 = (state_37384[(8)]);
var inst_37366 = cljs.core.seq.call(null,inst_37361);
var inst_37367__$1 = cljs.core.first.call(null,inst_37366);
var inst_37368 = cljs.core.next.call(null,inst_37366);
var inst_37369 = (inst_37367__$1 == null);
var inst_37370 = cljs.core.not.call(null,inst_37369);
var state_37384__$1 = (function (){var statearr_37388 = state_37384;
(statearr_37388[(10)] = inst_37367__$1);

(statearr_37388[(11)] = inst_37368);

return statearr_37388;
})();
if(inst_37370){
var statearr_37389_37401 = state_37384__$1;
(statearr_37389_37401[(1)] = (4));

} else {
var statearr_37390_37402 = state_37384__$1;
(statearr_37390_37402[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37385 === (3))){
var inst_37382 = (state_37384[(2)]);
var state_37384__$1 = state_37384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37384__$1,inst_37382);
} else {
if((state_val_37385 === (4))){
var inst_37367 = (state_37384[(10)]);
var inst_37372 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37367);
var state_37384__$1 = state_37384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37384__$1,(7),inst_37372);
} else {
if((state_val_37385 === (5))){
var inst_37378 = cljs.core.async.close_BANG_.call(null,out);
var state_37384__$1 = state_37384;
var statearr_37391_37403 = state_37384__$1;
(statearr_37391_37403[(2)] = inst_37378);

(statearr_37391_37403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37385 === (6))){
var inst_37380 = (state_37384[(2)]);
var state_37384__$1 = state_37384;
var statearr_37392_37404 = state_37384__$1;
(statearr_37392_37404[(2)] = inst_37380);

(statearr_37392_37404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37385 === (7))){
var inst_37368 = (state_37384[(11)]);
var inst_37374 = (state_37384[(2)]);
var inst_37375 = cljs.core.async.put_BANG_.call(null,out,inst_37374);
var inst_37361 = inst_37368;
var state_37384__$1 = (function (){var statearr_37393 = state_37384;
(statearr_37393[(8)] = inst_37361);

(statearr_37393[(12)] = inst_37375);

return statearr_37393;
})();
var statearr_37394_37405 = state_37384__$1;
(statearr_37394_37405[(2)] = null);

(statearr_37394_37405[(1)] = (2));


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
});})(c__30625__auto___37399,out))
;
return ((function (switch__30537__auto__,c__30625__auto___37399,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto____0 = (function (){
var statearr_37395 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37395[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto__);

(statearr_37395[(1)] = (1));

return statearr_37395;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto____1 = (function (state_37384){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_37384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e37396){if((e37396 instanceof Object)){
var ex__30541__auto__ = e37396;
var statearr_37397_37406 = state_37384;
(statearr_37397_37406[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37407 = state_37384;
state_37384 = G__37407;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto__ = function(state_37384){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto____1.call(this,state_37384);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___37399,out))
})();
var state__30627__auto__ = (function (){var statearr_37398 = f__30626__auto__.call(null);
(statearr_37398[(6)] = c__30625__auto___37399);

return statearr_37398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___37399,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37408,opts){
var map__37409 = p__37408;
var map__37409__$1 = ((((!((map__37409 == null)))?((((map__37409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37409):map__37409);
var eval_body = cljs.core.get.call(null,map__37409__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37409__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27184__auto__ = eval_body;
if(cljs.core.truth_(and__27184__auto__)){
return typeof eval_body === 'string';
} else {
return and__27184__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37411){var e = e37411;
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
return (function (p1__37412_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37412_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37413){
var vec__37414 = p__37413;
var k = cljs.core.nth.call(null,vec__37414,(0),null);
var v = cljs.core.nth.call(null,vec__37414,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37417){
var vec__37418 = p__37417;
var k = cljs.core.nth.call(null,vec__37418,(0),null);
var v = cljs.core.nth.call(null,vec__37418,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37424,p__37425){
var map__37426 = p__37424;
var map__37426__$1 = ((((!((map__37426 == null)))?((((map__37426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37426):map__37426);
var opts = map__37426__$1;
var before_jsload = cljs.core.get.call(null,map__37426__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37426__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37426__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37427 = p__37425;
var map__37427__$1 = ((((!((map__37427 == null)))?((((map__37427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37427):map__37427);
var msg = map__37427__$1;
var files = cljs.core.get.call(null,map__37427__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37427__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37427__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37581){
var state_val_37582 = (state_37581[(1)]);
if((state_val_37582 === (7))){
var inst_37441 = (state_37581[(7)]);
var inst_37442 = (state_37581[(8)]);
var inst_37444 = (state_37581[(9)]);
var inst_37443 = (state_37581[(10)]);
var inst_37449 = cljs.core._nth.call(null,inst_37442,inst_37444);
var inst_37450 = figwheel.client.file_reloading.eval_body.call(null,inst_37449,opts);
var inst_37451 = (inst_37444 + (1));
var tmp37583 = inst_37441;
var tmp37584 = inst_37442;
var tmp37585 = inst_37443;
var inst_37441__$1 = tmp37583;
var inst_37442__$1 = tmp37584;
var inst_37443__$1 = tmp37585;
var inst_37444__$1 = inst_37451;
var state_37581__$1 = (function (){var statearr_37586 = state_37581;
(statearr_37586[(7)] = inst_37441__$1);

(statearr_37586[(11)] = inst_37450);

(statearr_37586[(8)] = inst_37442__$1);

(statearr_37586[(9)] = inst_37444__$1);

(statearr_37586[(10)] = inst_37443__$1);

return statearr_37586;
})();
var statearr_37587_37670 = state_37581__$1;
(statearr_37587_37670[(2)] = null);

(statearr_37587_37670[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (20))){
var inst_37484 = (state_37581[(12)]);
var inst_37492 = figwheel.client.file_reloading.sort_files.call(null,inst_37484);
var state_37581__$1 = state_37581;
var statearr_37588_37671 = state_37581__$1;
(statearr_37588_37671[(2)] = inst_37492);

(statearr_37588_37671[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (27))){
var state_37581__$1 = state_37581;
var statearr_37589_37672 = state_37581__$1;
(statearr_37589_37672[(2)] = null);

(statearr_37589_37672[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (1))){
var inst_37433 = (state_37581[(13)]);
var inst_37430 = before_jsload.call(null,files);
var inst_37431 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37432 = (function (){return ((function (inst_37433,inst_37430,inst_37431,state_val_37582,c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37421_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37421_SHARP_);
});
;})(inst_37433,inst_37430,inst_37431,state_val_37582,c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37433__$1 = cljs.core.filter.call(null,inst_37432,files);
var inst_37434 = cljs.core.not_empty.call(null,inst_37433__$1);
var state_37581__$1 = (function (){var statearr_37590 = state_37581;
(statearr_37590[(14)] = inst_37431);

(statearr_37590[(15)] = inst_37430);

(statearr_37590[(13)] = inst_37433__$1);

return statearr_37590;
})();
if(cljs.core.truth_(inst_37434)){
var statearr_37591_37673 = state_37581__$1;
(statearr_37591_37673[(1)] = (2));

} else {
var statearr_37592_37674 = state_37581__$1;
(statearr_37592_37674[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (24))){
var state_37581__$1 = state_37581;
var statearr_37593_37675 = state_37581__$1;
(statearr_37593_37675[(2)] = null);

(statearr_37593_37675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (39))){
var inst_37534 = (state_37581[(16)]);
var state_37581__$1 = state_37581;
var statearr_37594_37676 = state_37581__$1;
(statearr_37594_37676[(2)] = inst_37534);

(statearr_37594_37676[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (46))){
var inst_37576 = (state_37581[(2)]);
var state_37581__$1 = state_37581;
var statearr_37595_37677 = state_37581__$1;
(statearr_37595_37677[(2)] = inst_37576);

(statearr_37595_37677[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (4))){
var inst_37478 = (state_37581[(2)]);
var inst_37479 = cljs.core.List.EMPTY;
var inst_37480 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37479);
var inst_37481 = (function (){return ((function (inst_37478,inst_37479,inst_37480,state_val_37582,c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37422_SHARP_){
var and__27184__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37422_SHARP_);
if(cljs.core.truth_(and__27184__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37422_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37422_SHARP_)));
} else {
return and__27184__auto__;
}
});
;})(inst_37478,inst_37479,inst_37480,state_val_37582,c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37482 = cljs.core.filter.call(null,inst_37481,files);
var inst_37483 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37484 = cljs.core.concat.call(null,inst_37482,inst_37483);
var state_37581__$1 = (function (){var statearr_37596 = state_37581;
(statearr_37596[(17)] = inst_37478);

(statearr_37596[(12)] = inst_37484);

(statearr_37596[(18)] = inst_37480);

return statearr_37596;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37597_37678 = state_37581__$1;
(statearr_37597_37678[(1)] = (16));

} else {
var statearr_37598_37679 = state_37581__$1;
(statearr_37598_37679[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (15))){
var inst_37468 = (state_37581[(2)]);
var state_37581__$1 = state_37581;
var statearr_37599_37680 = state_37581__$1;
(statearr_37599_37680[(2)] = inst_37468);

(statearr_37599_37680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (21))){
var inst_37494 = (state_37581[(19)]);
var inst_37494__$1 = (state_37581[(2)]);
var inst_37495 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37494__$1);
var state_37581__$1 = (function (){var statearr_37600 = state_37581;
(statearr_37600[(19)] = inst_37494__$1);

return statearr_37600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37581__$1,(22),inst_37495);
} else {
if((state_val_37582 === (31))){
var inst_37579 = (state_37581[(2)]);
var state_37581__$1 = state_37581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37581__$1,inst_37579);
} else {
if((state_val_37582 === (32))){
var inst_37534 = (state_37581[(16)]);
var inst_37539 = inst_37534.cljs$lang$protocol_mask$partition0$;
var inst_37540 = (inst_37539 & (64));
var inst_37541 = inst_37534.cljs$core$ISeq$;
var inst_37542 = (cljs.core.PROTOCOL_SENTINEL === inst_37541);
var inst_37543 = (inst_37540) || (inst_37542);
var state_37581__$1 = state_37581;
if(cljs.core.truth_(inst_37543)){
var statearr_37601_37681 = state_37581__$1;
(statearr_37601_37681[(1)] = (35));

} else {
var statearr_37602_37682 = state_37581__$1;
(statearr_37602_37682[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (40))){
var inst_37556 = (state_37581[(20)]);
var inst_37555 = (state_37581[(2)]);
var inst_37556__$1 = cljs.core.get.call(null,inst_37555,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37557 = cljs.core.get.call(null,inst_37555,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37558 = cljs.core.not_empty.call(null,inst_37556__$1);
var state_37581__$1 = (function (){var statearr_37603 = state_37581;
(statearr_37603[(20)] = inst_37556__$1);

(statearr_37603[(21)] = inst_37557);

return statearr_37603;
})();
if(cljs.core.truth_(inst_37558)){
var statearr_37604_37683 = state_37581__$1;
(statearr_37604_37683[(1)] = (41));

} else {
var statearr_37605_37684 = state_37581__$1;
(statearr_37605_37684[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (33))){
var state_37581__$1 = state_37581;
var statearr_37606_37685 = state_37581__$1;
(statearr_37606_37685[(2)] = false);

(statearr_37606_37685[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (13))){
var inst_37454 = (state_37581[(22)]);
var inst_37458 = cljs.core.chunk_first.call(null,inst_37454);
var inst_37459 = cljs.core.chunk_rest.call(null,inst_37454);
var inst_37460 = cljs.core.count.call(null,inst_37458);
var inst_37441 = inst_37459;
var inst_37442 = inst_37458;
var inst_37443 = inst_37460;
var inst_37444 = (0);
var state_37581__$1 = (function (){var statearr_37607 = state_37581;
(statearr_37607[(7)] = inst_37441);

(statearr_37607[(8)] = inst_37442);

(statearr_37607[(9)] = inst_37444);

(statearr_37607[(10)] = inst_37443);

return statearr_37607;
})();
var statearr_37608_37686 = state_37581__$1;
(statearr_37608_37686[(2)] = null);

(statearr_37608_37686[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (22))){
var inst_37497 = (state_37581[(23)]);
var inst_37498 = (state_37581[(24)]);
var inst_37502 = (state_37581[(25)]);
var inst_37494 = (state_37581[(19)]);
var inst_37497__$1 = (state_37581[(2)]);
var inst_37498__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37497__$1);
var inst_37499 = (function (){var all_files = inst_37494;
var res_SINGLEQUOTE_ = inst_37497__$1;
var res = inst_37498__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37497,inst_37498,inst_37502,inst_37494,inst_37497__$1,inst_37498__$1,state_val_37582,c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37423_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37423_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37497,inst_37498,inst_37502,inst_37494,inst_37497__$1,inst_37498__$1,state_val_37582,c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37500 = cljs.core.filter.call(null,inst_37499,inst_37497__$1);
var inst_37501 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37502__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37501);
var inst_37503 = cljs.core.not_empty.call(null,inst_37502__$1);
var state_37581__$1 = (function (){var statearr_37609 = state_37581;
(statearr_37609[(23)] = inst_37497__$1);

(statearr_37609[(26)] = inst_37500);

(statearr_37609[(24)] = inst_37498__$1);

(statearr_37609[(25)] = inst_37502__$1);

return statearr_37609;
})();
if(cljs.core.truth_(inst_37503)){
var statearr_37610_37687 = state_37581__$1;
(statearr_37610_37687[(1)] = (23));

} else {
var statearr_37611_37688 = state_37581__$1;
(statearr_37611_37688[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (36))){
var state_37581__$1 = state_37581;
var statearr_37612_37689 = state_37581__$1;
(statearr_37612_37689[(2)] = false);

(statearr_37612_37689[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (41))){
var inst_37556 = (state_37581[(20)]);
var inst_37560 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37561 = cljs.core.map.call(null,inst_37560,inst_37556);
var inst_37562 = cljs.core.pr_str.call(null,inst_37561);
var inst_37563 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37562)].join('');
var inst_37564 = figwheel.client.utils.log.call(null,inst_37563);
var state_37581__$1 = state_37581;
var statearr_37613_37690 = state_37581__$1;
(statearr_37613_37690[(2)] = inst_37564);

(statearr_37613_37690[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (43))){
var inst_37557 = (state_37581[(21)]);
var inst_37567 = (state_37581[(2)]);
var inst_37568 = cljs.core.not_empty.call(null,inst_37557);
var state_37581__$1 = (function (){var statearr_37614 = state_37581;
(statearr_37614[(27)] = inst_37567);

return statearr_37614;
})();
if(cljs.core.truth_(inst_37568)){
var statearr_37615_37691 = state_37581__$1;
(statearr_37615_37691[(1)] = (44));

} else {
var statearr_37616_37692 = state_37581__$1;
(statearr_37616_37692[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (29))){
var inst_37497 = (state_37581[(23)]);
var inst_37500 = (state_37581[(26)]);
var inst_37534 = (state_37581[(16)]);
var inst_37498 = (state_37581[(24)]);
var inst_37502 = (state_37581[(25)]);
var inst_37494 = (state_37581[(19)]);
var inst_37530 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37533 = (function (){var all_files = inst_37494;
var res_SINGLEQUOTE_ = inst_37497;
var res = inst_37498;
var files_not_loaded = inst_37500;
var dependencies_that_loaded = inst_37502;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37497,inst_37500,inst_37534,inst_37498,inst_37502,inst_37494,inst_37530,state_val_37582,c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37532){
var map__37617 = p__37532;
var map__37617__$1 = ((((!((map__37617 == null)))?((((map__37617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37617):map__37617);
var namespace = cljs.core.get.call(null,map__37617__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37497,inst_37500,inst_37534,inst_37498,inst_37502,inst_37494,inst_37530,state_val_37582,c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37534__$1 = cljs.core.group_by.call(null,inst_37533,inst_37500);
var inst_37536 = (inst_37534__$1 == null);
var inst_37537 = cljs.core.not.call(null,inst_37536);
var state_37581__$1 = (function (){var statearr_37619 = state_37581;
(statearr_37619[(16)] = inst_37534__$1);

(statearr_37619[(28)] = inst_37530);

return statearr_37619;
})();
if(inst_37537){
var statearr_37620_37693 = state_37581__$1;
(statearr_37620_37693[(1)] = (32));

} else {
var statearr_37621_37694 = state_37581__$1;
(statearr_37621_37694[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (44))){
var inst_37557 = (state_37581[(21)]);
var inst_37570 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37557);
var inst_37571 = cljs.core.pr_str.call(null,inst_37570);
var inst_37572 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37571)].join('');
var inst_37573 = figwheel.client.utils.log.call(null,inst_37572);
var state_37581__$1 = state_37581;
var statearr_37622_37695 = state_37581__$1;
(statearr_37622_37695[(2)] = inst_37573);

(statearr_37622_37695[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (6))){
var inst_37475 = (state_37581[(2)]);
var state_37581__$1 = state_37581;
var statearr_37623_37696 = state_37581__$1;
(statearr_37623_37696[(2)] = inst_37475);

(statearr_37623_37696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (28))){
var inst_37500 = (state_37581[(26)]);
var inst_37527 = (state_37581[(2)]);
var inst_37528 = cljs.core.not_empty.call(null,inst_37500);
var state_37581__$1 = (function (){var statearr_37624 = state_37581;
(statearr_37624[(29)] = inst_37527);

return statearr_37624;
})();
if(cljs.core.truth_(inst_37528)){
var statearr_37625_37697 = state_37581__$1;
(statearr_37625_37697[(1)] = (29));

} else {
var statearr_37626_37698 = state_37581__$1;
(statearr_37626_37698[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (25))){
var inst_37498 = (state_37581[(24)]);
var inst_37514 = (state_37581[(2)]);
var inst_37515 = cljs.core.not_empty.call(null,inst_37498);
var state_37581__$1 = (function (){var statearr_37627 = state_37581;
(statearr_37627[(30)] = inst_37514);

return statearr_37627;
})();
if(cljs.core.truth_(inst_37515)){
var statearr_37628_37699 = state_37581__$1;
(statearr_37628_37699[(1)] = (26));

} else {
var statearr_37629_37700 = state_37581__$1;
(statearr_37629_37700[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (34))){
var inst_37550 = (state_37581[(2)]);
var state_37581__$1 = state_37581;
if(cljs.core.truth_(inst_37550)){
var statearr_37630_37701 = state_37581__$1;
(statearr_37630_37701[(1)] = (38));

} else {
var statearr_37631_37702 = state_37581__$1;
(statearr_37631_37702[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (17))){
var state_37581__$1 = state_37581;
var statearr_37632_37703 = state_37581__$1;
(statearr_37632_37703[(2)] = recompile_dependents);

(statearr_37632_37703[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (3))){
var state_37581__$1 = state_37581;
var statearr_37633_37704 = state_37581__$1;
(statearr_37633_37704[(2)] = null);

(statearr_37633_37704[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (12))){
var inst_37471 = (state_37581[(2)]);
var state_37581__$1 = state_37581;
var statearr_37634_37705 = state_37581__$1;
(statearr_37634_37705[(2)] = inst_37471);

(statearr_37634_37705[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (2))){
var inst_37433 = (state_37581[(13)]);
var inst_37440 = cljs.core.seq.call(null,inst_37433);
var inst_37441 = inst_37440;
var inst_37442 = null;
var inst_37443 = (0);
var inst_37444 = (0);
var state_37581__$1 = (function (){var statearr_37635 = state_37581;
(statearr_37635[(7)] = inst_37441);

(statearr_37635[(8)] = inst_37442);

(statearr_37635[(9)] = inst_37444);

(statearr_37635[(10)] = inst_37443);

return statearr_37635;
})();
var statearr_37636_37706 = state_37581__$1;
(statearr_37636_37706[(2)] = null);

(statearr_37636_37706[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (23))){
var inst_37497 = (state_37581[(23)]);
var inst_37500 = (state_37581[(26)]);
var inst_37498 = (state_37581[(24)]);
var inst_37502 = (state_37581[(25)]);
var inst_37494 = (state_37581[(19)]);
var inst_37505 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37507 = (function (){var all_files = inst_37494;
var res_SINGLEQUOTE_ = inst_37497;
var res = inst_37498;
var files_not_loaded = inst_37500;
var dependencies_that_loaded = inst_37502;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37497,inst_37500,inst_37498,inst_37502,inst_37494,inst_37505,state_val_37582,c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37506){
var map__37637 = p__37506;
var map__37637__$1 = ((((!((map__37637 == null)))?((((map__37637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37637):map__37637);
var request_url = cljs.core.get.call(null,map__37637__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37497,inst_37500,inst_37498,inst_37502,inst_37494,inst_37505,state_val_37582,c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37508 = cljs.core.reverse.call(null,inst_37502);
var inst_37509 = cljs.core.map.call(null,inst_37507,inst_37508);
var inst_37510 = cljs.core.pr_str.call(null,inst_37509);
var inst_37511 = figwheel.client.utils.log.call(null,inst_37510);
var state_37581__$1 = (function (){var statearr_37639 = state_37581;
(statearr_37639[(31)] = inst_37505);

return statearr_37639;
})();
var statearr_37640_37707 = state_37581__$1;
(statearr_37640_37707[(2)] = inst_37511);

(statearr_37640_37707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (35))){
var state_37581__$1 = state_37581;
var statearr_37641_37708 = state_37581__$1;
(statearr_37641_37708[(2)] = true);

(statearr_37641_37708[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (19))){
var inst_37484 = (state_37581[(12)]);
var inst_37490 = figwheel.client.file_reloading.expand_files.call(null,inst_37484);
var state_37581__$1 = state_37581;
var statearr_37642_37709 = state_37581__$1;
(statearr_37642_37709[(2)] = inst_37490);

(statearr_37642_37709[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (11))){
var state_37581__$1 = state_37581;
var statearr_37643_37710 = state_37581__$1;
(statearr_37643_37710[(2)] = null);

(statearr_37643_37710[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (9))){
var inst_37473 = (state_37581[(2)]);
var state_37581__$1 = state_37581;
var statearr_37644_37711 = state_37581__$1;
(statearr_37644_37711[(2)] = inst_37473);

(statearr_37644_37711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (5))){
var inst_37444 = (state_37581[(9)]);
var inst_37443 = (state_37581[(10)]);
var inst_37446 = (inst_37444 < inst_37443);
var inst_37447 = inst_37446;
var state_37581__$1 = state_37581;
if(cljs.core.truth_(inst_37447)){
var statearr_37645_37712 = state_37581__$1;
(statearr_37645_37712[(1)] = (7));

} else {
var statearr_37646_37713 = state_37581__$1;
(statearr_37646_37713[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (14))){
var inst_37454 = (state_37581[(22)]);
var inst_37463 = cljs.core.first.call(null,inst_37454);
var inst_37464 = figwheel.client.file_reloading.eval_body.call(null,inst_37463,opts);
var inst_37465 = cljs.core.next.call(null,inst_37454);
var inst_37441 = inst_37465;
var inst_37442 = null;
var inst_37443 = (0);
var inst_37444 = (0);
var state_37581__$1 = (function (){var statearr_37647 = state_37581;
(statearr_37647[(7)] = inst_37441);

(statearr_37647[(8)] = inst_37442);

(statearr_37647[(9)] = inst_37444);

(statearr_37647[(10)] = inst_37443);

(statearr_37647[(32)] = inst_37464);

return statearr_37647;
})();
var statearr_37648_37714 = state_37581__$1;
(statearr_37648_37714[(2)] = null);

(statearr_37648_37714[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (45))){
var state_37581__$1 = state_37581;
var statearr_37649_37715 = state_37581__$1;
(statearr_37649_37715[(2)] = null);

(statearr_37649_37715[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (26))){
var inst_37497 = (state_37581[(23)]);
var inst_37500 = (state_37581[(26)]);
var inst_37498 = (state_37581[(24)]);
var inst_37502 = (state_37581[(25)]);
var inst_37494 = (state_37581[(19)]);
var inst_37517 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37519 = (function (){var all_files = inst_37494;
var res_SINGLEQUOTE_ = inst_37497;
var res = inst_37498;
var files_not_loaded = inst_37500;
var dependencies_that_loaded = inst_37502;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37497,inst_37500,inst_37498,inst_37502,inst_37494,inst_37517,state_val_37582,c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37518){
var map__37650 = p__37518;
var map__37650__$1 = ((((!((map__37650 == null)))?((((map__37650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37650):map__37650);
var namespace = cljs.core.get.call(null,map__37650__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37650__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37497,inst_37500,inst_37498,inst_37502,inst_37494,inst_37517,state_val_37582,c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37520 = cljs.core.map.call(null,inst_37519,inst_37498);
var inst_37521 = cljs.core.pr_str.call(null,inst_37520);
var inst_37522 = figwheel.client.utils.log.call(null,inst_37521);
var inst_37523 = (function (){var all_files = inst_37494;
var res_SINGLEQUOTE_ = inst_37497;
var res = inst_37498;
var files_not_loaded = inst_37500;
var dependencies_that_loaded = inst_37502;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37497,inst_37500,inst_37498,inst_37502,inst_37494,inst_37517,inst_37519,inst_37520,inst_37521,inst_37522,state_val_37582,c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37497,inst_37500,inst_37498,inst_37502,inst_37494,inst_37517,inst_37519,inst_37520,inst_37521,inst_37522,state_val_37582,c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37524 = setTimeout(inst_37523,(10));
var state_37581__$1 = (function (){var statearr_37652 = state_37581;
(statearr_37652[(33)] = inst_37522);

(statearr_37652[(34)] = inst_37517);

return statearr_37652;
})();
var statearr_37653_37716 = state_37581__$1;
(statearr_37653_37716[(2)] = inst_37524);

(statearr_37653_37716[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (16))){
var state_37581__$1 = state_37581;
var statearr_37654_37717 = state_37581__$1;
(statearr_37654_37717[(2)] = reload_dependents);

(statearr_37654_37717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (38))){
var inst_37534 = (state_37581[(16)]);
var inst_37552 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37534);
var state_37581__$1 = state_37581;
var statearr_37655_37718 = state_37581__$1;
(statearr_37655_37718[(2)] = inst_37552);

(statearr_37655_37718[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (30))){
var state_37581__$1 = state_37581;
var statearr_37656_37719 = state_37581__$1;
(statearr_37656_37719[(2)] = null);

(statearr_37656_37719[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (10))){
var inst_37454 = (state_37581[(22)]);
var inst_37456 = cljs.core.chunked_seq_QMARK_.call(null,inst_37454);
var state_37581__$1 = state_37581;
if(inst_37456){
var statearr_37657_37720 = state_37581__$1;
(statearr_37657_37720[(1)] = (13));

} else {
var statearr_37658_37721 = state_37581__$1;
(statearr_37658_37721[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (18))){
var inst_37488 = (state_37581[(2)]);
var state_37581__$1 = state_37581;
if(cljs.core.truth_(inst_37488)){
var statearr_37659_37722 = state_37581__$1;
(statearr_37659_37722[(1)] = (19));

} else {
var statearr_37660_37723 = state_37581__$1;
(statearr_37660_37723[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (42))){
var state_37581__$1 = state_37581;
var statearr_37661_37724 = state_37581__$1;
(statearr_37661_37724[(2)] = null);

(statearr_37661_37724[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (37))){
var inst_37547 = (state_37581[(2)]);
var state_37581__$1 = state_37581;
var statearr_37662_37725 = state_37581__$1;
(statearr_37662_37725[(2)] = inst_37547);

(statearr_37662_37725[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37582 === (8))){
var inst_37441 = (state_37581[(7)]);
var inst_37454 = (state_37581[(22)]);
var inst_37454__$1 = cljs.core.seq.call(null,inst_37441);
var state_37581__$1 = (function (){var statearr_37663 = state_37581;
(statearr_37663[(22)] = inst_37454__$1);

return statearr_37663;
})();
if(inst_37454__$1){
var statearr_37664_37726 = state_37581__$1;
(statearr_37664_37726[(1)] = (10));

} else {
var statearr_37665_37727 = state_37581__$1;
(statearr_37665_37727[(1)] = (11));

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
});})(c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30537__auto__,c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto____0 = (function (){
var statearr_37666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37666[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto__);

(statearr_37666[(1)] = (1));

return statearr_37666;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto____1 = (function (state_37581){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_37581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e37667){if((e37667 instanceof Object)){
var ex__30541__auto__ = e37667;
var statearr_37668_37728 = state_37581;
(statearr_37668_37728[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37729 = state_37581;
state_37581 = G__37729;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto__ = function(state_37581){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto____1.call(this,state_37581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30627__auto__ = (function (){var statearr_37669 = f__30626__auto__.call(null);
(statearr_37669[(6)] = c__30625__auto__);

return statearr_37669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto__,map__37426,map__37426__$1,opts,before_jsload,on_jsload,reload_dependents,map__37427,map__37427__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30625__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37732,link){
var map__37733 = p__37732;
var map__37733__$1 = ((((!((map__37733 == null)))?((((map__37733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37733):map__37733);
var file = cljs.core.get.call(null,map__37733__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37733,map__37733__$1,file){
return (function (p1__37730_SHARP_,p2__37731_SHARP_){
if(cljs.core._EQ_.call(null,p1__37730_SHARP_,p2__37731_SHARP_)){
return p1__37730_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37733,map__37733__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37736){
var map__37737 = p__37736;
var map__37737__$1 = ((((!((map__37737 == null)))?((((map__37737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37737):map__37737);
var match_length = cljs.core.get.call(null,map__37737__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37737__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37735_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37735_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37739_SHARP_,p2__37740_SHARP_){
return cljs.core.assoc.call(null,p1__37739_SHARP_,cljs.core.get.call(null,p2__37740_SHARP_,key),p2__37740_SHARP_);
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
var loaded_f_datas_37741 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37741);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37741);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37742,p__37743){
var map__37744 = p__37742;
var map__37744__$1 = ((((!((map__37744 == null)))?((((map__37744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37744):map__37744);
var on_cssload = cljs.core.get.call(null,map__37744__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37745 = p__37743;
var map__37745__$1 = ((((!((map__37745 == null)))?((((map__37745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37745):map__37745);
var files_msg = map__37745__$1;
var files = cljs.core.get.call(null,map__37745__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1515350496490
