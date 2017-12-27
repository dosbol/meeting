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
var G__37019__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37020__i = 0, G__37020__a = new Array(arguments.length -  0);
while (G__37020__i < G__37020__a.length) {G__37020__a[G__37020__i] = arguments[G__37020__i + 0]; ++G__37020__i;}
  args = new cljs.core.IndexedSeq(G__37020__a,0,null);
} 
return G__37019__delegate.call(this,args);};
G__37019.cljs$lang$maxFixedArity = 0;
G__37019.cljs$lang$applyTo = (function (arglist__37021){
var args = cljs.core.seq(arglist__37021);
return G__37019__delegate(args);
});
G__37019.cljs$core$IFn$_invoke$arity$variadic = G__37019__delegate;
return G__37019;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__37022__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37023__i = 0, G__37023__a = new Array(arguments.length -  0);
while (G__37023__i < G__37023__a.length) {G__37023__a[G__37023__i] = arguments[G__37023__i + 0]; ++G__37023__i;}
  args = new cljs.core.IndexedSeq(G__37023__a,0,null);
} 
return G__37022__delegate.call(this,args);};
G__37022.cljs$lang$maxFixedArity = 0;
G__37022.cljs$lang$applyTo = (function (arglist__37024){
var args = cljs.core.seq(arglist__37024);
return G__37022__delegate(args);
});
G__37022.cljs$core$IFn$_invoke$arity$variadic = G__37022__delegate;
return G__37022;
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

//# sourceMappingURL=debug.js.map?rel=1514366056797
