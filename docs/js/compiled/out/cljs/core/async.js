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
var G__39343 = arguments.length;
switch (G__39343) {
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
if(typeof cljs.core.async.t_cljs$core$async39344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39344 = (function (f,blockable,meta39345){
this.f = f;
this.blockable = blockable;
this.meta39345 = meta39345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39346,meta39345__$1){
var self__ = this;
var _39346__$1 = this;
return (new cljs.core.async.t_cljs$core$async39344(self__.f,self__.blockable,meta39345__$1));
});

cljs.core.async.t_cljs$core$async39344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39346){
var self__ = this;
var _39346__$1 = this;
return self__.meta39345;
});

cljs.core.async.t_cljs$core$async39344.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39345","meta39345",1314016551,null)], null);
});

cljs.core.async.t_cljs$core$async39344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39344";

cljs.core.async.t_cljs$core$async39344.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39344");
});

cljs.core.async.__GT_t_cljs$core$async39344 = (function cljs$core$async$__GT_t_cljs$core$async39344(f__$1,blockable__$1,meta39345){
return (new cljs.core.async.t_cljs$core$async39344(f__$1,blockable__$1,meta39345));
});

}

return (new cljs.core.async.t_cljs$core$async39344(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39350 = arguments.length;
switch (G__39350) {
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
var G__39353 = arguments.length;
switch (G__39353) {
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
var G__39356 = arguments.length;
switch (G__39356) {
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
var val_39358 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39358);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39358,ret){
return (function (){
return fn1.call(null,val_39358);
});})(val_39358,ret))
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
var G__39360 = arguments.length;
switch (G__39360) {
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
var n__28140__auto___39362 = n;
var x_39363 = (0);
while(true){
if((x_39363 < n__28140__auto___39362)){
(a[x_39363] = (0));

var G__39364 = (x_39363 + (1));
x_39363 = G__39364;
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

var G__39365 = (i + (1));
i = G__39365;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39366 = (function (flag,meta39367){
this.flag = flag;
this.meta39367 = meta39367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39368,meta39367__$1){
var self__ = this;
var _39368__$1 = this;
return (new cljs.core.async.t_cljs$core$async39366(self__.flag,meta39367__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39368){
var self__ = this;
var _39368__$1 = this;
return self__.meta39367;
});})(flag))
;

cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39366.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39367","meta39367",-575520531,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39366";

cljs.core.async.t_cljs$core$async39366.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39366");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39366 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39366(flag__$1,meta39367){
return (new cljs.core.async.t_cljs$core$async39366(flag__$1,meta39367));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39366(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39369 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39369 = (function (flag,cb,meta39370){
this.flag = flag;
this.cb = cb;
this.meta39370 = meta39370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39371,meta39370__$1){
var self__ = this;
var _39371__$1 = this;
return (new cljs.core.async.t_cljs$core$async39369(self__.flag,self__.cb,meta39370__$1));
});

cljs.core.async.t_cljs$core$async39369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39371){
var self__ = this;
var _39371__$1 = this;
return self__.meta39370;
});

cljs.core.async.t_cljs$core$async39369.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39369.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39370","meta39370",1376264025,null)], null);
});

cljs.core.async.t_cljs$core$async39369.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39369";

cljs.core.async.t_cljs$core$async39369.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39369");
});

cljs.core.async.__GT_t_cljs$core$async39369 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39369(flag__$1,cb__$1,meta39370){
return (new cljs.core.async.t_cljs$core$async39369(flag__$1,cb__$1,meta39370));
});

}

