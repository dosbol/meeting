// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34284 = arguments.length;
var i__28365__auto___34285 = (0);
while(true){
if((i__28365__auto___34285 < len__28364__auto___34284)){
args__28371__auto__.push((arguments[i__28365__auto___34285]));

var G__34286 = (i__28365__auto___34285 + (1));
i__28365__auto___34285 = G__34286;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq34283){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34283));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34288 = arguments.length;
var i__28365__auto___34289 = (0);
while(true){
if((i__28365__auto___34289 < len__28364__auto___34288)){
args__28371__auto__.push((arguments[i__28365__auto___34289]));

var G__34290 = (i__28365__auto___34289 + (1));
i__28365__auto___34289 = G__34290;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq34287){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34287));
});

var g_QMARK__34291 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_34292 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__34291){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__34291))
,null));
var mkg_34293 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__34291,g_34292){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__34291,g_34292))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__34291,g_34292,mkg_34293){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__34291).call(null,x);
});})(g_QMARK__34291,g_34292,mkg_34293))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__34291,g_34292,mkg_34293){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_34293).call(null,gfn);
});})(g_QMARK__34291,g_34292,mkg_34293))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__34291,g_34292,mkg_34293){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_34292).call(null,generator);
});})(g_QMARK__34291,g_34292,mkg_34293))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__28457__auto___34313 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__28457__auto___34313){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34314 = arguments.length;
var i__28365__auto___34315 = (0);
while(true){
if((i__28365__auto___34315 < len__28364__auto___34314)){
args__28371__auto__.push((arguments[i__28365__auto___34315]));

var G__34316 = (i__28365__auto___34315 + (1));
i__28365__auto___34315 = G__34316;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34313))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34313){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34313),args);
});})(g__28457__auto___34313))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__28457__auto___34313){
return (function (seq34294){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34294));
});})(g__28457__auto___34313))
;


var g__28457__auto___34317 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__28457__auto___34317){
return (function cljs$spec$gen$alpha$list(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34318 = arguments.length;
var i__28365__auto___34319 = (0);
while(true){
if((i__28365__auto___34319 < len__28364__auto___34318)){
args__28371__auto__.push((arguments[i__28365__auto___34319]));

var G__34320 = (i__28365__auto___34319 + (1));
i__28365__auto___34319 = G__34320;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34317))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34317){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34317),args);
});})(g__28457__auto___34317))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__28457__auto___34317){
return (function (seq34295){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34295));
});})(g__28457__auto___34317))
;


var g__28457__auto___34321 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__28457__auto___34321){
return (function cljs$spec$gen$alpha$map(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34322 = arguments.length;
var i__28365__auto___34323 = (0);
while(true){
if((i__28365__auto___34323 < len__28364__auto___34322)){
args__28371__auto__.push((arguments[i__28365__auto___34323]));

var G__34324 = (i__28365__auto___34323 + (1));
i__28365__auto___34323 = G__34324;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34321))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34321){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34321),args);
});})(g__28457__auto___34321))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__28457__auto___34321){
return (function (seq34296){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34296));
});})(g__28457__auto___34321))
;


var g__28457__auto___34325 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__28457__auto___34325){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34326 = arguments.length;
var i__28365__auto___34327 = (0);
while(true){
if((i__28365__auto___34327 < len__28364__auto___34326)){
args__28371__auto__.push((arguments[i__28365__auto___34327]));

var G__34328 = (i__28365__auto___34327 + (1));
i__28365__auto___34327 = G__34328;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34325))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34325){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34325),args);
});})(g__28457__auto___34325))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__28457__auto___34325){
return (function (seq34297){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34297));
});})(g__28457__auto___34325))
;


var g__28457__auto___34329 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__28457__auto___34329){
return (function cljs$spec$gen$alpha$set(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34330 = arguments.length;
var i__28365__auto___34331 = (0);
while(true){
if((i__28365__auto___34331 < len__28364__auto___34330)){
args__28371__auto__.push((arguments[i__28365__auto___34331]));

var G__34332 = (i__28365__auto___34331 + (1));
i__28365__auto___34331 = G__34332;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34329))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34329){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34329),args);
});})(g__28457__auto___34329))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__28457__auto___34329){
return (function (seq34298){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34298));
});})(g__28457__auto___34329))
;


