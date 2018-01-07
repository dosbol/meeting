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
var G__39329 = arguments.length;
switch (G__39329) {
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
if(typeof cljs.core.async.t_cljs$core$async39330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39330 = (function (f,blockable,meta39331){
this.f = f;
this.blockable = blockable;
this.meta39331 = meta39331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39332,meta39331__$1){
var self__ = this;
var _39332__$1 = this;
return (new cljs.core.async.t_cljs$core$async39330(self__.f,self__.blockable,meta39331__$1));
});

cljs.core.async.t_cljs$core$async39330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39332){
var self__ = this;
var _39332__$1 = this;
return self__.meta39331;
});

cljs.core.async.t_cljs$core$async39330.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39330.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39330.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39330.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39331","meta39331",1241333378,null)], null);
});

cljs.core.async.t_cljs$core$async39330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39330";

cljs.core.async.t_cljs$core$async39330.cljs$lang$ctorPrWriter = (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async39330");
});

cljs.core.async.__GT_t_cljs$core$async39330 = (function cljs$core$async$__GT_t_cljs$core$async39330(f__$1,blockable__$1,meta39331){
return (new cljs.core.async.t_cljs$core$async39330(f__$1,blockable__$1,meta39331));
});

}

return (new cljs.core.async.t_cljs$core$async39330(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39336 = arguments.length;
switch (G__39336) {
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
var G__39339 = arguments.length;
switch (G__39339) {
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
var G__39342 = arguments.length;
switch (G__39342) {
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
var val_39344 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39344);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39344,ret){
return (function (){
return fn1.call(null,val_39344);
});})(val_39344,ret))
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
var G__39346 = arguments.length;
switch (G__39346) {
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
var n__28141__auto___39348 = n;
var x_39349 = (0);
while(true){
if((x_39349 < n__28141__auto___39348)){
(a[x_39349] = (0));

var G__39350 = (x_39349 + (1));
x_39349 = G__39350;
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

var G__39351 = (i + (1));
i = G__39351;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39352 = (function (flag,meta39353){
this.flag = flag;
this.meta39353 = meta39353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39354,meta39353__$1){
var self__ = this;
var _39354__$1 = this;
return (new cljs.core.async.t_cljs$core$async39352(self__.flag,meta39353__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39352.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39354){
var self__ = this;
var _39354__$1 = this;
return self__.meta39353;
});})(flag))
;

cljs.core.async.t_cljs$core$async39352.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39352.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39353","meta39353",965813530,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39352";

cljs.core.async.t_cljs$core$async39352.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async39352");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39352 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39352(flag__$1,meta39353){
return (new cljs.core.async.t_cljs$core$async39352(flag__$1,meta39353));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39352(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39355 = (function (flag,cb,meta39356){
this.flag = flag;
this.cb = cb;
this.meta39356 = meta39356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39357,meta39356__$1){
var self__ = this;
var _39357__$1 = this;
return (new cljs.core.async.t_cljs$core$async39355(self__.flag,self__.cb,meta39356__$1));
});

cljs.core.async.t_cljs$core$async39355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39357){
var self__ = this;
var _39357__$1 = this;
return self__.meta39356;
});

cljs.core.async.t_cljs$core$async39355.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39355.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39356","meta39356",-2082960160,null)], null);
});

cljs.core.async.t_cljs$core$async39355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39355";

cljs.core.async.t_cljs$core$async39355.cljs$lang$ctorPrWriter = (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async39355");
});

cljs.core.async.__GT_t_cljs$core$async39355 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39355(flag__$1,cb__$1,meta39356){
return (new cljs.core.async.t_cljs$core$async39355(flag__$1,cb__$1,meta39356));
});

}

return (new cljs.core.async.t_cljs$core$async39355(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39358_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39358_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39359_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39359_SHARP_,port], null));
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
var G__39360 = (i + (1));
i = G__39360;
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
var args__28373__auto__ = [];
var len__28366__auto___39366 = arguments.length;
var i__28367__auto___39367 = (0);
while(true){
if((i__28367__auto___39367 < len__28366__auto___39366)){
args__28373__auto__.push((arguments[i__28367__auto___39367]));

var G__39368 = (i__28367__auto___39367 + (1));
i__28367__auto___39367 = G__39368;
continue;
} else {
}
break;
}

