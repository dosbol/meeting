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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37120_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37120_SHARP_));
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
var seq__37121 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37122 = null;
var count__37123 = (0);
var i__37124 = (0);
while(true){
if((i__37124 < count__37123)){
var n = cljs.core._nth.call(null,chunk__37122,i__37124);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37125 = seq__37121;
var G__37126 = chunk__37122;
var G__37127 = count__37123;
var G__37128 = (i__37124 + (1));
seq__37121 = G__37125;
chunk__37122 = G__37126;
count__37123 = G__37127;
i__37124 = G__37128;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37121);
if(temp__4657__auto__){
var seq__37121__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37121__$1)){
var c__28035__auto__ = cljs.core.chunk_first.call(null,seq__37121__$1);
var G__37129 = cljs.core.chunk_rest.call(null,seq__37121__$1);
var G__37130 = c__28035__auto__;
var G__37131 = cljs.core.count.call(null,c__28035__auto__);
var G__37132 = (0);
seq__37121 = G__37129;
chunk__37122 = G__37130;
count__37123 = G__37131;
i__37124 = G__37132;
continue;
} else {
var n = cljs.core.first.call(null,seq__37121__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37133 = cljs.core.next.call(null,seq__37121__$1);
var G__37134 = null;
var G__37135 = (0);
var G__37136 = (0);
seq__37121 = G__37133;
chunk__37122 = G__37134;
count__37123 = G__37135;
i__37124 = G__37136;
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

var seq__37146_37154 = cljs.core.seq.call(null,deps);
var chunk__37147_37155 = null;
var count__37148_37156 = (0);
var i__37149_37157 = (0);
while(true){
if((i__37149_37157 < count__37148_37156)){
var dep_37158 = cljs.core._nth.call(null,chunk__37147_37155,i__37149_37157);
topo_sort_helper_STAR_.call(null,dep_37158,(depth + (1)),state);

var G__37159 = seq__37146_37154;
var G__37160 = chunk__37147_37155;
var G__37161 = count__37148_37156;
var G__37162 = (i__37149_37157 + (1));
seq__37146_37154 = G__37159;
chunk__37147_37155 = G__37160;
count__37148_37156 = G__37161;
i__37149_37157 = G__37162;
continue;
} else {
var temp__4657__auto___37163 = cljs.core.seq.call(null,seq__37146_37154);
if(temp__4657__auto___37163){
var seq__37146_37164__$1 = temp__4657__auto___37163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37146_37164__$1)){
var c__28035__auto___37165 = cljs.core.chunk_first.call(null,seq__37146_37164__$1);
var G__37166 = cljs.core.chunk_rest.call(null,seq__37146_37164__$1);
var G__37167 = c__28035__auto___37165;
var G__37168 = cljs.core.count.call(null,c__28035__auto___37165);
var G__37169 = (0);
seq__37146_37154 = G__37166;
chunk__37147_37155 = G__37167;
count__37148_37156 = G__37168;
i__37149_37157 = G__37169;
continue;
} else {
var dep_37170 = cljs.core.first.call(null,seq__37146_37164__$1);
topo_sort_helper_STAR_.call(null,dep_37170,(depth + (1)),state);

var G__37171 = cljs.core.next.call(null,seq__37146_37164__$1);
var G__37172 = null;
var G__37173 = (0);
var G__37174 = (0);
seq__37146_37154 = G__37171;
chunk__37147_37155 = G__37172;
count__37148_37156 = G__37173;
i__37149_37157 = G__37174;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37150){
var vec__37151 = p__37150;
var seq__37152 = cljs.core.seq.call(null,vec__37151);
var first__37153 = cljs.core.first.call(null,seq__37152);
var seq__37152__$1 = cljs.core.next.call(null,seq__37152);
var x = first__37153;
var xs = seq__37152__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37151,seq__37152,first__37153,seq__37152__$1,x,xs,get_deps__$1){
return (function (p1__37137_SHARP_){
return clojure.set.difference.call(null,p1__37137_SHARP_,x);
});})(vec__37151,seq__37152,first__37153,seq__37152__$1,x,xs,get_deps__$1))
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
var seq__37175 = cljs.core.seq.call(null,provides);
var chunk__37176 = null;
var count__37177 = (0);
var i__37178 = (0);
while(true){
if((i__37178 < count__37177)){
var prov = cljs.core._nth.call(null,chunk__37176,i__37178);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37179_37187 = cljs.core.seq.call(null,requires);
var chunk__37180_37188 = null;
var count__37181_37189 = (0);
var i__37182_37190 = (0);
while(true){
if((i__37182_37190 < count__37181_37189)){
var req_37191 = cljs.core._nth.call(null,chunk__37180_37188,i__37182_37190);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37191,prov);

var G__37192 = seq__37179_37187;
var G__37193 = chunk__37180_37188;
var G__37194 = count__37181_37189;
var G__37195 = (i__37182_37190 + (1));
seq__37179_37187 = G__37192;
chunk__37180_37188 = G__37193;
count__37181_37189 = G__37194;
i__37182_37190 = G__37195;
continue;
} else {
var temp__4657__auto___37196 = cljs.core.seq.call(null,seq__37179_37187);
if(temp__4657__auto___37196){
var seq__37179_37197__$1 = temp__4657__auto___37196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37179_37197__$1)){
var c__28035__auto___37198 = cljs.core.chunk_first.call(null,seq__37179_37197__$1);
var G__37199 = cljs.core.chunk_rest.call(null,seq__37179_37197__$1);
var G__37200 = c__28035__auto___37198;
var G__37201 = cljs.core.count.call(null,c__28035__auto___37198);
var G__37202 = (0);
seq__37179_37187 = G__37199;
chunk__37180_37188 = G__37200;
count__37181_37189 = G__37201;
i__37182_37190 = G__37202;
continue;
} else {
var req_37203 = cljs.core.first.call(null,seq__37179_37197__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37203,prov);

var G__37204 = cljs.core.next.call(null,seq__37179_37197__$1);
var G__37205 = null;
var G__37206 = (0);
var G__37207 = (0);
seq__37179_37187 = G__37204;
chunk__37180_37188 = G__37205;
count__37181_37189 = G__37206;
i__37182_37190 = G__37207;
continue;
}
} else {
}
}
break;
}

