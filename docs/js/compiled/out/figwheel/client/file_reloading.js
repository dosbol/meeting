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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36745_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36745_SHARP_));
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
var seq__36746 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36747 = null;
var count__36748 = (0);
var i__36749 = (0);
while(true){
if((i__36749 < count__36748)){
var n = cljs.core._nth.call(null,chunk__36747,i__36749);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36750 = seq__36746;
var G__36751 = chunk__36747;
var G__36752 = count__36748;
var G__36753 = (i__36749 + (1));
seq__36746 = G__36750;
chunk__36747 = G__36751;
count__36748 = G__36752;
i__36749 = G__36753;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36746);
if(temp__4657__auto__){
var seq__36746__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36746__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__36746__$1);
var G__36754 = cljs.core.chunk_rest.call(null,seq__36746__$1);
var G__36755 = c__29125__auto__;
var G__36756 = cljs.core.count.call(null,c__29125__auto__);
var G__36757 = (0);
seq__36746 = G__36754;
chunk__36747 = G__36755;
count__36748 = G__36756;
i__36749 = G__36757;
continue;
} else {
var n = cljs.core.first.call(null,seq__36746__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36758 = cljs.core.next.call(null,seq__36746__$1);
var G__36759 = null;
var G__36760 = (0);
var G__36761 = (0);
seq__36746 = G__36758;
chunk__36747 = G__36759;
count__36748 = G__36760;
i__36749 = G__36761;
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

var seq__36771_36779 = cljs.core.seq.call(null,deps);
var chunk__36772_36780 = null;
var count__36773_36781 = (0);
var i__36774_36782 = (0);
while(true){
if((i__36774_36782 < count__36773_36781)){
var dep_36783 = cljs.core._nth.call(null,chunk__36772_36780,i__36774_36782);
topo_sort_helper_STAR_.call(null,dep_36783,(depth + (1)),state);

var G__36784 = seq__36771_36779;
var G__36785 = chunk__36772_36780;
var G__36786 = count__36773_36781;
var G__36787 = (i__36774_36782 + (1));
seq__36771_36779 = G__36784;
chunk__36772_36780 = G__36785;
count__36773_36781 = G__36786;
i__36774_36782 = G__36787;
continue;
} else {
var temp__4657__auto___36788 = cljs.core.seq.call(null,seq__36771_36779);
if(temp__4657__auto___36788){
var seq__36771_36789__$1 = temp__4657__auto___36788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36771_36789__$1)){
var c__29125__auto___36790 = cljs.core.chunk_first.call(null,seq__36771_36789__$1);
var G__36791 = cljs.core.chunk_rest.call(null,seq__36771_36789__$1);
var G__36792 = c__29125__auto___36790;
var G__36793 = cljs.core.count.call(null,c__29125__auto___36790);
var G__36794 = (0);
seq__36771_36779 = G__36791;
chunk__36772_36780 = G__36792;
count__36773_36781 = G__36793;
i__36774_36782 = G__36794;
continue;
} else {
var dep_36795 = cljs.core.first.call(null,seq__36771_36789__$1);
topo_sort_helper_STAR_.call(null,dep_36795,(depth + (1)),state);

var G__36796 = cljs.core.next.call(null,seq__36771_36789__$1);
var G__36797 = null;
var G__36798 = (0);
var G__36799 = (0);
seq__36771_36779 = G__36796;
chunk__36772_36780 = G__36797;
count__36773_36781 = G__36798;
i__36774_36782 = G__36799;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36775){
var vec__36776 = p__36775;
var seq__36777 = cljs.core.seq.call(null,vec__36776);
var first__36778 = cljs.core.first.call(null,seq__36777);
var seq__36777__$1 = cljs.core.next.call(null,seq__36777);
var x = first__36778;
var xs = seq__36777__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36776,seq__36777,first__36778,seq__36777__$1,x,xs,get_deps__$1){
return (function (p1__36762_SHARP_){
return clojure.set.difference.call(null,p1__36762_SHARP_,x);
});})(vec__36776,seq__36777,first__36778,seq__36777__$1,x,xs,get_deps__$1))
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
var seq__36800 = cljs.core.seq.call(null,provides);
var chunk__36801 = null;
var count__36802 = (0);
var i__36803 = (0);
while(true){
if((i__36803 < count__36802)){
var prov = cljs.core._nth.call(null,chunk__36801,i__36803);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36804_36812 = cljs.core.seq.call(null,requires);
var chunk__36805_36813 = null;
var count__36806_36814 = (0);
var i__36807_36815 = (0);
while(true){
if((i__36807_36815 < count__36806_36814)){
var req_36816 = cljs.core._nth.call(null,chunk__36805_36813,i__36807_36815);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36816,prov);

var G__36817 = seq__36804_36812;
var G__36818 = chunk__36805_36813;
var G__36819 = count__36806_36814;
var G__36820 = (i__36807_36815 + (1));
seq__36804_36812 = G__36817;
chunk__36805_36813 = G__36818;
count__36806_36814 = G__36819;
i__36807_36815 = G__36820;
continue;
} else {
var temp__4657__auto___36821 = cljs.core.seq.call(null,seq__36804_36812);
if(temp__4657__auto___36821){
var seq__36804_36822__$1 = temp__4657__auto___36821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36804_36822__$1)){
var c__29125__auto___36823 = cljs.core.chunk_first.call(null,seq__36804_36822__$1);
var G__36824 = cljs.core.chunk_rest.call(null,seq__36804_36822__$1);
var G__36825 = c__29125__auto___36823;
var G__36826 = cljs.core.count.call(null,c__29125__auto___36823);
var G__36827 = (0);
seq__36804_36812 = G__36824;
chunk__36805_36813 = G__36825;
count__36806_36814 = G__36826;
i__36807_36815 = G__36827;
continue;
} else {
var req_36828 = cljs.core.first.call(null,seq__36804_36822__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36828,prov);

var G__36829 = cljs.core.next.call(null,seq__36804_36822__$1);
var G__36830 = null;
var G__36831 = (0);
var G__36832 = (0);
seq__36804_36812 = G__36829;
chunk__36805_36813 = G__36830;
count__36806_36814 = G__36831;
i__36807_36815 = G__36832;
continue;
}
} else {
}
}
break;
}