var g__28457__auto___34333 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__28457__auto___34333){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34334 = arguments.length;
var i__28365__auto___34335 = (0);
while(true){
if((i__28365__auto___34335 < len__28364__auto___34334)){
args__28371__auto__.push((arguments[i__28365__auto___34335]));

var G__34336 = (i__28365__auto___34335 + (1));
i__28365__auto___34335 = G__34336;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34333))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34333){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34333),args);
});})(g__28457__auto___34333))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__28457__auto___34333){
return (function (seq34299){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34299));
});})(g__28457__auto___34333))
;


var g__28457__auto___34337 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__28457__auto___34337){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34338 = arguments.length;
var i__28365__auto___34339 = (0);
while(true){
if((i__28365__auto___34339 < len__28364__auto___34338)){
args__28371__auto__.push((arguments[i__28365__auto___34339]));

var G__34340 = (i__28365__auto___34339 + (1));
i__28365__auto___34339 = G__34340;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34337))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34337){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34337),args);
});})(g__28457__auto___34337))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__28457__auto___34337){
return (function (seq34300){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34300));
});})(g__28457__auto___34337))
;


var g__28457__auto___34341 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__28457__auto___34341){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34342 = arguments.length;
var i__28365__auto___34343 = (0);
while(true){
if((i__28365__auto___34343 < len__28364__auto___34342)){
args__28371__auto__.push((arguments[i__28365__auto___34343]));

var G__34344 = (i__28365__auto___34343 + (1));
i__28365__auto___34343 = G__34344;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34341))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34341){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34341),args);
});})(g__28457__auto___34341))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__28457__auto___34341){
return (function (seq34301){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34301));
});})(g__28457__auto___34341))
;


var g__28457__auto___34345 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__28457__auto___34345){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34346 = arguments.length;
var i__28365__auto___34347 = (0);
while(true){
if((i__28365__auto___34347 < len__28364__auto___34346)){
args__28371__auto__.push((arguments[i__28365__auto___34347]));

var G__34348 = (i__28365__auto___34347 + (1));
i__28365__auto___34347 = G__34348;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34345))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34345){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34345),args);
});})(g__28457__auto___34345))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__28457__auto___34345){
return (function (seq34302){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34302));
});})(g__28457__auto___34345))
;


var g__28457__auto___34349 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__28457__auto___34349){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34350 = arguments.length;
var i__28365__auto___34351 = (0);
while(true){
if((i__28365__auto___34351 < len__28364__auto___34350)){
args__28371__auto__.push((arguments[i__28365__auto___34351]));

var G__34352 = (i__28365__auto___34351 + (1));
i__28365__auto___34351 = G__34352;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34349))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34349){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34349),args);
});})(g__28457__auto___34349))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__28457__auto___34349){
return (function (seq34303){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34303));
});})(g__28457__auto___34349))
;


var g__28457__auto___34353 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__28457__auto___34353){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34354 = arguments.length;
var i__28365__auto___34355 = (0);
while(true){
if((i__28365__auto___34355 < len__28364__auto___34354)){
args__28371__auto__.push((arguments[i__28365__auto___34355]));

var G__34356 = (i__28365__auto___34355 + (1));
i__28365__auto___34355 = G__34356;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34353))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34353){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34353),args);
});})(g__28457__auto___34353))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__28457__auto___34353){
return (function (seq34304){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34304));
});})(g__28457__auto___34353))
;


var g__28457__auto___34357 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__28457__auto___34357){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34358 = arguments.length;
var i__28365__auto___34359 = (0);
while(true){
if((i__28365__auto___34359 < len__28364__auto___34358)){
args__28371__auto__.push((arguments[i__28365__auto___34359]));

var G__34360 = (i__28365__auto___34359 + (1));
i__28365__auto___34359 = G__34360;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34357))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34357){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34357),args);
});})(g__28457__auto___34357))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__28457__auto___34357){
return (function (seq34305){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34305));
});})(g__28457__auto___34357))
;


