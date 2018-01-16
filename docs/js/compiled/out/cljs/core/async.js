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
var G__39402 = arguments.length;
switch (G__39402) {
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
if(typeof cljs.core.async.t_cljs$core$async39403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39403 = (function (f,blockable,meta39404){
this.f = f;
this.blockable = blockable;
this.meta39404 = meta39404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39405,meta39404__$1){
var self__ = this;
var _39405__$1 = this;
return (new cljs.core.async.t_cljs$core$async39403(self__.f,self__.blockable,meta39404__$1));
});

cljs.core.async.t_cljs$core$async39403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39405){
var self__ = this;
var _39405__$1 = this;
return self__.meta39404;
});

cljs.core.async.t_cljs$core$async39403.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39403.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39404","meta39404",1050650635,null)], null);
});

cljs.core.async.t_cljs$core$async39403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39403";

cljs.core.async.t_cljs$core$async39403.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39403");
});

cljs.core.async.__GT_t_cljs$core$async39403 = (function cljs$core$async$__GT_t_cljs$core$async39403(f__$1,blockable__$1,meta39404){
return (new cljs.core.async.t_cljs$core$async39403(f__$1,blockable__$1,meta39404));
});

}

return (new cljs.core.async.t_cljs$core$async39403(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39409 = arguments.length;
switch (G__39409) {
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
var G__39412 = arguments.length;
switch (G__39412) {
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
var G__39415 = arguments.length;
switch (G__39415) {
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
var val_39417 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39417);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39417,ret){
return (function (){
return fn1.call(null,val_39417);
});})(val_39417,ret))
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
var G__39419 = arguments.length;
switch (G__39419) {
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
var n__28140__auto___39421 = n;
var x_39422 = (0);
while(true){
if((x_39422 < n__28140__auto___39421)){
(a[x_39422] = (0));

var G__39423 = (x_39422 + (1));
x_39422 = G__39423;
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

var G__39424 = (i + (1));
i = G__39424;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39425 = (function (flag,meta39426){
this.flag = flag;
this.meta39426 = meta39426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39427,meta39426__$1){
var self__ = this;
var _39427__$1 = this;
return (new cljs.core.async.t_cljs$core$async39425(self__.flag,meta39426__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39427){
var self__ = this;
var _39427__$1 = this;
return self__.meta39426;
});})(flag))
;

cljs.core.async.t_cljs$core$async39425.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39425.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39425.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39426","meta39426",196022545,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39425";

cljs.core.async.t_cljs$core$async39425.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39425");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39425 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39425(flag__$1,meta39426){
return (new cljs.core.async.t_cljs$core$async39425(flag__$1,meta39426));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39425(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39428 = (function (flag,cb,meta39429){
this.flag = flag;
this.cb = cb;
this.meta39429 = meta39429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39430,meta39429__$1){
var self__ = this;
var _39430__$1 = this;
return (new cljs.core.async.t_cljs$core$async39428(self__.flag,self__.cb,meta39429__$1));
});

cljs.core.async.t_cljs$core$async39428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39430){
var self__ = this;
var _39430__$1 = this;
return self__.meta39429;
});

cljs.core.async.t_cljs$core$async39428.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39428.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39428.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39428.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39429","meta39429",238695690,null)], null);
});

cljs.core.async.t_cljs$core$async39428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39428";

cljs.core.async.t_cljs$core$async39428.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39428");
});

cljs.core.async.__GT_t_cljs$core$async39428 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39428(flag__$1,cb__$1,meta39429){
return (new cljs.core.async.t_cljs$core$async39428(flag__$1,cb__$1,meta39429));
});

}

