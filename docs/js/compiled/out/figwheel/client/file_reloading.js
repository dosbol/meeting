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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37118_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37118_SHARP_));
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
var seq__37119 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37120 = null;
var count__37121 = (0);
var i__37122 = (0);
while(true){
if((i__37122 < count__37121)){
var n = cljs.core._nth.call(null,chunk__37120,i__37122);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37123 = seq__37119;
var G__37124 = chunk__37120;
var G__37125 = count__37121;
var G__37126 = (i__37122 + (1));
seq__37119 = G__37123;
chunk__37120 = G__37124;
count__37121 = G__37125;
i__37122 = G__37126;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37119);
if(temp__4657__auto__){
var seq__37119__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37119__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37119__$1);
var G__37127 = cljs.core.chunk_rest.call(null,seq__37119__$1);
var G__37128 = c__28034__auto__;
var G__37129 = cljs.core.count.call(null,c__28034__auto__);
var G__37130 = (0);
seq__37119 = G__37127;
chunk__37120 = G__37128;
count__37121 = G__37129;
i__37122 = G__37130;
continue;
} else {
var n = cljs.core.first.call(null,seq__37119__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37131 = cljs.core.next.call(null,seq__37119__$1);
var G__37132 = null;
var G__37133 = (0);
var G__37134 = (0);
seq__37119 = G__37131;
chunk__37120 = G__37132;
count__37121 = G__37133;
i__37122 = G__37134;
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

var seq__37144_37152 = cljs.core.seq.call(null,deps);
var chunk__37145_37153 = null;
var count__37146_37154 = (0);
var i__37147_37155 = (0);
while(true){
if((i__37147_37155 < count__37146_37154)){
var dep_37156 = cljs.core._nth.call(null,chunk__37145_37153,i__37147_37155);
topo_sort_helper_STAR_.call(null,dep_37156,(depth + (1)),state);

var G__37157 = seq__37144_37152;
var G__37158 = chunk__37145_37153;
var G__37159 = count__37146_37154;
var G__37160 = (i__37147_37155 + (1));
seq__37144_37152 = G__37157;
chunk__37145_37153 = G__37158;
count__37146_37154 = G__37159;
i__37147_37155 = G__37160;
continue;
} else {
var temp__4657__auto___37161 = cljs.core.seq.call(null,seq__37144_37152);
if(temp__4657__auto___37161){
var seq__37144_37162__$1 = temp__4657__auto___37161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37144_37162__$1)){
var c__28034__auto___37163 = cljs.core.chunk_first.call(null,seq__37144_37162__$1);
var G__37164 = cljs.core.chunk_rest.call(null,seq__37144_37162__$1);
var G__37165 = c__28034__auto___37163;
var G__37166 = cljs.core.count.call(null,c__28034__auto___37163);
var G__37167 = (0);
seq__37144_37152 = G__37164;
chunk__37145_37153 = G__37165;
count__37146_37154 = G__37166;
i__37147_37155 = G__37167;
continue;
} else {
var dep_37168 = cljs.core.first.call(null,seq__37144_37162__$1);
topo_sort_helper_STAR_.call(null,dep_37168,(depth + (1)),state);

var G__37169 = cljs.core.next.call(null,seq__37144_37162__$1);
var G__37170 = null;
var G__37171 = (0);
var G__37172 = (0);
seq__37144_37152 = G__37169;
chunk__37145_37153 = G__37170;
count__37146_37154 = G__37171;
i__37147_37155 = G__37172;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37148){
var vec__37149 = p__37148;
var seq__37150 = cljs.core.seq.call(null,vec__37149);
var first__37151 = cljs.core.first.call(null,seq__37150);
var seq__37150__$1 = cljs.core.next.call(null,seq__37150);
var x = first__37151;
var xs = seq__37150__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37149,seq__37150,first__37151,seq__37150__$1,x,xs,get_deps__$1){
return (function (p1__37135_SHARP_){
return clojure.set.difference.call(null,p1__37135_SHARP_,x);
});})(vec__37149,seq__37150,first__37151,seq__37150__$1,x,xs,get_deps__$1))
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
var seq__37173 = cljs.core.seq.call(null,provides);
var chunk__37174 = null;
var count__37175 = (0);
var i__37176 = (0);
while(true){
if((i__37176 < count__37175)){
var prov = cljs.core._nth.call(null,chunk__37174,i__37176);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37177_37185 = cljs.core.seq.call(null,requires);
var chunk__37178_37186 = null;
var count__37179_37187 = (0);
var i__37180_37188 = (0);
while(true){
if((i__37180_37188 < count__37179_37187)){
var req_37189 = cljs.core._nth.call(null,chunk__37178_37186,i__37180_37188);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37189,prov);

var G__37190 = seq__37177_37185;
var G__37191 = chunk__37178_37186;
var G__37192 = count__37179_37187;
var G__37193 = (i__37180_37188 + (1));
seq__37177_37185 = G__37190;
chunk__37178_37186 = G__37191;
count__37179_37187 = G__37192;
i__37180_37188 = G__37193;
continue;
} else {
var temp__4657__auto___37194 = cljs.core.seq.call(null,seq__37177_37185);
if(temp__4657__auto___37194){
var seq__37177_37195__$1 = temp__4657__auto___37194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37177_37195__$1)){
var c__28034__auto___37196 = cljs.core.chunk_first.call(null,seq__37177_37195__$1);
var G__37197 = cljs.core.chunk_rest.call(null,seq__37177_37195__$1);
var G__37198 = c__28034__auto___37196;
var G__37199 = cljs.core.count.call(null,c__28034__auto___37196);
var G__37200 = (0);
seq__37177_37185 = G__37197;
chunk__37178_37186 = G__37198;
count__37179_37187 = G__37199;
i__37180_37188 = G__37200;
continue;
} else {
var req_37201 = cljs.core.first.call(null,seq__37177_37195__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37201,prov);

var G__37202 = cljs.core.next.call(null,seq__37177_37195__$1);
var G__37203 = null;
var G__37204 = (0);
var G__37205 = (0);
seq__37177_37185 = G__37202;
chunk__37178_37186 = G__37203;
count__37179_37187 = G__37204;
i__37180_37188 = G__37205;
continue;
}
} else {
}
}
break;
}