var g__28457__auto___34361 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__28457__auto___34361){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34362 = arguments.length;
var i__28365__auto___34363 = (0);
while(true){
if((i__28365__auto___34363 < len__28364__auto___34362)){
args__28371__auto__.push((arguments[i__28365__auto___34363]));

var G__34364 = (i__28365__auto___34363 + (1));
i__28365__auto___34363 = G__34364;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34361))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34361){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34361),args);
});})(g__28457__auto___34361))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__28457__auto___34361){
return (function (seq34306){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34306));
});})(g__28457__auto___34361))
;


var g__28457__auto___34365 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__28457__auto___34365){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34366 = arguments.length;
var i__28365__auto___34367 = (0);
while(true){
if((i__28365__auto___34367 < len__28364__auto___34366)){
args__28371__auto__.push((arguments[i__28365__auto___34367]));

var G__34368 = (i__28365__auto___34367 + (1));
i__28365__auto___34367 = G__34368;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34365))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34365){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34365),args);
});})(g__28457__auto___34365))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__28457__auto___34365){
return (function (seq34307){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34307));
});})(g__28457__auto___34365))
;


var g__28457__auto___34369 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__28457__auto___34369){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34370 = arguments.length;
var i__28365__auto___34371 = (0);
while(true){
if((i__28365__auto___34371 < len__28364__auto___34370)){
args__28371__auto__.push((arguments[i__28365__auto___34371]));

var G__34372 = (i__28365__auto___34371 + (1));
i__28365__auto___34371 = G__34372;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34369))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34369){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34369),args);
});})(g__28457__auto___34369))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__28457__auto___34369){
return (function (seq34308){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34308));
});})(g__28457__auto___34369))
;


var g__28457__auto___34373 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__28457__auto___34373){
return (function cljs$spec$gen$alpha$return(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34374 = arguments.length;
var i__28365__auto___34375 = (0);
while(true){
if((i__28365__auto___34375 < len__28364__auto___34374)){
args__28371__auto__.push((arguments[i__28365__auto___34375]));

var G__34376 = (i__28365__auto___34375 + (1));
i__28365__auto___34375 = G__34376;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34373))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34373){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34373),args);
});})(g__28457__auto___34373))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__28457__auto___34373){
return (function (seq34309){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34309));
});})(g__28457__auto___34373))
;


var g__28457__auto___34377 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__28457__auto___34377){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34378 = arguments.length;
var i__28365__auto___34379 = (0);
while(true){
if((i__28365__auto___34379 < len__28364__auto___34378)){
args__28371__auto__.push((arguments[i__28365__auto___34379]));

var G__34380 = (i__28365__auto___34379 + (1));
i__28365__auto___34379 = G__34380;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34377))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34377){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34377),args);
});})(g__28457__auto___34377))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__28457__auto___34377){
return (function (seq34310){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34310));
});})(g__28457__auto___34377))
;


var g__28457__auto___34381 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__28457__auto___34381){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34382 = arguments.length;
var i__28365__auto___34383 = (0);
while(true){
if((i__28365__auto___34383 < len__28364__auto___34382)){
args__28371__auto__.push((arguments[i__28365__auto___34383]));

var G__34384 = (i__28365__auto___34383 + (1));
i__28365__auto___34383 = G__34384;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34381))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34381){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34381),args);
});})(g__28457__auto___34381))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__28457__auto___34381){
return (function (seq34311){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34311));
});})(g__28457__auto___34381))
;


var g__28457__auto___34385 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__28457__auto___34385){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34386 = arguments.length;
var i__28365__auto___34387 = (0);
while(true){
if((i__28365__auto___34387 < len__28364__auto___34386)){
args__28371__auto__.push((arguments[i__28365__auto___34387]));

var G__34388 = (i__28365__auto___34387 + (1));
i__28365__auto___34387 = G__34388;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28457__auto___34385))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28457__auto___34385){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28457__auto___34385),args);
});})(g__28457__auto___34385))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__28457__auto___34385){
return (function (seq34312){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34312));
});})(g__28457__auto___34385))
;

