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
var or__28286__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28286__auto__){
return or__28286__auto__;
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
var or__28286__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36725_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36725_SHARP_));
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
var seq__36726 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36727 = null;
var count__36728 = (0);
var i__36729 = (0);
while(true){
if((i__36729 < count__36728)){
var n = cljs.core._nth.call(null,chunk__36727,i__36729);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36730 = seq__36726;
var G__36731 = chunk__36727;
var G__36732 = count__36728;
var G__36733 = (i__36729 + (1));
seq__36726 = G__36730;
chunk__36727 = G__36731;
count__36728 = G__36732;
i__36729 = G__36733;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36726);
if(temp__4657__auto__){
var seq__36726__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36726__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__36726__$1);
var G__36734 = cljs.core.chunk_rest.call(null,seq__36726__$1);
var G__36735 = c__29125__auto__;
var G__36736 = cljs.core.count.call(null,c__29125__auto__);
var G__36737 = (0);
seq__36726 = G__36734;
chunk__36727 = G__36735;
count__36728 = G__36736;
i__36729 = G__36737;
continue;
} else {
var n = cljs.core.first.call(null,seq__36726__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36738 = cljs.core.next.call(null,seq__36726__$1);
var G__36739 = null;
var G__36740 = (0);
var G__36741 = (0);
seq__36726 = G__36738;
chunk__36727 = G__36739;
count__36728 = G__36740;
i__36729 = G__36741;
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

var seq__36751_36759 = cljs.core.seq.call(null,deps);
var chunk__36752_36760 = null;
var count__36753_36761 = (0);
var i__36754_36762 = (0);
while(true){
if((i__36754_36762 < count__36753_36761)){
var dep_36763 = cljs.core._nth.call(null,chunk__36752_36760,i__36754_36762);
topo_sort_helper_STAR_.call(null,dep_36763,(depth + (1)),state);

var G__36764 = seq__36751_36759;
var G__36765 = chunk__36752_36760;
var G__36766 = count__36753_36761;
var G__36767 = (i__36754_36762 + (1));
seq__36751_36759 = G__36764;
chunk__36752_36760 = G__36765;
count__36753_36761 = G__36766;
i__36754_36762 = G__36767;
continue;
} else {
var temp__4657__auto___36768 = cljs.core.seq.call(null,seq__36751_36759);
if(temp__4657__auto___36768){
var seq__36751_36769__$1 = temp__4657__auto___36768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36751_36769__$1)){
var c__29125__auto___36770 = cljs.core.chunk_first.call(null,seq__36751_36769__$1);
var G__36771 = cljs.core.chunk_rest.call(null,seq__36751_36769__$1);
var G__36772 = c__29125__auto___36770;
var G__36773 = cljs.core.count.call(null,c__29125__auto___36770);
var G__36774 = (0);
seq__36751_36759 = G__36771;
chunk__36752_36760 = G__36772;
count__36753_36761 = G__36773;
i__36754_36762 = G__36774;
continue;
} else {
var dep_36775 = cljs.core.first.call(null,seq__36751_36769__$1);
topo_sort_helper_STAR_.call(null,dep_36775,(depth + (1)),state);

var G__36776 = cljs.core.next.call(null,seq__36751_36769__$1);
var G__36777 = null;
var G__36778 = (0);
var G__36779 = (0);
seq__36751_36759 = G__36776;
chunk__36752_36760 = G__36777;
count__36753_36761 = G__36778;
i__36754_36762 = G__36779;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36755){
var vec__36756 = p__36755;
var seq__36757 = cljs.core.seq.call(null,vec__36756);
var first__36758 = cljs.core.first.call(null,seq__36757);
var seq__36757__$1 = cljs.core.next.call(null,seq__36757);
var x = first__36758;
var xs = seq__36757__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36756,seq__36757,first__36758,seq__36757__$1,x,xs,get_deps__$1){
return (function (p1__36742_SHARP_){
return clojure.set.difference.call(null,p1__36742_SHARP_,x);
});})(vec__36756,seq__36757,first__36758,seq__36757__$1,x,xs,get_deps__$1))
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
var seq__36780 = cljs.core.seq.call(null,provides);
var chunk__36781 = null;
var count__36782 = (0);
var i__36783 = (0);
while(true){
if((i__36783 < count__36782)){
var prov = cljs.core._nth.call(null,chunk__36781,i__36783);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36784_36792 = cljs.core.seq.call(null,requires);
var chunk__36785_36793 = null;
var count__36786_36794 = (0);
var i__36787_36795 = (0);
while(true){
if((i__36787_36795 < count__36786_36794)){
var req_36796 = cljs.core._nth.call(null,chunk__36785_36793,i__36787_36795);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36796,prov);

var G__36797 = seq__36784_36792;
var G__36798 = chunk__36785_36793;
var G__36799 = count__36786_36794;
var G__36800 = (i__36787_36795 + (1));
seq__36784_36792 = G__36797;
chunk__36785_36793 = G__36798;
count__36786_36794 = G__36799;
i__36787_36795 = G__36800;
continue;
} else {
var temp__4657__auto___36801 = cljs.core.seq.call(null,seq__36784_36792);
if(temp__4657__auto___36801){
var seq__36784_36802__$1 = temp__4657__auto___36801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36784_36802__$1)){
var c__29125__auto___36803 = cljs.core.chunk_first.call(null,seq__36784_36802__$1);
var G__36804 = cljs.core.chunk_rest.call(null,seq__36784_36802__$1);
var G__36805 = c__29125__auto___36803;
var G__36806 = cljs.core.count.call(null,c__29125__auto___36803);
var G__36807 = (0);
seq__36784_36792 = G__36804;
chunk__36785_36793 = G__36805;
count__36786_36794 = G__36806;
i__36787_36795 = G__36807;
continue;
} else {
var req_36808 = cljs.core.first.call(null,seq__36784_36802__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36808,prov);

var G__36809 = cljs.core.next.call(null,seq__36784_36802__$1);
var G__36810 = null;
var G__36811 = (0);
var G__36812 = (0);
seq__36784_36792 = G__36809;
chunk__36785_36793 = G__36810;
count__36786_36794 = G__36811;
i__36787_36795 = G__36812;
continue;
}
} else {
}
}
break;
}

