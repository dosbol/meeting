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
var G__39323 = arguments.length;
switch (G__39323) {
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
if(typeof cljs.core.async.t_cljs$core$async39324 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39324 = (function (f,blockable,meta39325){
this.f = f;
this.blockable = blockable;
this.meta39325 = meta39325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39326,meta39325__$1){
var self__ = this;
var _39326__$1 = this;
return (new cljs.core.async.t_cljs$core$async39324(self__.f,self__.blockable,meta39325__$1));
});

cljs.core.async.t_cljs$core$async39324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39326){
var self__ = this;
var _39326__$1 = this;
return self__.meta39325;
});

cljs.core.async.t_cljs$core$async39324.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39324.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39324.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39324.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39324.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39325","meta39325",1505648423,null)], null);
});

cljs.core.async.t_cljs$core$async39324.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39324";

cljs.core.async.t_cljs$core$async39324.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39324");
});

cljs.core.async.__GT_t_cljs$core$async39324 = (function cljs$core$async$__GT_t_cljs$core$async39324(f__$1,blockable__$1,meta39325){
return (new cljs.core.async.t_cljs$core$async39324(f__$1,blockable__$1,meta39325));
});

}

return (new cljs.core.async.t_cljs$core$async39324(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39330 = arguments.length;
switch (G__39330) {
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
var G__39333 = arguments.length;
switch (G__39333) {
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
var G__39336 = arguments.length;
switch (G__39336) {
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
var val_39338 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39338);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39338,ret){
return (function (){
return fn1.call(null,val_39338);
});})(val_39338,ret))
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
var G__39340 = arguments.length;
switch (G__39340) {
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
var n__28140__auto___39342 = n;
var x_39343 = (0);
while(true){
if((x_39343 < n__28140__auto___39342)){
(a[x_39343] = (0));

var G__39344 = (x_39343 + (1));
x_39343 = G__39344;
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

var G__39345 = (i + (1));
i = G__39345;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39346 = (function (flag,meta39347){
this.flag = flag;
this.meta39347 = meta39347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39348,meta39347__$1){
var self__ = this;
var _39348__$1 = this;
return (new cljs.core.async.t_cljs$core$async39346(self__.flag,meta39347__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39348){
var self__ = this;
var _39348__$1 = this;
return self__.meta39347;
});})(flag))
;

cljs.core.async.t_cljs$core$async39346.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39346.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39346.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39347","meta39347",627945701,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39346";

cljs.core.async.t_cljs$core$async39346.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39346");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39346 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39346(flag__$1,meta39347){
return (new cljs.core.async.t_cljs$core$async39346(flag__$1,meta39347));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39346(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39349 = (function (flag,cb,meta39350){
this.flag = flag;
this.cb = cb;
this.meta39350 = meta39350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39351,meta39350__$1){
var self__ = this;
var _39351__$1 = this;
return (new cljs.core.async.t_cljs$core$async39349(self__.flag,self__.cb,meta39350__$1));
});

cljs.core.async.t_cljs$core$async39349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39351){
var self__ = this;
var _39351__$1 = this;
return self__.meta39350;
});

cljs.core.async.t_cljs$core$async39349.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39350","meta39350",-1180689094,null)], null);
});

cljs.core.async.t_cljs$core$async39349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39349";

cljs.core.async.t_cljs$core$async39349.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39349");
});

cljs.core.async.__GT_t_cljs$core$async39349 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39349(flag__$1,cb__$1,meta39350){
return (new cljs.core.async.t_cljs$core$async39349(flag__$1,cb__$1,meta39350));
});

}

