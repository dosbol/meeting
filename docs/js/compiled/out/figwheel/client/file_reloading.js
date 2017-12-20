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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36759_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36759_SHARP_));
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
var seq__36760 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36761 = null;
var count__36762 = (0);
var i__36763 = (0);
while(true){
if((i__36763 < count__36762)){
var n = cljs.core._nth.call(null,chunk__36761,i__36763);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36764 = seq__36760;
var G__36765 = chunk__36761;
var G__36766 = count__36762;
var G__36767 = (i__36763 + (1));
seq__36760 = G__36764;
chunk__36761 = G__36765;
count__36762 = G__36766;
i__36763 = G__36767;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36760);
if(temp__4657__auto__){
var seq__36760__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36760__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__36760__$1);
var G__36768 = cljs.core.chunk_rest.call(null,seq__36760__$1);
var G__36769 = c__29125__auto__;
var G__36770 = cljs.core.count.call(null,c__29125__auto__);
var G__36771 = (0);
seq__36760 = G__36768;
chunk__36761 = G__36769;
count__36762 = G__36770;
i__36763 = G__36771;
continue;
} else {
var n = cljs.core.first.call(null,seq__36760__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36772 = cljs.core.next.call(null,seq__36760__$1);
var G__36773 = null;
var G__36774 = (0);
var G__36775 = (0);
seq__36760 = G__36772;
chunk__36761 = G__36773;
count__36762 = G__36774;
i__36763 = G__36775;
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

var seq__36785_36793 = cljs.core.seq.call(null,deps);
var chunk__36786_36794 = null;
var count__36787_36795 = (0);
var i__36788_36796 = (0);
while(true){
if((i__36788_36796 < count__36787_36795)){
var dep_36797 = cljs.core._nth.call(null,chunk__36786_36794,i__36788_36796);
topo_sort_helper_STAR_.call(null,dep_36797,(depth + (1)),state);

var G__36798 = seq__36785_36793;
var G__36799 = chunk__36786_36794;
var G__36800 = count__36787_36795;
var G__36801 = (i__36788_36796 + (1));
seq__36785_36793 = G__36798;
chunk__36786_36794 = G__36799;
count__36787_36795 = G__36800;
i__36788_36796 = G__36801;
continue;
} else {
var temp__4657__auto___36802 = cljs.core.seq.call(null,seq__36785_36793);
if(temp__4657__auto___36802){
var seq__36785_36803__$1 = temp__4657__auto___36802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36785_36803__$1)){
var c__29125__auto___36804 = cljs.core.chunk_first.call(null,seq__36785_36803__$1);
var G__36805 = cljs.core.chunk_rest.call(null,seq__36785_36803__$1);
var G__36806 = c__29125__auto___36804;
var G__36807 = cljs.core.count.call(null,c__29125__auto___36804);
var G__36808 = (0);
seq__36785_36793 = G__36805;
chunk__36786_36794 = G__36806;
count__36787_36795 = G__36807;
i__36788_36796 = G__36808;
continue;
} else {
var dep_36809 = cljs.core.first.call(null,seq__36785_36803__$1);
topo_sort_helper_STAR_.call(null,dep_36809,(depth + (1)),state);

var G__36810 = cljs.core.next.call(null,seq__36785_36803__$1);
var G__36811 = null;
var G__36812 = (0);
var G__36813 = (0);
seq__36785_36793 = G__36810;
chunk__36786_36794 = G__36811;
count__36787_36795 = G__36812;
i__36788_36796 = G__36813;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36789){
var vec__36790 = p__36789;
var seq__36791 = cljs.core.seq.call(null,vec__36790);
var first__36792 = cljs.core.first.call(null,seq__36791);
var seq__36791__$1 = cljs.core.next.call(null,seq__36791);
var x = first__36792;
var xs = seq__36791__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36790,seq__36791,first__36792,seq__36791__$1,x,xs,get_deps__$1){
return (function (p1__36776_SHARP_){
return clojure.set.difference.call(null,p1__36776_SHARP_,x);
});})(vec__36790,seq__36791,first__36792,seq__36791__$1,x,xs,get_deps__$1))
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
var seq__36814 = cljs.core.seq.call(null,provides);
var chunk__36815 = null;
var count__36816 = (0);
var i__36817 = (0);
while(true){
if((i__36817 < count__36816)){
var prov = cljs.core._nth.call(null,chunk__36815,i__36817);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36818_36826 = cljs.core.seq.call(null,requires);
var chunk__36819_36827 = null;
var count__36820_36828 = (0);
var i__36821_36829 = (0);
while(true){
if((i__36821_36829 < count__36820_36828)){
var req_36830 = cljs.core._nth.call(null,chunk__36819_36827,i__36821_36829);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36830,prov);

var G__36831 = seq__36818_36826;
var G__36832 = chunk__36819_36827;
var G__36833 = count__36820_36828;
var G__36834 = (i__36821_36829 + (1));
seq__36818_36826 = G__36831;
chunk__36819_36827 = G__36832;
count__36820_36828 = G__36833;
i__36821_36829 = G__36834;
continue;
} else {
var temp__4657__auto___36835 = cljs.core.seq.call(null,seq__36818_36826);
if(temp__4657__auto___36835){
var seq__36818_36836__$1 = temp__4657__auto___36835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36818_36836__$1)){
var c__29125__auto___36837 = cljs.core.chunk_first.call(null,seq__36818_36836__$1);
var G__36838 = cljs.core.chunk_rest.call(null,seq__36818_36836__$1);
var G__36839 = c__29125__auto___36837;
var G__36840 = cljs.core.count.call(null,c__29125__auto___36837);
var G__36841 = (0);
seq__36818_36826 = G__36838;
chunk__36819_36827 = G__36839;
count__36820_36828 = G__36840;
i__36821_36829 = G__36841;
continue;
} else {
var req_36842 = cljs.core.first.call(null,seq__36818_36836__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36842,prov);

var G__36843 = cljs.core.next.call(null,seq__36818_36836__$1);
var G__36844 = null;
var G__36845 = (0);
var G__36846 = (0);
seq__36818_36826 = G__36843;
chunk__36819_36827 = G__36844;
count__36820_36828 = G__36845;
i__36821_36829 = G__36846;
continue;
}
} else {
}
}
break;
}

