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
var G__41790 = arguments.length;
switch (G__41790) {
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
if(typeof cljs.core.async.t_cljs$core$async41791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41791 = (function (f,blockable,meta41792){
this.f = f;
this.blockable = blockable;
this.meta41792 = meta41792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41793,meta41792__$1){
var self__ = this;
var _41793__$1 = this;
return (new cljs.core.async.t_cljs$core$async41791(self__.f,self__.blockable,meta41792__$1));
});

cljs.core.async.t_cljs$core$async41791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41793){
var self__ = this;
var _41793__$1 = this;
return self__.meta41792;
});

cljs.core.async.t_cljs$core$async41791.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41791.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async41791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async41791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41792","meta41792",-1925907766,null)], null);
});

cljs.core.async.t_cljs$core$async41791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41791";

cljs.core.async.t_cljs$core$async41791.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async41791");
});

cljs.core.async.__GT_t_cljs$core$async41791 = (function cljs$core$async$__GT_t_cljs$core$async41791(f__$1,blockable__$1,meta41792){
return (new cljs.core.async.t_cljs$core$async41791(f__$1,blockable__$1,meta41792));
});

}

return (new cljs.core.async.t_cljs$core$async41791(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__41797 = arguments.length;
switch (G__41797) {
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
var G__41800 = arguments.length;
switch (G__41800) {
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
var G__41803 = arguments.length;
switch (G__41803) {
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
var val_41805 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_41805);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_41805,ret){
return (function (){
return fn1.call(null,val_41805);
});})(val_41805,ret))
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
var G__41807 = arguments.length;
switch (G__41807) {
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
var n__29231__auto___41809 = n;
var x_41810 = (0);
while(true){
if((x_41810 < n__29231__auto___41809)){
(a[x_41810] = (0));

var G__41811 = (x_41810 + (1));
x_41810 = G__41811;
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

var G__41812 = (i + (1));
i = G__41812;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async41813 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41813 = (function (flag,meta41814){
this.flag = flag;
this.meta41814 = meta41814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_41815,meta41814__$1){
var self__ = this;
var _41815__$1 = this;
return (new cljs.core.async.t_cljs$core$async41813(self__.flag,meta41814__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_41815){
var self__ = this;
var _41815__$1 = this;
return self__.meta41814;
});})(flag))
;

cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41813.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41814","meta41814",634948331,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async41813.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41813";

cljs.core.async.t_cljs$core$async41813.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async41813");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async41813 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41813(flag__$1,meta41814){
return (new cljs.core.async.t_cljs$core$async41813(flag__$1,meta41814));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async41813(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async41816 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41816 = (function (flag,cb,meta41817){
this.flag = flag;
this.cb = cb;
this.meta41817 = meta41817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41818,meta41817__$1){
var self__ = this;
var _41818__$1 = this;
return (new cljs.core.async.t_cljs$core$async41816(self__.flag,self__.cb,meta41817__$1));
});

cljs.core.async.t_cljs$core$async41816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41818){
var self__ = this;
var _41818__$1 = this;
return self__.meta41817;
});

cljs.core.async.t_cljs$core$async41816.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41816.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async41816.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41816.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async41816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41817","meta41817",-2000479548,null)], null);
});

cljs.core.async.t_cljs$core$async41816.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41816";

cljs.core.async.t_cljs$core$async41816.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async41816");
});

cljs.core.async.__GT_t_cljs$core$async41816 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41816(flag__$1,cb__$1,meta41817){
return (new cljs.core.async.t_cljs$core$async41816(flag__$1,cb__$1,meta41817));
});

}