var argseq__28374__auto__ = ((((1) < args__28373__auto__.length))?(new cljs.core.IndexedSeq(args__28373__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28374__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39363){
var map__39364 = p__39363;
var map__39364__$1 = ((((!((map__39364 == null)))?((((map__39364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39364):map__39364);
var opts = map__39364__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39361){
var G__39362 = cljs.core.first.call(null,seq39361);
var seq39361__$1 = cljs.core.next.call(null,seq39361);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39362,seq39361__$1);
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
var G__39370 = arguments.length;
switch (G__39370) {
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
var c__30625__auto___39416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___39416){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___39416){
return (function (state_39394){
var state_val_39395 = (state_39394[(1)]);
if((state_val_39395 === (7))){
var inst_39390 = (state_39394[(2)]);
var state_39394__$1 = state_39394;
var statearr_39396_39417 = state_39394__$1;
(statearr_39396_39417[(2)] = inst_39390);

(statearr_39396_39417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (1))){
var state_39394__$1 = state_39394;
var statearr_39397_39418 = state_39394__$1;
(statearr_39397_39418[(2)] = null);

(statearr_39397_39418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (4))){
var inst_39373 = (state_39394[(7)]);
var inst_39373__$1 = (state_39394[(2)]);
var inst_39374 = (inst_39373__$1 == null);
var state_39394__$1 = (function (){var statearr_39398 = state_39394;
(statearr_39398[(7)] = inst_39373__$1);

return statearr_39398;
})();
if(cljs.core.truth_(inst_39374)){
var statearr_39399_39419 = state_39394__$1;
(statearr_39399_39419[(1)] = (5));

} else {
var statearr_39400_39420 = state_39394__$1;
(statearr_39400_39420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (13))){
var state_39394__$1 = state_39394;
var statearr_39401_39421 = state_39394__$1;
(statearr_39401_39421[(2)] = null);

(statearr_39401_39421[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (6))){
var inst_39373 = (state_39394[(7)]);
var state_39394__$1 = state_39394;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39394__$1,(11),to,inst_39373);
} else {
if((state_val_39395 === (3))){
var inst_39392 = (state_39394[(2)]);
var state_39394__$1 = state_39394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39394__$1,inst_39392);
} else {
if((state_val_39395 === (12))){
var state_39394__$1 = state_39394;
var statearr_39402_39422 = state_39394__$1;
(statearr_39402_39422[(2)] = null);

(statearr_39402_39422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (2))){
var state_39394__$1 = state_39394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39394__$1,(4),from);
} else {
if((state_val_39395 === (11))){
var inst_39383 = (state_39394[(2)]);
var state_39394__$1 = state_39394;
if(cljs.core.truth_(inst_39383)){
var statearr_39403_39423 = state_39394__$1;
(statearr_39403_39423[(1)] = (12));

} else {
var statearr_39404_39424 = state_39394__$1;
(statearr_39404_39424[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (9))){
var state_39394__$1 = state_39394;
var statearr_39405_39425 = state_39394__$1;
(statearr_39405_39425[(2)] = null);

(statearr_39405_39425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (5))){
var state_39394__$1 = state_39394;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39406_39426 = state_39394__$1;
(statearr_39406_39426[(1)] = (8));

} else {
var statearr_39407_39427 = state_39394__$1;
(statearr_39407_39427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (14))){
var inst_39388 = (state_39394[(2)]);
var state_39394__$1 = state_39394;
var statearr_39408_39428 = state_39394__$1;
(statearr_39408_39428[(2)] = inst_39388);

(statearr_39408_39428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (10))){
var inst_39380 = (state_39394[(2)]);
var state_39394__$1 = state_39394;
var statearr_39409_39429 = state_39394__$1;
(statearr_39409_39429[(2)] = inst_39380);

(statearr_39409_39429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39395 === (8))){
var inst_39377 = cljs.core.async.close_BANG_.call(null,to);
var state_39394__$1 = state_39394;
var statearr_39410_39430 = state_39394__$1;
(statearr_39410_39430[(2)] = inst_39377);

(statearr_39410_39430[(1)] = (10));


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
});})(c__30625__auto___39416))
;
return ((function (switch__30537__auto__,c__30625__auto___39416){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_39411 = [null,null,null,null,null,null,null,null];
(statearr_39411[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_39411[(1)] = (1));

return statearr_39411;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_39394){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39412){if((e39412 instanceof Object)){
var ex__30541__auto__ = e39412;
var statearr_39413_39431 = state_39394;
(statearr_39413_39431[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39432 = state_39394;
state_39394 = G__39432;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_39394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_39394);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___39416))
})();
var state__30627__auto__ = (function (){var statearr_39414 = f__30626__auto__.call(null);
(statearr_39414[(6)] = c__30625__auto___39416);

return statearr_39414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___39416))
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
return (function (p__39433){
var vec__39434 = p__39433;
var v = cljs.core.nth.call(null,vec__39434,(0),null);
var p = cljs.core.nth.call(null,vec__39434,(1),null);
var job = vec__39434;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30625__auto___39605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___39605,res,vec__39434,v,p,job,jobs,results){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___39605,res,vec__39434,v,p,job,jobs,results){
return (function (state_39441){
var state_val_39442 = (state_39441[(1)]);
if((state_val_39442 === (1))){
var state_39441__$1 = state_39441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39441__$1,(2),res,v);
} else {
if((state_val_39442 === (2))){
var inst_39438 = (state_39441[(2)]);
var inst_39439 = cljs.core.async.close_BANG_.call(null,res);
var state_39441__$1 = (function (){var statearr_39443 = state_39441;
(statearr_39443[(7)] = inst_39438);

return statearr_39443;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39441__$1,inst_39439);
} else {
return null;
}
}
});})(c__30625__auto___39605,res,vec__39434,v,p,job,jobs,results))
;
return ((function (switch__30537__auto__,c__30625__auto___39605,res,vec__39434,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0 = (function (){
var statearr_39444 = [null,null,null,null,null,null,null,null];
(statearr_39444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__);

(statearr_39444[(1)] = (1));

return statearr_39444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1 = (function (state_39441){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39445){if((e39445 instanceof Object)){
var ex__30541__auto__ = e39445;
var statearr_39446_39606 = state_39441;
(statearr_39446_39606[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39607 = state_39441;
state_39441 = G__39607;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = function(state_39441){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1.call(this,state_39441);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___39605,res,vec__39434,v,p,job,jobs,results))
})();
var state__30627__auto__ = (function (){var statearr_39447 = f__30626__auto__.call(null);
(statearr_39447[(6)] = c__30625__auto___39605);

return statearr_39447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___39605,res,vec__39434,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39448){
var vec__39449 = p__39448;
var v = cljs.core.nth.call(null,vec__39449,(0),null);
var p = cljs.core.nth.call(null,vec__39449,(1),null);
var job = vec__39449;
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
var n__28141__auto___39608 = n;
var __39609 = (0);
while(true){
if((__39609 < n__28141__auto___39608)){
var G__39452_39610 = type;
var G__39452_39611__$1 = (((G__39452_39610 instanceof cljs.core.Keyword))?G__39452_39610.fqn:null);
switch (G__39452_39611__$1) {
case "compute":
var c__30625__auto___39613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39609,c__30625__auto___39613,G__39452_39610,G__39452_39611__$1,n__28141__auto___39608,jobs,results,process,async){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (__39609,c__30625__auto___39613,G__39452_39610,G__39452_39611__$1,n__28141__auto___39608,jobs,results,process,async){
return (function (state_39465){
var state_val_39466 = (state_39465[(1)]);
if((state_val_39466 === (1))){
var state_39465__$1 = state_39465;
var statearr_39467_39614 = state_39465__$1;
(statearr_39467_39614[(2)] = null);

(statearr_39467_39614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39466 === (2))){
var state_39465__$1 = state_39465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39465__$1,(4),jobs);
} else {
if((state_val_39466 === (3))){
var inst_39463 = (state_39465[(2)]);
var state_39465__$1 = state_39465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39465__$1,inst_39463);
} else {
if((state_val_39466 === (4))){
var inst_39455 = (state_39465[(2)]);
var inst_39456 = process.call(null,inst_39455);
var state_39465__$1 = state_39465;
if(cljs.core.truth_(inst_39456)){
var statearr_39468_39615 = state_39465__$1;
(statearr_39468_39615[(1)] = (5));

} else {
var statearr_39469_39616 = state_39465__$1;
(statearr_39469_39616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39466 === (5))){
var state_39465__$1 = state_39465;
var statearr_39470_39617 = state_39465__$1;
(statearr_39470_39617[(2)] = null);

(statearr_39470_39617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39466 === (6))){
var state_39465__$1 = state_39465;
var statearr_39471_39618 = state_39465__$1;
(statearr_39471_39618[(2)] = null);

(statearr_39471_39618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39466 === (7))){
var inst_39461 = (state_39465[(2)]);
var state_39465__$1 = state_39465;
var statearr_39472_39619 = state_39465__$1;
(statearr_39472_39619[(2)] = inst_39461);

(statearr_39472_39619[(1)] = (3));


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
});})(__39609,c__30625__auto___39613,G__39452_39610,G__39452_39611__$1,n__28141__auto___39608,jobs,results,process,async))
;
return ((function (__39609,switch__30537__auto__,c__30625__auto___39613,G__39452_39610,G__39452_39611__$1,n__28141__auto___39608,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0 = (function (){
var statearr_39473 = [null,null,null,null,null,null,null];
(statearr_39473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__);

(statearr_39473[(1)] = (1));

return statearr_39473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1 = (function (state_39465){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39474){if((e39474 instanceof Object)){
var ex__30541__auto__ = e39474;
var statearr_39475_39620 = state_39465;
(statearr_39475_39620[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39621 = state_39465;
state_39465 = G__39621;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = function(state_39465){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1.call(this,state_39465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__;
})()
;})(__39609,switch__30537__auto__,c__30625__auto___39613,G__39452_39610,G__39452_39611__$1,n__28141__auto___39608,jobs,results,process,async))
})();
var state__30627__auto__ = (function (){var statearr_39476 = f__30626__auto__.call(null);
(statearr_39476[(6)] = c__30625__auto___39613);

return statearr_39476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(__39609,c__30625__auto___39613,G__39452_39610,G__39452_39611__$1,n__28141__auto___39608,jobs,results,process,async))
);


break;
case "async":
var c__30625__auto___39622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39609,c__30625__auto___39622,G__39452_39610,G__39452_39611__$1,n__28141__auto___39608,jobs,results,process,async){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (__39609,c__30625__auto___39622,G__39452_39610,G__39452_39611__$1,n__28141__auto___39608,jobs,results,process,async){
return (function (state_39489){
var state_val_39490 = (state_39489[(1)]);
if((state_val_39490 === (1))){
var state_39489__$1 = state_39489;
var statearr_39491_39623 = state_39489__$1;
(statearr_39491_39623[(2)] = null);

(statearr_39491_39623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39490 === (2))){
var state_39489__$1 = state_39489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39489__$1,(4),jobs);
} else {
if((state_val_39490 === (3))){
var inst_39487 = (state_39489[(2)]);
var state_39489__$1 = state_39489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39489__$1,inst_39487);
} else {
if((state_val_39490 === (4))){
var inst_39479 = (state_39489[(2)]);
var inst_39480 = async.call(null,inst_39479);
var state_39489__$1 = state_39489;
if(cljs.core.truth_(inst_39480)){
var statearr_39492_39624 = state_39489__$1;
(statearr_39492_39624[(1)] = (5));

} else {
var statearr_39493_39625 = state_39489__$1;
(statearr_39493_39625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39490 === (5))){
var state_39489__$1 = state_39489;
var statearr_39494_39626 = state_39489__$1;
(statearr_39494_39626[(2)] = null);

(statearr_39494_39626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39490 === (6))){
var state_39489__$1 = state_39489;
var statearr_39495_39627 = state_39489__$1;
(statearr_39495_39627[(2)] = null);

(statearr_39495_39627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39490 === (7))){
var inst_39485 = (state_39489[(2)]);
var state_39489__$1 = state_39489;
var statearr_39496_39628 = state_39489__$1;
(statearr_39496_39628[(2)] = inst_39485);

(statearr_39496_39628[(1)] = (3));


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
});})(__39609,c__30625__auto___39622,G__39452_39610,G__39452_39611__$1,n__28141__auto___39608,jobs,results,process,async))
;
return ((function (__39609,switch__30537__auto__,c__30625__auto___39622,G__39452_39610,G__39452_39611__$1,n__28141__auto___39608,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0 = (function (){
var statearr_39497 = [null,null,null,null,null,null,null];
(statearr_39497[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__);

(statearr_39497[(1)] = (1));

return statearr_39497;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1 = (function (state_39489){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39498){if((e39498 instanceof Object)){
var ex__30541__auto__ = e39498;
var statearr_39499_39629 = state_39489;
(statearr_39499_39629[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39630 = state_39489;
state_39489 = G__39630;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = function(state_39489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1.call(this,state_39489);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__;
})()
;})(__39609,switch__30537__auto__,c__30625__auto___39622,G__39452_39610,G__39452_39611__$1,n__28141__auto___39608,jobs,results,process,async))
})();
var state__30627__auto__ = (function (){var statearr_39500 = f__30626__auto__.call(null);
(statearr_39500[(6)] = c__30625__auto___39622);

return statearr_39500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(__39609,c__30625__auto___39622,G__39452_39610,G__39452_39611__$1,n__28141__auto___39608,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39452_39611__$1)].join('')));

}

var G__39631 = (__39609 + (1));
__39609 = G__39631;
continue;
} else {
}
break;
}

var c__30625__auto___39632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___39632,jobs,results,process,async){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___39632,jobs,results,process,async){
return (function (state_39522){
var state_val_39523 = (state_39522[(1)]);
if((state_val_39523 === (1))){
var state_39522__$1 = state_39522;
var statearr_39524_39633 = state_39522__$1;
(statearr_39524_39633[(2)] = null);

(statearr_39524_39633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39523 === (2))){
var state_39522__$1 = state_39522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39522__$1,(4),from);
} else {
if((state_val_39523 === (3))){
var inst_39520 = (state_39522[(2)]);
var state_39522__$1 = state_39522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39522__$1,inst_39520);
} else {
if((state_val_39523 === (4))){
var inst_39503 = (state_39522[(7)]);
var inst_39503__$1 = (state_39522[(2)]);
var inst_39504 = (inst_39503__$1 == null);
var state_39522__$1 = (function (){var statearr_39525 = state_39522;
(statearr_39525[(7)] = inst_39503__$1);

return statearr_39525;
})();
if(cljs.core.truth_(inst_39504)){
var statearr_39526_39634 = state_39522__$1;
(statearr_39526_39634[(1)] = (5));

} else {
var statearr_39527_39635 = state_39522__$1;
(statearr_39527_39635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39523 === (5))){
var inst_39506 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39522__$1 = state_39522;
var statearr_39528_39636 = state_39522__$1;
(statearr_39528_39636[(2)] = inst_39506);

(statearr_39528_39636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39523 === (6))){
var inst_39508 = (state_39522[(8)]);
var inst_39503 = (state_39522[(7)]);
var inst_39508__$1 = cljs.core.async.chan.call(null,(1));
var inst_39509 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39510 = [inst_39503,inst_39508__$1];
var inst_39511 = (new cljs.core.PersistentVector(null,2,(5),inst_39509,inst_39510,null));
var state_39522__$1 = (function (){var statearr_39529 = state_39522;
(statearr_39529[(8)] = inst_39508__$1);

return statearr_39529;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39522__$1,(8),jobs,inst_39511);
} else {
if((state_val_39523 === (7))){
var inst_39518 = (state_39522[(2)]);
var state_39522__$1 = state_39522;
var statearr_39530_39637 = state_39522__$1;
(statearr_39530_39637[(2)] = inst_39518);

(statearr_39530_39637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39523 === (8))){
var inst_39508 = (state_39522[(8)]);
var inst_39513 = (state_39522[(2)]);
var state_39522__$1 = (function (){var statearr_39531 = state_39522;
(statearr_39531[(9)] = inst_39513);

return statearr_39531;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39522__$1,(9),results,inst_39508);
} else {
if((state_val_39523 === (9))){
var inst_39515 = (state_39522[(2)]);
var state_39522__$1 = (function (){var statearr_39532 = state_39522;
(statearr_39532[(10)] = inst_39515);

return statearr_39532;
})();
var statearr_39533_39638 = state_39522__$1;
(statearr_39533_39638[(2)] = null);

(statearr_39533_39638[(1)] = (2));


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
});})(c__30625__auto___39632,jobs,results,process,async))
;
return ((function (switch__30537__auto__,c__30625__auto___39632,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0 = (function (){
var statearr_39534 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__);

(statearr_39534[(1)] = (1));

return statearr_39534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1 = (function (state_39522){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39535){if((e39535 instanceof Object)){
var ex__30541__auto__ = e39535;
var statearr_39536_39639 = state_39522;
(statearr_39536_39639[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39640 = state_39522;
state_39522 = G__39640;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = function(state_39522){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1.call(this,state_39522);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___39632,jobs,results,process,async))
})();
var state__30627__auto__ = (function (){var statearr_39537 = f__30626__auto__.call(null);
(statearr_39537[(6)] = c__30625__auto___39632);

return statearr_39537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___39632,jobs,results,process,async))
);


var c__30625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto__,jobs,results,process,async){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto__,jobs,results,process,async){
return (function (state_39575){
var state_val_39576 = (state_39575[(1)]);
if((state_val_39576 === (7))){
var inst_39571 = (state_39575[(2)]);
var state_39575__$1 = state_39575;
var statearr_39577_39641 = state_39575__$1;
(statearr_39577_39641[(2)] = inst_39571);

(statearr_39577_39641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (20))){
var state_39575__$1 = state_39575;
var statearr_39578_39642 = state_39575__$1;
(statearr_39578_39642[(2)] = null);

(statearr_39578_39642[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (1))){
var state_39575__$1 = state_39575;
var statearr_39579_39643 = state_39575__$1;
(statearr_39579_39643[(2)] = null);

(statearr_39579_39643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (4))){
var inst_39540 = (state_39575[(7)]);
var inst_39540__$1 = (state_39575[(2)]);
var inst_39541 = (inst_39540__$1 == null);
var state_39575__$1 = (function (){var statearr_39580 = state_39575;
(statearr_39580[(7)] = inst_39540__$1);

return statearr_39580;
})();
if(cljs.core.truth_(inst_39541)){
var statearr_39581_39644 = state_39575__$1;
(statearr_39581_39644[(1)] = (5));

} else {
var statearr_39582_39645 = state_39575__$1;
(statearr_39582_39645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (15))){
var inst_39553 = (state_39575[(8)]);
var state_39575__$1 = state_39575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39575__$1,(18),to,inst_39553);
} else {
if((state_val_39576 === (21))){
var inst_39566 = (state_39575[(2)]);
var state_39575__$1 = state_39575;
var statearr_39583_39646 = state_39575__$1;
(statearr_39583_39646[(2)] = inst_39566);

(statearr_39583_39646[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (13))){
var inst_39568 = (state_39575[(2)]);
var state_39575__$1 = (function (){var statearr_39584 = state_39575;
(statearr_39584[(9)] = inst_39568);

return statearr_39584;
})();
var statearr_39585_39647 = state_39575__$1;
(statearr_39585_39647[(2)] = null);

(statearr_39585_39647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (6))){
var inst_39540 = (state_39575[(7)]);
var state_39575__$1 = state_39575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39575__$1,(11),inst_39540);
} else {
if((state_val_39576 === (17))){
var inst_39561 = (state_39575[(2)]);
var state_39575__$1 = state_39575;
if(cljs.core.truth_(inst_39561)){
var statearr_39586_39648 = state_39575__$1;
(statearr_39586_39648[(1)] = (19));

} else {
var statearr_39587_39649 = state_39575__$1;
(statearr_39587_39649[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (3))){
var inst_39573 = (state_39575[(2)]);
var state_39575__$1 = state_39575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39575__$1,inst_39573);
} else {
if((state_val_39576 === (12))){
var inst_39550 = (state_39575[(10)]);
var state_39575__$1 = state_39575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39575__$1,(14),inst_39550);
} else {
if((state_val_39576 === (2))){
var state_39575__$1 = state_39575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39575__$1,(4),results);
} else {
if((state_val_39576 === (19))){
var state_39575__$1 = state_39575;
var statearr_39588_39650 = state_39575__$1;
(statearr_39588_39650[(2)] = null);

(statearr_39588_39650[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (11))){
var inst_39550 = (state_39575[(2)]);
var state_39575__$1 = (function (){var statearr_39589 = state_39575;
(statearr_39589[(10)] = inst_39550);

return statearr_39589;
})();
var statearr_39590_39651 = state_39575__$1;
(statearr_39590_39651[(2)] = null);

(statearr_39590_39651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (9))){
var state_39575__$1 = state_39575;
var statearr_39591_39652 = state_39575__$1;
(statearr_39591_39652[(2)] = null);

(statearr_39591_39652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (5))){
var state_39575__$1 = state_39575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39592_39653 = state_39575__$1;
(statearr_39592_39653[(1)] = (8));

} else {
var statearr_39593_39654 = state_39575__$1;
(statearr_39593_39654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (14))){
var inst_39553 = (state_39575[(8)]);
var inst_39555 = (state_39575[(11)]);
var inst_39553__$1 = (state_39575[(2)]);
var inst_39554 = (inst_39553__$1 == null);
var inst_39555__$1 = cljs.core.not.call(null,inst_39554);
var state_39575__$1 = (function (){var statearr_39594 = state_39575;
(statearr_39594[(8)] = inst_39553__$1);

(statearr_39594[(11)] = inst_39555__$1);

return statearr_39594;
})();
if(inst_39555__$1){
var statearr_39595_39655 = state_39575__$1;
(statearr_39595_39655[(1)] = (15));

} else {
var statearr_39596_39656 = state_39575__$1;
(statearr_39596_39656[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (16))){
var inst_39555 = (state_39575[(11)]);
var state_39575__$1 = state_39575;
var statearr_39597_39657 = state_39575__$1;
(statearr_39597_39657[(2)] = inst_39555);

(statearr_39597_39657[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (10))){
var inst_39547 = (state_39575[(2)]);
var state_39575__$1 = state_39575;
var statearr_39598_39658 = state_39575__$1;
(statearr_39598_39658[(2)] = inst_39547);

(statearr_39598_39658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (18))){
var inst_39558 = (state_39575[(2)]);
var state_39575__$1 = state_39575;
var statearr_39599_39659 = state_39575__$1;
(statearr_39599_39659[(2)] = inst_39558);

(statearr_39599_39659[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39576 === (8))){
var inst_39544 = cljs.core.async.close_BANG_.call(null,to);
var state_39575__$1 = state_39575;
var statearr_39600_39660 = state_39575__$1;
(statearr_39600_39660[(2)] = inst_39544);

(statearr_39600_39660[(1)] = (10));


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
var statearr_39601 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39601[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__);

(statearr_39601[(1)] = (1));

return statearr_39601;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1 = (function (state_39575){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39602){if((e39602 instanceof Object)){
var ex__30541__auto__ = e39602;
var statearr_39603_39661 = state_39575;
(statearr_39603_39661[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39662 = state_39575;
state_39575 = G__39662;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__ = function(state_39575){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1.call(this,state_39575);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30538__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__,jobs,results,process,async))
})();
var state__30627__auto__ = (function (){var statearr_39604 = f__30626__auto__.call(null);
(statearr_39604[(6)] = c__30625__auto__);

return statearr_39604;
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
var G__39664 = arguments.length;
switch (G__39664) {
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
var G__39667 = arguments.length;
switch (G__39667) {
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
var G__39670 = arguments.length;
switch (G__39670) {
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
var c__30625__auto___39719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___39719,tc,fc){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___39719,tc,fc){
return (function (state_39696){
var state_val_39697 = (state_39696[(1)]);
if((state_val_39697 === (7))){
var inst_39692 = (state_39696[(2)]);
var state_39696__$1 = state_39696;
var statearr_39698_39720 = state_39696__$1;
(statearr_39698_39720[(2)] = inst_39692);

(statearr_39698_39720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39697 === (1))){
var state_39696__$1 = state_39696;
var statearr_39699_39721 = state_39696__$1;
(statearr_39699_39721[(2)] = null);

(statearr_39699_39721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39697 === (4))){
var inst_39673 = (state_39696[(7)]);
var inst_39673__$1 = (state_39696[(2)]);
var inst_39674 = (inst_39673__$1 == null);
var state_39696__$1 = (function (){var statearr_39700 = state_39696;
(statearr_39700[(7)] = inst_39673__$1);

return statearr_39700;
})();
if(cljs.core.truth_(inst_39674)){
var statearr_39701_39722 = state_39696__$1;
(statearr_39701_39722[(1)] = (5));

} else {
var statearr_39702_39723 = state_39696__$1;
(statearr_39702_39723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39697 === (13))){
var state_39696__$1 = state_39696;
var statearr_39703_39724 = state_39696__$1;
(statearr_39703_39724[(2)] = null);

(statearr_39703_39724[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39697 === (6))){
var inst_39673 = (state_39696[(7)]);
var inst_39679 = p.call(null,inst_39673);
var state_39696__$1 = state_39696;
if(cljs.core.truth_(inst_39679)){
var statearr_39704_39725 = state_39696__$1;
(statearr_39704_39725[(1)] = (9));

} else {
var statearr_39705_39726 = state_39696__$1;
(statearr_39705_39726[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39697 === (3))){
var inst_39694 = (state_39696[(2)]);
var state_39696__$1 = state_39696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39696__$1,inst_39694);
} else {
if((state_val_39697 === (12))){
var state_39696__$1 = state_39696;
var statearr_39706_39727 = state_39696__$1;
(statearr_39706_39727[(2)] = null);

(statearr_39706_39727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39697 === (2))){
var state_39696__$1 = state_39696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39696__$1,(4),ch);
} else {
if((state_val_39697 === (11))){
var inst_39673 = (state_39696[(7)]);
var inst_39683 = (state_39696[(2)]);
var state_39696__$1 = state_39696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39696__$1,(8),inst_39683,inst_39673);
} else {
if((state_val_39697 === (9))){
var state_39696__$1 = state_39696;
var statearr_39707_39728 = state_39696__$1;
(statearr_39707_39728[(2)] = tc);

(statearr_39707_39728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39697 === (5))){
var inst_39676 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39677 = cljs.core.async.close_BANG_.call(null,fc);
var state_39696__$1 = (function (){var statearr_39708 = state_39696;
(statearr_39708[(8)] = inst_39676);

return statearr_39708;
})();
var statearr_39709_39729 = state_39696__$1;
(statearr_39709_39729[(2)] = inst_39677);

(statearr_39709_39729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39697 === (14))){
var inst_39690 = (state_39696[(2)]);
var state_39696__$1 = state_39696;
var statearr_39710_39730 = state_39696__$1;
(statearr_39710_39730[(2)] = inst_39690);

(statearr_39710_39730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39697 === (10))){
var state_39696__$1 = state_39696;
var statearr_39711_39731 = state_39696__$1;
(statearr_39711_39731[(2)] = fc);

(statearr_39711_39731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39697 === (8))){
var inst_39685 = (state_39696[(2)]);
var state_39696__$1 = state_39696;
if(cljs.core.truth_(inst_39685)){
var statearr_39712_39732 = state_39696__$1;
(statearr_39712_39732[(1)] = (12));

} else {
var statearr_39713_39733 = state_39696__$1;
(statearr_39713_39733[(1)] = (13));

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
});})(c__30625__auto___39719,tc,fc))
;
return ((function (switch__30537__auto__,c__30625__auto___39719,tc,fc){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_39714 = [null,null,null,null,null,null,null,null,null];
(statearr_39714[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_39714[(1)] = (1));

return statearr_39714;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_39696){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39715){if((e39715 instanceof Object)){
var ex__30541__auto__ = e39715;
var statearr_39716_39734 = state_39696;
(statearr_39716_39734[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39735 = state_39696;
state_39696 = G__39735;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_39696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_39696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___39719,tc,fc))
})();
var state__30627__auto__ = (function (){var statearr_39717 = f__30626__auto__.call(null);
(statearr_39717[(6)] = c__30625__auto___39719);

return statearr_39717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___39719,tc,fc))
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
return (function (state_39756){
var state_val_39757 = (state_39756[(1)]);
if((state_val_39757 === (7))){
var inst_39752 = (state_39756[(2)]);
var state_39756__$1 = state_39756;
var statearr_39758_39776 = state_39756__$1;
(statearr_39758_39776[(2)] = inst_39752);

(statearr_39758_39776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39757 === (1))){
var inst_39736 = init;
var state_39756__$1 = (function (){var statearr_39759 = state_39756;
(statearr_39759[(7)] = inst_39736);

return statearr_39759;
})();
var statearr_39760_39777 = state_39756__$1;
(statearr_39760_39777[(2)] = null);

(statearr_39760_39777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39757 === (4))){
var inst_39739 = (state_39756[(8)]);
var inst_39739__$1 = (state_39756[(2)]);
var inst_39740 = (inst_39739__$1 == null);
var state_39756__$1 = (function (){var statearr_39761 = state_39756;
(statearr_39761[(8)] = inst_39739__$1);

return statearr_39761;
})();
if(cljs.core.truth_(inst_39740)){
var statearr_39762_39778 = state_39756__$1;
(statearr_39762_39778[(1)] = (5));

} else {
var statearr_39763_39779 = state_39756__$1;
(statearr_39763_39779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39757 === (6))){
var inst_39743 = (state_39756[(9)]);
var inst_39739 = (state_39756[(8)]);
var inst_39736 = (state_39756[(7)]);
var inst_39743__$1 = f.call(null,inst_39736,inst_39739);
var inst_39744 = cljs.core.reduced_QMARK_.call(null,inst_39743__$1);
var state_39756__$1 = (function (){var statearr_39764 = state_39756;
(statearr_39764[(9)] = inst_39743__$1);

return statearr_39764;
})();
if(inst_39744){
var statearr_39765_39780 = state_39756__$1;
(statearr_39765_39780[(1)] = (8));

} else {
var statearr_39766_39781 = state_39756__$1;
(statearr_39766_39781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39757 === (3))){
var inst_39754 = (state_39756[(2)]);
var state_39756__$1 = state_39756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39756__$1,inst_39754);
} else {
if((state_val_39757 === (2))){
var state_39756__$1 = state_39756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39756__$1,(4),ch);
} else {
if((state_val_39757 === (9))){
var inst_39743 = (state_39756[(9)]);
var inst_39736 = inst_39743;
var state_39756__$1 = (function (){var statearr_39767 = state_39756;
(statearr_39767[(7)] = inst_39736);

return statearr_39767;
})();
var statearr_39768_39782 = state_39756__$1;
(statearr_39768_39782[(2)] = null);

(statearr_39768_39782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39757 === (5))){
var inst_39736 = (state_39756[(7)]);
var state_39756__$1 = state_39756;
var statearr_39769_39783 = state_39756__$1;
(statearr_39769_39783[(2)] = inst_39736);

(statearr_39769_39783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39757 === (10))){
var inst_39750 = (state_39756[(2)]);
var state_39756__$1 = state_39756;
var statearr_39770_39784 = state_39756__$1;
(statearr_39770_39784[(2)] = inst_39750);

(statearr_39770_39784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39757 === (8))){
var inst_39743 = (state_39756[(9)]);
var inst_39746 = cljs.core.deref.call(null,inst_39743);
var state_39756__$1 = state_39756;
var statearr_39771_39785 = state_39756__$1;
(statearr_39771_39785[(2)] = inst_39746);

(statearr_39771_39785[(1)] = (10));


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
var statearr_39772 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39772[(0)] = cljs$core$async$reduce_$_state_machine__30538__auto__);

(statearr_39772[(1)] = (1));

return statearr_39772;
});
var cljs$core$async$reduce_$_state_machine__30538__auto____1 = (function (state_39756){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39773){if((e39773 instanceof Object)){
var ex__30541__auto__ = e39773;
var statearr_39774_39786 = state_39756;
(statearr_39774_39786[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39787 = state_39756;
state_39756 = G__39787;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30538__auto__ = function(state_39756){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30538__auto____1.call(this,state_39756);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30538__auto____0;
cljs$core$async$reduce_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30538__auto____1;
return cljs$core$async$reduce_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__))
})();
var state__30627__auto__ = (function (){var statearr_39775 = f__30626__auto__.call(null);
(statearr_39775[(6)] = c__30625__auto__);

return statearr_39775;
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
var G__39789 = arguments.length;
switch (G__39789) {
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
return (function (state_39814){
var state_val_39815 = (state_39814[(1)]);
if((state_val_39815 === (7))){
var inst_39796 = (state_39814[(2)]);
var state_39814__$1 = state_39814;
var statearr_39816_39837 = state_39814__$1;
(statearr_39816_39837[(2)] = inst_39796);

(statearr_39816_39837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (1))){
var inst_39790 = cljs.core.seq.call(null,coll);
var inst_39791 = inst_39790;
var state_39814__$1 = (function (){var statearr_39817 = state_39814;
(statearr_39817[(7)] = inst_39791);

return statearr_39817;
})();
var statearr_39818_39838 = state_39814__$1;
(statearr_39818_39838[(2)] = null);

(statearr_39818_39838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (4))){
var inst_39791 = (state_39814[(7)]);
var inst_39794 = cljs.core.first.call(null,inst_39791);
var state_39814__$1 = state_39814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39814__$1,(7),ch,inst_39794);
} else {
if((state_val_39815 === (13))){
var inst_39808 = (state_39814[(2)]);
var state_39814__$1 = state_39814;
var statearr_39819_39839 = state_39814__$1;
(statearr_39819_39839[(2)] = inst_39808);

(statearr_39819_39839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (6))){
var inst_39799 = (state_39814[(2)]);
var state_39814__$1 = state_39814;
if(cljs.core.truth_(inst_39799)){
var statearr_39820_39840 = state_39814__$1;
(statearr_39820_39840[(1)] = (8));

} else {
var statearr_39821_39841 = state_39814__$1;
(statearr_39821_39841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (3))){
var inst_39812 = (state_39814[(2)]);
var state_39814__$1 = state_39814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39814__$1,inst_39812);
} else {
if((state_val_39815 === (12))){
var state_39814__$1 = state_39814;
var statearr_39822_39842 = state_39814__$1;
(statearr_39822_39842[(2)] = null);

(statearr_39822_39842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (2))){
var inst_39791 = (state_39814[(7)]);
var state_39814__$1 = state_39814;
if(cljs.core.truth_(inst_39791)){
var statearr_39823_39843 = state_39814__$1;
(statearr_39823_39843[(1)] = (4));

} else {
var statearr_39824_39844 = state_39814__$1;
(statearr_39824_39844[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (11))){
var inst_39805 = cljs.core.async.close_BANG_.call(null,ch);
var state_39814__$1 = state_39814;
var statearr_39825_39845 = state_39814__$1;
(statearr_39825_39845[(2)] = inst_39805);

(statearr_39825_39845[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (9))){
var state_39814__$1 = state_39814;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39826_39846 = state_39814__$1;
(statearr_39826_39846[(1)] = (11));

} else {
var statearr_39827_39847 = state_39814__$1;
(statearr_39827_39847[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (5))){
var inst_39791 = (state_39814[(7)]);
var state_39814__$1 = state_39814;
var statearr_39828_39848 = state_39814__$1;
(statearr_39828_39848[(2)] = inst_39791);

(statearr_39828_39848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (10))){
var inst_39810 = (state_39814[(2)]);
var state_39814__$1 = state_39814;
var statearr_39829_39849 = state_39814__$1;
(statearr_39829_39849[(2)] = inst_39810);

(statearr_39829_39849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39815 === (8))){
var inst_39791 = (state_39814[(7)]);
var inst_39801 = cljs.core.next.call(null,inst_39791);
var inst_39791__$1 = inst_39801;
var state_39814__$1 = (function (){var statearr_39830 = state_39814;
(statearr_39830[(7)] = inst_39791__$1);

return statearr_39830;
})();
var statearr_39831_39850 = state_39814__$1;
(statearr_39831_39850[(2)] = null);

(statearr_39831_39850[(1)] = (2));


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
var statearr_39832 = [null,null,null,null,null,null,null,null];
(statearr_39832[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_39832[(1)] = (1));

return statearr_39832;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_39814){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e39833){if((e39833 instanceof Object)){
var ex__30541__auto__ = e39833;
var statearr_39834_39851 = state_39814;
(statearr_39834_39851[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39852 = state_39814;
state_39814 = G__39852;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_39814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_39814);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__))
})();
var state__30627__auto__ = (function (){var statearr_39835 = f__30626__auto__.call(null);
(statearr_39835[(6)] = c__30625__auto__);

return statearr_39835;
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
if(typeof cljs.core.async.t_cljs$core$async39853 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39853 = (function (ch,cs,meta39854){
this.ch = ch;
this.cs = cs;
this.meta39854 = meta39854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39855,meta39854__$1){
var self__ = this;
var _39855__$1 = this;
return (new cljs.core.async.t_cljs$core$async39853(self__.ch,self__.cs,meta39854__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39855){
var self__ = this;
var _39855__$1 = this;
return self__.meta39854;
});})(cs))
;

cljs.core.async.t_cljs$core$async39853.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39853.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39853.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39853.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39853.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39853.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39853.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39854","meta39854",-408840358,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39853.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39853";

cljs.core.async.t_cljs$core$async39853.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async39853");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39853 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39853(ch__$1,cs__$1,meta39854){
return (new cljs.core.async.t_cljs$core$async39853(ch__$1,cs__$1,meta39854));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39853(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30625__auto___40075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___40075,cs,m,dchan,dctr,done){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___40075,cs,m,dchan,dctr,done){
return (function (state_39990){
var state_val_39991 = (state_39990[(1)]);
if((state_val_39991 === (7))){
var inst_39986 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_39992_40076 = state_39990__$1;
(statearr_39992_40076[(2)] = inst_39986);

(statearr_39992_40076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (20))){
var inst_39889 = (state_39990[(7)]);
var inst_39901 = cljs.core.first.call(null,inst_39889);
var inst_39902 = cljs.core.nth.call(null,inst_39901,(0),null);
var inst_39903 = cljs.core.nth.call(null,inst_39901,(1),null);
var state_39990__$1 = (function (){var statearr_39993 = state_39990;
(statearr_39993[(8)] = inst_39902);

return statearr_39993;
})();
if(cljs.core.truth_(inst_39903)){
var statearr_39994_40077 = state_39990__$1;
(statearr_39994_40077[(1)] = (22));

} else {
var statearr_39995_40078 = state_39990__$1;
(statearr_39995_40078[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (27))){
var inst_39858 = (state_39990[(9)]);
var inst_39938 = (state_39990[(10)]);
var inst_39931 = (state_39990[(11)]);
var inst_39933 = (state_39990[(12)]);
var inst_39938__$1 = cljs.core._nth.call(null,inst_39931,inst_39933);
var inst_39939 = cljs.core.async.put_BANG_.call(null,inst_39938__$1,inst_39858,done);
var state_39990__$1 = (function (){var statearr_39996 = state_39990;
(statearr_39996[(10)] = inst_39938__$1);

return statearr_39996;
})();
if(cljs.core.truth_(inst_39939)){
var statearr_39997_40079 = state_39990__$1;
(statearr_39997_40079[(1)] = (30));

} else {
var statearr_39998_40080 = state_39990__$1;
(statearr_39998_40080[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (1))){
var state_39990__$1 = state_39990;
var statearr_39999_40081 = state_39990__$1;
(statearr_39999_40081[(2)] = null);

(statearr_39999_40081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (24))){
var inst_39889 = (state_39990[(7)]);
var inst_39908 = (state_39990[(2)]);
var inst_39909 = cljs.core.next.call(null,inst_39889);
var inst_39867 = inst_39909;
var inst_39868 = null;
var inst_39869 = (0);
var inst_39870 = (0);
var state_39990__$1 = (function (){var statearr_40000 = state_39990;
(statearr_40000[(13)] = inst_39908);

(statearr_40000[(14)] = inst_39868);

(statearr_40000[(15)] = inst_39869);

(statearr_40000[(16)] = inst_39870);

(statearr_40000[(17)] = inst_39867);

return statearr_40000;
})();
var statearr_40001_40082 = state_39990__$1;
(statearr_40001_40082[(2)] = null);

(statearr_40001_40082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (39))){
var state_39990__$1 = state_39990;
var statearr_40005_40083 = state_39990__$1;
(statearr_40005_40083[(2)] = null);

(statearr_40005_40083[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (4))){
var inst_39858 = (state_39990[(9)]);
var inst_39858__$1 = (state_39990[(2)]);
var inst_39859 = (inst_39858__$1 == null);
var state_39990__$1 = (function (){var statearr_40006 = state_39990;
(statearr_40006[(9)] = inst_39858__$1);

return statearr_40006;
})();
if(cljs.core.truth_(inst_39859)){
var statearr_40007_40084 = state_39990__$1;
(statearr_40007_40084[(1)] = (5));

} else {
var statearr_40008_40085 = state_39990__$1;
(statearr_40008_40085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (15))){
var inst_39868 = (state_39990[(14)]);
var inst_39869 = (state_39990[(15)]);
var inst_39870 = (state_39990[(16)]);
var inst_39867 = (state_39990[(17)]);
var inst_39885 = (state_39990[(2)]);
var inst_39886 = (inst_39870 + (1));
var tmp40002 = inst_39868;
var tmp40003 = inst_39869;
var tmp40004 = inst_39867;
var inst_39867__$1 = tmp40004;
var inst_39868__$1 = tmp40002;
var inst_39869__$1 = tmp40003;
var inst_39870__$1 = inst_39886;
var state_39990__$1 = (function (){var statearr_40009 = state_39990;
(statearr_40009[(18)] = inst_39885);

(statearr_40009[(14)] = inst_39868__$1);

(statearr_40009[(15)] = inst_39869__$1);

(statearr_40009[(16)] = inst_39870__$1);

(statearr_40009[(17)] = inst_39867__$1);

return statearr_40009;
})();
var statearr_40010_40086 = state_39990__$1;
(statearr_40010_40086[(2)] = null);

(statearr_40010_40086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (21))){
var inst_39912 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_40014_40087 = state_39990__$1;
(statearr_40014_40087[(2)] = inst_39912);

(statearr_40014_40087[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (31))){
var inst_39938 = (state_39990[(10)]);
var inst_39942 = done.call(null,null);
var inst_39943 = cljs.core.async.untap_STAR_.call(null,m,inst_39938);
var state_39990__$1 = (function (){var statearr_40015 = state_39990;
(statearr_40015[(19)] = inst_39942);

return statearr_40015;
})();
var statearr_40016_40088 = state_39990__$1;
(statearr_40016_40088[(2)] = inst_39943);

(statearr_40016_40088[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (32))){
var inst_39930 = (state_39990[(20)]);
var inst_39931 = (state_39990[(11)]);
var inst_39933 = (state_39990[(12)]);
var inst_39932 = (state_39990[(21)]);
var inst_39945 = (state_39990[(2)]);
var inst_39946 = (inst_39933 + (1));
var tmp40011 = inst_39930;
var tmp40012 = inst_39931;
var tmp40013 = inst_39932;
var inst_39930__$1 = tmp40011;
var inst_39931__$1 = tmp40012;
var inst_39932__$1 = tmp40013;
var inst_39933__$1 = inst_39946;
var state_39990__$1 = (function (){var statearr_40017 = state_39990;
(statearr_40017[(20)] = inst_39930__$1);

(statearr_40017[(11)] = inst_39931__$1);

(statearr_40017[(12)] = inst_39933__$1);

(statearr_40017[(22)] = inst_39945);

(statearr_40017[(21)] = inst_39932__$1);

return statearr_40017;
})();
var statearr_40018_40089 = state_39990__$1;
(statearr_40018_40089[(2)] = null);

(statearr_40018_40089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (40))){
var inst_39958 = (state_39990[(23)]);
var inst_39962 = done.call(null,null);
var inst_39963 = cljs.core.async.untap_STAR_.call(null,m,inst_39958);
var state_39990__$1 = (function (){var statearr_40019 = state_39990;
(statearr_40019[(24)] = inst_39962);

return statearr_40019;
})();
var statearr_40020_40090 = state_39990__$1;
(statearr_40020_40090[(2)] = inst_39963);

(statearr_40020_40090[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (33))){
var inst_39949 = (state_39990[(25)]);
var inst_39951 = cljs.core.chunked_seq_QMARK_.call(null,inst_39949);
var state_39990__$1 = state_39990;
if(inst_39951){
var statearr_40021_40091 = state_39990__$1;
(statearr_40021_40091[(1)] = (36));

} else {
var statearr_40022_40092 = state_39990__$1;
(statearr_40022_40092[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (13))){
var inst_39879 = (state_39990[(26)]);
var inst_39882 = cljs.core.async.close_BANG_.call(null,inst_39879);
var state_39990__$1 = state_39990;
var statearr_40023_40093 = state_39990__$1;
(statearr_40023_40093[(2)] = inst_39882);

(statearr_40023_40093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (22))){
var inst_39902 = (state_39990[(8)]);
var inst_39905 = cljs.core.async.close_BANG_.call(null,inst_39902);
var state_39990__$1 = state_39990;
var statearr_40024_40094 = state_39990__$1;
(statearr_40024_40094[(2)] = inst_39905);

(statearr_40024_40094[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (36))){
var inst_39949 = (state_39990[(25)]);
var inst_39953 = cljs.core.chunk_first.call(null,inst_39949);
var inst_39954 = cljs.core.chunk_rest.call(null,inst_39949);
var inst_39955 = cljs.core.count.call(null,inst_39953);
var inst_39930 = inst_39954;
var inst_39931 = inst_39953;
var inst_39932 = inst_39955;
var inst_39933 = (0);
var state_39990__$1 = (function (){var statearr_40025 = state_39990;
(statearr_40025[(20)] = inst_39930);

(statearr_40025[(11)] = inst_39931);

(statearr_40025[(12)] = inst_39933);

(statearr_40025[(21)] = inst_39932);

return statearr_40025;
})();
var statearr_40026_40095 = state_39990__$1;
(statearr_40026_40095[(2)] = null);

(statearr_40026_40095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (41))){
var inst_39949 = (state_39990[(25)]);
var inst_39965 = (state_39990[(2)]);
var inst_39966 = cljs.core.next.call(null,inst_39949);
var inst_39930 = inst_39966;
var inst_39931 = null;
var inst_39932 = (0);
var inst_39933 = (0);
var state_39990__$1 = (function (){var statearr_40027 = state_39990;
(statearr_40027[(20)] = inst_39930);

(statearr_40027[(27)] = inst_39965);

(statearr_40027[(11)] = inst_39931);

(statearr_40027[(12)] = inst_39933);

(statearr_40027[(21)] = inst_39932);

return statearr_40027;
})();
var statearr_40028_40096 = state_39990__$1;
(statearr_40028_40096[(2)] = null);

(statearr_40028_40096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (43))){
var state_39990__$1 = state_39990;
var statearr_40029_40097 = state_39990__$1;
(statearr_40029_40097[(2)] = null);

(statearr_40029_40097[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (29))){
var inst_39974 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_40030_40098 = state_39990__$1;
(statearr_40030_40098[(2)] = inst_39974);

(statearr_40030_40098[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (44))){
var inst_39983 = (state_39990[(2)]);
var state_39990__$1 = (function (){var statearr_40031 = state_39990;
(statearr_40031[(28)] = inst_39983);

return statearr_40031;
})();
var statearr_40032_40099 = state_39990__$1;
(statearr_40032_40099[(2)] = null);

(statearr_40032_40099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (6))){
var inst_39922 = (state_39990[(29)]);
var inst_39921 = cljs.core.deref.call(null,cs);
var inst_39922__$1 = cljs.core.keys.call(null,inst_39921);
var inst_39923 = cljs.core.count.call(null,inst_39922__$1);
var inst_39924 = cljs.core.reset_BANG_.call(null,dctr,inst_39923);
var inst_39929 = cljs.core.seq.call(null,inst_39922__$1);
var inst_39930 = inst_39929;
var inst_39931 = null;
var inst_39932 = (0);
var inst_39933 = (0);
var state_39990__$1 = (function (){var statearr_40033 = state_39990;
(statearr_40033[(20)] = inst_39930);

(statearr_40033[(30)] = inst_39924);

(statearr_40033[(29)] = inst_39922__$1);

(statearr_40033[(11)] = inst_39931);

(statearr_40033[(12)] = inst_39933);

(statearr_40033[(21)] = inst_39932);

return statearr_40033;
})();
var statearr_40034_40100 = state_39990__$1;
(statearr_40034_40100[(2)] = null);

(statearr_40034_40100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (28))){
var inst_39930 = (state_39990[(20)]);
var inst_39949 = (state_39990[(25)]);
var inst_39949__$1 = cljs.core.seq.call(null,inst_39930);
var state_39990__$1 = (function (){var statearr_40035 = state_39990;
(statearr_40035[(25)] = inst_39949__$1);

return statearr_40035;
})();
if(inst_39949__$1){
var statearr_40036_40101 = state_39990__$1;
(statearr_40036_40101[(1)] = (33));

} else {
var statearr_40037_40102 = state_39990__$1;
(statearr_40037_40102[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (25))){
var inst_39933 = (state_39990[(12)]);
var inst_39932 = (state_39990[(21)]);
var inst_39935 = (inst_39933 < inst_39932);
var inst_39936 = inst_39935;
var state_39990__$1 = state_39990;
if(cljs.core.truth_(inst_39936)){
var statearr_40038_40103 = state_39990__$1;
(statearr_40038_40103[(1)] = (27));

} else {
var statearr_40039_40104 = state_39990__$1;
(statearr_40039_40104[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (34))){
var state_39990__$1 = state_39990;
var statearr_40040_40105 = state_39990__$1;
(statearr_40040_40105[(2)] = null);

(statearr_40040_40105[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (17))){
var state_39990__$1 = state_39990;
var statearr_40041_40106 = state_39990__$1;
(statearr_40041_40106[(2)] = null);

(statearr_40041_40106[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (3))){
var inst_39988 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39990__$1,inst_39988);
} else {
if((state_val_39991 === (12))){
var inst_39917 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_40042_40107 = state_39990__$1;
(statearr_40042_40107[(2)] = inst_39917);

(statearr_40042_40107[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (2))){
var state_39990__$1 = state_39990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39990__$1,(4),ch);
} else {
if((state_val_39991 === (23))){
var state_39990__$1 = state_39990;
var statearr_40043_40108 = state_39990__$1;
(statearr_40043_40108[(2)] = null);

(statearr_40043_40108[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (35))){
var inst_39972 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_40044_40109 = state_39990__$1;
(statearr_40044_40109[(2)] = inst_39972);

(statearr_40044_40109[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (19))){
var inst_39889 = (state_39990[(7)]);
var inst_39893 = cljs.core.chunk_first.call(null,inst_39889);
var inst_39894 = cljs.core.chunk_rest.call(null,inst_39889);
var inst_39895 = cljs.core.count.call(null,inst_39893);
var inst_39867 = inst_39894;
var inst_39868 = inst_39893;
var inst_39869 = inst_39895;
var inst_39870 = (0);
var state_39990__$1 = (function (){var statearr_40045 = state_39990;
(statearr_40045[(14)] = inst_39868);

(statearr_40045[(15)] = inst_39869);

(statearr_40045[(16)] = inst_39870);

(statearr_40045[(17)] = inst_39867);

return statearr_40045;
})();
var statearr_40046_40110 = state_39990__$1;
(statearr_40046_40110[(2)] = null);

(statearr_40046_40110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (11))){
var inst_39867 = (state_39990[(17)]);
var inst_39889 = (state_39990[(7)]);
var inst_39889__$1 = cljs.core.seq.call(null,inst_39867);
var state_39990__$1 = (function (){var statearr_40047 = state_39990;
(statearr_40047[(7)] = inst_39889__$1);

return statearr_40047;
})();
if(inst_39889__$1){
var statearr_40048_40111 = state_39990__$1;
(statearr_40048_40111[(1)] = (16));

} else {
var statearr_40049_40112 = state_39990__$1;
(statearr_40049_40112[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (9))){
var inst_39919 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_40050_40113 = state_39990__$1;
(statearr_40050_40113[(2)] = inst_39919);

(statearr_40050_40113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (5))){
var inst_39865 = cljs.core.deref.call(null,cs);
var inst_39866 = cljs.core.seq.call(null,inst_39865);
var inst_39867 = inst_39866;
var inst_39868 = null;
var inst_39869 = (0);
var inst_39870 = (0);
var state_39990__$1 = (function (){var statearr_40051 = state_39990;
(statearr_40051[(14)] = inst_39868);

(statearr_40051[(15)] = inst_39869);

(statearr_40051[(16)] = inst_39870);

(statearr_40051[(17)] = inst_39867);

return statearr_40051;
})();
var statearr_40052_40114 = state_39990__$1;
(statearr_40052_40114[(2)] = null);

(statearr_40052_40114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (14))){
var state_39990__$1 = state_39990;
var statearr_40053_40115 = state_39990__$1;
(statearr_40053_40115[(2)] = null);

(statearr_40053_40115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (45))){
var inst_39980 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_40054_40116 = state_39990__$1;
(statearr_40054_40116[(2)] = inst_39980);

(statearr_40054_40116[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (26))){
var inst_39922 = (state_39990[(29)]);
var inst_39976 = (state_39990[(2)]);
var inst_39977 = cljs.core.seq.call(null,inst_39922);
var state_39990__$1 = (function (){var statearr_40055 = state_39990;
(statearr_40055[(31)] = inst_39976);

return statearr_40055;
})();
if(inst_39977){
var statearr_40056_40117 = state_39990__$1;
(statearr_40056_40117[(1)] = (42));

} else {
var statearr_40057_40118 = state_39990__$1;
(statearr_40057_40118[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (16))){
var inst_39889 = (state_39990[(7)]);
var inst_39891 = cljs.core.chunked_seq_QMARK_.call(null,inst_39889);
var state_39990__$1 = state_39990;
if(inst_39891){
var statearr_40058_40119 = state_39990__$1;
(statearr_40058_40119[(1)] = (19));

} else {
var statearr_40059_40120 = state_39990__$1;
(statearr_40059_40120[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (38))){
var inst_39969 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_40060_40121 = state_39990__$1;
(statearr_40060_40121[(2)] = inst_39969);

(statearr_40060_40121[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (30))){
var state_39990__$1 = state_39990;
var statearr_40061_40122 = state_39990__$1;
(statearr_40061_40122[(2)] = null);

(statearr_40061_40122[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (10))){
var inst_39868 = (state_39990[(14)]);
var inst_39870 = (state_39990[(16)]);
var inst_39878 = cljs.core._nth.call(null,inst_39868,inst_39870);
var inst_39879 = cljs.core.nth.call(null,inst_39878,(0),null);
var inst_39880 = cljs.core.nth.call(null,inst_39878,(1),null);
var state_39990__$1 = (function (){var statearr_40062 = state_39990;
(statearr_40062[(26)] = inst_39879);

return statearr_40062;
})();
if(cljs.core.truth_(inst_39880)){
var statearr_40063_40123 = state_39990__$1;
(statearr_40063_40123[(1)] = (13));

} else {
var statearr_40064_40124 = state_39990__$1;
(statearr_40064_40124[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (18))){
var inst_39915 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_40065_40125 = state_39990__$1;
(statearr_40065_40125[(2)] = inst_39915);

(statearr_40065_40125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (42))){
var state_39990__$1 = state_39990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39990__$1,(45),dchan);
} else {
if((state_val_39991 === (37))){
var inst_39858 = (state_39990[(9)]);
var inst_39958 = (state_39990[(23)]);
var inst_39949 = (state_39990[(25)]);
var inst_39958__$1 = cljs.core.first.call(null,inst_39949);
var inst_39959 = cljs.core.async.put_BANG_.call(null,inst_39958__$1,inst_39858,done);
var state_39990__$1 = (function (){var statearr_40066 = state_39990;
(statearr_40066[(23)] = inst_39958__$1);

return statearr_40066;
})();
if(cljs.core.truth_(inst_39959)){
var statearr_40067_40126 = state_39990__$1;
(statearr_40067_40126[(1)] = (39));

} else {
var statearr_40068_40127 = state_39990__$1;
(statearr_40068_40127[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (8))){
var inst_39869 = (state_39990[(15)]);
var inst_39870 = (state_39990[(16)]);
var inst_39872 = (inst_39870 < inst_39869);
var inst_39873 = inst_39872;
var state_39990__$1 = state_39990;
if(cljs.core.truth_(inst_39873)){
var statearr_40069_40128 = state_39990__$1;
(statearr_40069_40128[(1)] = (10));

} else {
var statearr_40070_40129 = state_39990__$1;
(statearr_40070_40129[(1)] = (11));

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
});})(c__30625__auto___40075,cs,m,dchan,dctr,done))
;
return ((function (switch__30537__auto__,c__30625__auto___40075,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30538__auto__ = null;
var cljs$core$async$mult_$_state_machine__30538__auto____0 = (function (){
var statearr_40071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40071[(0)] = cljs$core$async$mult_$_state_machine__30538__auto__);

(statearr_40071[(1)] = (1));

return statearr_40071;
});
var cljs$core$async$mult_$_state_machine__30538__auto____1 = (function (state_39990){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_39990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40072){if((e40072 instanceof Object)){
var ex__30541__auto__ = e40072;
var statearr_40073_40130 = state_39990;
(statearr_40073_40130[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40131 = state_39990;
state_39990 = G__40131;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30538__auto__ = function(state_39990){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30538__auto____1.call(this,state_39990);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30538__auto____0;
cljs$core$async$mult_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30538__auto____1;
return cljs$core$async$mult_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___40075,cs,m,dchan,dctr,done))
})();
var state__30627__auto__ = (function (){var statearr_40074 = f__30626__auto__.call(null);
(statearr_40074[(6)] = c__30625__auto___40075);

return statearr_40074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___40075,cs,m,dchan,dctr,done))
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
var G__40133 = arguments.length;
switch (G__40133) {
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
var args__28373__auto__ = [];
var len__28366__auto___40145 = arguments.length;
var i__28367__auto___40146 = (0);
while(true){
if((i__28367__auto___40146 < len__28366__auto___40145)){
args__28373__auto__.push((arguments[i__28367__auto___40146]));

var G__40147 = (i__28367__auto___40146 + (1));
i__28367__auto___40146 = G__40147;
continue;
} else {
}
break;
}

var argseq__28374__auto__ = ((((3) < args__28373__auto__.length))?(new cljs.core.IndexedSeq(args__28373__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28374__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40139){
var map__40140 = p__40139;
var map__40140__$1 = ((((!((map__40140 == null)))?((((map__40140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40140):map__40140);
var opts = map__40140__$1;
var statearr_40142_40148 = state;
(statearr_40142_40148[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__40140,map__40140__$1,opts){
return (function (val){
var statearr_40143_40149 = state;
(statearr_40143_40149[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40140,map__40140__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_40144_40150 = state;
(statearr_40144_40150[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40135){
var G__40136 = cljs.core.first.call(null,seq40135);
var seq40135__$1 = cljs.core.next.call(null,seq40135);
var G__40137 = cljs.core.first.call(null,seq40135__$1);
var seq40135__$2 = cljs.core.next.call(null,seq40135__$1);
var G__40138 = cljs.core.first.call(null,seq40135__$2);
var seq40135__$3 = cljs.core.next.call(null,seq40135__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40136,G__40137,G__40138,seq40135__$3);
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
if(typeof cljs.core.async.t_cljs$core$async40151 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40151 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40152){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40152 = meta40152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40153,meta40152__$1){
var self__ = this;
var _40153__$1 = this;
return (new cljs.core.async.t_cljs$core$async40151(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40152__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40153){
var self__ = this;
var _40153__$1 = this;
return self__.meta40152;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40151.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40151.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40151.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40151.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40151.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40151.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40151.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40151.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async40151.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40152","meta40152",1902176957,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40151.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40151";

cljs.core.async.t_cljs$core$async40151.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async40151");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40151 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40151(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40152){
return (new cljs.core.async.t_cljs$core$async40151(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40152));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40151(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30625__auto___40315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___40315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___40315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40255){
var state_val_40256 = (state_40255[(1)]);
if((state_val_40256 === (7))){
var inst_40170 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
var statearr_40257_40316 = state_40255__$1;
(statearr_40257_40316[(2)] = inst_40170);

(statearr_40257_40316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (20))){
var inst_40182 = (state_40255[(7)]);
var state_40255__$1 = state_40255;
var statearr_40258_40317 = state_40255__$1;
(statearr_40258_40317[(2)] = inst_40182);

(statearr_40258_40317[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (27))){
var state_40255__$1 = state_40255;
var statearr_40259_40318 = state_40255__$1;
(statearr_40259_40318[(2)] = null);

(statearr_40259_40318[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (1))){
var inst_40157 = (state_40255[(8)]);
var inst_40157__$1 = calc_state.call(null);
var inst_40159 = (inst_40157__$1 == null);
var inst_40160 = cljs.core.not.call(null,inst_40159);
var state_40255__$1 = (function (){var statearr_40260 = state_40255;
(statearr_40260[(8)] = inst_40157__$1);

return statearr_40260;
})();
if(inst_40160){
var statearr_40261_40319 = state_40255__$1;
(statearr_40261_40319[(1)] = (2));

} else {
var statearr_40262_40320 = state_40255__$1;
(statearr_40262_40320[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (24))){
var inst_40229 = (state_40255[(9)]);
var inst_40206 = (state_40255[(10)]);
var inst_40215 = (state_40255[(11)]);
var inst_40229__$1 = inst_40206.call(null,inst_40215);
var state_40255__$1 = (function (){var statearr_40263 = state_40255;
(statearr_40263[(9)] = inst_40229__$1);

return statearr_40263;
})();
if(cljs.core.truth_(inst_40229__$1)){
var statearr_40264_40321 = state_40255__$1;
(statearr_40264_40321[(1)] = (29));

} else {
var statearr_40265_40322 = state_40255__$1;
(statearr_40265_40322[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (4))){
var inst_40173 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
if(cljs.core.truth_(inst_40173)){
var statearr_40266_40323 = state_40255__$1;
(statearr_40266_40323[(1)] = (8));

} else {
var statearr_40267_40324 = state_40255__$1;
(statearr_40267_40324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (15))){
var inst_40200 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
if(cljs.core.truth_(inst_40200)){
var statearr_40268_40325 = state_40255__$1;
(statearr_40268_40325[(1)] = (19));

} else {
var statearr_40269_40326 = state_40255__$1;
(statearr_40269_40326[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (21))){
var inst_40205 = (state_40255[(12)]);
var inst_40205__$1 = (state_40255[(2)]);
var inst_40206 = cljs.core.get.call(null,inst_40205__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40207 = cljs.core.get.call(null,inst_40205__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40208 = cljs.core.get.call(null,inst_40205__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40255__$1 = (function (){var statearr_40270 = state_40255;
(statearr_40270[(12)] = inst_40205__$1);

(statearr_40270[(13)] = inst_40207);

(statearr_40270[(10)] = inst_40206);

return statearr_40270;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40255__$1,(22),inst_40208);
} else {
if((state_val_40256 === (31))){
var inst_40237 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
if(cljs.core.truth_(inst_40237)){
var statearr_40271_40327 = state_40255__$1;
(statearr_40271_40327[(1)] = (32));

} else {
var statearr_40272_40328 = state_40255__$1;
(statearr_40272_40328[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (32))){
var inst_40214 = (state_40255[(14)]);
var state_40255__$1 = state_40255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40255__$1,(35),out,inst_40214);
} else {
if((state_val_40256 === (33))){
var inst_40205 = (state_40255[(12)]);
var inst_40182 = inst_40205;
var state_40255__$1 = (function (){var statearr_40273 = state_40255;
(statearr_40273[(7)] = inst_40182);

return statearr_40273;
})();
var statearr_40274_40329 = state_40255__$1;
(statearr_40274_40329[(2)] = null);

(statearr_40274_40329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (13))){
var inst_40182 = (state_40255[(7)]);
var inst_40189 = inst_40182.cljs$lang$protocol_mask$partition0$;
var inst_40190 = (inst_40189 & (64));
var inst_40191 = inst_40182.cljs$core$ISeq$;
var inst_40192 = (cljs.core.PROTOCOL_SENTINEL === inst_40191);
var inst_40193 = (inst_40190) || (inst_40192);
var state_40255__$1 = state_40255;
if(cljs.core.truth_(inst_40193)){
var statearr_40275_40330 = state_40255__$1;
(statearr_40275_40330[(1)] = (16));

} else {
var statearr_40276_40331 = state_40255__$1;
(statearr_40276_40331[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (22))){
var inst_40215 = (state_40255[(11)]);
var inst_40214 = (state_40255[(14)]);
var inst_40213 = (state_40255[(2)]);
var inst_40214__$1 = cljs.core.nth.call(null,inst_40213,(0),null);
var inst_40215__$1 = cljs.core.nth.call(null,inst_40213,(1),null);
var inst_40216 = (inst_40214__$1 == null);
var inst_40217 = cljs.core._EQ_.call(null,inst_40215__$1,change);
var inst_40218 = (inst_40216) || (inst_40217);
var state_40255__$1 = (function (){var statearr_40277 = state_40255;
(statearr_40277[(11)] = inst_40215__$1);

(statearr_40277[(14)] = inst_40214__$1);

return statearr_40277;
})();
if(cljs.core.truth_(inst_40218)){
var statearr_40278_40332 = state_40255__$1;
(statearr_40278_40332[(1)] = (23));

} else {
var statearr_40279_40333 = state_40255__$1;
(statearr_40279_40333[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (36))){
var inst_40205 = (state_40255[(12)]);
var inst_40182 = inst_40205;
var state_40255__$1 = (function (){var statearr_40280 = state_40255;
(statearr_40280[(7)] = inst_40182);

return statearr_40280;
})();
var statearr_40281_40334 = state_40255__$1;
(statearr_40281_40334[(2)] = null);

(statearr_40281_40334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (29))){
var inst_40229 = (state_40255[(9)]);
var state_40255__$1 = state_40255;
var statearr_40282_40335 = state_40255__$1;
(statearr_40282_40335[(2)] = inst_40229);

(statearr_40282_40335[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (6))){
var state_40255__$1 = state_40255;
var statearr_40283_40336 = state_40255__$1;
(statearr_40283_40336[(2)] = false);

(statearr_40283_40336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (28))){
var inst_40225 = (state_40255[(2)]);
var inst_40226 = calc_state.call(null);
var inst_40182 = inst_40226;
var state_40255__$1 = (function (){var statearr_40284 = state_40255;
(statearr_40284[(7)] = inst_40182);

(statearr_40284[(15)] = inst_40225);

return statearr_40284;
})();
var statearr_40285_40337 = state_40255__$1;
(statearr_40285_40337[(2)] = null);

(statearr_40285_40337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (25))){
var inst_40251 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
var statearr_40286_40338 = state_40255__$1;
(statearr_40286_40338[(2)] = inst_40251);

(statearr_40286_40338[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (34))){
var inst_40249 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
var statearr_40287_40339 = state_40255__$1;
(statearr_40287_40339[(2)] = inst_40249);

(statearr_40287_40339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (17))){
var state_40255__$1 = state_40255;
var statearr_40288_40340 = state_40255__$1;
(statearr_40288_40340[(2)] = false);

(statearr_40288_40340[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (3))){
var state_40255__$1 = state_40255;
var statearr_40289_40341 = state_40255__$1;
(statearr_40289_40341[(2)] = false);

(statearr_40289_40341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (12))){
var inst_40253 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40255__$1,inst_40253);
} else {
if((state_val_40256 === (2))){
var inst_40157 = (state_40255[(8)]);
var inst_40162 = inst_40157.cljs$lang$protocol_mask$partition0$;
var inst_40163 = (inst_40162 & (64));
var inst_40164 = inst_40157.cljs$core$ISeq$;
var inst_40165 = (cljs.core.PROTOCOL_SENTINEL === inst_40164);
var inst_40166 = (inst_40163) || (inst_40165);
var state_40255__$1 = state_40255;
if(cljs.core.truth_(inst_40166)){
var statearr_40290_40342 = state_40255__$1;
(statearr_40290_40342[(1)] = (5));

} else {
var statearr_40291_40343 = state_40255__$1;
(statearr_40291_40343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (23))){
var inst_40214 = (state_40255[(14)]);
var inst_40220 = (inst_40214 == null);
var state_40255__$1 = state_40255;
if(cljs.core.truth_(inst_40220)){
var statearr_40292_40344 = state_40255__$1;
(statearr_40292_40344[(1)] = (26));

} else {
var statearr_40293_40345 = state_40255__$1;
(statearr_40293_40345[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (35))){
var inst_40240 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
if(cljs.core.truth_(inst_40240)){
var statearr_40294_40346 = state_40255__$1;
(statearr_40294_40346[(1)] = (36));

} else {
var statearr_40295_40347 = state_40255__$1;
(statearr_40295_40347[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (19))){
var inst_40182 = (state_40255[(7)]);
var inst_40202 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40182);
var state_40255__$1 = state_40255;
var statearr_40296_40348 = state_40255__$1;
(statearr_40296_40348[(2)] = inst_40202);

(statearr_40296_40348[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (11))){
var inst_40182 = (state_40255[(7)]);
var inst_40186 = (inst_40182 == null);
var inst_40187 = cljs.core.not.call(null,inst_40186);
var state_40255__$1 = state_40255;
if(inst_40187){
var statearr_40297_40349 = state_40255__$1;
(statearr_40297_40349[(1)] = (13));

} else {
var statearr_40298_40350 = state_40255__$1;
(statearr_40298_40350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (9))){
var inst_40157 = (state_40255[(8)]);
var state_40255__$1 = state_40255;
var statearr_40299_40351 = state_40255__$1;
(statearr_40299_40351[(2)] = inst_40157);

(statearr_40299_40351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (5))){
var state_40255__$1 = state_40255;
var statearr_40300_40352 = state_40255__$1;
(statearr_40300_40352[(2)] = true);

(statearr_40300_40352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (14))){
var state_40255__$1 = state_40255;
var statearr_40301_40353 = state_40255__$1;
(statearr_40301_40353[(2)] = false);

(statearr_40301_40353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (26))){
var inst_40215 = (state_40255[(11)]);
var inst_40222 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40215);
var state_40255__$1 = state_40255;
var statearr_40302_40354 = state_40255__$1;
(statearr_40302_40354[(2)] = inst_40222);

(statearr_40302_40354[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (16))){
var state_40255__$1 = state_40255;
var statearr_40303_40355 = state_40255__$1;
(statearr_40303_40355[(2)] = true);

(statearr_40303_40355[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (38))){
var inst_40245 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
var statearr_40304_40356 = state_40255__$1;
(statearr_40304_40356[(2)] = inst_40245);

(statearr_40304_40356[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (30))){
var inst_40207 = (state_40255[(13)]);
var inst_40206 = (state_40255[(10)]);
var inst_40215 = (state_40255[(11)]);
var inst_40232 = cljs.core.empty_QMARK_.call(null,inst_40206);
var inst_40233 = inst_40207.call(null,inst_40215);
var inst_40234 = cljs.core.not.call(null,inst_40233);
var inst_40235 = (inst_40232) && (inst_40234);
var state_40255__$1 = state_40255;
var statearr_40305_40357 = state_40255__$1;
(statearr_40305_40357[(2)] = inst_40235);

(statearr_40305_40357[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (10))){
var inst_40157 = (state_40255[(8)]);
var inst_40178 = (state_40255[(2)]);
var inst_40179 = cljs.core.get.call(null,inst_40178,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40180 = cljs.core.get.call(null,inst_40178,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40181 = cljs.core.get.call(null,inst_40178,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40182 = inst_40157;
var state_40255__$1 = (function (){var statearr_40306 = state_40255;
(statearr_40306[(16)] = inst_40181);

(statearr_40306[(17)] = inst_40179);

(statearr_40306[(18)] = inst_40180);

(statearr_40306[(7)] = inst_40182);

return statearr_40306;
})();
var statearr_40307_40358 = state_40255__$1;
(statearr_40307_40358[(2)] = null);

(statearr_40307_40358[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (18))){
var inst_40197 = (state_40255[(2)]);
var state_40255__$1 = state_40255;
var statearr_40308_40359 = state_40255__$1;
(statearr_40308_40359[(2)] = inst_40197);

(statearr_40308_40359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (37))){
var state_40255__$1 = state_40255;
var statearr_40309_40360 = state_40255__$1;
(statearr_40309_40360[(2)] = null);

(statearr_40309_40360[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40256 === (8))){
var inst_40157 = (state_40255[(8)]);
var inst_40175 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40157);
var state_40255__$1 = state_40255;
var statearr_40310_40361 = state_40255__$1;
(statearr_40310_40361[(2)] = inst_40175);

(statearr_40310_40361[(1)] = (10));


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
});})(c__30625__auto___40315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30537__auto__,c__30625__auto___40315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30538__auto__ = null;
var cljs$core$async$mix_$_state_machine__30538__auto____0 = (function (){
var statearr_40311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40311[(0)] = cljs$core$async$mix_$_state_machine__30538__auto__);

(statearr_40311[(1)] = (1));

return statearr_40311;
});
var cljs$core$async$mix_$_state_machine__30538__auto____1 = (function (state_40255){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_40255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40312){if((e40312 instanceof Object)){
var ex__30541__auto__ = e40312;
var statearr_40313_40362 = state_40255;
(statearr_40313_40362[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40363 = state_40255;
state_40255 = G__40363;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30538__auto__ = function(state_40255){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30538__auto____1.call(this,state_40255);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30538__auto____0;
cljs$core$async$mix_$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30538__auto____1;
return cljs$core$async$mix_$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___40315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30627__auto__ = (function (){var statearr_40314 = f__30626__auto__.call(null);
(statearr_40314[(6)] = c__30625__auto___40315);

return statearr_40314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___40315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__40365 = arguments.length;
switch (G__40365) {
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
var G__40369 = arguments.length;
switch (G__40369) {
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
return (function (p1__40367_SHARP_){
if(cljs.core.truth_(p1__40367_SHARP_.call(null,topic))){
return p1__40367_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40367_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27196__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40370 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40370 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40371){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40371 = meta40371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40372,meta40371__$1){
var self__ = this;
var _40372__$1 = this;
return (new cljs.core.async.t_cljs$core$async40370(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40371__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40372){
var self__ = this;
var _40372__$1 = this;
return self__.meta40371;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40370.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40370.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40370.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40370.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40370.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async40370.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40370.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40370.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40371","meta40371",-414998135,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40370";

cljs.core.async.t_cljs$core$async40370.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async40370");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40370 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40370(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40371){
return (new cljs.core.async.t_cljs$core$async40370(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40371));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40370(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30625__auto___40490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___40490,mults,ensure_mult,p){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___40490,mults,ensure_mult,p){
return (function (state_40444){
var state_val_40445 = (state_40444[(1)]);
if((state_val_40445 === (7))){
var inst_40440 = (state_40444[(2)]);
var state_40444__$1 = state_40444;
var statearr_40446_40491 = state_40444__$1;
(statearr_40446_40491[(2)] = inst_40440);

(statearr_40446_40491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (20))){
var state_40444__$1 = state_40444;
var statearr_40447_40492 = state_40444__$1;
(statearr_40447_40492[(2)] = null);

(statearr_40447_40492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (1))){
var state_40444__$1 = state_40444;
var statearr_40448_40493 = state_40444__$1;
(statearr_40448_40493[(2)] = null);

(statearr_40448_40493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (24))){
var inst_40423 = (state_40444[(7)]);
var inst_40432 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40423);
var state_40444__$1 = state_40444;
var statearr_40449_40494 = state_40444__$1;
(statearr_40449_40494[(2)] = inst_40432);

(statearr_40449_40494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (4))){
var inst_40375 = (state_40444[(8)]);
var inst_40375__$1 = (state_40444[(2)]);
var inst_40376 = (inst_40375__$1 == null);
var state_40444__$1 = (function (){var statearr_40450 = state_40444;
(statearr_40450[(8)] = inst_40375__$1);

return statearr_40450;
})();
if(cljs.core.truth_(inst_40376)){
var statearr_40451_40495 = state_40444__$1;
(statearr_40451_40495[(1)] = (5));

} else {
var statearr_40452_40496 = state_40444__$1;
(statearr_40452_40496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (15))){
var inst_40417 = (state_40444[(2)]);
var state_40444__$1 = state_40444;
var statearr_40453_40497 = state_40444__$1;
(statearr_40453_40497[(2)] = inst_40417);

(statearr_40453_40497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (21))){
var inst_40437 = (state_40444[(2)]);
var state_40444__$1 = (function (){var statearr_40454 = state_40444;
(statearr_40454[(9)] = inst_40437);

return statearr_40454;
})();
var statearr_40455_40498 = state_40444__$1;
(statearr_40455_40498[(2)] = null);

(statearr_40455_40498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (13))){
var inst_40399 = (state_40444[(10)]);
var inst_40401 = cljs.core.chunked_seq_QMARK_.call(null,inst_40399);
var state_40444__$1 = state_40444;
if(inst_40401){
var statearr_40456_40499 = state_40444__$1;
(statearr_40456_40499[(1)] = (16));

} else {
var statearr_40457_40500 = state_40444__$1;
(statearr_40457_40500[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (22))){
var inst_40429 = (state_40444[(2)]);
var state_40444__$1 = state_40444;
if(cljs.core.truth_(inst_40429)){
var statearr_40458_40501 = state_40444__$1;
(statearr_40458_40501[(1)] = (23));

} else {
var statearr_40459_40502 = state_40444__$1;
(statearr_40459_40502[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (6))){
var inst_40423 = (state_40444[(7)]);
var inst_40425 = (state_40444[(11)]);
var inst_40375 = (state_40444[(8)]);
var inst_40423__$1 = topic_fn.call(null,inst_40375);
var inst_40424 = cljs.core.deref.call(null,mults);
var inst_40425__$1 = cljs.core.get.call(null,inst_40424,inst_40423__$1);
var state_40444__$1 = (function (){var statearr_40460 = state_40444;
(statearr_40460[(7)] = inst_40423__$1);

(statearr_40460[(11)] = inst_40425__$1);

return statearr_40460;
})();
if(cljs.core.truth_(inst_40425__$1)){
var statearr_40461_40503 = state_40444__$1;
(statearr_40461_40503[(1)] = (19));

} else {
var statearr_40462_40504 = state_40444__$1;
(statearr_40462_40504[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (25))){
var inst_40434 = (state_40444[(2)]);
var state_40444__$1 = state_40444;
var statearr_40463_40505 = state_40444__$1;
(statearr_40463_40505[(2)] = inst_40434);

(statearr_40463_40505[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (17))){
var inst_40399 = (state_40444[(10)]);
var inst_40408 = cljs.core.first.call(null,inst_40399);
var inst_40409 = cljs.core.async.muxch_STAR_.call(null,inst_40408);
var inst_40410 = cljs.core.async.close_BANG_.call(null,inst_40409);
var inst_40411 = cljs.core.next.call(null,inst_40399);
var inst_40385 = inst_40411;
var inst_40386 = null;
var inst_40387 = (0);
var inst_40388 = (0);
var state_40444__$1 = (function (){var statearr_40464 = state_40444;
(statearr_40464[(12)] = inst_40387);

(statearr_40464[(13)] = inst_40385);

(statearr_40464[(14)] = inst_40386);

(statearr_40464[(15)] = inst_40388);

(statearr_40464[(16)] = inst_40410);

return statearr_40464;
})();
var statearr_40465_40506 = state_40444__$1;
(statearr_40465_40506[(2)] = null);

(statearr_40465_40506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (3))){
var inst_40442 = (state_40444[(2)]);
var state_40444__$1 = state_40444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40444__$1,inst_40442);
} else {
if((state_val_40445 === (12))){
var inst_40419 = (state_40444[(2)]);
var state_40444__$1 = state_40444;
var statearr_40466_40507 = state_40444__$1;
(statearr_40466_40507[(2)] = inst_40419);

(statearr_40466_40507[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (2))){
var state_40444__$1 = state_40444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40444__$1,(4),ch);
} else {
if((state_val_40445 === (23))){
var state_40444__$1 = state_40444;
var statearr_40467_40508 = state_40444__$1;
(statearr_40467_40508[(2)] = null);

(statearr_40467_40508[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (19))){
var inst_40425 = (state_40444[(11)]);
var inst_40375 = (state_40444[(8)]);
var inst_40427 = cljs.core.async.muxch_STAR_.call(null,inst_40425);
var state_40444__$1 = state_40444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40444__$1,(22),inst_40427,inst_40375);
} else {
if((state_val_40445 === (11))){
var inst_40399 = (state_40444[(10)]);
var inst_40385 = (state_40444[(13)]);
var inst_40399__$1 = cljs.core.seq.call(null,inst_40385);
var state_40444__$1 = (function (){var statearr_40468 = state_40444;
(statearr_40468[(10)] = inst_40399__$1);

return statearr_40468;
})();
if(inst_40399__$1){
var statearr_40469_40509 = state_40444__$1;
(statearr_40469_40509[(1)] = (13));

} else {
var statearr_40470_40510 = state_40444__$1;
(statearr_40470_40510[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (9))){
var inst_40421 = (state_40444[(2)]);
var state_40444__$1 = state_40444;
var statearr_40471_40511 = state_40444__$1;
(statearr_40471_40511[(2)] = inst_40421);

(statearr_40471_40511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (5))){
var inst_40382 = cljs.core.deref.call(null,mults);
var inst_40383 = cljs.core.vals.call(null,inst_40382);
var inst_40384 = cljs.core.seq.call(null,inst_40383);
var inst_40385 = inst_40384;
var inst_40386 = null;
var inst_40387 = (0);
var inst_40388 = (0);
var state_40444__$1 = (function (){var statearr_40472 = state_40444;
(statearr_40472[(12)] = inst_40387);

(statearr_40472[(13)] = inst_40385);

(statearr_40472[(14)] = inst_40386);

(statearr_40472[(15)] = inst_40388);

return statearr_40472;
})();
var statearr_40473_40512 = state_40444__$1;
(statearr_40473_40512[(2)] = null);

(statearr_40473_40512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (14))){
var state_40444__$1 = state_40444;
var statearr_40477_40513 = state_40444__$1;
(statearr_40477_40513[(2)] = null);

(statearr_40477_40513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (16))){
var inst_40399 = (state_40444[(10)]);
var inst_40403 = cljs.core.chunk_first.call(null,inst_40399);
var inst_40404 = cljs.core.chunk_rest.call(null,inst_40399);
var inst_40405 = cljs.core.count.call(null,inst_40403);
var inst_40385 = inst_40404;
var inst_40386 = inst_40403;
var inst_40387 = inst_40405;
var inst_40388 = (0);
var state_40444__$1 = (function (){var statearr_40478 = state_40444;
(statearr_40478[(12)] = inst_40387);

(statearr_40478[(13)] = inst_40385);

(statearr_40478[(14)] = inst_40386);

(statearr_40478[(15)] = inst_40388);

return statearr_40478;
})();
var statearr_40479_40514 = state_40444__$1;
(statearr_40479_40514[(2)] = null);

(statearr_40479_40514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (10))){
var inst_40387 = (state_40444[(12)]);
var inst_40385 = (state_40444[(13)]);
var inst_40386 = (state_40444[(14)]);
var inst_40388 = (state_40444[(15)]);
var inst_40393 = cljs.core._nth.call(null,inst_40386,inst_40388);
var inst_40394 = cljs.core.async.muxch_STAR_.call(null,inst_40393);
var inst_40395 = cljs.core.async.close_BANG_.call(null,inst_40394);
var inst_40396 = (inst_40388 + (1));
var tmp40474 = inst_40387;
var tmp40475 = inst_40385;
var tmp40476 = inst_40386;
var inst_40385__$1 = tmp40475;
var inst_40386__$1 = tmp40476;
var inst_40387__$1 = tmp40474;
var inst_40388__$1 = inst_40396;
var state_40444__$1 = (function (){var statearr_40480 = state_40444;
(statearr_40480[(12)] = inst_40387__$1);

(statearr_40480[(13)] = inst_40385__$1);

(statearr_40480[(14)] = inst_40386__$1);

(statearr_40480[(17)] = inst_40395);

(statearr_40480[(15)] = inst_40388__$1);

return statearr_40480;
})();
var statearr_40481_40515 = state_40444__$1;
(statearr_40481_40515[(2)] = null);

(statearr_40481_40515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (18))){
var inst_40414 = (state_40444[(2)]);
var state_40444__$1 = state_40444;
var statearr_40482_40516 = state_40444__$1;
(statearr_40482_40516[(2)] = inst_40414);

(statearr_40482_40516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (8))){
var inst_40387 = (state_40444[(12)]);
var inst_40388 = (state_40444[(15)]);
var inst_40390 = (inst_40388 < inst_40387);
var inst_40391 = inst_40390;
var state_40444__$1 = state_40444;
if(cljs.core.truth_(inst_40391)){
var statearr_40483_40517 = state_40444__$1;
(statearr_40483_40517[(1)] = (10));

} else {
var statearr_40484_40518 = state_40444__$1;
(statearr_40484_40518[(1)] = (11));

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
});})(c__30625__auto___40490,mults,ensure_mult,p))
;
return ((function (switch__30537__auto__,c__30625__auto___40490,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_40485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40485[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_40485[(1)] = (1));

return statearr_40485;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_40444){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_40444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40486){if((e40486 instanceof Object)){
var ex__30541__auto__ = e40486;
var statearr_40487_40519 = state_40444;
(statearr_40487_40519[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40520 = state_40444;
state_40444 = G__40520;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_40444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_40444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___40490,mults,ensure_mult,p))
})();
var state__30627__auto__ = (function (){var statearr_40488 = f__30626__auto__.call(null);
(statearr_40488[(6)] = c__30625__auto___40490);

return statearr_40488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___40490,mults,ensure_mult,p))
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
var G__40522 = arguments.length;
switch (G__40522) {
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
var G__40525 = arguments.length;
switch (G__40525) {
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
var G__40528 = arguments.length;
switch (G__40528) {
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
var c__30625__auto___40595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___40595,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___40595,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40567){
var state_val_40568 = (state_40567[(1)]);
if((state_val_40568 === (7))){
var state_40567__$1 = state_40567;
var statearr_40569_40596 = state_40567__$1;
(statearr_40569_40596[(2)] = null);

(statearr_40569_40596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (1))){
var state_40567__$1 = state_40567;
var statearr_40570_40597 = state_40567__$1;
(statearr_40570_40597[(2)] = null);

(statearr_40570_40597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (4))){
var inst_40531 = (state_40567[(7)]);
var inst_40533 = (inst_40531 < cnt);
var state_40567__$1 = state_40567;
if(cljs.core.truth_(inst_40533)){
var statearr_40571_40598 = state_40567__$1;
(statearr_40571_40598[(1)] = (6));

} else {
var statearr_40572_40599 = state_40567__$1;
(statearr_40572_40599[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (15))){
var inst_40563 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40573_40600 = state_40567__$1;
(statearr_40573_40600[(2)] = inst_40563);

(statearr_40573_40600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (13))){
var inst_40556 = cljs.core.async.close_BANG_.call(null,out);
var state_40567__$1 = state_40567;
var statearr_40574_40601 = state_40567__$1;
(statearr_40574_40601[(2)] = inst_40556);

(statearr_40574_40601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (6))){
var state_40567__$1 = state_40567;
var statearr_40575_40602 = state_40567__$1;
(statearr_40575_40602[(2)] = null);

(statearr_40575_40602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (3))){
var inst_40565 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40567__$1,inst_40565);
} else {
if((state_val_40568 === (12))){
var inst_40553 = (state_40567[(8)]);
var inst_40553__$1 = (state_40567[(2)]);
var inst_40554 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40553__$1);
var state_40567__$1 = (function (){var statearr_40576 = state_40567;
(statearr_40576[(8)] = inst_40553__$1);

return statearr_40576;
})();
if(cljs.core.truth_(inst_40554)){
var statearr_40577_40603 = state_40567__$1;
(statearr_40577_40603[(1)] = (13));

} else {
var statearr_40578_40604 = state_40567__$1;
(statearr_40578_40604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (2))){
var inst_40530 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40531 = (0);
var state_40567__$1 = (function (){var statearr_40579 = state_40567;
(statearr_40579[(9)] = inst_40530);

(statearr_40579[(7)] = inst_40531);

return statearr_40579;
})();
var statearr_40580_40605 = state_40567__$1;
(statearr_40580_40605[(2)] = null);

(statearr_40580_40605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (11))){
var inst_40531 = (state_40567[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40567,(10),Object,null,(9));
var inst_40540 = chs__$1.call(null,inst_40531);
var inst_40541 = done.call(null,inst_40531);
var inst_40542 = cljs.core.async.take_BANG_.call(null,inst_40540,inst_40541);
var state_40567__$1 = state_40567;
var statearr_40581_40606 = state_40567__$1;
(statearr_40581_40606[(2)] = inst_40542);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40567__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (9))){
var inst_40531 = (state_40567[(7)]);
var inst_40544 = (state_40567[(2)]);
var inst_40545 = (inst_40531 + (1));
var inst_40531__$1 = inst_40545;
var state_40567__$1 = (function (){var statearr_40582 = state_40567;
(statearr_40582[(10)] = inst_40544);

(statearr_40582[(7)] = inst_40531__$1);

return statearr_40582;
})();
var statearr_40583_40607 = state_40567__$1;
(statearr_40583_40607[(2)] = null);

(statearr_40583_40607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (5))){
var inst_40551 = (state_40567[(2)]);
var state_40567__$1 = (function (){var statearr_40584 = state_40567;
(statearr_40584[(11)] = inst_40551);

return statearr_40584;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40567__$1,(12),dchan);
} else {
if((state_val_40568 === (14))){
var inst_40553 = (state_40567[(8)]);
var inst_40558 = cljs.core.apply.call(null,f,inst_40553);
var state_40567__$1 = state_40567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40567__$1,(16),out,inst_40558);
} else {
if((state_val_40568 === (16))){
var inst_40560 = (state_40567[(2)]);
var state_40567__$1 = (function (){var statearr_40585 = state_40567;
(statearr_40585[(12)] = inst_40560);

return statearr_40585;
})();
var statearr_40586_40608 = state_40567__$1;
(statearr_40586_40608[(2)] = null);

(statearr_40586_40608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (10))){
var inst_40535 = (state_40567[(2)]);
var inst_40536 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40567__$1 = (function (){var statearr_40587 = state_40567;
(statearr_40587[(13)] = inst_40535);

return statearr_40587;
})();
var statearr_40588_40609 = state_40567__$1;
(statearr_40588_40609[(2)] = inst_40536);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40567__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (8))){
var inst_40549 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40589_40610 = state_40567__$1;
(statearr_40589_40610[(2)] = inst_40549);

(statearr_40589_40610[(1)] = (5));


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
});})(c__30625__auto___40595,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30537__auto__,c__30625__auto___40595,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_40590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40590[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_40590[(1)] = (1));

return statearr_40590;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_40567){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_40567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40591){if((e40591 instanceof Object)){
var ex__30541__auto__ = e40591;
var statearr_40592_40611 = state_40567;
(statearr_40592_40611[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40612 = state_40567;
state_40567 = G__40612;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_40567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_40567);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___40595,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30627__auto__ = (function (){var statearr_40593 = f__30626__auto__.call(null);
(statearr_40593[(6)] = c__30625__auto___40595);

return statearr_40593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___40595,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__40615 = arguments.length;
switch (G__40615) {
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
var c__30625__auto___40669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___40669,out){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___40669,out){
return (function (state_40647){
var state_val_40648 = (state_40647[(1)]);
if((state_val_40648 === (7))){
var inst_40627 = (state_40647[(7)]);
var inst_40626 = (state_40647[(8)]);
var inst_40626__$1 = (state_40647[(2)]);
var inst_40627__$1 = cljs.core.nth.call(null,inst_40626__$1,(0),null);
var inst_40628 = cljs.core.nth.call(null,inst_40626__$1,(1),null);
var inst_40629 = (inst_40627__$1 == null);
var state_40647__$1 = (function (){var statearr_40649 = state_40647;
(statearr_40649[(9)] = inst_40628);

(statearr_40649[(7)] = inst_40627__$1);

(statearr_40649[(8)] = inst_40626__$1);

return statearr_40649;
})();
if(cljs.core.truth_(inst_40629)){
var statearr_40650_40670 = state_40647__$1;
(statearr_40650_40670[(1)] = (8));

} else {
var statearr_40651_40671 = state_40647__$1;
(statearr_40651_40671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (1))){
var inst_40616 = cljs.core.vec.call(null,chs);
var inst_40617 = inst_40616;
var state_40647__$1 = (function (){var statearr_40652 = state_40647;
(statearr_40652[(10)] = inst_40617);

return statearr_40652;
})();
var statearr_40653_40672 = state_40647__$1;
(statearr_40653_40672[(2)] = null);

(statearr_40653_40672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (4))){
var inst_40617 = (state_40647[(10)]);
var state_40647__$1 = state_40647;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40647__$1,(7),inst_40617);
} else {
if((state_val_40648 === (6))){
var inst_40643 = (state_40647[(2)]);
var state_40647__$1 = state_40647;
var statearr_40654_40673 = state_40647__$1;
(statearr_40654_40673[(2)] = inst_40643);

(statearr_40654_40673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (3))){
var inst_40645 = (state_40647[(2)]);
var state_40647__$1 = state_40647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40647__$1,inst_40645);
} else {
if((state_val_40648 === (2))){
var inst_40617 = (state_40647[(10)]);
var inst_40619 = cljs.core.count.call(null,inst_40617);
var inst_40620 = (inst_40619 > (0));
var state_40647__$1 = state_40647;
if(cljs.core.truth_(inst_40620)){
var statearr_40656_40674 = state_40647__$1;
(statearr_40656_40674[(1)] = (4));

} else {
var statearr_40657_40675 = state_40647__$1;
(statearr_40657_40675[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (11))){
var inst_40617 = (state_40647[(10)]);
var inst_40636 = (state_40647[(2)]);
var tmp40655 = inst_40617;
var inst_40617__$1 = tmp40655;
var state_40647__$1 = (function (){var statearr_40658 = state_40647;
(statearr_40658[(10)] = inst_40617__$1);

(statearr_40658[(11)] = inst_40636);

return statearr_40658;
})();
var statearr_40659_40676 = state_40647__$1;
(statearr_40659_40676[(2)] = null);

(statearr_40659_40676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (9))){
var inst_40627 = (state_40647[(7)]);
var state_40647__$1 = state_40647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40647__$1,(11),out,inst_40627);
} else {
if((state_val_40648 === (5))){
var inst_40641 = cljs.core.async.close_BANG_.call(null,out);
var state_40647__$1 = state_40647;
var statearr_40660_40677 = state_40647__$1;
(statearr_40660_40677[(2)] = inst_40641);

(statearr_40660_40677[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (10))){
var inst_40639 = (state_40647[(2)]);
var state_40647__$1 = state_40647;
var statearr_40661_40678 = state_40647__$1;
(statearr_40661_40678[(2)] = inst_40639);

(statearr_40661_40678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40648 === (8))){
var inst_40617 = (state_40647[(10)]);
var inst_40628 = (state_40647[(9)]);
var inst_40627 = (state_40647[(7)]);
var inst_40626 = (state_40647[(8)]);
var inst_40631 = (function (){var cs = inst_40617;
var vec__40622 = inst_40626;
var v = inst_40627;
var c = inst_40628;
return ((function (cs,vec__40622,v,c,inst_40617,inst_40628,inst_40627,inst_40626,state_val_40648,c__30625__auto___40669,out){
return (function (p1__40613_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40613_SHARP_);
});
;})(cs,vec__40622,v,c,inst_40617,inst_40628,inst_40627,inst_40626,state_val_40648,c__30625__auto___40669,out))
})();
var inst_40632 = cljs.core.filterv.call(null,inst_40631,inst_40617);
var inst_40617__$1 = inst_40632;
var state_40647__$1 = (function (){var statearr_40662 = state_40647;
(statearr_40662[(10)] = inst_40617__$1);

return statearr_40662;
})();
var statearr_40663_40679 = state_40647__$1;
(statearr_40663_40679[(2)] = null);

(statearr_40663_40679[(1)] = (2));


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
});})(c__30625__auto___40669,out))
;
return ((function (switch__30537__auto__,c__30625__auto___40669,out){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_40664 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40664[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_40664[(1)] = (1));

return statearr_40664;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_40647){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_40647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40665){if((e40665 instanceof Object)){
var ex__30541__auto__ = e40665;
var statearr_40666_40680 = state_40647;
(statearr_40666_40680[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40681 = state_40647;
state_40647 = G__40681;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_40647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_40647);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___40669,out))
})();
var state__30627__auto__ = (function (){var statearr_40667 = f__30626__auto__.call(null);
(statearr_40667[(6)] = c__30625__auto___40669);

return statearr_40667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___40669,out))
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
var G__40683 = arguments.length;
switch (G__40683) {
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
var c__30625__auto___40728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___40728,out){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___40728,out){
return (function (state_40707){
var state_val_40708 = (state_40707[(1)]);
if((state_val_40708 === (7))){
var inst_40689 = (state_40707[(7)]);
var inst_40689__$1 = (state_40707[(2)]);
var inst_40690 = (inst_40689__$1 == null);
var inst_40691 = cljs.core.not.call(null,inst_40690);
var state_40707__$1 = (function (){var statearr_40709 = state_40707;
(statearr_40709[(7)] = inst_40689__$1);

return statearr_40709;
})();
if(inst_40691){
var statearr_40710_40729 = state_40707__$1;
(statearr_40710_40729[(1)] = (8));

} else {
var statearr_40711_40730 = state_40707__$1;
(statearr_40711_40730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40708 === (1))){
var inst_40684 = (0);
var state_40707__$1 = (function (){var statearr_40712 = state_40707;
(statearr_40712[(8)] = inst_40684);

return statearr_40712;
})();
var statearr_40713_40731 = state_40707__$1;
(statearr_40713_40731[(2)] = null);

(statearr_40713_40731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40708 === (4))){
var state_40707__$1 = state_40707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40707__$1,(7),ch);
} else {
if((state_val_40708 === (6))){
var inst_40702 = (state_40707[(2)]);
var state_40707__$1 = state_40707;
var statearr_40714_40732 = state_40707__$1;
(statearr_40714_40732[(2)] = inst_40702);

(statearr_40714_40732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40708 === (3))){
var inst_40704 = (state_40707[(2)]);
var inst_40705 = cljs.core.async.close_BANG_.call(null,out);
var state_40707__$1 = (function (){var statearr_40715 = state_40707;
(statearr_40715[(9)] = inst_40704);

return statearr_40715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40707__$1,inst_40705);
} else {
if((state_val_40708 === (2))){
var inst_40684 = (state_40707[(8)]);
var inst_40686 = (inst_40684 < n);
var state_40707__$1 = state_40707;
if(cljs.core.truth_(inst_40686)){
var statearr_40716_40733 = state_40707__$1;
(statearr_40716_40733[(1)] = (4));

} else {
var statearr_40717_40734 = state_40707__$1;
(statearr_40717_40734[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40708 === (11))){
var inst_40684 = (state_40707[(8)]);
var inst_40694 = (state_40707[(2)]);
var inst_40695 = (inst_40684 + (1));
var inst_40684__$1 = inst_40695;
var state_40707__$1 = (function (){var statearr_40718 = state_40707;
(statearr_40718[(8)] = inst_40684__$1);

(statearr_40718[(10)] = inst_40694);

return statearr_40718;
})();
var statearr_40719_40735 = state_40707__$1;
(statearr_40719_40735[(2)] = null);

(statearr_40719_40735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40708 === (9))){
var state_40707__$1 = state_40707;
var statearr_40720_40736 = state_40707__$1;
(statearr_40720_40736[(2)] = null);

(statearr_40720_40736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40708 === (5))){
var state_40707__$1 = state_40707;
var statearr_40721_40737 = state_40707__$1;
(statearr_40721_40737[(2)] = null);

(statearr_40721_40737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40708 === (10))){
var inst_40699 = (state_40707[(2)]);
var state_40707__$1 = state_40707;
var statearr_40722_40738 = state_40707__$1;
(statearr_40722_40738[(2)] = inst_40699);

(statearr_40722_40738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40708 === (8))){
var inst_40689 = (state_40707[(7)]);
var state_40707__$1 = state_40707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40707__$1,(11),out,inst_40689);
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
});})(c__30625__auto___40728,out))
;
return ((function (switch__30537__auto__,c__30625__auto___40728,out){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_40723 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40723[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_40723[(1)] = (1));

return statearr_40723;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_40707){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_40707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40724){if((e40724 instanceof Object)){
var ex__30541__auto__ = e40724;
var statearr_40725_40739 = state_40707;
(statearr_40725_40739[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40740 = state_40707;
state_40707 = G__40740;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_40707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_40707);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___40728,out))
})();
var state__30627__auto__ = (function (){var statearr_40726 = f__30626__auto__.call(null);
(statearr_40726[(6)] = c__30625__auto___40728);

return statearr_40726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___40728,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
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

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40745 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40745 = (function (f,ch,meta40743,_,fn1,meta40746){
this.f = f;
this.ch = ch;
this.meta40743 = meta40743;
this._ = _;
this.fn1 = fn1;
this.meta40746 = meta40746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40747,meta40746__$1){
var self__ = this;
var _40747__$1 = this;
return (new cljs.core.async.t_cljs$core$async40745(self__.f,self__.ch,self__.meta40743,self__._,self__.fn1,meta40746__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40747){
var self__ = this;
var _40747__$1 = this;
return self__.meta40746;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40741_SHARP_){
return f1.call(null,(((p1__40741_SHARP_ == null))?null:self__.f.call(null,p1__40741_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40745.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40743","meta40743",-737146789,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40742","cljs.core.async/t_cljs$core$async40742",-411560312,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40746","meta40746",-1266067965,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40745";

cljs.core.async.t_cljs$core$async40745.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async40745");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40745 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40745(f__$1,ch__$1,meta40743__$1,___$2,fn1__$1,meta40746){
return (new cljs.core.async.t_cljs$core$async40745(f__$1,ch__$1,meta40743__$1,___$2,fn1__$1,meta40746));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40745(self__.f,self__.ch,self__.meta40743,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40743","meta40743",-737146789,null)], null);
});

cljs.core.async.t_cljs$core$async40742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40742";

cljs.core.async.t_cljs$core$async40742.cljs$lang$ctorPrWriter = (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async40742");
});

cljs.core.async.__GT_t_cljs$core$async40742 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40742(f__$1,ch__$1,meta40743){
return (new cljs.core.async.t_cljs$core$async40742(f__$1,ch__$1,meta40743));
});

}

return (new cljs.core.async.t_cljs$core$async40742(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40748 = (function (f,ch,meta40749){
this.f = f;
this.ch = ch;
this.meta40749 = meta40749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40750,meta40749__$1){
var self__ = this;
var _40750__$1 = this;
return (new cljs.core.async.t_cljs$core$async40748(self__.f,self__.ch,meta40749__$1));
});

cljs.core.async.t_cljs$core$async40748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40750){
var self__ = this;
var _40750__$1 = this;
return self__.meta40749;
});

cljs.core.async.t_cljs$core$async40748.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40748.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40748.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40749","meta40749",95565289,null)], null);
});

cljs.core.async.t_cljs$core$async40748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40748";

cljs.core.async.t_cljs$core$async40748.cljs$lang$ctorPrWriter = (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async40748");
});

cljs.core.async.__GT_t_cljs$core$async40748 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40748(f__$1,ch__$1,meta40749){
return (new cljs.core.async.t_cljs$core$async40748(f__$1,ch__$1,meta40749));
});

}

return (new cljs.core.async.t_cljs$core$async40748(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40751 = (function (p,ch,meta40752){
this.p = p;
this.ch = ch;
this.meta40752 = meta40752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40753,meta40752__$1){
var self__ = this;
var _40753__$1 = this;
return (new cljs.core.async.t_cljs$core$async40751(self__.p,self__.ch,meta40752__$1));
});

cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40753){
var self__ = this;
var _40753__$1 = this;
return self__.meta40752;
});

cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40751.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40752","meta40752",-1835651977,null)], null);
});

cljs.core.async.t_cljs$core$async40751.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40751";

cljs.core.async.t_cljs$core$async40751.cljs$lang$ctorPrWriter = (function (this__27821__auto__,writer__27822__auto__,opt__27823__auto__){
return cljs.core._write.call(null,writer__27822__auto__,"cljs.core.async/t_cljs$core$async40751");
});

cljs.core.async.__GT_t_cljs$core$async40751 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40751(p__$1,ch__$1,meta40752){
return (new cljs.core.async.t_cljs$core$async40751(p__$1,ch__$1,meta40752));
});

}

return (new cljs.core.async.t_cljs$core$async40751(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40755 = arguments.length;
switch (G__40755) {
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
var c__30625__auto___40795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___40795,out){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___40795,out){
return (function (state_40776){
var state_val_40777 = (state_40776[(1)]);
if((state_val_40777 === (7))){
var inst_40772 = (state_40776[(2)]);
var state_40776__$1 = state_40776;
var statearr_40778_40796 = state_40776__$1;
(statearr_40778_40796[(2)] = inst_40772);

(statearr_40778_40796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (1))){
var state_40776__$1 = state_40776;
var statearr_40779_40797 = state_40776__$1;
(statearr_40779_40797[(2)] = null);

(statearr_40779_40797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (4))){
var inst_40758 = (state_40776[(7)]);
var inst_40758__$1 = (state_40776[(2)]);
var inst_40759 = (inst_40758__$1 == null);
var state_40776__$1 = (function (){var statearr_40780 = state_40776;
(statearr_40780[(7)] = inst_40758__$1);

return statearr_40780;
})();
if(cljs.core.truth_(inst_40759)){
var statearr_40781_40798 = state_40776__$1;
(statearr_40781_40798[(1)] = (5));

} else {
var statearr_40782_40799 = state_40776__$1;
(statearr_40782_40799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (6))){
var inst_40758 = (state_40776[(7)]);
var inst_40763 = p.call(null,inst_40758);
var state_40776__$1 = state_40776;
if(cljs.core.truth_(inst_40763)){
var statearr_40783_40800 = state_40776__$1;
(statearr_40783_40800[(1)] = (8));

} else {
var statearr_40784_40801 = state_40776__$1;
(statearr_40784_40801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (3))){
var inst_40774 = (state_40776[(2)]);
var state_40776__$1 = state_40776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40776__$1,inst_40774);
} else {
if((state_val_40777 === (2))){
var state_40776__$1 = state_40776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40776__$1,(4),ch);
} else {
if((state_val_40777 === (11))){
var inst_40766 = (state_40776[(2)]);
var state_40776__$1 = state_40776;
var statearr_40785_40802 = state_40776__$1;
(statearr_40785_40802[(2)] = inst_40766);

(statearr_40785_40802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (9))){
var state_40776__$1 = state_40776;
var statearr_40786_40803 = state_40776__$1;
(statearr_40786_40803[(2)] = null);

(statearr_40786_40803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (5))){
var inst_40761 = cljs.core.async.close_BANG_.call(null,out);
var state_40776__$1 = state_40776;
var statearr_40787_40804 = state_40776__$1;
(statearr_40787_40804[(2)] = inst_40761);

(statearr_40787_40804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40777 === (10))){
var inst_40769 = (state_40776[(2)]);
var state_40776__$1 = (function (){var statearr_40788 = state_40776;
(statearr_40788[(8)] = inst_40769);

return statearr_40788;
})();
var statearr_40789_40805 = state_40776__$1;
(statearr_40789_40805[(2)] = null);

(statearr_40789_40805[(1)] = (2));


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
});})(c__30625__auto___40795,out))
;
return ((function (switch__30537__auto__,c__30625__auto___40795,out){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_40790 = [null,null,null,null,null,null,null,null,null];
(statearr_40790[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_40790[(1)] = (1));

return statearr_40790;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_40776){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_40776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40791){if((e40791 instanceof Object)){
var ex__30541__auto__ = e40791;
var statearr_40792_40806 = state_40776;
(statearr_40792_40806[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40807 = state_40776;
state_40776 = G__40807;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_40776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_40776);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___40795,out))
})();
var state__30627__auto__ = (function (){var statearr_40793 = f__30626__auto__.call(null);
(statearr_40793[(6)] = c__30625__auto___40795);

return statearr_40793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___40795,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40809 = arguments.length;
switch (G__40809) {
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
return (function (state_40872){
var state_val_40873 = (state_40872[(1)]);
if((state_val_40873 === (7))){
var inst_40868 = (state_40872[(2)]);
var state_40872__$1 = state_40872;
var statearr_40874_40912 = state_40872__$1;
(statearr_40874_40912[(2)] = inst_40868);

(statearr_40874_40912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (20))){
var inst_40838 = (state_40872[(7)]);
var inst_40849 = (state_40872[(2)]);
var inst_40850 = cljs.core.next.call(null,inst_40838);
var inst_40824 = inst_40850;
var inst_40825 = null;
var inst_40826 = (0);
var inst_40827 = (0);
var state_40872__$1 = (function (){var statearr_40875 = state_40872;
(statearr_40875[(8)] = inst_40826);

(statearr_40875[(9)] = inst_40849);

(statearr_40875[(10)] = inst_40824);

(statearr_40875[(11)] = inst_40827);

(statearr_40875[(12)] = inst_40825);

return statearr_40875;
})();
var statearr_40876_40913 = state_40872__$1;
(statearr_40876_40913[(2)] = null);

(statearr_40876_40913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (1))){
var state_40872__$1 = state_40872;
var statearr_40877_40914 = state_40872__$1;
(statearr_40877_40914[(2)] = null);

(statearr_40877_40914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (4))){
var inst_40813 = (state_40872[(13)]);
var inst_40813__$1 = (state_40872[(2)]);
var inst_40814 = (inst_40813__$1 == null);
var state_40872__$1 = (function (){var statearr_40878 = state_40872;
(statearr_40878[(13)] = inst_40813__$1);

return statearr_40878;
})();
if(cljs.core.truth_(inst_40814)){
var statearr_40879_40915 = state_40872__$1;
(statearr_40879_40915[(1)] = (5));

} else {
var statearr_40880_40916 = state_40872__$1;
(statearr_40880_40916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (15))){
var state_40872__$1 = state_40872;
var statearr_40884_40917 = state_40872__$1;
(statearr_40884_40917[(2)] = null);

(statearr_40884_40917[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (21))){
var state_40872__$1 = state_40872;
var statearr_40885_40918 = state_40872__$1;
(statearr_40885_40918[(2)] = null);

(statearr_40885_40918[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (13))){
var inst_40826 = (state_40872[(8)]);
var inst_40824 = (state_40872[(10)]);
var inst_40827 = (state_40872[(11)]);
var inst_40825 = (state_40872[(12)]);
var inst_40834 = (state_40872[(2)]);
var inst_40835 = (inst_40827 + (1));
var tmp40881 = inst_40826;
var tmp40882 = inst_40824;
var tmp40883 = inst_40825;
var inst_40824__$1 = tmp40882;
var inst_40825__$1 = tmp40883;
var inst_40826__$1 = tmp40881;
var inst_40827__$1 = inst_40835;
var state_40872__$1 = (function (){var statearr_40886 = state_40872;
(statearr_40886[(8)] = inst_40826__$1);

(statearr_40886[(14)] = inst_40834);

(statearr_40886[(10)] = inst_40824__$1);

(statearr_40886[(11)] = inst_40827__$1);

(statearr_40886[(12)] = inst_40825__$1);

return statearr_40886;
})();
var statearr_40887_40919 = state_40872__$1;
(statearr_40887_40919[(2)] = null);

(statearr_40887_40919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (22))){
var state_40872__$1 = state_40872;
var statearr_40888_40920 = state_40872__$1;
(statearr_40888_40920[(2)] = null);

(statearr_40888_40920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (6))){
var inst_40813 = (state_40872[(13)]);
var inst_40822 = f.call(null,inst_40813);
var inst_40823 = cljs.core.seq.call(null,inst_40822);
var inst_40824 = inst_40823;
var inst_40825 = null;
var inst_40826 = (0);
var inst_40827 = (0);
var state_40872__$1 = (function (){var statearr_40889 = state_40872;
(statearr_40889[(8)] = inst_40826);

(statearr_40889[(10)] = inst_40824);

(statearr_40889[(11)] = inst_40827);

(statearr_40889[(12)] = inst_40825);

return statearr_40889;
})();
var statearr_40890_40921 = state_40872__$1;
(statearr_40890_40921[(2)] = null);

(statearr_40890_40921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (17))){
var inst_40838 = (state_40872[(7)]);
var inst_40842 = cljs.core.chunk_first.call(null,inst_40838);
var inst_40843 = cljs.core.chunk_rest.call(null,inst_40838);
var inst_40844 = cljs.core.count.call(null,inst_40842);
var inst_40824 = inst_40843;
var inst_40825 = inst_40842;
var inst_40826 = inst_40844;
var inst_40827 = (0);
var state_40872__$1 = (function (){var statearr_40891 = state_40872;
(statearr_40891[(8)] = inst_40826);

(statearr_40891[(10)] = inst_40824);

(statearr_40891[(11)] = inst_40827);

(statearr_40891[(12)] = inst_40825);

return statearr_40891;
})();
var statearr_40892_40922 = state_40872__$1;
(statearr_40892_40922[(2)] = null);

(statearr_40892_40922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (3))){
var inst_40870 = (state_40872[(2)]);
var state_40872__$1 = state_40872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40872__$1,inst_40870);
} else {
if((state_val_40873 === (12))){
var inst_40858 = (state_40872[(2)]);
var state_40872__$1 = state_40872;
var statearr_40893_40923 = state_40872__$1;
(statearr_40893_40923[(2)] = inst_40858);

(statearr_40893_40923[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (2))){
var state_40872__$1 = state_40872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40872__$1,(4),in$);
} else {
if((state_val_40873 === (23))){
var inst_40866 = (state_40872[(2)]);
var state_40872__$1 = state_40872;
var statearr_40894_40924 = state_40872__$1;
(statearr_40894_40924[(2)] = inst_40866);

(statearr_40894_40924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (19))){
var inst_40853 = (state_40872[(2)]);
var state_40872__$1 = state_40872;
var statearr_40895_40925 = state_40872__$1;
(statearr_40895_40925[(2)] = inst_40853);

(statearr_40895_40925[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (11))){
var inst_40824 = (state_40872[(10)]);
var inst_40838 = (state_40872[(7)]);
var inst_40838__$1 = cljs.core.seq.call(null,inst_40824);
var state_40872__$1 = (function (){var statearr_40896 = state_40872;
(statearr_40896[(7)] = inst_40838__$1);

return statearr_40896;
})();
if(inst_40838__$1){
var statearr_40897_40926 = state_40872__$1;
(statearr_40897_40926[(1)] = (14));

} else {
var statearr_40898_40927 = state_40872__$1;
(statearr_40898_40927[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (9))){
var inst_40860 = (state_40872[(2)]);
var inst_40861 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40872__$1 = (function (){var statearr_40899 = state_40872;
(statearr_40899[(15)] = inst_40860);

return statearr_40899;
})();
if(cljs.core.truth_(inst_40861)){
var statearr_40900_40928 = state_40872__$1;
(statearr_40900_40928[(1)] = (21));

} else {
var statearr_40901_40929 = state_40872__$1;
(statearr_40901_40929[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (5))){
var inst_40816 = cljs.core.async.close_BANG_.call(null,out);
var state_40872__$1 = state_40872;
var statearr_40902_40930 = state_40872__$1;
(statearr_40902_40930[(2)] = inst_40816);

(statearr_40902_40930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (14))){
var inst_40838 = (state_40872[(7)]);
var inst_40840 = cljs.core.chunked_seq_QMARK_.call(null,inst_40838);
var state_40872__$1 = state_40872;
if(inst_40840){
var statearr_40903_40931 = state_40872__$1;
(statearr_40903_40931[(1)] = (17));

} else {
var statearr_40904_40932 = state_40872__$1;
(statearr_40904_40932[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (16))){
var inst_40856 = (state_40872[(2)]);
var state_40872__$1 = state_40872;
var statearr_40905_40933 = state_40872__$1;
(statearr_40905_40933[(2)] = inst_40856);

(statearr_40905_40933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40873 === (10))){
var inst_40827 = (state_40872[(11)]);
var inst_40825 = (state_40872[(12)]);
var inst_40832 = cljs.core._nth.call(null,inst_40825,inst_40827);
var state_40872__$1 = state_40872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40872__$1,(13),out,inst_40832);
} else {
if((state_val_40873 === (18))){
var inst_40838 = (state_40872[(7)]);
var inst_40847 = cljs.core.first.call(null,inst_40838);
var state_40872__$1 = state_40872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40872__$1,(20),out,inst_40847);
} else {
if((state_val_40873 === (8))){
var inst_40826 = (state_40872[(8)]);
var inst_40827 = (state_40872[(11)]);
var inst_40829 = (inst_40827 < inst_40826);
var inst_40830 = inst_40829;
var state_40872__$1 = state_40872;
if(cljs.core.truth_(inst_40830)){
var statearr_40906_40934 = state_40872__$1;
(statearr_40906_40934[(1)] = (10));

} else {
var statearr_40907_40935 = state_40872__$1;
(statearr_40907_40935[(1)] = (11));

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
var statearr_40908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40908[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30538__auto__);

(statearr_40908[(1)] = (1));

return statearr_40908;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30538__auto____1 = (function (state_40872){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_40872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40909){if((e40909 instanceof Object)){
var ex__30541__auto__ = e40909;
var statearr_40910_40936 = state_40872;
(statearr_40910_40936[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40937 = state_40872;
state_40872 = G__40937;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30538__auto__ = function(state_40872){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30538__auto____1.call(this,state_40872);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30538__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30538__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto__))
})();
var state__30627__auto__ = (function (){var statearr_40911 = f__30626__auto__.call(null);
(statearr_40911[(6)] = c__30625__auto__);

return statearr_40911;
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
var G__40939 = arguments.length;
switch (G__40939) {
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
var G__40942 = arguments.length;
switch (G__40942) {
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
var G__40945 = arguments.length;
switch (G__40945) {
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
var c__30625__auto___40992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___40992,out){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___40992,out){
return (function (state_40969){
var state_val_40970 = (state_40969[(1)]);
if((state_val_40970 === (7))){
var inst_40964 = (state_40969[(2)]);
var state_40969__$1 = state_40969;
var statearr_40971_40993 = state_40969__$1;
(statearr_40971_40993[(2)] = inst_40964);

(statearr_40971_40993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40970 === (1))){
var inst_40946 = null;
var state_40969__$1 = (function (){var statearr_40972 = state_40969;
(statearr_40972[(7)] = inst_40946);

return statearr_40972;
})();
var statearr_40973_40994 = state_40969__$1;
(statearr_40973_40994[(2)] = null);

(statearr_40973_40994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40970 === (4))){
var inst_40949 = (state_40969[(8)]);
var inst_40949__$1 = (state_40969[(2)]);
var inst_40950 = (inst_40949__$1 == null);
var inst_40951 = cljs.core.not.call(null,inst_40950);
var state_40969__$1 = (function (){var statearr_40974 = state_40969;
(statearr_40974[(8)] = inst_40949__$1);

return statearr_40974;
})();
if(inst_40951){
var statearr_40975_40995 = state_40969__$1;
(statearr_40975_40995[(1)] = (5));

} else {
var statearr_40976_40996 = state_40969__$1;
(statearr_40976_40996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40970 === (6))){
var state_40969__$1 = state_40969;
var statearr_40977_40997 = state_40969__$1;
(statearr_40977_40997[(2)] = null);

(statearr_40977_40997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40970 === (3))){
var inst_40966 = (state_40969[(2)]);
var inst_40967 = cljs.core.async.close_BANG_.call(null,out);
var state_40969__$1 = (function (){var statearr_40978 = state_40969;
(statearr_40978[(9)] = inst_40966);

return statearr_40978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40969__$1,inst_40967);
} else {
if((state_val_40970 === (2))){
var state_40969__$1 = state_40969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40969__$1,(4),ch);
} else {
if((state_val_40970 === (11))){
var inst_40949 = (state_40969[(8)]);
var inst_40958 = (state_40969[(2)]);
var inst_40946 = inst_40949;
var state_40969__$1 = (function (){var statearr_40979 = state_40969;
(statearr_40979[(7)] = inst_40946);

(statearr_40979[(10)] = inst_40958);

return statearr_40979;
})();
var statearr_40980_40998 = state_40969__$1;
(statearr_40980_40998[(2)] = null);

(statearr_40980_40998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40970 === (9))){
var inst_40949 = (state_40969[(8)]);
var state_40969__$1 = state_40969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40969__$1,(11),out,inst_40949);
} else {
if((state_val_40970 === (5))){
var inst_40946 = (state_40969[(7)]);
var inst_40949 = (state_40969[(8)]);
var inst_40953 = cljs.core._EQ_.call(null,inst_40949,inst_40946);
var state_40969__$1 = state_40969;
if(inst_40953){
var statearr_40982_40999 = state_40969__$1;
(statearr_40982_40999[(1)] = (8));

} else {
var statearr_40983_41000 = state_40969__$1;
(statearr_40983_41000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40970 === (10))){
var inst_40961 = (state_40969[(2)]);
var state_40969__$1 = state_40969;
var statearr_40984_41001 = state_40969__$1;
(statearr_40984_41001[(2)] = inst_40961);

(statearr_40984_41001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40970 === (8))){
var inst_40946 = (state_40969[(7)]);
var tmp40981 = inst_40946;
var inst_40946__$1 = tmp40981;
var state_40969__$1 = (function (){var statearr_40985 = state_40969;
(statearr_40985[(7)] = inst_40946__$1);

return statearr_40985;
})();
var statearr_40986_41002 = state_40969__$1;
(statearr_40986_41002[(2)] = null);

(statearr_40986_41002[(1)] = (2));


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
});})(c__30625__auto___40992,out))
;
return ((function (switch__30537__auto__,c__30625__auto___40992,out){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_40987 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40987[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_40987[(1)] = (1));

return statearr_40987;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_40969){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_40969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e40988){if((e40988 instanceof Object)){
var ex__30541__auto__ = e40988;
var statearr_40989_41003 = state_40969;
(statearr_40989_41003[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41004 = state_40969;
state_40969 = G__41004;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_40969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_40969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___40992,out))
})();
var state__30627__auto__ = (function (){var statearr_40990 = f__30626__auto__.call(null);
(statearr_40990[(6)] = c__30625__auto___40992);

return statearr_40990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___40992,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41006 = arguments.length;
switch (G__41006) {
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
var c__30625__auto___41072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___41072,out){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___41072,out){
return (function (state_41044){
var state_val_41045 = (state_41044[(1)]);
if((state_val_41045 === (7))){
var inst_41040 = (state_41044[(2)]);
var state_41044__$1 = state_41044;
var statearr_41046_41073 = state_41044__$1;
(statearr_41046_41073[(2)] = inst_41040);

(statearr_41046_41073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41045 === (1))){
var inst_41007 = (new Array(n));
var inst_41008 = inst_41007;
var inst_41009 = (0);
var state_41044__$1 = (function (){var statearr_41047 = state_41044;
(statearr_41047[(7)] = inst_41009);

(statearr_41047[(8)] = inst_41008);

return statearr_41047;
})();
var statearr_41048_41074 = state_41044__$1;
(statearr_41048_41074[(2)] = null);

(statearr_41048_41074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41045 === (4))){
var inst_41012 = (state_41044[(9)]);
var inst_41012__$1 = (state_41044[(2)]);
var inst_41013 = (inst_41012__$1 == null);
var inst_41014 = cljs.core.not.call(null,inst_41013);
var state_41044__$1 = (function (){var statearr_41049 = state_41044;
(statearr_41049[(9)] = inst_41012__$1);

return statearr_41049;
})();
if(inst_41014){
var statearr_41050_41075 = state_41044__$1;
(statearr_41050_41075[(1)] = (5));

} else {
var statearr_41051_41076 = state_41044__$1;
(statearr_41051_41076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41045 === (15))){
var inst_41034 = (state_41044[(2)]);
var state_41044__$1 = state_41044;
var statearr_41052_41077 = state_41044__$1;
(statearr_41052_41077[(2)] = inst_41034);

(statearr_41052_41077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41045 === (13))){
var state_41044__$1 = state_41044;
var statearr_41053_41078 = state_41044__$1;
(statearr_41053_41078[(2)] = null);

(statearr_41053_41078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41045 === (6))){
var inst_41009 = (state_41044[(7)]);
var inst_41030 = (inst_41009 > (0));
var state_41044__$1 = state_41044;
if(cljs.core.truth_(inst_41030)){
var statearr_41054_41079 = state_41044__$1;
(statearr_41054_41079[(1)] = (12));

} else {
var statearr_41055_41080 = state_41044__$1;
(statearr_41055_41080[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41045 === (3))){
var inst_41042 = (state_41044[(2)]);
var state_41044__$1 = state_41044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41044__$1,inst_41042);
} else {
if((state_val_41045 === (12))){
var inst_41008 = (state_41044[(8)]);
var inst_41032 = cljs.core.vec.call(null,inst_41008);
var state_41044__$1 = state_41044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41044__$1,(15),out,inst_41032);
} else {
if((state_val_41045 === (2))){
var state_41044__$1 = state_41044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41044__$1,(4),ch);
} else {
if((state_val_41045 === (11))){
var inst_41024 = (state_41044[(2)]);
var inst_41025 = (new Array(n));
var inst_41008 = inst_41025;
var inst_41009 = (0);
var state_41044__$1 = (function (){var statearr_41056 = state_41044;
(statearr_41056[(7)] = inst_41009);

(statearr_41056[(10)] = inst_41024);

(statearr_41056[(8)] = inst_41008);

return statearr_41056;
})();
var statearr_41057_41081 = state_41044__$1;
(statearr_41057_41081[(2)] = null);

(statearr_41057_41081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41045 === (9))){
var inst_41008 = (state_41044[(8)]);
var inst_41022 = cljs.core.vec.call(null,inst_41008);
var state_41044__$1 = state_41044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41044__$1,(11),out,inst_41022);
} else {
if((state_val_41045 === (5))){
var inst_41012 = (state_41044[(9)]);
var inst_41009 = (state_41044[(7)]);
var inst_41008 = (state_41044[(8)]);
var inst_41017 = (state_41044[(11)]);
var inst_41016 = (inst_41008[inst_41009] = inst_41012);
var inst_41017__$1 = (inst_41009 + (1));
var inst_41018 = (inst_41017__$1 < n);
var state_41044__$1 = (function (){var statearr_41058 = state_41044;
(statearr_41058[(11)] = inst_41017__$1);

(statearr_41058[(12)] = inst_41016);

return statearr_41058;
})();
if(cljs.core.truth_(inst_41018)){
var statearr_41059_41082 = state_41044__$1;
(statearr_41059_41082[(1)] = (8));

} else {
var statearr_41060_41083 = state_41044__$1;
(statearr_41060_41083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41045 === (14))){
var inst_41037 = (state_41044[(2)]);
var inst_41038 = cljs.core.async.close_BANG_.call(null,out);
var state_41044__$1 = (function (){var statearr_41062 = state_41044;
(statearr_41062[(13)] = inst_41037);

return statearr_41062;
})();
var statearr_41063_41084 = state_41044__$1;
(statearr_41063_41084[(2)] = inst_41038);

(statearr_41063_41084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41045 === (10))){
var inst_41028 = (state_41044[(2)]);
var state_41044__$1 = state_41044;
var statearr_41064_41085 = state_41044__$1;
(statearr_41064_41085[(2)] = inst_41028);

(statearr_41064_41085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41045 === (8))){
var inst_41008 = (state_41044[(8)]);
var inst_41017 = (state_41044[(11)]);
var tmp41061 = inst_41008;
var inst_41008__$1 = tmp41061;
var inst_41009 = inst_41017;
var state_41044__$1 = (function (){var statearr_41065 = state_41044;
(statearr_41065[(7)] = inst_41009);

(statearr_41065[(8)] = inst_41008__$1);

return statearr_41065;
})();
var statearr_41066_41086 = state_41044__$1;
(statearr_41066_41086[(2)] = null);

(statearr_41066_41086[(1)] = (2));


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
});})(c__30625__auto___41072,out))
;
return ((function (switch__30537__auto__,c__30625__auto___41072,out){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_41067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41067[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_41067[(1)] = (1));

return statearr_41067;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_41044){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_41044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e41068){if((e41068 instanceof Object)){
var ex__30541__auto__ = e41068;
var statearr_41069_41087 = state_41044;
(statearr_41069_41087[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41088 = state_41044;
state_41044 = G__41088;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_41044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_41044);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___41072,out))
})();
var state__30627__auto__ = (function (){var statearr_41070 = f__30626__auto__.call(null);
(statearr_41070[(6)] = c__30625__auto___41072);

return statearr_41070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___41072,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41090 = arguments.length;
switch (G__41090) {
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
var c__30625__auto___41160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30625__auto___41160,out){
return (function (){
var f__30626__auto__ = (function (){var switch__30537__auto__ = ((function (c__30625__auto___41160,out){
return (function (state_41132){
var state_val_41133 = (state_41132[(1)]);
if((state_val_41133 === (7))){
var inst_41128 = (state_41132[(2)]);
var state_41132__$1 = state_41132;
var statearr_41134_41161 = state_41132__$1;
(statearr_41134_41161[(2)] = inst_41128);

(statearr_41134_41161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (1))){
var inst_41091 = [];
var inst_41092 = inst_41091;
var inst_41093 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41132__$1 = (function (){var statearr_41135 = state_41132;
(statearr_41135[(7)] = inst_41093);

(statearr_41135[(8)] = inst_41092);

return statearr_41135;
})();
var statearr_41136_41162 = state_41132__$1;
(statearr_41136_41162[(2)] = null);

(statearr_41136_41162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (4))){
var inst_41096 = (state_41132[(9)]);
var inst_41096__$1 = (state_41132[(2)]);
var inst_41097 = (inst_41096__$1 == null);
var inst_41098 = cljs.core.not.call(null,inst_41097);
var state_41132__$1 = (function (){var statearr_41137 = state_41132;
(statearr_41137[(9)] = inst_41096__$1);

return statearr_41137;
})();
if(inst_41098){
var statearr_41138_41163 = state_41132__$1;
(statearr_41138_41163[(1)] = (5));

} else {
var statearr_41139_41164 = state_41132__$1;
(statearr_41139_41164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (15))){
var inst_41122 = (state_41132[(2)]);
var state_41132__$1 = state_41132;
var statearr_41140_41165 = state_41132__$1;
(statearr_41140_41165[(2)] = inst_41122);

(statearr_41140_41165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (13))){
var state_41132__$1 = state_41132;
var statearr_41141_41166 = state_41132__$1;
(statearr_41141_41166[(2)] = null);

(statearr_41141_41166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (6))){
var inst_41092 = (state_41132[(8)]);
var inst_41117 = inst_41092.length;
var inst_41118 = (inst_41117 > (0));
var state_41132__$1 = state_41132;
if(cljs.core.truth_(inst_41118)){
var statearr_41142_41167 = state_41132__$1;
(statearr_41142_41167[(1)] = (12));

} else {
var statearr_41143_41168 = state_41132__$1;
(statearr_41143_41168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (3))){
var inst_41130 = (state_41132[(2)]);
var state_41132__$1 = state_41132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41132__$1,inst_41130);
} else {
if((state_val_41133 === (12))){
var inst_41092 = (state_41132[(8)]);
var inst_41120 = cljs.core.vec.call(null,inst_41092);
var state_41132__$1 = state_41132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41132__$1,(15),out,inst_41120);
} else {
if((state_val_41133 === (2))){
var state_41132__$1 = state_41132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41132__$1,(4),ch);
} else {
if((state_val_41133 === (11))){
var inst_41100 = (state_41132[(10)]);
var inst_41096 = (state_41132[(9)]);
var inst_41110 = (state_41132[(2)]);
var inst_41111 = [];
var inst_41112 = inst_41111.push(inst_41096);
var inst_41092 = inst_41111;
var inst_41093 = inst_41100;
var state_41132__$1 = (function (){var statearr_41144 = state_41132;
(statearr_41144[(7)] = inst_41093);

(statearr_41144[(11)] = inst_41110);

(statearr_41144[(8)] = inst_41092);

(statearr_41144[(12)] = inst_41112);

return statearr_41144;
})();
var statearr_41145_41169 = state_41132__$1;
(statearr_41145_41169[(2)] = null);

(statearr_41145_41169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (9))){
var inst_41092 = (state_41132[(8)]);
var inst_41108 = cljs.core.vec.call(null,inst_41092);
var state_41132__$1 = state_41132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41132__$1,(11),out,inst_41108);
} else {
if((state_val_41133 === (5))){
var inst_41093 = (state_41132[(7)]);
var inst_41100 = (state_41132[(10)]);
var inst_41096 = (state_41132[(9)]);
var inst_41100__$1 = f.call(null,inst_41096);
var inst_41101 = cljs.core._EQ_.call(null,inst_41100__$1,inst_41093);
var inst_41102 = cljs.core.keyword_identical_QMARK_.call(null,inst_41093,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41103 = (inst_41101) || (inst_41102);
var state_41132__$1 = (function (){var statearr_41146 = state_41132;
(statearr_41146[(10)] = inst_41100__$1);

return statearr_41146;
})();
if(cljs.core.truth_(inst_41103)){
var statearr_41147_41170 = state_41132__$1;
(statearr_41147_41170[(1)] = (8));

} else {
var statearr_41148_41171 = state_41132__$1;
(statearr_41148_41171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (14))){
var inst_41125 = (state_41132[(2)]);
var inst_41126 = cljs.core.async.close_BANG_.call(null,out);
var state_41132__$1 = (function (){var statearr_41150 = state_41132;
(statearr_41150[(13)] = inst_41125);

return statearr_41150;
})();
var statearr_41151_41172 = state_41132__$1;
(statearr_41151_41172[(2)] = inst_41126);

(statearr_41151_41172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (10))){
var inst_41115 = (state_41132[(2)]);
var state_41132__$1 = state_41132;
var statearr_41152_41173 = state_41132__$1;
(statearr_41152_41173[(2)] = inst_41115);

(statearr_41152_41173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41133 === (8))){
var inst_41100 = (state_41132[(10)]);
var inst_41092 = (state_41132[(8)]);
var inst_41096 = (state_41132[(9)]);
var inst_41105 = inst_41092.push(inst_41096);
var tmp41149 = inst_41092;
var inst_41092__$1 = tmp41149;
var inst_41093 = inst_41100;
var state_41132__$1 = (function (){var statearr_41153 = state_41132;
(statearr_41153[(14)] = inst_41105);

(statearr_41153[(7)] = inst_41093);

(statearr_41153[(8)] = inst_41092__$1);

return statearr_41153;
})();
var statearr_41154_41174 = state_41132__$1;
(statearr_41154_41174[(2)] = null);

(statearr_41154_41174[(1)] = (2));


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
});})(c__30625__auto___41160,out))
;
return ((function (switch__30537__auto__,c__30625__auto___41160,out){
return (function() {
var cljs$core$async$state_machine__30538__auto__ = null;
var cljs$core$async$state_machine__30538__auto____0 = (function (){
var statearr_41155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41155[(0)] = cljs$core$async$state_machine__30538__auto__);

(statearr_41155[(1)] = (1));

return statearr_41155;
});
var cljs$core$async$state_machine__30538__auto____1 = (function (state_41132){
while(true){
var ret_value__30539__auto__ = (function (){try{while(true){
var result__30540__auto__ = switch__30537__auto__.call(null,state_41132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30540__auto__;
}
break;
}
}catch (e41156){if((e41156 instanceof Object)){
var ex__30541__auto__ = e41156;
var statearr_41157_41175 = state_41132;
(statearr_41157_41175[(5)] = ex__30541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41176 = state_41132;
state_41132 = G__41176;
continue;
} else {
return ret_value__30539__auto__;
}
break;
}
});
cljs$core$async$state_machine__30538__auto__ = function(state_41132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30538__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30538__auto____1.call(this,state_41132);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30538__auto____0;
cljs$core$async$state_machine__30538__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30538__auto____1;
return cljs$core$async$state_machine__30538__auto__;
})()
;})(switch__30537__auto__,c__30625__auto___41160,out))
})();
var state__30627__auto__ = (function (){var statearr_41158 = f__30626__auto__.call(null);
(statearr_41158[(6)] = c__30625__auto___41160);

return statearr_41158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30627__auto__);
});})(c__30625__auto___41160,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1515350513580