return (new cljs.core.async.t_cljs$core$async39349(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39352_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39352_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39353_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39353_SHARP_,port], null));
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
var G__39354 = (i + (1));
i = G__39354;
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
var len__28364__auto___39360 = arguments.length;
var i__28365__auto___39361 = (0);
while(true){
if((i__28365__auto___39361 < len__28364__auto___39360)){
args__28371__auto__.push((arguments[i__28365__auto___39361]));

var G__39362 = (i__28365__auto___39361 + (1));
i__28365__auto___39361 = G__39362;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39357){
var map__39358 = p__39357;
var map__39358__$1 = ((((!((map__39358 == null)))?((((map__39358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39358):map__39358);
var opts = map__39358__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39355){
var G__39356 = cljs.core.first.call(null,seq39355);
var seq39355__$1 = cljs.core.next.call(null,seq39355);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39356,seq39355__$1);
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
var G__39364 = arguments.length;
switch (G__39364) {
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
var c__31946__auto___39410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___39410){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___39410){
return (function (state_39388){
var state_val_39389 = (state_39388[(1)]);
if((state_val_39389 === (7))){
var inst_39384 = (state_39388[(2)]);
var state_39388__$1 = state_39388;
var statearr_39390_39411 = state_39388__$1;
(statearr_39390_39411[(2)] = inst_39384);

(statearr_39390_39411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (1))){
var state_39388__$1 = state_39388;
var statearr_39391_39412 = state_39388__$1;
(statearr_39391_39412[(2)] = null);

(statearr_39391_39412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (4))){
var inst_39367 = (state_39388[(7)]);
var inst_39367__$1 = (state_39388[(2)]);
var inst_39368 = (inst_39367__$1 == null);
var state_39388__$1 = (function (){var statearr_39392 = state_39388;
(statearr_39392[(7)] = inst_39367__$1);

return statearr_39392;
})();
if(cljs.core.truth_(inst_39368)){
var statearr_39393_39413 = state_39388__$1;
(statearr_39393_39413[(1)] = (5));

} else {
var statearr_39394_39414 = state_39388__$1;
(statearr_39394_39414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (13))){
var state_39388__$1 = state_39388;
var statearr_39395_39415 = state_39388__$1;
(statearr_39395_39415[(2)] = null);

(statearr_39395_39415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (6))){
var inst_39367 = (state_39388[(7)]);
var state_39388__$1 = state_39388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39388__$1,(11),to,inst_39367);
} else {
if((state_val_39389 === (3))){
var inst_39386 = (state_39388[(2)]);
var state_39388__$1 = state_39388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39388__$1,inst_39386);
} else {
if((state_val_39389 === (12))){
var state_39388__$1 = state_39388;
var statearr_39396_39416 = state_39388__$1;
(statearr_39396_39416[(2)] = null);

(statearr_39396_39416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (2))){
var state_39388__$1 = state_39388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39388__$1,(4),from);
} else {
if((state_val_39389 === (11))){
var inst_39377 = (state_39388[(2)]);
var state_39388__$1 = state_39388;
if(cljs.core.truth_(inst_39377)){
var statearr_39397_39417 = state_39388__$1;
(statearr_39397_39417[(1)] = (12));

} else {
var statearr_39398_39418 = state_39388__$1;
(statearr_39398_39418[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (9))){
var state_39388__$1 = state_39388;
var statearr_39399_39419 = state_39388__$1;
(statearr_39399_39419[(2)] = null);

(statearr_39399_39419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (5))){
var state_39388__$1 = state_39388;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39400_39420 = state_39388__$1;
(statearr_39400_39420[(1)] = (8));

} else {
var statearr_39401_39421 = state_39388__$1;
(statearr_39401_39421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (14))){
var inst_39382 = (state_39388[(2)]);
var state_39388__$1 = state_39388;
var statearr_39402_39422 = state_39388__$1;
(statearr_39402_39422[(2)] = inst_39382);

(statearr_39402_39422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (10))){
var inst_39374 = (state_39388[(2)]);
var state_39388__$1 = state_39388;
var statearr_39403_39423 = state_39388__$1;
(statearr_39403_39423[(2)] = inst_39374);

(statearr_39403_39423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (8))){
var inst_39371 = cljs.core.async.close_BANG_.call(null,to);
var state_39388__$1 = state_39388;
var statearr_39404_39424 = state_39388__$1;
(statearr_39404_39424[(2)] = inst_39371);

(statearr_39404_39424[(1)] = (10));


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
});})(c__31946__auto___39410))
;
return ((function (switch__31858__auto__,c__31946__auto___39410){
return (function() {
var cljs$core$async$state_machine__31859__auto__ = null;
var cljs$core$async$state_machine__31859__auto____0 = (function (){
var statearr_39405 = [null,null,null,null,null,null,null,null];
(statearr_39405[(0)] = cljs$core$async$state_machine__31859__auto__);

(statearr_39405[(1)] = (1));

return statearr_39405;
});
var cljs$core$async$state_machine__31859__auto____1 = (function (state_39388){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_39388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e39406){if((e39406 instanceof Object)){
var ex__31862__auto__ = e39406;
var statearr_39407_39425 = state_39388;
(statearr_39407_39425[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39426 = state_39388;
state_39388 = G__39426;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$state_machine__31859__auto__ = function(state_39388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31859__auto____1.call(this,state_39388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31859__auto____0;
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31859__auto____1;
return cljs$core$async$state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___39410))
})();
var state__31948__auto__ = (function (){var statearr_39408 = f__31947__auto__.call(null);
(statearr_39408[(6)] = c__31946__auto___39410);

return statearr_39408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___39410))
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
return (function (p__39427){
var vec__39428 = p__39427;
var v = cljs.core.nth.call(null,vec__39428,(0),null);
var p = cljs.core.nth.call(null,vec__39428,(1),null);
var job = vec__39428;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31946__auto___39599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___39599,res,vec__39428,v,p,job,jobs,results){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___39599,res,vec__39428,v,p,job,jobs,results){
return (function (state_39435){
var state_val_39436 = (state_39435[(1)]);
if((state_val_39436 === (1))){
var state_39435__$1 = state_39435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39435__$1,(2),res,v);
} else {
if((state_val_39436 === (2))){
var inst_39432 = (state_39435[(2)]);
var inst_39433 = cljs.core.async.close_BANG_.call(null,res);
var state_39435__$1 = (function (){var statearr_39437 = state_39435;
(statearr_39437[(7)] = inst_39432);

return statearr_39437;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39435__$1,inst_39433);
} else {
return null;
}
}
});})(c__31946__auto___39599,res,vec__39428,v,p,job,jobs,results))
;
return ((function (switch__31858__auto__,c__31946__auto___39599,res,vec__39428,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____0 = (function (){
var statearr_39438 = [null,null,null,null,null,null,null,null];
(statearr_39438[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__);

(statearr_39438[(1)] = (1));

return statearr_39438;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____1 = (function (state_39435){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_39435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e39439){if((e39439 instanceof Object)){
var ex__31862__auto__ = e39439;
var statearr_39440_39600 = state_39435;
(statearr_39440_39600[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39601 = state_39435;
state_39435 = G__39601;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__ = function(state_39435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____1.call(this,state_39435);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___39599,res,vec__39428,v,p,job,jobs,results))
})();
var state__31948__auto__ = (function (){var statearr_39441 = f__31947__auto__.call(null);
(statearr_39441[(6)] = c__31946__auto___39599);

return statearr_39441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___39599,res,vec__39428,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39442){
var vec__39443 = p__39442;
var v = cljs.core.nth.call(null,vec__39443,(0),null);
var p = cljs.core.nth.call(null,vec__39443,(1),null);
var job = vec__39443;
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
var n__28140__auto___39602 = n;
var __39603 = (0);
while(true){
if((__39603 < n__28140__auto___39602)){
var G__39446_39604 = type;
var G__39446_39605__$1 = (((G__39446_39604 instanceof cljs.core.Keyword))?G__39446_39604.fqn:null);
switch (G__39446_39605__$1) {
case "compute":
var c__31946__auto___39607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39603,c__31946__auto___39607,G__39446_39604,G__39446_39605__$1,n__28140__auto___39602,jobs,results,process,async){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (__39603,c__31946__auto___39607,G__39446_39604,G__39446_39605__$1,n__28140__auto___39602,jobs,results,process,async){
return (function (state_39459){
var state_val_39460 = (state_39459[(1)]);
if((state_val_39460 === (1))){
var state_39459__$1 = state_39459;
var statearr_39461_39608 = state_39459__$1;
(statearr_39461_39608[(2)] = null);

(statearr_39461_39608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (2))){
var state_39459__$1 = state_39459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39459__$1,(4),jobs);
} else {
if((state_val_39460 === (3))){
var inst_39457 = (state_39459[(2)]);
var state_39459__$1 = state_39459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39459__$1,inst_39457);
} else {
if((state_val_39460 === (4))){
var inst_39449 = (state_39459[(2)]);
var inst_39450 = process.call(null,inst_39449);
var state_39459__$1 = state_39459;
if(cljs.core.truth_(inst_39450)){
var statearr_39462_39609 = state_39459__$1;
(statearr_39462_39609[(1)] = (5));

} else {
var statearr_39463_39610 = state_39459__$1;
(statearr_39463_39610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (5))){
var state_39459__$1 = state_39459;
var statearr_39464_39611 = state_39459__$1;
(statearr_39464_39611[(2)] = null);

(statearr_39464_39611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (6))){
var state_39459__$1 = state_39459;
var statearr_39465_39612 = state_39459__$1;
(statearr_39465_39612[(2)] = null);

(statearr_39465_39612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39460 === (7))){
var inst_39455 = (state_39459[(2)]);
var state_39459__$1 = state_39459;
var statearr_39466_39613 = state_39459__$1;
(statearr_39466_39613[(2)] = inst_39455);

(statearr_39466_39613[(1)] = (3));


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
});})(__39603,c__31946__auto___39607,G__39446_39604,G__39446_39605__$1,n__28140__auto___39602,jobs,results,process,async))
;
return ((function (__39603,switch__31858__auto__,c__31946__auto___39607,G__39446_39604,G__39446_39605__$1,n__28140__auto___39602,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____0 = (function (){
var statearr_39467 = [null,null,null,null,null,null,null];
(statearr_39467[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__);

(statearr_39467[(1)] = (1));

return statearr_39467;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____1 = (function (state_39459){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_39459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e39468){if((e39468 instanceof Object)){
var ex__31862__auto__ = e39468;
var statearr_39469_39614 = state_39459;
(statearr_39469_39614[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39615 = state_39459;
state_39459 = G__39615;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__ = function(state_39459){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____1.call(this,state_39459);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__;
})()
;})(__39603,switch__31858__auto__,c__31946__auto___39607,G__39446_39604,G__39446_39605__$1,n__28140__auto___39602,jobs,results,process,async))
})();
var state__31948__auto__ = (function (){var statearr_39470 = f__31947__auto__.call(null);
(statearr_39470[(6)] = c__31946__auto___39607);

return statearr_39470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(__39603,c__31946__auto___39607,G__39446_39604,G__39446_39605__$1,n__28140__auto___39602,jobs,results,process,async))
);


break;
case "async":
var c__31946__auto___39616 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39603,c__31946__auto___39616,G__39446_39604,G__39446_39605__$1,n__28140__auto___39602,jobs,results,process,async){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (__39603,c__31946__auto___39616,G__39446_39604,G__39446_39605__$1,n__28140__auto___39602,jobs,results,process,async){
return (function (state_39483){
var state_val_39484 = (state_39483[(1)]);
if((state_val_39484 === (1))){
var state_39483__$1 = state_39483;
var statearr_39485_39617 = state_39483__$1;
(statearr_39485_39617[(2)] = null);

(statearr_39485_39617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39484 === (2))){
var state_39483__$1 = state_39483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39483__$1,(4),jobs);
} else {
if((state_val_39484 === (3))){
var inst_39481 = (state_39483[(2)]);
var state_39483__$1 = state_39483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39483__$1,inst_39481);
} else {
if((state_val_39484 === (4))){
var inst_39473 = (state_39483[(2)]);
var inst_39474 = async.call(null,inst_39473);
var state_39483__$1 = state_39483;
if(cljs.core.truth_(inst_39474)){
var statearr_39486_39618 = state_39483__$1;
(statearr_39486_39618[(1)] = (5));

} else {
var statearr_39487_39619 = state_39483__$1;
(statearr_39487_39619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39484 === (5))){
var state_39483__$1 = state_39483;
var statearr_39488_39620 = state_39483__$1;
(statearr_39488_39620[(2)] = null);

(statearr_39488_39620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39484 === (6))){
var state_39483__$1 = state_39483;
var statearr_39489_39621 = state_39483__$1;
(statearr_39489_39621[(2)] = null);

(statearr_39489_39621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39484 === (7))){
var inst_39479 = (state_39483[(2)]);
var state_39483__$1 = state_39483;
var statearr_39490_39622 = state_39483__$1;
(statearr_39490_39622[(2)] = inst_39479);

(statearr_39490_39622[(1)] = (3));


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
});})(__39603,c__31946__auto___39616,G__39446_39604,G__39446_39605__$1,n__28140__auto___39602,jobs,results,process,async))
;
return ((function (__39603,switch__31858__auto__,c__31946__auto___39616,G__39446_39604,G__39446_39605__$1,n__28140__auto___39602,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____0 = (function (){
var statearr_39491 = [null,null,null,null,null,null,null];
(statearr_39491[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__);

(statearr_39491[(1)] = (1));

return statearr_39491;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____1 = (function (state_39483){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_39483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e39492){if((e39492 instanceof Object)){
var ex__31862__auto__ = e39492;
var statearr_39493_39623 = state_39483;
(statearr_39493_39623[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39624 = state_39483;
state_39483 = G__39624;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__ = function(state_39483){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____1.call(this,state_39483);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__;
})()
;})(__39603,switch__31858__auto__,c__31946__auto___39616,G__39446_39604,G__39446_39605__$1,n__28140__auto___39602,jobs,results,process,async))
})();
var state__31948__auto__ = (function (){var statearr_39494 = f__31947__auto__.call(null);
(statearr_39494[(6)] = c__31946__auto___39616);

return statearr_39494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(__39603,c__31946__auto___39616,G__39446_39604,G__39446_39605__$1,n__28140__auto___39602,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39446_39605__$1)].join('')));

}

var G__39625 = (__39603 + (1));
__39603 = G__39625;
continue;
} else {
}
break;
}

var c__31946__auto___39626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___39626,jobs,results,process,async){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___39626,jobs,results,process,async){
return (function (state_39516){
var state_val_39517 = (state_39516[(1)]);
if((state_val_39517 === (1))){
var state_39516__$1 = state_39516;
var statearr_39518_39627 = state_39516__$1;
(statearr_39518_39627[(2)] = null);

(statearr_39518_39627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39517 === (2))){
var state_39516__$1 = state_39516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39516__$1,(4),from);
} else {
if((state_val_39517 === (3))){
var inst_39514 = (state_39516[(2)]);
var state_39516__$1 = state_39516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39516__$1,inst_39514);
} else {
if((state_val_39517 === (4))){
var inst_39497 = (state_39516[(7)]);
var inst_39497__$1 = (state_39516[(2)]);
var inst_39498 = (inst_39497__$1 == null);
var state_39516__$1 = (function (){var statearr_39519 = state_39516;
(statearr_39519[(7)] = inst_39497__$1);

return statearr_39519;
})();
if(cljs.core.truth_(inst_39498)){
var statearr_39520_39628 = state_39516__$1;
(statearr_39520_39628[(1)] = (5));

} else {
var statearr_39521_39629 = state_39516__$1;
(statearr_39521_39629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39517 === (5))){
var inst_39500 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39516__$1 = state_39516;
var statearr_39522_39630 = state_39516__$1;
(statearr_39522_39630[(2)] = inst_39500);

(statearr_39522_39630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39517 === (6))){
var inst_39502 = (state_39516[(8)]);
var inst_39497 = (state_39516[(7)]);
var inst_39502__$1 = cljs.core.async.chan.call(null,(1));
var inst_39503 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39504 = [inst_39497,inst_39502__$1];
var inst_39505 = (new cljs.core.PersistentVector(null,2,(5),inst_39503,inst_39504,null));
var state_39516__$1 = (function (){var statearr_39523 = state_39516;
(statearr_39523[(8)] = inst_39502__$1);

return statearr_39523;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39516__$1,(8),jobs,inst_39505);
} else {
if((state_val_39517 === (7))){
var inst_39512 = (state_39516[(2)]);
var state_39516__$1 = state_39516;
var statearr_39524_39631 = state_39516__$1;
(statearr_39524_39631[(2)] = inst_39512);

(statearr_39524_39631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39517 === (8))){
var inst_39502 = (state_39516[(8)]);
var inst_39507 = (state_39516[(2)]);
var state_39516__$1 = (function (){var statearr_39525 = state_39516;
(statearr_39525[(9)] = inst_39507);

return statearr_39525;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39516__$1,(9),results,inst_39502);
} else {
if((state_val_39517 === (9))){
var inst_39509 = (state_39516[(2)]);
var state_39516__$1 = (function (){var statearr_39526 = state_39516;
(statearr_39526[(10)] = inst_39509);

return statearr_39526;
})();
var statearr_39527_39632 = state_39516__$1;
(statearr_39527_39632[(2)] = null);

(statearr_39527_39632[(1)] = (2));


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
});})(c__31946__auto___39626,jobs,results,process,async))
;
return ((function (switch__31858__auto__,c__31946__auto___39626,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____0 = (function (){
var statearr_39528 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39528[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__);

(statearr_39528[(1)] = (1));

return statearr_39528;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____1 = (function (state_39516){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_39516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e39529){if((e39529 instanceof Object)){
var ex__31862__auto__ = e39529;
var statearr_39530_39633 = state_39516;
(statearr_39530_39633[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39634 = state_39516;
state_39516 = G__39634;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__ = function(state_39516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____1.call(this,state_39516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___39626,jobs,results,process,async))
})();
var state__31948__auto__ = (function (){var statearr_39531 = f__31947__auto__.call(null);
(statearr_39531[(6)] = c__31946__auto___39626);

return statearr_39531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___39626,jobs,results,process,async))
);


var c__31946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto__,jobs,results,process,async){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto__,jobs,results,process,async){
return (function (state_39569){
var state_val_39570 = (state_39569[(1)]);
if((state_val_39570 === (7))){
var inst_39565 = (state_39569[(2)]);
var state_39569__$1 = state_39569;
var statearr_39571_39635 = state_39569__$1;
(statearr_39571_39635[(2)] = inst_39565);

(statearr_39571_39635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39570 === (20))){
var state_39569__$1 = state_39569;
var statearr_39572_39636 = state_39569__$1;
(statearr_39572_39636[(2)] = null);

(statearr_39572_39636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39570 === (1))){
var state_39569__$1 = state_39569;
var statearr_39573_39637 = state_39569__$1;
(statearr_39573_39637[(2)] = null);

(statearr_39573_39637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39570 === (4))){
var inst_39534 = (state_39569[(7)]);
var inst_39534__$1 = (state_39569[(2)]);
var inst_39535 = (inst_39534__$1 == null);
var state_39569__$1 = (function (){var statearr_39574 = state_39569;
(statearr_39574[(7)] = inst_39534__$1);

return statearr_39574;
})();
if(cljs.core.truth_(inst_39535)){
var statearr_39575_39638 = state_39569__$1;
(statearr_39575_39638[(1)] = (5));

} else {
var statearr_39576_39639 = state_39569__$1;
(statearr_39576_39639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39570 === (15))){
var inst_39547 = (state_39569[(8)]);
var state_39569__$1 = state_39569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39569__$1,(18),to,inst_39547);
} else {
if((state_val_39570 === (21))){
var inst_39560 = (state_39569[(2)]);
var state_39569__$1 = state_39569;
var statearr_39577_39640 = state_39569__$1;
(statearr_39577_39640[(2)] = inst_39560);

(statearr_39577_39640[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39570 === (13))){
var inst_39562 = (state_39569[(2)]);
var state_39569__$1 = (function (){var statearr_39578 = state_39569;
(statearr_39578[(9)] = inst_39562);

return statearr_39578;
})();
var statearr_39579_39641 = state_39569__$1;
(statearr_39579_39641[(2)] = null);

(statearr_39579_39641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39570 === (6))){
var inst_39534 = (state_39569[(7)]);
var state_39569__$1 = state_39569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39569__$1,(11),inst_39534);
} else {
if((state_val_39570 === (17))){
var inst_39555 = (state_39569[(2)]);
var state_39569__$1 = state_39569;
if(cljs.core.truth_(inst_39555)){
var statearr_39580_39642 = state_39569__$1;
(statearr_39580_39642[(1)] = (19));

} else {
var statearr_39581_39643 = state_39569__$1;
(statearr_39581_39643[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39570 === (3))){
var inst_39567 = (state_39569[(2)]);
var state_39569__$1 = state_39569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39569__$1,inst_39567);
} else {
if((state_val_39570 === (12))){
var inst_39544 = (state_39569[(10)]);
var state_39569__$1 = state_39569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39569__$1,(14),inst_39544);
} else {
if((state_val_39570 === (2))){
var state_39569__$1 = state_39569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39569__$1,(4),results);
} else {
if((state_val_39570 === (19))){
var state_39569__$1 = state_39569;
var statearr_39582_39644 = state_39569__$1;
(statearr_39582_39644[(2)] = null);

(statearr_39582_39644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39570 === (11))){
var inst_39544 = (state_39569[(2)]);
var state_39569__$1 = (function (){var statearr_39583 = state_39569;
(statearr_39583[(10)] = inst_39544);

return statearr_39583;
})();
var statearr_39584_39645 = state_39569__$1;
(statearr_39584_39645[(2)] = null);

(statearr_39584_39645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39570 === (9))){
var state_39569__$1 = state_39569;
var statearr_39585_39646 = state_39569__$1;
(statearr_39585_39646[(2)] = null);

(statearr_39585_39646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39570 === (5))){
var state_39569__$1 = state_39569;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39586_39647 = state_39569__$1;
(statearr_39586_39647[(1)] = (8));

} else {
var statearr_39587_39648 = state_39569__$1;
(statearr_39587_39648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39570 === (14))){
var inst_39547 = (state_39569[(8)]);
var inst_39549 = (state_39569[(11)]);
var inst_39547__$1 = (state_39569[(2)]);
var inst_39548 = (inst_39547__$1 == null);
var inst_39549__$1 = cljs.core.not.call(null,inst_39548);
var state_39569__$1 = (function (){var statearr_39588 = state_39569;
(statearr_39588[(8)] = inst_39547__$1);

(statearr_39588[(11)] = inst_39549__$1);

return statearr_39588;
})();
if(inst_39549__$1){
var statearr_39589_39649 = state_39569__$1;
(statearr_39589_39649[(1)] = (15));

} else {
var statearr_39590_39650 = state_39569__$1;
(statearr_39590_39650[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39570 === (16))){
var inst_39549 = (state_39569[(11)]);
var state_39569__$1 = state_39569;
var statearr_39591_39651 = state_39569__$1;
(statearr_39591_39651[(2)] = inst_39549);

(statearr_39591_39651[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39570 === (10))){
var inst_39541 = (state_39569[(2)]);
var state_39569__$1 = state_39569;
var statearr_39592_39652 = state_39569__$1;
(statearr_39592_39652[(2)] = inst_39541);

(statearr_39592_39652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39570 === (18))){
var inst_39552 = (state_39569[(2)]);
var state_39569__$1 = state_39569;
var statearr_39593_39653 = state_39569__$1;
(statearr_39593_39653[(2)] = inst_39552);

(statearr_39593_39653[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39570 === (8))){
var inst_39538 = cljs.core.async.close_BANG_.call(null,to);
var state_39569__$1 = state_39569;
var statearr_39594_39654 = state_39569__$1;
(statearr_39594_39654[(2)] = inst_39538);

(statearr_39594_39654[(1)] = (10));


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
});})(c__31946__auto__,jobs,results,process,async))
;
return ((function (switch__31858__auto__,c__31946__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____0 = (function (){
var statearr_39595 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39595[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__);

(statearr_39595[(1)] = (1));

return statearr_39595;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____1 = (function (state_39569){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_39569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e39596){if((e39596 instanceof Object)){
var ex__31862__auto__ = e39596;
var statearr_39597_39655 = state_39569;
(statearr_39597_39655[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39656 = state_39569;
state_39569 = G__39656;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__ = function(state_39569){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____1.call(this,state_39569);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto__,jobs,results,process,async))
})();
var state__31948__auto__ = (function (){var statearr_39598 = f__31947__auto__.call(null);
(statearr_39598[(6)] = c__31946__auto__);

return statearr_39598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto__,jobs,results,process,async))
);

return c__31946__auto__;
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
var G__39658 = arguments.length;
switch (G__39658) {
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
var G__39661 = arguments.length;
switch (G__39661) {
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
var G__39664 = arguments.length;
switch (G__39664) {
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
var c__31946__auto___39713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___39713,tc,fc){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___39713,tc,fc){
return (function (state_39690){
var state_val_39691 = (state_39690[(1)]);
if((state_val_39691 === (7))){
var inst_39686 = (state_39690[(2)]);
var state_39690__$1 = state_39690;
var statearr_39692_39714 = state_39690__$1;
(statearr_39692_39714[(2)] = inst_39686);

(statearr_39692_39714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39691 === (1))){
var state_39690__$1 = state_39690;
var statearr_39693_39715 = state_39690__$1;
(statearr_39693_39715[(2)] = null);

(statearr_39693_39715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39691 === (4))){
var inst_39667 = (state_39690[(7)]);
var inst_39667__$1 = (state_39690[(2)]);
var inst_39668 = (inst_39667__$1 == null);
var state_39690__$1 = (function (){var statearr_39694 = state_39690;
(statearr_39694[(7)] = inst_39667__$1);

return statearr_39694;
})();
if(cljs.core.truth_(inst_39668)){
var statearr_39695_39716 = state_39690__$1;
(statearr_39695_39716[(1)] = (5));

} else {
var statearr_39696_39717 = state_39690__$1;
(statearr_39696_39717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39691 === (13))){
var state_39690__$1 = state_39690;
var statearr_39697_39718 = state_39690__$1;
(statearr_39697_39718[(2)] = null);

(statearr_39697_39718[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39691 === (6))){
var inst_39667 = (state_39690[(7)]);
var inst_39673 = p.call(null,inst_39667);
var state_39690__$1 = state_39690;
if(cljs.core.truth_(inst_39673)){
var statearr_39698_39719 = state_39690__$1;
(statearr_39698_39719[(1)] = (9));

} else {
var statearr_39699_39720 = state_39690__$1;
(statearr_39699_39720[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39691 === (3))){
var inst_39688 = (state_39690[(2)]);
var state_39690__$1 = state_39690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39690__$1,inst_39688);
} else {
if((state_val_39691 === (12))){
var state_39690__$1 = state_39690;
var statearr_39700_39721 = state_39690__$1;
(statearr_39700_39721[(2)] = null);

(statearr_39700_39721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39691 === (2))){
var state_39690__$1 = state_39690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39690__$1,(4),ch);
} else {
if((state_val_39691 === (11))){
var inst_39667 = (state_39690[(7)]);
var inst_39677 = (state_39690[(2)]);
var state_39690__$1 = state_39690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39690__$1,(8),inst_39677,inst_39667);
} else {
if((state_val_39691 === (9))){
var state_39690__$1 = state_39690;
var statearr_39701_39722 = state_39690__$1;
(statearr_39701_39722[(2)] = tc);

(statearr_39701_39722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39691 === (5))){
var inst_39670 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39671 = cljs.core.async.close_BANG_.call(null,fc);
var state_39690__$1 = (function (){var statearr_39702 = state_39690;
(statearr_39702[(8)] = inst_39670);

return statearr_39702;
})();
var statearr_39703_39723 = state_39690__$1;
(statearr_39703_39723[(2)] = inst_39671);

(statearr_39703_39723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39691 === (14))){
var inst_39684 = (state_39690[(2)]);
var state_39690__$1 = state_39690;
var statearr_39704_39724 = state_39690__$1;
(statearr_39704_39724[(2)] = inst_39684);

(statearr_39704_39724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39691 === (10))){
var state_39690__$1 = state_39690;
var statearr_39705_39725 = state_39690__$1;
(statearr_39705_39725[(2)] = fc);

(statearr_39705_39725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39691 === (8))){
var inst_39679 = (state_39690[(2)]);
var state_39690__$1 = state_39690;
if(cljs.core.truth_(inst_39679)){
var statearr_39706_39726 = state_39690__$1;
(statearr_39706_39726[(1)] = (12));

} else {
var statearr_39707_39727 = state_39690__$1;
(statearr_39707_39727[(1)] = (13));

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
});})(c__31946__auto___39713,tc,fc))
;
return ((function (switch__31858__auto__,c__31946__auto___39713,tc,fc){
return (function() {
var cljs$core$async$state_machine__31859__auto__ = null;
var cljs$core$async$state_machine__31859__auto____0 = (function (){
var statearr_39708 = [null,null,null,null,null,null,null,null,null];
(statearr_39708[(0)] = cljs$core$async$state_machine__31859__auto__);

(statearr_39708[(1)] = (1));

return statearr_39708;
});
var cljs$core$async$state_machine__31859__auto____1 = (function (state_39690){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_39690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e39709){if((e39709 instanceof Object)){
var ex__31862__auto__ = e39709;
var statearr_39710_39728 = state_39690;
(statearr_39710_39728[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39729 = state_39690;
state_39690 = G__39729;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$state_machine__31859__auto__ = function(state_39690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31859__auto____1.call(this,state_39690);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31859__auto____0;
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31859__auto____1;
return cljs$core$async$state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___39713,tc,fc))
})();
var state__31948__auto__ = (function (){var statearr_39711 = f__31947__auto__.call(null);
(statearr_39711[(6)] = c__31946__auto___39713);

return statearr_39711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___39713,tc,fc))
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
var c__31946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto__){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto__){
return (function (state_39750){
var state_val_39751 = (state_39750[(1)]);
if((state_val_39751 === (7))){
var inst_39746 = (state_39750[(2)]);
var state_39750__$1 = state_39750;
var statearr_39752_39770 = state_39750__$1;
(statearr_39752_39770[(2)] = inst_39746);

(statearr_39752_39770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (1))){
var inst_39730 = init;
var state_39750__$1 = (function (){var statearr_39753 = state_39750;
(statearr_39753[(7)] = inst_39730);

return statearr_39753;
})();
var statearr_39754_39771 = state_39750__$1;
(statearr_39754_39771[(2)] = null);

(statearr_39754_39771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (4))){
var inst_39733 = (state_39750[(8)]);
var inst_39733__$1 = (state_39750[(2)]);
var inst_39734 = (inst_39733__$1 == null);
var state_39750__$1 = (function (){var statearr_39755 = state_39750;
(statearr_39755[(8)] = inst_39733__$1);

return statearr_39755;
})();
if(cljs.core.truth_(inst_39734)){
var statearr_39756_39772 = state_39750__$1;
(statearr_39756_39772[(1)] = (5));

} else {
var statearr_39757_39773 = state_39750__$1;
(statearr_39757_39773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (6))){
var inst_39737 = (state_39750[(9)]);
var inst_39730 = (state_39750[(7)]);
var inst_39733 = (state_39750[(8)]);
var inst_39737__$1 = f.call(null,inst_39730,inst_39733);
var inst_39738 = cljs.core.reduced_QMARK_.call(null,inst_39737__$1);
var state_39750__$1 = (function (){var statearr_39758 = state_39750;
(statearr_39758[(9)] = inst_39737__$1);

return statearr_39758;
})();
if(inst_39738){
var statearr_39759_39774 = state_39750__$1;
(statearr_39759_39774[(1)] = (8));

} else {
var statearr_39760_39775 = state_39750__$1;
(statearr_39760_39775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (3))){
var inst_39748 = (state_39750[(2)]);
var state_39750__$1 = state_39750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39750__$1,inst_39748);
} else {
if((state_val_39751 === (2))){
var state_39750__$1 = state_39750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39750__$1,(4),ch);
} else {
if((state_val_39751 === (9))){
var inst_39737 = (state_39750[(9)]);
var inst_39730 = inst_39737;
var state_39750__$1 = (function (){var statearr_39761 = state_39750;
(statearr_39761[(7)] = inst_39730);

return statearr_39761;
})();
var statearr_39762_39776 = state_39750__$1;
(statearr_39762_39776[(2)] = null);

(statearr_39762_39776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (5))){
var inst_39730 = (state_39750[(7)]);
var state_39750__$1 = state_39750;
var statearr_39763_39777 = state_39750__$1;
(statearr_39763_39777[(2)] = inst_39730);

(statearr_39763_39777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (10))){
var inst_39744 = (state_39750[(2)]);
var state_39750__$1 = state_39750;
var statearr_39764_39778 = state_39750__$1;
(statearr_39764_39778[(2)] = inst_39744);

(statearr_39764_39778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39751 === (8))){
var inst_39737 = (state_39750[(9)]);
var inst_39740 = cljs.core.deref.call(null,inst_39737);
var state_39750__$1 = state_39750;
var statearr_39765_39779 = state_39750__$1;
(statearr_39765_39779[(2)] = inst_39740);

(statearr_39765_39779[(1)] = (10));


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
});})(c__31946__auto__))
;
return ((function (switch__31858__auto__,c__31946__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31859__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31859__auto____0 = (function (){
var statearr_39766 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39766[(0)] = cljs$core$async$reduce_$_state_machine__31859__auto__);

(statearr_39766[(1)] = (1));

return statearr_39766;
});
var cljs$core$async$reduce_$_state_machine__31859__auto____1 = (function (state_39750){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_39750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e39767){if((e39767 instanceof Object)){
var ex__31862__auto__ = e39767;
var statearr_39768_39780 = state_39750;
(statearr_39768_39780[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39781 = state_39750;
state_39750 = G__39781;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31859__auto__ = function(state_39750){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31859__auto____1.call(this,state_39750);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31859__auto____0;
cljs$core$async$reduce_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31859__auto____1;
return cljs$core$async$reduce_$_state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto__))
})();
var state__31948__auto__ = (function (){var statearr_39769 = f__31947__auto__.call(null);
(statearr_39769[(6)] = c__31946__auto__);

return statearr_39769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto__))
);

return c__31946__auto__;
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
var G__39783 = arguments.length;
switch (G__39783) {
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
var c__31946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto__){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto__){
return (function (state_39808){
var state_val_39809 = (state_39808[(1)]);
if((state_val_39809 === (7))){
var inst_39790 = (state_39808[(2)]);
var state_39808__$1 = state_39808;
var statearr_39810_39831 = state_39808__$1;
(statearr_39810_39831[(2)] = inst_39790);

(statearr_39810_39831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (1))){
var inst_39784 = cljs.core.seq.call(null,coll);
var inst_39785 = inst_39784;
var state_39808__$1 = (function (){var statearr_39811 = state_39808;
(statearr_39811[(7)] = inst_39785);

return statearr_39811;
})();
var statearr_39812_39832 = state_39808__$1;
(statearr_39812_39832[(2)] = null);

(statearr_39812_39832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (4))){
var inst_39785 = (state_39808[(7)]);
var inst_39788 = cljs.core.first.call(null,inst_39785);
var state_39808__$1 = state_39808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39808__$1,(7),ch,inst_39788);
} else {
if((state_val_39809 === (13))){
var inst_39802 = (state_39808[(2)]);
var state_39808__$1 = state_39808;
var statearr_39813_39833 = state_39808__$1;
(statearr_39813_39833[(2)] = inst_39802);

(statearr_39813_39833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (6))){
var inst_39793 = (state_39808[(2)]);
var state_39808__$1 = state_39808;
if(cljs.core.truth_(inst_39793)){
var statearr_39814_39834 = state_39808__$1;
(statearr_39814_39834[(1)] = (8));

} else {
var statearr_39815_39835 = state_39808__$1;
(statearr_39815_39835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (3))){
var inst_39806 = (state_39808[(2)]);
var state_39808__$1 = state_39808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39808__$1,inst_39806);
} else {
if((state_val_39809 === (12))){
var state_39808__$1 = state_39808;
var statearr_39816_39836 = state_39808__$1;
(statearr_39816_39836[(2)] = null);

(statearr_39816_39836[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (2))){
var inst_39785 = (state_39808[(7)]);
var state_39808__$1 = state_39808;
if(cljs.core.truth_(inst_39785)){
var statearr_39817_39837 = state_39808__$1;
(statearr_39817_39837[(1)] = (4));

} else {
var statearr_39818_39838 = state_39808__$1;
(statearr_39818_39838[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (11))){
var inst_39799 = cljs.core.async.close_BANG_.call(null,ch);
var state_39808__$1 = state_39808;
var statearr_39819_39839 = state_39808__$1;
(statearr_39819_39839[(2)] = inst_39799);

(statearr_39819_39839[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (9))){
var state_39808__$1 = state_39808;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39820_39840 = state_39808__$1;
(statearr_39820_39840[(1)] = (11));

} else {
var statearr_39821_39841 = state_39808__$1;
(statearr_39821_39841[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (5))){
var inst_39785 = (state_39808[(7)]);
var state_39808__$1 = state_39808;
var statearr_39822_39842 = state_39808__$1;
(statearr_39822_39842[(2)] = inst_39785);

(statearr_39822_39842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (10))){
var inst_39804 = (state_39808[(2)]);
var state_39808__$1 = state_39808;
var statearr_39823_39843 = state_39808__$1;
(statearr_39823_39843[(2)] = inst_39804);

(statearr_39823_39843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39809 === (8))){
var inst_39785 = (state_39808[(7)]);
var inst_39795 = cljs.core.next.call(null,inst_39785);
var inst_39785__$1 = inst_39795;
var state_39808__$1 = (function (){var statearr_39824 = state_39808;
(statearr_39824[(7)] = inst_39785__$1);

return statearr_39824;
})();
var statearr_39825_39844 = state_39808__$1;
(statearr_39825_39844[(2)] = null);

(statearr_39825_39844[(1)] = (2));


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
});})(c__31946__auto__))
;
return ((function (switch__31858__auto__,c__31946__auto__){
return (function() {
var cljs$core$async$state_machine__31859__auto__ = null;
var cljs$core$async$state_machine__31859__auto____0 = (function (){
var statearr_39826 = [null,null,null,null,null,null,null,null];
(statearr_39826[(0)] = cljs$core$async$state_machine__31859__auto__);

(statearr_39826[(1)] = (1));

return statearr_39826;
});
var cljs$core$async$state_machine__31859__auto____1 = (function (state_39808){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_39808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e39827){if((e39827 instanceof Object)){
var ex__31862__auto__ = e39827;
var statearr_39828_39845 = state_39808;
(statearr_39828_39845[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39846 = state_39808;
state_39808 = G__39846;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$state_machine__31859__auto__ = function(state_39808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31859__auto____1.call(this,state_39808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31859__auto____0;
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31859__auto____1;
return cljs$core$async$state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto__))
})();
var state__31948__auto__ = (function (){var statearr_39829 = f__31947__auto__.call(null);
(statearr_39829[(6)] = c__31946__auto__);

return statearr_39829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto__))
);

return c__31946__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async39847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39847 = (function (ch,cs,meta39848){
this.ch = ch;
this.cs = cs;
this.meta39848 = meta39848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39849,meta39848__$1){
var self__ = this;
var _39849__$1 = this;
return (new cljs.core.async.t_cljs$core$async39847(self__.ch,self__.cs,meta39848__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39849){
var self__ = this;
var _39849__$1 = this;
return self__.meta39848;
});})(cs))
;

cljs.core.async.t_cljs$core$async39847.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39847.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39847.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39847.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39847.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39847.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39848","meta39848",-352703964,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39847";

cljs.core.async.t_cljs$core$async39847.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39847");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39847 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39847(ch__$1,cs__$1,meta39848){
return (new cljs.core.async.t_cljs$core$async39847(ch__$1,cs__$1,meta39848));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39847(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31946__auto___40069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___40069,cs,m,dchan,dctr,done){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___40069,cs,m,dchan,dctr,done){
return (function (state_39984){
var state_val_39985 = (state_39984[(1)]);
if((state_val_39985 === (7))){
var inst_39980 = (state_39984[(2)]);
var state_39984__$1 = state_39984;
var statearr_39986_40070 = state_39984__$1;
(statearr_39986_40070[(2)] = inst_39980);

(statearr_39986_40070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (20))){
var inst_39883 = (state_39984[(7)]);
var inst_39895 = cljs.core.first.call(null,inst_39883);
var inst_39896 = cljs.core.nth.call(null,inst_39895,(0),null);
var inst_39897 = cljs.core.nth.call(null,inst_39895,(1),null);
var state_39984__$1 = (function (){var statearr_39987 = state_39984;
(statearr_39987[(8)] = inst_39896);

return statearr_39987;
})();
if(cljs.core.truth_(inst_39897)){
var statearr_39988_40071 = state_39984__$1;
(statearr_39988_40071[(1)] = (22));

} else {
var statearr_39989_40072 = state_39984__$1;
(statearr_39989_40072[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (27))){
var inst_39927 = (state_39984[(9)]);
var inst_39925 = (state_39984[(10)]);
var inst_39932 = (state_39984[(11)]);
var inst_39852 = (state_39984[(12)]);
var inst_39932__$1 = cljs.core._nth.call(null,inst_39925,inst_39927);
var inst_39933 = cljs.core.async.put_BANG_.call(null,inst_39932__$1,inst_39852,done);
var state_39984__$1 = (function (){var statearr_39990 = state_39984;
(statearr_39990[(11)] = inst_39932__$1);

return statearr_39990;
})();
if(cljs.core.truth_(inst_39933)){
var statearr_39991_40073 = state_39984__$1;
(statearr_39991_40073[(1)] = (30));

} else {
var statearr_39992_40074 = state_39984__$1;
(statearr_39992_40074[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (1))){
var state_39984__$1 = state_39984;
var statearr_39993_40075 = state_39984__$1;
(statearr_39993_40075[(2)] = null);

(statearr_39993_40075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (24))){
var inst_39883 = (state_39984[(7)]);
var inst_39902 = (state_39984[(2)]);
var inst_39903 = cljs.core.next.call(null,inst_39883);
var inst_39861 = inst_39903;
var inst_39862 = null;
var inst_39863 = (0);
var inst_39864 = (0);
var state_39984__$1 = (function (){var statearr_39994 = state_39984;
(statearr_39994[(13)] = inst_39863);

(statearr_39994[(14)] = inst_39864);

(statearr_39994[(15)] = inst_39902);

(statearr_39994[(16)] = inst_39862);

(statearr_39994[(17)] = inst_39861);

return statearr_39994;
})();
var statearr_39995_40076 = state_39984__$1;
(statearr_39995_40076[(2)] = null);

(statearr_39995_40076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (39))){
var state_39984__$1 = state_39984;
var statearr_39999_40077 = state_39984__$1;
(statearr_39999_40077[(2)] = null);

(statearr_39999_40077[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (4))){
var inst_39852 = (state_39984[(12)]);
var inst_39852__$1 = (state_39984[(2)]);
var inst_39853 = (inst_39852__$1 == null);
var state_39984__$1 = (function (){var statearr_40000 = state_39984;
(statearr_40000[(12)] = inst_39852__$1);

return statearr_40000;
})();
if(cljs.core.truth_(inst_39853)){
var statearr_40001_40078 = state_39984__$1;
(statearr_40001_40078[(1)] = (5));

} else {
var statearr_40002_40079 = state_39984__$1;
(statearr_40002_40079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (15))){
var inst_39863 = (state_39984[(13)]);
var inst_39864 = (state_39984[(14)]);
var inst_39862 = (state_39984[(16)]);
var inst_39861 = (state_39984[(17)]);
var inst_39879 = (state_39984[(2)]);
var inst_39880 = (inst_39864 + (1));
var tmp39996 = inst_39863;
var tmp39997 = inst_39862;
var tmp39998 = inst_39861;
var inst_39861__$1 = tmp39998;
var inst_39862__$1 = tmp39997;
var inst_39863__$1 = tmp39996;
var inst_39864__$1 = inst_39880;
var state_39984__$1 = (function (){var statearr_40003 = state_39984;
(statearr_40003[(13)] = inst_39863__$1);

(statearr_40003[(14)] = inst_39864__$1);

(statearr_40003[(18)] = inst_39879);

(statearr_40003[(16)] = inst_39862__$1);

(statearr_40003[(17)] = inst_39861__$1);

return statearr_40003;
})();
var statearr_40004_40080 = state_39984__$1;
(statearr_40004_40080[(2)] = null);

(statearr_40004_40080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (21))){
var inst_39906 = (state_39984[(2)]);
var state_39984__$1 = state_39984;
var statearr_40008_40081 = state_39984__$1;
(statearr_40008_40081[(2)] = inst_39906);

(statearr_40008_40081[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (31))){
var inst_39932 = (state_39984[(11)]);
var inst_39936 = done.call(null,null);
var inst_39937 = cljs.core.async.untap_STAR_.call(null,m,inst_39932);
var state_39984__$1 = (function (){var statearr_40009 = state_39984;
(statearr_40009[(19)] = inst_39936);

return statearr_40009;
})();
var statearr_40010_40082 = state_39984__$1;
(statearr_40010_40082[(2)] = inst_39937);

(statearr_40010_40082[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (32))){
var inst_39924 = (state_39984[(20)]);
var inst_39927 = (state_39984[(9)]);
var inst_39925 = (state_39984[(10)]);
var inst_39926 = (state_39984[(21)]);
var inst_39939 = (state_39984[(2)]);
var inst_39940 = (inst_39927 + (1));
var tmp40005 = inst_39924;
var tmp40006 = inst_39925;
var tmp40007 = inst_39926;
var inst_39924__$1 = tmp40005;
var inst_39925__$1 = tmp40006;
var inst_39926__$1 = tmp40007;
var inst_39927__$1 = inst_39940;
var state_39984__$1 = (function (){var statearr_40011 = state_39984;
(statearr_40011[(20)] = inst_39924__$1);

(statearr_40011[(9)] = inst_39927__$1);

(statearr_40011[(22)] = inst_39939);

(statearr_40011[(10)] = inst_39925__$1);

(statearr_40011[(21)] = inst_39926__$1);

return statearr_40011;
})();
var statearr_40012_40083 = state_39984__$1;
(statearr_40012_40083[(2)] = null);

(statearr_40012_40083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (40))){
var inst_39952 = (state_39984[(23)]);
var inst_39956 = done.call(null,null);
var inst_39957 = cljs.core.async.untap_STAR_.call(null,m,inst_39952);
var state_39984__$1 = (function (){var statearr_40013 = state_39984;
(statearr_40013[(24)] = inst_39956);

return statearr_40013;
})();
var statearr_40014_40084 = state_39984__$1;
(statearr_40014_40084[(2)] = inst_39957);

(statearr_40014_40084[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (33))){
var inst_39943 = (state_39984[(25)]);
var inst_39945 = cljs.core.chunked_seq_QMARK_.call(null,inst_39943);
var state_39984__$1 = state_39984;
if(inst_39945){
var statearr_40015_40085 = state_39984__$1;
(statearr_40015_40085[(1)] = (36));

} else {
var statearr_40016_40086 = state_39984__$1;
(statearr_40016_40086[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (13))){
var inst_39873 = (state_39984[(26)]);
var inst_39876 = cljs.core.async.close_BANG_.call(null,inst_39873);
var state_39984__$1 = state_39984;
var statearr_40017_40087 = state_39984__$1;
(statearr_40017_40087[(2)] = inst_39876);

(statearr_40017_40087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (22))){
var inst_39896 = (state_39984[(8)]);
var inst_39899 = cljs.core.async.close_BANG_.call(null,inst_39896);
var state_39984__$1 = state_39984;
var statearr_40018_40088 = state_39984__$1;
(statearr_40018_40088[(2)] = inst_39899);

(statearr_40018_40088[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (36))){
var inst_39943 = (state_39984[(25)]);
var inst_39947 = cljs.core.chunk_first.call(null,inst_39943);
var inst_39948 = cljs.core.chunk_rest.call(null,inst_39943);
var inst_39949 = cljs.core.count.call(null,inst_39947);
var inst_39924 = inst_39948;
var inst_39925 = inst_39947;
var inst_39926 = inst_39949;
var inst_39927 = (0);
var state_39984__$1 = (function (){var statearr_40019 = state_39984;
(statearr_40019[(20)] = inst_39924);

(statearr_40019[(9)] = inst_39927);

(statearr_40019[(10)] = inst_39925);

(statearr_40019[(21)] = inst_39926);

return statearr_40019;
})();
var statearr_40020_40089 = state_39984__$1;
(statearr_40020_40089[(2)] = null);

(statearr_40020_40089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (41))){
var inst_39943 = (state_39984[(25)]);
var inst_39959 = (state_39984[(2)]);
var inst_39960 = cljs.core.next.call(null,inst_39943);
var inst_39924 = inst_39960;
var inst_39925 = null;
var inst_39926 = (0);
var inst_39927 = (0);
var state_39984__$1 = (function (){var statearr_40021 = state_39984;
(statearr_40021[(20)] = inst_39924);

(statearr_40021[(9)] = inst_39927);

(statearr_40021[(10)] = inst_39925);

(statearr_40021[(27)] = inst_39959);

(statearr_40021[(21)] = inst_39926);

return statearr_40021;
})();
var statearr_40022_40090 = state_39984__$1;
(statearr_40022_40090[(2)] = null);

(statearr_40022_40090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (43))){
var state_39984__$1 = state_39984;
var statearr_40023_40091 = state_39984__$1;
(statearr_40023_40091[(2)] = null);

(statearr_40023_40091[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (29))){
var inst_39968 = (state_39984[(2)]);
var state_39984__$1 = state_39984;
var statearr_40024_40092 = state_39984__$1;
(statearr_40024_40092[(2)] = inst_39968);

(statearr_40024_40092[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (44))){
var inst_39977 = (state_39984[(2)]);
var state_39984__$1 = (function (){var statearr_40025 = state_39984;
(statearr_40025[(28)] = inst_39977);

return statearr_40025;
})();
var statearr_40026_40093 = state_39984__$1;
(statearr_40026_40093[(2)] = null);

(statearr_40026_40093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (6))){
var inst_39916 = (state_39984[(29)]);
var inst_39915 = cljs.core.deref.call(null,cs);
var inst_39916__$1 = cljs.core.keys.call(null,inst_39915);
var inst_39917 = cljs.core.count.call(null,inst_39916__$1);
var inst_39918 = cljs.core.reset_BANG_.call(null,dctr,inst_39917);
var inst_39923 = cljs.core.seq.call(null,inst_39916__$1);
var inst_39924 = inst_39923;
var inst_39925 = null;
var inst_39926 = (0);
var inst_39927 = (0);
var state_39984__$1 = (function (){var statearr_40027 = state_39984;
(statearr_40027[(20)] = inst_39924);

(statearr_40027[(9)] = inst_39927);

(statearr_40027[(10)] = inst_39925);

(statearr_40027[(30)] = inst_39918);

(statearr_40027[(29)] = inst_39916__$1);

(statearr_40027[(21)] = inst_39926);

return statearr_40027;
})();
var statearr_40028_40094 = state_39984__$1;
(statearr_40028_40094[(2)] = null);

(statearr_40028_40094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (28))){
var inst_39924 = (state_39984[(20)]);
var inst_39943 = (state_39984[(25)]);
var inst_39943__$1 = cljs.core.seq.call(null,inst_39924);
var state_39984__$1 = (function (){var statearr_40029 = state_39984;
(statearr_40029[(25)] = inst_39943__$1);

return statearr_40029;
})();
if(inst_39943__$1){
var statearr_40030_40095 = state_39984__$1;
(statearr_40030_40095[(1)] = (33));

} else {
var statearr_40031_40096 = state_39984__$1;
(statearr_40031_40096[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (25))){
var inst_39927 = (state_39984[(9)]);
var inst_39926 = (state_39984[(21)]);
var inst_39929 = (inst_39927 < inst_39926);
var inst_39930 = inst_39929;
var state_39984__$1 = state_39984;
if(cljs.core.truth_(inst_39930)){
var statearr_40032_40097 = state_39984__$1;
(statearr_40032_40097[(1)] = (27));

} else {
var statearr_40033_40098 = state_39984__$1;
(statearr_40033_40098[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (34))){
var state_39984__$1 = state_39984;
var statearr_40034_40099 = state_39984__$1;
(statearr_40034_40099[(2)] = null);

(statearr_40034_40099[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (17))){
var state_39984__$1 = state_39984;
var statearr_40035_40100 = state_39984__$1;
(statearr_40035_40100[(2)] = null);

(statearr_40035_40100[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (3))){
var inst_39982 = (state_39984[(2)]);
var state_39984__$1 = state_39984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39984__$1,inst_39982);
} else {
if((state_val_39985 === (12))){
var inst_39911 = (state_39984[(2)]);
var state_39984__$1 = state_39984;
var statearr_40036_40101 = state_39984__$1;
(statearr_40036_40101[(2)] = inst_39911);

(statearr_40036_40101[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (2))){
var state_39984__$1 = state_39984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39984__$1,(4),ch);
} else {
if((state_val_39985 === (23))){
var state_39984__$1 = state_39984;
var statearr_40037_40102 = state_39984__$1;
(statearr_40037_40102[(2)] = null);

(statearr_40037_40102[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (35))){
var inst_39966 = (state_39984[(2)]);
var state_39984__$1 = state_39984;
var statearr_40038_40103 = state_39984__$1;
(statearr_40038_40103[(2)] = inst_39966);

(statearr_40038_40103[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (19))){
var inst_39883 = (state_39984[(7)]);
var inst_39887 = cljs.core.chunk_first.call(null,inst_39883);
var inst_39888 = cljs.core.chunk_rest.call(null,inst_39883);
var inst_39889 = cljs.core.count.call(null,inst_39887);
var inst_39861 = inst_39888;
var inst_39862 = inst_39887;
var inst_39863 = inst_39889;
var inst_39864 = (0);
var state_39984__$1 = (function (){var statearr_40039 = state_39984;
(statearr_40039[(13)] = inst_39863);

(statearr_40039[(14)] = inst_39864);

(statearr_40039[(16)] = inst_39862);

(statearr_40039[(17)] = inst_39861);

return statearr_40039;
})();
var statearr_40040_40104 = state_39984__$1;
(statearr_40040_40104[(2)] = null);

(statearr_40040_40104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (11))){
var inst_39861 = (state_39984[(17)]);
var inst_39883 = (state_39984[(7)]);
var inst_39883__$1 = cljs.core.seq.call(null,inst_39861);
var state_39984__$1 = (function (){var statearr_40041 = state_39984;
(statearr_40041[(7)] = inst_39883__$1);

return statearr_40041;
})();
if(inst_39883__$1){
var statearr_40042_40105 = state_39984__$1;
(statearr_40042_40105[(1)] = (16));

} else {
var statearr_40043_40106 = state_39984__$1;
(statearr_40043_40106[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (9))){
var inst_39913 = (state_39984[(2)]);
var state_39984__$1 = state_39984;
var statearr_40044_40107 = state_39984__$1;
(statearr_40044_40107[(2)] = inst_39913);

(statearr_40044_40107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (5))){
var inst_39859 = cljs.core.deref.call(null,cs);
var inst_39860 = cljs.core.seq.call(null,inst_39859);
var inst_39861 = inst_39860;
var inst_39862 = null;
var inst_39863 = (0);
var inst_39864 = (0);
var state_39984__$1 = (function (){var statearr_40045 = state_39984;
(statearr_40045[(13)] = inst_39863);

(statearr_40045[(14)] = inst_39864);

(statearr_40045[(16)] = inst_39862);

(statearr_40045[(17)] = inst_39861);

return statearr_40045;
})();
var statearr_40046_40108 = state_39984__$1;
(statearr_40046_40108[(2)] = null);

(statearr_40046_40108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (14))){
var state_39984__$1 = state_39984;
var statearr_40047_40109 = state_39984__$1;
(statearr_40047_40109[(2)] = null);

(statearr_40047_40109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (45))){
var inst_39974 = (state_39984[(2)]);
var state_39984__$1 = state_39984;
var statearr_40048_40110 = state_39984__$1;
(statearr_40048_40110[(2)] = inst_39974);

(statearr_40048_40110[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (26))){
var inst_39916 = (state_39984[(29)]);
var inst_39970 = (state_39984[(2)]);
var inst_39971 = cljs.core.seq.call(null,inst_39916);
var state_39984__$1 = (function (){var statearr_40049 = state_39984;
(statearr_40049[(31)] = inst_39970);

return statearr_40049;
})();
if(inst_39971){
var statearr_40050_40111 = state_39984__$1;
(statearr_40050_40111[(1)] = (42));

} else {
var statearr_40051_40112 = state_39984__$1;
(statearr_40051_40112[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (16))){
var inst_39883 = (state_39984[(7)]);
var inst_39885 = cljs.core.chunked_seq_QMARK_.call(null,inst_39883);
var state_39984__$1 = state_39984;
if(inst_39885){
var statearr_40052_40113 = state_39984__$1;
(statearr_40052_40113[(1)] = (19));

} else {
var statearr_40053_40114 = state_39984__$1;
(statearr_40053_40114[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (38))){
var inst_39963 = (state_39984[(2)]);
var state_39984__$1 = state_39984;
var statearr_40054_40115 = state_39984__$1;
(statearr_40054_40115[(2)] = inst_39963);

(statearr_40054_40115[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (30))){
var state_39984__$1 = state_39984;
var statearr_40055_40116 = state_39984__$1;
(statearr_40055_40116[(2)] = null);

(statearr_40055_40116[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (10))){
var inst_39864 = (state_39984[(14)]);
var inst_39862 = (state_39984[(16)]);
var inst_39872 = cljs.core._nth.call(null,inst_39862,inst_39864);
var inst_39873 = cljs.core.nth.call(null,inst_39872,(0),null);
var inst_39874 = cljs.core.nth.call(null,inst_39872,(1),null);
var state_39984__$1 = (function (){var statearr_40056 = state_39984;
(statearr_40056[(26)] = inst_39873);

return statearr_40056;
})();
if(cljs.core.truth_(inst_39874)){
var statearr_40057_40117 = state_39984__$1;
(statearr_40057_40117[(1)] = (13));

} else {
var statearr_40058_40118 = state_39984__$1;
(statearr_40058_40118[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (18))){
var inst_39909 = (state_39984[(2)]);
var state_39984__$1 = state_39984;
var statearr_40059_40119 = state_39984__$1;
(statearr_40059_40119[(2)] = inst_39909);

(statearr_40059_40119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (42))){
var state_39984__$1 = state_39984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39984__$1,(45),dchan);
} else {
if((state_val_39985 === (37))){
var inst_39943 = (state_39984[(25)]);
var inst_39952 = (state_39984[(23)]);
var inst_39852 = (state_39984[(12)]);
var inst_39952__$1 = cljs.core.first.call(null,inst_39943);
var inst_39953 = cljs.core.async.put_BANG_.call(null,inst_39952__$1,inst_39852,done);
var state_39984__$1 = (function (){var statearr_40060 = state_39984;
(statearr_40060[(23)] = inst_39952__$1);

return statearr_40060;
})();
if(cljs.core.truth_(inst_39953)){
var statearr_40061_40120 = state_39984__$1;
(statearr_40061_40120[(1)] = (39));

} else {
var statearr_40062_40121 = state_39984__$1;
(statearr_40062_40121[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39985 === (8))){
var inst_39863 = (state_39984[(13)]);
var inst_39864 = (state_39984[(14)]);
var inst_39866 = (inst_39864 < inst_39863);
var inst_39867 = inst_39866;
var state_39984__$1 = state_39984;
if(cljs.core.truth_(inst_39867)){
var statearr_40063_40122 = state_39984__$1;
(statearr_40063_40122[(1)] = (10));

} else {
var statearr_40064_40123 = state_39984__$1;
(statearr_40064_40123[(1)] = (11));

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
});})(c__31946__auto___40069,cs,m,dchan,dctr,done))
;
return ((function (switch__31858__auto__,c__31946__auto___40069,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31859__auto__ = null;
var cljs$core$async$mult_$_state_machine__31859__auto____0 = (function (){
var statearr_40065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40065[(0)] = cljs$core$async$mult_$_state_machine__31859__auto__);

(statearr_40065[(1)] = (1));

return statearr_40065;
});
var cljs$core$async$mult_$_state_machine__31859__auto____1 = (function (state_39984){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_39984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e40066){if((e40066 instanceof Object)){
var ex__31862__auto__ = e40066;
var statearr_40067_40124 = state_39984;
(statearr_40067_40124[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40125 = state_39984;
state_39984 = G__40125;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31859__auto__ = function(state_39984){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31859__auto____1.call(this,state_39984);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31859__auto____0;
cljs$core$async$mult_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31859__auto____1;
return cljs$core$async$mult_$_state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___40069,cs,m,dchan,dctr,done))
})();
var state__31948__auto__ = (function (){var statearr_40068 = f__31947__auto__.call(null);
(statearr_40068[(6)] = c__31946__auto___40069);

return statearr_40068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___40069,cs,m,dchan,dctr,done))
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
var G__40127 = arguments.length;
switch (G__40127) {
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
var len__28364__auto___40139 = arguments.length;
var i__28365__auto___40140 = (0);
while(true){
if((i__28365__auto___40140 < len__28364__auto___40139)){
args__28371__auto__.push((arguments[i__28365__auto___40140]));

var G__40141 = (i__28365__auto___40140 + (1));
i__28365__auto___40140 = G__40141;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40133){
var map__40134 = p__40133;
var map__40134__$1 = ((((!((map__40134 == null)))?((((map__40134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40134):map__40134);
var opts = map__40134__$1;
var statearr_40136_40142 = state;
(statearr_40136_40142[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__40134,map__40134__$1,opts){
return (function (val){
var statearr_40137_40143 = state;
(statearr_40137_40143[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40134,map__40134__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_40138_40144 = state;
(statearr_40138_40144[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40129){
var G__40130 = cljs.core.first.call(null,seq40129);
var seq40129__$1 = cljs.core.next.call(null,seq40129);
var G__40131 = cljs.core.first.call(null,seq40129__$1);
var seq40129__$2 = cljs.core.next.call(null,seq40129__$1);
var G__40132 = cljs.core.first.call(null,seq40129__$2);
var seq40129__$3 = cljs.core.next.call(null,seq40129__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40130,G__40131,G__40132,seq40129__$3);
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
if(typeof cljs.core.async.t_cljs$core$async40145 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40145 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40146){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40146 = meta40146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40147,meta40146__$1){
var self__ = this;
var _40147__$1 = this;
return (new cljs.core.async.t_cljs$core$async40145(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40146__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40147){
var self__ = this;
var _40147__$1 = this;
return self__.meta40146;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40145.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40145.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40145.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40145.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40145.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40145.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40145.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40145.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async40145.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40146","meta40146",348839441,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40145.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40145";

cljs.core.async.t_cljs$core$async40145.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40145");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40145 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40145(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40146){
return (new cljs.core.async.t_cljs$core$async40145(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40146));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40145(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31946__auto___40309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___40309,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___40309,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40249){
var state_val_40250 = (state_40249[(1)]);
if((state_val_40250 === (7))){
var inst_40164 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
var statearr_40251_40310 = state_40249__$1;
(statearr_40251_40310[(2)] = inst_40164);

(statearr_40251_40310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (20))){
var inst_40176 = (state_40249[(7)]);
var state_40249__$1 = state_40249;
var statearr_40252_40311 = state_40249__$1;
(statearr_40252_40311[(2)] = inst_40176);

(statearr_40252_40311[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (27))){
var state_40249__$1 = state_40249;
var statearr_40253_40312 = state_40249__$1;
(statearr_40253_40312[(2)] = null);

(statearr_40253_40312[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (1))){
var inst_40151 = (state_40249[(8)]);
var inst_40151__$1 = calc_state.call(null);
var inst_40153 = (inst_40151__$1 == null);
var inst_40154 = cljs.core.not.call(null,inst_40153);
var state_40249__$1 = (function (){var statearr_40254 = state_40249;
(statearr_40254[(8)] = inst_40151__$1);

return statearr_40254;
})();
if(inst_40154){
var statearr_40255_40313 = state_40249__$1;
(statearr_40255_40313[(1)] = (2));

} else {
var statearr_40256_40314 = state_40249__$1;
(statearr_40256_40314[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (24))){
var inst_40200 = (state_40249[(9)]);
var inst_40223 = (state_40249[(10)]);
var inst_40209 = (state_40249[(11)]);
var inst_40223__$1 = inst_40200.call(null,inst_40209);
var state_40249__$1 = (function (){var statearr_40257 = state_40249;
(statearr_40257[(10)] = inst_40223__$1);

return statearr_40257;
})();
if(cljs.core.truth_(inst_40223__$1)){
var statearr_40258_40315 = state_40249__$1;
(statearr_40258_40315[(1)] = (29));

} else {
var statearr_40259_40316 = state_40249__$1;
(statearr_40259_40316[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (4))){
var inst_40167 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
if(cljs.core.truth_(inst_40167)){
var statearr_40260_40317 = state_40249__$1;
(statearr_40260_40317[(1)] = (8));

} else {
var statearr_40261_40318 = state_40249__$1;
(statearr_40261_40318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (15))){
var inst_40194 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
if(cljs.core.truth_(inst_40194)){
var statearr_40262_40319 = state_40249__$1;
(statearr_40262_40319[(1)] = (19));

} else {
var statearr_40263_40320 = state_40249__$1;
(statearr_40263_40320[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (21))){
var inst_40199 = (state_40249[(12)]);
var inst_40199__$1 = (state_40249[(2)]);
var inst_40200 = cljs.core.get.call(null,inst_40199__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40201 = cljs.core.get.call(null,inst_40199__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40202 = cljs.core.get.call(null,inst_40199__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40249__$1 = (function (){var statearr_40264 = state_40249;
(statearr_40264[(9)] = inst_40200);

(statearr_40264[(12)] = inst_40199__$1);

(statearr_40264[(13)] = inst_40201);

return statearr_40264;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40249__$1,(22),inst_40202);
} else {
if((state_val_40250 === (31))){
var inst_40231 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
if(cljs.core.truth_(inst_40231)){
var statearr_40265_40321 = state_40249__$1;
(statearr_40265_40321[(1)] = (32));

} else {
var statearr_40266_40322 = state_40249__$1;
(statearr_40266_40322[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (32))){
var inst_40208 = (state_40249[(14)]);
var state_40249__$1 = state_40249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40249__$1,(35),out,inst_40208);
} else {
if((state_val_40250 === (33))){
var inst_40199 = (state_40249[(12)]);
var inst_40176 = inst_40199;
var state_40249__$1 = (function (){var statearr_40267 = state_40249;
(statearr_40267[(7)] = inst_40176);

return statearr_40267;
})();
var statearr_40268_40323 = state_40249__$1;
(statearr_40268_40323[(2)] = null);

(statearr_40268_40323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (13))){
var inst_40176 = (state_40249[(7)]);
var inst_40183 = inst_40176.cljs$lang$protocol_mask$partition0$;
var inst_40184 = (inst_40183 & (64));
var inst_40185 = inst_40176.cljs$core$ISeq$;
var inst_40186 = (cljs.core.PROTOCOL_SENTINEL === inst_40185);
var inst_40187 = (inst_40184) || (inst_40186);
var state_40249__$1 = state_40249;
if(cljs.core.truth_(inst_40187)){
var statearr_40269_40324 = state_40249__$1;
(statearr_40269_40324[(1)] = (16));

} else {
var statearr_40270_40325 = state_40249__$1;
(statearr_40270_40325[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (22))){
var inst_40208 = (state_40249[(14)]);
var inst_40209 = (state_40249[(11)]);
var inst_40207 = (state_40249[(2)]);
var inst_40208__$1 = cljs.core.nth.call(null,inst_40207,(0),null);
var inst_40209__$1 = cljs.core.nth.call(null,inst_40207,(1),null);
var inst_40210 = (inst_40208__$1 == null);
var inst_40211 = cljs.core._EQ_.call(null,inst_40209__$1,change);
var inst_40212 = (inst_40210) || (inst_40211);
var state_40249__$1 = (function (){var statearr_40271 = state_40249;
(statearr_40271[(14)] = inst_40208__$1);

(statearr_40271[(11)] = inst_40209__$1);

return statearr_40271;
})();
if(cljs.core.truth_(inst_40212)){
var statearr_40272_40326 = state_40249__$1;
(statearr_40272_40326[(1)] = (23));

} else {
var statearr_40273_40327 = state_40249__$1;
(statearr_40273_40327[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (36))){
var inst_40199 = (state_40249[(12)]);
var inst_40176 = inst_40199;
var state_40249__$1 = (function (){var statearr_40274 = state_40249;
(statearr_40274[(7)] = inst_40176);

return statearr_40274;
})();
var statearr_40275_40328 = state_40249__$1;
(statearr_40275_40328[(2)] = null);

(statearr_40275_40328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (29))){
var inst_40223 = (state_40249[(10)]);
var state_40249__$1 = state_40249;
var statearr_40276_40329 = state_40249__$1;
(statearr_40276_40329[(2)] = inst_40223);

(statearr_40276_40329[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (6))){
var state_40249__$1 = state_40249;
var statearr_40277_40330 = state_40249__$1;
(statearr_40277_40330[(2)] = false);

(statearr_40277_40330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (28))){
var inst_40219 = (state_40249[(2)]);
var inst_40220 = calc_state.call(null);
var inst_40176 = inst_40220;
var state_40249__$1 = (function (){var statearr_40278 = state_40249;
(statearr_40278[(15)] = inst_40219);

(statearr_40278[(7)] = inst_40176);

return statearr_40278;
})();
var statearr_40279_40331 = state_40249__$1;
(statearr_40279_40331[(2)] = null);

(statearr_40279_40331[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (25))){
var inst_40245 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
var statearr_40280_40332 = state_40249__$1;
(statearr_40280_40332[(2)] = inst_40245);

(statearr_40280_40332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (34))){
var inst_40243 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
var statearr_40281_40333 = state_40249__$1;
(statearr_40281_40333[(2)] = inst_40243);

(statearr_40281_40333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (17))){
var state_40249__$1 = state_40249;
var statearr_40282_40334 = state_40249__$1;
(statearr_40282_40334[(2)] = false);

(statearr_40282_40334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (3))){
var state_40249__$1 = state_40249;
var statearr_40283_40335 = state_40249__$1;
(statearr_40283_40335[(2)] = false);

(statearr_40283_40335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (12))){
var inst_40247 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40249__$1,inst_40247);
} else {
if((state_val_40250 === (2))){
var inst_40151 = (state_40249[(8)]);
var inst_40156 = inst_40151.cljs$lang$protocol_mask$partition0$;
var inst_40157 = (inst_40156 & (64));
var inst_40158 = inst_40151.cljs$core$ISeq$;
var inst_40159 = (cljs.core.PROTOCOL_SENTINEL === inst_40158);
var inst_40160 = (inst_40157) || (inst_40159);
var state_40249__$1 = state_40249;
if(cljs.core.truth_(inst_40160)){
var statearr_40284_40336 = state_40249__$1;
(statearr_40284_40336[(1)] = (5));

} else {
var statearr_40285_40337 = state_40249__$1;
(statearr_40285_40337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (23))){
var inst_40208 = (state_40249[(14)]);
var inst_40214 = (inst_40208 == null);
var state_40249__$1 = state_40249;
if(cljs.core.truth_(inst_40214)){
var statearr_40286_40338 = state_40249__$1;
(statearr_40286_40338[(1)] = (26));

} else {
var statearr_40287_40339 = state_40249__$1;
(statearr_40287_40339[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (35))){
var inst_40234 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
if(cljs.core.truth_(inst_40234)){
var statearr_40288_40340 = state_40249__$1;
(statearr_40288_40340[(1)] = (36));

} else {
var statearr_40289_40341 = state_40249__$1;
(statearr_40289_40341[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (19))){
var inst_40176 = (state_40249[(7)]);
var inst_40196 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40176);
var state_40249__$1 = state_40249;
var statearr_40290_40342 = state_40249__$1;
(statearr_40290_40342[(2)] = inst_40196);

(statearr_40290_40342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (11))){
var inst_40176 = (state_40249[(7)]);
var inst_40180 = (inst_40176 == null);
var inst_40181 = cljs.core.not.call(null,inst_40180);
var state_40249__$1 = state_40249;
if(inst_40181){
var statearr_40291_40343 = state_40249__$1;
(statearr_40291_40343[(1)] = (13));

} else {
var statearr_40292_40344 = state_40249__$1;
(statearr_40292_40344[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (9))){
var inst_40151 = (state_40249[(8)]);
var state_40249__$1 = state_40249;
var statearr_40293_40345 = state_40249__$1;
(statearr_40293_40345[(2)] = inst_40151);

(statearr_40293_40345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (5))){
var state_40249__$1 = state_40249;
var statearr_40294_40346 = state_40249__$1;
(statearr_40294_40346[(2)] = true);

(statearr_40294_40346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (14))){
var state_40249__$1 = state_40249;
var statearr_40295_40347 = state_40249__$1;
(statearr_40295_40347[(2)] = false);

(statearr_40295_40347[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (26))){
var inst_40209 = (state_40249[(11)]);
var inst_40216 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40209);
var state_40249__$1 = state_40249;
var statearr_40296_40348 = state_40249__$1;
(statearr_40296_40348[(2)] = inst_40216);

(statearr_40296_40348[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (16))){
var state_40249__$1 = state_40249;
var statearr_40297_40349 = state_40249__$1;
(statearr_40297_40349[(2)] = true);

(statearr_40297_40349[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (38))){
var inst_40239 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
var statearr_40298_40350 = state_40249__$1;
(statearr_40298_40350[(2)] = inst_40239);

(statearr_40298_40350[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (30))){
var inst_40200 = (state_40249[(9)]);
var inst_40201 = (state_40249[(13)]);
var inst_40209 = (state_40249[(11)]);
var inst_40226 = cljs.core.empty_QMARK_.call(null,inst_40200);
var inst_40227 = inst_40201.call(null,inst_40209);
var inst_40228 = cljs.core.not.call(null,inst_40227);
var inst_40229 = (inst_40226) && (inst_40228);
var state_40249__$1 = state_40249;
var statearr_40299_40351 = state_40249__$1;
(statearr_40299_40351[(2)] = inst_40229);

(statearr_40299_40351[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (10))){
var inst_40151 = (state_40249[(8)]);
var inst_40172 = (state_40249[(2)]);
var inst_40173 = cljs.core.get.call(null,inst_40172,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40174 = cljs.core.get.call(null,inst_40172,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40175 = cljs.core.get.call(null,inst_40172,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40176 = inst_40151;
var state_40249__$1 = (function (){var statearr_40300 = state_40249;
(statearr_40300[(16)] = inst_40173);

(statearr_40300[(17)] = inst_40174);

(statearr_40300[(18)] = inst_40175);

(statearr_40300[(7)] = inst_40176);

return statearr_40300;
})();
var statearr_40301_40352 = state_40249__$1;
(statearr_40301_40352[(2)] = null);

(statearr_40301_40352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (18))){
var inst_40191 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
var statearr_40302_40353 = state_40249__$1;
(statearr_40302_40353[(2)] = inst_40191);

(statearr_40302_40353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (37))){
var state_40249__$1 = state_40249;
var statearr_40303_40354 = state_40249__$1;
(statearr_40303_40354[(2)] = null);

(statearr_40303_40354[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (8))){
var inst_40151 = (state_40249[(8)]);
var inst_40169 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40151);
var state_40249__$1 = state_40249;
var statearr_40304_40355 = state_40249__$1;
(statearr_40304_40355[(2)] = inst_40169);

(statearr_40304_40355[(1)] = (10));


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
});})(c__31946__auto___40309,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31858__auto__,c__31946__auto___40309,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31859__auto__ = null;
var cljs$core$async$mix_$_state_machine__31859__auto____0 = (function (){
var statearr_40305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40305[(0)] = cljs$core$async$mix_$_state_machine__31859__auto__);

(statearr_40305[(1)] = (1));

return statearr_40305;
});
var cljs$core$async$mix_$_state_machine__31859__auto____1 = (function (state_40249){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_40249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e40306){if((e40306 instanceof Object)){
var ex__31862__auto__ = e40306;
var statearr_40307_40356 = state_40249;
(statearr_40307_40356[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40357 = state_40249;
state_40249 = G__40357;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31859__auto__ = function(state_40249){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31859__auto____1.call(this,state_40249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31859__auto____0;
cljs$core$async$mix_$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31859__auto____1;
return cljs$core$async$mix_$_state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___40309,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31948__auto__ = (function (){var statearr_40308 = f__31947__auto__.call(null);
(statearr_40308[(6)] = c__31946__auto___40309);

return statearr_40308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___40309,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__40359 = arguments.length;
switch (G__40359) {
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
var G__40363 = arguments.length;
switch (G__40363) {
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
return (function (p1__40361_SHARP_){
if(cljs.core.truth_(p1__40361_SHARP_.call(null,topic))){
return p1__40361_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40361_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40364 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40364 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40365){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40365 = meta40365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40366,meta40365__$1){
var self__ = this;
var _40366__$1 = this;
return (new cljs.core.async.t_cljs$core$async40364(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40365__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40364.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40366){
var self__ = this;
var _40366__$1 = this;
return self__.meta40365;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40364.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40364.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40364.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40364.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40364.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async40364.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40364.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40364.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40365","meta40365",1444220392,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40364.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40364";

cljs.core.async.t_cljs$core$async40364.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40364");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40364 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40364(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40365){
return (new cljs.core.async.t_cljs$core$async40364(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40365));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40364(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31946__auto___40484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___40484,mults,ensure_mult,p){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___40484,mults,ensure_mult,p){
return (function (state_40438){
var state_val_40439 = (state_40438[(1)]);
if((state_val_40439 === (7))){
var inst_40434 = (state_40438[(2)]);
var state_40438__$1 = state_40438;
var statearr_40440_40485 = state_40438__$1;
(statearr_40440_40485[(2)] = inst_40434);

(statearr_40440_40485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (20))){
var state_40438__$1 = state_40438;
var statearr_40441_40486 = state_40438__$1;
(statearr_40441_40486[(2)] = null);

(statearr_40441_40486[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (1))){
var state_40438__$1 = state_40438;
var statearr_40442_40487 = state_40438__$1;
(statearr_40442_40487[(2)] = null);

(statearr_40442_40487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (24))){
var inst_40417 = (state_40438[(7)]);
var inst_40426 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40417);
var state_40438__$1 = state_40438;
var statearr_40443_40488 = state_40438__$1;
(statearr_40443_40488[(2)] = inst_40426);

(statearr_40443_40488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (4))){
var inst_40369 = (state_40438[(8)]);
var inst_40369__$1 = (state_40438[(2)]);
var inst_40370 = (inst_40369__$1 == null);
var state_40438__$1 = (function (){var statearr_40444 = state_40438;
(statearr_40444[(8)] = inst_40369__$1);

return statearr_40444;
})();
if(cljs.core.truth_(inst_40370)){
var statearr_40445_40489 = state_40438__$1;
(statearr_40445_40489[(1)] = (5));

} else {
var statearr_40446_40490 = state_40438__$1;
(statearr_40446_40490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (15))){
var inst_40411 = (state_40438[(2)]);
var state_40438__$1 = state_40438;
var statearr_40447_40491 = state_40438__$1;
(statearr_40447_40491[(2)] = inst_40411);

(statearr_40447_40491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (21))){
var inst_40431 = (state_40438[(2)]);
var state_40438__$1 = (function (){var statearr_40448 = state_40438;
(statearr_40448[(9)] = inst_40431);

return statearr_40448;
})();
var statearr_40449_40492 = state_40438__$1;
(statearr_40449_40492[(2)] = null);

(statearr_40449_40492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (13))){
var inst_40393 = (state_40438[(10)]);
var inst_40395 = cljs.core.chunked_seq_QMARK_.call(null,inst_40393);
var state_40438__$1 = state_40438;
if(inst_40395){
var statearr_40450_40493 = state_40438__$1;
(statearr_40450_40493[(1)] = (16));

} else {
var statearr_40451_40494 = state_40438__$1;
(statearr_40451_40494[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (22))){
var inst_40423 = (state_40438[(2)]);
var state_40438__$1 = state_40438;
if(cljs.core.truth_(inst_40423)){
var statearr_40452_40495 = state_40438__$1;
(statearr_40452_40495[(1)] = (23));

} else {
var statearr_40453_40496 = state_40438__$1;
(statearr_40453_40496[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (6))){
var inst_40417 = (state_40438[(7)]);
var inst_40419 = (state_40438[(11)]);
var inst_40369 = (state_40438[(8)]);
var inst_40417__$1 = topic_fn.call(null,inst_40369);
var inst_40418 = cljs.core.deref.call(null,mults);
var inst_40419__$1 = cljs.core.get.call(null,inst_40418,inst_40417__$1);
var state_40438__$1 = (function (){var statearr_40454 = state_40438;
(statearr_40454[(7)] = inst_40417__$1);

(statearr_40454[(11)] = inst_40419__$1);

return statearr_40454;
})();
if(cljs.core.truth_(inst_40419__$1)){
var statearr_40455_40497 = state_40438__$1;
(statearr_40455_40497[(1)] = (19));

} else {
var statearr_40456_40498 = state_40438__$1;
(statearr_40456_40498[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (25))){
var inst_40428 = (state_40438[(2)]);
var state_40438__$1 = state_40438;
var statearr_40457_40499 = state_40438__$1;
(statearr_40457_40499[(2)] = inst_40428);

(statearr_40457_40499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (17))){
var inst_40393 = (state_40438[(10)]);
var inst_40402 = cljs.core.first.call(null,inst_40393);
var inst_40403 = cljs.core.async.muxch_STAR_.call(null,inst_40402);
var inst_40404 = cljs.core.async.close_BANG_.call(null,inst_40403);
var inst_40405 = cljs.core.next.call(null,inst_40393);
var inst_40379 = inst_40405;
var inst_40380 = null;
var inst_40381 = (0);
var inst_40382 = (0);
var state_40438__$1 = (function (){var statearr_40458 = state_40438;
(statearr_40458[(12)] = inst_40382);

(statearr_40458[(13)] = inst_40379);

(statearr_40458[(14)] = inst_40381);

(statearr_40458[(15)] = inst_40404);

(statearr_40458[(16)] = inst_40380);

return statearr_40458;
})();
var statearr_40459_40500 = state_40438__$1;
(statearr_40459_40500[(2)] = null);

(statearr_40459_40500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (3))){
var inst_40436 = (state_40438[(2)]);
var state_40438__$1 = state_40438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40438__$1,inst_40436);
} else {
if((state_val_40439 === (12))){
var inst_40413 = (state_40438[(2)]);
var state_40438__$1 = state_40438;
var statearr_40460_40501 = state_40438__$1;
(statearr_40460_40501[(2)] = inst_40413);

(statearr_40460_40501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (2))){
var state_40438__$1 = state_40438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40438__$1,(4),ch);
} else {
if((state_val_40439 === (23))){
var state_40438__$1 = state_40438;
var statearr_40461_40502 = state_40438__$1;
(statearr_40461_40502[(2)] = null);

(statearr_40461_40502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (19))){
var inst_40419 = (state_40438[(11)]);
var inst_40369 = (state_40438[(8)]);
var inst_40421 = cljs.core.async.muxch_STAR_.call(null,inst_40419);
var state_40438__$1 = state_40438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40438__$1,(22),inst_40421,inst_40369);
} else {
if((state_val_40439 === (11))){
var inst_40379 = (state_40438[(13)]);
var inst_40393 = (state_40438[(10)]);
var inst_40393__$1 = cljs.core.seq.call(null,inst_40379);
var state_40438__$1 = (function (){var statearr_40462 = state_40438;
(statearr_40462[(10)] = inst_40393__$1);

return statearr_40462;
})();
if(inst_40393__$1){
var statearr_40463_40503 = state_40438__$1;
(statearr_40463_40503[(1)] = (13));

} else {
var statearr_40464_40504 = state_40438__$1;
(statearr_40464_40504[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (9))){
var inst_40415 = (state_40438[(2)]);
var state_40438__$1 = state_40438;
var statearr_40465_40505 = state_40438__$1;
(statearr_40465_40505[(2)] = inst_40415);

(statearr_40465_40505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (5))){
var inst_40376 = cljs.core.deref.call(null,mults);
var inst_40377 = cljs.core.vals.call(null,inst_40376);
var inst_40378 = cljs.core.seq.call(null,inst_40377);
var inst_40379 = inst_40378;
var inst_40380 = null;
var inst_40381 = (0);
var inst_40382 = (0);
var state_40438__$1 = (function (){var statearr_40466 = state_40438;
(statearr_40466[(12)] = inst_40382);

(statearr_40466[(13)] = inst_40379);

(statearr_40466[(14)] = inst_40381);

(statearr_40466[(16)] = inst_40380);

return statearr_40466;
})();
var statearr_40467_40506 = state_40438__$1;
(statearr_40467_40506[(2)] = null);

(statearr_40467_40506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (14))){
var state_40438__$1 = state_40438;
var statearr_40471_40507 = state_40438__$1;
(statearr_40471_40507[(2)] = null);

(statearr_40471_40507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (16))){
var inst_40393 = (state_40438[(10)]);
var inst_40397 = cljs.core.chunk_first.call(null,inst_40393);
var inst_40398 = cljs.core.chunk_rest.call(null,inst_40393);
var inst_40399 = cljs.core.count.call(null,inst_40397);
var inst_40379 = inst_40398;
var inst_40380 = inst_40397;
var inst_40381 = inst_40399;
var inst_40382 = (0);
var state_40438__$1 = (function (){var statearr_40472 = state_40438;
(statearr_40472[(12)] = inst_40382);

(statearr_40472[(13)] = inst_40379);

(statearr_40472[(14)] = inst_40381);

(statearr_40472[(16)] = inst_40380);

return statearr_40472;
})();
var statearr_40473_40508 = state_40438__$1;
(statearr_40473_40508[(2)] = null);

(statearr_40473_40508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (10))){
var inst_40382 = (state_40438[(12)]);
var inst_40379 = (state_40438[(13)]);
var inst_40381 = (state_40438[(14)]);
var inst_40380 = (state_40438[(16)]);
var inst_40387 = cljs.core._nth.call(null,inst_40380,inst_40382);
var inst_40388 = cljs.core.async.muxch_STAR_.call(null,inst_40387);
var inst_40389 = cljs.core.async.close_BANG_.call(null,inst_40388);
var inst_40390 = (inst_40382 + (1));
var tmp40468 = inst_40379;
var tmp40469 = inst_40381;
var tmp40470 = inst_40380;
var inst_40379__$1 = tmp40468;
var inst_40380__$1 = tmp40470;
var inst_40381__$1 = tmp40469;
var inst_40382__$1 = inst_40390;
var state_40438__$1 = (function (){var statearr_40474 = state_40438;
(statearr_40474[(12)] = inst_40382__$1);

(statearr_40474[(13)] = inst_40379__$1);

(statearr_40474[(14)] = inst_40381__$1);

(statearr_40474[(16)] = inst_40380__$1);

(statearr_40474[(17)] = inst_40389);

return statearr_40474;
})();
var statearr_40475_40509 = state_40438__$1;
(statearr_40475_40509[(2)] = null);

(statearr_40475_40509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (18))){
var inst_40408 = (state_40438[(2)]);
var state_40438__$1 = state_40438;
var statearr_40476_40510 = state_40438__$1;
(statearr_40476_40510[(2)] = inst_40408);

(statearr_40476_40510[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (8))){
var inst_40382 = (state_40438[(12)]);
var inst_40381 = (state_40438[(14)]);
var inst_40384 = (inst_40382 < inst_40381);
var inst_40385 = inst_40384;
var state_40438__$1 = state_40438;
if(cljs.core.truth_(inst_40385)){
var statearr_40477_40511 = state_40438__$1;
(statearr_40477_40511[(1)] = (10));

} else {
var statearr_40478_40512 = state_40438__$1;
(statearr_40478_40512[(1)] = (11));

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
});})(c__31946__auto___40484,mults,ensure_mult,p))
;
return ((function (switch__31858__auto__,c__31946__auto___40484,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31859__auto__ = null;
var cljs$core$async$state_machine__31859__auto____0 = (function (){
var statearr_40479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40479[(0)] = cljs$core$async$state_machine__31859__auto__);

(statearr_40479[(1)] = (1));

return statearr_40479;
});
var cljs$core$async$state_machine__31859__auto____1 = (function (state_40438){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_40438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e40480){if((e40480 instanceof Object)){
var ex__31862__auto__ = e40480;
var statearr_40481_40513 = state_40438;
(statearr_40481_40513[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40514 = state_40438;
state_40438 = G__40514;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$state_machine__31859__auto__ = function(state_40438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31859__auto____1.call(this,state_40438);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31859__auto____0;
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31859__auto____1;
return cljs$core$async$state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___40484,mults,ensure_mult,p))
})();
var state__31948__auto__ = (function (){var statearr_40482 = f__31947__auto__.call(null);
(statearr_40482[(6)] = c__31946__auto___40484);

return statearr_40482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___40484,mults,ensure_mult,p))
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
var G__40516 = arguments.length;
switch (G__40516) {
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
var G__40519 = arguments.length;
switch (G__40519) {
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
var G__40522 = arguments.length;
switch (G__40522) {
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
var c__31946__auto___40589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___40589,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___40589,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40561){
var state_val_40562 = (state_40561[(1)]);
if((state_val_40562 === (7))){
var state_40561__$1 = state_40561;
var statearr_40563_40590 = state_40561__$1;
(statearr_40563_40590[(2)] = null);

(statearr_40563_40590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40562 === (1))){
var state_40561__$1 = state_40561;
var statearr_40564_40591 = state_40561__$1;
(statearr_40564_40591[(2)] = null);

(statearr_40564_40591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40562 === (4))){
var inst_40525 = (state_40561[(7)]);
var inst_40527 = (inst_40525 < cnt);
var state_40561__$1 = state_40561;
if(cljs.core.truth_(inst_40527)){
var statearr_40565_40592 = state_40561__$1;
(statearr_40565_40592[(1)] = (6));

} else {
var statearr_40566_40593 = state_40561__$1;
(statearr_40566_40593[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40562 === (15))){
var inst_40557 = (state_40561[(2)]);
var state_40561__$1 = state_40561;
var statearr_40567_40594 = state_40561__$1;
(statearr_40567_40594[(2)] = inst_40557);

(statearr_40567_40594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40562 === (13))){
var inst_40550 = cljs.core.async.close_BANG_.call(null,out);
var state_40561__$1 = state_40561;
var statearr_40568_40595 = state_40561__$1;
(statearr_40568_40595[(2)] = inst_40550);

(statearr_40568_40595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40562 === (6))){
var state_40561__$1 = state_40561;
var statearr_40569_40596 = state_40561__$1;
(statearr_40569_40596[(2)] = null);

(statearr_40569_40596[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40562 === (3))){
var inst_40559 = (state_40561[(2)]);
var state_40561__$1 = state_40561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40561__$1,inst_40559);
} else {
if((state_val_40562 === (12))){
var inst_40547 = (state_40561[(8)]);
var inst_40547__$1 = (state_40561[(2)]);
var inst_40548 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40547__$1);
var state_40561__$1 = (function (){var statearr_40570 = state_40561;
(statearr_40570[(8)] = inst_40547__$1);

return statearr_40570;
})();
if(cljs.core.truth_(inst_40548)){
var statearr_40571_40597 = state_40561__$1;
(statearr_40571_40597[(1)] = (13));

} else {
var statearr_40572_40598 = state_40561__$1;
(statearr_40572_40598[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40562 === (2))){
var inst_40524 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40525 = (0);
var state_40561__$1 = (function (){var statearr_40573 = state_40561;
(statearr_40573[(9)] = inst_40524);

(statearr_40573[(7)] = inst_40525);

return statearr_40573;
})();
var statearr_40574_40599 = state_40561__$1;
(statearr_40574_40599[(2)] = null);

(statearr_40574_40599[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40562 === (11))){
var inst_40525 = (state_40561[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40561,(10),Object,null,(9));
var inst_40534 = chs__$1.call(null,inst_40525);
var inst_40535 = done.call(null,inst_40525);
var inst_40536 = cljs.core.async.take_BANG_.call(null,inst_40534,inst_40535);
var state_40561__$1 = state_40561;
var statearr_40575_40600 = state_40561__$1;
(statearr_40575_40600[(2)] = inst_40536);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40561__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40562 === (9))){
var inst_40525 = (state_40561[(7)]);
var inst_40538 = (state_40561[(2)]);
var inst_40539 = (inst_40525 + (1));
var inst_40525__$1 = inst_40539;
var state_40561__$1 = (function (){var statearr_40576 = state_40561;
(statearr_40576[(7)] = inst_40525__$1);

(statearr_40576[(10)] = inst_40538);

return statearr_40576;
})();
var statearr_40577_40601 = state_40561__$1;
(statearr_40577_40601[(2)] = null);

(statearr_40577_40601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40562 === (5))){
var inst_40545 = (state_40561[(2)]);
var state_40561__$1 = (function (){var statearr_40578 = state_40561;
(statearr_40578[(11)] = inst_40545);

return statearr_40578;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40561__$1,(12),dchan);
} else {
if((state_val_40562 === (14))){
var inst_40547 = (state_40561[(8)]);
var inst_40552 = cljs.core.apply.call(null,f,inst_40547);
var state_40561__$1 = state_40561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40561__$1,(16),out,inst_40552);
} else {
if((state_val_40562 === (16))){
var inst_40554 = (state_40561[(2)]);
var state_40561__$1 = (function (){var statearr_40579 = state_40561;
(statearr_40579[(12)] = inst_40554);

return statearr_40579;
})();
var statearr_40580_40602 = state_40561__$1;
(statearr_40580_40602[(2)] = null);

(statearr_40580_40602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40562 === (10))){
var inst_40529 = (state_40561[(2)]);
var inst_40530 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40561__$1 = (function (){var statearr_40581 = state_40561;
(statearr_40581[(13)] = inst_40529);

return statearr_40581;
})();
var statearr_40582_40603 = state_40561__$1;
(statearr_40582_40603[(2)] = inst_40530);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40561__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40562 === (8))){
var inst_40543 = (state_40561[(2)]);
var state_40561__$1 = state_40561;
var statearr_40583_40604 = state_40561__$1;
(statearr_40583_40604[(2)] = inst_40543);

(statearr_40583_40604[(1)] = (5));


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
});})(c__31946__auto___40589,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31858__auto__,c__31946__auto___40589,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31859__auto__ = null;
var cljs$core$async$state_machine__31859__auto____0 = (function (){
var statearr_40584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40584[(0)] = cljs$core$async$state_machine__31859__auto__);

(statearr_40584[(1)] = (1));

return statearr_40584;
});
var cljs$core$async$state_machine__31859__auto____1 = (function (state_40561){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_40561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e40585){if((e40585 instanceof Object)){
var ex__31862__auto__ = e40585;
var statearr_40586_40605 = state_40561;
(statearr_40586_40605[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40606 = state_40561;
state_40561 = G__40606;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$state_machine__31859__auto__ = function(state_40561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31859__auto____1.call(this,state_40561);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31859__auto____0;
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31859__auto____1;
return cljs$core$async$state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___40589,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31948__auto__ = (function (){var statearr_40587 = f__31947__auto__.call(null);
(statearr_40587[(6)] = c__31946__auto___40589);

return statearr_40587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___40589,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__40609 = arguments.length;
switch (G__40609) {
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
var c__31946__auto___40663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___40663,out){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___40663,out){
return (function (state_40641){
var state_val_40642 = (state_40641[(1)]);
if((state_val_40642 === (7))){
var inst_40620 = (state_40641[(7)]);
var inst_40621 = (state_40641[(8)]);
var inst_40620__$1 = (state_40641[(2)]);
var inst_40621__$1 = cljs.core.nth.call(null,inst_40620__$1,(0),null);
var inst_40622 = cljs.core.nth.call(null,inst_40620__$1,(1),null);
var inst_40623 = (inst_40621__$1 == null);
var state_40641__$1 = (function (){var statearr_40643 = state_40641;
(statearr_40643[(9)] = inst_40622);

(statearr_40643[(7)] = inst_40620__$1);

(statearr_40643[(8)] = inst_40621__$1);

return statearr_40643;
})();
if(cljs.core.truth_(inst_40623)){
var statearr_40644_40664 = state_40641__$1;
(statearr_40644_40664[(1)] = (8));

} else {
var statearr_40645_40665 = state_40641__$1;
(statearr_40645_40665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40642 === (1))){
var inst_40610 = cljs.core.vec.call(null,chs);
var inst_40611 = inst_40610;
var state_40641__$1 = (function (){var statearr_40646 = state_40641;
(statearr_40646[(10)] = inst_40611);

return statearr_40646;
})();
var statearr_40647_40666 = state_40641__$1;
(statearr_40647_40666[(2)] = null);

(statearr_40647_40666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40642 === (4))){
var inst_40611 = (state_40641[(10)]);
var state_40641__$1 = state_40641;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40641__$1,(7),inst_40611);
} else {
if((state_val_40642 === (6))){
var inst_40637 = (state_40641[(2)]);
var state_40641__$1 = state_40641;
var statearr_40648_40667 = state_40641__$1;
(statearr_40648_40667[(2)] = inst_40637);

(statearr_40648_40667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40642 === (3))){
var inst_40639 = (state_40641[(2)]);
var state_40641__$1 = state_40641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40641__$1,inst_40639);
} else {
if((state_val_40642 === (2))){
var inst_40611 = (state_40641[(10)]);
var inst_40613 = cljs.core.count.call(null,inst_40611);
var inst_40614 = (inst_40613 > (0));
var state_40641__$1 = state_40641;
if(cljs.core.truth_(inst_40614)){
var statearr_40650_40668 = state_40641__$1;
(statearr_40650_40668[(1)] = (4));

} else {
var statearr_40651_40669 = state_40641__$1;
(statearr_40651_40669[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40642 === (11))){
var inst_40611 = (state_40641[(10)]);
var inst_40630 = (state_40641[(2)]);
var tmp40649 = inst_40611;
var inst_40611__$1 = tmp40649;
var state_40641__$1 = (function (){var statearr_40652 = state_40641;
(statearr_40652[(11)] = inst_40630);

(statearr_40652[(10)] = inst_40611__$1);

return statearr_40652;
})();
var statearr_40653_40670 = state_40641__$1;
(statearr_40653_40670[(2)] = null);

(statearr_40653_40670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40642 === (9))){
var inst_40621 = (state_40641[(8)]);
var state_40641__$1 = state_40641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40641__$1,(11),out,inst_40621);
} else {
if((state_val_40642 === (5))){
var inst_40635 = cljs.core.async.close_BANG_.call(null,out);
var state_40641__$1 = state_40641;
var statearr_40654_40671 = state_40641__$1;
(statearr_40654_40671[(2)] = inst_40635);

(statearr_40654_40671[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40642 === (10))){
var inst_40633 = (state_40641[(2)]);
var state_40641__$1 = state_40641;
var statearr_40655_40672 = state_40641__$1;
(statearr_40655_40672[(2)] = inst_40633);

(statearr_40655_40672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40642 === (8))){
var inst_40622 = (state_40641[(9)]);
var inst_40620 = (state_40641[(7)]);
var inst_40621 = (state_40641[(8)]);
var inst_40611 = (state_40641[(10)]);
var inst_40625 = (function (){var cs = inst_40611;
var vec__40616 = inst_40620;
var v = inst_40621;
var c = inst_40622;
return ((function (cs,vec__40616,v,c,inst_40622,inst_40620,inst_40621,inst_40611,state_val_40642,c__31946__auto___40663,out){
return (function (p1__40607_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40607_SHARP_);
});
;})(cs,vec__40616,v,c,inst_40622,inst_40620,inst_40621,inst_40611,state_val_40642,c__31946__auto___40663,out))
})();
var inst_40626 = cljs.core.filterv.call(null,inst_40625,inst_40611);
var inst_40611__$1 = inst_40626;
var state_40641__$1 = (function (){var statearr_40656 = state_40641;
(statearr_40656[(10)] = inst_40611__$1);

return statearr_40656;
})();
var statearr_40657_40673 = state_40641__$1;
(statearr_40657_40673[(2)] = null);

(statearr_40657_40673[(1)] = (2));


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
});})(c__31946__auto___40663,out))
;
return ((function (switch__31858__auto__,c__31946__auto___40663,out){
return (function() {
var cljs$core$async$state_machine__31859__auto__ = null;
var cljs$core$async$state_machine__31859__auto____0 = (function (){
var statearr_40658 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40658[(0)] = cljs$core$async$state_machine__31859__auto__);

(statearr_40658[(1)] = (1));

return statearr_40658;
});
var cljs$core$async$state_machine__31859__auto____1 = (function (state_40641){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_40641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e40659){if((e40659 instanceof Object)){
var ex__31862__auto__ = e40659;
var statearr_40660_40674 = state_40641;
(statearr_40660_40674[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40675 = state_40641;
state_40641 = G__40675;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$state_machine__31859__auto__ = function(state_40641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31859__auto____1.call(this,state_40641);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31859__auto____0;
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31859__auto____1;
return cljs$core$async$state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___40663,out))
})();
var state__31948__auto__ = (function (){var statearr_40661 = f__31947__auto__.call(null);
(statearr_40661[(6)] = c__31946__auto___40663);

return statearr_40661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___40663,out))
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
var G__40677 = arguments.length;
switch (G__40677) {
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
var c__31946__auto___40722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___40722,out){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___40722,out){
return (function (state_40701){
var state_val_40702 = (state_40701[(1)]);
if((state_val_40702 === (7))){
var inst_40683 = (state_40701[(7)]);
var inst_40683__$1 = (state_40701[(2)]);
var inst_40684 = (inst_40683__$1 == null);
var inst_40685 = cljs.core.not.call(null,inst_40684);
var state_40701__$1 = (function (){var statearr_40703 = state_40701;
(statearr_40703[(7)] = inst_40683__$1);

return statearr_40703;
})();
if(inst_40685){
var statearr_40704_40723 = state_40701__$1;
(statearr_40704_40723[(1)] = (8));

} else {
var statearr_40705_40724 = state_40701__$1;
(statearr_40705_40724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40702 === (1))){
var inst_40678 = (0);
var state_40701__$1 = (function (){var statearr_40706 = state_40701;
(statearr_40706[(8)] = inst_40678);

return statearr_40706;
})();
var statearr_40707_40725 = state_40701__$1;
(statearr_40707_40725[(2)] = null);

(statearr_40707_40725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40702 === (4))){
var state_40701__$1 = state_40701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40701__$1,(7),ch);
} else {
if((state_val_40702 === (6))){
var inst_40696 = (state_40701[(2)]);
var state_40701__$1 = state_40701;
var statearr_40708_40726 = state_40701__$1;
(statearr_40708_40726[(2)] = inst_40696);

(statearr_40708_40726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40702 === (3))){
var inst_40698 = (state_40701[(2)]);
var inst_40699 = cljs.core.async.close_BANG_.call(null,out);
var state_40701__$1 = (function (){var statearr_40709 = state_40701;
(statearr_40709[(9)] = inst_40698);

return statearr_40709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40701__$1,inst_40699);
} else {
if((state_val_40702 === (2))){
var inst_40678 = (state_40701[(8)]);
var inst_40680 = (inst_40678 < n);
var state_40701__$1 = state_40701;
if(cljs.core.truth_(inst_40680)){
var statearr_40710_40727 = state_40701__$1;
(statearr_40710_40727[(1)] = (4));

} else {
var statearr_40711_40728 = state_40701__$1;
(statearr_40711_40728[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40702 === (11))){
var inst_40678 = (state_40701[(8)]);
var inst_40688 = (state_40701[(2)]);
var inst_40689 = (inst_40678 + (1));
var inst_40678__$1 = inst_40689;
var state_40701__$1 = (function (){var statearr_40712 = state_40701;
(statearr_40712[(8)] = inst_40678__$1);

(statearr_40712[(10)] = inst_40688);

return statearr_40712;
})();
var statearr_40713_40729 = state_40701__$1;
(statearr_40713_40729[(2)] = null);

(statearr_40713_40729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40702 === (9))){
var state_40701__$1 = state_40701;
var statearr_40714_40730 = state_40701__$1;
(statearr_40714_40730[(2)] = null);

(statearr_40714_40730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40702 === (5))){
var state_40701__$1 = state_40701;
var statearr_40715_40731 = state_40701__$1;
(statearr_40715_40731[(2)] = null);

(statearr_40715_40731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40702 === (10))){
var inst_40693 = (state_40701[(2)]);
var state_40701__$1 = state_40701;
var statearr_40716_40732 = state_40701__$1;
(statearr_40716_40732[(2)] = inst_40693);

(statearr_40716_40732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40702 === (8))){
var inst_40683 = (state_40701[(7)]);
var state_40701__$1 = state_40701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40701__$1,(11),out,inst_40683);
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
});})(c__31946__auto___40722,out))
;
return ((function (switch__31858__auto__,c__31946__auto___40722,out){
return (function() {
var cljs$core$async$state_machine__31859__auto__ = null;
var cljs$core$async$state_machine__31859__auto____0 = (function (){
var statearr_40717 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40717[(0)] = cljs$core$async$state_machine__31859__auto__);

(statearr_40717[(1)] = (1));

return statearr_40717;
});
var cljs$core$async$state_machine__31859__auto____1 = (function (state_40701){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_40701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e40718){if((e40718 instanceof Object)){
var ex__31862__auto__ = e40718;
var statearr_40719_40733 = state_40701;
(statearr_40719_40733[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40734 = state_40701;
state_40701 = G__40734;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$state_machine__31859__auto__ = function(state_40701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31859__auto____1.call(this,state_40701);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31859__auto____0;
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31859__auto____1;
return cljs$core$async$state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___40722,out))
})();
var state__31948__auto__ = (function (){var statearr_40720 = f__31947__auto__.call(null);
(statearr_40720[(6)] = c__31946__auto___40722);

return statearr_40720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___40722,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40736 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40736 = (function (f,ch,meta40737){
this.f = f;
this.ch = ch;
this.meta40737 = meta40737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40738,meta40737__$1){
var self__ = this;
var _40738__$1 = this;
return (new cljs.core.async.t_cljs$core$async40736(self__.f,self__.ch,meta40737__$1));
});

cljs.core.async.t_cljs$core$async40736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40738){
var self__ = this;
var _40738__$1 = this;
return self__.meta40737;
});

cljs.core.async.t_cljs$core$async40736.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40736.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40736.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40736.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40736.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40739 = (function (f,ch,meta40737,_,fn1,meta40740){
this.f = f;
this.ch = ch;
this.meta40737 = meta40737;
this._ = _;
this.fn1 = fn1;
this.meta40740 = meta40740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40741,meta40740__$1){
var self__ = this;
var _40741__$1 = this;
return (new cljs.core.async.t_cljs$core$async40739(self__.f,self__.ch,self__.meta40737,self__._,self__.fn1,meta40740__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40741){
var self__ = this;
var _40741__$1 = this;
return self__.meta40740;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40739.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40739.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40735_SHARP_){
return f1.call(null,(((p1__40735_SHARP_ == null))?null:self__.f.call(null,p1__40735_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40739.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40737","meta40737",53449476,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40736","cljs.core.async/t_cljs$core$async40736",-2060062540,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40740","meta40740",-273737527,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40739.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40739";

cljs.core.async.t_cljs$core$async40739.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40739");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40739 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40739(f__$1,ch__$1,meta40737__$1,___$2,fn1__$1,meta40740){
return (new cljs.core.async.t_cljs$core$async40739(f__$1,ch__$1,meta40737__$1,___$2,fn1__$1,meta40740));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40739(self__.f,self__.ch,self__.meta40737,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async40736.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40736.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40737","meta40737",53449476,null)], null);
});

cljs.core.async.t_cljs$core$async40736.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40736";

cljs.core.async.t_cljs$core$async40736.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40736");
});

cljs.core.async.__GT_t_cljs$core$async40736 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40736(f__$1,ch__$1,meta40737){
return (new cljs.core.async.t_cljs$core$async40736(f__$1,ch__$1,meta40737));
});

}

return (new cljs.core.async.t_cljs$core$async40736(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40742 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40742 = (function (f,ch,meta40743){
this.f = f;
this.ch = ch;
this.meta40743 = meta40743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40744,meta40743__$1){
var self__ = this;
var _40744__$1 = this;
return (new cljs.core.async.t_cljs$core$async40742(self__.f,self__.ch,meta40743__$1));
});

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40744){
var self__ = this;
var _40744__$1 = this;
return self__.meta40743;
});

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40743","meta40743",-737146789,null)], null);
});

cljs.core.async.t_cljs$core$async40742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40742";

cljs.core.async.t_cljs$core$async40742.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40742");
});

cljs.core.async.__GT_t_cljs$core$async40742 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40742(f__$1,ch__$1,meta40743){
return (new cljs.core.async.t_cljs$core$async40742(f__$1,ch__$1,meta40743));
});

}

return (new cljs.core.async.t_cljs$core$async40742(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40745 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40745 = (function (p,ch,meta40746){
this.p = p;
this.ch = ch;
this.meta40746 = meta40746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40747,meta40746__$1){
var self__ = this;
var _40747__$1 = this;
return (new cljs.core.async.t_cljs$core$async40745(self__.p,self__.ch,meta40746__$1));
});

cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40747){
var self__ = this;
var _40747__$1 = this;
return self__.meta40746;
});

cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40746","meta40746",-1266067965,null)], null);
});

cljs.core.async.t_cljs$core$async40745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40745";

cljs.core.async.t_cljs$core$async40745.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40745");
});

cljs.core.async.__GT_t_cljs$core$async40745 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40745(p__$1,ch__$1,meta40746){
return (new cljs.core.async.t_cljs$core$async40745(p__$1,ch__$1,meta40746));
});

}

return (new cljs.core.async.t_cljs$core$async40745(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40749 = arguments.length;
switch (G__40749) {
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
var c__31946__auto___40789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___40789,out){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___40789,out){
return (function (state_40770){
var state_val_40771 = (state_40770[(1)]);
if((state_val_40771 === (7))){
var inst_40766 = (state_40770[(2)]);
var state_40770__$1 = state_40770;
var statearr_40772_40790 = state_40770__$1;
(statearr_40772_40790[(2)] = inst_40766);

(statearr_40772_40790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40771 === (1))){
var state_40770__$1 = state_40770;
var statearr_40773_40791 = state_40770__$1;
(statearr_40773_40791[(2)] = null);

(statearr_40773_40791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40771 === (4))){
var inst_40752 = (state_40770[(7)]);
var inst_40752__$1 = (state_40770[(2)]);
var inst_40753 = (inst_40752__$1 == null);
var state_40770__$1 = (function (){var statearr_40774 = state_40770;
(statearr_40774[(7)] = inst_40752__$1);

return statearr_40774;
})();
if(cljs.core.truth_(inst_40753)){
var statearr_40775_40792 = state_40770__$1;
(statearr_40775_40792[(1)] = (5));

} else {
var statearr_40776_40793 = state_40770__$1;
(statearr_40776_40793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40771 === (6))){
var inst_40752 = (state_40770[(7)]);
var inst_40757 = p.call(null,inst_40752);
var state_40770__$1 = state_40770;
if(cljs.core.truth_(inst_40757)){
var statearr_40777_40794 = state_40770__$1;
(statearr_40777_40794[(1)] = (8));

} else {
var statearr_40778_40795 = state_40770__$1;
(statearr_40778_40795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40771 === (3))){
var inst_40768 = (state_40770[(2)]);
var state_40770__$1 = state_40770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40770__$1,inst_40768);
} else {
if((state_val_40771 === (2))){
var state_40770__$1 = state_40770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40770__$1,(4),ch);
} else {
if((state_val_40771 === (11))){
var inst_40760 = (state_40770[(2)]);
var state_40770__$1 = state_40770;
var statearr_40779_40796 = state_40770__$1;
(statearr_40779_40796[(2)] = inst_40760);

(statearr_40779_40796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40771 === (9))){
var state_40770__$1 = state_40770;
var statearr_40780_40797 = state_40770__$1;
(statearr_40780_40797[(2)] = null);

(statearr_40780_40797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40771 === (5))){
var inst_40755 = cljs.core.async.close_BANG_.call(null,out);
var state_40770__$1 = state_40770;
var statearr_40781_40798 = state_40770__$1;
(statearr_40781_40798[(2)] = inst_40755);

(statearr_40781_40798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40771 === (10))){
var inst_40763 = (state_40770[(2)]);
var state_40770__$1 = (function (){var statearr_40782 = state_40770;
(statearr_40782[(8)] = inst_40763);

return statearr_40782;
})();
var statearr_40783_40799 = state_40770__$1;
(statearr_40783_40799[(2)] = null);

(statearr_40783_40799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40771 === (8))){
var inst_40752 = (state_40770[(7)]);
var state_40770__$1 = state_40770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40770__$1,(11),out,inst_40752);
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
});})(c__31946__auto___40789,out))
;
return ((function (switch__31858__auto__,c__31946__auto___40789,out){
return (function() {
var cljs$core$async$state_machine__31859__auto__ = null;
var cljs$core$async$state_machine__31859__auto____0 = (function (){
var statearr_40784 = [null,null,null,null,null,null,null,null,null];
(statearr_40784[(0)] = cljs$core$async$state_machine__31859__auto__);

(statearr_40784[(1)] = (1));

return statearr_40784;
});
var cljs$core$async$state_machine__31859__auto____1 = (function (state_40770){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_40770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e40785){if((e40785 instanceof Object)){
var ex__31862__auto__ = e40785;
var statearr_40786_40800 = state_40770;
(statearr_40786_40800[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40801 = state_40770;
state_40770 = G__40801;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$state_machine__31859__auto__ = function(state_40770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31859__auto____1.call(this,state_40770);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31859__auto____0;
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31859__auto____1;
return cljs$core$async$state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___40789,out))
})();
var state__31948__auto__ = (function (){var statearr_40787 = f__31947__auto__.call(null);
(statearr_40787[(6)] = c__31946__auto___40789);

return statearr_40787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___40789,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40803 = arguments.length;
switch (G__40803) {
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
var c__31946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto__){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto__){
return (function (state_40866){
var state_val_40867 = (state_40866[(1)]);
if((state_val_40867 === (7))){
var inst_40862 = (state_40866[(2)]);
var state_40866__$1 = state_40866;
var statearr_40868_40906 = state_40866__$1;
(statearr_40868_40906[(2)] = inst_40862);

(statearr_40868_40906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (20))){
var inst_40832 = (state_40866[(7)]);
var inst_40843 = (state_40866[(2)]);
var inst_40844 = cljs.core.next.call(null,inst_40832);
var inst_40818 = inst_40844;
var inst_40819 = null;
var inst_40820 = (0);
var inst_40821 = (0);
var state_40866__$1 = (function (){var statearr_40869 = state_40866;
(statearr_40869[(8)] = inst_40820);

(statearr_40869[(9)] = inst_40821);

(statearr_40869[(10)] = inst_40819);

(statearr_40869[(11)] = inst_40843);

(statearr_40869[(12)] = inst_40818);

return statearr_40869;
})();
var statearr_40870_40907 = state_40866__$1;
(statearr_40870_40907[(2)] = null);

(statearr_40870_40907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (1))){
var state_40866__$1 = state_40866;
var statearr_40871_40908 = state_40866__$1;
(statearr_40871_40908[(2)] = null);

(statearr_40871_40908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (4))){
var inst_40807 = (state_40866[(13)]);
var inst_40807__$1 = (state_40866[(2)]);
var inst_40808 = (inst_40807__$1 == null);
var state_40866__$1 = (function (){var statearr_40872 = state_40866;
(statearr_40872[(13)] = inst_40807__$1);

return statearr_40872;
})();
if(cljs.core.truth_(inst_40808)){
var statearr_40873_40909 = state_40866__$1;
(statearr_40873_40909[(1)] = (5));

} else {
var statearr_40874_40910 = state_40866__$1;
(statearr_40874_40910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (15))){
var state_40866__$1 = state_40866;
var statearr_40878_40911 = state_40866__$1;
(statearr_40878_40911[(2)] = null);

(statearr_40878_40911[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (21))){
var state_40866__$1 = state_40866;
var statearr_40879_40912 = state_40866__$1;
(statearr_40879_40912[(2)] = null);

(statearr_40879_40912[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (13))){
var inst_40820 = (state_40866[(8)]);
var inst_40821 = (state_40866[(9)]);
var inst_40819 = (state_40866[(10)]);
var inst_40818 = (state_40866[(12)]);
var inst_40828 = (state_40866[(2)]);
var inst_40829 = (inst_40821 + (1));
var tmp40875 = inst_40820;
var tmp40876 = inst_40819;
var tmp40877 = inst_40818;
var inst_40818__$1 = tmp40877;
var inst_40819__$1 = tmp40876;
var inst_40820__$1 = tmp40875;
var inst_40821__$1 = inst_40829;
var state_40866__$1 = (function (){var statearr_40880 = state_40866;
(statearr_40880[(8)] = inst_40820__$1);

(statearr_40880[(9)] = inst_40821__$1);

(statearr_40880[(10)] = inst_40819__$1);

(statearr_40880[(14)] = inst_40828);

(statearr_40880[(12)] = inst_40818__$1);

return statearr_40880;
})();
var statearr_40881_40913 = state_40866__$1;
(statearr_40881_40913[(2)] = null);

(statearr_40881_40913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (22))){
var state_40866__$1 = state_40866;
var statearr_40882_40914 = state_40866__$1;
(statearr_40882_40914[(2)] = null);

(statearr_40882_40914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (6))){
var inst_40807 = (state_40866[(13)]);
var inst_40816 = f.call(null,inst_40807);
var inst_40817 = cljs.core.seq.call(null,inst_40816);
var inst_40818 = inst_40817;
var inst_40819 = null;
var inst_40820 = (0);
var inst_40821 = (0);
var state_40866__$1 = (function (){var statearr_40883 = state_40866;
(statearr_40883[(8)] = inst_40820);

(statearr_40883[(9)] = inst_40821);

(statearr_40883[(10)] = inst_40819);

(statearr_40883[(12)] = inst_40818);

return statearr_40883;
})();
var statearr_40884_40915 = state_40866__$1;
(statearr_40884_40915[(2)] = null);

(statearr_40884_40915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (17))){
var inst_40832 = (state_40866[(7)]);
var inst_40836 = cljs.core.chunk_first.call(null,inst_40832);
var inst_40837 = cljs.core.chunk_rest.call(null,inst_40832);
var inst_40838 = cljs.core.count.call(null,inst_40836);
var inst_40818 = inst_40837;
var inst_40819 = inst_40836;
var inst_40820 = inst_40838;
var inst_40821 = (0);
var state_40866__$1 = (function (){var statearr_40885 = state_40866;
(statearr_40885[(8)] = inst_40820);

(statearr_40885[(9)] = inst_40821);

(statearr_40885[(10)] = inst_40819);

(statearr_40885[(12)] = inst_40818);

return statearr_40885;
})();
var statearr_40886_40916 = state_40866__$1;
(statearr_40886_40916[(2)] = null);

(statearr_40886_40916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (3))){
var inst_40864 = (state_40866[(2)]);
var state_40866__$1 = state_40866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40866__$1,inst_40864);
} else {
if((state_val_40867 === (12))){
var inst_40852 = (state_40866[(2)]);
var state_40866__$1 = state_40866;
var statearr_40887_40917 = state_40866__$1;
(statearr_40887_40917[(2)] = inst_40852);

(statearr_40887_40917[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (2))){
var state_40866__$1 = state_40866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40866__$1,(4),in$);
} else {
if((state_val_40867 === (23))){
var inst_40860 = (state_40866[(2)]);
var state_40866__$1 = state_40866;
var statearr_40888_40918 = state_40866__$1;
(statearr_40888_40918[(2)] = inst_40860);

(statearr_40888_40918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (19))){
var inst_40847 = (state_40866[(2)]);
var state_40866__$1 = state_40866;
var statearr_40889_40919 = state_40866__$1;
(statearr_40889_40919[(2)] = inst_40847);

(statearr_40889_40919[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (11))){
var inst_40818 = (state_40866[(12)]);
var inst_40832 = (state_40866[(7)]);
var inst_40832__$1 = cljs.core.seq.call(null,inst_40818);
var state_40866__$1 = (function (){var statearr_40890 = state_40866;
(statearr_40890[(7)] = inst_40832__$1);

return statearr_40890;
})();
if(inst_40832__$1){
var statearr_40891_40920 = state_40866__$1;
(statearr_40891_40920[(1)] = (14));

} else {
var statearr_40892_40921 = state_40866__$1;
(statearr_40892_40921[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (9))){
var inst_40854 = (state_40866[(2)]);
var inst_40855 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40866__$1 = (function (){var statearr_40893 = state_40866;
(statearr_40893[(15)] = inst_40854);

return statearr_40893;
})();
if(cljs.core.truth_(inst_40855)){
var statearr_40894_40922 = state_40866__$1;
(statearr_40894_40922[(1)] = (21));

} else {
var statearr_40895_40923 = state_40866__$1;
(statearr_40895_40923[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (5))){
var inst_40810 = cljs.core.async.close_BANG_.call(null,out);
var state_40866__$1 = state_40866;
var statearr_40896_40924 = state_40866__$1;
(statearr_40896_40924[(2)] = inst_40810);

(statearr_40896_40924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (14))){
var inst_40832 = (state_40866[(7)]);
var inst_40834 = cljs.core.chunked_seq_QMARK_.call(null,inst_40832);
var state_40866__$1 = state_40866;
if(inst_40834){
var statearr_40897_40925 = state_40866__$1;
(statearr_40897_40925[(1)] = (17));

} else {
var statearr_40898_40926 = state_40866__$1;
(statearr_40898_40926[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (16))){
var inst_40850 = (state_40866[(2)]);
var state_40866__$1 = state_40866;
var statearr_40899_40927 = state_40866__$1;
(statearr_40899_40927[(2)] = inst_40850);

(statearr_40899_40927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40867 === (10))){
var inst_40821 = (state_40866[(9)]);
var inst_40819 = (state_40866[(10)]);
var inst_40826 = cljs.core._nth.call(null,inst_40819,inst_40821);
var state_40866__$1 = state_40866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40866__$1,(13),out,inst_40826);
} else {
if((state_val_40867 === (18))){
var inst_40832 = (state_40866[(7)]);
var inst_40841 = cljs.core.first.call(null,inst_40832);
var state_40866__$1 = state_40866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40866__$1,(20),out,inst_40841);
} else {
if((state_val_40867 === (8))){
var inst_40820 = (state_40866[(8)]);
var inst_40821 = (state_40866[(9)]);
var inst_40823 = (inst_40821 < inst_40820);
var inst_40824 = inst_40823;
var state_40866__$1 = state_40866;
if(cljs.core.truth_(inst_40824)){
var statearr_40900_40928 = state_40866__$1;
(statearr_40900_40928[(1)] = (10));

} else {
var statearr_40901_40929 = state_40866__$1;
(statearr_40901_40929[(1)] = (11));

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
});})(c__31946__auto__))
;
return ((function (switch__31858__auto__,c__31946__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31859__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31859__auto____0 = (function (){
var statearr_40902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40902[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31859__auto__);

(statearr_40902[(1)] = (1));

return statearr_40902;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31859__auto____1 = (function (state_40866){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_40866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e40903){if((e40903 instanceof Object)){
var ex__31862__auto__ = e40903;
var statearr_40904_40930 = state_40866;
(statearr_40904_40930[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40931 = state_40866;
state_40866 = G__40931;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31859__auto__ = function(state_40866){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31859__auto____1.call(this,state_40866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31859__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31859__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto__))
})();
var state__31948__auto__ = (function (){var statearr_40905 = f__31947__auto__.call(null);
(statearr_40905[(6)] = c__31946__auto__);

return statearr_40905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto__))
);

return c__31946__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40933 = arguments.length;
switch (G__40933) {
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
var G__40936 = arguments.length;
switch (G__40936) {
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
var G__40939 = arguments.length;
switch (G__40939) {
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
var c__31946__auto___40986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___40986,out){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___40986,out){
return (function (state_40963){
var state_val_40964 = (state_40963[(1)]);
if((state_val_40964 === (7))){
var inst_40958 = (state_40963[(2)]);
var state_40963__$1 = state_40963;
var statearr_40965_40987 = state_40963__$1;
(statearr_40965_40987[(2)] = inst_40958);

(statearr_40965_40987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (1))){
var inst_40940 = null;
var state_40963__$1 = (function (){var statearr_40966 = state_40963;
(statearr_40966[(7)] = inst_40940);

return statearr_40966;
})();
var statearr_40967_40988 = state_40963__$1;
(statearr_40967_40988[(2)] = null);

(statearr_40967_40988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (4))){
var inst_40943 = (state_40963[(8)]);
var inst_40943__$1 = (state_40963[(2)]);
var inst_40944 = (inst_40943__$1 == null);
var inst_40945 = cljs.core.not.call(null,inst_40944);
var state_40963__$1 = (function (){var statearr_40968 = state_40963;
(statearr_40968[(8)] = inst_40943__$1);

return statearr_40968;
})();
if(inst_40945){
var statearr_40969_40989 = state_40963__$1;
(statearr_40969_40989[(1)] = (5));

} else {
var statearr_40970_40990 = state_40963__$1;
(statearr_40970_40990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (6))){
var state_40963__$1 = state_40963;
var statearr_40971_40991 = state_40963__$1;
(statearr_40971_40991[(2)] = null);

(statearr_40971_40991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (3))){
var inst_40960 = (state_40963[(2)]);
var inst_40961 = cljs.core.async.close_BANG_.call(null,out);
var state_40963__$1 = (function (){var statearr_40972 = state_40963;
(statearr_40972[(9)] = inst_40960);

return statearr_40972;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40963__$1,inst_40961);
} else {
if((state_val_40964 === (2))){
var state_40963__$1 = state_40963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40963__$1,(4),ch);
} else {
if((state_val_40964 === (11))){
var inst_40943 = (state_40963[(8)]);
var inst_40952 = (state_40963[(2)]);
var inst_40940 = inst_40943;
var state_40963__$1 = (function (){var statearr_40973 = state_40963;
(statearr_40973[(7)] = inst_40940);

(statearr_40973[(10)] = inst_40952);

return statearr_40973;
})();
var statearr_40974_40992 = state_40963__$1;
(statearr_40974_40992[(2)] = null);

(statearr_40974_40992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (9))){
var inst_40943 = (state_40963[(8)]);
var state_40963__$1 = state_40963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40963__$1,(11),out,inst_40943);
} else {
if((state_val_40964 === (5))){
var inst_40940 = (state_40963[(7)]);
var inst_40943 = (state_40963[(8)]);
var inst_40947 = cljs.core._EQ_.call(null,inst_40943,inst_40940);
var state_40963__$1 = state_40963;
if(inst_40947){
var statearr_40976_40993 = state_40963__$1;
(statearr_40976_40993[(1)] = (8));

} else {
var statearr_40977_40994 = state_40963__$1;
(statearr_40977_40994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (10))){
var inst_40955 = (state_40963[(2)]);
var state_40963__$1 = state_40963;
var statearr_40978_40995 = state_40963__$1;
(statearr_40978_40995[(2)] = inst_40955);

(statearr_40978_40995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (8))){
var inst_40940 = (state_40963[(7)]);
var tmp40975 = inst_40940;
var inst_40940__$1 = tmp40975;
var state_40963__$1 = (function (){var statearr_40979 = state_40963;
(statearr_40979[(7)] = inst_40940__$1);

return statearr_40979;
})();
var statearr_40980_40996 = state_40963__$1;
(statearr_40980_40996[(2)] = null);

(statearr_40980_40996[(1)] = (2));


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
});})(c__31946__auto___40986,out))
;
return ((function (switch__31858__auto__,c__31946__auto___40986,out){
return (function() {
var cljs$core$async$state_machine__31859__auto__ = null;
var cljs$core$async$state_machine__31859__auto____0 = (function (){
var statearr_40981 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40981[(0)] = cljs$core$async$state_machine__31859__auto__);

(statearr_40981[(1)] = (1));

return statearr_40981;
});
var cljs$core$async$state_machine__31859__auto____1 = (function (state_40963){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_40963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e40982){if((e40982 instanceof Object)){
var ex__31862__auto__ = e40982;
var statearr_40983_40997 = state_40963;
(statearr_40983_40997[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40998 = state_40963;
state_40963 = G__40998;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$state_machine__31859__auto__ = function(state_40963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31859__auto____1.call(this,state_40963);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31859__auto____0;
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31859__auto____1;
return cljs$core$async$state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___40986,out))
})();
var state__31948__auto__ = (function (){var statearr_40984 = f__31947__auto__.call(null);
(statearr_40984[(6)] = c__31946__auto___40986);

return statearr_40984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___40986,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41000 = arguments.length;
switch (G__41000) {
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
var c__31946__auto___41066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___41066,out){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___41066,out){
return (function (state_41038){
var state_val_41039 = (state_41038[(1)]);
if((state_val_41039 === (7))){
var inst_41034 = (state_41038[(2)]);
var state_41038__$1 = state_41038;
var statearr_41040_41067 = state_41038__$1;
(statearr_41040_41067[(2)] = inst_41034);

(statearr_41040_41067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (1))){
var inst_41001 = (new Array(n));
var inst_41002 = inst_41001;
var inst_41003 = (0);
var state_41038__$1 = (function (){var statearr_41041 = state_41038;
(statearr_41041[(7)] = inst_41002);

(statearr_41041[(8)] = inst_41003);

return statearr_41041;
})();
var statearr_41042_41068 = state_41038__$1;
(statearr_41042_41068[(2)] = null);

(statearr_41042_41068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (4))){
var inst_41006 = (state_41038[(9)]);
var inst_41006__$1 = (state_41038[(2)]);
var inst_41007 = (inst_41006__$1 == null);
var inst_41008 = cljs.core.not.call(null,inst_41007);
var state_41038__$1 = (function (){var statearr_41043 = state_41038;
(statearr_41043[(9)] = inst_41006__$1);

return statearr_41043;
})();
if(inst_41008){
var statearr_41044_41069 = state_41038__$1;
(statearr_41044_41069[(1)] = (5));

} else {
var statearr_41045_41070 = state_41038__$1;
(statearr_41045_41070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (15))){
var inst_41028 = (state_41038[(2)]);
var state_41038__$1 = state_41038;
var statearr_41046_41071 = state_41038__$1;
(statearr_41046_41071[(2)] = inst_41028);

(statearr_41046_41071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (13))){
var state_41038__$1 = state_41038;
var statearr_41047_41072 = state_41038__$1;
(statearr_41047_41072[(2)] = null);

(statearr_41047_41072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (6))){
var inst_41003 = (state_41038[(8)]);
var inst_41024 = (inst_41003 > (0));
var state_41038__$1 = state_41038;
if(cljs.core.truth_(inst_41024)){
var statearr_41048_41073 = state_41038__$1;
(statearr_41048_41073[(1)] = (12));

} else {
var statearr_41049_41074 = state_41038__$1;
(statearr_41049_41074[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (3))){
var inst_41036 = (state_41038[(2)]);
var state_41038__$1 = state_41038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41038__$1,inst_41036);
} else {
if((state_val_41039 === (12))){
var inst_41002 = (state_41038[(7)]);
var inst_41026 = cljs.core.vec.call(null,inst_41002);
var state_41038__$1 = state_41038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41038__$1,(15),out,inst_41026);
} else {
if((state_val_41039 === (2))){
var state_41038__$1 = state_41038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41038__$1,(4),ch);
} else {
if((state_val_41039 === (11))){
var inst_41018 = (state_41038[(2)]);
var inst_41019 = (new Array(n));
var inst_41002 = inst_41019;
var inst_41003 = (0);
var state_41038__$1 = (function (){var statearr_41050 = state_41038;
(statearr_41050[(7)] = inst_41002);

(statearr_41050[(8)] = inst_41003);

(statearr_41050[(10)] = inst_41018);

return statearr_41050;
})();
var statearr_41051_41075 = state_41038__$1;
(statearr_41051_41075[(2)] = null);

(statearr_41051_41075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (9))){
var inst_41002 = (state_41038[(7)]);
var inst_41016 = cljs.core.vec.call(null,inst_41002);
var state_41038__$1 = state_41038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41038__$1,(11),out,inst_41016);
} else {
if((state_val_41039 === (5))){
var inst_41002 = (state_41038[(7)]);
var inst_41006 = (state_41038[(9)]);
var inst_41011 = (state_41038[(11)]);
var inst_41003 = (state_41038[(8)]);
var inst_41010 = (inst_41002[inst_41003] = inst_41006);
var inst_41011__$1 = (inst_41003 + (1));
var inst_41012 = (inst_41011__$1 < n);
var state_41038__$1 = (function (){var statearr_41052 = state_41038;
(statearr_41052[(12)] = inst_41010);

(statearr_41052[(11)] = inst_41011__$1);

return statearr_41052;
})();
if(cljs.core.truth_(inst_41012)){
var statearr_41053_41076 = state_41038__$1;
(statearr_41053_41076[(1)] = (8));

} else {
var statearr_41054_41077 = state_41038__$1;
(statearr_41054_41077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (14))){
var inst_41031 = (state_41038[(2)]);
var inst_41032 = cljs.core.async.close_BANG_.call(null,out);
var state_41038__$1 = (function (){var statearr_41056 = state_41038;
(statearr_41056[(13)] = inst_41031);

return statearr_41056;
})();
var statearr_41057_41078 = state_41038__$1;
(statearr_41057_41078[(2)] = inst_41032);

(statearr_41057_41078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (10))){
var inst_41022 = (state_41038[(2)]);
var state_41038__$1 = state_41038;
var statearr_41058_41079 = state_41038__$1;
(statearr_41058_41079[(2)] = inst_41022);

(statearr_41058_41079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41039 === (8))){
var inst_41002 = (state_41038[(7)]);
var inst_41011 = (state_41038[(11)]);
var tmp41055 = inst_41002;
var inst_41002__$1 = tmp41055;
var inst_41003 = inst_41011;
var state_41038__$1 = (function (){var statearr_41059 = state_41038;
(statearr_41059[(7)] = inst_41002__$1);

(statearr_41059[(8)] = inst_41003);

return statearr_41059;
})();
var statearr_41060_41080 = state_41038__$1;
(statearr_41060_41080[(2)] = null);

(statearr_41060_41080[(1)] = (2));


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
});})(c__31946__auto___41066,out))
;
return ((function (switch__31858__auto__,c__31946__auto___41066,out){
return (function() {
var cljs$core$async$state_machine__31859__auto__ = null;
var cljs$core$async$state_machine__31859__auto____0 = (function (){
var statearr_41061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41061[(0)] = cljs$core$async$state_machine__31859__auto__);

(statearr_41061[(1)] = (1));

return statearr_41061;
});
var cljs$core$async$state_machine__31859__auto____1 = (function (state_41038){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_41038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e41062){if((e41062 instanceof Object)){
var ex__31862__auto__ = e41062;
var statearr_41063_41081 = state_41038;
(statearr_41063_41081[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41082 = state_41038;
state_41038 = G__41082;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$state_machine__31859__auto__ = function(state_41038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31859__auto____1.call(this,state_41038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31859__auto____0;
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31859__auto____1;
return cljs$core$async$state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___41066,out))
})();
var state__31948__auto__ = (function (){var statearr_41064 = f__31947__auto__.call(null);
(statearr_41064[(6)] = c__31946__auto___41066);

return statearr_41064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___41066,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41084 = arguments.length;
switch (G__41084) {
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
var c__31946__auto___41154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31946__auto___41154,out){
return (function (){
var f__31947__auto__ = (function (){var switch__31858__auto__ = ((function (c__31946__auto___41154,out){
return (function (state_41126){
var state_val_41127 = (state_41126[(1)]);
if((state_val_41127 === (7))){
var inst_41122 = (state_41126[(2)]);
var state_41126__$1 = state_41126;
var statearr_41128_41155 = state_41126__$1;
(statearr_41128_41155[(2)] = inst_41122);

(statearr_41128_41155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (1))){
var inst_41085 = [];
var inst_41086 = inst_41085;
var inst_41087 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41126__$1 = (function (){var statearr_41129 = state_41126;
(statearr_41129[(7)] = inst_41087);

(statearr_41129[(8)] = inst_41086);

return statearr_41129;
})();
var statearr_41130_41156 = state_41126__$1;
(statearr_41130_41156[(2)] = null);

(statearr_41130_41156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (4))){
var inst_41090 = (state_41126[(9)]);
var inst_41090__$1 = (state_41126[(2)]);
var inst_41091 = (inst_41090__$1 == null);
var inst_41092 = cljs.core.not.call(null,inst_41091);
var state_41126__$1 = (function (){var statearr_41131 = state_41126;
(statearr_41131[(9)] = inst_41090__$1);

return statearr_41131;
})();
if(inst_41092){
var statearr_41132_41157 = state_41126__$1;
(statearr_41132_41157[(1)] = (5));

} else {
var statearr_41133_41158 = state_41126__$1;
(statearr_41133_41158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (15))){
var inst_41116 = (state_41126[(2)]);
var state_41126__$1 = state_41126;
var statearr_41134_41159 = state_41126__$1;
(statearr_41134_41159[(2)] = inst_41116);

(statearr_41134_41159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (13))){
var state_41126__$1 = state_41126;
var statearr_41135_41160 = state_41126__$1;
(statearr_41135_41160[(2)] = null);

(statearr_41135_41160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (6))){
var inst_41086 = (state_41126[(8)]);
var inst_41111 = inst_41086.length;
var inst_41112 = (inst_41111 > (0));
var state_41126__$1 = state_41126;
if(cljs.core.truth_(inst_41112)){
var statearr_41136_41161 = state_41126__$1;
(statearr_41136_41161[(1)] = (12));

} else {
var statearr_41137_41162 = state_41126__$1;
(statearr_41137_41162[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (3))){
var inst_41124 = (state_41126[(2)]);
var state_41126__$1 = state_41126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41126__$1,inst_41124);
} else {
if((state_val_41127 === (12))){
var inst_41086 = (state_41126[(8)]);
var inst_41114 = cljs.core.vec.call(null,inst_41086);
var state_41126__$1 = state_41126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41126__$1,(15),out,inst_41114);
} else {
if((state_val_41127 === (2))){
var state_41126__$1 = state_41126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41126__$1,(4),ch);
} else {
if((state_val_41127 === (11))){
var inst_41094 = (state_41126[(10)]);
var inst_41090 = (state_41126[(9)]);
var inst_41104 = (state_41126[(2)]);
var inst_41105 = [];
var inst_41106 = inst_41105.push(inst_41090);
var inst_41086 = inst_41105;
var inst_41087 = inst_41094;
var state_41126__$1 = (function (){var statearr_41138 = state_41126;
(statearr_41138[(11)] = inst_41104);

(statearr_41138[(7)] = inst_41087);

(statearr_41138[(12)] = inst_41106);

(statearr_41138[(8)] = inst_41086);

return statearr_41138;
})();
var statearr_41139_41163 = state_41126__$1;
(statearr_41139_41163[(2)] = null);

(statearr_41139_41163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (9))){
var inst_41086 = (state_41126[(8)]);
var inst_41102 = cljs.core.vec.call(null,inst_41086);
var state_41126__$1 = state_41126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41126__$1,(11),out,inst_41102);
} else {
if((state_val_41127 === (5))){
var inst_41094 = (state_41126[(10)]);
var inst_41087 = (state_41126[(7)]);
var inst_41090 = (state_41126[(9)]);
var inst_41094__$1 = f.call(null,inst_41090);
var inst_41095 = cljs.core._EQ_.call(null,inst_41094__$1,inst_41087);
var inst_41096 = cljs.core.keyword_identical_QMARK_.call(null,inst_41087,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41097 = (inst_41095) || (inst_41096);
var state_41126__$1 = (function (){var statearr_41140 = state_41126;
(statearr_41140[(10)] = inst_41094__$1);

return statearr_41140;
})();
if(cljs.core.truth_(inst_41097)){
var statearr_41141_41164 = state_41126__$1;
(statearr_41141_41164[(1)] = (8));

} else {
var statearr_41142_41165 = state_41126__$1;
(statearr_41142_41165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (14))){
var inst_41119 = (state_41126[(2)]);
var inst_41120 = cljs.core.async.close_BANG_.call(null,out);
var state_41126__$1 = (function (){var statearr_41144 = state_41126;
(statearr_41144[(13)] = inst_41119);

return statearr_41144;
})();
var statearr_41145_41166 = state_41126__$1;
(statearr_41145_41166[(2)] = inst_41120);

(statearr_41145_41166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (10))){
var inst_41109 = (state_41126[(2)]);
var state_41126__$1 = state_41126;
var statearr_41146_41167 = state_41126__$1;
(statearr_41146_41167[(2)] = inst_41109);

(statearr_41146_41167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41127 === (8))){
var inst_41094 = (state_41126[(10)]);
var inst_41086 = (state_41126[(8)]);
var inst_41090 = (state_41126[(9)]);
var inst_41099 = inst_41086.push(inst_41090);
var tmp41143 = inst_41086;
var inst_41086__$1 = tmp41143;
var inst_41087 = inst_41094;
var state_41126__$1 = (function (){var statearr_41147 = state_41126;
(statearr_41147[(7)] = inst_41087);

(statearr_41147[(14)] = inst_41099);

(statearr_41147[(8)] = inst_41086__$1);

return statearr_41147;
})();
var statearr_41148_41168 = state_41126__$1;
(statearr_41148_41168[(2)] = null);

(statearr_41148_41168[(1)] = (2));


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
});})(c__31946__auto___41154,out))
;
return ((function (switch__31858__auto__,c__31946__auto___41154,out){
return (function() {
var cljs$core$async$state_machine__31859__auto__ = null;
var cljs$core$async$state_machine__31859__auto____0 = (function (){
var statearr_41149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41149[(0)] = cljs$core$async$state_machine__31859__auto__);

(statearr_41149[(1)] = (1));

return statearr_41149;
});
var cljs$core$async$state_machine__31859__auto____1 = (function (state_41126){
while(true){
var ret_value__31860__auto__ = (function (){try{while(true){
var result__31861__auto__ = switch__31858__auto__.call(null,state_41126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31861__auto__;
}
break;
}
}catch (e41150){if((e41150 instanceof Object)){
var ex__31862__auto__ = e41150;
var statearr_41151_41169 = state_41126;
(statearr_41151_41169[(5)] = ex__31862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41170 = state_41126;
state_41126 = G__41170;
continue;
} else {
return ret_value__31860__auto__;
}
break;
}
});
cljs$core$async$state_machine__31859__auto__ = function(state_41126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31859__auto____1.call(this,state_41126);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31859__auto____0;
cljs$core$async$state_machine__31859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31859__auto____1;
return cljs$core$async$state_machine__31859__auto__;
})()
;})(switch__31858__auto__,c__31946__auto___41154,out))
})();
var state__31948__auto__ = (function (){var statearr_41152 = f__31947__auto__.call(null);
(statearr_41152[(6)] = c__31946__auto___41154);

return statearr_41152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31948__auto__);
});})(c__31946__auto___41154,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1515054928641
