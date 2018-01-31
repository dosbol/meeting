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
var G__39398 = arguments.length;
switch (G__39398) {
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
if(typeof cljs.core.async.t_cljs$core$async39399 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39399 = (function (f,blockable,meta39400){
this.f = f;
this.blockable = blockable;
this.meta39400 = meta39400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39401,meta39400__$1){
var self__ = this;
var _39401__$1 = this;
return (new cljs.core.async.t_cljs$core$async39399(self__.f,self__.blockable,meta39400__$1));
});

cljs.core.async.t_cljs$core$async39399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39401){
var self__ = this;
var _39401__$1 = this;
return self__.meta39400;
});

cljs.core.async.t_cljs$core$async39399.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39399.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39400","meta39400",-2025699713,null)], null);
});

cljs.core.async.t_cljs$core$async39399.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39399";

cljs.core.async.t_cljs$core$async39399.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39399");
});

cljs.core.async.__GT_t_cljs$core$async39399 = (function cljs$core$async$__GT_t_cljs$core$async39399(f__$1,blockable__$1,meta39400){
return (new cljs.core.async.t_cljs$core$async39399(f__$1,blockable__$1,meta39400));
});

}

return (new cljs.core.async.t_cljs$core$async39399(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39405 = arguments.length;
switch (G__39405) {
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
var G__39408 = arguments.length;
switch (G__39408) {
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
var G__39411 = arguments.length;
switch (G__39411) {
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
var val_39413 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39413);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39413,ret){
return (function (){
return fn1.call(null,val_39413);
});})(val_39413,ret))
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
var G__39415 = arguments.length;
switch (G__39415) {
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
var n__28140__auto___39417 = n;
var x_39418 = (0);
while(true){
if((x_39418 < n__28140__auto___39417)){
(a[x_39418] = (0));

var G__39419 = (x_39418 + (1));
x_39418 = G__39419;
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

var G__39420 = (i + (1));
i = G__39420;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39421 = (function (flag,meta39422){
this.flag = flag;
this.meta39422 = meta39422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39423,meta39422__$1){
var self__ = this;
var _39423__$1 = this;
return (new cljs.core.async.t_cljs$core$async39421(self__.flag,meta39422__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39423){
var self__ = this;
var _39423__$1 = this;
return self__.meta39422;
});})(flag))
;

cljs.core.async.t_cljs$core$async39421.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39421.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39421.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39421.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39421.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39422","meta39422",345951866,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39421";

cljs.core.async.t_cljs$core$async39421.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39421");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39421 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39421(flag__$1,meta39422){
return (new cljs.core.async.t_cljs$core$async39421(flag__$1,meta39422));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39421(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39424 = (function (flag,cb,meta39425){
this.flag = flag;
this.cb = cb;
this.meta39425 = meta39425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39426,meta39425__$1){
var self__ = this;
var _39426__$1 = this;
return (new cljs.core.async.t_cljs$core$async39424(self__.flag,self__.cb,meta39425__$1));
});

cljs.core.async.t_cljs$core$async39424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39426){
var self__ = this;
var _39426__$1 = this;
return self__.meta39425;
});

cljs.core.async.t_cljs$core$async39424.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39424.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39424.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39424.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39425","meta39425",-640294903,null)], null);
});

cljs.core.async.t_cljs$core$async39424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39424";

cljs.core.async.t_cljs$core$async39424.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39424");
});

cljs.core.async.__GT_t_cljs$core$async39424 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39424(flag__$1,cb__$1,meta39425){
return (new cljs.core.async.t_cljs$core$async39424(flag__$1,cb__$1,meta39425));
});

}