var G__36833 = seq__36800;
var G__36834 = chunk__36801;
var G__36835 = count__36802;
var G__36836 = (i__36803 + (1));
seq__36800 = G__36833;
chunk__36801 = G__36834;
count__36802 = G__36835;
i__36803 = G__36836;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36800);
if(temp__4657__auto__){
var seq__36800__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36800__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__36800__$1);
var G__36837 = cljs.core.chunk_rest.call(null,seq__36800__$1);
var G__36838 = c__29125__auto__;
var G__36839 = cljs.core.count.call(null,c__29125__auto__);
var G__36840 = (0);
seq__36800 = G__36837;
chunk__36801 = G__36838;
count__36802 = G__36839;
i__36803 = G__36840;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36800__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36808_36841 = cljs.core.seq.call(null,requires);
var chunk__36809_36842 = null;
var count__36810_36843 = (0);
var i__36811_36844 = (0);
while(true){
if((i__36811_36844 < count__36810_36843)){
var req_36845 = cljs.core._nth.call(null,chunk__36809_36842,i__36811_36844);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36845,prov);

var G__36846 = seq__36808_36841;
var G__36847 = chunk__36809_36842;
var G__36848 = count__36810_36843;
var G__36849 = (i__36811_36844 + (1));
seq__36808_36841 = G__36846;
chunk__36809_36842 = G__36847;
count__36810_36843 = G__36848;
i__36811_36844 = G__36849;
continue;
} else {
var temp__4657__auto___36850__$1 = cljs.core.seq.call(null,seq__36808_36841);
if(temp__4657__auto___36850__$1){
var seq__36808_36851__$1 = temp__4657__auto___36850__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36808_36851__$1)){
var c__29125__auto___36852 = cljs.core.chunk_first.call(null,seq__36808_36851__$1);
var G__36853 = cljs.core.chunk_rest.call(null,seq__36808_36851__$1);
var G__36854 = c__29125__auto___36852;
var G__36855 = cljs.core.count.call(null,c__29125__auto___36852);
var G__36856 = (0);
seq__36808_36841 = G__36853;
chunk__36809_36842 = G__36854;
count__36810_36843 = G__36855;
i__36811_36844 = G__36856;
continue;
} else {
var req_36857 = cljs.core.first.call(null,seq__36808_36851__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36857,prov);

var G__36858 = cljs.core.next.call(null,seq__36808_36851__$1);
var G__36859 = null;
var G__36860 = (0);
var G__36861 = (0);
seq__36808_36841 = G__36858;
chunk__36809_36842 = G__36859;
count__36810_36843 = G__36860;
i__36811_36844 = G__36861;
continue;
}
} else {
}
}
break;
}

