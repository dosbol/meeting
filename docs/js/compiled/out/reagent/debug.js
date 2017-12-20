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
var G__38173__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38174__i = 0, G__38174__a = new Array(arguments.length -  0);
while (G__38174__i < G__38174__a.length) {G__38174__a[G__38174__i] = arguments[G__38174__i + 0]; ++G__38174__i;}
  args = new cljs.core.IndexedSeq(G__38174__a,0,null);
} 
return G__38173__delegate.call(this,args);};
G__38173.cljs$lang$maxFixedArity = 0;
G__38173.cljs$lang$applyTo = (function (arglist__38175){
var args = cljs.core.seq(arglist__38175);
return G__38173__delegate(args);
});
G__38173.cljs$core$IFn$_invoke$arity$variadic = G__38173__delegate;
return G__38173;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__38176__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38177__i = 0, G__38177__a = new Array(arguments.length -  0);
while (G__38177__i < G__38177__a.length) {G__38177__a[G__38177__i] = arguments[G__38177__i + 0]; ++G__38177__i;}
  args = new cljs.core.IndexedSeq(G__38177__a,0,null);
} 
return G__38176__delegate.call(this,args);};
G__38176.cljs$lang$maxFixedArity = 0;
G__38176.cljs$lang$applyTo = (function (arglist__38178){
var args = cljs.core.seq(arglist__38178);
return G__38176__delegate(args);
});
G__38176.cljs$core$IFn$_invoke$arity$variadic = G__38176__delegate;
return G__38176;
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

//# sourceMappingURL=debug.js.map?rel=1513768315348