var G__37208 = seq__37175;
var G__37209 = chunk__37176;
var G__37210 = count__37177;
var G__37211 = (i__37178 + (1));
seq__37175 = G__37208;
chunk__37176 = G__37209;
count__37177 = G__37210;
i__37178 = G__37211;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37175);
if(temp__4657__auto__){
var seq__37175__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37175__$1)){
var c__28035__auto__ = cljs.core.chunk_first.call(null,seq__37175__$1);
var G__37212 = cljs.core.chunk_rest.call(null,seq__37175__$1);
var G__37213 = c__28035__auto__;
var G__37214 = cljs.core.count.call(null,c__28035__auto__);
var G__37215 = (0);
seq__37175 = G__37212;
chunk__37176 = G__37213;
count__37177 = G__37214;
i__37178 = G__37215;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37175__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37183_37216 = cljs.core.seq.call(null,requires);
var chunk__37184_37217 = null;
var count__37185_37218 = (0);
var i__37186_37219 = (0);
while(true){
if((i__37186_37219 < count__37185_37218)){
var req_37220 = cljs.core._nth.call(null,chunk__37184_37217,i__37186_37219);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37220,prov);

var G__37221 = seq__37183_37216;
var G__37222 = chunk__37184_37217;
var G__37223 = count__37185_37218;
var G__37224 = (i__37186_37219 + (1));
seq__37183_37216 = G__37221;
chunk__37184_37217 = G__37222;
count__37185_37218 = G__37223;
i__37186_37219 = G__37224;
continue;
} else {
var temp__4657__auto___37225__$1 = cljs.core.seq.call(null,seq__37183_37216);
if(temp__4657__auto___37225__$1){
var seq__37183_37226__$1 = temp__4657__auto___37225__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37183_37226__$1)){
var c__28035__auto___37227 = cljs.core.chunk_first.call(null,seq__37183_37226__$1);
var G__37228 = cljs.core.chunk_rest.call(null,seq__37183_37226__$1);
var G__37229 = c__28035__auto___37227;
var G__37230 = cljs.core.count.call(null,c__28035__auto___37227);
var G__37231 = (0);
seq__37183_37216 = G__37228;
chunk__37184_37217 = G__37229;
count__37185_37218 = G__37230;
i__37186_37219 = G__37231;
continue;
} else {
var req_37232 = cljs.core.first.call(null,seq__37183_37226__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37232,prov);

var G__37233 = cljs.core.next.call(null,seq__37183_37226__$1);
var G__37234 = null;
var G__37235 = (0);
var G__37236 = (0);
seq__37183_37216 = G__37233;
chunk__37184_37217 = G__37234;
count__37185_37218 = G__37235;
i__37186_37219 = G__37236;
continue;
}
} else {
}
}
break;
}

