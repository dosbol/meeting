// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__39340 = arguments.length;
switch (G__39340) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async39341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39341 = (function (f,blockable,meta39342){
this.f = f;
this.blockable = blockable;
this.meta39342 = meta39342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39343,meta39342__$1){
var self__ = this;
var _39343__$1 = this;
return (new cljs.core.async.t_cljs$core$async39341(self__.f,self__.blockable,meta39342__$1));
});

cljs.core.async.t_cljs$core$async39341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39343){
var self__ = this;
var _39343__$1 = this;
return self__.meta39342;
});

cljs.core.async.t_cljs$core$async39341.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39341.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39342","meta39342",-1488908743,null)], null);
});

cljs.core.async.t_cljs$core$async39341.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39341";

cljs.core.async.t_cljs$core$async39341.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39341");
});

cljs.core.async.__GT_t_cljs$core$async39341 = (function cljs$core$async$__GT_t_cljs$core$async39341(f__$1,blockable__$1,meta39342){
return (new cljs.core.async.t_cljs$core$async39341(f__$1,blockable__$1,meta39342));
});

}

return (new cljs.core.async.t_cljs$core$async39341(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__39347 = arguments.length;
switch (G__39347) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__39350 = arguments.length;
switch (G__39350) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__39353 = arguments.length;
switch (G__39353) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39355 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39355);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39355,ret){
return (function (){
return fn1.call(null,val_39355);
});})(val_39355,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__39357 = arguments.length;
switch (G__39357) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28140__auto___39359 = n;
var x_39360 = (0);
while(true){
if((x_39360 < n__28140__auto___39359)){
(a[x_39360] = (0));

var G__39361 = (x_39360 + (1));
x_39360 = G__39361;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__39362 = (i + (1));
i = G__39362;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39363 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39363 = (function (flag,meta39364){
this.flag = flag;
this.meta39364 = meta39364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39365,meta39364__$1){
var self__ = this;
var _39365__$1 = this;
return (new cljs.core.async.t_cljs$core$async39363(self__.flag,meta39364__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39363.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39365){
var self__ = this;
var _39365__$1 = this;
return self__.meta39364;
});})(flag))
;

cljs.core.async.t_cljs$core$async39363.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39363.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39363.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39363.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39363.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39364","meta39364",-1283977127,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39363.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39363";

cljs.core.async.t_cljs$core$async39363.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39363");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39363 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39363(flag__$1,meta39364){
return (new cljs.core.async.t_cljs$core$async39363(flag__$1,meta39364));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39363(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39366 = (function (flag,cb,meta39367){
this.flag = flag;
this.cb = cb;
this.meta39367 = meta39367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39368,meta39367__$1){
var self__ = this;
var _39368__$1 = this;
return (new cljs.core.async.t_cljs$core$async39366(self__.flag,self__.cb,meta39367__$1));
});

cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39368){
var self__ = this;
var _39368__$1 = this;
return self__.meta39367;
});

cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39367","meta39367",-575520531,null)], null);
});

cljs.core.async.t_cljs$core$async39366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39366";

cljs.core.async.t_cljs$core$async39366.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39366");
});

cljs.core.async.__GT_t_cljs$core$async39366 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39366(flag__$1,cb__$1,meta39367){
return (new cljs.core.async.t_cljs$core$async39366(flag__$1,cb__$1,meta39367));
});

}