var g__28470__auto___34410 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__28470__auto___34410){
return (function cljs$spec$gen$alpha$any(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34411 = arguments.length;
var i__28365__auto___34412 = (0);
while(true){
if((i__28365__auto___34412 < len__28364__auto___34411)){
args__28371__auto__.push((arguments[i__28365__auto___34412]));

var G__34413 = (i__28365__auto___34412 + (1));
i__28365__auto___34412 = G__34413;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34410))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34410){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34410);
});})(g__28470__auto___34410))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__28470__auto___34410){
return (function (seq34389){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34389));
});})(g__28470__auto___34410))
;


var g__28470__auto___34414 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__28470__auto___34414){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34415 = arguments.length;
var i__28365__auto___34416 = (0);
while(true){
if((i__28365__auto___34416 < len__28364__auto___34415)){
args__28371__auto__.push((arguments[i__28365__auto___34416]));

var G__34417 = (i__28365__auto___34416 + (1));
i__28365__auto___34416 = G__34417;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34414))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34414){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34414);
});})(g__28470__auto___34414))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__28470__auto___34414){
return (function (seq34390){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34390));
});})(g__28470__auto___34414))
;


var g__28470__auto___34418 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__28470__auto___34418){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34419 = arguments.length;
var i__28365__auto___34420 = (0);
while(true){
if((i__28365__auto___34420 < len__28364__auto___34419)){
args__28371__auto__.push((arguments[i__28365__auto___34420]));

var G__34421 = (i__28365__auto___34420 + (1));
i__28365__auto___34420 = G__34421;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34418))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34418){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34418);
});})(g__28470__auto___34418))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__28470__auto___34418){
return (function (seq34391){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34391));
});})(g__28470__auto___34418))
;


var g__28470__auto___34422 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__28470__auto___34422){
return (function cljs$spec$gen$alpha$char(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34423 = arguments.length;
var i__28365__auto___34424 = (0);
while(true){
if((i__28365__auto___34424 < len__28364__auto___34423)){
args__28371__auto__.push((arguments[i__28365__auto___34424]));

var G__34425 = (i__28365__auto___34424 + (1));
i__28365__auto___34424 = G__34425;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34422))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34422){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34422);
});})(g__28470__auto___34422))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__28470__auto___34422){
return (function (seq34392){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34392));
});})(g__28470__auto___34422))
;


var g__28470__auto___34426 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__28470__auto___34426){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34427 = arguments.length;
var i__28365__auto___34428 = (0);
while(true){
if((i__28365__auto___34428 < len__28364__auto___34427)){
args__28371__auto__.push((arguments[i__28365__auto___34428]));

var G__34429 = (i__28365__auto___34428 + (1));
i__28365__auto___34428 = G__34429;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34426))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34426){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34426);
});})(g__28470__auto___34426))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__28470__auto___34426){
return (function (seq34393){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34393));
});})(g__28470__auto___34426))
;


var g__28470__auto___34430 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__28470__auto___34430){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34431 = arguments.length;
var i__28365__auto___34432 = (0);
while(true){
if((i__28365__auto___34432 < len__28364__auto___34431)){
args__28371__auto__.push((arguments[i__28365__auto___34432]));

var G__34433 = (i__28365__auto___34432 + (1));
i__28365__auto___34432 = G__34433;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34430))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34430){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34430);
});})(g__28470__auto___34430))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__28470__auto___34430){
return (function (seq34394){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34394));
});})(g__28470__auto___34430))
;


var g__28470__auto___34434 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__28470__auto___34434){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34435 = arguments.length;
var i__28365__auto___34436 = (0);
while(true){
if((i__28365__auto___34436 < len__28364__auto___34435)){
args__28371__auto__.push((arguments[i__28365__auto___34436]));

var G__34437 = (i__28365__auto___34436 + (1));
i__28365__auto___34436 = G__34437;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34434))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34434){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34434);
});})(g__28470__auto___34434))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__28470__auto___34434){
return (function (seq34395){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34395));
});})(g__28470__auto___34434))
;