var G__36847 = seq__36814;
var G__36848 = chunk__36815;
var G__36849 = count__36816;
var G__36850 = (i__36817 + (1));
seq__36814 = G__36847;
chunk__36815 = G__36848;
count__36816 = G__36849;
i__36817 = G__36850;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36814);
if(temp__4657__auto__){
var seq__36814__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36814__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__36814__$1);
var G__36851 = cljs.core.chunk_rest.call(null,seq__36814__$1);
var G__36852 = c__29125__auto__;
var G__36853 = cljs.core.count.call(null,c__29125__auto__);
var G__36854 = (0);
seq__36814 = G__36851;
chunk__36815 = G__36852;
count__36816 = G__36853;
i__36817 = G__36854;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36814__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36822_36855 = cljs.core.seq.call(null,requires);
var chunk__36823_36856 = null;
var count__36824_36857 = (0);
var i__36825_36858 = (0);
while(true){
if((i__36825_36858 < count__36824_36857)){
var req_36859 = cljs.core._nth.call(null,chunk__36823_36856,i__36825_36858);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36859,prov);

var G__36860 = seq__36822_36855;
var G__36861 = chunk__36823_36856;
var G__36862 = count__36824_36857;
var G__36863 = (i__36825_36858 + (1));
seq__36822_36855 = G__36860;
chunk__36823_36856 = G__36861;
count__36824_36857 = G__36862;
i__36825_36858 = G__36863;
continue;
} else {
var temp__4657__auto___36864__$1 = cljs.core.seq.call(null,seq__36822_36855);
if(temp__4657__auto___36864__$1){
var seq__36822_36865__$1 = temp__4657__auto___36864__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36822_36865__$1)){
var c__29125__auto___36866 = cljs.core.chunk_first.call(null,seq__36822_36865__$1);
var G__36867 = cljs.core.chunk_rest.call(null,seq__36822_36865__$1);
var G__36868 = c__29125__auto___36866;
var G__36869 = cljs.core.count.call(null,c__29125__auto___36866);
var G__36870 = (0);
seq__36822_36855 = G__36867;
chunk__36823_36856 = G__36868;
count__36824_36857 = G__36869;
i__36825_36858 = G__36870;
continue;
} else {
var req_36871 = cljs.core.first.call(null,seq__36822_36865__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36871,prov);

var G__36872 = cljs.core.next.call(null,seq__36822_36865__$1);
var G__36873 = null;
var G__36874 = (0);
var G__36875 = (0);
seq__36822_36855 = G__36872;
chunk__36823_36856 = G__36873;
count__36824_36857 = G__36874;
i__36825_36858 = G__36875;
continue;
}
} else {
}
}
break;
}

