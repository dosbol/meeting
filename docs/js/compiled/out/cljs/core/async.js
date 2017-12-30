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
var G__39325 = arguments.length;
switch (G__39325) {
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
if(typeof cljs.core.async.t_cljs$core$async39326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39326 = (function (f,blockable,meta39327){
this.f = f;
this.blockable = blockable;
this.meta39327 = meta39327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39328,meta39327__$1){
var self__ = this;
var _39328__$1 = this;
return (new cljs.core.async.t_cljs$core$async39326(self__.f,self__.blockable,meta39327__$1));
});

cljs.core.async.t_cljs$core$async39326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39328){
var self__ = this;
var _39328__$1 = this;
return self__.meta39327;
});

cljs.core.async.t_cljs$core$async39326.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39326.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39327","meta39327",182336026,null)], null);
});

cljs.core.async.t_cljs$core$async39326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39326";

cljs.core.async.t_cljs$core$async39326.cljs$lang$ctorPrWriter = (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async39326");
});

cljs.core.async.__GT_t_cljs$core$async39326 = (function cljs$core$async$__GT_t_cljs$core$async39326(f__$1,blockable__$1,meta39327){
return (new cljs.core.async.t_cljs$core$async39326(f__$1,blockable__$1,meta39327));
});

}

return (new cljs.core.async.t_cljs$core$async39326(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39332 = arguments.length;
switch (G__39332) {
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
var G__39335 = arguments.length;
switch (G__39335) {
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
var G__39338 = arguments.length;
switch (G__39338) {
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
var val_39340 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39340);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39340,ret){
return (function (){
return fn1.call(null,val_39340);
});})(val_39340,ret))
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
var G__39342 = arguments.length;
switch (G__39342) {
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
var n__28141__auto___39344 = n;
var x_39345 = (0);
while(true){
if((x_39345 < n__28141__auto___39344)){
(a[x_39345] = (0));

var G__39346 = (x_39345 + (1));
x_39345 = G__39346;
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

var G__39347 = (i + (1));
i = G__39347;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39348 = (function (flag,meta39349){
this.flag = flag;
this.meta39349 = meta39349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39350,meta39349__$1){
var self__ = this;
var _39350__$1 = this;
return (new cljs.core.async.t_cljs$core$async39348(self__.flag,meta39349__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39350){
var self__ = this;
var _39350__$1 = this;
return self__.meta39349;
});})(flag))
;

cljs.core.async.t_cljs$core$async39348.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39348.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39348.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39349","meta39349",-304772925,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39348.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39348";

cljs.core.async.t_cljs$core$async39348.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async39348");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39348 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39348(flag__$1,meta39349){
return (new cljs.core.async.t_cljs$core$async39348(flag__$1,meta39349));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39348(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39351 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39351 = (function (flag,cb,meta39352){
this.flag = flag;
this.cb = cb;
this.meta39352 = meta39352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39353,meta39352__$1){
var self__ = this;
var _39353__$1 = this;
return (new cljs.core.async.t_cljs$core$async39351(self__.flag,self__.cb,meta39352__$1));
});

cljs.core.async.t_cljs$core$async39351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39353){
var self__ = this;
var _39353__$1 = this;
return self__.meta39352;
});

cljs.core.async.t_cljs$core$async39351.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39351.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39351.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39352","meta39352",1882861823,null)], null);
});

cljs.core.async.t_cljs$core$async39351.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39351";

cljs.core.async.t_cljs$core$async39351.cljs$lang$ctorPrWriter = (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async39351");
});

cljs.core.async.__GT_t_cljs$core$async39351 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39351(flag__$1,cb__$1,meta39352){
return (new cljs.core.async.t_cljs$core$async39351(flag__$1,cb__$1,meta39352));
});

}

