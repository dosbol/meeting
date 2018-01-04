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
var G__38527__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38527 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38528__i = 0, G__38528__a = new Array(arguments.length -  0);
while (G__38528__i < G__38528__a.length) {G__38528__a[G__38528__i] = arguments[G__38528__i + 0]; ++G__38528__i;}
  args = new cljs.core.IndexedSeq(G__38528__a,0,null);
} 
return G__38527__delegate.call(this,args);};
G__38527.cljs$lang$maxFixedArity = 0;
G__38527.cljs$lang$applyTo = (function (arglist__38529){
var args = cljs.core.seq(arglist__38529);
return G__38527__delegate(args);
});
G__38527.cljs$core$IFn$_invoke$arity$variadic = G__38527__delegate;
return G__38527;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__38530__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38531__i = 0, G__38531__a = new Array(arguments.length -  0);
while (G__38531__i < G__38531__a.length) {G__38531__a[G__38531__i] = arguments[G__38531__i + 0]; ++G__38531__i;}
  args = new cljs.core.IndexedSeq(G__38531__a,0,null);
} 
return G__38530__delegate.call(this,args);};
G__38530.cljs$lang$maxFixedArity = 0;
G__38530.cljs$lang$applyTo = (function (arglist__38532){
var args = cljs.core.seq(arglist__38532);
return G__38530__delegate(args);
});
G__38530.cljs$core$IFn$_invoke$arity$variadic = G__38530__delegate;
return G__38530;
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

//# sourceMappingURL=debug.js.map?rel=1515054910007