return (new cljs.core.async.t_cljs$core$async39424(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39427_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39427_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39428_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39428_SHARP_,port], null));
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
var G__39429 = (i + (1));
i = G__39429;
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
var len__28364__auto___39435 = arguments.length;
var i__28365__auto___39436 = (0);
while(true){
if((i__28365__auto___39436 < len__28364__auto___39435)){
args__28371__auto__.push((arguments[i__28365__auto___39436]));

var G__39437 = (i__28365__auto___39436 + (1));
i__28365__auto___39436 = G__39437;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39432){
var map__39433 = p__39432;
var map__39433__$1 = ((((!((map__39433 == null)))?((((map__39433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39433):map__39433);
var opts = map__39433__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39430){
var G__39431 = cljs.core.first.call(null,seq39430);
var seq39430__$1 = cljs.core.next.call(null,seq39430);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39431,seq39430__$1);
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
var G__39439 = arguments.length;
switch (G__39439) {
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
var c__30624__auto___39485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___39485){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___39485){
return (function (state_39463){
var state_val_39464 = (state_39463[(1)]);
if((state_val_39464 === (7))){
var inst_39459 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
var statearr_39465_39486 = state_39463__$1;
(statearr_39465_39486[(2)] = inst_39459);

(statearr_39465_39486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (1))){
var state_39463__$1 = state_39463;
var statearr_39466_39487 = state_39463__$1;
(statearr_39466_39487[(2)] = null);

(statearr_39466_39487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (4))){
var inst_39442 = (state_39463[(7)]);
var inst_39442__$1 = (state_39463[(2)]);
var inst_39443 = (inst_39442__$1 == null);
var state_39463__$1 = (function (){var statearr_39467 = state_39463;
(statearr_39467[(7)] = inst_39442__$1);

return statearr_39467;
})();
if(cljs.core.truth_(inst_39443)){
var statearr_39468_39488 = state_39463__$1;
(statearr_39468_39488[(1)] = (5));

} else {
var statearr_39469_39489 = state_39463__$1;
(statearr_39469_39489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (13))){
var state_39463__$1 = state_39463;
var statearr_39470_39490 = state_39463__$1;
(statearr_39470_39490[(2)] = null);

(statearr_39470_39490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (6))){
var inst_39442 = (state_39463[(7)]);
var state_39463__$1 = state_39463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39463__$1,(11),to,inst_39442);
} else {
if((state_val_39464 === (3))){
var inst_39461 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39463__$1,inst_39461);
} else {
if((state_val_39464 === (12))){
var state_39463__$1 = state_39463;
var statearr_39471_39491 = state_39463__$1;
(statearr_39471_39491[(2)] = null);

(statearr_39471_39491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (2))){
var state_39463__$1 = state_39463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39463__$1,(4),from);
} else {
if((state_val_39464 === (11))){
var inst_39452 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
if(cljs.core.truth_(inst_39452)){
var statearr_39472_39492 = state_39463__$1;
(statearr_39472_39492[(1)] = (12));

} else {
var statearr_39473_39493 = state_39463__$1;
(statearr_39473_39493[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (9))){
var state_39463__$1 = state_39463;
var statearr_39474_39494 = state_39463__$1;
(statearr_39474_39494[(2)] = null);

(statearr_39474_39494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (5))){
var state_39463__$1 = state_39463;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39475_39495 = state_39463__$1;
(statearr_39475_39495[(1)] = (8));

} else {
var statearr_39476_39496 = state_39463__$1;
(statearr_39476_39496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (14))){
var inst_39457 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
var statearr_39477_39497 = state_39463__$1;
(statearr_39477_39497[(2)] = inst_39457);

(statearr_39477_39497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (10))){
var inst_39449 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
var statearr_39478_39498 = state_39463__$1;
(statearr_39478_39498[(2)] = inst_39449);

(statearr_39478_39498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (8))){
var inst_39446 = cljs.core.async.close_BANG_.call(null,to);
var state_39463__$1 = state_39463;
var statearr_39479_39499 = state_39463__$1;
(statearr_39479_39499[(2)] = inst_39446);

(statearr_39479_39499[(1)] = (10));


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
});})(c__30624__auto___39485))
;
return ((function (switch__30536__auto__,c__30624__auto___39485){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_39480 = [null,null,null,null,null,null,null,null];
(statearr_39480[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_39480[(1)] = (1));

return statearr_39480;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_39463){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39481){if((e39481 instanceof Object)){
var ex__30540__auto__ = e39481;
var statearr_39482_39500 = state_39463;
(statearr_39482_39500[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39501 = state_39463;
state_39463 = G__39501;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_39463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_39463);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___39485))
})();
var state__30626__auto__ = (function (){var statearr_39483 = f__30625__auto__.call(null);
(statearr_39483[(6)] = c__30624__auto___39485);

return statearr_39483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___39485))
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
return (function (p__39502){
var vec__39503 = p__39502;
var v = cljs.core.nth.call(null,vec__39503,(0),null);
var p = cljs.core.nth.call(null,vec__39503,(1),null);
var job = vec__39503;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30624__auto___39674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___39674,res,vec__39503,v,p,job,jobs,results){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___39674,res,vec__39503,v,p,job,jobs,results){
return (function (state_39510){
var state_val_39511 = (state_39510[(1)]);
if((state_val_39511 === (1))){
var state_39510__$1 = state_39510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39510__$1,(2),res,v);
} else {
if((state_val_39511 === (2))){
var inst_39507 = (state_39510[(2)]);
var inst_39508 = cljs.core.async.close_BANG_.call(null,res);
var state_39510__$1 = (function (){var statearr_39512 = state_39510;
(statearr_39512[(7)] = inst_39507);

return statearr_39512;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39510__$1,inst_39508);
} else {
return null;
}
}
});})(c__30624__auto___39674,res,vec__39503,v,p,job,jobs,results))
;
return ((function (switch__30536__auto__,c__30624__auto___39674,res,vec__39503,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39513 = [null,null,null,null,null,null,null,null];
(statearr_39513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39513[(1)] = (1));

return statearr_39513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39510){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39514){if((e39514 instanceof Object)){
var ex__30540__auto__ = e39514;
var statearr_39515_39675 = state_39510;
(statearr_39515_39675[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39676 = state_39510;
state_39510 = G__39676;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39510){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39510);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___39674,res,vec__39503,v,p,job,jobs,results))
})();
var state__30626__auto__ = (function (){var statearr_39516 = f__30625__auto__.call(null);
(statearr_39516[(6)] = c__30624__auto___39674);

return statearr_39516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___39674,res,vec__39503,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39517){
var vec__39518 = p__39517;
var v = cljs.core.nth.call(null,vec__39518,(0),null);
var p = cljs.core.nth.call(null,vec__39518,(1),null);
var job = vec__39518;
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
var n__28140__auto___39677 = n;
var __39678 = (0);
while(true){
if((__39678 < n__28140__auto___39677)){
var G__39521_39679 = type;
var G__39521_39680__$1 = (((G__39521_39679 instanceof cljs.core.Keyword))?G__39521_39679.fqn:null);
switch (G__39521_39680__$1) {
case "compute":
var c__30624__auto___39682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39678,c__30624__auto___39682,G__39521_39679,G__39521_39680__$1,n__28140__auto___39677,jobs,results,process,async){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (__39678,c__30624__auto___39682,G__39521_39679,G__39521_39680__$1,n__28140__auto___39677,jobs,results,process,async){
return (function (state_39534){
var state_val_39535 = (state_39534[(1)]);
if((state_val_39535 === (1))){
var state_39534__$1 = state_39534;
var statearr_39536_39683 = state_39534__$1;
(statearr_39536_39683[(2)] = null);

(statearr_39536_39683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39535 === (2))){
var state_39534__$1 = state_39534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39534__$1,(4),jobs);
} else {
if((state_val_39535 === (3))){
var inst_39532 = (state_39534[(2)]);
var state_39534__$1 = state_39534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39534__$1,inst_39532);
} else {
if((state_val_39535 === (4))){
var inst_39524 = (state_39534[(2)]);
var inst_39525 = process.call(null,inst_39524);
var state_39534__$1 = state_39534;
if(cljs.core.truth_(inst_39525)){
var statearr_39537_39684 = state_39534__$1;
(statearr_39537_39684[(1)] = (5));

} else {
var statearr_39538_39685 = state_39534__$1;
(statearr_39538_39685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39535 === (5))){
var state_39534__$1 = state_39534;
var statearr_39539_39686 = state_39534__$1;
(statearr_39539_39686[(2)] = null);

(statearr_39539_39686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39535 === (6))){
var state_39534__$1 = state_39534;
var statearr_39540_39687 = state_39534__$1;
(statearr_39540_39687[(2)] = null);

(statearr_39540_39687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39535 === (7))){
var inst_39530 = (state_39534[(2)]);
var state_39534__$1 = state_39534;
var statearr_39541_39688 = state_39534__$1;
(statearr_39541_39688[(2)] = inst_39530);

(statearr_39541_39688[(1)] = (3));


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
});})(__39678,c__30624__auto___39682,G__39521_39679,G__39521_39680__$1,n__28140__auto___39677,jobs,results,process,async))
;
return ((function (__39678,switch__30536__auto__,c__30624__auto___39682,G__39521_39679,G__39521_39680__$1,n__28140__auto___39677,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39542 = [null,null,null,null,null,null,null];
(statearr_39542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39542[(1)] = (1));

return statearr_39542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39534){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39543){if((e39543 instanceof Object)){
var ex__30540__auto__ = e39543;
var statearr_39544_39689 = state_39534;
(statearr_39544_39689[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39690 = state_39534;
state_39534 = G__39690;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39534);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(__39678,switch__30536__auto__,c__30624__auto___39682,G__39521_39679,G__39521_39680__$1,n__28140__auto___39677,jobs,results,process,async))
})();
var state__30626__auto__ = (function (){var statearr_39545 = f__30625__auto__.call(null);
(statearr_39545[(6)] = c__30624__auto___39682);

return statearr_39545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(__39678,c__30624__auto___39682,G__39521_39679,G__39521_39680__$1,n__28140__auto___39677,jobs,results,process,async))
);


break;
case "async":
var c__30624__auto___39691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39678,c__30624__auto___39691,G__39521_39679,G__39521_39680__$1,n__28140__auto___39677,jobs,results,process,async){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (__39678,c__30624__auto___39691,G__39521_39679,G__39521_39680__$1,n__28140__auto___39677,jobs,results,process,async){
return (function (state_39558){
var state_val_39559 = (state_39558[(1)]);
if((state_val_39559 === (1))){
var state_39558__$1 = state_39558;
var statearr_39560_39692 = state_39558__$1;
(statearr_39560_39692[(2)] = null);

(statearr_39560_39692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39559 === (2))){
var state_39558__$1 = state_39558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39558__$1,(4),jobs);
} else {
if((state_val_39559 === (3))){
var inst_39556 = (state_39558[(2)]);
var state_39558__$1 = state_39558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39558__$1,inst_39556);
} else {
if((state_val_39559 === (4))){
var inst_39548 = (state_39558[(2)]);
var inst_39549 = async.call(null,inst_39548);
var state_39558__$1 = state_39558;
if(cljs.core.truth_(inst_39549)){
var statearr_39561_39693 = state_39558__$1;
(statearr_39561_39693[(1)] = (5));

} else {
var statearr_39562_39694 = state_39558__$1;
(statearr_39562_39694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39559 === (5))){
var state_39558__$1 = state_39558;
var statearr_39563_39695 = state_39558__$1;
(statearr_39563_39695[(2)] = null);

(statearr_39563_39695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39559 === (6))){
var state_39558__$1 = state_39558;
var statearr_39564_39696 = state_39558__$1;
(statearr_39564_39696[(2)] = null);

(statearr_39564_39696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39559 === (7))){
var inst_39554 = (state_39558[(2)]);
var state_39558__$1 = state_39558;
var statearr_39565_39697 = state_39558__$1;
(statearr_39565_39697[(2)] = inst_39554);

(statearr_39565_39697[(1)] = (3));


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
});})(__39678,c__30624__auto___39691,G__39521_39679,G__39521_39680__$1,n__28140__auto___39677,jobs,results,process,async))
;
return ((function (__39678,switch__30536__auto__,c__30624__auto___39691,G__39521_39679,G__39521_39680__$1,n__28140__auto___39677,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39566 = [null,null,null,null,null,null,null];
(statearr_39566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39566[(1)] = (1));

return statearr_39566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39558){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39567){if((e39567 instanceof Object)){
var ex__30540__auto__ = e39567;
var statearr_39568_39698 = state_39558;
(statearr_39568_39698[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39699 = state_39558;
state_39558 = G__39699;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39558);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(__39678,switch__30536__auto__,c__30624__auto___39691,G__39521_39679,G__39521_39680__$1,n__28140__auto___39677,jobs,results,process,async))
})();
var state__30626__auto__ = (function (){var statearr_39569 = f__30625__auto__.call(null);
(statearr_39569[(6)] = c__30624__auto___39691);

return statearr_39569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(__39678,c__30624__auto___39691,G__39521_39679,G__39521_39680__$1,n__28140__auto___39677,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39521_39680__$1)].join('')));

}

var G__39700 = (__39678 + (1));
__39678 = G__39700;
continue;
} else {
}
break;
}

var c__30624__auto___39701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___39701,jobs,results,process,async){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___39701,jobs,results,process,async){
return (function (state_39591){
var state_val_39592 = (state_39591[(1)]);
if((state_val_39592 === (1))){
var state_39591__$1 = state_39591;
var statearr_39593_39702 = state_39591__$1;
(statearr_39593_39702[(2)] = null);

(statearr_39593_39702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39592 === (2))){
var state_39591__$1 = state_39591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39591__$1,(4),from);
} else {
if((state_val_39592 === (3))){
var inst_39589 = (state_39591[(2)]);
var state_39591__$1 = state_39591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39591__$1,inst_39589);
} else {
if((state_val_39592 === (4))){
var inst_39572 = (state_39591[(7)]);
var inst_39572__$1 = (state_39591[(2)]);
var inst_39573 = (inst_39572__$1 == null);
var state_39591__$1 = (function (){var statearr_39594 = state_39591;
(statearr_39594[(7)] = inst_39572__$1);

return statearr_39594;
})();
if(cljs.core.truth_(inst_39573)){
var statearr_39595_39703 = state_39591__$1;
(statearr_39595_39703[(1)] = (5));

} else {
var statearr_39596_39704 = state_39591__$1;
(statearr_39596_39704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39592 === (5))){
var inst_39575 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39591__$1 = state_39591;
var statearr_39597_39705 = state_39591__$1;
(statearr_39597_39705[(2)] = inst_39575);

(statearr_39597_39705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39592 === (6))){
var inst_39577 = (state_39591[(8)]);
var inst_39572 = (state_39591[(7)]);
var inst_39577__$1 = cljs.core.async.chan.call(null,(1));
var inst_39578 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39579 = [inst_39572,inst_39577__$1];
var inst_39580 = (new cljs.core.PersistentVector(null,2,(5),inst_39578,inst_39579,null));
var state_39591__$1 = (function (){var statearr_39598 = state_39591;
(statearr_39598[(8)] = inst_39577__$1);

return statearr_39598;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39591__$1,(8),jobs,inst_39580);
} else {
if((state_val_39592 === (7))){
var inst_39587 = (state_39591[(2)]);
var state_39591__$1 = state_39591;
var statearr_39599_39706 = state_39591__$1;
(statearr_39599_39706[(2)] = inst_39587);

(statearr_39599_39706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39592 === (8))){
var inst_39577 = (state_39591[(8)]);
var inst_39582 = (state_39591[(2)]);
var state_39591__$1 = (function (){var statearr_39600 = state_39591;
(statearr_39600[(9)] = inst_39582);

return statearr_39600;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39591__$1,(9),results,inst_39577);
} else {
if((state_val_39592 === (9))){
var inst_39584 = (state_39591[(2)]);
var state_39591__$1 = (function (){var statearr_39601 = state_39591;
(statearr_39601[(10)] = inst_39584);

return statearr_39601;
})();
var statearr_39602_39707 = state_39591__$1;
(statearr_39602_39707[(2)] = null);

(statearr_39602_39707[(1)] = (2));


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
});})(c__30624__auto___39701,jobs,results,process,async))
;
return ((function (switch__30536__auto__,c__30624__auto___39701,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39603 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39603[(1)] = (1));

return statearr_39603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39591){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39604){if((e39604 instanceof Object)){
var ex__30540__auto__ = e39604;
var statearr_39605_39708 = state_39591;
(statearr_39605_39708[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39709 = state_39591;
state_39591 = G__39709;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39591);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___39701,jobs,results,process,async))
})();
var state__30626__auto__ = (function (){var statearr_39606 = f__30625__auto__.call(null);
(statearr_39606[(6)] = c__30624__auto___39701);

return statearr_39606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___39701,jobs,results,process,async))
);


var c__30624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto__,jobs,results,process,async){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto__,jobs,results,process,async){
return (function (state_39644){
var state_val_39645 = (state_39644[(1)]);
if((state_val_39645 === (7))){
var inst_39640 = (state_39644[(2)]);
var state_39644__$1 = state_39644;
var statearr_39646_39710 = state_39644__$1;
(statearr_39646_39710[(2)] = inst_39640);

(statearr_39646_39710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (20))){
var state_39644__$1 = state_39644;
var statearr_39647_39711 = state_39644__$1;
(statearr_39647_39711[(2)] = null);

(statearr_39647_39711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (1))){
var state_39644__$1 = state_39644;
var statearr_39648_39712 = state_39644__$1;
(statearr_39648_39712[(2)] = null);

(statearr_39648_39712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (4))){
var inst_39609 = (state_39644[(7)]);
var inst_39609__$1 = (state_39644[(2)]);
var inst_39610 = (inst_39609__$1 == null);
var state_39644__$1 = (function (){var statearr_39649 = state_39644;
(statearr_39649[(7)] = inst_39609__$1);

return statearr_39649;
})();
if(cljs.core.truth_(inst_39610)){
var statearr_39650_39713 = state_39644__$1;
(statearr_39650_39713[(1)] = (5));

} else {
var statearr_39651_39714 = state_39644__$1;
(statearr_39651_39714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (15))){
var inst_39622 = (state_39644[(8)]);
var state_39644__$1 = state_39644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39644__$1,(18),to,inst_39622);
} else {
if((state_val_39645 === (21))){
var inst_39635 = (state_39644[(2)]);
var state_39644__$1 = state_39644;
var statearr_39652_39715 = state_39644__$1;
(statearr_39652_39715[(2)] = inst_39635);

(statearr_39652_39715[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (13))){
var inst_39637 = (state_39644[(2)]);
var state_39644__$1 = (function (){var statearr_39653 = state_39644;
(statearr_39653[(9)] = inst_39637);

return statearr_39653;
})();
var statearr_39654_39716 = state_39644__$1;
(statearr_39654_39716[(2)] = null);

(statearr_39654_39716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (6))){
var inst_39609 = (state_39644[(7)]);
var state_39644__$1 = state_39644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39644__$1,(11),inst_39609);
} else {
if((state_val_39645 === (17))){
var inst_39630 = (state_39644[(2)]);
var state_39644__$1 = state_39644;
if(cljs.core.truth_(inst_39630)){
var statearr_39655_39717 = state_39644__$1;
(statearr_39655_39717[(1)] = (19));

} else {
var statearr_39656_39718 = state_39644__$1;
(statearr_39656_39718[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (3))){
var inst_39642 = (state_39644[(2)]);
var state_39644__$1 = state_39644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39644__$1,inst_39642);
} else {
if((state_val_39645 === (12))){
var inst_39619 = (state_39644[(10)]);
var state_39644__$1 = state_39644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39644__$1,(14),inst_39619);
} else {
if((state_val_39645 === (2))){
var state_39644__$1 = state_39644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39644__$1,(4),results);
} else {
if((state_val_39645 === (19))){
var state_39644__$1 = state_39644;
var statearr_39657_39719 = state_39644__$1;
(statearr_39657_39719[(2)] = null);

(statearr_39657_39719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (11))){
var inst_39619 = (state_39644[(2)]);
var state_39644__$1 = (function (){var statearr_39658 = state_39644;
(statearr_39658[(10)] = inst_39619);

return statearr_39658;
})();
var statearr_39659_39720 = state_39644__$1;
(statearr_39659_39720[(2)] = null);

(statearr_39659_39720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (9))){
var state_39644__$1 = state_39644;
var statearr_39660_39721 = state_39644__$1;
(statearr_39660_39721[(2)] = null);

(statearr_39660_39721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (5))){
var state_39644__$1 = state_39644;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39661_39722 = state_39644__$1;
(statearr_39661_39722[(1)] = (8));

} else {
var statearr_39662_39723 = state_39644__$1;
(statearr_39662_39723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (14))){
var inst_39624 = (state_39644[(11)]);
var inst_39622 = (state_39644[(8)]);
var inst_39622__$1 = (state_39644[(2)]);
var inst_39623 = (inst_39622__$1 == null);
var inst_39624__$1 = cljs.core.not.call(null,inst_39623);
var state_39644__$1 = (function (){var statearr_39663 = state_39644;
(statearr_39663[(11)] = inst_39624__$1);

(statearr_39663[(8)] = inst_39622__$1);

return statearr_39663;
})();
if(inst_39624__$1){
var statearr_39664_39724 = state_39644__$1;
(statearr_39664_39724[(1)] = (15));

} else {
var statearr_39665_39725 = state_39644__$1;
(statearr_39665_39725[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (16))){
var inst_39624 = (state_39644[(11)]);
var state_39644__$1 = state_39644;
var statearr_39666_39726 = state_39644__$1;
(statearr_39666_39726[(2)] = inst_39624);

(statearr_39666_39726[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (10))){
var inst_39616 = (state_39644[(2)]);
var state_39644__$1 = state_39644;
var statearr_39667_39727 = state_39644__$1;
(statearr_39667_39727[(2)] = inst_39616);

(statearr_39667_39727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (18))){
var inst_39627 = (state_39644[(2)]);
var state_39644__$1 = state_39644;
var statearr_39668_39728 = state_39644__$1;
(statearr_39668_39728[(2)] = inst_39627);

(statearr_39668_39728[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39645 === (8))){
var inst_39613 = cljs.core.async.close_BANG_.call(null,to);
var state_39644__$1 = state_39644;
var statearr_39669_39729 = state_39644__$1;
(statearr_39669_39729[(2)] = inst_39613);

(statearr_39669_39729[(1)] = (10));


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
var statearr_39670 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39670[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39670[(1)] = (1));

return statearr_39670;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39644){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39671){if((e39671 instanceof Object)){
var ex__30540__auto__ = e39671;
var statearr_39672_39730 = state_39644;
(statearr_39672_39730[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39731 = state_39644;
state_39644 = G__39731;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39644){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39644);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__,jobs,results,process,async))
})();
var state__30626__auto__ = (function (){var statearr_39673 = f__30625__auto__.call(null);
(statearr_39673[(6)] = c__30624__auto__);

return statearr_39673;
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
var G__39733 = arguments.length;
switch (G__39733) {
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
var G__39736 = arguments.length;
switch (G__39736) {
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
var G__39739 = arguments.length;
switch (G__39739) {
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
var c__30624__auto___39788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___39788,tc,fc){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___39788,tc,fc){
return (function (state_39765){
var state_val_39766 = (state_39765[(1)]);
if((state_val_39766 === (7))){
var inst_39761 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
var statearr_39767_39789 = state_39765__$1;
(statearr_39767_39789[(2)] = inst_39761);

(statearr_39767_39789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (1))){
var state_39765__$1 = state_39765;
var statearr_39768_39790 = state_39765__$1;
(statearr_39768_39790[(2)] = null);

(statearr_39768_39790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (4))){
var inst_39742 = (state_39765[(7)]);
var inst_39742__$1 = (state_39765[(2)]);
var inst_39743 = (inst_39742__$1 == null);
var state_39765__$1 = (function (){var statearr_39769 = state_39765;
(statearr_39769[(7)] = inst_39742__$1);

return statearr_39769;
})();
if(cljs.core.truth_(inst_39743)){
var statearr_39770_39791 = state_39765__$1;
(statearr_39770_39791[(1)] = (5));

} else {
var statearr_39771_39792 = state_39765__$1;
(statearr_39771_39792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (13))){
var state_39765__$1 = state_39765;
var statearr_39772_39793 = state_39765__$1;
(statearr_39772_39793[(2)] = null);

(statearr_39772_39793[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (6))){
var inst_39742 = (state_39765[(7)]);
var inst_39748 = p.call(null,inst_39742);
var state_39765__$1 = state_39765;
if(cljs.core.truth_(inst_39748)){
var statearr_39773_39794 = state_39765__$1;
(statearr_39773_39794[(1)] = (9));

} else {
var statearr_39774_39795 = state_39765__$1;
(statearr_39774_39795[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (3))){
var inst_39763 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39765__$1,inst_39763);
} else {
if((state_val_39766 === (12))){
var state_39765__$1 = state_39765;
var statearr_39775_39796 = state_39765__$1;
(statearr_39775_39796[(2)] = null);

(statearr_39775_39796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (2))){
var state_39765__$1 = state_39765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39765__$1,(4),ch);
} else {
if((state_val_39766 === (11))){
var inst_39742 = (state_39765[(7)]);
var inst_39752 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39765__$1,(8),inst_39752,inst_39742);
} else {
if((state_val_39766 === (9))){
var state_39765__$1 = state_39765;
var statearr_39776_39797 = state_39765__$1;
(statearr_39776_39797[(2)] = tc);

(statearr_39776_39797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (5))){
var inst_39745 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39746 = cljs.core.async.close_BANG_.call(null,fc);
var state_39765__$1 = (function (){var statearr_39777 = state_39765;
(statearr_39777[(8)] = inst_39745);

return statearr_39777;
})();
var statearr_39778_39798 = state_39765__$1;
(statearr_39778_39798[(2)] = inst_39746);

(statearr_39778_39798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (14))){
var inst_39759 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
var statearr_39779_39799 = state_39765__$1;
(statearr_39779_39799[(2)] = inst_39759);

(statearr_39779_39799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (10))){
var state_39765__$1 = state_39765;
var statearr_39780_39800 = state_39765__$1;
(statearr_39780_39800[(2)] = fc);

(statearr_39780_39800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39766 === (8))){
var inst_39754 = (state_39765[(2)]);
var state_39765__$1 = state_39765;
if(cljs.core.truth_(inst_39754)){
var statearr_39781_39801 = state_39765__$1;
(statearr_39781_39801[(1)] = (12));

} else {
var statearr_39782_39802 = state_39765__$1;
(statearr_39782_39802[(1)] = (13));

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
});})(c__30624__auto___39788,tc,fc))
;
return ((function (switch__30536__auto__,c__30624__auto___39788,tc,fc){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_39783 = [null,null,null,null,null,null,null,null,null];
(statearr_39783[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_39783[(1)] = (1));

return statearr_39783;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_39765){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39784){if((e39784 instanceof Object)){
var ex__30540__auto__ = e39784;
var statearr_39785_39803 = state_39765;
(statearr_39785_39803[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39804 = state_39765;
state_39765 = G__39804;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_39765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_39765);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___39788,tc,fc))
})();
var state__30626__auto__ = (function (){var statearr_39786 = f__30625__auto__.call(null);
(statearr_39786[(6)] = c__30624__auto___39788);

return statearr_39786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___39788,tc,fc))
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
return (function (state_39825){
var state_val_39826 = (state_39825[(1)]);
if((state_val_39826 === (7))){
var inst_39821 = (state_39825[(2)]);
var state_39825__$1 = state_39825;
var statearr_39827_39845 = state_39825__$1;
(statearr_39827_39845[(2)] = inst_39821);

(statearr_39827_39845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (1))){
var inst_39805 = init;
var state_39825__$1 = (function (){var statearr_39828 = state_39825;
(statearr_39828[(7)] = inst_39805);

return statearr_39828;
})();
var statearr_39829_39846 = state_39825__$1;
(statearr_39829_39846[(2)] = null);

(statearr_39829_39846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (4))){
var inst_39808 = (state_39825[(8)]);
var inst_39808__$1 = (state_39825[(2)]);
var inst_39809 = (inst_39808__$1 == null);
var state_39825__$1 = (function (){var statearr_39830 = state_39825;
(statearr_39830[(8)] = inst_39808__$1);

return statearr_39830;
})();
if(cljs.core.truth_(inst_39809)){
var statearr_39831_39847 = state_39825__$1;
(statearr_39831_39847[(1)] = (5));

} else {
var statearr_39832_39848 = state_39825__$1;
(statearr_39832_39848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (6))){
var inst_39808 = (state_39825[(8)]);
var inst_39812 = (state_39825[(9)]);
var inst_39805 = (state_39825[(7)]);
var inst_39812__$1 = f.call(null,inst_39805,inst_39808);
var inst_39813 = cljs.core.reduced_QMARK_.call(null,inst_39812__$1);
var state_39825__$1 = (function (){var statearr_39833 = state_39825;
(statearr_39833[(9)] = inst_39812__$1);

return statearr_39833;
})();
if(inst_39813){
var statearr_39834_39849 = state_39825__$1;
(statearr_39834_39849[(1)] = (8));

} else {
var statearr_39835_39850 = state_39825__$1;
(statearr_39835_39850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (3))){
var inst_39823 = (state_39825[(2)]);
var state_39825__$1 = state_39825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39825__$1,inst_39823);
} else {
if((state_val_39826 === (2))){
var state_39825__$1 = state_39825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39825__$1,(4),ch);
} else {
if((state_val_39826 === (9))){
var inst_39812 = (state_39825[(9)]);
var inst_39805 = inst_39812;
var state_39825__$1 = (function (){var statearr_39836 = state_39825;
(statearr_39836[(7)] = inst_39805);

return statearr_39836;
})();
var statearr_39837_39851 = state_39825__$1;
(statearr_39837_39851[(2)] = null);

(statearr_39837_39851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (5))){
var inst_39805 = (state_39825[(7)]);
var state_39825__$1 = state_39825;
var statearr_39838_39852 = state_39825__$1;
(statearr_39838_39852[(2)] = inst_39805);

(statearr_39838_39852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (10))){
var inst_39819 = (state_39825[(2)]);
var state_39825__$1 = state_39825;
var statearr_39839_39853 = state_39825__$1;
(statearr_39839_39853[(2)] = inst_39819);

(statearr_39839_39853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39826 === (8))){
var inst_39812 = (state_39825[(9)]);
var inst_39815 = cljs.core.deref.call(null,inst_39812);
var state_39825__$1 = state_39825;
var statearr_39840_39854 = state_39825__$1;
(statearr_39840_39854[(2)] = inst_39815);

(statearr_39840_39854[(1)] = (10));


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
var statearr_39841 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39841[(0)] = cljs$core$async$reduce_$_state_machine__30537__auto__);

(statearr_39841[(1)] = (1));

return statearr_39841;
});
var cljs$core$async$reduce_$_state_machine__30537__auto____1 = (function (state_39825){
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
}catch (e39842){if((e39842 instanceof Object)){
var ex__30540__auto__ = e39842;
var statearr_39843_39855 = state_39825;
(statearr_39843_39855[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39856 = state_39825;
state_39825 = G__39856;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30537__auto__ = function(state_39825){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30537__auto____1.call(this,state_39825);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30537__auto____0;
cljs$core$async$reduce_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30537__auto____1;
return cljs$core$async$reduce_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_39844 = f__30625__auto__.call(null);
(statearr_39844[(6)] = c__30624__auto__);

return statearr_39844;
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
var G__39858 = arguments.length;
switch (G__39858) {
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
return (function (state_39883){
var state_val_39884 = (state_39883[(1)]);
if((state_val_39884 === (7))){
var inst_39865 = (state_39883[(2)]);
var state_39883__$1 = state_39883;
var statearr_39885_39906 = state_39883__$1;
(statearr_39885_39906[(2)] = inst_39865);

(statearr_39885_39906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39884 === (1))){
var inst_39859 = cljs.core.seq.call(null,coll);
var inst_39860 = inst_39859;
var state_39883__$1 = (function (){var statearr_39886 = state_39883;
(statearr_39886[(7)] = inst_39860);

return statearr_39886;
})();
var statearr_39887_39907 = state_39883__$1;
(statearr_39887_39907[(2)] = null);

(statearr_39887_39907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39884 === (4))){
var inst_39860 = (state_39883[(7)]);
var inst_39863 = cljs.core.first.call(null,inst_39860);
var state_39883__$1 = state_39883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39883__$1,(7),ch,inst_39863);
} else {
if((state_val_39884 === (13))){
var inst_39877 = (state_39883[(2)]);
var state_39883__$1 = state_39883;
var statearr_39888_39908 = state_39883__$1;
(statearr_39888_39908[(2)] = inst_39877);

(statearr_39888_39908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39884 === (6))){
var inst_39868 = (state_39883[(2)]);
var state_39883__$1 = state_39883;
if(cljs.core.truth_(inst_39868)){
var statearr_39889_39909 = state_39883__$1;
(statearr_39889_39909[(1)] = (8));

} else {
var statearr_39890_39910 = state_39883__$1;
(statearr_39890_39910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39884 === (3))){
var inst_39881 = (state_39883[(2)]);
var state_39883__$1 = state_39883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39883__$1,inst_39881);
} else {
if((state_val_39884 === (12))){
var state_39883__$1 = state_39883;
var statearr_39891_39911 = state_39883__$1;
(statearr_39891_39911[(2)] = null);

(statearr_39891_39911[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39884 === (2))){
var inst_39860 = (state_39883[(7)]);
var state_39883__$1 = state_39883;
if(cljs.core.truth_(inst_39860)){
var statearr_39892_39912 = state_39883__$1;
(statearr_39892_39912[(1)] = (4));

} else {
var statearr_39893_39913 = state_39883__$1;
(statearr_39893_39913[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39884 === (11))){
var inst_39874 = cljs.core.async.close_BANG_.call(null,ch);
var state_39883__$1 = state_39883;
var statearr_39894_39914 = state_39883__$1;
(statearr_39894_39914[(2)] = inst_39874);

(statearr_39894_39914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39884 === (9))){
var state_39883__$1 = state_39883;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39895_39915 = state_39883__$1;
(statearr_39895_39915[(1)] = (11));

} else {
var statearr_39896_39916 = state_39883__$1;
(statearr_39896_39916[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39884 === (5))){
var inst_39860 = (state_39883[(7)]);
var state_39883__$1 = state_39883;
var statearr_39897_39917 = state_39883__$1;
(statearr_39897_39917[(2)] = inst_39860);

(statearr_39897_39917[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39884 === (10))){
var inst_39879 = (state_39883[(2)]);
var state_39883__$1 = state_39883;
var statearr_39898_39918 = state_39883__$1;
(statearr_39898_39918[(2)] = inst_39879);

(statearr_39898_39918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39884 === (8))){
var inst_39860 = (state_39883[(7)]);
var inst_39870 = cljs.core.next.call(null,inst_39860);
var inst_39860__$1 = inst_39870;
var state_39883__$1 = (function (){var statearr_39899 = state_39883;
(statearr_39899[(7)] = inst_39860__$1);

return statearr_39899;
})();
var statearr_39900_39919 = state_39883__$1;
(statearr_39900_39919[(2)] = null);

(statearr_39900_39919[(1)] = (2));


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
var statearr_39901 = [null,null,null,null,null,null,null,null];
(statearr_39901[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_39901[(1)] = (1));

return statearr_39901;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_39883){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39902){if((e39902 instanceof Object)){
var ex__30540__auto__ = e39902;
var statearr_39903_39920 = state_39883;
(statearr_39903_39920[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39921 = state_39883;
state_39883 = G__39921;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_39883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_39883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_39904 = f__30625__auto__.call(null);
(statearr_39904[(6)] = c__30624__auto__);

return statearr_39904;
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
if(typeof cljs.core.async.t_cljs$core$async39922 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39922 = (function (ch,cs,meta39923){
this.ch = ch;
this.cs = cs;
this.meta39923 = meta39923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39924,meta39923__$1){
var self__ = this;
var _39924__$1 = this;
return (new cljs.core.async.t_cljs$core$async39922(self__.ch,self__.cs,meta39923__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39924){
var self__ = this;
var _39924__$1 = this;
return self__.meta39923;
});})(cs))
;

cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39922.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39922.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39923","meta39923",289162885,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39922.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39922";

cljs.core.async.t_cljs$core$async39922.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39922");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39922 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39922(ch__$1,cs__$1,meta39923){
return (new cljs.core.async.t_cljs$core$async39922(ch__$1,cs__$1,meta39923));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39922(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30624__auto___40144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40144,cs,m,dchan,dctr,done){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40144,cs,m,dchan,dctr,done){
return (function (state_40059){
var state_val_40060 = (state_40059[(1)]);
if((state_val_40060 === (7))){
var inst_40055 = (state_40059[(2)]);
var state_40059__$1 = state_40059;
var statearr_40061_40145 = state_40059__$1;
(statearr_40061_40145[(2)] = inst_40055);

(statearr_40061_40145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (20))){
var inst_39958 = (state_40059[(7)]);
var inst_39970 = cljs.core.first.call(null,inst_39958);
var inst_39971 = cljs.core.nth.call(null,inst_39970,(0),null);
var inst_39972 = cljs.core.nth.call(null,inst_39970,(1),null);
var state_40059__$1 = (function (){var statearr_40062 = state_40059;
(statearr_40062[(8)] = inst_39971);

return statearr_40062;
})();
if(cljs.core.truth_(inst_39972)){
var statearr_40063_40146 = state_40059__$1;
(statearr_40063_40146[(1)] = (22));

} else {
var statearr_40064_40147 = state_40059__$1;
(statearr_40064_40147[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (27))){
var inst_40002 = (state_40059[(9)]);
var inst_40007 = (state_40059[(10)]);
var inst_40000 = (state_40059[(11)]);
var inst_39927 = (state_40059[(12)]);
var inst_40007__$1 = cljs.core._nth.call(null,inst_40000,inst_40002);
var inst_40008 = cljs.core.async.put_BANG_.call(null,inst_40007__$1,inst_39927,done);
var state_40059__$1 = (function (){var statearr_40065 = state_40059;
(statearr_40065[(10)] = inst_40007__$1);

return statearr_40065;
})();
if(cljs.core.truth_(inst_40008)){
var statearr_40066_40148 = state_40059__$1;
(statearr_40066_40148[(1)] = (30));

} else {
var statearr_40067_40149 = state_40059__$1;
(statearr_40067_40149[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (1))){
var state_40059__$1 = state_40059;
var statearr_40068_40150 = state_40059__$1;
(statearr_40068_40150[(2)] = null);

(statearr_40068_40150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (24))){
var inst_39958 = (state_40059[(7)]);
var inst_39977 = (state_40059[(2)]);
var inst_39978 = cljs.core.next.call(null,inst_39958);
var inst_39936 = inst_39978;
var inst_39937 = null;
var inst_39938 = (0);
var inst_39939 = (0);
var state_40059__$1 = (function (){var statearr_40069 = state_40059;
(statearr_40069[(13)] = inst_39938);

(statearr_40069[(14)] = inst_39936);

(statearr_40069[(15)] = inst_39939);

(statearr_40069[(16)] = inst_39977);

(statearr_40069[(17)] = inst_39937);

return statearr_40069;
})();
var statearr_40070_40151 = state_40059__$1;
(statearr_40070_40151[(2)] = null);

(statearr_40070_40151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (39))){
var state_40059__$1 = state_40059;
var statearr_40074_40152 = state_40059__$1;
(statearr_40074_40152[(2)] = null);

(statearr_40074_40152[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (4))){
var inst_39927 = (state_40059[(12)]);
var inst_39927__$1 = (state_40059[(2)]);
var inst_39928 = (inst_39927__$1 == null);
var state_40059__$1 = (function (){var statearr_40075 = state_40059;
(statearr_40075[(12)] = inst_39927__$1);

return statearr_40075;
})();
if(cljs.core.truth_(inst_39928)){
var statearr_40076_40153 = state_40059__$1;
(statearr_40076_40153[(1)] = (5));

} else {
var statearr_40077_40154 = state_40059__$1;
(statearr_40077_40154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (15))){
var inst_39938 = (state_40059[(13)]);
var inst_39936 = (state_40059[(14)]);
var inst_39939 = (state_40059[(15)]);
var inst_39937 = (state_40059[(17)]);
var inst_39954 = (state_40059[(2)]);
var inst_39955 = (inst_39939 + (1));
var tmp40071 = inst_39938;
var tmp40072 = inst_39936;
var tmp40073 = inst_39937;
var inst_39936__$1 = tmp40072;
var inst_39937__$1 = tmp40073;
var inst_39938__$1 = tmp40071;
var inst_39939__$1 = inst_39955;
var state_40059__$1 = (function (){var statearr_40078 = state_40059;
(statearr_40078[(13)] = inst_39938__$1);

(statearr_40078[(14)] = inst_39936__$1);

(statearr_40078[(15)] = inst_39939__$1);

(statearr_40078[(18)] = inst_39954);

(statearr_40078[(17)] = inst_39937__$1);

return statearr_40078;
})();
var statearr_40079_40155 = state_40059__$1;
(statearr_40079_40155[(2)] = null);

(statearr_40079_40155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (21))){
var inst_39981 = (state_40059[(2)]);
var state_40059__$1 = state_40059;
var statearr_40083_40156 = state_40059__$1;
(statearr_40083_40156[(2)] = inst_39981);

(statearr_40083_40156[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (31))){
var inst_40007 = (state_40059[(10)]);
var inst_40011 = done.call(null,null);
var inst_40012 = cljs.core.async.untap_STAR_.call(null,m,inst_40007);
var state_40059__$1 = (function (){var statearr_40084 = state_40059;
(statearr_40084[(19)] = inst_40011);

return statearr_40084;
})();
var statearr_40085_40157 = state_40059__$1;
(statearr_40085_40157[(2)] = inst_40012);

(statearr_40085_40157[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (32))){
var inst_39999 = (state_40059[(20)]);
var inst_40002 = (state_40059[(9)]);
var inst_40000 = (state_40059[(11)]);
var inst_40001 = (state_40059[(21)]);
var inst_40014 = (state_40059[(2)]);
var inst_40015 = (inst_40002 + (1));
var tmp40080 = inst_39999;
var tmp40081 = inst_40000;
var tmp40082 = inst_40001;
var inst_39999__$1 = tmp40080;
var inst_40000__$1 = tmp40081;
var inst_40001__$1 = tmp40082;
var inst_40002__$1 = inst_40015;
var state_40059__$1 = (function (){var statearr_40086 = state_40059;
(statearr_40086[(20)] = inst_39999__$1);

(statearr_40086[(9)] = inst_40002__$1);

(statearr_40086[(22)] = inst_40014);

(statearr_40086[(11)] = inst_40000__$1);

(statearr_40086[(21)] = inst_40001__$1);

return statearr_40086;
})();
var statearr_40087_40158 = state_40059__$1;
(statearr_40087_40158[(2)] = null);

(statearr_40087_40158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (40))){
var inst_40027 = (state_40059[(23)]);
var inst_40031 = done.call(null,null);
var inst_40032 = cljs.core.async.untap_STAR_.call(null,m,inst_40027);
var state_40059__$1 = (function (){var statearr_40088 = state_40059;
(statearr_40088[(24)] = inst_40031);

return statearr_40088;
})();
var statearr_40089_40159 = state_40059__$1;
(statearr_40089_40159[(2)] = inst_40032);

(statearr_40089_40159[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (33))){
var inst_40018 = (state_40059[(25)]);
var inst_40020 = cljs.core.chunked_seq_QMARK_.call(null,inst_40018);
var state_40059__$1 = state_40059;
if(inst_40020){
var statearr_40090_40160 = state_40059__$1;
(statearr_40090_40160[(1)] = (36));

} else {
var statearr_40091_40161 = state_40059__$1;
(statearr_40091_40161[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (13))){
var inst_39948 = (state_40059[(26)]);
var inst_39951 = cljs.core.async.close_BANG_.call(null,inst_39948);
var state_40059__$1 = state_40059;
var statearr_40092_40162 = state_40059__$1;
(statearr_40092_40162[(2)] = inst_39951);

(statearr_40092_40162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (22))){
var inst_39971 = (state_40059[(8)]);
var inst_39974 = cljs.core.async.close_BANG_.call(null,inst_39971);
var state_40059__$1 = state_40059;
var statearr_40093_40163 = state_40059__$1;
(statearr_40093_40163[(2)] = inst_39974);

(statearr_40093_40163[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (36))){
var inst_40018 = (state_40059[(25)]);
var inst_40022 = cljs.core.chunk_first.call(null,inst_40018);
var inst_40023 = cljs.core.chunk_rest.call(null,inst_40018);
var inst_40024 = cljs.core.count.call(null,inst_40022);
var inst_39999 = inst_40023;
var inst_40000 = inst_40022;
var inst_40001 = inst_40024;
var inst_40002 = (0);
var state_40059__$1 = (function (){var statearr_40094 = state_40059;
(statearr_40094[(20)] = inst_39999);

(statearr_40094[(9)] = inst_40002);

(statearr_40094[(11)] = inst_40000);

(statearr_40094[(21)] = inst_40001);

return statearr_40094;
})();
var statearr_40095_40164 = state_40059__$1;
(statearr_40095_40164[(2)] = null);

(statearr_40095_40164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (41))){
var inst_40018 = (state_40059[(25)]);
var inst_40034 = (state_40059[(2)]);
var inst_40035 = cljs.core.next.call(null,inst_40018);
var inst_39999 = inst_40035;
var inst_40000 = null;
var inst_40001 = (0);
var inst_40002 = (0);
var state_40059__$1 = (function (){var statearr_40096 = state_40059;
(statearr_40096[(20)] = inst_39999);

(statearr_40096[(9)] = inst_40002);

(statearr_40096[(11)] = inst_40000);

(statearr_40096[(21)] = inst_40001);

(statearr_40096[(27)] = inst_40034);

return statearr_40096;
})();
var statearr_40097_40165 = state_40059__$1;
(statearr_40097_40165[(2)] = null);

(statearr_40097_40165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (43))){
var state_40059__$1 = state_40059;
var statearr_40098_40166 = state_40059__$1;
(statearr_40098_40166[(2)] = null);

(statearr_40098_40166[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (29))){
var inst_40043 = (state_40059[(2)]);
var state_40059__$1 = state_40059;
var statearr_40099_40167 = state_40059__$1;
(statearr_40099_40167[(2)] = inst_40043);

(statearr_40099_40167[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (44))){
var inst_40052 = (state_40059[(2)]);
var state_40059__$1 = (function (){var statearr_40100 = state_40059;
(statearr_40100[(28)] = inst_40052);

return statearr_40100;
})();
var statearr_40101_40168 = state_40059__$1;
(statearr_40101_40168[(2)] = null);

(statearr_40101_40168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (6))){
var inst_39991 = (state_40059[(29)]);
var inst_39990 = cljs.core.deref.call(null,cs);
var inst_39991__$1 = cljs.core.keys.call(null,inst_39990);
var inst_39992 = cljs.core.count.call(null,inst_39991__$1);
var inst_39993 = cljs.core.reset_BANG_.call(null,dctr,inst_39992);
var inst_39998 = cljs.core.seq.call(null,inst_39991__$1);
var inst_39999 = inst_39998;
var inst_40000 = null;
var inst_40001 = (0);
var inst_40002 = (0);
var state_40059__$1 = (function (){var statearr_40102 = state_40059;
(statearr_40102[(20)] = inst_39999);

(statearr_40102[(9)] = inst_40002);

(statearr_40102[(11)] = inst_40000);

(statearr_40102[(29)] = inst_39991__$1);

(statearr_40102[(30)] = inst_39993);

(statearr_40102[(21)] = inst_40001);

return statearr_40102;
})();
var statearr_40103_40169 = state_40059__$1;
(statearr_40103_40169[(2)] = null);

(statearr_40103_40169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (28))){
var inst_39999 = (state_40059[(20)]);
var inst_40018 = (state_40059[(25)]);
var inst_40018__$1 = cljs.core.seq.call(null,inst_39999);
var state_40059__$1 = (function (){var statearr_40104 = state_40059;
(statearr_40104[(25)] = inst_40018__$1);

return statearr_40104;
})();
if(inst_40018__$1){
var statearr_40105_40170 = state_40059__$1;
(statearr_40105_40170[(1)] = (33));

} else {
var statearr_40106_40171 = state_40059__$1;
(statearr_40106_40171[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (25))){
var inst_40002 = (state_40059[(9)]);
var inst_40001 = (state_40059[(21)]);
var inst_40004 = (inst_40002 < inst_40001);
var inst_40005 = inst_40004;
var state_40059__$1 = state_40059;
if(cljs.core.truth_(inst_40005)){
var statearr_40107_40172 = state_40059__$1;
(statearr_40107_40172[(1)] = (27));

} else {
var statearr_40108_40173 = state_40059__$1;
(statearr_40108_40173[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (34))){
var state_40059__$1 = state_40059;
var statearr_40109_40174 = state_40059__$1;
(statearr_40109_40174[(2)] = null);

(statearr_40109_40174[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (17))){
var state_40059__$1 = state_40059;
var statearr_40110_40175 = state_40059__$1;
(statearr_40110_40175[(2)] = null);

(statearr_40110_40175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (3))){
var inst_40057 = (state_40059[(2)]);
var state_40059__$1 = state_40059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40059__$1,inst_40057);
} else {
if((state_val_40060 === (12))){
var inst_39986 = (state_40059[(2)]);
var state_40059__$1 = state_40059;
var statearr_40111_40176 = state_40059__$1;
(statearr_40111_40176[(2)] = inst_39986);

(statearr_40111_40176[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (2))){
var state_40059__$1 = state_40059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40059__$1,(4),ch);
} else {
if((state_val_40060 === (23))){
var state_40059__$1 = state_40059;
var statearr_40112_40177 = state_40059__$1;
(statearr_40112_40177[(2)] = null);

(statearr_40112_40177[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (35))){
var inst_40041 = (state_40059[(2)]);
var state_40059__$1 = state_40059;
var statearr_40113_40178 = state_40059__$1;
(statearr_40113_40178[(2)] = inst_40041);

(statearr_40113_40178[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (19))){
var inst_39958 = (state_40059[(7)]);
var inst_39962 = cljs.core.chunk_first.call(null,inst_39958);
var inst_39963 = cljs.core.chunk_rest.call(null,inst_39958);
var inst_39964 = cljs.core.count.call(null,inst_39962);
var inst_39936 = inst_39963;
var inst_39937 = inst_39962;
var inst_39938 = inst_39964;
var inst_39939 = (0);
var state_40059__$1 = (function (){var statearr_40114 = state_40059;
(statearr_40114[(13)] = inst_39938);

(statearr_40114[(14)] = inst_39936);

(statearr_40114[(15)] = inst_39939);

(statearr_40114[(17)] = inst_39937);

return statearr_40114;
})();
var statearr_40115_40179 = state_40059__$1;
(statearr_40115_40179[(2)] = null);

(statearr_40115_40179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (11))){
var inst_39936 = (state_40059[(14)]);
var inst_39958 = (state_40059[(7)]);
var inst_39958__$1 = cljs.core.seq.call(null,inst_39936);
var state_40059__$1 = (function (){var statearr_40116 = state_40059;
(statearr_40116[(7)] = inst_39958__$1);

return statearr_40116;
})();
if(inst_39958__$1){
var statearr_40117_40180 = state_40059__$1;
(statearr_40117_40180[(1)] = (16));

} else {
var statearr_40118_40181 = state_40059__$1;
(statearr_40118_40181[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (9))){
var inst_39988 = (state_40059[(2)]);
var state_40059__$1 = state_40059;
var statearr_40119_40182 = state_40059__$1;
(statearr_40119_40182[(2)] = inst_39988);

(statearr_40119_40182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (5))){
var inst_39934 = cljs.core.deref.call(null,cs);
var inst_39935 = cljs.core.seq.call(null,inst_39934);
var inst_39936 = inst_39935;
var inst_39937 = null;
var inst_39938 = (0);
var inst_39939 = (0);
var state_40059__$1 = (function (){var statearr_40120 = state_40059;
(statearr_40120[(13)] = inst_39938);

(statearr_40120[(14)] = inst_39936);

(statearr_40120[(15)] = inst_39939);

(statearr_40120[(17)] = inst_39937);

return statearr_40120;
})();
var statearr_40121_40183 = state_40059__$1;
(statearr_40121_40183[(2)] = null);

(statearr_40121_40183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (14))){
var state_40059__$1 = state_40059;
var statearr_40122_40184 = state_40059__$1;
(statearr_40122_40184[(2)] = null);

(statearr_40122_40184[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (45))){
var inst_40049 = (state_40059[(2)]);
var state_40059__$1 = state_40059;
var statearr_40123_40185 = state_40059__$1;
(statearr_40123_40185[(2)] = inst_40049);

(statearr_40123_40185[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (26))){
var inst_39991 = (state_40059[(29)]);
var inst_40045 = (state_40059[(2)]);
var inst_40046 = cljs.core.seq.call(null,inst_39991);
var state_40059__$1 = (function (){var statearr_40124 = state_40059;
(statearr_40124[(31)] = inst_40045);

return statearr_40124;
})();
if(inst_40046){
var statearr_40125_40186 = state_40059__$1;
(statearr_40125_40186[(1)] = (42));

} else {
var statearr_40126_40187 = state_40059__$1;
(statearr_40126_40187[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (16))){
var inst_39958 = (state_40059[(7)]);
var inst_39960 = cljs.core.chunked_seq_QMARK_.call(null,inst_39958);
var state_40059__$1 = state_40059;
if(inst_39960){
var statearr_40127_40188 = state_40059__$1;
(statearr_40127_40188[(1)] = (19));

} else {
var statearr_40128_40189 = state_40059__$1;
(statearr_40128_40189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (38))){
var inst_40038 = (state_40059[(2)]);
var state_40059__$1 = state_40059;
var statearr_40129_40190 = state_40059__$1;
(statearr_40129_40190[(2)] = inst_40038);

(statearr_40129_40190[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (30))){
var state_40059__$1 = state_40059;
var statearr_40130_40191 = state_40059__$1;
(statearr_40130_40191[(2)] = null);

(statearr_40130_40191[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (10))){
var inst_39939 = (state_40059[(15)]);
var inst_39937 = (state_40059[(17)]);
var inst_39947 = cljs.core._nth.call(null,inst_39937,inst_39939);
var inst_39948 = cljs.core.nth.call(null,inst_39947,(0),null);
var inst_39949 = cljs.core.nth.call(null,inst_39947,(1),null);
var state_40059__$1 = (function (){var statearr_40131 = state_40059;
(statearr_40131[(26)] = inst_39948);

return statearr_40131;
})();
if(cljs.core.truth_(inst_39949)){
var statearr_40132_40192 = state_40059__$1;
(statearr_40132_40192[(1)] = (13));

} else {
var statearr_40133_40193 = state_40059__$1;
(statearr_40133_40193[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (18))){
var inst_39984 = (state_40059[(2)]);
var state_40059__$1 = state_40059;
var statearr_40134_40194 = state_40059__$1;
(statearr_40134_40194[(2)] = inst_39984);

(statearr_40134_40194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (42))){
var state_40059__$1 = state_40059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40059__$1,(45),dchan);
} else {
if((state_val_40060 === (37))){
var inst_40027 = (state_40059[(23)]);
var inst_39927 = (state_40059[(12)]);
var inst_40018 = (state_40059[(25)]);
var inst_40027__$1 = cljs.core.first.call(null,inst_40018);
var inst_40028 = cljs.core.async.put_BANG_.call(null,inst_40027__$1,inst_39927,done);
var state_40059__$1 = (function (){var statearr_40135 = state_40059;
(statearr_40135[(23)] = inst_40027__$1);

return statearr_40135;
})();
if(cljs.core.truth_(inst_40028)){
var statearr_40136_40195 = state_40059__$1;
(statearr_40136_40195[(1)] = (39));

} else {
var statearr_40137_40196 = state_40059__$1;
(statearr_40137_40196[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40060 === (8))){
var inst_39938 = (state_40059[(13)]);
var inst_39939 = (state_40059[(15)]);
var inst_39941 = (inst_39939 < inst_39938);
var inst_39942 = inst_39941;
var state_40059__$1 = state_40059;
if(cljs.core.truth_(inst_39942)){
var statearr_40138_40197 = state_40059__$1;
(statearr_40138_40197[(1)] = (10));

} else {
var statearr_40139_40198 = state_40059__$1;
(statearr_40139_40198[(1)] = (11));

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
});})(c__30624__auto___40144,cs,m,dchan,dctr,done))
;
return ((function (switch__30536__auto__,c__30624__auto___40144,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30537__auto__ = null;
var cljs$core$async$mult_$_state_machine__30537__auto____0 = (function (){
var statearr_40140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40140[(0)] = cljs$core$async$mult_$_state_machine__30537__auto__);

(statearr_40140[(1)] = (1));

return statearr_40140;
});
var cljs$core$async$mult_$_state_machine__30537__auto____1 = (function (state_40059){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40141){if((e40141 instanceof Object)){
var ex__30540__auto__ = e40141;
var statearr_40142_40199 = state_40059;
(statearr_40142_40199[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40200 = state_40059;
state_40059 = G__40200;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30537__auto__ = function(state_40059){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30537__auto____1.call(this,state_40059);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30537__auto____0;
cljs$core$async$mult_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30537__auto____1;
return cljs$core$async$mult_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40144,cs,m,dchan,dctr,done))
})();
var state__30626__auto__ = (function (){var statearr_40143 = f__30625__auto__.call(null);
(statearr_40143[(6)] = c__30624__auto___40144);

return statearr_40143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40144,cs,m,dchan,dctr,done))
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
var G__40202 = arguments.length;
switch (G__40202) {
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
var len__28364__auto___40214 = arguments.length;
var i__28365__auto___40215 = (0);
while(true){
if((i__28365__auto___40215 < len__28364__auto___40214)){
args__28371__auto__.push((arguments[i__28365__auto___40215]));

var G__40216 = (i__28365__auto___40215 + (1));
i__28365__auto___40215 = G__40216;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40208){
var map__40209 = p__40208;
var map__40209__$1 = ((((!((map__40209 == null)))?((((map__40209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40209):map__40209);
var opts = map__40209__$1;
var statearr_40211_40217 = state;
(statearr_40211_40217[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__40209,map__40209__$1,opts){
return (function (val){
var statearr_40212_40218 = state;
(statearr_40212_40218[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40209,map__40209__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_40213_40219 = state;
(statearr_40213_40219[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40204){
var G__40205 = cljs.core.first.call(null,seq40204);
var seq40204__$1 = cljs.core.next.call(null,seq40204);
var G__40206 = cljs.core.first.call(null,seq40204__$1);
var seq40204__$2 = cljs.core.next.call(null,seq40204__$1);
var G__40207 = cljs.core.first.call(null,seq40204__$2);
var seq40204__$3 = cljs.core.next.call(null,seq40204__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40205,G__40206,G__40207,seq40204__$3);
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
if(typeof cljs.core.async.t_cljs$core$async40220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40220 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40221){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40221 = meta40221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40222,meta40221__$1){
var self__ = this;
var _40222__$1 = this;
return (new cljs.core.async.t_cljs$core$async40220(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40221__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40220.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40222){
var self__ = this;
var _40222__$1 = this;
return self__.meta40221;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40220.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40220.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40220.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40220.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40220.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40220.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40220.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40220.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async40220.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40221","meta40221",1079523424,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40220.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40220";

cljs.core.async.t_cljs$core$async40220.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40220");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40220 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40220(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40221){
return (new cljs.core.async.t_cljs$core$async40220(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40221));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40220(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30624__auto___40384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40384,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40384,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40324){
var state_val_40325 = (state_40324[(1)]);
if((state_val_40325 === (7))){
var inst_40239 = (state_40324[(2)]);
var state_40324__$1 = state_40324;
var statearr_40326_40385 = state_40324__$1;
(statearr_40326_40385[(2)] = inst_40239);

(statearr_40326_40385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (20))){
var inst_40251 = (state_40324[(7)]);
var state_40324__$1 = state_40324;
var statearr_40327_40386 = state_40324__$1;
(statearr_40327_40386[(2)] = inst_40251);

(statearr_40327_40386[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (27))){
var state_40324__$1 = state_40324;
var statearr_40328_40387 = state_40324__$1;
(statearr_40328_40387[(2)] = null);

(statearr_40328_40387[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (1))){
var inst_40226 = (state_40324[(8)]);
var inst_40226__$1 = calc_state.call(null);
var inst_40228 = (inst_40226__$1 == null);
var inst_40229 = cljs.core.not.call(null,inst_40228);
var state_40324__$1 = (function (){var statearr_40329 = state_40324;
(statearr_40329[(8)] = inst_40226__$1);

return statearr_40329;
})();
if(inst_40229){
var statearr_40330_40388 = state_40324__$1;
(statearr_40330_40388[(1)] = (2));

} else {
var statearr_40331_40389 = state_40324__$1;
(statearr_40331_40389[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (24))){
var inst_40275 = (state_40324[(9)]);
var inst_40284 = (state_40324[(10)]);
var inst_40298 = (state_40324[(11)]);
var inst_40298__$1 = inst_40275.call(null,inst_40284);
var state_40324__$1 = (function (){var statearr_40332 = state_40324;
(statearr_40332[(11)] = inst_40298__$1);

return statearr_40332;
})();
if(cljs.core.truth_(inst_40298__$1)){
var statearr_40333_40390 = state_40324__$1;
(statearr_40333_40390[(1)] = (29));

} else {
var statearr_40334_40391 = state_40324__$1;
(statearr_40334_40391[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (4))){
var inst_40242 = (state_40324[(2)]);
var state_40324__$1 = state_40324;
if(cljs.core.truth_(inst_40242)){
var statearr_40335_40392 = state_40324__$1;
(statearr_40335_40392[(1)] = (8));

} else {
var statearr_40336_40393 = state_40324__$1;
(statearr_40336_40393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (15))){
var inst_40269 = (state_40324[(2)]);
var state_40324__$1 = state_40324;
if(cljs.core.truth_(inst_40269)){
var statearr_40337_40394 = state_40324__$1;
(statearr_40337_40394[(1)] = (19));

} else {
var statearr_40338_40395 = state_40324__$1;
(statearr_40338_40395[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (21))){
var inst_40274 = (state_40324[(12)]);
var inst_40274__$1 = (state_40324[(2)]);
var inst_40275 = cljs.core.get.call(null,inst_40274__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40276 = cljs.core.get.call(null,inst_40274__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40277 = cljs.core.get.call(null,inst_40274__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40324__$1 = (function (){var statearr_40339 = state_40324;
(statearr_40339[(9)] = inst_40275);

(statearr_40339[(12)] = inst_40274__$1);

(statearr_40339[(13)] = inst_40276);

return statearr_40339;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40324__$1,(22),inst_40277);
} else {
if((state_val_40325 === (31))){
var inst_40306 = (state_40324[(2)]);
var state_40324__$1 = state_40324;
if(cljs.core.truth_(inst_40306)){
var statearr_40340_40396 = state_40324__$1;
(statearr_40340_40396[(1)] = (32));

} else {
var statearr_40341_40397 = state_40324__$1;
(statearr_40341_40397[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (32))){
var inst_40283 = (state_40324[(14)]);
var state_40324__$1 = state_40324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40324__$1,(35),out,inst_40283);
} else {
if((state_val_40325 === (33))){
var inst_40274 = (state_40324[(12)]);
var inst_40251 = inst_40274;
var state_40324__$1 = (function (){var statearr_40342 = state_40324;
(statearr_40342[(7)] = inst_40251);

return statearr_40342;
})();
var statearr_40343_40398 = state_40324__$1;
(statearr_40343_40398[(2)] = null);

(statearr_40343_40398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (13))){
var inst_40251 = (state_40324[(7)]);
var inst_40258 = inst_40251.cljs$lang$protocol_mask$partition0$;
var inst_40259 = (inst_40258 & (64));
var inst_40260 = inst_40251.cljs$core$ISeq$;
var inst_40261 = (cljs.core.PROTOCOL_SENTINEL === inst_40260);
var inst_40262 = (inst_40259) || (inst_40261);
var state_40324__$1 = state_40324;
if(cljs.core.truth_(inst_40262)){
var statearr_40344_40399 = state_40324__$1;
(statearr_40344_40399[(1)] = (16));

} else {
var statearr_40345_40400 = state_40324__$1;
(statearr_40345_40400[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (22))){
var inst_40283 = (state_40324[(14)]);
var inst_40284 = (state_40324[(10)]);
var inst_40282 = (state_40324[(2)]);
var inst_40283__$1 = cljs.core.nth.call(null,inst_40282,(0),null);
var inst_40284__$1 = cljs.core.nth.call(null,inst_40282,(1),null);
var inst_40285 = (inst_40283__$1 == null);
var inst_40286 = cljs.core._EQ_.call(null,inst_40284__$1,change);
var inst_40287 = (inst_40285) || (inst_40286);
var state_40324__$1 = (function (){var statearr_40346 = state_40324;
(statearr_40346[(14)] = inst_40283__$1);

(statearr_40346[(10)] = inst_40284__$1);

return statearr_40346;
})();
if(cljs.core.truth_(inst_40287)){
var statearr_40347_40401 = state_40324__$1;
(statearr_40347_40401[(1)] = (23));

} else {
var statearr_40348_40402 = state_40324__$1;
(statearr_40348_40402[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (36))){
var inst_40274 = (state_40324[(12)]);
var inst_40251 = inst_40274;
var state_40324__$1 = (function (){var statearr_40349 = state_40324;
(statearr_40349[(7)] = inst_40251);

return statearr_40349;
})();
var statearr_40350_40403 = state_40324__$1;
(statearr_40350_40403[(2)] = null);

(statearr_40350_40403[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (29))){
var inst_40298 = (state_40324[(11)]);
var state_40324__$1 = state_40324;
var statearr_40351_40404 = state_40324__$1;
(statearr_40351_40404[(2)] = inst_40298);

(statearr_40351_40404[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (6))){
var state_40324__$1 = state_40324;
var statearr_40352_40405 = state_40324__$1;
(statearr_40352_40405[(2)] = false);

(statearr_40352_40405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (28))){
var inst_40294 = (state_40324[(2)]);
var inst_40295 = calc_state.call(null);
var inst_40251 = inst_40295;
var state_40324__$1 = (function (){var statearr_40353 = state_40324;
(statearr_40353[(15)] = inst_40294);

(statearr_40353[(7)] = inst_40251);

return statearr_40353;
})();
var statearr_40354_40406 = state_40324__$1;
(statearr_40354_40406[(2)] = null);

(statearr_40354_40406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (25))){
var inst_40320 = (state_40324[(2)]);
var state_40324__$1 = state_40324;
var statearr_40355_40407 = state_40324__$1;
(statearr_40355_40407[(2)] = inst_40320);

(statearr_40355_40407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (34))){
var inst_40318 = (state_40324[(2)]);
var state_40324__$1 = state_40324;
var statearr_40356_40408 = state_40324__$1;
(statearr_40356_40408[(2)] = inst_40318);

(statearr_40356_40408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (17))){
var state_40324__$1 = state_40324;
var statearr_40357_40409 = state_40324__$1;
(statearr_40357_40409[(2)] = false);

(statearr_40357_40409[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (3))){
var state_40324__$1 = state_40324;
var statearr_40358_40410 = state_40324__$1;
(statearr_40358_40410[(2)] = false);

(statearr_40358_40410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (12))){
var inst_40322 = (state_40324[(2)]);
var state_40324__$1 = state_40324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40324__$1,inst_40322);
} else {
if((state_val_40325 === (2))){
var inst_40226 = (state_40324[(8)]);
var inst_40231 = inst_40226.cljs$lang$protocol_mask$partition0$;
var inst_40232 = (inst_40231 & (64));
var inst_40233 = inst_40226.cljs$core$ISeq$;
var inst_40234 = (cljs.core.PROTOCOL_SENTINEL === inst_40233);
var inst_40235 = (inst_40232) || (inst_40234);
var state_40324__$1 = state_40324;
if(cljs.core.truth_(inst_40235)){
var statearr_40359_40411 = state_40324__$1;
(statearr_40359_40411[(1)] = (5));

} else {
var statearr_40360_40412 = state_40324__$1;
(statearr_40360_40412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (23))){
var inst_40283 = (state_40324[(14)]);
var inst_40289 = (inst_40283 == null);
var state_40324__$1 = state_40324;
if(cljs.core.truth_(inst_40289)){
var statearr_40361_40413 = state_40324__$1;
(statearr_40361_40413[(1)] = (26));

} else {
var statearr_40362_40414 = state_40324__$1;
(statearr_40362_40414[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (35))){
var inst_40309 = (state_40324[(2)]);
var state_40324__$1 = state_40324;
if(cljs.core.truth_(inst_40309)){
var statearr_40363_40415 = state_40324__$1;
(statearr_40363_40415[(1)] = (36));

} else {
var statearr_40364_40416 = state_40324__$1;
(statearr_40364_40416[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (19))){
var inst_40251 = (state_40324[(7)]);
var inst_40271 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40251);
var state_40324__$1 = state_40324;
var statearr_40365_40417 = state_40324__$1;
(statearr_40365_40417[(2)] = inst_40271);

(statearr_40365_40417[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (11))){
var inst_40251 = (state_40324[(7)]);
var inst_40255 = (inst_40251 == null);
var inst_40256 = cljs.core.not.call(null,inst_40255);
var state_40324__$1 = state_40324;
if(inst_40256){
var statearr_40366_40418 = state_40324__$1;
(statearr_40366_40418[(1)] = (13));

} else {
var statearr_40367_40419 = state_40324__$1;
(statearr_40367_40419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (9))){
var inst_40226 = (state_40324[(8)]);
var state_40324__$1 = state_40324;
var statearr_40368_40420 = state_40324__$1;
(statearr_40368_40420[(2)] = inst_40226);

(statearr_40368_40420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (5))){
var state_40324__$1 = state_40324;
var statearr_40369_40421 = state_40324__$1;
(statearr_40369_40421[(2)] = true);

(statearr_40369_40421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (14))){
var state_40324__$1 = state_40324;
var statearr_40370_40422 = state_40324__$1;
(statearr_40370_40422[(2)] = false);

(statearr_40370_40422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (26))){
var inst_40284 = (state_40324[(10)]);
var inst_40291 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40284);
var state_40324__$1 = state_40324;
var statearr_40371_40423 = state_40324__$1;
(statearr_40371_40423[(2)] = inst_40291);

(statearr_40371_40423[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (16))){
var state_40324__$1 = state_40324;
var statearr_40372_40424 = state_40324__$1;
(statearr_40372_40424[(2)] = true);

(statearr_40372_40424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (38))){
var inst_40314 = (state_40324[(2)]);
var state_40324__$1 = state_40324;
var statearr_40373_40425 = state_40324__$1;
(statearr_40373_40425[(2)] = inst_40314);

(statearr_40373_40425[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (30))){
var inst_40275 = (state_40324[(9)]);
var inst_40284 = (state_40324[(10)]);
var inst_40276 = (state_40324[(13)]);
var inst_40301 = cljs.core.empty_QMARK_.call(null,inst_40275);
var inst_40302 = inst_40276.call(null,inst_40284);
var inst_40303 = cljs.core.not.call(null,inst_40302);
var inst_40304 = (inst_40301) && (inst_40303);
var state_40324__$1 = state_40324;
var statearr_40374_40426 = state_40324__$1;
(statearr_40374_40426[(2)] = inst_40304);

(statearr_40374_40426[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (10))){
var inst_40226 = (state_40324[(8)]);
var inst_40247 = (state_40324[(2)]);
var inst_40248 = cljs.core.get.call(null,inst_40247,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40249 = cljs.core.get.call(null,inst_40247,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40250 = cljs.core.get.call(null,inst_40247,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40251 = inst_40226;
var state_40324__$1 = (function (){var statearr_40375 = state_40324;
(statearr_40375[(16)] = inst_40250);

(statearr_40375[(17)] = inst_40248);

(statearr_40375[(18)] = inst_40249);

(statearr_40375[(7)] = inst_40251);

return statearr_40375;
})();
var statearr_40376_40427 = state_40324__$1;
(statearr_40376_40427[(2)] = null);

(statearr_40376_40427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (18))){
var inst_40266 = (state_40324[(2)]);
var state_40324__$1 = state_40324;
var statearr_40377_40428 = state_40324__$1;
(statearr_40377_40428[(2)] = inst_40266);

(statearr_40377_40428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (37))){
var state_40324__$1 = state_40324;
var statearr_40378_40429 = state_40324__$1;
(statearr_40378_40429[(2)] = null);

(statearr_40378_40429[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (8))){
var inst_40226 = (state_40324[(8)]);
var inst_40244 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40226);
var state_40324__$1 = state_40324;
var statearr_40379_40430 = state_40324__$1;
(statearr_40379_40430[(2)] = inst_40244);

(statearr_40379_40430[(1)] = (10));


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
});})(c__30624__auto___40384,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30536__auto__,c__30624__auto___40384,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30537__auto__ = null;
var cljs$core$async$mix_$_state_machine__30537__auto____0 = (function (){
var statearr_40380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40380[(0)] = cljs$core$async$mix_$_state_machine__30537__auto__);

(statearr_40380[(1)] = (1));

return statearr_40380;
});
var cljs$core$async$mix_$_state_machine__30537__auto____1 = (function (state_40324){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40381){if((e40381 instanceof Object)){
var ex__30540__auto__ = e40381;
var statearr_40382_40431 = state_40324;
(statearr_40382_40431[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40432 = state_40324;
state_40324 = G__40432;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30537__auto__ = function(state_40324){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30537__auto____1.call(this,state_40324);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30537__auto____0;
cljs$core$async$mix_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30537__auto____1;
return cljs$core$async$mix_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40384,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30626__auto__ = (function (){var statearr_40383 = f__30625__auto__.call(null);
(statearr_40383[(6)] = c__30624__auto___40384);

return statearr_40383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40384,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__40434 = arguments.length;
switch (G__40434) {
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
var G__40438 = arguments.length;
switch (G__40438) {
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
return (function (p1__40436_SHARP_){
if(cljs.core.truth_(p1__40436_SHARP_.call(null,topic))){
return p1__40436_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40436_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40439 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40440){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40440 = meta40440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40441,meta40440__$1){
var self__ = this;
var _40441__$1 = this;
return (new cljs.core.async.t_cljs$core$async40439(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40440__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40439.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40441){
var self__ = this;
var _40441__$1 = this;
return self__.meta40440;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40439.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40439.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40439.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40439.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async40439.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40439.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40439.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40440","meta40440",-1785276646,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40439";

cljs.core.async.t_cljs$core$async40439.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40439");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40439 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40439(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40440){
return (new cljs.core.async.t_cljs$core$async40439(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40440));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40439(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30624__auto___40559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40559,mults,ensure_mult,p){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40559,mults,ensure_mult,p){
return (function (state_40513){
var state_val_40514 = (state_40513[(1)]);
if((state_val_40514 === (7))){
var inst_40509 = (state_40513[(2)]);
var state_40513__$1 = state_40513;
var statearr_40515_40560 = state_40513__$1;
(statearr_40515_40560[(2)] = inst_40509);

(statearr_40515_40560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (20))){
var state_40513__$1 = state_40513;
var statearr_40516_40561 = state_40513__$1;
(statearr_40516_40561[(2)] = null);

(statearr_40516_40561[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (1))){
var state_40513__$1 = state_40513;
var statearr_40517_40562 = state_40513__$1;
(statearr_40517_40562[(2)] = null);

(statearr_40517_40562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (24))){
var inst_40492 = (state_40513[(7)]);
var inst_40501 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40492);
var state_40513__$1 = state_40513;
var statearr_40518_40563 = state_40513__$1;
(statearr_40518_40563[(2)] = inst_40501);

(statearr_40518_40563[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (4))){
var inst_40444 = (state_40513[(8)]);
var inst_40444__$1 = (state_40513[(2)]);
var inst_40445 = (inst_40444__$1 == null);
var state_40513__$1 = (function (){var statearr_40519 = state_40513;
(statearr_40519[(8)] = inst_40444__$1);

return statearr_40519;
})();
if(cljs.core.truth_(inst_40445)){
var statearr_40520_40564 = state_40513__$1;
(statearr_40520_40564[(1)] = (5));

} else {
var statearr_40521_40565 = state_40513__$1;
(statearr_40521_40565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (15))){
var inst_40486 = (state_40513[(2)]);
var state_40513__$1 = state_40513;
var statearr_40522_40566 = state_40513__$1;
(statearr_40522_40566[(2)] = inst_40486);

(statearr_40522_40566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (21))){
var inst_40506 = (state_40513[(2)]);
var state_40513__$1 = (function (){var statearr_40523 = state_40513;
(statearr_40523[(9)] = inst_40506);

return statearr_40523;
})();
var statearr_40524_40567 = state_40513__$1;
(statearr_40524_40567[(2)] = null);

(statearr_40524_40567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (13))){
var inst_40468 = (state_40513[(10)]);
var inst_40470 = cljs.core.chunked_seq_QMARK_.call(null,inst_40468);
var state_40513__$1 = state_40513;
if(inst_40470){
var statearr_40525_40568 = state_40513__$1;
(statearr_40525_40568[(1)] = (16));

} else {
var statearr_40526_40569 = state_40513__$1;
(statearr_40526_40569[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (22))){
var inst_40498 = (state_40513[(2)]);
var state_40513__$1 = state_40513;
if(cljs.core.truth_(inst_40498)){
var statearr_40527_40570 = state_40513__$1;
(statearr_40527_40570[(1)] = (23));

} else {
var statearr_40528_40571 = state_40513__$1;
(statearr_40528_40571[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (6))){
var inst_40494 = (state_40513[(11)]);
var inst_40444 = (state_40513[(8)]);
var inst_40492 = (state_40513[(7)]);
var inst_40492__$1 = topic_fn.call(null,inst_40444);
var inst_40493 = cljs.core.deref.call(null,mults);
var inst_40494__$1 = cljs.core.get.call(null,inst_40493,inst_40492__$1);
var state_40513__$1 = (function (){var statearr_40529 = state_40513;
(statearr_40529[(11)] = inst_40494__$1);

(statearr_40529[(7)] = inst_40492__$1);

return statearr_40529;
})();
if(cljs.core.truth_(inst_40494__$1)){
var statearr_40530_40572 = state_40513__$1;
(statearr_40530_40572[(1)] = (19));

} else {
var statearr_40531_40573 = state_40513__$1;
(statearr_40531_40573[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (25))){
var inst_40503 = (state_40513[(2)]);
var state_40513__$1 = state_40513;
var statearr_40532_40574 = state_40513__$1;
(statearr_40532_40574[(2)] = inst_40503);

(statearr_40532_40574[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (17))){
var inst_40468 = (state_40513[(10)]);
var inst_40477 = cljs.core.first.call(null,inst_40468);
var inst_40478 = cljs.core.async.muxch_STAR_.call(null,inst_40477);
var inst_40479 = cljs.core.async.close_BANG_.call(null,inst_40478);
var inst_40480 = cljs.core.next.call(null,inst_40468);
var inst_40454 = inst_40480;
var inst_40455 = null;
var inst_40456 = (0);
var inst_40457 = (0);
var state_40513__$1 = (function (){var statearr_40533 = state_40513;
(statearr_40533[(12)] = inst_40454);

(statearr_40533[(13)] = inst_40479);

(statearr_40533[(14)] = inst_40457);

(statearr_40533[(15)] = inst_40456);

(statearr_40533[(16)] = inst_40455);

return statearr_40533;
})();
var statearr_40534_40575 = state_40513__$1;
(statearr_40534_40575[(2)] = null);

(statearr_40534_40575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (3))){
var inst_40511 = (state_40513[(2)]);
var state_40513__$1 = state_40513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40513__$1,inst_40511);
} else {
if((state_val_40514 === (12))){
var inst_40488 = (state_40513[(2)]);
var state_40513__$1 = state_40513;
var statearr_40535_40576 = state_40513__$1;
(statearr_40535_40576[(2)] = inst_40488);

(statearr_40535_40576[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (2))){
var state_40513__$1 = state_40513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40513__$1,(4),ch);
} else {
if((state_val_40514 === (23))){
var state_40513__$1 = state_40513;
var statearr_40536_40577 = state_40513__$1;
(statearr_40536_40577[(2)] = null);

(statearr_40536_40577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (19))){
var inst_40494 = (state_40513[(11)]);
var inst_40444 = (state_40513[(8)]);
var inst_40496 = cljs.core.async.muxch_STAR_.call(null,inst_40494);
var state_40513__$1 = state_40513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40513__$1,(22),inst_40496,inst_40444);
} else {
if((state_val_40514 === (11))){
var inst_40454 = (state_40513[(12)]);
var inst_40468 = (state_40513[(10)]);
var inst_40468__$1 = cljs.core.seq.call(null,inst_40454);
var state_40513__$1 = (function (){var statearr_40537 = state_40513;
(statearr_40537[(10)] = inst_40468__$1);

return statearr_40537;
})();
if(inst_40468__$1){
var statearr_40538_40578 = state_40513__$1;
(statearr_40538_40578[(1)] = (13));

} else {
var statearr_40539_40579 = state_40513__$1;
(statearr_40539_40579[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (9))){
var inst_40490 = (state_40513[(2)]);
var state_40513__$1 = state_40513;
var statearr_40540_40580 = state_40513__$1;
(statearr_40540_40580[(2)] = inst_40490);

(statearr_40540_40580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (5))){
var inst_40451 = cljs.core.deref.call(null,mults);
var inst_40452 = cljs.core.vals.call(null,inst_40451);
var inst_40453 = cljs.core.seq.call(null,inst_40452);
var inst_40454 = inst_40453;
var inst_40455 = null;
var inst_40456 = (0);
var inst_40457 = (0);
var state_40513__$1 = (function (){var statearr_40541 = state_40513;
(statearr_40541[(12)] = inst_40454);

(statearr_40541[(14)] = inst_40457);

(statearr_40541[(15)] = inst_40456);

(statearr_40541[(16)] = inst_40455);

return statearr_40541;
})();
var statearr_40542_40581 = state_40513__$1;
(statearr_40542_40581[(2)] = null);

(statearr_40542_40581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (14))){
var state_40513__$1 = state_40513;
var statearr_40546_40582 = state_40513__$1;
(statearr_40546_40582[(2)] = null);

(statearr_40546_40582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (16))){
var inst_40468 = (state_40513[(10)]);
var inst_40472 = cljs.core.chunk_first.call(null,inst_40468);
var inst_40473 = cljs.core.chunk_rest.call(null,inst_40468);
var inst_40474 = cljs.core.count.call(null,inst_40472);
var inst_40454 = inst_40473;
var inst_40455 = inst_40472;
var inst_40456 = inst_40474;
var inst_40457 = (0);
var state_40513__$1 = (function (){var statearr_40547 = state_40513;
(statearr_40547[(12)] = inst_40454);

(statearr_40547[(14)] = inst_40457);

(statearr_40547[(15)] = inst_40456);

(statearr_40547[(16)] = inst_40455);

return statearr_40547;
})();
var statearr_40548_40583 = state_40513__$1;
(statearr_40548_40583[(2)] = null);

(statearr_40548_40583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (10))){
var inst_40454 = (state_40513[(12)]);
var inst_40457 = (state_40513[(14)]);
var inst_40456 = (state_40513[(15)]);
var inst_40455 = (state_40513[(16)]);
var inst_40462 = cljs.core._nth.call(null,inst_40455,inst_40457);
var inst_40463 = cljs.core.async.muxch_STAR_.call(null,inst_40462);
var inst_40464 = cljs.core.async.close_BANG_.call(null,inst_40463);
var inst_40465 = (inst_40457 + (1));
var tmp40543 = inst_40454;
var tmp40544 = inst_40456;
var tmp40545 = inst_40455;
var inst_40454__$1 = tmp40543;
var inst_40455__$1 = tmp40545;
var inst_40456__$1 = tmp40544;
var inst_40457__$1 = inst_40465;
var state_40513__$1 = (function (){var statearr_40549 = state_40513;
(statearr_40549[(12)] = inst_40454__$1);

(statearr_40549[(17)] = inst_40464);

(statearr_40549[(14)] = inst_40457__$1);

(statearr_40549[(15)] = inst_40456__$1);

(statearr_40549[(16)] = inst_40455__$1);

return statearr_40549;
})();
var statearr_40550_40584 = state_40513__$1;
(statearr_40550_40584[(2)] = null);

(statearr_40550_40584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (18))){
var inst_40483 = (state_40513[(2)]);
var state_40513__$1 = state_40513;
var statearr_40551_40585 = state_40513__$1;
(statearr_40551_40585[(2)] = inst_40483);

(statearr_40551_40585[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40514 === (8))){
var inst_40457 = (state_40513[(14)]);
var inst_40456 = (state_40513[(15)]);
var inst_40459 = (inst_40457 < inst_40456);
var inst_40460 = inst_40459;
var state_40513__$1 = state_40513;
if(cljs.core.truth_(inst_40460)){
var statearr_40552_40586 = state_40513__$1;
(statearr_40552_40586[(1)] = (10));

} else {
var statearr_40553_40587 = state_40513__$1;
(statearr_40553_40587[(1)] = (11));

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
});})(c__30624__auto___40559,mults,ensure_mult,p))
;
return ((function (switch__30536__auto__,c__30624__auto___40559,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40554[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40554[(1)] = (1));

return statearr_40554;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40513){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40555){if((e40555 instanceof Object)){
var ex__30540__auto__ = e40555;
var statearr_40556_40588 = state_40513;
(statearr_40556_40588[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40589 = state_40513;
state_40513 = G__40589;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40513);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40559,mults,ensure_mult,p))
})();
var state__30626__auto__ = (function (){var statearr_40557 = f__30625__auto__.call(null);
(statearr_40557[(6)] = c__30624__auto___40559);

return statearr_40557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40559,mults,ensure_mult,p))
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
var G__40591 = arguments.length;
switch (G__40591) {
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
var G__40594 = arguments.length;
switch (G__40594) {
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
var G__40597 = arguments.length;
switch (G__40597) {
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
var c__30624__auto___40664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40664,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40664,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40636){
var state_val_40637 = (state_40636[(1)]);
if((state_val_40637 === (7))){
var state_40636__$1 = state_40636;
var statearr_40638_40665 = state_40636__$1;
(statearr_40638_40665[(2)] = null);

(statearr_40638_40665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (1))){
var state_40636__$1 = state_40636;
var statearr_40639_40666 = state_40636__$1;
(statearr_40639_40666[(2)] = null);

(statearr_40639_40666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (4))){
var inst_40600 = (state_40636[(7)]);
var inst_40602 = (inst_40600 < cnt);
var state_40636__$1 = state_40636;
if(cljs.core.truth_(inst_40602)){
var statearr_40640_40667 = state_40636__$1;
(statearr_40640_40667[(1)] = (6));

} else {
var statearr_40641_40668 = state_40636__$1;
(statearr_40641_40668[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (15))){
var inst_40632 = (state_40636[(2)]);
var state_40636__$1 = state_40636;
var statearr_40642_40669 = state_40636__$1;
(statearr_40642_40669[(2)] = inst_40632);

(statearr_40642_40669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (13))){
var inst_40625 = cljs.core.async.close_BANG_.call(null,out);
var state_40636__$1 = state_40636;
var statearr_40643_40670 = state_40636__$1;
(statearr_40643_40670[(2)] = inst_40625);

(statearr_40643_40670[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (6))){
var state_40636__$1 = state_40636;
var statearr_40644_40671 = state_40636__$1;
(statearr_40644_40671[(2)] = null);

(statearr_40644_40671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (3))){
var inst_40634 = (state_40636[(2)]);
var state_40636__$1 = state_40636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40636__$1,inst_40634);
} else {
if((state_val_40637 === (12))){
var inst_40622 = (state_40636[(8)]);
var inst_40622__$1 = (state_40636[(2)]);
var inst_40623 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40622__$1);
var state_40636__$1 = (function (){var statearr_40645 = state_40636;
(statearr_40645[(8)] = inst_40622__$1);

return statearr_40645;
})();
if(cljs.core.truth_(inst_40623)){
var statearr_40646_40672 = state_40636__$1;
(statearr_40646_40672[(1)] = (13));

} else {
var statearr_40647_40673 = state_40636__$1;
(statearr_40647_40673[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (2))){
var inst_40599 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40600 = (0);
var state_40636__$1 = (function (){var statearr_40648 = state_40636;
(statearr_40648[(9)] = inst_40599);

(statearr_40648[(7)] = inst_40600);

return statearr_40648;
})();
var statearr_40649_40674 = state_40636__$1;
(statearr_40649_40674[(2)] = null);

(statearr_40649_40674[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (11))){
var inst_40600 = (state_40636[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40636,(10),Object,null,(9));
var inst_40609 = chs__$1.call(null,inst_40600);
var inst_40610 = done.call(null,inst_40600);
var inst_40611 = cljs.core.async.take_BANG_.call(null,inst_40609,inst_40610);
var state_40636__$1 = state_40636;
var statearr_40650_40675 = state_40636__$1;
(statearr_40650_40675[(2)] = inst_40611);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40636__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (9))){
var inst_40600 = (state_40636[(7)]);
var inst_40613 = (state_40636[(2)]);
var inst_40614 = (inst_40600 + (1));
var inst_40600__$1 = inst_40614;
var state_40636__$1 = (function (){var statearr_40651 = state_40636;
(statearr_40651[(10)] = inst_40613);

(statearr_40651[(7)] = inst_40600__$1);

return statearr_40651;
})();
var statearr_40652_40676 = state_40636__$1;
(statearr_40652_40676[(2)] = null);

(statearr_40652_40676[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (5))){
var inst_40620 = (state_40636[(2)]);
var state_40636__$1 = (function (){var statearr_40653 = state_40636;
(statearr_40653[(11)] = inst_40620);

return statearr_40653;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40636__$1,(12),dchan);
} else {
if((state_val_40637 === (14))){
var inst_40622 = (state_40636[(8)]);
var inst_40627 = cljs.core.apply.call(null,f,inst_40622);
var state_40636__$1 = state_40636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40636__$1,(16),out,inst_40627);
} else {
if((state_val_40637 === (16))){
var inst_40629 = (state_40636[(2)]);
var state_40636__$1 = (function (){var statearr_40654 = state_40636;
(statearr_40654[(12)] = inst_40629);

return statearr_40654;
})();
var statearr_40655_40677 = state_40636__$1;
(statearr_40655_40677[(2)] = null);

(statearr_40655_40677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (10))){
var inst_40604 = (state_40636[(2)]);
var inst_40605 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40636__$1 = (function (){var statearr_40656 = state_40636;
(statearr_40656[(13)] = inst_40604);

return statearr_40656;
})();
var statearr_40657_40678 = state_40636__$1;
(statearr_40657_40678[(2)] = inst_40605);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40636__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40637 === (8))){
var inst_40618 = (state_40636[(2)]);
var state_40636__$1 = state_40636;
var statearr_40658_40679 = state_40636__$1;
(statearr_40658_40679[(2)] = inst_40618);

(statearr_40658_40679[(1)] = (5));


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
});})(c__30624__auto___40664,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30536__auto__,c__30624__auto___40664,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40659[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40659[(1)] = (1));

return statearr_40659;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40636){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40660){if((e40660 instanceof Object)){
var ex__30540__auto__ = e40660;
var statearr_40661_40680 = state_40636;
(statearr_40661_40680[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40681 = state_40636;
state_40636 = G__40681;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40636);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40664,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30626__auto__ = (function (){var statearr_40662 = f__30625__auto__.call(null);
(statearr_40662[(6)] = c__30624__auto___40664);

return statearr_40662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40664,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__40684 = arguments.length;
switch (G__40684) {
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
var c__30624__auto___40738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40738,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40738,out){
return (function (state_40716){
var state_val_40717 = (state_40716[(1)]);
if((state_val_40717 === (7))){
var inst_40696 = (state_40716[(7)]);
var inst_40695 = (state_40716[(8)]);
var inst_40695__$1 = (state_40716[(2)]);
var inst_40696__$1 = cljs.core.nth.call(null,inst_40695__$1,(0),null);
var inst_40697 = cljs.core.nth.call(null,inst_40695__$1,(1),null);
var inst_40698 = (inst_40696__$1 == null);
var state_40716__$1 = (function (){var statearr_40718 = state_40716;
(statearr_40718[(7)] = inst_40696__$1);

(statearr_40718[(9)] = inst_40697);

(statearr_40718[(8)] = inst_40695__$1);

return statearr_40718;
})();
if(cljs.core.truth_(inst_40698)){
var statearr_40719_40739 = state_40716__$1;
(statearr_40719_40739[(1)] = (8));

} else {
var statearr_40720_40740 = state_40716__$1;
(statearr_40720_40740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40717 === (1))){
var inst_40685 = cljs.core.vec.call(null,chs);
var inst_40686 = inst_40685;
var state_40716__$1 = (function (){var statearr_40721 = state_40716;
(statearr_40721[(10)] = inst_40686);

return statearr_40721;
})();
var statearr_40722_40741 = state_40716__$1;
(statearr_40722_40741[(2)] = null);

(statearr_40722_40741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40717 === (4))){
var inst_40686 = (state_40716[(10)]);
var state_40716__$1 = state_40716;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40716__$1,(7),inst_40686);
} else {
if((state_val_40717 === (6))){
var inst_40712 = (state_40716[(2)]);
var state_40716__$1 = state_40716;
var statearr_40723_40742 = state_40716__$1;
(statearr_40723_40742[(2)] = inst_40712);

(statearr_40723_40742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40717 === (3))){
var inst_40714 = (state_40716[(2)]);
var state_40716__$1 = state_40716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40716__$1,inst_40714);
} else {
if((state_val_40717 === (2))){
var inst_40686 = (state_40716[(10)]);
var inst_40688 = cljs.core.count.call(null,inst_40686);
var inst_40689 = (inst_40688 > (0));
var state_40716__$1 = state_40716;
if(cljs.core.truth_(inst_40689)){
var statearr_40725_40743 = state_40716__$1;
(statearr_40725_40743[(1)] = (4));

} else {
var statearr_40726_40744 = state_40716__$1;
(statearr_40726_40744[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40717 === (11))){
var inst_40686 = (state_40716[(10)]);
var inst_40705 = (state_40716[(2)]);
var tmp40724 = inst_40686;
var inst_40686__$1 = tmp40724;
var state_40716__$1 = (function (){var statearr_40727 = state_40716;
(statearr_40727[(10)] = inst_40686__$1);

(statearr_40727[(11)] = inst_40705);

return statearr_40727;
})();
var statearr_40728_40745 = state_40716__$1;
(statearr_40728_40745[(2)] = null);

(statearr_40728_40745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40717 === (9))){
var inst_40696 = (state_40716[(7)]);
var state_40716__$1 = state_40716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40716__$1,(11),out,inst_40696);
} else {
if((state_val_40717 === (5))){
var inst_40710 = cljs.core.async.close_BANG_.call(null,out);
var state_40716__$1 = state_40716;
var statearr_40729_40746 = state_40716__$1;
(statearr_40729_40746[(2)] = inst_40710);

(statearr_40729_40746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40717 === (10))){
var inst_40708 = (state_40716[(2)]);
var state_40716__$1 = state_40716;
var statearr_40730_40747 = state_40716__$1;
(statearr_40730_40747[(2)] = inst_40708);

(statearr_40730_40747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40717 === (8))){
var inst_40696 = (state_40716[(7)]);
var inst_40697 = (state_40716[(9)]);
var inst_40695 = (state_40716[(8)]);
var inst_40686 = (state_40716[(10)]);
var inst_40700 = (function (){var cs = inst_40686;
var vec__40691 = inst_40695;
var v = inst_40696;
var c = inst_40697;
return ((function (cs,vec__40691,v,c,inst_40696,inst_40697,inst_40695,inst_40686,state_val_40717,c__30624__auto___40738,out){
return (function (p1__40682_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40682_SHARP_);
});
;})(cs,vec__40691,v,c,inst_40696,inst_40697,inst_40695,inst_40686,state_val_40717,c__30624__auto___40738,out))
})();
var inst_40701 = cljs.core.filterv.call(null,inst_40700,inst_40686);
var inst_40686__$1 = inst_40701;
var state_40716__$1 = (function (){var statearr_40731 = state_40716;
(statearr_40731[(10)] = inst_40686__$1);

return statearr_40731;
})();
var statearr_40732_40748 = state_40716__$1;
(statearr_40732_40748[(2)] = null);

(statearr_40732_40748[(1)] = (2));


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
});})(c__30624__auto___40738,out))
;
return ((function (switch__30536__auto__,c__30624__auto___40738,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40733 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40733[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40733[(1)] = (1));

return statearr_40733;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40716){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40734){if((e40734 instanceof Object)){
var ex__30540__auto__ = e40734;
var statearr_40735_40749 = state_40716;
(statearr_40735_40749[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40750 = state_40716;
state_40716 = G__40750;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40716);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40738,out))
})();
var state__30626__auto__ = (function (){var statearr_40736 = f__30625__auto__.call(null);
(statearr_40736[(6)] = c__30624__auto___40738);

return statearr_40736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40738,out))
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
var G__40752 = arguments.length;
switch (G__40752) {
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
var c__30624__auto___40797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40797,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40797,out){
return (function (state_40776){
var state_val_40777 = (state_40776[(1)]);
if((state_val_40777 === (7))){
var inst_40758 = (state_40776[(7)]);
var inst_40758__$1 = (state_40776[(2)]);
var inst_40759 = (inst_40758__$1 == null);
var inst_40760 = cljs.core.not.call(null,inst_40759);
var state_40776__$1 = (function (){var statearr_40778 = state_40776;
(statearr_40778[(7)] = inst_40758__$1);

return statearr_40778;
})();
if(inst_40760){
var statearr_40779_40798 = state_40776__$1;
(statearr_40779_40798[(1)] = (8));

} else {
var statearr_40780_40799 = state_40776__$1;
(statearr_40780_40799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (1))){
var inst_40753 = (0);
var state_40776__$1 = (function (){var statearr_40781 = state_40776;
(statearr_40781[(8)] = inst_40753);

return statearr_40781;
})();
var statearr_40782_40800 = state_40776__$1;
(statearr_40782_40800[(2)] = null);

(statearr_40782_40800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (4))){
var state_40776__$1 = state_40776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40776__$1,(7),ch);
} else {
if((state_val_40777 === (6))){
var inst_40771 = (state_40776[(2)]);
var state_40776__$1 = state_40776;
var statearr_40783_40801 = state_40776__$1;
(statearr_40783_40801[(2)] = inst_40771);

(statearr_40783_40801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (3))){
var inst_40773 = (state_40776[(2)]);
var inst_40774 = cljs.core.async.close_BANG_.call(null,out);
var state_40776__$1 = (function (){var statearr_40784 = state_40776;
(statearr_40784[(9)] = inst_40773);

return statearr_40784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40776__$1,inst_40774);
} else {
if((state_val_40777 === (2))){
var inst_40753 = (state_40776[(8)]);
var inst_40755 = (inst_40753 < n);
var state_40776__$1 = state_40776;
if(cljs.core.truth_(inst_40755)){
var statearr_40785_40802 = state_40776__$1;
(statearr_40785_40802[(1)] = (4));

} else {
var statearr_40786_40803 = state_40776__$1;
(statearr_40786_40803[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (11))){
var inst_40753 = (state_40776[(8)]);
var inst_40763 = (state_40776[(2)]);
var inst_40764 = (inst_40753 + (1));
var inst_40753__$1 = inst_40764;
var state_40776__$1 = (function (){var statearr_40787 = state_40776;
(statearr_40787[(10)] = inst_40763);

(statearr_40787[(8)] = inst_40753__$1);

return statearr_40787;
})();
var statearr_40788_40804 = state_40776__$1;
(statearr_40788_40804[(2)] = null);

(statearr_40788_40804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (9))){
var state_40776__$1 = state_40776;
var statearr_40789_40805 = state_40776__$1;
(statearr_40789_40805[(2)] = null);

(statearr_40789_40805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (5))){
var state_40776__$1 = state_40776;
var statearr_40790_40806 = state_40776__$1;
(statearr_40790_40806[(2)] = null);

(statearr_40790_40806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (10))){
var inst_40768 = (state_40776[(2)]);
var state_40776__$1 = state_40776;
var statearr_40791_40807 = state_40776__$1;
(statearr_40791_40807[(2)] = inst_40768);

(statearr_40791_40807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (8))){
var inst_40758 = (state_40776[(7)]);
var state_40776__$1 = state_40776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40776__$1,(11),out,inst_40758);
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
});})(c__30624__auto___40797,out))
;
return ((function (switch__30536__auto__,c__30624__auto___40797,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40792[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40792[(1)] = (1));

return statearr_40792;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40776){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40793){if((e40793 instanceof Object)){
var ex__30540__auto__ = e40793;
var statearr_40794_40808 = state_40776;
(statearr_40794_40808[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40809 = state_40776;
state_40776 = G__40809;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40776);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40797,out))
})();
var state__30626__auto__ = (function (){var statearr_40795 = f__30625__auto__.call(null);
(statearr_40795[(6)] = c__30624__auto___40797);

return statearr_40795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40797,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40811 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40811 = (function (f,ch,meta40812){
this.f = f;
this.ch = ch;
this.meta40812 = meta40812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40813,meta40812__$1){
var self__ = this;
var _40813__$1 = this;
return (new cljs.core.async.t_cljs$core$async40811(self__.f,self__.ch,meta40812__$1));
});

cljs.core.async.t_cljs$core$async40811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40813){
var self__ = this;
var _40813__$1 = this;
return self__.meta40812;
});

cljs.core.async.t_cljs$core$async40811.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40811.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40811.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40811.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40811.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40814 = (function (f,ch,meta40812,_,fn1,meta40815){
this.f = f;
this.ch = ch;
this.meta40812 = meta40812;
this._ = _;
this.fn1 = fn1;
this.meta40815 = meta40815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40816,meta40815__$1){
var self__ = this;
var _40816__$1 = this;
return (new cljs.core.async.t_cljs$core$async40814(self__.f,self__.ch,self__.meta40812,self__._,self__.fn1,meta40815__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40814.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40816){
var self__ = this;
var _40816__$1 = this;
return self__.meta40815;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40814.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40814.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40814.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40814.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40810_SHARP_){
return f1.call(null,(((p1__40810_SHARP_ == null))?null:self__.f.call(null,p1__40810_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40814.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40812","meta40812",-45828797,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40811","cljs.core.async/t_cljs$core$async40811",-985673583,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40815","meta40815",-1916482098,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40814.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40814";

cljs.core.async.t_cljs$core$async40814.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40814");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40814 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40814(f__$1,ch__$1,meta40812__$1,___$2,fn1__$1,meta40815){
return (new cljs.core.async.t_cljs$core$async40814(f__$1,ch__$1,meta40812__$1,___$2,fn1__$1,meta40815));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40814(self__.f,self__.ch,self__.meta40812,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async40811.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40811.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40812","meta40812",-45828797,null)], null);
});

cljs.core.async.t_cljs$core$async40811.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40811";

cljs.core.async.t_cljs$core$async40811.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40811");
});

cljs.core.async.__GT_t_cljs$core$async40811 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40811(f__$1,ch__$1,meta40812){
return (new cljs.core.async.t_cljs$core$async40811(f__$1,ch__$1,meta40812));
});

}

return (new cljs.core.async.t_cljs$core$async40811(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40817 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40817 = (function (f,ch,meta40818){
this.f = f;
this.ch = ch;
this.meta40818 = meta40818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40819,meta40818__$1){
var self__ = this;
var _40819__$1 = this;
return (new cljs.core.async.t_cljs$core$async40817(self__.f,self__.ch,meta40818__$1));
});

cljs.core.async.t_cljs$core$async40817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40819){
var self__ = this;
var _40819__$1 = this;
return self__.meta40818;
});

cljs.core.async.t_cljs$core$async40817.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40817.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40817.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40817.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40817.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40817.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40818","meta40818",-283093088,null)], null);
});

cljs.core.async.t_cljs$core$async40817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40817";

cljs.core.async.t_cljs$core$async40817.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40817");
});

cljs.core.async.__GT_t_cljs$core$async40817 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40817(f__$1,ch__$1,meta40818){
return (new cljs.core.async.t_cljs$core$async40817(f__$1,ch__$1,meta40818));
});

}

return (new cljs.core.async.t_cljs$core$async40817(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40820 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40820 = (function (p,ch,meta40821){
this.p = p;
this.ch = ch;
this.meta40821 = meta40821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40822,meta40821__$1){
var self__ = this;
var _40822__$1 = this;
return (new cljs.core.async.t_cljs$core$async40820(self__.p,self__.ch,meta40821__$1));
});

cljs.core.async.t_cljs$core$async40820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40822){
var self__ = this;
var _40822__$1 = this;
return self__.meta40821;
});

cljs.core.async.t_cljs$core$async40820.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40820.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40820.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40820.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40820.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40820.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40820.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40821","meta40821",656270242,null)], null);
});

cljs.core.async.t_cljs$core$async40820.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40820";

cljs.core.async.t_cljs$core$async40820.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40820");
});

cljs.core.async.__GT_t_cljs$core$async40820 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40820(p__$1,ch__$1,meta40821){
return (new cljs.core.async.t_cljs$core$async40820(p__$1,ch__$1,meta40821));
});

}

return (new cljs.core.async.t_cljs$core$async40820(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40824 = arguments.length;
switch (G__40824) {
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
var c__30624__auto___40864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40864,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40864,out){
return (function (state_40845){
var state_val_40846 = (state_40845[(1)]);
if((state_val_40846 === (7))){
var inst_40841 = (state_40845[(2)]);
var state_40845__$1 = state_40845;
var statearr_40847_40865 = state_40845__$1;
(statearr_40847_40865[(2)] = inst_40841);

(statearr_40847_40865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (1))){
var state_40845__$1 = state_40845;
var statearr_40848_40866 = state_40845__$1;
(statearr_40848_40866[(2)] = null);

(statearr_40848_40866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (4))){
var inst_40827 = (state_40845[(7)]);
var inst_40827__$1 = (state_40845[(2)]);
var inst_40828 = (inst_40827__$1 == null);
var state_40845__$1 = (function (){var statearr_40849 = state_40845;
(statearr_40849[(7)] = inst_40827__$1);

return statearr_40849;
})();
if(cljs.core.truth_(inst_40828)){
var statearr_40850_40867 = state_40845__$1;
(statearr_40850_40867[(1)] = (5));

} else {
var statearr_40851_40868 = state_40845__$1;
(statearr_40851_40868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (6))){
var inst_40827 = (state_40845[(7)]);
var inst_40832 = p.call(null,inst_40827);
var state_40845__$1 = state_40845;
if(cljs.core.truth_(inst_40832)){
var statearr_40852_40869 = state_40845__$1;
(statearr_40852_40869[(1)] = (8));

} else {
var statearr_40853_40870 = state_40845__$1;
(statearr_40853_40870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (3))){
var inst_40843 = (state_40845[(2)]);
var state_40845__$1 = state_40845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40845__$1,inst_40843);
} else {
if((state_val_40846 === (2))){
var state_40845__$1 = state_40845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40845__$1,(4),ch);
} else {
if((state_val_40846 === (11))){
var inst_40835 = (state_40845[(2)]);
var state_40845__$1 = state_40845;
var statearr_40854_40871 = state_40845__$1;
(statearr_40854_40871[(2)] = inst_40835);

(statearr_40854_40871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (9))){
var state_40845__$1 = state_40845;
var statearr_40855_40872 = state_40845__$1;
(statearr_40855_40872[(2)] = null);

(statearr_40855_40872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (5))){
var inst_40830 = cljs.core.async.close_BANG_.call(null,out);
var state_40845__$1 = state_40845;
var statearr_40856_40873 = state_40845__$1;
(statearr_40856_40873[(2)] = inst_40830);

(statearr_40856_40873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (10))){
var inst_40838 = (state_40845[(2)]);
var state_40845__$1 = (function (){var statearr_40857 = state_40845;
(statearr_40857[(8)] = inst_40838);

return statearr_40857;
})();
var statearr_40858_40874 = state_40845__$1;
(statearr_40858_40874[(2)] = null);

(statearr_40858_40874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40846 === (8))){
var inst_40827 = (state_40845[(7)]);
var state_40845__$1 = state_40845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40845__$1,(11),out,inst_40827);
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
});})(c__30624__auto___40864,out))
;
return ((function (switch__30536__auto__,c__30624__auto___40864,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40859 = [null,null,null,null,null,null,null,null,null];
(statearr_40859[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40859[(1)] = (1));

return statearr_40859;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40845){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40860){if((e40860 instanceof Object)){
var ex__30540__auto__ = e40860;
var statearr_40861_40875 = state_40845;
(statearr_40861_40875[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40876 = state_40845;
state_40845 = G__40876;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40845);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40864,out))
})();
var state__30626__auto__ = (function (){var statearr_40862 = f__30625__auto__.call(null);
(statearr_40862[(6)] = c__30624__auto___40864);

return statearr_40862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40864,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40878 = arguments.length;
switch (G__40878) {
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
return (function (state_40941){
var state_val_40942 = (state_40941[(1)]);
if((state_val_40942 === (7))){
var inst_40937 = (state_40941[(2)]);
var state_40941__$1 = state_40941;
var statearr_40943_40981 = state_40941__$1;
(statearr_40943_40981[(2)] = inst_40937);

(statearr_40943_40981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (20))){
var inst_40907 = (state_40941[(7)]);
var inst_40918 = (state_40941[(2)]);
var inst_40919 = cljs.core.next.call(null,inst_40907);
var inst_40893 = inst_40919;
var inst_40894 = null;
var inst_40895 = (0);
var inst_40896 = (0);
var state_40941__$1 = (function (){var statearr_40944 = state_40941;
(statearr_40944[(8)] = inst_40896);

(statearr_40944[(9)] = inst_40918);

(statearr_40944[(10)] = inst_40894);

(statearr_40944[(11)] = inst_40893);

(statearr_40944[(12)] = inst_40895);

return statearr_40944;
})();
var statearr_40945_40982 = state_40941__$1;
(statearr_40945_40982[(2)] = null);

(statearr_40945_40982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (1))){
var state_40941__$1 = state_40941;
var statearr_40946_40983 = state_40941__$1;
(statearr_40946_40983[(2)] = null);

(statearr_40946_40983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (4))){
var inst_40882 = (state_40941[(13)]);
var inst_40882__$1 = (state_40941[(2)]);
var inst_40883 = (inst_40882__$1 == null);
var state_40941__$1 = (function (){var statearr_40947 = state_40941;
(statearr_40947[(13)] = inst_40882__$1);

return statearr_40947;
})();
if(cljs.core.truth_(inst_40883)){
var statearr_40948_40984 = state_40941__$1;
(statearr_40948_40984[(1)] = (5));

} else {
var statearr_40949_40985 = state_40941__$1;
(statearr_40949_40985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (15))){
var state_40941__$1 = state_40941;
var statearr_40953_40986 = state_40941__$1;
(statearr_40953_40986[(2)] = null);

(statearr_40953_40986[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (21))){
var state_40941__$1 = state_40941;
var statearr_40954_40987 = state_40941__$1;
(statearr_40954_40987[(2)] = null);

(statearr_40954_40987[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (13))){
var inst_40896 = (state_40941[(8)]);
var inst_40894 = (state_40941[(10)]);
var inst_40893 = (state_40941[(11)]);
var inst_40895 = (state_40941[(12)]);
var inst_40903 = (state_40941[(2)]);
var inst_40904 = (inst_40896 + (1));
var tmp40950 = inst_40894;
var tmp40951 = inst_40893;
var tmp40952 = inst_40895;
var inst_40893__$1 = tmp40951;
var inst_40894__$1 = tmp40950;
var inst_40895__$1 = tmp40952;
var inst_40896__$1 = inst_40904;
var state_40941__$1 = (function (){var statearr_40955 = state_40941;
(statearr_40955[(14)] = inst_40903);

(statearr_40955[(8)] = inst_40896__$1);

(statearr_40955[(10)] = inst_40894__$1);

(statearr_40955[(11)] = inst_40893__$1);

(statearr_40955[(12)] = inst_40895__$1);

return statearr_40955;
})();
var statearr_40956_40988 = state_40941__$1;
(statearr_40956_40988[(2)] = null);

(statearr_40956_40988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (22))){
var state_40941__$1 = state_40941;
var statearr_40957_40989 = state_40941__$1;
(statearr_40957_40989[(2)] = null);

(statearr_40957_40989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (6))){
var inst_40882 = (state_40941[(13)]);
var inst_40891 = f.call(null,inst_40882);
var inst_40892 = cljs.core.seq.call(null,inst_40891);
var inst_40893 = inst_40892;
var inst_40894 = null;
var inst_40895 = (0);
var inst_40896 = (0);
var state_40941__$1 = (function (){var statearr_40958 = state_40941;
(statearr_40958[(8)] = inst_40896);

(statearr_40958[(10)] = inst_40894);

(statearr_40958[(11)] = inst_40893);

(statearr_40958[(12)] = inst_40895);

return statearr_40958;
})();
var statearr_40959_40990 = state_40941__$1;
(statearr_40959_40990[(2)] = null);

(statearr_40959_40990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (17))){
var inst_40907 = (state_40941[(7)]);
var inst_40911 = cljs.core.chunk_first.call(null,inst_40907);
var inst_40912 = cljs.core.chunk_rest.call(null,inst_40907);
var inst_40913 = cljs.core.count.call(null,inst_40911);
var inst_40893 = inst_40912;
var inst_40894 = inst_40911;
var inst_40895 = inst_40913;
var inst_40896 = (0);
var state_40941__$1 = (function (){var statearr_40960 = state_40941;
(statearr_40960[(8)] = inst_40896);

(statearr_40960[(10)] = inst_40894);

(statearr_40960[(11)] = inst_40893);

(statearr_40960[(12)] = inst_40895);

return statearr_40960;
})();
var statearr_40961_40991 = state_40941__$1;
(statearr_40961_40991[(2)] = null);

(statearr_40961_40991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (3))){
var inst_40939 = (state_40941[(2)]);
var state_40941__$1 = state_40941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40941__$1,inst_40939);
} else {
if((state_val_40942 === (12))){
var inst_40927 = (state_40941[(2)]);
var state_40941__$1 = state_40941;
var statearr_40962_40992 = state_40941__$1;
(statearr_40962_40992[(2)] = inst_40927);

(statearr_40962_40992[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (2))){
var state_40941__$1 = state_40941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40941__$1,(4),in$);
} else {
if((state_val_40942 === (23))){
var inst_40935 = (state_40941[(2)]);
var state_40941__$1 = state_40941;
var statearr_40963_40993 = state_40941__$1;
(statearr_40963_40993[(2)] = inst_40935);

(statearr_40963_40993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (19))){
var inst_40922 = (state_40941[(2)]);
var state_40941__$1 = state_40941;
var statearr_40964_40994 = state_40941__$1;
(statearr_40964_40994[(2)] = inst_40922);

(statearr_40964_40994[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (11))){
var inst_40907 = (state_40941[(7)]);
var inst_40893 = (state_40941[(11)]);
var inst_40907__$1 = cljs.core.seq.call(null,inst_40893);
var state_40941__$1 = (function (){var statearr_40965 = state_40941;
(statearr_40965[(7)] = inst_40907__$1);

return statearr_40965;
})();
if(inst_40907__$1){
var statearr_40966_40995 = state_40941__$1;
(statearr_40966_40995[(1)] = (14));

} else {
var statearr_40967_40996 = state_40941__$1;
(statearr_40967_40996[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (9))){
var inst_40929 = (state_40941[(2)]);
var inst_40930 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40941__$1 = (function (){var statearr_40968 = state_40941;
(statearr_40968[(15)] = inst_40929);

return statearr_40968;
})();
if(cljs.core.truth_(inst_40930)){
var statearr_40969_40997 = state_40941__$1;
(statearr_40969_40997[(1)] = (21));

} else {
var statearr_40970_40998 = state_40941__$1;
(statearr_40970_40998[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (5))){
var inst_40885 = cljs.core.async.close_BANG_.call(null,out);
var state_40941__$1 = state_40941;
var statearr_40971_40999 = state_40941__$1;
(statearr_40971_40999[(2)] = inst_40885);

(statearr_40971_40999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (14))){
var inst_40907 = (state_40941[(7)]);
var inst_40909 = cljs.core.chunked_seq_QMARK_.call(null,inst_40907);
var state_40941__$1 = state_40941;
if(inst_40909){
var statearr_40972_41000 = state_40941__$1;
(statearr_40972_41000[(1)] = (17));

} else {
var statearr_40973_41001 = state_40941__$1;
(statearr_40973_41001[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (16))){
var inst_40925 = (state_40941[(2)]);
var state_40941__$1 = state_40941;
var statearr_40974_41002 = state_40941__$1;
(statearr_40974_41002[(2)] = inst_40925);

(statearr_40974_41002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40942 === (10))){
var inst_40896 = (state_40941[(8)]);
var inst_40894 = (state_40941[(10)]);
var inst_40901 = cljs.core._nth.call(null,inst_40894,inst_40896);
var state_40941__$1 = state_40941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40941__$1,(13),out,inst_40901);
} else {
if((state_val_40942 === (18))){
var inst_40907 = (state_40941[(7)]);
var inst_40916 = cljs.core.first.call(null,inst_40907);
var state_40941__$1 = state_40941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40941__$1,(20),out,inst_40916);
} else {
if((state_val_40942 === (8))){
var inst_40896 = (state_40941[(8)]);
var inst_40895 = (state_40941[(12)]);
var inst_40898 = (inst_40896 < inst_40895);
var inst_40899 = inst_40898;
var state_40941__$1 = state_40941;
if(cljs.core.truth_(inst_40899)){
var statearr_40975_41003 = state_40941__$1;
(statearr_40975_41003[(1)] = (10));

} else {
var statearr_40976_41004 = state_40941__$1;
(statearr_40976_41004[(1)] = (11));

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
var statearr_40977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40977[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__);

(statearr_40977[(1)] = (1));

return statearr_40977;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____1 = (function (state_40941){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40978){if((e40978 instanceof Object)){
var ex__30540__auto__ = e40978;
var statearr_40979_41005 = state_40941;
(statearr_40979_41005[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41006 = state_40941;
state_40941 = G__41006;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__ = function(state_40941){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____1.call(this,state_40941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_40980 = f__30625__auto__.call(null);
(statearr_40980[(6)] = c__30624__auto__);

return statearr_40980;
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
var G__41008 = arguments.length;
switch (G__41008) {
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
var G__41011 = arguments.length;
switch (G__41011) {
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
var G__41014 = arguments.length;
switch (G__41014) {
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
var c__30624__auto___41061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___41061,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___41061,out){
return (function (state_41038){
var state_val_41039 = (state_41038[(1)]);
if((state_val_41039 === (7))){
var inst_41033 = (state_41038[(2)]);
var state_41038__$1 = state_41038;
var statearr_41040_41062 = state_41038__$1;
(statearr_41040_41062[(2)] = inst_41033);

(statearr_41040_41062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (1))){
var inst_41015 = null;
var state_41038__$1 = (function (){var statearr_41041 = state_41038;
(statearr_41041[(7)] = inst_41015);

return statearr_41041;
})();
var statearr_41042_41063 = state_41038__$1;
(statearr_41042_41063[(2)] = null);

(statearr_41042_41063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (4))){
var inst_41018 = (state_41038[(8)]);
var inst_41018__$1 = (state_41038[(2)]);
var inst_41019 = (inst_41018__$1 == null);
var inst_41020 = cljs.core.not.call(null,inst_41019);
var state_41038__$1 = (function (){var statearr_41043 = state_41038;
(statearr_41043[(8)] = inst_41018__$1);

return statearr_41043;
})();
if(inst_41020){
var statearr_41044_41064 = state_41038__$1;
(statearr_41044_41064[(1)] = (5));

} else {
var statearr_41045_41065 = state_41038__$1;
(statearr_41045_41065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (6))){
var state_41038__$1 = state_41038;
var statearr_41046_41066 = state_41038__$1;
(statearr_41046_41066[(2)] = null);

(statearr_41046_41066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (3))){
var inst_41035 = (state_41038[(2)]);
var inst_41036 = cljs.core.async.close_BANG_.call(null,out);
var state_41038__$1 = (function (){var statearr_41047 = state_41038;
(statearr_41047[(9)] = inst_41035);

return statearr_41047;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41038__$1,inst_41036);
} else {
if((state_val_41039 === (2))){
var state_41038__$1 = state_41038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41038__$1,(4),ch);
} else {
if((state_val_41039 === (11))){
var inst_41018 = (state_41038[(8)]);
var inst_41027 = (state_41038[(2)]);
var inst_41015 = inst_41018;
var state_41038__$1 = (function (){var statearr_41048 = state_41038;
(statearr_41048[(10)] = inst_41027);

(statearr_41048[(7)] = inst_41015);

return statearr_41048;
})();
var statearr_41049_41067 = state_41038__$1;
(statearr_41049_41067[(2)] = null);

(statearr_41049_41067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (9))){
var inst_41018 = (state_41038[(8)]);
var state_41038__$1 = state_41038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41038__$1,(11),out,inst_41018);
} else {
if((state_val_41039 === (5))){
var inst_41015 = (state_41038[(7)]);
var inst_41018 = (state_41038[(8)]);
var inst_41022 = cljs.core._EQ_.call(null,inst_41018,inst_41015);
var state_41038__$1 = state_41038;
if(inst_41022){
var statearr_41051_41068 = state_41038__$1;
(statearr_41051_41068[(1)] = (8));

} else {
var statearr_41052_41069 = state_41038__$1;
(statearr_41052_41069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (10))){
var inst_41030 = (state_41038[(2)]);
var state_41038__$1 = state_41038;
var statearr_41053_41070 = state_41038__$1;
(statearr_41053_41070[(2)] = inst_41030);

(statearr_41053_41070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (8))){
var inst_41015 = (state_41038[(7)]);
var tmp41050 = inst_41015;
var inst_41015__$1 = tmp41050;
var state_41038__$1 = (function (){var statearr_41054 = state_41038;
(statearr_41054[(7)] = inst_41015__$1);

return statearr_41054;
})();
var statearr_41055_41071 = state_41038__$1;
(statearr_41055_41071[(2)] = null);

(statearr_41055_41071[(1)] = (2));


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
});})(c__30624__auto___41061,out))
;
return ((function (switch__30536__auto__,c__30624__auto___41061,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_41056 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41056[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_41056[(1)] = (1));

return statearr_41056;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_41038){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_41038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e41057){if((e41057 instanceof Object)){
var ex__30540__auto__ = e41057;
var statearr_41058_41072 = state_41038;
(statearr_41058_41072[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41073 = state_41038;
state_41038 = G__41073;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_41038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_41038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___41061,out))
})();
var state__30626__auto__ = (function (){var statearr_41059 = f__30625__auto__.call(null);
(statearr_41059[(6)] = c__30624__auto___41061);

return statearr_41059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___41061,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41075 = arguments.length;
switch (G__41075) {
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
var c__30624__auto___41141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___41141,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___41141,out){
return (function (state_41113){
var state_val_41114 = (state_41113[(1)]);
if((state_val_41114 === (7))){
var inst_41109 = (state_41113[(2)]);
var state_41113__$1 = state_41113;
var statearr_41115_41142 = state_41113__$1;
(statearr_41115_41142[(2)] = inst_41109);

(statearr_41115_41142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (1))){
var inst_41076 = (new Array(n));
var inst_41077 = inst_41076;
var inst_41078 = (0);
var state_41113__$1 = (function (){var statearr_41116 = state_41113;
(statearr_41116[(7)] = inst_41077);

(statearr_41116[(8)] = inst_41078);

return statearr_41116;
})();
var statearr_41117_41143 = state_41113__$1;
(statearr_41117_41143[(2)] = null);

(statearr_41117_41143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (4))){
var inst_41081 = (state_41113[(9)]);
var inst_41081__$1 = (state_41113[(2)]);
var inst_41082 = (inst_41081__$1 == null);
var inst_41083 = cljs.core.not.call(null,inst_41082);
var state_41113__$1 = (function (){var statearr_41118 = state_41113;
(statearr_41118[(9)] = inst_41081__$1);

return statearr_41118;
})();
if(inst_41083){
var statearr_41119_41144 = state_41113__$1;
(statearr_41119_41144[(1)] = (5));

} else {
var statearr_41120_41145 = state_41113__$1;
(statearr_41120_41145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (15))){
var inst_41103 = (state_41113[(2)]);
var state_41113__$1 = state_41113;
var statearr_41121_41146 = state_41113__$1;
(statearr_41121_41146[(2)] = inst_41103);

(statearr_41121_41146[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (13))){
var state_41113__$1 = state_41113;
var statearr_41122_41147 = state_41113__$1;
(statearr_41122_41147[(2)] = null);

(statearr_41122_41147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (6))){
var inst_41078 = (state_41113[(8)]);
var inst_41099 = (inst_41078 > (0));
var state_41113__$1 = state_41113;
if(cljs.core.truth_(inst_41099)){
var statearr_41123_41148 = state_41113__$1;
(statearr_41123_41148[(1)] = (12));

} else {
var statearr_41124_41149 = state_41113__$1;
(statearr_41124_41149[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (3))){
var inst_41111 = (state_41113[(2)]);
var state_41113__$1 = state_41113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41113__$1,inst_41111);
} else {
if((state_val_41114 === (12))){
var inst_41077 = (state_41113[(7)]);
var inst_41101 = cljs.core.vec.call(null,inst_41077);
var state_41113__$1 = state_41113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41113__$1,(15),out,inst_41101);
} else {
if((state_val_41114 === (2))){
var state_41113__$1 = state_41113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41113__$1,(4),ch);
} else {
if((state_val_41114 === (11))){
var inst_41093 = (state_41113[(2)]);
var inst_41094 = (new Array(n));
var inst_41077 = inst_41094;
var inst_41078 = (0);
var state_41113__$1 = (function (){var statearr_41125 = state_41113;
(statearr_41125[(7)] = inst_41077);

(statearr_41125[(10)] = inst_41093);

(statearr_41125[(8)] = inst_41078);

return statearr_41125;
})();
var statearr_41126_41150 = state_41113__$1;
(statearr_41126_41150[(2)] = null);

(statearr_41126_41150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (9))){
var inst_41077 = (state_41113[(7)]);
var inst_41091 = cljs.core.vec.call(null,inst_41077);
var state_41113__$1 = state_41113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41113__$1,(11),out,inst_41091);
} else {
if((state_val_41114 === (5))){
var inst_41077 = (state_41113[(7)]);
var inst_41081 = (state_41113[(9)]);
var inst_41078 = (state_41113[(8)]);
var inst_41086 = (state_41113[(11)]);
var inst_41085 = (inst_41077[inst_41078] = inst_41081);
var inst_41086__$1 = (inst_41078 + (1));
var inst_41087 = (inst_41086__$1 < n);
var state_41113__$1 = (function (){var statearr_41127 = state_41113;
(statearr_41127[(11)] = inst_41086__$1);

(statearr_41127[(12)] = inst_41085);

return statearr_41127;
})();
if(cljs.core.truth_(inst_41087)){
var statearr_41128_41151 = state_41113__$1;
(statearr_41128_41151[(1)] = (8));

} else {
var statearr_41129_41152 = state_41113__$1;
(statearr_41129_41152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (14))){
var inst_41106 = (state_41113[(2)]);
var inst_41107 = cljs.core.async.close_BANG_.call(null,out);
var state_41113__$1 = (function (){var statearr_41131 = state_41113;
(statearr_41131[(13)] = inst_41106);

return statearr_41131;
})();
var statearr_41132_41153 = state_41113__$1;
(statearr_41132_41153[(2)] = inst_41107);

(statearr_41132_41153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (10))){
var inst_41097 = (state_41113[(2)]);
var state_41113__$1 = state_41113;
var statearr_41133_41154 = state_41113__$1;
(statearr_41133_41154[(2)] = inst_41097);

(statearr_41133_41154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (8))){
var inst_41077 = (state_41113[(7)]);
var inst_41086 = (state_41113[(11)]);
var tmp41130 = inst_41077;
var inst_41077__$1 = tmp41130;
var inst_41078 = inst_41086;
var state_41113__$1 = (function (){var statearr_41134 = state_41113;
(statearr_41134[(7)] = inst_41077__$1);

(statearr_41134[(8)] = inst_41078);

return statearr_41134;
})();
var statearr_41135_41155 = state_41113__$1;
(statearr_41135_41155[(2)] = null);

(statearr_41135_41155[(1)] = (2));


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
});})(c__30624__auto___41141,out))
;
return ((function (switch__30536__auto__,c__30624__auto___41141,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_41136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41136[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_41136[(1)] = (1));

return statearr_41136;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_41113){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_41113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e41137){if((e41137 instanceof Object)){
var ex__30540__auto__ = e41137;
var statearr_41138_41156 = state_41113;
(statearr_41138_41156[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41157 = state_41113;
state_41113 = G__41157;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_41113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_41113);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___41141,out))
})();
var state__30626__auto__ = (function (){var statearr_41139 = f__30625__auto__.call(null);
(statearr_41139[(6)] = c__30624__auto___41141);

return statearr_41139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___41141,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41159 = arguments.length;
switch (G__41159) {
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
var c__30624__auto___41229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___41229,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___41229,out){
return (function (state_41201){
var state_val_41202 = (state_41201[(1)]);
if((state_val_41202 === (7))){
var inst_41197 = (state_41201[(2)]);
var state_41201__$1 = state_41201;
var statearr_41203_41230 = state_41201__$1;
(statearr_41203_41230[(2)] = inst_41197);

(statearr_41203_41230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (1))){
var inst_41160 = [];
var inst_41161 = inst_41160;
var inst_41162 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41201__$1 = (function (){var statearr_41204 = state_41201;
(statearr_41204[(7)] = inst_41162);

(statearr_41204[(8)] = inst_41161);

return statearr_41204;
})();
var statearr_41205_41231 = state_41201__$1;
(statearr_41205_41231[(2)] = null);

(statearr_41205_41231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (4))){
var inst_41165 = (state_41201[(9)]);
var inst_41165__$1 = (state_41201[(2)]);
var inst_41166 = (inst_41165__$1 == null);
var inst_41167 = cljs.core.not.call(null,inst_41166);
var state_41201__$1 = (function (){var statearr_41206 = state_41201;
(statearr_41206[(9)] = inst_41165__$1);

return statearr_41206;
})();
if(inst_41167){
var statearr_41207_41232 = state_41201__$1;
(statearr_41207_41232[(1)] = (5));

} else {
var statearr_41208_41233 = state_41201__$1;
(statearr_41208_41233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (15))){
var inst_41191 = (state_41201[(2)]);
var state_41201__$1 = state_41201;
var statearr_41209_41234 = state_41201__$1;
(statearr_41209_41234[(2)] = inst_41191);

(statearr_41209_41234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (13))){
var state_41201__$1 = state_41201;
var statearr_41210_41235 = state_41201__$1;
(statearr_41210_41235[(2)] = null);

(statearr_41210_41235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (6))){
var inst_41161 = (state_41201[(8)]);
var inst_41186 = inst_41161.length;
var inst_41187 = (inst_41186 > (0));
var state_41201__$1 = state_41201;
if(cljs.core.truth_(inst_41187)){
var statearr_41211_41236 = state_41201__$1;
(statearr_41211_41236[(1)] = (12));

} else {
var statearr_41212_41237 = state_41201__$1;
(statearr_41212_41237[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (3))){
var inst_41199 = (state_41201[(2)]);
var state_41201__$1 = state_41201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41201__$1,inst_41199);
} else {
if((state_val_41202 === (12))){
var inst_41161 = (state_41201[(8)]);
var inst_41189 = cljs.core.vec.call(null,inst_41161);
var state_41201__$1 = state_41201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41201__$1,(15),out,inst_41189);
} else {
if((state_val_41202 === (2))){
var state_41201__$1 = state_41201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41201__$1,(4),ch);
} else {
if((state_val_41202 === (11))){
var inst_41169 = (state_41201[(10)]);
var inst_41165 = (state_41201[(9)]);
var inst_41179 = (state_41201[(2)]);
var inst_41180 = [];
var inst_41181 = inst_41180.push(inst_41165);
var inst_41161 = inst_41180;
var inst_41162 = inst_41169;
var state_41201__$1 = (function (){var statearr_41213 = state_41201;
(statearr_41213[(11)] = inst_41181);

(statearr_41213[(7)] = inst_41162);

(statearr_41213[(12)] = inst_41179);

(statearr_41213[(8)] = inst_41161);

return statearr_41213;
})();
var statearr_41214_41238 = state_41201__$1;
(statearr_41214_41238[(2)] = null);

(statearr_41214_41238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (9))){
var inst_41161 = (state_41201[(8)]);
var inst_41177 = cljs.core.vec.call(null,inst_41161);
var state_41201__$1 = state_41201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41201__$1,(11),out,inst_41177);
} else {
if((state_val_41202 === (5))){
var inst_41169 = (state_41201[(10)]);
var inst_41165 = (state_41201[(9)]);
var inst_41162 = (state_41201[(7)]);
var inst_41169__$1 = f.call(null,inst_41165);
var inst_41170 = cljs.core._EQ_.call(null,inst_41169__$1,inst_41162);
var inst_41171 = cljs.core.keyword_identical_QMARK_.call(null,inst_41162,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41172 = (inst_41170) || (inst_41171);
var state_41201__$1 = (function (){var statearr_41215 = state_41201;
(statearr_41215[(10)] = inst_41169__$1);

return statearr_41215;
})();
if(cljs.core.truth_(inst_41172)){
var statearr_41216_41239 = state_41201__$1;
(statearr_41216_41239[(1)] = (8));

} else {
var statearr_41217_41240 = state_41201__$1;
(statearr_41217_41240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (14))){
var inst_41194 = (state_41201[(2)]);
var inst_41195 = cljs.core.async.close_BANG_.call(null,out);
var state_41201__$1 = (function (){var statearr_41219 = state_41201;
(statearr_41219[(13)] = inst_41194);

return statearr_41219;
})();
var statearr_41220_41241 = state_41201__$1;
(statearr_41220_41241[(2)] = inst_41195);

(statearr_41220_41241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (10))){
var inst_41184 = (state_41201[(2)]);
var state_41201__$1 = state_41201;
var statearr_41221_41242 = state_41201__$1;
(statearr_41221_41242[(2)] = inst_41184);

(statearr_41221_41242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41202 === (8))){
var inst_41169 = (state_41201[(10)]);
var inst_41165 = (state_41201[(9)]);
var inst_41161 = (state_41201[(8)]);
var inst_41174 = inst_41161.push(inst_41165);
var tmp41218 = inst_41161;
var inst_41161__$1 = tmp41218;
var inst_41162 = inst_41169;
var state_41201__$1 = (function (){var statearr_41222 = state_41201;
(statearr_41222[(7)] = inst_41162);

(statearr_41222[(14)] = inst_41174);

(statearr_41222[(8)] = inst_41161__$1);

return statearr_41222;
})();
var statearr_41223_41243 = state_41201__$1;
(statearr_41223_41243[(2)] = null);

(statearr_41223_41243[(1)] = (2));


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
});})(c__30624__auto___41229,out))
;
return ((function (switch__30536__auto__,c__30624__auto___41229,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_41224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41224[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_41224[(1)] = (1));

return statearr_41224;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_41201){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_41201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e41225){if((e41225 instanceof Object)){
var ex__30540__auto__ = e41225;
var statearr_41226_41244 = state_41201;
(statearr_41226_41244[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41245 = state_41201;
state_41201 = G__41245;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_41201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_41201);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___41229,out))
})();
var state__30626__auto__ = (function (){var statearr_41227 = f__30625__auto__.call(null);
(statearr_41227[(6)] = c__30624__auto___41229);

return statearr_41227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___41229,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1517373802737