var G__37206 = seq__37173;
var G__37207 = chunk__37174;
var G__37208 = count__37175;
var G__37209 = (i__37176 + (1));
seq__37173 = G__37206;
chunk__37174 = G__37207;
count__37175 = G__37208;
i__37176 = G__37209;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37173);
if(temp__4657__auto__){
var seq__37173__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37173__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37173__$1);
var G__37210 = cljs.core.chunk_rest.call(null,seq__37173__$1);
var G__37211 = c__28034__auto__;
var G__37212 = cljs.core.count.call(null,c__28034__auto__);
var G__37213 = (0);
seq__37173 = G__37210;
chunk__37174 = G__37211;
count__37175 = G__37212;
i__37176 = G__37213;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37173__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37181_37214 = cljs.core.seq.call(null,requires);
var chunk__37182_37215 = null;
var count__37183_37216 = (0);
var i__37184_37217 = (0);
while(true){
if((i__37184_37217 < count__37183_37216)){
var req_37218 = cljs.core._nth.call(null,chunk__37182_37215,i__37184_37217);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37218,prov);

var G__37219 = seq__37181_37214;
var G__37220 = chunk__37182_37215;
var G__37221 = count__37183_37216;
var G__37222 = (i__37184_37217 + (1));
seq__37181_37214 = G__37219;
chunk__37182_37215 = G__37220;
count__37183_37216 = G__37221;
i__37184_37217 = G__37222;
continue;
} else {
var temp__4657__auto___37223__$1 = cljs.core.seq.call(null,seq__37181_37214);
if(temp__4657__auto___37223__$1){
var seq__37181_37224__$1 = temp__4657__auto___37223__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37181_37224__$1)){
var c__28034__auto___37225 = cljs.core.chunk_first.call(null,seq__37181_37224__$1);
var G__37226 = cljs.core.chunk_rest.call(null,seq__37181_37224__$1);
var G__37227 = c__28034__auto___37225;
var G__37228 = cljs.core.count.call(null,c__28034__auto___37225);
var G__37229 = (0);
seq__37181_37214 = G__37226;
chunk__37182_37215 = G__37227;
count__37183_37216 = G__37228;
i__37184_37217 = G__37229;
continue;
} else {
var req_37230 = cljs.core.first.call(null,seq__37181_37224__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37230,prov);

var G__37231 = cljs.core.next.call(null,seq__37181_37224__$1);
var G__37232 = null;
var G__37233 = (0);
var G__37234 = (0);
seq__37181_37214 = G__37231;
chunk__37182_37215 = G__37232;
count__37183_37216 = G__37233;
i__37184_37217 = G__37234;
continue;
}
} else {
}
}
break;
}