return (new cljs.core.async.t_cljs$core$async39366(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39369_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39369_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39370_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39370_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27195__auto__ = wport;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39371 = (i + (1));
i = G__39371;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27195__auto__ = ret;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27183__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27183__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39377 = arguments.length;
var i__28365__auto___39378 = (0);
while(true){
if((i__28365__auto___39378 < len__28364__auto___39377)){
args__28371__auto__.push((arguments[i__28365__auto___39378]));

var G__39379 = (i__28365__auto___39378 + (1));
i__28365__auto___39378 = G__39379;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39374){
var map__39375 = p__39374;
var map__39375__$1 = ((((!((map__39375 == null)))?((((map__39375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39375):map__39375);
var opts = map__39375__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39372){
var G__39373 = cljs.core.first.call(null,seq39372);
var seq39372__$1 = cljs.core.next.call(null,seq39372);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39373,seq39372__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__39381 = arguments.length;
switch (G__39381) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30624__auto___39427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___39427){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___39427){
return (function (state_39405){
var state_val_39406 = (state_39405[(1)]);
if((state_val_39406 === (7))){
var inst_39401 = (state_39405[(2)]);
var state_39405__$1 = state_39405;
var statearr_39407_39428 = state_39405__$1;
(statearr_39407_39428[(2)] = inst_39401);

(statearr_39407_39428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (1))){
var state_39405__$1 = state_39405;
var statearr_39408_39429 = state_39405__$1;
(statearr_39408_39429[(2)] = null);

(statearr_39408_39429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (4))){
var inst_39384 = (state_39405[(7)]);
var inst_39384__$1 = (state_39405[(2)]);
var inst_39385 = (inst_39384__$1 == null);
var state_39405__$1 = (function (){var statearr_39409 = state_39405;
(statearr_39409[(7)] = inst_39384__$1);

return statearr_39409;
})();
if(cljs.core.truth_(inst_39385)){
var statearr_39410_39430 = state_39405__$1;
(statearr_39410_39430[(1)] = (5));

} else {
var statearr_39411_39431 = state_39405__$1;
(statearr_39411_39431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (13))){
var state_39405__$1 = state_39405;
var statearr_39412_39432 = state_39405__$1;
(statearr_39412_39432[(2)] = null);

(statearr_39412_39432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (6))){
var inst_39384 = (state_39405[(7)]);
var state_39405__$1 = state_39405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39405__$1,(11),to,inst_39384);
} else {
if((state_val_39406 === (3))){
var inst_39403 = (state_39405[(2)]);
var state_39405__$1 = state_39405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39405__$1,inst_39403);
} else {
if((state_val_39406 === (12))){
var state_39405__$1 = state_39405;
var statearr_39413_39433 = state_39405__$1;
(statearr_39413_39433[(2)] = null);

(statearr_39413_39433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (2))){
var state_39405__$1 = state_39405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39405__$1,(4),from);
} else {
if((state_val_39406 === (11))){
var inst_39394 = (state_39405[(2)]);
var state_39405__$1 = state_39405;
if(cljs.core.truth_(inst_39394)){
var statearr_39414_39434 = state_39405__$1;
(statearr_39414_39434[(1)] = (12));

} else {
var statearr_39415_39435 = state_39405__$1;
(statearr_39415_39435[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (9))){
var state_39405__$1 = state_39405;
var statearr_39416_39436 = state_39405__$1;
(statearr_39416_39436[(2)] = null);

(statearr_39416_39436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (5))){
var state_39405__$1 = state_39405;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39417_39437 = state_39405__$1;
(statearr_39417_39437[(1)] = (8));

} else {
var statearr_39418_39438 = state_39405__$1;
(statearr_39418_39438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (14))){
var inst_39399 = (state_39405[(2)]);
var state_39405__$1 = state_39405;
var statearr_39419_39439 = state_39405__$1;
(statearr_39419_39439[(2)] = inst_39399);

(statearr_39419_39439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (10))){
var inst_39391 = (state_39405[(2)]);
var state_39405__$1 = state_39405;
var statearr_39420_39440 = state_39405__$1;
(statearr_39420_39440[(2)] = inst_39391);

(statearr_39420_39440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (8))){
var inst_39388 = cljs.core.async.close_BANG_.call(null,to);
var state_39405__$1 = state_39405;
var statearr_39421_39441 = state_39405__$1;
(statearr_39421_39441[(2)] = inst_39388);

(statearr_39421_39441[(1)] = (10));


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
});})(c__30624__auto___39427))
;
return ((function (switch__30536__auto__,c__30624__auto___39427){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_39422 = [null,null,null,null,null,null,null,null];
(statearr_39422[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_39422[(1)] = (1));

return statearr_39422;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_39405){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39423){if((e39423 instanceof Object)){
var ex__30540__auto__ = e39423;
var statearr_39424_39442 = state_39405;
(statearr_39424_39442[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39443 = state_39405;
state_39405 = G__39443;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_39405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_39405);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___39427))
})();
var state__30626__auto__ = (function (){var statearr_39425 = f__30625__auto__.call(null);
(statearr_39425[(6)] = c__30624__auto___39427);

return statearr_39425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___39427))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__39444){
var vec__39445 = p__39444;
var v = cljs.core.nth.call(null,vec__39445,(0),null);
var p = cljs.core.nth.call(null,vec__39445,(1),null);
var job = vec__39445;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30624__auto___39616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___39616,res,vec__39445,v,p,job,jobs,results){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___39616,res,vec__39445,v,p,job,jobs,results){
return (function (state_39452){
var state_val_39453 = (state_39452[(1)]);
if((state_val_39453 === (1))){
var state_39452__$1 = state_39452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39452__$1,(2),res,v);
} else {
if((state_val_39453 === (2))){
var inst_39449 = (state_39452[(2)]);
var inst_39450 = cljs.core.async.close_BANG_.call(null,res);
var state_39452__$1 = (function (){var statearr_39454 = state_39452;
(statearr_39454[(7)] = inst_39449);

return statearr_39454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39452__$1,inst_39450);
} else {
return null;
}
}
});})(c__30624__auto___39616,res,vec__39445,v,p,job,jobs,results))
;
return ((function (switch__30536__auto__,c__30624__auto___39616,res,vec__39445,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39455 = [null,null,null,null,null,null,null,null];
(statearr_39455[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39455[(1)] = (1));

return statearr_39455;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39452){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39456){if((e39456 instanceof Object)){
var ex__30540__auto__ = e39456;
var statearr_39457_39617 = state_39452;
(statearr_39457_39617[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39618 = state_39452;
state_39452 = G__39618;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39452){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39452);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___39616,res,vec__39445,v,p,job,jobs,results))
})();
var state__30626__auto__ = (function (){var statearr_39458 = f__30625__auto__.call(null);
(statearr_39458[(6)] = c__30624__auto___39616);

return statearr_39458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___39616,res,vec__39445,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39459){
var vec__39460 = p__39459;
var v = cljs.core.nth.call(null,vec__39460,(0),null);
var p = cljs.core.nth.call(null,vec__39460,(1),null);
var job = vec__39460;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28140__auto___39619 = n;
var __39620 = (0);
while(true){
if((__39620 < n__28140__auto___39619)){
var G__39463_39621 = type;
var G__39463_39622__$1 = (((G__39463_39621 instanceof cljs.core.Keyword))?G__39463_39621.fqn:null);
switch (G__39463_39622__$1) {
case "compute":
var c__30624__auto___39624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39620,c__30624__auto___39624,G__39463_39621,G__39463_39622__$1,n__28140__auto___39619,jobs,results,process,async){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (__39620,c__30624__auto___39624,G__39463_39621,G__39463_39622__$1,n__28140__auto___39619,jobs,results,process,async){
return (function (state_39476){
var state_val_39477 = (state_39476[(1)]);
if((state_val_39477 === (1))){
var state_39476__$1 = state_39476;
var statearr_39478_39625 = state_39476__$1;
(statearr_39478_39625[(2)] = null);

(statearr_39478_39625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39477 === (2))){
var state_39476__$1 = state_39476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39476__$1,(4),jobs);
} else {
if((state_val_39477 === (3))){
var inst_39474 = (state_39476[(2)]);
var state_39476__$1 = state_39476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39476__$1,inst_39474);
} else {
if((state_val_39477 === (4))){
var inst_39466 = (state_39476[(2)]);
var inst_39467 = process.call(null,inst_39466);
var state_39476__$1 = state_39476;
if(cljs.core.truth_(inst_39467)){
var statearr_39479_39626 = state_39476__$1;
(statearr_39479_39626[(1)] = (5));

} else {
var statearr_39480_39627 = state_39476__$1;
(statearr_39480_39627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39477 === (5))){
var state_39476__$1 = state_39476;
var statearr_39481_39628 = state_39476__$1;
(statearr_39481_39628[(2)] = null);

(statearr_39481_39628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39477 === (6))){
var state_39476__$1 = state_39476;
var statearr_39482_39629 = state_39476__$1;
(statearr_39482_39629[(2)] = null);

(statearr_39482_39629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39477 === (7))){
var inst_39472 = (state_39476[(2)]);
var state_39476__$1 = state_39476;
var statearr_39483_39630 = state_39476__$1;
(statearr_39483_39630[(2)] = inst_39472);

(statearr_39483_39630[(1)] = (3));


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
});})(__39620,c__30624__auto___39624,G__39463_39621,G__39463_39622__$1,n__28140__auto___39619,jobs,results,process,async))
;
return ((function (__39620,switch__30536__auto__,c__30624__auto___39624,G__39463_39621,G__39463_39622__$1,n__28140__auto___39619,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39484 = [null,null,null,null,null,null,null];
(statearr_39484[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39484[(1)] = (1));

return statearr_39484;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39476){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39485){if((e39485 instanceof Object)){
var ex__30540__auto__ = e39485;
var statearr_39486_39631 = state_39476;
(statearr_39486_39631[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39632 = state_39476;
state_39476 = G__39632;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(__39620,switch__30536__auto__,c__30624__auto___39624,G__39463_39621,G__39463_39622__$1,n__28140__auto___39619,jobs,results,process,async))
})();
var state__30626__auto__ = (function (){var statearr_39487 = f__30625__auto__.call(null);
(statearr_39487[(6)] = c__30624__auto___39624);

return statearr_39487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(__39620,c__30624__auto___39624,G__39463_39621,G__39463_39622__$1,n__28140__auto___39619,jobs,results,process,async))
);


break;
case "async":
var c__30624__auto___39633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39620,c__30624__auto___39633,G__39463_39621,G__39463_39622__$1,n__28140__auto___39619,jobs,results,process,async){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (__39620,c__30624__auto___39633,G__39463_39621,G__39463_39622__$1,n__28140__auto___39619,jobs,results,process,async){
return (function (state_39500){
var state_val_39501 = (state_39500[(1)]);
if((state_val_39501 === (1))){
var state_39500__$1 = state_39500;
var statearr_39502_39634 = state_39500__$1;
(statearr_39502_39634[(2)] = null);

(statearr_39502_39634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39501 === (2))){
var state_39500__$1 = state_39500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39500__$1,(4),jobs);
} else {
if((state_val_39501 === (3))){
var inst_39498 = (state_39500[(2)]);
var state_39500__$1 = state_39500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39500__$1,inst_39498);
} else {
if((state_val_39501 === (4))){
var inst_39490 = (state_39500[(2)]);
var inst_39491 = async.call(null,inst_39490);
var state_39500__$1 = state_39500;
if(cljs.core.truth_(inst_39491)){
var statearr_39503_39635 = state_39500__$1;
(statearr_39503_39635[(1)] = (5));

} else {
var statearr_39504_39636 = state_39500__$1;
(statearr_39504_39636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39501 === (5))){
var state_39500__$1 = state_39500;
var statearr_39505_39637 = state_39500__$1;
(statearr_39505_39637[(2)] = null);

(statearr_39505_39637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39501 === (6))){
var state_39500__$1 = state_39500;
var statearr_39506_39638 = state_39500__$1;
(statearr_39506_39638[(2)] = null);

(statearr_39506_39638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39501 === (7))){
var inst_39496 = (state_39500[(2)]);
var state_39500__$1 = state_39500;
var statearr_39507_39639 = state_39500__$1;
(statearr_39507_39639[(2)] = inst_39496);

(statearr_39507_39639[(1)] = (3));


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
});})(__39620,c__30624__auto___39633,G__39463_39621,G__39463_39622__$1,n__28140__auto___39619,jobs,results,process,async))
;
return ((function (__39620,switch__30536__auto__,c__30624__auto___39633,G__39463_39621,G__39463_39622__$1,n__28140__auto___39619,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39508 = [null,null,null,null,null,null,null];
(statearr_39508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39508[(1)] = (1));

return statearr_39508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39500){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39509){if((e39509 instanceof Object)){
var ex__30540__auto__ = e39509;
var statearr_39510_39640 = state_39500;
(statearr_39510_39640[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39641 = state_39500;
state_39500 = G__39641;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39500);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(__39620,switch__30536__auto__,c__30624__auto___39633,G__39463_39621,G__39463_39622__$1,n__28140__auto___39619,jobs,results,process,async))
})();
var state__30626__auto__ = (function (){var statearr_39511 = f__30625__auto__.call(null);
(statearr_39511[(6)] = c__30624__auto___39633);

return statearr_39511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(__39620,c__30624__auto___39633,G__39463_39621,G__39463_39622__$1,n__28140__auto___39619,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39463_39622__$1)].join('')));

}

var G__39642 = (__39620 + (1));
__39620 = G__39642;
continue;
} else {
}
break;
}

var c__30624__auto___39643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___39643,jobs,results,process,async){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___39643,jobs,results,process,async){
return (function (state_39533){
var state_val_39534 = (state_39533[(1)]);
if((state_val_39534 === (1))){
var state_39533__$1 = state_39533;
var statearr_39535_39644 = state_39533__$1;
(statearr_39535_39644[(2)] = null);

(statearr_39535_39644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (2))){
var state_39533__$1 = state_39533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39533__$1,(4),from);
} else {
if((state_val_39534 === (3))){
var inst_39531 = (state_39533[(2)]);
var state_39533__$1 = state_39533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39533__$1,inst_39531);
} else {
if((state_val_39534 === (4))){
var inst_39514 = (state_39533[(7)]);
var inst_39514__$1 = (state_39533[(2)]);
var inst_39515 = (inst_39514__$1 == null);
var state_39533__$1 = (function (){var statearr_39536 = state_39533;
(statearr_39536[(7)] = inst_39514__$1);

return statearr_39536;
})();
if(cljs.core.truth_(inst_39515)){
var statearr_39537_39645 = state_39533__$1;
(statearr_39537_39645[(1)] = (5));

} else {
var statearr_39538_39646 = state_39533__$1;
(statearr_39538_39646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (5))){
var inst_39517 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39533__$1 = state_39533;
var statearr_39539_39647 = state_39533__$1;
(statearr_39539_39647[(2)] = inst_39517);

(statearr_39539_39647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (6))){
var inst_39514 = (state_39533[(7)]);
var inst_39519 = (state_39533[(8)]);
var inst_39519__$1 = cljs.core.async.chan.call(null,(1));
var inst_39520 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39521 = [inst_39514,inst_39519__$1];
var inst_39522 = (new cljs.core.PersistentVector(null,2,(5),inst_39520,inst_39521,null));
var state_39533__$1 = (function (){var statearr_39540 = state_39533;
(statearr_39540[(8)] = inst_39519__$1);

return statearr_39540;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39533__$1,(8),jobs,inst_39522);
} else {
if((state_val_39534 === (7))){
var inst_39529 = (state_39533[(2)]);
var state_39533__$1 = state_39533;
var statearr_39541_39648 = state_39533__$1;
(statearr_39541_39648[(2)] = inst_39529);

(statearr_39541_39648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (8))){
var inst_39519 = (state_39533[(8)]);
var inst_39524 = (state_39533[(2)]);
var state_39533__$1 = (function (){var statearr_39542 = state_39533;
(statearr_39542[(9)] = inst_39524);

return statearr_39542;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39533__$1,(9),results,inst_39519);
} else {
if((state_val_39534 === (9))){
var inst_39526 = (state_39533[(2)]);
var state_39533__$1 = (function (){var statearr_39543 = state_39533;
(statearr_39543[(10)] = inst_39526);

return statearr_39543;
})();
var statearr_39544_39649 = state_39533__$1;
(statearr_39544_39649[(2)] = null);

(statearr_39544_39649[(1)] = (2));


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
});})(c__30624__auto___39643,jobs,results,process,async))
;
return ((function (switch__30536__auto__,c__30624__auto___39643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39545 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39545[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39545[(1)] = (1));

return statearr_39545;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39533){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39546){if((e39546 instanceof Object)){
var ex__30540__auto__ = e39546;
var statearr_39547_39650 = state_39533;
(statearr_39547_39650[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39651 = state_39533;
state_39533 = G__39651;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39533){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39533);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___39643,jobs,results,process,async))
})();
var state__30626__auto__ = (function (){var statearr_39548 = f__30625__auto__.call(null);
(statearr_39548[(6)] = c__30624__auto___39643);

return statearr_39548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___39643,jobs,results,process,async))
);


var c__30624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto__,jobs,results,process,async){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto__,jobs,results,process,async){
return (function (state_39586){
var state_val_39587 = (state_39586[(1)]);
if((state_val_39587 === (7))){
var inst_39582 = (state_39586[(2)]);
var state_39586__$1 = state_39586;
var statearr_39588_39652 = state_39586__$1;
(statearr_39588_39652[(2)] = inst_39582);

(statearr_39588_39652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39587 === (20))){
var state_39586__$1 = state_39586;
var statearr_39589_39653 = state_39586__$1;
(statearr_39589_39653[(2)] = null);

(statearr_39589_39653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39587 === (1))){
var state_39586__$1 = state_39586;
var statearr_39590_39654 = state_39586__$1;
(statearr_39590_39654[(2)] = null);

(statearr_39590_39654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39587 === (4))){
var inst_39551 = (state_39586[(7)]);
var inst_39551__$1 = (state_39586[(2)]);
var inst_39552 = (inst_39551__$1 == null);
var state_39586__$1 = (function (){var statearr_39591 = state_39586;
(statearr_39591[(7)] = inst_39551__$1);

return statearr_39591;
})();
if(cljs.core.truth_(inst_39552)){
var statearr_39592_39655 = state_39586__$1;
(statearr_39592_39655[(1)] = (5));

} else {
var statearr_39593_39656 = state_39586__$1;
(statearr_39593_39656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39587 === (15))){
var inst_39564 = (state_39586[(8)]);
var state_39586__$1 = state_39586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39586__$1,(18),to,inst_39564);
} else {
if((state_val_39587 === (21))){
var inst_39577 = (state_39586[(2)]);
var state_39586__$1 = state_39586;
var statearr_39594_39657 = state_39586__$1;
(statearr_39594_39657[(2)] = inst_39577);

(statearr_39594_39657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39587 === (13))){
var inst_39579 = (state_39586[(2)]);
var state_39586__$1 = (function (){var statearr_39595 = state_39586;
(statearr_39595[(9)] = inst_39579);

return statearr_39595;
})();
var statearr_39596_39658 = state_39586__$1;
(statearr_39596_39658[(2)] = null);

(statearr_39596_39658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39587 === (6))){
var inst_39551 = (state_39586[(7)]);
var state_39586__$1 = state_39586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39586__$1,(11),inst_39551);
} else {
if((state_val_39587 === (17))){
var inst_39572 = (state_39586[(2)]);
var state_39586__$1 = state_39586;
if(cljs.core.truth_(inst_39572)){
var statearr_39597_39659 = state_39586__$1;
(statearr_39597_39659[(1)] = (19));

} else {
var statearr_39598_39660 = state_39586__$1;
(statearr_39598_39660[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39587 === (3))){
var inst_39584 = (state_39586[(2)]);
var state_39586__$1 = state_39586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39586__$1,inst_39584);
} else {
if((state_val_39587 === (12))){
var inst_39561 = (state_39586[(10)]);
var state_39586__$1 = state_39586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39586__$1,(14),inst_39561);
} else {
if((state_val_39587 === (2))){
var state_39586__$1 = state_39586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39586__$1,(4),results);
} else {
if((state_val_39587 === (19))){
var state_39586__$1 = state_39586;
var statearr_39599_39661 = state_39586__$1;
(statearr_39599_39661[(2)] = null);

(statearr_39599_39661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39587 === (11))){
var inst_39561 = (state_39586[(2)]);
var state_39586__$1 = (function (){var statearr_39600 = state_39586;
(statearr_39600[(10)] = inst_39561);

return statearr_39600;
})();
var statearr_39601_39662 = state_39586__$1;
(statearr_39601_39662[(2)] = null);

(statearr_39601_39662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39587 === (9))){
var state_39586__$1 = state_39586;
var statearr_39602_39663 = state_39586__$1;
(statearr_39602_39663[(2)] = null);

(statearr_39602_39663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39587 === (5))){
var state_39586__$1 = state_39586;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39603_39664 = state_39586__$1;
(statearr_39603_39664[(1)] = (8));

} else {
var statearr_39604_39665 = state_39586__$1;
(statearr_39604_39665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39587 === (14))){
var inst_39566 = (state_39586[(11)]);
var inst_39564 = (state_39586[(8)]);
var inst_39564__$1 = (state_39586[(2)]);
var inst_39565 = (inst_39564__$1 == null);
var inst_39566__$1 = cljs.core.not.call(null,inst_39565);
var state_39586__$1 = (function (){var statearr_39605 = state_39586;
(statearr_39605[(11)] = inst_39566__$1);

(statearr_39605[(8)] = inst_39564__$1);

return statearr_39605;
})();
if(inst_39566__$1){
var statearr_39606_39666 = state_39586__$1;
(statearr_39606_39666[(1)] = (15));

} else {
var statearr_39607_39667 = state_39586__$1;
(statearr_39607_39667[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39587 === (16))){
var inst_39566 = (state_39586[(11)]);
var state_39586__$1 = state_39586;
var statearr_39608_39668 = state_39586__$1;
(statearr_39608_39668[(2)] = inst_39566);

(statearr_39608_39668[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39587 === (10))){
var inst_39558 = (state_39586[(2)]);
var state_39586__$1 = state_39586;
var statearr_39609_39669 = state_39586__$1;
(statearr_39609_39669[(2)] = inst_39558);

(statearr_39609_39669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39587 === (18))){
var inst_39569 = (state_39586[(2)]);
var state_39586__$1 = state_39586;
var statearr_39610_39670 = state_39586__$1;
(statearr_39610_39670[(2)] = inst_39569);

(statearr_39610_39670[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39587 === (8))){
var inst_39555 = cljs.core.async.close_BANG_.call(null,to);
var state_39586__$1 = state_39586;
var statearr_39611_39671 = state_39586__$1;
(statearr_39611_39671[(2)] = inst_39555);

(statearr_39611_39671[(1)] = (10));


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
});})(c__30624__auto__,jobs,results,process,async))
;
return ((function (switch__30536__auto__,c__30624__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39612 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39612[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39612[(1)] = (1));

return statearr_39612;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39586){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39613){if((e39613 instanceof Object)){
var ex__30540__auto__ = e39613;
var statearr_39614_39672 = state_39586;
(statearr_39614_39672[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39673 = state_39586;
state_39586 = G__39673;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39586){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39586);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__,jobs,results,process,async))
})();
var state__30626__auto__ = (function (){var statearr_39615 = f__30625__auto__.call(null);
(statearr_39615[(6)] = c__30624__auto__);

return statearr_39615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto__,jobs,results,process,async))
);

return c__30624__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__39675 = arguments.length;
switch (G__39675) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__39678 = arguments.length;
switch (G__39678) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__39681 = arguments.length;
switch (G__39681) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30624__auto___39730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___39730,tc,fc){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___39730,tc,fc){
return (function (state_39707){
var state_val_39708 = (state_39707[(1)]);
if((state_val_39708 === (7))){
var inst_39703 = (state_39707[(2)]);
var state_39707__$1 = state_39707;
var statearr_39709_39731 = state_39707__$1;
(statearr_39709_39731[(2)] = inst_39703);

(statearr_39709_39731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39708 === (1))){
var state_39707__$1 = state_39707;
var statearr_39710_39732 = state_39707__$1;
(statearr_39710_39732[(2)] = null);

(statearr_39710_39732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39708 === (4))){
var inst_39684 = (state_39707[(7)]);
var inst_39684__$1 = (state_39707[(2)]);
var inst_39685 = (inst_39684__$1 == null);
var state_39707__$1 = (function (){var statearr_39711 = state_39707;
(statearr_39711[(7)] = inst_39684__$1);

return statearr_39711;
})();
if(cljs.core.truth_(inst_39685)){
var statearr_39712_39733 = state_39707__$1;
(statearr_39712_39733[(1)] = (5));

} else {
var statearr_39713_39734 = state_39707__$1;
(statearr_39713_39734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39708 === (13))){
var state_39707__$1 = state_39707;
var statearr_39714_39735 = state_39707__$1;
(statearr_39714_39735[(2)] = null);

(statearr_39714_39735[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39708 === (6))){
var inst_39684 = (state_39707[(7)]);
var inst_39690 = p.call(null,inst_39684);
var state_39707__$1 = state_39707;
if(cljs.core.truth_(inst_39690)){
var statearr_39715_39736 = state_39707__$1;
(statearr_39715_39736[(1)] = (9));

} else {
var statearr_39716_39737 = state_39707__$1;
(statearr_39716_39737[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39708 === (3))){
var inst_39705 = (state_39707[(2)]);
var state_39707__$1 = state_39707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39707__$1,inst_39705);
} else {
if((state_val_39708 === (12))){
var state_39707__$1 = state_39707;
var statearr_39717_39738 = state_39707__$1;
(statearr_39717_39738[(2)] = null);

(statearr_39717_39738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39708 === (2))){
var state_39707__$1 = state_39707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39707__$1,(4),ch);
} else {
if((state_val_39708 === (11))){
var inst_39684 = (state_39707[(7)]);
var inst_39694 = (state_39707[(2)]);
var state_39707__$1 = state_39707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39707__$1,(8),inst_39694,inst_39684);
} else {
if((state_val_39708 === (9))){
var state_39707__$1 = state_39707;
var statearr_39718_39739 = state_39707__$1;
(statearr_39718_39739[(2)] = tc);

(statearr_39718_39739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39708 === (5))){
var inst_39687 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39688 = cljs.core.async.close_BANG_.call(null,fc);
var state_39707__$1 = (function (){var statearr_39719 = state_39707;
(statearr_39719[(8)] = inst_39687);

return statearr_39719;
})();
var statearr_39720_39740 = state_39707__$1;
(statearr_39720_39740[(2)] = inst_39688);

(statearr_39720_39740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39708 === (14))){
var inst_39701 = (state_39707[(2)]);
var state_39707__$1 = state_39707;
var statearr_39721_39741 = state_39707__$1;
(statearr_39721_39741[(2)] = inst_39701);

(statearr_39721_39741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39708 === (10))){
var state_39707__$1 = state_39707;
var statearr_39722_39742 = state_39707__$1;
(statearr_39722_39742[(2)] = fc);

(statearr_39722_39742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39708 === (8))){
var inst_39696 = (state_39707[(2)]);
var state_39707__$1 = state_39707;
if(cljs.core.truth_(inst_39696)){
var statearr_39723_39743 = state_39707__$1;
(statearr_39723_39743[(1)] = (12));

} else {
var statearr_39724_39744 = state_39707__$1;
(statearr_39724_39744[(1)] = (13));

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
});})(c__30624__auto___39730,tc,fc))
;
return ((function (switch__30536__auto__,c__30624__auto___39730,tc,fc){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_39725 = [null,null,null,null,null,null,null,null,null];
(statearr_39725[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_39725[(1)] = (1));

return statearr_39725;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_39707){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39726){if((e39726 instanceof Object)){
var ex__30540__auto__ = e39726;
var statearr_39727_39745 = state_39707;
(statearr_39727_39745[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39746 = state_39707;
state_39707 = G__39746;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_39707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_39707);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___39730,tc,fc))
})();
var state__30626__auto__ = (function (){var statearr_39728 = f__30625__auto__.call(null);
(statearr_39728[(6)] = c__30624__auto___39730);

return statearr_39728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___39730,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto__){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto__){
return (function (state_39767){
var state_val_39768 = (state_39767[(1)]);
if((state_val_39768 === (7))){
var inst_39763 = (state_39767[(2)]);
var state_39767__$1 = state_39767;
var statearr_39769_39787 = state_39767__$1;
(statearr_39769_39787[(2)] = inst_39763);

(statearr_39769_39787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39768 === (1))){
var inst_39747 = init;
var state_39767__$1 = (function (){var statearr_39770 = state_39767;
(statearr_39770[(7)] = inst_39747);

return statearr_39770;
})();
var statearr_39771_39788 = state_39767__$1;
(statearr_39771_39788[(2)] = null);

(statearr_39771_39788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39768 === (4))){
var inst_39750 = (state_39767[(8)]);
var inst_39750__$1 = (state_39767[(2)]);
var inst_39751 = (inst_39750__$1 == null);
var state_39767__$1 = (function (){var statearr_39772 = state_39767;
(statearr_39772[(8)] = inst_39750__$1);

return statearr_39772;
})();
if(cljs.core.truth_(inst_39751)){
var statearr_39773_39789 = state_39767__$1;
(statearr_39773_39789[(1)] = (5));

} else {
var statearr_39774_39790 = state_39767__$1;
(statearr_39774_39790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39768 === (6))){
var inst_39747 = (state_39767[(7)]);
var inst_39754 = (state_39767[(9)]);
var inst_39750 = (state_39767[(8)]);
var inst_39754__$1 = f.call(null,inst_39747,inst_39750);
var inst_39755 = cljs.core.reduced_QMARK_.call(null,inst_39754__$1);
var state_39767__$1 = (function (){var statearr_39775 = state_39767;
(statearr_39775[(9)] = inst_39754__$1);

return statearr_39775;
})();
if(inst_39755){
var statearr_39776_39791 = state_39767__$1;
(statearr_39776_39791[(1)] = (8));

} else {
var statearr_39777_39792 = state_39767__$1;
(statearr_39777_39792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39768 === (3))){
var inst_39765 = (state_39767[(2)]);
var state_39767__$1 = state_39767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39767__$1,inst_39765);
} else {
if((state_val_39768 === (2))){
var state_39767__$1 = state_39767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39767__$1,(4),ch);
} else {
if((state_val_39768 === (9))){
var inst_39754 = (state_39767[(9)]);
var inst_39747 = inst_39754;
var state_39767__$1 = (function (){var statearr_39778 = state_39767;
(statearr_39778[(7)] = inst_39747);

return statearr_39778;
})();
var statearr_39779_39793 = state_39767__$1;
(statearr_39779_39793[(2)] = null);

(statearr_39779_39793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39768 === (5))){
var inst_39747 = (state_39767[(7)]);
var state_39767__$1 = state_39767;
var statearr_39780_39794 = state_39767__$1;
(statearr_39780_39794[(2)] = inst_39747);

(statearr_39780_39794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39768 === (10))){
var inst_39761 = (state_39767[(2)]);
var state_39767__$1 = state_39767;
var statearr_39781_39795 = state_39767__$1;
(statearr_39781_39795[(2)] = inst_39761);

(statearr_39781_39795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39768 === (8))){
var inst_39754 = (state_39767[(9)]);
var inst_39757 = cljs.core.deref.call(null,inst_39754);
var state_39767__$1 = state_39767;
var statearr_39782_39796 = state_39767__$1;
(statearr_39782_39796[(2)] = inst_39757);

(statearr_39782_39796[(1)] = (10));


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
});})(c__30624__auto__))
;
return ((function (switch__30536__auto__,c__30624__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30537__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30537__auto____0 = (function (){
var statearr_39783 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39783[(0)] = cljs$core$async$reduce_$_state_machine__30537__auto__);

(statearr_39783[(1)] = (1));

return statearr_39783;
});
var cljs$core$async$reduce_$_state_machine__30537__auto____1 = (function (state_39767){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39784){if((e39784 instanceof Object)){
var ex__30540__auto__ = e39784;
var statearr_39785_39797 = state_39767;
(statearr_39785_39797[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39798 = state_39767;
state_39767 = G__39798;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30537__auto__ = function(state_39767){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30537__auto____1.call(this,state_39767);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30537__auto____0;
cljs$core$async$reduce_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30537__auto____1;
return cljs$core$async$reduce_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_39786 = f__30625__auto__.call(null);
(statearr_39786[(6)] = c__30624__auto__);

return statearr_39786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto__))
);

return c__30624__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__39800 = arguments.length;
switch (G__39800) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto__){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto__){
return (function (state_39825){
var state_val_39826 = (state_39825[(1)]);
if((state_val_39826 === (7))){
var inst_39807 = (state_39825[(2)]);
var state_39825__$1 = state_39825;
var statearr_39827_39848 = state_39825__$1;
(statearr_39827_39848[(2)] = inst_39807);

(statearr_39827_39848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (1))){
var inst_39801 = cljs.core.seq.call(null,coll);
var inst_39802 = inst_39801;
var state_39825__$1 = (function (){var statearr_39828 = state_39825;
(statearr_39828[(7)] = inst_39802);

return statearr_39828;
})();
var statearr_39829_39849 = state_39825__$1;
(statearr_39829_39849[(2)] = null);

(statearr_39829_39849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (4))){
var inst_39802 = (state_39825[(7)]);
var inst_39805 = cljs.core.first.call(null,inst_39802);
var state_39825__$1 = state_39825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39825__$1,(7),ch,inst_39805);
} else {
if((state_val_39826 === (13))){
var inst_39819 = (state_39825[(2)]);
var state_39825__$1 = state_39825;
var statearr_39830_39850 = state_39825__$1;
(statearr_39830_39850[(2)] = inst_39819);

(statearr_39830_39850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (6))){
var inst_39810 = (state_39825[(2)]);
var state_39825__$1 = state_39825;
if(cljs.core.truth_(inst_39810)){
var statearr_39831_39851 = state_39825__$1;
(statearr_39831_39851[(1)] = (8));

} else {
var statearr_39832_39852 = state_39825__$1;
(statearr_39832_39852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (3))){
var inst_39823 = (state_39825[(2)]);
var state_39825__$1 = state_39825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39825__$1,inst_39823);
} else {
if((state_val_39826 === (12))){
var state_39825__$1 = state_39825;
var statearr_39833_39853 = state_39825__$1;
(statearr_39833_39853[(2)] = null);

(statearr_39833_39853[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (2))){
var inst_39802 = (state_39825[(7)]);
var state_39825__$1 = state_39825;
if(cljs.core.truth_(inst_39802)){
var statearr_39834_39854 = state_39825__$1;
(statearr_39834_39854[(1)] = (4));

} else {
var statearr_39835_39855 = state_39825__$1;
(statearr_39835_39855[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (11))){
var inst_39816 = cljs.core.async.close_BANG_.call(null,ch);
var state_39825__$1 = state_39825;
var statearr_39836_39856 = state_39825__$1;
(statearr_39836_39856[(2)] = inst_39816);

(statearr_39836_39856[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (9))){
var state_39825__$1 = state_39825;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39837_39857 = state_39825__$1;
(statearr_39837_39857[(1)] = (11));

} else {
var statearr_39838_39858 = state_39825__$1;
(statearr_39838_39858[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (5))){
var inst_39802 = (state_39825[(7)]);
var state_39825__$1 = state_39825;
var statearr_39839_39859 = state_39825__$1;
(statearr_39839_39859[(2)] = inst_39802);

(statearr_39839_39859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (10))){
var inst_39821 = (state_39825[(2)]);
var state_39825__$1 = state_39825;
var statearr_39840_39860 = state_39825__$1;
(statearr_39840_39860[(2)] = inst_39821);

(statearr_39840_39860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (8))){
var inst_39802 = (state_39825[(7)]);
var inst_39812 = cljs.core.next.call(null,inst_39802);
var inst_39802__$1 = inst_39812;
var state_39825__$1 = (function (){var statearr_39841 = state_39825;
(statearr_39841[(7)] = inst_39802__$1);

return statearr_39841;
})();
var statearr_39842_39861 = state_39825__$1;
(statearr_39842_39861[(2)] = null);

(statearr_39842_39861[(1)] = (2));


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
});})(c__30624__auto__))
;
return ((function (switch__30536__auto__,c__30624__auto__){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_39843 = [null,null,null,null,null,null,null,null];
(statearr_39843[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_39843[(1)] = (1));

return statearr_39843;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_39825){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39844){if((e39844 instanceof Object)){
var ex__30540__auto__ = e39844;
var statearr_39845_39862 = state_39825;
(statearr_39845_39862[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39863 = state_39825;
state_39825 = G__39863;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_39825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_39825);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_39846 = f__30625__auto__.call(null);
(statearr_39846[(6)] = c__30624__auto__);

return statearr_39846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto__))
);

return c__30624__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27878__auto__ = (((_ == null))?null:_);
var m__27879__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,_);
} else {
var m__27879__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27879__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,ch);
} else {
var m__27879__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m);
} else {
var m__27879__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39864 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39864 = (function (ch,cs,meta39865){
this.ch = ch;
this.cs = cs;
this.meta39865 = meta39865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39866,meta39865__$1){
var self__ = this;
var _39866__$1 = this;
return (new cljs.core.async.t_cljs$core$async39864(self__.ch,self__.cs,meta39865__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39866){
var self__ = this;
var _39866__$1 = this;
return self__.meta39865;
});})(cs))
;

cljs.core.async.t_cljs$core$async39864.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39864.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39864.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39864.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39864.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39864.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39864.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39865","meta39865",1631028586,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39864.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39864";

cljs.core.async.t_cljs$core$async39864.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39864");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39864 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39864(ch__$1,cs__$1,meta39865){
return (new cljs.core.async.t_cljs$core$async39864(ch__$1,cs__$1,meta39865));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39864(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30624__auto___40086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40086,cs,m,dchan,dctr,done){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40086,cs,m,dchan,dctr,done){
return (function (state_40001){
var state_val_40002 = (state_40001[(1)]);
if((state_val_40002 === (7))){
var inst_39997 = (state_40001[(2)]);
var state_40001__$1 = state_40001;
var statearr_40003_40087 = state_40001__$1;
(statearr_40003_40087[(2)] = inst_39997);

(statearr_40003_40087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (20))){
var inst_39900 = (state_40001[(7)]);
var inst_39912 = cljs.core.first.call(null,inst_39900);
var inst_39913 = cljs.core.nth.call(null,inst_39912,(0),null);
var inst_39914 = cljs.core.nth.call(null,inst_39912,(1),null);
var state_40001__$1 = (function (){var statearr_40004 = state_40001;
(statearr_40004[(8)] = inst_39913);

return statearr_40004;
})();
if(cljs.core.truth_(inst_39914)){
var statearr_40005_40088 = state_40001__$1;
(statearr_40005_40088[(1)] = (22));

} else {
var statearr_40006_40089 = state_40001__$1;
(statearr_40006_40089[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (27))){
var inst_39942 = (state_40001[(9)]);
var inst_39944 = (state_40001[(10)]);
var inst_39869 = (state_40001[(11)]);
var inst_39949 = (state_40001[(12)]);
var inst_39949__$1 = cljs.core._nth.call(null,inst_39942,inst_39944);
var inst_39950 = cljs.core.async.put_BANG_.call(null,inst_39949__$1,inst_39869,done);
var state_40001__$1 = (function (){var statearr_40007 = state_40001;
(statearr_40007[(12)] = inst_39949__$1);

return statearr_40007;
})();
if(cljs.core.truth_(inst_39950)){
var statearr_40008_40090 = state_40001__$1;
(statearr_40008_40090[(1)] = (30));

} else {
var statearr_40009_40091 = state_40001__$1;
(statearr_40009_40091[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (1))){
var state_40001__$1 = state_40001;
var statearr_40010_40092 = state_40001__$1;
(statearr_40010_40092[(2)] = null);

(statearr_40010_40092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (24))){
var inst_39900 = (state_40001[(7)]);
var inst_39919 = (state_40001[(2)]);
var inst_39920 = cljs.core.next.call(null,inst_39900);
var inst_39878 = inst_39920;
var inst_39879 = null;
var inst_39880 = (0);
var inst_39881 = (0);
var state_40001__$1 = (function (){var statearr_40011 = state_40001;
(statearr_40011[(13)] = inst_39879);

(statearr_40011[(14)] = inst_39919);

(statearr_40011[(15)] = inst_39878);

(statearr_40011[(16)] = inst_39880);

(statearr_40011[(17)] = inst_39881);

return statearr_40011;
})();
var statearr_40012_40093 = state_40001__$1;
(statearr_40012_40093[(2)] = null);

(statearr_40012_40093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (39))){
var state_40001__$1 = state_40001;
var statearr_40016_40094 = state_40001__$1;
(statearr_40016_40094[(2)] = null);

(statearr_40016_40094[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (4))){
var inst_39869 = (state_40001[(11)]);
var inst_39869__$1 = (state_40001[(2)]);
var inst_39870 = (inst_39869__$1 == null);
var state_40001__$1 = (function (){var statearr_40017 = state_40001;
(statearr_40017[(11)] = inst_39869__$1);

return statearr_40017;
})();
if(cljs.core.truth_(inst_39870)){
var statearr_40018_40095 = state_40001__$1;
(statearr_40018_40095[(1)] = (5));

} else {
var statearr_40019_40096 = state_40001__$1;
(statearr_40019_40096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (15))){
var inst_39879 = (state_40001[(13)]);
var inst_39878 = (state_40001[(15)]);
var inst_39880 = (state_40001[(16)]);
var inst_39881 = (state_40001[(17)]);
var inst_39896 = (state_40001[(2)]);
var inst_39897 = (inst_39881 + (1));
var tmp40013 = inst_39879;
var tmp40014 = inst_39878;
var tmp40015 = inst_39880;
var inst_39878__$1 = tmp40014;
var inst_39879__$1 = tmp40013;
var inst_39880__$1 = tmp40015;
var inst_39881__$1 = inst_39897;
var state_40001__$1 = (function (){var statearr_40020 = state_40001;
(statearr_40020[(18)] = inst_39896);

(statearr_40020[(13)] = inst_39879__$1);

(statearr_40020[(15)] = inst_39878__$1);

(statearr_40020[(16)] = inst_39880__$1);

(statearr_40020[(17)] = inst_39881__$1);

return statearr_40020;
})();
var statearr_40021_40097 = state_40001__$1;
(statearr_40021_40097[(2)] = null);

(statearr_40021_40097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (21))){
var inst_39923 = (state_40001[(2)]);
var state_40001__$1 = state_40001;
var statearr_40025_40098 = state_40001__$1;
(statearr_40025_40098[(2)] = inst_39923);

(statearr_40025_40098[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (31))){
var inst_39949 = (state_40001[(12)]);
var inst_39953 = done.call(null,null);
var inst_39954 = cljs.core.async.untap_STAR_.call(null,m,inst_39949);
var state_40001__$1 = (function (){var statearr_40026 = state_40001;
(statearr_40026[(19)] = inst_39953);

return statearr_40026;
})();
var statearr_40027_40099 = state_40001__$1;
(statearr_40027_40099[(2)] = inst_39954);

(statearr_40027_40099[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (32))){
var inst_39942 = (state_40001[(9)]);
var inst_39941 = (state_40001[(20)]);
var inst_39944 = (state_40001[(10)]);
var inst_39943 = (state_40001[(21)]);
var inst_39956 = (state_40001[(2)]);
var inst_39957 = (inst_39944 + (1));
var tmp40022 = inst_39942;
var tmp40023 = inst_39941;
var tmp40024 = inst_39943;
var inst_39941__$1 = tmp40023;
var inst_39942__$1 = tmp40022;
var inst_39943__$1 = tmp40024;
var inst_39944__$1 = inst_39957;
var state_40001__$1 = (function (){var statearr_40028 = state_40001;
(statearr_40028[(9)] = inst_39942__$1);

(statearr_40028[(20)] = inst_39941__$1);

(statearr_40028[(10)] = inst_39944__$1);

(statearr_40028[(22)] = inst_39956);

(statearr_40028[(21)] = inst_39943__$1);

return statearr_40028;
})();
var statearr_40029_40100 = state_40001__$1;
(statearr_40029_40100[(2)] = null);

(statearr_40029_40100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (40))){
var inst_39969 = (state_40001[(23)]);
var inst_39973 = done.call(null,null);
var inst_39974 = cljs.core.async.untap_STAR_.call(null,m,inst_39969);
var state_40001__$1 = (function (){var statearr_40030 = state_40001;
(statearr_40030[(24)] = inst_39973);

return statearr_40030;
})();
var statearr_40031_40101 = state_40001__$1;
(statearr_40031_40101[(2)] = inst_39974);

(statearr_40031_40101[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (33))){
var inst_39960 = (state_40001[(25)]);
var inst_39962 = cljs.core.chunked_seq_QMARK_.call(null,inst_39960);
var state_40001__$1 = state_40001;
if(inst_39962){
var statearr_40032_40102 = state_40001__$1;
(statearr_40032_40102[(1)] = (36));

} else {
var statearr_40033_40103 = state_40001__$1;
(statearr_40033_40103[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (13))){
var inst_39890 = (state_40001[(26)]);
var inst_39893 = cljs.core.async.close_BANG_.call(null,inst_39890);
var state_40001__$1 = state_40001;
var statearr_40034_40104 = state_40001__$1;
(statearr_40034_40104[(2)] = inst_39893);

(statearr_40034_40104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (22))){
var inst_39913 = (state_40001[(8)]);
var inst_39916 = cljs.core.async.close_BANG_.call(null,inst_39913);
var state_40001__$1 = state_40001;
var statearr_40035_40105 = state_40001__$1;
(statearr_40035_40105[(2)] = inst_39916);

(statearr_40035_40105[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (36))){
var inst_39960 = (state_40001[(25)]);
var inst_39964 = cljs.core.chunk_first.call(null,inst_39960);
var inst_39965 = cljs.core.chunk_rest.call(null,inst_39960);
var inst_39966 = cljs.core.count.call(null,inst_39964);
var inst_39941 = inst_39965;
var inst_39942 = inst_39964;
var inst_39943 = inst_39966;
var inst_39944 = (0);
var state_40001__$1 = (function (){var statearr_40036 = state_40001;
(statearr_40036[(9)] = inst_39942);

(statearr_40036[(20)] = inst_39941);

(statearr_40036[(10)] = inst_39944);

(statearr_40036[(21)] = inst_39943);

return statearr_40036;
})();
var statearr_40037_40106 = state_40001__$1;
(statearr_40037_40106[(2)] = null);

(statearr_40037_40106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (41))){
var inst_39960 = (state_40001[(25)]);
var inst_39976 = (state_40001[(2)]);
var inst_39977 = cljs.core.next.call(null,inst_39960);
var inst_39941 = inst_39977;
var inst_39942 = null;
var inst_39943 = (0);
var inst_39944 = (0);
var state_40001__$1 = (function (){var statearr_40038 = state_40001;
(statearr_40038[(9)] = inst_39942);

(statearr_40038[(20)] = inst_39941);

(statearr_40038[(10)] = inst_39944);

(statearr_40038[(27)] = inst_39976);

(statearr_40038[(21)] = inst_39943);

return statearr_40038;
})();
var statearr_40039_40107 = state_40001__$1;
(statearr_40039_40107[(2)] = null);

(statearr_40039_40107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (43))){
var state_40001__$1 = state_40001;
var statearr_40040_40108 = state_40001__$1;
(statearr_40040_40108[(2)] = null);

(statearr_40040_40108[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (29))){
var inst_39985 = (state_40001[(2)]);
var state_40001__$1 = state_40001;
var statearr_40041_40109 = state_40001__$1;
(statearr_40041_40109[(2)] = inst_39985);

(statearr_40041_40109[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (44))){
var inst_39994 = (state_40001[(2)]);
var state_40001__$1 = (function (){var statearr_40042 = state_40001;
(statearr_40042[(28)] = inst_39994);

return statearr_40042;
})();
var statearr_40043_40110 = state_40001__$1;
(statearr_40043_40110[(2)] = null);

(statearr_40043_40110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (6))){
var inst_39933 = (state_40001[(29)]);
var inst_39932 = cljs.core.deref.call(null,cs);
var inst_39933__$1 = cljs.core.keys.call(null,inst_39932);
var inst_39934 = cljs.core.count.call(null,inst_39933__$1);
var inst_39935 = cljs.core.reset_BANG_.call(null,dctr,inst_39934);
var inst_39940 = cljs.core.seq.call(null,inst_39933__$1);
var inst_39941 = inst_39940;
var inst_39942 = null;
var inst_39943 = (0);
var inst_39944 = (0);
var state_40001__$1 = (function (){var statearr_40044 = state_40001;
(statearr_40044[(9)] = inst_39942);

(statearr_40044[(20)] = inst_39941);

(statearr_40044[(10)] = inst_39944);

(statearr_40044[(29)] = inst_39933__$1);

(statearr_40044[(30)] = inst_39935);

(statearr_40044[(21)] = inst_39943);

return statearr_40044;
})();
var statearr_40045_40111 = state_40001__$1;
(statearr_40045_40111[(2)] = null);

(statearr_40045_40111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (28))){
var inst_39941 = (state_40001[(20)]);
var inst_39960 = (state_40001[(25)]);
var inst_39960__$1 = cljs.core.seq.call(null,inst_39941);
var state_40001__$1 = (function (){var statearr_40046 = state_40001;
(statearr_40046[(25)] = inst_39960__$1);

return statearr_40046;
})();
if(inst_39960__$1){
var statearr_40047_40112 = state_40001__$1;
(statearr_40047_40112[(1)] = (33));

} else {
var statearr_40048_40113 = state_40001__$1;
(statearr_40048_40113[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (25))){
var inst_39944 = (state_40001[(10)]);
var inst_39943 = (state_40001[(21)]);
var inst_39946 = (inst_39944 < inst_39943);
var inst_39947 = inst_39946;
var state_40001__$1 = state_40001;
if(cljs.core.truth_(inst_39947)){
var statearr_40049_40114 = state_40001__$1;
(statearr_40049_40114[(1)] = (27));

} else {
var statearr_40050_40115 = state_40001__$1;
(statearr_40050_40115[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (34))){
var state_40001__$1 = state_40001;
var statearr_40051_40116 = state_40001__$1;
(statearr_40051_40116[(2)] = null);

(statearr_40051_40116[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (17))){
var state_40001__$1 = state_40001;
var statearr_40052_40117 = state_40001__$1;
(statearr_40052_40117[(2)] = null);

(statearr_40052_40117[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (3))){
var inst_39999 = (state_40001[(2)]);
var state_40001__$1 = state_40001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40001__$1,inst_39999);
} else {
if((state_val_40002 === (12))){
var inst_39928 = (state_40001[(2)]);
var state_40001__$1 = state_40001;
var statearr_40053_40118 = state_40001__$1;
(statearr_40053_40118[(2)] = inst_39928);

(statearr_40053_40118[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (2))){
var state_40001__$1 = state_40001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40001__$1,(4),ch);
} else {
if((state_val_40002 === (23))){
var state_40001__$1 = state_40001;
var statearr_40054_40119 = state_40001__$1;
(statearr_40054_40119[(2)] = null);

(statearr_40054_40119[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (35))){
var inst_39983 = (state_40001[(2)]);
var state_40001__$1 = state_40001;
var statearr_40055_40120 = state_40001__$1;
(statearr_40055_40120[(2)] = inst_39983);

(statearr_40055_40120[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (19))){
var inst_39900 = (state_40001[(7)]);
var inst_39904 = cljs.core.chunk_first.call(null,inst_39900);
var inst_39905 = cljs.core.chunk_rest.call(null,inst_39900);
var inst_39906 = cljs.core.count.call(null,inst_39904);
var inst_39878 = inst_39905;
var inst_39879 = inst_39904;
var inst_39880 = inst_39906;
var inst_39881 = (0);
var state_40001__$1 = (function (){var statearr_40056 = state_40001;
(statearr_40056[(13)] = inst_39879);

(statearr_40056[(15)] = inst_39878);

(statearr_40056[(16)] = inst_39880);

(statearr_40056[(17)] = inst_39881);

return statearr_40056;
})();
var statearr_40057_40121 = state_40001__$1;
(statearr_40057_40121[(2)] = null);

(statearr_40057_40121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (11))){
var inst_39900 = (state_40001[(7)]);
var inst_39878 = (state_40001[(15)]);
var inst_39900__$1 = cljs.core.seq.call(null,inst_39878);
var state_40001__$1 = (function (){var statearr_40058 = state_40001;
(statearr_40058[(7)] = inst_39900__$1);

return statearr_40058;
})();
if(inst_39900__$1){
var statearr_40059_40122 = state_40001__$1;
(statearr_40059_40122[(1)] = (16));

} else {
var statearr_40060_40123 = state_40001__$1;
(statearr_40060_40123[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (9))){
var inst_39930 = (state_40001[(2)]);
var state_40001__$1 = state_40001;
var statearr_40061_40124 = state_40001__$1;
(statearr_40061_40124[(2)] = inst_39930);

(statearr_40061_40124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (5))){
var inst_39876 = cljs.core.deref.call(null,cs);
var inst_39877 = cljs.core.seq.call(null,inst_39876);
var inst_39878 = inst_39877;
var inst_39879 = null;
var inst_39880 = (0);
var inst_39881 = (0);
var state_40001__$1 = (function (){var statearr_40062 = state_40001;
(statearr_40062[(13)] = inst_39879);

(statearr_40062[(15)] = inst_39878);

(statearr_40062[(16)] = inst_39880);

(statearr_40062[(17)] = inst_39881);

return statearr_40062;
})();
var statearr_40063_40125 = state_40001__$1;
(statearr_40063_40125[(2)] = null);

(statearr_40063_40125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (14))){
var state_40001__$1 = state_40001;
var statearr_40064_40126 = state_40001__$1;
(statearr_40064_40126[(2)] = null);

(statearr_40064_40126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (45))){
var inst_39991 = (state_40001[(2)]);
var state_40001__$1 = state_40001;
var statearr_40065_40127 = state_40001__$1;
(statearr_40065_40127[(2)] = inst_39991);

(statearr_40065_40127[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (26))){
var inst_39933 = (state_40001[(29)]);
var inst_39987 = (state_40001[(2)]);
var inst_39988 = cljs.core.seq.call(null,inst_39933);
var state_40001__$1 = (function (){var statearr_40066 = state_40001;
(statearr_40066[(31)] = inst_39987);

return statearr_40066;
})();
if(inst_39988){
var statearr_40067_40128 = state_40001__$1;
(statearr_40067_40128[(1)] = (42));

} else {
var statearr_40068_40129 = state_40001__$1;
(statearr_40068_40129[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (16))){
var inst_39900 = (state_40001[(7)]);
var inst_39902 = cljs.core.chunked_seq_QMARK_.call(null,inst_39900);
var state_40001__$1 = state_40001;
if(inst_39902){
var statearr_40069_40130 = state_40001__$1;
(statearr_40069_40130[(1)] = (19));

} else {
var statearr_40070_40131 = state_40001__$1;
(statearr_40070_40131[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (38))){
var inst_39980 = (state_40001[(2)]);
var state_40001__$1 = state_40001;
var statearr_40071_40132 = state_40001__$1;
(statearr_40071_40132[(2)] = inst_39980);

(statearr_40071_40132[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (30))){
var state_40001__$1 = state_40001;
var statearr_40072_40133 = state_40001__$1;
(statearr_40072_40133[(2)] = null);

(statearr_40072_40133[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (10))){
var inst_39879 = (state_40001[(13)]);
var inst_39881 = (state_40001[(17)]);
var inst_39889 = cljs.core._nth.call(null,inst_39879,inst_39881);
var inst_39890 = cljs.core.nth.call(null,inst_39889,(0),null);
var inst_39891 = cljs.core.nth.call(null,inst_39889,(1),null);
var state_40001__$1 = (function (){var statearr_40073 = state_40001;
(statearr_40073[(26)] = inst_39890);

return statearr_40073;
})();
if(cljs.core.truth_(inst_39891)){
var statearr_40074_40134 = state_40001__$1;
(statearr_40074_40134[(1)] = (13));

} else {
var statearr_40075_40135 = state_40001__$1;
(statearr_40075_40135[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (18))){
var inst_39926 = (state_40001[(2)]);
var state_40001__$1 = state_40001;
var statearr_40076_40136 = state_40001__$1;
(statearr_40076_40136[(2)] = inst_39926);

(statearr_40076_40136[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (42))){
var state_40001__$1 = state_40001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40001__$1,(45),dchan);
} else {
if((state_val_40002 === (37))){
var inst_39969 = (state_40001[(23)]);
var inst_39869 = (state_40001[(11)]);
var inst_39960 = (state_40001[(25)]);
var inst_39969__$1 = cljs.core.first.call(null,inst_39960);
var inst_39970 = cljs.core.async.put_BANG_.call(null,inst_39969__$1,inst_39869,done);
var state_40001__$1 = (function (){var statearr_40077 = state_40001;
(statearr_40077[(23)] = inst_39969__$1);

return statearr_40077;
})();
if(cljs.core.truth_(inst_39970)){
var statearr_40078_40137 = state_40001__$1;
(statearr_40078_40137[(1)] = (39));

} else {
var statearr_40079_40138 = state_40001__$1;
(statearr_40079_40138[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40002 === (8))){
var inst_39880 = (state_40001[(16)]);
var inst_39881 = (state_40001[(17)]);
var inst_39883 = (inst_39881 < inst_39880);
var inst_39884 = inst_39883;
var state_40001__$1 = state_40001;
if(cljs.core.truth_(inst_39884)){
var statearr_40080_40139 = state_40001__$1;
(statearr_40080_40139[(1)] = (10));

} else {
var statearr_40081_40140 = state_40001__$1;
(statearr_40081_40140[(1)] = (11));

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
});})(c__30624__auto___40086,cs,m,dchan,dctr,done))
;
return ((function (switch__30536__auto__,c__30624__auto___40086,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30537__auto__ = null;
var cljs$core$async$mult_$_state_machine__30537__auto____0 = (function (){
var statearr_40082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40082[(0)] = cljs$core$async$mult_$_state_machine__30537__auto__);

(statearr_40082[(1)] = (1));

return statearr_40082;
});
var cljs$core$async$mult_$_state_machine__30537__auto____1 = (function (state_40001){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40083){if((e40083 instanceof Object)){
var ex__30540__auto__ = e40083;
var statearr_40084_40141 = state_40001;
(statearr_40084_40141[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40142 = state_40001;
state_40001 = G__40142;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30537__auto__ = function(state_40001){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30537__auto____1.call(this,state_40001);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30537__auto____0;
cljs$core$async$mult_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30537__auto____1;
return cljs$core$async$mult_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40086,cs,m,dchan,dctr,done))
})();
var state__30626__auto__ = (function (){var statearr_40085 = f__30625__auto__.call(null);
(statearr_40085[(6)] = c__30624__auto___40086);

return statearr_40085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40086,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__40144 = arguments.length;
switch (G__40144) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,ch);
} else {
var m__27879__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,ch);
} else {
var m__27879__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m);
} else {
var m__27879__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,state_map);
} else {
var m__27879__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,mode);
} else {
var m__27879__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___40156 = arguments.length;
var i__28365__auto___40157 = (0);
while(true){
if((i__28365__auto___40157 < len__28364__auto___40156)){
args__28371__auto__.push((arguments[i__28365__auto___40157]));

var G__40158 = (i__28365__auto___40157 + (1));
i__28365__auto___40157 = G__40158;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40150){
var map__40151 = p__40150;
var map__40151__$1 = ((((!((map__40151 == null)))?((((map__40151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40151):map__40151);
var opts = map__40151__$1;
var statearr_40153_40159 = state;
(statearr_40153_40159[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__40151,map__40151__$1,opts){
return (function (val){
var statearr_40154_40160 = state;
(statearr_40154_40160[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40151,map__40151__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_40155_40161 = state;
(statearr_40155_40161[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40146){
var G__40147 = cljs.core.first.call(null,seq40146);
var seq40146__$1 = cljs.core.next.call(null,seq40146);
var G__40148 = cljs.core.first.call(null,seq40146__$1);
var seq40146__$2 = cljs.core.next.call(null,seq40146__$1);
var G__40149 = cljs.core.first.call(null,seq40146__$2);
var seq40146__$3 = cljs.core.next.call(null,seq40146__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40147,G__40148,G__40149,seq40146__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async40162 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40162 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40163){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40163 = meta40163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40164,meta40163__$1){
var self__ = this;
var _40164__$1 = this;
return (new cljs.core.async.t_cljs$core$async40162(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40163__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40164){
var self__ = this;
var _40164__$1 = this;
return self__.meta40163;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40162.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40162.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40162.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40162.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40162.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40162.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40162.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40162.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40162.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40163","meta40163",1544814567,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40162";

cljs.core.async.t_cljs$core$async40162.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40162");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40162 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40162(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40163){
return (new cljs.core.async.t_cljs$core$async40162(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40163));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40162(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30624__auto___40326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40266){
var state_val_40267 = (state_40266[(1)]);
if((state_val_40267 === (7))){
var inst_40181 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40268_40327 = state_40266__$1;
(statearr_40268_40327[(2)] = inst_40181);

(statearr_40268_40327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (20))){
var inst_40193 = (state_40266[(7)]);
var state_40266__$1 = state_40266;
var statearr_40269_40328 = state_40266__$1;
(statearr_40269_40328[(2)] = inst_40193);

(statearr_40269_40328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (27))){
var state_40266__$1 = state_40266;
var statearr_40270_40329 = state_40266__$1;
(statearr_40270_40329[(2)] = null);

(statearr_40270_40329[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (1))){
var inst_40168 = (state_40266[(8)]);
var inst_40168__$1 = calc_state.call(null);
var inst_40170 = (inst_40168__$1 == null);
var inst_40171 = cljs.core.not.call(null,inst_40170);
var state_40266__$1 = (function (){var statearr_40271 = state_40266;
(statearr_40271[(8)] = inst_40168__$1);

return statearr_40271;
})();
if(inst_40171){
var statearr_40272_40330 = state_40266__$1;
(statearr_40272_40330[(1)] = (2));

} else {
var statearr_40273_40331 = state_40266__$1;
(statearr_40273_40331[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (24))){
var inst_40240 = (state_40266[(9)]);
var inst_40226 = (state_40266[(10)]);
var inst_40217 = (state_40266[(11)]);
var inst_40240__$1 = inst_40217.call(null,inst_40226);
var state_40266__$1 = (function (){var statearr_40274 = state_40266;
(statearr_40274[(9)] = inst_40240__$1);

return statearr_40274;
})();
if(cljs.core.truth_(inst_40240__$1)){
var statearr_40275_40332 = state_40266__$1;
(statearr_40275_40332[(1)] = (29));

} else {
var statearr_40276_40333 = state_40266__$1;
(statearr_40276_40333[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (4))){
var inst_40184 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
if(cljs.core.truth_(inst_40184)){
var statearr_40277_40334 = state_40266__$1;
(statearr_40277_40334[(1)] = (8));

} else {
var statearr_40278_40335 = state_40266__$1;
(statearr_40278_40335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (15))){
var inst_40211 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
if(cljs.core.truth_(inst_40211)){
var statearr_40279_40336 = state_40266__$1;
(statearr_40279_40336[(1)] = (19));

} else {
var statearr_40280_40337 = state_40266__$1;
(statearr_40280_40337[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (21))){
var inst_40216 = (state_40266[(12)]);
var inst_40216__$1 = (state_40266[(2)]);
var inst_40217 = cljs.core.get.call(null,inst_40216__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40218 = cljs.core.get.call(null,inst_40216__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40219 = cljs.core.get.call(null,inst_40216__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40266__$1 = (function (){var statearr_40281 = state_40266;
(statearr_40281[(12)] = inst_40216__$1);

(statearr_40281[(13)] = inst_40218);

(statearr_40281[(11)] = inst_40217);

return statearr_40281;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40266__$1,(22),inst_40219);
} else {
if((state_val_40267 === (31))){
var inst_40248 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
if(cljs.core.truth_(inst_40248)){
var statearr_40282_40338 = state_40266__$1;
(statearr_40282_40338[(1)] = (32));

} else {
var statearr_40283_40339 = state_40266__$1;
(statearr_40283_40339[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (32))){
var inst_40225 = (state_40266[(14)]);
var state_40266__$1 = state_40266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40266__$1,(35),out,inst_40225);
} else {
if((state_val_40267 === (33))){
var inst_40216 = (state_40266[(12)]);
var inst_40193 = inst_40216;
var state_40266__$1 = (function (){var statearr_40284 = state_40266;
(statearr_40284[(7)] = inst_40193);

return statearr_40284;
})();
var statearr_40285_40340 = state_40266__$1;
(statearr_40285_40340[(2)] = null);

(statearr_40285_40340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (13))){
var inst_40193 = (state_40266[(7)]);
var inst_40200 = inst_40193.cljs$lang$protocol_mask$partition0$;
var inst_40201 = (inst_40200 & (64));
var inst_40202 = inst_40193.cljs$core$ISeq$;
var inst_40203 = (cljs.core.PROTOCOL_SENTINEL === inst_40202);
var inst_40204 = (inst_40201) || (inst_40203);
var state_40266__$1 = state_40266;
if(cljs.core.truth_(inst_40204)){
var statearr_40286_40341 = state_40266__$1;
(statearr_40286_40341[(1)] = (16));

} else {
var statearr_40287_40342 = state_40266__$1;
(statearr_40287_40342[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (22))){
var inst_40226 = (state_40266[(10)]);
var inst_40225 = (state_40266[(14)]);
var inst_40224 = (state_40266[(2)]);
var inst_40225__$1 = cljs.core.nth.call(null,inst_40224,(0),null);
var inst_40226__$1 = cljs.core.nth.call(null,inst_40224,(1),null);
var inst_40227 = (inst_40225__$1 == null);
var inst_40228 = cljs.core._EQ_.call(null,inst_40226__$1,change);
var inst_40229 = (inst_40227) || (inst_40228);
var state_40266__$1 = (function (){var statearr_40288 = state_40266;
(statearr_40288[(10)] = inst_40226__$1);

(statearr_40288[(14)] = inst_40225__$1);

return statearr_40288;
})();
if(cljs.core.truth_(inst_40229)){
var statearr_40289_40343 = state_40266__$1;
(statearr_40289_40343[(1)] = (23));

} else {
var statearr_40290_40344 = state_40266__$1;
(statearr_40290_40344[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (36))){
var inst_40216 = (state_40266[(12)]);
var inst_40193 = inst_40216;
var state_40266__$1 = (function (){var statearr_40291 = state_40266;
(statearr_40291[(7)] = inst_40193);

return statearr_40291;
})();
var statearr_40292_40345 = state_40266__$1;
(statearr_40292_40345[(2)] = null);

(statearr_40292_40345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (29))){
var inst_40240 = (state_40266[(9)]);
var state_40266__$1 = state_40266;
var statearr_40293_40346 = state_40266__$1;
(statearr_40293_40346[(2)] = inst_40240);

(statearr_40293_40346[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (6))){
var state_40266__$1 = state_40266;
var statearr_40294_40347 = state_40266__$1;
(statearr_40294_40347[(2)] = false);

(statearr_40294_40347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (28))){
var inst_40236 = (state_40266[(2)]);
var inst_40237 = calc_state.call(null);
var inst_40193 = inst_40237;
var state_40266__$1 = (function (){var statearr_40295 = state_40266;
(statearr_40295[(15)] = inst_40236);

(statearr_40295[(7)] = inst_40193);

return statearr_40295;
})();
var statearr_40296_40348 = state_40266__$1;
(statearr_40296_40348[(2)] = null);

(statearr_40296_40348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (25))){
var inst_40262 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40297_40349 = state_40266__$1;
(statearr_40297_40349[(2)] = inst_40262);

(statearr_40297_40349[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (34))){
var inst_40260 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40298_40350 = state_40266__$1;
(statearr_40298_40350[(2)] = inst_40260);

(statearr_40298_40350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (17))){
var state_40266__$1 = state_40266;
var statearr_40299_40351 = state_40266__$1;
(statearr_40299_40351[(2)] = false);

(statearr_40299_40351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (3))){
var state_40266__$1 = state_40266;
var statearr_40300_40352 = state_40266__$1;
(statearr_40300_40352[(2)] = false);

(statearr_40300_40352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (12))){
var inst_40264 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40266__$1,inst_40264);
} else {
if((state_val_40267 === (2))){
var inst_40168 = (state_40266[(8)]);
var inst_40173 = inst_40168.cljs$lang$protocol_mask$partition0$;
var inst_40174 = (inst_40173 & (64));
var inst_40175 = inst_40168.cljs$core$ISeq$;
var inst_40176 = (cljs.core.PROTOCOL_SENTINEL === inst_40175);
var inst_40177 = (inst_40174) || (inst_40176);
var state_40266__$1 = state_40266;
if(cljs.core.truth_(inst_40177)){
var statearr_40301_40353 = state_40266__$1;
(statearr_40301_40353[(1)] = (5));

} else {
var statearr_40302_40354 = state_40266__$1;
(statearr_40302_40354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (23))){
var inst_40225 = (state_40266[(14)]);
var inst_40231 = (inst_40225 == null);
var state_40266__$1 = state_40266;
if(cljs.core.truth_(inst_40231)){
var statearr_40303_40355 = state_40266__$1;
(statearr_40303_40355[(1)] = (26));

} else {
var statearr_40304_40356 = state_40266__$1;
(statearr_40304_40356[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (35))){
var inst_40251 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
if(cljs.core.truth_(inst_40251)){
var statearr_40305_40357 = state_40266__$1;
(statearr_40305_40357[(1)] = (36));

} else {
var statearr_40306_40358 = state_40266__$1;
(statearr_40306_40358[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (19))){
var inst_40193 = (state_40266[(7)]);
var inst_40213 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40193);
var state_40266__$1 = state_40266;
var statearr_40307_40359 = state_40266__$1;
(statearr_40307_40359[(2)] = inst_40213);

(statearr_40307_40359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (11))){
var inst_40193 = (state_40266[(7)]);
var inst_40197 = (inst_40193 == null);
var inst_40198 = cljs.core.not.call(null,inst_40197);
var state_40266__$1 = state_40266;
if(inst_40198){
var statearr_40308_40360 = state_40266__$1;
(statearr_40308_40360[(1)] = (13));

} else {
var statearr_40309_40361 = state_40266__$1;
(statearr_40309_40361[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (9))){
var inst_40168 = (state_40266[(8)]);
var state_40266__$1 = state_40266;
var statearr_40310_40362 = state_40266__$1;
(statearr_40310_40362[(2)] = inst_40168);

(statearr_40310_40362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (5))){
var state_40266__$1 = state_40266;
var statearr_40311_40363 = state_40266__$1;
(statearr_40311_40363[(2)] = true);

(statearr_40311_40363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (14))){
var state_40266__$1 = state_40266;
var statearr_40312_40364 = state_40266__$1;
(statearr_40312_40364[(2)] = false);

(statearr_40312_40364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (26))){
var inst_40226 = (state_40266[(10)]);
var inst_40233 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40226);
var state_40266__$1 = state_40266;
var statearr_40313_40365 = state_40266__$1;
(statearr_40313_40365[(2)] = inst_40233);

(statearr_40313_40365[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (16))){
var state_40266__$1 = state_40266;
var statearr_40314_40366 = state_40266__$1;
(statearr_40314_40366[(2)] = true);

(statearr_40314_40366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (38))){
var inst_40256 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40315_40367 = state_40266__$1;
(statearr_40315_40367[(2)] = inst_40256);

(statearr_40315_40367[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (30))){
var inst_40218 = (state_40266[(13)]);
var inst_40226 = (state_40266[(10)]);
var inst_40217 = (state_40266[(11)]);
var inst_40243 = cljs.core.empty_QMARK_.call(null,inst_40217);
var inst_40244 = inst_40218.call(null,inst_40226);
var inst_40245 = cljs.core.not.call(null,inst_40244);
var inst_40246 = (inst_40243) && (inst_40245);
var state_40266__$1 = state_40266;
var statearr_40316_40368 = state_40266__$1;
(statearr_40316_40368[(2)] = inst_40246);

(statearr_40316_40368[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (10))){
var inst_40168 = (state_40266[(8)]);
var inst_40189 = (state_40266[(2)]);
var inst_40190 = cljs.core.get.call(null,inst_40189,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40191 = cljs.core.get.call(null,inst_40189,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40192 = cljs.core.get.call(null,inst_40189,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40193 = inst_40168;
var state_40266__$1 = (function (){var statearr_40317 = state_40266;
(statearr_40317[(16)] = inst_40192);

(statearr_40317[(7)] = inst_40193);

(statearr_40317[(17)] = inst_40191);

(statearr_40317[(18)] = inst_40190);

return statearr_40317;
})();
var statearr_40318_40369 = state_40266__$1;
(statearr_40318_40369[(2)] = null);

(statearr_40318_40369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (18))){
var inst_40208 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40319_40370 = state_40266__$1;
(statearr_40319_40370[(2)] = inst_40208);

(statearr_40319_40370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (37))){
var state_40266__$1 = state_40266;
var statearr_40320_40371 = state_40266__$1;
(statearr_40320_40371[(2)] = null);

(statearr_40320_40371[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (8))){
var inst_40168 = (state_40266[(8)]);
var inst_40186 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40168);
var state_40266__$1 = state_40266;
var statearr_40321_40372 = state_40266__$1;
(statearr_40321_40372[(2)] = inst_40186);

(statearr_40321_40372[(1)] = (10));


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
});})(c__30624__auto___40326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30536__auto__,c__30624__auto___40326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30537__auto__ = null;
var cljs$core$async$mix_$_state_machine__30537__auto____0 = (function (){
var statearr_40322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40322[(0)] = cljs$core$async$mix_$_state_machine__30537__auto__);

(statearr_40322[(1)] = (1));

return statearr_40322;
});
var cljs$core$async$mix_$_state_machine__30537__auto____1 = (function (state_40266){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40323){if((e40323 instanceof Object)){
var ex__30540__auto__ = e40323;
var statearr_40324_40373 = state_40266;
(statearr_40324_40373[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40374 = state_40266;
state_40266 = G__40374;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30537__auto__ = function(state_40266){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30537__auto____1.call(this,state_40266);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30537__auto____0;
cljs$core$async$mix_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30537__auto____1;
return cljs$core$async$mix_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30626__auto__ = (function (){var statearr_40325 = f__30625__auto__.call(null);
(statearr_40325[(6)] = c__30624__auto___40326);

return statearr_40325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27878__auto__ = (((p == null))?null:p);
var m__27879__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27879__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27878__auto__ = (((p == null))?null:p);
var m__27879__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,p,v,ch);
} else {
var m__27879__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40376 = arguments.length;
switch (G__40376) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27878__auto__ = (((p == null))?null:p);
var m__27879__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,p);
} else {
var m__27879__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27878__auto__ = (((p == null))?null:p);
var m__27879__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,p,v);
} else {
var m__27879__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__40380 = arguments.length;
switch (G__40380) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27195__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27195__auto__,mults){
return (function (p1__40378_SHARP_){
if(cljs.core.truth_(p1__40378_SHARP_.call(null,topic))){
return p1__40378_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40378_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40381 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40382){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40382 = meta40382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40383,meta40382__$1){
var self__ = this;
var _40383__$1 = this;
return (new cljs.core.async.t_cljs$core$async40381(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40382__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40383){
var self__ = this;
var _40383__$1 = this;
return self__.meta40382;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40381.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40381.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40382","meta40382",-1646050706,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40381";

cljs.core.async.t_cljs$core$async40381.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40381");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40381 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40381(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40382){
return (new cljs.core.async.t_cljs$core$async40381(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40382));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40381(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30624__auto___40501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40501,mults,ensure_mult,p){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40501,mults,ensure_mult,p){
return (function (state_40455){
var state_val_40456 = (state_40455[(1)]);
if((state_val_40456 === (7))){
var inst_40451 = (state_40455[(2)]);
var state_40455__$1 = state_40455;
var statearr_40457_40502 = state_40455__$1;
(statearr_40457_40502[(2)] = inst_40451);

(statearr_40457_40502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (20))){
var state_40455__$1 = state_40455;
var statearr_40458_40503 = state_40455__$1;
(statearr_40458_40503[(2)] = null);

(statearr_40458_40503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (1))){
var state_40455__$1 = state_40455;
var statearr_40459_40504 = state_40455__$1;
(statearr_40459_40504[(2)] = null);

(statearr_40459_40504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (24))){
var inst_40434 = (state_40455[(7)]);
var inst_40443 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40434);
var state_40455__$1 = state_40455;
var statearr_40460_40505 = state_40455__$1;
(statearr_40460_40505[(2)] = inst_40443);

(statearr_40460_40505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (4))){
var inst_40386 = (state_40455[(8)]);
var inst_40386__$1 = (state_40455[(2)]);
var inst_40387 = (inst_40386__$1 == null);
var state_40455__$1 = (function (){var statearr_40461 = state_40455;
(statearr_40461[(8)] = inst_40386__$1);

return statearr_40461;
})();
if(cljs.core.truth_(inst_40387)){
var statearr_40462_40506 = state_40455__$1;
(statearr_40462_40506[(1)] = (5));

} else {
var statearr_40463_40507 = state_40455__$1;
(statearr_40463_40507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (15))){
var inst_40428 = (state_40455[(2)]);
var state_40455__$1 = state_40455;
var statearr_40464_40508 = state_40455__$1;
(statearr_40464_40508[(2)] = inst_40428);

(statearr_40464_40508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (21))){
var inst_40448 = (state_40455[(2)]);
var state_40455__$1 = (function (){var statearr_40465 = state_40455;
(statearr_40465[(9)] = inst_40448);

return statearr_40465;
})();
var statearr_40466_40509 = state_40455__$1;
(statearr_40466_40509[(2)] = null);

(statearr_40466_40509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (13))){
var inst_40410 = (state_40455[(10)]);
var inst_40412 = cljs.core.chunked_seq_QMARK_.call(null,inst_40410);
var state_40455__$1 = state_40455;
if(inst_40412){
var statearr_40467_40510 = state_40455__$1;
(statearr_40467_40510[(1)] = (16));

} else {
var statearr_40468_40511 = state_40455__$1;
(statearr_40468_40511[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (22))){
var inst_40440 = (state_40455[(2)]);
var state_40455__$1 = state_40455;
if(cljs.core.truth_(inst_40440)){
var statearr_40469_40512 = state_40455__$1;
(statearr_40469_40512[(1)] = (23));

} else {
var statearr_40470_40513 = state_40455__$1;
(statearr_40470_40513[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (6))){
var inst_40434 = (state_40455[(7)]);
var inst_40386 = (state_40455[(8)]);
var inst_40436 = (state_40455[(11)]);
var inst_40434__$1 = topic_fn.call(null,inst_40386);
var inst_40435 = cljs.core.deref.call(null,mults);
var inst_40436__$1 = cljs.core.get.call(null,inst_40435,inst_40434__$1);
var state_40455__$1 = (function (){var statearr_40471 = state_40455;
(statearr_40471[(7)] = inst_40434__$1);

(statearr_40471[(11)] = inst_40436__$1);

return statearr_40471;
})();
if(cljs.core.truth_(inst_40436__$1)){
var statearr_40472_40514 = state_40455__$1;
(statearr_40472_40514[(1)] = (19));

} else {
var statearr_40473_40515 = state_40455__$1;
(statearr_40473_40515[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (25))){
var inst_40445 = (state_40455[(2)]);
var state_40455__$1 = state_40455;
var statearr_40474_40516 = state_40455__$1;
(statearr_40474_40516[(2)] = inst_40445);

(statearr_40474_40516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (17))){
var inst_40410 = (state_40455[(10)]);
var inst_40419 = cljs.core.first.call(null,inst_40410);
var inst_40420 = cljs.core.async.muxch_STAR_.call(null,inst_40419);
var inst_40421 = cljs.core.async.close_BANG_.call(null,inst_40420);
var inst_40422 = cljs.core.next.call(null,inst_40410);
var inst_40396 = inst_40422;
var inst_40397 = null;
var inst_40398 = (0);
var inst_40399 = (0);
var state_40455__$1 = (function (){var statearr_40475 = state_40455;
(statearr_40475[(12)] = inst_40399);

(statearr_40475[(13)] = inst_40396);

(statearr_40475[(14)] = inst_40397);

(statearr_40475[(15)] = inst_40421);

(statearr_40475[(16)] = inst_40398);

return statearr_40475;
})();
var statearr_40476_40517 = state_40455__$1;
(statearr_40476_40517[(2)] = null);

(statearr_40476_40517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (3))){
var inst_40453 = (state_40455[(2)]);
var state_40455__$1 = state_40455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40455__$1,inst_40453);
} else {
if((state_val_40456 === (12))){
var inst_40430 = (state_40455[(2)]);
var state_40455__$1 = state_40455;
var statearr_40477_40518 = state_40455__$1;
(statearr_40477_40518[(2)] = inst_40430);

(statearr_40477_40518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (2))){
var state_40455__$1 = state_40455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40455__$1,(4),ch);
} else {
if((state_val_40456 === (23))){
var state_40455__$1 = state_40455;
var statearr_40478_40519 = state_40455__$1;
(statearr_40478_40519[(2)] = null);

(statearr_40478_40519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (19))){
var inst_40386 = (state_40455[(8)]);
var inst_40436 = (state_40455[(11)]);
var inst_40438 = cljs.core.async.muxch_STAR_.call(null,inst_40436);
var state_40455__$1 = state_40455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40455__$1,(22),inst_40438,inst_40386);
} else {
if((state_val_40456 === (11))){
var inst_40396 = (state_40455[(13)]);
var inst_40410 = (state_40455[(10)]);
var inst_40410__$1 = cljs.core.seq.call(null,inst_40396);
var state_40455__$1 = (function (){var statearr_40479 = state_40455;
(statearr_40479[(10)] = inst_40410__$1);

return statearr_40479;
})();
if(inst_40410__$1){
var statearr_40480_40520 = state_40455__$1;
(statearr_40480_40520[(1)] = (13));

} else {
var statearr_40481_40521 = state_40455__$1;
(statearr_40481_40521[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (9))){
var inst_40432 = (state_40455[(2)]);
var state_40455__$1 = state_40455;
var statearr_40482_40522 = state_40455__$1;
(statearr_40482_40522[(2)] = inst_40432);

(statearr_40482_40522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (5))){
var inst_40393 = cljs.core.deref.call(null,mults);
var inst_40394 = cljs.core.vals.call(null,inst_40393);
var inst_40395 = cljs.core.seq.call(null,inst_40394);
var inst_40396 = inst_40395;
var inst_40397 = null;
var inst_40398 = (0);
var inst_40399 = (0);
var state_40455__$1 = (function (){var statearr_40483 = state_40455;
(statearr_40483[(12)] = inst_40399);

(statearr_40483[(13)] = inst_40396);

(statearr_40483[(14)] = inst_40397);

(statearr_40483[(16)] = inst_40398);

return statearr_40483;
})();
var statearr_40484_40523 = state_40455__$1;
(statearr_40484_40523[(2)] = null);

(statearr_40484_40523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (14))){
var state_40455__$1 = state_40455;
var statearr_40488_40524 = state_40455__$1;
(statearr_40488_40524[(2)] = null);

(statearr_40488_40524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (16))){
var inst_40410 = (state_40455[(10)]);
var inst_40414 = cljs.core.chunk_first.call(null,inst_40410);
var inst_40415 = cljs.core.chunk_rest.call(null,inst_40410);
var inst_40416 = cljs.core.count.call(null,inst_40414);
var inst_40396 = inst_40415;
var inst_40397 = inst_40414;
var inst_40398 = inst_40416;
var inst_40399 = (0);
var state_40455__$1 = (function (){var statearr_40489 = state_40455;
(statearr_40489[(12)] = inst_40399);

(statearr_40489[(13)] = inst_40396);

(statearr_40489[(14)] = inst_40397);

(statearr_40489[(16)] = inst_40398);

return statearr_40489;
})();
var statearr_40490_40525 = state_40455__$1;
(statearr_40490_40525[(2)] = null);

(statearr_40490_40525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (10))){
var inst_40399 = (state_40455[(12)]);
var inst_40396 = (state_40455[(13)]);
var inst_40397 = (state_40455[(14)]);
var inst_40398 = (state_40455[(16)]);
var inst_40404 = cljs.core._nth.call(null,inst_40397,inst_40399);
var inst_40405 = cljs.core.async.muxch_STAR_.call(null,inst_40404);
var inst_40406 = cljs.core.async.close_BANG_.call(null,inst_40405);
var inst_40407 = (inst_40399 + (1));
var tmp40485 = inst_40396;
var tmp40486 = inst_40397;
var tmp40487 = inst_40398;
var inst_40396__$1 = tmp40485;
var inst_40397__$1 = tmp40486;
var inst_40398__$1 = tmp40487;
var inst_40399__$1 = inst_40407;
var state_40455__$1 = (function (){var statearr_40491 = state_40455;
(statearr_40491[(12)] = inst_40399__$1);

(statearr_40491[(13)] = inst_40396__$1);

(statearr_40491[(17)] = inst_40406);

(statearr_40491[(14)] = inst_40397__$1);

(statearr_40491[(16)] = inst_40398__$1);

return statearr_40491;
})();
var statearr_40492_40526 = state_40455__$1;
(statearr_40492_40526[(2)] = null);

(statearr_40492_40526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (18))){
var inst_40425 = (state_40455[(2)]);
var state_40455__$1 = state_40455;
var statearr_40493_40527 = state_40455__$1;
(statearr_40493_40527[(2)] = inst_40425);

(statearr_40493_40527[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40456 === (8))){
var inst_40399 = (state_40455[(12)]);
var inst_40398 = (state_40455[(16)]);
var inst_40401 = (inst_40399 < inst_40398);
var inst_40402 = inst_40401;
var state_40455__$1 = state_40455;
if(cljs.core.truth_(inst_40402)){
var statearr_40494_40528 = state_40455__$1;
(statearr_40494_40528[(1)] = (10));

} else {
var statearr_40495_40529 = state_40455__$1;
(statearr_40495_40529[(1)] = (11));

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
});})(c__30624__auto___40501,mults,ensure_mult,p))
;
return ((function (switch__30536__auto__,c__30624__auto___40501,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40496[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40496[(1)] = (1));

return statearr_40496;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40455){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40497){if((e40497 instanceof Object)){
var ex__30540__auto__ = e40497;
var statearr_40498_40530 = state_40455;
(statearr_40498_40530[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40531 = state_40455;
state_40455 = G__40531;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40455);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40501,mults,ensure_mult,p))
})();
var state__30626__auto__ = (function (){var statearr_40499 = f__30625__auto__.call(null);
(statearr_40499[(6)] = c__30624__auto___40501);

return statearr_40499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40501,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__40533 = arguments.length;
switch (G__40533) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__40536 = arguments.length;
switch (G__40536) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__40539 = arguments.length;
switch (G__40539) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30624__auto___40606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40606,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40606,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40578){
var state_val_40579 = (state_40578[(1)]);
if((state_val_40579 === (7))){
var state_40578__$1 = state_40578;
var statearr_40580_40607 = state_40578__$1;
(statearr_40580_40607[(2)] = null);

(statearr_40580_40607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40579 === (1))){
var state_40578__$1 = state_40578;
var statearr_40581_40608 = state_40578__$1;
(statearr_40581_40608[(2)] = null);

(statearr_40581_40608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40579 === (4))){
var inst_40542 = (state_40578[(7)]);
var inst_40544 = (inst_40542 < cnt);
var state_40578__$1 = state_40578;
if(cljs.core.truth_(inst_40544)){
var statearr_40582_40609 = state_40578__$1;
(statearr_40582_40609[(1)] = (6));

} else {
var statearr_40583_40610 = state_40578__$1;
(statearr_40583_40610[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40579 === (15))){
var inst_40574 = (state_40578[(2)]);
var state_40578__$1 = state_40578;
var statearr_40584_40611 = state_40578__$1;
(statearr_40584_40611[(2)] = inst_40574);

(statearr_40584_40611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40579 === (13))){
var inst_40567 = cljs.core.async.close_BANG_.call(null,out);
var state_40578__$1 = state_40578;
var statearr_40585_40612 = state_40578__$1;
(statearr_40585_40612[(2)] = inst_40567);

(statearr_40585_40612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40579 === (6))){
var state_40578__$1 = state_40578;
var statearr_40586_40613 = state_40578__$1;
(statearr_40586_40613[(2)] = null);

(statearr_40586_40613[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40579 === (3))){
var inst_40576 = (state_40578[(2)]);
var state_40578__$1 = state_40578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40578__$1,inst_40576);
} else {
if((state_val_40579 === (12))){
var inst_40564 = (state_40578[(8)]);
var inst_40564__$1 = (state_40578[(2)]);
var inst_40565 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40564__$1);
var state_40578__$1 = (function (){var statearr_40587 = state_40578;
(statearr_40587[(8)] = inst_40564__$1);

return statearr_40587;
})();
if(cljs.core.truth_(inst_40565)){
var statearr_40588_40614 = state_40578__$1;
(statearr_40588_40614[(1)] = (13));

} else {
var statearr_40589_40615 = state_40578__$1;
(statearr_40589_40615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40579 === (2))){
var inst_40541 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40542 = (0);
var state_40578__$1 = (function (){var statearr_40590 = state_40578;
(statearr_40590[(7)] = inst_40542);

(statearr_40590[(9)] = inst_40541);

return statearr_40590;
})();
var statearr_40591_40616 = state_40578__$1;
(statearr_40591_40616[(2)] = null);

(statearr_40591_40616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40579 === (11))){
var inst_40542 = (state_40578[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40578,(10),Object,null,(9));
var inst_40551 = chs__$1.call(null,inst_40542);
var inst_40552 = done.call(null,inst_40542);
var inst_40553 = cljs.core.async.take_BANG_.call(null,inst_40551,inst_40552);
var state_40578__$1 = state_40578;
var statearr_40592_40617 = state_40578__$1;
(statearr_40592_40617[(2)] = inst_40553);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40578__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40579 === (9))){
var inst_40542 = (state_40578[(7)]);
var inst_40555 = (state_40578[(2)]);
var inst_40556 = (inst_40542 + (1));
var inst_40542__$1 = inst_40556;
var state_40578__$1 = (function (){var statearr_40593 = state_40578;
(statearr_40593[(10)] = inst_40555);

(statearr_40593[(7)] = inst_40542__$1);

return statearr_40593;
})();
var statearr_40594_40618 = state_40578__$1;
(statearr_40594_40618[(2)] = null);

(statearr_40594_40618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40579 === (5))){
var inst_40562 = (state_40578[(2)]);
var state_40578__$1 = (function (){var statearr_40595 = state_40578;
(statearr_40595[(11)] = inst_40562);

return statearr_40595;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40578__$1,(12),dchan);
} else {
if((state_val_40579 === (14))){
var inst_40564 = (state_40578[(8)]);
var inst_40569 = cljs.core.apply.call(null,f,inst_40564);
var state_40578__$1 = state_40578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40578__$1,(16),out,inst_40569);
} else {
if((state_val_40579 === (16))){
var inst_40571 = (state_40578[(2)]);
var state_40578__$1 = (function (){var statearr_40596 = state_40578;
(statearr_40596[(12)] = inst_40571);

return statearr_40596;
})();
var statearr_40597_40619 = state_40578__$1;
(statearr_40597_40619[(2)] = null);

(statearr_40597_40619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40579 === (10))){
var inst_40546 = (state_40578[(2)]);
var inst_40547 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40578__$1 = (function (){var statearr_40598 = state_40578;
(statearr_40598[(13)] = inst_40546);

return statearr_40598;
})();
var statearr_40599_40620 = state_40578__$1;
(statearr_40599_40620[(2)] = inst_40547);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40578__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40579 === (8))){
var inst_40560 = (state_40578[(2)]);
var state_40578__$1 = state_40578;
var statearr_40600_40621 = state_40578__$1;
(statearr_40600_40621[(2)] = inst_40560);

(statearr_40600_40621[(1)] = (5));


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
});})(c__30624__auto___40606,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30536__auto__,c__30624__auto___40606,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40601[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40601[(1)] = (1));

return statearr_40601;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40578){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40602){if((e40602 instanceof Object)){
var ex__30540__auto__ = e40602;
var statearr_40603_40622 = state_40578;
(statearr_40603_40622[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40623 = state_40578;
state_40578 = G__40623;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40606,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30626__auto__ = (function (){var statearr_40604 = f__30625__auto__.call(null);
(statearr_40604[(6)] = c__30624__auto___40606);

return statearr_40604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40606,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__40626 = arguments.length;
switch (G__40626) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30624__auto___40680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40680,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40680,out){
return (function (state_40658){
var state_val_40659 = (state_40658[(1)]);
if((state_val_40659 === (7))){
var inst_40638 = (state_40658[(7)]);
var inst_40637 = (state_40658[(8)]);
var inst_40637__$1 = (state_40658[(2)]);
var inst_40638__$1 = cljs.core.nth.call(null,inst_40637__$1,(0),null);
var inst_40639 = cljs.core.nth.call(null,inst_40637__$1,(1),null);
var inst_40640 = (inst_40638__$1 == null);
var state_40658__$1 = (function (){var statearr_40660 = state_40658;
(statearr_40660[(9)] = inst_40639);

(statearr_40660[(7)] = inst_40638__$1);

(statearr_40660[(8)] = inst_40637__$1);

return statearr_40660;
})();
if(cljs.core.truth_(inst_40640)){
var statearr_40661_40681 = state_40658__$1;
(statearr_40661_40681[(1)] = (8));

} else {
var statearr_40662_40682 = state_40658__$1;
(statearr_40662_40682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (1))){
var inst_40627 = cljs.core.vec.call(null,chs);
var inst_40628 = inst_40627;
var state_40658__$1 = (function (){var statearr_40663 = state_40658;
(statearr_40663[(10)] = inst_40628);

return statearr_40663;
})();
var statearr_40664_40683 = state_40658__$1;
(statearr_40664_40683[(2)] = null);

(statearr_40664_40683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (4))){
var inst_40628 = (state_40658[(10)]);
var state_40658__$1 = state_40658;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40658__$1,(7),inst_40628);
} else {
if((state_val_40659 === (6))){
var inst_40654 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
var statearr_40665_40684 = state_40658__$1;
(statearr_40665_40684[(2)] = inst_40654);

(statearr_40665_40684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (3))){
var inst_40656 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40658__$1,inst_40656);
} else {
if((state_val_40659 === (2))){
var inst_40628 = (state_40658[(10)]);
var inst_40630 = cljs.core.count.call(null,inst_40628);
var inst_40631 = (inst_40630 > (0));
var state_40658__$1 = state_40658;
if(cljs.core.truth_(inst_40631)){
var statearr_40667_40685 = state_40658__$1;
(statearr_40667_40685[(1)] = (4));

} else {
var statearr_40668_40686 = state_40658__$1;
(statearr_40668_40686[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (11))){
var inst_40628 = (state_40658[(10)]);
var inst_40647 = (state_40658[(2)]);
var tmp40666 = inst_40628;
var inst_40628__$1 = tmp40666;
var state_40658__$1 = (function (){var statearr_40669 = state_40658;
(statearr_40669[(10)] = inst_40628__$1);

(statearr_40669[(11)] = inst_40647);

return statearr_40669;
})();
var statearr_40670_40687 = state_40658__$1;
(statearr_40670_40687[(2)] = null);

(statearr_40670_40687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (9))){
var inst_40638 = (state_40658[(7)]);
var state_40658__$1 = state_40658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40658__$1,(11),out,inst_40638);
} else {
if((state_val_40659 === (5))){
var inst_40652 = cljs.core.async.close_BANG_.call(null,out);
var state_40658__$1 = state_40658;
var statearr_40671_40688 = state_40658__$1;
(statearr_40671_40688[(2)] = inst_40652);

(statearr_40671_40688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (10))){
var inst_40650 = (state_40658[(2)]);
var state_40658__$1 = state_40658;
var statearr_40672_40689 = state_40658__$1;
(statearr_40672_40689[(2)] = inst_40650);

(statearr_40672_40689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40659 === (8))){
var inst_40639 = (state_40658[(9)]);
var inst_40628 = (state_40658[(10)]);
var inst_40638 = (state_40658[(7)]);
var inst_40637 = (state_40658[(8)]);
var inst_40642 = (function (){var cs = inst_40628;
var vec__40633 = inst_40637;
var v = inst_40638;
var c = inst_40639;
return ((function (cs,vec__40633,v,c,inst_40639,inst_40628,inst_40638,inst_40637,state_val_40659,c__30624__auto___40680,out){
return (function (p1__40624_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40624_SHARP_);
});
;})(cs,vec__40633,v,c,inst_40639,inst_40628,inst_40638,inst_40637,state_val_40659,c__30624__auto___40680,out))
})();
var inst_40643 = cljs.core.filterv.call(null,inst_40642,inst_40628);
var inst_40628__$1 = inst_40643;
var state_40658__$1 = (function (){var statearr_40673 = state_40658;
(statearr_40673[(10)] = inst_40628__$1);

return statearr_40673;
})();
var statearr_40674_40690 = state_40658__$1;
(statearr_40674_40690[(2)] = null);

(statearr_40674_40690[(1)] = (2));


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
});})(c__30624__auto___40680,out))
;
return ((function (switch__30536__auto__,c__30624__auto___40680,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40675 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40675[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40675[(1)] = (1));

return statearr_40675;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40658){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40676){if((e40676 instanceof Object)){
var ex__30540__auto__ = e40676;
var statearr_40677_40691 = state_40658;
(statearr_40677_40691[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40692 = state_40658;
state_40658 = G__40692;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40680,out))
})();
var state__30626__auto__ = (function (){var statearr_40678 = f__30625__auto__.call(null);
(statearr_40678[(6)] = c__30624__auto___40680);

return statearr_40678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40680,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__40694 = arguments.length;
switch (G__40694) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30624__auto___40739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40739,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40739,out){
return (function (state_40718){
var state_val_40719 = (state_40718[(1)]);
if((state_val_40719 === (7))){
var inst_40700 = (state_40718[(7)]);
var inst_40700__$1 = (state_40718[(2)]);
var inst_40701 = (inst_40700__$1 == null);
var inst_40702 = cljs.core.not.call(null,inst_40701);
var state_40718__$1 = (function (){var statearr_40720 = state_40718;
(statearr_40720[(7)] = inst_40700__$1);

return statearr_40720;
})();
if(inst_40702){
var statearr_40721_40740 = state_40718__$1;
(statearr_40721_40740[(1)] = (8));

} else {
var statearr_40722_40741 = state_40718__$1;
(statearr_40722_40741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40719 === (1))){
var inst_40695 = (0);
var state_40718__$1 = (function (){var statearr_40723 = state_40718;
(statearr_40723[(8)] = inst_40695);

return statearr_40723;
})();
var statearr_40724_40742 = state_40718__$1;
(statearr_40724_40742[(2)] = null);

(statearr_40724_40742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40719 === (4))){
var state_40718__$1 = state_40718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40718__$1,(7),ch);
} else {
if((state_val_40719 === (6))){
var inst_40713 = (state_40718[(2)]);
var state_40718__$1 = state_40718;
var statearr_40725_40743 = state_40718__$1;
(statearr_40725_40743[(2)] = inst_40713);

(statearr_40725_40743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40719 === (3))){
var inst_40715 = (state_40718[(2)]);
var inst_40716 = cljs.core.async.close_BANG_.call(null,out);
var state_40718__$1 = (function (){var statearr_40726 = state_40718;
(statearr_40726[(9)] = inst_40715);

return statearr_40726;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40718__$1,inst_40716);
} else {
if((state_val_40719 === (2))){
var inst_40695 = (state_40718[(8)]);
var inst_40697 = (inst_40695 < n);
var state_40718__$1 = state_40718;
if(cljs.core.truth_(inst_40697)){
var statearr_40727_40744 = state_40718__$1;
(statearr_40727_40744[(1)] = (4));

} else {
var statearr_40728_40745 = state_40718__$1;
(statearr_40728_40745[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40719 === (11))){
var inst_40695 = (state_40718[(8)]);
var inst_40705 = (state_40718[(2)]);
var inst_40706 = (inst_40695 + (1));
var inst_40695__$1 = inst_40706;
var state_40718__$1 = (function (){var statearr_40729 = state_40718;
(statearr_40729[(8)] = inst_40695__$1);

(statearr_40729[(10)] = inst_40705);

return statearr_40729;
})();
var statearr_40730_40746 = state_40718__$1;
(statearr_40730_40746[(2)] = null);

(statearr_40730_40746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40719 === (9))){
var state_40718__$1 = state_40718;
var statearr_40731_40747 = state_40718__$1;
(statearr_40731_40747[(2)] = null);

(statearr_40731_40747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40719 === (5))){
var state_40718__$1 = state_40718;
var statearr_40732_40748 = state_40718__$1;
(statearr_40732_40748[(2)] = null);

(statearr_40732_40748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40719 === (10))){
var inst_40710 = (state_40718[(2)]);
var state_40718__$1 = state_40718;
var statearr_40733_40749 = state_40718__$1;
(statearr_40733_40749[(2)] = inst_40710);

(statearr_40733_40749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40719 === (8))){
var inst_40700 = (state_40718[(7)]);
var state_40718__$1 = state_40718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40718__$1,(11),out,inst_40700);
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
});})(c__30624__auto___40739,out))
;
return ((function (switch__30536__auto__,c__30624__auto___40739,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40734[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40734[(1)] = (1));

return statearr_40734;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40718){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40735){if((e40735 instanceof Object)){
var ex__30540__auto__ = e40735;
var statearr_40736_40750 = state_40718;
(statearr_40736_40750[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40751 = state_40718;
state_40718 = G__40751;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40718);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40739,out))
})();
var state__30626__auto__ = (function (){var statearr_40737 = f__30625__auto__.call(null);
(statearr_40737[(6)] = c__30624__auto___40739);

return statearr_40737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40739,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40753 = (function (f,ch,meta40754){
this.f = f;
this.ch = ch;
this.meta40754 = meta40754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40755,meta40754__$1){
var self__ = this;
var _40755__$1 = this;
return (new cljs.core.async.t_cljs$core$async40753(self__.f,self__.ch,meta40754__$1));
});

cljs.core.async.t_cljs$core$async40753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40755){
var self__ = this;
var _40755__$1 = this;
return self__.meta40754;
});

cljs.core.async.t_cljs$core$async40753.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40753.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40753.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40753.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40753.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40756 = (function (f,ch,meta40754,_,fn1,meta40757){
this.f = f;
this.ch = ch;
this.meta40754 = meta40754;
this._ = _;
this.fn1 = fn1;
this.meta40757 = meta40757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40758,meta40757__$1){
var self__ = this;
var _40758__$1 = this;
return (new cljs.core.async.t_cljs$core$async40756(self__.f,self__.ch,self__.meta40754,self__._,self__.fn1,meta40757__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40758){
var self__ = this;
var _40758__$1 = this;
return self__.meta40757;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40756.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40756.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40756.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40756.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40752_SHARP_){
return f1.call(null,(((p1__40752_SHARP_ == null))?null:self__.f.call(null,p1__40752_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40756.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40754","meta40754",-283322438,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40753","cljs.core.async/t_cljs$core$async40753",-480656760,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40757","meta40757",-1470327438,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40756";

cljs.core.async.t_cljs$core$async40756.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40756");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40756 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40756(f__$1,ch__$1,meta40754__$1,___$2,fn1__$1,meta40757){
return (new cljs.core.async.t_cljs$core$async40756(f__$1,ch__$1,meta40754__$1,___$2,fn1__$1,meta40757));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40756(self__.f,self__.ch,self__.meta40754,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27183__auto__ = ret;
if(cljs.core.truth_(and__27183__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27183__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async40753.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40753.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40754","meta40754",-283322438,null)], null);
});

cljs.core.async.t_cljs$core$async40753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40753";

cljs.core.async.t_cljs$core$async40753.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40753");
});

cljs.core.async.__GT_t_cljs$core$async40753 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40753(f__$1,ch__$1,meta40754){
return (new cljs.core.async.t_cljs$core$async40753(f__$1,ch__$1,meta40754));
});

}

return (new cljs.core.async.t_cljs$core$async40753(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40759 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40759 = (function (f,ch,meta40760){
this.f = f;
this.ch = ch;
this.meta40760 = meta40760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40761,meta40760__$1){
var self__ = this;
var _40761__$1 = this;
return (new cljs.core.async.t_cljs$core$async40759(self__.f,self__.ch,meta40760__$1));
});

cljs.core.async.t_cljs$core$async40759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40761){
var self__ = this;
var _40761__$1 = this;
return self__.meta40760;
});

cljs.core.async.t_cljs$core$async40759.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40759.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40759.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40759.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40759.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40759.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40760","meta40760",-2124839617,null)], null);
});

cljs.core.async.t_cljs$core$async40759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40759";

cljs.core.async.t_cljs$core$async40759.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40759");
});

cljs.core.async.__GT_t_cljs$core$async40759 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40759(f__$1,ch__$1,meta40760){
return (new cljs.core.async.t_cljs$core$async40759(f__$1,ch__$1,meta40760));
});

}

return (new cljs.core.async.t_cljs$core$async40759(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40762 = (function (p,ch,meta40763){
this.p = p;
this.ch = ch;
this.meta40763 = meta40763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40764,meta40763__$1){
var self__ = this;
var _40764__$1 = this;
return (new cljs.core.async.t_cljs$core$async40762(self__.p,self__.ch,meta40763__$1));
});

cljs.core.async.t_cljs$core$async40762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40764){
var self__ = this;
var _40764__$1 = this;
return self__.meta40763;
});

cljs.core.async.t_cljs$core$async40762.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40762.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40762.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40762.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40762.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40762.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40762.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40763","meta40763",-594435057,null)], null);
});

cljs.core.async.t_cljs$core$async40762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40762";

cljs.core.async.t_cljs$core$async40762.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40762");
});

cljs.core.async.__GT_t_cljs$core$async40762 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40762(p__$1,ch__$1,meta40763){
return (new cljs.core.async.t_cljs$core$async40762(p__$1,ch__$1,meta40763));
});

}

return (new cljs.core.async.t_cljs$core$async40762(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__40766 = arguments.length;
switch (G__40766) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30624__auto___40806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40806,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40806,out){
return (function (state_40787){
var state_val_40788 = (state_40787[(1)]);
if((state_val_40788 === (7))){
var inst_40783 = (state_40787[(2)]);
var state_40787__$1 = state_40787;
var statearr_40789_40807 = state_40787__$1;
(statearr_40789_40807[(2)] = inst_40783);

(statearr_40789_40807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (1))){
var state_40787__$1 = state_40787;
var statearr_40790_40808 = state_40787__$1;
(statearr_40790_40808[(2)] = null);

(statearr_40790_40808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (4))){
var inst_40769 = (state_40787[(7)]);
var inst_40769__$1 = (state_40787[(2)]);
var inst_40770 = (inst_40769__$1 == null);
var state_40787__$1 = (function (){var statearr_40791 = state_40787;
(statearr_40791[(7)] = inst_40769__$1);

return statearr_40791;
})();
if(cljs.core.truth_(inst_40770)){
var statearr_40792_40809 = state_40787__$1;
(statearr_40792_40809[(1)] = (5));

} else {
var statearr_40793_40810 = state_40787__$1;
(statearr_40793_40810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (6))){
var inst_40769 = (state_40787[(7)]);
var inst_40774 = p.call(null,inst_40769);
var state_40787__$1 = state_40787;
if(cljs.core.truth_(inst_40774)){
var statearr_40794_40811 = state_40787__$1;
(statearr_40794_40811[(1)] = (8));

} else {
var statearr_40795_40812 = state_40787__$1;
(statearr_40795_40812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (3))){
var inst_40785 = (state_40787[(2)]);
var state_40787__$1 = state_40787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40787__$1,inst_40785);
} else {
if((state_val_40788 === (2))){
var state_40787__$1 = state_40787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40787__$1,(4),ch);
} else {
if((state_val_40788 === (11))){
var inst_40777 = (state_40787[(2)]);
var state_40787__$1 = state_40787;
var statearr_40796_40813 = state_40787__$1;
(statearr_40796_40813[(2)] = inst_40777);

(statearr_40796_40813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (9))){
var state_40787__$1 = state_40787;
var statearr_40797_40814 = state_40787__$1;
(statearr_40797_40814[(2)] = null);

(statearr_40797_40814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (5))){
var inst_40772 = cljs.core.async.close_BANG_.call(null,out);
var state_40787__$1 = state_40787;
var statearr_40798_40815 = state_40787__$1;
(statearr_40798_40815[(2)] = inst_40772);

(statearr_40798_40815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (10))){
var inst_40780 = (state_40787[(2)]);
var state_40787__$1 = (function (){var statearr_40799 = state_40787;
(statearr_40799[(8)] = inst_40780);

return statearr_40799;
})();
var statearr_40800_40816 = state_40787__$1;
(statearr_40800_40816[(2)] = null);

(statearr_40800_40816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (8))){
var inst_40769 = (state_40787[(7)]);
var state_40787__$1 = state_40787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40787__$1,(11),out,inst_40769);
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
});})(c__30624__auto___40806,out))
;
return ((function (switch__30536__auto__,c__30624__auto___40806,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40801 = [null,null,null,null,null,null,null,null,null];
(statearr_40801[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40801[(1)] = (1));

return statearr_40801;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40787){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40802){if((e40802 instanceof Object)){
var ex__30540__auto__ = e40802;
var statearr_40803_40817 = state_40787;
(statearr_40803_40817[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40818 = state_40787;
state_40787 = G__40818;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40806,out))
})();
var state__30626__auto__ = (function (){var statearr_40804 = f__30625__auto__.call(null);
(statearr_40804[(6)] = c__30624__auto___40806);

return statearr_40804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40806,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40820 = arguments.length;
switch (G__40820) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto__){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto__){
return (function (state_40883){
var state_val_40884 = (state_40883[(1)]);
if((state_val_40884 === (7))){
var inst_40879 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_40885_40923 = state_40883__$1;
(statearr_40885_40923[(2)] = inst_40879);

(statearr_40885_40923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (20))){
var inst_40849 = (state_40883[(7)]);
var inst_40860 = (state_40883[(2)]);
var inst_40861 = cljs.core.next.call(null,inst_40849);
var inst_40835 = inst_40861;
var inst_40836 = null;
var inst_40837 = (0);
var inst_40838 = (0);
var state_40883__$1 = (function (){var statearr_40886 = state_40883;
(statearr_40886[(8)] = inst_40835);

(statearr_40886[(9)] = inst_40860);

(statearr_40886[(10)] = inst_40837);

(statearr_40886[(11)] = inst_40838);

(statearr_40886[(12)] = inst_40836);

return statearr_40886;
})();
var statearr_40887_40924 = state_40883__$1;
(statearr_40887_40924[(2)] = null);

(statearr_40887_40924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (1))){
var state_40883__$1 = state_40883;
var statearr_40888_40925 = state_40883__$1;
(statearr_40888_40925[(2)] = null);

(statearr_40888_40925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (4))){
var inst_40824 = (state_40883[(13)]);
var inst_40824__$1 = (state_40883[(2)]);
var inst_40825 = (inst_40824__$1 == null);
var state_40883__$1 = (function (){var statearr_40889 = state_40883;
(statearr_40889[(13)] = inst_40824__$1);

return statearr_40889;
})();
if(cljs.core.truth_(inst_40825)){
var statearr_40890_40926 = state_40883__$1;
(statearr_40890_40926[(1)] = (5));

} else {
var statearr_40891_40927 = state_40883__$1;
(statearr_40891_40927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (15))){
var state_40883__$1 = state_40883;
var statearr_40895_40928 = state_40883__$1;
(statearr_40895_40928[(2)] = null);

(statearr_40895_40928[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (21))){
var state_40883__$1 = state_40883;
var statearr_40896_40929 = state_40883__$1;
(statearr_40896_40929[(2)] = null);

(statearr_40896_40929[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (13))){
var inst_40835 = (state_40883[(8)]);
var inst_40837 = (state_40883[(10)]);
var inst_40838 = (state_40883[(11)]);
var inst_40836 = (state_40883[(12)]);
var inst_40845 = (state_40883[(2)]);
var inst_40846 = (inst_40838 + (1));
var tmp40892 = inst_40835;
var tmp40893 = inst_40837;
var tmp40894 = inst_40836;
var inst_40835__$1 = tmp40892;
var inst_40836__$1 = tmp40894;
var inst_40837__$1 = tmp40893;
var inst_40838__$1 = inst_40846;
var state_40883__$1 = (function (){var statearr_40897 = state_40883;
(statearr_40897[(8)] = inst_40835__$1);

(statearr_40897[(10)] = inst_40837__$1);

(statearr_40897[(11)] = inst_40838__$1);

(statearr_40897[(12)] = inst_40836__$1);

(statearr_40897[(14)] = inst_40845);

return statearr_40897;
})();
var statearr_40898_40930 = state_40883__$1;
(statearr_40898_40930[(2)] = null);

(statearr_40898_40930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (22))){
var state_40883__$1 = state_40883;
var statearr_40899_40931 = state_40883__$1;
(statearr_40899_40931[(2)] = null);

(statearr_40899_40931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (6))){
var inst_40824 = (state_40883[(13)]);
var inst_40833 = f.call(null,inst_40824);
var inst_40834 = cljs.core.seq.call(null,inst_40833);
var inst_40835 = inst_40834;
var inst_40836 = null;
var inst_40837 = (0);
var inst_40838 = (0);
var state_40883__$1 = (function (){var statearr_40900 = state_40883;
(statearr_40900[(8)] = inst_40835);

(statearr_40900[(10)] = inst_40837);

(statearr_40900[(11)] = inst_40838);

(statearr_40900[(12)] = inst_40836);

return statearr_40900;
})();
var statearr_40901_40932 = state_40883__$1;
(statearr_40901_40932[(2)] = null);

(statearr_40901_40932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (17))){
var inst_40849 = (state_40883[(7)]);
var inst_40853 = cljs.core.chunk_first.call(null,inst_40849);
var inst_40854 = cljs.core.chunk_rest.call(null,inst_40849);
var inst_40855 = cljs.core.count.call(null,inst_40853);
var inst_40835 = inst_40854;
var inst_40836 = inst_40853;
var inst_40837 = inst_40855;
var inst_40838 = (0);
var state_40883__$1 = (function (){var statearr_40902 = state_40883;
(statearr_40902[(8)] = inst_40835);

(statearr_40902[(10)] = inst_40837);

(statearr_40902[(11)] = inst_40838);

(statearr_40902[(12)] = inst_40836);

return statearr_40902;
})();
var statearr_40903_40933 = state_40883__$1;
(statearr_40903_40933[(2)] = null);

(statearr_40903_40933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (3))){
var inst_40881 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40883__$1,inst_40881);
} else {
if((state_val_40884 === (12))){
var inst_40869 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_40904_40934 = state_40883__$1;
(statearr_40904_40934[(2)] = inst_40869);

(statearr_40904_40934[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (2))){
var state_40883__$1 = state_40883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40883__$1,(4),in$);
} else {
if((state_val_40884 === (23))){
var inst_40877 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_40905_40935 = state_40883__$1;
(statearr_40905_40935[(2)] = inst_40877);

(statearr_40905_40935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (19))){
var inst_40864 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_40906_40936 = state_40883__$1;
(statearr_40906_40936[(2)] = inst_40864);

(statearr_40906_40936[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (11))){
var inst_40835 = (state_40883[(8)]);
var inst_40849 = (state_40883[(7)]);
var inst_40849__$1 = cljs.core.seq.call(null,inst_40835);
var state_40883__$1 = (function (){var statearr_40907 = state_40883;
(statearr_40907[(7)] = inst_40849__$1);

return statearr_40907;
})();
if(inst_40849__$1){
var statearr_40908_40937 = state_40883__$1;
(statearr_40908_40937[(1)] = (14));

} else {
var statearr_40909_40938 = state_40883__$1;
(statearr_40909_40938[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (9))){
var inst_40871 = (state_40883[(2)]);
var inst_40872 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40883__$1 = (function (){var statearr_40910 = state_40883;
(statearr_40910[(15)] = inst_40871);

return statearr_40910;
})();
if(cljs.core.truth_(inst_40872)){
var statearr_40911_40939 = state_40883__$1;
(statearr_40911_40939[(1)] = (21));

} else {
var statearr_40912_40940 = state_40883__$1;
(statearr_40912_40940[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (5))){
var inst_40827 = cljs.core.async.close_BANG_.call(null,out);
var state_40883__$1 = state_40883;
var statearr_40913_40941 = state_40883__$1;
(statearr_40913_40941[(2)] = inst_40827);

(statearr_40913_40941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (14))){
var inst_40849 = (state_40883[(7)]);
var inst_40851 = cljs.core.chunked_seq_QMARK_.call(null,inst_40849);
var state_40883__$1 = state_40883;
if(inst_40851){
var statearr_40914_40942 = state_40883__$1;
(statearr_40914_40942[(1)] = (17));

} else {
var statearr_40915_40943 = state_40883__$1;
(statearr_40915_40943[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (16))){
var inst_40867 = (state_40883[(2)]);
var state_40883__$1 = state_40883;
var statearr_40916_40944 = state_40883__$1;
(statearr_40916_40944[(2)] = inst_40867);

(statearr_40916_40944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40884 === (10))){
var inst_40838 = (state_40883[(11)]);
var inst_40836 = (state_40883[(12)]);
var inst_40843 = cljs.core._nth.call(null,inst_40836,inst_40838);
var state_40883__$1 = state_40883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40883__$1,(13),out,inst_40843);
} else {
if((state_val_40884 === (18))){
var inst_40849 = (state_40883[(7)]);
var inst_40858 = cljs.core.first.call(null,inst_40849);
var state_40883__$1 = state_40883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40883__$1,(20),out,inst_40858);
} else {
if((state_val_40884 === (8))){
var inst_40837 = (state_40883[(10)]);
var inst_40838 = (state_40883[(11)]);
var inst_40840 = (inst_40838 < inst_40837);
var inst_40841 = inst_40840;
var state_40883__$1 = state_40883;
if(cljs.core.truth_(inst_40841)){
var statearr_40917_40945 = state_40883__$1;
(statearr_40917_40945[(1)] = (10));

} else {
var statearr_40918_40946 = state_40883__$1;
(statearr_40918_40946[(1)] = (11));

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
});})(c__30624__auto__))
;
return ((function (switch__30536__auto__,c__30624__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_40919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40919[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__);

(statearr_40919[(1)] = (1));

return statearr_40919;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____1 = (function (state_40883){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40920){if((e40920 instanceof Object)){
var ex__30540__auto__ = e40920;
var statearr_40921_40947 = state_40883;
(statearr_40921_40947[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40948 = state_40883;
state_40883 = G__40948;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__ = function(state_40883){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____1.call(this,state_40883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_40922 = f__30625__auto__.call(null);
(statearr_40922[(6)] = c__30624__auto__);

return statearr_40922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto__))
);

return c__30624__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40950 = arguments.length;
switch (G__40950) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40953 = arguments.length;
switch (G__40953) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40956 = arguments.length;
switch (G__40956) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30624__auto___41003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___41003,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___41003,out){
return (function (state_40980){
var state_val_40981 = (state_40980[(1)]);
if((state_val_40981 === (7))){
var inst_40975 = (state_40980[(2)]);
var state_40980__$1 = state_40980;
var statearr_40982_41004 = state_40980__$1;
(statearr_40982_41004[(2)] = inst_40975);

(statearr_40982_41004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40981 === (1))){
var inst_40957 = null;
var state_40980__$1 = (function (){var statearr_40983 = state_40980;
(statearr_40983[(7)] = inst_40957);

return statearr_40983;
})();
var statearr_40984_41005 = state_40980__$1;
(statearr_40984_41005[(2)] = null);

(statearr_40984_41005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40981 === (4))){
var inst_40960 = (state_40980[(8)]);
var inst_40960__$1 = (state_40980[(2)]);
var inst_40961 = (inst_40960__$1 == null);
var inst_40962 = cljs.core.not.call(null,inst_40961);
var state_40980__$1 = (function (){var statearr_40985 = state_40980;
(statearr_40985[(8)] = inst_40960__$1);

return statearr_40985;
})();
if(inst_40962){
var statearr_40986_41006 = state_40980__$1;
(statearr_40986_41006[(1)] = (5));

} else {
var statearr_40987_41007 = state_40980__$1;
(statearr_40987_41007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40981 === (6))){
var state_40980__$1 = state_40980;
var statearr_40988_41008 = state_40980__$1;
(statearr_40988_41008[(2)] = null);

(statearr_40988_41008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40981 === (3))){
var inst_40977 = (state_40980[(2)]);
var inst_40978 = cljs.core.async.close_BANG_.call(null,out);
var state_40980__$1 = (function (){var statearr_40989 = state_40980;
(statearr_40989[(9)] = inst_40977);

return statearr_40989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40980__$1,inst_40978);
} else {
if((state_val_40981 === (2))){
var state_40980__$1 = state_40980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40980__$1,(4),ch);
} else {
if((state_val_40981 === (11))){
var inst_40960 = (state_40980[(8)]);
var inst_40969 = (state_40980[(2)]);
var inst_40957 = inst_40960;
var state_40980__$1 = (function (){var statearr_40990 = state_40980;
(statearr_40990[(7)] = inst_40957);

(statearr_40990[(10)] = inst_40969);

return statearr_40990;
})();
var statearr_40991_41009 = state_40980__$1;
(statearr_40991_41009[(2)] = null);

(statearr_40991_41009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40981 === (9))){
var inst_40960 = (state_40980[(8)]);
var state_40980__$1 = state_40980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40980__$1,(11),out,inst_40960);
} else {
if((state_val_40981 === (5))){
var inst_40960 = (state_40980[(8)]);
var inst_40957 = (state_40980[(7)]);
var inst_40964 = cljs.core._EQ_.call(null,inst_40960,inst_40957);
var state_40980__$1 = state_40980;
if(inst_40964){
var statearr_40993_41010 = state_40980__$1;
(statearr_40993_41010[(1)] = (8));

} else {
var statearr_40994_41011 = state_40980__$1;
(statearr_40994_41011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40981 === (10))){
var inst_40972 = (state_40980[(2)]);
var state_40980__$1 = state_40980;
var statearr_40995_41012 = state_40980__$1;
(statearr_40995_41012[(2)] = inst_40972);

(statearr_40995_41012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40981 === (8))){
var inst_40957 = (state_40980[(7)]);
var tmp40992 = inst_40957;
var inst_40957__$1 = tmp40992;
var state_40980__$1 = (function (){var statearr_40996 = state_40980;
(statearr_40996[(7)] = inst_40957__$1);

return statearr_40996;
})();
var statearr_40997_41013 = state_40980__$1;
(statearr_40997_41013[(2)] = null);

(statearr_40997_41013[(1)] = (2));


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
});})(c__30624__auto___41003,out))
;
return ((function (switch__30536__auto__,c__30624__auto___41003,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40998 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40998[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40998[(1)] = (1));

return statearr_40998;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40980){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40999){if((e40999 instanceof Object)){
var ex__30540__auto__ = e40999;
var statearr_41000_41014 = state_40980;
(statearr_41000_41014[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41015 = state_40980;
state_40980 = G__41015;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40980);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___41003,out))
})();
var state__30626__auto__ = (function (){var statearr_41001 = f__30625__auto__.call(null);
(statearr_41001[(6)] = c__30624__auto___41003);

return statearr_41001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___41003,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41017 = arguments.length;
switch (G__41017) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30624__auto___41083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___41083,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___41083,out){
return (function (state_41055){
var state_val_41056 = (state_41055[(1)]);
if((state_val_41056 === (7))){
var inst_41051 = (state_41055[(2)]);
var state_41055__$1 = state_41055;
var statearr_41057_41084 = state_41055__$1;
(statearr_41057_41084[(2)] = inst_41051);

(statearr_41057_41084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (1))){
var inst_41018 = (new Array(n));
var inst_41019 = inst_41018;
var inst_41020 = (0);
var state_41055__$1 = (function (){var statearr_41058 = state_41055;
(statearr_41058[(7)] = inst_41019);

(statearr_41058[(8)] = inst_41020);

return statearr_41058;
})();
var statearr_41059_41085 = state_41055__$1;
(statearr_41059_41085[(2)] = null);

(statearr_41059_41085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (4))){
var inst_41023 = (state_41055[(9)]);
var inst_41023__$1 = (state_41055[(2)]);
var inst_41024 = (inst_41023__$1 == null);
var inst_41025 = cljs.core.not.call(null,inst_41024);
var state_41055__$1 = (function (){var statearr_41060 = state_41055;
(statearr_41060[(9)] = inst_41023__$1);

return statearr_41060;
})();
if(inst_41025){
var statearr_41061_41086 = state_41055__$1;
(statearr_41061_41086[(1)] = (5));

} else {
var statearr_41062_41087 = state_41055__$1;
(statearr_41062_41087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (15))){
var inst_41045 = (state_41055[(2)]);
var state_41055__$1 = state_41055;
var statearr_41063_41088 = state_41055__$1;
(statearr_41063_41088[(2)] = inst_41045);

(statearr_41063_41088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (13))){
var state_41055__$1 = state_41055;
var statearr_41064_41089 = state_41055__$1;
(statearr_41064_41089[(2)] = null);

(statearr_41064_41089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (6))){
var inst_41020 = (state_41055[(8)]);
var inst_41041 = (inst_41020 > (0));
var state_41055__$1 = state_41055;
if(cljs.core.truth_(inst_41041)){
var statearr_41065_41090 = state_41055__$1;
(statearr_41065_41090[(1)] = (12));

} else {
var statearr_41066_41091 = state_41055__$1;
(statearr_41066_41091[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (3))){
var inst_41053 = (state_41055[(2)]);
var state_41055__$1 = state_41055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41055__$1,inst_41053);
} else {
if((state_val_41056 === (12))){
var inst_41019 = (state_41055[(7)]);
var inst_41043 = cljs.core.vec.call(null,inst_41019);
var state_41055__$1 = state_41055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41055__$1,(15),out,inst_41043);
} else {
if((state_val_41056 === (2))){
var state_41055__$1 = state_41055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41055__$1,(4),ch);
} else {
if((state_val_41056 === (11))){
var inst_41035 = (state_41055[(2)]);
var inst_41036 = (new Array(n));
var inst_41019 = inst_41036;
var inst_41020 = (0);
var state_41055__$1 = (function (){var statearr_41067 = state_41055;
(statearr_41067[(10)] = inst_41035);

(statearr_41067[(7)] = inst_41019);

(statearr_41067[(8)] = inst_41020);

return statearr_41067;
})();
var statearr_41068_41092 = state_41055__$1;
(statearr_41068_41092[(2)] = null);

(statearr_41068_41092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (9))){
var inst_41019 = (state_41055[(7)]);
var inst_41033 = cljs.core.vec.call(null,inst_41019);
var state_41055__$1 = state_41055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41055__$1,(11),out,inst_41033);
} else {
if((state_val_41056 === (5))){
var inst_41019 = (state_41055[(7)]);
var inst_41028 = (state_41055[(11)]);
var inst_41023 = (state_41055[(9)]);
var inst_41020 = (state_41055[(8)]);
var inst_41027 = (inst_41019[inst_41020] = inst_41023);
var inst_41028__$1 = (inst_41020 + (1));
var inst_41029 = (inst_41028__$1 < n);
var state_41055__$1 = (function (){var statearr_41069 = state_41055;
(statearr_41069[(12)] = inst_41027);

(statearr_41069[(11)] = inst_41028__$1);

return statearr_41069;
})();
if(cljs.core.truth_(inst_41029)){
var statearr_41070_41093 = state_41055__$1;
(statearr_41070_41093[(1)] = (8));

} else {
var statearr_41071_41094 = state_41055__$1;
(statearr_41071_41094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (14))){
var inst_41048 = (state_41055[(2)]);
var inst_41049 = cljs.core.async.close_BANG_.call(null,out);
var state_41055__$1 = (function (){var statearr_41073 = state_41055;
(statearr_41073[(13)] = inst_41048);

return statearr_41073;
})();
var statearr_41074_41095 = state_41055__$1;
(statearr_41074_41095[(2)] = inst_41049);

(statearr_41074_41095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (10))){
var inst_41039 = (state_41055[(2)]);
var state_41055__$1 = state_41055;
var statearr_41075_41096 = state_41055__$1;
(statearr_41075_41096[(2)] = inst_41039);

(statearr_41075_41096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (8))){
var inst_41019 = (state_41055[(7)]);
var inst_41028 = (state_41055[(11)]);
var tmp41072 = inst_41019;
var inst_41019__$1 = tmp41072;
var inst_41020 = inst_41028;
var state_41055__$1 = (function (){var statearr_41076 = state_41055;
(statearr_41076[(7)] = inst_41019__$1);

(statearr_41076[(8)] = inst_41020);

return statearr_41076;
})();
var statearr_41077_41097 = state_41055__$1;
(statearr_41077_41097[(2)] = null);

(statearr_41077_41097[(1)] = (2));


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
});})(c__30624__auto___41083,out))
;
return ((function (switch__30536__auto__,c__30624__auto___41083,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_41078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41078[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_41078[(1)] = (1));

return statearr_41078;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_41055){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_41055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e41079){if((e41079 instanceof Object)){
var ex__30540__auto__ = e41079;
var statearr_41080_41098 = state_41055;
(statearr_41080_41098[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41099 = state_41055;
state_41055 = G__41099;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_41055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_41055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___41083,out))
})();
var state__30626__auto__ = (function (){var statearr_41081 = f__30625__auto__.call(null);
(statearr_41081[(6)] = c__30624__auto___41083);

return statearr_41081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___41083,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41101 = arguments.length;
switch (G__41101) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30624__auto___41171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___41171,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___41171,out){
return (function (state_41143){
var state_val_41144 = (state_41143[(1)]);
if((state_val_41144 === (7))){
var inst_41139 = (state_41143[(2)]);
var state_41143__$1 = state_41143;
var statearr_41145_41172 = state_41143__$1;
(statearr_41145_41172[(2)] = inst_41139);

(statearr_41145_41172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41144 === (1))){
var inst_41102 = [];
var inst_41103 = inst_41102;
var inst_41104 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41143__$1 = (function (){var statearr_41146 = state_41143;
(statearr_41146[(7)] = inst_41104);

(statearr_41146[(8)] = inst_41103);

return statearr_41146;
})();
var statearr_41147_41173 = state_41143__$1;
(statearr_41147_41173[(2)] = null);

(statearr_41147_41173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41144 === (4))){
var inst_41107 = (state_41143[(9)]);
var inst_41107__$1 = (state_41143[(2)]);
var inst_41108 = (inst_41107__$1 == null);
var inst_41109 = cljs.core.not.call(null,inst_41108);
var state_41143__$1 = (function (){var statearr_41148 = state_41143;
(statearr_41148[(9)] = inst_41107__$1);

return statearr_41148;
})();
if(inst_41109){
var statearr_41149_41174 = state_41143__$1;
(statearr_41149_41174[(1)] = (5));

} else {
var statearr_41150_41175 = state_41143__$1;
(statearr_41150_41175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41144 === (15))){
var inst_41133 = (state_41143[(2)]);
var state_41143__$1 = state_41143;
var statearr_41151_41176 = state_41143__$1;
(statearr_41151_41176[(2)] = inst_41133);

(statearr_41151_41176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41144 === (13))){
var state_41143__$1 = state_41143;
var statearr_41152_41177 = state_41143__$1;
(statearr_41152_41177[(2)] = null);

(statearr_41152_41177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41144 === (6))){
var inst_41103 = (state_41143[(8)]);
var inst_41128 = inst_41103.length;
var inst_41129 = (inst_41128 > (0));
var state_41143__$1 = state_41143;
if(cljs.core.truth_(inst_41129)){
var statearr_41153_41178 = state_41143__$1;
(statearr_41153_41178[(1)] = (12));

} else {
var statearr_41154_41179 = state_41143__$1;
(statearr_41154_41179[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41144 === (3))){
var inst_41141 = (state_41143[(2)]);
var state_41143__$1 = state_41143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41143__$1,inst_41141);
} else {
if((state_val_41144 === (12))){
var inst_41103 = (state_41143[(8)]);
var inst_41131 = cljs.core.vec.call(null,inst_41103);
var state_41143__$1 = state_41143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41143__$1,(15),out,inst_41131);
} else {
if((state_val_41144 === (2))){
var state_41143__$1 = state_41143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41143__$1,(4),ch);
} else {
if((state_val_41144 === (11))){
var inst_41111 = (state_41143[(10)]);
var inst_41107 = (state_41143[(9)]);
var inst_41121 = (state_41143[(2)]);
var inst_41122 = [];
var inst_41123 = inst_41122.push(inst_41107);
var inst_41103 = inst_41122;
var inst_41104 = inst_41111;
var state_41143__$1 = (function (){var statearr_41155 = state_41143;
(statearr_41155[(7)] = inst_41104);

(statearr_41155[(8)] = inst_41103);

(statearr_41155[(11)] = inst_41123);

(statearr_41155[(12)] = inst_41121);

return statearr_41155;
})();
var statearr_41156_41180 = state_41143__$1;
(statearr_41156_41180[(2)] = null);

(statearr_41156_41180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41144 === (9))){
var inst_41103 = (state_41143[(8)]);
var inst_41119 = cljs.core.vec.call(null,inst_41103);
var state_41143__$1 = state_41143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41143__$1,(11),out,inst_41119);
} else {
if((state_val_41144 === (5))){
var inst_41104 = (state_41143[(7)]);
var inst_41111 = (state_41143[(10)]);
var inst_41107 = (state_41143[(9)]);
var inst_41111__$1 = f.call(null,inst_41107);
var inst_41112 = cljs.core._EQ_.call(null,inst_41111__$1,inst_41104);
var inst_41113 = cljs.core.keyword_identical_QMARK_.call(null,inst_41104,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41114 = (inst_41112) || (inst_41113);
var state_41143__$1 = (function (){var statearr_41157 = state_41143;
(statearr_41157[(10)] = inst_41111__$1);

return statearr_41157;
})();
if(cljs.core.truth_(inst_41114)){
var statearr_41158_41181 = state_41143__$1;
(statearr_41158_41181[(1)] = (8));

} else {
var statearr_41159_41182 = state_41143__$1;
(statearr_41159_41182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41144 === (14))){
var inst_41136 = (state_41143[(2)]);
var inst_41137 = cljs.core.async.close_BANG_.call(null,out);
var state_41143__$1 = (function (){var statearr_41161 = state_41143;
(statearr_41161[(13)] = inst_41136);

return statearr_41161;
})();
var statearr_41162_41183 = state_41143__$1;
(statearr_41162_41183[(2)] = inst_41137);

(statearr_41162_41183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41144 === (10))){
var inst_41126 = (state_41143[(2)]);
var state_41143__$1 = state_41143;
var statearr_41163_41184 = state_41143__$1;
(statearr_41163_41184[(2)] = inst_41126);

(statearr_41163_41184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41144 === (8))){
var inst_41103 = (state_41143[(8)]);
var inst_41111 = (state_41143[(10)]);
var inst_41107 = (state_41143[(9)]);
var inst_41116 = inst_41103.push(inst_41107);
var tmp41160 = inst_41103;
var inst_41103__$1 = tmp41160;
var inst_41104 = inst_41111;
var state_41143__$1 = (function (){var statearr_41164 = state_41143;
(statearr_41164[(7)] = inst_41104);

(statearr_41164[(8)] = inst_41103__$1);

(statearr_41164[(14)] = inst_41116);

return statearr_41164;
})();
var statearr_41165_41185 = state_41143__$1;
(statearr_41165_41185[(2)] = null);

(statearr_41165_41185[(1)] = (2));


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
});})(c__30624__auto___41171,out))
;
return ((function (switch__30536__auto__,c__30624__auto___41171,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_41166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41166[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_41166[(1)] = (1));

return statearr_41166;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_41143){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_41143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e41167){if((e41167 instanceof Object)){
var ex__30540__auto__ = e41167;
var statearr_41168_41186 = state_41143;
(statearr_41168_41186[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41187 = state_41143;
state_41143 = G__41187;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_41143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_41143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___41171,out))
})();
var state__30626__auto__ = (function (){var statearr_41169 = f__30625__auto__.call(null);
(statearr_41169[(6)] = c__30624__auto___41171);

return statearr_41169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___41171,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1515953279057