var G__37237 = cljs.core.next.call(null,seq__37175__$1);
var G__37238 = null;
var G__37239 = (0);
var G__37240 = (0);
seq__37175 = G__37237;
chunk__37176 = G__37238;
count__37177 = G__37239;
i__37178 = G__37240;
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
var seq__37241_37245 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37242_37246 = null;
var count__37243_37247 = (0);
var i__37244_37248 = (0);
while(true){
if((i__37244_37248 < count__37243_37247)){
var ns_37249 = cljs.core._nth.call(null,chunk__37242_37246,i__37244_37248);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37249);

var G__37250 = seq__37241_37245;
var G__37251 = chunk__37242_37246;
var G__37252 = count__37243_37247;
var G__37253 = (i__37244_37248 + (1));
seq__37241_37245 = G__37250;
chunk__37242_37246 = G__37251;
count__37243_37247 = G__37252;
i__37244_37248 = G__37253;
continue;
} else {
var temp__4657__auto___37254 = cljs.core.seq.call(null,seq__37241_37245);
if(temp__4657__auto___37254){
var seq__37241_37255__$1 = temp__4657__auto___37254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37241_37255__$1)){
var c__28035__auto___37256 = cljs.core.chunk_first.call(null,seq__37241_37255__$1);
var G__37257 = cljs.core.chunk_rest.call(null,seq__37241_37255__$1);
var G__37258 = c__28035__auto___37256;
var G__37259 = cljs.core.count.call(null,c__28035__auto___37256);
var G__37260 = (0);
seq__37241_37245 = G__37257;
chunk__37242_37246 = G__37258;
count__37243_37247 = G__37259;
i__37244_37248 = G__37260;
continue;
} else {
var ns_37261 = cljs.core.first.call(null,seq__37241_37255__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37261);

var G__37262 = cljs.core.next.call(null,seq__37241_37255__$1);
var G__37263 = null;
var G__37264 = (0);
var G__37265 = (0);
seq__37241_37245 = G__37262;
chunk__37242_37246 = G__37263;
count__37243_37247 = G__37264;
i__37244_37248 = G__37265;
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
var G__37266__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37267__i = 0, G__37267__a = new Array(arguments.length -  0);
while (G__37267__i < G__37267__a.length) {G__37267__a[G__37267__i] = arguments[G__37267__i + 0]; ++G__37267__i;}
  args = new cljs.core.IndexedSeq(G__37267__a,0,null);
} 
return G__37266__delegate.call(this,args);};
G__37266.cljs$lang$maxFixedArity = 0;
G__37266.cljs$lang$applyTo = (function (arglist__37268){
var args = cljs.core.seq(arglist__37268);
return G__37266__delegate(args);
});
G__37266.cljs$core$IFn$_invoke$arity$variadic = G__37266__delegate;
return G__37266;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37269_SHARP_,p2__37270_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37269_SHARP_)].join('')),p2__37270_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37271_SHARP_,p2__37272_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37271_SHARP_)].join(''),p2__37272_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37273 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37273.addCallback(((function (G__37273){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37273))
);

G__37273.addErrback(((function (G__37273){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37273))
);

return G__37273;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37274 = cljs.core._EQ_;
var expr__37275 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37274.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37275))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37274,expr__37275){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37274,expr__37275))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37274,expr__37275){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37277){if((e37277 instanceof Error)){
var e = e37277;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37277;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37274,expr__37275))
} else {
if(cljs.core.truth_(pred__37274.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37275))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37274.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37275))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37274.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37275))){
return ((function (pred__37274,expr__37275){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37278){if((e37278 instanceof Error)){
var e = e37278;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37278;

}
}})());
});
;})(pred__37274,expr__37275))
} else {
return ((function (pred__37274,expr__37275){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37274,expr__37275))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37279,callback){
var map__37280 = p__37279;
var map__37280__$1 = ((((!((map__37280 == null)))?((((map__37280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37280):map__37280);
var file_msg = map__37280__$1;
var request_url = cljs.core.get.call(null,map__37280__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37280,map__37280__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37280,map__37280__$1,file_msg,request_url))
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
return (function (state_37304){
var state_val_37305 = (state_37304[(1)]);
if((state_val_37305 === (7))){
var inst_37300 = (state_37304[(2)]);
var state_37304__$1 = state_37304;
var statearr_37306_37323 = state_37304__$1;
(statearr_37306_37323[(2)] = inst_37300);

(statearr_37306_37323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (1))){
var state_37304__$1 = state_37304;
var statearr_37307_37324 = state_37304__$1;
(statearr_37307_37324[(2)] = null);

(statearr_37307_37324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (4))){
var inst_37284 = (state_37304[(7)]);
var inst_37284__$1 = (state_37304[(2)]);
var state_37304__$1 = (function (){var statearr_37308 = state_37304;
(statearr_37308[(7)] = inst_37284__$1);

return statearr_37308;
})();
if(cljs.core.truth_(inst_37284__$1)){
var statearr_37309_37325 = state_37304__$1;
(statearr_37309_37325[(1)] = (5));

} else {
var statearr_37310_37326 = state_37304__$1;
(statearr_37310_37326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (6))){
var state_37304__$1 = state_37304;
var statearr_37311_37327 = state_37304__$1;
(statearr_37311_37327[(2)] = null);

(statearr_37311_37327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (3))){
var inst_37302 = (state_37304[(2)]);
var state_37304__$1 = state_37304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37304__$1,inst_37302);
} else {
if((state_val_37305 === (2))){
var state_37304__$1 = state_37304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37304__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37305 === (11))){
var inst_37296 = (state_37304[(2)]);
var state_37304__$1 = (function (){var statearr_37312 = state_37304;
(statearr_37312[(8)] = inst_37296);

return statearr_37312;
})();
var statearr_37313_37328 = state_37304__$1;
(statearr_37313_37328[(2)] = null);

(statearr_37313_37328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (9))){
var inst_37290 = (state_37304[(9)]);
var inst_37288 = (state_37304[(10)]);
var inst_37292 = inst_37290.call(null,inst_37288);
var state_37304__$1 = state_37304;
var statearr_37314_37329 = state_37304__$1;
(statearr_37314_37329[(2)] = inst_37292);

(statearr_37314_37329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (5))){
var inst_37284 = (state_37304[(7)]);
var inst_37286 = figwheel.client.file_reloading.blocking_load.call(null,inst_37284);
var state_37304__$1 = state_37304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37304__$1,(8),inst_37286);
} else {
if((state_val_37305 === (10))){
var inst_37288 = (state_37304[(10)]);
var inst_37294 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37288);
var state_37304__$1 = state_37304;
var statearr_37315_37330 = state_37304__$1;
(statearr_37315_37330[(2)] = inst_37294);

(statearr_37315_37330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37305 === (8))){
var inst_37290 = (state_37304[(9)]);
var inst_37284 = (state_37304[(7)]);
var inst_37288 = (state_37304[(2)]);
var inst_37289 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37290__$1 = cljs.core.get.call(null,inst_37289,inst_37284);
var state_37304__$1 = (function (){var statearr_37316 = state_37304;
(statearr_37316[(9)] = inst_37290__$1);

(statearr_37316[(10)] = inst_37288);

return statearr_37316;
})();
if(cljs.core.truth_(inst_37290__$1)){
var statearr_37317_37331 = state_37304__$1;
(statearr_37317_37331[(1)] = (9));

} else {
var statearr_37318_37332 = state_37304__$1;
(statearr_37318_37332[(1)] = (10));

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
var statearr_37319 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37319[(0)] = figwheel$client$file_reloading$state_machine__30538__auto__);

(statearr_37319[(1)] = (1));

return statearr_37319;
});
var figwheel$client$file_reloading$state_machine__30538__auto____1 = (function (state_37304){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_37304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e37320){if((e37320 instanceof Object)){
var ex__30541__auto__ = e37320;
var statearr_37321_37333 = state_37304;
(statearr_37321_37333[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37334 = state_37304;
state_37304 = G__37334;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30538__auto__ = function(state_37304){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30538__auto____1.call(this,state_37304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30538__auto____0;
figwheel$client$file_reloading$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30538__auto____1;
return figwheel$client$file_reloading$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__))
})();
var state__30627__auto__ = (function (){var statearr_37322 = f__30626__auto__.call(null);
(statearr_37322[(6)] = c__30625__auto__);

return statearr_37322;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37335,callback){
var map__37336 = p__37335;
var map__37336__$1 = ((((!((map__37336 == null)))?((((map__37336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37336):map__37336);
var file_msg = map__37336__$1;
var namespace = cljs.core.get.call(null,map__37336__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37336,map__37336__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37336,map__37336__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37338){
var map__37339 = p__37338;
var map__37339__$1 = ((((!((map__37339 == null)))?((((map__37339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37339):map__37339);
var file_msg = map__37339__$1;
var namespace = cljs.core.get.call(null,map__37339__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37341){
var map__37342 = p__37341;
var map__37342__$1 = ((((!((map__37342 == null)))?((((map__37342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37342):map__37342);
var file_msg = map__37342__$1;
var namespace = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37344,callback){
var map__37345 = p__37344;
var map__37345__$1 = ((((!((map__37345 == null)))?((((map__37345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37345):map__37345);
var file_msg = map__37345__$1;
var request_url = cljs.core.get.call(null,map__37345__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37345__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30625__auto___37395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___37395,out){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___37395,out){
return (function (state_37380){
var state_val_37381 = (state_37380[(1)]);
if((state_val_37381 === (1))){
var inst_37354 = cljs.core.seq.call(null,files);
var inst_37355 = cljs.core.first.call(null,inst_37354);
var inst_37356 = cljs.core.next.call(null,inst_37354);
var inst_37357 = files;
var state_37380__$1 = (function (){var statearr_37382 = state_37380;
(statearr_37382[(7)] = inst_37355);

(statearr_37382[(8)] = inst_37357);

(statearr_37382[(9)] = inst_37356);

return statearr_37382;
})();
var statearr_37383_37396 = state_37380__$1;
(statearr_37383_37396[(2)] = null);

(statearr_37383_37396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (2))){
var inst_37357 = (state_37380[(8)]);
var inst_37363 = (state_37380[(10)]);
var inst_37362 = cljs.core.seq.call(null,inst_37357);
var inst_37363__$1 = cljs.core.first.call(null,inst_37362);
var inst_37364 = cljs.core.next.call(null,inst_37362);
var inst_37365 = (inst_37363__$1 == null);
var inst_37366 = cljs.core.not.call(null,inst_37365);
var state_37380__$1 = (function (){var statearr_37384 = state_37380;
(statearr_37384[(11)] = inst_37364);

(statearr_37384[(10)] = inst_37363__$1);

return statearr_37384;
})();
if(inst_37366){
var statearr_37385_37397 = state_37380__$1;
(statearr_37385_37397[(1)] = (4));

} else {
var statearr_37386_37398 = state_37380__$1;
(statearr_37386_37398[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (3))){
var inst_37378 = (state_37380[(2)]);
var state_37380__$1 = state_37380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37380__$1,inst_37378);
} else {
if((state_val_37381 === (4))){
var inst_37363 = (state_37380[(10)]);
var inst_37368 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37363);
var state_37380__$1 = state_37380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37380__$1,(7),inst_37368);
} else {
if((state_val_37381 === (5))){
var inst_37374 = cljs.core.async.close_BANG_.call(null,out);
var state_37380__$1 = state_37380;
var statearr_37387_37399 = state_37380__$1;
(statearr_37387_37399[(2)] = inst_37374);

(statearr_37387_37399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (6))){
var inst_37376 = (state_37380[(2)]);
var state_37380__$1 = state_37380;
var statearr_37388_37400 = state_37380__$1;
(statearr_37388_37400[(2)] = inst_37376);

(statearr_37388_37400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (7))){
var inst_37364 = (state_37380[(11)]);
var inst_37370 = (state_37380[(2)]);
var inst_37371 = cljs.core.async.put_BANG_.call(null,out,inst_37370);
var inst_37357 = inst_37364;
var state_37380__$1 = (function (){var statearr_37389 = state_37380;
(statearr_37389[(8)] = inst_37357);

(statearr_37389[(12)] = inst_37371);

return statearr_37389;
})();
var statearr_37390_37401 = state_37380__$1;
(statearr_37390_37401[(2)] = null);

(statearr_37390_37401[(1)] = (2));


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
});})(c__30625__auto___37395,out))
;
return ((function (switch__30537__auto__,c__30625__auto___37395,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto____0 = (function (){
var statearr_37391 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37391[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto__);

(statearr_37391[(1)] = (1));

return statearr_37391;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto____1 = (function (state_37380){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_37380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e37392){if((e37392 instanceof Object)){
var ex__30541__auto__ = e37392;
var statearr_37393_37402 = state_37380;
(statearr_37393_37402[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37403 = state_37380;
state_37380 = G__37403;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto__ = function(state_37380){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto____1.call(this,state_37380);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___37395,out))
})();
var state__30627__auto__ = (function (){var statearr_37394 = f__30626__auto__.call(null);
(statearr_37394[(6)] = c__30625__auto___37395);

return statearr_37394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___37395,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37404,opts){
var map__37405 = p__37404;
var map__37405__$1 = ((((!((map__37405 == null)))?((((map__37405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37405):map__37405);
var eval_body = cljs.core.get.call(null,map__37405__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37405__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37407){var e = e37407;
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
return (function (p1__37408_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37408_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37409){
var vec__37410 = p__37409;
var k = cljs.core.nth.call(null,vec__37410,(0),null);
var v = cljs.core.nth.call(null,vec__37410,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37413){
var vec__37414 = p__37413;
var k = cljs.core.nth.call(null,vec__37414,(0),null);
var v = cljs.core.nth.call(null,vec__37414,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37420,p__37421){
var map__37422 = p__37420;
var map__37422__$1 = ((((!((map__37422 == null)))?((((map__37422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37422):map__37422);
var opts = map__37422__$1;
var before_jsload = cljs.core.get.call(null,map__37422__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37422__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37422__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37423 = p__37421;
var map__37423__$1 = ((((!((map__37423 == null)))?((((map__37423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37423):map__37423);
var msg = map__37423__$1;
var files = cljs.core.get.call(null,map__37423__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37423__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37423__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37577){
var state_val_37578 = (state_37577[(1)]);
if((state_val_37578 === (7))){
var inst_37440 = (state_37577[(7)]);
var inst_37437 = (state_37577[(8)]);
var inst_37439 = (state_37577[(9)]);
var inst_37438 = (state_37577[(10)]);
var inst_37445 = cljs.core._nth.call(null,inst_37438,inst_37440);
var inst_37446 = figwheel.client.file_reloading.eval_body.call(null,inst_37445,opts);
var inst_37447 = (inst_37440 + (1));
var tmp37579 = inst_37437;
var tmp37580 = inst_37439;
var tmp37581 = inst_37438;
var inst_37437__$1 = tmp37579;
var inst_37438__$1 = tmp37581;
var inst_37439__$1 = tmp37580;
var inst_37440__$1 = inst_37447;
var state_37577__$1 = (function (){var statearr_37582 = state_37577;
(statearr_37582[(11)] = inst_37446);

(statearr_37582[(7)] = inst_37440__$1);

(statearr_37582[(8)] = inst_37437__$1);

(statearr_37582[(9)] = inst_37439__$1);

(statearr_37582[(10)] = inst_37438__$1);

return statearr_37582;
})();
var statearr_37583_37666 = state_37577__$1;
(statearr_37583_37666[(2)] = null);

(statearr_37583_37666[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (20))){
var inst_37480 = (state_37577[(12)]);
var inst_37488 = figwheel.client.file_reloading.sort_files.call(null,inst_37480);
var state_37577__$1 = state_37577;
var statearr_37584_37667 = state_37577__$1;
(statearr_37584_37667[(2)] = inst_37488);

(statearr_37584_37667[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (27))){
var state_37577__$1 = state_37577;
var statearr_37585_37668 = state_37577__$1;
(statearr_37585_37668[(2)] = null);

(statearr_37585_37668[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (1))){
var inst_37429 = (state_37577[(13)]);
var inst_37426 = before_jsload.call(null,files);
var inst_37427 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37428 = (function (){return ((function (inst_37429,inst_37426,inst_37427,state_val_37578,c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37417_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37417_SHARP_);
});
;})(inst_37429,inst_37426,inst_37427,state_val_37578,c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37429__$1 = cljs.core.filter.call(null,inst_37428,files);
var inst_37430 = cljs.core.not_empty.call(null,inst_37429__$1);
var state_37577__$1 = (function (){var statearr_37586 = state_37577;
(statearr_37586[(14)] = inst_37427);

(statearr_37586[(15)] = inst_37426);

(statearr_37586[(13)] = inst_37429__$1);

return statearr_37586;
})();
if(cljs.core.truth_(inst_37430)){
var statearr_37587_37669 = state_37577__$1;
(statearr_37587_37669[(1)] = (2));

} else {
var statearr_37588_37670 = state_37577__$1;
(statearr_37588_37670[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (24))){
var state_37577__$1 = state_37577;
var statearr_37589_37671 = state_37577__$1;
(statearr_37589_37671[(2)] = null);

(statearr_37589_37671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (39))){
var inst_37530 = (state_37577[(16)]);
var state_37577__$1 = state_37577;
var statearr_37590_37672 = state_37577__$1;
(statearr_37590_37672[(2)] = inst_37530);

(statearr_37590_37672[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (46))){
var inst_37572 = (state_37577[(2)]);
var state_37577__$1 = state_37577;
var statearr_37591_37673 = state_37577__$1;
(statearr_37591_37673[(2)] = inst_37572);

(statearr_37591_37673[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (4))){
var inst_37474 = (state_37577[(2)]);
var inst_37475 = cljs.core.List.EMPTY;
var inst_37476 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37475);
var inst_37477 = (function (){return ((function (inst_37474,inst_37475,inst_37476,state_val_37578,c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37418_SHARP_){
var and__27184__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37418_SHARP_);
if(cljs.core.truth_(and__27184__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37418_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37418_SHARP_)));
} else {
return and__27184__auto__;
}
});
;})(inst_37474,inst_37475,inst_37476,state_val_37578,c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37478 = cljs.core.filter.call(null,inst_37477,files);
var inst_37479 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37480 = cljs.core.concat.call(null,inst_37478,inst_37479);
var state_37577__$1 = (function (){var statearr_37592 = state_37577;
(statearr_37592[(17)] = inst_37474);

(statearr_37592[(18)] = inst_37476);

(statearr_37592[(12)] = inst_37480);

return statearr_37592;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37593_37674 = state_37577__$1;
(statearr_37593_37674[(1)] = (16));

} else {
var statearr_37594_37675 = state_37577__$1;
(statearr_37594_37675[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (15))){
var inst_37464 = (state_37577[(2)]);
var state_37577__$1 = state_37577;
var statearr_37595_37676 = state_37577__$1;
(statearr_37595_37676[(2)] = inst_37464);

(statearr_37595_37676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (21))){
var inst_37490 = (state_37577[(19)]);
var inst_37490__$1 = (state_37577[(2)]);
var inst_37491 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37490__$1);
var state_37577__$1 = (function (){var statearr_37596 = state_37577;
(statearr_37596[(19)] = inst_37490__$1);

return statearr_37596;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37577__$1,(22),inst_37491);
} else {
if((state_val_37578 === (31))){
var inst_37575 = (state_37577[(2)]);
var state_37577__$1 = state_37577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37577__$1,inst_37575);
} else {
if((state_val_37578 === (32))){
var inst_37530 = (state_37577[(16)]);
var inst_37535 = inst_37530.cljs$lang$protocol_mask$partition0$;
var inst_37536 = (inst_37535 & (64));
var inst_37537 = inst_37530.cljs$core$ISeq$;
var inst_37538 = (cljs.core.PROTOCOL_SENTINEL === inst_37537);
var inst_37539 = (inst_37536) || (inst_37538);
var state_37577__$1 = state_37577;
if(cljs.core.truth_(inst_37539)){
var statearr_37597_37677 = state_37577__$1;
(statearr_37597_37677[(1)] = (35));

} else {
var statearr_37598_37678 = state_37577__$1;
(statearr_37598_37678[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (40))){
var inst_37552 = (state_37577[(20)]);
var inst_37551 = (state_37577[(2)]);
var inst_37552__$1 = cljs.core.get.call(null,inst_37551,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37553 = cljs.core.get.call(null,inst_37551,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37554 = cljs.core.not_empty.call(null,inst_37552__$1);
var state_37577__$1 = (function (){var statearr_37599 = state_37577;
(statearr_37599[(20)] = inst_37552__$1);

(statearr_37599[(21)] = inst_37553);

return statearr_37599;
})();
if(cljs.core.truth_(inst_37554)){
var statearr_37600_37679 = state_37577__$1;
(statearr_37600_37679[(1)] = (41));

} else {
var statearr_37601_37680 = state_37577__$1;
(statearr_37601_37680[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (33))){
var state_37577__$1 = state_37577;
var statearr_37602_37681 = state_37577__$1;
(statearr_37602_37681[(2)] = false);

(statearr_37602_37681[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (13))){
var inst_37450 = (state_37577[(22)]);
var inst_37454 = cljs.core.chunk_first.call(null,inst_37450);
var inst_37455 = cljs.core.chunk_rest.call(null,inst_37450);
var inst_37456 = cljs.core.count.call(null,inst_37454);
var inst_37437 = inst_37455;
var inst_37438 = inst_37454;
var inst_37439 = inst_37456;
var inst_37440 = (0);
var state_37577__$1 = (function (){var statearr_37603 = state_37577;
(statearr_37603[(7)] = inst_37440);

(statearr_37603[(8)] = inst_37437);

(statearr_37603[(9)] = inst_37439);

(statearr_37603[(10)] = inst_37438);

return statearr_37603;
})();
var statearr_37604_37682 = state_37577__$1;
(statearr_37604_37682[(2)] = null);

(statearr_37604_37682[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (22))){
var inst_37490 = (state_37577[(19)]);
var inst_37498 = (state_37577[(23)]);
var inst_37493 = (state_37577[(24)]);
var inst_37494 = (state_37577[(25)]);
var inst_37493__$1 = (state_37577[(2)]);
var inst_37494__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37493__$1);
var inst_37495 = (function (){var all_files = inst_37490;
var res_SINGLEQUOTE_ = inst_37493__$1;
var res = inst_37494__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37490,inst_37498,inst_37493,inst_37494,inst_37493__$1,inst_37494__$1,state_val_37578,c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37419_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37419_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37490,inst_37498,inst_37493,inst_37494,inst_37493__$1,inst_37494__$1,state_val_37578,c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37496 = cljs.core.filter.call(null,inst_37495,inst_37493__$1);
var inst_37497 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37498__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37497);
var inst_37499 = cljs.core.not_empty.call(null,inst_37498__$1);
var state_37577__$1 = (function (){var statearr_37605 = state_37577;
(statearr_37605[(26)] = inst_37496);

(statearr_37605[(23)] = inst_37498__$1);

(statearr_37605[(24)] = inst_37493__$1);

(statearr_37605[(25)] = inst_37494__$1);

return statearr_37605;
})();
if(cljs.core.truth_(inst_37499)){
var statearr_37606_37683 = state_37577__$1;
(statearr_37606_37683[(1)] = (23));

} else {
var statearr_37607_37684 = state_37577__$1;
(statearr_37607_37684[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (36))){
var state_37577__$1 = state_37577;
var statearr_37608_37685 = state_37577__$1;
(statearr_37608_37685[(2)] = false);

(statearr_37608_37685[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (41))){
var inst_37552 = (state_37577[(20)]);
var inst_37556 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37557 = cljs.core.map.call(null,inst_37556,inst_37552);
var inst_37558 = cljs.core.pr_str.call(null,inst_37557);
var inst_37559 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37558)].join('');
var inst_37560 = figwheel.client.utils.log.call(null,inst_37559);
var state_37577__$1 = state_37577;
var statearr_37609_37686 = state_37577__$1;
(statearr_37609_37686[(2)] = inst_37560);

(statearr_37609_37686[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (43))){
var inst_37553 = (state_37577[(21)]);
var inst_37563 = (state_37577[(2)]);
var inst_37564 = cljs.core.not_empty.call(null,inst_37553);
var state_37577__$1 = (function (){var statearr_37610 = state_37577;
(statearr_37610[(27)] = inst_37563);

return statearr_37610;
})();
if(cljs.core.truth_(inst_37564)){
var statearr_37611_37687 = state_37577__$1;
(statearr_37611_37687[(1)] = (44));

} else {
var statearr_37612_37688 = state_37577__$1;
(statearr_37612_37688[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (29))){
var inst_37490 = (state_37577[(19)]);
var inst_37496 = (state_37577[(26)]);
var inst_37498 = (state_37577[(23)]);
var inst_37493 = (state_37577[(24)]);
var inst_37494 = (state_37577[(25)]);
var inst_37530 = (state_37577[(16)]);
var inst_37526 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37529 = (function (){var all_files = inst_37490;
var res_SINGLEQUOTE_ = inst_37493;
var res = inst_37494;
var files_not_loaded = inst_37496;
var dependencies_that_loaded = inst_37498;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37490,inst_37496,inst_37498,inst_37493,inst_37494,inst_37530,inst_37526,state_val_37578,c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37528){
var map__37613 = p__37528;
var map__37613__$1 = ((((!((map__37613 == null)))?((((map__37613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37613):map__37613);
var namespace = cljs.core.get.call(null,map__37613__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37490,inst_37496,inst_37498,inst_37493,inst_37494,inst_37530,inst_37526,state_val_37578,c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37530__$1 = cljs.core.group_by.call(null,inst_37529,inst_37496);
var inst_37532 = (inst_37530__$1 == null);
var inst_37533 = cljs.core.not.call(null,inst_37532);
var state_37577__$1 = (function (){var statearr_37615 = state_37577;
(statearr_37615[(28)] = inst_37526);

(statearr_37615[(16)] = inst_37530__$1);

return statearr_37615;
})();
if(inst_37533){
var statearr_37616_37689 = state_37577__$1;
(statearr_37616_37689[(1)] = (32));

} else {
var statearr_37617_37690 = state_37577__$1;
(statearr_37617_37690[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (44))){
var inst_37553 = (state_37577[(21)]);
var inst_37566 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37553);
var inst_37567 = cljs.core.pr_str.call(null,inst_37566);
var inst_37568 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37567)].join('');
var inst_37569 = figwheel.client.utils.log.call(null,inst_37568);
var state_37577__$1 = state_37577;
var statearr_37618_37691 = state_37577__$1;
(statearr_37618_37691[(2)] = inst_37569);

(statearr_37618_37691[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (6))){
var inst_37471 = (state_37577[(2)]);
var state_37577__$1 = state_37577;
var statearr_37619_37692 = state_37577__$1;
(statearr_37619_37692[(2)] = inst_37471);

(statearr_37619_37692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (28))){
var inst_37496 = (state_37577[(26)]);
var inst_37523 = (state_37577[(2)]);
var inst_37524 = cljs.core.not_empty.call(null,inst_37496);
var state_37577__$1 = (function (){var statearr_37620 = state_37577;
(statearr_37620[(29)] = inst_37523);

return statearr_37620;
})();
if(cljs.core.truth_(inst_37524)){
var statearr_37621_37693 = state_37577__$1;
(statearr_37621_37693[(1)] = (29));

} else {
var statearr_37622_37694 = state_37577__$1;
(statearr_37622_37694[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (25))){
var inst_37494 = (state_37577[(25)]);
var inst_37510 = (state_37577[(2)]);
var inst_37511 = cljs.core.not_empty.call(null,inst_37494);
var state_37577__$1 = (function (){var statearr_37623 = state_37577;
(statearr_37623[(30)] = inst_37510);

return statearr_37623;
})();
if(cljs.core.truth_(inst_37511)){
var statearr_37624_37695 = state_37577__$1;
(statearr_37624_37695[(1)] = (26));

} else {
var statearr_37625_37696 = state_37577__$1;
(statearr_37625_37696[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (34))){
var inst_37546 = (state_37577[(2)]);
var state_37577__$1 = state_37577;
if(cljs.core.truth_(inst_37546)){
var statearr_37626_37697 = state_37577__$1;
(statearr_37626_37697[(1)] = (38));

} else {
var statearr_37627_37698 = state_37577__$1;
(statearr_37627_37698[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (17))){
var state_37577__$1 = state_37577;
var statearr_37628_37699 = state_37577__$1;
(statearr_37628_37699[(2)] = recompile_dependents);

(statearr_37628_37699[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (3))){
var state_37577__$1 = state_37577;
var statearr_37629_37700 = state_37577__$1;
(statearr_37629_37700[(2)] = null);

(statearr_37629_37700[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (12))){
var inst_37467 = (state_37577[(2)]);
var state_37577__$1 = state_37577;
var statearr_37630_37701 = state_37577__$1;
(statearr_37630_37701[(2)] = inst_37467);

(statearr_37630_37701[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (2))){
var inst_37429 = (state_37577[(13)]);
var inst_37436 = cljs.core.seq.call(null,inst_37429);
var inst_37437 = inst_37436;
var inst_37438 = null;
var inst_37439 = (0);
var inst_37440 = (0);
var state_37577__$1 = (function (){var statearr_37631 = state_37577;
(statearr_37631[(7)] = inst_37440);

(statearr_37631[(8)] = inst_37437);

(statearr_37631[(9)] = inst_37439);

(statearr_37631[(10)] = inst_37438);

return statearr_37631;
})();
var statearr_37632_37702 = state_37577__$1;
(statearr_37632_37702[(2)] = null);

(statearr_37632_37702[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (23))){
var inst_37490 = (state_37577[(19)]);
var inst_37496 = (state_37577[(26)]);
var inst_37498 = (state_37577[(23)]);
var inst_37493 = (state_37577[(24)]);
var inst_37494 = (state_37577[(25)]);
var inst_37501 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37503 = (function (){var all_files = inst_37490;
var res_SINGLEQUOTE_ = inst_37493;
var res = inst_37494;
var files_not_loaded = inst_37496;
var dependencies_that_loaded = inst_37498;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37490,inst_37496,inst_37498,inst_37493,inst_37494,inst_37501,state_val_37578,c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37502){
var map__37633 = p__37502;
var map__37633__$1 = ((((!((map__37633 == null)))?((((map__37633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37633):map__37633);
var request_url = cljs.core.get.call(null,map__37633__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37490,inst_37496,inst_37498,inst_37493,inst_37494,inst_37501,state_val_37578,c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37504 = cljs.core.reverse.call(null,inst_37498);
var inst_37505 = cljs.core.map.call(null,inst_37503,inst_37504);
var inst_37506 = cljs.core.pr_str.call(null,inst_37505);
var inst_37507 = figwheel.client.utils.log.call(null,inst_37506);
var state_37577__$1 = (function (){var statearr_37635 = state_37577;
(statearr_37635[(31)] = inst_37501);

return statearr_37635;
})();
var statearr_37636_37703 = state_37577__$1;
(statearr_37636_37703[(2)] = inst_37507);

(statearr_37636_37703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (35))){
var state_37577__$1 = state_37577;
var statearr_37637_37704 = state_37577__$1;
(statearr_37637_37704[(2)] = true);

(statearr_37637_37704[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (19))){
var inst_37480 = (state_37577[(12)]);
var inst_37486 = figwheel.client.file_reloading.expand_files.call(null,inst_37480);
var state_37577__$1 = state_37577;
var statearr_37638_37705 = state_37577__$1;
(statearr_37638_37705[(2)] = inst_37486);

(statearr_37638_37705[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (11))){
var state_37577__$1 = state_37577;
var statearr_37639_37706 = state_37577__$1;
(statearr_37639_37706[(2)] = null);

(statearr_37639_37706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (9))){
var inst_37469 = (state_37577[(2)]);
var state_37577__$1 = state_37577;
var statearr_37640_37707 = state_37577__$1;
(statearr_37640_37707[(2)] = inst_37469);

(statearr_37640_37707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (5))){
var inst_37440 = (state_37577[(7)]);
var inst_37439 = (state_37577[(9)]);
var inst_37442 = (inst_37440 < inst_37439);
var inst_37443 = inst_37442;
var state_37577__$1 = state_37577;
if(cljs.core.truth_(inst_37443)){
var statearr_37641_37708 = state_37577__$1;
(statearr_37641_37708[(1)] = (7));

} else {
var statearr_37642_37709 = state_37577__$1;
(statearr_37642_37709[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (14))){
var inst_37450 = (state_37577[(22)]);
var inst_37459 = cljs.core.first.call(null,inst_37450);
var inst_37460 = figwheel.client.file_reloading.eval_body.call(null,inst_37459,opts);
var inst_37461 = cljs.core.next.call(null,inst_37450);
var inst_37437 = inst_37461;
var inst_37438 = null;
var inst_37439 = (0);
var inst_37440 = (0);
var state_37577__$1 = (function (){var statearr_37643 = state_37577;
(statearr_37643[(7)] = inst_37440);

(statearr_37643[(8)] = inst_37437);

(statearr_37643[(9)] = inst_37439);

(statearr_37643[(10)] = inst_37438);

(statearr_37643[(32)] = inst_37460);

return statearr_37643;
})();
var statearr_37644_37710 = state_37577__$1;
(statearr_37644_37710[(2)] = null);

(statearr_37644_37710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (45))){
var state_37577__$1 = state_37577;
var statearr_37645_37711 = state_37577__$1;
(statearr_37645_37711[(2)] = null);

(statearr_37645_37711[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (26))){
var inst_37490 = (state_37577[(19)]);
var inst_37496 = (state_37577[(26)]);
var inst_37498 = (state_37577[(23)]);
var inst_37493 = (state_37577[(24)]);
var inst_37494 = (state_37577[(25)]);
var inst_37513 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37515 = (function (){var all_files = inst_37490;
var res_SINGLEQUOTE_ = inst_37493;
var res = inst_37494;
var files_not_loaded = inst_37496;
var dependencies_that_loaded = inst_37498;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37490,inst_37496,inst_37498,inst_37493,inst_37494,inst_37513,state_val_37578,c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37514){
var map__37646 = p__37514;
var map__37646__$1 = ((((!((map__37646 == null)))?((((map__37646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37646):map__37646);
var namespace = cljs.core.get.call(null,map__37646__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37646__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37490,inst_37496,inst_37498,inst_37493,inst_37494,inst_37513,state_val_37578,c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37516 = cljs.core.map.call(null,inst_37515,inst_37494);
var inst_37517 = cljs.core.pr_str.call(null,inst_37516);
var inst_37518 = figwheel.client.utils.log.call(null,inst_37517);
var inst_37519 = (function (){var all_files = inst_37490;
var res_SINGLEQUOTE_ = inst_37493;
var res = inst_37494;
var files_not_loaded = inst_37496;
var dependencies_that_loaded = inst_37498;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37490,inst_37496,inst_37498,inst_37493,inst_37494,inst_37513,inst_37515,inst_37516,inst_37517,inst_37518,state_val_37578,c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37490,inst_37496,inst_37498,inst_37493,inst_37494,inst_37513,inst_37515,inst_37516,inst_37517,inst_37518,state_val_37578,c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37520 = setTimeout(inst_37519,(10));
var state_37577__$1 = (function (){var statearr_37648 = state_37577;
(statearr_37648[(33)] = inst_37518);

(statearr_37648[(34)] = inst_37513);

return statearr_37648;
})();
var statearr_37649_37712 = state_37577__$1;
(statearr_37649_37712[(2)] = inst_37520);

(statearr_37649_37712[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (16))){
var state_37577__$1 = state_37577;
var statearr_37650_37713 = state_37577__$1;
(statearr_37650_37713[(2)] = reload_dependents);

(statearr_37650_37713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (38))){
var inst_37530 = (state_37577[(16)]);
var inst_37548 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37530);
var state_37577__$1 = state_37577;
var statearr_37651_37714 = state_37577__$1;
(statearr_37651_37714[(2)] = inst_37548);

(statearr_37651_37714[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (30))){
var state_37577__$1 = state_37577;
var statearr_37652_37715 = state_37577__$1;
(statearr_37652_37715[(2)] = null);

(statearr_37652_37715[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (10))){
var inst_37450 = (state_37577[(22)]);
var inst_37452 = cljs.core.chunked_seq_QMARK_.call(null,inst_37450);
var state_37577__$1 = state_37577;
if(inst_37452){
var statearr_37653_37716 = state_37577__$1;
(statearr_37653_37716[(1)] = (13));

} else {
var statearr_37654_37717 = state_37577__$1;
(statearr_37654_37717[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (18))){
var inst_37484 = (state_37577[(2)]);
var state_37577__$1 = state_37577;
if(cljs.core.truth_(inst_37484)){
var statearr_37655_37718 = state_37577__$1;
(statearr_37655_37718[(1)] = (19));

} else {
var statearr_37656_37719 = state_37577__$1;
(statearr_37656_37719[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (42))){
var state_37577__$1 = state_37577;
var statearr_37657_37720 = state_37577__$1;
(statearr_37657_37720[(2)] = null);

(statearr_37657_37720[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (37))){
var inst_37543 = (state_37577[(2)]);
var state_37577__$1 = state_37577;
var statearr_37658_37721 = state_37577__$1;
(statearr_37658_37721[(2)] = inst_37543);

(statearr_37658_37721[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37578 === (8))){
var inst_37450 = (state_37577[(22)]);
var inst_37437 = (state_37577[(8)]);
var inst_37450__$1 = cljs.core.seq.call(null,inst_37437);
var state_37577__$1 = (function (){var statearr_37659 = state_37577;
(statearr_37659[(22)] = inst_37450__$1);

return statearr_37659;
})();
if(inst_37450__$1){
var statearr_37660_37722 = state_37577__$1;
(statearr_37660_37722[(1)] = (10));

} else {
var statearr_37661_37723 = state_37577__$1;
(statearr_37661_37723[(1)] = (11));

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
});})(c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30537__auto__,c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto____0 = (function (){
var statearr_37662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37662[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto__);

(statearr_37662[(1)] = (1));

return statearr_37662;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto____1 = (function (state_37577){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_37577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e37663){if((e37663 instanceof Object)){
var ex__30541__auto__ = e37663;
var statearr_37664_37724 = state_37577;
(statearr_37664_37724[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37725 = state_37577;
state_37577 = G__37725;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto__ = function(state_37577){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto____1.call(this,state_37577);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30627__auto__ = (function (){var statearr_37665 = f__30626__auto__.call(null);
(statearr_37665[(6)] = c__30625__auto__);

return statearr_37665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto__,map__37422,map__37422__$1,opts,before_jsload,on_jsload,reload_dependents,map__37423,map__37423__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30625__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37728,link){
var map__37729 = p__37728;
var map__37729__$1 = ((((!((map__37729 == null)))?((((map__37729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37729):map__37729);
var file = cljs.core.get.call(null,map__37729__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37729,map__37729__$1,file){
return (function (p1__37726_SHARP_,p2__37727_SHARP_){
if(cljs.core._EQ_.call(null,p1__37726_SHARP_,p2__37727_SHARP_)){
return p1__37726_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37729,map__37729__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37732){
var map__37733 = p__37732;
var map__37733__$1 = ((((!((map__37733 == null)))?((((map__37733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37733):map__37733);
var match_length = cljs.core.get.call(null,map__37733__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37733__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37731_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37731_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37735_SHARP_,p2__37736_SHARP_){
return cljs.core.assoc.call(null,p1__37735_SHARP_,cljs.core.get.call(null,p2__37736_SHARP_,key),p2__37736_SHARP_);
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
var loaded_f_datas_37737 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37737);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37737);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37738,p__37739){
var map__37740 = p__37738;
var map__37740__$1 = ((((!((map__37740 == null)))?((((map__37740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37740):map__37740);
var on_cssload = cljs.core.get.call(null,map__37740__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37741 = p__37739;
var map__37741__$1 = ((((!((map__37741 == null)))?((((map__37741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37741):map__37741);
var files_msg = map__37741__$1;
var files = cljs.core.get.call(null,map__37741__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1514660153063