var G__36876 = cljs.core.next.call(null,seq__36814__$1);
var G__36877 = null;
var G__36878 = (0);
var G__36879 = (0);
seq__36814 = G__36876;
chunk__36815 = G__36877;
count__36816 = G__36878;
i__36817 = G__36879;
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
var seq__36880_36884 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36881_36885 = null;
var count__36882_36886 = (0);
var i__36883_36887 = (0);
while(true){
if((i__36883_36887 < count__36882_36886)){
var ns_36888 = cljs.core._nth.call(null,chunk__36881_36885,i__36883_36887);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36888);

var G__36889 = seq__36880_36884;
var G__36890 = chunk__36881_36885;
var G__36891 = count__36882_36886;
var G__36892 = (i__36883_36887 + (1));
seq__36880_36884 = G__36889;
chunk__36881_36885 = G__36890;
count__36882_36886 = G__36891;
i__36883_36887 = G__36892;
continue;
} else {
var temp__4657__auto___36893 = cljs.core.seq.call(null,seq__36880_36884);
if(temp__4657__auto___36893){
var seq__36880_36894__$1 = temp__4657__auto___36893;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36880_36894__$1)){
var c__29125__auto___36895 = cljs.core.chunk_first.call(null,seq__36880_36894__$1);
var G__36896 = cljs.core.chunk_rest.call(null,seq__36880_36894__$1);
var G__36897 = c__29125__auto___36895;
var G__36898 = cljs.core.count.call(null,c__29125__auto___36895);
var G__36899 = (0);
seq__36880_36884 = G__36896;
chunk__36881_36885 = G__36897;
count__36882_36886 = G__36898;
i__36883_36887 = G__36899;
continue;
} else {
var ns_36900 = cljs.core.first.call(null,seq__36880_36894__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36900);

var G__36901 = cljs.core.next.call(null,seq__36880_36894__$1);
var G__36902 = null;
var G__36903 = (0);
var G__36904 = (0);
seq__36880_36884 = G__36901;
chunk__36881_36885 = G__36902;
count__36882_36886 = G__36903;
i__36883_36887 = G__36904;
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
var G__36905__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36906__i = 0, G__36906__a = new Array(arguments.length -  0);
while (G__36906__i < G__36906__a.length) {G__36906__a[G__36906__i] = arguments[G__36906__i + 0]; ++G__36906__i;}
  args = new cljs.core.IndexedSeq(G__36906__a,0,null);
} 
return G__36905__delegate.call(this,args);};
G__36905.cljs$lang$maxFixedArity = 0;
G__36905.cljs$lang$applyTo = (function (arglist__36907){
var args = cljs.core.seq(arglist__36907);
return G__36905__delegate(args);
});
G__36905.cljs$core$IFn$_invoke$arity$variadic = G__36905__delegate;
return G__36905;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36908_SHARP_,p2__36909_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36908_SHARP_)].join('')),p2__36909_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36910_SHARP_,p2__36911_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36910_SHARP_)].join(''),p2__36911_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36912 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36912.addCallback(((function (G__36912){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36912))
);

G__36912.addErrback(((function (G__36912){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36912))
);

return G__36912;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36913 = cljs.core._EQ_;
var expr__36914 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36913.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36914))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36913,expr__36914){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36913,expr__36914))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36913,expr__36914){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36916){if((e36916 instanceof Error)){
var e = e36916;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36916;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36913,expr__36914))
} else {
if(cljs.core.truth_(pred__36913.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36914))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36913.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36914))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36913.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36914))){
return ((function (pred__36913,expr__36914){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36917){if((e36917 instanceof Error)){
var e = e36917;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36917;

}
}})());
});
;})(pred__36913,expr__36914))
} else {
return ((function (pred__36913,expr__36914){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36913,expr__36914))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36918,callback){
var map__36919 = p__36918;
var map__36919__$1 = ((((!((map__36919 == null)))?((((map__36919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36919):map__36919);
var file_msg = map__36919__$1;
var request_url = cljs.core.get.call(null,map__36919__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36919,map__36919__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36919,map__36919__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__33589__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto__){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto__){
return (function (state_36943){
var state_val_36944 = (state_36943[(1)]);
if((state_val_36944 === (7))){
var inst_36939 = (state_36943[(2)]);
var state_36943__$1 = state_36943;
var statearr_36945_36962 = state_36943__$1;
(statearr_36945_36962[(2)] = inst_36939);

(statearr_36945_36962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36944 === (1))){
var state_36943__$1 = state_36943;
var statearr_36946_36963 = state_36943__$1;
(statearr_36946_36963[(2)] = null);

(statearr_36946_36963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36944 === (4))){
var inst_36923 = (state_36943[(7)]);
var inst_36923__$1 = (state_36943[(2)]);
var state_36943__$1 = (function (){var statearr_36947 = state_36943;
(statearr_36947[(7)] = inst_36923__$1);

return statearr_36947;
})();
if(cljs.core.truth_(inst_36923__$1)){
var statearr_36948_36964 = state_36943__$1;
(statearr_36948_36964[(1)] = (5));

} else {
var statearr_36949_36965 = state_36943__$1;
(statearr_36949_36965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36944 === (6))){
var state_36943__$1 = state_36943;
var statearr_36950_36966 = state_36943__$1;
(statearr_36950_36966[(2)] = null);

(statearr_36950_36966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36944 === (3))){
var inst_36941 = (state_36943[(2)]);
var state_36943__$1 = state_36943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36943__$1,inst_36941);
} else {
if((state_val_36944 === (2))){
var state_36943__$1 = state_36943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36943__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36944 === (11))){
var inst_36935 = (state_36943[(2)]);
var state_36943__$1 = (function (){var statearr_36951 = state_36943;
(statearr_36951[(8)] = inst_36935);

return statearr_36951;
})();
var statearr_36952_36967 = state_36943__$1;
(statearr_36952_36967[(2)] = null);

(statearr_36952_36967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36944 === (9))){
var inst_36927 = (state_36943[(9)]);
var inst_36929 = (state_36943[(10)]);
var inst_36931 = inst_36929.call(null,inst_36927);
var state_36943__$1 = state_36943;
var statearr_36953_36968 = state_36943__$1;
(statearr_36953_36968[(2)] = inst_36931);

(statearr_36953_36968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36944 === (5))){
var inst_36923 = (state_36943[(7)]);
var inst_36925 = figwheel.client.file_reloading.blocking_load.call(null,inst_36923);
var state_36943__$1 = state_36943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36943__$1,(8),inst_36925);
} else {
if((state_val_36944 === (10))){
var inst_36927 = (state_36943[(9)]);
var inst_36933 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36927);
var state_36943__$1 = state_36943;
var statearr_36954_36969 = state_36943__$1;
(statearr_36954_36969[(2)] = inst_36933);

(statearr_36954_36969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36944 === (8))){
var inst_36929 = (state_36943[(10)]);
var inst_36923 = (state_36943[(7)]);
var inst_36927 = (state_36943[(2)]);
var inst_36928 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36929__$1 = cljs.core.get.call(null,inst_36928,inst_36923);
var state_36943__$1 = (function (){var statearr_36955 = state_36943;
(statearr_36955[(9)] = inst_36927);

(statearr_36955[(10)] = inst_36929__$1);

return statearr_36955;
})();
if(cljs.core.truth_(inst_36929__$1)){
var statearr_36956_36970 = state_36943__$1;
(statearr_36956_36970[(1)] = (9));

} else {
var statearr_36957_36971 = state_36943__$1;
(statearr_36957_36971[(1)] = (10));

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
});})(c__33589__auto__))
;
return ((function (switch__33501__auto__,c__33589__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33502__auto__ = null;
var figwheel$client$file_reloading$state_machine__33502__auto____0 = (function (){
var statearr_36958 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36958[(0)] = figwheel$client$file_reloading$state_machine__33502__auto__);

(statearr_36958[(1)] = (1));

return statearr_36958;
});
var figwheel$client$file_reloading$state_machine__33502__auto____1 = (function (state_36943){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_36943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e36959){if((e36959 instanceof Object)){
var ex__33505__auto__ = e36959;
var statearr_36960_36972 = state_36943;
(statearr_36960_36972[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36973 = state_36943;
state_36943 = G__36973;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33502__auto__ = function(state_36943){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33502__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33502__auto____1.call(this,state_36943);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33502__auto____0;
figwheel$client$file_reloading$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33502__auto____1;
return figwheel$client$file_reloading$state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto__))
})();
var state__33591__auto__ = (function (){var statearr_36961 = f__33590__auto__.call(null);
(statearr_36961[(6)] = c__33589__auto__);

return statearr_36961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto__))
);

return c__33589__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36974,callback){
var map__36975 = p__36974;
var map__36975__$1 = ((((!((map__36975 == null)))?((((map__36975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36975):map__36975);
var file_msg = map__36975__$1;
var namespace = cljs.core.get.call(null,map__36975__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36975,map__36975__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36975,map__36975__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36977){
var map__36978 = p__36977;
var map__36978__$1 = ((((!((map__36978 == null)))?((((map__36978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36978):map__36978);
var file_msg = map__36978__$1;
var namespace = cljs.core.get.call(null,map__36978__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36980){
var map__36981 = p__36980;
var map__36981__$1 = ((((!((map__36981 == null)))?((((map__36981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36981):map__36981);
var file_msg = map__36981__$1;
var namespace = cljs.core.get.call(null,map__36981__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36983,callback){
var map__36984 = p__36983;
var map__36984__$1 = ((((!((map__36984 == null)))?((((map__36984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36984):map__36984);
var file_msg = map__36984__$1;
var request_url = cljs.core.get.call(null,map__36984__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36984__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33589__auto___37034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___37034,out){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___37034,out){
return (function (state_37019){
var state_val_37020 = (state_37019[(1)]);
if((state_val_37020 === (1))){
var inst_36993 = cljs.core.seq.call(null,files);
var inst_36994 = cljs.core.first.call(null,inst_36993);
var inst_36995 = cljs.core.next.call(null,inst_36993);
var inst_36996 = files;
var state_37019__$1 = (function (){var statearr_37021 = state_37019;
(statearr_37021[(7)] = inst_36995);

(statearr_37021[(8)] = inst_36996);

(statearr_37021[(9)] = inst_36994);

return statearr_37021;
})();
var statearr_37022_37035 = state_37019__$1;
(statearr_37022_37035[(2)] = null);

(statearr_37022_37035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (2))){
var inst_37002 = (state_37019[(10)]);
var inst_36996 = (state_37019[(8)]);
var inst_37001 = cljs.core.seq.call(null,inst_36996);
var inst_37002__$1 = cljs.core.first.call(null,inst_37001);
var inst_37003 = cljs.core.next.call(null,inst_37001);
var inst_37004 = (inst_37002__$1 == null);
var inst_37005 = cljs.core.not.call(null,inst_37004);
var state_37019__$1 = (function (){var statearr_37023 = state_37019;
(statearr_37023[(10)] = inst_37002__$1);

(statearr_37023[(11)] = inst_37003);

return statearr_37023;
})();
if(inst_37005){
var statearr_37024_37036 = state_37019__$1;
(statearr_37024_37036[(1)] = (4));

} else {
var statearr_37025_37037 = state_37019__$1;
(statearr_37025_37037[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (3))){
var inst_37017 = (state_37019[(2)]);
var state_37019__$1 = state_37019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37019__$1,inst_37017);
} else {
if((state_val_37020 === (4))){
var inst_37002 = (state_37019[(10)]);
var inst_37007 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37002);
var state_37019__$1 = state_37019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37019__$1,(7),inst_37007);
} else {
if((state_val_37020 === (5))){
var inst_37013 = cljs.core.async.close_BANG_.call(null,out);
var state_37019__$1 = state_37019;
var statearr_37026_37038 = state_37019__$1;
(statearr_37026_37038[(2)] = inst_37013);

(statearr_37026_37038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (6))){
var inst_37015 = (state_37019[(2)]);
var state_37019__$1 = state_37019;
var statearr_37027_37039 = state_37019__$1;
(statearr_37027_37039[(2)] = inst_37015);

(statearr_37027_37039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37020 === (7))){
var inst_37003 = (state_37019[(11)]);
var inst_37009 = (state_37019[(2)]);
var inst_37010 = cljs.core.async.put_BANG_.call(null,out,inst_37009);
var inst_36996 = inst_37003;
var state_37019__$1 = (function (){var statearr_37028 = state_37019;
(statearr_37028[(12)] = inst_37010);

(statearr_37028[(8)] = inst_36996);

return statearr_37028;
})();
var statearr_37029_37040 = state_37019__$1;
(statearr_37029_37040[(2)] = null);

(statearr_37029_37040[(1)] = (2));


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
});})(c__33589__auto___37034,out))
;
return ((function (switch__33501__auto__,c__33589__auto___37034,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33502__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33502__auto____0 = (function (){
var statearr_37030 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37030[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33502__auto__);

(statearr_37030[(1)] = (1));

return statearr_37030;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33502__auto____1 = (function (state_37019){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_37019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e37031){if((e37031 instanceof Object)){
var ex__33505__auto__ = e37031;
var statearr_37032_37041 = state_37019;
(statearr_37032_37041[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37042 = state_37019;
state_37019 = G__37042;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33502__auto__ = function(state_37019){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33502__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33502__auto____1.call(this,state_37019);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33502__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33502__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___37034,out))
})();
var state__33591__auto__ = (function (){var statearr_37033 = f__33590__auto__.call(null);
(statearr_37033[(6)] = c__33589__auto___37034);

return statearr_37033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___37034,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37043,opts){
var map__37044 = p__37043;
var map__37044__$1 = ((((!((map__37044 == null)))?((((map__37044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37044):map__37044);
var eval_body = cljs.core.get.call(null,map__37044__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37044__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37046){var e = e37046;
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
return (function (p1__37047_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37047_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37048){
var vec__37049 = p__37048;
var k = cljs.core.nth.call(null,vec__37049,(0),null);
var v = cljs.core.nth.call(null,vec__37049,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37052){
var vec__37053 = p__37052;
var k = cljs.core.nth.call(null,vec__37053,(0),null);
var v = cljs.core.nth.call(null,vec__37053,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37059,p__37060){
var map__37061 = p__37059;
var map__37061__$1 = ((((!((map__37061 == null)))?((((map__37061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37061):map__37061);
var opts = map__37061__$1;
var before_jsload = cljs.core.get.call(null,map__37061__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37061__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37061__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37062 = p__37060;
var map__37062__$1 = ((((!((map__37062 == null)))?((((map__37062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37062):map__37062);
var msg = map__37062__$1;
var files = cljs.core.get.call(null,map__37062__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37062__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37062__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33589__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37216){
var state_val_37217 = (state_37216[(1)]);
if((state_val_37217 === (7))){
var inst_37077 = (state_37216[(7)]);
var inst_37078 = (state_37216[(8)]);
var inst_37076 = (state_37216[(9)]);
var inst_37079 = (state_37216[(10)]);
var inst_37084 = cljs.core._nth.call(null,inst_37077,inst_37079);
var inst_37085 = figwheel.client.file_reloading.eval_body.call(null,inst_37084,opts);
var inst_37086 = (inst_37079 + (1));
var tmp37218 = inst_37077;
var tmp37219 = inst_37078;
var tmp37220 = inst_37076;
var inst_37076__$1 = tmp37220;
var inst_37077__$1 = tmp37218;
var inst_37078__$1 = tmp37219;
var inst_37079__$1 = inst_37086;
var state_37216__$1 = (function (){var statearr_37221 = state_37216;
(statearr_37221[(7)] = inst_37077__$1);

(statearr_37221[(8)] = inst_37078__$1);

(statearr_37221[(11)] = inst_37085);

(statearr_37221[(9)] = inst_37076__$1);

(statearr_37221[(10)] = inst_37079__$1);

return statearr_37221;
})();
var statearr_37222_37305 = state_37216__$1;
(statearr_37222_37305[(2)] = null);

(statearr_37222_37305[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (20))){
var inst_37119 = (state_37216[(12)]);
var inst_37127 = figwheel.client.file_reloading.sort_files.call(null,inst_37119);
var state_37216__$1 = state_37216;
var statearr_37223_37306 = state_37216__$1;
(statearr_37223_37306[(2)] = inst_37127);

(statearr_37223_37306[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (27))){
var state_37216__$1 = state_37216;
var statearr_37224_37307 = state_37216__$1;
(statearr_37224_37307[(2)] = null);

(statearr_37224_37307[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (1))){
var inst_37068 = (state_37216[(13)]);
var inst_37065 = before_jsload.call(null,files);
var inst_37066 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37067 = (function (){return ((function (inst_37068,inst_37065,inst_37066,state_val_37217,c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37056_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37056_SHARP_);
});
;})(inst_37068,inst_37065,inst_37066,state_val_37217,c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37068__$1 = cljs.core.filter.call(null,inst_37067,files);
var inst_37069 = cljs.core.not_empty.call(null,inst_37068__$1);
var state_37216__$1 = (function (){var statearr_37225 = state_37216;
(statearr_37225[(14)] = inst_37065);

(statearr_37225[(13)] = inst_37068__$1);

(statearr_37225[(15)] = inst_37066);

return statearr_37225;
})();
if(cljs.core.truth_(inst_37069)){
var statearr_37226_37308 = state_37216__$1;
(statearr_37226_37308[(1)] = (2));

} else {
var statearr_37227_37309 = state_37216__$1;
(statearr_37227_37309[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (24))){
var state_37216__$1 = state_37216;
var statearr_37228_37310 = state_37216__$1;
(statearr_37228_37310[(2)] = null);

(statearr_37228_37310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (39))){
var inst_37169 = (state_37216[(16)]);
var state_37216__$1 = state_37216;
var statearr_37229_37311 = state_37216__$1;
(statearr_37229_37311[(2)] = inst_37169);

(statearr_37229_37311[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (46))){
var inst_37211 = (state_37216[(2)]);
var state_37216__$1 = state_37216;
var statearr_37230_37312 = state_37216__$1;
(statearr_37230_37312[(2)] = inst_37211);

(statearr_37230_37312[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (4))){
var inst_37113 = (state_37216[(2)]);
var inst_37114 = cljs.core.List.EMPTY;
var inst_37115 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37114);
var inst_37116 = (function (){return ((function (inst_37113,inst_37114,inst_37115,state_val_37217,c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37057_SHARP_){
var and__28274__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37057_SHARP_);
if(cljs.core.truth_(and__28274__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37057_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37057_SHARP_)));
} else {
return and__28274__auto__;
}
});
;})(inst_37113,inst_37114,inst_37115,state_val_37217,c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37117 = cljs.core.filter.call(null,inst_37116,files);
var inst_37118 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37119 = cljs.core.concat.call(null,inst_37117,inst_37118);
var state_37216__$1 = (function (){var statearr_37231 = state_37216;
(statearr_37231[(17)] = inst_37113);

(statearr_37231[(18)] = inst_37115);

(statearr_37231[(12)] = inst_37119);

return statearr_37231;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37232_37313 = state_37216__$1;
(statearr_37232_37313[(1)] = (16));

} else {
var statearr_37233_37314 = state_37216__$1;
(statearr_37233_37314[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (15))){
var inst_37103 = (state_37216[(2)]);
var state_37216__$1 = state_37216;
var statearr_37234_37315 = state_37216__$1;
(statearr_37234_37315[(2)] = inst_37103);

(statearr_37234_37315[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (21))){
var inst_37129 = (state_37216[(19)]);
var inst_37129__$1 = (state_37216[(2)]);
var inst_37130 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37129__$1);
var state_37216__$1 = (function (){var statearr_37235 = state_37216;
(statearr_37235[(19)] = inst_37129__$1);

return statearr_37235;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37216__$1,(22),inst_37130);
} else {
if((state_val_37217 === (31))){
var inst_37214 = (state_37216[(2)]);
var state_37216__$1 = state_37216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37216__$1,inst_37214);
} else {
if((state_val_37217 === (32))){
var inst_37169 = (state_37216[(16)]);
var inst_37174 = inst_37169.cljs$lang$protocol_mask$partition0$;
var inst_37175 = (inst_37174 & (64));
var inst_37176 = inst_37169.cljs$core$ISeq$;
var inst_37177 = (cljs.core.PROTOCOL_SENTINEL === inst_37176);
var inst_37178 = (inst_37175) || (inst_37177);
var state_37216__$1 = state_37216;
if(cljs.core.truth_(inst_37178)){
var statearr_37236_37316 = state_37216__$1;
(statearr_37236_37316[(1)] = (35));

} else {
var statearr_37237_37317 = state_37216__$1;
(statearr_37237_37317[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (40))){
var inst_37191 = (state_37216[(20)]);
var inst_37190 = (state_37216[(2)]);
var inst_37191__$1 = cljs.core.get.call(null,inst_37190,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37192 = cljs.core.get.call(null,inst_37190,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37193 = cljs.core.not_empty.call(null,inst_37191__$1);
var state_37216__$1 = (function (){var statearr_37238 = state_37216;
(statearr_37238[(21)] = inst_37192);

(statearr_37238[(20)] = inst_37191__$1);

return statearr_37238;
})();
if(cljs.core.truth_(inst_37193)){
var statearr_37239_37318 = state_37216__$1;
(statearr_37239_37318[(1)] = (41));

} else {
var statearr_37240_37319 = state_37216__$1;
(statearr_37240_37319[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (33))){
var state_37216__$1 = state_37216;
var statearr_37241_37320 = state_37216__$1;
(statearr_37241_37320[(2)] = false);

(statearr_37241_37320[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (13))){
var inst_37089 = (state_37216[(22)]);
var inst_37093 = cljs.core.chunk_first.call(null,inst_37089);
var inst_37094 = cljs.core.chunk_rest.call(null,inst_37089);
var inst_37095 = cljs.core.count.call(null,inst_37093);
var inst_37076 = inst_37094;
var inst_37077 = inst_37093;
var inst_37078 = inst_37095;
var inst_37079 = (0);
var state_37216__$1 = (function (){var statearr_37242 = state_37216;
(statearr_37242[(7)] = inst_37077);

(statearr_37242[(8)] = inst_37078);

(statearr_37242[(9)] = inst_37076);

(statearr_37242[(10)] = inst_37079);

return statearr_37242;
})();
var statearr_37243_37321 = state_37216__$1;
(statearr_37243_37321[(2)] = null);

(statearr_37243_37321[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (22))){
var inst_37132 = (state_37216[(23)]);
var inst_37129 = (state_37216[(19)]);
var inst_37137 = (state_37216[(24)]);
var inst_37133 = (state_37216[(25)]);
var inst_37132__$1 = (state_37216[(2)]);
var inst_37133__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37132__$1);
var inst_37134 = (function (){var all_files = inst_37129;
var res_SINGLEQUOTE_ = inst_37132__$1;
var res = inst_37133__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37132,inst_37129,inst_37137,inst_37133,inst_37132__$1,inst_37133__$1,state_val_37217,c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37058_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37058_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37132,inst_37129,inst_37137,inst_37133,inst_37132__$1,inst_37133__$1,state_val_37217,c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37135 = cljs.core.filter.call(null,inst_37134,inst_37132__$1);
var inst_37136 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37137__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37136);
var inst_37138 = cljs.core.not_empty.call(null,inst_37137__$1);
var state_37216__$1 = (function (){var statearr_37244 = state_37216;
(statearr_37244[(26)] = inst_37135);

(statearr_37244[(23)] = inst_37132__$1);

(statearr_37244[(24)] = inst_37137__$1);

(statearr_37244[(25)] = inst_37133__$1);

return statearr_37244;
})();
if(cljs.core.truth_(inst_37138)){
var statearr_37245_37322 = state_37216__$1;
(statearr_37245_37322[(1)] = (23));

} else {
var statearr_37246_37323 = state_37216__$1;
(statearr_37246_37323[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (36))){
var state_37216__$1 = state_37216;
var statearr_37247_37324 = state_37216__$1;
(statearr_37247_37324[(2)] = false);

(statearr_37247_37324[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (41))){
var inst_37191 = (state_37216[(20)]);
var inst_37195 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37196 = cljs.core.map.call(null,inst_37195,inst_37191);
var inst_37197 = cljs.core.pr_str.call(null,inst_37196);
var inst_37198 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37197)].join('');
var inst_37199 = figwheel.client.utils.log.call(null,inst_37198);
var state_37216__$1 = state_37216;
var statearr_37248_37325 = state_37216__$1;
(statearr_37248_37325[(2)] = inst_37199);

(statearr_37248_37325[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (43))){
var inst_37192 = (state_37216[(21)]);
var inst_37202 = (state_37216[(2)]);
var inst_37203 = cljs.core.not_empty.call(null,inst_37192);
var state_37216__$1 = (function (){var statearr_37249 = state_37216;
(statearr_37249[(27)] = inst_37202);

return statearr_37249;
})();
if(cljs.core.truth_(inst_37203)){
var statearr_37250_37326 = state_37216__$1;
(statearr_37250_37326[(1)] = (44));

} else {
var statearr_37251_37327 = state_37216__$1;
(statearr_37251_37327[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (29))){
var inst_37135 = (state_37216[(26)]);
var inst_37169 = (state_37216[(16)]);
var inst_37132 = (state_37216[(23)]);
var inst_37129 = (state_37216[(19)]);
var inst_37137 = (state_37216[(24)]);
var inst_37133 = (state_37216[(25)]);
var inst_37165 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37168 = (function (){var all_files = inst_37129;
var res_SINGLEQUOTE_ = inst_37132;
var res = inst_37133;
var files_not_loaded = inst_37135;
var dependencies_that_loaded = inst_37137;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37135,inst_37169,inst_37132,inst_37129,inst_37137,inst_37133,inst_37165,state_val_37217,c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37167){
var map__37252 = p__37167;
var map__37252__$1 = ((((!((map__37252 == null)))?((((map__37252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37252):map__37252);
var namespace = cljs.core.get.call(null,map__37252__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37135,inst_37169,inst_37132,inst_37129,inst_37137,inst_37133,inst_37165,state_val_37217,c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37169__$1 = cljs.core.group_by.call(null,inst_37168,inst_37135);
var inst_37171 = (inst_37169__$1 == null);
var inst_37172 = cljs.core.not.call(null,inst_37171);
var state_37216__$1 = (function (){var statearr_37254 = state_37216;
(statearr_37254[(28)] = inst_37165);

(statearr_37254[(16)] = inst_37169__$1);

return statearr_37254;
})();
if(inst_37172){
var statearr_37255_37328 = state_37216__$1;
(statearr_37255_37328[(1)] = (32));

} else {
var statearr_37256_37329 = state_37216__$1;
(statearr_37256_37329[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (44))){
var inst_37192 = (state_37216[(21)]);
var inst_37205 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37192);
var inst_37206 = cljs.core.pr_str.call(null,inst_37205);
var inst_37207 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37206)].join('');
var inst_37208 = figwheel.client.utils.log.call(null,inst_37207);
var state_37216__$1 = state_37216;
var statearr_37257_37330 = state_37216__$1;
(statearr_37257_37330[(2)] = inst_37208);

(statearr_37257_37330[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (6))){
var inst_37110 = (state_37216[(2)]);
var state_37216__$1 = state_37216;
var statearr_37258_37331 = state_37216__$1;
(statearr_37258_37331[(2)] = inst_37110);

(statearr_37258_37331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (28))){
var inst_37135 = (state_37216[(26)]);
var inst_37162 = (state_37216[(2)]);
var inst_37163 = cljs.core.not_empty.call(null,inst_37135);
var state_37216__$1 = (function (){var statearr_37259 = state_37216;
(statearr_37259[(29)] = inst_37162);

return statearr_37259;
})();
if(cljs.core.truth_(inst_37163)){
var statearr_37260_37332 = state_37216__$1;
(statearr_37260_37332[(1)] = (29));

} else {
var statearr_37261_37333 = state_37216__$1;
(statearr_37261_37333[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (25))){
var inst_37133 = (state_37216[(25)]);
var inst_37149 = (state_37216[(2)]);
var inst_37150 = cljs.core.not_empty.call(null,inst_37133);
var state_37216__$1 = (function (){var statearr_37262 = state_37216;
(statearr_37262[(30)] = inst_37149);

return statearr_37262;
})();
if(cljs.core.truth_(inst_37150)){
var statearr_37263_37334 = state_37216__$1;
(statearr_37263_37334[(1)] = (26));

} else {
var statearr_37264_37335 = state_37216__$1;
(statearr_37264_37335[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (34))){
var inst_37185 = (state_37216[(2)]);
var state_37216__$1 = state_37216;
if(cljs.core.truth_(inst_37185)){
var statearr_37265_37336 = state_37216__$1;
(statearr_37265_37336[(1)] = (38));

} else {
var statearr_37266_37337 = state_37216__$1;
(statearr_37266_37337[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (17))){
var state_37216__$1 = state_37216;
var statearr_37267_37338 = state_37216__$1;
(statearr_37267_37338[(2)] = recompile_dependents);

(statearr_37267_37338[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (3))){
var state_37216__$1 = state_37216;
var statearr_37268_37339 = state_37216__$1;
(statearr_37268_37339[(2)] = null);

(statearr_37268_37339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (12))){
var inst_37106 = (state_37216[(2)]);
var state_37216__$1 = state_37216;
var statearr_37269_37340 = state_37216__$1;
(statearr_37269_37340[(2)] = inst_37106);

(statearr_37269_37340[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (2))){
var inst_37068 = (state_37216[(13)]);
var inst_37075 = cljs.core.seq.call(null,inst_37068);
var inst_37076 = inst_37075;
var inst_37077 = null;
var inst_37078 = (0);
var inst_37079 = (0);
var state_37216__$1 = (function (){var statearr_37270 = state_37216;
(statearr_37270[(7)] = inst_37077);

(statearr_37270[(8)] = inst_37078);

(statearr_37270[(9)] = inst_37076);

(statearr_37270[(10)] = inst_37079);

return statearr_37270;
})();
var statearr_37271_37341 = state_37216__$1;
(statearr_37271_37341[(2)] = null);

(statearr_37271_37341[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (23))){
var inst_37135 = (state_37216[(26)]);
var inst_37132 = (state_37216[(23)]);
var inst_37129 = (state_37216[(19)]);
var inst_37137 = (state_37216[(24)]);
var inst_37133 = (state_37216[(25)]);
var inst_37140 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37142 = (function (){var all_files = inst_37129;
var res_SINGLEQUOTE_ = inst_37132;
var res = inst_37133;
var files_not_loaded = inst_37135;
var dependencies_that_loaded = inst_37137;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37135,inst_37132,inst_37129,inst_37137,inst_37133,inst_37140,state_val_37217,c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37141){
var map__37272 = p__37141;
var map__37272__$1 = ((((!((map__37272 == null)))?((((map__37272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37272):map__37272);
var request_url = cljs.core.get.call(null,map__37272__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37135,inst_37132,inst_37129,inst_37137,inst_37133,inst_37140,state_val_37217,c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37143 = cljs.core.reverse.call(null,inst_37137);
var inst_37144 = cljs.core.map.call(null,inst_37142,inst_37143);
var inst_37145 = cljs.core.pr_str.call(null,inst_37144);
var inst_37146 = figwheel.client.utils.log.call(null,inst_37145);
var state_37216__$1 = (function (){var statearr_37274 = state_37216;
(statearr_37274[(31)] = inst_37140);

return statearr_37274;
})();
var statearr_37275_37342 = state_37216__$1;
(statearr_37275_37342[(2)] = inst_37146);

(statearr_37275_37342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (35))){
var state_37216__$1 = state_37216;
var statearr_37276_37343 = state_37216__$1;
(statearr_37276_37343[(2)] = true);

(statearr_37276_37343[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (19))){
var inst_37119 = (state_37216[(12)]);
var inst_37125 = figwheel.client.file_reloading.expand_files.call(null,inst_37119);
var state_37216__$1 = state_37216;
var statearr_37277_37344 = state_37216__$1;
(statearr_37277_37344[(2)] = inst_37125);

(statearr_37277_37344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (11))){
var state_37216__$1 = state_37216;
var statearr_37278_37345 = state_37216__$1;
(statearr_37278_37345[(2)] = null);

(statearr_37278_37345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (9))){
var inst_37108 = (state_37216[(2)]);
var state_37216__$1 = state_37216;
var statearr_37279_37346 = state_37216__$1;
(statearr_37279_37346[(2)] = inst_37108);

(statearr_37279_37346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (5))){
var inst_37078 = (state_37216[(8)]);
var inst_37079 = (state_37216[(10)]);
var inst_37081 = (inst_37079 < inst_37078);
var inst_37082 = inst_37081;
var state_37216__$1 = state_37216;
if(cljs.core.truth_(inst_37082)){
var statearr_37280_37347 = state_37216__$1;
(statearr_37280_37347[(1)] = (7));

} else {
var statearr_37281_37348 = state_37216__$1;
(statearr_37281_37348[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (14))){
var inst_37089 = (state_37216[(22)]);
var inst_37098 = cljs.core.first.call(null,inst_37089);
var inst_37099 = figwheel.client.file_reloading.eval_body.call(null,inst_37098,opts);
var inst_37100 = cljs.core.next.call(null,inst_37089);
var inst_37076 = inst_37100;
var inst_37077 = null;
var inst_37078 = (0);
var inst_37079 = (0);
var state_37216__$1 = (function (){var statearr_37282 = state_37216;
(statearr_37282[(7)] = inst_37077);

(statearr_37282[(8)] = inst_37078);

(statearr_37282[(32)] = inst_37099);

(statearr_37282[(9)] = inst_37076);

(statearr_37282[(10)] = inst_37079);

return statearr_37282;
})();
var statearr_37283_37349 = state_37216__$1;
(statearr_37283_37349[(2)] = null);

(statearr_37283_37349[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (45))){
var state_37216__$1 = state_37216;
var statearr_37284_37350 = state_37216__$1;
(statearr_37284_37350[(2)] = null);

(statearr_37284_37350[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (26))){
var inst_37135 = (state_37216[(26)]);
var inst_37132 = (state_37216[(23)]);
var inst_37129 = (state_37216[(19)]);
var inst_37137 = (state_37216[(24)]);
var inst_37133 = (state_37216[(25)]);
var inst_37152 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37154 = (function (){var all_files = inst_37129;
var res_SINGLEQUOTE_ = inst_37132;
var res = inst_37133;
var files_not_loaded = inst_37135;
var dependencies_that_loaded = inst_37137;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37135,inst_37132,inst_37129,inst_37137,inst_37133,inst_37152,state_val_37217,c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37153){
var map__37285 = p__37153;
var map__37285__$1 = ((((!((map__37285 == null)))?((((map__37285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37285):map__37285);
var namespace = cljs.core.get.call(null,map__37285__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37285__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37135,inst_37132,inst_37129,inst_37137,inst_37133,inst_37152,state_val_37217,c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37155 = cljs.core.map.call(null,inst_37154,inst_37133);
var inst_37156 = cljs.core.pr_str.call(null,inst_37155);
var inst_37157 = figwheel.client.utils.log.call(null,inst_37156);
var inst_37158 = (function (){var all_files = inst_37129;
var res_SINGLEQUOTE_ = inst_37132;
var res = inst_37133;
var files_not_loaded = inst_37135;
var dependencies_that_loaded = inst_37137;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37135,inst_37132,inst_37129,inst_37137,inst_37133,inst_37152,inst_37154,inst_37155,inst_37156,inst_37157,state_val_37217,c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37135,inst_37132,inst_37129,inst_37137,inst_37133,inst_37152,inst_37154,inst_37155,inst_37156,inst_37157,state_val_37217,c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37159 = setTimeout(inst_37158,(10));
var state_37216__$1 = (function (){var statearr_37287 = state_37216;
(statearr_37287[(33)] = inst_37152);

(statearr_37287[(34)] = inst_37157);

return statearr_37287;
})();
var statearr_37288_37351 = state_37216__$1;
(statearr_37288_37351[(2)] = inst_37159);

(statearr_37288_37351[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (16))){
var state_37216__$1 = state_37216;
var statearr_37289_37352 = state_37216__$1;
(statearr_37289_37352[(2)] = reload_dependents);

(statearr_37289_37352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (38))){
var inst_37169 = (state_37216[(16)]);
var inst_37187 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37169);
var state_37216__$1 = state_37216;
var statearr_37290_37353 = state_37216__$1;
(statearr_37290_37353[(2)] = inst_37187);

(statearr_37290_37353[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (30))){
var state_37216__$1 = state_37216;
var statearr_37291_37354 = state_37216__$1;
(statearr_37291_37354[(2)] = null);

(statearr_37291_37354[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (10))){
var inst_37089 = (state_37216[(22)]);
var inst_37091 = cljs.core.chunked_seq_QMARK_.call(null,inst_37089);
var state_37216__$1 = state_37216;
if(inst_37091){
var statearr_37292_37355 = state_37216__$1;
(statearr_37292_37355[(1)] = (13));

} else {
var statearr_37293_37356 = state_37216__$1;
(statearr_37293_37356[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (18))){
var inst_37123 = (state_37216[(2)]);
var state_37216__$1 = state_37216;
if(cljs.core.truth_(inst_37123)){
var statearr_37294_37357 = state_37216__$1;
(statearr_37294_37357[(1)] = (19));

} else {
var statearr_37295_37358 = state_37216__$1;
(statearr_37295_37358[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (42))){
var state_37216__$1 = state_37216;
var statearr_37296_37359 = state_37216__$1;
(statearr_37296_37359[(2)] = null);

(statearr_37296_37359[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (37))){
var inst_37182 = (state_37216[(2)]);
var state_37216__$1 = state_37216;
var statearr_37297_37360 = state_37216__$1;
(statearr_37297_37360[(2)] = inst_37182);

(statearr_37297_37360[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37217 === (8))){
var inst_37089 = (state_37216[(22)]);
var inst_37076 = (state_37216[(9)]);
var inst_37089__$1 = cljs.core.seq.call(null,inst_37076);
var state_37216__$1 = (function (){var statearr_37298 = state_37216;
(statearr_37298[(22)] = inst_37089__$1);

return statearr_37298;
})();
if(inst_37089__$1){
var statearr_37299_37361 = state_37216__$1;
(statearr_37299_37361[(1)] = (10));

} else {
var statearr_37300_37362 = state_37216__$1;
(statearr_37300_37362[(1)] = (11));

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
});})(c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33501__auto__,c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33502__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33502__auto____0 = (function (){
var statearr_37301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37301[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33502__auto__);

(statearr_37301[(1)] = (1));

return statearr_37301;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33502__auto____1 = (function (state_37216){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_37216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e37302){if((e37302 instanceof Object)){
var ex__33505__auto__ = e37302;
var statearr_37303_37363 = state_37216;
(statearr_37303_37363[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37364 = state_37216;
state_37216 = G__37364;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33502__auto__ = function(state_37216){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33502__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33502__auto____1.call(this,state_37216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33502__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33502__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33591__auto__ = (function (){var statearr_37304 = f__33590__auto__.call(null);
(statearr_37304[(6)] = c__33589__auto__);

return statearr_37304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto__,map__37061,map__37061__$1,opts,before_jsload,on_jsload,reload_dependents,map__37062,map__37062__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33589__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37367,link){
var map__37368 = p__37367;
var map__37368__$1 = ((((!((map__37368 == null)))?((((map__37368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37368):map__37368);
var file = cljs.core.get.call(null,map__37368__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37368,map__37368__$1,file){
return (function (p1__37365_SHARP_,p2__37366_SHARP_){
if(cljs.core._EQ_.call(null,p1__37365_SHARP_,p2__37366_SHARP_)){
return p1__37365_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37368,map__37368__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37371){
var map__37372 = p__37371;
var map__37372__$1 = ((((!((map__37372 == null)))?((((map__37372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37372):map__37372);
var match_length = cljs.core.get.call(null,map__37372__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37372__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37370_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37370_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37374_SHARP_,p2__37375_SHARP_){
return cljs.core.assoc.call(null,p1__37374_SHARP_,cljs.core.get.call(null,p2__37375_SHARP_,key),p2__37375_SHARP_);
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
var loaded_f_datas_37376 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37376);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37376);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37377,p__37378){
var map__37379 = p__37377;
var map__37379__$1 = ((((!((map__37379 == null)))?((((map__37379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37379):map__37379);
var on_cssload = cljs.core.get.call(null,map__37379__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37380 = p__37378;
var map__37380__$1 = ((((!((map__37380 == null)))?((((map__37380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37380):map__37380);
var files_msg = map__37380__$1;
var files = cljs.core.get.call(null,map__37380__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1513768309484
