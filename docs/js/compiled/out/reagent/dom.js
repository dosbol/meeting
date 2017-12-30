// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__27196__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_38911 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_38911){
return (function (){
var _STAR_always_update_STAR_38912 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_38912;
}});})(_STAR_always_update_STAR_38911))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_38911;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__38914 = arguments.length;
switch (G__38914) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__38916_38920 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__38917_38921 = null;
var count__38918_38922 = (0);
var i__38919_38923 = (0);
while(true){
if((i__38919_38923 < count__38918_38922)){
var v_38924 = cljs.core._nth.call(null,chunk__38917_38921,i__38919_38923);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_38924);

var G__38925 = seq__38916_38920;
var G__38926 = chunk__38917_38921;
var G__38927 = count__38918_38922;
var G__38928 = (i__38919_38923 + (1));
seq__38916_38920 = G__38925;
chunk__38917_38921 = G__38926;
count__38918_38922 = G__38927;
i__38919_38923 = G__38928;
continue;
} else {
var temp__4657__auto___38929 = cljs.core.seq.call(null,seq__38916_38920);
if(temp__4657__auto___38929){
var seq__38916_38930__$1 = temp__4657__auto___38929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38916_38930__$1)){
var c__28035__auto___38931 = cljs.core.chunk_first.call(null,seq__38916_38930__$1);
var G__38932 = cljs.core.chunk_rest.call(null,seq__38916_38930__$1);
var G__38933 = c__28035__auto___38931;
var G__38934 = cljs.core.count.call(null,c__28035__auto___38931);
var G__38935 = (0);
seq__38916_38920 = G__38932;
chunk__38917_38921 = G__38933;
count__38918_38922 = G__38934;
i__38919_38923 = G__38935;
continue;
} else {
var v_38936 = cljs.core.first.call(null,seq__38916_38930__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_38936);

var G__38937 = cljs.core.next.call(null,seq__38916_38930__$1);
var G__38938 = null;
var G__38939 = (0);
var G__38940 = (0);
seq__38916_38920 = G__38937;
chunk__38917_38921 = G__38938;
count__38918_38922 = G__38939;
i__38919_38923 = G__38940;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1514660161609
