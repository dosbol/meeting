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
var G__38606__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38607__i = 0, G__38607__a = new Array(arguments.length -  0);
while (G__38607__i < G__38607__a.length) {G__38607__a[G__38607__i] = arguments[G__38607__i + 0]; ++G__38607__i;}
  args = new cljs.core.IndexedSeq(G__38607__a,0,null);
} 
return G__38606__delegate.call(this,args);};
G__38606.cljs$lang$maxFixedArity = 0;
G__38606.cljs$lang$applyTo = (function (arglist__38608){
var args = cljs.core.seq(arglist__38608);
return G__38606__delegate(args);
});
G__38606.cljs$core$IFn$_invoke$arity$variadic = G__38606__delegate;
return G__38606;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__38609__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38610__i = 0, G__38610__a = new Array(arguments.length -  0);
while (G__38610__i < G__38610__a.length) {G__38610__a[G__38610__i] = arguments[G__38610__i + 0]; ++G__38610__i;}
  args = new cljs.core.IndexedSeq(G__38610__a,0,null);
} 
return G__38609__delegate.call(this,args);};
G__38609.cljs$lang$maxFixedArity = 0;
G__38609.cljs$lang$applyTo = (function (arglist__38611){
var args = cljs.core.seq(arglist__38611);
return G__38609__delegate(args);
});
G__38609.cljs$core$IFn$_invoke$arity$variadic = G__38609__delegate;
return G__38609;
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

//# sourceMappingURL=debug.js.map?rel=1516093595138
