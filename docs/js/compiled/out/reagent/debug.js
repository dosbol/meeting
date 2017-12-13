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
var G__38139__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38140__i = 0, G__38140__a = new Array(arguments.length -  0);
while (G__38140__i < G__38140__a.length) {G__38140__a[G__38140__i] = arguments[G__38140__i + 0]; ++G__38140__i;}
  args = new cljs.core.IndexedSeq(G__38140__a,0,null);
} 
return G__38139__delegate.call(this,args);};
G__38139.cljs$lang$maxFixedArity = 0;
G__38139.cljs$lang$applyTo = (function (arglist__38141){
var args = cljs.core.seq(arglist__38141);
return G__38139__delegate(args);
});
G__38139.cljs$core$IFn$_invoke$arity$variadic = G__38139__delegate;
return G__38139;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__38142__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38143__i = 0, G__38143__a = new Array(arguments.length -  0);
while (G__38143__i < G__38143__a.length) {G__38143__a[G__38143__i] = arguments[G__38143__i + 0]; ++G__38143__i;}
  args = new cljs.core.IndexedSeq(G__38143__a,0,null);
} 
return G__38142__delegate.call(this,args);};
G__38142.cljs$lang$maxFixedArity = 0;
G__38142.cljs$lang$applyTo = (function (arglist__38144){
var args = cljs.core.seq(arglist__38144);
return G__38142__delegate(args);
});
G__38142.cljs$core$IFn$_invoke$arity$variadic = G__38142__delegate;
return G__38142;
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

//# sourceMappingURL=debug.js.map?rel=1513190780958