var g__28470__auto___34438 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__28470__auto___34438){
return (function cljs$spec$gen$alpha$double(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34439 = arguments.length;
var i__28365__auto___34440 = (0);
while(true){
if((i__28365__auto___34440 < len__28364__auto___34439)){
args__28371__auto__.push((arguments[i__28365__auto___34440]));

var G__34441 = (i__28365__auto___34440 + (1));
i__28365__auto___34440 = G__34441;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34438))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34438){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34438);
});})(g__28470__auto___34438))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__28470__auto___34438){
return (function (seq34396){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34396));
});})(g__28470__auto___34438))
;


var g__28470__auto___34442 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__28470__auto___34442){
return (function cljs$spec$gen$alpha$int(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34443 = arguments.length;
var i__28365__auto___34444 = (0);
while(true){
if((i__28365__auto___34444 < len__28364__auto___34443)){
args__28371__auto__.push((arguments[i__28365__auto___34444]));

var G__34445 = (i__28365__auto___34444 + (1));
i__28365__auto___34444 = G__34445;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34442))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34442){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34442);
});})(g__28470__auto___34442))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__28470__auto___34442){
return (function (seq34397){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34397));
});})(g__28470__auto___34442))
;


var g__28470__auto___34446 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__28470__auto___34446){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34447 = arguments.length;
var i__28365__auto___34448 = (0);
while(true){
if((i__28365__auto___34448 < len__28364__auto___34447)){
args__28371__auto__.push((arguments[i__28365__auto___34448]));

var G__34449 = (i__28365__auto___34448 + (1));
i__28365__auto___34448 = G__34449;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34446))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34446){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34446);
});})(g__28470__auto___34446))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__28470__auto___34446){
return (function (seq34398){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34398));
});})(g__28470__auto___34446))
;


var g__28470__auto___34450 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__28470__auto___34450){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34451 = arguments.length;
var i__28365__auto___34452 = (0);
while(true){
if((i__28365__auto___34452 < len__28364__auto___34451)){
args__28371__auto__.push((arguments[i__28365__auto___34452]));

var G__34453 = (i__28365__auto___34452 + (1));
i__28365__auto___34452 = G__34453;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34450))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34450){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34450);
});})(g__28470__auto___34450))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__28470__auto___34450){
return (function (seq34399){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34399));
});})(g__28470__auto___34450))
;


var g__28470__auto___34454 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__28470__auto___34454){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34455 = arguments.length;
var i__28365__auto___34456 = (0);
while(true){
if((i__28365__auto___34456 < len__28364__auto___34455)){
args__28371__auto__.push((arguments[i__28365__auto___34456]));

var G__34457 = (i__28365__auto___34456 + (1));
i__28365__auto___34456 = G__34457;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34454))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34454){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34454);
});})(g__28470__auto___34454))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__28470__auto___34454){
return (function (seq34400){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34400));
});})(g__28470__auto___34454))
;


var g__28470__auto___34458 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__28470__auto___34458){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34459 = arguments.length;
var i__28365__auto___34460 = (0);
while(true){
if((i__28365__auto___34460 < len__28364__auto___34459)){
args__28371__auto__.push((arguments[i__28365__auto___34460]));

var G__34461 = (i__28365__auto___34460 + (1));
i__28365__auto___34460 = G__34461;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34458))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34458){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34458);
});})(g__28470__auto___34458))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__28470__auto___34458){
return (function (seq34401){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34401));
});})(g__28470__auto___34458))
;


var g__28470__auto___34462 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__28470__auto___34462){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34463 = arguments.length;
var i__28365__auto___34464 = (0);
while(true){
if((i__28365__auto___34464 < len__28364__auto___34463)){
args__28371__auto__.push((arguments[i__28365__auto___34464]));

var G__34465 = (i__28365__auto___34464 + (1));
i__28365__auto___34464 = G__34465;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34462))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34462){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34462);
});})(g__28470__auto___34462))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__28470__auto___34462){
return (function (seq34402){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34402));
});})(g__28470__auto___34462))
;


var g__28470__auto___34466 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__28470__auto___34466){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34467 = arguments.length;
var i__28365__auto___34468 = (0);
while(true){
if((i__28365__auto___34468 < len__28364__auto___34467)){
args__28371__auto__.push((arguments[i__28365__auto___34468]));

var G__34469 = (i__28365__auto___34468 + (1));
i__28365__auto___34468 = G__34469;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34466))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34466){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34466);
});})(g__28470__auto___34466))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__28470__auto___34466){
return (function (seq34403){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34403));
});})(g__28470__auto___34466))
;


