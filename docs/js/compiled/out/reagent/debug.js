// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__38159__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38159 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38160__i = 0, G__38160__a = new Array(arguments.length -  0);
while (G__38160__i < G__38160__a.length) {G__38160__a[G__38160__i] = arguments[G__38160__i + 0]; ++G__38160__i;}
  args = new cljs.core.IndexedSeq(G__38160__a,0,null);
} 
return G__38159__delegate.call(this,args);};
G__38159.cljs$lang$maxFixedArity = 0;
G__38159.cljs$lang$applyTo = (function (arglist__38161){
var args = cljs.core.seq(arglist__38161);
return G__38159__delegate(args);
});
G__38159.cljs$core$IFn$_invoke$arity$variadic = G__38159__delegate;
return G__38159;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__38162__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38163__i = 0, G__38163__a = new Array(arguments.length -  0);
while (G__38163__i < G__38163__a.length) {G__38163__a[G__38163__i] = arguments[G__38163__i + 0]; ++G__38163__i;}
  args = new cljs.core.IndexedSeq(G__38163__a,0,null);
} 
return G__38162__delegate.call(this,args);};
G__38162.cljs$lang$maxFixedArity = 0;
G__38162.cljs$lang$applyTo = (function (arglist__38164){
var args = cljs.core.seq(arglist__38164);
return G__38162__delegate(args);
});
G__38162.cljs$core$IFn$_invoke$arity$variadic = G__38162__delegate;
return G__38162;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1513400452800