return (new cljs.core.async.t_cljs$core$async39351(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39354_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39354_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39355_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39355_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27196__auto__ = wport;
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39356 = (i + (1));
i = G__39356;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27196__auto__ = ret;
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27184__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27184__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27184__auto__;
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
var args__28372__auto__ = [];
var len__28365__auto___39362 = arguments.length;
var i__28366__auto___39363 = (0);
while(true){
if((i__28366__auto___39363 < len__28365__auto___39362)){
args__28372__auto__.push((arguments[i__28366__auto___39363]));

var G__39364 = (i__28366__auto___39363 + (1));
i__28366__auto___39363 = G__39364;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((1) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28373__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39359){
var map__39360 = p__39359;
var map__39360__$1 = ((((!((map__39360 == null)))?((((map__39360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39360):map__39360);
var opts = map__39360__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39357){
var G__39358 = cljs.core.first.call(null,seq39357);
var seq39357__$1 = cljs.core.next.call(null,seq39357);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39358,seq39357__$1);
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
var G__39366 = arguments.length;
switch (G__39366) {
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
var c__30625__auto___39412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___39412){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___39412){
return (function (state_39390){
var state_val_39391 = (state_39390[(1)]);
if((state_val_39391 === (7))){
var inst_39386 = (state_39390[(2)]);
var state_39390__$1 = state_39390;
var statearr_39392_39413 = state_39390__$1;
(statearr_39392_39413[(2)] = inst_39386);

(statearr_39392_39413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39391 === (1))){
var state_39390__$1 = state_39390;
var statearr_39393_39414 = state_39390__$1;
(statearr_39393_39414[(2)] = null);

(statearr_39393_39414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39391 === (4))){
var inst_39369 = (state_39390[(7)]);
var inst_39369__$1 = (state_39390[(2)]);
var inst_39370 = (inst_39369__$1 == null);
var state_39390__$1 = (function (){var statearr_39394 = state_39390;
(statearr_39394[(7)] = inst_39369__$1);

return statearr_39394;
})();
if(cljs.core.truth_(inst_39370)){
var statearr_39395_39415 = state_39390__$1;
(statearr_39395_39415[(1)] = (5));

} else {
var statearr_39396_39416 = state_39390__$1;
(statearr_39396_39416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39391 === (13))){
var state_39390__$1 = state_39390;
var statearr_39397_39417 = state_39390__$1;
(statearr_39397_39417[(2)] = null);

(statearr_39397_39417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39391 === (6))){
var inst_39369 = (state_39390[(7)]);
var state_39390__$1 = state_39390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39390__$1,(11),to,inst_39369);
} else {
if((state_val_39391 === (3))){
var inst_39388 = (state_39390[(2)]);
var state_39390__$1 = state_39390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39390__$1,inst_39388);
} else {
if((state_val_39391 === (12))){
var state_39390__$1 = state_39390;
var statearr_39398_39418 = state_39390__$1;
(statearr_39398_39418[(2)] = null);

(statearr_39398_39418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39391 === (2))){
var state_39390__$1 = state_39390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39390__$1,(4),from);
} else {
if((state_val_39391 === (11))){
var inst_39379 = (state_39390[(2)]);
var state_39390__$1 = state_39390;
if(cljs.core.truth_(inst_39379)){
var statearr_39399_39419 = state_39390__$1;
(statearr_39399_39419[(1)] = (12));

} else {
var statearr_39400_39420 = state_39390__$1;
(statearr_39400_39420[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39391 === (9))){
var state_39390__$1 = state_39390;
var statearr_39401_39421 = state_39390__$1;
(statearr_39401_39421[(2)] = null);

(statearr_39401_39421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39391 === (5))){
var state_39390__$1 = state_39390;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39402_39422 = state_39390__$1;
(statearr_39402_39422[(1)] = (8));

} else {
var statearr_39403_39423 = state_39390__$1;
(statearr_39403_39423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39391 === (14))){
var inst_39384 = (state_39390[(2)]);
var state_39390__$1 = state_39390;
var statearr_39404_39424 = state_39390__$1;
(statearr_39404_39424[(2)] = inst_39384);

(statearr_39404_39424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39391 === (10))){
var inst_39376 = (state_39390[(2)]);
var state_39390__$1 = state_39390;
var statearr_39405_39425 = state_39390__$1;
(statearr_39405_39425[(2)] = inst_39376);

(statearr_39405_39425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39391 === (8))){
var inst_39373 = cljs.core.async.close_BANG_.call(null,to);
var state_39390__$1 = state_39390;
var statearr_39406_39426 = state_39390__$1;
(statearr_39406_39426[(2)] = inst_39373);

(statearr_39406_39426[(1)] = (10));


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
});})(c__30625__auto___39412))
;
return ((function (switch__30537__auto__,c__30625__auto___39412){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_39407 = [null,null,null,null,null,null,null,null];
(statearr_39407[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_39407[(1)] = (1));

return statearr_39407;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_39390){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39408){if((e39408 instanceof Object)){
var ex__30541__auto__ = e39408;
var statearr_39409_39427 = state_39390;
(statearr_39409_39427[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39428 = state_39390;
state_39390 = G__39428;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_39390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_39390);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___39412))
})();
var state__30627__auto__ = (function (){var statearr_39410 = f__30626__auto__.call(null);
(statearr_39410[(6)] = c__30625__auto___39412);

return statearr_39410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___39412))
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
return (function (p__39429){
var vec__39430 = p__39429;
var v = cljs.core.nth.call(null,vec__39430,(0),null);
var p = cljs.core.nth.call(null,vec__39430,(1),null);
var job = vec__39430;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30625__auto___39601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___39601,res,vec__39430,v,p,job,jobs,results){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___39601,res,vec__39430,v,p,job,jobs,results){
return (function (state_39437){
var state_val_39438 = (state_39437[(1)]);
if((state_val_39438 === (1))){
var state_39437__$1 = state_39437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39437__$1,(2),res,v);
} else {
if((state_val_39438 === (2))){
var inst_39434 = (state_39437[(2)]);
var inst_39435 = cljs.core.async.close_BANG_.call(null,res);
var state_39437__$1 = (function (){var statearr_39439 = state_39437;
(statearr_39439[(7)] = inst_39434);

return statearr_39439;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39437__$1,inst_39435);
} else {
return null;
}
}
});})(c__30625__auto___39601,res,vec__39430,v,p,job,jobs,results))
;
return ((function (switch__30537__auto__,c__30625__auto___39601,res,vec__39430,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0 = (function (){
var statearr_39440 = [null,null,null,null,null,null,null,null];
(statearr_39440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__);

(statearr_39440[(1)] = (1));

return statearr_39440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1 = (function (state_39437){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39441){if((e39441 instanceof Object)){
var ex__30541__auto__ = e39441;
var statearr_39442_39602 = state_39437;
(statearr_39442_39602[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39603 = state_39437;
state_39437 = G__39603;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = function(state_39437){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1.call(this,state_39437);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___39601,res,vec__39430,v,p,job,jobs,results))
})();
var state__30627__auto__ = (function (){var statearr_39443 = f__30626__auto__.call(null);
(statearr_39443[(6)] = c__30625__auto___39601);

return statearr_39443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___39601,res,vec__39430,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39444){
var vec__39445 = p__39444;
var v = cljs.core.nth.call(null,vec__39445,(0),null);
var p = cljs.core.nth.call(null,vec__39445,(1),null);
var job = vec__39445;
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
var n__28141__auto___39604 = n;
var __39605 = (0);
while(true){
if((__39605 < n__28141__auto___39604)){
var G__39448_39606 = type;
var G__39448_39607__$1 = (((G__39448_39606 instanceof cljs.core.Keyword))?G__39448_39606.fqn:null);
switch (G__39448_39607__$1) {
case "compute":
var c__30625__auto___39609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39605,c__30625__auto___39609,G__39448_39606,G__39448_39607__$1,n__28141__auto___39604,jobs,results,process,async){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (__39605,c__30625__auto___39609,G__39448_39606,G__39448_39607__$1,n__28141__auto___39604,jobs,results,process,async){
return (function (state_39461){
var state_val_39462 = (state_39461[(1)]);
if((state_val_39462 === (1))){
var state_39461__$1 = state_39461;
var statearr_39463_39610 = state_39461__$1;
(statearr_39463_39610[(2)] = null);

(statearr_39463_39610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39462 === (2))){
var state_39461__$1 = state_39461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39461__$1,(4),jobs);
} else {
if((state_val_39462 === (3))){
var inst_39459 = (state_39461[(2)]);
var state_39461__$1 = state_39461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39461__$1,inst_39459);
} else {
if((state_val_39462 === (4))){
var inst_39451 = (state_39461[(2)]);
var inst_39452 = process.call(null,inst_39451);
var state_39461__$1 = state_39461;
if(cljs.core.truth_(inst_39452)){
var statearr_39464_39611 = state_39461__$1;
(statearr_39464_39611[(1)] = (5));

} else {
var statearr_39465_39612 = state_39461__$1;
(statearr_39465_39612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39462 === (5))){
var state_39461__$1 = state_39461;
var statearr_39466_39613 = state_39461__$1;
(statearr_39466_39613[(2)] = null);

(statearr_39466_39613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39462 === (6))){
var state_39461__$1 = state_39461;
var statearr_39467_39614 = state_39461__$1;
(statearr_39467_39614[(2)] = null);

(statearr_39467_39614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39462 === (7))){
var inst_39457 = (state_39461[(2)]);
var state_39461__$1 = state_39461;
var statearr_39468_39615 = state_39461__$1;
(statearr_39468_39615[(2)] = inst_39457);

(statearr_39468_39615[(1)] = (3));


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
});})(__39605,c__30625__auto___39609,G__39448_39606,G__39448_39607__$1,n__28141__auto___39604,jobs,results,process,async))
;
return ((function (__39605,switch__30537__auto__,c__30625__auto___39609,G__39448_39606,G__39448_39607__$1,n__28141__auto___39604,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0 = (function (){
var statearr_39469 = [null,null,null,null,null,null,null];
(statearr_39469[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__);

(statearr_39469[(1)] = (1));

return statearr_39469;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1 = (function (state_39461){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39470){if((e39470 instanceof Object)){
var ex__30541__auto__ = e39470;
var statearr_39471_39616 = state_39461;
(statearr_39471_39616[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39617 = state_39461;
state_39461 = G__39617;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = function(state_39461){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1.call(this,state_39461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__;
})()
;})(__39605,switch__30537__auto__,c__30625__auto___39609,G__39448_39606,G__39448_39607__$1,n__28141__auto___39604,jobs,results,process,async))
})();
var state__30627__auto__ = (function (){var statearr_39472 = f__30626__auto__.call(null);
(statearr_39472[(6)] = c__30625__auto___39609);

return statearr_39472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(__39605,c__30625__auto___39609,G__39448_39606,G__39448_39607__$1,n__28141__auto___39604,jobs,results,process,async))
);


break;
case "async":
var c__30625__auto___39618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39605,c__30625__auto___39618,G__39448_39606,G__39448_39607__$1,n__28141__auto___39604,jobs,results,process,async){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (__39605,c__30625__auto___39618,G__39448_39606,G__39448_39607__$1,n__28141__auto___39604,jobs,results,process,async){
return (function (state_39485){
var state_val_39486 = (state_39485[(1)]);
if((state_val_39486 === (1))){
var state_39485__$1 = state_39485;
var statearr_39487_39619 = state_39485__$1;
(statearr_39487_39619[(2)] = null);

(statearr_39487_39619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39486 === (2))){
var state_39485__$1 = state_39485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39485__$1,(4),jobs);
} else {
if((state_val_39486 === (3))){
var inst_39483 = (state_39485[(2)]);
var state_39485__$1 = state_39485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39485__$1,inst_39483);
} else {
if((state_val_39486 === (4))){
var inst_39475 = (state_39485[(2)]);
var inst_39476 = async.call(null,inst_39475);
var state_39485__$1 = state_39485;
if(cljs.core.truth_(inst_39476)){
var statearr_39488_39620 = state_39485__$1;
(statearr_39488_39620[(1)] = (5));

} else {
var statearr_39489_39621 = state_39485__$1;
(statearr_39489_39621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39486 === (5))){
var state_39485__$1 = state_39485;
var statearr_39490_39622 = state_39485__$1;
(statearr_39490_39622[(2)] = null);

(statearr_39490_39622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39486 === (6))){
var state_39485__$1 = state_39485;
var statearr_39491_39623 = state_39485__$1;
(statearr_39491_39623[(2)] = null);

(statearr_39491_39623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39486 === (7))){
var inst_39481 = (state_39485[(2)]);
var state_39485__$1 = state_39485;
var statearr_39492_39624 = state_39485__$1;
(statearr_39492_39624[(2)] = inst_39481);

(statearr_39492_39624[(1)] = (3));


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
});})(__39605,c__30625__auto___39618,G__39448_39606,G__39448_39607__$1,n__28141__auto___39604,jobs,results,process,async))
;
return ((function (__39605,switch__30537__auto__,c__30625__auto___39618,G__39448_39606,G__39448_39607__$1,n__28141__auto___39604,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0 = (function (){
var statearr_39493 = [null,null,null,null,null,null,null];
(statearr_39493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__);

(statearr_39493[(1)] = (1));

return statearr_39493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1 = (function (state_39485){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39494){if((e39494 instanceof Object)){
var ex__30541__auto__ = e39494;
var statearr_39495_39625 = state_39485;
(statearr_39495_39625[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39626 = state_39485;
state_39485 = G__39626;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = function(state_39485){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1.call(this,state_39485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__;
})()
;})(__39605,switch__30537__auto__,c__30625__auto___39618,G__39448_39606,G__39448_39607__$1,n__28141__auto___39604,jobs,results,process,async))
})();
var state__30627__auto__ = (function (){var statearr_39496 = f__30626__auto__.call(null);
(statearr_39496[(6)] = c__30625__auto___39618);

return statearr_39496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(__39605,c__30625__auto___39618,G__39448_39606,G__39448_39607__$1,n__28141__auto___39604,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39448_39607__$1)].join('')));

}

var G__39627 = (__39605 + (1));
__39605 = G__39627;
continue;
} else {
}
break;
}

var c__30625__auto___39628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___39628,jobs,results,process,async){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___39628,jobs,results,process,async){
return (function (state_39518){
var state_val_39519 = (state_39518[(1)]);
if((state_val_39519 === (1))){
var state_39518__$1 = state_39518;
var statearr_39520_39629 = state_39518__$1;
(statearr_39520_39629[(2)] = null);

(statearr_39520_39629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (2))){
var state_39518__$1 = state_39518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39518__$1,(4),from);
} else {
if((state_val_39519 === (3))){
var inst_39516 = (state_39518[(2)]);
var state_39518__$1 = state_39518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39518__$1,inst_39516);
} else {
if((state_val_39519 === (4))){
var inst_39499 = (state_39518[(7)]);
var inst_39499__$1 = (state_39518[(2)]);
var inst_39500 = (inst_39499__$1 == null);
var state_39518__$1 = (function (){var statearr_39521 = state_39518;
(statearr_39521[(7)] = inst_39499__$1);

return statearr_39521;
})();
if(cljs.core.truth_(inst_39500)){
var statearr_39522_39630 = state_39518__$1;
(statearr_39522_39630[(1)] = (5));

} else {
var statearr_39523_39631 = state_39518__$1;
(statearr_39523_39631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (5))){
var inst_39502 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39518__$1 = state_39518;
var statearr_39524_39632 = state_39518__$1;
(statearr_39524_39632[(2)] = inst_39502);

(statearr_39524_39632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (6))){
var inst_39499 = (state_39518[(7)]);
var inst_39504 = (state_39518[(8)]);
var inst_39504__$1 = cljs.core.async.chan.call(null,(1));
var inst_39505 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39506 = [inst_39499,inst_39504__$1];
var inst_39507 = (new cljs.core.PersistentVector(null,2,(5),inst_39505,inst_39506,null));
var state_39518__$1 = (function (){var statearr_39525 = state_39518;
(statearr_39525[(8)] = inst_39504__$1);

return statearr_39525;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39518__$1,(8),jobs,inst_39507);
} else {
if((state_val_39519 === (7))){
var inst_39514 = (state_39518[(2)]);
var state_39518__$1 = state_39518;
var statearr_39526_39633 = state_39518__$1;
(statearr_39526_39633[(2)] = inst_39514);

(statearr_39526_39633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39519 === (8))){
var inst_39504 = (state_39518[(8)]);
var inst_39509 = (state_39518[(2)]);
var state_39518__$1 = (function (){var statearr_39527 = state_39518;
(statearr_39527[(9)] = inst_39509);

return statearr_39527;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39518__$1,(9),results,inst_39504);
} else {
if((state_val_39519 === (9))){
var inst_39511 = (state_39518[(2)]);
var state_39518__$1 = (function (){var statearr_39528 = state_39518;
(statearr_39528[(10)] = inst_39511);

return statearr_39528;
})();
var statearr_39529_39634 = state_39518__$1;
(statearr_39529_39634[(2)] = null);

(statearr_39529_39634[(1)] = (2));


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
});})(c__30625__auto___39628,jobs,results,process,async))
;
return ((function (switch__30537__auto__,c__30625__auto___39628,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0 = (function (){
var statearr_39530 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__);

(statearr_39530[(1)] = (1));

return statearr_39530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1 = (function (state_39518){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39531){if((e39531 instanceof Object)){
var ex__30541__auto__ = e39531;
var statearr_39532_39635 = state_39518;
(statearr_39532_39635[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39636 = state_39518;
state_39518 = G__39636;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = function(state_39518){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1.call(this,state_39518);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___39628,jobs,results,process,async))
})();
var state__30627__auto__ = (function (){var statearr_39533 = f__30626__auto__.call(null);
(statearr_39533[(6)] = c__30625__auto___39628);

return statearr_39533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___39628,jobs,results,process,async))
);


var c__30625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto__,jobs,results,process,async){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto__,jobs,results,process,async){
return (function (state_39571){
var state_val_39572 = (state_39571[(1)]);
if((state_val_39572 === (7))){
var inst_39567 = (state_39571[(2)]);
var state_39571__$1 = state_39571;
var statearr_39573_39637 = state_39571__$1;
(statearr_39573_39637[(2)] = inst_39567);

(statearr_39573_39637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39572 === (20))){
var state_39571__$1 = state_39571;
var statearr_39574_39638 = state_39571__$1;
(statearr_39574_39638[(2)] = null);

(statearr_39574_39638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39572 === (1))){
var state_39571__$1 = state_39571;
var statearr_39575_39639 = state_39571__$1;
(statearr_39575_39639[(2)] = null);

(statearr_39575_39639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39572 === (4))){
var inst_39536 = (state_39571[(7)]);
var inst_39536__$1 = (state_39571[(2)]);
var inst_39537 = (inst_39536__$1 == null);
var state_39571__$1 = (function (){var statearr_39576 = state_39571;
(statearr_39576[(7)] = inst_39536__$1);

return statearr_39576;
})();
if(cljs.core.truth_(inst_39537)){
var statearr_39577_39640 = state_39571__$1;
(statearr_39577_39640[(1)] = (5));

} else {
var statearr_39578_39641 = state_39571__$1;
(statearr_39578_39641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39572 === (15))){
var inst_39549 = (state_39571[(8)]);
var state_39571__$1 = state_39571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39571__$1,(18),to,inst_39549);
} else {
if((state_val_39572 === (21))){
var inst_39562 = (state_39571[(2)]);
var state_39571__$1 = state_39571;
var statearr_39579_39642 = state_39571__$1;
(statearr_39579_39642[(2)] = inst_39562);

(statearr_39579_39642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39572 === (13))){
var inst_39564 = (state_39571[(2)]);
var state_39571__$1 = (function (){var statearr_39580 = state_39571;
(statearr_39580[(9)] = inst_39564);

return statearr_39580;
})();
var statearr_39581_39643 = state_39571__$1;
(statearr_39581_39643[(2)] = null);

(statearr_39581_39643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39572 === (6))){
var inst_39536 = (state_39571[(7)]);
var state_39571__$1 = state_39571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39571__$1,(11),inst_39536);
} else {
if((state_val_39572 === (17))){
var inst_39557 = (state_39571[(2)]);
var state_39571__$1 = state_39571;
if(cljs.core.truth_(inst_39557)){
var statearr_39582_39644 = state_39571__$1;
(statearr_39582_39644[(1)] = (19));

} else {
var statearr_39583_39645 = state_39571__$1;
(statearr_39583_39645[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39572 === (3))){
var inst_39569 = (state_39571[(2)]);
var state_39571__$1 = state_39571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39571__$1,inst_39569);
} else {
if((state_val_39572 === (12))){
var inst_39546 = (state_39571[(10)]);
var state_39571__$1 = state_39571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39571__$1,(14),inst_39546);
} else {
if((state_val_39572 === (2))){
var state_39571__$1 = state_39571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39571__$1,(4),results);
} else {
if((state_val_39572 === (19))){
var state_39571__$1 = state_39571;
var statearr_39584_39646 = state_39571__$1;
(statearr_39584_39646[(2)] = null);

(statearr_39584_39646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39572 === (11))){
var inst_39546 = (state_39571[(2)]);
var state_39571__$1 = (function (){var statearr_39585 = state_39571;
(statearr_39585[(10)] = inst_39546);

return statearr_39585;
})();
var statearr_39586_39647 = state_39571__$1;
(statearr_39586_39647[(2)] = null);

(statearr_39586_39647[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39572 === (9))){
var state_39571__$1 = state_39571;
var statearr_39587_39648 = state_39571__$1;
(statearr_39587_39648[(2)] = null);

(statearr_39587_39648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39572 === (5))){
var state_39571__$1 = state_39571;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39588_39649 = state_39571__$1;
(statearr_39588_39649[(1)] = (8));

} else {
var statearr_39589_39650 = state_39571__$1;
(statearr_39589_39650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39572 === (14))){
var inst_39551 = (state_39571[(11)]);
var inst_39549 = (state_39571[(8)]);
var inst_39549__$1 = (state_39571[(2)]);
var inst_39550 = (inst_39549__$1 == null);
var inst_39551__$1 = cljs.core.not.call(null,inst_39550);
var state_39571__$1 = (function (){var statearr_39590 = state_39571;
(statearr_39590[(11)] = inst_39551__$1);

(statearr_39590[(8)] = inst_39549__$1);

return statearr_39590;
})();
if(inst_39551__$1){
var statearr_39591_39651 = state_39571__$1;
(statearr_39591_39651[(1)] = (15));

} else {
var statearr_39592_39652 = state_39571__$1;
(statearr_39592_39652[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39572 === (16))){
var inst_39551 = (state_39571[(11)]);
var state_39571__$1 = state_39571;
var statearr_39593_39653 = state_39571__$1;
(statearr_39593_39653[(2)] = inst_39551);

(statearr_39593_39653[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39572 === (10))){
var inst_39543 = (state_39571[(2)]);
var state_39571__$1 = state_39571;
var statearr_39594_39654 = state_39571__$1;
(statearr_39594_39654[(2)] = inst_39543);

(statearr_39594_39654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39572 === (18))){
var inst_39554 = (state_39571[(2)]);
var state_39571__$1 = state_39571;
var statearr_39595_39655 = state_39571__$1;
(statearr_39595_39655[(2)] = inst_39554);

(statearr_39595_39655[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39572 === (8))){
var inst_39540 = cljs.core.async.close_BANG_.call(null,to);
var state_39571__$1 = state_39571;
var statearr_39596_39656 = state_39571__$1;
(statearr_39596_39656[(2)] = inst_39540);

(statearr_39596_39656[(1)] = (10));


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
});})(c__30625__auto__,jobs,results,process,async))
;
return ((function (switch__30537__auto__,c__30625__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0 = (function (){
var statearr_39597 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__);

(statearr_39597[(1)] = (1));

return statearr_39597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1 = (function (state_39571){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39598){if((e39598 instanceof Object)){
var ex__30541__auto__ = e39598;
var statearr_39599_39657 = state_39571;
(statearr_39599_39657[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39658 = state_39571;
state_39571 = G__39658;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = function(state_39571){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1.call(this,state_39571);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__,jobs,results,process,async))
})();
var state__30627__auto__ = (function (){var statearr_39600 = f__30626__auto__.call(null);
(statearr_39600[(6)] = c__30625__auto__);

return statearr_39600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto__,jobs,results,process,async))
);

return c__30625__auto__;
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
var G__39660 = arguments.length;
switch (G__39660) {
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
var G__39663 = arguments.length;
switch (G__39663) {
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
var G__39666 = arguments.length;
switch (G__39666) {
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
var c__30625__auto___39715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___39715,tc,fc){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___39715,tc,fc){
return (function (state_39692){
var state_val_39693 = (state_39692[(1)]);
if((state_val_39693 === (7))){
var inst_39688 = (state_39692[(2)]);
var state_39692__$1 = state_39692;
var statearr_39694_39716 = state_39692__$1;
(statearr_39694_39716[(2)] = inst_39688);

(statearr_39694_39716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39693 === (1))){
var state_39692__$1 = state_39692;
var statearr_39695_39717 = state_39692__$1;
(statearr_39695_39717[(2)] = null);

(statearr_39695_39717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39693 === (4))){
var inst_39669 = (state_39692[(7)]);
var inst_39669__$1 = (state_39692[(2)]);
var inst_39670 = (inst_39669__$1 == null);
var state_39692__$1 = (function (){var statearr_39696 = state_39692;
(statearr_39696[(7)] = inst_39669__$1);

return statearr_39696;
})();
if(cljs.core.truth_(inst_39670)){
var statearr_39697_39718 = state_39692__$1;
(statearr_39697_39718[(1)] = (5));

} else {
var statearr_39698_39719 = state_39692__$1;
(statearr_39698_39719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39693 === (13))){
var state_39692__$1 = state_39692;
var statearr_39699_39720 = state_39692__$1;
(statearr_39699_39720[(2)] = null);

(statearr_39699_39720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39693 === (6))){
var inst_39669 = (state_39692[(7)]);
var inst_39675 = p.call(null,inst_39669);
var state_39692__$1 = state_39692;
if(cljs.core.truth_(inst_39675)){
var statearr_39700_39721 = state_39692__$1;
(statearr_39700_39721[(1)] = (9));

} else {
var statearr_39701_39722 = state_39692__$1;
(statearr_39701_39722[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39693 === (3))){
var inst_39690 = (state_39692[(2)]);
var state_39692__$1 = state_39692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39692__$1,inst_39690);
} else {
if((state_val_39693 === (12))){
var state_39692__$1 = state_39692;
var statearr_39702_39723 = state_39692__$1;
(statearr_39702_39723[(2)] = null);

(statearr_39702_39723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39693 === (2))){
var state_39692__$1 = state_39692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39692__$1,(4),ch);
} else {
if((state_val_39693 === (11))){
var inst_39669 = (state_39692[(7)]);
var inst_39679 = (state_39692[(2)]);
var state_39692__$1 = state_39692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39692__$1,(8),inst_39679,inst_39669);
} else {
if((state_val_39693 === (9))){
var state_39692__$1 = state_39692;
var statearr_39703_39724 = state_39692__$1;
(statearr_39703_39724[(2)] = tc);

(statearr_39703_39724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39693 === (5))){
var inst_39672 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39673 = cljs.core.async.close_BANG_.call(null,fc);
var state_39692__$1 = (function (){var statearr_39704 = state_39692;
(statearr_39704[(8)] = inst_39672);

return statearr_39704;
})();
var statearr_39705_39725 = state_39692__$1;
(statearr_39705_39725[(2)] = inst_39673);

(statearr_39705_39725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39693 === (14))){
var inst_39686 = (state_39692[(2)]);
var state_39692__$1 = state_39692;
var statearr_39706_39726 = state_39692__$1;
(statearr_39706_39726[(2)] = inst_39686);

(statearr_39706_39726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39693 === (10))){
var state_39692__$1 = state_39692;
var statearr_39707_39727 = state_39692__$1;
(statearr_39707_39727[(2)] = fc);

(statearr_39707_39727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39693 === (8))){
var inst_39681 = (state_39692[(2)]);
var state_39692__$1 = state_39692;
if(cljs.core.truth_(inst_39681)){
var statearr_39708_39728 = state_39692__$1;
(statearr_39708_39728[(1)] = (12));

} else {
var statearr_39709_39729 = state_39692__$1;
(statearr_39709_39729[(1)] = (13));

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
});})(c__30625__auto___39715,tc,fc))
;
return ((function (switch__30537__auto__,c__30625__auto___39715,tc,fc){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_39710 = [null,null,null,null,null,null,null,null,null];
(statearr_39710[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_39710[(1)] = (1));

return statearr_39710;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_39692){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39711){if((e39711 instanceof Object)){
var ex__30541__auto__ = e39711;
var statearr_39712_39730 = state_39692;
(statearr_39712_39730[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39731 = state_39692;
state_39692 = G__39731;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_39692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_39692);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___39715,tc,fc))
})();
var state__30627__auto__ = (function (){var statearr_39713 = f__30626__auto__.call(null);
(statearr_39713[(6)] = c__30625__auto___39715);

return statearr_39713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___39715,tc,fc))
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
var c__30625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto__){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto__){
return (function (state_39752){
var state_val_39753 = (state_39752[(1)]);
if((state_val_39753 === (7))){
var inst_39748 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39754_39772 = state_39752__$1;
(statearr_39754_39772[(2)] = inst_39748);

(statearr_39754_39772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (1))){
var inst_39732 = init;
var state_39752__$1 = (function (){var statearr_39755 = state_39752;
(statearr_39755[(7)] = inst_39732);

return statearr_39755;
})();
var statearr_39756_39773 = state_39752__$1;
(statearr_39756_39773[(2)] = null);

(statearr_39756_39773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (4))){
var inst_39735 = (state_39752[(8)]);
var inst_39735__$1 = (state_39752[(2)]);
var inst_39736 = (inst_39735__$1 == null);
var state_39752__$1 = (function (){var statearr_39757 = state_39752;
(statearr_39757[(8)] = inst_39735__$1);

return statearr_39757;
})();
if(cljs.core.truth_(inst_39736)){
var statearr_39758_39774 = state_39752__$1;
(statearr_39758_39774[(1)] = (5));

} else {
var statearr_39759_39775 = state_39752__$1;
(statearr_39759_39775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (6))){
var inst_39735 = (state_39752[(8)]);
var inst_39732 = (state_39752[(7)]);
var inst_39739 = (state_39752[(9)]);
var inst_39739__$1 = f.call(null,inst_39732,inst_39735);
var inst_39740 = cljs.core.reduced_QMARK_.call(null,inst_39739__$1);
var state_39752__$1 = (function (){var statearr_39760 = state_39752;
(statearr_39760[(9)] = inst_39739__$1);

return statearr_39760;
})();
if(inst_39740){
var statearr_39761_39776 = state_39752__$1;
(statearr_39761_39776[(1)] = (8));

} else {
var statearr_39762_39777 = state_39752__$1;
(statearr_39762_39777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (3))){
var inst_39750 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39752__$1,inst_39750);
} else {
if((state_val_39753 === (2))){
var state_39752__$1 = state_39752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39752__$1,(4),ch);
} else {
if((state_val_39753 === (9))){
var inst_39739 = (state_39752[(9)]);
var inst_39732 = inst_39739;
var state_39752__$1 = (function (){var statearr_39763 = state_39752;
(statearr_39763[(7)] = inst_39732);

return statearr_39763;
})();
var statearr_39764_39778 = state_39752__$1;
(statearr_39764_39778[(2)] = null);

(statearr_39764_39778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (5))){
var inst_39732 = (state_39752[(7)]);
var state_39752__$1 = state_39752;
var statearr_39765_39779 = state_39752__$1;
(statearr_39765_39779[(2)] = inst_39732);

(statearr_39765_39779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (10))){
var inst_39746 = (state_39752[(2)]);
var state_39752__$1 = state_39752;
var statearr_39766_39780 = state_39752__$1;
(statearr_39766_39780[(2)] = inst_39746);

(statearr_39766_39780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39753 === (8))){
var inst_39739 = (state_39752[(9)]);
var inst_39742 = cljs.core.deref.call(null,inst_39739);
var state_39752__$1 = state_39752;
var statearr_39767_39781 = state_39752__$1;
(statearr_39767_39781[(2)] = inst_39742);

(statearr_39767_39781[(1)] = (10));


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
});})(c__30625__auto__))
;
return ((function (switch__30537__auto__,c__30625__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30538__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30538__auto____0 = (function (){
var statearr_39768 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39768[(0)] = cljs$core$async$reduce_$_state_machine__30538__auto__);

(statearr_39768[(1)] = (1));

return statearr_39768;
});
var cljs$core$async$reduce_$_state_machine__30538__auto____1 = (function (state_39752){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39769){if((e39769 instanceof Object)){
var ex__30541__auto__ = e39769;
var statearr_39770_39782 = state_39752;
(statearr_39770_39782[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39783 = state_39752;
state_39752 = G__39783;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30538__auto__ = function(state_39752){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30538__auto____1.call(this,state_39752);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30538__auto____0;
cljs$core$async$reduce_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30538__auto____1;
return cljs$core$async$reduce_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__))
})();
var state__30627__auto__ = (function (){var statearr_39771 = f__30626__auto__.call(null);
(statearr_39771[(6)] = c__30625__auto__);

return statearr_39771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto__))
);

return c__30625__auto__;
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
var G__39785 = arguments.length;
switch (G__39785) {
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
var c__30625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto__){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto__){
return (function (state_39810){
var state_val_39811 = (state_39810[(1)]);
if((state_val_39811 === (7))){
var inst_39792 = (state_39810[(2)]);
var state_39810__$1 = state_39810;
var statearr_39812_39833 = state_39810__$1;
(statearr_39812_39833[(2)] = inst_39792);

(statearr_39812_39833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (1))){
var inst_39786 = cljs.core.seq.call(null,coll);
var inst_39787 = inst_39786;
var state_39810__$1 = (function (){var statearr_39813 = state_39810;
(statearr_39813[(7)] = inst_39787);

return statearr_39813;
})();
var statearr_39814_39834 = state_39810__$1;
(statearr_39814_39834[(2)] = null);

(statearr_39814_39834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (4))){
var inst_39787 = (state_39810[(7)]);
var inst_39790 = cljs.core.first.call(null,inst_39787);
var state_39810__$1 = state_39810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39810__$1,(7),ch,inst_39790);
} else {
if((state_val_39811 === (13))){
var inst_39804 = (state_39810[(2)]);
var state_39810__$1 = state_39810;
var statearr_39815_39835 = state_39810__$1;
(statearr_39815_39835[(2)] = inst_39804);

(statearr_39815_39835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (6))){
var inst_39795 = (state_39810[(2)]);
var state_39810__$1 = state_39810;
if(cljs.core.truth_(inst_39795)){
var statearr_39816_39836 = state_39810__$1;
(statearr_39816_39836[(1)] = (8));

} else {
var statearr_39817_39837 = state_39810__$1;
(statearr_39817_39837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (3))){
var inst_39808 = (state_39810[(2)]);
var state_39810__$1 = state_39810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39810__$1,inst_39808);
} else {
if((state_val_39811 === (12))){
var state_39810__$1 = state_39810;
var statearr_39818_39838 = state_39810__$1;
(statearr_39818_39838[(2)] = null);

(statearr_39818_39838[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (2))){
var inst_39787 = (state_39810[(7)]);
var state_39810__$1 = state_39810;
if(cljs.core.truth_(inst_39787)){
var statearr_39819_39839 = state_39810__$1;
(statearr_39819_39839[(1)] = (4));

} else {
var statearr_39820_39840 = state_39810__$1;
(statearr_39820_39840[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (11))){
var inst_39801 = cljs.core.async.close_BANG_.call(null,ch);
var state_39810__$1 = state_39810;
var statearr_39821_39841 = state_39810__$1;
(statearr_39821_39841[(2)] = inst_39801);

(statearr_39821_39841[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (9))){
var state_39810__$1 = state_39810;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39822_39842 = state_39810__$1;
(statearr_39822_39842[(1)] = (11));

} else {
var statearr_39823_39843 = state_39810__$1;
(statearr_39823_39843[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (5))){
var inst_39787 = (state_39810[(7)]);
var state_39810__$1 = state_39810;
var statearr_39824_39844 = state_39810__$1;
(statearr_39824_39844[(2)] = inst_39787);

(statearr_39824_39844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (10))){
var inst_39806 = (state_39810[(2)]);
var state_39810__$1 = state_39810;
var statearr_39825_39845 = state_39810__$1;
(statearr_39825_39845[(2)] = inst_39806);

(statearr_39825_39845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39811 === (8))){
var inst_39787 = (state_39810[(7)]);
var inst_39797 = cljs.core.next.call(null,inst_39787);
var inst_39787__$1 = inst_39797;
var state_39810__$1 = (function (){var statearr_39826 = state_39810;
(statearr_39826[(7)] = inst_39787__$1);

return statearr_39826;
})();
var statearr_39827_39846 = state_39810__$1;
(statearr_39827_39846[(2)] = null);

(statearr_39827_39846[(1)] = (2));


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
});})(c__30625__auto__))
;
return ((function (switch__30537__auto__,c__30625__auto__){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_39828 = [null,null,null,null,null,null,null,null];
(statearr_39828[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_39828[(1)] = (1));

return statearr_39828;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_39810){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39829){if((e39829 instanceof Object)){
var ex__30541__auto__ = e39829;
var statearr_39830_39847 = state_39810;
(statearr_39830_39847[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39848 = state_39810;
state_39810 = G__39848;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_39810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_39810);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__))
})();
var state__30627__auto__ = (function (){var statearr_39831 = f__30626__auto__.call(null);
(statearr_39831[(6)] = c__30625__auto__);

return statearr_39831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto__))
);

return c__30625__auto__;
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
var x__27879__auto__ = (((_ == null))?null:_);
var m__27880__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27879__auto__)]);
if(!((m__27880__auto__ == null))){
return m__27880__auto__.call(null,_);
} else {
var m__27880__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27880__auto____$1 == null))){
return m__27880__auto____$1.call(null,_);
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
var x__27879__auto__ = (((m == null))?null:m);
var m__27880__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27879__auto__)]);
if(!((m__27880__auto__ == null))){
return m__27880__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27880__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27880__auto____$1 == null))){
return m__27880__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__27879__auto__ = (((m == null))?null:m);
var m__27880__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27879__auto__)]);
if(!((m__27880__auto__ == null))){
return m__27880__auto__.call(null,m,ch);
} else {
var m__27880__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27880__auto____$1 == null))){
return m__27880__auto____$1.call(null,m,ch);
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
var x__27879__auto__ = (((m == null))?null:m);
var m__27880__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27879__auto__)]);
if(!((m__27880__auto__ == null))){
return m__27880__auto__.call(null,m);
} else {
var m__27880__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27880__auto____$1 == null))){
return m__27880__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async39849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39849 = (function (ch,cs,meta39850){
this.ch = ch;
this.cs = cs;
this.meta39850 = meta39850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39851,meta39850__$1){
var self__ = this;
var _39851__$1 = this;
return (new cljs.core.async.t_cljs$core$async39849(self__.ch,self__.cs,meta39850__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39851){
var self__ = this;
var _39851__$1 = this;
return self__.meta39850;
});})(cs))
;

cljs.core.async.t_cljs$core$async39849.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39849.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39849.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39849.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39849.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39849.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39850","meta39850",1421740449,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39849";

cljs.core.async.t_cljs$core$async39849.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async39849");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39849 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39849(ch__$1,cs__$1,meta39850){
return (new cljs.core.async.t_cljs$core$async39849(ch__$1,cs__$1,meta39850));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39849(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30625__auto___40071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___40071,cs,m,dchan,dctr,done){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___40071,cs,m,dchan,dctr,done){
return (function (state_39986){
var state_val_39987 = (state_39986[(1)]);
if((state_val_39987 === (7))){
var inst_39982 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_39988_40072 = state_39986__$1;
(statearr_39988_40072[(2)] = inst_39982);

(statearr_39988_40072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (20))){
var inst_39885 = (state_39986[(7)]);
var inst_39897 = cljs.core.first.call(null,inst_39885);
var inst_39898 = cljs.core.nth.call(null,inst_39897,(0),null);
var inst_39899 = cljs.core.nth.call(null,inst_39897,(1),null);
var state_39986__$1 = (function (){var statearr_39989 = state_39986;
(statearr_39989[(8)] = inst_39898);

return statearr_39989;
})();
if(cljs.core.truth_(inst_39899)){
var statearr_39990_40073 = state_39986__$1;
(statearr_39990_40073[(1)] = (22));

} else {
var statearr_39991_40074 = state_39986__$1;
(statearr_39991_40074[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (27))){
var inst_39929 = (state_39986[(9)]);
var inst_39934 = (state_39986[(10)]);
var inst_39927 = (state_39986[(11)]);
var inst_39854 = (state_39986[(12)]);
var inst_39934__$1 = cljs.core._nth.call(null,inst_39927,inst_39929);
var inst_39935 = cljs.core.async.put_BANG_.call(null,inst_39934__$1,inst_39854,done);
var state_39986__$1 = (function (){var statearr_39992 = state_39986;
(statearr_39992[(10)] = inst_39934__$1);

return statearr_39992;
})();
if(cljs.core.truth_(inst_39935)){
var statearr_39993_40075 = state_39986__$1;
(statearr_39993_40075[(1)] = (30));

} else {
var statearr_39994_40076 = state_39986__$1;
(statearr_39994_40076[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (1))){
var state_39986__$1 = state_39986;
var statearr_39995_40077 = state_39986__$1;
(statearr_39995_40077[(2)] = null);

(statearr_39995_40077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (24))){
var inst_39885 = (state_39986[(7)]);
var inst_39904 = (state_39986[(2)]);
var inst_39905 = cljs.core.next.call(null,inst_39885);
var inst_39863 = inst_39905;
var inst_39864 = null;
var inst_39865 = (0);
var inst_39866 = (0);
var state_39986__$1 = (function (){var statearr_39996 = state_39986;
(statearr_39996[(13)] = inst_39863);

(statearr_39996[(14)] = inst_39864);

(statearr_39996[(15)] = inst_39904);

(statearr_39996[(16)] = inst_39865);

(statearr_39996[(17)] = inst_39866);

return statearr_39996;
})();
var statearr_39997_40078 = state_39986__$1;
(statearr_39997_40078[(2)] = null);

(statearr_39997_40078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (39))){
var state_39986__$1 = state_39986;
var statearr_40001_40079 = state_39986__$1;
(statearr_40001_40079[(2)] = null);

(statearr_40001_40079[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (4))){
var inst_39854 = (state_39986[(12)]);
var inst_39854__$1 = (state_39986[(2)]);
var inst_39855 = (inst_39854__$1 == null);
var state_39986__$1 = (function (){var statearr_40002 = state_39986;
(statearr_40002[(12)] = inst_39854__$1);

return statearr_40002;
})();
if(cljs.core.truth_(inst_39855)){
var statearr_40003_40080 = state_39986__$1;
(statearr_40003_40080[(1)] = (5));

} else {
var statearr_40004_40081 = state_39986__$1;
(statearr_40004_40081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (15))){
var inst_39863 = (state_39986[(13)]);
var inst_39864 = (state_39986[(14)]);
var inst_39865 = (state_39986[(16)]);
var inst_39866 = (state_39986[(17)]);
var inst_39881 = (state_39986[(2)]);
var inst_39882 = (inst_39866 + (1));
var tmp39998 = inst_39863;
var tmp39999 = inst_39864;
var tmp40000 = inst_39865;
var inst_39863__$1 = tmp39998;
var inst_39864__$1 = tmp39999;
var inst_39865__$1 = tmp40000;
var inst_39866__$1 = inst_39882;
var state_39986__$1 = (function (){var statearr_40005 = state_39986;
(statearr_40005[(13)] = inst_39863__$1);

(statearr_40005[(14)] = inst_39864__$1);

(statearr_40005[(16)] = inst_39865__$1);

(statearr_40005[(18)] = inst_39881);

(statearr_40005[(17)] = inst_39866__$1);

return statearr_40005;
})();
var statearr_40006_40082 = state_39986__$1;
(statearr_40006_40082[(2)] = null);

(statearr_40006_40082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (21))){
var inst_39908 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_40010_40083 = state_39986__$1;
(statearr_40010_40083[(2)] = inst_39908);

(statearr_40010_40083[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (31))){
var inst_39934 = (state_39986[(10)]);
var inst_39938 = done.call(null,null);
var inst_39939 = cljs.core.async.untap_STAR_.call(null,m,inst_39934);
var state_39986__$1 = (function (){var statearr_40011 = state_39986;
(statearr_40011[(19)] = inst_39938);

return statearr_40011;
})();
var statearr_40012_40084 = state_39986__$1;
(statearr_40012_40084[(2)] = inst_39939);

(statearr_40012_40084[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (32))){
var inst_39929 = (state_39986[(9)]);
var inst_39928 = (state_39986[(20)]);
var inst_39927 = (state_39986[(11)]);
var inst_39926 = (state_39986[(21)]);
var inst_39941 = (state_39986[(2)]);
var inst_39942 = (inst_39929 + (1));
var tmp40007 = inst_39928;
var tmp40008 = inst_39927;
var tmp40009 = inst_39926;
var inst_39926__$1 = tmp40009;
var inst_39927__$1 = tmp40008;
var inst_39928__$1 = tmp40007;
var inst_39929__$1 = inst_39942;
var state_39986__$1 = (function (){var statearr_40013 = state_39986;
(statearr_40013[(9)] = inst_39929__$1);

(statearr_40013[(20)] = inst_39928__$1);

(statearr_40013[(22)] = inst_39941);

(statearr_40013[(11)] = inst_39927__$1);

(statearr_40013[(21)] = inst_39926__$1);

return statearr_40013;
})();
var statearr_40014_40085 = state_39986__$1;
(statearr_40014_40085[(2)] = null);

(statearr_40014_40085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (40))){
var inst_39954 = (state_39986[(23)]);
var inst_39958 = done.call(null,null);
var inst_39959 = cljs.core.async.untap_STAR_.call(null,m,inst_39954);
var state_39986__$1 = (function (){var statearr_40015 = state_39986;
(statearr_40015[(24)] = inst_39958);

return statearr_40015;
})();
var statearr_40016_40086 = state_39986__$1;
(statearr_40016_40086[(2)] = inst_39959);

(statearr_40016_40086[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (33))){
var inst_39945 = (state_39986[(25)]);
var inst_39947 = cljs.core.chunked_seq_QMARK_.call(null,inst_39945);
var state_39986__$1 = state_39986;
if(inst_39947){
var statearr_40017_40087 = state_39986__$1;
(statearr_40017_40087[(1)] = (36));

} else {
var statearr_40018_40088 = state_39986__$1;
(statearr_40018_40088[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (13))){
var inst_39875 = (state_39986[(26)]);
var inst_39878 = cljs.core.async.close_BANG_.call(null,inst_39875);
var state_39986__$1 = state_39986;
var statearr_40019_40089 = state_39986__$1;
(statearr_40019_40089[(2)] = inst_39878);

(statearr_40019_40089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (22))){
var inst_39898 = (state_39986[(8)]);
var inst_39901 = cljs.core.async.close_BANG_.call(null,inst_39898);
var state_39986__$1 = state_39986;
var statearr_40020_40090 = state_39986__$1;
(statearr_40020_40090[(2)] = inst_39901);

(statearr_40020_40090[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (36))){
var inst_39945 = (state_39986[(25)]);
var inst_39949 = cljs.core.chunk_first.call(null,inst_39945);
var inst_39950 = cljs.core.chunk_rest.call(null,inst_39945);
var inst_39951 = cljs.core.count.call(null,inst_39949);
var inst_39926 = inst_39950;
var inst_39927 = inst_39949;
var inst_39928 = inst_39951;
var inst_39929 = (0);
var state_39986__$1 = (function (){var statearr_40021 = state_39986;
(statearr_40021[(9)] = inst_39929);

(statearr_40021[(20)] = inst_39928);

(statearr_40021[(11)] = inst_39927);

(statearr_40021[(21)] = inst_39926);

return statearr_40021;
})();
var statearr_40022_40091 = state_39986__$1;
(statearr_40022_40091[(2)] = null);

(statearr_40022_40091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (41))){
var inst_39945 = (state_39986[(25)]);
var inst_39961 = (state_39986[(2)]);
var inst_39962 = cljs.core.next.call(null,inst_39945);
var inst_39926 = inst_39962;
var inst_39927 = null;
var inst_39928 = (0);
var inst_39929 = (0);
var state_39986__$1 = (function (){var statearr_40023 = state_39986;
(statearr_40023[(9)] = inst_39929);

(statearr_40023[(20)] = inst_39928);

(statearr_40023[(11)] = inst_39927);

(statearr_40023[(27)] = inst_39961);

(statearr_40023[(21)] = inst_39926);

return statearr_40023;
})();
var statearr_40024_40092 = state_39986__$1;
(statearr_40024_40092[(2)] = null);

(statearr_40024_40092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (43))){
var state_39986__$1 = state_39986;
var statearr_40025_40093 = state_39986__$1;
(statearr_40025_40093[(2)] = null);

(statearr_40025_40093[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (29))){
var inst_39970 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_40026_40094 = state_39986__$1;
(statearr_40026_40094[(2)] = inst_39970);

(statearr_40026_40094[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (44))){
var inst_39979 = (state_39986[(2)]);
var state_39986__$1 = (function (){var statearr_40027 = state_39986;
(statearr_40027[(28)] = inst_39979);

return statearr_40027;
})();
var statearr_40028_40095 = state_39986__$1;
(statearr_40028_40095[(2)] = null);

(statearr_40028_40095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (6))){
var inst_39918 = (state_39986[(29)]);
var inst_39917 = cljs.core.deref.call(null,cs);
var inst_39918__$1 = cljs.core.keys.call(null,inst_39917);
var inst_39919 = cljs.core.count.call(null,inst_39918__$1);
var inst_39920 = cljs.core.reset_BANG_.call(null,dctr,inst_39919);
var inst_39925 = cljs.core.seq.call(null,inst_39918__$1);
var inst_39926 = inst_39925;
var inst_39927 = null;
var inst_39928 = (0);
var inst_39929 = (0);
var state_39986__$1 = (function (){var statearr_40029 = state_39986;
(statearr_40029[(9)] = inst_39929);

(statearr_40029[(20)] = inst_39928);

(statearr_40029[(30)] = inst_39920);

(statearr_40029[(11)] = inst_39927);

(statearr_40029[(29)] = inst_39918__$1);

(statearr_40029[(21)] = inst_39926);

return statearr_40029;
})();
var statearr_40030_40096 = state_39986__$1;
(statearr_40030_40096[(2)] = null);

(statearr_40030_40096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (28))){
var inst_39945 = (state_39986[(25)]);
var inst_39926 = (state_39986[(21)]);
var inst_39945__$1 = cljs.core.seq.call(null,inst_39926);
var state_39986__$1 = (function (){var statearr_40031 = state_39986;
(statearr_40031[(25)] = inst_39945__$1);

return statearr_40031;
})();
if(inst_39945__$1){
var statearr_40032_40097 = state_39986__$1;
(statearr_40032_40097[(1)] = (33));

} else {
var statearr_40033_40098 = state_39986__$1;
(statearr_40033_40098[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (25))){
var inst_39929 = (state_39986[(9)]);
var inst_39928 = (state_39986[(20)]);
var inst_39931 = (inst_39929 < inst_39928);
var inst_39932 = inst_39931;
var state_39986__$1 = state_39986;
if(cljs.core.truth_(inst_39932)){
var statearr_40034_40099 = state_39986__$1;
(statearr_40034_40099[(1)] = (27));

} else {
var statearr_40035_40100 = state_39986__$1;
(statearr_40035_40100[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (34))){
var state_39986__$1 = state_39986;
var statearr_40036_40101 = state_39986__$1;
(statearr_40036_40101[(2)] = null);

(statearr_40036_40101[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (17))){
var state_39986__$1 = state_39986;
var statearr_40037_40102 = state_39986__$1;
(statearr_40037_40102[(2)] = null);

(statearr_40037_40102[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (3))){
var inst_39984 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39986__$1,inst_39984);
} else {
if((state_val_39987 === (12))){
var inst_39913 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_40038_40103 = state_39986__$1;
(statearr_40038_40103[(2)] = inst_39913);

(statearr_40038_40103[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (2))){
var state_39986__$1 = state_39986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39986__$1,(4),ch);
} else {
if((state_val_39987 === (23))){
var state_39986__$1 = state_39986;
var statearr_40039_40104 = state_39986__$1;
(statearr_40039_40104[(2)] = null);

(statearr_40039_40104[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (35))){
var inst_39968 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_40040_40105 = state_39986__$1;
(statearr_40040_40105[(2)] = inst_39968);

(statearr_40040_40105[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (19))){
var inst_39885 = (state_39986[(7)]);
var inst_39889 = cljs.core.chunk_first.call(null,inst_39885);
var inst_39890 = cljs.core.chunk_rest.call(null,inst_39885);
var inst_39891 = cljs.core.count.call(null,inst_39889);
var inst_39863 = inst_39890;
var inst_39864 = inst_39889;
var inst_39865 = inst_39891;
var inst_39866 = (0);
var state_39986__$1 = (function (){var statearr_40041 = state_39986;
(statearr_40041[(13)] = inst_39863);

(statearr_40041[(14)] = inst_39864);

(statearr_40041[(16)] = inst_39865);

(statearr_40041[(17)] = inst_39866);

return statearr_40041;
})();
var statearr_40042_40106 = state_39986__$1;
(statearr_40042_40106[(2)] = null);

(statearr_40042_40106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (11))){
var inst_39885 = (state_39986[(7)]);
var inst_39863 = (state_39986[(13)]);
var inst_39885__$1 = cljs.core.seq.call(null,inst_39863);
var state_39986__$1 = (function (){var statearr_40043 = state_39986;
(statearr_40043[(7)] = inst_39885__$1);

return statearr_40043;
})();
if(inst_39885__$1){
var statearr_40044_40107 = state_39986__$1;
(statearr_40044_40107[(1)] = (16));

} else {
var statearr_40045_40108 = state_39986__$1;
(statearr_40045_40108[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (9))){
var inst_39915 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_40046_40109 = state_39986__$1;
(statearr_40046_40109[(2)] = inst_39915);

(statearr_40046_40109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (5))){
var inst_39861 = cljs.core.deref.call(null,cs);
var inst_39862 = cljs.core.seq.call(null,inst_39861);
var inst_39863 = inst_39862;
var inst_39864 = null;
var inst_39865 = (0);
var inst_39866 = (0);
var state_39986__$1 = (function (){var statearr_40047 = state_39986;
(statearr_40047[(13)] = inst_39863);

(statearr_40047[(14)] = inst_39864);

(statearr_40047[(16)] = inst_39865);

(statearr_40047[(17)] = inst_39866);

return statearr_40047;
})();
var statearr_40048_40110 = state_39986__$1;
(statearr_40048_40110[(2)] = null);

(statearr_40048_40110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (14))){
var state_39986__$1 = state_39986;
var statearr_40049_40111 = state_39986__$1;
(statearr_40049_40111[(2)] = null);

(statearr_40049_40111[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (45))){
var inst_39976 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_40050_40112 = state_39986__$1;
(statearr_40050_40112[(2)] = inst_39976);

(statearr_40050_40112[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (26))){
var inst_39918 = (state_39986[(29)]);
var inst_39972 = (state_39986[(2)]);
var inst_39973 = cljs.core.seq.call(null,inst_39918);
var state_39986__$1 = (function (){var statearr_40051 = state_39986;
(statearr_40051[(31)] = inst_39972);

return statearr_40051;
})();
if(inst_39973){
var statearr_40052_40113 = state_39986__$1;
(statearr_40052_40113[(1)] = (42));

} else {
var statearr_40053_40114 = state_39986__$1;
(statearr_40053_40114[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (16))){
var inst_39885 = (state_39986[(7)]);
var inst_39887 = cljs.core.chunked_seq_QMARK_.call(null,inst_39885);
var state_39986__$1 = state_39986;
if(inst_39887){
var statearr_40054_40115 = state_39986__$1;
(statearr_40054_40115[(1)] = (19));

} else {
var statearr_40055_40116 = state_39986__$1;
(statearr_40055_40116[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (38))){
var inst_39965 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_40056_40117 = state_39986__$1;
(statearr_40056_40117[(2)] = inst_39965);

(statearr_40056_40117[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (30))){
var state_39986__$1 = state_39986;
var statearr_40057_40118 = state_39986__$1;
(statearr_40057_40118[(2)] = null);

(statearr_40057_40118[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (10))){
var inst_39864 = (state_39986[(14)]);
var inst_39866 = (state_39986[(17)]);
var inst_39874 = cljs.core._nth.call(null,inst_39864,inst_39866);
var inst_39875 = cljs.core.nth.call(null,inst_39874,(0),null);
var inst_39876 = cljs.core.nth.call(null,inst_39874,(1),null);
var state_39986__$1 = (function (){var statearr_40058 = state_39986;
(statearr_40058[(26)] = inst_39875);

return statearr_40058;
})();
if(cljs.core.truth_(inst_39876)){
var statearr_40059_40119 = state_39986__$1;
(statearr_40059_40119[(1)] = (13));

} else {
var statearr_40060_40120 = state_39986__$1;
(statearr_40060_40120[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (18))){
var inst_39911 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_40061_40121 = state_39986__$1;
(statearr_40061_40121[(2)] = inst_39911);

(statearr_40061_40121[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (42))){
var state_39986__$1 = state_39986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39986__$1,(45),dchan);
} else {
if((state_val_39987 === (37))){
var inst_39945 = (state_39986[(25)]);
var inst_39954 = (state_39986[(23)]);
var inst_39854 = (state_39986[(12)]);
var inst_39954__$1 = cljs.core.first.call(null,inst_39945);
var inst_39955 = cljs.core.async.put_BANG_.call(null,inst_39954__$1,inst_39854,done);
var state_39986__$1 = (function (){var statearr_40062 = state_39986;
(statearr_40062[(23)] = inst_39954__$1);

return statearr_40062;
})();
if(cljs.core.truth_(inst_39955)){
var statearr_40063_40122 = state_39986__$1;
(statearr_40063_40122[(1)] = (39));

} else {
var statearr_40064_40123 = state_39986__$1;
(statearr_40064_40123[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (8))){
var inst_39865 = (state_39986[(16)]);
var inst_39866 = (state_39986[(17)]);
var inst_39868 = (inst_39866 < inst_39865);
var inst_39869 = inst_39868;
var state_39986__$1 = state_39986;
if(cljs.core.truth_(inst_39869)){
var statearr_40065_40124 = state_39986__$1;
(statearr_40065_40124[(1)] = (10));

} else {
var statearr_40066_40125 = state_39986__$1;
(statearr_40066_40125[(1)] = (11));

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
});})(c__30625__auto___40071,cs,m,dchan,dctr,done))
;
return ((function (switch__30537__auto__,c__30625__auto___40071,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30538__auto__ = null;
var cljs$core$async$mult_$_state_machine__30538__auto____0 = (function (){
var statearr_40067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40067[(0)] = cljs$core$async$mult_$_state_machine__30538__auto__);

(statearr_40067[(1)] = (1));

return statearr_40067;
});
var cljs$core$async$mult_$_state_machine__30538__auto____1 = (function (state_39986){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40068){if((e40068 instanceof Object)){
var ex__30541__auto__ = e40068;
var statearr_40069_40126 = state_39986;
(statearr_40069_40126[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40127 = state_39986;
state_39986 = G__40127;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30538__auto__ = function(state_39986){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30538__auto____1.call(this,state_39986);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30538__auto____0;
cljs$core$async$mult_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30538__auto____1;
return cljs$core$async$mult_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___40071,cs,m,dchan,dctr,done))
})();
var state__30627__auto__ = (function (){var statearr_40070 = f__30626__auto__.call(null);
(statearr_40070[(6)] = c__30625__auto___40071);

return statearr_40070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___40071,cs,m,dchan,dctr,done))
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
var G__40129 = arguments.length;
switch (G__40129) {
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
var x__27879__auto__ = (((m == null))?null:m);
var m__27880__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27879__auto__)]);
if(!((m__27880__auto__ == null))){
return m__27880__auto__.call(null,m,ch);
} else {
var m__27880__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27880__auto____$1 == null))){
return m__27880__auto____$1.call(null,m,ch);
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
var x__27879__auto__ = (((m == null))?null:m);
var m__27880__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27879__auto__)]);
if(!((m__27880__auto__ == null))){
return m__27880__auto__.call(null,m,ch);
} else {
var m__27880__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27880__auto____$1 == null))){
return m__27880__auto____$1.call(null,m,ch);
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
var x__27879__auto__ = (((m == null))?null:m);
var m__27880__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27879__auto__)]);
if(!((m__27880__auto__ == null))){
return m__27880__auto__.call(null,m);
} else {
var m__27880__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27880__auto____$1 == null))){
return m__27880__auto____$1.call(null,m);
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
var x__27879__auto__ = (((m == null))?null:m);
var m__27880__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27879__auto__)]);
if(!((m__27880__auto__ == null))){
return m__27880__auto__.call(null,m,state_map);
} else {
var m__27880__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27880__auto____$1 == null))){
return m__27880__auto____$1.call(null,m,state_map);
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
var x__27879__auto__ = (((m == null))?null:m);
var m__27880__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27879__auto__)]);
if(!((m__27880__auto__ == null))){
return m__27880__auto__.call(null,m,mode);
} else {
var m__27880__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27880__auto____$1 == null))){
return m__27880__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28372__auto__ = [];
var len__28365__auto___40141 = arguments.length;
var i__28366__auto___40142 = (0);
while(true){
if((i__28366__auto___40142 < len__28365__auto___40141)){
args__28372__auto__.push((arguments[i__28366__auto___40142]));

var G__40143 = (i__28366__auto___40142 + (1));
i__28366__auto___40142 = G__40143;
continue;
} else {
}
break;
}

var argseq__28373__auto__ = ((((3) < args__28372__auto__.length))?(new cljs.core.IndexedSeq(args__28372__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28373__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40135){
var map__40136 = p__40135;
var map__40136__$1 = ((((!((map__40136 == null)))?((((map__40136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40136):map__40136);
var opts = map__40136__$1;
var statearr_40138_40144 = state;
(statearr_40138_40144[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__40136,map__40136__$1,opts){
return (function (val){
var statearr_40139_40145 = state;
(statearr_40139_40145[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40136,map__40136__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_40140_40146 = state;
(statearr_40140_40146[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40131){
var G__40132 = cljs.core.first.call(null,seq40131);
var seq40131__$1 = cljs.core.next.call(null,seq40131);
var G__40133 = cljs.core.first.call(null,seq40131__$1);
var seq40131__$2 = cljs.core.next.call(null,seq40131__$1);
var G__40134 = cljs.core.first.call(null,seq40131__$2);
var seq40131__$3 = cljs.core.next.call(null,seq40131__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40132,G__40133,G__40134,seq40131__$3);
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
if(typeof cljs.core.async.t_cljs$core$async40147 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40147 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40148){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40148 = meta40148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40149,meta40148__$1){
var self__ = this;
var _40149__$1 = this;
return (new cljs.core.async.t_cljs$core$async40147(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40148__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40149){
var self__ = this;
var _40149__$1 = this;
return self__.meta40148;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40147.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40147.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40147.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40147.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40147.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40147.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40147.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40147.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async40147.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40148","meta40148",222598212,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40147.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40147";

cljs.core.async.t_cljs$core$async40147.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async40147");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40147 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40147(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40148){
return (new cljs.core.async.t_cljs$core$async40147(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40148));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40147(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30625__auto___40311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___40311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___40311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40251){
var state_val_40252 = (state_40251[(1)]);
if((state_val_40252 === (7))){
var inst_40166 = (state_40251[(2)]);
var state_40251__$1 = state_40251;
var statearr_40253_40312 = state_40251__$1;
(statearr_40253_40312[(2)] = inst_40166);

(statearr_40253_40312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (20))){
var inst_40178 = (state_40251[(7)]);
var state_40251__$1 = state_40251;
var statearr_40254_40313 = state_40251__$1;
(statearr_40254_40313[(2)] = inst_40178);

(statearr_40254_40313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (27))){
var state_40251__$1 = state_40251;
var statearr_40255_40314 = state_40251__$1;
(statearr_40255_40314[(2)] = null);

(statearr_40255_40314[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (1))){
var inst_40153 = (state_40251[(8)]);
var inst_40153__$1 = calc_state.call(null);
var inst_40155 = (inst_40153__$1 == null);
var inst_40156 = cljs.core.not.call(null,inst_40155);
var state_40251__$1 = (function (){var statearr_40256 = state_40251;
(statearr_40256[(8)] = inst_40153__$1);

return statearr_40256;
})();
if(inst_40156){
var statearr_40257_40315 = state_40251__$1;
(statearr_40257_40315[(1)] = (2));

} else {
var statearr_40258_40316 = state_40251__$1;
(statearr_40258_40316[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (24))){
var inst_40202 = (state_40251[(9)]);
var inst_40211 = (state_40251[(10)]);
var inst_40225 = (state_40251[(11)]);
var inst_40225__$1 = inst_40202.call(null,inst_40211);
var state_40251__$1 = (function (){var statearr_40259 = state_40251;
(statearr_40259[(11)] = inst_40225__$1);

return statearr_40259;
})();
if(cljs.core.truth_(inst_40225__$1)){
var statearr_40260_40317 = state_40251__$1;
(statearr_40260_40317[(1)] = (29));

} else {
var statearr_40261_40318 = state_40251__$1;
(statearr_40261_40318[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (4))){
var inst_40169 = (state_40251[(2)]);
var state_40251__$1 = state_40251;
if(cljs.core.truth_(inst_40169)){
var statearr_40262_40319 = state_40251__$1;
(statearr_40262_40319[(1)] = (8));

} else {
var statearr_40263_40320 = state_40251__$1;
(statearr_40263_40320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (15))){
var inst_40196 = (state_40251[(2)]);
var state_40251__$1 = state_40251;
if(cljs.core.truth_(inst_40196)){
var statearr_40264_40321 = state_40251__$1;
(statearr_40264_40321[(1)] = (19));

} else {
var statearr_40265_40322 = state_40251__$1;
(statearr_40265_40322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (21))){
var inst_40201 = (state_40251[(12)]);
var inst_40201__$1 = (state_40251[(2)]);
var inst_40202 = cljs.core.get.call(null,inst_40201__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40203 = cljs.core.get.call(null,inst_40201__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40204 = cljs.core.get.call(null,inst_40201__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40251__$1 = (function (){var statearr_40266 = state_40251;
(statearr_40266[(13)] = inst_40203);

(statearr_40266[(12)] = inst_40201__$1);

(statearr_40266[(9)] = inst_40202);

return statearr_40266;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40251__$1,(22),inst_40204);
} else {
if((state_val_40252 === (31))){
var inst_40233 = (state_40251[(2)]);
var state_40251__$1 = state_40251;
if(cljs.core.truth_(inst_40233)){
var statearr_40267_40323 = state_40251__$1;
(statearr_40267_40323[(1)] = (32));

} else {
var statearr_40268_40324 = state_40251__$1;
(statearr_40268_40324[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (32))){
var inst_40210 = (state_40251[(14)]);
var state_40251__$1 = state_40251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40251__$1,(35),out,inst_40210);
} else {
if((state_val_40252 === (33))){
var inst_40201 = (state_40251[(12)]);
var inst_40178 = inst_40201;
var state_40251__$1 = (function (){var statearr_40269 = state_40251;
(statearr_40269[(7)] = inst_40178);

return statearr_40269;
})();
var statearr_40270_40325 = state_40251__$1;
(statearr_40270_40325[(2)] = null);

(statearr_40270_40325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (13))){
var inst_40178 = (state_40251[(7)]);
var inst_40185 = inst_40178.cljs$lang$protocol_mask$partition0$;
var inst_40186 = (inst_40185 & (64));
var inst_40187 = inst_40178.cljs$core$ISeq$;
var inst_40188 = (cljs.core.PROTOCOL_SENTINEL === inst_40187);
var inst_40189 = (inst_40186) || (inst_40188);
var state_40251__$1 = state_40251;
if(cljs.core.truth_(inst_40189)){
var statearr_40271_40326 = state_40251__$1;
(statearr_40271_40326[(1)] = (16));

} else {
var statearr_40272_40327 = state_40251__$1;
(statearr_40272_40327[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (22))){
var inst_40210 = (state_40251[(14)]);
var inst_40211 = (state_40251[(10)]);
var inst_40209 = (state_40251[(2)]);
var inst_40210__$1 = cljs.core.nth.call(null,inst_40209,(0),null);
var inst_40211__$1 = cljs.core.nth.call(null,inst_40209,(1),null);
var inst_40212 = (inst_40210__$1 == null);
var inst_40213 = cljs.core._EQ_.call(null,inst_40211__$1,change);
var inst_40214 = (inst_40212) || (inst_40213);
var state_40251__$1 = (function (){var statearr_40273 = state_40251;
(statearr_40273[(14)] = inst_40210__$1);

(statearr_40273[(10)] = inst_40211__$1);

return statearr_40273;
})();
if(cljs.core.truth_(inst_40214)){
var statearr_40274_40328 = state_40251__$1;
(statearr_40274_40328[(1)] = (23));

} else {
var statearr_40275_40329 = state_40251__$1;
(statearr_40275_40329[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (36))){
var inst_40201 = (state_40251[(12)]);
var inst_40178 = inst_40201;
var state_40251__$1 = (function (){var statearr_40276 = state_40251;
(statearr_40276[(7)] = inst_40178);

return statearr_40276;
})();
var statearr_40277_40330 = state_40251__$1;
(statearr_40277_40330[(2)] = null);

(statearr_40277_40330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (29))){
var inst_40225 = (state_40251[(11)]);
var state_40251__$1 = state_40251;
var statearr_40278_40331 = state_40251__$1;
(statearr_40278_40331[(2)] = inst_40225);

(statearr_40278_40331[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (6))){
var state_40251__$1 = state_40251;
var statearr_40279_40332 = state_40251__$1;
(statearr_40279_40332[(2)] = false);

(statearr_40279_40332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (28))){
var inst_40221 = (state_40251[(2)]);
var inst_40222 = calc_state.call(null);
var inst_40178 = inst_40222;
var state_40251__$1 = (function (){var statearr_40280 = state_40251;
(statearr_40280[(15)] = inst_40221);

(statearr_40280[(7)] = inst_40178);

return statearr_40280;
})();
var statearr_40281_40333 = state_40251__$1;
(statearr_40281_40333[(2)] = null);

(statearr_40281_40333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (25))){
var inst_40247 = (state_40251[(2)]);
var state_40251__$1 = state_40251;
var statearr_40282_40334 = state_40251__$1;
(statearr_40282_40334[(2)] = inst_40247);

(statearr_40282_40334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (34))){
var inst_40245 = (state_40251[(2)]);
var state_40251__$1 = state_40251;
var statearr_40283_40335 = state_40251__$1;
(statearr_40283_40335[(2)] = inst_40245);

(statearr_40283_40335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (17))){
var state_40251__$1 = state_40251;
var statearr_40284_40336 = state_40251__$1;
(statearr_40284_40336[(2)] = false);

(statearr_40284_40336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (3))){
var state_40251__$1 = state_40251;
var statearr_40285_40337 = state_40251__$1;
(statearr_40285_40337[(2)] = false);

(statearr_40285_40337[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (12))){
var inst_40249 = (state_40251[(2)]);
var state_40251__$1 = state_40251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40251__$1,inst_40249);
} else {
if((state_val_40252 === (2))){
var inst_40153 = (state_40251[(8)]);
var inst_40158 = inst_40153.cljs$lang$protocol_mask$partition0$;
var inst_40159 = (inst_40158 & (64));
var inst_40160 = inst_40153.cljs$core$ISeq$;
var inst_40161 = (cljs.core.PROTOCOL_SENTINEL === inst_40160);
var inst_40162 = (inst_40159) || (inst_40161);
var state_40251__$1 = state_40251;
if(cljs.core.truth_(inst_40162)){
var statearr_40286_40338 = state_40251__$1;
(statearr_40286_40338[(1)] = (5));

} else {
var statearr_40287_40339 = state_40251__$1;
(statearr_40287_40339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (23))){
var inst_40210 = (state_40251[(14)]);
var inst_40216 = (inst_40210 == null);
var state_40251__$1 = state_40251;
if(cljs.core.truth_(inst_40216)){
var statearr_40288_40340 = state_40251__$1;
(statearr_40288_40340[(1)] = (26));

} else {
var statearr_40289_40341 = state_40251__$1;
(statearr_40289_40341[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (35))){
var inst_40236 = (state_40251[(2)]);
var state_40251__$1 = state_40251;
if(cljs.core.truth_(inst_40236)){
var statearr_40290_40342 = state_40251__$1;
(statearr_40290_40342[(1)] = (36));

} else {
var statearr_40291_40343 = state_40251__$1;
(statearr_40291_40343[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (19))){
var inst_40178 = (state_40251[(7)]);
var inst_40198 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40178);
var state_40251__$1 = state_40251;
var statearr_40292_40344 = state_40251__$1;
(statearr_40292_40344[(2)] = inst_40198);

(statearr_40292_40344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (11))){
var inst_40178 = (state_40251[(7)]);
var inst_40182 = (inst_40178 == null);
var inst_40183 = cljs.core.not.call(null,inst_40182);
var state_40251__$1 = state_40251;
if(inst_40183){
var statearr_40293_40345 = state_40251__$1;
(statearr_40293_40345[(1)] = (13));

} else {
var statearr_40294_40346 = state_40251__$1;
(statearr_40294_40346[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (9))){
var inst_40153 = (state_40251[(8)]);
var state_40251__$1 = state_40251;
var statearr_40295_40347 = state_40251__$1;
(statearr_40295_40347[(2)] = inst_40153);

(statearr_40295_40347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (5))){
var state_40251__$1 = state_40251;
var statearr_40296_40348 = state_40251__$1;
(statearr_40296_40348[(2)] = true);

(statearr_40296_40348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (14))){
var state_40251__$1 = state_40251;
var statearr_40297_40349 = state_40251__$1;
(statearr_40297_40349[(2)] = false);

(statearr_40297_40349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (26))){
var inst_40211 = (state_40251[(10)]);
var inst_40218 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40211);
var state_40251__$1 = state_40251;
var statearr_40298_40350 = state_40251__$1;
(statearr_40298_40350[(2)] = inst_40218);

(statearr_40298_40350[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (16))){
var state_40251__$1 = state_40251;
var statearr_40299_40351 = state_40251__$1;
(statearr_40299_40351[(2)] = true);

(statearr_40299_40351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (38))){
var inst_40241 = (state_40251[(2)]);
var state_40251__$1 = state_40251;
var statearr_40300_40352 = state_40251__$1;
(statearr_40300_40352[(2)] = inst_40241);

(statearr_40300_40352[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (30))){
var inst_40203 = (state_40251[(13)]);
var inst_40202 = (state_40251[(9)]);
var inst_40211 = (state_40251[(10)]);
var inst_40228 = cljs.core.empty_QMARK_.call(null,inst_40202);
var inst_40229 = inst_40203.call(null,inst_40211);
var inst_40230 = cljs.core.not.call(null,inst_40229);
var inst_40231 = (inst_40228) && (inst_40230);
var state_40251__$1 = state_40251;
var statearr_40301_40353 = state_40251__$1;
(statearr_40301_40353[(2)] = inst_40231);

(statearr_40301_40353[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (10))){
var inst_40153 = (state_40251[(8)]);
var inst_40174 = (state_40251[(2)]);
var inst_40175 = cljs.core.get.call(null,inst_40174,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40176 = cljs.core.get.call(null,inst_40174,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40177 = cljs.core.get.call(null,inst_40174,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40178 = inst_40153;
var state_40251__$1 = (function (){var statearr_40302 = state_40251;
(statearr_40302[(16)] = inst_40175);

(statearr_40302[(17)] = inst_40176);

(statearr_40302[(18)] = inst_40177);

(statearr_40302[(7)] = inst_40178);

return statearr_40302;
})();
var statearr_40303_40354 = state_40251__$1;
(statearr_40303_40354[(2)] = null);

(statearr_40303_40354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (18))){
var inst_40193 = (state_40251[(2)]);
var state_40251__$1 = state_40251;
var statearr_40304_40355 = state_40251__$1;
(statearr_40304_40355[(2)] = inst_40193);

(statearr_40304_40355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (37))){
var state_40251__$1 = state_40251;
var statearr_40305_40356 = state_40251__$1;
(statearr_40305_40356[(2)] = null);

(statearr_40305_40356[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40252 === (8))){
var inst_40153 = (state_40251[(8)]);
var inst_40171 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40153);
var state_40251__$1 = state_40251;
var statearr_40306_40357 = state_40251__$1;
(statearr_40306_40357[(2)] = inst_40171);

(statearr_40306_40357[(1)] = (10));


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
});})(c__30625__auto___40311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30537__auto__,c__30625__auto___40311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30538__auto__ = null;
var cljs$core$async$mix_$_state_machine__30538__auto____0 = (function (){
var statearr_40307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40307[(0)] = cljs$core$async$mix_$_state_machine__30538__auto__);

(statearr_40307[(1)] = (1));

return statearr_40307;
});
var cljs$core$async$mix_$_state_machine__30538__auto____1 = (function (state_40251){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_40251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40308){if((e40308 instanceof Object)){
var ex__30541__auto__ = e40308;
var statearr_40309_40358 = state_40251;
(statearr_40309_40358[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40359 = state_40251;
state_40251 = G__40359;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30538__auto__ = function(state_40251){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30538__auto____1.call(this,state_40251);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30538__auto____0;
cljs$core$async$mix_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30538__auto____1;
return cljs$core$async$mix_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___40311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30627__auto__ = (function (){var statearr_40310 = f__30626__auto__.call(null);
(statearr_40310[(6)] = c__30625__auto___40311);

return statearr_40310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___40311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__27879__auto__ = (((p == null))?null:p);
var m__27880__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27879__auto__)]);
if(!((m__27880__auto__ == null))){
return m__27880__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27880__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27880__auto____$1 == null))){
return m__27880__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__27879__auto__ = (((p == null))?null:p);
var m__27880__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27879__auto__)]);
if(!((m__27880__auto__ == null))){
return m__27880__auto__.call(null,p,v,ch);
} else {
var m__27880__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27880__auto____$1 == null))){
return m__27880__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40361 = arguments.length;
switch (G__40361) {
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
var x__27879__auto__ = (((p == null))?null:p);
var m__27880__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27879__auto__)]);
if(!((m__27880__auto__ == null))){
return m__27880__auto__.call(null,p);
} else {
var m__27880__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27880__auto____$1 == null))){
return m__27880__auto____$1.call(null,p);
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
var x__27879__auto__ = (((p == null))?null:p);
var m__27880__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27879__auto__)]);
if(!((m__27880__auto__ == null))){
return m__27880__auto__.call(null,p,v);
} else {
var m__27880__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27880__auto____$1 == null))){
return m__27880__auto____$1.call(null,p,v);
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
var G__40365 = arguments.length;
switch (G__40365) {
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
var or__27196__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27196__auto__,mults){
return (function (p1__40363_SHARP_){
if(cljs.core.truth_(p1__40363_SHARP_.call(null,topic))){
return p1__40363_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40363_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27196__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40366 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40367){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40367 = meta40367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40368,meta40367__$1){
var self__ = this;
var _40368__$1 = this;
return (new cljs.core.async.t_cljs$core$async40366(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40367__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40368){
var self__ = this;
var _40368__$1 = this;
return self__.meta40367;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40366.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40366.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40366.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40366.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async40366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40366.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40367","meta40367",-1781035853,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40366";

cljs.core.async.t_cljs$core$async40366.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async40366");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40366 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40366(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40367){
return (new cljs.core.async.t_cljs$core$async40366(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40367));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40366(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30625__auto___40486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___40486,mults,ensure_mult,p){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___40486,mults,ensure_mult,p){
return (function (state_40440){
var state_val_40441 = (state_40440[(1)]);
if((state_val_40441 === (7))){
var inst_40436 = (state_40440[(2)]);
var state_40440__$1 = state_40440;
var statearr_40442_40487 = state_40440__$1;
(statearr_40442_40487[(2)] = inst_40436);

(statearr_40442_40487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (20))){
var state_40440__$1 = state_40440;
var statearr_40443_40488 = state_40440__$1;
(statearr_40443_40488[(2)] = null);

(statearr_40443_40488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (1))){
var state_40440__$1 = state_40440;
var statearr_40444_40489 = state_40440__$1;
(statearr_40444_40489[(2)] = null);

(statearr_40444_40489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (24))){
var inst_40419 = (state_40440[(7)]);
var inst_40428 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40419);
var state_40440__$1 = state_40440;
var statearr_40445_40490 = state_40440__$1;
(statearr_40445_40490[(2)] = inst_40428);

(statearr_40445_40490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (4))){
var inst_40371 = (state_40440[(8)]);
var inst_40371__$1 = (state_40440[(2)]);
var inst_40372 = (inst_40371__$1 == null);
var state_40440__$1 = (function (){var statearr_40446 = state_40440;
(statearr_40446[(8)] = inst_40371__$1);

return statearr_40446;
})();
if(cljs.core.truth_(inst_40372)){
var statearr_40447_40491 = state_40440__$1;
(statearr_40447_40491[(1)] = (5));

} else {
var statearr_40448_40492 = state_40440__$1;
(statearr_40448_40492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (15))){
var inst_40413 = (state_40440[(2)]);
var state_40440__$1 = state_40440;
var statearr_40449_40493 = state_40440__$1;
(statearr_40449_40493[(2)] = inst_40413);

(statearr_40449_40493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (21))){
var inst_40433 = (state_40440[(2)]);
var state_40440__$1 = (function (){var statearr_40450 = state_40440;
(statearr_40450[(9)] = inst_40433);

return statearr_40450;
})();
var statearr_40451_40494 = state_40440__$1;
(statearr_40451_40494[(2)] = null);

(statearr_40451_40494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (13))){
var inst_40395 = (state_40440[(10)]);
var inst_40397 = cljs.core.chunked_seq_QMARK_.call(null,inst_40395);
var state_40440__$1 = state_40440;
if(inst_40397){
var statearr_40452_40495 = state_40440__$1;
(statearr_40452_40495[(1)] = (16));

} else {
var statearr_40453_40496 = state_40440__$1;
(statearr_40453_40496[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (22))){
var inst_40425 = (state_40440[(2)]);
var state_40440__$1 = state_40440;
if(cljs.core.truth_(inst_40425)){
var statearr_40454_40497 = state_40440__$1;
(statearr_40454_40497[(1)] = (23));

} else {
var statearr_40455_40498 = state_40440__$1;
(statearr_40455_40498[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (6))){
var inst_40371 = (state_40440[(8)]);
var inst_40419 = (state_40440[(7)]);
var inst_40421 = (state_40440[(11)]);
var inst_40419__$1 = topic_fn.call(null,inst_40371);
var inst_40420 = cljs.core.deref.call(null,mults);
var inst_40421__$1 = cljs.core.get.call(null,inst_40420,inst_40419__$1);
var state_40440__$1 = (function (){var statearr_40456 = state_40440;
(statearr_40456[(7)] = inst_40419__$1);

(statearr_40456[(11)] = inst_40421__$1);

return statearr_40456;
})();
if(cljs.core.truth_(inst_40421__$1)){
var statearr_40457_40499 = state_40440__$1;
(statearr_40457_40499[(1)] = (19));

} else {
var statearr_40458_40500 = state_40440__$1;
(statearr_40458_40500[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (25))){
var inst_40430 = (state_40440[(2)]);
var state_40440__$1 = state_40440;
var statearr_40459_40501 = state_40440__$1;
(statearr_40459_40501[(2)] = inst_40430);

(statearr_40459_40501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (17))){
var inst_40395 = (state_40440[(10)]);
var inst_40404 = cljs.core.first.call(null,inst_40395);
var inst_40405 = cljs.core.async.muxch_STAR_.call(null,inst_40404);
var inst_40406 = cljs.core.async.close_BANG_.call(null,inst_40405);
var inst_40407 = cljs.core.next.call(null,inst_40395);
var inst_40381 = inst_40407;
var inst_40382 = null;
var inst_40383 = (0);
var inst_40384 = (0);
var state_40440__$1 = (function (){var statearr_40460 = state_40440;
(statearr_40460[(12)] = inst_40382);

(statearr_40460[(13)] = inst_40383);

(statearr_40460[(14)] = inst_40384);

(statearr_40460[(15)] = inst_40381);

(statearr_40460[(16)] = inst_40406);

return statearr_40460;
})();
var statearr_40461_40502 = state_40440__$1;
(statearr_40461_40502[(2)] = null);

(statearr_40461_40502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (3))){
var inst_40438 = (state_40440[(2)]);
var state_40440__$1 = state_40440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40440__$1,inst_40438);
} else {
if((state_val_40441 === (12))){
var inst_40415 = (state_40440[(2)]);
var state_40440__$1 = state_40440;
var statearr_40462_40503 = state_40440__$1;
(statearr_40462_40503[(2)] = inst_40415);

(statearr_40462_40503[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (2))){
var state_40440__$1 = state_40440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40440__$1,(4),ch);
} else {
if((state_val_40441 === (23))){
var state_40440__$1 = state_40440;
var statearr_40463_40504 = state_40440__$1;
(statearr_40463_40504[(2)] = null);

(statearr_40463_40504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (19))){
var inst_40371 = (state_40440[(8)]);
var inst_40421 = (state_40440[(11)]);
var inst_40423 = cljs.core.async.muxch_STAR_.call(null,inst_40421);
var state_40440__$1 = state_40440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40440__$1,(22),inst_40423,inst_40371);
} else {
if((state_val_40441 === (11))){
var inst_40395 = (state_40440[(10)]);
var inst_40381 = (state_40440[(15)]);
var inst_40395__$1 = cljs.core.seq.call(null,inst_40381);
var state_40440__$1 = (function (){var statearr_40464 = state_40440;
(statearr_40464[(10)] = inst_40395__$1);

return statearr_40464;
})();
if(inst_40395__$1){
var statearr_40465_40505 = state_40440__$1;
(statearr_40465_40505[(1)] = (13));

} else {
var statearr_40466_40506 = state_40440__$1;
(statearr_40466_40506[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (9))){
var inst_40417 = (state_40440[(2)]);
var state_40440__$1 = state_40440;
var statearr_40467_40507 = state_40440__$1;
(statearr_40467_40507[(2)] = inst_40417);

(statearr_40467_40507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (5))){
var inst_40378 = cljs.core.deref.call(null,mults);
var inst_40379 = cljs.core.vals.call(null,inst_40378);
var inst_40380 = cljs.core.seq.call(null,inst_40379);
var inst_40381 = inst_40380;
var inst_40382 = null;
var inst_40383 = (0);
var inst_40384 = (0);
var state_40440__$1 = (function (){var statearr_40468 = state_40440;
(statearr_40468[(12)] = inst_40382);

(statearr_40468[(13)] = inst_40383);

(statearr_40468[(14)] = inst_40384);

(statearr_40468[(15)] = inst_40381);

return statearr_40468;
})();
var statearr_40469_40508 = state_40440__$1;
(statearr_40469_40508[(2)] = null);

(statearr_40469_40508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (14))){
var state_40440__$1 = state_40440;
var statearr_40473_40509 = state_40440__$1;
(statearr_40473_40509[(2)] = null);

(statearr_40473_40509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (16))){
var inst_40395 = (state_40440[(10)]);
var inst_40399 = cljs.core.chunk_first.call(null,inst_40395);
var inst_40400 = cljs.core.chunk_rest.call(null,inst_40395);
var inst_40401 = cljs.core.count.call(null,inst_40399);
var inst_40381 = inst_40400;
var inst_40382 = inst_40399;
var inst_40383 = inst_40401;
var inst_40384 = (0);
var state_40440__$1 = (function (){var statearr_40474 = state_40440;
(statearr_40474[(12)] = inst_40382);

(statearr_40474[(13)] = inst_40383);

(statearr_40474[(14)] = inst_40384);

(statearr_40474[(15)] = inst_40381);

return statearr_40474;
})();
var statearr_40475_40510 = state_40440__$1;
(statearr_40475_40510[(2)] = null);

(statearr_40475_40510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (10))){
var inst_40382 = (state_40440[(12)]);
var inst_40383 = (state_40440[(13)]);
var inst_40384 = (state_40440[(14)]);
var inst_40381 = (state_40440[(15)]);
var inst_40389 = cljs.core._nth.call(null,inst_40382,inst_40384);
var inst_40390 = cljs.core.async.muxch_STAR_.call(null,inst_40389);
var inst_40391 = cljs.core.async.close_BANG_.call(null,inst_40390);
var inst_40392 = (inst_40384 + (1));
var tmp40470 = inst_40382;
var tmp40471 = inst_40383;
var tmp40472 = inst_40381;
var inst_40381__$1 = tmp40472;
var inst_40382__$1 = tmp40470;
var inst_40383__$1 = tmp40471;
var inst_40384__$1 = inst_40392;
var state_40440__$1 = (function (){var statearr_40476 = state_40440;
(statearr_40476[(12)] = inst_40382__$1);

(statearr_40476[(13)] = inst_40383__$1);

(statearr_40476[(14)] = inst_40384__$1);

(statearr_40476[(15)] = inst_40381__$1);

(statearr_40476[(17)] = inst_40391);

return statearr_40476;
})();
var statearr_40477_40511 = state_40440__$1;
(statearr_40477_40511[(2)] = null);

(statearr_40477_40511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (18))){
var inst_40410 = (state_40440[(2)]);
var state_40440__$1 = state_40440;
var statearr_40478_40512 = state_40440__$1;
(statearr_40478_40512[(2)] = inst_40410);

(statearr_40478_40512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40441 === (8))){
var inst_40383 = (state_40440[(13)]);
var inst_40384 = (state_40440[(14)]);
var inst_40386 = (inst_40384 < inst_40383);
var inst_40387 = inst_40386;
var state_40440__$1 = state_40440;
if(cljs.core.truth_(inst_40387)){
var statearr_40479_40513 = state_40440__$1;
(statearr_40479_40513[(1)] = (10));

} else {
var statearr_40480_40514 = state_40440__$1;
(statearr_40480_40514[(1)] = (11));

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
});})(c__30625__auto___40486,mults,ensure_mult,p))
;
return ((function (switch__30537__auto__,c__30625__auto___40486,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_40481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40481[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_40481[(1)] = (1));

return statearr_40481;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_40440){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_40440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40482){if((e40482 instanceof Object)){
var ex__30541__auto__ = e40482;
var statearr_40483_40515 = state_40440;
(statearr_40483_40515[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40516 = state_40440;
state_40440 = G__40516;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_40440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_40440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___40486,mults,ensure_mult,p))
})();
var state__30627__auto__ = (function (){var statearr_40484 = f__30626__auto__.call(null);
(statearr_40484[(6)] = c__30625__auto___40486);

return statearr_40484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___40486,mults,ensure_mult,p))
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
var G__40518 = arguments.length;
switch (G__40518) {
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
var G__40521 = arguments.length;
switch (G__40521) {
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
var G__40524 = arguments.length;
switch (G__40524) {
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
var c__30625__auto___40591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___40591,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___40591,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40563){
var state_val_40564 = (state_40563[(1)]);
if((state_val_40564 === (7))){
var state_40563__$1 = state_40563;
var statearr_40565_40592 = state_40563__$1;
(statearr_40565_40592[(2)] = null);

(statearr_40565_40592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40564 === (1))){
var state_40563__$1 = state_40563;
var statearr_40566_40593 = state_40563__$1;
(statearr_40566_40593[(2)] = null);

(statearr_40566_40593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40564 === (4))){
var inst_40527 = (state_40563[(7)]);
var inst_40529 = (inst_40527 < cnt);
var state_40563__$1 = state_40563;
if(cljs.core.truth_(inst_40529)){
var statearr_40567_40594 = state_40563__$1;
(statearr_40567_40594[(1)] = (6));

} else {
var statearr_40568_40595 = state_40563__$1;
(statearr_40568_40595[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40564 === (15))){
var inst_40559 = (state_40563[(2)]);
var state_40563__$1 = state_40563;
var statearr_40569_40596 = state_40563__$1;
(statearr_40569_40596[(2)] = inst_40559);

(statearr_40569_40596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40564 === (13))){
var inst_40552 = cljs.core.async.close_BANG_.call(null,out);
var state_40563__$1 = state_40563;
var statearr_40570_40597 = state_40563__$1;
(statearr_40570_40597[(2)] = inst_40552);

(statearr_40570_40597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40564 === (6))){
var state_40563__$1 = state_40563;
var statearr_40571_40598 = state_40563__$1;
(statearr_40571_40598[(2)] = null);

(statearr_40571_40598[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40564 === (3))){
var inst_40561 = (state_40563[(2)]);
var state_40563__$1 = state_40563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40563__$1,inst_40561);
} else {
if((state_val_40564 === (12))){
var inst_40549 = (state_40563[(8)]);
var inst_40549__$1 = (state_40563[(2)]);
var inst_40550 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40549__$1);
var state_40563__$1 = (function (){var statearr_40572 = state_40563;
(statearr_40572[(8)] = inst_40549__$1);

return statearr_40572;
})();
if(cljs.core.truth_(inst_40550)){
var statearr_40573_40599 = state_40563__$1;
(statearr_40573_40599[(1)] = (13));

} else {
var statearr_40574_40600 = state_40563__$1;
(statearr_40574_40600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40564 === (2))){
var inst_40526 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40527 = (0);
var state_40563__$1 = (function (){var statearr_40575 = state_40563;
(statearr_40575[(7)] = inst_40527);

(statearr_40575[(9)] = inst_40526);

return statearr_40575;
})();
var statearr_40576_40601 = state_40563__$1;
(statearr_40576_40601[(2)] = null);

(statearr_40576_40601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40564 === (11))){
var inst_40527 = (state_40563[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40563,(10),Object,null,(9));
var inst_40536 = chs__$1.call(null,inst_40527);
var inst_40537 = done.call(null,inst_40527);
var inst_40538 = cljs.core.async.take_BANG_.call(null,inst_40536,inst_40537);
var state_40563__$1 = state_40563;
var statearr_40577_40602 = state_40563__$1;
(statearr_40577_40602[(2)] = inst_40538);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40563__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40564 === (9))){
var inst_40527 = (state_40563[(7)]);
var inst_40540 = (state_40563[(2)]);
var inst_40541 = (inst_40527 + (1));
var inst_40527__$1 = inst_40541;
var state_40563__$1 = (function (){var statearr_40578 = state_40563;
(statearr_40578[(7)] = inst_40527__$1);

(statearr_40578[(10)] = inst_40540);

return statearr_40578;
})();
var statearr_40579_40603 = state_40563__$1;
(statearr_40579_40603[(2)] = null);

(statearr_40579_40603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40564 === (5))){
var inst_40547 = (state_40563[(2)]);
var state_40563__$1 = (function (){var statearr_40580 = state_40563;
(statearr_40580[(11)] = inst_40547);

return statearr_40580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40563__$1,(12),dchan);
} else {
if((state_val_40564 === (14))){
var inst_40549 = (state_40563[(8)]);
var inst_40554 = cljs.core.apply.call(null,f,inst_40549);
var state_40563__$1 = state_40563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40563__$1,(16),out,inst_40554);
} else {
if((state_val_40564 === (16))){
var inst_40556 = (state_40563[(2)]);
var state_40563__$1 = (function (){var statearr_40581 = state_40563;
(statearr_40581[(12)] = inst_40556);

return statearr_40581;
})();
var statearr_40582_40604 = state_40563__$1;
(statearr_40582_40604[(2)] = null);

(statearr_40582_40604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40564 === (10))){
var inst_40531 = (state_40563[(2)]);
var inst_40532 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40563__$1 = (function (){var statearr_40583 = state_40563;
(statearr_40583[(13)] = inst_40531);

return statearr_40583;
})();
var statearr_40584_40605 = state_40563__$1;
(statearr_40584_40605[(2)] = inst_40532);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40563__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40564 === (8))){
var inst_40545 = (state_40563[(2)]);
var state_40563__$1 = state_40563;
var statearr_40585_40606 = state_40563__$1;
(statearr_40585_40606[(2)] = inst_40545);

(statearr_40585_40606[(1)] = (5));


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
});})(c__30625__auto___40591,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30537__auto__,c__30625__auto___40591,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_40586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40586[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_40586[(1)] = (1));

return statearr_40586;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_40563){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_40563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40587){if((e40587 instanceof Object)){
var ex__30541__auto__ = e40587;
var statearr_40588_40607 = state_40563;
(statearr_40588_40607[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40608 = state_40563;
state_40563 = G__40608;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_40563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_40563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___40591,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30627__auto__ = (function (){var statearr_40589 = f__30626__auto__.call(null);
(statearr_40589[(6)] = c__30625__auto___40591);

return statearr_40589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___40591,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__40611 = arguments.length;
switch (G__40611) {
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
var c__30625__auto___40665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___40665,out){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___40665,out){
return (function (state_40643){
var state_val_40644 = (state_40643[(1)]);
if((state_val_40644 === (7))){
var inst_40622 = (state_40643[(7)]);
var inst_40623 = (state_40643[(8)]);
var inst_40622__$1 = (state_40643[(2)]);
var inst_40623__$1 = cljs.core.nth.call(null,inst_40622__$1,(0),null);
var inst_40624 = cljs.core.nth.call(null,inst_40622__$1,(1),null);
var inst_40625 = (inst_40623__$1 == null);
var state_40643__$1 = (function (){var statearr_40645 = state_40643;
(statearr_40645[(7)] = inst_40622__$1);

(statearr_40645[(9)] = inst_40624);

(statearr_40645[(8)] = inst_40623__$1);

return statearr_40645;
})();
if(cljs.core.truth_(inst_40625)){
var statearr_40646_40666 = state_40643__$1;
(statearr_40646_40666[(1)] = (8));

} else {
var statearr_40647_40667 = state_40643__$1;
(statearr_40647_40667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40644 === (1))){
var inst_40612 = cljs.core.vec.call(null,chs);
var inst_40613 = inst_40612;
var state_40643__$1 = (function (){var statearr_40648 = state_40643;
(statearr_40648[(10)] = inst_40613);

return statearr_40648;
})();
var statearr_40649_40668 = state_40643__$1;
(statearr_40649_40668[(2)] = null);

(statearr_40649_40668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40644 === (4))){
var inst_40613 = (state_40643[(10)]);
var state_40643__$1 = state_40643;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40643__$1,(7),inst_40613);
} else {
if((state_val_40644 === (6))){
var inst_40639 = (state_40643[(2)]);
var state_40643__$1 = state_40643;
var statearr_40650_40669 = state_40643__$1;
(statearr_40650_40669[(2)] = inst_40639);

(statearr_40650_40669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40644 === (3))){
var inst_40641 = (state_40643[(2)]);
var state_40643__$1 = state_40643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40643__$1,inst_40641);
} else {
if((state_val_40644 === (2))){
var inst_40613 = (state_40643[(10)]);
var inst_40615 = cljs.core.count.call(null,inst_40613);
var inst_40616 = (inst_40615 > (0));
var state_40643__$1 = state_40643;
if(cljs.core.truth_(inst_40616)){
var statearr_40652_40670 = state_40643__$1;
(statearr_40652_40670[(1)] = (4));

} else {
var statearr_40653_40671 = state_40643__$1;
(statearr_40653_40671[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40644 === (11))){
var inst_40613 = (state_40643[(10)]);
var inst_40632 = (state_40643[(2)]);
var tmp40651 = inst_40613;
var inst_40613__$1 = tmp40651;
var state_40643__$1 = (function (){var statearr_40654 = state_40643;
(statearr_40654[(10)] = inst_40613__$1);

(statearr_40654[(11)] = inst_40632);

return statearr_40654;
})();
var statearr_40655_40672 = state_40643__$1;
(statearr_40655_40672[(2)] = null);

(statearr_40655_40672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40644 === (9))){
var inst_40623 = (state_40643[(8)]);
var state_40643__$1 = state_40643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40643__$1,(11),out,inst_40623);
} else {
if((state_val_40644 === (5))){
var inst_40637 = cljs.core.async.close_BANG_.call(null,out);
var state_40643__$1 = state_40643;
var statearr_40656_40673 = state_40643__$1;
(statearr_40656_40673[(2)] = inst_40637);

(statearr_40656_40673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40644 === (10))){
var inst_40635 = (state_40643[(2)]);
var state_40643__$1 = state_40643;
var statearr_40657_40674 = state_40643__$1;
(statearr_40657_40674[(2)] = inst_40635);

(statearr_40657_40674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40644 === (8))){
var inst_40622 = (state_40643[(7)]);
var inst_40624 = (state_40643[(9)]);
var inst_40613 = (state_40643[(10)]);
var inst_40623 = (state_40643[(8)]);
var inst_40627 = (function (){var cs = inst_40613;
var vec__40618 = inst_40622;
var v = inst_40623;
var c = inst_40624;
return ((function (cs,vec__40618,v,c,inst_40622,inst_40624,inst_40613,inst_40623,state_val_40644,c__30625__auto___40665,out){
return (function (p1__40609_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40609_SHARP_);
});
;})(cs,vec__40618,v,c,inst_40622,inst_40624,inst_40613,inst_40623,state_val_40644,c__30625__auto___40665,out))
})();
var inst_40628 = cljs.core.filterv.call(null,inst_40627,inst_40613);
var inst_40613__$1 = inst_40628;
var state_40643__$1 = (function (){var statearr_40658 = state_40643;
(statearr_40658[(10)] = inst_40613__$1);

return statearr_40658;
})();
var statearr_40659_40675 = state_40643__$1;
(statearr_40659_40675[(2)] = null);

(statearr_40659_40675[(1)] = (2));


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
});})(c__30625__auto___40665,out))
;
return ((function (switch__30537__auto__,c__30625__auto___40665,out){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_40660 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40660[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_40660[(1)] = (1));

return statearr_40660;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_40643){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_40643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40661){if((e40661 instanceof Object)){
var ex__30541__auto__ = e40661;
var statearr_40662_40676 = state_40643;
(statearr_40662_40676[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40677 = state_40643;
state_40643 = G__40677;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_40643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_40643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___40665,out))
})();
var state__30627__auto__ = (function (){var statearr_40663 = f__30626__auto__.call(null);
(statearr_40663[(6)] = c__30625__auto___40665);

return statearr_40663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___40665,out))
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
var G__40679 = arguments.length;
switch (G__40679) {
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
var c__30625__auto___40724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___40724,out){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___40724,out){
return (function (state_40703){
var state_val_40704 = (state_40703[(1)]);
if((state_val_40704 === (7))){
var inst_40685 = (state_40703[(7)]);
var inst_40685__$1 = (state_40703[(2)]);
var inst_40686 = (inst_40685__$1 == null);
var inst_40687 = cljs.core.not.call(null,inst_40686);
var state_40703__$1 = (function (){var statearr_40705 = state_40703;
(statearr_40705[(7)] = inst_40685__$1);

return statearr_40705;
})();
if(inst_40687){
var statearr_40706_40725 = state_40703__$1;
(statearr_40706_40725[(1)] = (8));

} else {
var statearr_40707_40726 = state_40703__$1;
(statearr_40707_40726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (1))){
var inst_40680 = (0);
var state_40703__$1 = (function (){var statearr_40708 = state_40703;
(statearr_40708[(8)] = inst_40680);

return statearr_40708;
})();
var statearr_40709_40727 = state_40703__$1;
(statearr_40709_40727[(2)] = null);

(statearr_40709_40727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (4))){
var state_40703__$1 = state_40703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40703__$1,(7),ch);
} else {
if((state_val_40704 === (6))){
var inst_40698 = (state_40703[(2)]);
var state_40703__$1 = state_40703;
var statearr_40710_40728 = state_40703__$1;
(statearr_40710_40728[(2)] = inst_40698);

(statearr_40710_40728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (3))){
var inst_40700 = (state_40703[(2)]);
var inst_40701 = cljs.core.async.close_BANG_.call(null,out);
var state_40703__$1 = (function (){var statearr_40711 = state_40703;
(statearr_40711[(9)] = inst_40700);

return statearr_40711;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40703__$1,inst_40701);
} else {
if((state_val_40704 === (2))){
var inst_40680 = (state_40703[(8)]);
var inst_40682 = (inst_40680 < n);
var state_40703__$1 = state_40703;
if(cljs.core.truth_(inst_40682)){
var statearr_40712_40729 = state_40703__$1;
(statearr_40712_40729[(1)] = (4));

} else {
var statearr_40713_40730 = state_40703__$1;
(statearr_40713_40730[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (11))){
var inst_40680 = (state_40703[(8)]);
var inst_40690 = (state_40703[(2)]);
var inst_40691 = (inst_40680 + (1));
var inst_40680__$1 = inst_40691;
var state_40703__$1 = (function (){var statearr_40714 = state_40703;
(statearr_40714[(10)] = inst_40690);

(statearr_40714[(8)] = inst_40680__$1);

return statearr_40714;
})();
var statearr_40715_40731 = state_40703__$1;
(statearr_40715_40731[(2)] = null);

(statearr_40715_40731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (9))){
var state_40703__$1 = state_40703;
var statearr_40716_40732 = state_40703__$1;
(statearr_40716_40732[(2)] = null);

(statearr_40716_40732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (5))){
var state_40703__$1 = state_40703;
var statearr_40717_40733 = state_40703__$1;
(statearr_40717_40733[(2)] = null);

(statearr_40717_40733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (10))){
var inst_40695 = (state_40703[(2)]);
var state_40703__$1 = state_40703;
var statearr_40718_40734 = state_40703__$1;
(statearr_40718_40734[(2)] = inst_40695);

(statearr_40718_40734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40704 === (8))){
var inst_40685 = (state_40703[(7)]);
var state_40703__$1 = state_40703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40703__$1,(11),out,inst_40685);
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
});})(c__30625__auto___40724,out))
;
return ((function (switch__30537__auto__,c__30625__auto___40724,out){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_40719 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40719[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_40719[(1)] = (1));

return statearr_40719;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_40703){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_40703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40720){if((e40720 instanceof Object)){
var ex__30541__auto__ = e40720;
var statearr_40721_40735 = state_40703;
(statearr_40721_40735[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40736 = state_40703;
state_40703 = G__40736;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_40703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_40703);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___40724,out))
})();
var state__30627__auto__ = (function (){var statearr_40722 = f__30626__auto__.call(null);
(statearr_40722[(6)] = c__30625__auto___40724);

return statearr_40722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___40724,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40738 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40738 = (function (f,ch,meta40739){
this.f = f;
this.ch = ch;
this.meta40739 = meta40739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40740,meta40739__$1){
var self__ = this;
var _40740__$1 = this;
return (new cljs.core.async.t_cljs$core$async40738(self__.f,self__.ch,meta40739__$1));
});

cljs.core.async.t_cljs$core$async40738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40740){
var self__ = this;
var _40740__$1 = this;
return self__.meta40739;
});

cljs.core.async.t_cljs$core$async40738.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40738.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40738.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40738.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40738.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40741 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40741 = (function (f,ch,meta40739,_,fn1,meta40742){
this.f = f;
this.ch = ch;
this.meta40739 = meta40739;
this._ = _;
this.fn1 = fn1;
this.meta40742 = meta40742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40743,meta40742__$1){
var self__ = this;
var _40743__$1 = this;
return (new cljs.core.async.t_cljs$core$async40741(self__.f,self__.ch,self__.meta40739,self__._,self__.fn1,meta40742__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40743){
var self__ = this;
var _40743__$1 = this;
return self__.meta40742;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40741.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40741.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40737_SHARP_){
return f1.call(null,(((p1__40737_SHARP_ == null))?null:self__.f.call(null,p1__40737_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40741.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40739","meta40739",638768516,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40738","cljs.core.async/t_cljs$core$async40738",-1510946392,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40742","meta40742",-544660833,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40741";

cljs.core.async.t_cljs$core$async40741.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async40741");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40741 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40741(f__$1,ch__$1,meta40739__$1,___$2,fn1__$1,meta40742){
return (new cljs.core.async.t_cljs$core$async40741(f__$1,ch__$1,meta40739__$1,___$2,fn1__$1,meta40742));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40741(self__.f,self__.ch,self__.meta40739,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27184__auto__ = ret;
if(cljs.core.truth_(and__27184__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27184__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async40738.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40738.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40739","meta40739",638768516,null)], null);
});

cljs.core.async.t_cljs$core$async40738.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40738";

cljs.core.async.t_cljs$core$async40738.cljs$lang$ctorPrWriter = (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async40738");
});

cljs.core.async.__GT_t_cljs$core$async40738 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40738(f__$1,ch__$1,meta40739){
return (new cljs.core.async.t_cljs$core$async40738(f__$1,ch__$1,meta40739));
});

}

return (new cljs.core.async.t_cljs$core$async40738(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40744 = (function (f,ch,meta40745){
this.f = f;
this.ch = ch;
this.meta40745 = meta40745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40746,meta40745__$1){
var self__ = this;
var _40746__$1 = this;
return (new cljs.core.async.t_cljs$core$async40744(self__.f,self__.ch,meta40745__$1));
});

cljs.core.async.t_cljs$core$async40744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40746){
var self__ = this;
var _40746__$1 = this;
return self__.meta40745;
});

cljs.core.async.t_cljs$core$async40744.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40744.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40744.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40744.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40744.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40744.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40745","meta40745",-1024179552,null)], null);
});

cljs.core.async.t_cljs$core$async40744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40744";

cljs.core.async.t_cljs$core$async40744.cljs$lang$ctorPrWriter = (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async40744");
});

cljs.core.async.__GT_t_cljs$core$async40744 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40744(f__$1,ch__$1,meta40745){
return (new cljs.core.async.t_cljs$core$async40744(f__$1,ch__$1,meta40745));
});

}

return (new cljs.core.async.t_cljs$core$async40744(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40747 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40747 = (function (p,ch,meta40748){
this.p = p;
this.ch = ch;
this.meta40748 = meta40748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40749,meta40748__$1){
var self__ = this;
var _40749__$1 = this;
return (new cljs.core.async.t_cljs$core$async40747(self__.p,self__.ch,meta40748__$1));
});

cljs.core.async.t_cljs$core$async40747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40749){
var self__ = this;
var _40749__$1 = this;
return self__.meta40748;
});

cljs.core.async.t_cljs$core$async40747.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40747.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40747.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40747.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40747.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40747.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40747.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40748","meta40748",-1055556126,null)], null);
});

cljs.core.async.t_cljs$core$async40747.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40747";

cljs.core.async.t_cljs$core$async40747.cljs$lang$ctorPrWriter = (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async40747");
});

cljs.core.async.__GT_t_cljs$core$async40747 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40747(p__$1,ch__$1,meta40748){
return (new cljs.core.async.t_cljs$core$async40747(p__$1,ch__$1,meta40748));
});

}

return (new cljs.core.async.t_cljs$core$async40747(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40751 = arguments.length;
switch (G__40751) {
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
var c__30625__auto___40791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___40791,out){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___40791,out){
return (function (state_40772){
var state_val_40773 = (state_40772[(1)]);
if((state_val_40773 === (7))){
var inst_40768 = (state_40772[(2)]);
var state_40772__$1 = state_40772;
var statearr_40774_40792 = state_40772__$1;
(statearr_40774_40792[(2)] = inst_40768);

(statearr_40774_40792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (1))){
var state_40772__$1 = state_40772;
var statearr_40775_40793 = state_40772__$1;
(statearr_40775_40793[(2)] = null);

(statearr_40775_40793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (4))){
var inst_40754 = (state_40772[(7)]);
var inst_40754__$1 = (state_40772[(2)]);
var inst_40755 = (inst_40754__$1 == null);
var state_40772__$1 = (function (){var statearr_40776 = state_40772;
(statearr_40776[(7)] = inst_40754__$1);

return statearr_40776;
})();
if(cljs.core.truth_(inst_40755)){
var statearr_40777_40794 = state_40772__$1;
(statearr_40777_40794[(1)] = (5));

} else {
var statearr_40778_40795 = state_40772__$1;
(statearr_40778_40795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (6))){
var inst_40754 = (state_40772[(7)]);
var inst_40759 = p.call(null,inst_40754);
var state_40772__$1 = state_40772;
if(cljs.core.truth_(inst_40759)){
var statearr_40779_40796 = state_40772__$1;
(statearr_40779_40796[(1)] = (8));

} else {
var statearr_40780_40797 = state_40772__$1;
(statearr_40780_40797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (3))){
var inst_40770 = (state_40772[(2)]);
var state_40772__$1 = state_40772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40772__$1,inst_40770);
} else {
if((state_val_40773 === (2))){
var state_40772__$1 = state_40772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40772__$1,(4),ch);
} else {
if((state_val_40773 === (11))){
var inst_40762 = (state_40772[(2)]);
var state_40772__$1 = state_40772;
var statearr_40781_40798 = state_40772__$1;
(statearr_40781_40798[(2)] = inst_40762);

(statearr_40781_40798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (9))){
var state_40772__$1 = state_40772;
var statearr_40782_40799 = state_40772__$1;
(statearr_40782_40799[(2)] = null);

(statearr_40782_40799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (5))){
var inst_40757 = cljs.core.async.close_BANG_.call(null,out);
var state_40772__$1 = state_40772;
var statearr_40783_40800 = state_40772__$1;
(statearr_40783_40800[(2)] = inst_40757);

(statearr_40783_40800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (10))){
var inst_40765 = (state_40772[(2)]);
var state_40772__$1 = (function (){var statearr_40784 = state_40772;
(statearr_40784[(8)] = inst_40765);

return statearr_40784;
})();
var statearr_40785_40801 = state_40772__$1;
(statearr_40785_40801[(2)] = null);

(statearr_40785_40801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40773 === (8))){
var inst_40754 = (state_40772[(7)]);
var state_40772__$1 = state_40772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40772__$1,(11),out,inst_40754);
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
});})(c__30625__auto___40791,out))
;
return ((function (switch__30537__auto__,c__30625__auto___40791,out){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_40786 = [null,null,null,null,null,null,null,null,null];
(statearr_40786[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_40786[(1)] = (1));

return statearr_40786;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_40772){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_40772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40787){if((e40787 instanceof Object)){
var ex__30541__auto__ = e40787;
var statearr_40788_40802 = state_40772;
(statearr_40788_40802[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40803 = state_40772;
state_40772 = G__40803;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_40772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_40772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___40791,out))
})();
var state__30627__auto__ = (function (){var statearr_40789 = f__30626__auto__.call(null);
(statearr_40789[(6)] = c__30625__auto___40791);

return statearr_40789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___40791,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40805 = arguments.length;
switch (G__40805) {
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
var c__30625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto__){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto__){
return (function (state_40868){
var state_val_40869 = (state_40868[(1)]);
if((state_val_40869 === (7))){
var inst_40864 = (state_40868[(2)]);
var state_40868__$1 = state_40868;
var statearr_40870_40908 = state_40868__$1;
(statearr_40870_40908[(2)] = inst_40864);

(statearr_40870_40908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (20))){
var inst_40834 = (state_40868[(7)]);
var inst_40845 = (state_40868[(2)]);
var inst_40846 = cljs.core.next.call(null,inst_40834);
var inst_40820 = inst_40846;
var inst_40821 = null;
var inst_40822 = (0);
var inst_40823 = (0);
var state_40868__$1 = (function (){var statearr_40871 = state_40868;
(statearr_40871[(8)] = inst_40820);

(statearr_40871[(9)] = inst_40821);

(statearr_40871[(10)] = inst_40823);

(statearr_40871[(11)] = inst_40822);

(statearr_40871[(12)] = inst_40845);

return statearr_40871;
})();
var statearr_40872_40909 = state_40868__$1;
(statearr_40872_40909[(2)] = null);

(statearr_40872_40909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (1))){
var state_40868__$1 = state_40868;
var statearr_40873_40910 = state_40868__$1;
(statearr_40873_40910[(2)] = null);

(statearr_40873_40910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (4))){
var inst_40809 = (state_40868[(13)]);
var inst_40809__$1 = (state_40868[(2)]);
var inst_40810 = (inst_40809__$1 == null);
var state_40868__$1 = (function (){var statearr_40874 = state_40868;
(statearr_40874[(13)] = inst_40809__$1);

return statearr_40874;
})();
if(cljs.core.truth_(inst_40810)){
var statearr_40875_40911 = state_40868__$1;
(statearr_40875_40911[(1)] = (5));

} else {
var statearr_40876_40912 = state_40868__$1;
(statearr_40876_40912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (15))){
var state_40868__$1 = state_40868;
var statearr_40880_40913 = state_40868__$1;
(statearr_40880_40913[(2)] = null);

(statearr_40880_40913[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (21))){
var state_40868__$1 = state_40868;
var statearr_40881_40914 = state_40868__$1;
(statearr_40881_40914[(2)] = null);

(statearr_40881_40914[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (13))){
var inst_40820 = (state_40868[(8)]);
var inst_40821 = (state_40868[(9)]);
var inst_40823 = (state_40868[(10)]);
var inst_40822 = (state_40868[(11)]);
var inst_40830 = (state_40868[(2)]);
var inst_40831 = (inst_40823 + (1));
var tmp40877 = inst_40820;
var tmp40878 = inst_40821;
var tmp40879 = inst_40822;
var inst_40820__$1 = tmp40877;
var inst_40821__$1 = tmp40878;
var inst_40822__$1 = tmp40879;
var inst_40823__$1 = inst_40831;
var state_40868__$1 = (function (){var statearr_40882 = state_40868;
(statearr_40882[(8)] = inst_40820__$1);

(statearr_40882[(9)] = inst_40821__$1);

(statearr_40882[(10)] = inst_40823__$1);

(statearr_40882[(11)] = inst_40822__$1);

(statearr_40882[(14)] = inst_40830);

return statearr_40882;
})();
var statearr_40883_40915 = state_40868__$1;
(statearr_40883_40915[(2)] = null);

(statearr_40883_40915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (22))){
var state_40868__$1 = state_40868;
var statearr_40884_40916 = state_40868__$1;
(statearr_40884_40916[(2)] = null);

(statearr_40884_40916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (6))){
var inst_40809 = (state_40868[(13)]);
var inst_40818 = f.call(null,inst_40809);
var inst_40819 = cljs.core.seq.call(null,inst_40818);
var inst_40820 = inst_40819;
var inst_40821 = null;
var inst_40822 = (0);
var inst_40823 = (0);
var state_40868__$1 = (function (){var statearr_40885 = state_40868;
(statearr_40885[(8)] = inst_40820);

(statearr_40885[(9)] = inst_40821);

(statearr_40885[(10)] = inst_40823);

(statearr_40885[(11)] = inst_40822);

return statearr_40885;
})();
var statearr_40886_40917 = state_40868__$1;
(statearr_40886_40917[(2)] = null);

(statearr_40886_40917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (17))){
var inst_40834 = (state_40868[(7)]);
var inst_40838 = cljs.core.chunk_first.call(null,inst_40834);
var inst_40839 = cljs.core.chunk_rest.call(null,inst_40834);
var inst_40840 = cljs.core.count.call(null,inst_40838);
var inst_40820 = inst_40839;
var inst_40821 = inst_40838;
var inst_40822 = inst_40840;
var inst_40823 = (0);
var state_40868__$1 = (function (){var statearr_40887 = state_40868;
(statearr_40887[(8)] = inst_40820);

(statearr_40887[(9)] = inst_40821);

(statearr_40887[(10)] = inst_40823);

(statearr_40887[(11)] = inst_40822);

return statearr_40887;
})();
var statearr_40888_40918 = state_40868__$1;
(statearr_40888_40918[(2)] = null);

(statearr_40888_40918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (3))){
var inst_40866 = (state_40868[(2)]);
var state_40868__$1 = state_40868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40868__$1,inst_40866);
} else {
if((state_val_40869 === (12))){
var inst_40854 = (state_40868[(2)]);
var state_40868__$1 = state_40868;
var statearr_40889_40919 = state_40868__$1;
(statearr_40889_40919[(2)] = inst_40854);

(statearr_40889_40919[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (2))){
var state_40868__$1 = state_40868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40868__$1,(4),in$);
} else {
if((state_val_40869 === (23))){
var inst_40862 = (state_40868[(2)]);
var state_40868__$1 = state_40868;
var statearr_40890_40920 = state_40868__$1;
(statearr_40890_40920[(2)] = inst_40862);

(statearr_40890_40920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (19))){
var inst_40849 = (state_40868[(2)]);
var state_40868__$1 = state_40868;
var statearr_40891_40921 = state_40868__$1;
(statearr_40891_40921[(2)] = inst_40849);

(statearr_40891_40921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (11))){
var inst_40820 = (state_40868[(8)]);
var inst_40834 = (state_40868[(7)]);
var inst_40834__$1 = cljs.core.seq.call(null,inst_40820);
var state_40868__$1 = (function (){var statearr_40892 = state_40868;
(statearr_40892[(7)] = inst_40834__$1);

return statearr_40892;
})();
if(inst_40834__$1){
var statearr_40893_40922 = state_40868__$1;
(statearr_40893_40922[(1)] = (14));

} else {
var statearr_40894_40923 = state_40868__$1;
(statearr_40894_40923[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (9))){
var inst_40856 = (state_40868[(2)]);
var inst_40857 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40868__$1 = (function (){var statearr_40895 = state_40868;
(statearr_40895[(15)] = inst_40856);

return statearr_40895;
})();
if(cljs.core.truth_(inst_40857)){
var statearr_40896_40924 = state_40868__$1;
(statearr_40896_40924[(1)] = (21));

} else {
var statearr_40897_40925 = state_40868__$1;
(statearr_40897_40925[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (5))){
var inst_40812 = cljs.core.async.close_BANG_.call(null,out);
var state_40868__$1 = state_40868;
var statearr_40898_40926 = state_40868__$1;
(statearr_40898_40926[(2)] = inst_40812);

(statearr_40898_40926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (14))){
var inst_40834 = (state_40868[(7)]);
var inst_40836 = cljs.core.chunked_seq_QMARK_.call(null,inst_40834);
var state_40868__$1 = state_40868;
if(inst_40836){
var statearr_40899_40927 = state_40868__$1;
(statearr_40899_40927[(1)] = (17));

} else {
var statearr_40900_40928 = state_40868__$1;
(statearr_40900_40928[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (16))){
var inst_40852 = (state_40868[(2)]);
var state_40868__$1 = state_40868;
var statearr_40901_40929 = state_40868__$1;
(statearr_40901_40929[(2)] = inst_40852);

(statearr_40901_40929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40869 === (10))){
var inst_40821 = (state_40868[(9)]);
var inst_40823 = (state_40868[(10)]);
var inst_40828 = cljs.core._nth.call(null,inst_40821,inst_40823);
var state_40868__$1 = state_40868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40868__$1,(13),out,inst_40828);
} else {
if((state_val_40869 === (18))){
var inst_40834 = (state_40868[(7)]);
var inst_40843 = cljs.core.first.call(null,inst_40834);
var state_40868__$1 = state_40868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40868__$1,(20),out,inst_40843);
} else {
if((state_val_40869 === (8))){
var inst_40823 = (state_40868[(10)]);
var inst_40822 = (state_40868[(11)]);
var inst_40825 = (inst_40823 < inst_40822);
var inst_40826 = inst_40825;
var state_40868__$1 = state_40868;
if(cljs.core.truth_(inst_40826)){
var statearr_40902_40930 = state_40868__$1;
(statearr_40902_40930[(1)] = (10));

} else {
var statearr_40903_40931 = state_40868__$1;
(statearr_40903_40931[(1)] = (11));

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
});})(c__30625__auto__))
;
return ((function (switch__30537__auto__,c__30625__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30538__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30538__auto____0 = (function (){
var statearr_40904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40904[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30538__auto__);

(statearr_40904[(1)] = (1));

return statearr_40904;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30538__auto____1 = (function (state_40868){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_40868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40905){if((e40905 instanceof Object)){
var ex__30541__auto__ = e40905;
var statearr_40906_40932 = state_40868;
(statearr_40906_40932[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40933 = state_40868;
state_40868 = G__40933;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30538__auto__ = function(state_40868){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30538__auto____1.call(this,state_40868);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30538__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30538__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__))
})();
var state__30627__auto__ = (function (){var statearr_40907 = f__30626__auto__.call(null);
(statearr_40907[(6)] = c__30625__auto__);

return statearr_40907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto__))
);

return c__30625__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40935 = arguments.length;
switch (G__40935) {
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
var G__40938 = arguments.length;
switch (G__40938) {
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
var G__40941 = arguments.length;
switch (G__40941) {
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
var c__30625__auto___40988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___40988,out){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___40988,out){
return (function (state_40965){
var state_val_40966 = (state_40965[(1)]);
if((state_val_40966 === (7))){
var inst_40960 = (state_40965[(2)]);
var state_40965__$1 = state_40965;
var statearr_40967_40989 = state_40965__$1;
(statearr_40967_40989[(2)] = inst_40960);

(statearr_40967_40989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40966 === (1))){
var inst_40942 = null;
var state_40965__$1 = (function (){var statearr_40968 = state_40965;
(statearr_40968[(7)] = inst_40942);

return statearr_40968;
})();
var statearr_40969_40990 = state_40965__$1;
(statearr_40969_40990[(2)] = null);

(statearr_40969_40990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40966 === (4))){
var inst_40945 = (state_40965[(8)]);
var inst_40945__$1 = (state_40965[(2)]);
var inst_40946 = (inst_40945__$1 == null);
var inst_40947 = cljs.core.not.call(null,inst_40946);
var state_40965__$1 = (function (){var statearr_40970 = state_40965;
(statearr_40970[(8)] = inst_40945__$1);

return statearr_40970;
})();
if(inst_40947){
var statearr_40971_40991 = state_40965__$1;
(statearr_40971_40991[(1)] = (5));

} else {
var statearr_40972_40992 = state_40965__$1;
(statearr_40972_40992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40966 === (6))){
var state_40965__$1 = state_40965;
var statearr_40973_40993 = state_40965__$1;
(statearr_40973_40993[(2)] = null);

(statearr_40973_40993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40966 === (3))){
var inst_40962 = (state_40965[(2)]);
var inst_40963 = cljs.core.async.close_BANG_.call(null,out);
var state_40965__$1 = (function (){var statearr_40974 = state_40965;
(statearr_40974[(9)] = inst_40962);

return statearr_40974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40965__$1,inst_40963);
} else {
if((state_val_40966 === (2))){
var state_40965__$1 = state_40965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40965__$1,(4),ch);
} else {
if((state_val_40966 === (11))){
var inst_40945 = (state_40965[(8)]);
var inst_40954 = (state_40965[(2)]);
var inst_40942 = inst_40945;
var state_40965__$1 = (function (){var statearr_40975 = state_40965;
(statearr_40975[(7)] = inst_40942);

(statearr_40975[(10)] = inst_40954);

return statearr_40975;
})();
var statearr_40976_40994 = state_40965__$1;
(statearr_40976_40994[(2)] = null);

(statearr_40976_40994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40966 === (9))){
var inst_40945 = (state_40965[(8)]);
var state_40965__$1 = state_40965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40965__$1,(11),out,inst_40945);
} else {
if((state_val_40966 === (5))){
var inst_40945 = (state_40965[(8)]);
var inst_40942 = (state_40965[(7)]);
var inst_40949 = cljs.core._EQ_.call(null,inst_40945,inst_40942);
var state_40965__$1 = state_40965;
if(inst_40949){
var statearr_40978_40995 = state_40965__$1;
(statearr_40978_40995[(1)] = (8));

} else {
var statearr_40979_40996 = state_40965__$1;
(statearr_40979_40996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40966 === (10))){
var inst_40957 = (state_40965[(2)]);
var state_40965__$1 = state_40965;
var statearr_40980_40997 = state_40965__$1;
(statearr_40980_40997[(2)] = inst_40957);

(statearr_40980_40997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40966 === (8))){
var inst_40942 = (state_40965[(7)]);
var tmp40977 = inst_40942;
var inst_40942__$1 = tmp40977;
var state_40965__$1 = (function (){var statearr_40981 = state_40965;
(statearr_40981[(7)] = inst_40942__$1);

return statearr_40981;
})();
var statearr_40982_40998 = state_40965__$1;
(statearr_40982_40998[(2)] = null);

(statearr_40982_40998[(1)] = (2));


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
});})(c__30625__auto___40988,out))
;
return ((function (switch__30537__auto__,c__30625__auto___40988,out){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_40983 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40983[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_40983[(1)] = (1));

return statearr_40983;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_40965){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_40965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40984){if((e40984 instanceof Object)){
var ex__30541__auto__ = e40984;
var statearr_40985_40999 = state_40965;
(statearr_40985_40999[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41000 = state_40965;
state_40965 = G__41000;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_40965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_40965);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___40988,out))
})();
var state__30627__auto__ = (function (){var statearr_40986 = f__30626__auto__.call(null);
(statearr_40986[(6)] = c__30625__auto___40988);

return statearr_40986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___40988,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41002 = arguments.length;
switch (G__41002) {
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
var c__30625__auto___41068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___41068,out){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___41068,out){
return (function (state_41040){
var state_val_41041 = (state_41040[(1)]);
if((state_val_41041 === (7))){
var inst_41036 = (state_41040[(2)]);
var state_41040__$1 = state_41040;
var statearr_41042_41069 = state_41040__$1;
(statearr_41042_41069[(2)] = inst_41036);

(statearr_41042_41069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41041 === (1))){
var inst_41003 = (new Array(n));
var inst_41004 = inst_41003;
var inst_41005 = (0);
var state_41040__$1 = (function (){var statearr_41043 = state_41040;
(statearr_41043[(7)] = inst_41004);

(statearr_41043[(8)] = inst_41005);

return statearr_41043;
})();
var statearr_41044_41070 = state_41040__$1;
(statearr_41044_41070[(2)] = null);

(statearr_41044_41070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41041 === (4))){
var inst_41008 = (state_41040[(9)]);
var inst_41008__$1 = (state_41040[(2)]);
var inst_41009 = (inst_41008__$1 == null);
var inst_41010 = cljs.core.not.call(null,inst_41009);
var state_41040__$1 = (function (){var statearr_41045 = state_41040;
(statearr_41045[(9)] = inst_41008__$1);

return statearr_41045;
})();
if(inst_41010){
var statearr_41046_41071 = state_41040__$1;
(statearr_41046_41071[(1)] = (5));

} else {
var statearr_41047_41072 = state_41040__$1;
(statearr_41047_41072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41041 === (15))){
var inst_41030 = (state_41040[(2)]);
var state_41040__$1 = state_41040;
var statearr_41048_41073 = state_41040__$1;
(statearr_41048_41073[(2)] = inst_41030);

(statearr_41048_41073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41041 === (13))){
var state_41040__$1 = state_41040;
var statearr_41049_41074 = state_41040__$1;
(statearr_41049_41074[(2)] = null);

(statearr_41049_41074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41041 === (6))){
var inst_41005 = (state_41040[(8)]);
var inst_41026 = (inst_41005 > (0));
var state_41040__$1 = state_41040;
if(cljs.core.truth_(inst_41026)){
var statearr_41050_41075 = state_41040__$1;
(statearr_41050_41075[(1)] = (12));

} else {
var statearr_41051_41076 = state_41040__$1;
(statearr_41051_41076[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41041 === (3))){
var inst_41038 = (state_41040[(2)]);
var state_41040__$1 = state_41040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41040__$1,inst_41038);
} else {
if((state_val_41041 === (12))){
var inst_41004 = (state_41040[(7)]);
var inst_41028 = cljs.core.vec.call(null,inst_41004);
var state_41040__$1 = state_41040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41040__$1,(15),out,inst_41028);
} else {
if((state_val_41041 === (2))){
var state_41040__$1 = state_41040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41040__$1,(4),ch);
} else {
if((state_val_41041 === (11))){
var inst_41020 = (state_41040[(2)]);
var inst_41021 = (new Array(n));
var inst_41004 = inst_41021;
var inst_41005 = (0);
var state_41040__$1 = (function (){var statearr_41052 = state_41040;
(statearr_41052[(7)] = inst_41004);

(statearr_41052[(8)] = inst_41005);

(statearr_41052[(10)] = inst_41020);

return statearr_41052;
})();
var statearr_41053_41077 = state_41040__$1;
(statearr_41053_41077[(2)] = null);

(statearr_41053_41077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41041 === (9))){
var inst_41004 = (state_41040[(7)]);
var inst_41018 = cljs.core.vec.call(null,inst_41004);
var state_41040__$1 = state_41040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41040__$1,(11),out,inst_41018);
} else {
if((state_val_41041 === (5))){
var inst_41004 = (state_41040[(7)]);
var inst_41005 = (state_41040[(8)]);
var inst_41013 = (state_41040[(11)]);
var inst_41008 = (state_41040[(9)]);
var inst_41012 = (inst_41004[inst_41005] = inst_41008);
var inst_41013__$1 = (inst_41005 + (1));
var inst_41014 = (inst_41013__$1 < n);
var state_41040__$1 = (function (){var statearr_41054 = state_41040;
(statearr_41054[(12)] = inst_41012);

(statearr_41054[(11)] = inst_41013__$1);

return statearr_41054;
})();
if(cljs.core.truth_(inst_41014)){
var statearr_41055_41078 = state_41040__$1;
(statearr_41055_41078[(1)] = (8));

} else {
var statearr_41056_41079 = state_41040__$1;
(statearr_41056_41079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41041 === (14))){
var inst_41033 = (state_41040[(2)]);
var inst_41034 = cljs.core.async.close_BANG_.call(null,out);
var state_41040__$1 = (function (){var statearr_41058 = state_41040;
(statearr_41058[(13)] = inst_41033);

return statearr_41058;
})();
var statearr_41059_41080 = state_41040__$1;
(statearr_41059_41080[(2)] = inst_41034);

(statearr_41059_41080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41041 === (10))){
var inst_41024 = (state_41040[(2)]);
var state_41040__$1 = state_41040;
var statearr_41060_41081 = state_41040__$1;
(statearr_41060_41081[(2)] = inst_41024);

(statearr_41060_41081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41041 === (8))){
var inst_41004 = (state_41040[(7)]);
var inst_41013 = (state_41040[(11)]);
var tmp41057 = inst_41004;
var inst_41004__$1 = tmp41057;
var inst_41005 = inst_41013;
var state_41040__$1 = (function (){var statearr_41061 = state_41040;
(statearr_41061[(7)] = inst_41004__$1);

(statearr_41061[(8)] = inst_41005);

return statearr_41061;
})();
var statearr_41062_41082 = state_41040__$1;
(statearr_41062_41082[(2)] = null);

(statearr_41062_41082[(1)] = (2));


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
});})(c__30625__auto___41068,out))
;
return ((function (switch__30537__auto__,c__30625__auto___41068,out){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_41063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41063[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_41063[(1)] = (1));

return statearr_41063;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_41040){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_41040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e41064){if((e41064 instanceof Object)){
var ex__30541__auto__ = e41064;
var statearr_41065_41083 = state_41040;
(statearr_41065_41083[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41084 = state_41040;
state_41040 = G__41084;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_41040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_41040);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___41068,out))
})();
var state__30627__auto__ = (function (){var statearr_41066 = f__30626__auto__.call(null);
(statearr_41066[(6)] = c__30625__auto___41068);

return statearr_41066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___41068,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41086 = arguments.length;
switch (G__41086) {
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
var c__30625__auto___41156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___41156,out){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___41156,out){
return (function (state_41128){
var state_val_41129 = (state_41128[(1)]);
if((state_val_41129 === (7))){
var inst_41124 = (state_41128[(2)]);
var state_41128__$1 = state_41128;
var statearr_41130_41157 = state_41128__$1;
(statearr_41130_41157[(2)] = inst_41124);

(statearr_41130_41157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41129 === (1))){
var inst_41087 = [];
var inst_41088 = inst_41087;
var inst_41089 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41128__$1 = (function (){var statearr_41131 = state_41128;
(statearr_41131[(7)] = inst_41088);

(statearr_41131[(8)] = inst_41089);

return statearr_41131;
})();
var statearr_41132_41158 = state_41128__$1;
(statearr_41132_41158[(2)] = null);

(statearr_41132_41158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41129 === (4))){
var inst_41092 = (state_41128[(9)]);
var inst_41092__$1 = (state_41128[(2)]);
var inst_41093 = (inst_41092__$1 == null);
var inst_41094 = cljs.core.not.call(null,inst_41093);
var state_41128__$1 = (function (){var statearr_41133 = state_41128;
(statearr_41133[(9)] = inst_41092__$1);

return statearr_41133;
})();
if(inst_41094){
var statearr_41134_41159 = state_41128__$1;
(statearr_41134_41159[(1)] = (5));

} else {
var statearr_41135_41160 = state_41128__$1;
(statearr_41135_41160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41129 === (15))){
var inst_41118 = (state_41128[(2)]);
var state_41128__$1 = state_41128;
var statearr_41136_41161 = state_41128__$1;
(statearr_41136_41161[(2)] = inst_41118);

(statearr_41136_41161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41129 === (13))){
var state_41128__$1 = state_41128;
var statearr_41137_41162 = state_41128__$1;
(statearr_41137_41162[(2)] = null);

(statearr_41137_41162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41129 === (6))){
var inst_41088 = (state_41128[(7)]);
var inst_41113 = inst_41088.length;
var inst_41114 = (inst_41113 > (0));
var state_41128__$1 = state_41128;
if(cljs.core.truth_(inst_41114)){
var statearr_41138_41163 = state_41128__$1;
(statearr_41138_41163[(1)] = (12));

} else {
var statearr_41139_41164 = state_41128__$1;
(statearr_41139_41164[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41129 === (3))){
var inst_41126 = (state_41128[(2)]);
var state_41128__$1 = state_41128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41128__$1,inst_41126);
} else {
if((state_val_41129 === (12))){
var inst_41088 = (state_41128[(7)]);
var inst_41116 = cljs.core.vec.call(null,inst_41088);
var state_41128__$1 = state_41128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41128__$1,(15),out,inst_41116);
} else {
if((state_val_41129 === (2))){
var state_41128__$1 = state_41128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41128__$1,(4),ch);
} else {
if((state_val_41129 === (11))){
var inst_41092 = (state_41128[(9)]);
var inst_41096 = (state_41128[(10)]);
var inst_41106 = (state_41128[(2)]);
var inst_41107 = [];
var inst_41108 = inst_41107.push(inst_41092);
var inst_41088 = inst_41107;
var inst_41089 = inst_41096;
var state_41128__$1 = (function (){var statearr_41140 = state_41128;
(statearr_41140[(7)] = inst_41088);

(statearr_41140[(11)] = inst_41106);

(statearr_41140[(12)] = inst_41108);

(statearr_41140[(8)] = inst_41089);

return statearr_41140;
})();
var statearr_41141_41165 = state_41128__$1;
(statearr_41141_41165[(2)] = null);

(statearr_41141_41165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41129 === (9))){
var inst_41088 = (state_41128[(7)]);
var inst_41104 = cljs.core.vec.call(null,inst_41088);
var state_41128__$1 = state_41128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41128__$1,(11),out,inst_41104);
} else {
if((state_val_41129 === (5))){
var inst_41092 = (state_41128[(9)]);
var inst_41096 = (state_41128[(10)]);
var inst_41089 = (state_41128[(8)]);
var inst_41096__$1 = f.call(null,inst_41092);
var inst_41097 = cljs.core._EQ_.call(null,inst_41096__$1,inst_41089);
var inst_41098 = cljs.core.keyword_identical_QMARK_.call(null,inst_41089,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41099 = (inst_41097) || (inst_41098);
var state_41128__$1 = (function (){var statearr_41142 = state_41128;
(statearr_41142[(10)] = inst_41096__$1);

return statearr_41142;
})();
if(cljs.core.truth_(inst_41099)){
var statearr_41143_41166 = state_41128__$1;
(statearr_41143_41166[(1)] = (8));

} else {
var statearr_41144_41167 = state_41128__$1;
(statearr_41144_41167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41129 === (14))){
var inst_41121 = (state_41128[(2)]);
var inst_41122 = cljs.core.async.close_BANG_.call(null,out);
var state_41128__$1 = (function (){var statearr_41146 = state_41128;
(statearr_41146[(13)] = inst_41121);

return statearr_41146;
})();
var statearr_41147_41168 = state_41128__$1;
(statearr_41147_41168[(2)] = inst_41122);

(statearr_41147_41168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41129 === (10))){
var inst_41111 = (state_41128[(2)]);
var state_41128__$1 = state_41128;
var statearr_41148_41169 = state_41128__$1;
(statearr_41148_41169[(2)] = inst_41111);

(statearr_41148_41169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41129 === (8))){
var inst_41088 = (state_41128[(7)]);
var inst_41092 = (state_41128[(9)]);
var inst_41096 = (state_41128[(10)]);
var inst_41101 = inst_41088.push(inst_41092);
var tmp41145 = inst_41088;
var inst_41088__$1 = tmp41145;
var inst_41089 = inst_41096;
var state_41128__$1 = (function (){var statearr_41149 = state_41128;
(statearr_41149[(7)] = inst_41088__$1);

(statearr_41149[(14)] = inst_41101);

(statearr_41149[(8)] = inst_41089);

return statearr_41149;
})();
var statearr_41150_41170 = state_41128__$1;
(statearr_41150_41170[(2)] = null);

(statearr_41150_41170[(1)] = (2));


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
});})(c__30625__auto___41156,out))
;
return ((function (switch__30537__auto__,c__30625__auto___41156,out){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_41151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41151[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_41151[(1)] = (1));

return statearr_41151;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_41128){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_41128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e41152){if((e41152 instanceof Object)){
var ex__30541__auto__ = e41152;
var statearr_41153_41171 = state_41128;
(statearr_41153_41171[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41172 = state_41128;
state_41128 = G__41172;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_41128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_41128);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___41156,out))
})();
var state__30627__auto__ = (function (){var statearr_41154 = f__30626__auto__.call(null);
(statearr_41154[(6)] = c__30625__auto___41156);

return statearr_41154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___41156,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1514660170322