var G__36813 = seq__36780;
var G__36814 = chunk__36781;
var G__36815 = count__36782;
var G__36816 = (i__36783 + (1));
seq__36780 = G__36813;
chunk__36781 = G__36814;
count__36782 = G__36815;
i__36783 = G__36816;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36780);
if(temp__4657__auto__){
var seq__36780__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36780__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__36780__$1);
var G__36817 = cljs.core.chunk_rest.call(null,seq__36780__$1);
var G__36818 = c__29125__auto__;
var G__36819 = cljs.core.count.call(null,c__29125__auto__);
var G__36820 = (0);
seq__36780 = G__36817;
chunk__36781 = G__36818;
count__36782 = G__36819;
i__36783 = G__36820;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36780__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36788_36821 = cljs.core.seq.call(null,requires);
var chunk__36789_36822 = null;
var count__36790_36823 = (0);
var i__36791_36824 = (0);
while(true){
if((i__36791_36824 < count__36790_36823)){
var req_36825 = cljs.core._nth.call(null,chunk__36789_36822,i__36791_36824);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36825,prov);

var G__36826 = seq__36788_36821;
var G__36827 = chunk__36789_36822;
var G__36828 = count__36790_36823;
var G__36829 = (i__36791_36824 + (1));
seq__36788_36821 = G__36826;
chunk__36789_36822 = G__36827;
count__36790_36823 = G__36828;
i__36791_36824 = G__36829;
continue;
} else {
var temp__4657__auto___36830__$1 = cljs.core.seq.call(null,seq__36788_36821);
if(temp__4657__auto___36830__$1){
var seq__36788_36831__$1 = temp__4657__auto___36830__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36788_36831__$1)){
var c__29125__auto___36832 = cljs.core.chunk_first.call(null,seq__36788_36831__$1);
var G__36833 = cljs.core.chunk_rest.call(null,seq__36788_36831__$1);
var G__36834 = c__29125__auto___36832;
var G__36835 = cljs.core.count.call(null,c__29125__auto___36832);
var G__36836 = (0);
seq__36788_36821 = G__36833;
chunk__36789_36822 = G__36834;
count__36790_36823 = G__36835;
i__36791_36824 = G__36836;
continue;
} else {
var req_36837 = cljs.core.first.call(null,seq__36788_36831__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36837,prov);

var G__36838 = cljs.core.next.call(null,seq__36788_36831__$1);
var G__36839 = null;
var G__36840 = (0);
var G__36841 = (0);
seq__36788_36821 = G__36838;
chunk__36789_36822 = G__36839;
count__36790_36823 = G__36840;
i__36791_36824 = G__36841;
continue;
}
} else {
}
}
break;
}