var G__37235 = cljs.core.next.call(null,seq__37173__$1);
var G__37236 = null;
var G__37237 = (0);
var G__37238 = (0);
seq__37173 = G__37235;
chunk__37174 = G__37236;
count__37175 = G__37237;
i__37176 = G__37238;
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
var seq__37239_37243 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37240_37244 = null;
var count__37241_37245 = (0);
var i__37242_37246 = (0);
while(true){
if((i__37242_37246 < count__37241_37245)){
var ns_37247 = cljs.core._nth.call(null,chunk__37240_37244,i__37242_37246);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37247);

var G__37248 = seq__37239_37243;
var G__37249 = chunk__37240_37244;
var G__37250 = count__37241_37245;
var G__37251 = (i__37242_37246 + (1));
seq__37239_37243 = G__37248;
chunk__37240_37244 = G__37249;
count__37241_37245 = G__37250;
i__37242_37246 = G__37251;
continue;
} else {
var temp__4657__auto___37252 = cljs.core.seq.call(null,seq__37239_37243);
if(temp__4657__auto___37252){
var seq__37239_37253__$1 = temp__4657__auto___37252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37239_37253__$1)){
var c__28034__auto___37254 = cljs.core.chunk_first.call(null,seq__37239_37253__$1);
var G__37255 = cljs.core.chunk_rest.call(null,seq__37239_37253__$1);
var G__37256 = c__28034__auto___37254;
var G__37257 = cljs.core.count.call(null,c__28034__auto___37254);
var G__37258 = (0);
seq__37239_37243 = G__37255;
chunk__37240_37244 = G__37256;
count__37241_37245 = G__37257;
i__37242_37246 = G__37258;
continue;
} else {
var ns_37259 = cljs.core.first.call(null,seq__37239_37253__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37259);

var G__37260 = cljs.core.next.call(null,seq__37239_37253__$1);
var G__37261 = null;
var G__37262 = (0);
var G__37263 = (0);
seq__37239_37243 = G__37260;
chunk__37240_37244 = G__37261;
count__37241_37245 = G__37262;
i__37242_37246 = G__37263;
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
var G__37264__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37265__i = 0, G__37265__a = new Array(arguments.length -  0);
while (G__37265__i < G__37265__a.length) {G__37265__a[G__37265__i] = arguments[G__37265__i + 0]; ++G__37265__i;}
  args = new cljs.core.IndexedSeq(G__37265__a,0,null);
} 
return G__37264__delegate.call(this,args);};
G__37264.cljs$lang$maxFixedArity = 0;
G__37264.cljs$lang$applyTo = (function (arglist__37266){
var args = cljs.core.seq(arglist__37266);
return G__37264__delegate(args);
});
G__37264.cljs$core$IFn$_invoke$arity$variadic = G__37264__delegate;
return G__37264;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37267_SHARP_,p2__37268_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37267_SHARP_)].join('')),p2__37268_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37269_SHARP_,p2__37270_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37269_SHARP_)].join(''),p2__37270_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37271 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37271.addCallback(((function (G__37271){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37271))
);

G__37271.addErrback(((function (G__37271){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37271))
);

return G__37271;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37272 = cljs.core._EQ_;
var expr__37273 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37272.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37273))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37272,expr__37273){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37272,expr__37273))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37272,expr__37273){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37275){if((e37275 instanceof Error)){
var e = e37275;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37275;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37272,expr__37273))
} else {
if(cljs.core.truth_(pred__37272.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37273))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37272.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37273))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37272.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37273))){
return ((function (pred__37272,expr__37273){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37276){if((e37276 instanceof Error)){
var e = e37276;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37276;

}
}})());
});
;})(pred__37272,expr__37273))
} else {
return ((function (pred__37272,expr__37273){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37272,expr__37273))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37277,callback){
var map__37278 = p__37277;
var map__37278__$1 = ((((!((map__37278 == null)))?((((map__37278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37278):map__37278);
var file_msg = map__37278__$1;
var request_url = cljs.core.get.call(null,map__37278__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37278,map__37278__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37278,map__37278__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__31946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto__){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto__){
return (function (state_37302){
var state_val_37303 = (state_37302[(1)]);
if((state_val_37303 === (7))){
var inst_37298 = (state_37302[(2)]);
var state_37302__$1 = state_37302;
var statearr_37304_37321 = state_37302__$1;
(statearr_37304_37321[(2)] = inst_37298);

(statearr_37304_37321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37303 === (1))){
var state_37302__$1 = state_37302;
var statearr_37305_37322 = state_37302__$1;
(statearr_37305_37322[(2)] = null);

(statearr_37305_37322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37303 === (4))){
var inst_37282 = (state_37302[(7)]);
var inst_37282__$1 = (state_37302[(2)]);
var state_37302__$1 = (function (){var statearr_37306 = state_37302;
(statearr_37306[(7)] = inst_37282__$1);

return statearr_37306;
})();
if(cljs.core.truth_(inst_37282__$1)){
var statearr_37307_37323 = state_37302__$1;
(statearr_37307_37323[(1)] = (5));

} else {
var statearr_37308_37324 = state_37302__$1;
(statearr_37308_37324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37303 === (6))){
var state_37302__$1 = state_37302;
var statearr_37309_37325 = state_37302__$1;
(statearr_37309_37325[(2)] = null);

(statearr_37309_37325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37303 === (3))){
var inst_37300 = (state_37302[(2)]);
var state_37302__$1 = state_37302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37302__$1,inst_37300);
} else {
if((state_val_37303 === (2))){
var state_37302__$1 = state_37302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37302__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37303 === (11))){
var inst_37294 = (state_37302[(2)]);
var state_37302__$1 = (function (){var statearr_37310 = state_37302;
(statearr_37310[(8)] = inst_37294);

return statearr_37310;
})();
var statearr_37311_37326 = state_37302__$1;
(statearr_37311_37326[(2)] = null);

(statearr_37311_37326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37303 === (9))){
var inst_37288 = (state_37302[(9)]);
var inst_37286 = (state_37302[(10)]);
var inst_37290 = inst_37288.call(null,inst_37286);
var state_37302__$1 = state_37302;
var statearr_37312_37327 = state_37302__$1;
(statearr_37312_37327[(2)] = inst_37290);

(statearr_37312_37327[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37303 === (5))){
var inst_37282 = (state_37302[(7)]);
var inst_37284 = figwheel.client.file_reloading.blocking_load.call(null,inst_37282);
var state_37302__$1 = state_37302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37302__$1,(8),inst_37284);
} else {
if((state_val_37303 === (10))){
var inst_37286 = (state_37302[(10)]);
var inst_37292 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37286);
var state_37302__$1 = state_37302;
var statearr_37313_37328 = state_37302__$1;
(statearr_37313_37328[(2)] = inst_37292);

(statearr_37313_37328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37303 === (8))){
var inst_37288 = (state_37302[(9)]);
var inst_37282 = (state_37302[(7)]);
var inst_37286 = (state_37302[(2)]);
var inst_37287 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37288__$1 = cljs.core.get.call(null,inst_37287,inst_37282);
var state_37302__$1 = (function (){var statearr_37314 = state_37302;
(statearr_37314[(9)] = inst_37288__$1);

(statearr_37314[(10)] = inst_37286);

return statearr_37314;
})();
if(cljs.core.truth_(inst_37288__$1)){
var statearr_37315_37329 = state_37302__$1;
(statearr_37315_37329[(1)] = (9));

} else {
var statearr_37316_37330 = state_37302__$1;
(statearr_37316_37330[(1)] = (10));

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
});})(c__31946__auto__))
;
return ((function (switch__31858__auto__,c__31946__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31859__auto__ = null;
var figwheel$client$file_reloading$state_machine__31859__auto____0 = (function (){
var statearr_37317 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37317[(0)] = figwheel$client$file_reloading$state_machine__31859__auto__);

(statearr_37317[(1)] = (1));

return statearr_37317;
});
var figwheel$client$file_reloading$state_machine__31859__auto____1 = (function (state_37302){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_37302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e37318){if((e37318 instanceof Object)){
var ex__31862__auto__ = e37318;
var statearr_37319_37331 = state_37302;
(statearr_37319_37331[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37332 = state_37302;
state_37302 = G__37332;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31859__auto__ = function(state_37302){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31859__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31859__auto____1.call(this,state_37302);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31859__auto____0;
figwheel$client$file_reloading$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31859__auto____1;
return figwheel$client$file_reloading$state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto__))
})();
var state__31948__auto__ = (function (){var statearr_37320 = f__31947__auto__.call(null);
(statearr_37320[(6)] = c__31946__auto__);

return statearr_37320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto__))
);

return c__31946__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37333,callback){
var map__37334 = p__37333;
var map__37334__$1 = ((((!((map__37334 == null)))?((((map__37334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37334):map__37334);
var file_msg = map__37334__$1;
var namespace = cljs.core.get.call(null,map__37334__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37334,map__37334__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37334,map__37334__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37336){
var map__37337 = p__37336;
var map__37337__$1 = ((((!((map__37337 == null)))?((((map__37337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37337):map__37337);
var file_msg = map__37337__$1;
var namespace = cljs.core.get.call(null,map__37337__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37339){
var map__37340 = p__37339;
var map__37340__$1 = ((((!((map__37340 == null)))?((((map__37340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37340):map__37340);
var file_msg = map__37340__$1;
var namespace = cljs.core.get.call(null,map__37340__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37342,callback){
var map__37343 = p__37342;
var map__37343__$1 = ((((!((map__37343 == null)))?((((map__37343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37343):map__37343);
var file_msg = map__37343__$1;
var request_url = cljs.core.get.call(null,map__37343__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37343__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__31946__auto___37393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___37393,out){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___37393,out){
return (function (state_37378){
var state_val_37379 = (state_37378[(1)]);
if((state_val_37379 === (1))){
var inst_37352 = cljs.core.seq.call(null,files);
var inst_37353 = cljs.core.first.call(null,inst_37352);
var inst_37354 = cljs.core.next.call(null,inst_37352);
var inst_37355 = files;
var state_37378__$1 = (function (){var statearr_37380 = state_37378;
(statearr_37380[(7)] = inst_37355);

(statearr_37380[(8)] = inst_37354);

(statearr_37380[(9)] = inst_37353);

return statearr_37380;
})();
var statearr_37381_37394 = state_37378__$1;
(statearr_37381_37394[(2)] = null);

(statearr_37381_37394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (2))){
var inst_37355 = (state_37378[(7)]);
var inst_37361 = (state_37378[(10)]);
var inst_37360 = cljs.core.seq.call(null,inst_37355);
var inst_37361__$1 = cljs.core.first.call(null,inst_37360);
var inst_37362 = cljs.core.next.call(null,inst_37360);
var inst_37363 = (inst_37361__$1 == null);
var inst_37364 = cljs.core.not.call(null,inst_37363);
var state_37378__$1 = (function (){var statearr_37382 = state_37378;
(statearr_37382[(11)] = inst_37362);

(statearr_37382[(10)] = inst_37361__$1);

return statearr_37382;
})();
if(inst_37364){
var statearr_37383_37395 = state_37378__$1;
(statearr_37383_37395[(1)] = (4));

} else {
var statearr_37384_37396 = state_37378__$1;
(statearr_37384_37396[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (3))){
var inst_37376 = (state_37378[(2)]);
var state_37378__$1 = state_37378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37378__$1,inst_37376);
} else {
if((state_val_37379 === (4))){
var inst_37361 = (state_37378[(10)]);
var inst_37366 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37361);
var state_37378__$1 = state_37378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37378__$1,(7),inst_37366);
} else {
if((state_val_37379 === (5))){
var inst_37372 = cljs.core.async.close_BANG_.call(null,out);
var state_37378__$1 = state_37378;
var statearr_37385_37397 = state_37378__$1;
(statearr_37385_37397[(2)] = inst_37372);

(statearr_37385_37397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (6))){
var inst_37374 = (state_37378[(2)]);
var state_37378__$1 = state_37378;
var statearr_37386_37398 = state_37378__$1;
(statearr_37386_37398[(2)] = inst_37374);

(statearr_37386_37398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37379 === (7))){
var inst_37362 = (state_37378[(11)]);
var inst_37368 = (state_37378[(2)]);
var inst_37369 = cljs.core.async.put_BANG_.call(null,out,inst_37368);
var inst_37355 = inst_37362;
var state_37378__$1 = (function (){var statearr_37387 = state_37378;
(statearr_37387[(7)] = inst_37355);

(statearr_37387[(12)] = inst_37369);

return statearr_37387;
})();
var statearr_37388_37399 = state_37378__$1;
(statearr_37388_37399[(2)] = null);

(statearr_37388_37399[(1)] = (2));


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
});})(c__31946__auto___37393,out))
;
return ((function (switch__31858__auto__,c__31946__auto___37393,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31859__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31859__auto____0 = (function (){
var statearr_37389 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37389[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31859__auto__);

(statearr_37389[(1)] = (1));

return statearr_37389;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31859__auto____1 = (function (state_37378){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_37378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e37390){if((e37390 instanceof Object)){
var ex__31862__auto__ = e37390;
var statearr_37391_37400 = state_37378;
(statearr_37391_37400[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37401 = state_37378;
state_37378 = G__37401;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31859__auto__ = function(state_37378){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31859__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31859__auto____1.call(this,state_37378);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31859__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31859__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___37393,out))
})();
var state__31948__auto__ = (function (){var statearr_37392 = f__31947__auto__.call(null);
(statearr_37392[(6)] = c__31946__auto___37393);

return statearr_37392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___37393,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37402,opts){
var map__37403 = p__37402;
var map__37403__$1 = ((((!((map__37403 == null)))?((((map__37403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37403):map__37403);
var eval_body = cljs.core.get.call(null,map__37403__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37403__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37405){var e = e37405;
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
return (function (p1__37406_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37406_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37407){
var vec__37408 = p__37407;
var k = cljs.core.nth.call(null,vec__37408,(0),null);
var v = cljs.core.nth.call(null,vec__37408,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37411){
var vec__37412 = p__37411;
var k = cljs.core.nth.call(null,vec__37412,(0),null);
var v = cljs.core.nth.call(null,vec__37412,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37418,p__37419){
var map__37420 = p__37418;
var map__37420__$1 = ((((!((map__37420 == null)))?((((map__37420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37420):map__37420);
var opts = map__37420__$1;
var before_jsload = cljs.core.get.call(null,map__37420__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37420__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37420__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37421 = p__37419;
var map__37421__$1 = ((((!((map__37421 == null)))?((((map__37421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37421):map__37421);
var msg = map__37421__$1;
var files = cljs.core.get.call(null,map__37421__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37421__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37421__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37575){
var state_val_37576 = (state_37575[(1)]);
if((state_val_37576 === (7))){
var inst_37437 = (state_37575[(7)]);
var inst_37436 = (state_37575[(8)]);
var inst_37438 = (state_37575[(9)]);
var inst_37435 = (state_37575[(10)]);
var inst_37443 = cljs.core._nth.call(null,inst_37436,inst_37438);
var inst_37444 = figwheel.client.file_reloading.eval_body.call(null,inst_37443,opts);
var inst_37445 = (inst_37438 + (1));
var tmp37577 = inst_37437;
var tmp37578 = inst_37436;
var tmp37579 = inst_37435;
var inst_37435__$1 = tmp37579;
var inst_37436__$1 = tmp37578;
var inst_37437__$1 = tmp37577;
var inst_37438__$1 = inst_37445;
var state_37575__$1 = (function (){var statearr_37580 = state_37575;
(statearr_37580[(7)] = inst_37437__$1);

(statearr_37580[(8)] = inst_37436__$1);

(statearr_37580[(9)] = inst_37438__$1);

(statearr_37580[(11)] = inst_37444);

(statearr_37580[(10)] = inst_37435__$1);

return statearr_37580;
})();
var statearr_37581_37664 = state_37575__$1;
(statearr_37581_37664[(2)] = null);

(statearr_37581_37664[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (20))){
var inst_37478 = (state_37575[(12)]);
var inst_37486 = figwheel.client.file_reloading.sort_files.call(null,inst_37478);
var state_37575__$1 = state_37575;
var statearr_37582_37665 = state_37575__$1;
(statearr_37582_37665[(2)] = inst_37486);

(statearr_37582_37665[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (27))){
var state_37575__$1 = state_37575;
var statearr_37583_37666 = state_37575__$1;
(statearr_37583_37666[(2)] = null);

(statearr_37583_37666[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (1))){
var inst_37427 = (state_37575[(13)]);
var inst_37424 = before_jsload.call(null,files);
var inst_37425 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37426 = (function (){return ((function (inst_37427,inst_37424,inst_37425,state_val_37576,c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37415_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37415_SHARP_);
});
;})(inst_37427,inst_37424,inst_37425,state_val_37576,c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37427__$1 = cljs.core.filter.call(null,inst_37426,files);
var inst_37428 = cljs.core.not_empty.call(null,inst_37427__$1);
var state_37575__$1 = (function (){var statearr_37584 = state_37575;
(statearr_37584[(13)] = inst_37427__$1);

(statearr_37584[(14)] = inst_37424);

(statearr_37584[(15)] = inst_37425);

return statearr_37584;
})();
if(cljs.core.truth_(inst_37428)){
var statearr_37585_37667 = state_37575__$1;
(statearr_37585_37667[(1)] = (2));

} else {
var statearr_37586_37668 = state_37575__$1;
(statearr_37586_37668[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (24))){
var state_37575__$1 = state_37575;
var statearr_37587_37669 = state_37575__$1;
(statearr_37587_37669[(2)] = null);

(statearr_37587_37669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (39))){
var inst_37528 = (state_37575[(16)]);
var state_37575__$1 = state_37575;
var statearr_37588_37670 = state_37575__$1;
(statearr_37588_37670[(2)] = inst_37528);

(statearr_37588_37670[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (46))){
var inst_37570 = (state_37575[(2)]);
var state_37575__$1 = state_37575;
var statearr_37589_37671 = state_37575__$1;
(statearr_37589_37671[(2)] = inst_37570);

(statearr_37589_37671[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (4))){
var inst_37472 = (state_37575[(2)]);
var inst_37473 = cljs.core.List.EMPTY;
var inst_37474 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37473);
var inst_37475 = (function (){return ((function (inst_37472,inst_37473,inst_37474,state_val_37576,c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37416_SHARP_){
var and__27183__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37416_SHARP_);
if(cljs.core.truth_(and__27183__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37416_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37416_SHARP_)));
} else {
return and__27183__auto__;
}
});
;})(inst_37472,inst_37473,inst_37474,state_val_37576,c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37476 = cljs.core.filter.call(null,inst_37475,files);
var inst_37477 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37478 = cljs.core.concat.call(null,inst_37476,inst_37477);
var state_37575__$1 = (function (){var statearr_37590 = state_37575;
(statearr_37590[(17)] = inst_37474);

(statearr_37590[(18)] = inst_37472);

(statearr_37590[(12)] = inst_37478);

return statearr_37590;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37591_37672 = state_37575__$1;
(statearr_37591_37672[(1)] = (16));

} else {
var statearr_37592_37673 = state_37575__$1;
(statearr_37592_37673[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (15))){
var inst_37462 = (state_37575[(2)]);
var state_37575__$1 = state_37575;
var statearr_37593_37674 = state_37575__$1;
(statearr_37593_37674[(2)] = inst_37462);

(statearr_37593_37674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (21))){
var inst_37488 = (state_37575[(19)]);
var inst_37488__$1 = (state_37575[(2)]);
var inst_37489 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37488__$1);
var state_37575__$1 = (function (){var statearr_37594 = state_37575;
(statearr_37594[(19)] = inst_37488__$1);

return statearr_37594;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37575__$1,(22),inst_37489);
} else {
if((state_val_37576 === (31))){
var inst_37573 = (state_37575[(2)]);
var state_37575__$1 = state_37575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37575__$1,inst_37573);
} else {
if((state_val_37576 === (32))){
var inst_37528 = (state_37575[(16)]);
var inst_37533 = inst_37528.cljs$lang$protocol_mask$partition0$;
var inst_37534 = (inst_37533 & (64));
var inst_37535 = inst_37528.cljs$core$ISeq$;
var inst_37536 = (cljs.core.PROTOCOL_SENTINEL === inst_37535);
var inst_37537 = (inst_37534) || (inst_37536);
var state_37575__$1 = state_37575;
if(cljs.core.truth_(inst_37537)){
var statearr_37595_37675 = state_37575__$1;
(statearr_37595_37675[(1)] = (35));

} else {
var statearr_37596_37676 = state_37575__$1;
(statearr_37596_37676[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (40))){
var inst_37550 = (state_37575[(20)]);
var inst_37549 = (state_37575[(2)]);
var inst_37550__$1 = cljs.core.get.call(null,inst_37549,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37551 = cljs.core.get.call(null,inst_37549,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37552 = cljs.core.not_empty.call(null,inst_37550__$1);
var state_37575__$1 = (function (){var statearr_37597 = state_37575;
(statearr_37597[(21)] = inst_37551);

(statearr_37597[(20)] = inst_37550__$1);

return statearr_37597;
})();
if(cljs.core.truth_(inst_37552)){
var statearr_37598_37677 = state_37575__$1;
(statearr_37598_37677[(1)] = (41));

} else {
var statearr_37599_37678 = state_37575__$1;
(statearr_37599_37678[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (33))){
var state_37575__$1 = state_37575;
var statearr_37600_37679 = state_37575__$1;
(statearr_37600_37679[(2)] = false);

(statearr_37600_37679[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (13))){
var inst_37448 = (state_37575[(22)]);
var inst_37452 = cljs.core.chunk_first.call(null,inst_37448);
var inst_37453 = cljs.core.chunk_rest.call(null,inst_37448);
var inst_37454 = cljs.core.count.call(null,inst_37452);
var inst_37435 = inst_37453;
var inst_37436 = inst_37452;
var inst_37437 = inst_37454;
var inst_37438 = (0);
var state_37575__$1 = (function (){var statearr_37601 = state_37575;
(statearr_37601[(7)] = inst_37437);

(statearr_37601[(8)] = inst_37436);

(statearr_37601[(9)] = inst_37438);

(statearr_37601[(10)] = inst_37435);

return statearr_37601;
})();
var statearr_37602_37680 = state_37575__$1;
(statearr_37602_37680[(2)] = null);

(statearr_37602_37680[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (22))){
var inst_37488 = (state_37575[(19)]);
var inst_37496 = (state_37575[(23)]);
var inst_37492 = (state_37575[(24)]);
var inst_37491 = (state_37575[(25)]);
var inst_37491__$1 = (state_37575[(2)]);
var inst_37492__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37491__$1);
var inst_37493 = (function (){var all_files = inst_37488;
var res_SINGLEQUOTE_ = inst_37491__$1;
var res = inst_37492__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37488,inst_37496,inst_37492,inst_37491,inst_37491__$1,inst_37492__$1,state_val_37576,c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37417_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37417_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37488,inst_37496,inst_37492,inst_37491,inst_37491__$1,inst_37492__$1,state_val_37576,c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37494 = cljs.core.filter.call(null,inst_37493,inst_37491__$1);
var inst_37495 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37496__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37495);
var inst_37497 = cljs.core.not_empty.call(null,inst_37496__$1);
var state_37575__$1 = (function (){var statearr_37603 = state_37575;
(statearr_37603[(23)] = inst_37496__$1);

(statearr_37603[(24)] = inst_37492__$1);

(statearr_37603[(25)] = inst_37491__$1);

(statearr_37603[(26)] = inst_37494);

return statearr_37603;
})();
if(cljs.core.truth_(inst_37497)){
var statearr_37604_37681 = state_37575__$1;
(statearr_37604_37681[(1)] = (23));

} else {
var statearr_37605_37682 = state_37575__$1;
(statearr_37605_37682[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (36))){
var state_37575__$1 = state_37575;
var statearr_37606_37683 = state_37575__$1;
(statearr_37606_37683[(2)] = false);

(statearr_37606_37683[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (41))){
var inst_37550 = (state_37575[(20)]);
var inst_37554 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37555 = cljs.core.map.call(null,inst_37554,inst_37550);
var inst_37556 = cljs.core.pr_str.call(null,inst_37555);
var inst_37557 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37556)].join('');
var inst_37558 = figwheel.client.utils.log.call(null,inst_37557);
var state_37575__$1 = state_37575;
var statearr_37607_37684 = state_37575__$1;
(statearr_37607_37684[(2)] = inst_37558);

(statearr_37607_37684[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (43))){
var inst_37551 = (state_37575[(21)]);
var inst_37561 = (state_37575[(2)]);
var inst_37562 = cljs.core.not_empty.call(null,inst_37551);
var state_37575__$1 = (function (){var statearr_37608 = state_37575;
(statearr_37608[(27)] = inst_37561);

return statearr_37608;
})();
if(cljs.core.truth_(inst_37562)){
var statearr_37609_37685 = state_37575__$1;
(statearr_37609_37685[(1)] = (44));

} else {
var statearr_37610_37686 = state_37575__$1;
(statearr_37610_37686[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (29))){
var inst_37488 = (state_37575[(19)]);
var inst_37496 = (state_37575[(23)]);
var inst_37492 = (state_37575[(24)]);
var inst_37528 = (state_37575[(16)]);
var inst_37491 = (state_37575[(25)]);
var inst_37494 = (state_37575[(26)]);
var inst_37524 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37527 = (function (){var all_files = inst_37488;
var res_SINGLEQUOTE_ = inst_37491;
var res = inst_37492;
var files_not_loaded = inst_37494;
var dependencies_that_loaded = inst_37496;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37488,inst_37496,inst_37492,inst_37528,inst_37491,inst_37494,inst_37524,state_val_37576,c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37526){
var map__37611 = p__37526;
var map__37611__$1 = ((((!((map__37611 == null)))?((((map__37611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37611):map__37611);
var namespace = cljs.core.get.call(null,map__37611__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37488,inst_37496,inst_37492,inst_37528,inst_37491,inst_37494,inst_37524,state_val_37576,c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37528__$1 = cljs.core.group_by.call(null,inst_37527,inst_37494);
var inst_37530 = (inst_37528__$1 == null);
var inst_37531 = cljs.core.not.call(null,inst_37530);
var state_37575__$1 = (function (){var statearr_37613 = state_37575;
(statearr_37613[(28)] = inst_37524);

(statearr_37613[(16)] = inst_37528__$1);

return statearr_37613;
})();
if(inst_37531){
var statearr_37614_37687 = state_37575__$1;
(statearr_37614_37687[(1)] = (32));

} else {
var statearr_37615_37688 = state_37575__$1;
(statearr_37615_37688[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (44))){
var inst_37551 = (state_37575[(21)]);
var inst_37564 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37551);
var inst_37565 = cljs.core.pr_str.call(null,inst_37564);
var inst_37566 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37565)].join('');
var inst_37567 = figwheel.client.utils.log.call(null,inst_37566);
var state_37575__$1 = state_37575;
var statearr_37616_37689 = state_37575__$1;
(statearr_37616_37689[(2)] = inst_37567);

(statearr_37616_37689[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (6))){
var inst_37469 = (state_37575[(2)]);
var state_37575__$1 = state_37575;
var statearr_37617_37690 = state_37575__$1;
(statearr_37617_37690[(2)] = inst_37469);

(statearr_37617_37690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (28))){
var inst_37494 = (state_37575[(26)]);
var inst_37521 = (state_37575[(2)]);
var inst_37522 = cljs.core.not_empty.call(null,inst_37494);
var state_37575__$1 = (function (){var statearr_37618 = state_37575;
(statearr_37618[(29)] = inst_37521);

return statearr_37618;
})();
if(cljs.core.truth_(inst_37522)){
var statearr_37619_37691 = state_37575__$1;
(statearr_37619_37691[(1)] = (29));

} else {
var statearr_37620_37692 = state_37575__$1;
(statearr_37620_37692[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (25))){
var inst_37492 = (state_37575[(24)]);
var inst_37508 = (state_37575[(2)]);
var inst_37509 = cljs.core.not_empty.call(null,inst_37492);
var state_37575__$1 = (function (){var statearr_37621 = state_37575;
(statearr_37621[(30)] = inst_37508);

return statearr_37621;
})();
if(cljs.core.truth_(inst_37509)){
var statearr_37622_37693 = state_37575__$1;
(statearr_37622_37693[(1)] = (26));

} else {
var statearr_37623_37694 = state_37575__$1;
(statearr_37623_37694[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (34))){
var inst_37544 = (state_37575[(2)]);
var state_37575__$1 = state_37575;
if(cljs.core.truth_(inst_37544)){
var statearr_37624_37695 = state_37575__$1;
(statearr_37624_37695[(1)] = (38));

} else {
var statearr_37625_37696 = state_37575__$1;
(statearr_37625_37696[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (17))){
var state_37575__$1 = state_37575;
var statearr_37626_37697 = state_37575__$1;
(statearr_37626_37697[(2)] = recompile_dependents);

(statearr_37626_37697[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (3))){
var state_37575__$1 = state_37575;
var statearr_37627_37698 = state_37575__$1;
(statearr_37627_37698[(2)] = null);

(statearr_37627_37698[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (12))){
var inst_37465 = (state_37575[(2)]);
var state_37575__$1 = state_37575;
var statearr_37628_37699 = state_37575__$1;
(statearr_37628_37699[(2)] = inst_37465);

(statearr_37628_37699[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (2))){
var inst_37427 = (state_37575[(13)]);
var inst_37434 = cljs.core.seq.call(null,inst_37427);
var inst_37435 = inst_37434;
var inst_37436 = null;
var inst_37437 = (0);
var inst_37438 = (0);
var state_37575__$1 = (function (){var statearr_37629 = state_37575;
(statearr_37629[(7)] = inst_37437);

(statearr_37629[(8)] = inst_37436);

(statearr_37629[(9)] = inst_37438);

(statearr_37629[(10)] = inst_37435);

return statearr_37629;
})();
var statearr_37630_37700 = state_37575__$1;
(statearr_37630_37700[(2)] = null);

(statearr_37630_37700[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (23))){
var inst_37488 = (state_37575[(19)]);
var inst_37496 = (state_37575[(23)]);
var inst_37492 = (state_37575[(24)]);
var inst_37491 = (state_37575[(25)]);
var inst_37494 = (state_37575[(26)]);
var inst_37499 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37501 = (function (){var all_files = inst_37488;
var res_SINGLEQUOTE_ = inst_37491;
var res = inst_37492;
var files_not_loaded = inst_37494;
var dependencies_that_loaded = inst_37496;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37488,inst_37496,inst_37492,inst_37491,inst_37494,inst_37499,state_val_37576,c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37500){
var map__37631 = p__37500;
var map__37631__$1 = ((((!((map__37631 == null)))?((((map__37631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37631.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37631):map__37631);
var request_url = cljs.core.get.call(null,map__37631__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37488,inst_37496,inst_37492,inst_37491,inst_37494,inst_37499,state_val_37576,c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37502 = cljs.core.reverse.call(null,inst_37496);
var inst_37503 = cljs.core.map.call(null,inst_37501,inst_37502);
var inst_37504 = cljs.core.pr_str.call(null,inst_37503);
var inst_37505 = figwheel.client.utils.log.call(null,inst_37504);
var state_37575__$1 = (function (){var statearr_37633 = state_37575;
(statearr_37633[(31)] = inst_37499);

return statearr_37633;
})();
var statearr_37634_37701 = state_37575__$1;
(statearr_37634_37701[(2)] = inst_37505);

(statearr_37634_37701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (35))){
var state_37575__$1 = state_37575;
var statearr_37635_37702 = state_37575__$1;
(statearr_37635_37702[(2)] = true);

(statearr_37635_37702[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (19))){
var inst_37478 = (state_37575[(12)]);
var inst_37484 = figwheel.client.file_reloading.expand_files.call(null,inst_37478);
var state_37575__$1 = state_37575;
var statearr_37636_37703 = state_37575__$1;
(statearr_37636_37703[(2)] = inst_37484);

(statearr_37636_37703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (11))){
var state_37575__$1 = state_37575;
var statearr_37637_37704 = state_37575__$1;
(statearr_37637_37704[(2)] = null);

(statearr_37637_37704[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (9))){
var inst_37467 = (state_37575[(2)]);
var state_37575__$1 = state_37575;
var statearr_37638_37705 = state_37575__$1;
(statearr_37638_37705[(2)] = inst_37467);

(statearr_37638_37705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (5))){
var inst_37437 = (state_37575[(7)]);
var inst_37438 = (state_37575[(9)]);
var inst_37440 = (inst_37438 < inst_37437);
var inst_37441 = inst_37440;
var state_37575__$1 = state_37575;
if(cljs.core.truth_(inst_37441)){
var statearr_37639_37706 = state_37575__$1;
(statearr_37639_37706[(1)] = (7));

} else {
var statearr_37640_37707 = state_37575__$1;
(statearr_37640_37707[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (14))){
var inst_37448 = (state_37575[(22)]);
var inst_37457 = cljs.core.first.call(null,inst_37448);
var inst_37458 = figwheel.client.file_reloading.eval_body.call(null,inst_37457,opts);
var inst_37459 = cljs.core.next.call(null,inst_37448);
var inst_37435 = inst_37459;
var inst_37436 = null;
var inst_37437 = (0);
var inst_37438 = (0);
var state_37575__$1 = (function (){var statearr_37641 = state_37575;
(statearr_37641[(7)] = inst_37437);

(statearr_37641[(8)] = inst_37436);

(statearr_37641[(9)] = inst_37438);

(statearr_37641[(32)] = inst_37458);

(statearr_37641[(10)] = inst_37435);

return statearr_37641;
})();
var statearr_37642_37708 = state_37575__$1;
(statearr_37642_37708[(2)] = null);

(statearr_37642_37708[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (45))){
var state_37575__$1 = state_37575;
var statearr_37643_37709 = state_37575__$1;
(statearr_37643_37709[(2)] = null);

(statearr_37643_37709[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (26))){
var inst_37488 = (state_37575[(19)]);
var inst_37496 = (state_37575[(23)]);
var inst_37492 = (state_37575[(24)]);
var inst_37491 = (state_37575[(25)]);
var inst_37494 = (state_37575[(26)]);
var inst_37511 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37513 = (function (){var all_files = inst_37488;
var res_SINGLEQUOTE_ = inst_37491;
var res = inst_37492;
var files_not_loaded = inst_37494;
var dependencies_that_loaded = inst_37496;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37488,inst_37496,inst_37492,inst_37491,inst_37494,inst_37511,state_val_37576,c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37512){
var map__37644 = p__37512;
var map__37644__$1 = ((((!((map__37644 == null)))?((((map__37644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37644):map__37644);
var namespace = cljs.core.get.call(null,map__37644__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37644__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37488,inst_37496,inst_37492,inst_37491,inst_37494,inst_37511,state_val_37576,c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37514 = cljs.core.map.call(null,inst_37513,inst_37492);
var inst_37515 = cljs.core.pr_str.call(null,inst_37514);
var inst_37516 = figwheel.client.utils.log.call(null,inst_37515);
var inst_37517 = (function (){var all_files = inst_37488;
var res_SINGLEQUOTE_ = inst_37491;
var res = inst_37492;
var files_not_loaded = inst_37494;
var dependencies_that_loaded = inst_37496;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37488,inst_37496,inst_37492,inst_37491,inst_37494,inst_37511,inst_37513,inst_37514,inst_37515,inst_37516,state_val_37576,c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37488,inst_37496,inst_37492,inst_37491,inst_37494,inst_37511,inst_37513,inst_37514,inst_37515,inst_37516,state_val_37576,c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37518 = setTimeout(inst_37517,(10));
var state_37575__$1 = (function (){var statearr_37646 = state_37575;
(statearr_37646[(33)] = inst_37516);

(statearr_37646[(34)] = inst_37511);

return statearr_37646;
})();
var statearr_37647_37710 = state_37575__$1;
(statearr_37647_37710[(2)] = inst_37518);

(statearr_37647_37710[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (16))){
var state_37575__$1 = state_37575;
var statearr_37648_37711 = state_37575__$1;
(statearr_37648_37711[(2)] = reload_dependents);

(statearr_37648_37711[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (38))){
var inst_37528 = (state_37575[(16)]);
var inst_37546 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37528);
var state_37575__$1 = state_37575;
var statearr_37649_37712 = state_37575__$1;
(statearr_37649_37712[(2)] = inst_37546);

(statearr_37649_37712[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (30))){
var state_37575__$1 = state_37575;
var statearr_37650_37713 = state_37575__$1;
(statearr_37650_37713[(2)] = null);

(statearr_37650_37713[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (10))){
var inst_37448 = (state_37575[(22)]);
var inst_37450 = cljs.core.chunked_seq_QMARK_.call(null,inst_37448);
var state_37575__$1 = state_37575;
if(inst_37450){
var statearr_37651_37714 = state_37575__$1;
(statearr_37651_37714[(1)] = (13));

} else {
var statearr_37652_37715 = state_37575__$1;
(statearr_37652_37715[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (18))){
var inst_37482 = (state_37575[(2)]);
var state_37575__$1 = state_37575;
if(cljs.core.truth_(inst_37482)){
var statearr_37653_37716 = state_37575__$1;
(statearr_37653_37716[(1)] = (19));

} else {
var statearr_37654_37717 = state_37575__$1;
(statearr_37654_37717[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (42))){
var state_37575__$1 = state_37575;
var statearr_37655_37718 = state_37575__$1;
(statearr_37655_37718[(2)] = null);

(statearr_37655_37718[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (37))){
var inst_37541 = (state_37575[(2)]);
var state_37575__$1 = state_37575;
var statearr_37656_37719 = state_37575__$1;
(statearr_37656_37719[(2)] = inst_37541);

(statearr_37656_37719[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (8))){
var inst_37448 = (state_37575[(22)]);
var inst_37435 = (state_37575[(10)]);
var inst_37448__$1 = cljs.core.seq.call(null,inst_37435);
var state_37575__$1 = (function (){var statearr_37657 = state_37575;
(statearr_37657[(22)] = inst_37448__$1);

return statearr_37657;
})();
if(inst_37448__$1){
var statearr_37658_37720 = state_37575__$1;
(statearr_37658_37720[(1)] = (10));

} else {
var statearr_37659_37721 = state_37575__$1;
(statearr_37659_37721[(1)] = (11));

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
});})(c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31858__auto__,c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31859__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31859__auto____0 = (function (){
var statearr_37660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37660[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31859__auto__);

(statearr_37660[(1)] = (1));

return statearr_37660;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31859__auto____1 = (function (state_37575){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_37575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e37661){if((e37661 instanceof Object)){
var ex__31862__auto__ = e37661;
var statearr_37662_37722 = state_37575;
(statearr_37662_37722[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37723 = state_37575;
state_37575 = G__37723;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31859__auto__ = function(state_37575){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31859__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31859__auto____1.call(this,state_37575);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31859__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31859__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31948__auto__ = (function (){var statearr_37663 = f__31947__auto__.call(null);
(statearr_37663[(6)] = c__31946__auto__);

return statearr_37663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto__,map__37420,map__37420__$1,opts,before_jsload,on_jsload,reload_dependents,map__37421,map__37421__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31946__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37726,link){
var map__37727 = p__37726;
var map__37727__$1 = ((((!((map__37727 == null)))?((((map__37727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37727):map__37727);
var file = cljs.core.get.call(null,map__37727__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37727,map__37727__$1,file){
return (function (p1__37724_SHARP_,p2__37725_SHARP_){
if(cljs.core._EQ_.call(null,p1__37724_SHARP_,p2__37725_SHARP_)){
return p1__37724_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37727,map__37727__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37730){
var map__37731 = p__37730;
var map__37731__$1 = ((((!((map__37731 == null)))?((((map__37731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37731):map__37731);
var match_length = cljs.core.get.call(null,map__37731__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37731__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37729_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37729_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37733_SHARP_,p2__37734_SHARP_){
return cljs.core.assoc.call(null,p1__37733_SHARP_,cljs.core.get.call(null,p2__37734_SHARP_,key),p2__37734_SHARP_);
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
var loaded_f_datas_37735 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37735);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37735);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37736,p__37737){
var map__37738 = p__37736;
var map__37738__$1 = ((((!((map__37738 == null)))?((((map__37738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37738.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37738):map__37738);
var on_cssload = cljs.core.get.call(null,map__37738__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37739 = p__37737;
var map__37739__$1 = ((((!((map__37739 == null)))?((((map__37739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37739):map__37739);
var files_msg = map__37739__$1;
var files = cljs.core.get.call(null,map__37739__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1515054904206