return (new cljs.core.async.t_cljs$core$async39428(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39431_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39431_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39432_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39432_SHARP_,port], null));
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
var G__39433 = (i + (1));
i = G__39433;
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
var len__28364__auto___39439 = arguments.length;
var i__28365__auto___39440 = (0);
while(true){
if((i__28365__auto___39440 < len__28364__auto___39439)){
args__28371__auto__.push((arguments[i__28365__auto___39440]));

var G__39441 = (i__28365__auto___39440 + (1));
i__28365__auto___39440 = G__39441;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39436){
var map__39437 = p__39436;
var map__39437__$1 = ((((!((map__39437 == null)))?((((map__39437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39437):map__39437);
var opts = map__39437__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39434){
var G__39435 = cljs.core.first.call(null,seq39434);
var seq39434__$1 = cljs.core.next.call(null,seq39434);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39435,seq39434__$1);
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
var G__39443 = arguments.length;
switch (G__39443) {
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
var c__30624__auto___39489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___39489){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___39489){
return (function (state_39467){
var state_val_39468 = (state_39467[(1)]);
if((state_val_39468 === (7))){
var inst_39463 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
var statearr_39469_39490 = state_39467__$1;
(statearr_39469_39490[(2)] = inst_39463);

(statearr_39469_39490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (1))){
var state_39467__$1 = state_39467;
var statearr_39470_39491 = state_39467__$1;
(statearr_39470_39491[(2)] = null);

(statearr_39470_39491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (4))){
var inst_39446 = (state_39467[(7)]);
var inst_39446__$1 = (state_39467[(2)]);
var inst_39447 = (inst_39446__$1 == null);
var state_39467__$1 = (function (){var statearr_39471 = state_39467;
(statearr_39471[(7)] = inst_39446__$1);

return statearr_39471;
})();
if(cljs.core.truth_(inst_39447)){
var statearr_39472_39492 = state_39467__$1;
(statearr_39472_39492[(1)] = (5));

} else {
var statearr_39473_39493 = state_39467__$1;
(statearr_39473_39493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (13))){
var state_39467__$1 = state_39467;
var statearr_39474_39494 = state_39467__$1;
(statearr_39474_39494[(2)] = null);

(statearr_39474_39494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (6))){
var inst_39446 = (state_39467[(7)]);
var state_39467__$1 = state_39467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39467__$1,(11),to,inst_39446);
} else {
if((state_val_39468 === (3))){
var inst_39465 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39467__$1,inst_39465);
} else {
if((state_val_39468 === (12))){
var state_39467__$1 = state_39467;
var statearr_39475_39495 = state_39467__$1;
(statearr_39475_39495[(2)] = null);

(statearr_39475_39495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (2))){
var state_39467__$1 = state_39467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39467__$1,(4),from);
} else {
if((state_val_39468 === (11))){
var inst_39456 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
if(cljs.core.truth_(inst_39456)){
var statearr_39476_39496 = state_39467__$1;
(statearr_39476_39496[(1)] = (12));

} else {
var statearr_39477_39497 = state_39467__$1;
(statearr_39477_39497[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (9))){
var state_39467__$1 = state_39467;
var statearr_39478_39498 = state_39467__$1;
(statearr_39478_39498[(2)] = null);

(statearr_39478_39498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (5))){
var state_39467__$1 = state_39467;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39479_39499 = state_39467__$1;
(statearr_39479_39499[(1)] = (8));

} else {
var statearr_39480_39500 = state_39467__$1;
(statearr_39480_39500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (14))){
var inst_39461 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
var statearr_39481_39501 = state_39467__$1;
(statearr_39481_39501[(2)] = inst_39461);

(statearr_39481_39501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (10))){
var inst_39453 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
var statearr_39482_39502 = state_39467__$1;
(statearr_39482_39502[(2)] = inst_39453);

(statearr_39482_39502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (8))){
var inst_39450 = cljs.core.async.close_BANG_.call(null,to);
var state_39467__$1 = state_39467;
var statearr_39483_39503 = state_39467__$1;
(statearr_39483_39503[(2)] = inst_39450);

(statearr_39483_39503[(1)] = (10));


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
});})(c__30624__auto___39489))
;
return ((function (switch__30536__auto__,c__30624__auto___39489){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_39484 = [null,null,null,null,null,null,null,null];
(statearr_39484[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_39484[(1)] = (1));

return statearr_39484;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_39467){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39485){if((e39485 instanceof Object)){
var ex__30540__auto__ = e39485;
var statearr_39486_39504 = state_39467;
(statearr_39486_39504[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39505 = state_39467;
state_39467 = G__39505;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_39467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_39467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___39489))
})();
var state__30626__auto__ = (function (){var statearr_39487 = f__30625__auto__.call(null);
(statearr_39487[(6)] = c__30624__auto___39489);

return statearr_39487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___39489))
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
return (function (p__39506){
var vec__39507 = p__39506;
var v = cljs.core.nth.call(null,vec__39507,(0),null);
var p = cljs.core.nth.call(null,vec__39507,(1),null);
var job = vec__39507;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30624__auto___39678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___39678,res,vec__39507,v,p,job,jobs,results){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___39678,res,vec__39507,v,p,job,jobs,results){
return (function (state_39514){
var state_val_39515 = (state_39514[(1)]);
if((state_val_39515 === (1))){
var state_39514__$1 = state_39514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39514__$1,(2),res,v);
} else {
if((state_val_39515 === (2))){
var inst_39511 = (state_39514[(2)]);
var inst_39512 = cljs.core.async.close_BANG_.call(null,res);
var state_39514__$1 = (function (){var statearr_39516 = state_39514;
(statearr_39516[(7)] = inst_39511);

return statearr_39516;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39514__$1,inst_39512);
} else {
return null;
}
}
});})(c__30624__auto___39678,res,vec__39507,v,p,job,jobs,results))
;
return ((function (switch__30536__auto__,c__30624__auto___39678,res,vec__39507,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39517 = [null,null,null,null,null,null,null,null];
(statearr_39517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39517[(1)] = (1));

return statearr_39517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39514){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39518){if((e39518 instanceof Object)){
var ex__30540__auto__ = e39518;
var statearr_39519_39679 = state_39514;
(statearr_39519_39679[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39680 = state_39514;
state_39514 = G__39680;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___39678,res,vec__39507,v,p,job,jobs,results))
})();
var state__30626__auto__ = (function (){var statearr_39520 = f__30625__auto__.call(null);
(statearr_39520[(6)] = c__30624__auto___39678);

return statearr_39520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___39678,res,vec__39507,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39521){
var vec__39522 = p__39521;
var v = cljs.core.nth.call(null,vec__39522,(0),null);
var p = cljs.core.nth.call(null,vec__39522,(1),null);
var job = vec__39522;
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
var n__28140__auto___39681 = n;
var __39682 = (0);
while(true){
if((__39682 < n__28140__auto___39681)){
var G__39525_39683 = type;
var G__39525_39684__$1 = (((G__39525_39683 instanceof cljs.core.Keyword))?G__39525_39683.fqn:null);
switch (G__39525_39684__$1) {
case "compute":
var c__30624__auto___39686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39682,c__30624__auto___39686,G__39525_39683,G__39525_39684__$1,n__28140__auto___39681,jobs,results,process,async){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (__39682,c__30624__auto___39686,G__39525_39683,G__39525_39684__$1,n__28140__auto___39681,jobs,results,process,async){
return (function (state_39538){
var state_val_39539 = (state_39538[(1)]);
if((state_val_39539 === (1))){
var state_39538__$1 = state_39538;
var statearr_39540_39687 = state_39538__$1;
(statearr_39540_39687[(2)] = null);

(statearr_39540_39687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39539 === (2))){
var state_39538__$1 = state_39538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39538__$1,(4),jobs);
} else {
if((state_val_39539 === (3))){
var inst_39536 = (state_39538[(2)]);
var state_39538__$1 = state_39538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39538__$1,inst_39536);
} else {
if((state_val_39539 === (4))){
var inst_39528 = (state_39538[(2)]);
var inst_39529 = process.call(null,inst_39528);
var state_39538__$1 = state_39538;
if(cljs.core.truth_(inst_39529)){
var statearr_39541_39688 = state_39538__$1;
(statearr_39541_39688[(1)] = (5));

} else {
var statearr_39542_39689 = state_39538__$1;
(statearr_39542_39689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39539 === (5))){
var state_39538__$1 = state_39538;
var statearr_39543_39690 = state_39538__$1;
(statearr_39543_39690[(2)] = null);

(statearr_39543_39690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39539 === (6))){
var state_39538__$1 = state_39538;
var statearr_39544_39691 = state_39538__$1;
(statearr_39544_39691[(2)] = null);

(statearr_39544_39691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39539 === (7))){
var inst_39534 = (state_39538[(2)]);
var state_39538__$1 = state_39538;
var statearr_39545_39692 = state_39538__$1;
(statearr_39545_39692[(2)] = inst_39534);

(statearr_39545_39692[(1)] = (3));


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
});})(__39682,c__30624__auto___39686,G__39525_39683,G__39525_39684__$1,n__28140__auto___39681,jobs,results,process,async))
;
return ((function (__39682,switch__30536__auto__,c__30624__auto___39686,G__39525_39683,G__39525_39684__$1,n__28140__auto___39681,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39546 = [null,null,null,null,null,null,null];
(statearr_39546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39546[(1)] = (1));

return statearr_39546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39538){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39547){if((e39547 instanceof Object)){
var ex__30540__auto__ = e39547;
var statearr_39548_39693 = state_39538;
(statearr_39548_39693[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39694 = state_39538;
state_39538 = G__39694;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39538){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39538);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(__39682,switch__30536__auto__,c__30624__auto___39686,G__39525_39683,G__39525_39684__$1,n__28140__auto___39681,jobs,results,process,async))
})();
var state__30626__auto__ = (function (){var statearr_39549 = f__30625__auto__.call(null);
(statearr_39549[(6)] = c__30624__auto___39686);

return statearr_39549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(__39682,c__30624__auto___39686,G__39525_39683,G__39525_39684__$1,n__28140__auto___39681,jobs,results,process,async))
);


break;
case "async":
var c__30624__auto___39695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39682,c__30624__auto___39695,G__39525_39683,G__39525_39684__$1,n__28140__auto___39681,jobs,results,process,async){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (__39682,c__30624__auto___39695,G__39525_39683,G__39525_39684__$1,n__28140__auto___39681,jobs,results,process,async){
return (function (state_39562){
var state_val_39563 = (state_39562[(1)]);
if((state_val_39563 === (1))){
var state_39562__$1 = state_39562;
var statearr_39564_39696 = state_39562__$1;
(statearr_39564_39696[(2)] = null);

(statearr_39564_39696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39563 === (2))){
var state_39562__$1 = state_39562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39562__$1,(4),jobs);
} else {
if((state_val_39563 === (3))){
var inst_39560 = (state_39562[(2)]);
var state_39562__$1 = state_39562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39562__$1,inst_39560);
} else {
if((state_val_39563 === (4))){
var inst_39552 = (state_39562[(2)]);
var inst_39553 = async.call(null,inst_39552);
var state_39562__$1 = state_39562;
if(cljs.core.truth_(inst_39553)){
var statearr_39565_39697 = state_39562__$1;
(statearr_39565_39697[(1)] = (5));

} else {
var statearr_39566_39698 = state_39562__$1;
(statearr_39566_39698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39563 === (5))){
var state_39562__$1 = state_39562;
var statearr_39567_39699 = state_39562__$1;
(statearr_39567_39699[(2)] = null);

(statearr_39567_39699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39563 === (6))){
var state_39562__$1 = state_39562;
var statearr_39568_39700 = state_39562__$1;
(statearr_39568_39700[(2)] = null);

(statearr_39568_39700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39563 === (7))){
var inst_39558 = (state_39562[(2)]);
var state_39562__$1 = state_39562;
var statearr_39569_39701 = state_39562__$1;
(statearr_39569_39701[(2)] = inst_39558);

(statearr_39569_39701[(1)] = (3));


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
});})(__39682,c__30624__auto___39695,G__39525_39683,G__39525_39684__$1,n__28140__auto___39681,jobs,results,process,async))
;
return ((function (__39682,switch__30536__auto__,c__30624__auto___39695,G__39525_39683,G__39525_39684__$1,n__28140__auto___39681,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39570 = [null,null,null,null,null,null,null];
(statearr_39570[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39570[(1)] = (1));

return statearr_39570;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39562){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39571){if((e39571 instanceof Object)){
var ex__30540__auto__ = e39571;
var statearr_39572_39702 = state_39562;
(statearr_39572_39702[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39703 = state_39562;
state_39562 = G__39703;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(__39682,switch__30536__auto__,c__30624__auto___39695,G__39525_39683,G__39525_39684__$1,n__28140__auto___39681,jobs,results,process,async))
})();
var state__30626__auto__ = (function (){var statearr_39573 = f__30625__auto__.call(null);
(statearr_39573[(6)] = c__30624__auto___39695);

return statearr_39573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(__39682,c__30624__auto___39695,G__39525_39683,G__39525_39684__$1,n__28140__auto___39681,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39525_39684__$1)].join('')));

}

var G__39704 = (__39682 + (1));
__39682 = G__39704;
continue;
} else {
}
break;
}

var c__30624__auto___39705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___39705,jobs,results,process,async){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___39705,jobs,results,process,async){
return (function (state_39595){
var state_val_39596 = (state_39595[(1)]);
if((state_val_39596 === (1))){
var state_39595__$1 = state_39595;
var statearr_39597_39706 = state_39595__$1;
(statearr_39597_39706[(2)] = null);

(statearr_39597_39706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39596 === (2))){
var state_39595__$1 = state_39595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39595__$1,(4),from);
} else {
if((state_val_39596 === (3))){
var inst_39593 = (state_39595[(2)]);
var state_39595__$1 = state_39595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39595__$1,inst_39593);
} else {
if((state_val_39596 === (4))){
var inst_39576 = (state_39595[(7)]);
var inst_39576__$1 = (state_39595[(2)]);
var inst_39577 = (inst_39576__$1 == null);
var state_39595__$1 = (function (){var statearr_39598 = state_39595;
(statearr_39598[(7)] = inst_39576__$1);

return statearr_39598;
})();
if(cljs.core.truth_(inst_39577)){
var statearr_39599_39707 = state_39595__$1;
(statearr_39599_39707[(1)] = (5));

} else {
var statearr_39600_39708 = state_39595__$1;
(statearr_39600_39708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39596 === (5))){
var inst_39579 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39595__$1 = state_39595;
var statearr_39601_39709 = state_39595__$1;
(statearr_39601_39709[(2)] = inst_39579);

(statearr_39601_39709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39596 === (6))){
var inst_39576 = (state_39595[(7)]);
var inst_39581 = (state_39595[(8)]);
var inst_39581__$1 = cljs.core.async.chan.call(null,(1));
var inst_39582 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39583 = [inst_39576,inst_39581__$1];
var inst_39584 = (new cljs.core.PersistentVector(null,2,(5),inst_39582,inst_39583,null));
var state_39595__$1 = (function (){var statearr_39602 = state_39595;
(statearr_39602[(8)] = inst_39581__$1);

return statearr_39602;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39595__$1,(8),jobs,inst_39584);
} else {
if((state_val_39596 === (7))){
var inst_39591 = (state_39595[(2)]);
var state_39595__$1 = state_39595;
var statearr_39603_39710 = state_39595__$1;
(statearr_39603_39710[(2)] = inst_39591);

(statearr_39603_39710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39596 === (8))){
var inst_39581 = (state_39595[(8)]);
var inst_39586 = (state_39595[(2)]);
var state_39595__$1 = (function (){var statearr_39604 = state_39595;
(statearr_39604[(9)] = inst_39586);

return statearr_39604;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39595__$1,(9),results,inst_39581);
} else {
if((state_val_39596 === (9))){
var inst_39588 = (state_39595[(2)]);
var state_39595__$1 = (function (){var statearr_39605 = state_39595;
(statearr_39605[(10)] = inst_39588);

return statearr_39605;
})();
var statearr_39606_39711 = state_39595__$1;
(statearr_39606_39711[(2)] = null);

(statearr_39606_39711[(1)] = (2));


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
});})(c__30624__auto___39705,jobs,results,process,async))
;
return ((function (switch__30536__auto__,c__30624__auto___39705,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39607 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39607[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39607[(1)] = (1));

return statearr_39607;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39595){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39608){if((e39608 instanceof Object)){
var ex__30540__auto__ = e39608;
var statearr_39609_39712 = state_39595;
(statearr_39609_39712[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39713 = state_39595;
state_39595 = G__39713;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39595){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___39705,jobs,results,process,async))
})();
var state__30626__auto__ = (function (){var statearr_39610 = f__30625__auto__.call(null);
(statearr_39610[(6)] = c__30624__auto___39705);

return statearr_39610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___39705,jobs,results,process,async))
);


var c__30624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto__,jobs,results,process,async){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto__,jobs,results,process,async){
return (function (state_39648){
var state_val_39649 = (state_39648[(1)]);
if((state_val_39649 === (7))){
var inst_39644 = (state_39648[(2)]);
var state_39648__$1 = state_39648;
var statearr_39650_39714 = state_39648__$1;
(statearr_39650_39714[(2)] = inst_39644);

(statearr_39650_39714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (20))){
var state_39648__$1 = state_39648;
var statearr_39651_39715 = state_39648__$1;
(statearr_39651_39715[(2)] = null);

(statearr_39651_39715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (1))){
var state_39648__$1 = state_39648;
var statearr_39652_39716 = state_39648__$1;
(statearr_39652_39716[(2)] = null);

(statearr_39652_39716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (4))){
var inst_39613 = (state_39648[(7)]);
var inst_39613__$1 = (state_39648[(2)]);
var inst_39614 = (inst_39613__$1 == null);
var state_39648__$1 = (function (){var statearr_39653 = state_39648;
(statearr_39653[(7)] = inst_39613__$1);

return statearr_39653;
})();
if(cljs.core.truth_(inst_39614)){
var statearr_39654_39717 = state_39648__$1;
(statearr_39654_39717[(1)] = (5));

} else {
var statearr_39655_39718 = state_39648__$1;
(statearr_39655_39718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (15))){
var inst_39626 = (state_39648[(8)]);
var state_39648__$1 = state_39648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39648__$1,(18),to,inst_39626);
} else {
if((state_val_39649 === (21))){
var inst_39639 = (state_39648[(2)]);
var state_39648__$1 = state_39648;
var statearr_39656_39719 = state_39648__$1;
(statearr_39656_39719[(2)] = inst_39639);

(statearr_39656_39719[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (13))){
var inst_39641 = (state_39648[(2)]);
var state_39648__$1 = (function (){var statearr_39657 = state_39648;
(statearr_39657[(9)] = inst_39641);

return statearr_39657;
})();
var statearr_39658_39720 = state_39648__$1;
(statearr_39658_39720[(2)] = null);

(statearr_39658_39720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (6))){
var inst_39613 = (state_39648[(7)]);
var state_39648__$1 = state_39648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39648__$1,(11),inst_39613);
} else {
if((state_val_39649 === (17))){
var inst_39634 = (state_39648[(2)]);
var state_39648__$1 = state_39648;
if(cljs.core.truth_(inst_39634)){
var statearr_39659_39721 = state_39648__$1;
(statearr_39659_39721[(1)] = (19));

} else {
var statearr_39660_39722 = state_39648__$1;
(statearr_39660_39722[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (3))){
var inst_39646 = (state_39648[(2)]);
var state_39648__$1 = state_39648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39648__$1,inst_39646);
} else {
if((state_val_39649 === (12))){
var inst_39623 = (state_39648[(10)]);
var state_39648__$1 = state_39648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39648__$1,(14),inst_39623);
} else {
if((state_val_39649 === (2))){
var state_39648__$1 = state_39648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39648__$1,(4),results);
} else {
if((state_val_39649 === (19))){
var state_39648__$1 = state_39648;
var statearr_39661_39723 = state_39648__$1;
(statearr_39661_39723[(2)] = null);

(statearr_39661_39723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (11))){
var inst_39623 = (state_39648[(2)]);
var state_39648__$1 = (function (){var statearr_39662 = state_39648;
(statearr_39662[(10)] = inst_39623);

return statearr_39662;
})();
var statearr_39663_39724 = state_39648__$1;
(statearr_39663_39724[(2)] = null);

(statearr_39663_39724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (9))){
var state_39648__$1 = state_39648;
var statearr_39664_39725 = state_39648__$1;
(statearr_39664_39725[(2)] = null);

(statearr_39664_39725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (5))){
var state_39648__$1 = state_39648;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39665_39726 = state_39648__$1;
(statearr_39665_39726[(1)] = (8));

} else {
var statearr_39666_39727 = state_39648__$1;
(statearr_39666_39727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (14))){
var inst_39628 = (state_39648[(11)]);
var inst_39626 = (state_39648[(8)]);
var inst_39626__$1 = (state_39648[(2)]);
var inst_39627 = (inst_39626__$1 == null);
var inst_39628__$1 = cljs.core.not.call(null,inst_39627);
var state_39648__$1 = (function (){var statearr_39667 = state_39648;
(statearr_39667[(11)] = inst_39628__$1);

(statearr_39667[(8)] = inst_39626__$1);

return statearr_39667;
})();
if(inst_39628__$1){
var statearr_39668_39728 = state_39648__$1;
(statearr_39668_39728[(1)] = (15));

} else {
var statearr_39669_39729 = state_39648__$1;
(statearr_39669_39729[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (16))){
var inst_39628 = (state_39648[(11)]);
var state_39648__$1 = state_39648;
var statearr_39670_39730 = state_39648__$1;
(statearr_39670_39730[(2)] = inst_39628);

(statearr_39670_39730[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (10))){
var inst_39620 = (state_39648[(2)]);
var state_39648__$1 = state_39648;
var statearr_39671_39731 = state_39648__$1;
(statearr_39671_39731[(2)] = inst_39620);

(statearr_39671_39731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (18))){
var inst_39631 = (state_39648[(2)]);
var state_39648__$1 = state_39648;
var statearr_39672_39732 = state_39648__$1;
(statearr_39672_39732[(2)] = inst_39631);

(statearr_39672_39732[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (8))){
var inst_39617 = cljs.core.async.close_BANG_.call(null,to);
var state_39648__$1 = state_39648;
var statearr_39673_39733 = state_39648__$1;
(statearr_39673_39733[(2)] = inst_39617);

(statearr_39673_39733[(1)] = (10));


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
var statearr_39674 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39674[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39674[(1)] = (1));

return statearr_39674;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39648){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39675){if((e39675 instanceof Object)){
var ex__30540__auto__ = e39675;
var statearr_39676_39734 = state_39648;
(statearr_39676_39734[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39735 = state_39648;
state_39648 = G__39735;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39648);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__,jobs,results,process,async))
})();
var state__30626__auto__ = (function (){var statearr_39677 = f__30625__auto__.call(null);
(statearr_39677[(6)] = c__30624__auto__);

return statearr_39677;
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
var G__39737 = arguments.length;
switch (G__39737) {
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
var G__39740 = arguments.length;
switch (G__39740) {
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
var G__39743 = arguments.length;
switch (G__39743) {
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
var c__30624__auto___39792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___39792,tc,fc){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___39792,tc,fc){
return (function (state_39769){
var state_val_39770 = (state_39769[(1)]);
if((state_val_39770 === (7))){
var inst_39765 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
var statearr_39771_39793 = state_39769__$1;
(statearr_39771_39793[(2)] = inst_39765);

(statearr_39771_39793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (1))){
var state_39769__$1 = state_39769;
var statearr_39772_39794 = state_39769__$1;
(statearr_39772_39794[(2)] = null);

(statearr_39772_39794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (4))){
var inst_39746 = (state_39769[(7)]);
var inst_39746__$1 = (state_39769[(2)]);
var inst_39747 = (inst_39746__$1 == null);
var state_39769__$1 = (function (){var statearr_39773 = state_39769;
(statearr_39773[(7)] = inst_39746__$1);

return statearr_39773;
})();
if(cljs.core.truth_(inst_39747)){
var statearr_39774_39795 = state_39769__$1;
(statearr_39774_39795[(1)] = (5));

} else {
var statearr_39775_39796 = state_39769__$1;
(statearr_39775_39796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (13))){
var state_39769__$1 = state_39769;
var statearr_39776_39797 = state_39769__$1;
(statearr_39776_39797[(2)] = null);

(statearr_39776_39797[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (6))){
var inst_39746 = (state_39769[(7)]);
var inst_39752 = p.call(null,inst_39746);
var state_39769__$1 = state_39769;
if(cljs.core.truth_(inst_39752)){
var statearr_39777_39798 = state_39769__$1;
(statearr_39777_39798[(1)] = (9));

} else {
var statearr_39778_39799 = state_39769__$1;
(statearr_39778_39799[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (3))){
var inst_39767 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39769__$1,inst_39767);
} else {
if((state_val_39770 === (12))){
var state_39769__$1 = state_39769;
var statearr_39779_39800 = state_39769__$1;
(statearr_39779_39800[(2)] = null);

(statearr_39779_39800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (2))){
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39769__$1,(4),ch);
} else {
if((state_val_39770 === (11))){
var inst_39746 = (state_39769[(7)]);
var inst_39756 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39769__$1,(8),inst_39756,inst_39746);
} else {
if((state_val_39770 === (9))){
var state_39769__$1 = state_39769;
var statearr_39780_39801 = state_39769__$1;
(statearr_39780_39801[(2)] = tc);

(statearr_39780_39801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (5))){
var inst_39749 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39750 = cljs.core.async.close_BANG_.call(null,fc);
var state_39769__$1 = (function (){var statearr_39781 = state_39769;
(statearr_39781[(8)] = inst_39749);

return statearr_39781;
})();
var statearr_39782_39802 = state_39769__$1;
(statearr_39782_39802[(2)] = inst_39750);

(statearr_39782_39802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (14))){
var inst_39763 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
var statearr_39783_39803 = state_39769__$1;
(statearr_39783_39803[(2)] = inst_39763);

(statearr_39783_39803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (10))){
var state_39769__$1 = state_39769;
var statearr_39784_39804 = state_39769__$1;
(statearr_39784_39804[(2)] = fc);

(statearr_39784_39804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (8))){
var inst_39758 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
if(cljs.core.truth_(inst_39758)){
var statearr_39785_39805 = state_39769__$1;
(statearr_39785_39805[(1)] = (12));

} else {
var statearr_39786_39806 = state_39769__$1;
(statearr_39786_39806[(1)] = (13));

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
});})(c__30624__auto___39792,tc,fc))
;
return ((function (switch__30536__auto__,c__30624__auto___39792,tc,fc){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_39787 = [null,null,null,null,null,null,null,null,null];
(statearr_39787[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_39787[(1)] = (1));

return statearr_39787;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_39769){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39788){if((e39788 instanceof Object)){
var ex__30540__auto__ = e39788;
var statearr_39789_39807 = state_39769;
(statearr_39789_39807[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39808 = state_39769;
state_39769 = G__39808;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_39769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_39769);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___39792,tc,fc))
})();
var state__30626__auto__ = (function (){var statearr_39790 = f__30625__auto__.call(null);
(statearr_39790[(6)] = c__30624__auto___39792);

return statearr_39790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___39792,tc,fc))
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
return (function (state_39829){
var state_val_39830 = (state_39829[(1)]);
if((state_val_39830 === (7))){
var inst_39825 = (state_39829[(2)]);
var state_39829__$1 = state_39829;
var statearr_39831_39849 = state_39829__$1;
(statearr_39831_39849[(2)] = inst_39825);

(statearr_39831_39849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (1))){
var inst_39809 = init;
var state_39829__$1 = (function (){var statearr_39832 = state_39829;
(statearr_39832[(7)] = inst_39809);

return statearr_39832;
})();
var statearr_39833_39850 = state_39829__$1;
(statearr_39833_39850[(2)] = null);

(statearr_39833_39850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (4))){
var inst_39812 = (state_39829[(8)]);
var inst_39812__$1 = (state_39829[(2)]);
var inst_39813 = (inst_39812__$1 == null);
var state_39829__$1 = (function (){var statearr_39834 = state_39829;
(statearr_39834[(8)] = inst_39812__$1);

return statearr_39834;
})();
if(cljs.core.truth_(inst_39813)){
var statearr_39835_39851 = state_39829__$1;
(statearr_39835_39851[(1)] = (5));

} else {
var statearr_39836_39852 = state_39829__$1;
(statearr_39836_39852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (6))){
var inst_39809 = (state_39829[(7)]);
var inst_39812 = (state_39829[(8)]);
var inst_39816 = (state_39829[(9)]);
var inst_39816__$1 = f.call(null,inst_39809,inst_39812);
var inst_39817 = cljs.core.reduced_QMARK_.call(null,inst_39816__$1);
var state_39829__$1 = (function (){var statearr_39837 = state_39829;
(statearr_39837[(9)] = inst_39816__$1);

return statearr_39837;
})();
if(inst_39817){
var statearr_39838_39853 = state_39829__$1;
(statearr_39838_39853[(1)] = (8));

} else {
var statearr_39839_39854 = state_39829__$1;
(statearr_39839_39854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (3))){
var inst_39827 = (state_39829[(2)]);
var state_39829__$1 = state_39829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39829__$1,inst_39827);
} else {
if((state_val_39830 === (2))){
var state_39829__$1 = state_39829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39829__$1,(4),ch);
} else {
if((state_val_39830 === (9))){
var inst_39816 = (state_39829[(9)]);
var inst_39809 = inst_39816;
var state_39829__$1 = (function (){var statearr_39840 = state_39829;
(statearr_39840[(7)] = inst_39809);

return statearr_39840;
})();
var statearr_39841_39855 = state_39829__$1;
(statearr_39841_39855[(2)] = null);

(statearr_39841_39855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (5))){
var inst_39809 = (state_39829[(7)]);
var state_39829__$1 = state_39829;
var statearr_39842_39856 = state_39829__$1;
(statearr_39842_39856[(2)] = inst_39809);

(statearr_39842_39856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (10))){
var inst_39823 = (state_39829[(2)]);
var state_39829__$1 = state_39829;
var statearr_39843_39857 = state_39829__$1;
(statearr_39843_39857[(2)] = inst_39823);

(statearr_39843_39857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (8))){
var inst_39816 = (state_39829[(9)]);
var inst_39819 = cljs.core.deref.call(null,inst_39816);
var state_39829__$1 = state_39829;
var statearr_39844_39858 = state_39829__$1;
(statearr_39844_39858[(2)] = inst_39819);

(statearr_39844_39858[(1)] = (10));


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
var statearr_39845 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39845[(0)] = cljs$core$async$reduce_$_state_machine__30537__auto__);

(statearr_39845[(1)] = (1));

return statearr_39845;
});
var cljs$core$async$reduce_$_state_machine__30537__auto____1 = (function (state_39829){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39846){if((e39846 instanceof Object)){
var ex__30540__auto__ = e39846;
var statearr_39847_39859 = state_39829;
(statearr_39847_39859[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39860 = state_39829;
state_39829 = G__39860;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30537__auto__ = function(state_39829){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30537__auto____1.call(this,state_39829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30537__auto____0;
cljs$core$async$reduce_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30537__auto____1;
return cljs$core$async$reduce_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_39848 = f__30625__auto__.call(null);
(statearr_39848[(6)] = c__30624__auto__);

return statearr_39848;
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
var G__39862 = arguments.length;
switch (G__39862) {
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
return (function (state_39887){
var state_val_39888 = (state_39887[(1)]);
if((state_val_39888 === (7))){
var inst_39869 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39889_39910 = state_39887__$1;
(statearr_39889_39910[(2)] = inst_39869);

(statearr_39889_39910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (1))){
var inst_39863 = cljs.core.seq.call(null,coll);
var inst_39864 = inst_39863;
var state_39887__$1 = (function (){var statearr_39890 = state_39887;
(statearr_39890[(7)] = inst_39864);

return statearr_39890;
})();
var statearr_39891_39911 = state_39887__$1;
(statearr_39891_39911[(2)] = null);

(statearr_39891_39911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (4))){
var inst_39864 = (state_39887[(7)]);
var inst_39867 = cljs.core.first.call(null,inst_39864);
var state_39887__$1 = state_39887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39887__$1,(7),ch,inst_39867);
} else {
if((state_val_39888 === (13))){
var inst_39881 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39892_39912 = state_39887__$1;
(statearr_39892_39912[(2)] = inst_39881);

(statearr_39892_39912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (6))){
var inst_39872 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
if(cljs.core.truth_(inst_39872)){
var statearr_39893_39913 = state_39887__$1;
(statearr_39893_39913[(1)] = (8));

} else {
var statearr_39894_39914 = state_39887__$1;
(statearr_39894_39914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (3))){
var inst_39885 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39887__$1,inst_39885);
} else {
if((state_val_39888 === (12))){
var state_39887__$1 = state_39887;
var statearr_39895_39915 = state_39887__$1;
(statearr_39895_39915[(2)] = null);

(statearr_39895_39915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (2))){
var inst_39864 = (state_39887[(7)]);
var state_39887__$1 = state_39887;
if(cljs.core.truth_(inst_39864)){
var statearr_39896_39916 = state_39887__$1;
(statearr_39896_39916[(1)] = (4));

} else {
var statearr_39897_39917 = state_39887__$1;
(statearr_39897_39917[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (11))){
var inst_39878 = cljs.core.async.close_BANG_.call(null,ch);
var state_39887__$1 = state_39887;
var statearr_39898_39918 = state_39887__$1;
(statearr_39898_39918[(2)] = inst_39878);

(statearr_39898_39918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (9))){
var state_39887__$1 = state_39887;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39899_39919 = state_39887__$1;
(statearr_39899_39919[(1)] = (11));

} else {
var statearr_39900_39920 = state_39887__$1;
(statearr_39900_39920[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (5))){
var inst_39864 = (state_39887[(7)]);
var state_39887__$1 = state_39887;
var statearr_39901_39921 = state_39887__$1;
(statearr_39901_39921[(2)] = inst_39864);

(statearr_39901_39921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (10))){
var inst_39883 = (state_39887[(2)]);
var state_39887__$1 = state_39887;
var statearr_39902_39922 = state_39887__$1;
(statearr_39902_39922[(2)] = inst_39883);

(statearr_39902_39922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39888 === (8))){
var inst_39864 = (state_39887[(7)]);
var inst_39874 = cljs.core.next.call(null,inst_39864);
var inst_39864__$1 = inst_39874;
var state_39887__$1 = (function (){var statearr_39903 = state_39887;
(statearr_39903[(7)] = inst_39864__$1);

return statearr_39903;
})();
var statearr_39904_39923 = state_39887__$1;
(statearr_39904_39923[(2)] = null);

(statearr_39904_39923[(1)] = (2));


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
var statearr_39905 = [null,null,null,null,null,null,null,null];
(statearr_39905[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_39905[(1)] = (1));

return statearr_39905;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_39887){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39906){if((e39906 instanceof Object)){
var ex__30540__auto__ = e39906;
var statearr_39907_39924 = state_39887;
(statearr_39907_39924[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39925 = state_39887;
state_39887 = G__39925;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_39887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_39887);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_39908 = f__30625__auto__.call(null);
(statearr_39908[(6)] = c__30624__auto__);

return statearr_39908;
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
if(typeof cljs.core.async.t_cljs$core$async39926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39926 = (function (ch,cs,meta39927){
this.ch = ch;
this.cs = cs;
this.meta39927 = meta39927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39928,meta39927__$1){
var self__ = this;
var _39928__$1 = this;
return (new cljs.core.async.t_cljs$core$async39926(self__.ch,self__.cs,meta39927__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39928){
var self__ = this;
var _39928__$1 = this;
return self__.meta39927;
});})(cs))
;

cljs.core.async.t_cljs$core$async39926.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39926.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39926.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39926.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39926.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39926.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39927","meta39927",856206222,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39926";

cljs.core.async.t_cljs$core$async39926.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39926");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39926 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39926(ch__$1,cs__$1,meta39927){
return (new cljs.core.async.t_cljs$core$async39926(ch__$1,cs__$1,meta39927));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39926(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30624__auto___40148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40148,cs,m,dchan,dctr,done){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40148,cs,m,dchan,dctr,done){
return (function (state_40063){
var state_val_40064 = (state_40063[(1)]);
if((state_val_40064 === (7))){
var inst_40059 = (state_40063[(2)]);
var state_40063__$1 = state_40063;
var statearr_40065_40149 = state_40063__$1;
(statearr_40065_40149[(2)] = inst_40059);

(statearr_40065_40149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (20))){
var inst_39962 = (state_40063[(7)]);
var inst_39974 = cljs.core.first.call(null,inst_39962);
var inst_39975 = cljs.core.nth.call(null,inst_39974,(0),null);
var inst_39976 = cljs.core.nth.call(null,inst_39974,(1),null);
var state_40063__$1 = (function (){var statearr_40066 = state_40063;
(statearr_40066[(8)] = inst_39975);

return statearr_40066;
})();
if(cljs.core.truth_(inst_39976)){
var statearr_40067_40150 = state_40063__$1;
(statearr_40067_40150[(1)] = (22));

} else {
var statearr_40068_40151 = state_40063__$1;
(statearr_40068_40151[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (27))){
var inst_40004 = (state_40063[(9)]);
var inst_40006 = (state_40063[(10)]);
var inst_39931 = (state_40063[(11)]);
var inst_40011 = (state_40063[(12)]);
var inst_40011__$1 = cljs.core._nth.call(null,inst_40004,inst_40006);
var inst_40012 = cljs.core.async.put_BANG_.call(null,inst_40011__$1,inst_39931,done);
var state_40063__$1 = (function (){var statearr_40069 = state_40063;
(statearr_40069[(12)] = inst_40011__$1);

return statearr_40069;
})();
if(cljs.core.truth_(inst_40012)){
var statearr_40070_40152 = state_40063__$1;
(statearr_40070_40152[(1)] = (30));

} else {
var statearr_40071_40153 = state_40063__$1;
(statearr_40071_40153[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (1))){
var state_40063__$1 = state_40063;
var statearr_40072_40154 = state_40063__$1;
(statearr_40072_40154[(2)] = null);

(statearr_40072_40154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (24))){
var inst_39962 = (state_40063[(7)]);
var inst_39981 = (state_40063[(2)]);
var inst_39982 = cljs.core.next.call(null,inst_39962);
var inst_39940 = inst_39982;
var inst_39941 = null;
var inst_39942 = (0);
var inst_39943 = (0);
var state_40063__$1 = (function (){var statearr_40073 = state_40063;
(statearr_40073[(13)] = inst_39942);

(statearr_40073[(14)] = inst_39941);

(statearr_40073[(15)] = inst_39940);

(statearr_40073[(16)] = inst_39943);

(statearr_40073[(17)] = inst_39981);

return statearr_40073;
})();
var statearr_40074_40155 = state_40063__$1;
(statearr_40074_40155[(2)] = null);

(statearr_40074_40155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (39))){
var state_40063__$1 = state_40063;
var statearr_40078_40156 = state_40063__$1;
(statearr_40078_40156[(2)] = null);

(statearr_40078_40156[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (4))){
var inst_39931 = (state_40063[(11)]);
var inst_39931__$1 = (state_40063[(2)]);
var inst_39932 = (inst_39931__$1 == null);
var state_40063__$1 = (function (){var statearr_40079 = state_40063;
(statearr_40079[(11)] = inst_39931__$1);

return statearr_40079;
})();
if(cljs.core.truth_(inst_39932)){
var statearr_40080_40157 = state_40063__$1;
(statearr_40080_40157[(1)] = (5));

} else {
var statearr_40081_40158 = state_40063__$1;
(statearr_40081_40158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (15))){
var inst_39942 = (state_40063[(13)]);
var inst_39941 = (state_40063[(14)]);
var inst_39940 = (state_40063[(15)]);
var inst_39943 = (state_40063[(16)]);
var inst_39958 = (state_40063[(2)]);
var inst_39959 = (inst_39943 + (1));
var tmp40075 = inst_39942;
var tmp40076 = inst_39941;
var tmp40077 = inst_39940;
var inst_39940__$1 = tmp40077;
var inst_39941__$1 = tmp40076;
var inst_39942__$1 = tmp40075;
var inst_39943__$1 = inst_39959;
var state_40063__$1 = (function (){var statearr_40082 = state_40063;
(statearr_40082[(13)] = inst_39942__$1);

(statearr_40082[(14)] = inst_39941__$1);

(statearr_40082[(18)] = inst_39958);

(statearr_40082[(15)] = inst_39940__$1);

(statearr_40082[(16)] = inst_39943__$1);

return statearr_40082;
})();
var statearr_40083_40159 = state_40063__$1;
(statearr_40083_40159[(2)] = null);

(statearr_40083_40159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (21))){
var inst_39985 = (state_40063[(2)]);
var state_40063__$1 = state_40063;
var statearr_40087_40160 = state_40063__$1;
(statearr_40087_40160[(2)] = inst_39985);

(statearr_40087_40160[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (31))){
var inst_40011 = (state_40063[(12)]);
var inst_40015 = done.call(null,null);
var inst_40016 = cljs.core.async.untap_STAR_.call(null,m,inst_40011);
var state_40063__$1 = (function (){var statearr_40088 = state_40063;
(statearr_40088[(19)] = inst_40015);

return statearr_40088;
})();
var statearr_40089_40161 = state_40063__$1;
(statearr_40089_40161[(2)] = inst_40016);

(statearr_40089_40161[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (32))){
var inst_40004 = (state_40063[(9)]);
var inst_40003 = (state_40063[(20)]);
var inst_40006 = (state_40063[(10)]);
var inst_40005 = (state_40063[(21)]);
var inst_40018 = (state_40063[(2)]);
var inst_40019 = (inst_40006 + (1));
var tmp40084 = inst_40004;
var tmp40085 = inst_40003;
var tmp40086 = inst_40005;
var inst_40003__$1 = tmp40085;
var inst_40004__$1 = tmp40084;
var inst_40005__$1 = tmp40086;
var inst_40006__$1 = inst_40019;
var state_40063__$1 = (function (){var statearr_40090 = state_40063;
(statearr_40090[(9)] = inst_40004__$1);

(statearr_40090[(20)] = inst_40003__$1);

(statearr_40090[(10)] = inst_40006__$1);

(statearr_40090[(21)] = inst_40005__$1);

(statearr_40090[(22)] = inst_40018);

return statearr_40090;
})();
var statearr_40091_40162 = state_40063__$1;
(statearr_40091_40162[(2)] = null);

(statearr_40091_40162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (40))){
var inst_40031 = (state_40063[(23)]);
var inst_40035 = done.call(null,null);
var inst_40036 = cljs.core.async.untap_STAR_.call(null,m,inst_40031);
var state_40063__$1 = (function (){var statearr_40092 = state_40063;
(statearr_40092[(24)] = inst_40035);

return statearr_40092;
})();
var statearr_40093_40163 = state_40063__$1;
(statearr_40093_40163[(2)] = inst_40036);

(statearr_40093_40163[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (33))){
var inst_40022 = (state_40063[(25)]);
var inst_40024 = cljs.core.chunked_seq_QMARK_.call(null,inst_40022);
var state_40063__$1 = state_40063;
if(inst_40024){
var statearr_40094_40164 = state_40063__$1;
(statearr_40094_40164[(1)] = (36));

} else {
var statearr_40095_40165 = state_40063__$1;
(statearr_40095_40165[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (13))){
var inst_39952 = (state_40063[(26)]);
var inst_39955 = cljs.core.async.close_BANG_.call(null,inst_39952);
var state_40063__$1 = state_40063;
var statearr_40096_40166 = state_40063__$1;
(statearr_40096_40166[(2)] = inst_39955);

(statearr_40096_40166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (22))){
var inst_39975 = (state_40063[(8)]);
var inst_39978 = cljs.core.async.close_BANG_.call(null,inst_39975);
var state_40063__$1 = state_40063;
var statearr_40097_40167 = state_40063__$1;
(statearr_40097_40167[(2)] = inst_39978);

(statearr_40097_40167[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (36))){
var inst_40022 = (state_40063[(25)]);
var inst_40026 = cljs.core.chunk_first.call(null,inst_40022);
var inst_40027 = cljs.core.chunk_rest.call(null,inst_40022);
var inst_40028 = cljs.core.count.call(null,inst_40026);
var inst_40003 = inst_40027;
var inst_40004 = inst_40026;
var inst_40005 = inst_40028;
var inst_40006 = (0);
var state_40063__$1 = (function (){var statearr_40098 = state_40063;
(statearr_40098[(9)] = inst_40004);

(statearr_40098[(20)] = inst_40003);

(statearr_40098[(10)] = inst_40006);

(statearr_40098[(21)] = inst_40005);

return statearr_40098;
})();
var statearr_40099_40168 = state_40063__$1;
(statearr_40099_40168[(2)] = null);

(statearr_40099_40168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (41))){
var inst_40022 = (state_40063[(25)]);
var inst_40038 = (state_40063[(2)]);
var inst_40039 = cljs.core.next.call(null,inst_40022);
var inst_40003 = inst_40039;
var inst_40004 = null;
var inst_40005 = (0);
var inst_40006 = (0);
var state_40063__$1 = (function (){var statearr_40100 = state_40063;
(statearr_40100[(9)] = inst_40004);

(statearr_40100[(20)] = inst_40003);

(statearr_40100[(10)] = inst_40006);

(statearr_40100[(21)] = inst_40005);

(statearr_40100[(27)] = inst_40038);

return statearr_40100;
})();
var statearr_40101_40169 = state_40063__$1;
(statearr_40101_40169[(2)] = null);

(statearr_40101_40169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (43))){
var state_40063__$1 = state_40063;
var statearr_40102_40170 = state_40063__$1;
(statearr_40102_40170[(2)] = null);

(statearr_40102_40170[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (29))){
var inst_40047 = (state_40063[(2)]);
var state_40063__$1 = state_40063;
var statearr_40103_40171 = state_40063__$1;
(statearr_40103_40171[(2)] = inst_40047);

(statearr_40103_40171[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (44))){
var inst_40056 = (state_40063[(2)]);
var state_40063__$1 = (function (){var statearr_40104 = state_40063;
(statearr_40104[(28)] = inst_40056);

return statearr_40104;
})();
var statearr_40105_40172 = state_40063__$1;
(statearr_40105_40172[(2)] = null);

(statearr_40105_40172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (6))){
var inst_39995 = (state_40063[(29)]);
var inst_39994 = cljs.core.deref.call(null,cs);
var inst_39995__$1 = cljs.core.keys.call(null,inst_39994);
var inst_39996 = cljs.core.count.call(null,inst_39995__$1);
var inst_39997 = cljs.core.reset_BANG_.call(null,dctr,inst_39996);
var inst_40002 = cljs.core.seq.call(null,inst_39995__$1);
var inst_40003 = inst_40002;
var inst_40004 = null;
var inst_40005 = (0);
var inst_40006 = (0);
var state_40063__$1 = (function (){var statearr_40106 = state_40063;
(statearr_40106[(9)] = inst_40004);

(statearr_40106[(20)] = inst_40003);

(statearr_40106[(30)] = inst_39997);

(statearr_40106[(29)] = inst_39995__$1);

(statearr_40106[(10)] = inst_40006);

(statearr_40106[(21)] = inst_40005);

return statearr_40106;
})();
var statearr_40107_40173 = state_40063__$1;
(statearr_40107_40173[(2)] = null);

(statearr_40107_40173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (28))){
var inst_40003 = (state_40063[(20)]);
var inst_40022 = (state_40063[(25)]);
var inst_40022__$1 = cljs.core.seq.call(null,inst_40003);
var state_40063__$1 = (function (){var statearr_40108 = state_40063;
(statearr_40108[(25)] = inst_40022__$1);

return statearr_40108;
})();
if(inst_40022__$1){
var statearr_40109_40174 = state_40063__$1;
(statearr_40109_40174[(1)] = (33));

} else {
var statearr_40110_40175 = state_40063__$1;
(statearr_40110_40175[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (25))){
var inst_40006 = (state_40063[(10)]);
var inst_40005 = (state_40063[(21)]);
var inst_40008 = (inst_40006 < inst_40005);
var inst_40009 = inst_40008;
var state_40063__$1 = state_40063;
if(cljs.core.truth_(inst_40009)){
var statearr_40111_40176 = state_40063__$1;
(statearr_40111_40176[(1)] = (27));

} else {
var statearr_40112_40177 = state_40063__$1;
(statearr_40112_40177[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (34))){
var state_40063__$1 = state_40063;
var statearr_40113_40178 = state_40063__$1;
(statearr_40113_40178[(2)] = null);

(statearr_40113_40178[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (17))){
var state_40063__$1 = state_40063;
var statearr_40114_40179 = state_40063__$1;
(statearr_40114_40179[(2)] = null);

(statearr_40114_40179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (3))){
var inst_40061 = (state_40063[(2)]);
var state_40063__$1 = state_40063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40063__$1,inst_40061);
} else {
if((state_val_40064 === (12))){
var inst_39990 = (state_40063[(2)]);
var state_40063__$1 = state_40063;
var statearr_40115_40180 = state_40063__$1;
(statearr_40115_40180[(2)] = inst_39990);

(statearr_40115_40180[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (2))){
var state_40063__$1 = state_40063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40063__$1,(4),ch);
} else {
if((state_val_40064 === (23))){
var state_40063__$1 = state_40063;
var statearr_40116_40181 = state_40063__$1;
(statearr_40116_40181[(2)] = null);

(statearr_40116_40181[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (35))){
var inst_40045 = (state_40063[(2)]);
var state_40063__$1 = state_40063;
var statearr_40117_40182 = state_40063__$1;
(statearr_40117_40182[(2)] = inst_40045);

(statearr_40117_40182[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (19))){
var inst_39962 = (state_40063[(7)]);
var inst_39966 = cljs.core.chunk_first.call(null,inst_39962);
var inst_39967 = cljs.core.chunk_rest.call(null,inst_39962);
var inst_39968 = cljs.core.count.call(null,inst_39966);
var inst_39940 = inst_39967;
var inst_39941 = inst_39966;
var inst_39942 = inst_39968;
var inst_39943 = (0);
var state_40063__$1 = (function (){var statearr_40118 = state_40063;
(statearr_40118[(13)] = inst_39942);

(statearr_40118[(14)] = inst_39941);

(statearr_40118[(15)] = inst_39940);

(statearr_40118[(16)] = inst_39943);

return statearr_40118;
})();
var statearr_40119_40183 = state_40063__$1;
(statearr_40119_40183[(2)] = null);

(statearr_40119_40183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (11))){
var inst_39962 = (state_40063[(7)]);
var inst_39940 = (state_40063[(15)]);
var inst_39962__$1 = cljs.core.seq.call(null,inst_39940);
var state_40063__$1 = (function (){var statearr_40120 = state_40063;
(statearr_40120[(7)] = inst_39962__$1);

return statearr_40120;
})();
if(inst_39962__$1){
var statearr_40121_40184 = state_40063__$1;
(statearr_40121_40184[(1)] = (16));

} else {
var statearr_40122_40185 = state_40063__$1;
(statearr_40122_40185[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (9))){
var inst_39992 = (state_40063[(2)]);
var state_40063__$1 = state_40063;
var statearr_40123_40186 = state_40063__$1;
(statearr_40123_40186[(2)] = inst_39992);

(statearr_40123_40186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (5))){
var inst_39938 = cljs.core.deref.call(null,cs);
var inst_39939 = cljs.core.seq.call(null,inst_39938);
var inst_39940 = inst_39939;
var inst_39941 = null;
var inst_39942 = (0);
var inst_39943 = (0);
var state_40063__$1 = (function (){var statearr_40124 = state_40063;
(statearr_40124[(13)] = inst_39942);

(statearr_40124[(14)] = inst_39941);

(statearr_40124[(15)] = inst_39940);

(statearr_40124[(16)] = inst_39943);

return statearr_40124;
})();
var statearr_40125_40187 = state_40063__$1;
(statearr_40125_40187[(2)] = null);

(statearr_40125_40187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (14))){
var state_40063__$1 = state_40063;
var statearr_40126_40188 = state_40063__$1;
(statearr_40126_40188[(2)] = null);

(statearr_40126_40188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (45))){
var inst_40053 = (state_40063[(2)]);
var state_40063__$1 = state_40063;
var statearr_40127_40189 = state_40063__$1;
(statearr_40127_40189[(2)] = inst_40053);

(statearr_40127_40189[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (26))){
var inst_39995 = (state_40063[(29)]);
var inst_40049 = (state_40063[(2)]);
var inst_40050 = cljs.core.seq.call(null,inst_39995);
var state_40063__$1 = (function (){var statearr_40128 = state_40063;
(statearr_40128[(31)] = inst_40049);

return statearr_40128;
})();
if(inst_40050){
var statearr_40129_40190 = state_40063__$1;
(statearr_40129_40190[(1)] = (42));

} else {
var statearr_40130_40191 = state_40063__$1;
(statearr_40130_40191[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (16))){
var inst_39962 = (state_40063[(7)]);
var inst_39964 = cljs.core.chunked_seq_QMARK_.call(null,inst_39962);
var state_40063__$1 = state_40063;
if(inst_39964){
var statearr_40131_40192 = state_40063__$1;
(statearr_40131_40192[(1)] = (19));

} else {
var statearr_40132_40193 = state_40063__$1;
(statearr_40132_40193[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (38))){
var inst_40042 = (state_40063[(2)]);
var state_40063__$1 = state_40063;
var statearr_40133_40194 = state_40063__$1;
(statearr_40133_40194[(2)] = inst_40042);

(statearr_40133_40194[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (30))){
var state_40063__$1 = state_40063;
var statearr_40134_40195 = state_40063__$1;
(statearr_40134_40195[(2)] = null);

(statearr_40134_40195[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (10))){
var inst_39941 = (state_40063[(14)]);
var inst_39943 = (state_40063[(16)]);
var inst_39951 = cljs.core._nth.call(null,inst_39941,inst_39943);
var inst_39952 = cljs.core.nth.call(null,inst_39951,(0),null);
var inst_39953 = cljs.core.nth.call(null,inst_39951,(1),null);
var state_40063__$1 = (function (){var statearr_40135 = state_40063;
(statearr_40135[(26)] = inst_39952);

return statearr_40135;
})();
if(cljs.core.truth_(inst_39953)){
var statearr_40136_40196 = state_40063__$1;
(statearr_40136_40196[(1)] = (13));

} else {
var statearr_40137_40197 = state_40063__$1;
(statearr_40137_40197[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (18))){
var inst_39988 = (state_40063[(2)]);
var state_40063__$1 = state_40063;
var statearr_40138_40198 = state_40063__$1;
(statearr_40138_40198[(2)] = inst_39988);

(statearr_40138_40198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (42))){
var state_40063__$1 = state_40063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40063__$1,(45),dchan);
} else {
if((state_val_40064 === (37))){
var inst_40031 = (state_40063[(23)]);
var inst_39931 = (state_40063[(11)]);
var inst_40022 = (state_40063[(25)]);
var inst_40031__$1 = cljs.core.first.call(null,inst_40022);
var inst_40032 = cljs.core.async.put_BANG_.call(null,inst_40031__$1,inst_39931,done);
var state_40063__$1 = (function (){var statearr_40139 = state_40063;
(statearr_40139[(23)] = inst_40031__$1);

return statearr_40139;
})();
if(cljs.core.truth_(inst_40032)){
var statearr_40140_40199 = state_40063__$1;
(statearr_40140_40199[(1)] = (39));

} else {
var statearr_40141_40200 = state_40063__$1;
(statearr_40141_40200[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40064 === (8))){
var inst_39942 = (state_40063[(13)]);
var inst_39943 = (state_40063[(16)]);
var inst_39945 = (inst_39943 < inst_39942);
var inst_39946 = inst_39945;
var state_40063__$1 = state_40063;
if(cljs.core.truth_(inst_39946)){
var statearr_40142_40201 = state_40063__$1;
(statearr_40142_40201[(1)] = (10));

} else {
var statearr_40143_40202 = state_40063__$1;
(statearr_40143_40202[(1)] = (11));

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
});})(c__30624__auto___40148,cs,m,dchan,dctr,done))
;
return ((function (switch__30536__auto__,c__30624__auto___40148,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30537__auto__ = null;
var cljs$core$async$mult_$_state_machine__30537__auto____0 = (function (){
var statearr_40144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40144[(0)] = cljs$core$async$mult_$_state_machine__30537__auto__);

(statearr_40144[(1)] = (1));

return statearr_40144;
});
var cljs$core$async$mult_$_state_machine__30537__auto____1 = (function (state_40063){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40145){if((e40145 instanceof Object)){
var ex__30540__auto__ = e40145;
var statearr_40146_40203 = state_40063;
(statearr_40146_40203[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40204 = state_40063;
state_40063 = G__40204;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30537__auto__ = function(state_40063){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30537__auto____1.call(this,state_40063);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30537__auto____0;
cljs$core$async$mult_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30537__auto____1;
return cljs$core$async$mult_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40148,cs,m,dchan,dctr,done))
})();
var state__30626__auto__ = (function (){var statearr_40147 = f__30625__auto__.call(null);
(statearr_40147[(6)] = c__30624__auto___40148);

return statearr_40147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40148,cs,m,dchan,dctr,done))
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
var G__40206 = arguments.length;
switch (G__40206) {
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
var len__28364__auto___40218 = arguments.length;
var i__28365__auto___40219 = (0);
while(true){
if((i__28365__auto___40219 < len__28364__auto___40218)){
args__28371__auto__.push((arguments[i__28365__auto___40219]));

var G__40220 = (i__28365__auto___40219 + (1));
i__28365__auto___40219 = G__40220;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40212){
var map__40213 = p__40212;
var map__40213__$1 = ((((!((map__40213 == null)))?((((map__40213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40213):map__40213);
var opts = map__40213__$1;
var statearr_40215_40221 = state;
(statearr_40215_40221[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__40213,map__40213__$1,opts){
return (function (val){
var statearr_40216_40222 = state;
(statearr_40216_40222[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40213,map__40213__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_40217_40223 = state;
(statearr_40217_40223[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40208){
var G__40209 = cljs.core.first.call(null,seq40208);
var seq40208__$1 = cljs.core.next.call(null,seq40208);
var G__40210 = cljs.core.first.call(null,seq40208__$1);
var seq40208__$2 = cljs.core.next.call(null,seq40208__$1);
var G__40211 = cljs.core.first.call(null,seq40208__$2);
var seq40208__$3 = cljs.core.next.call(null,seq40208__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40209,G__40210,G__40211,seq40208__$3);
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
if(typeof cljs.core.async.t_cljs$core$async40224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40224 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40225){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40225 = meta40225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40226,meta40225__$1){
var self__ = this;
var _40226__$1 = this;
return (new cljs.core.async.t_cljs$core$async40224(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40225__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40224.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40226){
var self__ = this;
var _40226__$1 = this;
return self__.meta40225;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40224.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40224.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40224.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40224.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40224.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40224.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40224.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40224.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async40224.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40225","meta40225",-1777860278,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40224";

cljs.core.async.t_cljs$core$async40224.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40224");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40224 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40224(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40225){
return (new cljs.core.async.t_cljs$core$async40224(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40225));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40224(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30624__auto___40388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40328){
var state_val_40329 = (state_40328[(1)]);
if((state_val_40329 === (7))){
var inst_40243 = (state_40328[(2)]);
var state_40328__$1 = state_40328;
var statearr_40330_40389 = state_40328__$1;
(statearr_40330_40389[(2)] = inst_40243);

(statearr_40330_40389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (20))){
var inst_40255 = (state_40328[(7)]);
var state_40328__$1 = state_40328;
var statearr_40331_40390 = state_40328__$1;
(statearr_40331_40390[(2)] = inst_40255);

(statearr_40331_40390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (27))){
var state_40328__$1 = state_40328;
var statearr_40332_40391 = state_40328__$1;
(statearr_40332_40391[(2)] = null);

(statearr_40332_40391[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (1))){
var inst_40230 = (state_40328[(8)]);
var inst_40230__$1 = calc_state.call(null);
var inst_40232 = (inst_40230__$1 == null);
var inst_40233 = cljs.core.not.call(null,inst_40232);
var state_40328__$1 = (function (){var statearr_40333 = state_40328;
(statearr_40333[(8)] = inst_40230__$1);

return statearr_40333;
})();
if(inst_40233){
var statearr_40334_40392 = state_40328__$1;
(statearr_40334_40392[(1)] = (2));

} else {
var statearr_40335_40393 = state_40328__$1;
(statearr_40335_40393[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (24))){
var inst_40288 = (state_40328[(9)]);
var inst_40279 = (state_40328[(10)]);
var inst_40302 = (state_40328[(11)]);
var inst_40302__$1 = inst_40279.call(null,inst_40288);
var state_40328__$1 = (function (){var statearr_40336 = state_40328;
(statearr_40336[(11)] = inst_40302__$1);

return statearr_40336;
})();
if(cljs.core.truth_(inst_40302__$1)){
var statearr_40337_40394 = state_40328__$1;
(statearr_40337_40394[(1)] = (29));

} else {
var statearr_40338_40395 = state_40328__$1;
(statearr_40338_40395[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (4))){
var inst_40246 = (state_40328[(2)]);
var state_40328__$1 = state_40328;
if(cljs.core.truth_(inst_40246)){
var statearr_40339_40396 = state_40328__$1;
(statearr_40339_40396[(1)] = (8));

} else {
var statearr_40340_40397 = state_40328__$1;
(statearr_40340_40397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (15))){
var inst_40273 = (state_40328[(2)]);
var state_40328__$1 = state_40328;
if(cljs.core.truth_(inst_40273)){
var statearr_40341_40398 = state_40328__$1;
(statearr_40341_40398[(1)] = (19));

} else {
var statearr_40342_40399 = state_40328__$1;
(statearr_40342_40399[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (21))){
var inst_40278 = (state_40328[(12)]);
var inst_40278__$1 = (state_40328[(2)]);
var inst_40279 = cljs.core.get.call(null,inst_40278__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40280 = cljs.core.get.call(null,inst_40278__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40281 = cljs.core.get.call(null,inst_40278__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40328__$1 = (function (){var statearr_40343 = state_40328;
(statearr_40343[(13)] = inst_40280);

(statearr_40343[(10)] = inst_40279);

(statearr_40343[(12)] = inst_40278__$1);

return statearr_40343;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40328__$1,(22),inst_40281);
} else {
if((state_val_40329 === (31))){
var inst_40310 = (state_40328[(2)]);
var state_40328__$1 = state_40328;
if(cljs.core.truth_(inst_40310)){
var statearr_40344_40400 = state_40328__$1;
(statearr_40344_40400[(1)] = (32));

} else {
var statearr_40345_40401 = state_40328__$1;
(statearr_40345_40401[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (32))){
var inst_40287 = (state_40328[(14)]);
var state_40328__$1 = state_40328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40328__$1,(35),out,inst_40287);
} else {
if((state_val_40329 === (33))){
var inst_40278 = (state_40328[(12)]);
var inst_40255 = inst_40278;
var state_40328__$1 = (function (){var statearr_40346 = state_40328;
(statearr_40346[(7)] = inst_40255);

return statearr_40346;
})();
var statearr_40347_40402 = state_40328__$1;
(statearr_40347_40402[(2)] = null);

(statearr_40347_40402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (13))){
var inst_40255 = (state_40328[(7)]);
var inst_40262 = inst_40255.cljs$lang$protocol_mask$partition0$;
var inst_40263 = (inst_40262 & (64));
var inst_40264 = inst_40255.cljs$core$ISeq$;
var inst_40265 = (cljs.core.PROTOCOL_SENTINEL === inst_40264);
var inst_40266 = (inst_40263) || (inst_40265);
var state_40328__$1 = state_40328;
if(cljs.core.truth_(inst_40266)){
var statearr_40348_40403 = state_40328__$1;
(statearr_40348_40403[(1)] = (16));

} else {
var statearr_40349_40404 = state_40328__$1;
(statearr_40349_40404[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (22))){
var inst_40287 = (state_40328[(14)]);
var inst_40288 = (state_40328[(9)]);
var inst_40286 = (state_40328[(2)]);
var inst_40287__$1 = cljs.core.nth.call(null,inst_40286,(0),null);
var inst_40288__$1 = cljs.core.nth.call(null,inst_40286,(1),null);
var inst_40289 = (inst_40287__$1 == null);
var inst_40290 = cljs.core._EQ_.call(null,inst_40288__$1,change);
var inst_40291 = (inst_40289) || (inst_40290);
var state_40328__$1 = (function (){var statearr_40350 = state_40328;
(statearr_40350[(14)] = inst_40287__$1);

(statearr_40350[(9)] = inst_40288__$1);

return statearr_40350;
})();
if(cljs.core.truth_(inst_40291)){
var statearr_40351_40405 = state_40328__$1;
(statearr_40351_40405[(1)] = (23));

} else {
var statearr_40352_40406 = state_40328__$1;
(statearr_40352_40406[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (36))){
var inst_40278 = (state_40328[(12)]);
var inst_40255 = inst_40278;
var state_40328__$1 = (function (){var statearr_40353 = state_40328;
(statearr_40353[(7)] = inst_40255);

return statearr_40353;
})();
var statearr_40354_40407 = state_40328__$1;
(statearr_40354_40407[(2)] = null);

(statearr_40354_40407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (29))){
var inst_40302 = (state_40328[(11)]);
var state_40328__$1 = state_40328;
var statearr_40355_40408 = state_40328__$1;
(statearr_40355_40408[(2)] = inst_40302);

(statearr_40355_40408[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (6))){
var state_40328__$1 = state_40328;
var statearr_40356_40409 = state_40328__$1;
(statearr_40356_40409[(2)] = false);

(statearr_40356_40409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (28))){
var inst_40298 = (state_40328[(2)]);
var inst_40299 = calc_state.call(null);
var inst_40255 = inst_40299;
var state_40328__$1 = (function (){var statearr_40357 = state_40328;
(statearr_40357[(7)] = inst_40255);

(statearr_40357[(15)] = inst_40298);

return statearr_40357;
})();
var statearr_40358_40410 = state_40328__$1;
(statearr_40358_40410[(2)] = null);

(statearr_40358_40410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (25))){
var inst_40324 = (state_40328[(2)]);
var state_40328__$1 = state_40328;
var statearr_40359_40411 = state_40328__$1;
(statearr_40359_40411[(2)] = inst_40324);

(statearr_40359_40411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (34))){
var inst_40322 = (state_40328[(2)]);
var state_40328__$1 = state_40328;
var statearr_40360_40412 = state_40328__$1;
(statearr_40360_40412[(2)] = inst_40322);

(statearr_40360_40412[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (17))){
var state_40328__$1 = state_40328;
var statearr_40361_40413 = state_40328__$1;
(statearr_40361_40413[(2)] = false);

(statearr_40361_40413[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (3))){
var state_40328__$1 = state_40328;
var statearr_40362_40414 = state_40328__$1;
(statearr_40362_40414[(2)] = false);

(statearr_40362_40414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (12))){
var inst_40326 = (state_40328[(2)]);
var state_40328__$1 = state_40328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40328__$1,inst_40326);
} else {
if((state_val_40329 === (2))){
var inst_40230 = (state_40328[(8)]);
var inst_40235 = inst_40230.cljs$lang$protocol_mask$partition0$;
var inst_40236 = (inst_40235 & (64));
var inst_40237 = inst_40230.cljs$core$ISeq$;
var inst_40238 = (cljs.core.PROTOCOL_SENTINEL === inst_40237);
var inst_40239 = (inst_40236) || (inst_40238);
var state_40328__$1 = state_40328;
if(cljs.core.truth_(inst_40239)){
var statearr_40363_40415 = state_40328__$1;
(statearr_40363_40415[(1)] = (5));

} else {
var statearr_40364_40416 = state_40328__$1;
(statearr_40364_40416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (23))){
var inst_40287 = (state_40328[(14)]);
var inst_40293 = (inst_40287 == null);
var state_40328__$1 = state_40328;
if(cljs.core.truth_(inst_40293)){
var statearr_40365_40417 = state_40328__$1;
(statearr_40365_40417[(1)] = (26));

} else {
var statearr_40366_40418 = state_40328__$1;
(statearr_40366_40418[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (35))){
var inst_40313 = (state_40328[(2)]);
var state_40328__$1 = state_40328;
if(cljs.core.truth_(inst_40313)){
var statearr_40367_40419 = state_40328__$1;
(statearr_40367_40419[(1)] = (36));

} else {
var statearr_40368_40420 = state_40328__$1;
(statearr_40368_40420[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (19))){
var inst_40255 = (state_40328[(7)]);
var inst_40275 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40255);
var state_40328__$1 = state_40328;
var statearr_40369_40421 = state_40328__$1;
(statearr_40369_40421[(2)] = inst_40275);

(statearr_40369_40421[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (11))){
var inst_40255 = (state_40328[(7)]);
var inst_40259 = (inst_40255 == null);
var inst_40260 = cljs.core.not.call(null,inst_40259);
var state_40328__$1 = state_40328;
if(inst_40260){
var statearr_40370_40422 = state_40328__$1;
(statearr_40370_40422[(1)] = (13));

} else {
var statearr_40371_40423 = state_40328__$1;
(statearr_40371_40423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (9))){
var inst_40230 = (state_40328[(8)]);
var state_40328__$1 = state_40328;
var statearr_40372_40424 = state_40328__$1;
(statearr_40372_40424[(2)] = inst_40230);

(statearr_40372_40424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (5))){
var state_40328__$1 = state_40328;
var statearr_40373_40425 = state_40328__$1;
(statearr_40373_40425[(2)] = true);

(statearr_40373_40425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (14))){
var state_40328__$1 = state_40328;
var statearr_40374_40426 = state_40328__$1;
(statearr_40374_40426[(2)] = false);

(statearr_40374_40426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (26))){
var inst_40288 = (state_40328[(9)]);
var inst_40295 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40288);
var state_40328__$1 = state_40328;
var statearr_40375_40427 = state_40328__$1;
(statearr_40375_40427[(2)] = inst_40295);

(statearr_40375_40427[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (16))){
var state_40328__$1 = state_40328;
var statearr_40376_40428 = state_40328__$1;
(statearr_40376_40428[(2)] = true);

(statearr_40376_40428[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (38))){
var inst_40318 = (state_40328[(2)]);
var state_40328__$1 = state_40328;
var statearr_40377_40429 = state_40328__$1;
(statearr_40377_40429[(2)] = inst_40318);

(statearr_40377_40429[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (30))){
var inst_40280 = (state_40328[(13)]);
var inst_40288 = (state_40328[(9)]);
var inst_40279 = (state_40328[(10)]);
var inst_40305 = cljs.core.empty_QMARK_.call(null,inst_40279);
var inst_40306 = inst_40280.call(null,inst_40288);
var inst_40307 = cljs.core.not.call(null,inst_40306);
var inst_40308 = (inst_40305) && (inst_40307);
var state_40328__$1 = state_40328;
var statearr_40378_40430 = state_40328__$1;
(statearr_40378_40430[(2)] = inst_40308);

(statearr_40378_40430[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (10))){
var inst_40230 = (state_40328[(8)]);
var inst_40251 = (state_40328[(2)]);
var inst_40252 = cljs.core.get.call(null,inst_40251,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40253 = cljs.core.get.call(null,inst_40251,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40254 = cljs.core.get.call(null,inst_40251,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40255 = inst_40230;
var state_40328__$1 = (function (){var statearr_40379 = state_40328;
(statearr_40379[(16)] = inst_40254);

(statearr_40379[(17)] = inst_40253);

(statearr_40379[(7)] = inst_40255);

(statearr_40379[(18)] = inst_40252);

return statearr_40379;
})();
var statearr_40380_40431 = state_40328__$1;
(statearr_40380_40431[(2)] = null);

(statearr_40380_40431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (18))){
var inst_40270 = (state_40328[(2)]);
var state_40328__$1 = state_40328;
var statearr_40381_40432 = state_40328__$1;
(statearr_40381_40432[(2)] = inst_40270);

(statearr_40381_40432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (37))){
var state_40328__$1 = state_40328;
var statearr_40382_40433 = state_40328__$1;
(statearr_40382_40433[(2)] = null);

(statearr_40382_40433[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40329 === (8))){
var inst_40230 = (state_40328[(8)]);
var inst_40248 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40230);
var state_40328__$1 = state_40328;
var statearr_40383_40434 = state_40328__$1;
(statearr_40383_40434[(2)] = inst_40248);

(statearr_40383_40434[(1)] = (10));


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
});})(c__30624__auto___40388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30536__auto__,c__30624__auto___40388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30537__auto__ = null;
var cljs$core$async$mix_$_state_machine__30537__auto____0 = (function (){
var statearr_40384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40384[(0)] = cljs$core$async$mix_$_state_machine__30537__auto__);

(statearr_40384[(1)] = (1));

return statearr_40384;
});
var cljs$core$async$mix_$_state_machine__30537__auto____1 = (function (state_40328){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40385){if((e40385 instanceof Object)){
var ex__30540__auto__ = e40385;
var statearr_40386_40435 = state_40328;
(statearr_40386_40435[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40436 = state_40328;
state_40328 = G__40436;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30537__auto__ = function(state_40328){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30537__auto____1.call(this,state_40328);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30537__auto____0;
cljs$core$async$mix_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30537__auto____1;
return cljs$core$async$mix_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30626__auto__ = (function (){var statearr_40387 = f__30625__auto__.call(null);
(statearr_40387[(6)] = c__30624__auto___40388);

return statearr_40387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40388,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__40438 = arguments.length;
switch (G__40438) {
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
var G__40442 = arguments.length;
switch (G__40442) {
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
return (function (p1__40440_SHARP_){
if(cljs.core.truth_(p1__40440_SHARP_.call(null,topic))){
return p1__40440_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40440_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40443 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40444){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40444 = meta40444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40445,meta40444__$1){
var self__ = this;
var _40445__$1 = this;
return (new cljs.core.async.t_cljs$core$async40443(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40444__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40443.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40445){
var self__ = this;
var _40445__$1 = this;
return self__.meta40444;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40443.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40443.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40443.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40443.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40443.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async40443.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40443.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40443.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40444","meta40444",2133118457,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40443";

cljs.core.async.t_cljs$core$async40443.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40443");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40443 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40443(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40444){
return (new cljs.core.async.t_cljs$core$async40443(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40444));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40443(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30624__auto___40563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40563,mults,ensure_mult,p){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40563,mults,ensure_mult,p){
return (function (state_40517){
var state_val_40518 = (state_40517[(1)]);
if((state_val_40518 === (7))){
var inst_40513 = (state_40517[(2)]);
var state_40517__$1 = state_40517;
var statearr_40519_40564 = state_40517__$1;
(statearr_40519_40564[(2)] = inst_40513);

(statearr_40519_40564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (20))){
var state_40517__$1 = state_40517;
var statearr_40520_40565 = state_40517__$1;
(statearr_40520_40565[(2)] = null);

(statearr_40520_40565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (1))){
var state_40517__$1 = state_40517;
var statearr_40521_40566 = state_40517__$1;
(statearr_40521_40566[(2)] = null);

(statearr_40521_40566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (24))){
var inst_40496 = (state_40517[(7)]);
var inst_40505 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40496);
var state_40517__$1 = state_40517;
var statearr_40522_40567 = state_40517__$1;
(statearr_40522_40567[(2)] = inst_40505);

(statearr_40522_40567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (4))){
var inst_40448 = (state_40517[(8)]);
var inst_40448__$1 = (state_40517[(2)]);
var inst_40449 = (inst_40448__$1 == null);
var state_40517__$1 = (function (){var statearr_40523 = state_40517;
(statearr_40523[(8)] = inst_40448__$1);

return statearr_40523;
})();
if(cljs.core.truth_(inst_40449)){
var statearr_40524_40568 = state_40517__$1;
(statearr_40524_40568[(1)] = (5));

} else {
var statearr_40525_40569 = state_40517__$1;
(statearr_40525_40569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (15))){
var inst_40490 = (state_40517[(2)]);
var state_40517__$1 = state_40517;
var statearr_40526_40570 = state_40517__$1;
(statearr_40526_40570[(2)] = inst_40490);

(statearr_40526_40570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (21))){
var inst_40510 = (state_40517[(2)]);
var state_40517__$1 = (function (){var statearr_40527 = state_40517;
(statearr_40527[(9)] = inst_40510);

return statearr_40527;
})();
var statearr_40528_40571 = state_40517__$1;
(statearr_40528_40571[(2)] = null);

(statearr_40528_40571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (13))){
var inst_40472 = (state_40517[(10)]);
var inst_40474 = cljs.core.chunked_seq_QMARK_.call(null,inst_40472);
var state_40517__$1 = state_40517;
if(inst_40474){
var statearr_40529_40572 = state_40517__$1;
(statearr_40529_40572[(1)] = (16));

} else {
var statearr_40530_40573 = state_40517__$1;
(statearr_40530_40573[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (22))){
var inst_40502 = (state_40517[(2)]);
var state_40517__$1 = state_40517;
if(cljs.core.truth_(inst_40502)){
var statearr_40531_40574 = state_40517__$1;
(statearr_40531_40574[(1)] = (23));

} else {
var statearr_40532_40575 = state_40517__$1;
(statearr_40532_40575[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (6))){
var inst_40448 = (state_40517[(8)]);
var inst_40496 = (state_40517[(7)]);
var inst_40498 = (state_40517[(11)]);
var inst_40496__$1 = topic_fn.call(null,inst_40448);
var inst_40497 = cljs.core.deref.call(null,mults);
var inst_40498__$1 = cljs.core.get.call(null,inst_40497,inst_40496__$1);
var state_40517__$1 = (function (){var statearr_40533 = state_40517;
(statearr_40533[(7)] = inst_40496__$1);

(statearr_40533[(11)] = inst_40498__$1);

return statearr_40533;
})();
if(cljs.core.truth_(inst_40498__$1)){
var statearr_40534_40576 = state_40517__$1;
(statearr_40534_40576[(1)] = (19));

} else {
var statearr_40535_40577 = state_40517__$1;
(statearr_40535_40577[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (25))){
var inst_40507 = (state_40517[(2)]);
var state_40517__$1 = state_40517;
var statearr_40536_40578 = state_40517__$1;
(statearr_40536_40578[(2)] = inst_40507);

(statearr_40536_40578[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (17))){
var inst_40472 = (state_40517[(10)]);
var inst_40481 = cljs.core.first.call(null,inst_40472);
var inst_40482 = cljs.core.async.muxch_STAR_.call(null,inst_40481);
var inst_40483 = cljs.core.async.close_BANG_.call(null,inst_40482);
var inst_40484 = cljs.core.next.call(null,inst_40472);
var inst_40458 = inst_40484;
var inst_40459 = null;
var inst_40460 = (0);
var inst_40461 = (0);
var state_40517__$1 = (function (){var statearr_40537 = state_40517;
(statearr_40537[(12)] = inst_40461);

(statearr_40537[(13)] = inst_40458);

(statearr_40537[(14)] = inst_40459);

(statearr_40537[(15)] = inst_40483);

(statearr_40537[(16)] = inst_40460);

return statearr_40537;
})();
var statearr_40538_40579 = state_40517__$1;
(statearr_40538_40579[(2)] = null);

(statearr_40538_40579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (3))){
var inst_40515 = (state_40517[(2)]);
var state_40517__$1 = state_40517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40517__$1,inst_40515);
} else {
if((state_val_40518 === (12))){
var inst_40492 = (state_40517[(2)]);
var state_40517__$1 = state_40517;
var statearr_40539_40580 = state_40517__$1;
(statearr_40539_40580[(2)] = inst_40492);

(statearr_40539_40580[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (2))){
var state_40517__$1 = state_40517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40517__$1,(4),ch);
} else {
if((state_val_40518 === (23))){
var state_40517__$1 = state_40517;
var statearr_40540_40581 = state_40517__$1;
(statearr_40540_40581[(2)] = null);

(statearr_40540_40581[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (19))){
var inst_40448 = (state_40517[(8)]);
var inst_40498 = (state_40517[(11)]);
var inst_40500 = cljs.core.async.muxch_STAR_.call(null,inst_40498);
var state_40517__$1 = state_40517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40517__$1,(22),inst_40500,inst_40448);
} else {
if((state_val_40518 === (11))){
var inst_40458 = (state_40517[(13)]);
var inst_40472 = (state_40517[(10)]);
var inst_40472__$1 = cljs.core.seq.call(null,inst_40458);
var state_40517__$1 = (function (){var statearr_40541 = state_40517;
(statearr_40541[(10)] = inst_40472__$1);

return statearr_40541;
})();
if(inst_40472__$1){
var statearr_40542_40582 = state_40517__$1;
(statearr_40542_40582[(1)] = (13));

} else {
var statearr_40543_40583 = state_40517__$1;
(statearr_40543_40583[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (9))){
var inst_40494 = (state_40517[(2)]);
var state_40517__$1 = state_40517;
var statearr_40544_40584 = state_40517__$1;
(statearr_40544_40584[(2)] = inst_40494);

(statearr_40544_40584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (5))){
var inst_40455 = cljs.core.deref.call(null,mults);
var inst_40456 = cljs.core.vals.call(null,inst_40455);
var inst_40457 = cljs.core.seq.call(null,inst_40456);
var inst_40458 = inst_40457;
var inst_40459 = null;
var inst_40460 = (0);
var inst_40461 = (0);
var state_40517__$1 = (function (){var statearr_40545 = state_40517;
(statearr_40545[(12)] = inst_40461);

(statearr_40545[(13)] = inst_40458);

(statearr_40545[(14)] = inst_40459);

(statearr_40545[(16)] = inst_40460);

return statearr_40545;
})();
var statearr_40546_40585 = state_40517__$1;
(statearr_40546_40585[(2)] = null);

(statearr_40546_40585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (14))){
var state_40517__$1 = state_40517;
var statearr_40550_40586 = state_40517__$1;
(statearr_40550_40586[(2)] = null);

(statearr_40550_40586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (16))){
var inst_40472 = (state_40517[(10)]);
var inst_40476 = cljs.core.chunk_first.call(null,inst_40472);
var inst_40477 = cljs.core.chunk_rest.call(null,inst_40472);
var inst_40478 = cljs.core.count.call(null,inst_40476);
var inst_40458 = inst_40477;
var inst_40459 = inst_40476;
var inst_40460 = inst_40478;
var inst_40461 = (0);
var state_40517__$1 = (function (){var statearr_40551 = state_40517;
(statearr_40551[(12)] = inst_40461);

(statearr_40551[(13)] = inst_40458);

(statearr_40551[(14)] = inst_40459);

(statearr_40551[(16)] = inst_40460);

return statearr_40551;
})();
var statearr_40552_40587 = state_40517__$1;
(statearr_40552_40587[(2)] = null);

(statearr_40552_40587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (10))){
var inst_40461 = (state_40517[(12)]);
var inst_40458 = (state_40517[(13)]);
var inst_40459 = (state_40517[(14)]);
var inst_40460 = (state_40517[(16)]);
var inst_40466 = cljs.core._nth.call(null,inst_40459,inst_40461);
var inst_40467 = cljs.core.async.muxch_STAR_.call(null,inst_40466);
var inst_40468 = cljs.core.async.close_BANG_.call(null,inst_40467);
var inst_40469 = (inst_40461 + (1));
var tmp40547 = inst_40458;
var tmp40548 = inst_40459;
var tmp40549 = inst_40460;
var inst_40458__$1 = tmp40547;
var inst_40459__$1 = tmp40548;
var inst_40460__$1 = tmp40549;
var inst_40461__$1 = inst_40469;
var state_40517__$1 = (function (){var statearr_40553 = state_40517;
(statearr_40553[(12)] = inst_40461__$1);

(statearr_40553[(13)] = inst_40458__$1);

(statearr_40553[(14)] = inst_40459__$1);

(statearr_40553[(16)] = inst_40460__$1);

(statearr_40553[(17)] = inst_40468);

return statearr_40553;
})();
var statearr_40554_40588 = state_40517__$1;
(statearr_40554_40588[(2)] = null);

(statearr_40554_40588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (18))){
var inst_40487 = (state_40517[(2)]);
var state_40517__$1 = state_40517;
var statearr_40555_40589 = state_40517__$1;
(statearr_40555_40589[(2)] = inst_40487);

(statearr_40555_40589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (8))){
var inst_40461 = (state_40517[(12)]);
var inst_40460 = (state_40517[(16)]);
var inst_40463 = (inst_40461 < inst_40460);
var inst_40464 = inst_40463;
var state_40517__$1 = state_40517;
if(cljs.core.truth_(inst_40464)){
var statearr_40556_40590 = state_40517__$1;
(statearr_40556_40590[(1)] = (10));

} else {
var statearr_40557_40591 = state_40517__$1;
(statearr_40557_40591[(1)] = (11));

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
});})(c__30624__auto___40563,mults,ensure_mult,p))
;
return ((function (switch__30536__auto__,c__30624__auto___40563,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40558[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40558[(1)] = (1));

return statearr_40558;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40517){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40559){if((e40559 instanceof Object)){
var ex__30540__auto__ = e40559;
var statearr_40560_40592 = state_40517;
(statearr_40560_40592[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40593 = state_40517;
state_40517 = G__40593;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40517);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40563,mults,ensure_mult,p))
})();
var state__30626__auto__ = (function (){var statearr_40561 = f__30625__auto__.call(null);
(statearr_40561[(6)] = c__30624__auto___40563);

return statearr_40561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40563,mults,ensure_mult,p))
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
var G__40595 = arguments.length;
switch (G__40595) {
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
var G__40598 = arguments.length;
switch (G__40598) {
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
var G__40601 = arguments.length;
switch (G__40601) {
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
var c__30624__auto___40668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40668,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40668,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40640){
var state_val_40641 = (state_40640[(1)]);
if((state_val_40641 === (7))){
var state_40640__$1 = state_40640;
var statearr_40642_40669 = state_40640__$1;
(statearr_40642_40669[(2)] = null);

(statearr_40642_40669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40641 === (1))){
var state_40640__$1 = state_40640;
var statearr_40643_40670 = state_40640__$1;
(statearr_40643_40670[(2)] = null);

(statearr_40643_40670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40641 === (4))){
var inst_40604 = (state_40640[(7)]);
var inst_40606 = (inst_40604 < cnt);
var state_40640__$1 = state_40640;
if(cljs.core.truth_(inst_40606)){
var statearr_40644_40671 = state_40640__$1;
(statearr_40644_40671[(1)] = (6));

} else {
var statearr_40645_40672 = state_40640__$1;
(statearr_40645_40672[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40641 === (15))){
var inst_40636 = (state_40640[(2)]);
var state_40640__$1 = state_40640;
var statearr_40646_40673 = state_40640__$1;
(statearr_40646_40673[(2)] = inst_40636);

(statearr_40646_40673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40641 === (13))){
var inst_40629 = cljs.core.async.close_BANG_.call(null,out);
var state_40640__$1 = state_40640;
var statearr_40647_40674 = state_40640__$1;
(statearr_40647_40674[(2)] = inst_40629);

(statearr_40647_40674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40641 === (6))){
var state_40640__$1 = state_40640;
var statearr_40648_40675 = state_40640__$1;
(statearr_40648_40675[(2)] = null);

(statearr_40648_40675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40641 === (3))){
var inst_40638 = (state_40640[(2)]);
var state_40640__$1 = state_40640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40640__$1,inst_40638);
} else {
if((state_val_40641 === (12))){
var inst_40626 = (state_40640[(8)]);
var inst_40626__$1 = (state_40640[(2)]);
var inst_40627 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40626__$1);
var state_40640__$1 = (function (){var statearr_40649 = state_40640;
(statearr_40649[(8)] = inst_40626__$1);

return statearr_40649;
})();
if(cljs.core.truth_(inst_40627)){
var statearr_40650_40676 = state_40640__$1;
(statearr_40650_40676[(1)] = (13));

} else {
var statearr_40651_40677 = state_40640__$1;
(statearr_40651_40677[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40641 === (2))){
var inst_40603 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40604 = (0);
var state_40640__$1 = (function (){var statearr_40652 = state_40640;
(statearr_40652[(7)] = inst_40604);

(statearr_40652[(9)] = inst_40603);

return statearr_40652;
})();
var statearr_40653_40678 = state_40640__$1;
(statearr_40653_40678[(2)] = null);

(statearr_40653_40678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40641 === (11))){
var inst_40604 = (state_40640[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40640,(10),Object,null,(9));
var inst_40613 = chs__$1.call(null,inst_40604);
var inst_40614 = done.call(null,inst_40604);
var inst_40615 = cljs.core.async.take_BANG_.call(null,inst_40613,inst_40614);
var state_40640__$1 = state_40640;
var statearr_40654_40679 = state_40640__$1;
(statearr_40654_40679[(2)] = inst_40615);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40640__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40641 === (9))){
var inst_40604 = (state_40640[(7)]);
var inst_40617 = (state_40640[(2)]);
var inst_40618 = (inst_40604 + (1));
var inst_40604__$1 = inst_40618;
var state_40640__$1 = (function (){var statearr_40655 = state_40640;
(statearr_40655[(10)] = inst_40617);

(statearr_40655[(7)] = inst_40604__$1);

return statearr_40655;
})();
var statearr_40656_40680 = state_40640__$1;
(statearr_40656_40680[(2)] = null);

(statearr_40656_40680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40641 === (5))){
var inst_40624 = (state_40640[(2)]);
var state_40640__$1 = (function (){var statearr_40657 = state_40640;
(statearr_40657[(11)] = inst_40624);

return statearr_40657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40640__$1,(12),dchan);
} else {
if((state_val_40641 === (14))){
var inst_40626 = (state_40640[(8)]);
var inst_40631 = cljs.core.apply.call(null,f,inst_40626);
var state_40640__$1 = state_40640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40640__$1,(16),out,inst_40631);
} else {
if((state_val_40641 === (16))){
var inst_40633 = (state_40640[(2)]);
var state_40640__$1 = (function (){var statearr_40658 = state_40640;
(statearr_40658[(12)] = inst_40633);

return statearr_40658;
})();
var statearr_40659_40681 = state_40640__$1;
(statearr_40659_40681[(2)] = null);

(statearr_40659_40681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40641 === (10))){
var inst_40608 = (state_40640[(2)]);
var inst_40609 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40640__$1 = (function (){var statearr_40660 = state_40640;
(statearr_40660[(13)] = inst_40608);

return statearr_40660;
})();
var statearr_40661_40682 = state_40640__$1;
(statearr_40661_40682[(2)] = inst_40609);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40640__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40641 === (8))){
var inst_40622 = (state_40640[(2)]);
var state_40640__$1 = state_40640;
var statearr_40662_40683 = state_40640__$1;
(statearr_40662_40683[(2)] = inst_40622);

(statearr_40662_40683[(1)] = (5));


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
});})(c__30624__auto___40668,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30536__auto__,c__30624__auto___40668,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40663[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40663[(1)] = (1));

return statearr_40663;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40640){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40664){if((e40664 instanceof Object)){
var ex__30540__auto__ = e40664;
var statearr_40665_40684 = state_40640;
(statearr_40665_40684[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40685 = state_40640;
state_40640 = G__40685;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40640);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40668,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30626__auto__ = (function (){var statearr_40666 = f__30625__auto__.call(null);
(statearr_40666[(6)] = c__30624__auto___40668);

return statearr_40666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40668,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__40688 = arguments.length;
switch (G__40688) {
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
var c__30624__auto___40742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40742,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40742,out){
return (function (state_40720){
var state_val_40721 = (state_40720[(1)]);
if((state_val_40721 === (7))){
var inst_40699 = (state_40720[(7)]);
var inst_40700 = (state_40720[(8)]);
var inst_40699__$1 = (state_40720[(2)]);
var inst_40700__$1 = cljs.core.nth.call(null,inst_40699__$1,(0),null);
var inst_40701 = cljs.core.nth.call(null,inst_40699__$1,(1),null);
var inst_40702 = (inst_40700__$1 == null);
var state_40720__$1 = (function (){var statearr_40722 = state_40720;
(statearr_40722[(7)] = inst_40699__$1);

(statearr_40722[(9)] = inst_40701);

(statearr_40722[(8)] = inst_40700__$1);

return statearr_40722;
})();
if(cljs.core.truth_(inst_40702)){
var statearr_40723_40743 = state_40720__$1;
(statearr_40723_40743[(1)] = (8));

} else {
var statearr_40724_40744 = state_40720__$1;
(statearr_40724_40744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40721 === (1))){
var inst_40689 = cljs.core.vec.call(null,chs);
var inst_40690 = inst_40689;
var state_40720__$1 = (function (){var statearr_40725 = state_40720;
(statearr_40725[(10)] = inst_40690);

return statearr_40725;
})();
var statearr_40726_40745 = state_40720__$1;
(statearr_40726_40745[(2)] = null);

(statearr_40726_40745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40721 === (4))){
var inst_40690 = (state_40720[(10)]);
var state_40720__$1 = state_40720;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40720__$1,(7),inst_40690);
} else {
if((state_val_40721 === (6))){
var inst_40716 = (state_40720[(2)]);
var state_40720__$1 = state_40720;
var statearr_40727_40746 = state_40720__$1;
(statearr_40727_40746[(2)] = inst_40716);

(statearr_40727_40746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40721 === (3))){
var inst_40718 = (state_40720[(2)]);
var state_40720__$1 = state_40720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40720__$1,inst_40718);
} else {
if((state_val_40721 === (2))){
var inst_40690 = (state_40720[(10)]);
var inst_40692 = cljs.core.count.call(null,inst_40690);
var inst_40693 = (inst_40692 > (0));
var state_40720__$1 = state_40720;
if(cljs.core.truth_(inst_40693)){
var statearr_40729_40747 = state_40720__$1;
(statearr_40729_40747[(1)] = (4));

} else {
var statearr_40730_40748 = state_40720__$1;
(statearr_40730_40748[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40721 === (11))){
var inst_40690 = (state_40720[(10)]);
var inst_40709 = (state_40720[(2)]);
var tmp40728 = inst_40690;
var inst_40690__$1 = tmp40728;
var state_40720__$1 = (function (){var statearr_40731 = state_40720;
(statearr_40731[(10)] = inst_40690__$1);

(statearr_40731[(11)] = inst_40709);

return statearr_40731;
})();
var statearr_40732_40749 = state_40720__$1;
(statearr_40732_40749[(2)] = null);

(statearr_40732_40749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40721 === (9))){
var inst_40700 = (state_40720[(8)]);
var state_40720__$1 = state_40720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40720__$1,(11),out,inst_40700);
} else {
if((state_val_40721 === (5))){
var inst_40714 = cljs.core.async.close_BANG_.call(null,out);
var state_40720__$1 = state_40720;
var statearr_40733_40750 = state_40720__$1;
(statearr_40733_40750[(2)] = inst_40714);

(statearr_40733_40750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40721 === (10))){
var inst_40712 = (state_40720[(2)]);
var state_40720__$1 = state_40720;
var statearr_40734_40751 = state_40720__$1;
(statearr_40734_40751[(2)] = inst_40712);

(statearr_40734_40751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40721 === (8))){
var inst_40690 = (state_40720[(10)]);
var inst_40699 = (state_40720[(7)]);
var inst_40701 = (state_40720[(9)]);
var inst_40700 = (state_40720[(8)]);
var inst_40704 = (function (){var cs = inst_40690;
var vec__40695 = inst_40699;
var v = inst_40700;
var c = inst_40701;
return ((function (cs,vec__40695,v,c,inst_40690,inst_40699,inst_40701,inst_40700,state_val_40721,c__30624__auto___40742,out){
return (function (p1__40686_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40686_SHARP_);
});
;})(cs,vec__40695,v,c,inst_40690,inst_40699,inst_40701,inst_40700,state_val_40721,c__30624__auto___40742,out))
})();
var inst_40705 = cljs.core.filterv.call(null,inst_40704,inst_40690);
var inst_40690__$1 = inst_40705;
var state_40720__$1 = (function (){var statearr_40735 = state_40720;
(statearr_40735[(10)] = inst_40690__$1);

return statearr_40735;
})();
var statearr_40736_40752 = state_40720__$1;
(statearr_40736_40752[(2)] = null);

(statearr_40736_40752[(1)] = (2));


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
});})(c__30624__auto___40742,out))
;
return ((function (switch__30536__auto__,c__30624__auto___40742,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40737 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40737[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40737[(1)] = (1));

return statearr_40737;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40720){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40738){if((e40738 instanceof Object)){
var ex__30540__auto__ = e40738;
var statearr_40739_40753 = state_40720;
(statearr_40739_40753[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40754 = state_40720;
state_40720 = G__40754;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40720);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40742,out))
})();
var state__30626__auto__ = (function (){var statearr_40740 = f__30625__auto__.call(null);
(statearr_40740[(6)] = c__30624__auto___40742);

return statearr_40740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40742,out))
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
var G__40756 = arguments.length;
switch (G__40756) {
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
var c__30624__auto___40801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40801,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40801,out){
return (function (state_40780){
var state_val_40781 = (state_40780[(1)]);
if((state_val_40781 === (7))){
var inst_40762 = (state_40780[(7)]);
var inst_40762__$1 = (state_40780[(2)]);
var inst_40763 = (inst_40762__$1 == null);
var inst_40764 = cljs.core.not.call(null,inst_40763);
var state_40780__$1 = (function (){var statearr_40782 = state_40780;
(statearr_40782[(7)] = inst_40762__$1);

return statearr_40782;
})();
if(inst_40764){
var statearr_40783_40802 = state_40780__$1;
(statearr_40783_40802[(1)] = (8));

} else {
var statearr_40784_40803 = state_40780__$1;
(statearr_40784_40803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40781 === (1))){
var inst_40757 = (0);
var state_40780__$1 = (function (){var statearr_40785 = state_40780;
(statearr_40785[(8)] = inst_40757);

return statearr_40785;
})();
var statearr_40786_40804 = state_40780__$1;
(statearr_40786_40804[(2)] = null);

(statearr_40786_40804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40781 === (4))){
var state_40780__$1 = state_40780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40780__$1,(7),ch);
} else {
if((state_val_40781 === (6))){
var inst_40775 = (state_40780[(2)]);
var state_40780__$1 = state_40780;
var statearr_40787_40805 = state_40780__$1;
(statearr_40787_40805[(2)] = inst_40775);

(statearr_40787_40805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40781 === (3))){
var inst_40777 = (state_40780[(2)]);
var inst_40778 = cljs.core.async.close_BANG_.call(null,out);
var state_40780__$1 = (function (){var statearr_40788 = state_40780;
(statearr_40788[(9)] = inst_40777);

return statearr_40788;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40780__$1,inst_40778);
} else {
if((state_val_40781 === (2))){
var inst_40757 = (state_40780[(8)]);
var inst_40759 = (inst_40757 < n);
var state_40780__$1 = state_40780;
if(cljs.core.truth_(inst_40759)){
var statearr_40789_40806 = state_40780__$1;
(statearr_40789_40806[(1)] = (4));

} else {
var statearr_40790_40807 = state_40780__$1;
(statearr_40790_40807[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40781 === (11))){
var inst_40757 = (state_40780[(8)]);
var inst_40767 = (state_40780[(2)]);
var inst_40768 = (inst_40757 + (1));
var inst_40757__$1 = inst_40768;
var state_40780__$1 = (function (){var statearr_40791 = state_40780;
(statearr_40791[(8)] = inst_40757__$1);

(statearr_40791[(10)] = inst_40767);

return statearr_40791;
})();
var statearr_40792_40808 = state_40780__$1;
(statearr_40792_40808[(2)] = null);

(statearr_40792_40808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40781 === (9))){
var state_40780__$1 = state_40780;
var statearr_40793_40809 = state_40780__$1;
(statearr_40793_40809[(2)] = null);

(statearr_40793_40809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40781 === (5))){
var state_40780__$1 = state_40780;
var statearr_40794_40810 = state_40780__$1;
(statearr_40794_40810[(2)] = null);

(statearr_40794_40810[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40781 === (10))){
var inst_40772 = (state_40780[(2)]);
var state_40780__$1 = state_40780;
var statearr_40795_40811 = state_40780__$1;
(statearr_40795_40811[(2)] = inst_40772);

(statearr_40795_40811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40781 === (8))){
var inst_40762 = (state_40780[(7)]);
var state_40780__$1 = state_40780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40780__$1,(11),out,inst_40762);
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
});})(c__30624__auto___40801,out))
;
return ((function (switch__30536__auto__,c__30624__auto___40801,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40796 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40796[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40796[(1)] = (1));

return statearr_40796;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40780){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40797){if((e40797 instanceof Object)){
var ex__30540__auto__ = e40797;
var statearr_40798_40812 = state_40780;
(statearr_40798_40812[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40813 = state_40780;
state_40780 = G__40813;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40801,out))
})();
var state__30626__auto__ = (function (){var statearr_40799 = f__30625__auto__.call(null);
(statearr_40799[(6)] = c__30624__auto___40801);

return statearr_40799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40801,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40815 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40815 = (function (f,ch,meta40816){
this.f = f;
this.ch = ch;
this.meta40816 = meta40816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40817,meta40816__$1){
var self__ = this;
var _40817__$1 = this;
return (new cljs.core.async.t_cljs$core$async40815(self__.f,self__.ch,meta40816__$1));
});

cljs.core.async.t_cljs$core$async40815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40817){
var self__ = this;
var _40817__$1 = this;
return self__.meta40816;
});

cljs.core.async.t_cljs$core$async40815.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40815.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40815.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40815.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40815.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40818 = (function (f,ch,meta40816,_,fn1,meta40819){
this.f = f;
this.ch = ch;
this.meta40816 = meta40816;
this._ = _;
this.fn1 = fn1;
this.meta40819 = meta40819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40820,meta40819__$1){
var self__ = this;
var _40820__$1 = this;
return (new cljs.core.async.t_cljs$core$async40818(self__.f,self__.ch,self__.meta40816,self__._,self__.fn1,meta40819__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40820){
var self__ = this;
var _40820__$1 = this;
return self__.meta40819;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40818.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40818.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40814_SHARP_){
return f1.call(null,(((p1__40814_SHARP_ == null))?null:self__.f.call(null,p1__40814_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40818.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40816","meta40816",1108471622,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40815","cljs.core.async/t_cljs$core$async40815",-1177008270,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40819","meta40819",946063736,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40818";

cljs.core.async.t_cljs$core$async40818.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40818");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40818 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40818(f__$1,ch__$1,meta40816__$1,___$2,fn1__$1,meta40819){
return (new cljs.core.async.t_cljs$core$async40818(f__$1,ch__$1,meta40816__$1,___$2,fn1__$1,meta40819));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40818(self__.f,self__.ch,self__.meta40816,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async40815.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40815.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40816","meta40816",1108471622,null)], null);
});

cljs.core.async.t_cljs$core$async40815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40815";

cljs.core.async.t_cljs$core$async40815.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40815");
});

cljs.core.async.__GT_t_cljs$core$async40815 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40815(f__$1,ch__$1,meta40816){
return (new cljs.core.async.t_cljs$core$async40815(f__$1,ch__$1,meta40816));
});

}

return (new cljs.core.async.t_cljs$core$async40815(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40821 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40821 = (function (f,ch,meta40822){
this.f = f;
this.ch = ch;
this.meta40822 = meta40822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40823,meta40822__$1){
var self__ = this;
var _40823__$1 = this;
return (new cljs.core.async.t_cljs$core$async40821(self__.f,self__.ch,meta40822__$1));
});

cljs.core.async.t_cljs$core$async40821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40823){
var self__ = this;
var _40823__$1 = this;
return self__.meta40822;
});

cljs.core.async.t_cljs$core$async40821.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40821.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40821.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40821.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40821.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40821.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40822","meta40822",-673822665,null)], null);
});

cljs.core.async.t_cljs$core$async40821.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40821";

cljs.core.async.t_cljs$core$async40821.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40821");
});

cljs.core.async.__GT_t_cljs$core$async40821 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40821(f__$1,ch__$1,meta40822){
return (new cljs.core.async.t_cljs$core$async40821(f__$1,ch__$1,meta40822));
});

}

return (new cljs.core.async.t_cljs$core$async40821(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40824 = (function (p,ch,meta40825){
this.p = p;
this.ch = ch;
this.meta40825 = meta40825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40826,meta40825__$1){
var self__ = this;
var _40826__$1 = this;
return (new cljs.core.async.t_cljs$core$async40824(self__.p,self__.ch,meta40825__$1));
});

cljs.core.async.t_cljs$core$async40824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40826){
var self__ = this;
var _40826__$1 = this;
return self__.meta40825;
});

cljs.core.async.t_cljs$core$async40824.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40824.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40824.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40824.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40824.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40824.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40824.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40825","meta40825",1291025425,null)], null);
});

cljs.core.async.t_cljs$core$async40824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40824";

cljs.core.async.t_cljs$core$async40824.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40824");
});

cljs.core.async.__GT_t_cljs$core$async40824 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40824(p__$1,ch__$1,meta40825){
return (new cljs.core.async.t_cljs$core$async40824(p__$1,ch__$1,meta40825));
});

}

return (new cljs.core.async.t_cljs$core$async40824(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40828 = arguments.length;
switch (G__40828) {
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
var c__30624__auto___40868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40868,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40868,out){
return (function (state_40849){
var state_val_40850 = (state_40849[(1)]);
if((state_val_40850 === (7))){
var inst_40845 = (state_40849[(2)]);
var state_40849__$1 = state_40849;
var statearr_40851_40869 = state_40849__$1;
(statearr_40851_40869[(2)] = inst_40845);

(statearr_40851_40869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40850 === (1))){
var state_40849__$1 = state_40849;
var statearr_40852_40870 = state_40849__$1;
(statearr_40852_40870[(2)] = null);

(statearr_40852_40870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40850 === (4))){
var inst_40831 = (state_40849[(7)]);
var inst_40831__$1 = (state_40849[(2)]);
var inst_40832 = (inst_40831__$1 == null);
var state_40849__$1 = (function (){var statearr_40853 = state_40849;
(statearr_40853[(7)] = inst_40831__$1);

return statearr_40853;
})();
if(cljs.core.truth_(inst_40832)){
var statearr_40854_40871 = state_40849__$1;
(statearr_40854_40871[(1)] = (5));

} else {
var statearr_40855_40872 = state_40849__$1;
(statearr_40855_40872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40850 === (6))){
var inst_40831 = (state_40849[(7)]);
var inst_40836 = p.call(null,inst_40831);
var state_40849__$1 = state_40849;
if(cljs.core.truth_(inst_40836)){
var statearr_40856_40873 = state_40849__$1;
(statearr_40856_40873[(1)] = (8));

} else {
var statearr_40857_40874 = state_40849__$1;
(statearr_40857_40874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40850 === (3))){
var inst_40847 = (state_40849[(2)]);
var state_40849__$1 = state_40849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40849__$1,inst_40847);
} else {
if((state_val_40850 === (2))){
var state_40849__$1 = state_40849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40849__$1,(4),ch);
} else {
if((state_val_40850 === (11))){
var inst_40839 = (state_40849[(2)]);
var state_40849__$1 = state_40849;
var statearr_40858_40875 = state_40849__$1;
(statearr_40858_40875[(2)] = inst_40839);

(statearr_40858_40875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40850 === (9))){
var state_40849__$1 = state_40849;
var statearr_40859_40876 = state_40849__$1;
(statearr_40859_40876[(2)] = null);

(statearr_40859_40876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40850 === (5))){
var inst_40834 = cljs.core.async.close_BANG_.call(null,out);
var state_40849__$1 = state_40849;
var statearr_40860_40877 = state_40849__$1;
(statearr_40860_40877[(2)] = inst_40834);

(statearr_40860_40877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40850 === (10))){
var inst_40842 = (state_40849[(2)]);
var state_40849__$1 = (function (){var statearr_40861 = state_40849;
(statearr_40861[(8)] = inst_40842);

return statearr_40861;
})();
var statearr_40862_40878 = state_40849__$1;
(statearr_40862_40878[(2)] = null);

(statearr_40862_40878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40850 === (8))){
var inst_40831 = (state_40849[(7)]);
var state_40849__$1 = state_40849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40849__$1,(11),out,inst_40831);
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
});})(c__30624__auto___40868,out))
;
return ((function (switch__30536__auto__,c__30624__auto___40868,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40863 = [null,null,null,null,null,null,null,null,null];
(statearr_40863[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40863[(1)] = (1));

return statearr_40863;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40849){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40864){if((e40864 instanceof Object)){
var ex__30540__auto__ = e40864;
var statearr_40865_40879 = state_40849;
(statearr_40865_40879[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40880 = state_40849;
state_40849 = G__40880;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40849);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40868,out))
})();
var state__30626__auto__ = (function (){var statearr_40866 = f__30625__auto__.call(null);
(statearr_40866[(6)] = c__30624__auto___40868);

return statearr_40866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40868,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40882 = arguments.length;
switch (G__40882) {
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
return (function (state_40945){
var state_val_40946 = (state_40945[(1)]);
if((state_val_40946 === (7))){
var inst_40941 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40947_40985 = state_40945__$1;
(statearr_40947_40985[(2)] = inst_40941);

(statearr_40947_40985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (20))){
var inst_40911 = (state_40945[(7)]);
var inst_40922 = (state_40945[(2)]);
var inst_40923 = cljs.core.next.call(null,inst_40911);
var inst_40897 = inst_40923;
var inst_40898 = null;
var inst_40899 = (0);
var inst_40900 = (0);
var state_40945__$1 = (function (){var statearr_40948 = state_40945;
(statearr_40948[(8)] = inst_40900);

(statearr_40948[(9)] = inst_40922);

(statearr_40948[(10)] = inst_40897);

(statearr_40948[(11)] = inst_40898);

(statearr_40948[(12)] = inst_40899);

return statearr_40948;
})();
var statearr_40949_40986 = state_40945__$1;
(statearr_40949_40986[(2)] = null);

(statearr_40949_40986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (1))){
var state_40945__$1 = state_40945;
var statearr_40950_40987 = state_40945__$1;
(statearr_40950_40987[(2)] = null);

(statearr_40950_40987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (4))){
var inst_40886 = (state_40945[(13)]);
var inst_40886__$1 = (state_40945[(2)]);
var inst_40887 = (inst_40886__$1 == null);
var state_40945__$1 = (function (){var statearr_40951 = state_40945;
(statearr_40951[(13)] = inst_40886__$1);

return statearr_40951;
})();
if(cljs.core.truth_(inst_40887)){
var statearr_40952_40988 = state_40945__$1;
(statearr_40952_40988[(1)] = (5));

} else {
var statearr_40953_40989 = state_40945__$1;
(statearr_40953_40989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (15))){
var state_40945__$1 = state_40945;
var statearr_40957_40990 = state_40945__$1;
(statearr_40957_40990[(2)] = null);

(statearr_40957_40990[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (21))){
var state_40945__$1 = state_40945;
var statearr_40958_40991 = state_40945__$1;
(statearr_40958_40991[(2)] = null);

(statearr_40958_40991[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (13))){
var inst_40900 = (state_40945[(8)]);
var inst_40897 = (state_40945[(10)]);
var inst_40898 = (state_40945[(11)]);
var inst_40899 = (state_40945[(12)]);
var inst_40907 = (state_40945[(2)]);
var inst_40908 = (inst_40900 + (1));
var tmp40954 = inst_40897;
var tmp40955 = inst_40898;
var tmp40956 = inst_40899;
var inst_40897__$1 = tmp40954;
var inst_40898__$1 = tmp40955;
var inst_40899__$1 = tmp40956;
var inst_40900__$1 = inst_40908;
var state_40945__$1 = (function (){var statearr_40959 = state_40945;
(statearr_40959[(14)] = inst_40907);

(statearr_40959[(8)] = inst_40900__$1);

(statearr_40959[(10)] = inst_40897__$1);

(statearr_40959[(11)] = inst_40898__$1);

(statearr_40959[(12)] = inst_40899__$1);

return statearr_40959;
})();
var statearr_40960_40992 = state_40945__$1;
(statearr_40960_40992[(2)] = null);

(statearr_40960_40992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (22))){
var state_40945__$1 = state_40945;
var statearr_40961_40993 = state_40945__$1;
(statearr_40961_40993[(2)] = null);

(statearr_40961_40993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (6))){
var inst_40886 = (state_40945[(13)]);
var inst_40895 = f.call(null,inst_40886);
var inst_40896 = cljs.core.seq.call(null,inst_40895);
var inst_40897 = inst_40896;
var inst_40898 = null;
var inst_40899 = (0);
var inst_40900 = (0);
var state_40945__$1 = (function (){var statearr_40962 = state_40945;
(statearr_40962[(8)] = inst_40900);

(statearr_40962[(10)] = inst_40897);

(statearr_40962[(11)] = inst_40898);

(statearr_40962[(12)] = inst_40899);

return statearr_40962;
})();
var statearr_40963_40994 = state_40945__$1;
(statearr_40963_40994[(2)] = null);

(statearr_40963_40994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (17))){
var inst_40911 = (state_40945[(7)]);
var inst_40915 = cljs.core.chunk_first.call(null,inst_40911);
var inst_40916 = cljs.core.chunk_rest.call(null,inst_40911);
var inst_40917 = cljs.core.count.call(null,inst_40915);
var inst_40897 = inst_40916;
var inst_40898 = inst_40915;
var inst_40899 = inst_40917;
var inst_40900 = (0);
var state_40945__$1 = (function (){var statearr_40964 = state_40945;
(statearr_40964[(8)] = inst_40900);

(statearr_40964[(10)] = inst_40897);

(statearr_40964[(11)] = inst_40898);

(statearr_40964[(12)] = inst_40899);

return statearr_40964;
})();
var statearr_40965_40995 = state_40945__$1;
(statearr_40965_40995[(2)] = null);

(statearr_40965_40995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (3))){
var inst_40943 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40945__$1,inst_40943);
} else {
if((state_val_40946 === (12))){
var inst_40931 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40966_40996 = state_40945__$1;
(statearr_40966_40996[(2)] = inst_40931);

(statearr_40966_40996[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (2))){
var state_40945__$1 = state_40945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40945__$1,(4),in$);
} else {
if((state_val_40946 === (23))){
var inst_40939 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40967_40997 = state_40945__$1;
(statearr_40967_40997[(2)] = inst_40939);

(statearr_40967_40997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (19))){
var inst_40926 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40968_40998 = state_40945__$1;
(statearr_40968_40998[(2)] = inst_40926);

(statearr_40968_40998[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (11))){
var inst_40897 = (state_40945[(10)]);
var inst_40911 = (state_40945[(7)]);
var inst_40911__$1 = cljs.core.seq.call(null,inst_40897);
var state_40945__$1 = (function (){var statearr_40969 = state_40945;
(statearr_40969[(7)] = inst_40911__$1);

return statearr_40969;
})();
if(inst_40911__$1){
var statearr_40970_40999 = state_40945__$1;
(statearr_40970_40999[(1)] = (14));

} else {
var statearr_40971_41000 = state_40945__$1;
(statearr_40971_41000[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (9))){
var inst_40933 = (state_40945[(2)]);
var inst_40934 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40945__$1 = (function (){var statearr_40972 = state_40945;
(statearr_40972[(15)] = inst_40933);

return statearr_40972;
})();
if(cljs.core.truth_(inst_40934)){
var statearr_40973_41001 = state_40945__$1;
(statearr_40973_41001[(1)] = (21));

} else {
var statearr_40974_41002 = state_40945__$1;
(statearr_40974_41002[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (5))){
var inst_40889 = cljs.core.async.close_BANG_.call(null,out);
var state_40945__$1 = state_40945;
var statearr_40975_41003 = state_40945__$1;
(statearr_40975_41003[(2)] = inst_40889);

(statearr_40975_41003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (14))){
var inst_40911 = (state_40945[(7)]);
var inst_40913 = cljs.core.chunked_seq_QMARK_.call(null,inst_40911);
var state_40945__$1 = state_40945;
if(inst_40913){
var statearr_40976_41004 = state_40945__$1;
(statearr_40976_41004[(1)] = (17));

} else {
var statearr_40977_41005 = state_40945__$1;
(statearr_40977_41005[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (16))){
var inst_40929 = (state_40945[(2)]);
var state_40945__$1 = state_40945;
var statearr_40978_41006 = state_40945__$1;
(statearr_40978_41006[(2)] = inst_40929);

(statearr_40978_41006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40946 === (10))){
var inst_40900 = (state_40945[(8)]);
var inst_40898 = (state_40945[(11)]);
var inst_40905 = cljs.core._nth.call(null,inst_40898,inst_40900);
var state_40945__$1 = state_40945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40945__$1,(13),out,inst_40905);
} else {
if((state_val_40946 === (18))){
var inst_40911 = (state_40945[(7)]);
var inst_40920 = cljs.core.first.call(null,inst_40911);
var state_40945__$1 = state_40945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40945__$1,(20),out,inst_40920);
} else {
if((state_val_40946 === (8))){
var inst_40900 = (state_40945[(8)]);
var inst_40899 = (state_40945[(12)]);
var inst_40902 = (inst_40900 < inst_40899);
var inst_40903 = inst_40902;
var state_40945__$1 = state_40945;
if(cljs.core.truth_(inst_40903)){
var statearr_40979_41007 = state_40945__$1;
(statearr_40979_41007[(1)] = (10));

} else {
var statearr_40980_41008 = state_40945__$1;
(statearr_40980_41008[(1)] = (11));

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
var statearr_40981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40981[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__);

(statearr_40981[(1)] = (1));

return statearr_40981;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____1 = (function (state_40945){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40982){if((e40982 instanceof Object)){
var ex__30540__auto__ = e40982;
var statearr_40983_41009 = state_40945;
(statearr_40983_41009[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41010 = state_40945;
state_40945 = G__41010;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__ = function(state_40945){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____1.call(this,state_40945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_40984 = f__30625__auto__.call(null);
(statearr_40984[(6)] = c__30624__auto__);

return statearr_40984;
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
var G__41012 = arguments.length;
switch (G__41012) {
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
var G__41015 = arguments.length;
switch (G__41015) {
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
var G__41018 = arguments.length;
switch (G__41018) {
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
var c__30624__auto___41065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___41065,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___41065,out){
return (function (state_41042){
var state_val_41043 = (state_41042[(1)]);
if((state_val_41043 === (7))){
var inst_41037 = (state_41042[(2)]);
var state_41042__$1 = state_41042;
var statearr_41044_41066 = state_41042__$1;
(statearr_41044_41066[(2)] = inst_41037);

(statearr_41044_41066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (1))){
var inst_41019 = null;
var state_41042__$1 = (function (){var statearr_41045 = state_41042;
(statearr_41045[(7)] = inst_41019);

return statearr_41045;
})();
var statearr_41046_41067 = state_41042__$1;
(statearr_41046_41067[(2)] = null);

(statearr_41046_41067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (4))){
var inst_41022 = (state_41042[(8)]);
var inst_41022__$1 = (state_41042[(2)]);
var inst_41023 = (inst_41022__$1 == null);
var inst_41024 = cljs.core.not.call(null,inst_41023);
var state_41042__$1 = (function (){var statearr_41047 = state_41042;
(statearr_41047[(8)] = inst_41022__$1);

return statearr_41047;
})();
if(inst_41024){
var statearr_41048_41068 = state_41042__$1;
(statearr_41048_41068[(1)] = (5));

} else {
var statearr_41049_41069 = state_41042__$1;
(statearr_41049_41069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (6))){
var state_41042__$1 = state_41042;
var statearr_41050_41070 = state_41042__$1;
(statearr_41050_41070[(2)] = null);

(statearr_41050_41070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (3))){
var inst_41039 = (state_41042[(2)]);
var inst_41040 = cljs.core.async.close_BANG_.call(null,out);
var state_41042__$1 = (function (){var statearr_41051 = state_41042;
(statearr_41051[(9)] = inst_41039);

return statearr_41051;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41042__$1,inst_41040);
} else {
if((state_val_41043 === (2))){
var state_41042__$1 = state_41042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41042__$1,(4),ch);
} else {
if((state_val_41043 === (11))){
var inst_41022 = (state_41042[(8)]);
var inst_41031 = (state_41042[(2)]);
var inst_41019 = inst_41022;
var state_41042__$1 = (function (){var statearr_41052 = state_41042;
(statearr_41052[(7)] = inst_41019);

(statearr_41052[(10)] = inst_41031);

return statearr_41052;
})();
var statearr_41053_41071 = state_41042__$1;
(statearr_41053_41071[(2)] = null);

(statearr_41053_41071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (9))){
var inst_41022 = (state_41042[(8)]);
var state_41042__$1 = state_41042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41042__$1,(11),out,inst_41022);
} else {
if((state_val_41043 === (5))){
var inst_41019 = (state_41042[(7)]);
var inst_41022 = (state_41042[(8)]);
var inst_41026 = cljs.core._EQ_.call(null,inst_41022,inst_41019);
var state_41042__$1 = state_41042;
if(inst_41026){
var statearr_41055_41072 = state_41042__$1;
(statearr_41055_41072[(1)] = (8));

} else {
var statearr_41056_41073 = state_41042__$1;
(statearr_41056_41073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (10))){
var inst_41034 = (state_41042[(2)]);
var state_41042__$1 = state_41042;
var statearr_41057_41074 = state_41042__$1;
(statearr_41057_41074[(2)] = inst_41034);

(statearr_41057_41074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41043 === (8))){
var inst_41019 = (state_41042[(7)]);
var tmp41054 = inst_41019;
var inst_41019__$1 = tmp41054;
var state_41042__$1 = (function (){var statearr_41058 = state_41042;
(statearr_41058[(7)] = inst_41019__$1);

return statearr_41058;
})();
var statearr_41059_41075 = state_41042__$1;
(statearr_41059_41075[(2)] = null);

(statearr_41059_41075[(1)] = (2));


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
});})(c__30624__auto___41065,out))
;
return ((function (switch__30536__auto__,c__30624__auto___41065,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_41060 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41060[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_41060[(1)] = (1));

return statearr_41060;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_41042){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_41042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e41061){if((e41061 instanceof Object)){
var ex__30540__auto__ = e41061;
var statearr_41062_41076 = state_41042;
(statearr_41062_41076[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41077 = state_41042;
state_41042 = G__41077;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_41042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_41042);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___41065,out))
})();
var state__30626__auto__ = (function (){var statearr_41063 = f__30625__auto__.call(null);
(statearr_41063[(6)] = c__30624__auto___41065);

return statearr_41063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___41065,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41079 = arguments.length;
switch (G__41079) {
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
var c__30624__auto___41145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___41145,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___41145,out){
return (function (state_41117){
var state_val_41118 = (state_41117[(1)]);
if((state_val_41118 === (7))){
var inst_41113 = (state_41117[(2)]);
var state_41117__$1 = state_41117;
var statearr_41119_41146 = state_41117__$1;
(statearr_41119_41146[(2)] = inst_41113);

(statearr_41119_41146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41118 === (1))){
var inst_41080 = (new Array(n));
var inst_41081 = inst_41080;
var inst_41082 = (0);
var state_41117__$1 = (function (){var statearr_41120 = state_41117;
(statearr_41120[(7)] = inst_41081);

(statearr_41120[(8)] = inst_41082);

return statearr_41120;
})();
var statearr_41121_41147 = state_41117__$1;
(statearr_41121_41147[(2)] = null);

(statearr_41121_41147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41118 === (4))){
var inst_41085 = (state_41117[(9)]);
var inst_41085__$1 = (state_41117[(2)]);
var inst_41086 = (inst_41085__$1 == null);
var inst_41087 = cljs.core.not.call(null,inst_41086);
var state_41117__$1 = (function (){var statearr_41122 = state_41117;
(statearr_41122[(9)] = inst_41085__$1);

return statearr_41122;
})();
if(inst_41087){
var statearr_41123_41148 = state_41117__$1;
(statearr_41123_41148[(1)] = (5));

} else {
var statearr_41124_41149 = state_41117__$1;
(statearr_41124_41149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41118 === (15))){
var inst_41107 = (state_41117[(2)]);
var state_41117__$1 = state_41117;
var statearr_41125_41150 = state_41117__$1;
(statearr_41125_41150[(2)] = inst_41107);

(statearr_41125_41150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41118 === (13))){
var state_41117__$1 = state_41117;
var statearr_41126_41151 = state_41117__$1;
(statearr_41126_41151[(2)] = null);

(statearr_41126_41151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41118 === (6))){
var inst_41082 = (state_41117[(8)]);
var inst_41103 = (inst_41082 > (0));
var state_41117__$1 = state_41117;
if(cljs.core.truth_(inst_41103)){
var statearr_41127_41152 = state_41117__$1;
(statearr_41127_41152[(1)] = (12));

} else {
var statearr_41128_41153 = state_41117__$1;
(statearr_41128_41153[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41118 === (3))){
var inst_41115 = (state_41117[(2)]);
var state_41117__$1 = state_41117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41117__$1,inst_41115);
} else {
if((state_val_41118 === (12))){
var inst_41081 = (state_41117[(7)]);
var inst_41105 = cljs.core.vec.call(null,inst_41081);
var state_41117__$1 = state_41117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41117__$1,(15),out,inst_41105);
} else {
if((state_val_41118 === (2))){
var state_41117__$1 = state_41117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41117__$1,(4),ch);
} else {
if((state_val_41118 === (11))){
var inst_41097 = (state_41117[(2)]);
var inst_41098 = (new Array(n));
var inst_41081 = inst_41098;
var inst_41082 = (0);
var state_41117__$1 = (function (){var statearr_41129 = state_41117;
(statearr_41129[(7)] = inst_41081);

(statearr_41129[(8)] = inst_41082);

(statearr_41129[(10)] = inst_41097);

return statearr_41129;
})();
var statearr_41130_41154 = state_41117__$1;
(statearr_41130_41154[(2)] = null);

(statearr_41130_41154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41118 === (9))){
var inst_41081 = (state_41117[(7)]);
var inst_41095 = cljs.core.vec.call(null,inst_41081);
var state_41117__$1 = state_41117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41117__$1,(11),out,inst_41095);
} else {
if((state_val_41118 === (5))){
var inst_41081 = (state_41117[(7)]);
var inst_41082 = (state_41117[(8)]);
var inst_41090 = (state_41117[(11)]);
var inst_41085 = (state_41117[(9)]);
var inst_41089 = (inst_41081[inst_41082] = inst_41085);
var inst_41090__$1 = (inst_41082 + (1));
var inst_41091 = (inst_41090__$1 < n);
var state_41117__$1 = (function (){var statearr_41131 = state_41117;
(statearr_41131[(11)] = inst_41090__$1);

(statearr_41131[(12)] = inst_41089);

return statearr_41131;
})();
if(cljs.core.truth_(inst_41091)){
var statearr_41132_41155 = state_41117__$1;
(statearr_41132_41155[(1)] = (8));

} else {
var statearr_41133_41156 = state_41117__$1;
(statearr_41133_41156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41118 === (14))){
var inst_41110 = (state_41117[(2)]);
var inst_41111 = cljs.core.async.close_BANG_.call(null,out);
var state_41117__$1 = (function (){var statearr_41135 = state_41117;
(statearr_41135[(13)] = inst_41110);

return statearr_41135;
})();
var statearr_41136_41157 = state_41117__$1;
(statearr_41136_41157[(2)] = inst_41111);

(statearr_41136_41157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41118 === (10))){
var inst_41101 = (state_41117[(2)]);
var state_41117__$1 = state_41117;
var statearr_41137_41158 = state_41117__$1;
(statearr_41137_41158[(2)] = inst_41101);

(statearr_41137_41158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41118 === (8))){
var inst_41081 = (state_41117[(7)]);
var inst_41090 = (state_41117[(11)]);
var tmp41134 = inst_41081;
var inst_41081__$1 = tmp41134;
var inst_41082 = inst_41090;
var state_41117__$1 = (function (){var statearr_41138 = state_41117;
(statearr_41138[(7)] = inst_41081__$1);

(statearr_41138[(8)] = inst_41082);

return statearr_41138;
})();
var statearr_41139_41159 = state_41117__$1;
(statearr_41139_41159[(2)] = null);

(statearr_41139_41159[(1)] = (2));


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
});})(c__30624__auto___41145,out))
;
return ((function (switch__30536__auto__,c__30624__auto___41145,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_41140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41140[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_41140[(1)] = (1));

return statearr_41140;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_41117){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_41117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e41141){if((e41141 instanceof Object)){
var ex__30540__auto__ = e41141;
var statearr_41142_41160 = state_41117;
(statearr_41142_41160[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41161 = state_41117;
state_41117 = G__41161;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_41117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_41117);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___41145,out))
})();
var state__30626__auto__ = (function (){var statearr_41143 = f__30625__auto__.call(null);
(statearr_41143[(6)] = c__30624__auto___41145);

return statearr_41143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___41145,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41163 = arguments.length;
switch (G__41163) {
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
var c__30624__auto___41233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___41233,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___41233,out){
return (function (state_41205){
var state_val_41206 = (state_41205[(1)]);
if((state_val_41206 === (7))){
var inst_41201 = (state_41205[(2)]);
var state_41205__$1 = state_41205;
var statearr_41207_41234 = state_41205__$1;
(statearr_41207_41234[(2)] = inst_41201);

(statearr_41207_41234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (1))){
var inst_41164 = [];
var inst_41165 = inst_41164;
var inst_41166 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41205__$1 = (function (){var statearr_41208 = state_41205;
(statearr_41208[(7)] = inst_41165);

(statearr_41208[(8)] = inst_41166);

return statearr_41208;
})();
var statearr_41209_41235 = state_41205__$1;
(statearr_41209_41235[(2)] = null);

(statearr_41209_41235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (4))){
var inst_41169 = (state_41205[(9)]);
var inst_41169__$1 = (state_41205[(2)]);
var inst_41170 = (inst_41169__$1 == null);
var inst_41171 = cljs.core.not.call(null,inst_41170);
var state_41205__$1 = (function (){var statearr_41210 = state_41205;
(statearr_41210[(9)] = inst_41169__$1);

return statearr_41210;
})();
if(inst_41171){
var statearr_41211_41236 = state_41205__$1;
(statearr_41211_41236[(1)] = (5));

} else {
var statearr_41212_41237 = state_41205__$1;
(statearr_41212_41237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (15))){
var inst_41195 = (state_41205[(2)]);
var state_41205__$1 = state_41205;
var statearr_41213_41238 = state_41205__$1;
(statearr_41213_41238[(2)] = inst_41195);

(statearr_41213_41238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (13))){
var state_41205__$1 = state_41205;
var statearr_41214_41239 = state_41205__$1;
(statearr_41214_41239[(2)] = null);

(statearr_41214_41239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (6))){
var inst_41165 = (state_41205[(7)]);
var inst_41190 = inst_41165.length;
var inst_41191 = (inst_41190 > (0));
var state_41205__$1 = state_41205;
if(cljs.core.truth_(inst_41191)){
var statearr_41215_41240 = state_41205__$1;
(statearr_41215_41240[(1)] = (12));

} else {
var statearr_41216_41241 = state_41205__$1;
(statearr_41216_41241[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (3))){
var inst_41203 = (state_41205[(2)]);
var state_41205__$1 = state_41205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41205__$1,inst_41203);
} else {
if((state_val_41206 === (12))){
var inst_41165 = (state_41205[(7)]);
var inst_41193 = cljs.core.vec.call(null,inst_41165);
var state_41205__$1 = state_41205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41205__$1,(15),out,inst_41193);
} else {
if((state_val_41206 === (2))){
var state_41205__$1 = state_41205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41205__$1,(4),ch);
} else {
if((state_val_41206 === (11))){
var inst_41169 = (state_41205[(9)]);
var inst_41173 = (state_41205[(10)]);
var inst_41183 = (state_41205[(2)]);
var inst_41184 = [];
var inst_41185 = inst_41184.push(inst_41169);
var inst_41165 = inst_41184;
var inst_41166 = inst_41173;
var state_41205__$1 = (function (){var statearr_41217 = state_41205;
(statearr_41217[(7)] = inst_41165);

(statearr_41217[(11)] = inst_41183);

(statearr_41217[(12)] = inst_41185);

(statearr_41217[(8)] = inst_41166);

return statearr_41217;
})();
var statearr_41218_41242 = state_41205__$1;
(statearr_41218_41242[(2)] = null);

(statearr_41218_41242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (9))){
var inst_41165 = (state_41205[(7)]);
var inst_41181 = cljs.core.vec.call(null,inst_41165);
var state_41205__$1 = state_41205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41205__$1,(11),out,inst_41181);
} else {
if((state_val_41206 === (5))){
var inst_41169 = (state_41205[(9)]);
var inst_41173 = (state_41205[(10)]);
var inst_41166 = (state_41205[(8)]);
var inst_41173__$1 = f.call(null,inst_41169);
var inst_41174 = cljs.core._EQ_.call(null,inst_41173__$1,inst_41166);
var inst_41175 = cljs.core.keyword_identical_QMARK_.call(null,inst_41166,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41176 = (inst_41174) || (inst_41175);
var state_41205__$1 = (function (){var statearr_41219 = state_41205;
(statearr_41219[(10)] = inst_41173__$1);

return statearr_41219;
})();
if(cljs.core.truth_(inst_41176)){
var statearr_41220_41243 = state_41205__$1;
(statearr_41220_41243[(1)] = (8));

} else {
var statearr_41221_41244 = state_41205__$1;
(statearr_41221_41244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (14))){
var inst_41198 = (state_41205[(2)]);
var inst_41199 = cljs.core.async.close_BANG_.call(null,out);
var state_41205__$1 = (function (){var statearr_41223 = state_41205;
(statearr_41223[(13)] = inst_41198);

return statearr_41223;
})();
var statearr_41224_41245 = state_41205__$1;
(statearr_41224_41245[(2)] = inst_41199);

(statearr_41224_41245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (10))){
var inst_41188 = (state_41205[(2)]);
var state_41205__$1 = state_41205;
var statearr_41225_41246 = state_41205__$1;
(statearr_41225_41246[(2)] = inst_41188);

(statearr_41225_41246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41206 === (8))){
var inst_41169 = (state_41205[(9)]);
var inst_41173 = (state_41205[(10)]);
var inst_41165 = (state_41205[(7)]);
var inst_41178 = inst_41165.push(inst_41169);
var tmp41222 = inst_41165;
var inst_41165__$1 = tmp41222;
var inst_41166 = inst_41173;
var state_41205__$1 = (function (){var statearr_41226 = state_41205;
(statearr_41226[(7)] = inst_41165__$1);

(statearr_41226[(14)] = inst_41178);

(statearr_41226[(8)] = inst_41166);

return statearr_41226;
})();
var statearr_41227_41247 = state_41205__$1;
(statearr_41227_41247[(2)] = null);

(statearr_41227_41247[(1)] = (2));


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
});})(c__30624__auto___41233,out))
;
return ((function (switch__30536__auto__,c__30624__auto___41233,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_41228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41228[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_41228[(1)] = (1));

return statearr_41228;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_41205){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_41205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e41229){if((e41229 instanceof Object)){
var ex__30540__auto__ = e41229;
var statearr_41230_41248 = state_41205;
(statearr_41230_41248[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41249 = state_41205;
state_41205 = G__41249;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_41205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_41205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___41233,out))
})();
var state__30626__auto__ = (function (){var statearr_41231 = f__30625__auto__.call(null);
(statearr_41231[(6)] = c__30624__auto___41233);

return statearr_41231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___41233,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1516093610009