var G__36842 = cljs.core.next.call(null,seq__36780__$1);
var G__36843 = null;
var G__36844 = (0);
var G__36845 = (0);
seq__36780 = G__36842;
chunk__36781 = G__36843;
count__36782 = G__36844;
i__36783 = G__36845;
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
var seq__36846_36850 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36847_36851 = null;
var count__36848_36852 = (0);
var i__36849_36853 = (0);
while(true){
if((i__36849_36853 < count__36848_36852)){
var ns_36854 = cljs.core._nth.call(null,chunk__36847_36851,i__36849_36853);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36854);

var G__36855 = seq__36846_36850;
var G__36856 = chunk__36847_36851;
var G__36857 = count__36848_36852;
var G__36858 = (i__36849_36853 + (1));
seq__36846_36850 = G__36855;
chunk__36847_36851 = G__36856;
count__36848_36852 = G__36857;
i__36849_36853 = G__36858;
continue;
} else {
var temp__4657__auto___36859 = cljs.core.seq.call(null,seq__36846_36850);
if(temp__4657__auto___36859){
var seq__36846_36860__$1 = temp__4657__auto___36859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36846_36860__$1)){
var c__29125__auto___36861 = cljs.core.chunk_first.call(null,seq__36846_36860__$1);
var G__36862 = cljs.core.chunk_rest.call(null,seq__36846_36860__$1);
var G__36863 = c__29125__auto___36861;
var G__36864 = cljs.core.count.call(null,c__29125__auto___36861);
var G__36865 = (0);
seq__36846_36850 = G__36862;
chunk__36847_36851 = G__36863;
count__36848_36852 = G__36864;
i__36849_36853 = G__36865;
continue;
} else {
var ns_36866 = cljs.core.first.call(null,seq__36846_36860__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36866);

var G__36867 = cljs.core.next.call(null,seq__36846_36860__$1);
var G__36868 = null;
var G__36869 = (0);
var G__36870 = (0);
seq__36846_36850 = G__36867;
chunk__36847_36851 = G__36868;
count__36848_36852 = G__36869;
i__36849_36853 = G__36870;
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
goog.require_figwheel_backup_ = (function (){var or__28286__auto__ = goog.require__;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
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
var G__36871__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36872__i = 0, G__36872__a = new Array(arguments.length -  0);
while (G__36872__i < G__36872__a.length) {G__36872__a[G__36872__i] = arguments[G__36872__i + 0]; ++G__36872__i;}
  args = new cljs.core.IndexedSeq(G__36872__a,0,null);
} 
return G__36871__delegate.call(this,args);};
G__36871.cljs$lang$maxFixedArity = 0;
G__36871.cljs$lang$applyTo = (function (arglist__36873){
var args = cljs.core.seq(arglist__36873);
return G__36871__delegate(args);
});
G__36871.cljs$core$IFn$_invoke$arity$variadic = G__36871__delegate;
return G__36871;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36874_SHARP_,p2__36875_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36874_SHARP_)].join('')),p2__36875_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36876_SHARP_,p2__36877_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36876_SHARP_)].join(''),p2__36877_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36878 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36878.addCallback(((function (G__36878){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36878))
);

G__36878.addErrback(((function (G__36878){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36878))
);

return G__36878;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36879 = cljs.core._EQ_;
var expr__36880 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36879.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36880))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36879,expr__36880){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36879,expr__36880))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36879,expr__36880){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36882){if((e36882 instanceof Error)){
var e = e36882;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36882;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36879,expr__36880))
} else {
if(cljs.core.truth_(pred__36879.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36880))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36879.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36880))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36879.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36880))){
return ((function (pred__36879,expr__36880){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36883){if((e36883 instanceof Error)){
var e = e36883;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36883;

}
}})());
});
;})(pred__36879,expr__36880))
} else {
return ((function (pred__36879,expr__36880){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36879,expr__36880))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36884,callback){
var map__36885 = p__36884;
var map__36885__$1 = ((((!((map__36885 == null)))?((((map__36885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36885):map__36885);
var file_msg = map__36885__$1;
var request_url = cljs.core.get.call(null,map__36885__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36885,map__36885__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36885,map__36885__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__33555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto__){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto__){
return (function (state_36909){
var state_val_36910 = (state_36909[(1)]);
if((state_val_36910 === (7))){
var inst_36905 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
var statearr_36911_36928 = state_36909__$1;
(statearr_36911_36928[(2)] = inst_36905);

(statearr_36911_36928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (1))){
var state_36909__$1 = state_36909;
var statearr_36912_36929 = state_36909__$1;
(statearr_36912_36929[(2)] = null);

(statearr_36912_36929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (4))){
var inst_36889 = (state_36909[(7)]);
var inst_36889__$1 = (state_36909[(2)]);
var state_36909__$1 = (function (){var statearr_36913 = state_36909;
(statearr_36913[(7)] = inst_36889__$1);

return statearr_36913;
})();
if(cljs.core.truth_(inst_36889__$1)){
var statearr_36914_36930 = state_36909__$1;
(statearr_36914_36930[(1)] = (5));

} else {
var statearr_36915_36931 = state_36909__$1;
(statearr_36915_36931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (6))){
var state_36909__$1 = state_36909;
var statearr_36916_36932 = state_36909__$1;
(statearr_36916_36932[(2)] = null);

(statearr_36916_36932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (3))){
var inst_36907 = (state_36909[(2)]);
var state_36909__$1 = state_36909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36909__$1,inst_36907);
} else {
if((state_val_36910 === (2))){
var state_36909__$1 = state_36909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36909__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36910 === (11))){
var inst_36901 = (state_36909[(2)]);
var state_36909__$1 = (function (){var statearr_36917 = state_36909;
(statearr_36917[(8)] = inst_36901);

return statearr_36917;
})();
var statearr_36918_36933 = state_36909__$1;
(statearr_36918_36933[(2)] = null);

(statearr_36918_36933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (9))){
var inst_36893 = (state_36909[(9)]);
var inst_36895 = (state_36909[(10)]);
var inst_36897 = inst_36895.call(null,inst_36893);
var state_36909__$1 = state_36909;
var statearr_36919_36934 = state_36909__$1;
(statearr_36919_36934[(2)] = inst_36897);

(statearr_36919_36934[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (5))){
var inst_36889 = (state_36909[(7)]);
var inst_36891 = figwheel.client.file_reloading.blocking_load.call(null,inst_36889);
var state_36909__$1 = state_36909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36909__$1,(8),inst_36891);
} else {
if((state_val_36910 === (10))){
var inst_36893 = (state_36909[(9)]);
var inst_36899 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36893);
var state_36909__$1 = state_36909;
var statearr_36920_36935 = state_36909__$1;
(statearr_36920_36935[(2)] = inst_36899);

(statearr_36920_36935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36910 === (8))){
var inst_36895 = (state_36909[(10)]);
var inst_36889 = (state_36909[(7)]);
var inst_36893 = (state_36909[(2)]);
var inst_36894 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36895__$1 = cljs.core.get.call(null,inst_36894,inst_36889);
var state_36909__$1 = (function (){var statearr_36921 = state_36909;
(statearr_36921[(9)] = inst_36893);

(statearr_36921[(10)] = inst_36895__$1);

return statearr_36921;
})();
if(cljs.core.truth_(inst_36895__$1)){
var statearr_36922_36936 = state_36909__$1;
(statearr_36922_36936[(1)] = (9));

} else {
var statearr_36923_36937 = state_36909__$1;
(statearr_36923_36937[(1)] = (10));

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
});})(c__33555__auto__))
;
return ((function (switch__33467__auto__,c__33555__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33468__auto__ = null;
var figwheel$client$file_reloading$state_machine__33468__auto____0 = (function (){
var statearr_36924 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36924[(0)] = figwheel$client$file_reloading$state_machine__33468__auto__);

(statearr_36924[(1)] = (1));

return statearr_36924;
});
var figwheel$client$file_reloading$state_machine__33468__auto____1 = (function (state_36909){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_36909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e36925){if((e36925 instanceof Object)){
var ex__33471__auto__ = e36925;
var statearr_36926_36938 = state_36909;
(statearr_36926_36938[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36939 = state_36909;
state_36909 = G__36939;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33468__auto__ = function(state_36909){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33468__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33468__auto____1.call(this,state_36909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33468__auto____0;
figwheel$client$file_reloading$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33468__auto____1;
return figwheel$client$file_reloading$state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto__))
})();
var state__33557__auto__ = (function (){var statearr_36927 = f__33556__auto__.call(null);
(statearr_36927[(6)] = c__33555__auto__);

return statearr_36927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto__))
);

return c__33555__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36940,callback){
var map__36941 = p__36940;
var map__36941__$1 = ((((!((map__36941 == null)))?((((map__36941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36941):map__36941);
var file_msg = map__36941__$1;
var namespace = cljs.core.get.call(null,map__36941__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36941,map__36941__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36941,map__36941__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36943){
var map__36944 = p__36943;
var map__36944__$1 = ((((!((map__36944 == null)))?((((map__36944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36944):map__36944);
var file_msg = map__36944__$1;
var namespace = cljs.core.get.call(null,map__36944__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36946){
var map__36947 = p__36946;
var map__36947__$1 = ((((!((map__36947 == null)))?((((map__36947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36947):map__36947);
var file_msg = map__36947__$1;
var namespace = cljs.core.get.call(null,map__36947__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28274__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28274__auto__){
var or__28286__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28274__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36949,callback){
var map__36950 = p__36949;
var map__36950__$1 = ((((!((map__36950 == null)))?((((map__36950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36950):map__36950);
var file_msg = map__36950__$1;
var request_url = cljs.core.get.call(null,map__36950__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36950__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33555__auto___37000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___37000,out){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___37000,out){
return (function (state_36985){
var state_val_36986 = (state_36985[(1)]);
if((state_val_36986 === (1))){
var inst_36959 = cljs.core.seq.call(null,files);
var inst_36960 = cljs.core.first.call(null,inst_36959);
var inst_36961 = cljs.core.next.call(null,inst_36959);
var inst_36962 = files;
var state_36985__$1 = (function (){var statearr_36987 = state_36985;
(statearr_36987[(7)] = inst_36962);

(statearr_36987[(8)] = inst_36961);

(statearr_36987[(9)] = inst_36960);

return statearr_36987;
})();
var statearr_36988_37001 = state_36985__$1;
(statearr_36988_37001[(2)] = null);

(statearr_36988_37001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (2))){
var inst_36962 = (state_36985[(7)]);
var inst_36968 = (state_36985[(10)]);
var inst_36967 = cljs.core.seq.call(null,inst_36962);
var inst_36968__$1 = cljs.core.first.call(null,inst_36967);
var inst_36969 = cljs.core.next.call(null,inst_36967);
var inst_36970 = (inst_36968__$1 == null);
var inst_36971 = cljs.core.not.call(null,inst_36970);
var state_36985__$1 = (function (){var statearr_36989 = state_36985;
(statearr_36989[(11)] = inst_36969);

(statearr_36989[(10)] = inst_36968__$1);

return statearr_36989;
})();
if(inst_36971){
var statearr_36990_37002 = state_36985__$1;
(statearr_36990_37002[(1)] = (4));

} else {
var statearr_36991_37003 = state_36985__$1;
(statearr_36991_37003[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (3))){
var inst_36983 = (state_36985[(2)]);
var state_36985__$1 = state_36985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36985__$1,inst_36983);
} else {
if((state_val_36986 === (4))){
var inst_36968 = (state_36985[(10)]);
var inst_36973 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36968);
var state_36985__$1 = state_36985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36985__$1,(7),inst_36973);
} else {
if((state_val_36986 === (5))){
var inst_36979 = cljs.core.async.close_BANG_.call(null,out);
var state_36985__$1 = state_36985;
var statearr_36992_37004 = state_36985__$1;
(statearr_36992_37004[(2)] = inst_36979);

(statearr_36992_37004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (6))){
var inst_36981 = (state_36985[(2)]);
var state_36985__$1 = state_36985;
var statearr_36993_37005 = state_36985__$1;
(statearr_36993_37005[(2)] = inst_36981);

(statearr_36993_37005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36986 === (7))){
var inst_36969 = (state_36985[(11)]);
var inst_36975 = (state_36985[(2)]);
var inst_36976 = cljs.core.async.put_BANG_.call(null,out,inst_36975);
var inst_36962 = inst_36969;
var state_36985__$1 = (function (){var statearr_36994 = state_36985;
(statearr_36994[(12)] = inst_36976);

(statearr_36994[(7)] = inst_36962);

return statearr_36994;
})();
var statearr_36995_37006 = state_36985__$1;
(statearr_36995_37006[(2)] = null);

(statearr_36995_37006[(1)] = (2));


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
});})(c__33555__auto___37000,out))
;
return ((function (switch__33467__auto__,c__33555__auto___37000,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33468__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33468__auto____0 = (function (){
var statearr_36996 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36996[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33468__auto__);

(statearr_36996[(1)] = (1));

return statearr_36996;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33468__auto____1 = (function (state_36985){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_36985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e36997){if((e36997 instanceof Object)){
var ex__33471__auto__ = e36997;
var statearr_36998_37007 = state_36985;
(statearr_36998_37007[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37008 = state_36985;
state_36985 = G__37008;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33468__auto__ = function(state_36985){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33468__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33468__auto____1.call(this,state_36985);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33468__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33468__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___37000,out))
})();
var state__33557__auto__ = (function (){var statearr_36999 = f__33556__auto__.call(null);
(statearr_36999[(6)] = c__33555__auto___37000);

return statearr_36999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___37000,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37009,opts){
var map__37010 = p__37009;
var map__37010__$1 = ((((!((map__37010 == null)))?((((map__37010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37010):map__37010);
var eval_body = cljs.core.get.call(null,map__37010__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37010__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28274__auto__ = eval_body;
if(cljs.core.truth_(and__28274__auto__)){
return typeof eval_body === 'string';
} else {
return and__28274__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37012){var e = e37012;
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
return (function (p1__37013_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37013_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37014){
var vec__37015 = p__37014;
var k = cljs.core.nth.call(null,vec__37015,(0),null);
var v = cljs.core.nth.call(null,vec__37015,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37018){
var vec__37019 = p__37018;
var k = cljs.core.nth.call(null,vec__37019,(0),null);
var v = cljs.core.nth.call(null,vec__37019,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37025,p__37026){
var map__37027 = p__37025;
var map__37027__$1 = ((((!((map__37027 == null)))?((((map__37027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37027):map__37027);
var opts = map__37027__$1;
var before_jsload = cljs.core.get.call(null,map__37027__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37027__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37027__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37028 = p__37026;
var map__37028__$1 = ((((!((map__37028 == null)))?((((map__37028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37028):map__37028);
var msg = map__37028__$1;
var files = cljs.core.get.call(null,map__37028__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37028__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37028__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37182){
var state_val_37183 = (state_37182[(1)]);
if((state_val_37183 === (7))){
var inst_37042 = (state_37182[(7)]);
var inst_37044 = (state_37182[(8)]);
var inst_37043 = (state_37182[(9)]);
var inst_37045 = (state_37182[(10)]);
var inst_37050 = cljs.core._nth.call(null,inst_37043,inst_37045);
var inst_37051 = figwheel.client.file_reloading.eval_body.call(null,inst_37050,opts);
var inst_37052 = (inst_37045 + (1));
var tmp37184 = inst_37042;
var tmp37185 = inst_37044;
var tmp37186 = inst_37043;
var inst_37042__$1 = tmp37184;
var inst_37043__$1 = tmp37186;
var inst_37044__$1 = tmp37185;
var inst_37045__$1 = inst_37052;
var state_37182__$1 = (function (){var statearr_37187 = state_37182;
(statearr_37187[(7)] = inst_37042__$1);

(statearr_37187[(8)] = inst_37044__$1);

(statearr_37187[(9)] = inst_37043__$1);

(statearr_37187[(10)] = inst_37045__$1);

(statearr_37187[(11)] = inst_37051);

return statearr_37187;
})();
var statearr_37188_37271 = state_37182__$1;
(statearr_37188_37271[(2)] = null);

(statearr_37188_37271[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (20))){
var inst_37085 = (state_37182[(12)]);
var inst_37093 = figwheel.client.file_reloading.sort_files.call(null,inst_37085);
var state_37182__$1 = state_37182;
var statearr_37189_37272 = state_37182__$1;
(statearr_37189_37272[(2)] = inst_37093);

(statearr_37189_37272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (27))){
var state_37182__$1 = state_37182;
var statearr_37190_37273 = state_37182__$1;
(statearr_37190_37273[(2)] = null);

(statearr_37190_37273[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (1))){
var inst_37034 = (state_37182[(13)]);
var inst_37031 = before_jsload.call(null,files);
var inst_37032 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37033 = (function (){return ((function (inst_37034,inst_37031,inst_37032,state_val_37183,c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37022_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37022_SHARP_);
});
;})(inst_37034,inst_37031,inst_37032,state_val_37183,c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37034__$1 = cljs.core.filter.call(null,inst_37033,files);
var inst_37035 = cljs.core.not_empty.call(null,inst_37034__$1);
var state_37182__$1 = (function (){var statearr_37191 = state_37182;
(statearr_37191[(13)] = inst_37034__$1);

(statearr_37191[(14)] = inst_37032);

(statearr_37191[(15)] = inst_37031);

return statearr_37191;
})();
if(cljs.core.truth_(inst_37035)){
var statearr_37192_37274 = state_37182__$1;
(statearr_37192_37274[(1)] = (2));

} else {
var statearr_37193_37275 = state_37182__$1;
(statearr_37193_37275[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (24))){
var state_37182__$1 = state_37182;
var statearr_37194_37276 = state_37182__$1;
(statearr_37194_37276[(2)] = null);

(statearr_37194_37276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (39))){
var inst_37135 = (state_37182[(16)]);
var state_37182__$1 = state_37182;
var statearr_37195_37277 = state_37182__$1;
(statearr_37195_37277[(2)] = inst_37135);

(statearr_37195_37277[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (46))){
var inst_37177 = (state_37182[(2)]);
var state_37182__$1 = state_37182;
var statearr_37196_37278 = state_37182__$1;
(statearr_37196_37278[(2)] = inst_37177);

(statearr_37196_37278[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (4))){
var inst_37079 = (state_37182[(2)]);
var inst_37080 = cljs.core.List.EMPTY;
var inst_37081 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37080);
var inst_37082 = (function (){return ((function (inst_37079,inst_37080,inst_37081,state_val_37183,c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37023_SHARP_){
var and__28274__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37023_SHARP_);
if(cljs.core.truth_(and__28274__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37023_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37023_SHARP_)));
} else {
return and__28274__auto__;
}
});
;})(inst_37079,inst_37080,inst_37081,state_val_37183,c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37083 = cljs.core.filter.call(null,inst_37082,files);
var inst_37084 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37085 = cljs.core.concat.call(null,inst_37083,inst_37084);
var state_37182__$1 = (function (){var statearr_37197 = state_37182;
(statearr_37197[(12)] = inst_37085);

(statearr_37197[(17)] = inst_37079);

(statearr_37197[(18)] = inst_37081);

return statearr_37197;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37198_37279 = state_37182__$1;
(statearr_37198_37279[(1)] = (16));

} else {
var statearr_37199_37280 = state_37182__$1;
(statearr_37199_37280[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (15))){
var inst_37069 = (state_37182[(2)]);
var state_37182__$1 = state_37182;
var statearr_37200_37281 = state_37182__$1;
(statearr_37200_37281[(2)] = inst_37069);

(statearr_37200_37281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (21))){
var inst_37095 = (state_37182[(19)]);
var inst_37095__$1 = (state_37182[(2)]);
var inst_37096 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37095__$1);
var state_37182__$1 = (function (){var statearr_37201 = state_37182;
(statearr_37201[(19)] = inst_37095__$1);

return statearr_37201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37182__$1,(22),inst_37096);
} else {
if((state_val_37183 === (31))){
var inst_37180 = (state_37182[(2)]);
var state_37182__$1 = state_37182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37182__$1,inst_37180);
} else {
if((state_val_37183 === (32))){
var inst_37135 = (state_37182[(16)]);
var inst_37140 = inst_37135.cljs$lang$protocol_mask$partition0$;
var inst_37141 = (inst_37140 & (64));
var inst_37142 = inst_37135.cljs$core$ISeq$;
var inst_37143 = (cljs.core.PROTOCOL_SENTINEL === inst_37142);
var inst_37144 = (inst_37141) || (inst_37143);
var state_37182__$1 = state_37182;
if(cljs.core.truth_(inst_37144)){
var statearr_37202_37282 = state_37182__$1;
(statearr_37202_37282[(1)] = (35));

} else {
var statearr_37203_37283 = state_37182__$1;
(statearr_37203_37283[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (40))){
var inst_37157 = (state_37182[(20)]);
var inst_37156 = (state_37182[(2)]);
var inst_37157__$1 = cljs.core.get.call(null,inst_37156,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37158 = cljs.core.get.call(null,inst_37156,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37159 = cljs.core.not_empty.call(null,inst_37157__$1);
var state_37182__$1 = (function (){var statearr_37204 = state_37182;
(statearr_37204[(20)] = inst_37157__$1);

(statearr_37204[(21)] = inst_37158);

return statearr_37204;
})();
if(cljs.core.truth_(inst_37159)){
var statearr_37205_37284 = state_37182__$1;
(statearr_37205_37284[(1)] = (41));

} else {
var statearr_37206_37285 = state_37182__$1;
(statearr_37206_37285[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (33))){
var state_37182__$1 = state_37182;
var statearr_37207_37286 = state_37182__$1;
(statearr_37207_37286[(2)] = false);

(statearr_37207_37286[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (13))){
var inst_37055 = (state_37182[(22)]);
var inst_37059 = cljs.core.chunk_first.call(null,inst_37055);
var inst_37060 = cljs.core.chunk_rest.call(null,inst_37055);
var inst_37061 = cljs.core.count.call(null,inst_37059);
var inst_37042 = inst_37060;
var inst_37043 = inst_37059;
var inst_37044 = inst_37061;
var inst_37045 = (0);
var state_37182__$1 = (function (){var statearr_37208 = state_37182;
(statearr_37208[(7)] = inst_37042);

(statearr_37208[(8)] = inst_37044);

(statearr_37208[(9)] = inst_37043);

(statearr_37208[(10)] = inst_37045);

return statearr_37208;
})();
var statearr_37209_37287 = state_37182__$1;
(statearr_37209_37287[(2)] = null);

(statearr_37209_37287[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (22))){
var inst_37095 = (state_37182[(19)]);
var inst_37099 = (state_37182[(23)]);
var inst_37098 = (state_37182[(24)]);
var inst_37103 = (state_37182[(25)]);
var inst_37098__$1 = (state_37182[(2)]);
var inst_37099__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37098__$1);
var inst_37100 = (function (){var all_files = inst_37095;
var res_SINGLEQUOTE_ = inst_37098__$1;
var res = inst_37099__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37095,inst_37099,inst_37098,inst_37103,inst_37098__$1,inst_37099__$1,state_val_37183,c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37024_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37024_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37095,inst_37099,inst_37098,inst_37103,inst_37098__$1,inst_37099__$1,state_val_37183,c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37101 = cljs.core.filter.call(null,inst_37100,inst_37098__$1);
var inst_37102 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37103__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37102);
var inst_37104 = cljs.core.not_empty.call(null,inst_37103__$1);
var state_37182__$1 = (function (){var statearr_37210 = state_37182;
(statearr_37210[(26)] = inst_37101);

(statearr_37210[(23)] = inst_37099__$1);

(statearr_37210[(24)] = inst_37098__$1);

(statearr_37210[(25)] = inst_37103__$1);

return statearr_37210;
})();
if(cljs.core.truth_(inst_37104)){
var statearr_37211_37288 = state_37182__$1;
(statearr_37211_37288[(1)] = (23));

} else {
var statearr_37212_37289 = state_37182__$1;
(statearr_37212_37289[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (36))){
var state_37182__$1 = state_37182;
var statearr_37213_37290 = state_37182__$1;
(statearr_37213_37290[(2)] = false);

(statearr_37213_37290[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (41))){
var inst_37157 = (state_37182[(20)]);
var inst_37161 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37162 = cljs.core.map.call(null,inst_37161,inst_37157);
var inst_37163 = cljs.core.pr_str.call(null,inst_37162);
var inst_37164 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37163)].join('');
var inst_37165 = figwheel.client.utils.log.call(null,inst_37164);
var state_37182__$1 = state_37182;
var statearr_37214_37291 = state_37182__$1;
(statearr_37214_37291[(2)] = inst_37165);

(statearr_37214_37291[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (43))){
var inst_37158 = (state_37182[(21)]);
var inst_37168 = (state_37182[(2)]);
var inst_37169 = cljs.core.not_empty.call(null,inst_37158);
var state_37182__$1 = (function (){var statearr_37215 = state_37182;
(statearr_37215[(27)] = inst_37168);

return statearr_37215;
})();
if(cljs.core.truth_(inst_37169)){
var statearr_37216_37292 = state_37182__$1;
(statearr_37216_37292[(1)] = (44));

} else {
var statearr_37217_37293 = state_37182__$1;
(statearr_37217_37293[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (29))){
var inst_37135 = (state_37182[(16)]);
var inst_37095 = (state_37182[(19)]);
var inst_37101 = (state_37182[(26)]);
var inst_37099 = (state_37182[(23)]);
var inst_37098 = (state_37182[(24)]);
var inst_37103 = (state_37182[(25)]);
var inst_37131 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37134 = (function (){var all_files = inst_37095;
var res_SINGLEQUOTE_ = inst_37098;
var res = inst_37099;
var files_not_loaded = inst_37101;
var dependencies_that_loaded = inst_37103;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37135,inst_37095,inst_37101,inst_37099,inst_37098,inst_37103,inst_37131,state_val_37183,c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37133){
var map__37218 = p__37133;
var map__37218__$1 = ((((!((map__37218 == null)))?((((map__37218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37218):map__37218);
var namespace = cljs.core.get.call(null,map__37218__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37135,inst_37095,inst_37101,inst_37099,inst_37098,inst_37103,inst_37131,state_val_37183,c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37135__$1 = cljs.core.group_by.call(null,inst_37134,inst_37101);
var inst_37137 = (inst_37135__$1 == null);
var inst_37138 = cljs.core.not.call(null,inst_37137);
var state_37182__$1 = (function (){var statearr_37220 = state_37182;
(statearr_37220[(16)] = inst_37135__$1);

(statearr_37220[(28)] = inst_37131);

return statearr_37220;
})();
if(inst_37138){
var statearr_37221_37294 = state_37182__$1;
(statearr_37221_37294[(1)] = (32));

} else {
var statearr_37222_37295 = state_37182__$1;
(statearr_37222_37295[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (44))){
var inst_37158 = (state_37182[(21)]);
var inst_37171 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37158);
var inst_37172 = cljs.core.pr_str.call(null,inst_37171);
var inst_37173 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37172)].join('');
var inst_37174 = figwheel.client.utils.log.call(null,inst_37173);
var state_37182__$1 = state_37182;
var statearr_37223_37296 = state_37182__$1;
(statearr_37223_37296[(2)] = inst_37174);

(statearr_37223_37296[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (6))){
var inst_37076 = (state_37182[(2)]);
var state_37182__$1 = state_37182;
var statearr_37224_37297 = state_37182__$1;
(statearr_37224_37297[(2)] = inst_37076);

(statearr_37224_37297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (28))){
var inst_37101 = (state_37182[(26)]);
var inst_37128 = (state_37182[(2)]);
var inst_37129 = cljs.core.not_empty.call(null,inst_37101);
var state_37182__$1 = (function (){var statearr_37225 = state_37182;
(statearr_37225[(29)] = inst_37128);

return statearr_37225;
})();
if(cljs.core.truth_(inst_37129)){
var statearr_37226_37298 = state_37182__$1;
(statearr_37226_37298[(1)] = (29));

} else {
var statearr_37227_37299 = state_37182__$1;
(statearr_37227_37299[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (25))){
var inst_37099 = (state_37182[(23)]);
var inst_37115 = (state_37182[(2)]);
var inst_37116 = cljs.core.not_empty.call(null,inst_37099);
var state_37182__$1 = (function (){var statearr_37228 = state_37182;
(statearr_37228[(30)] = inst_37115);

return statearr_37228;
})();
if(cljs.core.truth_(inst_37116)){
var statearr_37229_37300 = state_37182__$1;
(statearr_37229_37300[(1)] = (26));

} else {
var statearr_37230_37301 = state_37182__$1;
(statearr_37230_37301[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (34))){
var inst_37151 = (state_37182[(2)]);
var state_37182__$1 = state_37182;
if(cljs.core.truth_(inst_37151)){
var statearr_37231_37302 = state_37182__$1;
(statearr_37231_37302[(1)] = (38));

} else {
var statearr_37232_37303 = state_37182__$1;
(statearr_37232_37303[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (17))){
var state_37182__$1 = state_37182;
var statearr_37233_37304 = state_37182__$1;
(statearr_37233_37304[(2)] = recompile_dependents);

(statearr_37233_37304[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (3))){
var state_37182__$1 = state_37182;
var statearr_37234_37305 = state_37182__$1;
(statearr_37234_37305[(2)] = null);

(statearr_37234_37305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (12))){
var inst_37072 = (state_37182[(2)]);
var state_37182__$1 = state_37182;
var statearr_37235_37306 = state_37182__$1;
(statearr_37235_37306[(2)] = inst_37072);

(statearr_37235_37306[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (2))){
var inst_37034 = (state_37182[(13)]);
var inst_37041 = cljs.core.seq.call(null,inst_37034);
var inst_37042 = inst_37041;
var inst_37043 = null;
var inst_37044 = (0);
var inst_37045 = (0);
var state_37182__$1 = (function (){var statearr_37236 = state_37182;
(statearr_37236[(7)] = inst_37042);

(statearr_37236[(8)] = inst_37044);

(statearr_37236[(9)] = inst_37043);

(statearr_37236[(10)] = inst_37045);

return statearr_37236;
})();
var statearr_37237_37307 = state_37182__$1;
(statearr_37237_37307[(2)] = null);

(statearr_37237_37307[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (23))){
var inst_37095 = (state_37182[(19)]);
var inst_37101 = (state_37182[(26)]);
var inst_37099 = (state_37182[(23)]);
var inst_37098 = (state_37182[(24)]);
var inst_37103 = (state_37182[(25)]);
var inst_37106 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37108 = (function (){var all_files = inst_37095;
var res_SINGLEQUOTE_ = inst_37098;
var res = inst_37099;
var files_not_loaded = inst_37101;
var dependencies_that_loaded = inst_37103;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37095,inst_37101,inst_37099,inst_37098,inst_37103,inst_37106,state_val_37183,c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37107){
var map__37238 = p__37107;
var map__37238__$1 = ((((!((map__37238 == null)))?((((map__37238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37238):map__37238);
var request_url = cljs.core.get.call(null,map__37238__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37095,inst_37101,inst_37099,inst_37098,inst_37103,inst_37106,state_val_37183,c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37109 = cljs.core.reverse.call(null,inst_37103);
var inst_37110 = cljs.core.map.call(null,inst_37108,inst_37109);
var inst_37111 = cljs.core.pr_str.call(null,inst_37110);
var inst_37112 = figwheel.client.utils.log.call(null,inst_37111);
var state_37182__$1 = (function (){var statearr_37240 = state_37182;
(statearr_37240[(31)] = inst_37106);

return statearr_37240;
})();
var statearr_37241_37308 = state_37182__$1;
(statearr_37241_37308[(2)] = inst_37112);

(statearr_37241_37308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (35))){
var state_37182__$1 = state_37182;
var statearr_37242_37309 = state_37182__$1;
(statearr_37242_37309[(2)] = true);

(statearr_37242_37309[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (19))){
var inst_37085 = (state_37182[(12)]);
var inst_37091 = figwheel.client.file_reloading.expand_files.call(null,inst_37085);
var state_37182__$1 = state_37182;
var statearr_37243_37310 = state_37182__$1;
(statearr_37243_37310[(2)] = inst_37091);

(statearr_37243_37310[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (11))){
var state_37182__$1 = state_37182;
var statearr_37244_37311 = state_37182__$1;
(statearr_37244_37311[(2)] = null);

(statearr_37244_37311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (9))){
var inst_37074 = (state_37182[(2)]);
var state_37182__$1 = state_37182;
var statearr_37245_37312 = state_37182__$1;
(statearr_37245_37312[(2)] = inst_37074);

(statearr_37245_37312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (5))){
var inst_37044 = (state_37182[(8)]);
var inst_37045 = (state_37182[(10)]);
var inst_37047 = (inst_37045 < inst_37044);
var inst_37048 = inst_37047;
var state_37182__$1 = state_37182;
if(cljs.core.truth_(inst_37048)){
var statearr_37246_37313 = state_37182__$1;
(statearr_37246_37313[(1)] = (7));

} else {
var statearr_37247_37314 = state_37182__$1;
(statearr_37247_37314[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (14))){
var inst_37055 = (state_37182[(22)]);
var inst_37064 = cljs.core.first.call(null,inst_37055);
var inst_37065 = figwheel.client.file_reloading.eval_body.call(null,inst_37064,opts);
var inst_37066 = cljs.core.next.call(null,inst_37055);
var inst_37042 = inst_37066;
var inst_37043 = null;
var inst_37044 = (0);
var inst_37045 = (0);
var state_37182__$1 = (function (){var statearr_37248 = state_37182;
(statearr_37248[(32)] = inst_37065);

(statearr_37248[(7)] = inst_37042);

(statearr_37248[(8)] = inst_37044);

(statearr_37248[(9)] = inst_37043);

(statearr_37248[(10)] = inst_37045);

return statearr_37248;
})();
var statearr_37249_37315 = state_37182__$1;
(statearr_37249_37315[(2)] = null);

(statearr_37249_37315[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (45))){
var state_37182__$1 = state_37182;
var statearr_37250_37316 = state_37182__$1;
(statearr_37250_37316[(2)] = null);

(statearr_37250_37316[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (26))){
var inst_37095 = (state_37182[(19)]);
var inst_37101 = (state_37182[(26)]);
var inst_37099 = (state_37182[(23)]);
var inst_37098 = (state_37182[(24)]);
var inst_37103 = (state_37182[(25)]);
var inst_37118 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37120 = (function (){var all_files = inst_37095;
var res_SINGLEQUOTE_ = inst_37098;
var res = inst_37099;
var files_not_loaded = inst_37101;
var dependencies_that_loaded = inst_37103;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37095,inst_37101,inst_37099,inst_37098,inst_37103,inst_37118,state_val_37183,c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37119){
var map__37251 = p__37119;
var map__37251__$1 = ((((!((map__37251 == null)))?((((map__37251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37251):map__37251);
var namespace = cljs.core.get.call(null,map__37251__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37251__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37095,inst_37101,inst_37099,inst_37098,inst_37103,inst_37118,state_val_37183,c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37121 = cljs.core.map.call(null,inst_37120,inst_37099);
var inst_37122 = cljs.core.pr_str.call(null,inst_37121);
var inst_37123 = figwheel.client.utils.log.call(null,inst_37122);
var inst_37124 = (function (){var all_files = inst_37095;
var res_SINGLEQUOTE_ = inst_37098;
var res = inst_37099;
var files_not_loaded = inst_37101;
var dependencies_that_loaded = inst_37103;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37095,inst_37101,inst_37099,inst_37098,inst_37103,inst_37118,inst_37120,inst_37121,inst_37122,inst_37123,state_val_37183,c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37095,inst_37101,inst_37099,inst_37098,inst_37103,inst_37118,inst_37120,inst_37121,inst_37122,inst_37123,state_val_37183,c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37125 = setTimeout(inst_37124,(10));
var state_37182__$1 = (function (){var statearr_37253 = state_37182;
(statearr_37253[(33)] = inst_37118);

(statearr_37253[(34)] = inst_37123);

return statearr_37253;
})();
var statearr_37254_37317 = state_37182__$1;
(statearr_37254_37317[(2)] = inst_37125);

(statearr_37254_37317[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (16))){
var state_37182__$1 = state_37182;
var statearr_37255_37318 = state_37182__$1;
(statearr_37255_37318[(2)] = reload_dependents);

(statearr_37255_37318[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (38))){
var inst_37135 = (state_37182[(16)]);
var inst_37153 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37135);
var state_37182__$1 = state_37182;
var statearr_37256_37319 = state_37182__$1;
(statearr_37256_37319[(2)] = inst_37153);

(statearr_37256_37319[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (30))){
var state_37182__$1 = state_37182;
var statearr_37257_37320 = state_37182__$1;
(statearr_37257_37320[(2)] = null);

(statearr_37257_37320[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (10))){
var inst_37055 = (state_37182[(22)]);
var inst_37057 = cljs.core.chunked_seq_QMARK_.call(null,inst_37055);
var state_37182__$1 = state_37182;
if(inst_37057){
var statearr_37258_37321 = state_37182__$1;
(statearr_37258_37321[(1)] = (13));

} else {
var statearr_37259_37322 = state_37182__$1;
(statearr_37259_37322[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (18))){
var inst_37089 = (state_37182[(2)]);
var state_37182__$1 = state_37182;
if(cljs.core.truth_(inst_37089)){
var statearr_37260_37323 = state_37182__$1;
(statearr_37260_37323[(1)] = (19));

} else {
var statearr_37261_37324 = state_37182__$1;
(statearr_37261_37324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (42))){
var state_37182__$1 = state_37182;
var statearr_37262_37325 = state_37182__$1;
(statearr_37262_37325[(2)] = null);

(statearr_37262_37325[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (37))){
var inst_37148 = (state_37182[(2)]);
var state_37182__$1 = state_37182;
var statearr_37263_37326 = state_37182__$1;
(statearr_37263_37326[(2)] = inst_37148);

(statearr_37263_37326[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37183 === (8))){
var inst_37042 = (state_37182[(7)]);
var inst_37055 = (state_37182[(22)]);
var inst_37055__$1 = cljs.core.seq.call(null,inst_37042);
var state_37182__$1 = (function (){var statearr_37264 = state_37182;
(statearr_37264[(22)] = inst_37055__$1);

return statearr_37264;
})();
if(inst_37055__$1){
var statearr_37265_37327 = state_37182__$1;
(statearr_37265_37327[(1)] = (10));

} else {
var statearr_37266_37328 = state_37182__$1;
(statearr_37266_37328[(1)] = (11));

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
});})(c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33467__auto__,c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33468__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33468__auto____0 = (function (){
var statearr_37267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37267[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33468__auto__);

(statearr_37267[(1)] = (1));

return statearr_37267;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33468__auto____1 = (function (state_37182){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_37182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e37268){if((e37268 instanceof Object)){
var ex__33471__auto__ = e37268;
var statearr_37269_37329 = state_37182;
(statearr_37269_37329[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37330 = state_37182;
state_37182 = G__37330;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33468__auto__ = function(state_37182){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33468__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33468__auto____1.call(this,state_37182);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33468__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33468__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33557__auto__ = (function (){var statearr_37270 = f__33556__auto__.call(null);
(statearr_37270[(6)] = c__33555__auto__);

return statearr_37270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto__,map__37027,map__37027__$1,opts,before_jsload,on_jsload,reload_dependents,map__37028,map__37028__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33555__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37333,link){
var map__37334 = p__37333;
var map__37334__$1 = ((((!((map__37334 == null)))?((((map__37334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37334):map__37334);
var file = cljs.core.get.call(null,map__37334__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37334,map__37334__$1,file){
return (function (p1__37331_SHARP_,p2__37332_SHARP_){
if(cljs.core._EQ_.call(null,p1__37331_SHARP_,p2__37332_SHARP_)){
return p1__37331_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37334,map__37334__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37337){
var map__37338 = p__37337;
var map__37338__$1 = ((((!((map__37338 == null)))?((((map__37338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37338):map__37338);
var match_length = cljs.core.get.call(null,map__37338__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37338__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37336_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37336_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37340_SHARP_,p2__37341_SHARP_){
return cljs.core.assoc.call(null,p1__37340_SHARP_,cljs.core.get.call(null,p2__37341_SHARP_,key),p2__37341_SHARP_);
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
var loaded_f_datas_37342 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37342);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37342);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37343,p__37344){
var map__37345 = p__37343;
var map__37345__$1 = ((((!((map__37345 == null)))?((((map__37345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37345):map__37345);
var on_cssload = cljs.core.get.call(null,map__37345__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37346 = p__37344;
var map__37346__$1 = ((((!((map__37346 == null)))?((((map__37346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37346):map__37346);
var files_msg = map__37346__$1;
var files = cljs.core.get.call(null,map__37346__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1513190775525