var G__36862 = cljs.core.next.call(null,seq__36800__$1);
var G__36863 = null;
var G__36864 = (0);
var G__36865 = (0);
seq__36800 = G__36862;
chunk__36801 = G__36863;
count__36802 = G__36864;
i__36803 = G__36865;
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
var seq__36866_36870 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36867_36871 = null;
var count__36868_36872 = (0);
var i__36869_36873 = (0);
while(true){
if((i__36869_36873 < count__36868_36872)){
var ns_36874 = cljs.core._nth.call(null,chunk__36867_36871,i__36869_36873);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36874);

var G__36875 = seq__36866_36870;
var G__36876 = chunk__36867_36871;
var G__36877 = count__36868_36872;
var G__36878 = (i__36869_36873 + (1));
seq__36866_36870 = G__36875;
chunk__36867_36871 = G__36876;
count__36868_36872 = G__36877;
i__36869_36873 = G__36878;
continue;
} else {
var temp__4657__auto___36879 = cljs.core.seq.call(null,seq__36866_36870);
if(temp__4657__auto___36879){
var seq__36866_36880__$1 = temp__4657__auto___36879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36866_36880__$1)){
var c__29125__auto___36881 = cljs.core.chunk_first.call(null,seq__36866_36880__$1);
var G__36882 = cljs.core.chunk_rest.call(null,seq__36866_36880__$1);
var G__36883 = c__29125__auto___36881;
var G__36884 = cljs.core.count.call(null,c__29125__auto___36881);
var G__36885 = (0);
seq__36866_36870 = G__36882;
chunk__36867_36871 = G__36883;
count__36868_36872 = G__36884;
i__36869_36873 = G__36885;
continue;
} else {
var ns_36886 = cljs.core.first.call(null,seq__36866_36880__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36886);

var G__36887 = cljs.core.next.call(null,seq__36866_36880__$1);
var G__36888 = null;
var G__36889 = (0);
var G__36890 = (0);
seq__36866_36870 = G__36887;
chunk__36867_36871 = G__36888;
count__36868_36872 = G__36889;
i__36869_36873 = G__36890;
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
var G__36891__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36891 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36892__i = 0, G__36892__a = new Array(arguments.length -  0);
while (G__36892__i < G__36892__a.length) {G__36892__a[G__36892__i] = arguments[G__36892__i + 0]; ++G__36892__i;}
  args = new cljs.core.IndexedSeq(G__36892__a,0,null);
} 
return G__36891__delegate.call(this,args);};
G__36891.cljs$lang$maxFixedArity = 0;
G__36891.cljs$lang$applyTo = (function (arglist__36893){
var args = cljs.core.seq(arglist__36893);
return G__36891__delegate(args);
});
G__36891.cljs$core$IFn$_invoke$arity$variadic = G__36891__delegate;
return G__36891;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36894_SHARP_,p2__36895_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36894_SHARP_)].join('')),p2__36895_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36896_SHARP_,p2__36897_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36896_SHARP_)].join(''),p2__36897_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36898 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36898.addCallback(((function (G__36898){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36898))
);

G__36898.addErrback(((function (G__36898){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36898))
);

return G__36898;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36899 = cljs.core._EQ_;
var expr__36900 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36899.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36900))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36899,expr__36900){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36899,expr__36900))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36899,expr__36900){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36902){if((e36902 instanceof Error)){
var e = e36902;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36902;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36899,expr__36900))
} else {
if(cljs.core.truth_(pred__36899.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36900))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36899.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36900))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36899.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36900))){
return ((function (pred__36899,expr__36900){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36903){if((e36903 instanceof Error)){
var e = e36903;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36903;

}
}})());
});
;})(pred__36899,expr__36900))
} else {
return ((function (pred__36899,expr__36900){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36899,expr__36900))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36904,callback){
var map__36905 = p__36904;
var map__36905__$1 = ((((!((map__36905 == null)))?((((map__36905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36905):map__36905);
var file_msg = map__36905__$1;
var request_url = cljs.core.get.call(null,map__36905__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36905,map__36905__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36905,map__36905__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__33575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto__){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto__){
return (function (state_36929){
var state_val_36930 = (state_36929[(1)]);
if((state_val_36930 === (7))){
var inst_36925 = (state_36929[(2)]);
var state_36929__$1 = state_36929;
var statearr_36931_36948 = state_36929__$1;
(statearr_36931_36948[(2)] = inst_36925);

(statearr_36931_36948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36930 === (1))){
var state_36929__$1 = state_36929;
var statearr_36932_36949 = state_36929__$1;
(statearr_36932_36949[(2)] = null);

(statearr_36932_36949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36930 === (4))){
var inst_36909 = (state_36929[(7)]);
var inst_36909__$1 = (state_36929[(2)]);
var state_36929__$1 = (function (){var statearr_36933 = state_36929;
(statearr_36933[(7)] = inst_36909__$1);

return statearr_36933;
})();
if(cljs.core.truth_(inst_36909__$1)){
var statearr_36934_36950 = state_36929__$1;
(statearr_36934_36950[(1)] = (5));

} else {
var statearr_36935_36951 = state_36929__$1;
(statearr_36935_36951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36930 === (6))){
var state_36929__$1 = state_36929;
var statearr_36936_36952 = state_36929__$1;
(statearr_36936_36952[(2)] = null);

(statearr_36936_36952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36930 === (3))){
var inst_36927 = (state_36929[(2)]);
var state_36929__$1 = state_36929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36929__$1,inst_36927);
} else {
if((state_val_36930 === (2))){
var state_36929__$1 = state_36929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36929__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36930 === (11))){
var inst_36921 = (state_36929[(2)]);
var state_36929__$1 = (function (){var statearr_36937 = state_36929;
(statearr_36937[(8)] = inst_36921);

return statearr_36937;
})();
var statearr_36938_36953 = state_36929__$1;
(statearr_36938_36953[(2)] = null);

(statearr_36938_36953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36930 === (9))){
var inst_36915 = (state_36929[(9)]);
var inst_36913 = (state_36929[(10)]);
var inst_36917 = inst_36915.call(null,inst_36913);
var state_36929__$1 = state_36929;
var statearr_36939_36954 = state_36929__$1;
(statearr_36939_36954[(2)] = inst_36917);

(statearr_36939_36954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36930 === (5))){
var inst_36909 = (state_36929[(7)]);
var inst_36911 = figwheel.client.file_reloading.blocking_load.call(null,inst_36909);
var state_36929__$1 = state_36929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36929__$1,(8),inst_36911);
} else {
if((state_val_36930 === (10))){
var inst_36913 = (state_36929[(10)]);
var inst_36919 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36913);
var state_36929__$1 = state_36929;
var statearr_36940_36955 = state_36929__$1;
(statearr_36940_36955[(2)] = inst_36919);

(statearr_36940_36955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36930 === (8))){
var inst_36909 = (state_36929[(7)]);
var inst_36915 = (state_36929[(9)]);
var inst_36913 = (state_36929[(2)]);
var inst_36914 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36915__$1 = cljs.core.get.call(null,inst_36914,inst_36909);
var state_36929__$1 = (function (){var statearr_36941 = state_36929;
(statearr_36941[(9)] = inst_36915__$1);

(statearr_36941[(10)] = inst_36913);

return statearr_36941;
})();
if(cljs.core.truth_(inst_36915__$1)){
var statearr_36942_36956 = state_36929__$1;
(statearr_36942_36956[(1)] = (9));

} else {
var statearr_36943_36957 = state_36929__$1;
(statearr_36943_36957[(1)] = (10));

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
});})(c__33575__auto__))
;
return ((function (switch__33487__auto__,c__33575__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33488__auto__ = null;
var figwheel$client$file_reloading$state_machine__33488__auto____0 = (function (){
var statearr_36944 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36944[(0)] = figwheel$client$file_reloading$state_machine__33488__auto__);

(statearr_36944[(1)] = (1));

return statearr_36944;
});
var figwheel$client$file_reloading$state_machine__33488__auto____1 = (function (state_36929){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_36929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e36945){if((e36945 instanceof Object)){
var ex__33491__auto__ = e36945;
var statearr_36946_36958 = state_36929;
(statearr_36946_36958[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36959 = state_36929;
state_36929 = G__36959;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33488__auto__ = function(state_36929){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33488__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33488__auto____1.call(this,state_36929);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33488__auto____0;
figwheel$client$file_reloading$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33488__auto____1;
return figwheel$client$file_reloading$state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto__))
})();
var state__33577__auto__ = (function (){var statearr_36947 = f__33576__auto__.call(null);
(statearr_36947[(6)] = c__33575__auto__);

return statearr_36947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto__))
);

return c__33575__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36960,callback){
var map__36961 = p__36960;
var map__36961__$1 = ((((!((map__36961 == null)))?((((map__36961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36961):map__36961);
var file_msg = map__36961__$1;
var namespace = cljs.core.get.call(null,map__36961__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36961,map__36961__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36961,map__36961__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36963){
var map__36964 = p__36963;
var map__36964__$1 = ((((!((map__36964 == null)))?((((map__36964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36964):map__36964);
var file_msg = map__36964__$1;
var namespace = cljs.core.get.call(null,map__36964__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36966){
var map__36967 = p__36966;
var map__36967__$1 = ((((!((map__36967 == null)))?((((map__36967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36967):map__36967);
var file_msg = map__36967__$1;
var namespace = cljs.core.get.call(null,map__36967__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36969,callback){
var map__36970 = p__36969;
var map__36970__$1 = ((((!((map__36970 == null)))?((((map__36970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36970):map__36970);
var file_msg = map__36970__$1;
var request_url = cljs.core.get.call(null,map__36970__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36970__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33575__auto___37020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___37020,out){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___37020,out){
return (function (state_37005){
var state_val_37006 = (state_37005[(1)]);
if((state_val_37006 === (1))){
var inst_36979 = cljs.core.seq.call(null,files);
var inst_36980 = cljs.core.first.call(null,inst_36979);
var inst_36981 = cljs.core.next.call(null,inst_36979);
var inst_36982 = files;
var state_37005__$1 = (function (){var statearr_37007 = state_37005;
(statearr_37007[(7)] = inst_36982);

(statearr_37007[(8)] = inst_36981);

(statearr_37007[(9)] = inst_36980);

return statearr_37007;
})();
var statearr_37008_37021 = state_37005__$1;
(statearr_37008_37021[(2)] = null);

(statearr_37008_37021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37006 === (2))){
var inst_36982 = (state_37005[(7)]);
var inst_36988 = (state_37005[(10)]);
var inst_36987 = cljs.core.seq.call(null,inst_36982);
var inst_36988__$1 = cljs.core.first.call(null,inst_36987);
var inst_36989 = cljs.core.next.call(null,inst_36987);
var inst_36990 = (inst_36988__$1 == null);
var inst_36991 = cljs.core.not.call(null,inst_36990);
var state_37005__$1 = (function (){var statearr_37009 = state_37005;
(statearr_37009[(10)] = inst_36988__$1);

(statearr_37009[(11)] = inst_36989);

return statearr_37009;
})();
if(inst_36991){
var statearr_37010_37022 = state_37005__$1;
(statearr_37010_37022[(1)] = (4));

} else {
var statearr_37011_37023 = state_37005__$1;
(statearr_37011_37023[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37006 === (3))){
var inst_37003 = (state_37005[(2)]);
var state_37005__$1 = state_37005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37005__$1,inst_37003);
} else {
if((state_val_37006 === (4))){
var inst_36988 = (state_37005[(10)]);
var inst_36993 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36988);
var state_37005__$1 = state_37005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37005__$1,(7),inst_36993);
} else {
if((state_val_37006 === (5))){
var inst_36999 = cljs.core.async.close_BANG_.call(null,out);
var state_37005__$1 = state_37005;
var statearr_37012_37024 = state_37005__$1;
(statearr_37012_37024[(2)] = inst_36999);

(statearr_37012_37024[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37006 === (6))){
var inst_37001 = (state_37005[(2)]);
var state_37005__$1 = state_37005;
var statearr_37013_37025 = state_37005__$1;
(statearr_37013_37025[(2)] = inst_37001);

(statearr_37013_37025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37006 === (7))){
var inst_36989 = (state_37005[(11)]);
var inst_36995 = (state_37005[(2)]);
var inst_36996 = cljs.core.async.put_BANG_.call(null,out,inst_36995);
var inst_36982 = inst_36989;
var state_37005__$1 = (function (){var statearr_37014 = state_37005;
(statearr_37014[(12)] = inst_36996);

(statearr_37014[(7)] = inst_36982);

return statearr_37014;
})();
var statearr_37015_37026 = state_37005__$1;
(statearr_37015_37026[(2)] = null);

(statearr_37015_37026[(1)] = (2));


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
});})(c__33575__auto___37020,out))
;
return ((function (switch__33487__auto__,c__33575__auto___37020,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33488__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33488__auto____0 = (function (){
var statearr_37016 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37016[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33488__auto__);

(statearr_37016[(1)] = (1));

return statearr_37016;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33488__auto____1 = (function (state_37005){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_37005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e37017){if((e37017 instanceof Object)){
var ex__33491__auto__ = e37017;
var statearr_37018_37027 = state_37005;
(statearr_37018_37027[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37028 = state_37005;
state_37005 = G__37028;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33488__auto__ = function(state_37005){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33488__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33488__auto____1.call(this,state_37005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33488__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33488__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___37020,out))
})();
var state__33577__auto__ = (function (){var statearr_37019 = f__33576__auto__.call(null);
(statearr_37019[(6)] = c__33575__auto___37020);

return statearr_37019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___37020,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37029,opts){
var map__37030 = p__37029;
var map__37030__$1 = ((((!((map__37030 == null)))?((((map__37030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37030):map__37030);
var eval_body = cljs.core.get.call(null,map__37030__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37030__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37032){var e = e37032;
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
return (function (p1__37033_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37033_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37034){
var vec__37035 = p__37034;
var k = cljs.core.nth.call(null,vec__37035,(0),null);
var v = cljs.core.nth.call(null,vec__37035,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37038){
var vec__37039 = p__37038;
var k = cljs.core.nth.call(null,vec__37039,(0),null);
var v = cljs.core.nth.call(null,vec__37039,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37045,p__37046){
var map__37047 = p__37045;
var map__37047__$1 = ((((!((map__37047 == null)))?((((map__37047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37047):map__37047);
var opts = map__37047__$1;
var before_jsload = cljs.core.get.call(null,map__37047__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37047__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37047__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37048 = p__37046;
var map__37048__$1 = ((((!((map__37048 == null)))?((((map__37048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37048.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37048):map__37048);
var msg = map__37048__$1;
var files = cljs.core.get.call(null,map__37048__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37048__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37048__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37202){
var state_val_37203 = (state_37202[(1)]);
if((state_val_37203 === (7))){
var inst_37062 = (state_37202[(7)]);
var inst_37063 = (state_37202[(8)]);
var inst_37064 = (state_37202[(9)]);
var inst_37065 = (state_37202[(10)]);
var inst_37070 = cljs.core._nth.call(null,inst_37063,inst_37065);
var inst_37071 = figwheel.client.file_reloading.eval_body.call(null,inst_37070,opts);
var inst_37072 = (inst_37065 + (1));
var tmp37204 = inst_37062;
var tmp37205 = inst_37063;
var tmp37206 = inst_37064;
var inst_37062__$1 = tmp37204;
var inst_37063__$1 = tmp37205;
var inst_37064__$1 = tmp37206;
var inst_37065__$1 = inst_37072;
var state_37202__$1 = (function (){var statearr_37207 = state_37202;
(statearr_37207[(7)] = inst_37062__$1);

(statearr_37207[(8)] = inst_37063__$1);

(statearr_37207[(9)] = inst_37064__$1);

(statearr_37207[(10)] = inst_37065__$1);

(statearr_37207[(11)] = inst_37071);

return statearr_37207;
})();
var statearr_37208_37291 = state_37202__$1;
(statearr_37208_37291[(2)] = null);

(statearr_37208_37291[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (20))){
var inst_37105 = (state_37202[(12)]);
var inst_37113 = figwheel.client.file_reloading.sort_files.call(null,inst_37105);
var state_37202__$1 = state_37202;
var statearr_37209_37292 = state_37202__$1;
(statearr_37209_37292[(2)] = inst_37113);

(statearr_37209_37292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (27))){
var state_37202__$1 = state_37202;
var statearr_37210_37293 = state_37202__$1;
(statearr_37210_37293[(2)] = null);

(statearr_37210_37293[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (1))){
var inst_37054 = (state_37202[(13)]);
var inst_37051 = before_jsload.call(null,files);
var inst_37052 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37053 = (function (){return ((function (inst_37054,inst_37051,inst_37052,state_val_37203,c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37042_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37042_SHARP_);
});
;})(inst_37054,inst_37051,inst_37052,state_val_37203,c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37054__$1 = cljs.core.filter.call(null,inst_37053,files);
var inst_37055 = cljs.core.not_empty.call(null,inst_37054__$1);
var state_37202__$1 = (function (){var statearr_37211 = state_37202;
(statearr_37211[(14)] = inst_37052);

(statearr_37211[(15)] = inst_37051);

(statearr_37211[(13)] = inst_37054__$1);

return statearr_37211;
})();
if(cljs.core.truth_(inst_37055)){
var statearr_37212_37294 = state_37202__$1;
(statearr_37212_37294[(1)] = (2));

} else {
var statearr_37213_37295 = state_37202__$1;
(statearr_37213_37295[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (24))){
var state_37202__$1 = state_37202;
var statearr_37214_37296 = state_37202__$1;
(statearr_37214_37296[(2)] = null);

(statearr_37214_37296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (39))){
var inst_37155 = (state_37202[(16)]);
var state_37202__$1 = state_37202;
var statearr_37215_37297 = state_37202__$1;
(statearr_37215_37297[(2)] = inst_37155);

(statearr_37215_37297[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (46))){
var inst_37197 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
var statearr_37216_37298 = state_37202__$1;
(statearr_37216_37298[(2)] = inst_37197);

(statearr_37216_37298[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (4))){
var inst_37099 = (state_37202[(2)]);
var inst_37100 = cljs.core.List.EMPTY;
var inst_37101 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37100);
var inst_37102 = (function (){return ((function (inst_37099,inst_37100,inst_37101,state_val_37203,c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37043_SHARP_){
var and__28274__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37043_SHARP_);
if(cljs.core.truth_(and__28274__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37043_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37043_SHARP_)));
} else {
return and__28274__auto__;
}
});
;})(inst_37099,inst_37100,inst_37101,state_val_37203,c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37103 = cljs.core.filter.call(null,inst_37102,files);
var inst_37104 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37105 = cljs.core.concat.call(null,inst_37103,inst_37104);
var state_37202__$1 = (function (){var statearr_37217 = state_37202;
(statearr_37217[(17)] = inst_37101);

(statearr_37217[(18)] = inst_37099);

(statearr_37217[(12)] = inst_37105);

return statearr_37217;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37218_37299 = state_37202__$1;
(statearr_37218_37299[(1)] = (16));

} else {
var statearr_37219_37300 = state_37202__$1;
(statearr_37219_37300[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (15))){
var inst_37089 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
var statearr_37220_37301 = state_37202__$1;
(statearr_37220_37301[(2)] = inst_37089);

(statearr_37220_37301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (21))){
var inst_37115 = (state_37202[(19)]);
var inst_37115__$1 = (state_37202[(2)]);
var inst_37116 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37115__$1);
var state_37202__$1 = (function (){var statearr_37221 = state_37202;
(statearr_37221[(19)] = inst_37115__$1);

return statearr_37221;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37202__$1,(22),inst_37116);
} else {
if((state_val_37203 === (31))){
var inst_37200 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37202__$1,inst_37200);
} else {
if((state_val_37203 === (32))){
var inst_37155 = (state_37202[(16)]);
var inst_37160 = inst_37155.cljs$lang$protocol_mask$partition0$;
var inst_37161 = (inst_37160 & (64));
var inst_37162 = inst_37155.cljs$core$ISeq$;
var inst_37163 = (cljs.core.PROTOCOL_SENTINEL === inst_37162);
var inst_37164 = (inst_37161) || (inst_37163);
var state_37202__$1 = state_37202;
if(cljs.core.truth_(inst_37164)){
var statearr_37222_37302 = state_37202__$1;
(statearr_37222_37302[(1)] = (35));

} else {
var statearr_37223_37303 = state_37202__$1;
(statearr_37223_37303[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (40))){
var inst_37177 = (state_37202[(20)]);
var inst_37176 = (state_37202[(2)]);
var inst_37177__$1 = cljs.core.get.call(null,inst_37176,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37178 = cljs.core.get.call(null,inst_37176,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37179 = cljs.core.not_empty.call(null,inst_37177__$1);
var state_37202__$1 = (function (){var statearr_37224 = state_37202;
(statearr_37224[(20)] = inst_37177__$1);

(statearr_37224[(21)] = inst_37178);

return statearr_37224;
})();
if(cljs.core.truth_(inst_37179)){
var statearr_37225_37304 = state_37202__$1;
(statearr_37225_37304[(1)] = (41));

} else {
var statearr_37226_37305 = state_37202__$1;
(statearr_37226_37305[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (33))){
var state_37202__$1 = state_37202;
var statearr_37227_37306 = state_37202__$1;
(statearr_37227_37306[(2)] = false);

(statearr_37227_37306[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (13))){
var inst_37075 = (state_37202[(22)]);
var inst_37079 = cljs.core.chunk_first.call(null,inst_37075);
var inst_37080 = cljs.core.chunk_rest.call(null,inst_37075);
var inst_37081 = cljs.core.count.call(null,inst_37079);
var inst_37062 = inst_37080;
var inst_37063 = inst_37079;
var inst_37064 = inst_37081;
var inst_37065 = (0);
var state_37202__$1 = (function (){var statearr_37228 = state_37202;
(statearr_37228[(7)] = inst_37062);

(statearr_37228[(8)] = inst_37063);

(statearr_37228[(9)] = inst_37064);

(statearr_37228[(10)] = inst_37065);

return statearr_37228;
})();
var statearr_37229_37307 = state_37202__$1;
(statearr_37229_37307[(2)] = null);

(statearr_37229_37307[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (22))){
var inst_37118 = (state_37202[(23)]);
var inst_37123 = (state_37202[(24)]);
var inst_37115 = (state_37202[(19)]);
var inst_37119 = (state_37202[(25)]);
var inst_37118__$1 = (state_37202[(2)]);
var inst_37119__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37118__$1);
var inst_37120 = (function (){var all_files = inst_37115;
var res_SINGLEQUOTE_ = inst_37118__$1;
var res = inst_37119__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37118,inst_37123,inst_37115,inst_37119,inst_37118__$1,inst_37119__$1,state_val_37203,c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37044_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37044_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37118,inst_37123,inst_37115,inst_37119,inst_37118__$1,inst_37119__$1,state_val_37203,c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37121 = cljs.core.filter.call(null,inst_37120,inst_37118__$1);
var inst_37122 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37123__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37122);
var inst_37124 = cljs.core.not_empty.call(null,inst_37123__$1);
var state_37202__$1 = (function (){var statearr_37230 = state_37202;
(statearr_37230[(23)] = inst_37118__$1);

(statearr_37230[(24)] = inst_37123__$1);

(statearr_37230[(26)] = inst_37121);

(statearr_37230[(25)] = inst_37119__$1);

return statearr_37230;
})();
if(cljs.core.truth_(inst_37124)){
var statearr_37231_37308 = state_37202__$1;
(statearr_37231_37308[(1)] = (23));

} else {
var statearr_37232_37309 = state_37202__$1;
(statearr_37232_37309[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (36))){
var state_37202__$1 = state_37202;
var statearr_37233_37310 = state_37202__$1;
(statearr_37233_37310[(2)] = false);

(statearr_37233_37310[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (41))){
var inst_37177 = (state_37202[(20)]);
var inst_37181 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37182 = cljs.core.map.call(null,inst_37181,inst_37177);
var inst_37183 = cljs.core.pr_str.call(null,inst_37182);
var inst_37184 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37183)].join('');
var inst_37185 = figwheel.client.utils.log.call(null,inst_37184);
var state_37202__$1 = state_37202;
var statearr_37234_37311 = state_37202__$1;
(statearr_37234_37311[(2)] = inst_37185);

(statearr_37234_37311[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (43))){
var inst_37178 = (state_37202[(21)]);
var inst_37188 = (state_37202[(2)]);
var inst_37189 = cljs.core.not_empty.call(null,inst_37178);
var state_37202__$1 = (function (){var statearr_37235 = state_37202;
(statearr_37235[(27)] = inst_37188);

return statearr_37235;
})();
if(cljs.core.truth_(inst_37189)){
var statearr_37236_37312 = state_37202__$1;
(statearr_37236_37312[(1)] = (44));

} else {
var statearr_37237_37313 = state_37202__$1;
(statearr_37237_37313[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (29))){
var inst_37118 = (state_37202[(23)]);
var inst_37123 = (state_37202[(24)]);
var inst_37121 = (state_37202[(26)]);
var inst_37115 = (state_37202[(19)]);
var inst_37155 = (state_37202[(16)]);
var inst_37119 = (state_37202[(25)]);
var inst_37151 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37154 = (function (){var all_files = inst_37115;
var res_SINGLEQUOTE_ = inst_37118;
var res = inst_37119;
var files_not_loaded = inst_37121;
var dependencies_that_loaded = inst_37123;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37118,inst_37123,inst_37121,inst_37115,inst_37155,inst_37119,inst_37151,state_val_37203,c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37153){
var map__37238 = p__37153;
var map__37238__$1 = ((((!((map__37238 == null)))?((((map__37238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37238):map__37238);
var namespace = cljs.core.get.call(null,map__37238__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37118,inst_37123,inst_37121,inst_37115,inst_37155,inst_37119,inst_37151,state_val_37203,c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37155__$1 = cljs.core.group_by.call(null,inst_37154,inst_37121);
var inst_37157 = (inst_37155__$1 == null);
var inst_37158 = cljs.core.not.call(null,inst_37157);
var state_37202__$1 = (function (){var statearr_37240 = state_37202;
(statearr_37240[(28)] = inst_37151);

(statearr_37240[(16)] = inst_37155__$1);

return statearr_37240;
})();
if(inst_37158){
var statearr_37241_37314 = state_37202__$1;
(statearr_37241_37314[(1)] = (32));

} else {
var statearr_37242_37315 = state_37202__$1;
(statearr_37242_37315[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (44))){
var inst_37178 = (state_37202[(21)]);
var inst_37191 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37178);
var inst_37192 = cljs.core.pr_str.call(null,inst_37191);
var inst_37193 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37192)].join('');
var inst_37194 = figwheel.client.utils.log.call(null,inst_37193);
var state_37202__$1 = state_37202;
var statearr_37243_37316 = state_37202__$1;
(statearr_37243_37316[(2)] = inst_37194);

(statearr_37243_37316[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (6))){
var inst_37096 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
var statearr_37244_37317 = state_37202__$1;
(statearr_37244_37317[(2)] = inst_37096);

(statearr_37244_37317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (28))){
var inst_37121 = (state_37202[(26)]);
var inst_37148 = (state_37202[(2)]);
var inst_37149 = cljs.core.not_empty.call(null,inst_37121);
var state_37202__$1 = (function (){var statearr_37245 = state_37202;
(statearr_37245[(29)] = inst_37148);

return statearr_37245;
})();
if(cljs.core.truth_(inst_37149)){
var statearr_37246_37318 = state_37202__$1;
(statearr_37246_37318[(1)] = (29));

} else {
var statearr_37247_37319 = state_37202__$1;
(statearr_37247_37319[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (25))){
var inst_37119 = (state_37202[(25)]);
var inst_37135 = (state_37202[(2)]);
var inst_37136 = cljs.core.not_empty.call(null,inst_37119);
var state_37202__$1 = (function (){var statearr_37248 = state_37202;
(statearr_37248[(30)] = inst_37135);

return statearr_37248;
})();
if(cljs.core.truth_(inst_37136)){
var statearr_37249_37320 = state_37202__$1;
(statearr_37249_37320[(1)] = (26));

} else {
var statearr_37250_37321 = state_37202__$1;
(statearr_37250_37321[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (34))){
var inst_37171 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
if(cljs.core.truth_(inst_37171)){
var statearr_37251_37322 = state_37202__$1;
(statearr_37251_37322[(1)] = (38));

} else {
var statearr_37252_37323 = state_37202__$1;
(statearr_37252_37323[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (17))){
var state_37202__$1 = state_37202;
var statearr_37253_37324 = state_37202__$1;
(statearr_37253_37324[(2)] = recompile_dependents);

(statearr_37253_37324[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (3))){
var state_37202__$1 = state_37202;
var statearr_37254_37325 = state_37202__$1;
(statearr_37254_37325[(2)] = null);

(statearr_37254_37325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (12))){
var inst_37092 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
var statearr_37255_37326 = state_37202__$1;
(statearr_37255_37326[(2)] = inst_37092);

(statearr_37255_37326[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (2))){
var inst_37054 = (state_37202[(13)]);
var inst_37061 = cljs.core.seq.call(null,inst_37054);
var inst_37062 = inst_37061;
var inst_37063 = null;
var inst_37064 = (0);
var inst_37065 = (0);
var state_37202__$1 = (function (){var statearr_37256 = state_37202;
(statearr_37256[(7)] = inst_37062);

(statearr_37256[(8)] = inst_37063);

(statearr_37256[(9)] = inst_37064);

(statearr_37256[(10)] = inst_37065);

return statearr_37256;
})();
var statearr_37257_37327 = state_37202__$1;
(statearr_37257_37327[(2)] = null);

(statearr_37257_37327[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (23))){
var inst_37118 = (state_37202[(23)]);
var inst_37123 = (state_37202[(24)]);
var inst_37121 = (state_37202[(26)]);
var inst_37115 = (state_37202[(19)]);
var inst_37119 = (state_37202[(25)]);
var inst_37126 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37128 = (function (){var all_files = inst_37115;
var res_SINGLEQUOTE_ = inst_37118;
var res = inst_37119;
var files_not_loaded = inst_37121;
var dependencies_that_loaded = inst_37123;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37118,inst_37123,inst_37121,inst_37115,inst_37119,inst_37126,state_val_37203,c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37127){
var map__37258 = p__37127;
var map__37258__$1 = ((((!((map__37258 == null)))?((((map__37258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37258):map__37258);
var request_url = cljs.core.get.call(null,map__37258__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37118,inst_37123,inst_37121,inst_37115,inst_37119,inst_37126,state_val_37203,c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37129 = cljs.core.reverse.call(null,inst_37123);
var inst_37130 = cljs.core.map.call(null,inst_37128,inst_37129);
var inst_37131 = cljs.core.pr_str.call(null,inst_37130);
var inst_37132 = figwheel.client.utils.log.call(null,inst_37131);
var state_37202__$1 = (function (){var statearr_37260 = state_37202;
(statearr_37260[(31)] = inst_37126);

return statearr_37260;
})();
var statearr_37261_37328 = state_37202__$1;
(statearr_37261_37328[(2)] = inst_37132);

(statearr_37261_37328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (35))){
var state_37202__$1 = state_37202;
var statearr_37262_37329 = state_37202__$1;
(statearr_37262_37329[(2)] = true);

(statearr_37262_37329[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (19))){
var inst_37105 = (state_37202[(12)]);
var inst_37111 = figwheel.client.file_reloading.expand_files.call(null,inst_37105);
var state_37202__$1 = state_37202;
var statearr_37263_37330 = state_37202__$1;
(statearr_37263_37330[(2)] = inst_37111);

(statearr_37263_37330[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (11))){
var state_37202__$1 = state_37202;
var statearr_37264_37331 = state_37202__$1;
(statearr_37264_37331[(2)] = null);

(statearr_37264_37331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (9))){
var inst_37094 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
var statearr_37265_37332 = state_37202__$1;
(statearr_37265_37332[(2)] = inst_37094);

(statearr_37265_37332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (5))){
var inst_37064 = (state_37202[(9)]);
var inst_37065 = (state_37202[(10)]);
var inst_37067 = (inst_37065 < inst_37064);
var inst_37068 = inst_37067;
var state_37202__$1 = state_37202;
if(cljs.core.truth_(inst_37068)){
var statearr_37266_37333 = state_37202__$1;
(statearr_37266_37333[(1)] = (7));

} else {
var statearr_37267_37334 = state_37202__$1;
(statearr_37267_37334[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (14))){
var inst_37075 = (state_37202[(22)]);
var inst_37084 = cljs.core.first.call(null,inst_37075);
var inst_37085 = figwheel.client.file_reloading.eval_body.call(null,inst_37084,opts);
var inst_37086 = cljs.core.next.call(null,inst_37075);
var inst_37062 = inst_37086;
var inst_37063 = null;
var inst_37064 = (0);
var inst_37065 = (0);
var state_37202__$1 = (function (){var statearr_37268 = state_37202;
(statearr_37268[(7)] = inst_37062);

(statearr_37268[(8)] = inst_37063);

(statearr_37268[(9)] = inst_37064);

(statearr_37268[(32)] = inst_37085);

(statearr_37268[(10)] = inst_37065);

return statearr_37268;
})();
var statearr_37269_37335 = state_37202__$1;
(statearr_37269_37335[(2)] = null);

(statearr_37269_37335[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (45))){
var state_37202__$1 = state_37202;
var statearr_37270_37336 = state_37202__$1;
(statearr_37270_37336[(2)] = null);

(statearr_37270_37336[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (26))){
var inst_37118 = (state_37202[(23)]);
var inst_37123 = (state_37202[(24)]);
var inst_37121 = (state_37202[(26)]);
var inst_37115 = (state_37202[(19)]);
var inst_37119 = (state_37202[(25)]);
var inst_37138 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37140 = (function (){var all_files = inst_37115;
var res_SINGLEQUOTE_ = inst_37118;
var res = inst_37119;
var files_not_loaded = inst_37121;
var dependencies_that_loaded = inst_37123;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37118,inst_37123,inst_37121,inst_37115,inst_37119,inst_37138,state_val_37203,c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37139){
var map__37271 = p__37139;
var map__37271__$1 = ((((!((map__37271 == null)))?((((map__37271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37271):map__37271);
var namespace = cljs.core.get.call(null,map__37271__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37271__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37118,inst_37123,inst_37121,inst_37115,inst_37119,inst_37138,state_val_37203,c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37141 = cljs.core.map.call(null,inst_37140,inst_37119);
var inst_37142 = cljs.core.pr_str.call(null,inst_37141);
var inst_37143 = figwheel.client.utils.log.call(null,inst_37142);
var inst_37144 = (function (){var all_files = inst_37115;
var res_SINGLEQUOTE_ = inst_37118;
var res = inst_37119;
var files_not_loaded = inst_37121;
var dependencies_that_loaded = inst_37123;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37118,inst_37123,inst_37121,inst_37115,inst_37119,inst_37138,inst_37140,inst_37141,inst_37142,inst_37143,state_val_37203,c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37118,inst_37123,inst_37121,inst_37115,inst_37119,inst_37138,inst_37140,inst_37141,inst_37142,inst_37143,state_val_37203,c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37145 = setTimeout(inst_37144,(10));
var state_37202__$1 = (function (){var statearr_37273 = state_37202;
(statearr_37273[(33)] = inst_37138);

(statearr_37273[(34)] = inst_37143);

return statearr_37273;
})();
var statearr_37274_37337 = state_37202__$1;
(statearr_37274_37337[(2)] = inst_37145);

(statearr_37274_37337[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (16))){
var state_37202__$1 = state_37202;
var statearr_37275_37338 = state_37202__$1;
(statearr_37275_37338[(2)] = reload_dependents);

(statearr_37275_37338[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (38))){
var inst_37155 = (state_37202[(16)]);
var inst_37173 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37155);
var state_37202__$1 = state_37202;
var statearr_37276_37339 = state_37202__$1;
(statearr_37276_37339[(2)] = inst_37173);

(statearr_37276_37339[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (30))){
var state_37202__$1 = state_37202;
var statearr_37277_37340 = state_37202__$1;
(statearr_37277_37340[(2)] = null);

(statearr_37277_37340[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (10))){
var inst_37075 = (state_37202[(22)]);
var inst_37077 = cljs.core.chunked_seq_QMARK_.call(null,inst_37075);
var state_37202__$1 = state_37202;
if(inst_37077){
var statearr_37278_37341 = state_37202__$1;
(statearr_37278_37341[(1)] = (13));

} else {
var statearr_37279_37342 = state_37202__$1;
(statearr_37279_37342[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (18))){
var inst_37109 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
if(cljs.core.truth_(inst_37109)){
var statearr_37280_37343 = state_37202__$1;
(statearr_37280_37343[(1)] = (19));

} else {
var statearr_37281_37344 = state_37202__$1;
(statearr_37281_37344[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (42))){
var state_37202__$1 = state_37202;
var statearr_37282_37345 = state_37202__$1;
(statearr_37282_37345[(2)] = null);

(statearr_37282_37345[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (37))){
var inst_37168 = (state_37202[(2)]);
var state_37202__$1 = state_37202;
var statearr_37283_37346 = state_37202__$1;
(statearr_37283_37346[(2)] = inst_37168);

(statearr_37283_37346[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37203 === (8))){
var inst_37062 = (state_37202[(7)]);
var inst_37075 = (state_37202[(22)]);
var inst_37075__$1 = cljs.core.seq.call(null,inst_37062);
var state_37202__$1 = (function (){var statearr_37284 = state_37202;
(statearr_37284[(22)] = inst_37075__$1);

return statearr_37284;
})();
if(inst_37075__$1){
var statearr_37285_37347 = state_37202__$1;
(statearr_37285_37347[(1)] = (10));

} else {
var statearr_37286_37348 = state_37202__$1;
(statearr_37286_37348[(1)] = (11));

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
});})(c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33487__auto__,c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33488__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33488__auto____0 = (function (){
var statearr_37287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37287[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33488__auto__);

(statearr_37287[(1)] = (1));

return statearr_37287;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33488__auto____1 = (function (state_37202){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_37202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e37288){if((e37288 instanceof Object)){
var ex__33491__auto__ = e37288;
var statearr_37289_37349 = state_37202;
(statearr_37289_37349[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37350 = state_37202;
state_37202 = G__37350;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33488__auto__ = function(state_37202){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33488__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33488__auto____1.call(this,state_37202);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33488__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33488__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33577__auto__ = (function (){var statearr_37290 = f__33576__auto__.call(null);
(statearr_37290[(6)] = c__33575__auto__);

return statearr_37290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto__,map__37047,map__37047__$1,opts,before_jsload,on_jsload,reload_dependents,map__37048,map__37048__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33575__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37353,link){
var map__37354 = p__37353;
var map__37354__$1 = ((((!((map__37354 == null)))?((((map__37354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37354):map__37354);
var file = cljs.core.get.call(null,map__37354__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37354,map__37354__$1,file){
return (function (p1__37351_SHARP_,p2__37352_SHARP_){
if(cljs.core._EQ_.call(null,p1__37351_SHARP_,p2__37352_SHARP_)){
return p1__37351_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37354,map__37354__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37357){
var map__37358 = p__37357;
var map__37358__$1 = ((((!((map__37358 == null)))?((((map__37358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37358):map__37358);
var match_length = cljs.core.get.call(null,map__37358__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37358__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37356_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37356_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37360_SHARP_,p2__37361_SHARP_){
return cljs.core.assoc.call(null,p1__37360_SHARP_,cljs.core.get.call(null,p2__37361_SHARP_,key),p2__37361_SHARP_);
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
var loaded_f_datas_37362 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37362);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37362);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37363,p__37364){
var map__37365 = p__37363;
var map__37365__$1 = ((((!((map__37365 == null)))?((((map__37365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37365):map__37365);
var on_cssload = cljs.core.get.call(null,map__37365__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37366 = p__37364;
var map__37366__$1 = ((((!((map__37366 == null)))?((((map__37366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37366):map__37366);
var files_msg = map__37366__$1;
var files = cljs.core.get.call(null,map__37366__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1513400449384