var g__28470__auto___34470 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__28470__auto___34470){
return (function cljs$spec$gen$alpha$string(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34471 = arguments.length;
var i__28365__auto___34472 = (0);
while(true){
if((i__28365__auto___34472 < len__28364__auto___34471)){
args__28371__auto__.push((arguments[i__28365__auto___34472]));

var G__34473 = (i__28365__auto___34472 + (1));
i__28365__auto___34472 = G__34473;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34470))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34470){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34470);
});})(g__28470__auto___34470))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__28470__auto___34470){
return (function (seq34404){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34404));
});})(g__28470__auto___34470))
;


var g__28470__auto___34474 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__28470__auto___34474){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34475 = arguments.length;
var i__28365__auto___34476 = (0);
while(true){
if((i__28365__auto___34476 < len__28364__auto___34475)){
args__28371__auto__.push((arguments[i__28365__auto___34476]));

var G__34477 = (i__28365__auto___34476 + (1));
i__28365__auto___34476 = G__34477;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34474))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34474){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34474);
});})(g__28470__auto___34474))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__28470__auto___34474){
return (function (seq34405){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34405));
});})(g__28470__auto___34474))
;


var g__28470__auto___34478 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__28470__auto___34478){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34479 = arguments.length;
var i__28365__auto___34480 = (0);
while(true){
if((i__28365__auto___34480 < len__28364__auto___34479)){
args__28371__auto__.push((arguments[i__28365__auto___34480]));

var G__34481 = (i__28365__auto___34480 + (1));
i__28365__auto___34480 = G__34481;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34478))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34478){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34478);
});})(g__28470__auto___34478))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__28470__auto___34478){
return (function (seq34406){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34406));
});})(g__28470__auto___34478))
;


var g__28470__auto___34482 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__28470__auto___34482){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34483 = arguments.length;
var i__28365__auto___34484 = (0);
while(true){
if((i__28365__auto___34484 < len__28364__auto___34483)){
args__28371__auto__.push((arguments[i__28365__auto___34484]));

var G__34485 = (i__28365__auto___34484 + (1));
i__28365__auto___34484 = G__34485;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34482))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34482){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34482);
});})(g__28470__auto___34482))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__28470__auto___34482){
return (function (seq34407){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34407));
});})(g__28470__auto___34482))
;


var g__28470__auto___34486 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__28470__auto___34486){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34487 = arguments.length;
var i__28365__auto___34488 = (0);
while(true){
if((i__28365__auto___34488 < len__28364__auto___34487)){
args__28371__auto__.push((arguments[i__28365__auto___34488]));

var G__34489 = (i__28365__auto___34488 + (1));
i__28365__auto___34488 = G__34489;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34486))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34486){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34486);
});})(g__28470__auto___34486))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__28470__auto___34486){
return (function (seq34408){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34408));
});})(g__28470__auto___34486))
;


var g__28470__auto___34490 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__28470__auto___34490){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34491 = arguments.length;
var i__28365__auto___34492 = (0);
while(true){
if((i__28365__auto___34492 < len__28364__auto___34491)){
args__28371__auto__.push((arguments[i__28365__auto___34492]));

var G__34493 = (i__28365__auto___34492 + (1));
i__28365__auto___34492 = G__34493;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});})(g__28470__auto___34490))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28470__auto___34490){
return (function (args){
return cljs.core.deref.call(null,g__28470__auto___34490);
});})(g__28470__auto___34490))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__28470__auto___34490){
return (function (seq34409){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34409));
});})(g__28470__auto___34490))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__28371__auto__ = [];
var len__28364__auto___34496 = arguments.length;
var i__28365__auto___34497 = (0);
while(true){
if((i__28365__auto___34497 < len__28364__auto___34496)){
args__28371__auto__.push((arguments[i__28365__auto___34497]));

var G__34498 = (i__28365__auto___34497 + (1));
i__28365__auto___34497 = G__34498;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__34494_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__34494_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq34495){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34495));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__34499_SHARP_){
return (new Date(p1__34499_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1515854992095