return (new cljs.core.async.t_cljs$core$async39369(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39372_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39372_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39373_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39373_SHARP_,port], null));
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
var G__39374 = (i + (1));
i = G__39374;
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
var len__28364__auto___39380 = arguments.length;
var i__28365__auto___39381 = (0);
while(true){
if((i__28365__auto___39381 < len__28364__auto___39380)){
args__28371__auto__.push((arguments[i__28365__auto___39381]));

var G__39382 = (i__28365__auto___39381 + (1));
i__28365__auto___39381 = G__39382;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39377){
var map__39378 = p__39377;
var map__39378__$1 = ((((!((map__39378 == null)))?((((map__39378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39378.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39378):map__39378);
var opts = map__39378__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39375){
var G__39376 = cljs.core.first.call(null,seq39375);
var seq39375__$1 = cljs.core.next.call(null,seq39375);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39376,seq39375__$1);
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
var G__39384 = arguments.length;
switch (G__39384) {
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
var c__30623__auto___39430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___39430){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___39430){
return (function (state_39408){
var state_val_39409 = (state_39408[(1)]);
if((state_val_39409 === (7))){
var inst_39404 = (state_39408[(2)]);
var state_39408__$1 = state_39408;
var statearr_39410_39431 = state_39408__$1;
(statearr_39410_39431[(2)] = inst_39404);

(statearr_39410_39431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39409 === (1))){
var state_39408__$1 = state_39408;
var statearr_39411_39432 = state_39408__$1;
(statearr_39411_39432[(2)] = null);

(statearr_39411_39432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39409 === (4))){
var inst_39387 = (state_39408[(7)]);
var inst_39387__$1 = (state_39408[(2)]);
var inst_39388 = (inst_39387__$1 == null);
var state_39408__$1 = (function (){var statearr_39412 = state_39408;
(statearr_39412[(7)] = inst_39387__$1);

return statearr_39412;
})();
if(cljs.core.truth_(inst_39388)){
var statearr_39413_39433 = state_39408__$1;
(statearr_39413_39433[(1)] = (5));

} else {
var statearr_39414_39434 = state_39408__$1;
(statearr_39414_39434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39409 === (13))){
var state_39408__$1 = state_39408;
var statearr_39415_39435 = state_39408__$1;
(statearr_39415_39435[(2)] = null);

(statearr_39415_39435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39409 === (6))){
var inst_39387 = (state_39408[(7)]);
var state_39408__$1 = state_39408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39408__$1,(11),to,inst_39387);
} else {
if((state_val_39409 === (3))){
var inst_39406 = (state_39408[(2)]);
var state_39408__$1 = state_39408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39408__$1,inst_39406);
} else {
if((state_val_39409 === (12))){
var state_39408__$1 = state_39408;
var statearr_39416_39436 = state_39408__$1;
(statearr_39416_39436[(2)] = null);

(statearr_39416_39436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39409 === (2))){
var state_39408__$1 = state_39408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39408__$1,(4),from);
} else {
if((state_val_39409 === (11))){
var inst_39397 = (state_39408[(2)]);
var state_39408__$1 = state_39408;
if(cljs.core.truth_(inst_39397)){
var statearr_39417_39437 = state_39408__$1;
(statearr_39417_39437[(1)] = (12));

} else {
var statearr_39418_39438 = state_39408__$1;
(statearr_39418_39438[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39409 === (9))){
var state_39408__$1 = state_39408;
var statearr_39419_39439 = state_39408__$1;
(statearr_39419_39439[(2)] = null);

(statearr_39419_39439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39409 === (5))){
var state_39408__$1 = state_39408;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39420_39440 = state_39408__$1;
(statearr_39420_39440[(1)] = (8));

} else {
var statearr_39421_39441 = state_39408__$1;
(statearr_39421_39441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39409 === (14))){
var inst_39402 = (state_39408[(2)]);
var state_39408__$1 = state_39408;
var statearr_39422_39442 = state_39408__$1;
(statearr_39422_39442[(2)] = inst_39402);

(statearr_39422_39442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39409 === (10))){
var inst_39394 = (state_39408[(2)]);
var state_39408__$1 = state_39408;
var statearr_39423_39443 = state_39408__$1;
(statearr_39423_39443[(2)] = inst_39394);

(statearr_39423_39443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39409 === (8))){
var inst_39391 = cljs.core.async.close_BANG_.call(null,to);
var state_39408__$1 = state_39408;
var statearr_39424_39444 = state_39408__$1;
(statearr_39424_39444[(2)] = inst_39391);

(statearr_39424_39444[(1)] = (10));


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
});})(c__30623__auto___39430))
;
return ((function (switch__30535__auto__,c__30623__auto___39430){
return (function() {
var cljs$core$async$state_machine__30536__auto__ = null;
var cljs$core$async$state_machine__30536__auto____0 = (function (){
var statearr_39425 = [null,null,null,null,null,null,null,null];
(statearr_39425[(0)] = cljs$core$async$state_machine__30536__auto__);

(statearr_39425[(1)] = (1));

return statearr_39425;
});
var cljs$core$async$state_machine__30536__auto____1 = (function (state_39408){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_39408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e39426){if((e39426 instanceof Object)){
var ex__30539__auto__ = e39426;
var statearr_39427_39445 = state_39408;
(statearr_39427_39445[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39446 = state_39408;
state_39408 = G__39446;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$state_machine__30536__auto__ = function(state_39408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30536__auto____1.call(this,state_39408);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30536__auto____0;
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30536__auto____1;
return cljs$core$async$state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___39430))
})();
var state__30625__auto__ = (function (){var statearr_39428 = f__30624__auto__.call(null);
(statearr_39428[(6)] = c__30623__auto___39430);

return statearr_39428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___39430))
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
return (function (p__39447){
var vec__39448 = p__39447;
var v = cljs.core.nth.call(null,vec__39448,(0),null);
var p = cljs.core.nth.call(null,vec__39448,(1),null);
var job = vec__39448;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30623__auto___39619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___39619,res,vec__39448,v,p,job,jobs,results){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___39619,res,vec__39448,v,p,job,jobs,results){
return (function (state_39455){
var state_val_39456 = (state_39455[(1)]);
if((state_val_39456 === (1))){
var state_39455__$1 = state_39455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39455__$1,(2),res,v);
} else {
if((state_val_39456 === (2))){
var inst_39452 = (state_39455[(2)]);
var inst_39453 = cljs.core.async.close_BANG_.call(null,res);
var state_39455__$1 = (function (){var statearr_39457 = state_39455;
(statearr_39457[(7)] = inst_39452);

return statearr_39457;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39455__$1,inst_39453);
} else {
return null;
}
}
});})(c__30623__auto___39619,res,vec__39448,v,p,job,jobs,results))
;
return ((function (switch__30535__auto__,c__30623__auto___39619,res,vec__39448,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____0 = (function (){
var statearr_39458 = [null,null,null,null,null,null,null,null];
(statearr_39458[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__);

(statearr_39458[(1)] = (1));

return statearr_39458;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____1 = (function (state_39455){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_39455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e39459){if((e39459 instanceof Object)){
var ex__30539__auto__ = e39459;
var statearr_39460_39620 = state_39455;
(statearr_39460_39620[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39621 = state_39455;
state_39455 = G__39621;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__ = function(state_39455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____1.call(this,state_39455);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___39619,res,vec__39448,v,p,job,jobs,results))
})();
var state__30625__auto__ = (function (){var statearr_39461 = f__30624__auto__.call(null);
(statearr_39461[(6)] = c__30623__auto___39619);

return statearr_39461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___39619,res,vec__39448,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39462){
var vec__39463 = p__39462;
var v = cljs.core.nth.call(null,vec__39463,(0),null);
var p = cljs.core.nth.call(null,vec__39463,(1),null);
var job = vec__39463;
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
var n__28140__auto___39622 = n;
var __39623 = (0);
while(true){
if((__39623 < n__28140__auto___39622)){
var G__39466_39624 = type;
var G__39466_39625__$1 = (((G__39466_39624 instanceof cljs.core.Keyword))?G__39466_39624.fqn:null);
switch (G__39466_39625__$1) {
case "compute":
var c__30623__auto___39627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39623,c__30623__auto___39627,G__39466_39624,G__39466_39625__$1,n__28140__auto___39622,jobs,results,process,async){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (__39623,c__30623__auto___39627,G__39466_39624,G__39466_39625__$1,n__28140__auto___39622,jobs,results,process,async){
return (function (state_39479){
var state_val_39480 = (state_39479[(1)]);
if((state_val_39480 === (1))){
var state_39479__$1 = state_39479;
var statearr_39481_39628 = state_39479__$1;
(statearr_39481_39628[(2)] = null);

(statearr_39481_39628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39480 === (2))){
var state_39479__$1 = state_39479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39479__$1,(4),jobs);
} else {
if((state_val_39480 === (3))){
var inst_39477 = (state_39479[(2)]);
var state_39479__$1 = state_39479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39479__$1,inst_39477);
} else {
if((state_val_39480 === (4))){
var inst_39469 = (state_39479[(2)]);
var inst_39470 = process.call(null,inst_39469);
var state_39479__$1 = state_39479;
if(cljs.core.truth_(inst_39470)){
var statearr_39482_39629 = state_39479__$1;
(statearr_39482_39629[(1)] = (5));

} else {
var statearr_39483_39630 = state_39479__$1;
(statearr_39483_39630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39480 === (5))){
var state_39479__$1 = state_39479;
var statearr_39484_39631 = state_39479__$1;
(statearr_39484_39631[(2)] = null);

(statearr_39484_39631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39480 === (6))){
var state_39479__$1 = state_39479;
var statearr_39485_39632 = state_39479__$1;
(statearr_39485_39632[(2)] = null);

(statearr_39485_39632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39480 === (7))){
var inst_39475 = (state_39479[(2)]);
var state_39479__$1 = state_39479;
var statearr_39486_39633 = state_39479__$1;
(statearr_39486_39633[(2)] = inst_39475);

(statearr_39486_39633[(1)] = (3));


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
});})(__39623,c__30623__auto___39627,G__39466_39624,G__39466_39625__$1,n__28140__auto___39622,jobs,results,process,async))
;
return ((function (__39623,switch__30535__auto__,c__30623__auto___39627,G__39466_39624,G__39466_39625__$1,n__28140__auto___39622,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____0 = (function (){
var statearr_39487 = [null,null,null,null,null,null,null];
(statearr_39487[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__);

(statearr_39487[(1)] = (1));

return statearr_39487;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____1 = (function (state_39479){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_39479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e39488){if((e39488 instanceof Object)){
var ex__30539__auto__ = e39488;
var statearr_39489_39634 = state_39479;
(statearr_39489_39634[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39635 = state_39479;
state_39479 = G__39635;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__ = function(state_39479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____1.call(this,state_39479);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__;
})()
;})(__39623,switch__30535__auto__,c__30623__auto___39627,G__39466_39624,G__39466_39625__$1,n__28140__auto___39622,jobs,results,process,async))
})();
var state__30625__auto__ = (function (){var statearr_39490 = f__30624__auto__.call(null);
(statearr_39490[(6)] = c__30623__auto___39627);

return statearr_39490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(__39623,c__30623__auto___39627,G__39466_39624,G__39466_39625__$1,n__28140__auto___39622,jobs,results,process,async))
);


break;
case "async":
var c__30623__auto___39636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39623,c__30623__auto___39636,G__39466_39624,G__39466_39625__$1,n__28140__auto___39622,jobs,results,process,async){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (__39623,c__30623__auto___39636,G__39466_39624,G__39466_39625__$1,n__28140__auto___39622,jobs,results,process,async){
return (function (state_39503){
var state_val_39504 = (state_39503[(1)]);
if((state_val_39504 === (1))){
var state_39503__$1 = state_39503;
var statearr_39505_39637 = state_39503__$1;
(statearr_39505_39637[(2)] = null);

(statearr_39505_39637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39504 === (2))){
var state_39503__$1 = state_39503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39503__$1,(4),jobs);
} else {
if((state_val_39504 === (3))){
var inst_39501 = (state_39503[(2)]);
var state_39503__$1 = state_39503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39503__$1,inst_39501);
} else {
if((state_val_39504 === (4))){
var inst_39493 = (state_39503[(2)]);
var inst_39494 = async.call(null,inst_39493);
var state_39503__$1 = state_39503;
if(cljs.core.truth_(inst_39494)){
var statearr_39506_39638 = state_39503__$1;
(statearr_39506_39638[(1)] = (5));

} else {
var statearr_39507_39639 = state_39503__$1;
(statearr_39507_39639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39504 === (5))){
var state_39503__$1 = state_39503;
var statearr_39508_39640 = state_39503__$1;
(statearr_39508_39640[(2)] = null);

(statearr_39508_39640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39504 === (6))){
var state_39503__$1 = state_39503;
var statearr_39509_39641 = state_39503__$1;
(statearr_39509_39641[(2)] = null);

(statearr_39509_39641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39504 === (7))){
var inst_39499 = (state_39503[(2)]);
var state_39503__$1 = state_39503;
var statearr_39510_39642 = state_39503__$1;
(statearr_39510_39642[(2)] = inst_39499);

(statearr_39510_39642[(1)] = (3));


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
});})(__39623,c__30623__auto___39636,G__39466_39624,G__39466_39625__$1,n__28140__auto___39622,jobs,results,process,async))
;
return ((function (__39623,switch__30535__auto__,c__30623__auto___39636,G__39466_39624,G__39466_39625__$1,n__28140__auto___39622,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____0 = (function (){
var statearr_39511 = [null,null,null,null,null,null,null];
(statearr_39511[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__);

(statearr_39511[(1)] = (1));

return statearr_39511;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____1 = (function (state_39503){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_39503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e39512){if((e39512 instanceof Object)){
var ex__30539__auto__ = e39512;
var statearr_39513_39643 = state_39503;
(statearr_39513_39643[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39644 = state_39503;
state_39503 = G__39644;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__ = function(state_39503){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____1.call(this,state_39503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__;
})()
;})(__39623,switch__30535__auto__,c__30623__auto___39636,G__39466_39624,G__39466_39625__$1,n__28140__auto___39622,jobs,results,process,async))
})();
var state__30625__auto__ = (function (){var statearr_39514 = f__30624__auto__.call(null);
(statearr_39514[(6)] = c__30623__auto___39636);

return statearr_39514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(__39623,c__30623__auto___39636,G__39466_39624,G__39466_39625__$1,n__28140__auto___39622,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39466_39625__$1)].join('')));

}

var G__39645 = (__39623 + (1));
__39623 = G__39645;
continue;
} else {
}
break;
}

var c__30623__auto___39646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___39646,jobs,results,process,async){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___39646,jobs,results,process,async){
return (function (state_39536){
var state_val_39537 = (state_39536[(1)]);
if((state_val_39537 === (1))){
var state_39536__$1 = state_39536;
var statearr_39538_39647 = state_39536__$1;
(statearr_39538_39647[(2)] = null);

(statearr_39538_39647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39537 === (2))){
var state_39536__$1 = state_39536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39536__$1,(4),from);
} else {
if((state_val_39537 === (3))){
var inst_39534 = (state_39536[(2)]);
var state_39536__$1 = state_39536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39536__$1,inst_39534);
} else {
if((state_val_39537 === (4))){
var inst_39517 = (state_39536[(7)]);
var inst_39517__$1 = (state_39536[(2)]);
var inst_39518 = (inst_39517__$1 == null);
var state_39536__$1 = (function (){var statearr_39539 = state_39536;
(statearr_39539[(7)] = inst_39517__$1);

return statearr_39539;
})();
if(cljs.core.truth_(inst_39518)){
var statearr_39540_39648 = state_39536__$1;
(statearr_39540_39648[(1)] = (5));

} else {
var statearr_39541_39649 = state_39536__$1;
(statearr_39541_39649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39537 === (5))){
var inst_39520 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39536__$1 = state_39536;
var statearr_39542_39650 = state_39536__$1;
(statearr_39542_39650[(2)] = inst_39520);

(statearr_39542_39650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39537 === (6))){
var inst_39522 = (state_39536[(8)]);
var inst_39517 = (state_39536[(7)]);
var inst_39522__$1 = cljs.core.async.chan.call(null,(1));
var inst_39523 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39524 = [inst_39517,inst_39522__$1];
var inst_39525 = (new cljs.core.PersistentVector(null,2,(5),inst_39523,inst_39524,null));
var state_39536__$1 = (function (){var statearr_39543 = state_39536;
(statearr_39543[(8)] = inst_39522__$1);

return statearr_39543;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39536__$1,(8),jobs,inst_39525);
} else {
if((state_val_39537 === (7))){
var inst_39532 = (state_39536[(2)]);
var state_39536__$1 = state_39536;
var statearr_39544_39651 = state_39536__$1;
(statearr_39544_39651[(2)] = inst_39532);

(statearr_39544_39651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39537 === (8))){
var inst_39522 = (state_39536[(8)]);
var inst_39527 = (state_39536[(2)]);
var state_39536__$1 = (function (){var statearr_39545 = state_39536;
(statearr_39545[(9)] = inst_39527);

return statearr_39545;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39536__$1,(9),results,inst_39522);
} else {
if((state_val_39537 === (9))){
var inst_39529 = (state_39536[(2)]);
var state_39536__$1 = (function (){var statearr_39546 = state_39536;
(statearr_39546[(10)] = inst_39529);

return statearr_39546;
})();
var statearr_39547_39652 = state_39536__$1;
(statearr_39547_39652[(2)] = null);

(statearr_39547_39652[(1)] = (2));


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
});})(c__30623__auto___39646,jobs,results,process,async))
;
return ((function (switch__30535__auto__,c__30623__auto___39646,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____0 = (function (){
var statearr_39548 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39548[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__);

(statearr_39548[(1)] = (1));

return statearr_39548;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____1 = (function (state_39536){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_39536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e39549){if((e39549 instanceof Object)){
var ex__30539__auto__ = e39549;
var statearr_39550_39653 = state_39536;
(statearr_39550_39653[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39654 = state_39536;
state_39536 = G__39654;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__ = function(state_39536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____1.call(this,state_39536);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___39646,jobs,results,process,async))
})();
var state__30625__auto__ = (function (){var statearr_39551 = f__30624__auto__.call(null);
(statearr_39551[(6)] = c__30623__auto___39646);

return statearr_39551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___39646,jobs,results,process,async))
);


var c__30623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto__,jobs,results,process,async){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto__,jobs,results,process,async){
return (function (state_39589){
var state_val_39590 = (state_39589[(1)]);
if((state_val_39590 === (7))){
var inst_39585 = (state_39589[(2)]);
var state_39589__$1 = state_39589;
var statearr_39591_39655 = state_39589__$1;
(statearr_39591_39655[(2)] = inst_39585);

(statearr_39591_39655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (20))){
var state_39589__$1 = state_39589;
var statearr_39592_39656 = state_39589__$1;
(statearr_39592_39656[(2)] = null);

(statearr_39592_39656[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (1))){
var state_39589__$1 = state_39589;
var statearr_39593_39657 = state_39589__$1;
(statearr_39593_39657[(2)] = null);

(statearr_39593_39657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (4))){
var inst_39554 = (state_39589[(7)]);
var inst_39554__$1 = (state_39589[(2)]);
var inst_39555 = (inst_39554__$1 == null);
var state_39589__$1 = (function (){var statearr_39594 = state_39589;
(statearr_39594[(7)] = inst_39554__$1);

return statearr_39594;
})();
if(cljs.core.truth_(inst_39555)){
var statearr_39595_39658 = state_39589__$1;
(statearr_39595_39658[(1)] = (5));

} else {
var statearr_39596_39659 = state_39589__$1;
(statearr_39596_39659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (15))){
var inst_39567 = (state_39589[(8)]);
var state_39589__$1 = state_39589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39589__$1,(18),to,inst_39567);
} else {
if((state_val_39590 === (21))){
var inst_39580 = (state_39589[(2)]);
var state_39589__$1 = state_39589;
var statearr_39597_39660 = state_39589__$1;
(statearr_39597_39660[(2)] = inst_39580);

(statearr_39597_39660[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (13))){
var inst_39582 = (state_39589[(2)]);
var state_39589__$1 = (function (){var statearr_39598 = state_39589;
(statearr_39598[(9)] = inst_39582);

return statearr_39598;
})();
var statearr_39599_39661 = state_39589__$1;
(statearr_39599_39661[(2)] = null);

(statearr_39599_39661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (6))){
var inst_39554 = (state_39589[(7)]);
var state_39589__$1 = state_39589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39589__$1,(11),inst_39554);
} else {
if((state_val_39590 === (17))){
var inst_39575 = (state_39589[(2)]);
var state_39589__$1 = state_39589;
if(cljs.core.truth_(inst_39575)){
var statearr_39600_39662 = state_39589__$1;
(statearr_39600_39662[(1)] = (19));

} else {
var statearr_39601_39663 = state_39589__$1;
(statearr_39601_39663[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (3))){
var inst_39587 = (state_39589[(2)]);
var state_39589__$1 = state_39589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39589__$1,inst_39587);
} else {
if((state_val_39590 === (12))){
var inst_39564 = (state_39589[(10)]);
var state_39589__$1 = state_39589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39589__$1,(14),inst_39564);
} else {
if((state_val_39590 === (2))){
var state_39589__$1 = state_39589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39589__$1,(4),results);
} else {
if((state_val_39590 === (19))){
var state_39589__$1 = state_39589;
var statearr_39602_39664 = state_39589__$1;
(statearr_39602_39664[(2)] = null);

(statearr_39602_39664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (11))){
var inst_39564 = (state_39589[(2)]);
var state_39589__$1 = (function (){var statearr_39603 = state_39589;
(statearr_39603[(10)] = inst_39564);

return statearr_39603;
})();
var statearr_39604_39665 = state_39589__$1;
(statearr_39604_39665[(2)] = null);

(statearr_39604_39665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (9))){
var state_39589__$1 = state_39589;
var statearr_39605_39666 = state_39589__$1;
(statearr_39605_39666[(2)] = null);

(statearr_39605_39666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (5))){
var state_39589__$1 = state_39589;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39606_39667 = state_39589__$1;
(statearr_39606_39667[(1)] = (8));

} else {
var statearr_39607_39668 = state_39589__$1;
(statearr_39607_39668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (14))){
var inst_39567 = (state_39589[(8)]);
var inst_39569 = (state_39589[(11)]);
var inst_39567__$1 = (state_39589[(2)]);
var inst_39568 = (inst_39567__$1 == null);
var inst_39569__$1 = cljs.core.not.call(null,inst_39568);
var state_39589__$1 = (function (){var statearr_39608 = state_39589;
(statearr_39608[(8)] = inst_39567__$1);

(statearr_39608[(11)] = inst_39569__$1);

return statearr_39608;
})();
if(inst_39569__$1){
var statearr_39609_39669 = state_39589__$1;
(statearr_39609_39669[(1)] = (15));

} else {
var statearr_39610_39670 = state_39589__$1;
(statearr_39610_39670[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (16))){
var inst_39569 = (state_39589[(11)]);
var state_39589__$1 = state_39589;
var statearr_39611_39671 = state_39589__$1;
(statearr_39611_39671[(2)] = inst_39569);

(statearr_39611_39671[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (10))){
var inst_39561 = (state_39589[(2)]);
var state_39589__$1 = state_39589;
var statearr_39612_39672 = state_39589__$1;
(statearr_39612_39672[(2)] = inst_39561);

(statearr_39612_39672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (18))){
var inst_39572 = (state_39589[(2)]);
var state_39589__$1 = state_39589;
var statearr_39613_39673 = state_39589__$1;
(statearr_39613_39673[(2)] = inst_39572);

(statearr_39613_39673[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39590 === (8))){
var inst_39558 = cljs.core.async.close_BANG_.call(null,to);
var state_39589__$1 = state_39589;
var statearr_39614_39674 = state_39589__$1;
(statearr_39614_39674[(2)] = inst_39558);

(statearr_39614_39674[(1)] = (10));


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
});})(c__30623__auto__,jobs,results,process,async))
;
return ((function (switch__30535__auto__,c__30623__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____0 = (function (){
var statearr_39615 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39615[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__);

(statearr_39615[(1)] = (1));

return statearr_39615;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____1 = (function (state_39589){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_39589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e39616){if((e39616 instanceof Object)){
var ex__30539__auto__ = e39616;
var statearr_39617_39675 = state_39589;
(statearr_39617_39675[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39676 = state_39589;
state_39589 = G__39676;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__ = function(state_39589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____1.call(this,state_39589);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30536__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto__,jobs,results,process,async))
})();
var state__30625__auto__ = (function (){var statearr_39618 = f__30624__auto__.call(null);
(statearr_39618[(6)] = c__30623__auto__);

return statearr_39618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto__,jobs,results,process,async))
);

return c__30623__auto__;
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
var G__39678 = arguments.length;
switch (G__39678) {
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
var G__39681 = arguments.length;
switch (G__39681) {
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
var G__39684 = arguments.length;
switch (G__39684) {
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
var c__30623__auto___39733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___39733,tc,fc){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___39733,tc,fc){
return (function (state_39710){
var state_val_39711 = (state_39710[(1)]);
if((state_val_39711 === (7))){
var inst_39706 = (state_39710[(2)]);
var state_39710__$1 = state_39710;
var statearr_39712_39734 = state_39710__$1;
(statearr_39712_39734[(2)] = inst_39706);

(statearr_39712_39734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39711 === (1))){
var state_39710__$1 = state_39710;
var statearr_39713_39735 = state_39710__$1;
(statearr_39713_39735[(2)] = null);

(statearr_39713_39735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39711 === (4))){
var inst_39687 = (state_39710[(7)]);
var inst_39687__$1 = (state_39710[(2)]);
var inst_39688 = (inst_39687__$1 == null);
var state_39710__$1 = (function (){var statearr_39714 = state_39710;
(statearr_39714[(7)] = inst_39687__$1);

return statearr_39714;
})();
if(cljs.core.truth_(inst_39688)){
var statearr_39715_39736 = state_39710__$1;
(statearr_39715_39736[(1)] = (5));

} else {
var statearr_39716_39737 = state_39710__$1;
(statearr_39716_39737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39711 === (13))){
var state_39710__$1 = state_39710;
var statearr_39717_39738 = state_39710__$1;
(statearr_39717_39738[(2)] = null);

(statearr_39717_39738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39711 === (6))){
var inst_39687 = (state_39710[(7)]);
var inst_39693 = p.call(null,inst_39687);
var state_39710__$1 = state_39710;
if(cljs.core.truth_(inst_39693)){
var statearr_39718_39739 = state_39710__$1;
(statearr_39718_39739[(1)] = (9));

} else {
var statearr_39719_39740 = state_39710__$1;
(statearr_39719_39740[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39711 === (3))){
var inst_39708 = (state_39710[(2)]);
var state_39710__$1 = state_39710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39710__$1,inst_39708);
} else {
if((state_val_39711 === (12))){
var state_39710__$1 = state_39710;
var statearr_39720_39741 = state_39710__$1;
(statearr_39720_39741[(2)] = null);

(statearr_39720_39741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39711 === (2))){
var state_39710__$1 = state_39710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39710__$1,(4),ch);
} else {
if((state_val_39711 === (11))){
var inst_39687 = (state_39710[(7)]);
var inst_39697 = (state_39710[(2)]);
var state_39710__$1 = state_39710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39710__$1,(8),inst_39697,inst_39687);
} else {
if((state_val_39711 === (9))){
var state_39710__$1 = state_39710;
var statearr_39721_39742 = state_39710__$1;
(statearr_39721_39742[(2)] = tc);

(statearr_39721_39742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39711 === (5))){
var inst_39690 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39691 = cljs.core.async.close_BANG_.call(null,fc);
var state_39710__$1 = (function (){var statearr_39722 = state_39710;
(statearr_39722[(8)] = inst_39690);

return statearr_39722;
})();
var statearr_39723_39743 = state_39710__$1;
(statearr_39723_39743[(2)] = inst_39691);

(statearr_39723_39743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39711 === (14))){
var inst_39704 = (state_39710[(2)]);
var state_39710__$1 = state_39710;
var statearr_39724_39744 = state_39710__$1;
(statearr_39724_39744[(2)] = inst_39704);

(statearr_39724_39744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39711 === (10))){
var state_39710__$1 = state_39710;
var statearr_39725_39745 = state_39710__$1;
(statearr_39725_39745[(2)] = fc);

(statearr_39725_39745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39711 === (8))){
var inst_39699 = (state_39710[(2)]);
var state_39710__$1 = state_39710;
if(cljs.core.truth_(inst_39699)){
var statearr_39726_39746 = state_39710__$1;
(statearr_39726_39746[(1)] = (12));

} else {
var statearr_39727_39747 = state_39710__$1;
(statearr_39727_39747[(1)] = (13));

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
});})(c__30623__auto___39733,tc,fc))
;
return ((function (switch__30535__auto__,c__30623__auto___39733,tc,fc){
return (function() {
var cljs$core$async$state_machine__30536__auto__ = null;
var cljs$core$async$state_machine__30536__auto____0 = (function (){
var statearr_39728 = [null,null,null,null,null,null,null,null,null];
(statearr_39728[(0)] = cljs$core$async$state_machine__30536__auto__);

(statearr_39728[(1)] = (1));

return statearr_39728;
});
var cljs$core$async$state_machine__30536__auto____1 = (function (state_39710){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_39710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e39729){if((e39729 instanceof Object)){
var ex__30539__auto__ = e39729;
var statearr_39730_39748 = state_39710;
(statearr_39730_39748[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39749 = state_39710;
state_39710 = G__39749;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$state_machine__30536__auto__ = function(state_39710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30536__auto____1.call(this,state_39710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30536__auto____0;
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30536__auto____1;
return cljs$core$async$state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___39733,tc,fc))
})();
var state__30625__auto__ = (function (){var statearr_39731 = f__30624__auto__.call(null);
(statearr_39731[(6)] = c__30623__auto___39733);

return statearr_39731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___39733,tc,fc))
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
var c__30623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto__){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto__){
return (function (state_39770){
var state_val_39771 = (state_39770[(1)]);
if((state_val_39771 === (7))){
var inst_39766 = (state_39770[(2)]);
var state_39770__$1 = state_39770;
var statearr_39772_39790 = state_39770__$1;
(statearr_39772_39790[(2)] = inst_39766);

(statearr_39772_39790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39771 === (1))){
var inst_39750 = init;
var state_39770__$1 = (function (){var statearr_39773 = state_39770;
(statearr_39773[(7)] = inst_39750);

return statearr_39773;
})();
var statearr_39774_39791 = state_39770__$1;
(statearr_39774_39791[(2)] = null);

(statearr_39774_39791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39771 === (4))){
var inst_39753 = (state_39770[(8)]);
var inst_39753__$1 = (state_39770[(2)]);
var inst_39754 = (inst_39753__$1 == null);
var state_39770__$1 = (function (){var statearr_39775 = state_39770;
(statearr_39775[(8)] = inst_39753__$1);

return statearr_39775;
})();
if(cljs.core.truth_(inst_39754)){
var statearr_39776_39792 = state_39770__$1;
(statearr_39776_39792[(1)] = (5));

} else {
var statearr_39777_39793 = state_39770__$1;
(statearr_39777_39793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39771 === (6))){
var inst_39757 = (state_39770[(9)]);
var inst_39753 = (state_39770[(8)]);
var inst_39750 = (state_39770[(7)]);
var inst_39757__$1 = f.call(null,inst_39750,inst_39753);
var inst_39758 = cljs.core.reduced_QMARK_.call(null,inst_39757__$1);
var state_39770__$1 = (function (){var statearr_39778 = state_39770;
(statearr_39778[(9)] = inst_39757__$1);

return statearr_39778;
})();
if(inst_39758){
var statearr_39779_39794 = state_39770__$1;
(statearr_39779_39794[(1)] = (8));

} else {
var statearr_39780_39795 = state_39770__$1;
(statearr_39780_39795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39771 === (3))){
var inst_39768 = (state_39770[(2)]);
var state_39770__$1 = state_39770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39770__$1,inst_39768);
} else {
if((state_val_39771 === (2))){
var state_39770__$1 = state_39770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39770__$1,(4),ch);
} else {
if((state_val_39771 === (9))){
var inst_39757 = (state_39770[(9)]);
var inst_39750 = inst_39757;
var state_39770__$1 = (function (){var statearr_39781 = state_39770;
(statearr_39781[(7)] = inst_39750);

return statearr_39781;
})();
var statearr_39782_39796 = state_39770__$1;
(statearr_39782_39796[(2)] = null);

(statearr_39782_39796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39771 === (5))){
var inst_39750 = (state_39770[(7)]);
var state_39770__$1 = state_39770;
var statearr_39783_39797 = state_39770__$1;
(statearr_39783_39797[(2)] = inst_39750);

(statearr_39783_39797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39771 === (10))){
var inst_39764 = (state_39770[(2)]);
var state_39770__$1 = state_39770;
var statearr_39784_39798 = state_39770__$1;
(statearr_39784_39798[(2)] = inst_39764);

(statearr_39784_39798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39771 === (8))){
var inst_39757 = (state_39770[(9)]);
var inst_39760 = cljs.core.deref.call(null,inst_39757);
var state_39770__$1 = state_39770;
var statearr_39785_39799 = state_39770__$1;
(statearr_39785_39799[(2)] = inst_39760);

(statearr_39785_39799[(1)] = (10));


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
});})(c__30623__auto__))
;
return ((function (switch__30535__auto__,c__30623__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30536__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30536__auto____0 = (function (){
var statearr_39786 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39786[(0)] = cljs$core$async$reduce_$_state_machine__30536__auto__);

(statearr_39786[(1)] = (1));

return statearr_39786;
});
var cljs$core$async$reduce_$_state_machine__30536__auto____1 = (function (state_39770){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_39770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e39787){if((e39787 instanceof Object)){
var ex__30539__auto__ = e39787;
var statearr_39788_39800 = state_39770;
(statearr_39788_39800[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39801 = state_39770;
state_39770 = G__39801;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30536__auto__ = function(state_39770){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30536__auto____1.call(this,state_39770);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30536__auto____0;
cljs$core$async$reduce_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30536__auto____1;
return cljs$core$async$reduce_$_state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto__))
})();
var state__30625__auto__ = (function (){var statearr_39789 = f__30624__auto__.call(null);
(statearr_39789[(6)] = c__30623__auto__);

return statearr_39789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto__))
);

return c__30623__auto__;
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
var G__39803 = arguments.length;
switch (G__39803) {
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
var c__30623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto__){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto__){
return (function (state_39828){
var state_val_39829 = (state_39828[(1)]);
if((state_val_39829 === (7))){
var inst_39810 = (state_39828[(2)]);
var state_39828__$1 = state_39828;
var statearr_39830_39851 = state_39828__$1;
(statearr_39830_39851[(2)] = inst_39810);

(statearr_39830_39851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39829 === (1))){
var inst_39804 = cljs.core.seq.call(null,coll);
var inst_39805 = inst_39804;
var state_39828__$1 = (function (){var statearr_39831 = state_39828;
(statearr_39831[(7)] = inst_39805);

return statearr_39831;
})();
var statearr_39832_39852 = state_39828__$1;
(statearr_39832_39852[(2)] = null);

(statearr_39832_39852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39829 === (4))){
var inst_39805 = (state_39828[(7)]);
var inst_39808 = cljs.core.first.call(null,inst_39805);
var state_39828__$1 = state_39828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39828__$1,(7),ch,inst_39808);
} else {
if((state_val_39829 === (13))){
var inst_39822 = (state_39828[(2)]);
var state_39828__$1 = state_39828;
var statearr_39833_39853 = state_39828__$1;
(statearr_39833_39853[(2)] = inst_39822);

(statearr_39833_39853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39829 === (6))){
var inst_39813 = (state_39828[(2)]);
var state_39828__$1 = state_39828;
if(cljs.core.truth_(inst_39813)){
var statearr_39834_39854 = state_39828__$1;
(statearr_39834_39854[(1)] = (8));

} else {
var statearr_39835_39855 = state_39828__$1;
(statearr_39835_39855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39829 === (3))){
var inst_39826 = (state_39828[(2)]);
var state_39828__$1 = state_39828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39828__$1,inst_39826);
} else {
if((state_val_39829 === (12))){
var state_39828__$1 = state_39828;
var statearr_39836_39856 = state_39828__$1;
(statearr_39836_39856[(2)] = null);

(statearr_39836_39856[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39829 === (2))){
var inst_39805 = (state_39828[(7)]);
var state_39828__$1 = state_39828;
if(cljs.core.truth_(inst_39805)){
var statearr_39837_39857 = state_39828__$1;
(statearr_39837_39857[(1)] = (4));

} else {
var statearr_39838_39858 = state_39828__$1;
(statearr_39838_39858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39829 === (11))){
var inst_39819 = cljs.core.async.close_BANG_.call(null,ch);
var state_39828__$1 = state_39828;
var statearr_39839_39859 = state_39828__$1;
(statearr_39839_39859[(2)] = inst_39819);

(statearr_39839_39859[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39829 === (9))){
var state_39828__$1 = state_39828;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39840_39860 = state_39828__$1;
(statearr_39840_39860[(1)] = (11));

} else {
var statearr_39841_39861 = state_39828__$1;
(statearr_39841_39861[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39829 === (5))){
var inst_39805 = (state_39828[(7)]);
var state_39828__$1 = state_39828;
var statearr_39842_39862 = state_39828__$1;
(statearr_39842_39862[(2)] = inst_39805);

(statearr_39842_39862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39829 === (10))){
var inst_39824 = (state_39828[(2)]);
var state_39828__$1 = state_39828;
var statearr_39843_39863 = state_39828__$1;
(statearr_39843_39863[(2)] = inst_39824);

(statearr_39843_39863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39829 === (8))){
var inst_39805 = (state_39828[(7)]);
var inst_39815 = cljs.core.next.call(null,inst_39805);
var inst_39805__$1 = inst_39815;
var state_39828__$1 = (function (){var statearr_39844 = state_39828;
(statearr_39844[(7)] = inst_39805__$1);

return statearr_39844;
})();
var statearr_39845_39864 = state_39828__$1;
(statearr_39845_39864[(2)] = null);

(statearr_39845_39864[(1)] = (2));


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
});})(c__30623__auto__))
;
return ((function (switch__30535__auto__,c__30623__auto__){
return (function() {
var cljs$core$async$state_machine__30536__auto__ = null;
var cljs$core$async$state_machine__30536__auto____0 = (function (){
var statearr_39846 = [null,null,null,null,null,null,null,null];
(statearr_39846[(0)] = cljs$core$async$state_machine__30536__auto__);

(statearr_39846[(1)] = (1));

return statearr_39846;
});
var cljs$core$async$state_machine__30536__auto____1 = (function (state_39828){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_39828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e39847){if((e39847 instanceof Object)){
var ex__30539__auto__ = e39847;
var statearr_39848_39865 = state_39828;
(statearr_39848_39865[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39866 = state_39828;
state_39828 = G__39866;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$state_machine__30536__auto__ = function(state_39828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30536__auto____1.call(this,state_39828);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30536__auto____0;
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30536__auto____1;
return cljs$core$async$state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto__))
})();
var state__30625__auto__ = (function (){var statearr_39849 = f__30624__auto__.call(null);
(statearr_39849[(6)] = c__30623__auto__);

return statearr_39849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto__))
);

return c__30623__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async39867 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39867 = (function (ch,cs,meta39868){
this.ch = ch;
this.cs = cs;
this.meta39868 = meta39868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39869,meta39868__$1){
var self__ = this;
var _39869__$1 = this;
return (new cljs.core.async.t_cljs$core$async39867(self__.ch,self__.cs,meta39868__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39867.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39869){
var self__ = this;
var _39869__$1 = this;
return self__.meta39868;
});})(cs))
;

cljs.core.async.t_cljs$core$async39867.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39867.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39867.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39867.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39867.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39867.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39867.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39868","meta39868",1883545384,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39867.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39867";

cljs.core.async.t_cljs$core$async39867.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39867");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39867 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39867(ch__$1,cs__$1,meta39868){
return (new cljs.core.async.t_cljs$core$async39867(ch__$1,cs__$1,meta39868));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39867(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30623__auto___40089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___40089,cs,m,dchan,dctr,done){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___40089,cs,m,dchan,dctr,done){
return (function (state_40004){
var state_val_40005 = (state_40004[(1)]);
if((state_val_40005 === (7))){
var inst_40000 = (state_40004[(2)]);
var state_40004__$1 = state_40004;
var statearr_40006_40090 = state_40004__$1;
(statearr_40006_40090[(2)] = inst_40000);

(statearr_40006_40090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (20))){
var inst_39903 = (state_40004[(7)]);
var inst_39915 = cljs.core.first.call(null,inst_39903);
var inst_39916 = cljs.core.nth.call(null,inst_39915,(0),null);
var inst_39917 = cljs.core.nth.call(null,inst_39915,(1),null);
var state_40004__$1 = (function (){var statearr_40007 = state_40004;
(statearr_40007[(8)] = inst_39916);

return statearr_40007;
})();
if(cljs.core.truth_(inst_39917)){
var statearr_40008_40091 = state_40004__$1;
(statearr_40008_40091[(1)] = (22));

} else {
var statearr_40009_40092 = state_40004__$1;
(statearr_40009_40092[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (27))){
var inst_39872 = (state_40004[(9)]);
var inst_39945 = (state_40004[(10)]);
var inst_39947 = (state_40004[(11)]);
var inst_39952 = (state_40004[(12)]);
var inst_39952__$1 = cljs.core._nth.call(null,inst_39945,inst_39947);
var inst_39953 = cljs.core.async.put_BANG_.call(null,inst_39952__$1,inst_39872,done);
var state_40004__$1 = (function (){var statearr_40010 = state_40004;
(statearr_40010[(12)] = inst_39952__$1);

return statearr_40010;
})();
if(cljs.core.truth_(inst_39953)){
var statearr_40011_40093 = state_40004__$1;
(statearr_40011_40093[(1)] = (30));

} else {
var statearr_40012_40094 = state_40004__$1;
(statearr_40012_40094[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (1))){
var state_40004__$1 = state_40004;
var statearr_40013_40095 = state_40004__$1;
(statearr_40013_40095[(2)] = null);

(statearr_40013_40095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (24))){
var inst_39903 = (state_40004[(7)]);
var inst_39922 = (state_40004[(2)]);
var inst_39923 = cljs.core.next.call(null,inst_39903);
var inst_39881 = inst_39923;
var inst_39882 = null;
var inst_39883 = (0);
var inst_39884 = (0);
var state_40004__$1 = (function (){var statearr_40014 = state_40004;
(statearr_40014[(13)] = inst_39922);

(statearr_40014[(14)] = inst_39882);

(statearr_40014[(15)] = inst_39881);

(statearr_40014[(16)] = inst_39884);

(statearr_40014[(17)] = inst_39883);

return statearr_40014;
})();
var statearr_40015_40096 = state_40004__$1;
(statearr_40015_40096[(2)] = null);

(statearr_40015_40096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (39))){
var state_40004__$1 = state_40004;
var statearr_40019_40097 = state_40004__$1;
(statearr_40019_40097[(2)] = null);

(statearr_40019_40097[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (4))){
var inst_39872 = (state_40004[(9)]);
var inst_39872__$1 = (state_40004[(2)]);
var inst_39873 = (inst_39872__$1 == null);
var state_40004__$1 = (function (){var statearr_40020 = state_40004;
(statearr_40020[(9)] = inst_39872__$1);

return statearr_40020;
})();
if(cljs.core.truth_(inst_39873)){
var statearr_40021_40098 = state_40004__$1;
(statearr_40021_40098[(1)] = (5));

} else {
var statearr_40022_40099 = state_40004__$1;
(statearr_40022_40099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (15))){
var inst_39882 = (state_40004[(14)]);
var inst_39881 = (state_40004[(15)]);
var inst_39884 = (state_40004[(16)]);
var inst_39883 = (state_40004[(17)]);
var inst_39899 = (state_40004[(2)]);
var inst_39900 = (inst_39884 + (1));
var tmp40016 = inst_39882;
var tmp40017 = inst_39881;
var tmp40018 = inst_39883;
var inst_39881__$1 = tmp40017;
var inst_39882__$1 = tmp40016;
var inst_39883__$1 = tmp40018;
var inst_39884__$1 = inst_39900;
var state_40004__$1 = (function (){var statearr_40023 = state_40004;
(statearr_40023[(18)] = inst_39899);

(statearr_40023[(14)] = inst_39882__$1);

(statearr_40023[(15)] = inst_39881__$1);

(statearr_40023[(16)] = inst_39884__$1);

(statearr_40023[(17)] = inst_39883__$1);

return statearr_40023;
})();
var statearr_40024_40100 = state_40004__$1;
(statearr_40024_40100[(2)] = null);

(statearr_40024_40100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (21))){
var inst_39926 = (state_40004[(2)]);
var state_40004__$1 = state_40004;
var statearr_40028_40101 = state_40004__$1;
(statearr_40028_40101[(2)] = inst_39926);

(statearr_40028_40101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (31))){
var inst_39952 = (state_40004[(12)]);
var inst_39956 = done.call(null,null);
var inst_39957 = cljs.core.async.untap_STAR_.call(null,m,inst_39952);
var state_40004__$1 = (function (){var statearr_40029 = state_40004;
(statearr_40029[(19)] = inst_39956);

return statearr_40029;
})();
var statearr_40030_40102 = state_40004__$1;
(statearr_40030_40102[(2)] = inst_39957);

(statearr_40030_40102[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (32))){
var inst_39946 = (state_40004[(20)]);
var inst_39944 = (state_40004[(21)]);
var inst_39945 = (state_40004[(10)]);
var inst_39947 = (state_40004[(11)]);
var inst_39959 = (state_40004[(2)]);
var inst_39960 = (inst_39947 + (1));
var tmp40025 = inst_39946;
var tmp40026 = inst_39944;
var tmp40027 = inst_39945;
var inst_39944__$1 = tmp40026;
var inst_39945__$1 = tmp40027;
var inst_39946__$1 = tmp40025;
var inst_39947__$1 = inst_39960;
var state_40004__$1 = (function (){var statearr_40031 = state_40004;
(statearr_40031[(20)] = inst_39946__$1);

(statearr_40031[(21)] = inst_39944__$1);

(statearr_40031[(10)] = inst_39945__$1);

(statearr_40031[(11)] = inst_39947__$1);

(statearr_40031[(22)] = inst_39959);

return statearr_40031;
})();
var statearr_40032_40103 = state_40004__$1;
(statearr_40032_40103[(2)] = null);

(statearr_40032_40103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (40))){
var inst_39972 = (state_40004[(23)]);
var inst_39976 = done.call(null,null);
var inst_39977 = cljs.core.async.untap_STAR_.call(null,m,inst_39972);
var state_40004__$1 = (function (){var statearr_40033 = state_40004;
(statearr_40033[(24)] = inst_39976);

return statearr_40033;
})();
var statearr_40034_40104 = state_40004__$1;
(statearr_40034_40104[(2)] = inst_39977);

(statearr_40034_40104[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (33))){
var inst_39963 = (state_40004[(25)]);
var inst_39965 = cljs.core.chunked_seq_QMARK_.call(null,inst_39963);
var state_40004__$1 = state_40004;
if(inst_39965){
var statearr_40035_40105 = state_40004__$1;
(statearr_40035_40105[(1)] = (36));

} else {
var statearr_40036_40106 = state_40004__$1;
(statearr_40036_40106[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (13))){
var inst_39893 = (state_40004[(26)]);
var inst_39896 = cljs.core.async.close_BANG_.call(null,inst_39893);
var state_40004__$1 = state_40004;
var statearr_40037_40107 = state_40004__$1;
(statearr_40037_40107[(2)] = inst_39896);

(statearr_40037_40107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (22))){
var inst_39916 = (state_40004[(8)]);
var inst_39919 = cljs.core.async.close_BANG_.call(null,inst_39916);
var state_40004__$1 = state_40004;
var statearr_40038_40108 = state_40004__$1;
(statearr_40038_40108[(2)] = inst_39919);

(statearr_40038_40108[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (36))){
var inst_39963 = (state_40004[(25)]);
var inst_39967 = cljs.core.chunk_first.call(null,inst_39963);
var inst_39968 = cljs.core.chunk_rest.call(null,inst_39963);
var inst_39969 = cljs.core.count.call(null,inst_39967);
var inst_39944 = inst_39968;
var inst_39945 = inst_39967;
var inst_39946 = inst_39969;
var inst_39947 = (0);
var state_40004__$1 = (function (){var statearr_40039 = state_40004;
(statearr_40039[(20)] = inst_39946);

(statearr_40039[(21)] = inst_39944);

(statearr_40039[(10)] = inst_39945);

(statearr_40039[(11)] = inst_39947);

return statearr_40039;
})();
var statearr_40040_40109 = state_40004__$1;
(statearr_40040_40109[(2)] = null);

(statearr_40040_40109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (41))){
var inst_39963 = (state_40004[(25)]);
var inst_39979 = (state_40004[(2)]);
var inst_39980 = cljs.core.next.call(null,inst_39963);
var inst_39944 = inst_39980;
var inst_39945 = null;
var inst_39946 = (0);
var inst_39947 = (0);
var state_40004__$1 = (function (){var statearr_40041 = state_40004;
(statearr_40041[(20)] = inst_39946);

(statearr_40041[(21)] = inst_39944);

(statearr_40041[(10)] = inst_39945);

(statearr_40041[(11)] = inst_39947);

(statearr_40041[(27)] = inst_39979);

return statearr_40041;
})();
var statearr_40042_40110 = state_40004__$1;
(statearr_40042_40110[(2)] = null);

(statearr_40042_40110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (43))){
var state_40004__$1 = state_40004;
var statearr_40043_40111 = state_40004__$1;
(statearr_40043_40111[(2)] = null);

(statearr_40043_40111[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (29))){
var inst_39988 = (state_40004[(2)]);
var state_40004__$1 = state_40004;
var statearr_40044_40112 = state_40004__$1;
(statearr_40044_40112[(2)] = inst_39988);

(statearr_40044_40112[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (44))){
var inst_39997 = (state_40004[(2)]);
var state_40004__$1 = (function (){var statearr_40045 = state_40004;
(statearr_40045[(28)] = inst_39997);

return statearr_40045;
})();
var statearr_40046_40113 = state_40004__$1;
(statearr_40046_40113[(2)] = null);

(statearr_40046_40113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (6))){
var inst_39936 = (state_40004[(29)]);
var inst_39935 = cljs.core.deref.call(null,cs);
var inst_39936__$1 = cljs.core.keys.call(null,inst_39935);
var inst_39937 = cljs.core.count.call(null,inst_39936__$1);
var inst_39938 = cljs.core.reset_BANG_.call(null,dctr,inst_39937);
var inst_39943 = cljs.core.seq.call(null,inst_39936__$1);
var inst_39944 = inst_39943;
var inst_39945 = null;
var inst_39946 = (0);
var inst_39947 = (0);
var state_40004__$1 = (function (){var statearr_40047 = state_40004;
(statearr_40047[(20)] = inst_39946);

(statearr_40047[(30)] = inst_39938);

(statearr_40047[(29)] = inst_39936__$1);

(statearr_40047[(21)] = inst_39944);

(statearr_40047[(10)] = inst_39945);

(statearr_40047[(11)] = inst_39947);

return statearr_40047;
})();
var statearr_40048_40114 = state_40004__$1;
(statearr_40048_40114[(2)] = null);

(statearr_40048_40114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (28))){
var inst_39944 = (state_40004[(21)]);
var inst_39963 = (state_40004[(25)]);
var inst_39963__$1 = cljs.core.seq.call(null,inst_39944);
var state_40004__$1 = (function (){var statearr_40049 = state_40004;
(statearr_40049[(25)] = inst_39963__$1);

return statearr_40049;
})();
if(inst_39963__$1){
var statearr_40050_40115 = state_40004__$1;
(statearr_40050_40115[(1)] = (33));

} else {
var statearr_40051_40116 = state_40004__$1;
(statearr_40051_40116[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (25))){
var inst_39946 = (state_40004[(20)]);
var inst_39947 = (state_40004[(11)]);
var inst_39949 = (inst_39947 < inst_39946);
var inst_39950 = inst_39949;
var state_40004__$1 = state_40004;
if(cljs.core.truth_(inst_39950)){
var statearr_40052_40117 = state_40004__$1;
(statearr_40052_40117[(1)] = (27));

} else {
var statearr_40053_40118 = state_40004__$1;
(statearr_40053_40118[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (34))){
var state_40004__$1 = state_40004;
var statearr_40054_40119 = state_40004__$1;
(statearr_40054_40119[(2)] = null);

(statearr_40054_40119[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (17))){
var state_40004__$1 = state_40004;
var statearr_40055_40120 = state_40004__$1;
(statearr_40055_40120[(2)] = null);

(statearr_40055_40120[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (3))){
var inst_40002 = (state_40004[(2)]);
var state_40004__$1 = state_40004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40004__$1,inst_40002);
} else {
if((state_val_40005 === (12))){
var inst_39931 = (state_40004[(2)]);
var state_40004__$1 = state_40004;
var statearr_40056_40121 = state_40004__$1;
(statearr_40056_40121[(2)] = inst_39931);

(statearr_40056_40121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (2))){
var state_40004__$1 = state_40004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40004__$1,(4),ch);
} else {
if((state_val_40005 === (23))){
var state_40004__$1 = state_40004;
var statearr_40057_40122 = state_40004__$1;
(statearr_40057_40122[(2)] = null);

(statearr_40057_40122[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (35))){
var inst_39986 = (state_40004[(2)]);
var state_40004__$1 = state_40004;
var statearr_40058_40123 = state_40004__$1;
(statearr_40058_40123[(2)] = inst_39986);

(statearr_40058_40123[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (19))){
var inst_39903 = (state_40004[(7)]);
var inst_39907 = cljs.core.chunk_first.call(null,inst_39903);
var inst_39908 = cljs.core.chunk_rest.call(null,inst_39903);
var inst_39909 = cljs.core.count.call(null,inst_39907);
var inst_39881 = inst_39908;
var inst_39882 = inst_39907;
var inst_39883 = inst_39909;
var inst_39884 = (0);
var state_40004__$1 = (function (){var statearr_40059 = state_40004;
(statearr_40059[(14)] = inst_39882);

(statearr_40059[(15)] = inst_39881);

(statearr_40059[(16)] = inst_39884);

(statearr_40059[(17)] = inst_39883);

return statearr_40059;
})();
var statearr_40060_40124 = state_40004__$1;
(statearr_40060_40124[(2)] = null);

(statearr_40060_40124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (11))){
var inst_39903 = (state_40004[(7)]);
var inst_39881 = (state_40004[(15)]);
var inst_39903__$1 = cljs.core.seq.call(null,inst_39881);
var state_40004__$1 = (function (){var statearr_40061 = state_40004;
(statearr_40061[(7)] = inst_39903__$1);

return statearr_40061;
})();
if(inst_39903__$1){
var statearr_40062_40125 = state_40004__$1;
(statearr_40062_40125[(1)] = (16));

} else {
var statearr_40063_40126 = state_40004__$1;
(statearr_40063_40126[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (9))){
var inst_39933 = (state_40004[(2)]);
var state_40004__$1 = state_40004;
var statearr_40064_40127 = state_40004__$1;
(statearr_40064_40127[(2)] = inst_39933);

(statearr_40064_40127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (5))){
var inst_39879 = cljs.core.deref.call(null,cs);
var inst_39880 = cljs.core.seq.call(null,inst_39879);
var inst_39881 = inst_39880;
var inst_39882 = null;
var inst_39883 = (0);
var inst_39884 = (0);
var state_40004__$1 = (function (){var statearr_40065 = state_40004;
(statearr_40065[(14)] = inst_39882);

(statearr_40065[(15)] = inst_39881);

(statearr_40065[(16)] = inst_39884);

(statearr_40065[(17)] = inst_39883);

return statearr_40065;
})();
var statearr_40066_40128 = state_40004__$1;
(statearr_40066_40128[(2)] = null);

(statearr_40066_40128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (14))){
var state_40004__$1 = state_40004;
var statearr_40067_40129 = state_40004__$1;
(statearr_40067_40129[(2)] = null);

(statearr_40067_40129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (45))){
var inst_39994 = (state_40004[(2)]);
var state_40004__$1 = state_40004;
var statearr_40068_40130 = state_40004__$1;
(statearr_40068_40130[(2)] = inst_39994);

(statearr_40068_40130[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (26))){
var inst_39936 = (state_40004[(29)]);
var inst_39990 = (state_40004[(2)]);
var inst_39991 = cljs.core.seq.call(null,inst_39936);
var state_40004__$1 = (function (){var statearr_40069 = state_40004;
(statearr_40069[(31)] = inst_39990);

return statearr_40069;
})();
if(inst_39991){
var statearr_40070_40131 = state_40004__$1;
(statearr_40070_40131[(1)] = (42));

} else {
var statearr_40071_40132 = state_40004__$1;
(statearr_40071_40132[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (16))){
var inst_39903 = (state_40004[(7)]);
var inst_39905 = cljs.core.chunked_seq_QMARK_.call(null,inst_39903);
var state_40004__$1 = state_40004;
if(inst_39905){
var statearr_40072_40133 = state_40004__$1;
(statearr_40072_40133[(1)] = (19));

} else {
var statearr_40073_40134 = state_40004__$1;
(statearr_40073_40134[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (38))){
var inst_39983 = (state_40004[(2)]);
var state_40004__$1 = state_40004;
var statearr_40074_40135 = state_40004__$1;
(statearr_40074_40135[(2)] = inst_39983);

(statearr_40074_40135[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (30))){
var state_40004__$1 = state_40004;
var statearr_40075_40136 = state_40004__$1;
(statearr_40075_40136[(2)] = null);

(statearr_40075_40136[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (10))){
var inst_39882 = (state_40004[(14)]);
var inst_39884 = (state_40004[(16)]);
var inst_39892 = cljs.core._nth.call(null,inst_39882,inst_39884);
var inst_39893 = cljs.core.nth.call(null,inst_39892,(0),null);
var inst_39894 = cljs.core.nth.call(null,inst_39892,(1),null);
var state_40004__$1 = (function (){var statearr_40076 = state_40004;
(statearr_40076[(26)] = inst_39893);

return statearr_40076;
})();
if(cljs.core.truth_(inst_39894)){
var statearr_40077_40137 = state_40004__$1;
(statearr_40077_40137[(1)] = (13));

} else {
var statearr_40078_40138 = state_40004__$1;
(statearr_40078_40138[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (18))){
var inst_39929 = (state_40004[(2)]);
var state_40004__$1 = state_40004;
var statearr_40079_40139 = state_40004__$1;
(statearr_40079_40139[(2)] = inst_39929);

(statearr_40079_40139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (42))){
var state_40004__$1 = state_40004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40004__$1,(45),dchan);
} else {
if((state_val_40005 === (37))){
var inst_39972 = (state_40004[(23)]);
var inst_39963 = (state_40004[(25)]);
var inst_39872 = (state_40004[(9)]);
var inst_39972__$1 = cljs.core.first.call(null,inst_39963);
var inst_39973 = cljs.core.async.put_BANG_.call(null,inst_39972__$1,inst_39872,done);
var state_40004__$1 = (function (){var statearr_40080 = state_40004;
(statearr_40080[(23)] = inst_39972__$1);

return statearr_40080;
})();
if(cljs.core.truth_(inst_39973)){
var statearr_40081_40140 = state_40004__$1;
(statearr_40081_40140[(1)] = (39));

} else {
var statearr_40082_40141 = state_40004__$1;
(statearr_40082_40141[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40005 === (8))){
var inst_39884 = (state_40004[(16)]);
var inst_39883 = (state_40004[(17)]);
var inst_39886 = (inst_39884 < inst_39883);
var inst_39887 = inst_39886;
var state_40004__$1 = state_40004;
if(cljs.core.truth_(inst_39887)){
var statearr_40083_40142 = state_40004__$1;
(statearr_40083_40142[(1)] = (10));

} else {
var statearr_40084_40143 = state_40004__$1;
(statearr_40084_40143[(1)] = (11));

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
});})(c__30623__auto___40089,cs,m,dchan,dctr,done))
;
return ((function (switch__30535__auto__,c__30623__auto___40089,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30536__auto__ = null;
var cljs$core$async$mult_$_state_machine__30536__auto____0 = (function (){
var statearr_40085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40085[(0)] = cljs$core$async$mult_$_state_machine__30536__auto__);

(statearr_40085[(1)] = (1));

return statearr_40085;
});
var cljs$core$async$mult_$_state_machine__30536__auto____1 = (function (state_40004){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_40004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e40086){if((e40086 instanceof Object)){
var ex__30539__auto__ = e40086;
var statearr_40087_40144 = state_40004;
(statearr_40087_40144[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40145 = state_40004;
state_40004 = G__40145;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30536__auto__ = function(state_40004){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30536__auto____1.call(this,state_40004);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30536__auto____0;
cljs$core$async$mult_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30536__auto____1;
return cljs$core$async$mult_$_state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___40089,cs,m,dchan,dctr,done))
})();
var state__30625__auto__ = (function (){var statearr_40088 = f__30624__auto__.call(null);
(statearr_40088[(6)] = c__30623__auto___40089);

return statearr_40088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___40089,cs,m,dchan,dctr,done))
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
var G__40147 = arguments.length;
switch (G__40147) {
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
var len__28364__auto___40159 = arguments.length;
var i__28365__auto___40160 = (0);
while(true){
if((i__28365__auto___40160 < len__28364__auto___40159)){
args__28371__auto__.push((arguments[i__28365__auto___40160]));

var G__40161 = (i__28365__auto___40160 + (1));
i__28365__auto___40160 = G__40161;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40153){
var map__40154 = p__40153;
var map__40154__$1 = ((((!((map__40154 == null)))?((((map__40154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40154):map__40154);
var opts = map__40154__$1;
var statearr_40156_40162 = state;
(statearr_40156_40162[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__40154,map__40154__$1,opts){
return (function (val){
var statearr_40157_40163 = state;
(statearr_40157_40163[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40154,map__40154__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_40158_40164 = state;
(statearr_40158_40164[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40149){
var G__40150 = cljs.core.first.call(null,seq40149);
var seq40149__$1 = cljs.core.next.call(null,seq40149);
var G__40151 = cljs.core.first.call(null,seq40149__$1);
var seq40149__$2 = cljs.core.next.call(null,seq40149__$1);
var G__40152 = cljs.core.first.call(null,seq40149__$2);
var seq40149__$3 = cljs.core.next.call(null,seq40149__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40150,G__40151,G__40152,seq40149__$3);
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
if(typeof cljs.core.async.t_cljs$core$async40165 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40165 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40166){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40166 = meta40166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40167,meta40166__$1){
var self__ = this;
var _40167__$1 = this;
return (new cljs.core.async.t_cljs$core$async40165(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40166__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40165.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40167){
var self__ = this;
var _40167__$1 = this;
return self__.meta40166;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40165.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40165.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40165.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40165.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40165.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40165.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40165.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40165.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async40165.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40166","meta40166",2107661705,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40165.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40165";

cljs.core.async.t_cljs$core$async40165.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40165");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40165 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40165(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40166){
return (new cljs.core.async.t_cljs$core$async40165(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40166));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40165(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30623__auto___40329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___40329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___40329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40269){
var state_val_40270 = (state_40269[(1)]);
if((state_val_40270 === (7))){
var inst_40184 = (state_40269[(2)]);
var state_40269__$1 = state_40269;
var statearr_40271_40330 = state_40269__$1;
(statearr_40271_40330[(2)] = inst_40184);

(statearr_40271_40330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (20))){
var inst_40196 = (state_40269[(7)]);
var state_40269__$1 = state_40269;
var statearr_40272_40331 = state_40269__$1;
(statearr_40272_40331[(2)] = inst_40196);

(statearr_40272_40331[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (27))){
var state_40269__$1 = state_40269;
var statearr_40273_40332 = state_40269__$1;
(statearr_40273_40332[(2)] = null);

(statearr_40273_40332[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (1))){
var inst_40171 = (state_40269[(8)]);
var inst_40171__$1 = calc_state.call(null);
var inst_40173 = (inst_40171__$1 == null);
var inst_40174 = cljs.core.not.call(null,inst_40173);
var state_40269__$1 = (function (){var statearr_40274 = state_40269;
(statearr_40274[(8)] = inst_40171__$1);

return statearr_40274;
})();
if(inst_40174){
var statearr_40275_40333 = state_40269__$1;
(statearr_40275_40333[(1)] = (2));

} else {
var statearr_40276_40334 = state_40269__$1;
(statearr_40276_40334[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (24))){
var inst_40229 = (state_40269[(9)]);
var inst_40243 = (state_40269[(10)]);
var inst_40220 = (state_40269[(11)]);
var inst_40243__$1 = inst_40220.call(null,inst_40229);
var state_40269__$1 = (function (){var statearr_40277 = state_40269;
(statearr_40277[(10)] = inst_40243__$1);

return statearr_40277;
})();
if(cljs.core.truth_(inst_40243__$1)){
var statearr_40278_40335 = state_40269__$1;
(statearr_40278_40335[(1)] = (29));

} else {
var statearr_40279_40336 = state_40269__$1;
(statearr_40279_40336[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (4))){
var inst_40187 = (state_40269[(2)]);
var state_40269__$1 = state_40269;
if(cljs.core.truth_(inst_40187)){
var statearr_40280_40337 = state_40269__$1;
(statearr_40280_40337[(1)] = (8));

} else {
var statearr_40281_40338 = state_40269__$1;
(statearr_40281_40338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (15))){
var inst_40214 = (state_40269[(2)]);
var state_40269__$1 = state_40269;
if(cljs.core.truth_(inst_40214)){
var statearr_40282_40339 = state_40269__$1;
(statearr_40282_40339[(1)] = (19));

} else {
var statearr_40283_40340 = state_40269__$1;
(statearr_40283_40340[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (21))){
var inst_40219 = (state_40269[(12)]);
var inst_40219__$1 = (state_40269[(2)]);
var inst_40220 = cljs.core.get.call(null,inst_40219__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40221 = cljs.core.get.call(null,inst_40219__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40222 = cljs.core.get.call(null,inst_40219__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40269__$1 = (function (){var statearr_40284 = state_40269;
(statearr_40284[(12)] = inst_40219__$1);

(statearr_40284[(13)] = inst_40221);

(statearr_40284[(11)] = inst_40220);

return statearr_40284;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40269__$1,(22),inst_40222);
} else {
if((state_val_40270 === (31))){
var inst_40251 = (state_40269[(2)]);
var state_40269__$1 = state_40269;
if(cljs.core.truth_(inst_40251)){
var statearr_40285_40341 = state_40269__$1;
(statearr_40285_40341[(1)] = (32));

} else {
var statearr_40286_40342 = state_40269__$1;
(statearr_40286_40342[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (32))){
var inst_40228 = (state_40269[(14)]);
var state_40269__$1 = state_40269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40269__$1,(35),out,inst_40228);
} else {
if((state_val_40270 === (33))){
var inst_40219 = (state_40269[(12)]);
var inst_40196 = inst_40219;
var state_40269__$1 = (function (){var statearr_40287 = state_40269;
(statearr_40287[(7)] = inst_40196);

return statearr_40287;
})();
var statearr_40288_40343 = state_40269__$1;
(statearr_40288_40343[(2)] = null);

(statearr_40288_40343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (13))){
var inst_40196 = (state_40269[(7)]);
var inst_40203 = inst_40196.cljs$lang$protocol_mask$partition0$;
var inst_40204 = (inst_40203 & (64));
var inst_40205 = inst_40196.cljs$core$ISeq$;
var inst_40206 = (cljs.core.PROTOCOL_SENTINEL === inst_40205);
var inst_40207 = (inst_40204) || (inst_40206);
var state_40269__$1 = state_40269;
if(cljs.core.truth_(inst_40207)){
var statearr_40289_40344 = state_40269__$1;
(statearr_40289_40344[(1)] = (16));

} else {
var statearr_40290_40345 = state_40269__$1;
(statearr_40290_40345[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (22))){
var inst_40229 = (state_40269[(9)]);
var inst_40228 = (state_40269[(14)]);
var inst_40227 = (state_40269[(2)]);
var inst_40228__$1 = cljs.core.nth.call(null,inst_40227,(0),null);
var inst_40229__$1 = cljs.core.nth.call(null,inst_40227,(1),null);
var inst_40230 = (inst_40228__$1 == null);
var inst_40231 = cljs.core._EQ_.call(null,inst_40229__$1,change);
var inst_40232 = (inst_40230) || (inst_40231);
var state_40269__$1 = (function (){var statearr_40291 = state_40269;
(statearr_40291[(9)] = inst_40229__$1);

(statearr_40291[(14)] = inst_40228__$1);

return statearr_40291;
})();
if(cljs.core.truth_(inst_40232)){
var statearr_40292_40346 = state_40269__$1;
(statearr_40292_40346[(1)] = (23));

} else {
var statearr_40293_40347 = state_40269__$1;
(statearr_40293_40347[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (36))){
var inst_40219 = (state_40269[(12)]);
var inst_40196 = inst_40219;
var state_40269__$1 = (function (){var statearr_40294 = state_40269;
(statearr_40294[(7)] = inst_40196);

return statearr_40294;
})();
var statearr_40295_40348 = state_40269__$1;
(statearr_40295_40348[(2)] = null);

(statearr_40295_40348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (29))){
var inst_40243 = (state_40269[(10)]);
var state_40269__$1 = state_40269;
var statearr_40296_40349 = state_40269__$1;
(statearr_40296_40349[(2)] = inst_40243);

(statearr_40296_40349[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (6))){
var state_40269__$1 = state_40269;
var statearr_40297_40350 = state_40269__$1;
(statearr_40297_40350[(2)] = false);

(statearr_40297_40350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (28))){
var inst_40239 = (state_40269[(2)]);
var inst_40240 = calc_state.call(null);
var inst_40196 = inst_40240;
var state_40269__$1 = (function (){var statearr_40298 = state_40269;
(statearr_40298[(7)] = inst_40196);

(statearr_40298[(15)] = inst_40239);

return statearr_40298;
})();
var statearr_40299_40351 = state_40269__$1;
(statearr_40299_40351[(2)] = null);

(statearr_40299_40351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (25))){
var inst_40265 = (state_40269[(2)]);
var state_40269__$1 = state_40269;
var statearr_40300_40352 = state_40269__$1;
(statearr_40300_40352[(2)] = inst_40265);

(statearr_40300_40352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (34))){
var inst_40263 = (state_40269[(2)]);
var state_40269__$1 = state_40269;
var statearr_40301_40353 = state_40269__$1;
(statearr_40301_40353[(2)] = inst_40263);

(statearr_40301_40353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (17))){
var state_40269__$1 = state_40269;
var statearr_40302_40354 = state_40269__$1;
(statearr_40302_40354[(2)] = false);

(statearr_40302_40354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (3))){
var state_40269__$1 = state_40269;
var statearr_40303_40355 = state_40269__$1;
(statearr_40303_40355[(2)] = false);

(statearr_40303_40355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (12))){
var inst_40267 = (state_40269[(2)]);
var state_40269__$1 = state_40269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40269__$1,inst_40267);
} else {
if((state_val_40270 === (2))){
var inst_40171 = (state_40269[(8)]);
var inst_40176 = inst_40171.cljs$lang$protocol_mask$partition0$;
var inst_40177 = (inst_40176 & (64));
var inst_40178 = inst_40171.cljs$core$ISeq$;
var inst_40179 = (cljs.core.PROTOCOL_SENTINEL === inst_40178);
var inst_40180 = (inst_40177) || (inst_40179);
var state_40269__$1 = state_40269;
if(cljs.core.truth_(inst_40180)){
var statearr_40304_40356 = state_40269__$1;
(statearr_40304_40356[(1)] = (5));

} else {
var statearr_40305_40357 = state_40269__$1;
(statearr_40305_40357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (23))){
var inst_40228 = (state_40269[(14)]);
var inst_40234 = (inst_40228 == null);
var state_40269__$1 = state_40269;
if(cljs.core.truth_(inst_40234)){
var statearr_40306_40358 = state_40269__$1;
(statearr_40306_40358[(1)] = (26));

} else {
var statearr_40307_40359 = state_40269__$1;
(statearr_40307_40359[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (35))){
var inst_40254 = (state_40269[(2)]);
var state_40269__$1 = state_40269;
if(cljs.core.truth_(inst_40254)){
var statearr_40308_40360 = state_40269__$1;
(statearr_40308_40360[(1)] = (36));

} else {
var statearr_40309_40361 = state_40269__$1;
(statearr_40309_40361[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (19))){
var inst_40196 = (state_40269[(7)]);
var inst_40216 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40196);
var state_40269__$1 = state_40269;
var statearr_40310_40362 = state_40269__$1;
(statearr_40310_40362[(2)] = inst_40216);

(statearr_40310_40362[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (11))){
var inst_40196 = (state_40269[(7)]);
var inst_40200 = (inst_40196 == null);
var inst_40201 = cljs.core.not.call(null,inst_40200);
var state_40269__$1 = state_40269;
if(inst_40201){
var statearr_40311_40363 = state_40269__$1;
(statearr_40311_40363[(1)] = (13));

} else {
var statearr_40312_40364 = state_40269__$1;
(statearr_40312_40364[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (9))){
var inst_40171 = (state_40269[(8)]);
var state_40269__$1 = state_40269;
var statearr_40313_40365 = state_40269__$1;
(statearr_40313_40365[(2)] = inst_40171);

(statearr_40313_40365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (5))){
var state_40269__$1 = state_40269;
var statearr_40314_40366 = state_40269__$1;
(statearr_40314_40366[(2)] = true);

(statearr_40314_40366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (14))){
var state_40269__$1 = state_40269;
var statearr_40315_40367 = state_40269__$1;
(statearr_40315_40367[(2)] = false);

(statearr_40315_40367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (26))){
var inst_40229 = (state_40269[(9)]);
var inst_40236 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40229);
var state_40269__$1 = state_40269;
var statearr_40316_40368 = state_40269__$1;
(statearr_40316_40368[(2)] = inst_40236);

(statearr_40316_40368[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (16))){
var state_40269__$1 = state_40269;
var statearr_40317_40369 = state_40269__$1;
(statearr_40317_40369[(2)] = true);

(statearr_40317_40369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (38))){
var inst_40259 = (state_40269[(2)]);
var state_40269__$1 = state_40269;
var statearr_40318_40370 = state_40269__$1;
(statearr_40318_40370[(2)] = inst_40259);

(statearr_40318_40370[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (30))){
var inst_40229 = (state_40269[(9)]);
var inst_40221 = (state_40269[(13)]);
var inst_40220 = (state_40269[(11)]);
var inst_40246 = cljs.core.empty_QMARK_.call(null,inst_40220);
var inst_40247 = inst_40221.call(null,inst_40229);
var inst_40248 = cljs.core.not.call(null,inst_40247);
var inst_40249 = (inst_40246) && (inst_40248);
var state_40269__$1 = state_40269;
var statearr_40319_40371 = state_40269__$1;
(statearr_40319_40371[(2)] = inst_40249);

(statearr_40319_40371[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (10))){
var inst_40171 = (state_40269[(8)]);
var inst_40192 = (state_40269[(2)]);
var inst_40193 = cljs.core.get.call(null,inst_40192,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40194 = cljs.core.get.call(null,inst_40192,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40195 = cljs.core.get.call(null,inst_40192,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40196 = inst_40171;
var state_40269__$1 = (function (){var statearr_40320 = state_40269;
(statearr_40320[(7)] = inst_40196);

(statearr_40320[(16)] = inst_40195);

(statearr_40320[(17)] = inst_40193);

(statearr_40320[(18)] = inst_40194);

return statearr_40320;
})();
var statearr_40321_40372 = state_40269__$1;
(statearr_40321_40372[(2)] = null);

(statearr_40321_40372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (18))){
var inst_40211 = (state_40269[(2)]);
var state_40269__$1 = state_40269;
var statearr_40322_40373 = state_40269__$1;
(statearr_40322_40373[(2)] = inst_40211);

(statearr_40322_40373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (37))){
var state_40269__$1 = state_40269;
var statearr_40323_40374 = state_40269__$1;
(statearr_40323_40374[(2)] = null);

(statearr_40323_40374[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40270 === (8))){
var inst_40171 = (state_40269[(8)]);
var inst_40189 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40171);
var state_40269__$1 = state_40269;
var statearr_40324_40375 = state_40269__$1;
(statearr_40324_40375[(2)] = inst_40189);

(statearr_40324_40375[(1)] = (10));


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
});})(c__30623__auto___40329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30535__auto__,c__30623__auto___40329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30536__auto__ = null;
var cljs$core$async$mix_$_state_machine__30536__auto____0 = (function (){
var statearr_40325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40325[(0)] = cljs$core$async$mix_$_state_machine__30536__auto__);

(statearr_40325[(1)] = (1));

return statearr_40325;
});
var cljs$core$async$mix_$_state_machine__30536__auto____1 = (function (state_40269){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_40269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e40326){if((e40326 instanceof Object)){
var ex__30539__auto__ = e40326;
var statearr_40327_40376 = state_40269;
(statearr_40327_40376[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40377 = state_40269;
state_40269 = G__40377;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30536__auto__ = function(state_40269){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30536__auto____1.call(this,state_40269);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30536__auto____0;
cljs$core$async$mix_$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30536__auto____1;
return cljs$core$async$mix_$_state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___40329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30625__auto__ = (function (){var statearr_40328 = f__30624__auto__.call(null);
(statearr_40328[(6)] = c__30623__auto___40329);

return statearr_40328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___40329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__40379 = arguments.length;
switch (G__40379) {
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
var G__40383 = arguments.length;
switch (G__40383) {
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
return (function (p1__40381_SHARP_){
if(cljs.core.truth_(p1__40381_SHARP_.call(null,topic))){
return p1__40381_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40381_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40384 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40385){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40385 = meta40385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40386,meta40385__$1){
var self__ = this;
var _40386__$1 = this;
return (new cljs.core.async.t_cljs$core$async40384(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40385__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40384.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40386){
var self__ = this;
var _40386__$1 = this;
return self__.meta40385;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40384.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40384.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40384.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40384.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40384.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async40384.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40384.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40384.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40385","meta40385",-1400946523,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40384";

cljs.core.async.t_cljs$core$async40384.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40384");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40384 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40384(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40385){
return (new cljs.core.async.t_cljs$core$async40384(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40385));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40384(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30623__auto___40504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___40504,mults,ensure_mult,p){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___40504,mults,ensure_mult,p){
return (function (state_40458){
var state_val_40459 = (state_40458[(1)]);
if((state_val_40459 === (7))){
var inst_40454 = (state_40458[(2)]);
var state_40458__$1 = state_40458;
var statearr_40460_40505 = state_40458__$1;
(statearr_40460_40505[(2)] = inst_40454);

(statearr_40460_40505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (20))){
var state_40458__$1 = state_40458;
var statearr_40461_40506 = state_40458__$1;
(statearr_40461_40506[(2)] = null);

(statearr_40461_40506[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (1))){
var state_40458__$1 = state_40458;
var statearr_40462_40507 = state_40458__$1;
(statearr_40462_40507[(2)] = null);

(statearr_40462_40507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (24))){
var inst_40437 = (state_40458[(7)]);
var inst_40446 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40437);
var state_40458__$1 = state_40458;
var statearr_40463_40508 = state_40458__$1;
(statearr_40463_40508[(2)] = inst_40446);

(statearr_40463_40508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (4))){
var inst_40389 = (state_40458[(8)]);
var inst_40389__$1 = (state_40458[(2)]);
var inst_40390 = (inst_40389__$1 == null);
var state_40458__$1 = (function (){var statearr_40464 = state_40458;
(statearr_40464[(8)] = inst_40389__$1);

return statearr_40464;
})();
if(cljs.core.truth_(inst_40390)){
var statearr_40465_40509 = state_40458__$1;
(statearr_40465_40509[(1)] = (5));

} else {
var statearr_40466_40510 = state_40458__$1;
(statearr_40466_40510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (15))){
var inst_40431 = (state_40458[(2)]);
var state_40458__$1 = state_40458;
var statearr_40467_40511 = state_40458__$1;
(statearr_40467_40511[(2)] = inst_40431);

(statearr_40467_40511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (21))){
var inst_40451 = (state_40458[(2)]);
var state_40458__$1 = (function (){var statearr_40468 = state_40458;
(statearr_40468[(9)] = inst_40451);

return statearr_40468;
})();
var statearr_40469_40512 = state_40458__$1;
(statearr_40469_40512[(2)] = null);

(statearr_40469_40512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (13))){
var inst_40413 = (state_40458[(10)]);
var inst_40415 = cljs.core.chunked_seq_QMARK_.call(null,inst_40413);
var state_40458__$1 = state_40458;
if(inst_40415){
var statearr_40470_40513 = state_40458__$1;
(statearr_40470_40513[(1)] = (16));

} else {
var statearr_40471_40514 = state_40458__$1;
(statearr_40471_40514[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (22))){
var inst_40443 = (state_40458[(2)]);
var state_40458__$1 = state_40458;
if(cljs.core.truth_(inst_40443)){
var statearr_40472_40515 = state_40458__$1;
(statearr_40472_40515[(1)] = (23));

} else {
var statearr_40473_40516 = state_40458__$1;
(statearr_40473_40516[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (6))){
var inst_40439 = (state_40458[(11)]);
var inst_40389 = (state_40458[(8)]);
var inst_40437 = (state_40458[(7)]);
var inst_40437__$1 = topic_fn.call(null,inst_40389);
var inst_40438 = cljs.core.deref.call(null,mults);
var inst_40439__$1 = cljs.core.get.call(null,inst_40438,inst_40437__$1);
var state_40458__$1 = (function (){var statearr_40474 = state_40458;
(statearr_40474[(11)] = inst_40439__$1);

(statearr_40474[(7)] = inst_40437__$1);

return statearr_40474;
})();
if(cljs.core.truth_(inst_40439__$1)){
var statearr_40475_40517 = state_40458__$1;
(statearr_40475_40517[(1)] = (19));

} else {
var statearr_40476_40518 = state_40458__$1;
(statearr_40476_40518[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (25))){
var inst_40448 = (state_40458[(2)]);
var state_40458__$1 = state_40458;
var statearr_40477_40519 = state_40458__$1;
(statearr_40477_40519[(2)] = inst_40448);

(statearr_40477_40519[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (17))){
var inst_40413 = (state_40458[(10)]);
var inst_40422 = cljs.core.first.call(null,inst_40413);
var inst_40423 = cljs.core.async.muxch_STAR_.call(null,inst_40422);
var inst_40424 = cljs.core.async.close_BANG_.call(null,inst_40423);
var inst_40425 = cljs.core.next.call(null,inst_40413);
var inst_40399 = inst_40425;
var inst_40400 = null;
var inst_40401 = (0);
var inst_40402 = (0);
var state_40458__$1 = (function (){var statearr_40478 = state_40458;
(statearr_40478[(12)] = inst_40424);

(statearr_40478[(13)] = inst_40399);

(statearr_40478[(14)] = inst_40402);

(statearr_40478[(15)] = inst_40401);

(statearr_40478[(16)] = inst_40400);

return statearr_40478;
})();
var statearr_40479_40520 = state_40458__$1;
(statearr_40479_40520[(2)] = null);

(statearr_40479_40520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (3))){
var inst_40456 = (state_40458[(2)]);
var state_40458__$1 = state_40458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40458__$1,inst_40456);
} else {
if((state_val_40459 === (12))){
var inst_40433 = (state_40458[(2)]);
var state_40458__$1 = state_40458;
var statearr_40480_40521 = state_40458__$1;
(statearr_40480_40521[(2)] = inst_40433);

(statearr_40480_40521[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (2))){
var state_40458__$1 = state_40458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40458__$1,(4),ch);
} else {
if((state_val_40459 === (23))){
var state_40458__$1 = state_40458;
var statearr_40481_40522 = state_40458__$1;
(statearr_40481_40522[(2)] = null);

(statearr_40481_40522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (19))){
var inst_40439 = (state_40458[(11)]);
var inst_40389 = (state_40458[(8)]);
var inst_40441 = cljs.core.async.muxch_STAR_.call(null,inst_40439);
var state_40458__$1 = state_40458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40458__$1,(22),inst_40441,inst_40389);
} else {
if((state_val_40459 === (11))){
var inst_40399 = (state_40458[(13)]);
var inst_40413 = (state_40458[(10)]);
var inst_40413__$1 = cljs.core.seq.call(null,inst_40399);
var state_40458__$1 = (function (){var statearr_40482 = state_40458;
(statearr_40482[(10)] = inst_40413__$1);

return statearr_40482;
})();
if(inst_40413__$1){
var statearr_40483_40523 = state_40458__$1;
(statearr_40483_40523[(1)] = (13));

} else {
var statearr_40484_40524 = state_40458__$1;
(statearr_40484_40524[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (9))){
var inst_40435 = (state_40458[(2)]);
var state_40458__$1 = state_40458;
var statearr_40485_40525 = state_40458__$1;
(statearr_40485_40525[(2)] = inst_40435);

(statearr_40485_40525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (5))){
var inst_40396 = cljs.core.deref.call(null,mults);
var inst_40397 = cljs.core.vals.call(null,inst_40396);
var inst_40398 = cljs.core.seq.call(null,inst_40397);
var inst_40399 = inst_40398;
var inst_40400 = null;
var inst_40401 = (0);
var inst_40402 = (0);
var state_40458__$1 = (function (){var statearr_40486 = state_40458;
(statearr_40486[(13)] = inst_40399);

(statearr_40486[(14)] = inst_40402);

(statearr_40486[(15)] = inst_40401);

(statearr_40486[(16)] = inst_40400);

return statearr_40486;
})();
var statearr_40487_40526 = state_40458__$1;
(statearr_40487_40526[(2)] = null);

(statearr_40487_40526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (14))){
var state_40458__$1 = state_40458;
var statearr_40491_40527 = state_40458__$1;
(statearr_40491_40527[(2)] = null);

(statearr_40491_40527[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (16))){
var inst_40413 = (state_40458[(10)]);
var inst_40417 = cljs.core.chunk_first.call(null,inst_40413);
var inst_40418 = cljs.core.chunk_rest.call(null,inst_40413);
var inst_40419 = cljs.core.count.call(null,inst_40417);
var inst_40399 = inst_40418;
var inst_40400 = inst_40417;
var inst_40401 = inst_40419;
var inst_40402 = (0);
var state_40458__$1 = (function (){var statearr_40492 = state_40458;
(statearr_40492[(13)] = inst_40399);

(statearr_40492[(14)] = inst_40402);

(statearr_40492[(15)] = inst_40401);

(statearr_40492[(16)] = inst_40400);

return statearr_40492;
})();
var statearr_40493_40528 = state_40458__$1;
(statearr_40493_40528[(2)] = null);

(statearr_40493_40528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (10))){
var inst_40399 = (state_40458[(13)]);
var inst_40402 = (state_40458[(14)]);
var inst_40401 = (state_40458[(15)]);
var inst_40400 = (state_40458[(16)]);
var inst_40407 = cljs.core._nth.call(null,inst_40400,inst_40402);
var inst_40408 = cljs.core.async.muxch_STAR_.call(null,inst_40407);
var inst_40409 = cljs.core.async.close_BANG_.call(null,inst_40408);
var inst_40410 = (inst_40402 + (1));
var tmp40488 = inst_40399;
var tmp40489 = inst_40401;
var tmp40490 = inst_40400;
var inst_40399__$1 = tmp40488;
var inst_40400__$1 = tmp40490;
var inst_40401__$1 = tmp40489;
var inst_40402__$1 = inst_40410;
var state_40458__$1 = (function (){var statearr_40494 = state_40458;
(statearr_40494[(13)] = inst_40399__$1);

(statearr_40494[(14)] = inst_40402__$1);

(statearr_40494[(17)] = inst_40409);

(statearr_40494[(15)] = inst_40401__$1);

(statearr_40494[(16)] = inst_40400__$1);

return statearr_40494;
})();
var statearr_40495_40529 = state_40458__$1;
(statearr_40495_40529[(2)] = null);

(statearr_40495_40529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (18))){
var inst_40428 = (state_40458[(2)]);
var state_40458__$1 = state_40458;
var statearr_40496_40530 = state_40458__$1;
(statearr_40496_40530[(2)] = inst_40428);

(statearr_40496_40530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40459 === (8))){
var inst_40402 = (state_40458[(14)]);
var inst_40401 = (state_40458[(15)]);
var inst_40404 = (inst_40402 < inst_40401);
var inst_40405 = inst_40404;
var state_40458__$1 = state_40458;
if(cljs.core.truth_(inst_40405)){
var statearr_40497_40531 = state_40458__$1;
(statearr_40497_40531[(1)] = (10));

} else {
var statearr_40498_40532 = state_40458__$1;
(statearr_40498_40532[(1)] = (11));

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
});})(c__30623__auto___40504,mults,ensure_mult,p))
;
return ((function (switch__30535__auto__,c__30623__auto___40504,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30536__auto__ = null;
var cljs$core$async$state_machine__30536__auto____0 = (function (){
var statearr_40499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40499[(0)] = cljs$core$async$state_machine__30536__auto__);

(statearr_40499[(1)] = (1));

return statearr_40499;
});
var cljs$core$async$state_machine__30536__auto____1 = (function (state_40458){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_40458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e40500){if((e40500 instanceof Object)){
var ex__30539__auto__ = e40500;
var statearr_40501_40533 = state_40458;
(statearr_40501_40533[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40534 = state_40458;
state_40458 = G__40534;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$state_machine__30536__auto__ = function(state_40458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30536__auto____1.call(this,state_40458);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30536__auto____0;
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30536__auto____1;
return cljs$core$async$state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___40504,mults,ensure_mult,p))
})();
var state__30625__auto__ = (function (){var statearr_40502 = f__30624__auto__.call(null);
(statearr_40502[(6)] = c__30623__auto___40504);

return statearr_40502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___40504,mults,ensure_mult,p))
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
var G__40536 = arguments.length;
switch (G__40536) {
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
var G__40539 = arguments.length;
switch (G__40539) {
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
var G__40542 = arguments.length;
switch (G__40542) {
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
var c__30623__auto___40609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___40609,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___40609,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40581){
var state_val_40582 = (state_40581[(1)]);
if((state_val_40582 === (7))){
var state_40581__$1 = state_40581;
var statearr_40583_40610 = state_40581__$1;
(statearr_40583_40610[(2)] = null);

(statearr_40583_40610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40582 === (1))){
var state_40581__$1 = state_40581;
var statearr_40584_40611 = state_40581__$1;
(statearr_40584_40611[(2)] = null);

(statearr_40584_40611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40582 === (4))){
var inst_40545 = (state_40581[(7)]);
var inst_40547 = (inst_40545 < cnt);
var state_40581__$1 = state_40581;
if(cljs.core.truth_(inst_40547)){
var statearr_40585_40612 = state_40581__$1;
(statearr_40585_40612[(1)] = (6));

} else {
var statearr_40586_40613 = state_40581__$1;
(statearr_40586_40613[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40582 === (15))){
var inst_40577 = (state_40581[(2)]);
var state_40581__$1 = state_40581;
var statearr_40587_40614 = state_40581__$1;
(statearr_40587_40614[(2)] = inst_40577);

(statearr_40587_40614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40582 === (13))){
var inst_40570 = cljs.core.async.close_BANG_.call(null,out);
var state_40581__$1 = state_40581;
var statearr_40588_40615 = state_40581__$1;
(statearr_40588_40615[(2)] = inst_40570);

(statearr_40588_40615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40582 === (6))){
var state_40581__$1 = state_40581;
var statearr_40589_40616 = state_40581__$1;
(statearr_40589_40616[(2)] = null);

(statearr_40589_40616[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40582 === (3))){
var inst_40579 = (state_40581[(2)]);
var state_40581__$1 = state_40581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40581__$1,inst_40579);
} else {
if((state_val_40582 === (12))){
var inst_40567 = (state_40581[(8)]);
var inst_40567__$1 = (state_40581[(2)]);
var inst_40568 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40567__$1);
var state_40581__$1 = (function (){var statearr_40590 = state_40581;
(statearr_40590[(8)] = inst_40567__$1);

return statearr_40590;
})();
if(cljs.core.truth_(inst_40568)){
var statearr_40591_40617 = state_40581__$1;
(statearr_40591_40617[(1)] = (13));

} else {
var statearr_40592_40618 = state_40581__$1;
(statearr_40592_40618[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40582 === (2))){
var inst_40544 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40545 = (0);
var state_40581__$1 = (function (){var statearr_40593 = state_40581;
(statearr_40593[(9)] = inst_40544);

(statearr_40593[(7)] = inst_40545);

return statearr_40593;
})();
var statearr_40594_40619 = state_40581__$1;
(statearr_40594_40619[(2)] = null);

(statearr_40594_40619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40582 === (11))){
var inst_40545 = (state_40581[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40581,(10),Object,null,(9));
var inst_40554 = chs__$1.call(null,inst_40545);
var inst_40555 = done.call(null,inst_40545);
var inst_40556 = cljs.core.async.take_BANG_.call(null,inst_40554,inst_40555);
var state_40581__$1 = state_40581;
var statearr_40595_40620 = state_40581__$1;
(statearr_40595_40620[(2)] = inst_40556);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40581__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40582 === (9))){
var inst_40545 = (state_40581[(7)]);
var inst_40558 = (state_40581[(2)]);
var inst_40559 = (inst_40545 + (1));
var inst_40545__$1 = inst_40559;
var state_40581__$1 = (function (){var statearr_40596 = state_40581;
(statearr_40596[(10)] = inst_40558);

(statearr_40596[(7)] = inst_40545__$1);

return statearr_40596;
})();
var statearr_40597_40621 = state_40581__$1;
(statearr_40597_40621[(2)] = null);

(statearr_40597_40621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40582 === (5))){
var inst_40565 = (state_40581[(2)]);
var state_40581__$1 = (function (){var statearr_40598 = state_40581;
(statearr_40598[(11)] = inst_40565);

return statearr_40598;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40581__$1,(12),dchan);
} else {
if((state_val_40582 === (14))){
var inst_40567 = (state_40581[(8)]);
var inst_40572 = cljs.core.apply.call(null,f,inst_40567);
var state_40581__$1 = state_40581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40581__$1,(16),out,inst_40572);
} else {
if((state_val_40582 === (16))){
var inst_40574 = (state_40581[(2)]);
var state_40581__$1 = (function (){var statearr_40599 = state_40581;
(statearr_40599[(12)] = inst_40574);

return statearr_40599;
})();
var statearr_40600_40622 = state_40581__$1;
(statearr_40600_40622[(2)] = null);

(statearr_40600_40622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40582 === (10))){
var inst_40549 = (state_40581[(2)]);
var inst_40550 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40581__$1 = (function (){var statearr_40601 = state_40581;
(statearr_40601[(13)] = inst_40549);

return statearr_40601;
})();
var statearr_40602_40623 = state_40581__$1;
(statearr_40602_40623[(2)] = inst_40550);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40581__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40582 === (8))){
var inst_40563 = (state_40581[(2)]);
var state_40581__$1 = state_40581;
var statearr_40603_40624 = state_40581__$1;
(statearr_40603_40624[(2)] = inst_40563);

(statearr_40603_40624[(1)] = (5));


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
});})(c__30623__auto___40609,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30535__auto__,c__30623__auto___40609,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30536__auto__ = null;
var cljs$core$async$state_machine__30536__auto____0 = (function (){
var statearr_40604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40604[(0)] = cljs$core$async$state_machine__30536__auto__);

(statearr_40604[(1)] = (1));

return statearr_40604;
});
var cljs$core$async$state_machine__30536__auto____1 = (function (state_40581){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_40581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e40605){if((e40605 instanceof Object)){
var ex__30539__auto__ = e40605;
var statearr_40606_40625 = state_40581;
(statearr_40606_40625[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40626 = state_40581;
state_40581 = G__40626;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$state_machine__30536__auto__ = function(state_40581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30536__auto____1.call(this,state_40581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30536__auto____0;
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30536__auto____1;
return cljs$core$async$state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___40609,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30625__auto__ = (function (){var statearr_40607 = f__30624__auto__.call(null);
(statearr_40607[(6)] = c__30623__auto___40609);

return statearr_40607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___40609,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__40629 = arguments.length;
switch (G__40629) {
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
var c__30623__auto___40683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___40683,out){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___40683,out){
return (function (state_40661){
var state_val_40662 = (state_40661[(1)]);
if((state_val_40662 === (7))){
var inst_40640 = (state_40661[(7)]);
var inst_40641 = (state_40661[(8)]);
var inst_40640__$1 = (state_40661[(2)]);
var inst_40641__$1 = cljs.core.nth.call(null,inst_40640__$1,(0),null);
var inst_40642 = cljs.core.nth.call(null,inst_40640__$1,(1),null);
var inst_40643 = (inst_40641__$1 == null);
var state_40661__$1 = (function (){var statearr_40663 = state_40661;
(statearr_40663[(7)] = inst_40640__$1);

(statearr_40663[(9)] = inst_40642);

(statearr_40663[(8)] = inst_40641__$1);

return statearr_40663;
})();
if(cljs.core.truth_(inst_40643)){
var statearr_40664_40684 = state_40661__$1;
(statearr_40664_40684[(1)] = (8));

} else {
var statearr_40665_40685 = state_40661__$1;
(statearr_40665_40685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40662 === (1))){
var inst_40630 = cljs.core.vec.call(null,chs);
var inst_40631 = inst_40630;
var state_40661__$1 = (function (){var statearr_40666 = state_40661;
(statearr_40666[(10)] = inst_40631);

return statearr_40666;
})();
var statearr_40667_40686 = state_40661__$1;
(statearr_40667_40686[(2)] = null);

(statearr_40667_40686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40662 === (4))){
var inst_40631 = (state_40661[(10)]);
var state_40661__$1 = state_40661;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40661__$1,(7),inst_40631);
} else {
if((state_val_40662 === (6))){
var inst_40657 = (state_40661[(2)]);
var state_40661__$1 = state_40661;
var statearr_40668_40687 = state_40661__$1;
(statearr_40668_40687[(2)] = inst_40657);

(statearr_40668_40687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40662 === (3))){
var inst_40659 = (state_40661[(2)]);
var state_40661__$1 = state_40661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40661__$1,inst_40659);
} else {
if((state_val_40662 === (2))){
var inst_40631 = (state_40661[(10)]);
var inst_40633 = cljs.core.count.call(null,inst_40631);
var inst_40634 = (inst_40633 > (0));
var state_40661__$1 = state_40661;
if(cljs.core.truth_(inst_40634)){
var statearr_40670_40688 = state_40661__$1;
(statearr_40670_40688[(1)] = (4));

} else {
var statearr_40671_40689 = state_40661__$1;
(statearr_40671_40689[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40662 === (11))){
var inst_40631 = (state_40661[(10)]);
var inst_40650 = (state_40661[(2)]);
var tmp40669 = inst_40631;
var inst_40631__$1 = tmp40669;
var state_40661__$1 = (function (){var statearr_40672 = state_40661;
(statearr_40672[(10)] = inst_40631__$1);

(statearr_40672[(11)] = inst_40650);

return statearr_40672;
})();
var statearr_40673_40690 = state_40661__$1;
(statearr_40673_40690[(2)] = null);

(statearr_40673_40690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40662 === (9))){
var inst_40641 = (state_40661[(8)]);
var state_40661__$1 = state_40661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40661__$1,(11),out,inst_40641);
} else {
if((state_val_40662 === (5))){
var inst_40655 = cljs.core.async.close_BANG_.call(null,out);
var state_40661__$1 = state_40661;
var statearr_40674_40691 = state_40661__$1;
(statearr_40674_40691[(2)] = inst_40655);

(statearr_40674_40691[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40662 === (10))){
var inst_40653 = (state_40661[(2)]);
var state_40661__$1 = state_40661;
var statearr_40675_40692 = state_40661__$1;
(statearr_40675_40692[(2)] = inst_40653);

(statearr_40675_40692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40662 === (8))){
var inst_40640 = (state_40661[(7)]);
var inst_40631 = (state_40661[(10)]);
var inst_40642 = (state_40661[(9)]);
var inst_40641 = (state_40661[(8)]);
var inst_40645 = (function (){var cs = inst_40631;
var vec__40636 = inst_40640;
var v = inst_40641;
var c = inst_40642;
return ((function (cs,vec__40636,v,c,inst_40640,inst_40631,inst_40642,inst_40641,state_val_40662,c__30623__auto___40683,out){
return (function (p1__40627_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40627_SHARP_);
});
;})(cs,vec__40636,v,c,inst_40640,inst_40631,inst_40642,inst_40641,state_val_40662,c__30623__auto___40683,out))
})();
var inst_40646 = cljs.core.filterv.call(null,inst_40645,inst_40631);
var inst_40631__$1 = inst_40646;
var state_40661__$1 = (function (){var statearr_40676 = state_40661;
(statearr_40676[(10)] = inst_40631__$1);

return statearr_40676;
})();
var statearr_40677_40693 = state_40661__$1;
(statearr_40677_40693[(2)] = null);

(statearr_40677_40693[(1)] = (2));


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
});})(c__30623__auto___40683,out))
;
return ((function (switch__30535__auto__,c__30623__auto___40683,out){
return (function() {
var cljs$core$async$state_machine__30536__auto__ = null;
var cljs$core$async$state_machine__30536__auto____0 = (function (){
var statearr_40678 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40678[(0)] = cljs$core$async$state_machine__30536__auto__);

(statearr_40678[(1)] = (1));

return statearr_40678;
});
var cljs$core$async$state_machine__30536__auto____1 = (function (state_40661){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_40661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e40679){if((e40679 instanceof Object)){
var ex__30539__auto__ = e40679;
var statearr_40680_40694 = state_40661;
(statearr_40680_40694[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40695 = state_40661;
state_40661 = G__40695;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$state_machine__30536__auto__ = function(state_40661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30536__auto____1.call(this,state_40661);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30536__auto____0;
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30536__auto____1;
return cljs$core$async$state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___40683,out))
})();
var state__30625__auto__ = (function (){var statearr_40681 = f__30624__auto__.call(null);
(statearr_40681[(6)] = c__30623__auto___40683);

return statearr_40681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___40683,out))
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
var G__40697 = arguments.length;
switch (G__40697) {
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
var c__30623__auto___40742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___40742,out){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___40742,out){
return (function (state_40721){
var state_val_40722 = (state_40721[(1)]);
if((state_val_40722 === (7))){
var inst_40703 = (state_40721[(7)]);
var inst_40703__$1 = (state_40721[(2)]);
var inst_40704 = (inst_40703__$1 == null);
var inst_40705 = cljs.core.not.call(null,inst_40704);
var state_40721__$1 = (function (){var statearr_40723 = state_40721;
(statearr_40723[(7)] = inst_40703__$1);

return statearr_40723;
})();
if(inst_40705){
var statearr_40724_40743 = state_40721__$1;
(statearr_40724_40743[(1)] = (8));

} else {
var statearr_40725_40744 = state_40721__$1;
(statearr_40725_40744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40722 === (1))){
var inst_40698 = (0);
var state_40721__$1 = (function (){var statearr_40726 = state_40721;
(statearr_40726[(8)] = inst_40698);

return statearr_40726;
})();
var statearr_40727_40745 = state_40721__$1;
(statearr_40727_40745[(2)] = null);

(statearr_40727_40745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40722 === (4))){
var state_40721__$1 = state_40721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40721__$1,(7),ch);
} else {
if((state_val_40722 === (6))){
var inst_40716 = (state_40721[(2)]);
var state_40721__$1 = state_40721;
var statearr_40728_40746 = state_40721__$1;
(statearr_40728_40746[(2)] = inst_40716);

(statearr_40728_40746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40722 === (3))){
var inst_40718 = (state_40721[(2)]);
var inst_40719 = cljs.core.async.close_BANG_.call(null,out);
var state_40721__$1 = (function (){var statearr_40729 = state_40721;
(statearr_40729[(9)] = inst_40718);

return statearr_40729;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40721__$1,inst_40719);
} else {
if((state_val_40722 === (2))){
var inst_40698 = (state_40721[(8)]);
var inst_40700 = (inst_40698 < n);
var state_40721__$1 = state_40721;
if(cljs.core.truth_(inst_40700)){
var statearr_40730_40747 = state_40721__$1;
(statearr_40730_40747[(1)] = (4));

} else {
var statearr_40731_40748 = state_40721__$1;
(statearr_40731_40748[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40722 === (11))){
var inst_40698 = (state_40721[(8)]);
var inst_40708 = (state_40721[(2)]);
var inst_40709 = (inst_40698 + (1));
var inst_40698__$1 = inst_40709;
var state_40721__$1 = (function (){var statearr_40732 = state_40721;
(statearr_40732[(10)] = inst_40708);

(statearr_40732[(8)] = inst_40698__$1);

return statearr_40732;
})();
var statearr_40733_40749 = state_40721__$1;
(statearr_40733_40749[(2)] = null);

(statearr_40733_40749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40722 === (9))){
var state_40721__$1 = state_40721;
var statearr_40734_40750 = state_40721__$1;
(statearr_40734_40750[(2)] = null);

(statearr_40734_40750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40722 === (5))){
var state_40721__$1 = state_40721;
var statearr_40735_40751 = state_40721__$1;
(statearr_40735_40751[(2)] = null);

(statearr_40735_40751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40722 === (10))){
var inst_40713 = (state_40721[(2)]);
var state_40721__$1 = state_40721;
var statearr_40736_40752 = state_40721__$1;
(statearr_40736_40752[(2)] = inst_40713);

(statearr_40736_40752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40722 === (8))){
var inst_40703 = (state_40721[(7)]);
var state_40721__$1 = state_40721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40721__$1,(11),out,inst_40703);
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
});})(c__30623__auto___40742,out))
;
return ((function (switch__30535__auto__,c__30623__auto___40742,out){
return (function() {
var cljs$core$async$state_machine__30536__auto__ = null;
var cljs$core$async$state_machine__30536__auto____0 = (function (){
var statearr_40737 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40737[(0)] = cljs$core$async$state_machine__30536__auto__);

(statearr_40737[(1)] = (1));

return statearr_40737;
});
var cljs$core$async$state_machine__30536__auto____1 = (function (state_40721){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_40721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e40738){if((e40738 instanceof Object)){
var ex__30539__auto__ = e40738;
var statearr_40739_40753 = state_40721;
(statearr_40739_40753[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40754 = state_40721;
state_40721 = G__40754;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$state_machine__30536__auto__ = function(state_40721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30536__auto____1.call(this,state_40721);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30536__auto____0;
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30536__auto____1;
return cljs$core$async$state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___40742,out))
})();
var state__30625__auto__ = (function (){var statearr_40740 = f__30624__auto__.call(null);
(statearr_40740[(6)] = c__30623__auto___40742);

return statearr_40740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___40742,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40756 = (function (f,ch,meta40757){
this.f = f;
this.ch = ch;
this.meta40757 = meta40757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40758,meta40757__$1){
var self__ = this;
var _40758__$1 = this;
return (new cljs.core.async.t_cljs$core$async40756(self__.f,self__.ch,meta40757__$1));
});

cljs.core.async.t_cljs$core$async40756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40758){
var self__ = this;
var _40758__$1 = this;
return self__.meta40757;
});

cljs.core.async.t_cljs$core$async40756.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40756.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40756.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40759 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40759 = (function (f,ch,meta40757,_,fn1,meta40760){
this.f = f;
this.ch = ch;
this.meta40757 = meta40757;
this._ = _;
this.fn1 = fn1;
this.meta40760 = meta40760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40761,meta40760__$1){
var self__ = this;
var _40761__$1 = this;
return (new cljs.core.async.t_cljs$core$async40759(self__.f,self__.ch,self__.meta40757,self__._,self__.fn1,meta40760__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40761){
var self__ = this;
var _40761__$1 = this;
return self__.meta40760;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40759.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40759.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40759.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40759.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40755_SHARP_){
return f1.call(null,(((p1__40755_SHARP_ == null))?null:self__.f.call(null,p1__40755_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40759.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40757","meta40757",-1470327438,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40756","cljs.core.async/t_cljs$core$async40756",-1747472027,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40760","meta40760",-2124839617,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40759";

cljs.core.async.t_cljs$core$async40759.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40759");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40759 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40759(f__$1,ch__$1,meta40757__$1,___$2,fn1__$1,meta40760){
return (new cljs.core.async.t_cljs$core$async40759(f__$1,ch__$1,meta40757__$1,___$2,fn1__$1,meta40760));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40759(self__.f,self__.ch,self__.meta40757,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async40756.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40757","meta40757",-1470327438,null)], null);
});

cljs.core.async.t_cljs$core$async40756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40756";

cljs.core.async.t_cljs$core$async40756.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40756");
});

cljs.core.async.__GT_t_cljs$core$async40756 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40756(f__$1,ch__$1,meta40757){
return (new cljs.core.async.t_cljs$core$async40756(f__$1,ch__$1,meta40757));
});

}

return (new cljs.core.async.t_cljs$core$async40756(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
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
cljs.core.async.t_cljs$core$async40762 = (function (f,ch,meta40763){
this.f = f;
this.ch = ch;
this.meta40763 = meta40763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40764,meta40763__$1){
var self__ = this;
var _40764__$1 = this;
return (new cljs.core.async.t_cljs$core$async40762(self__.f,self__.ch,meta40763__$1));
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
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40763","meta40763",-594435057,null)], null);
});

cljs.core.async.t_cljs$core$async40762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40762";

cljs.core.async.t_cljs$core$async40762.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40762");
});

cljs.core.async.__GT_t_cljs$core$async40762 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40762(f__$1,ch__$1,meta40763){
return (new cljs.core.async.t_cljs$core$async40762(f__$1,ch__$1,meta40763));
});

}

return (new cljs.core.async.t_cljs$core$async40762(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40765 = (function (p,ch,meta40766){
this.p = p;
this.ch = ch;
this.meta40766 = meta40766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40767,meta40766__$1){
var self__ = this;
var _40767__$1 = this;
return (new cljs.core.async.t_cljs$core$async40765(self__.p,self__.ch,meta40766__$1));
});

cljs.core.async.t_cljs$core$async40765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40767){
var self__ = this;
var _40767__$1 = this;
return self__.meta40766;
});

cljs.core.async.t_cljs$core$async40765.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40765.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40765.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40765.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40765.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40765.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40765.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40766","meta40766",-1254706636,null)], null);
});

cljs.core.async.t_cljs$core$async40765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40765";

cljs.core.async.t_cljs$core$async40765.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40765");
});

cljs.core.async.__GT_t_cljs$core$async40765 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40765(p__$1,ch__$1,meta40766){
return (new cljs.core.async.t_cljs$core$async40765(p__$1,ch__$1,meta40766));
});

}

return (new cljs.core.async.t_cljs$core$async40765(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40769 = arguments.length;
switch (G__40769) {
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
var c__30623__auto___40809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___40809,out){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___40809,out){
return (function (state_40790){
var state_val_40791 = (state_40790[(1)]);
if((state_val_40791 === (7))){
var inst_40786 = (state_40790[(2)]);
var state_40790__$1 = state_40790;
var statearr_40792_40810 = state_40790__$1;
(statearr_40792_40810[(2)] = inst_40786);

(statearr_40792_40810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (1))){
var state_40790__$1 = state_40790;
var statearr_40793_40811 = state_40790__$1;
(statearr_40793_40811[(2)] = null);

(statearr_40793_40811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (4))){
var inst_40772 = (state_40790[(7)]);
var inst_40772__$1 = (state_40790[(2)]);
var inst_40773 = (inst_40772__$1 == null);
var state_40790__$1 = (function (){var statearr_40794 = state_40790;
(statearr_40794[(7)] = inst_40772__$1);

return statearr_40794;
})();
if(cljs.core.truth_(inst_40773)){
var statearr_40795_40812 = state_40790__$1;
(statearr_40795_40812[(1)] = (5));

} else {
var statearr_40796_40813 = state_40790__$1;
(statearr_40796_40813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (6))){
var inst_40772 = (state_40790[(7)]);
var inst_40777 = p.call(null,inst_40772);
var state_40790__$1 = state_40790;
if(cljs.core.truth_(inst_40777)){
var statearr_40797_40814 = state_40790__$1;
(statearr_40797_40814[(1)] = (8));

} else {
var statearr_40798_40815 = state_40790__$1;
(statearr_40798_40815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (3))){
var inst_40788 = (state_40790[(2)]);
var state_40790__$1 = state_40790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40790__$1,inst_40788);
} else {
if((state_val_40791 === (2))){
var state_40790__$1 = state_40790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40790__$1,(4),ch);
} else {
if((state_val_40791 === (11))){
var inst_40780 = (state_40790[(2)]);
var state_40790__$1 = state_40790;
var statearr_40799_40816 = state_40790__$1;
(statearr_40799_40816[(2)] = inst_40780);

(statearr_40799_40816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (9))){
var state_40790__$1 = state_40790;
var statearr_40800_40817 = state_40790__$1;
(statearr_40800_40817[(2)] = null);

(statearr_40800_40817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (5))){
var inst_40775 = cljs.core.async.close_BANG_.call(null,out);
var state_40790__$1 = state_40790;
var statearr_40801_40818 = state_40790__$1;
(statearr_40801_40818[(2)] = inst_40775);

(statearr_40801_40818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (10))){
var inst_40783 = (state_40790[(2)]);
var state_40790__$1 = (function (){var statearr_40802 = state_40790;
(statearr_40802[(8)] = inst_40783);

return statearr_40802;
})();
var statearr_40803_40819 = state_40790__$1;
(statearr_40803_40819[(2)] = null);

(statearr_40803_40819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (8))){
var inst_40772 = (state_40790[(7)]);
var state_40790__$1 = state_40790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40790__$1,(11),out,inst_40772);
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
});})(c__30623__auto___40809,out))
;
return ((function (switch__30535__auto__,c__30623__auto___40809,out){
return (function() {
var cljs$core$async$state_machine__30536__auto__ = null;
var cljs$core$async$state_machine__30536__auto____0 = (function (){
var statearr_40804 = [null,null,null,null,null,null,null,null,null];
(statearr_40804[(0)] = cljs$core$async$state_machine__30536__auto__);

(statearr_40804[(1)] = (1));

return statearr_40804;
});
var cljs$core$async$state_machine__30536__auto____1 = (function (state_40790){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_40790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e40805){if((e40805 instanceof Object)){
var ex__30539__auto__ = e40805;
var statearr_40806_40820 = state_40790;
(statearr_40806_40820[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40821 = state_40790;
state_40790 = G__40821;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$state_machine__30536__auto__ = function(state_40790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30536__auto____1.call(this,state_40790);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30536__auto____0;
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30536__auto____1;
return cljs$core$async$state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___40809,out))
})();
var state__30625__auto__ = (function (){var statearr_40807 = f__30624__auto__.call(null);
(statearr_40807[(6)] = c__30623__auto___40809);

return statearr_40807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___40809,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40823 = arguments.length;
switch (G__40823) {
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
var c__30623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto__){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto__){
return (function (state_40886){
var state_val_40887 = (state_40886[(1)]);
if((state_val_40887 === (7))){
var inst_40882 = (state_40886[(2)]);
var state_40886__$1 = state_40886;
var statearr_40888_40926 = state_40886__$1;
(statearr_40888_40926[(2)] = inst_40882);

(statearr_40888_40926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (20))){
var inst_40852 = (state_40886[(7)]);
var inst_40863 = (state_40886[(2)]);
var inst_40864 = cljs.core.next.call(null,inst_40852);
var inst_40838 = inst_40864;
var inst_40839 = null;
var inst_40840 = (0);
var inst_40841 = (0);
var state_40886__$1 = (function (){var statearr_40889 = state_40886;
(statearr_40889[(8)] = inst_40840);

(statearr_40889[(9)] = inst_40841);

(statearr_40889[(10)] = inst_40838);

(statearr_40889[(11)] = inst_40863);

(statearr_40889[(12)] = inst_40839);

return statearr_40889;
})();
var statearr_40890_40927 = state_40886__$1;
(statearr_40890_40927[(2)] = null);

(statearr_40890_40927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (1))){
var state_40886__$1 = state_40886;
var statearr_40891_40928 = state_40886__$1;
(statearr_40891_40928[(2)] = null);

(statearr_40891_40928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (4))){
var inst_40827 = (state_40886[(13)]);
var inst_40827__$1 = (state_40886[(2)]);
var inst_40828 = (inst_40827__$1 == null);
var state_40886__$1 = (function (){var statearr_40892 = state_40886;
(statearr_40892[(13)] = inst_40827__$1);

return statearr_40892;
})();
if(cljs.core.truth_(inst_40828)){
var statearr_40893_40929 = state_40886__$1;
(statearr_40893_40929[(1)] = (5));

} else {
var statearr_40894_40930 = state_40886__$1;
(statearr_40894_40930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (15))){
var state_40886__$1 = state_40886;
var statearr_40898_40931 = state_40886__$1;
(statearr_40898_40931[(2)] = null);

(statearr_40898_40931[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (21))){
var state_40886__$1 = state_40886;
var statearr_40899_40932 = state_40886__$1;
(statearr_40899_40932[(2)] = null);

(statearr_40899_40932[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (13))){
var inst_40840 = (state_40886[(8)]);
var inst_40841 = (state_40886[(9)]);
var inst_40838 = (state_40886[(10)]);
var inst_40839 = (state_40886[(12)]);
var inst_40848 = (state_40886[(2)]);
var inst_40849 = (inst_40841 + (1));
var tmp40895 = inst_40840;
var tmp40896 = inst_40838;
var tmp40897 = inst_40839;
var inst_40838__$1 = tmp40896;
var inst_40839__$1 = tmp40897;
var inst_40840__$1 = tmp40895;
var inst_40841__$1 = inst_40849;
var state_40886__$1 = (function (){var statearr_40900 = state_40886;
(statearr_40900[(8)] = inst_40840__$1);

(statearr_40900[(9)] = inst_40841__$1);

(statearr_40900[(14)] = inst_40848);

(statearr_40900[(10)] = inst_40838__$1);

(statearr_40900[(12)] = inst_40839__$1);

return statearr_40900;
})();
var statearr_40901_40933 = state_40886__$1;
(statearr_40901_40933[(2)] = null);

(statearr_40901_40933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (22))){
var state_40886__$1 = state_40886;
var statearr_40902_40934 = state_40886__$1;
(statearr_40902_40934[(2)] = null);

(statearr_40902_40934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (6))){
var inst_40827 = (state_40886[(13)]);
var inst_40836 = f.call(null,inst_40827);
var inst_40837 = cljs.core.seq.call(null,inst_40836);
var inst_40838 = inst_40837;
var inst_40839 = null;
var inst_40840 = (0);
var inst_40841 = (0);
var state_40886__$1 = (function (){var statearr_40903 = state_40886;
(statearr_40903[(8)] = inst_40840);

(statearr_40903[(9)] = inst_40841);

(statearr_40903[(10)] = inst_40838);

(statearr_40903[(12)] = inst_40839);

return statearr_40903;
})();
var statearr_40904_40935 = state_40886__$1;
(statearr_40904_40935[(2)] = null);

(statearr_40904_40935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (17))){
var inst_40852 = (state_40886[(7)]);
var inst_40856 = cljs.core.chunk_first.call(null,inst_40852);
var inst_40857 = cljs.core.chunk_rest.call(null,inst_40852);
var inst_40858 = cljs.core.count.call(null,inst_40856);
var inst_40838 = inst_40857;
var inst_40839 = inst_40856;
var inst_40840 = inst_40858;
var inst_40841 = (0);
var state_40886__$1 = (function (){var statearr_40905 = state_40886;
(statearr_40905[(8)] = inst_40840);

(statearr_40905[(9)] = inst_40841);

(statearr_40905[(10)] = inst_40838);

(statearr_40905[(12)] = inst_40839);

return statearr_40905;
})();
var statearr_40906_40936 = state_40886__$1;
(statearr_40906_40936[(2)] = null);

(statearr_40906_40936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (3))){
var inst_40884 = (state_40886[(2)]);
var state_40886__$1 = state_40886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40886__$1,inst_40884);
} else {
if((state_val_40887 === (12))){
var inst_40872 = (state_40886[(2)]);
var state_40886__$1 = state_40886;
var statearr_40907_40937 = state_40886__$1;
(statearr_40907_40937[(2)] = inst_40872);

(statearr_40907_40937[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (2))){
var state_40886__$1 = state_40886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40886__$1,(4),in$);
} else {
if((state_val_40887 === (23))){
var inst_40880 = (state_40886[(2)]);
var state_40886__$1 = state_40886;
var statearr_40908_40938 = state_40886__$1;
(statearr_40908_40938[(2)] = inst_40880);

(statearr_40908_40938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (19))){
var inst_40867 = (state_40886[(2)]);
var state_40886__$1 = state_40886;
var statearr_40909_40939 = state_40886__$1;
(statearr_40909_40939[(2)] = inst_40867);

(statearr_40909_40939[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (11))){
var inst_40852 = (state_40886[(7)]);
var inst_40838 = (state_40886[(10)]);
var inst_40852__$1 = cljs.core.seq.call(null,inst_40838);
var state_40886__$1 = (function (){var statearr_40910 = state_40886;
(statearr_40910[(7)] = inst_40852__$1);

return statearr_40910;
})();
if(inst_40852__$1){
var statearr_40911_40940 = state_40886__$1;
(statearr_40911_40940[(1)] = (14));

} else {
var statearr_40912_40941 = state_40886__$1;
(statearr_40912_40941[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (9))){
var inst_40874 = (state_40886[(2)]);
var inst_40875 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40886__$1 = (function (){var statearr_40913 = state_40886;
(statearr_40913[(15)] = inst_40874);

return statearr_40913;
})();
if(cljs.core.truth_(inst_40875)){
var statearr_40914_40942 = state_40886__$1;
(statearr_40914_40942[(1)] = (21));

} else {
var statearr_40915_40943 = state_40886__$1;
(statearr_40915_40943[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (5))){
var inst_40830 = cljs.core.async.close_BANG_.call(null,out);
var state_40886__$1 = state_40886;
var statearr_40916_40944 = state_40886__$1;
(statearr_40916_40944[(2)] = inst_40830);

(statearr_40916_40944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (14))){
var inst_40852 = (state_40886[(7)]);
var inst_40854 = cljs.core.chunked_seq_QMARK_.call(null,inst_40852);
var state_40886__$1 = state_40886;
if(inst_40854){
var statearr_40917_40945 = state_40886__$1;
(statearr_40917_40945[(1)] = (17));

} else {
var statearr_40918_40946 = state_40886__$1;
(statearr_40918_40946[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (16))){
var inst_40870 = (state_40886[(2)]);
var state_40886__$1 = state_40886;
var statearr_40919_40947 = state_40886__$1;
(statearr_40919_40947[(2)] = inst_40870);

(statearr_40919_40947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40887 === (10))){
var inst_40841 = (state_40886[(9)]);
var inst_40839 = (state_40886[(12)]);
var inst_40846 = cljs.core._nth.call(null,inst_40839,inst_40841);
var state_40886__$1 = state_40886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40886__$1,(13),out,inst_40846);
} else {
if((state_val_40887 === (18))){
var inst_40852 = (state_40886[(7)]);
var inst_40861 = cljs.core.first.call(null,inst_40852);
var state_40886__$1 = state_40886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40886__$1,(20),out,inst_40861);
} else {
if((state_val_40887 === (8))){
var inst_40840 = (state_40886[(8)]);
var inst_40841 = (state_40886[(9)]);
var inst_40843 = (inst_40841 < inst_40840);
var inst_40844 = inst_40843;
var state_40886__$1 = state_40886;
if(cljs.core.truth_(inst_40844)){
var statearr_40920_40948 = state_40886__$1;
(statearr_40920_40948[(1)] = (10));

} else {
var statearr_40921_40949 = state_40886__$1;
(statearr_40921_40949[(1)] = (11));

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
});})(c__30623__auto__))
;
return ((function (switch__30535__auto__,c__30623__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30536__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30536__auto____0 = (function (){
var statearr_40922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40922[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30536__auto__);

(statearr_40922[(1)] = (1));

return statearr_40922;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30536__auto____1 = (function (state_40886){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_40886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e40923){if((e40923 instanceof Object)){
var ex__30539__auto__ = e40923;
var statearr_40924_40950 = state_40886;
(statearr_40924_40950[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40951 = state_40886;
state_40886 = G__40951;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30536__auto__ = function(state_40886){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30536__auto____1.call(this,state_40886);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30536__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30536__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto__))
})();
var state__30625__auto__ = (function (){var statearr_40925 = f__30624__auto__.call(null);
(statearr_40925[(6)] = c__30623__auto__);

return statearr_40925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto__))
);

return c__30623__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40953 = arguments.length;
switch (G__40953) {
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
var G__40956 = arguments.length;
switch (G__40956) {
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
var G__40959 = arguments.length;
switch (G__40959) {
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
var c__30623__auto___41006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___41006,out){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___41006,out){
return (function (state_40983){
var state_val_40984 = (state_40983[(1)]);
if((state_val_40984 === (7))){
var inst_40978 = (state_40983[(2)]);
var state_40983__$1 = state_40983;
var statearr_40985_41007 = state_40983__$1;
(statearr_40985_41007[(2)] = inst_40978);

(statearr_40985_41007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (1))){
var inst_40960 = null;
var state_40983__$1 = (function (){var statearr_40986 = state_40983;
(statearr_40986[(7)] = inst_40960);

return statearr_40986;
})();
var statearr_40987_41008 = state_40983__$1;
(statearr_40987_41008[(2)] = null);

(statearr_40987_41008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (4))){
var inst_40963 = (state_40983[(8)]);
var inst_40963__$1 = (state_40983[(2)]);
var inst_40964 = (inst_40963__$1 == null);
var inst_40965 = cljs.core.not.call(null,inst_40964);
var state_40983__$1 = (function (){var statearr_40988 = state_40983;
(statearr_40988[(8)] = inst_40963__$1);

return statearr_40988;
})();
if(inst_40965){
var statearr_40989_41009 = state_40983__$1;
(statearr_40989_41009[(1)] = (5));

} else {
var statearr_40990_41010 = state_40983__$1;
(statearr_40990_41010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (6))){
var state_40983__$1 = state_40983;
var statearr_40991_41011 = state_40983__$1;
(statearr_40991_41011[(2)] = null);

(statearr_40991_41011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (3))){
var inst_40980 = (state_40983[(2)]);
var inst_40981 = cljs.core.async.close_BANG_.call(null,out);
var state_40983__$1 = (function (){var statearr_40992 = state_40983;
(statearr_40992[(9)] = inst_40980);

return statearr_40992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40983__$1,inst_40981);
} else {
if((state_val_40984 === (2))){
var state_40983__$1 = state_40983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40983__$1,(4),ch);
} else {
if((state_val_40984 === (11))){
var inst_40963 = (state_40983[(8)]);
var inst_40972 = (state_40983[(2)]);
var inst_40960 = inst_40963;
var state_40983__$1 = (function (){var statearr_40993 = state_40983;
(statearr_40993[(7)] = inst_40960);

(statearr_40993[(10)] = inst_40972);

return statearr_40993;
})();
var statearr_40994_41012 = state_40983__$1;
(statearr_40994_41012[(2)] = null);

(statearr_40994_41012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (9))){
var inst_40963 = (state_40983[(8)]);
var state_40983__$1 = state_40983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40983__$1,(11),out,inst_40963);
} else {
if((state_val_40984 === (5))){
var inst_40960 = (state_40983[(7)]);
var inst_40963 = (state_40983[(8)]);
var inst_40967 = cljs.core._EQ_.call(null,inst_40963,inst_40960);
var state_40983__$1 = state_40983;
if(inst_40967){
var statearr_40996_41013 = state_40983__$1;
(statearr_40996_41013[(1)] = (8));

} else {
var statearr_40997_41014 = state_40983__$1;
(statearr_40997_41014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (10))){
var inst_40975 = (state_40983[(2)]);
var state_40983__$1 = state_40983;
var statearr_40998_41015 = state_40983__$1;
(statearr_40998_41015[(2)] = inst_40975);

(statearr_40998_41015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40984 === (8))){
var inst_40960 = (state_40983[(7)]);
var tmp40995 = inst_40960;
var inst_40960__$1 = tmp40995;
var state_40983__$1 = (function (){var statearr_40999 = state_40983;
(statearr_40999[(7)] = inst_40960__$1);

return statearr_40999;
})();
var statearr_41000_41016 = state_40983__$1;
(statearr_41000_41016[(2)] = null);

(statearr_41000_41016[(1)] = (2));


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
});})(c__30623__auto___41006,out))
;
return ((function (switch__30535__auto__,c__30623__auto___41006,out){
return (function() {
var cljs$core$async$state_machine__30536__auto__ = null;
var cljs$core$async$state_machine__30536__auto____0 = (function (){
var statearr_41001 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41001[(0)] = cljs$core$async$state_machine__30536__auto__);

(statearr_41001[(1)] = (1));

return statearr_41001;
});
var cljs$core$async$state_machine__30536__auto____1 = (function (state_40983){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_40983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e41002){if((e41002 instanceof Object)){
var ex__30539__auto__ = e41002;
var statearr_41003_41017 = state_40983;
(statearr_41003_41017[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41018 = state_40983;
state_40983 = G__41018;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$state_machine__30536__auto__ = function(state_40983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30536__auto____1.call(this,state_40983);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30536__auto____0;
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30536__auto____1;
return cljs$core$async$state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___41006,out))
})();
var state__30625__auto__ = (function (){var statearr_41004 = f__30624__auto__.call(null);
(statearr_41004[(6)] = c__30623__auto___41006);

return statearr_41004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___41006,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41020 = arguments.length;
switch (G__41020) {
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
var c__30623__auto___41086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___41086,out){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___41086,out){
return (function (state_41058){
var state_val_41059 = (state_41058[(1)]);
if((state_val_41059 === (7))){
var inst_41054 = (state_41058[(2)]);
var state_41058__$1 = state_41058;
var statearr_41060_41087 = state_41058__$1;
(statearr_41060_41087[(2)] = inst_41054);

(statearr_41060_41087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (1))){
var inst_41021 = (new Array(n));
var inst_41022 = inst_41021;
var inst_41023 = (0);
var state_41058__$1 = (function (){var statearr_41061 = state_41058;
(statearr_41061[(7)] = inst_41023);

(statearr_41061[(8)] = inst_41022);

return statearr_41061;
})();
var statearr_41062_41088 = state_41058__$1;
(statearr_41062_41088[(2)] = null);

(statearr_41062_41088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (4))){
var inst_41026 = (state_41058[(9)]);
var inst_41026__$1 = (state_41058[(2)]);
var inst_41027 = (inst_41026__$1 == null);
var inst_41028 = cljs.core.not.call(null,inst_41027);
var state_41058__$1 = (function (){var statearr_41063 = state_41058;
(statearr_41063[(9)] = inst_41026__$1);

return statearr_41063;
})();
if(inst_41028){
var statearr_41064_41089 = state_41058__$1;
(statearr_41064_41089[(1)] = (5));

} else {
var statearr_41065_41090 = state_41058__$1;
(statearr_41065_41090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (15))){
var inst_41048 = (state_41058[(2)]);
var state_41058__$1 = state_41058;
var statearr_41066_41091 = state_41058__$1;
(statearr_41066_41091[(2)] = inst_41048);

(statearr_41066_41091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (13))){
var state_41058__$1 = state_41058;
var statearr_41067_41092 = state_41058__$1;
(statearr_41067_41092[(2)] = null);

(statearr_41067_41092[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (6))){
var inst_41023 = (state_41058[(7)]);
var inst_41044 = (inst_41023 > (0));
var state_41058__$1 = state_41058;
if(cljs.core.truth_(inst_41044)){
var statearr_41068_41093 = state_41058__$1;
(statearr_41068_41093[(1)] = (12));

} else {
var statearr_41069_41094 = state_41058__$1;
(statearr_41069_41094[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (3))){
var inst_41056 = (state_41058[(2)]);
var state_41058__$1 = state_41058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41058__$1,inst_41056);
} else {
if((state_val_41059 === (12))){
var inst_41022 = (state_41058[(8)]);
var inst_41046 = cljs.core.vec.call(null,inst_41022);
var state_41058__$1 = state_41058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41058__$1,(15),out,inst_41046);
} else {
if((state_val_41059 === (2))){
var state_41058__$1 = state_41058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41058__$1,(4),ch);
} else {
if((state_val_41059 === (11))){
var inst_41038 = (state_41058[(2)]);
var inst_41039 = (new Array(n));
var inst_41022 = inst_41039;
var inst_41023 = (0);
var state_41058__$1 = (function (){var statearr_41070 = state_41058;
(statearr_41070[(10)] = inst_41038);

(statearr_41070[(7)] = inst_41023);

(statearr_41070[(8)] = inst_41022);

return statearr_41070;
})();
var statearr_41071_41095 = state_41058__$1;
(statearr_41071_41095[(2)] = null);

(statearr_41071_41095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (9))){
var inst_41022 = (state_41058[(8)]);
var inst_41036 = cljs.core.vec.call(null,inst_41022);
var state_41058__$1 = state_41058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41058__$1,(11),out,inst_41036);
} else {
if((state_val_41059 === (5))){
var inst_41026 = (state_41058[(9)]);
var inst_41023 = (state_41058[(7)]);
var inst_41031 = (state_41058[(11)]);
var inst_41022 = (state_41058[(8)]);
var inst_41030 = (inst_41022[inst_41023] = inst_41026);
var inst_41031__$1 = (inst_41023 + (1));
var inst_41032 = (inst_41031__$1 < n);
var state_41058__$1 = (function (){var statearr_41072 = state_41058;
(statearr_41072[(12)] = inst_41030);

(statearr_41072[(11)] = inst_41031__$1);

return statearr_41072;
})();
if(cljs.core.truth_(inst_41032)){
var statearr_41073_41096 = state_41058__$1;
(statearr_41073_41096[(1)] = (8));

} else {
var statearr_41074_41097 = state_41058__$1;
(statearr_41074_41097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (14))){
var inst_41051 = (state_41058[(2)]);
var inst_41052 = cljs.core.async.close_BANG_.call(null,out);
var state_41058__$1 = (function (){var statearr_41076 = state_41058;
(statearr_41076[(13)] = inst_41051);

return statearr_41076;
})();
var statearr_41077_41098 = state_41058__$1;
(statearr_41077_41098[(2)] = inst_41052);

(statearr_41077_41098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (10))){
var inst_41042 = (state_41058[(2)]);
var state_41058__$1 = state_41058;
var statearr_41078_41099 = state_41058__$1;
(statearr_41078_41099[(2)] = inst_41042);

(statearr_41078_41099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41059 === (8))){
var inst_41031 = (state_41058[(11)]);
var inst_41022 = (state_41058[(8)]);
var tmp41075 = inst_41022;
var inst_41022__$1 = tmp41075;
var inst_41023 = inst_41031;
var state_41058__$1 = (function (){var statearr_41079 = state_41058;
(statearr_41079[(7)] = inst_41023);

(statearr_41079[(8)] = inst_41022__$1);

return statearr_41079;
})();
var statearr_41080_41100 = state_41058__$1;
(statearr_41080_41100[(2)] = null);

(statearr_41080_41100[(1)] = (2));


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
});})(c__30623__auto___41086,out))
;
return ((function (switch__30535__auto__,c__30623__auto___41086,out){
return (function() {
var cljs$core$async$state_machine__30536__auto__ = null;
var cljs$core$async$state_machine__30536__auto____0 = (function (){
var statearr_41081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41081[(0)] = cljs$core$async$state_machine__30536__auto__);

(statearr_41081[(1)] = (1));

return statearr_41081;
});
var cljs$core$async$state_machine__30536__auto____1 = (function (state_41058){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_41058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e41082){if((e41082 instanceof Object)){
var ex__30539__auto__ = e41082;
var statearr_41083_41101 = state_41058;
(statearr_41083_41101[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41102 = state_41058;
state_41058 = G__41102;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$state_machine__30536__auto__ = function(state_41058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30536__auto____1.call(this,state_41058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30536__auto____0;
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30536__auto____1;
return cljs$core$async$state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___41086,out))
})();
var state__30625__auto__ = (function (){var statearr_41084 = f__30624__auto__.call(null);
(statearr_41084[(6)] = c__30623__auto___41086);

return statearr_41084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___41086,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41104 = arguments.length;
switch (G__41104) {
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
var c__30623__auto___41174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30623__auto___41174,out){
return (function (){
var f__30624__auto__ = (function (){var switch__30535__auto__ = ((function (c__30623__auto___41174,out){
return (function (state_41146){
var state_val_41147 = (state_41146[(1)]);
if((state_val_41147 === (7))){
var inst_41142 = (state_41146[(2)]);
var state_41146__$1 = state_41146;
var statearr_41148_41175 = state_41146__$1;
(statearr_41148_41175[(2)] = inst_41142);

(statearr_41148_41175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41147 === (1))){
var inst_41105 = [];
var inst_41106 = inst_41105;
var inst_41107 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41146__$1 = (function (){var statearr_41149 = state_41146;
(statearr_41149[(7)] = inst_41106);

(statearr_41149[(8)] = inst_41107);

return statearr_41149;
})();
var statearr_41150_41176 = state_41146__$1;
(statearr_41150_41176[(2)] = null);

(statearr_41150_41176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41147 === (4))){
var inst_41110 = (state_41146[(9)]);
var inst_41110__$1 = (state_41146[(2)]);
var inst_41111 = (inst_41110__$1 == null);
var inst_41112 = cljs.core.not.call(null,inst_41111);
var state_41146__$1 = (function (){var statearr_41151 = state_41146;
(statearr_41151[(9)] = inst_41110__$1);

return statearr_41151;
})();
if(inst_41112){
var statearr_41152_41177 = state_41146__$1;
(statearr_41152_41177[(1)] = (5));

} else {
var statearr_41153_41178 = state_41146__$1;
(statearr_41153_41178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41147 === (15))){
var inst_41136 = (state_41146[(2)]);
var state_41146__$1 = state_41146;
var statearr_41154_41179 = state_41146__$1;
(statearr_41154_41179[(2)] = inst_41136);

(statearr_41154_41179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41147 === (13))){
var state_41146__$1 = state_41146;
var statearr_41155_41180 = state_41146__$1;
(statearr_41155_41180[(2)] = null);

(statearr_41155_41180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41147 === (6))){
var inst_41106 = (state_41146[(7)]);
var inst_41131 = inst_41106.length;
var inst_41132 = (inst_41131 > (0));
var state_41146__$1 = state_41146;
if(cljs.core.truth_(inst_41132)){
var statearr_41156_41181 = state_41146__$1;
(statearr_41156_41181[(1)] = (12));

} else {
var statearr_41157_41182 = state_41146__$1;
(statearr_41157_41182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41147 === (3))){
var inst_41144 = (state_41146[(2)]);
var state_41146__$1 = state_41146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41146__$1,inst_41144);
} else {
if((state_val_41147 === (12))){
var inst_41106 = (state_41146[(7)]);
var inst_41134 = cljs.core.vec.call(null,inst_41106);
var state_41146__$1 = state_41146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41146__$1,(15),out,inst_41134);
} else {
if((state_val_41147 === (2))){
var state_41146__$1 = state_41146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41146__$1,(4),ch);
} else {
if((state_val_41147 === (11))){
var inst_41114 = (state_41146[(10)]);
var inst_41110 = (state_41146[(9)]);
var inst_41124 = (state_41146[(2)]);
var inst_41125 = [];
var inst_41126 = inst_41125.push(inst_41110);
var inst_41106 = inst_41125;
var inst_41107 = inst_41114;
var state_41146__$1 = (function (){var statearr_41158 = state_41146;
(statearr_41158[(11)] = inst_41124);

(statearr_41158[(7)] = inst_41106);

(statearr_41158[(8)] = inst_41107);

(statearr_41158[(12)] = inst_41126);

return statearr_41158;
})();
var statearr_41159_41183 = state_41146__$1;
(statearr_41159_41183[(2)] = null);

(statearr_41159_41183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41147 === (9))){
var inst_41106 = (state_41146[(7)]);
var inst_41122 = cljs.core.vec.call(null,inst_41106);
var state_41146__$1 = state_41146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41146__$1,(11),out,inst_41122);
} else {
if((state_val_41147 === (5))){
var inst_41114 = (state_41146[(10)]);
var inst_41110 = (state_41146[(9)]);
var inst_41107 = (state_41146[(8)]);
var inst_41114__$1 = f.call(null,inst_41110);
var inst_41115 = cljs.core._EQ_.call(null,inst_41114__$1,inst_41107);
var inst_41116 = cljs.core.keyword_identical_QMARK_.call(null,inst_41107,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41117 = (inst_41115) || (inst_41116);
var state_41146__$1 = (function (){var statearr_41160 = state_41146;
(statearr_41160[(10)] = inst_41114__$1);

return statearr_41160;
})();
if(cljs.core.truth_(inst_41117)){
var statearr_41161_41184 = state_41146__$1;
(statearr_41161_41184[(1)] = (8));

} else {
var statearr_41162_41185 = state_41146__$1;
(statearr_41162_41185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41147 === (14))){
var inst_41139 = (state_41146[(2)]);
var inst_41140 = cljs.core.async.close_BANG_.call(null,out);
var state_41146__$1 = (function (){var statearr_41164 = state_41146;
(statearr_41164[(13)] = inst_41139);

return statearr_41164;
})();
var statearr_41165_41186 = state_41146__$1;
(statearr_41165_41186[(2)] = inst_41140);

(statearr_41165_41186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41147 === (10))){
var inst_41129 = (state_41146[(2)]);
var state_41146__$1 = state_41146;
var statearr_41166_41187 = state_41146__$1;
(statearr_41166_41187[(2)] = inst_41129);

(statearr_41166_41187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41147 === (8))){
var inst_41114 = (state_41146[(10)]);
var inst_41106 = (state_41146[(7)]);
var inst_41110 = (state_41146[(9)]);
var inst_41119 = inst_41106.push(inst_41110);
var tmp41163 = inst_41106;
var inst_41106__$1 = tmp41163;
var inst_41107 = inst_41114;
var state_41146__$1 = (function (){var statearr_41167 = state_41146;
(statearr_41167[(14)] = inst_41119);

(statearr_41167[(7)] = inst_41106__$1);

(statearr_41167[(8)] = inst_41107);

return statearr_41167;
})();
var statearr_41168_41188 = state_41146__$1;
(statearr_41168_41188[(2)] = null);

(statearr_41168_41188[(1)] = (2));


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
});})(c__30623__auto___41174,out))
;
return ((function (switch__30535__auto__,c__30623__auto___41174,out){
return (function() {
var cljs$core$async$state_machine__30536__auto__ = null;
var cljs$core$async$state_machine__30536__auto____0 = (function (){
var statearr_41169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41169[(0)] = cljs$core$async$state_machine__30536__auto__);

(statearr_41169[(1)] = (1));

return statearr_41169;
});
var cljs$core$async$state_machine__30536__auto____1 = (function (state_41146){
while(true){
var ret_value__30537__auto__ = (function (){try{while(true){
var result__30538__auto__ = switch__30535__auto__.call(null,state_41146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30538__auto__;
}
break;
}
}catch (e41170){if((e41170 instanceof Object)){
var ex__30539__auto__ = e41170;
var statearr_41171_41189 = state_41146;
(statearr_41171_41189[(5)] = ex__30539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30537__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41190 = state_41146;
state_41146 = G__41190;
continue;
} else {
return ret_value__30537__auto__;
}
break;
}
});
cljs$core$async$state_machine__30536__auto__ = function(state_41146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30536__auto____1.call(this,state_41146);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30536__auto____0;
cljs$core$async$state_machine__30536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30536__auto____1;
return cljs$core$async$state_machine__30536__auto__;
})()
;})(switch__30535__auto__,c__30623__auto___41174,out))
})();
var state__30625__auto__ = (function (){var statearr_41172 = f__30624__auto__.call(null);
(statearr_41172[(6)] = c__30623__auto___41174);

return statearr_41172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30625__auto__);
});})(c__30623__auto___41174,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1515855030911