return (new cljs.core.async.t_cljs$core$async41816(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__41819_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41819_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41820_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41820_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28286__auto__ = wport;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41821 = (i + (1));
i = G__41821;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28286__auto__ = ret;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28274__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28274__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28274__auto__;
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
var args__29462__auto__ = [];
var len__29455__auto___41827 = arguments.length;
var i__29456__auto___41828 = (0);
while(true){
if((i__29456__auto___41828 < len__29455__auto___41827)){
args__29462__auto__.push((arguments[i__29456__auto___41828]));

var G__41829 = (i__29456__auto___41828 + (1));
i__29456__auto___41828 = G__41829;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41824){
var map__41825 = p__41824;
var map__41825__$1 = ((((!((map__41825 == null)))?((((map__41825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41825):map__41825);
var opts = map__41825__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41822){
var G__41823 = cljs.core.first.call(null,seq41822);
var seq41822__$1 = cljs.core.next.call(null,seq41822);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41823,seq41822__$1);
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
var G__41831 = arguments.length;
switch (G__41831) {
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
var c__33589__auto___41877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___41877){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___41877){
return (function (state_41855){
var state_val_41856 = (state_41855[(1)]);
if((state_val_41856 === (7))){
var inst_41851 = (state_41855[(2)]);
var state_41855__$1 = state_41855;
var statearr_41857_41878 = state_41855__$1;
(statearr_41857_41878[(2)] = inst_41851);

(statearr_41857_41878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (1))){
var state_41855__$1 = state_41855;
var statearr_41858_41879 = state_41855__$1;
(statearr_41858_41879[(2)] = null);

(statearr_41858_41879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (4))){
var inst_41834 = (state_41855[(7)]);
var inst_41834__$1 = (state_41855[(2)]);
var inst_41835 = (inst_41834__$1 == null);
var state_41855__$1 = (function (){var statearr_41859 = state_41855;
(statearr_41859[(7)] = inst_41834__$1);

return statearr_41859;
})();
if(cljs.core.truth_(inst_41835)){
var statearr_41860_41880 = state_41855__$1;
(statearr_41860_41880[(1)] = (5));

} else {
var statearr_41861_41881 = state_41855__$1;
(statearr_41861_41881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (13))){
var state_41855__$1 = state_41855;
var statearr_41862_41882 = state_41855__$1;
(statearr_41862_41882[(2)] = null);

(statearr_41862_41882[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (6))){
var inst_41834 = (state_41855[(7)]);
var state_41855__$1 = state_41855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41855__$1,(11),to,inst_41834);
} else {
if((state_val_41856 === (3))){
var inst_41853 = (state_41855[(2)]);
var state_41855__$1 = state_41855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41855__$1,inst_41853);
} else {
if((state_val_41856 === (12))){
var state_41855__$1 = state_41855;
var statearr_41863_41883 = state_41855__$1;
(statearr_41863_41883[(2)] = null);

(statearr_41863_41883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (2))){
var state_41855__$1 = state_41855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41855__$1,(4),from);
} else {
if((state_val_41856 === (11))){
var inst_41844 = (state_41855[(2)]);
var state_41855__$1 = state_41855;
if(cljs.core.truth_(inst_41844)){
var statearr_41864_41884 = state_41855__$1;
(statearr_41864_41884[(1)] = (12));

} else {
var statearr_41865_41885 = state_41855__$1;
(statearr_41865_41885[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (9))){
var state_41855__$1 = state_41855;
var statearr_41866_41886 = state_41855__$1;
(statearr_41866_41886[(2)] = null);

(statearr_41866_41886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (5))){
var state_41855__$1 = state_41855;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41867_41887 = state_41855__$1;
(statearr_41867_41887[(1)] = (8));

} else {
var statearr_41868_41888 = state_41855__$1;
(statearr_41868_41888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (14))){
var inst_41849 = (state_41855[(2)]);
var state_41855__$1 = state_41855;
var statearr_41869_41889 = state_41855__$1;
(statearr_41869_41889[(2)] = inst_41849);

(statearr_41869_41889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (10))){
var inst_41841 = (state_41855[(2)]);
var state_41855__$1 = state_41855;
var statearr_41870_41890 = state_41855__$1;
(statearr_41870_41890[(2)] = inst_41841);

(statearr_41870_41890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41856 === (8))){
var inst_41838 = cljs.core.async.close_BANG_.call(null,to);
var state_41855__$1 = state_41855;
var statearr_41871_41891 = state_41855__$1;
(statearr_41871_41891[(2)] = inst_41838);

(statearr_41871_41891[(1)] = (10));


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
});})(c__33589__auto___41877))
;
return ((function (switch__33501__auto__,c__33589__auto___41877){
return (function() {
var cljs$core$async$state_machine__33502__auto__ = null;
var cljs$core$async$state_machine__33502__auto____0 = (function (){
var statearr_41872 = [null,null,null,null,null,null,null,null];
(statearr_41872[(0)] = cljs$core$async$state_machine__33502__auto__);

(statearr_41872[(1)] = (1));

return statearr_41872;
});
var cljs$core$async$state_machine__33502__auto____1 = (function (state_41855){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_41855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e41873){if((e41873 instanceof Object)){
var ex__33505__auto__ = e41873;
var statearr_41874_41892 = state_41855;
(statearr_41874_41892[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41893 = state_41855;
state_41855 = G__41893;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$state_machine__33502__auto__ = function(state_41855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33502__auto____1.call(this,state_41855);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33502__auto____0;
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33502__auto____1;
return cljs$core$async$state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___41877))
})();
var state__33591__auto__ = (function (){var statearr_41875 = f__33590__auto__.call(null);
(statearr_41875[(6)] = c__33589__auto___41877);

return statearr_41875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___41877))
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
return (function (p__41894){
var vec__41895 = p__41894;
var v = cljs.core.nth.call(null,vec__41895,(0),null);
var p = cljs.core.nth.call(null,vec__41895,(1),null);
var job = vec__41895;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33589__auto___42066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___42066,res,vec__41895,v,p,job,jobs,results){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___42066,res,vec__41895,v,p,job,jobs,results){
return (function (state_41902){
var state_val_41903 = (state_41902[(1)]);
if((state_val_41903 === (1))){
var state_41902__$1 = state_41902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41902__$1,(2),res,v);
} else {
if((state_val_41903 === (2))){
var inst_41899 = (state_41902[(2)]);
var inst_41900 = cljs.core.async.close_BANG_.call(null,res);
var state_41902__$1 = (function (){var statearr_41904 = state_41902;
(statearr_41904[(7)] = inst_41899);

return statearr_41904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41902__$1,inst_41900);
} else {
return null;
}
}
});})(c__33589__auto___42066,res,vec__41895,v,p,job,jobs,results))
;
return ((function (switch__33501__auto__,c__33589__auto___42066,res,vec__41895,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____0 = (function (){
var statearr_41905 = [null,null,null,null,null,null,null,null];
(statearr_41905[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__);

(statearr_41905[(1)] = (1));

return statearr_41905;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____1 = (function (state_41902){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_41902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e41906){if((e41906 instanceof Object)){
var ex__33505__auto__ = e41906;
var statearr_41907_42067 = state_41902;
(statearr_41907_42067[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42068 = state_41902;
state_41902 = G__42068;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__ = function(state_41902){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____1.call(this,state_41902);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___42066,res,vec__41895,v,p,job,jobs,results))
})();
var state__33591__auto__ = (function (){var statearr_41908 = f__33590__auto__.call(null);
(statearr_41908[(6)] = c__33589__auto___42066);

return statearr_41908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___42066,res,vec__41895,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41909){
var vec__41910 = p__41909;
var v = cljs.core.nth.call(null,vec__41910,(0),null);
var p = cljs.core.nth.call(null,vec__41910,(1),null);
var job = vec__41910;
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
var n__29231__auto___42069 = n;
var __42070 = (0);
while(true){
if((__42070 < n__29231__auto___42069)){
var G__41913_42071 = type;
var G__41913_42072__$1 = (((G__41913_42071 instanceof cljs.core.Keyword))?G__41913_42071.fqn:null);
switch (G__41913_42072__$1) {
case "compute":
var c__33589__auto___42074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42070,c__33589__auto___42074,G__41913_42071,G__41913_42072__$1,n__29231__auto___42069,jobs,results,process,async){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (__42070,c__33589__auto___42074,G__41913_42071,G__41913_42072__$1,n__29231__auto___42069,jobs,results,process,async){
return (function (state_41926){
var state_val_41927 = (state_41926[(1)]);
if((state_val_41927 === (1))){
var state_41926__$1 = state_41926;
var statearr_41928_42075 = state_41926__$1;
(statearr_41928_42075[(2)] = null);

(statearr_41928_42075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (2))){
var state_41926__$1 = state_41926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41926__$1,(4),jobs);
} else {
if((state_val_41927 === (3))){
var inst_41924 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41926__$1,inst_41924);
} else {
if((state_val_41927 === (4))){
var inst_41916 = (state_41926[(2)]);
var inst_41917 = process.call(null,inst_41916);
var state_41926__$1 = state_41926;
if(cljs.core.truth_(inst_41917)){
var statearr_41929_42076 = state_41926__$1;
(statearr_41929_42076[(1)] = (5));

} else {
var statearr_41930_42077 = state_41926__$1;
(statearr_41930_42077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (5))){
var state_41926__$1 = state_41926;
var statearr_41931_42078 = state_41926__$1;
(statearr_41931_42078[(2)] = null);

(statearr_41931_42078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (6))){
var state_41926__$1 = state_41926;
var statearr_41932_42079 = state_41926__$1;
(statearr_41932_42079[(2)] = null);

(statearr_41932_42079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (7))){
var inst_41922 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
var statearr_41933_42080 = state_41926__$1;
(statearr_41933_42080[(2)] = inst_41922);

(statearr_41933_42080[(1)] = (3));


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
});})(__42070,c__33589__auto___42074,G__41913_42071,G__41913_42072__$1,n__29231__auto___42069,jobs,results,process,async))
;
return ((function (__42070,switch__33501__auto__,c__33589__auto___42074,G__41913_42071,G__41913_42072__$1,n__29231__auto___42069,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____0 = (function (){
var statearr_41934 = [null,null,null,null,null,null,null];
(statearr_41934[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__);

(statearr_41934[(1)] = (1));

return statearr_41934;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____1 = (function (state_41926){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_41926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e41935){if((e41935 instanceof Object)){
var ex__33505__auto__ = e41935;
var statearr_41936_42081 = state_41926;
(statearr_41936_42081[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42082 = state_41926;
state_41926 = G__42082;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__ = function(state_41926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____1.call(this,state_41926);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__;
})()
;})(__42070,switch__33501__auto__,c__33589__auto___42074,G__41913_42071,G__41913_42072__$1,n__29231__auto___42069,jobs,results,process,async))
})();
var state__33591__auto__ = (function (){var statearr_41937 = f__33590__auto__.call(null);
(statearr_41937[(6)] = c__33589__auto___42074);

return statearr_41937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(__42070,c__33589__auto___42074,G__41913_42071,G__41913_42072__$1,n__29231__auto___42069,jobs,results,process,async))
);


break;
case "async":
var c__33589__auto___42083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42070,c__33589__auto___42083,G__41913_42071,G__41913_42072__$1,n__29231__auto___42069,jobs,results,process,async){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (__42070,c__33589__auto___42083,G__41913_42071,G__41913_42072__$1,n__29231__auto___42069,jobs,results,process,async){
return (function (state_41950){
var state_val_41951 = (state_41950[(1)]);
if((state_val_41951 === (1))){
var state_41950__$1 = state_41950;
var statearr_41952_42084 = state_41950__$1;
(statearr_41952_42084[(2)] = null);

(statearr_41952_42084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (2))){
var state_41950__$1 = state_41950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41950__$1,(4),jobs);
} else {
if((state_val_41951 === (3))){
var inst_41948 = (state_41950[(2)]);
var state_41950__$1 = state_41950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41950__$1,inst_41948);
} else {
if((state_val_41951 === (4))){
var inst_41940 = (state_41950[(2)]);
var inst_41941 = async.call(null,inst_41940);
var state_41950__$1 = state_41950;
if(cljs.core.truth_(inst_41941)){
var statearr_41953_42085 = state_41950__$1;
(statearr_41953_42085[(1)] = (5));

} else {
var statearr_41954_42086 = state_41950__$1;
(statearr_41954_42086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (5))){
var state_41950__$1 = state_41950;
var statearr_41955_42087 = state_41950__$1;
(statearr_41955_42087[(2)] = null);

(statearr_41955_42087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (6))){
var state_41950__$1 = state_41950;
var statearr_41956_42088 = state_41950__$1;
(statearr_41956_42088[(2)] = null);

(statearr_41956_42088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41951 === (7))){
var inst_41946 = (state_41950[(2)]);
var state_41950__$1 = state_41950;
var statearr_41957_42089 = state_41950__$1;
(statearr_41957_42089[(2)] = inst_41946);

(statearr_41957_42089[(1)] = (3));


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
});})(__42070,c__33589__auto___42083,G__41913_42071,G__41913_42072__$1,n__29231__auto___42069,jobs,results,process,async))
;
return ((function (__42070,switch__33501__auto__,c__33589__auto___42083,G__41913_42071,G__41913_42072__$1,n__29231__auto___42069,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____0 = (function (){
var statearr_41958 = [null,null,null,null,null,null,null];
(statearr_41958[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__);

(statearr_41958[(1)] = (1));

return statearr_41958;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____1 = (function (state_41950){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_41950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e41959){if((e41959 instanceof Object)){
var ex__33505__auto__ = e41959;
var statearr_41960_42090 = state_41950;
(statearr_41960_42090[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42091 = state_41950;
state_41950 = G__42091;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__ = function(state_41950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____1.call(this,state_41950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__;
})()
;})(__42070,switch__33501__auto__,c__33589__auto___42083,G__41913_42071,G__41913_42072__$1,n__29231__auto___42069,jobs,results,process,async))
})();
var state__33591__auto__ = (function (){var statearr_41961 = f__33590__auto__.call(null);
(statearr_41961[(6)] = c__33589__auto___42083);

return statearr_41961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(__42070,c__33589__auto___42083,G__41913_42071,G__41913_42072__$1,n__29231__auto___42069,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41913_42072__$1)].join('')));

}

var G__42092 = (__42070 + (1));
__42070 = G__42092;
continue;
} else {
}
break;
}

var c__33589__auto___42093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___42093,jobs,results,process,async){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___42093,jobs,results,process,async){
return (function (state_41983){
var state_val_41984 = (state_41983[(1)]);
if((state_val_41984 === (1))){
var state_41983__$1 = state_41983;
var statearr_41985_42094 = state_41983__$1;
(statearr_41985_42094[(2)] = null);

(statearr_41985_42094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (2))){
var state_41983__$1 = state_41983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41983__$1,(4),from);
} else {
if((state_val_41984 === (3))){
var inst_41981 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41983__$1,inst_41981);
} else {
if((state_val_41984 === (4))){
var inst_41964 = (state_41983[(7)]);
var inst_41964__$1 = (state_41983[(2)]);
var inst_41965 = (inst_41964__$1 == null);
var state_41983__$1 = (function (){var statearr_41986 = state_41983;
(statearr_41986[(7)] = inst_41964__$1);

return statearr_41986;
})();
if(cljs.core.truth_(inst_41965)){
var statearr_41987_42095 = state_41983__$1;
(statearr_41987_42095[(1)] = (5));

} else {
var statearr_41988_42096 = state_41983__$1;
(statearr_41988_42096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (5))){
var inst_41967 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41983__$1 = state_41983;
var statearr_41989_42097 = state_41983__$1;
(statearr_41989_42097[(2)] = inst_41967);

(statearr_41989_42097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (6))){
var inst_41969 = (state_41983[(8)]);
var inst_41964 = (state_41983[(7)]);
var inst_41969__$1 = cljs.core.async.chan.call(null,(1));
var inst_41970 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41971 = [inst_41964,inst_41969__$1];
var inst_41972 = (new cljs.core.PersistentVector(null,2,(5),inst_41970,inst_41971,null));
var state_41983__$1 = (function (){var statearr_41990 = state_41983;
(statearr_41990[(8)] = inst_41969__$1);

return statearr_41990;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41983__$1,(8),jobs,inst_41972);
} else {
if((state_val_41984 === (7))){
var inst_41979 = (state_41983[(2)]);
var state_41983__$1 = state_41983;
var statearr_41991_42098 = state_41983__$1;
(statearr_41991_42098[(2)] = inst_41979);

(statearr_41991_42098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41984 === (8))){
var inst_41969 = (state_41983[(8)]);
var inst_41974 = (state_41983[(2)]);
var state_41983__$1 = (function (){var statearr_41992 = state_41983;
(statearr_41992[(9)] = inst_41974);

return statearr_41992;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41983__$1,(9),results,inst_41969);
} else {
if((state_val_41984 === (9))){
var inst_41976 = (state_41983[(2)]);
var state_41983__$1 = (function (){var statearr_41993 = state_41983;
(statearr_41993[(10)] = inst_41976);

return statearr_41993;
})();
var statearr_41994_42099 = state_41983__$1;
(statearr_41994_42099[(2)] = null);

(statearr_41994_42099[(1)] = (2));


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
});})(c__33589__auto___42093,jobs,results,process,async))
;
return ((function (switch__33501__auto__,c__33589__auto___42093,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____0 = (function (){
var statearr_41995 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__);

(statearr_41995[(1)] = (1));

return statearr_41995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____1 = (function (state_41983){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_41983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e41996){if((e41996 instanceof Object)){
var ex__33505__auto__ = e41996;
var statearr_41997_42100 = state_41983;
(statearr_41997_42100[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42101 = state_41983;
state_41983 = G__42101;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__ = function(state_41983){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____1.call(this,state_41983);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___42093,jobs,results,process,async))
})();
var state__33591__auto__ = (function (){var statearr_41998 = f__33590__auto__.call(null);
(statearr_41998[(6)] = c__33589__auto___42093);

return statearr_41998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___42093,jobs,results,process,async))
);


var c__33589__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto__,jobs,results,process,async){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto__,jobs,results,process,async){
return (function (state_42036){
var state_val_42037 = (state_42036[(1)]);
if((state_val_42037 === (7))){
var inst_42032 = (state_42036[(2)]);
var state_42036__$1 = state_42036;
var statearr_42038_42102 = state_42036__$1;
(statearr_42038_42102[(2)] = inst_42032);

(statearr_42038_42102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42037 === (20))){
var state_42036__$1 = state_42036;
var statearr_42039_42103 = state_42036__$1;
(statearr_42039_42103[(2)] = null);

(statearr_42039_42103[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42037 === (1))){
var state_42036__$1 = state_42036;
var statearr_42040_42104 = state_42036__$1;
(statearr_42040_42104[(2)] = null);

(statearr_42040_42104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42037 === (4))){
var inst_42001 = (state_42036[(7)]);
var inst_42001__$1 = (state_42036[(2)]);
var inst_42002 = (inst_42001__$1 == null);
var state_42036__$1 = (function (){var statearr_42041 = state_42036;
(statearr_42041[(7)] = inst_42001__$1);

return statearr_42041;
})();
if(cljs.core.truth_(inst_42002)){
var statearr_42042_42105 = state_42036__$1;
(statearr_42042_42105[(1)] = (5));

} else {
var statearr_42043_42106 = state_42036__$1;
(statearr_42043_42106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42037 === (15))){
var inst_42014 = (state_42036[(8)]);
var state_42036__$1 = state_42036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42036__$1,(18),to,inst_42014);
} else {
if((state_val_42037 === (21))){
var inst_42027 = (state_42036[(2)]);
var state_42036__$1 = state_42036;
var statearr_42044_42107 = state_42036__$1;
(statearr_42044_42107[(2)] = inst_42027);

(statearr_42044_42107[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42037 === (13))){
var inst_42029 = (state_42036[(2)]);
var state_42036__$1 = (function (){var statearr_42045 = state_42036;
(statearr_42045[(9)] = inst_42029);

return statearr_42045;
})();
var statearr_42046_42108 = state_42036__$1;
(statearr_42046_42108[(2)] = null);

(statearr_42046_42108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42037 === (6))){
var inst_42001 = (state_42036[(7)]);
var state_42036__$1 = state_42036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42036__$1,(11),inst_42001);
} else {
if((state_val_42037 === (17))){
var inst_42022 = (state_42036[(2)]);
var state_42036__$1 = state_42036;
if(cljs.core.truth_(inst_42022)){
var statearr_42047_42109 = state_42036__$1;
(statearr_42047_42109[(1)] = (19));

} else {
var statearr_42048_42110 = state_42036__$1;
(statearr_42048_42110[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42037 === (3))){
var inst_42034 = (state_42036[(2)]);
var state_42036__$1 = state_42036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42036__$1,inst_42034);
} else {
if((state_val_42037 === (12))){
var inst_42011 = (state_42036[(10)]);
var state_42036__$1 = state_42036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42036__$1,(14),inst_42011);
} else {
if((state_val_42037 === (2))){
var state_42036__$1 = state_42036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42036__$1,(4),results);
} else {
if((state_val_42037 === (19))){
var state_42036__$1 = state_42036;
var statearr_42049_42111 = state_42036__$1;
(statearr_42049_42111[(2)] = null);

(statearr_42049_42111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42037 === (11))){
var inst_42011 = (state_42036[(2)]);
var state_42036__$1 = (function (){var statearr_42050 = state_42036;
(statearr_42050[(10)] = inst_42011);

return statearr_42050;
})();
var statearr_42051_42112 = state_42036__$1;
(statearr_42051_42112[(2)] = null);

(statearr_42051_42112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42037 === (9))){
var state_42036__$1 = state_42036;
var statearr_42052_42113 = state_42036__$1;
(statearr_42052_42113[(2)] = null);

(statearr_42052_42113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42037 === (5))){
var state_42036__$1 = state_42036;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42053_42114 = state_42036__$1;
(statearr_42053_42114[(1)] = (8));

} else {
var statearr_42054_42115 = state_42036__$1;
(statearr_42054_42115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42037 === (14))){
var inst_42016 = (state_42036[(11)]);
var inst_42014 = (state_42036[(8)]);
var inst_42014__$1 = (state_42036[(2)]);
var inst_42015 = (inst_42014__$1 == null);
var inst_42016__$1 = cljs.core.not.call(null,inst_42015);
var state_42036__$1 = (function (){var statearr_42055 = state_42036;
(statearr_42055[(11)] = inst_42016__$1);

(statearr_42055[(8)] = inst_42014__$1);

return statearr_42055;
})();
if(inst_42016__$1){
var statearr_42056_42116 = state_42036__$1;
(statearr_42056_42116[(1)] = (15));

} else {
var statearr_42057_42117 = state_42036__$1;
(statearr_42057_42117[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42037 === (16))){
var inst_42016 = (state_42036[(11)]);
var state_42036__$1 = state_42036;
var statearr_42058_42118 = state_42036__$1;
(statearr_42058_42118[(2)] = inst_42016);

(statearr_42058_42118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42037 === (10))){
var inst_42008 = (state_42036[(2)]);
var state_42036__$1 = state_42036;
var statearr_42059_42119 = state_42036__$1;
(statearr_42059_42119[(2)] = inst_42008);

(statearr_42059_42119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42037 === (18))){
var inst_42019 = (state_42036[(2)]);
var state_42036__$1 = state_42036;
var statearr_42060_42120 = state_42036__$1;
(statearr_42060_42120[(2)] = inst_42019);

(statearr_42060_42120[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42037 === (8))){
var inst_42005 = cljs.core.async.close_BANG_.call(null,to);
var state_42036__$1 = state_42036;
var statearr_42061_42121 = state_42036__$1;
(statearr_42061_42121[(2)] = inst_42005);

(statearr_42061_42121[(1)] = (10));


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
});})(c__33589__auto__,jobs,results,process,async))
;
return ((function (switch__33501__auto__,c__33589__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____0 = (function (){
var statearr_42062 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__);

(statearr_42062[(1)] = (1));

return statearr_42062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____1 = (function (state_42036){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_42036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e42063){if((e42063 instanceof Object)){
var ex__33505__auto__ = e42063;
var statearr_42064_42122 = state_42036;
(statearr_42064_42122[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42123 = state_42036;
state_42036 = G__42123;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__ = function(state_42036){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____1.call(this,state_42036);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto__,jobs,results,process,async))
})();
var state__33591__auto__ = (function (){var statearr_42065 = f__33590__auto__.call(null);
(statearr_42065[(6)] = c__33589__auto__);

return statearr_42065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto__,jobs,results,process,async))
);

return c__33589__auto__;
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
var G__42125 = arguments.length;
switch (G__42125) {
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
var G__42128 = arguments.length;
switch (G__42128) {
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
var G__42131 = arguments.length;
switch (G__42131) {
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
var c__33589__auto___42180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___42180,tc,fc){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___42180,tc,fc){
return (function (state_42157){
var state_val_42158 = (state_42157[(1)]);
if((state_val_42158 === (7))){
var inst_42153 = (state_42157[(2)]);
var state_42157__$1 = state_42157;
var statearr_42159_42181 = state_42157__$1;
(statearr_42159_42181[(2)] = inst_42153);

(statearr_42159_42181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42158 === (1))){
var state_42157__$1 = state_42157;
var statearr_42160_42182 = state_42157__$1;
(statearr_42160_42182[(2)] = null);

(statearr_42160_42182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42158 === (4))){
var inst_42134 = (state_42157[(7)]);
var inst_42134__$1 = (state_42157[(2)]);
var inst_42135 = (inst_42134__$1 == null);
var state_42157__$1 = (function (){var statearr_42161 = state_42157;
(statearr_42161[(7)] = inst_42134__$1);

return statearr_42161;
})();
if(cljs.core.truth_(inst_42135)){
var statearr_42162_42183 = state_42157__$1;
(statearr_42162_42183[(1)] = (5));

} else {
var statearr_42163_42184 = state_42157__$1;
(statearr_42163_42184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42158 === (13))){
var state_42157__$1 = state_42157;
var statearr_42164_42185 = state_42157__$1;
(statearr_42164_42185[(2)] = null);

(statearr_42164_42185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42158 === (6))){
var inst_42134 = (state_42157[(7)]);
var inst_42140 = p.call(null,inst_42134);
var state_42157__$1 = state_42157;
if(cljs.core.truth_(inst_42140)){
var statearr_42165_42186 = state_42157__$1;
(statearr_42165_42186[(1)] = (9));

} else {
var statearr_42166_42187 = state_42157__$1;
(statearr_42166_42187[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42158 === (3))){
var inst_42155 = (state_42157[(2)]);
var state_42157__$1 = state_42157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42157__$1,inst_42155);
} else {
if((state_val_42158 === (12))){
var state_42157__$1 = state_42157;
var statearr_42167_42188 = state_42157__$1;
(statearr_42167_42188[(2)] = null);

(statearr_42167_42188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42158 === (2))){
var state_42157__$1 = state_42157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42157__$1,(4),ch);
} else {
if((state_val_42158 === (11))){
var inst_42134 = (state_42157[(7)]);
var inst_42144 = (state_42157[(2)]);
var state_42157__$1 = state_42157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42157__$1,(8),inst_42144,inst_42134);
} else {
if((state_val_42158 === (9))){
var state_42157__$1 = state_42157;
var statearr_42168_42189 = state_42157__$1;
(statearr_42168_42189[(2)] = tc);

(statearr_42168_42189[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42158 === (5))){
var inst_42137 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42138 = cljs.core.async.close_BANG_.call(null,fc);
var state_42157__$1 = (function (){var statearr_42169 = state_42157;
(statearr_42169[(8)] = inst_42137);

return statearr_42169;
})();
var statearr_42170_42190 = state_42157__$1;
(statearr_42170_42190[(2)] = inst_42138);

(statearr_42170_42190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42158 === (14))){
var inst_42151 = (state_42157[(2)]);
var state_42157__$1 = state_42157;
var statearr_42171_42191 = state_42157__$1;
(statearr_42171_42191[(2)] = inst_42151);

(statearr_42171_42191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42158 === (10))){
var state_42157__$1 = state_42157;
var statearr_42172_42192 = state_42157__$1;
(statearr_42172_42192[(2)] = fc);

(statearr_42172_42192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42158 === (8))){
var inst_42146 = (state_42157[(2)]);
var state_42157__$1 = state_42157;
if(cljs.core.truth_(inst_42146)){
var statearr_42173_42193 = state_42157__$1;
(statearr_42173_42193[(1)] = (12));

} else {
var statearr_42174_42194 = state_42157__$1;
(statearr_42174_42194[(1)] = (13));

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
});})(c__33589__auto___42180,tc,fc))
;
return ((function (switch__33501__auto__,c__33589__auto___42180,tc,fc){
return (function() {
var cljs$core$async$state_machine__33502__auto__ = null;
var cljs$core$async$state_machine__33502__auto____0 = (function (){
var statearr_42175 = [null,null,null,null,null,null,null,null,null];
(statearr_42175[(0)] = cljs$core$async$state_machine__33502__auto__);

(statearr_42175[(1)] = (1));

return statearr_42175;
});
var cljs$core$async$state_machine__33502__auto____1 = (function (state_42157){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_42157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e42176){if((e42176 instanceof Object)){
var ex__33505__auto__ = e42176;
var statearr_42177_42195 = state_42157;
(statearr_42177_42195[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42196 = state_42157;
state_42157 = G__42196;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$state_machine__33502__auto__ = function(state_42157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33502__auto____1.call(this,state_42157);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33502__auto____0;
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33502__auto____1;
return cljs$core$async$state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___42180,tc,fc))
})();
var state__33591__auto__ = (function (){var statearr_42178 = f__33590__auto__.call(null);
(statearr_42178[(6)] = c__33589__auto___42180);

return statearr_42178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___42180,tc,fc))
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
var c__33589__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto__){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto__){
return (function (state_42217){
var state_val_42218 = (state_42217[(1)]);
if((state_val_42218 === (7))){
var inst_42213 = (state_42217[(2)]);
var state_42217__$1 = state_42217;
var statearr_42219_42237 = state_42217__$1;
(statearr_42219_42237[(2)] = inst_42213);

(statearr_42219_42237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42218 === (1))){
var inst_42197 = init;
var state_42217__$1 = (function (){var statearr_42220 = state_42217;
(statearr_42220[(7)] = inst_42197);

return statearr_42220;
})();
var statearr_42221_42238 = state_42217__$1;
(statearr_42221_42238[(2)] = null);

(statearr_42221_42238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42218 === (4))){
var inst_42200 = (state_42217[(8)]);
var inst_42200__$1 = (state_42217[(2)]);
var inst_42201 = (inst_42200__$1 == null);
var state_42217__$1 = (function (){var statearr_42222 = state_42217;
(statearr_42222[(8)] = inst_42200__$1);

return statearr_42222;
})();
if(cljs.core.truth_(inst_42201)){
var statearr_42223_42239 = state_42217__$1;
(statearr_42223_42239[(1)] = (5));

} else {
var statearr_42224_42240 = state_42217__$1;
(statearr_42224_42240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42218 === (6))){
var inst_42204 = (state_42217[(9)]);
var inst_42197 = (state_42217[(7)]);
var inst_42200 = (state_42217[(8)]);
var inst_42204__$1 = f.call(null,inst_42197,inst_42200);
var inst_42205 = cljs.core.reduced_QMARK_.call(null,inst_42204__$1);
var state_42217__$1 = (function (){var statearr_42225 = state_42217;
(statearr_42225[(9)] = inst_42204__$1);

return statearr_42225;
})();
if(inst_42205){
var statearr_42226_42241 = state_42217__$1;
(statearr_42226_42241[(1)] = (8));

} else {
var statearr_42227_42242 = state_42217__$1;
(statearr_42227_42242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42218 === (3))){
var inst_42215 = (state_42217[(2)]);
var state_42217__$1 = state_42217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42217__$1,inst_42215);
} else {
if((state_val_42218 === (2))){
var state_42217__$1 = state_42217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42217__$1,(4),ch);
} else {
if((state_val_42218 === (9))){
var inst_42204 = (state_42217[(9)]);
var inst_42197 = inst_42204;
var state_42217__$1 = (function (){var statearr_42228 = state_42217;
(statearr_42228[(7)] = inst_42197);

return statearr_42228;
})();
var statearr_42229_42243 = state_42217__$1;
(statearr_42229_42243[(2)] = null);

(statearr_42229_42243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42218 === (5))){
var inst_42197 = (state_42217[(7)]);
var state_42217__$1 = state_42217;
var statearr_42230_42244 = state_42217__$1;
(statearr_42230_42244[(2)] = inst_42197);

(statearr_42230_42244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42218 === (10))){
var inst_42211 = (state_42217[(2)]);
var state_42217__$1 = state_42217;
var statearr_42231_42245 = state_42217__$1;
(statearr_42231_42245[(2)] = inst_42211);

(statearr_42231_42245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42218 === (8))){
var inst_42204 = (state_42217[(9)]);
var inst_42207 = cljs.core.deref.call(null,inst_42204);
var state_42217__$1 = state_42217;
var statearr_42232_42246 = state_42217__$1;
(statearr_42232_42246[(2)] = inst_42207);

(statearr_42232_42246[(1)] = (10));


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
});})(c__33589__auto__))
;
return ((function (switch__33501__auto__,c__33589__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33502__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33502__auto____0 = (function (){
var statearr_42233 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42233[(0)] = cljs$core$async$reduce_$_state_machine__33502__auto__);

(statearr_42233[(1)] = (1));

return statearr_42233;
});
var cljs$core$async$reduce_$_state_machine__33502__auto____1 = (function (state_42217){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_42217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e42234){if((e42234 instanceof Object)){
var ex__33505__auto__ = e42234;
var statearr_42235_42247 = state_42217;
(statearr_42235_42247[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42248 = state_42217;
state_42217 = G__42248;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33502__auto__ = function(state_42217){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33502__auto____1.call(this,state_42217);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33502__auto____0;
cljs$core$async$reduce_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33502__auto____1;
return cljs$core$async$reduce_$_state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto__))
})();
var state__33591__auto__ = (function (){var statearr_42236 = f__33590__auto__.call(null);
(statearr_42236[(6)] = c__33589__auto__);

return statearr_42236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto__))
);

return c__33589__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33589__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto__,f__$1){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto__,f__$1){
return (function (state_42254){
var state_val_42255 = (state_42254[(1)]);
if((state_val_42255 === (1))){
var inst_42249 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42254__$1 = state_42254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42254__$1,(2),inst_42249);
} else {
if((state_val_42255 === (2))){
var inst_42251 = (state_42254[(2)]);
var inst_42252 = f__$1.call(null,inst_42251);
var state_42254__$1 = state_42254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42254__$1,inst_42252);
} else {
return null;
}
}
});})(c__33589__auto__,f__$1))
;
return ((function (switch__33501__auto__,c__33589__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33502__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33502__auto____0 = (function (){
var statearr_42256 = [null,null,null,null,null,null,null];
(statearr_42256[(0)] = cljs$core$async$transduce_$_state_machine__33502__auto__);

(statearr_42256[(1)] = (1));

return statearr_42256;
});
var cljs$core$async$transduce_$_state_machine__33502__auto____1 = (function (state_42254){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_42254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e42257){if((e42257 instanceof Object)){
var ex__33505__auto__ = e42257;
var statearr_42258_42260 = state_42254;
(statearr_42258_42260[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42261 = state_42254;
state_42254 = G__42261;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33502__auto__ = function(state_42254){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33502__auto____1.call(this,state_42254);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33502__auto____0;
cljs$core$async$transduce_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33502__auto____1;
return cljs$core$async$transduce_$_state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto__,f__$1))
})();
var state__33591__auto__ = (function (){var statearr_42259 = f__33590__auto__.call(null);
(statearr_42259[(6)] = c__33589__auto__);

return statearr_42259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto__,f__$1))
);

return c__33589__auto__;
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
var G__42263 = arguments.length;
switch (G__42263) {
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
var c__33589__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto__){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto__){
return (function (state_42288){
var state_val_42289 = (state_42288[(1)]);
if((state_val_42289 === (7))){
var inst_42270 = (state_42288[(2)]);
var state_42288__$1 = state_42288;
var statearr_42290_42311 = state_42288__$1;
(statearr_42290_42311[(2)] = inst_42270);

(statearr_42290_42311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (1))){
var inst_42264 = cljs.core.seq.call(null,coll);
var inst_42265 = inst_42264;
var state_42288__$1 = (function (){var statearr_42291 = state_42288;
(statearr_42291[(7)] = inst_42265);

return statearr_42291;
})();
var statearr_42292_42312 = state_42288__$1;
(statearr_42292_42312[(2)] = null);

(statearr_42292_42312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (4))){
var inst_42265 = (state_42288[(7)]);
var inst_42268 = cljs.core.first.call(null,inst_42265);
var state_42288__$1 = state_42288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42288__$1,(7),ch,inst_42268);
} else {
if((state_val_42289 === (13))){
var inst_42282 = (state_42288[(2)]);
var state_42288__$1 = state_42288;
var statearr_42293_42313 = state_42288__$1;
(statearr_42293_42313[(2)] = inst_42282);

(statearr_42293_42313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (6))){
var inst_42273 = (state_42288[(2)]);
var state_42288__$1 = state_42288;
if(cljs.core.truth_(inst_42273)){
var statearr_42294_42314 = state_42288__$1;
(statearr_42294_42314[(1)] = (8));

} else {
var statearr_42295_42315 = state_42288__$1;
(statearr_42295_42315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (3))){
var inst_42286 = (state_42288[(2)]);
var state_42288__$1 = state_42288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42288__$1,inst_42286);
} else {
if((state_val_42289 === (12))){
var state_42288__$1 = state_42288;
var statearr_42296_42316 = state_42288__$1;
(statearr_42296_42316[(2)] = null);

(statearr_42296_42316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (2))){
var inst_42265 = (state_42288[(7)]);
var state_42288__$1 = state_42288;
if(cljs.core.truth_(inst_42265)){
var statearr_42297_42317 = state_42288__$1;
(statearr_42297_42317[(1)] = (4));

} else {
var statearr_42298_42318 = state_42288__$1;
(statearr_42298_42318[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (11))){
var inst_42279 = cljs.core.async.close_BANG_.call(null,ch);
var state_42288__$1 = state_42288;
var statearr_42299_42319 = state_42288__$1;
(statearr_42299_42319[(2)] = inst_42279);

(statearr_42299_42319[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (9))){
var state_42288__$1 = state_42288;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42300_42320 = state_42288__$1;
(statearr_42300_42320[(1)] = (11));

} else {
var statearr_42301_42321 = state_42288__$1;
(statearr_42301_42321[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (5))){
var inst_42265 = (state_42288[(7)]);
var state_42288__$1 = state_42288;
var statearr_42302_42322 = state_42288__$1;
(statearr_42302_42322[(2)] = inst_42265);

(statearr_42302_42322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (10))){
var inst_42284 = (state_42288[(2)]);
var state_42288__$1 = state_42288;
var statearr_42303_42323 = state_42288__$1;
(statearr_42303_42323[(2)] = inst_42284);

(statearr_42303_42323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (8))){
var inst_42265 = (state_42288[(7)]);
var inst_42275 = cljs.core.next.call(null,inst_42265);
var inst_42265__$1 = inst_42275;
var state_42288__$1 = (function (){var statearr_42304 = state_42288;
(statearr_42304[(7)] = inst_42265__$1);

return statearr_42304;
})();
var statearr_42305_42324 = state_42288__$1;
(statearr_42305_42324[(2)] = null);

(statearr_42305_42324[(1)] = (2));


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
});})(c__33589__auto__))
;
return ((function (switch__33501__auto__,c__33589__auto__){
return (function() {
var cljs$core$async$state_machine__33502__auto__ = null;
var cljs$core$async$state_machine__33502__auto____0 = (function (){
var statearr_42306 = [null,null,null,null,null,null,null,null];
(statearr_42306[(0)] = cljs$core$async$state_machine__33502__auto__);

(statearr_42306[(1)] = (1));

return statearr_42306;
});
var cljs$core$async$state_machine__33502__auto____1 = (function (state_42288){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_42288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e42307){if((e42307 instanceof Object)){
var ex__33505__auto__ = e42307;
var statearr_42308_42325 = state_42288;
(statearr_42308_42325[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42326 = state_42288;
state_42288 = G__42326;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$state_machine__33502__auto__ = function(state_42288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33502__auto____1.call(this,state_42288);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33502__auto____0;
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33502__auto____1;
return cljs$core$async$state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto__))
})();
var state__33591__auto__ = (function (){var statearr_42309 = f__33590__auto__.call(null);
(statearr_42309[(6)] = c__33589__auto__);

return statearr_42309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto__))
);

return c__33589__auto__;
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
var x__28969__auto__ = (((_ == null))?null:_);
var m__28970__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,_);
} else {
var m__28970__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,_);
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
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28970__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch);
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
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m);
} else {
var m__28970__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async42327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42327 = (function (ch,cs,meta42328){
this.ch = ch;
this.cs = cs;
this.meta42328 = meta42328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42329,meta42328__$1){
var self__ = this;
var _42329__$1 = this;
return (new cljs.core.async.t_cljs$core$async42327(self__.ch,self__.cs,meta42328__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42329){
var self__ = this;
var _42329__$1 = this;
return self__.meta42328;
});})(cs))
;

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42327.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42327.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42328","meta42328",1979978247,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42327";

cljs.core.async.t_cljs$core$async42327.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async42327");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42327 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42327(ch__$1,cs__$1,meta42328){
return (new cljs.core.async.t_cljs$core$async42327(ch__$1,cs__$1,meta42328));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42327(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33589__auto___42549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___42549,cs,m,dchan,dctr,done){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___42549,cs,m,dchan,dctr,done){
return (function (state_42464){
var state_val_42465 = (state_42464[(1)]);
if((state_val_42465 === (7))){
var inst_42460 = (state_42464[(2)]);
var state_42464__$1 = state_42464;
var statearr_42466_42550 = state_42464__$1;
(statearr_42466_42550[(2)] = inst_42460);

(statearr_42466_42550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (20))){
var inst_42363 = (state_42464[(7)]);
var inst_42375 = cljs.core.first.call(null,inst_42363);
var inst_42376 = cljs.core.nth.call(null,inst_42375,(0),null);
var inst_42377 = cljs.core.nth.call(null,inst_42375,(1),null);
var state_42464__$1 = (function (){var statearr_42467 = state_42464;
(statearr_42467[(8)] = inst_42376);

return statearr_42467;
})();
if(cljs.core.truth_(inst_42377)){
var statearr_42468_42551 = state_42464__$1;
(statearr_42468_42551[(1)] = (22));

} else {
var statearr_42469_42552 = state_42464__$1;
(statearr_42469_42552[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (27))){
var inst_42405 = (state_42464[(9)]);
var inst_42332 = (state_42464[(10)]);
var inst_42412 = (state_42464[(11)]);
var inst_42407 = (state_42464[(12)]);
var inst_42412__$1 = cljs.core._nth.call(null,inst_42405,inst_42407);
var inst_42413 = cljs.core.async.put_BANG_.call(null,inst_42412__$1,inst_42332,done);
var state_42464__$1 = (function (){var statearr_42470 = state_42464;
(statearr_42470[(11)] = inst_42412__$1);

return statearr_42470;
})();
if(cljs.core.truth_(inst_42413)){
var statearr_42471_42553 = state_42464__$1;
(statearr_42471_42553[(1)] = (30));

} else {
var statearr_42472_42554 = state_42464__$1;
(statearr_42472_42554[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (1))){
var state_42464__$1 = state_42464;
var statearr_42473_42555 = state_42464__$1;
(statearr_42473_42555[(2)] = null);

(statearr_42473_42555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (24))){
var inst_42363 = (state_42464[(7)]);
var inst_42382 = (state_42464[(2)]);
var inst_42383 = cljs.core.next.call(null,inst_42363);
var inst_42341 = inst_42383;
var inst_42342 = null;
var inst_42343 = (0);
var inst_42344 = (0);
var state_42464__$1 = (function (){var statearr_42474 = state_42464;
(statearr_42474[(13)] = inst_42341);

(statearr_42474[(14)] = inst_42342);

(statearr_42474[(15)] = inst_42382);

(statearr_42474[(16)] = inst_42343);

(statearr_42474[(17)] = inst_42344);

return statearr_42474;
})();
var statearr_42475_42556 = state_42464__$1;
(statearr_42475_42556[(2)] = null);

(statearr_42475_42556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (39))){
var state_42464__$1 = state_42464;
var statearr_42479_42557 = state_42464__$1;
(statearr_42479_42557[(2)] = null);

(statearr_42479_42557[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (4))){
var inst_42332 = (state_42464[(10)]);
var inst_42332__$1 = (state_42464[(2)]);
var inst_42333 = (inst_42332__$1 == null);
var state_42464__$1 = (function (){var statearr_42480 = state_42464;
(statearr_42480[(10)] = inst_42332__$1);

return statearr_42480;
})();
if(cljs.core.truth_(inst_42333)){
var statearr_42481_42558 = state_42464__$1;
(statearr_42481_42558[(1)] = (5));

} else {
var statearr_42482_42559 = state_42464__$1;
(statearr_42482_42559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (15))){
var inst_42341 = (state_42464[(13)]);
var inst_42342 = (state_42464[(14)]);
var inst_42343 = (state_42464[(16)]);
var inst_42344 = (state_42464[(17)]);
var inst_42359 = (state_42464[(2)]);
var inst_42360 = (inst_42344 + (1));
var tmp42476 = inst_42341;
var tmp42477 = inst_42342;
var tmp42478 = inst_42343;
var inst_42341__$1 = tmp42476;
var inst_42342__$1 = tmp42477;
var inst_42343__$1 = tmp42478;
var inst_42344__$1 = inst_42360;
var state_42464__$1 = (function (){var statearr_42483 = state_42464;
(statearr_42483[(13)] = inst_42341__$1);

(statearr_42483[(14)] = inst_42342__$1);

(statearr_42483[(18)] = inst_42359);

(statearr_42483[(16)] = inst_42343__$1);

(statearr_42483[(17)] = inst_42344__$1);

return statearr_42483;
})();
var statearr_42484_42560 = state_42464__$1;
(statearr_42484_42560[(2)] = null);

(statearr_42484_42560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (21))){
var inst_42386 = (state_42464[(2)]);
var state_42464__$1 = state_42464;
var statearr_42488_42561 = state_42464__$1;
(statearr_42488_42561[(2)] = inst_42386);

(statearr_42488_42561[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (31))){
var inst_42412 = (state_42464[(11)]);
var inst_42416 = done.call(null,null);
var inst_42417 = cljs.core.async.untap_STAR_.call(null,m,inst_42412);
var state_42464__$1 = (function (){var statearr_42489 = state_42464;
(statearr_42489[(19)] = inst_42416);

return statearr_42489;
})();
var statearr_42490_42562 = state_42464__$1;
(statearr_42490_42562[(2)] = inst_42417);

(statearr_42490_42562[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (32))){
var inst_42405 = (state_42464[(9)]);
var inst_42406 = (state_42464[(20)]);
var inst_42404 = (state_42464[(21)]);
var inst_42407 = (state_42464[(12)]);
var inst_42419 = (state_42464[(2)]);
var inst_42420 = (inst_42407 + (1));
var tmp42485 = inst_42405;
var tmp42486 = inst_42406;
var tmp42487 = inst_42404;
var inst_42404__$1 = tmp42487;
var inst_42405__$1 = tmp42485;
var inst_42406__$1 = tmp42486;
var inst_42407__$1 = inst_42420;
var state_42464__$1 = (function (){var statearr_42491 = state_42464;
(statearr_42491[(9)] = inst_42405__$1);

(statearr_42491[(22)] = inst_42419);

(statearr_42491[(20)] = inst_42406__$1);

(statearr_42491[(21)] = inst_42404__$1);

(statearr_42491[(12)] = inst_42407__$1);

return statearr_42491;
})();
var statearr_42492_42563 = state_42464__$1;
(statearr_42492_42563[(2)] = null);

(statearr_42492_42563[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (40))){
var inst_42432 = (state_42464[(23)]);
var inst_42436 = done.call(null,null);
var inst_42437 = cljs.core.async.untap_STAR_.call(null,m,inst_42432);
var state_42464__$1 = (function (){var statearr_42493 = state_42464;
(statearr_42493[(24)] = inst_42436);

return statearr_42493;
})();
var statearr_42494_42564 = state_42464__$1;
(statearr_42494_42564[(2)] = inst_42437);

(statearr_42494_42564[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (33))){
var inst_42423 = (state_42464[(25)]);
var inst_42425 = cljs.core.chunked_seq_QMARK_.call(null,inst_42423);
var state_42464__$1 = state_42464;
if(inst_42425){
var statearr_42495_42565 = state_42464__$1;
(statearr_42495_42565[(1)] = (36));

} else {
var statearr_42496_42566 = state_42464__$1;
(statearr_42496_42566[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (13))){
var inst_42353 = (state_42464[(26)]);
var inst_42356 = cljs.core.async.close_BANG_.call(null,inst_42353);
var state_42464__$1 = state_42464;
var statearr_42497_42567 = state_42464__$1;
(statearr_42497_42567[(2)] = inst_42356);

(statearr_42497_42567[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (22))){
var inst_42376 = (state_42464[(8)]);
var inst_42379 = cljs.core.async.close_BANG_.call(null,inst_42376);
var state_42464__$1 = state_42464;
var statearr_42498_42568 = state_42464__$1;
(statearr_42498_42568[(2)] = inst_42379);

(statearr_42498_42568[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (36))){
var inst_42423 = (state_42464[(25)]);
var inst_42427 = cljs.core.chunk_first.call(null,inst_42423);
var inst_42428 = cljs.core.chunk_rest.call(null,inst_42423);
var inst_42429 = cljs.core.count.call(null,inst_42427);
var inst_42404 = inst_42428;
var inst_42405 = inst_42427;
var inst_42406 = inst_42429;
var inst_42407 = (0);
var state_42464__$1 = (function (){var statearr_42499 = state_42464;
(statearr_42499[(9)] = inst_42405);

(statearr_42499[(20)] = inst_42406);

(statearr_42499[(21)] = inst_42404);

(statearr_42499[(12)] = inst_42407);

return statearr_42499;
})();
var statearr_42500_42569 = state_42464__$1;
(statearr_42500_42569[(2)] = null);

(statearr_42500_42569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (41))){
var inst_42423 = (state_42464[(25)]);
var inst_42439 = (state_42464[(2)]);
var inst_42440 = cljs.core.next.call(null,inst_42423);
var inst_42404 = inst_42440;
var inst_42405 = null;
var inst_42406 = (0);
var inst_42407 = (0);
var state_42464__$1 = (function (){var statearr_42501 = state_42464;
(statearr_42501[(9)] = inst_42405);

(statearr_42501[(27)] = inst_42439);

(statearr_42501[(20)] = inst_42406);

(statearr_42501[(21)] = inst_42404);

(statearr_42501[(12)] = inst_42407);

return statearr_42501;
})();
var statearr_42502_42570 = state_42464__$1;
(statearr_42502_42570[(2)] = null);

(statearr_42502_42570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (43))){
var state_42464__$1 = state_42464;
var statearr_42503_42571 = state_42464__$1;
(statearr_42503_42571[(2)] = null);

(statearr_42503_42571[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (29))){
var inst_42448 = (state_42464[(2)]);
var state_42464__$1 = state_42464;
var statearr_42504_42572 = state_42464__$1;
(statearr_42504_42572[(2)] = inst_42448);

(statearr_42504_42572[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (44))){
var inst_42457 = (state_42464[(2)]);
var state_42464__$1 = (function (){var statearr_42505 = state_42464;
(statearr_42505[(28)] = inst_42457);

return statearr_42505;
})();
var statearr_42506_42573 = state_42464__$1;
(statearr_42506_42573[(2)] = null);

(statearr_42506_42573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (6))){
var inst_42396 = (state_42464[(29)]);
var inst_42395 = cljs.core.deref.call(null,cs);
var inst_42396__$1 = cljs.core.keys.call(null,inst_42395);
var inst_42397 = cljs.core.count.call(null,inst_42396__$1);
var inst_42398 = cljs.core.reset_BANG_.call(null,dctr,inst_42397);
var inst_42403 = cljs.core.seq.call(null,inst_42396__$1);
var inst_42404 = inst_42403;
var inst_42405 = null;
var inst_42406 = (0);
var inst_42407 = (0);
var state_42464__$1 = (function (){var statearr_42507 = state_42464;
(statearr_42507[(9)] = inst_42405);

(statearr_42507[(20)] = inst_42406);

(statearr_42507[(29)] = inst_42396__$1);

(statearr_42507[(21)] = inst_42404);

(statearr_42507[(30)] = inst_42398);

(statearr_42507[(12)] = inst_42407);

return statearr_42507;
})();
var statearr_42508_42574 = state_42464__$1;
(statearr_42508_42574[(2)] = null);

(statearr_42508_42574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (28))){
var inst_42404 = (state_42464[(21)]);
var inst_42423 = (state_42464[(25)]);
var inst_42423__$1 = cljs.core.seq.call(null,inst_42404);
var state_42464__$1 = (function (){var statearr_42509 = state_42464;
(statearr_42509[(25)] = inst_42423__$1);

return statearr_42509;
})();
if(inst_42423__$1){
var statearr_42510_42575 = state_42464__$1;
(statearr_42510_42575[(1)] = (33));

} else {
var statearr_42511_42576 = state_42464__$1;
(statearr_42511_42576[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (25))){
var inst_42406 = (state_42464[(20)]);
var inst_42407 = (state_42464[(12)]);
var inst_42409 = (inst_42407 < inst_42406);
var inst_42410 = inst_42409;
var state_42464__$1 = state_42464;
if(cljs.core.truth_(inst_42410)){
var statearr_42512_42577 = state_42464__$1;
(statearr_42512_42577[(1)] = (27));

} else {
var statearr_42513_42578 = state_42464__$1;
(statearr_42513_42578[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (34))){
var state_42464__$1 = state_42464;
var statearr_42514_42579 = state_42464__$1;
(statearr_42514_42579[(2)] = null);

(statearr_42514_42579[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (17))){
var state_42464__$1 = state_42464;
var statearr_42515_42580 = state_42464__$1;
(statearr_42515_42580[(2)] = null);

(statearr_42515_42580[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (3))){
var inst_42462 = (state_42464[(2)]);
var state_42464__$1 = state_42464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42464__$1,inst_42462);
} else {
if((state_val_42465 === (12))){
var inst_42391 = (state_42464[(2)]);
var state_42464__$1 = state_42464;
var statearr_42516_42581 = state_42464__$1;
(statearr_42516_42581[(2)] = inst_42391);

(statearr_42516_42581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (2))){
var state_42464__$1 = state_42464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42464__$1,(4),ch);
} else {
if((state_val_42465 === (23))){
var state_42464__$1 = state_42464;
var statearr_42517_42582 = state_42464__$1;
(statearr_42517_42582[(2)] = null);

(statearr_42517_42582[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (35))){
var inst_42446 = (state_42464[(2)]);
var state_42464__$1 = state_42464;
var statearr_42518_42583 = state_42464__$1;
(statearr_42518_42583[(2)] = inst_42446);

(statearr_42518_42583[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (19))){
var inst_42363 = (state_42464[(7)]);
var inst_42367 = cljs.core.chunk_first.call(null,inst_42363);
var inst_42368 = cljs.core.chunk_rest.call(null,inst_42363);
var inst_42369 = cljs.core.count.call(null,inst_42367);
var inst_42341 = inst_42368;
var inst_42342 = inst_42367;
var inst_42343 = inst_42369;
var inst_42344 = (0);
var state_42464__$1 = (function (){var statearr_42519 = state_42464;
(statearr_42519[(13)] = inst_42341);

(statearr_42519[(14)] = inst_42342);

(statearr_42519[(16)] = inst_42343);

(statearr_42519[(17)] = inst_42344);

return statearr_42519;
})();
var statearr_42520_42584 = state_42464__$1;
(statearr_42520_42584[(2)] = null);

(statearr_42520_42584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (11))){
var inst_42341 = (state_42464[(13)]);
var inst_42363 = (state_42464[(7)]);
var inst_42363__$1 = cljs.core.seq.call(null,inst_42341);
var state_42464__$1 = (function (){var statearr_42521 = state_42464;
(statearr_42521[(7)] = inst_42363__$1);

return statearr_42521;
})();
if(inst_42363__$1){
var statearr_42522_42585 = state_42464__$1;
(statearr_42522_42585[(1)] = (16));

} else {
var statearr_42523_42586 = state_42464__$1;
(statearr_42523_42586[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (9))){
var inst_42393 = (state_42464[(2)]);
var state_42464__$1 = state_42464;
var statearr_42524_42587 = state_42464__$1;
(statearr_42524_42587[(2)] = inst_42393);

(statearr_42524_42587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (5))){
var inst_42339 = cljs.core.deref.call(null,cs);
var inst_42340 = cljs.core.seq.call(null,inst_42339);
var inst_42341 = inst_42340;
var inst_42342 = null;
var inst_42343 = (0);
var inst_42344 = (0);
var state_42464__$1 = (function (){var statearr_42525 = state_42464;
(statearr_42525[(13)] = inst_42341);

(statearr_42525[(14)] = inst_42342);

(statearr_42525[(16)] = inst_42343);

(statearr_42525[(17)] = inst_42344);

return statearr_42525;
})();
var statearr_42526_42588 = state_42464__$1;
(statearr_42526_42588[(2)] = null);

(statearr_42526_42588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (14))){
var state_42464__$1 = state_42464;
var statearr_42527_42589 = state_42464__$1;
(statearr_42527_42589[(2)] = null);

(statearr_42527_42589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (45))){
var inst_42454 = (state_42464[(2)]);
var state_42464__$1 = state_42464;
var statearr_42528_42590 = state_42464__$1;
(statearr_42528_42590[(2)] = inst_42454);

(statearr_42528_42590[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (26))){
var inst_42396 = (state_42464[(29)]);
var inst_42450 = (state_42464[(2)]);
var inst_42451 = cljs.core.seq.call(null,inst_42396);
var state_42464__$1 = (function (){var statearr_42529 = state_42464;
(statearr_42529[(31)] = inst_42450);

return statearr_42529;
})();
if(inst_42451){
var statearr_42530_42591 = state_42464__$1;
(statearr_42530_42591[(1)] = (42));

} else {
var statearr_42531_42592 = state_42464__$1;
(statearr_42531_42592[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (16))){
var inst_42363 = (state_42464[(7)]);
var inst_42365 = cljs.core.chunked_seq_QMARK_.call(null,inst_42363);
var state_42464__$1 = state_42464;
if(inst_42365){
var statearr_42532_42593 = state_42464__$1;
(statearr_42532_42593[(1)] = (19));

} else {
var statearr_42533_42594 = state_42464__$1;
(statearr_42533_42594[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (38))){
var inst_42443 = (state_42464[(2)]);
var state_42464__$1 = state_42464;
var statearr_42534_42595 = state_42464__$1;
(statearr_42534_42595[(2)] = inst_42443);

(statearr_42534_42595[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (30))){
var state_42464__$1 = state_42464;
var statearr_42535_42596 = state_42464__$1;
(statearr_42535_42596[(2)] = null);

(statearr_42535_42596[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (10))){
var inst_42342 = (state_42464[(14)]);
var inst_42344 = (state_42464[(17)]);
var inst_42352 = cljs.core._nth.call(null,inst_42342,inst_42344);
var inst_42353 = cljs.core.nth.call(null,inst_42352,(0),null);
var inst_42354 = cljs.core.nth.call(null,inst_42352,(1),null);
var state_42464__$1 = (function (){var statearr_42536 = state_42464;
(statearr_42536[(26)] = inst_42353);

return statearr_42536;
})();
if(cljs.core.truth_(inst_42354)){
var statearr_42537_42597 = state_42464__$1;
(statearr_42537_42597[(1)] = (13));

} else {
var statearr_42538_42598 = state_42464__$1;
(statearr_42538_42598[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (18))){
var inst_42389 = (state_42464[(2)]);
var state_42464__$1 = state_42464;
var statearr_42539_42599 = state_42464__$1;
(statearr_42539_42599[(2)] = inst_42389);

(statearr_42539_42599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (42))){
var state_42464__$1 = state_42464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42464__$1,(45),dchan);
} else {
if((state_val_42465 === (37))){
var inst_42332 = (state_42464[(10)]);
var inst_42432 = (state_42464[(23)]);
var inst_42423 = (state_42464[(25)]);
var inst_42432__$1 = cljs.core.first.call(null,inst_42423);
var inst_42433 = cljs.core.async.put_BANG_.call(null,inst_42432__$1,inst_42332,done);
var state_42464__$1 = (function (){var statearr_42540 = state_42464;
(statearr_42540[(23)] = inst_42432__$1);

return statearr_42540;
})();
if(cljs.core.truth_(inst_42433)){
var statearr_42541_42600 = state_42464__$1;
(statearr_42541_42600[(1)] = (39));

} else {
var statearr_42542_42601 = state_42464__$1;
(statearr_42542_42601[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42465 === (8))){
var inst_42343 = (state_42464[(16)]);
var inst_42344 = (state_42464[(17)]);
var inst_42346 = (inst_42344 < inst_42343);
var inst_42347 = inst_42346;
var state_42464__$1 = state_42464;
if(cljs.core.truth_(inst_42347)){
var statearr_42543_42602 = state_42464__$1;
(statearr_42543_42602[(1)] = (10));

} else {
var statearr_42544_42603 = state_42464__$1;
(statearr_42544_42603[(1)] = (11));

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
});})(c__33589__auto___42549,cs,m,dchan,dctr,done))
;
return ((function (switch__33501__auto__,c__33589__auto___42549,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33502__auto__ = null;
var cljs$core$async$mult_$_state_machine__33502__auto____0 = (function (){
var statearr_42545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42545[(0)] = cljs$core$async$mult_$_state_machine__33502__auto__);

(statearr_42545[(1)] = (1));

return statearr_42545;
});
var cljs$core$async$mult_$_state_machine__33502__auto____1 = (function (state_42464){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_42464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e42546){if((e42546 instanceof Object)){
var ex__33505__auto__ = e42546;
var statearr_42547_42604 = state_42464;
(statearr_42547_42604[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42605 = state_42464;
state_42464 = G__42605;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33502__auto__ = function(state_42464){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33502__auto____1.call(this,state_42464);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33502__auto____0;
cljs$core$async$mult_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33502__auto____1;
return cljs$core$async$mult_$_state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___42549,cs,m,dchan,dctr,done))
})();
var state__33591__auto__ = (function (){var statearr_42548 = f__33590__auto__.call(null);
(statearr_42548[(6)] = c__33589__auto___42549);

return statearr_42548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___42549,cs,m,dchan,dctr,done))
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
var G__42607 = arguments.length;
switch (G__42607) {
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
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch);
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
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch);
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
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m);
} else {
var m__28970__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m);
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
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,state_map);
} else {
var m__28970__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,state_map);
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
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,mode);
} else {
var m__28970__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29462__auto__ = [];
var len__29455__auto___42619 = arguments.length;
var i__29456__auto___42620 = (0);
while(true){
if((i__29456__auto___42620 < len__29455__auto___42619)){
args__29462__auto__.push((arguments[i__29456__auto___42620]));

var G__42621 = (i__29456__auto___42620 + (1));
i__29456__auto___42620 = G__42621;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((3) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29463__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42613){
var map__42614 = p__42613;
var map__42614__$1 = ((((!((map__42614 == null)))?((((map__42614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42614):map__42614);
var opts = map__42614__$1;
var statearr_42616_42622 = state;
(statearr_42616_42622[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__42614,map__42614__$1,opts){
return (function (val){
var statearr_42617_42623 = state;
(statearr_42617_42623[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42614,map__42614__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_42618_42624 = state;
(statearr_42618_42624[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42609){
var G__42610 = cljs.core.first.call(null,seq42609);
var seq42609__$1 = cljs.core.next.call(null,seq42609);
var G__42611 = cljs.core.first.call(null,seq42609__$1);
var seq42609__$2 = cljs.core.next.call(null,seq42609__$1);
var G__42612 = cljs.core.first.call(null,seq42609__$2);
var seq42609__$3 = cljs.core.next.call(null,seq42609__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42610,G__42611,G__42612,seq42609__$3);
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
if(typeof cljs.core.async.t_cljs$core$async42625 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42625 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta42626){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta42626 = meta42626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42627,meta42626__$1){
var self__ = this;
var _42627__$1 = this;
return (new cljs.core.async.t_cljs$core$async42625(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta42626__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42627){
var self__ = this;
var _42627__$1 = this;
return self__.meta42626;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42625.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42625.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42625.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42625.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42625.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42625.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42625.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42625.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async42625.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta42626","meta42626",799172731,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42625.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42625";

cljs.core.async.t_cljs$core$async42625.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async42625");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42625 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42625(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42626){
return (new cljs.core.async.t_cljs$core$async42625(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42626));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42625(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33589__auto___42789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___42789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___42789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42729){
var state_val_42730 = (state_42729[(1)]);
if((state_val_42730 === (7))){
var inst_42644 = (state_42729[(2)]);
var state_42729__$1 = state_42729;
var statearr_42731_42790 = state_42729__$1;
(statearr_42731_42790[(2)] = inst_42644);

(statearr_42731_42790[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (20))){
var inst_42656 = (state_42729[(7)]);
var state_42729__$1 = state_42729;
var statearr_42732_42791 = state_42729__$1;
(statearr_42732_42791[(2)] = inst_42656);

(statearr_42732_42791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (27))){
var state_42729__$1 = state_42729;
var statearr_42733_42792 = state_42729__$1;
(statearr_42733_42792[(2)] = null);

(statearr_42733_42792[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (1))){
var inst_42631 = (state_42729[(8)]);
var inst_42631__$1 = calc_state.call(null);
var inst_42633 = (inst_42631__$1 == null);
var inst_42634 = cljs.core.not.call(null,inst_42633);
var state_42729__$1 = (function (){var statearr_42734 = state_42729;
(statearr_42734[(8)] = inst_42631__$1);

return statearr_42734;
})();
if(inst_42634){
var statearr_42735_42793 = state_42729__$1;
(statearr_42735_42793[(1)] = (2));

} else {
var statearr_42736_42794 = state_42729__$1;
(statearr_42736_42794[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (24))){
var inst_42680 = (state_42729[(9)]);
var inst_42703 = (state_42729[(10)]);
var inst_42689 = (state_42729[(11)]);
var inst_42703__$1 = inst_42680.call(null,inst_42689);
var state_42729__$1 = (function (){var statearr_42737 = state_42729;
(statearr_42737[(10)] = inst_42703__$1);

return statearr_42737;
})();
if(cljs.core.truth_(inst_42703__$1)){
var statearr_42738_42795 = state_42729__$1;
(statearr_42738_42795[(1)] = (29));

} else {
var statearr_42739_42796 = state_42729__$1;
(statearr_42739_42796[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (4))){
var inst_42647 = (state_42729[(2)]);
var state_42729__$1 = state_42729;
if(cljs.core.truth_(inst_42647)){
var statearr_42740_42797 = state_42729__$1;
(statearr_42740_42797[(1)] = (8));

} else {
var statearr_42741_42798 = state_42729__$1;
(statearr_42741_42798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (15))){
var inst_42674 = (state_42729[(2)]);
var state_42729__$1 = state_42729;
if(cljs.core.truth_(inst_42674)){
var statearr_42742_42799 = state_42729__$1;
(statearr_42742_42799[(1)] = (19));

} else {
var statearr_42743_42800 = state_42729__$1;
(statearr_42743_42800[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (21))){
var inst_42679 = (state_42729[(12)]);
var inst_42679__$1 = (state_42729[(2)]);
var inst_42680 = cljs.core.get.call(null,inst_42679__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42681 = cljs.core.get.call(null,inst_42679__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42682 = cljs.core.get.call(null,inst_42679__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42729__$1 = (function (){var statearr_42744 = state_42729;
(statearr_42744[(9)] = inst_42680);

(statearr_42744[(12)] = inst_42679__$1);

(statearr_42744[(13)] = inst_42681);

return statearr_42744;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42729__$1,(22),inst_42682);
} else {
if((state_val_42730 === (31))){
var inst_42711 = (state_42729[(2)]);
var state_42729__$1 = state_42729;
if(cljs.core.truth_(inst_42711)){
var statearr_42745_42801 = state_42729__$1;
(statearr_42745_42801[(1)] = (32));

} else {
var statearr_42746_42802 = state_42729__$1;
(statearr_42746_42802[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (32))){
var inst_42688 = (state_42729[(14)]);
var state_42729__$1 = state_42729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42729__$1,(35),out,inst_42688);
} else {
if((state_val_42730 === (33))){
var inst_42679 = (state_42729[(12)]);
var inst_42656 = inst_42679;
var state_42729__$1 = (function (){var statearr_42747 = state_42729;
(statearr_42747[(7)] = inst_42656);

return statearr_42747;
})();
var statearr_42748_42803 = state_42729__$1;
(statearr_42748_42803[(2)] = null);

(statearr_42748_42803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (13))){
var inst_42656 = (state_42729[(7)]);
var inst_42663 = inst_42656.cljs$lang$protocol_mask$partition0$;
var inst_42664 = (inst_42663 & (64));
var inst_42665 = inst_42656.cljs$core$ISeq$;
var inst_42666 = (cljs.core.PROTOCOL_SENTINEL === inst_42665);
var inst_42667 = (inst_42664) || (inst_42666);
var state_42729__$1 = state_42729;
if(cljs.core.truth_(inst_42667)){
var statearr_42749_42804 = state_42729__$1;
(statearr_42749_42804[(1)] = (16));

} else {
var statearr_42750_42805 = state_42729__$1;
(statearr_42750_42805[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (22))){
var inst_42689 = (state_42729[(11)]);
var inst_42688 = (state_42729[(14)]);
var inst_42687 = (state_42729[(2)]);
var inst_42688__$1 = cljs.core.nth.call(null,inst_42687,(0),null);
var inst_42689__$1 = cljs.core.nth.call(null,inst_42687,(1),null);
var inst_42690 = (inst_42688__$1 == null);
var inst_42691 = cljs.core._EQ_.call(null,inst_42689__$1,change);
var inst_42692 = (inst_42690) || (inst_42691);
var state_42729__$1 = (function (){var statearr_42751 = state_42729;
(statearr_42751[(11)] = inst_42689__$1);

(statearr_42751[(14)] = inst_42688__$1);

return statearr_42751;
})();
if(cljs.core.truth_(inst_42692)){
var statearr_42752_42806 = state_42729__$1;
(statearr_42752_42806[(1)] = (23));

} else {
var statearr_42753_42807 = state_42729__$1;
(statearr_42753_42807[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (36))){
var inst_42679 = (state_42729[(12)]);
var inst_42656 = inst_42679;
var state_42729__$1 = (function (){var statearr_42754 = state_42729;
(statearr_42754[(7)] = inst_42656);

return statearr_42754;
})();
var statearr_42755_42808 = state_42729__$1;
(statearr_42755_42808[(2)] = null);

(statearr_42755_42808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (29))){
var inst_42703 = (state_42729[(10)]);
var state_42729__$1 = state_42729;
var statearr_42756_42809 = state_42729__$1;
(statearr_42756_42809[(2)] = inst_42703);

(statearr_42756_42809[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (6))){
var state_42729__$1 = state_42729;
var statearr_42757_42810 = state_42729__$1;
(statearr_42757_42810[(2)] = false);

(statearr_42757_42810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (28))){
var inst_42699 = (state_42729[(2)]);
var inst_42700 = calc_state.call(null);
var inst_42656 = inst_42700;
var state_42729__$1 = (function (){var statearr_42758 = state_42729;
(statearr_42758[(7)] = inst_42656);

(statearr_42758[(15)] = inst_42699);

return statearr_42758;
})();
var statearr_42759_42811 = state_42729__$1;
(statearr_42759_42811[(2)] = null);

(statearr_42759_42811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (25))){
var inst_42725 = (state_42729[(2)]);
var state_42729__$1 = state_42729;
var statearr_42760_42812 = state_42729__$1;
(statearr_42760_42812[(2)] = inst_42725);

(statearr_42760_42812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (34))){
var inst_42723 = (state_42729[(2)]);
var state_42729__$1 = state_42729;
var statearr_42761_42813 = state_42729__$1;
(statearr_42761_42813[(2)] = inst_42723);

(statearr_42761_42813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (17))){
var state_42729__$1 = state_42729;
var statearr_42762_42814 = state_42729__$1;
(statearr_42762_42814[(2)] = false);

(statearr_42762_42814[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (3))){
var state_42729__$1 = state_42729;
var statearr_42763_42815 = state_42729__$1;
(statearr_42763_42815[(2)] = false);

(statearr_42763_42815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (12))){
var inst_42727 = (state_42729[(2)]);
var state_42729__$1 = state_42729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42729__$1,inst_42727);
} else {
if((state_val_42730 === (2))){
var inst_42631 = (state_42729[(8)]);
var inst_42636 = inst_42631.cljs$lang$protocol_mask$partition0$;
var inst_42637 = (inst_42636 & (64));
var inst_42638 = inst_42631.cljs$core$ISeq$;
var inst_42639 = (cljs.core.PROTOCOL_SENTINEL === inst_42638);
var inst_42640 = (inst_42637) || (inst_42639);
var state_42729__$1 = state_42729;
if(cljs.core.truth_(inst_42640)){
var statearr_42764_42816 = state_42729__$1;
(statearr_42764_42816[(1)] = (5));

} else {
var statearr_42765_42817 = state_42729__$1;
(statearr_42765_42817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (23))){
var inst_42688 = (state_42729[(14)]);
var inst_42694 = (inst_42688 == null);
var state_42729__$1 = state_42729;
if(cljs.core.truth_(inst_42694)){
var statearr_42766_42818 = state_42729__$1;
(statearr_42766_42818[(1)] = (26));

} else {
var statearr_42767_42819 = state_42729__$1;
(statearr_42767_42819[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (35))){
var inst_42714 = (state_42729[(2)]);
var state_42729__$1 = state_42729;
if(cljs.core.truth_(inst_42714)){
var statearr_42768_42820 = state_42729__$1;
(statearr_42768_42820[(1)] = (36));

} else {
var statearr_42769_42821 = state_42729__$1;
(statearr_42769_42821[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (19))){
var inst_42656 = (state_42729[(7)]);
var inst_42676 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42656);
var state_42729__$1 = state_42729;
var statearr_42770_42822 = state_42729__$1;
(statearr_42770_42822[(2)] = inst_42676);

(statearr_42770_42822[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (11))){
var inst_42656 = (state_42729[(7)]);
var inst_42660 = (inst_42656 == null);
var inst_42661 = cljs.core.not.call(null,inst_42660);
var state_42729__$1 = state_42729;
if(inst_42661){
var statearr_42771_42823 = state_42729__$1;
(statearr_42771_42823[(1)] = (13));

} else {
var statearr_42772_42824 = state_42729__$1;
(statearr_42772_42824[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (9))){
var inst_42631 = (state_42729[(8)]);
var state_42729__$1 = state_42729;
var statearr_42773_42825 = state_42729__$1;
(statearr_42773_42825[(2)] = inst_42631);

(statearr_42773_42825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (5))){
var state_42729__$1 = state_42729;
var statearr_42774_42826 = state_42729__$1;
(statearr_42774_42826[(2)] = true);

(statearr_42774_42826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (14))){
var state_42729__$1 = state_42729;
var statearr_42775_42827 = state_42729__$1;
(statearr_42775_42827[(2)] = false);

(statearr_42775_42827[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (26))){
var inst_42689 = (state_42729[(11)]);
var inst_42696 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42689);
var state_42729__$1 = state_42729;
var statearr_42776_42828 = state_42729__$1;
(statearr_42776_42828[(2)] = inst_42696);

(statearr_42776_42828[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (16))){
var state_42729__$1 = state_42729;
var statearr_42777_42829 = state_42729__$1;
(statearr_42777_42829[(2)] = true);

(statearr_42777_42829[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (38))){
var inst_42719 = (state_42729[(2)]);
var state_42729__$1 = state_42729;
var statearr_42778_42830 = state_42729__$1;
(statearr_42778_42830[(2)] = inst_42719);

(statearr_42778_42830[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (30))){
var inst_42680 = (state_42729[(9)]);
var inst_42681 = (state_42729[(13)]);
var inst_42689 = (state_42729[(11)]);
var inst_42706 = cljs.core.empty_QMARK_.call(null,inst_42680);
var inst_42707 = inst_42681.call(null,inst_42689);
var inst_42708 = cljs.core.not.call(null,inst_42707);
var inst_42709 = (inst_42706) && (inst_42708);
var state_42729__$1 = state_42729;
var statearr_42779_42831 = state_42729__$1;
(statearr_42779_42831[(2)] = inst_42709);

(statearr_42779_42831[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (10))){
var inst_42631 = (state_42729[(8)]);
var inst_42652 = (state_42729[(2)]);
var inst_42653 = cljs.core.get.call(null,inst_42652,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42654 = cljs.core.get.call(null,inst_42652,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42655 = cljs.core.get.call(null,inst_42652,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42656 = inst_42631;
var state_42729__$1 = (function (){var statearr_42780 = state_42729;
(statearr_42780[(7)] = inst_42656);

(statearr_42780[(16)] = inst_42654);

(statearr_42780[(17)] = inst_42655);

(statearr_42780[(18)] = inst_42653);

return statearr_42780;
})();
var statearr_42781_42832 = state_42729__$1;
(statearr_42781_42832[(2)] = null);

(statearr_42781_42832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (18))){
var inst_42671 = (state_42729[(2)]);
var state_42729__$1 = state_42729;
var statearr_42782_42833 = state_42729__$1;
(statearr_42782_42833[(2)] = inst_42671);

(statearr_42782_42833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (37))){
var state_42729__$1 = state_42729;
var statearr_42783_42834 = state_42729__$1;
(statearr_42783_42834[(2)] = null);

(statearr_42783_42834[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42730 === (8))){
var inst_42631 = (state_42729[(8)]);
var inst_42649 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42631);
var state_42729__$1 = state_42729;
var statearr_42784_42835 = state_42729__$1;
(statearr_42784_42835[(2)] = inst_42649);

(statearr_42784_42835[(1)] = (10));


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
});})(c__33589__auto___42789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33501__auto__,c__33589__auto___42789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33502__auto__ = null;
var cljs$core$async$mix_$_state_machine__33502__auto____0 = (function (){
var statearr_42785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42785[(0)] = cljs$core$async$mix_$_state_machine__33502__auto__);

(statearr_42785[(1)] = (1));

return statearr_42785;
});
var cljs$core$async$mix_$_state_machine__33502__auto____1 = (function (state_42729){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_42729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e42786){if((e42786 instanceof Object)){
var ex__33505__auto__ = e42786;
var statearr_42787_42836 = state_42729;
(statearr_42787_42836[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42837 = state_42729;
state_42729 = G__42837;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33502__auto__ = function(state_42729){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33502__auto____1.call(this,state_42729);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33502__auto____0;
cljs$core$async$mix_$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33502__auto____1;
return cljs$core$async$mix_$_state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___42789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33591__auto__ = (function (){var statearr_42788 = f__33590__auto__.call(null);
(statearr_42788[(6)] = c__33589__auto___42789);

return statearr_42788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___42789,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28970__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p,v,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__42839 = arguments.length;
switch (G__42839) {
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
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p);
} else {
var m__28970__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p);
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
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p,v);
} else {
var m__28970__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p,v);
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
var G__42843 = arguments.length;
switch (G__42843) {
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
var or__28286__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28286__auto__,mults){
return (function (p1__42841_SHARP_){
if(cljs.core.truth_(p1__42841_SHARP_.call(null,topic))){
return p1__42841_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42841_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28286__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42844 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42844 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42845){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42845 = meta42845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42846,meta42845__$1){
var self__ = this;
var _42846__$1 = this;
return (new cljs.core.async.t_cljs$core$async42844(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42845__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42846){
var self__ = this;
var _42846__$1 = this;
return self__.meta42845;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42844.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42844.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42844.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42844.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42844.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async42844.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42844.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42844.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42845","meta42845",-848547970,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42844.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42844";

cljs.core.async.t_cljs$core$async42844.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async42844");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42844 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42844(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42845){
return (new cljs.core.async.t_cljs$core$async42844(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42845));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42844(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33589__auto___42964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___42964,mults,ensure_mult,p){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___42964,mults,ensure_mult,p){
return (function (state_42918){
var state_val_42919 = (state_42918[(1)]);
if((state_val_42919 === (7))){
var inst_42914 = (state_42918[(2)]);
var state_42918__$1 = state_42918;
var statearr_42920_42965 = state_42918__$1;
(statearr_42920_42965[(2)] = inst_42914);

(statearr_42920_42965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (20))){
var state_42918__$1 = state_42918;
var statearr_42921_42966 = state_42918__$1;
(statearr_42921_42966[(2)] = null);

(statearr_42921_42966[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (1))){
var state_42918__$1 = state_42918;
var statearr_42922_42967 = state_42918__$1;
(statearr_42922_42967[(2)] = null);

(statearr_42922_42967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (24))){
var inst_42897 = (state_42918[(7)]);
var inst_42906 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42897);
var state_42918__$1 = state_42918;
var statearr_42923_42968 = state_42918__$1;
(statearr_42923_42968[(2)] = inst_42906);

(statearr_42923_42968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (4))){
var inst_42849 = (state_42918[(8)]);
var inst_42849__$1 = (state_42918[(2)]);
var inst_42850 = (inst_42849__$1 == null);
var state_42918__$1 = (function (){var statearr_42924 = state_42918;
(statearr_42924[(8)] = inst_42849__$1);

return statearr_42924;
})();
if(cljs.core.truth_(inst_42850)){
var statearr_42925_42969 = state_42918__$1;
(statearr_42925_42969[(1)] = (5));

} else {
var statearr_42926_42970 = state_42918__$1;
(statearr_42926_42970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (15))){
var inst_42891 = (state_42918[(2)]);
var state_42918__$1 = state_42918;
var statearr_42927_42971 = state_42918__$1;
(statearr_42927_42971[(2)] = inst_42891);

(statearr_42927_42971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (21))){
var inst_42911 = (state_42918[(2)]);
var state_42918__$1 = (function (){var statearr_42928 = state_42918;
(statearr_42928[(9)] = inst_42911);

return statearr_42928;
})();
var statearr_42929_42972 = state_42918__$1;
(statearr_42929_42972[(2)] = null);

(statearr_42929_42972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (13))){
var inst_42873 = (state_42918[(10)]);
var inst_42875 = cljs.core.chunked_seq_QMARK_.call(null,inst_42873);
var state_42918__$1 = state_42918;
if(inst_42875){
var statearr_42930_42973 = state_42918__$1;
(statearr_42930_42973[(1)] = (16));

} else {
var statearr_42931_42974 = state_42918__$1;
(statearr_42931_42974[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (22))){
var inst_42903 = (state_42918[(2)]);
var state_42918__$1 = state_42918;
if(cljs.core.truth_(inst_42903)){
var statearr_42932_42975 = state_42918__$1;
(statearr_42932_42975[(1)] = (23));

} else {
var statearr_42933_42976 = state_42918__$1;
(statearr_42933_42976[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (6))){
var inst_42899 = (state_42918[(11)]);
var inst_42849 = (state_42918[(8)]);
var inst_42897 = (state_42918[(7)]);
var inst_42897__$1 = topic_fn.call(null,inst_42849);
var inst_42898 = cljs.core.deref.call(null,mults);
var inst_42899__$1 = cljs.core.get.call(null,inst_42898,inst_42897__$1);
var state_42918__$1 = (function (){var statearr_42934 = state_42918;
(statearr_42934[(11)] = inst_42899__$1);

(statearr_42934[(7)] = inst_42897__$1);

return statearr_42934;
})();
if(cljs.core.truth_(inst_42899__$1)){
var statearr_42935_42977 = state_42918__$1;
(statearr_42935_42977[(1)] = (19));

} else {
var statearr_42936_42978 = state_42918__$1;
(statearr_42936_42978[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (25))){
var inst_42908 = (state_42918[(2)]);
var state_42918__$1 = state_42918;
var statearr_42937_42979 = state_42918__$1;
(statearr_42937_42979[(2)] = inst_42908);

(statearr_42937_42979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (17))){
var inst_42873 = (state_42918[(10)]);
var inst_42882 = cljs.core.first.call(null,inst_42873);
var inst_42883 = cljs.core.async.muxch_STAR_.call(null,inst_42882);
var inst_42884 = cljs.core.async.close_BANG_.call(null,inst_42883);
var inst_42885 = cljs.core.next.call(null,inst_42873);
var inst_42859 = inst_42885;
var inst_42860 = null;
var inst_42861 = (0);
var inst_42862 = (0);
var state_42918__$1 = (function (){var statearr_42938 = state_42918;
(statearr_42938[(12)] = inst_42860);

(statearr_42938[(13)] = inst_42884);

(statearr_42938[(14)] = inst_42859);

(statearr_42938[(15)] = inst_42861);

(statearr_42938[(16)] = inst_42862);

return statearr_42938;
})();
var statearr_42939_42980 = state_42918__$1;
(statearr_42939_42980[(2)] = null);

(statearr_42939_42980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (3))){
var inst_42916 = (state_42918[(2)]);
var state_42918__$1 = state_42918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42918__$1,inst_42916);
} else {
if((state_val_42919 === (12))){
var inst_42893 = (state_42918[(2)]);
var state_42918__$1 = state_42918;
var statearr_42940_42981 = state_42918__$1;
(statearr_42940_42981[(2)] = inst_42893);

(statearr_42940_42981[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (2))){
var state_42918__$1 = state_42918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42918__$1,(4),ch);
} else {
if((state_val_42919 === (23))){
var state_42918__$1 = state_42918;
var statearr_42941_42982 = state_42918__$1;
(statearr_42941_42982[(2)] = null);

(statearr_42941_42982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (19))){
var inst_42899 = (state_42918[(11)]);
var inst_42849 = (state_42918[(8)]);
var inst_42901 = cljs.core.async.muxch_STAR_.call(null,inst_42899);
var state_42918__$1 = state_42918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42918__$1,(22),inst_42901,inst_42849);
} else {
if((state_val_42919 === (11))){
var inst_42859 = (state_42918[(14)]);
var inst_42873 = (state_42918[(10)]);
var inst_42873__$1 = cljs.core.seq.call(null,inst_42859);
var state_42918__$1 = (function (){var statearr_42942 = state_42918;
(statearr_42942[(10)] = inst_42873__$1);

return statearr_42942;
})();
if(inst_42873__$1){
var statearr_42943_42983 = state_42918__$1;
(statearr_42943_42983[(1)] = (13));

} else {
var statearr_42944_42984 = state_42918__$1;
(statearr_42944_42984[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (9))){
var inst_42895 = (state_42918[(2)]);
var state_42918__$1 = state_42918;
var statearr_42945_42985 = state_42918__$1;
(statearr_42945_42985[(2)] = inst_42895);

(statearr_42945_42985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (5))){
var inst_42856 = cljs.core.deref.call(null,mults);
var inst_42857 = cljs.core.vals.call(null,inst_42856);
var inst_42858 = cljs.core.seq.call(null,inst_42857);
var inst_42859 = inst_42858;
var inst_42860 = null;
var inst_42861 = (0);
var inst_42862 = (0);
var state_42918__$1 = (function (){var statearr_42946 = state_42918;
(statearr_42946[(12)] = inst_42860);

(statearr_42946[(14)] = inst_42859);

(statearr_42946[(15)] = inst_42861);

(statearr_42946[(16)] = inst_42862);

return statearr_42946;
})();
var statearr_42947_42986 = state_42918__$1;
(statearr_42947_42986[(2)] = null);

(statearr_42947_42986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (14))){
var state_42918__$1 = state_42918;
var statearr_42951_42987 = state_42918__$1;
(statearr_42951_42987[(2)] = null);

(statearr_42951_42987[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (16))){
var inst_42873 = (state_42918[(10)]);
var inst_42877 = cljs.core.chunk_first.call(null,inst_42873);
var inst_42878 = cljs.core.chunk_rest.call(null,inst_42873);
var inst_42879 = cljs.core.count.call(null,inst_42877);
var inst_42859 = inst_42878;
var inst_42860 = inst_42877;
var inst_42861 = inst_42879;
var inst_42862 = (0);
var state_42918__$1 = (function (){var statearr_42952 = state_42918;
(statearr_42952[(12)] = inst_42860);

(statearr_42952[(14)] = inst_42859);

(statearr_42952[(15)] = inst_42861);

(statearr_42952[(16)] = inst_42862);

return statearr_42952;
})();
var statearr_42953_42988 = state_42918__$1;
(statearr_42953_42988[(2)] = null);

(statearr_42953_42988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (10))){
var inst_42860 = (state_42918[(12)]);
var inst_42859 = (state_42918[(14)]);
var inst_42861 = (state_42918[(15)]);
var inst_42862 = (state_42918[(16)]);
var inst_42867 = cljs.core._nth.call(null,inst_42860,inst_42862);
var inst_42868 = cljs.core.async.muxch_STAR_.call(null,inst_42867);
var inst_42869 = cljs.core.async.close_BANG_.call(null,inst_42868);
var inst_42870 = (inst_42862 + (1));
var tmp42948 = inst_42860;
var tmp42949 = inst_42859;
var tmp42950 = inst_42861;
var inst_42859__$1 = tmp42949;
var inst_42860__$1 = tmp42948;
var inst_42861__$1 = tmp42950;
var inst_42862__$1 = inst_42870;
var state_42918__$1 = (function (){var statearr_42954 = state_42918;
(statearr_42954[(12)] = inst_42860__$1);

(statearr_42954[(14)] = inst_42859__$1);

(statearr_42954[(15)] = inst_42861__$1);

(statearr_42954[(17)] = inst_42869);

(statearr_42954[(16)] = inst_42862__$1);

return statearr_42954;
})();
var statearr_42955_42989 = state_42918__$1;
(statearr_42955_42989[(2)] = null);

(statearr_42955_42989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (18))){
var inst_42888 = (state_42918[(2)]);
var state_42918__$1 = state_42918;
var statearr_42956_42990 = state_42918__$1;
(statearr_42956_42990[(2)] = inst_42888);

(statearr_42956_42990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (8))){
var inst_42861 = (state_42918[(15)]);
var inst_42862 = (state_42918[(16)]);
var inst_42864 = (inst_42862 < inst_42861);
var inst_42865 = inst_42864;
var state_42918__$1 = state_42918;
if(cljs.core.truth_(inst_42865)){
var statearr_42957_42991 = state_42918__$1;
(statearr_42957_42991[(1)] = (10));

} else {
var statearr_42958_42992 = state_42918__$1;
(statearr_42958_42992[(1)] = (11));

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
});})(c__33589__auto___42964,mults,ensure_mult,p))
;
return ((function (switch__33501__auto__,c__33589__auto___42964,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33502__auto__ = null;
var cljs$core$async$state_machine__33502__auto____0 = (function (){
var statearr_42959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42959[(0)] = cljs$core$async$state_machine__33502__auto__);

(statearr_42959[(1)] = (1));

return statearr_42959;
});
var cljs$core$async$state_machine__33502__auto____1 = (function (state_42918){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_42918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e42960){if((e42960 instanceof Object)){
var ex__33505__auto__ = e42960;
var statearr_42961_42993 = state_42918;
(statearr_42961_42993[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42994 = state_42918;
state_42918 = G__42994;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$state_machine__33502__auto__ = function(state_42918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33502__auto____1.call(this,state_42918);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33502__auto____0;
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33502__auto____1;
return cljs$core$async$state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___42964,mults,ensure_mult,p))
})();
var state__33591__auto__ = (function (){var statearr_42962 = f__33590__auto__.call(null);
(statearr_42962[(6)] = c__33589__auto___42964);

return statearr_42962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___42964,mults,ensure_mult,p))
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
var G__42996 = arguments.length;
switch (G__42996) {
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
var G__42999 = arguments.length;
switch (G__42999) {
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
var G__43002 = arguments.length;
switch (G__43002) {
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
var c__33589__auto___43069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___43069,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___43069,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43041){
var state_val_43042 = (state_43041[(1)]);
if((state_val_43042 === (7))){
var state_43041__$1 = state_43041;
var statearr_43043_43070 = state_43041__$1;
(statearr_43043_43070[(2)] = null);

(statearr_43043_43070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (1))){
var state_43041__$1 = state_43041;
var statearr_43044_43071 = state_43041__$1;
(statearr_43044_43071[(2)] = null);

(statearr_43044_43071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (4))){
var inst_43005 = (state_43041[(7)]);
var inst_43007 = (inst_43005 < cnt);
var state_43041__$1 = state_43041;
if(cljs.core.truth_(inst_43007)){
var statearr_43045_43072 = state_43041__$1;
(statearr_43045_43072[(1)] = (6));

} else {
var statearr_43046_43073 = state_43041__$1;
(statearr_43046_43073[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (15))){
var inst_43037 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
var statearr_43047_43074 = state_43041__$1;
(statearr_43047_43074[(2)] = inst_43037);

(statearr_43047_43074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (13))){
var inst_43030 = cljs.core.async.close_BANG_.call(null,out);
var state_43041__$1 = state_43041;
var statearr_43048_43075 = state_43041__$1;
(statearr_43048_43075[(2)] = inst_43030);

(statearr_43048_43075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (6))){
var state_43041__$1 = state_43041;
var statearr_43049_43076 = state_43041__$1;
(statearr_43049_43076[(2)] = null);

(statearr_43049_43076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (3))){
var inst_43039 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43041__$1,inst_43039);
} else {
if((state_val_43042 === (12))){
var inst_43027 = (state_43041[(8)]);
var inst_43027__$1 = (state_43041[(2)]);
var inst_43028 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43027__$1);
var state_43041__$1 = (function (){var statearr_43050 = state_43041;
(statearr_43050[(8)] = inst_43027__$1);

return statearr_43050;
})();
if(cljs.core.truth_(inst_43028)){
var statearr_43051_43077 = state_43041__$1;
(statearr_43051_43077[(1)] = (13));

} else {
var statearr_43052_43078 = state_43041__$1;
(statearr_43052_43078[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (2))){
var inst_43004 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43005 = (0);
var state_43041__$1 = (function (){var statearr_43053 = state_43041;
(statearr_43053[(9)] = inst_43004);

(statearr_43053[(7)] = inst_43005);

return statearr_43053;
})();
var statearr_43054_43079 = state_43041__$1;
(statearr_43054_43079[(2)] = null);

(statearr_43054_43079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (11))){
var inst_43005 = (state_43041[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43041,(10),Object,null,(9));
var inst_43014 = chs__$1.call(null,inst_43005);
var inst_43015 = done.call(null,inst_43005);
var inst_43016 = cljs.core.async.take_BANG_.call(null,inst_43014,inst_43015);
var state_43041__$1 = state_43041;
var statearr_43055_43080 = state_43041__$1;
(statearr_43055_43080[(2)] = inst_43016);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43041__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (9))){
var inst_43005 = (state_43041[(7)]);
var inst_43018 = (state_43041[(2)]);
var inst_43019 = (inst_43005 + (1));
var inst_43005__$1 = inst_43019;
var state_43041__$1 = (function (){var statearr_43056 = state_43041;
(statearr_43056[(10)] = inst_43018);

(statearr_43056[(7)] = inst_43005__$1);

return statearr_43056;
})();
var statearr_43057_43081 = state_43041__$1;
(statearr_43057_43081[(2)] = null);

(statearr_43057_43081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (5))){
var inst_43025 = (state_43041[(2)]);
var state_43041__$1 = (function (){var statearr_43058 = state_43041;
(statearr_43058[(11)] = inst_43025);

return statearr_43058;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43041__$1,(12),dchan);
} else {
if((state_val_43042 === (14))){
var inst_43027 = (state_43041[(8)]);
var inst_43032 = cljs.core.apply.call(null,f,inst_43027);
var state_43041__$1 = state_43041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43041__$1,(16),out,inst_43032);
} else {
if((state_val_43042 === (16))){
var inst_43034 = (state_43041[(2)]);
var state_43041__$1 = (function (){var statearr_43059 = state_43041;
(statearr_43059[(12)] = inst_43034);

return statearr_43059;
})();
var statearr_43060_43082 = state_43041__$1;
(statearr_43060_43082[(2)] = null);

(statearr_43060_43082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (10))){
var inst_43009 = (state_43041[(2)]);
var inst_43010 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43041__$1 = (function (){var statearr_43061 = state_43041;
(statearr_43061[(13)] = inst_43009);

return statearr_43061;
})();
var statearr_43062_43083 = state_43041__$1;
(statearr_43062_43083[(2)] = inst_43010);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43041__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (8))){
var inst_43023 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
var statearr_43063_43084 = state_43041__$1;
(statearr_43063_43084[(2)] = inst_43023);

(statearr_43063_43084[(1)] = (5));


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
});})(c__33589__auto___43069,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33501__auto__,c__33589__auto___43069,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33502__auto__ = null;
var cljs$core$async$state_machine__33502__auto____0 = (function (){
var statearr_43064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43064[(0)] = cljs$core$async$state_machine__33502__auto__);

(statearr_43064[(1)] = (1));

return statearr_43064;
});
var cljs$core$async$state_machine__33502__auto____1 = (function (state_43041){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_43041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e43065){if((e43065 instanceof Object)){
var ex__33505__auto__ = e43065;
var statearr_43066_43085 = state_43041;
(statearr_43066_43085[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43086 = state_43041;
state_43041 = G__43086;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$state_machine__33502__auto__ = function(state_43041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33502__auto____1.call(this,state_43041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33502__auto____0;
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33502__auto____1;
return cljs$core$async$state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___43069,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33591__auto__ = (function (){var statearr_43067 = f__33590__auto__.call(null);
(statearr_43067[(6)] = c__33589__auto___43069);

return statearr_43067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___43069,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__43089 = arguments.length;
switch (G__43089) {
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
var c__33589__auto___43143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___43143,out){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___43143,out){
return (function (state_43121){
var state_val_43122 = (state_43121[(1)]);
if((state_val_43122 === (7))){
var inst_43101 = (state_43121[(7)]);
var inst_43100 = (state_43121[(8)]);
var inst_43100__$1 = (state_43121[(2)]);
var inst_43101__$1 = cljs.core.nth.call(null,inst_43100__$1,(0),null);
var inst_43102 = cljs.core.nth.call(null,inst_43100__$1,(1),null);
var inst_43103 = (inst_43101__$1 == null);
var state_43121__$1 = (function (){var statearr_43123 = state_43121;
(statearr_43123[(7)] = inst_43101__$1);

(statearr_43123[(8)] = inst_43100__$1);

(statearr_43123[(9)] = inst_43102);

return statearr_43123;
})();
if(cljs.core.truth_(inst_43103)){
var statearr_43124_43144 = state_43121__$1;
(statearr_43124_43144[(1)] = (8));

} else {
var statearr_43125_43145 = state_43121__$1;
(statearr_43125_43145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43122 === (1))){
var inst_43090 = cljs.core.vec.call(null,chs);
var inst_43091 = inst_43090;
var state_43121__$1 = (function (){var statearr_43126 = state_43121;
(statearr_43126[(10)] = inst_43091);

return statearr_43126;
})();
var statearr_43127_43146 = state_43121__$1;
(statearr_43127_43146[(2)] = null);

(statearr_43127_43146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43122 === (4))){
var inst_43091 = (state_43121[(10)]);
var state_43121__$1 = state_43121;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43121__$1,(7),inst_43091);
} else {
if((state_val_43122 === (6))){
var inst_43117 = (state_43121[(2)]);
var state_43121__$1 = state_43121;
var statearr_43128_43147 = state_43121__$1;
(statearr_43128_43147[(2)] = inst_43117);

(statearr_43128_43147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43122 === (3))){
var inst_43119 = (state_43121[(2)]);
var state_43121__$1 = state_43121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43121__$1,inst_43119);
} else {
if((state_val_43122 === (2))){
var inst_43091 = (state_43121[(10)]);
var inst_43093 = cljs.core.count.call(null,inst_43091);
var inst_43094 = (inst_43093 > (0));
var state_43121__$1 = state_43121;
if(cljs.core.truth_(inst_43094)){
var statearr_43130_43148 = state_43121__$1;
(statearr_43130_43148[(1)] = (4));

} else {
var statearr_43131_43149 = state_43121__$1;
(statearr_43131_43149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43122 === (11))){
var inst_43091 = (state_43121[(10)]);
var inst_43110 = (state_43121[(2)]);
var tmp43129 = inst_43091;
var inst_43091__$1 = tmp43129;
var state_43121__$1 = (function (){var statearr_43132 = state_43121;
(statearr_43132[(10)] = inst_43091__$1);

(statearr_43132[(11)] = inst_43110);

return statearr_43132;
})();
var statearr_43133_43150 = state_43121__$1;
(statearr_43133_43150[(2)] = null);

(statearr_43133_43150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43122 === (9))){
var inst_43101 = (state_43121[(7)]);
var state_43121__$1 = state_43121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43121__$1,(11),out,inst_43101);
} else {
if((state_val_43122 === (5))){
var inst_43115 = cljs.core.async.close_BANG_.call(null,out);
var state_43121__$1 = state_43121;
var statearr_43134_43151 = state_43121__$1;
(statearr_43134_43151[(2)] = inst_43115);

(statearr_43134_43151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43122 === (10))){
var inst_43113 = (state_43121[(2)]);
var state_43121__$1 = state_43121;
var statearr_43135_43152 = state_43121__$1;
(statearr_43135_43152[(2)] = inst_43113);

(statearr_43135_43152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43122 === (8))){
var inst_43091 = (state_43121[(10)]);
var inst_43101 = (state_43121[(7)]);
var inst_43100 = (state_43121[(8)]);
var inst_43102 = (state_43121[(9)]);
var inst_43105 = (function (){var cs = inst_43091;
var vec__43096 = inst_43100;
var v = inst_43101;
var c = inst_43102;
return ((function (cs,vec__43096,v,c,inst_43091,inst_43101,inst_43100,inst_43102,state_val_43122,c__33589__auto___43143,out){
return (function (p1__43087_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43087_SHARP_);
});
;})(cs,vec__43096,v,c,inst_43091,inst_43101,inst_43100,inst_43102,state_val_43122,c__33589__auto___43143,out))
})();
var inst_43106 = cljs.core.filterv.call(null,inst_43105,inst_43091);
var inst_43091__$1 = inst_43106;
var state_43121__$1 = (function (){var statearr_43136 = state_43121;
(statearr_43136[(10)] = inst_43091__$1);

return statearr_43136;
})();
var statearr_43137_43153 = state_43121__$1;
(statearr_43137_43153[(2)] = null);

(statearr_43137_43153[(1)] = (2));


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
});})(c__33589__auto___43143,out))
;
return ((function (switch__33501__auto__,c__33589__auto___43143,out){
return (function() {
var cljs$core$async$state_machine__33502__auto__ = null;
var cljs$core$async$state_machine__33502__auto____0 = (function (){
var statearr_43138 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43138[(0)] = cljs$core$async$state_machine__33502__auto__);

(statearr_43138[(1)] = (1));

return statearr_43138;
});
var cljs$core$async$state_machine__33502__auto____1 = (function (state_43121){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_43121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e43139){if((e43139 instanceof Object)){
var ex__33505__auto__ = e43139;
var statearr_43140_43154 = state_43121;
(statearr_43140_43154[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43155 = state_43121;
state_43121 = G__43155;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$state_machine__33502__auto__ = function(state_43121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33502__auto____1.call(this,state_43121);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33502__auto____0;
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33502__auto____1;
return cljs$core$async$state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___43143,out))
})();
var state__33591__auto__ = (function (){var statearr_43141 = f__33590__auto__.call(null);
(statearr_43141[(6)] = c__33589__auto___43143);

return statearr_43141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___43143,out))
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
var G__43157 = arguments.length;
switch (G__43157) {
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
var c__33589__auto___43202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___43202,out){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___43202,out){
return (function (state_43181){
var state_val_43182 = (state_43181[(1)]);
if((state_val_43182 === (7))){
var inst_43163 = (state_43181[(7)]);
var inst_43163__$1 = (state_43181[(2)]);
var inst_43164 = (inst_43163__$1 == null);
var inst_43165 = cljs.core.not.call(null,inst_43164);
var state_43181__$1 = (function (){var statearr_43183 = state_43181;
(statearr_43183[(7)] = inst_43163__$1);

return statearr_43183;
})();
if(inst_43165){
var statearr_43184_43203 = state_43181__$1;
(statearr_43184_43203[(1)] = (8));

} else {
var statearr_43185_43204 = state_43181__$1;
(statearr_43185_43204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43182 === (1))){
var inst_43158 = (0);
var state_43181__$1 = (function (){var statearr_43186 = state_43181;
(statearr_43186[(8)] = inst_43158);

return statearr_43186;
})();
var statearr_43187_43205 = state_43181__$1;
(statearr_43187_43205[(2)] = null);

(statearr_43187_43205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43182 === (4))){
var state_43181__$1 = state_43181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43181__$1,(7),ch);
} else {
if((state_val_43182 === (6))){
var inst_43176 = (state_43181[(2)]);
var state_43181__$1 = state_43181;
var statearr_43188_43206 = state_43181__$1;
(statearr_43188_43206[(2)] = inst_43176);

(statearr_43188_43206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43182 === (3))){
var inst_43178 = (state_43181[(2)]);
var inst_43179 = cljs.core.async.close_BANG_.call(null,out);
var state_43181__$1 = (function (){var statearr_43189 = state_43181;
(statearr_43189[(9)] = inst_43178);

return statearr_43189;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43181__$1,inst_43179);
} else {
if((state_val_43182 === (2))){
var inst_43158 = (state_43181[(8)]);
var inst_43160 = (inst_43158 < n);
var state_43181__$1 = state_43181;
if(cljs.core.truth_(inst_43160)){
var statearr_43190_43207 = state_43181__$1;
(statearr_43190_43207[(1)] = (4));

} else {
var statearr_43191_43208 = state_43181__$1;
(statearr_43191_43208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43182 === (11))){
var inst_43158 = (state_43181[(8)]);
var inst_43168 = (state_43181[(2)]);
var inst_43169 = (inst_43158 + (1));
var inst_43158__$1 = inst_43169;
var state_43181__$1 = (function (){var statearr_43192 = state_43181;
(statearr_43192[(10)] = inst_43168);

(statearr_43192[(8)] = inst_43158__$1);

return statearr_43192;
})();
var statearr_43193_43209 = state_43181__$1;
(statearr_43193_43209[(2)] = null);

(statearr_43193_43209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43182 === (9))){
var state_43181__$1 = state_43181;
var statearr_43194_43210 = state_43181__$1;
(statearr_43194_43210[(2)] = null);

(statearr_43194_43210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43182 === (5))){
var state_43181__$1 = state_43181;
var statearr_43195_43211 = state_43181__$1;
(statearr_43195_43211[(2)] = null);

(statearr_43195_43211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43182 === (10))){
var inst_43173 = (state_43181[(2)]);
var state_43181__$1 = state_43181;
var statearr_43196_43212 = state_43181__$1;
(statearr_43196_43212[(2)] = inst_43173);

(statearr_43196_43212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43182 === (8))){
var inst_43163 = (state_43181[(7)]);
var state_43181__$1 = state_43181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43181__$1,(11),out,inst_43163);
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
});})(c__33589__auto___43202,out))
;
return ((function (switch__33501__auto__,c__33589__auto___43202,out){
return (function() {
var cljs$core$async$state_machine__33502__auto__ = null;
var cljs$core$async$state_machine__33502__auto____0 = (function (){
var statearr_43197 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43197[(0)] = cljs$core$async$state_machine__33502__auto__);

(statearr_43197[(1)] = (1));

return statearr_43197;
});
var cljs$core$async$state_machine__33502__auto____1 = (function (state_43181){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_43181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e43198){if((e43198 instanceof Object)){
var ex__33505__auto__ = e43198;
var statearr_43199_43213 = state_43181;
(statearr_43199_43213[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43214 = state_43181;
state_43181 = G__43214;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$state_machine__33502__auto__ = function(state_43181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33502__auto____1.call(this,state_43181);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33502__auto____0;
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33502__auto____1;
return cljs$core$async$state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___43202,out))
})();
var state__33591__auto__ = (function (){var statearr_43200 = f__33590__auto__.call(null);
(statearr_43200[(6)] = c__33589__auto___43202);

return statearr_43200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___43202,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43216 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43216 = (function (f,ch,meta43217){
this.f = f;
this.ch = ch;
this.meta43217 = meta43217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43218,meta43217__$1){
var self__ = this;
var _43218__$1 = this;
return (new cljs.core.async.t_cljs$core$async43216(self__.f,self__.ch,meta43217__$1));
});

cljs.core.async.t_cljs$core$async43216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43218){
var self__ = this;
var _43218__$1 = this;
return self__.meta43217;
});

cljs.core.async.t_cljs$core$async43216.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43216.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43216.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43216.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43216.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43219 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43219 = (function (f,ch,meta43217,_,fn1,meta43220){
this.f = f;
this.ch = ch;
this.meta43217 = meta43217;
this._ = _;
this.fn1 = fn1;
this.meta43220 = meta43220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43221,meta43220__$1){
var self__ = this;
var _43221__$1 = this;
return (new cljs.core.async.t_cljs$core$async43219(self__.f,self__.ch,self__.meta43217,self__._,self__.fn1,meta43220__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43221){
var self__ = this;
var _43221__$1 = this;
return self__.meta43220;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43219.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43219.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43215_SHARP_){
return f1.call(null,(((p1__43215_SHARP_ == null))?null:self__.f.call(null,p1__43215_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43219.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43217","meta43217",359747826,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43216","cljs.core.async/t_cljs$core$async43216",902342540,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43220","meta43220",1745565926,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43219.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43219";

cljs.core.async.t_cljs$core$async43219.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async43219");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43219 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43219(f__$1,ch__$1,meta43217__$1,___$2,fn1__$1,meta43220){
return (new cljs.core.async.t_cljs$core$async43219(f__$1,ch__$1,meta43217__$1,___$2,fn1__$1,meta43220));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43219(self__.f,self__.ch,self__.meta43217,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28274__auto__ = ret;
if(cljs.core.truth_(and__28274__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28274__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43216.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43216.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43217","meta43217",359747826,null)], null);
});

cljs.core.async.t_cljs$core$async43216.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43216";

cljs.core.async.t_cljs$core$async43216.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async43216");
});

cljs.core.async.__GT_t_cljs$core$async43216 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43216(f__$1,ch__$1,meta43217){
return (new cljs.core.async.t_cljs$core$async43216(f__$1,ch__$1,meta43217));
});

}

return (new cljs.core.async.t_cljs$core$async43216(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43222 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43222 = (function (f,ch,meta43223){
this.f = f;
this.ch = ch;
this.meta43223 = meta43223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43224,meta43223__$1){
var self__ = this;
var _43224__$1 = this;
return (new cljs.core.async.t_cljs$core$async43222(self__.f,self__.ch,meta43223__$1));
});

cljs.core.async.t_cljs$core$async43222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43224){
var self__ = this;
var _43224__$1 = this;
return self__.meta43223;
});

cljs.core.async.t_cljs$core$async43222.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43222.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43222.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43222.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43222.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43222.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43223","meta43223",151855553,null)], null);
});

cljs.core.async.t_cljs$core$async43222.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43222";

cljs.core.async.t_cljs$core$async43222.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async43222");
});

cljs.core.async.__GT_t_cljs$core$async43222 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43222(f__$1,ch__$1,meta43223){
return (new cljs.core.async.t_cljs$core$async43222(f__$1,ch__$1,meta43223));
});

}

return (new cljs.core.async.t_cljs$core$async43222(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43225 = (function (p,ch,meta43226){
this.p = p;
this.ch = ch;
this.meta43226 = meta43226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43227,meta43226__$1){
var self__ = this;
var _43227__$1 = this;
return (new cljs.core.async.t_cljs$core$async43225(self__.p,self__.ch,meta43226__$1));
});

cljs.core.async.t_cljs$core$async43225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43227){
var self__ = this;
var _43227__$1 = this;
return self__.meta43226;
});

cljs.core.async.t_cljs$core$async43225.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43225.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43225.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43225.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43225.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43225.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43225.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43226","meta43226",2001376283,null)], null);
});

cljs.core.async.t_cljs$core$async43225.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43225";

cljs.core.async.t_cljs$core$async43225.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async43225");
});

cljs.core.async.__GT_t_cljs$core$async43225 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43225(p__$1,ch__$1,meta43226){
return (new cljs.core.async.t_cljs$core$async43225(p__$1,ch__$1,meta43226));
});

}

return (new cljs.core.async.t_cljs$core$async43225(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43229 = arguments.length;
switch (G__43229) {
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
var c__33589__auto___43269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___43269,out){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___43269,out){
return (function (state_43250){
var state_val_43251 = (state_43250[(1)]);
if((state_val_43251 === (7))){
var inst_43246 = (state_43250[(2)]);
var state_43250__$1 = state_43250;
var statearr_43252_43270 = state_43250__$1;
(statearr_43252_43270[(2)] = inst_43246);

(statearr_43252_43270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (1))){
var state_43250__$1 = state_43250;
var statearr_43253_43271 = state_43250__$1;
(statearr_43253_43271[(2)] = null);

(statearr_43253_43271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (4))){
var inst_43232 = (state_43250[(7)]);
var inst_43232__$1 = (state_43250[(2)]);
var inst_43233 = (inst_43232__$1 == null);
var state_43250__$1 = (function (){var statearr_43254 = state_43250;
(statearr_43254[(7)] = inst_43232__$1);

return statearr_43254;
})();
if(cljs.core.truth_(inst_43233)){
var statearr_43255_43272 = state_43250__$1;
(statearr_43255_43272[(1)] = (5));

} else {
var statearr_43256_43273 = state_43250__$1;
(statearr_43256_43273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (6))){
var inst_43232 = (state_43250[(7)]);
var inst_43237 = p.call(null,inst_43232);
var state_43250__$1 = state_43250;
if(cljs.core.truth_(inst_43237)){
var statearr_43257_43274 = state_43250__$1;
(statearr_43257_43274[(1)] = (8));

} else {
var statearr_43258_43275 = state_43250__$1;
(statearr_43258_43275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (3))){
var inst_43248 = (state_43250[(2)]);
var state_43250__$1 = state_43250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43250__$1,inst_43248);
} else {
if((state_val_43251 === (2))){
var state_43250__$1 = state_43250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43250__$1,(4),ch);
} else {
if((state_val_43251 === (11))){
var inst_43240 = (state_43250[(2)]);
var state_43250__$1 = state_43250;
var statearr_43259_43276 = state_43250__$1;
(statearr_43259_43276[(2)] = inst_43240);

(statearr_43259_43276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (9))){
var state_43250__$1 = state_43250;
var statearr_43260_43277 = state_43250__$1;
(statearr_43260_43277[(2)] = null);

(statearr_43260_43277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (5))){
var inst_43235 = cljs.core.async.close_BANG_.call(null,out);
var state_43250__$1 = state_43250;
var statearr_43261_43278 = state_43250__$1;
(statearr_43261_43278[(2)] = inst_43235);

(statearr_43261_43278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (10))){
var inst_43243 = (state_43250[(2)]);
var state_43250__$1 = (function (){var statearr_43262 = state_43250;
(statearr_43262[(8)] = inst_43243);

return statearr_43262;
})();
var statearr_43263_43279 = state_43250__$1;
(statearr_43263_43279[(2)] = null);

(statearr_43263_43279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43251 === (8))){
var inst_43232 = (state_43250[(7)]);
var state_43250__$1 = state_43250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43250__$1,(11),out,inst_43232);
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
});})(c__33589__auto___43269,out))
;
return ((function (switch__33501__auto__,c__33589__auto___43269,out){
return (function() {
var cljs$core$async$state_machine__33502__auto__ = null;
var cljs$core$async$state_machine__33502__auto____0 = (function (){
var statearr_43264 = [null,null,null,null,null,null,null,null,null];
(statearr_43264[(0)] = cljs$core$async$state_machine__33502__auto__);

(statearr_43264[(1)] = (1));

return statearr_43264;
});
var cljs$core$async$state_machine__33502__auto____1 = (function (state_43250){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_43250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e43265){if((e43265 instanceof Object)){
var ex__33505__auto__ = e43265;
var statearr_43266_43280 = state_43250;
(statearr_43266_43280[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43281 = state_43250;
state_43250 = G__43281;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$state_machine__33502__auto__ = function(state_43250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33502__auto____1.call(this,state_43250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33502__auto____0;
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33502__auto____1;
return cljs$core$async$state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___43269,out))
})();
var state__33591__auto__ = (function (){var statearr_43267 = f__33590__auto__.call(null);
(statearr_43267[(6)] = c__33589__auto___43269);

return statearr_43267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___43269,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43283 = arguments.length;
switch (G__43283) {
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
var c__33589__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto__){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto__){
return (function (state_43346){
var state_val_43347 = (state_43346[(1)]);
if((state_val_43347 === (7))){
var inst_43342 = (state_43346[(2)]);
var state_43346__$1 = state_43346;
var statearr_43348_43386 = state_43346__$1;
(statearr_43348_43386[(2)] = inst_43342);

(statearr_43348_43386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (20))){
var inst_43312 = (state_43346[(7)]);
var inst_43323 = (state_43346[(2)]);
var inst_43324 = cljs.core.next.call(null,inst_43312);
var inst_43298 = inst_43324;
var inst_43299 = null;
var inst_43300 = (0);
var inst_43301 = (0);
var state_43346__$1 = (function (){var statearr_43349 = state_43346;
(statearr_43349[(8)] = inst_43299);

(statearr_43349[(9)] = inst_43323);

(statearr_43349[(10)] = inst_43300);

(statearr_43349[(11)] = inst_43301);

(statearr_43349[(12)] = inst_43298);

return statearr_43349;
})();
var statearr_43350_43387 = state_43346__$1;
(statearr_43350_43387[(2)] = null);

(statearr_43350_43387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (1))){
var state_43346__$1 = state_43346;
var statearr_43351_43388 = state_43346__$1;
(statearr_43351_43388[(2)] = null);

(statearr_43351_43388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (4))){
var inst_43287 = (state_43346[(13)]);
var inst_43287__$1 = (state_43346[(2)]);
var inst_43288 = (inst_43287__$1 == null);
var state_43346__$1 = (function (){var statearr_43352 = state_43346;
(statearr_43352[(13)] = inst_43287__$1);

return statearr_43352;
})();
if(cljs.core.truth_(inst_43288)){
var statearr_43353_43389 = state_43346__$1;
(statearr_43353_43389[(1)] = (5));

} else {
var statearr_43354_43390 = state_43346__$1;
(statearr_43354_43390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (15))){
var state_43346__$1 = state_43346;
var statearr_43358_43391 = state_43346__$1;
(statearr_43358_43391[(2)] = null);

(statearr_43358_43391[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (21))){
var state_43346__$1 = state_43346;
var statearr_43359_43392 = state_43346__$1;
(statearr_43359_43392[(2)] = null);

(statearr_43359_43392[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (13))){
var inst_43299 = (state_43346[(8)]);
var inst_43300 = (state_43346[(10)]);
var inst_43301 = (state_43346[(11)]);
var inst_43298 = (state_43346[(12)]);
var inst_43308 = (state_43346[(2)]);
var inst_43309 = (inst_43301 + (1));
var tmp43355 = inst_43299;
var tmp43356 = inst_43300;
var tmp43357 = inst_43298;
var inst_43298__$1 = tmp43357;
var inst_43299__$1 = tmp43355;
var inst_43300__$1 = tmp43356;
var inst_43301__$1 = inst_43309;
var state_43346__$1 = (function (){var statearr_43360 = state_43346;
(statearr_43360[(8)] = inst_43299__$1);

(statearr_43360[(14)] = inst_43308);

(statearr_43360[(10)] = inst_43300__$1);

(statearr_43360[(11)] = inst_43301__$1);

(statearr_43360[(12)] = inst_43298__$1);

return statearr_43360;
})();
var statearr_43361_43393 = state_43346__$1;
(statearr_43361_43393[(2)] = null);

(statearr_43361_43393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (22))){
var state_43346__$1 = state_43346;
var statearr_43362_43394 = state_43346__$1;
(statearr_43362_43394[(2)] = null);

(statearr_43362_43394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (6))){
var inst_43287 = (state_43346[(13)]);
var inst_43296 = f.call(null,inst_43287);
var inst_43297 = cljs.core.seq.call(null,inst_43296);
var inst_43298 = inst_43297;
var inst_43299 = null;
var inst_43300 = (0);
var inst_43301 = (0);
var state_43346__$1 = (function (){var statearr_43363 = state_43346;
(statearr_43363[(8)] = inst_43299);

(statearr_43363[(10)] = inst_43300);

(statearr_43363[(11)] = inst_43301);

(statearr_43363[(12)] = inst_43298);

return statearr_43363;
})();
var statearr_43364_43395 = state_43346__$1;
(statearr_43364_43395[(2)] = null);

(statearr_43364_43395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (17))){
var inst_43312 = (state_43346[(7)]);
var inst_43316 = cljs.core.chunk_first.call(null,inst_43312);
var inst_43317 = cljs.core.chunk_rest.call(null,inst_43312);
var inst_43318 = cljs.core.count.call(null,inst_43316);
var inst_43298 = inst_43317;
var inst_43299 = inst_43316;
var inst_43300 = inst_43318;
var inst_43301 = (0);
var state_43346__$1 = (function (){var statearr_43365 = state_43346;
(statearr_43365[(8)] = inst_43299);

(statearr_43365[(10)] = inst_43300);

(statearr_43365[(11)] = inst_43301);

(statearr_43365[(12)] = inst_43298);

return statearr_43365;
})();
var statearr_43366_43396 = state_43346__$1;
(statearr_43366_43396[(2)] = null);

(statearr_43366_43396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (3))){
var inst_43344 = (state_43346[(2)]);
var state_43346__$1 = state_43346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43346__$1,inst_43344);
} else {
if((state_val_43347 === (12))){
var inst_43332 = (state_43346[(2)]);
var state_43346__$1 = state_43346;
var statearr_43367_43397 = state_43346__$1;
(statearr_43367_43397[(2)] = inst_43332);

(statearr_43367_43397[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (2))){
var state_43346__$1 = state_43346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43346__$1,(4),in$);
} else {
if((state_val_43347 === (23))){
var inst_43340 = (state_43346[(2)]);
var state_43346__$1 = state_43346;
var statearr_43368_43398 = state_43346__$1;
(statearr_43368_43398[(2)] = inst_43340);

(statearr_43368_43398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (19))){
var inst_43327 = (state_43346[(2)]);
var state_43346__$1 = state_43346;
var statearr_43369_43399 = state_43346__$1;
(statearr_43369_43399[(2)] = inst_43327);

(statearr_43369_43399[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (11))){
var inst_43312 = (state_43346[(7)]);
var inst_43298 = (state_43346[(12)]);
var inst_43312__$1 = cljs.core.seq.call(null,inst_43298);
var state_43346__$1 = (function (){var statearr_43370 = state_43346;
(statearr_43370[(7)] = inst_43312__$1);

return statearr_43370;
})();
if(inst_43312__$1){
var statearr_43371_43400 = state_43346__$1;
(statearr_43371_43400[(1)] = (14));

} else {
var statearr_43372_43401 = state_43346__$1;
(statearr_43372_43401[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (9))){
var inst_43334 = (state_43346[(2)]);
var inst_43335 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43346__$1 = (function (){var statearr_43373 = state_43346;
(statearr_43373[(15)] = inst_43334);

return statearr_43373;
})();
if(cljs.core.truth_(inst_43335)){
var statearr_43374_43402 = state_43346__$1;
(statearr_43374_43402[(1)] = (21));

} else {
var statearr_43375_43403 = state_43346__$1;
(statearr_43375_43403[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (5))){
var inst_43290 = cljs.core.async.close_BANG_.call(null,out);
var state_43346__$1 = state_43346;
var statearr_43376_43404 = state_43346__$1;
(statearr_43376_43404[(2)] = inst_43290);

(statearr_43376_43404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (14))){
var inst_43312 = (state_43346[(7)]);
var inst_43314 = cljs.core.chunked_seq_QMARK_.call(null,inst_43312);
var state_43346__$1 = state_43346;
if(inst_43314){
var statearr_43377_43405 = state_43346__$1;
(statearr_43377_43405[(1)] = (17));

} else {
var statearr_43378_43406 = state_43346__$1;
(statearr_43378_43406[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (16))){
var inst_43330 = (state_43346[(2)]);
var state_43346__$1 = state_43346;
var statearr_43379_43407 = state_43346__$1;
(statearr_43379_43407[(2)] = inst_43330);

(statearr_43379_43407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43347 === (10))){
var inst_43299 = (state_43346[(8)]);
var inst_43301 = (state_43346[(11)]);
var inst_43306 = cljs.core._nth.call(null,inst_43299,inst_43301);
var state_43346__$1 = state_43346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43346__$1,(13),out,inst_43306);
} else {
if((state_val_43347 === (18))){
var inst_43312 = (state_43346[(7)]);
var inst_43321 = cljs.core.first.call(null,inst_43312);
var state_43346__$1 = state_43346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43346__$1,(20),out,inst_43321);
} else {
if((state_val_43347 === (8))){
var inst_43300 = (state_43346[(10)]);
var inst_43301 = (state_43346[(11)]);
var inst_43303 = (inst_43301 < inst_43300);
var inst_43304 = inst_43303;
var state_43346__$1 = state_43346;
if(cljs.core.truth_(inst_43304)){
var statearr_43380_43408 = state_43346__$1;
(statearr_43380_43408[(1)] = (10));

} else {
var statearr_43381_43409 = state_43346__$1;
(statearr_43381_43409[(1)] = (11));

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
});})(c__33589__auto__))
;
return ((function (switch__33501__auto__,c__33589__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33502__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33502__auto____0 = (function (){
var statearr_43382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43382[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33502__auto__);

(statearr_43382[(1)] = (1));

return statearr_43382;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33502__auto____1 = (function (state_43346){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_43346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e43383){if((e43383 instanceof Object)){
var ex__33505__auto__ = e43383;
var statearr_43384_43410 = state_43346;
(statearr_43384_43410[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43411 = state_43346;
state_43346 = G__43411;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33502__auto__ = function(state_43346){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33502__auto____1.call(this,state_43346);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33502__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33502__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto__))
})();
var state__33591__auto__ = (function (){var statearr_43385 = f__33590__auto__.call(null);
(statearr_43385[(6)] = c__33589__auto__);

return statearr_43385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto__))
);

return c__33589__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43413 = arguments.length;
switch (G__43413) {
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
var G__43416 = arguments.length;
switch (G__43416) {
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
var G__43419 = arguments.length;
switch (G__43419) {
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
var c__33589__auto___43466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___43466,out){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___43466,out){
return (function (state_43443){
var state_val_43444 = (state_43443[(1)]);
if((state_val_43444 === (7))){
var inst_43438 = (state_43443[(2)]);
var state_43443__$1 = state_43443;
var statearr_43445_43467 = state_43443__$1;
(statearr_43445_43467[(2)] = inst_43438);

(statearr_43445_43467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43444 === (1))){
var inst_43420 = null;
var state_43443__$1 = (function (){var statearr_43446 = state_43443;
(statearr_43446[(7)] = inst_43420);

return statearr_43446;
})();
var statearr_43447_43468 = state_43443__$1;
(statearr_43447_43468[(2)] = null);

(statearr_43447_43468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43444 === (4))){
var inst_43423 = (state_43443[(8)]);
var inst_43423__$1 = (state_43443[(2)]);
var inst_43424 = (inst_43423__$1 == null);
var inst_43425 = cljs.core.not.call(null,inst_43424);
var state_43443__$1 = (function (){var statearr_43448 = state_43443;
(statearr_43448[(8)] = inst_43423__$1);

return statearr_43448;
})();
if(inst_43425){
var statearr_43449_43469 = state_43443__$1;
(statearr_43449_43469[(1)] = (5));

} else {
var statearr_43450_43470 = state_43443__$1;
(statearr_43450_43470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43444 === (6))){
var state_43443__$1 = state_43443;
var statearr_43451_43471 = state_43443__$1;
(statearr_43451_43471[(2)] = null);

(statearr_43451_43471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43444 === (3))){
var inst_43440 = (state_43443[(2)]);
var inst_43441 = cljs.core.async.close_BANG_.call(null,out);
var state_43443__$1 = (function (){var statearr_43452 = state_43443;
(statearr_43452[(9)] = inst_43440);

return statearr_43452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43443__$1,inst_43441);
} else {
if((state_val_43444 === (2))){
var state_43443__$1 = state_43443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43443__$1,(4),ch);
} else {
if((state_val_43444 === (11))){
var inst_43423 = (state_43443[(8)]);
var inst_43432 = (state_43443[(2)]);
var inst_43420 = inst_43423;
var state_43443__$1 = (function (){var statearr_43453 = state_43443;
(statearr_43453[(7)] = inst_43420);

(statearr_43453[(10)] = inst_43432);

return statearr_43453;
})();
var statearr_43454_43472 = state_43443__$1;
(statearr_43454_43472[(2)] = null);

(statearr_43454_43472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43444 === (9))){
var inst_43423 = (state_43443[(8)]);
var state_43443__$1 = state_43443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43443__$1,(11),out,inst_43423);
} else {
if((state_val_43444 === (5))){
var inst_43420 = (state_43443[(7)]);
var inst_43423 = (state_43443[(8)]);
var inst_43427 = cljs.core._EQ_.call(null,inst_43423,inst_43420);
var state_43443__$1 = state_43443;
if(inst_43427){
var statearr_43456_43473 = state_43443__$1;
(statearr_43456_43473[(1)] = (8));

} else {
var statearr_43457_43474 = state_43443__$1;
(statearr_43457_43474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43444 === (10))){
var inst_43435 = (state_43443[(2)]);
var state_43443__$1 = state_43443;
var statearr_43458_43475 = state_43443__$1;
(statearr_43458_43475[(2)] = inst_43435);

(statearr_43458_43475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43444 === (8))){
var inst_43420 = (state_43443[(7)]);
var tmp43455 = inst_43420;
var inst_43420__$1 = tmp43455;
var state_43443__$1 = (function (){var statearr_43459 = state_43443;
(statearr_43459[(7)] = inst_43420__$1);

return statearr_43459;
})();
var statearr_43460_43476 = state_43443__$1;
(statearr_43460_43476[(2)] = null);

(statearr_43460_43476[(1)] = (2));


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
});})(c__33589__auto___43466,out))
;
return ((function (switch__33501__auto__,c__33589__auto___43466,out){
return (function() {
var cljs$core$async$state_machine__33502__auto__ = null;
var cljs$core$async$state_machine__33502__auto____0 = (function (){
var statearr_43461 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43461[(0)] = cljs$core$async$state_machine__33502__auto__);

(statearr_43461[(1)] = (1));

return statearr_43461;
});
var cljs$core$async$state_machine__33502__auto____1 = (function (state_43443){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_43443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e43462){if((e43462 instanceof Object)){
var ex__33505__auto__ = e43462;
var statearr_43463_43477 = state_43443;
(statearr_43463_43477[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43478 = state_43443;
state_43443 = G__43478;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$state_machine__33502__auto__ = function(state_43443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33502__auto____1.call(this,state_43443);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33502__auto____0;
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33502__auto____1;
return cljs$core$async$state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___43466,out))
})();
var state__33591__auto__ = (function (){var statearr_43464 = f__33590__auto__.call(null);
(statearr_43464[(6)] = c__33589__auto___43466);

return statearr_43464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___43466,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43480 = arguments.length;
switch (G__43480) {
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
var c__33589__auto___43546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___43546,out){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___43546,out){
return (function (state_43518){
var state_val_43519 = (state_43518[(1)]);
if((state_val_43519 === (7))){
var inst_43514 = (state_43518[(2)]);
var state_43518__$1 = state_43518;
var statearr_43520_43547 = state_43518__$1;
(statearr_43520_43547[(2)] = inst_43514);

(statearr_43520_43547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (1))){
var inst_43481 = (new Array(n));
var inst_43482 = inst_43481;
var inst_43483 = (0);
var state_43518__$1 = (function (){var statearr_43521 = state_43518;
(statearr_43521[(7)] = inst_43483);

(statearr_43521[(8)] = inst_43482);

return statearr_43521;
})();
var statearr_43522_43548 = state_43518__$1;
(statearr_43522_43548[(2)] = null);

(statearr_43522_43548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (4))){
var inst_43486 = (state_43518[(9)]);
var inst_43486__$1 = (state_43518[(2)]);
var inst_43487 = (inst_43486__$1 == null);
var inst_43488 = cljs.core.not.call(null,inst_43487);
var state_43518__$1 = (function (){var statearr_43523 = state_43518;
(statearr_43523[(9)] = inst_43486__$1);

return statearr_43523;
})();
if(inst_43488){
var statearr_43524_43549 = state_43518__$1;
(statearr_43524_43549[(1)] = (5));

} else {
var statearr_43525_43550 = state_43518__$1;
(statearr_43525_43550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (15))){
var inst_43508 = (state_43518[(2)]);
var state_43518__$1 = state_43518;
var statearr_43526_43551 = state_43518__$1;
(statearr_43526_43551[(2)] = inst_43508);

(statearr_43526_43551[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (13))){
var state_43518__$1 = state_43518;
var statearr_43527_43552 = state_43518__$1;
(statearr_43527_43552[(2)] = null);

(statearr_43527_43552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (6))){
var inst_43483 = (state_43518[(7)]);
var inst_43504 = (inst_43483 > (0));
var state_43518__$1 = state_43518;
if(cljs.core.truth_(inst_43504)){
var statearr_43528_43553 = state_43518__$1;
(statearr_43528_43553[(1)] = (12));

} else {
var statearr_43529_43554 = state_43518__$1;
(statearr_43529_43554[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (3))){
var inst_43516 = (state_43518[(2)]);
var state_43518__$1 = state_43518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43518__$1,inst_43516);
} else {
if((state_val_43519 === (12))){
var inst_43482 = (state_43518[(8)]);
var inst_43506 = cljs.core.vec.call(null,inst_43482);
var state_43518__$1 = state_43518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43518__$1,(15),out,inst_43506);
} else {
if((state_val_43519 === (2))){
var state_43518__$1 = state_43518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43518__$1,(4),ch);
} else {
if((state_val_43519 === (11))){
var inst_43498 = (state_43518[(2)]);
var inst_43499 = (new Array(n));
var inst_43482 = inst_43499;
var inst_43483 = (0);
var state_43518__$1 = (function (){var statearr_43530 = state_43518;
(statearr_43530[(7)] = inst_43483);

(statearr_43530[(10)] = inst_43498);

(statearr_43530[(8)] = inst_43482);

return statearr_43530;
})();
var statearr_43531_43555 = state_43518__$1;
(statearr_43531_43555[(2)] = null);

(statearr_43531_43555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (9))){
var inst_43482 = (state_43518[(8)]);
var inst_43496 = cljs.core.vec.call(null,inst_43482);
var state_43518__$1 = state_43518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43518__$1,(11),out,inst_43496);
} else {
if((state_val_43519 === (5))){
var inst_43491 = (state_43518[(11)]);
var inst_43483 = (state_43518[(7)]);
var inst_43486 = (state_43518[(9)]);
var inst_43482 = (state_43518[(8)]);
var inst_43490 = (inst_43482[inst_43483] = inst_43486);
var inst_43491__$1 = (inst_43483 + (1));
var inst_43492 = (inst_43491__$1 < n);
var state_43518__$1 = (function (){var statearr_43532 = state_43518;
(statearr_43532[(11)] = inst_43491__$1);

(statearr_43532[(12)] = inst_43490);

return statearr_43532;
})();
if(cljs.core.truth_(inst_43492)){
var statearr_43533_43556 = state_43518__$1;
(statearr_43533_43556[(1)] = (8));

} else {
var statearr_43534_43557 = state_43518__$1;
(statearr_43534_43557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (14))){
var inst_43511 = (state_43518[(2)]);
var inst_43512 = cljs.core.async.close_BANG_.call(null,out);
var state_43518__$1 = (function (){var statearr_43536 = state_43518;
(statearr_43536[(13)] = inst_43511);

return statearr_43536;
})();
var statearr_43537_43558 = state_43518__$1;
(statearr_43537_43558[(2)] = inst_43512);

(statearr_43537_43558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (10))){
var inst_43502 = (state_43518[(2)]);
var state_43518__$1 = state_43518;
var statearr_43538_43559 = state_43518__$1;
(statearr_43538_43559[(2)] = inst_43502);

(statearr_43538_43559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43519 === (8))){
var inst_43491 = (state_43518[(11)]);
var inst_43482 = (state_43518[(8)]);
var tmp43535 = inst_43482;
var inst_43482__$1 = tmp43535;
var inst_43483 = inst_43491;
var state_43518__$1 = (function (){var statearr_43539 = state_43518;
(statearr_43539[(7)] = inst_43483);

(statearr_43539[(8)] = inst_43482__$1);

return statearr_43539;
})();
var statearr_43540_43560 = state_43518__$1;
(statearr_43540_43560[(2)] = null);

(statearr_43540_43560[(1)] = (2));


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
});})(c__33589__auto___43546,out))
;
return ((function (switch__33501__auto__,c__33589__auto___43546,out){
return (function() {
var cljs$core$async$state_machine__33502__auto__ = null;
var cljs$core$async$state_machine__33502__auto____0 = (function (){
var statearr_43541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43541[(0)] = cljs$core$async$state_machine__33502__auto__);

(statearr_43541[(1)] = (1));

return statearr_43541;
});
var cljs$core$async$state_machine__33502__auto____1 = (function (state_43518){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_43518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e43542){if((e43542 instanceof Object)){
var ex__33505__auto__ = e43542;
var statearr_43543_43561 = state_43518;
(statearr_43543_43561[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43562 = state_43518;
state_43518 = G__43562;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$state_machine__33502__auto__ = function(state_43518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33502__auto____1.call(this,state_43518);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33502__auto____0;
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33502__auto____1;
return cljs$core$async$state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___43546,out))
})();
var state__33591__auto__ = (function (){var statearr_43544 = f__33590__auto__.call(null);
(statearr_43544[(6)] = c__33589__auto___43546);

return statearr_43544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___43546,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43564 = arguments.length;
switch (G__43564) {
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
var c__33589__auto___43634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33589__auto___43634,out){
return (function (){
var f__33590__auto__ = (function (){var switch__33501__auto__ = ((function (c__33589__auto___43634,out){
return (function (state_43606){
var state_val_43607 = (state_43606[(1)]);
if((state_val_43607 === (7))){
var inst_43602 = (state_43606[(2)]);
var state_43606__$1 = state_43606;
var statearr_43608_43635 = state_43606__$1;
(statearr_43608_43635[(2)] = inst_43602);

(statearr_43608_43635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (1))){
var inst_43565 = [];
var inst_43566 = inst_43565;
var inst_43567 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43606__$1 = (function (){var statearr_43609 = state_43606;
(statearr_43609[(7)] = inst_43567);

(statearr_43609[(8)] = inst_43566);

return statearr_43609;
})();
var statearr_43610_43636 = state_43606__$1;
(statearr_43610_43636[(2)] = null);

(statearr_43610_43636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (4))){
var inst_43570 = (state_43606[(9)]);
var inst_43570__$1 = (state_43606[(2)]);
var inst_43571 = (inst_43570__$1 == null);
var inst_43572 = cljs.core.not.call(null,inst_43571);
var state_43606__$1 = (function (){var statearr_43611 = state_43606;
(statearr_43611[(9)] = inst_43570__$1);

return statearr_43611;
})();
if(inst_43572){
var statearr_43612_43637 = state_43606__$1;
(statearr_43612_43637[(1)] = (5));

} else {
var statearr_43613_43638 = state_43606__$1;
(statearr_43613_43638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (15))){
var inst_43596 = (state_43606[(2)]);
var state_43606__$1 = state_43606;
var statearr_43614_43639 = state_43606__$1;
(statearr_43614_43639[(2)] = inst_43596);

(statearr_43614_43639[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (13))){
var state_43606__$1 = state_43606;
var statearr_43615_43640 = state_43606__$1;
(statearr_43615_43640[(2)] = null);

(statearr_43615_43640[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (6))){
var inst_43566 = (state_43606[(8)]);
var inst_43591 = inst_43566.length;
var inst_43592 = (inst_43591 > (0));
var state_43606__$1 = state_43606;
if(cljs.core.truth_(inst_43592)){
var statearr_43616_43641 = state_43606__$1;
(statearr_43616_43641[(1)] = (12));

} else {
var statearr_43617_43642 = state_43606__$1;
(statearr_43617_43642[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (3))){
var inst_43604 = (state_43606[(2)]);
var state_43606__$1 = state_43606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43606__$1,inst_43604);
} else {
if((state_val_43607 === (12))){
var inst_43566 = (state_43606[(8)]);
var inst_43594 = cljs.core.vec.call(null,inst_43566);
var state_43606__$1 = state_43606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43606__$1,(15),out,inst_43594);
} else {
if((state_val_43607 === (2))){
var state_43606__$1 = state_43606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43606__$1,(4),ch);
} else {
if((state_val_43607 === (11))){
var inst_43570 = (state_43606[(9)]);
var inst_43574 = (state_43606[(10)]);
var inst_43584 = (state_43606[(2)]);
var inst_43585 = [];
var inst_43586 = inst_43585.push(inst_43570);
var inst_43566 = inst_43585;
var inst_43567 = inst_43574;
var state_43606__$1 = (function (){var statearr_43618 = state_43606;
(statearr_43618[(7)] = inst_43567);

(statearr_43618[(11)] = inst_43586);

(statearr_43618[(12)] = inst_43584);

(statearr_43618[(8)] = inst_43566);

return statearr_43618;
})();
var statearr_43619_43643 = state_43606__$1;
(statearr_43619_43643[(2)] = null);

(statearr_43619_43643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (9))){
var inst_43566 = (state_43606[(8)]);
var inst_43582 = cljs.core.vec.call(null,inst_43566);
var state_43606__$1 = state_43606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43606__$1,(11),out,inst_43582);
} else {
if((state_val_43607 === (5))){
var inst_43567 = (state_43606[(7)]);
var inst_43570 = (state_43606[(9)]);
var inst_43574 = (state_43606[(10)]);
var inst_43574__$1 = f.call(null,inst_43570);
var inst_43575 = cljs.core._EQ_.call(null,inst_43574__$1,inst_43567);
var inst_43576 = cljs.core.keyword_identical_QMARK_.call(null,inst_43567,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43577 = (inst_43575) || (inst_43576);
var state_43606__$1 = (function (){var statearr_43620 = state_43606;
(statearr_43620[(10)] = inst_43574__$1);

return statearr_43620;
})();
if(cljs.core.truth_(inst_43577)){
var statearr_43621_43644 = state_43606__$1;
(statearr_43621_43644[(1)] = (8));

} else {
var statearr_43622_43645 = state_43606__$1;
(statearr_43622_43645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (14))){
var inst_43599 = (state_43606[(2)]);
var inst_43600 = cljs.core.async.close_BANG_.call(null,out);
var state_43606__$1 = (function (){var statearr_43624 = state_43606;
(statearr_43624[(13)] = inst_43599);

return statearr_43624;
})();
var statearr_43625_43646 = state_43606__$1;
(statearr_43625_43646[(2)] = inst_43600);

(statearr_43625_43646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (10))){
var inst_43589 = (state_43606[(2)]);
var state_43606__$1 = state_43606;
var statearr_43626_43647 = state_43606__$1;
(statearr_43626_43647[(2)] = inst_43589);

(statearr_43626_43647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43607 === (8))){
var inst_43566 = (state_43606[(8)]);
var inst_43570 = (state_43606[(9)]);
var inst_43574 = (state_43606[(10)]);
var inst_43579 = inst_43566.push(inst_43570);
var tmp43623 = inst_43566;
var inst_43566__$1 = tmp43623;
var inst_43567 = inst_43574;
var state_43606__$1 = (function (){var statearr_43627 = state_43606;
(statearr_43627[(14)] = inst_43579);

(statearr_43627[(7)] = inst_43567);

(statearr_43627[(8)] = inst_43566__$1);

return statearr_43627;
})();
var statearr_43628_43648 = state_43606__$1;
(statearr_43628_43648[(2)] = null);

(statearr_43628_43648[(1)] = (2));


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
});})(c__33589__auto___43634,out))
;
return ((function (switch__33501__auto__,c__33589__auto___43634,out){
return (function() {
var cljs$core$async$state_machine__33502__auto__ = null;
var cljs$core$async$state_machine__33502__auto____0 = (function (){
var statearr_43629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43629[(0)] = cljs$core$async$state_machine__33502__auto__);

(statearr_43629[(1)] = (1));

return statearr_43629;
});
var cljs$core$async$state_machine__33502__auto____1 = (function (state_43606){
while(true){
var ret_value__33503__auto__ = (function (){try{while(true){
var result__33504__auto__ = switch__33501__auto__.call(null,state_43606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33504__auto__;
}
break;
}
}catch (e43630){if((e43630 instanceof Object)){
var ex__33505__auto__ = e43630;
var statearr_43631_43649 = state_43606;
(statearr_43631_43649[(5)] = ex__33505__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43650 = state_43606;
state_43606 = G__43650;
continue;
} else {
return ret_value__33503__auto__;
}
break;
}
});
cljs$core$async$state_machine__33502__auto__ = function(state_43606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33502__auto____1.call(this,state_43606);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33502__auto____0;
cljs$core$async$state_machine__33502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33502__auto____1;
return cljs$core$async$state_machine__33502__auto__;
})()
;})(switch__33501__auto__,c__33589__auto___43634,out))
})();
var state__33591__auto__ = (function (){var statearr_43632 = f__33590__auto__.call(null);
(statearr_43632[(6)] = c__33589__auto___43634);

return statearr_43632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33591__auto__);
});})(c__33589__auto___43634,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1513768351561
