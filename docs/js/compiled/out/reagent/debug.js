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
var G__37020__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37020 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37021__i = 0, G__37021__a = new Array(arguments.length -  0);
while (G__37021__i < G__37021__a.length) {G__37021__a[G__37021__i] = arguments[G__37021__i + 0]; ++G__37021__i;}
  args = new cljs.core.IndexedSeq(G__37021__a,0,null);
} 
return G__37020__delegate.call(this,args);};
G__37020.cljs$lang$maxFixedArity = 0;
G__37020.cljs$lang$applyTo = (function (arglist__37022){
var args = cljs.core.seq(arglist__37022);
return G__37020__delegate(args);
});
G__37020.cljs$core$IFn$_invoke$arity$variadic = G__37020__delegate;
return G__37020;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__37023__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37024__i = 0, G__37024__a = new Array(arguments.length -  0);
while (G__37024__i < G__37024__a.length) {G__37024__a[G__37024__i] = arguments[G__37024__i + 0]; ++G__37024__i;}
  args = new cljs.core.IndexedSeq(G__37024__a,0,null);
} 
return G__37023__delegate.call(this,args);};
G__37023.cljs$lang$maxFixedArity = 0;
G__37023.cljs$lang$applyTo = (function (arglist__37025){
var args = cljs.core.seq(arglist__37025);
return G__37023__delegate(args);
});
G__37023.cljs$core$IFn$_invoke$arity$variadic = G__37023__delegate;
return G__37023;
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

//# sourceMappingURL=debug.js.map?rel=1514289196191
