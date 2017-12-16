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
var G__41776 = arguments.length;
switch (G__41776) {
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
if(typeof cljs.core.async.t_cljs$core$async41777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41777 = (function (f,blockable,meta41778){
this.f = f;
this.blockable = blockable;
this.meta41778 = meta41778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41779,meta41778__$1){
var self__ = this;
var _41779__$1 = this;
return (new cljs.core.async.t_cljs$core$async41777(self__.f,self__.blockable,meta41778__$1));
});

cljs.core.async.t_cljs$core$async41777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41779){
var self__ = this;
var _41779__$1 = this;
return self__.meta41778;
});

cljs.core.async.t_cljs$core$async41777.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41777.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41777.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async41777.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async41777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41778","meta41778",1161242079,null)], null);
});

cljs.core.async.t_cljs$core$async41777.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41777";

cljs.core.async.t_cljs$core$async41777.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async41777");
});

cljs.core.async.__GT_t_cljs$core$async41777 = (function cljs$core$async$__GT_t_cljs$core$async41777(f__$1,blockable__$1,meta41778){
return (new cljs.core.async.t_cljs$core$async41777(f__$1,blockable__$1,meta41778));
});

}

return (new cljs.core.async.t_cljs$core$async41777(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__41783 = arguments.length;
switch (G__41783) {
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
var G__41786 = arguments.length;
switch (G__41786) {
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
var G__41789 = arguments.length;
switch (G__41789) {
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
var val_41791 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_41791);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_41791,ret){
return (function (){
return fn1.call(null,val_41791);
});})(val_41791,ret))
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
var G__41793 = arguments.length;
switch (G__41793) {
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
var n__29231__auto___41795 = n;
var x_41796 = (0);
while(true){
if((x_41796 < n__29231__auto___41795)){
(a[x_41796] = (0));

var G__41797 = (x_41796 + (1));
x_41796 = G__41797;
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

var G__41798 = (i + (1));
i = G__41798;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async41799 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41799 = (function (flag,meta41800){
this.flag = flag;
this.meta41800 = meta41800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_41801,meta41800__$1){
var self__ = this;
var _41801__$1 = this;
return (new cljs.core.async.t_cljs$core$async41799(self__.flag,meta41800__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async41799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_41801){
var self__ = this;
var _41801__$1 = this;
return self__.meta41800;
});})(flag))
;

cljs.core.async.t_cljs$core$async41799.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async41799.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41799.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41800","meta41800",308957967,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async41799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41799";

cljs.core.async.t_cljs$core$async41799.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async41799");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async41799 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41799(flag__$1,meta41800){
return (new cljs.core.async.t_cljs$core$async41799(flag__$1,meta41800));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async41799(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async41802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41802 = (function (flag,cb,meta41803){
this.flag = flag;
this.cb = cb;
this.meta41803 = meta41803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41804,meta41803__$1){
var self__ = this;
var _41804__$1 = this;
return (new cljs.core.async.t_cljs$core$async41802(self__.flag,self__.cb,meta41803__$1));
});

cljs.core.async.t_cljs$core$async41802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41804){
var self__ = this;
var _41804__$1 = this;
return self__.meta41803;
});

cljs.core.async.t_cljs$core$async41802.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async41802.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async41802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41803","meta41803",1813519163,null)], null);
});

cljs.core.async.t_cljs$core$async41802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41802";

cljs.core.async.t_cljs$core$async41802.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async41802");
});

cljs.core.async.__GT_t_cljs$core$async41802 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41802(flag__$1,cb__$1,meta41803){
return (new cljs.core.async.t_cljs$core$async41802(flag__$1,cb__$1,meta41803));
});

}

return (new cljs.core.async.t_cljs$core$async41802(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__41805_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41805_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41806_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41806_SHARP_,port], null));
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
var G__41807 = (i + (1));
i = G__41807;
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
var len__29455__auto___41813 = arguments.length;
var i__29456__auto___41814 = (0);
while(true){
if((i__29456__auto___41814 < len__29455__auto___41813)){
args__29462__auto__.push((arguments[i__29456__auto___41814]));

var G__41815 = (i__29456__auto___41814 + (1));
i__29456__auto___41814 = G__41815;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41810){
var map__41811 = p__41810;
var map__41811__$1 = ((((!((map__41811 == null)))?((((map__41811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41811):map__41811);
var opts = map__41811__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41808){
var G__41809 = cljs.core.first.call(null,seq41808);
var seq41808__$1 = cljs.core.next.call(null,seq41808);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41809,seq41808__$1);
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
var G__41817 = arguments.length;
switch (G__41817) {
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
var c__33575__auto___41863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___41863){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___41863){
return (function (state_41841){
var state_val_41842 = (state_41841[(1)]);
if((state_val_41842 === (7))){
var inst_41837 = (state_41841[(2)]);
var state_41841__$1 = state_41841;
var statearr_41843_41864 = state_41841__$1;
(statearr_41843_41864[(2)] = inst_41837);

(statearr_41843_41864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41842 === (1))){
var state_41841__$1 = state_41841;
var statearr_41844_41865 = state_41841__$1;
(statearr_41844_41865[(2)] = null);

(statearr_41844_41865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41842 === (4))){
var inst_41820 = (state_41841[(7)]);
var inst_41820__$1 = (state_41841[(2)]);
var inst_41821 = (inst_41820__$1 == null);
var state_41841__$1 = (function (){var statearr_41845 = state_41841;
(statearr_41845[(7)] = inst_41820__$1);

return statearr_41845;
})();
if(cljs.core.truth_(inst_41821)){
var statearr_41846_41866 = state_41841__$1;
(statearr_41846_41866[(1)] = (5));

} else {
var statearr_41847_41867 = state_41841__$1;
(statearr_41847_41867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41842 === (13))){
var state_41841__$1 = state_41841;
var statearr_41848_41868 = state_41841__$1;
(statearr_41848_41868[(2)] = null);

(statearr_41848_41868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41842 === (6))){
var inst_41820 = (state_41841[(7)]);
var state_41841__$1 = state_41841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41841__$1,(11),to,inst_41820);
} else {
if((state_val_41842 === (3))){
var inst_41839 = (state_41841[(2)]);
var state_41841__$1 = state_41841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41841__$1,inst_41839);
} else {
if((state_val_41842 === (12))){
var state_41841__$1 = state_41841;
var statearr_41849_41869 = state_41841__$1;
(statearr_41849_41869[(2)] = null);

(statearr_41849_41869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41842 === (2))){
var state_41841__$1 = state_41841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41841__$1,(4),from);
} else {
if((state_val_41842 === (11))){
var inst_41830 = (state_41841[(2)]);
var state_41841__$1 = state_41841;
if(cljs.core.truth_(inst_41830)){
var statearr_41850_41870 = state_41841__$1;
(statearr_41850_41870[(1)] = (12));

} else {
var statearr_41851_41871 = state_41841__$1;
(statearr_41851_41871[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41842 === (9))){
var state_41841__$1 = state_41841;
var statearr_41852_41872 = state_41841__$1;
(statearr_41852_41872[(2)] = null);

(statearr_41852_41872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41842 === (5))){
var state_41841__$1 = state_41841;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41853_41873 = state_41841__$1;
(statearr_41853_41873[(1)] = (8));

} else {
var statearr_41854_41874 = state_41841__$1;
(statearr_41854_41874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41842 === (14))){
var inst_41835 = (state_41841[(2)]);
var state_41841__$1 = state_41841;
var statearr_41855_41875 = state_41841__$1;
(statearr_41855_41875[(2)] = inst_41835);

(statearr_41855_41875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41842 === (10))){
var inst_41827 = (state_41841[(2)]);
var state_41841__$1 = state_41841;
var statearr_41856_41876 = state_41841__$1;
(statearr_41856_41876[(2)] = inst_41827);

(statearr_41856_41876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41842 === (8))){
var inst_41824 = cljs.core.async.close_BANG_.call(null,to);
var state_41841__$1 = state_41841;
var statearr_41857_41877 = state_41841__$1;
(statearr_41857_41877[(2)] = inst_41824);

(statearr_41857_41877[(1)] = (10));


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
});})(c__33575__auto___41863))
;
return ((function (switch__33487__auto__,c__33575__auto___41863){
return (function() {
var cljs$core$async$state_machine__33488__auto__ = null;
var cljs$core$async$state_machine__33488__auto____0 = (function (){
var statearr_41858 = [null,null,null,null,null,null,null,null];
(statearr_41858[(0)] = cljs$core$async$state_machine__33488__auto__);

(statearr_41858[(1)] = (1));

return statearr_41858;
});
var cljs$core$async$state_machine__33488__auto____1 = (function (state_41841){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_41841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e41859){if((e41859 instanceof Object)){
var ex__33491__auto__ = e41859;
var statearr_41860_41878 = state_41841;
(statearr_41860_41878[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41879 = state_41841;
state_41841 = G__41879;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$state_machine__33488__auto__ = function(state_41841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33488__auto____1.call(this,state_41841);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33488__auto____0;
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33488__auto____1;
return cljs$core$async$state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___41863))
})();
var state__33577__auto__ = (function (){var statearr_41861 = f__33576__auto__.call(null);
(statearr_41861[(6)] = c__33575__auto___41863);

return statearr_41861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___41863))
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
return (function (p__41880){
var vec__41881 = p__41880;
var v = cljs.core.nth.call(null,vec__41881,(0),null);
var p = cljs.core.nth.call(null,vec__41881,(1),null);
var job = vec__41881;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33575__auto___42052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___42052,res,vec__41881,v,p,job,jobs,results){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___42052,res,vec__41881,v,p,job,jobs,results){
return (function (state_41888){
var state_val_41889 = (state_41888[(1)]);
if((state_val_41889 === (1))){
var state_41888__$1 = state_41888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41888__$1,(2),res,v);
} else {
if((state_val_41889 === (2))){
var inst_41885 = (state_41888[(2)]);
var inst_41886 = cljs.core.async.close_BANG_.call(null,res);
var state_41888__$1 = (function (){var statearr_41890 = state_41888;
(statearr_41890[(7)] = inst_41885);

return statearr_41890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41888__$1,inst_41886);
} else {
return null;
}
}
});})(c__33575__auto___42052,res,vec__41881,v,p,job,jobs,results))
;
return ((function (switch__33487__auto__,c__33575__auto___42052,res,vec__41881,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____0 = (function (){
var statearr_41891 = [null,null,null,null,null,null,null,null];
(statearr_41891[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__);

(statearr_41891[(1)] = (1));

return statearr_41891;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____1 = (function (state_41888){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_41888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e41892){if((e41892 instanceof Object)){
var ex__33491__auto__ = e41892;
var statearr_41893_42053 = state_41888;
(statearr_41893_42053[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42054 = state_41888;
state_41888 = G__42054;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__ = function(state_41888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____1.call(this,state_41888);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___42052,res,vec__41881,v,p,job,jobs,results))
})();
var state__33577__auto__ = (function (){var statearr_41894 = f__33576__auto__.call(null);
(statearr_41894[(6)] = c__33575__auto___42052);

return statearr_41894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___42052,res,vec__41881,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41895){
var vec__41896 = p__41895;
var v = cljs.core.nth.call(null,vec__41896,(0),null);
var p = cljs.core.nth.call(null,vec__41896,(1),null);
var job = vec__41896;
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
var n__29231__auto___42055 = n;
var __42056 = (0);
while(true){
if((__42056 < n__29231__auto___42055)){
var G__41899_42057 = type;
var G__41899_42058__$1 = (((G__41899_42057 instanceof cljs.core.Keyword))?G__41899_42057.fqn:null);
switch (G__41899_42058__$1) {
case "compute":
var c__33575__auto___42060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42056,c__33575__auto___42060,G__41899_42057,G__41899_42058__$1,n__29231__auto___42055,jobs,results,process,async){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (__42056,c__33575__auto___42060,G__41899_42057,G__41899_42058__$1,n__29231__auto___42055,jobs,results,process,async){
return (function (state_41912){
var state_val_41913 = (state_41912[(1)]);
if((state_val_41913 === (1))){
var state_41912__$1 = state_41912;
var statearr_41914_42061 = state_41912__$1;
(statearr_41914_42061[(2)] = null);

(statearr_41914_42061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (2))){
var state_41912__$1 = state_41912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41912__$1,(4),jobs);
} else {
if((state_val_41913 === (3))){
var inst_41910 = (state_41912[(2)]);
var state_41912__$1 = state_41912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41912__$1,inst_41910);
} else {
if((state_val_41913 === (4))){
var inst_41902 = (state_41912[(2)]);
var inst_41903 = process.call(null,inst_41902);
var state_41912__$1 = state_41912;
if(cljs.core.truth_(inst_41903)){
var statearr_41915_42062 = state_41912__$1;
(statearr_41915_42062[(1)] = (5));

} else {
var statearr_41916_42063 = state_41912__$1;
(statearr_41916_42063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (5))){
var state_41912__$1 = state_41912;
var statearr_41917_42064 = state_41912__$1;
(statearr_41917_42064[(2)] = null);

(statearr_41917_42064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (6))){
var state_41912__$1 = state_41912;
var statearr_41918_42065 = state_41912__$1;
(statearr_41918_42065[(2)] = null);

(statearr_41918_42065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (7))){
var inst_41908 = (state_41912[(2)]);
var state_41912__$1 = state_41912;
var statearr_41919_42066 = state_41912__$1;
(statearr_41919_42066[(2)] = inst_41908);

(statearr_41919_42066[(1)] = (3));


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
});})(__42056,c__33575__auto___42060,G__41899_42057,G__41899_42058__$1,n__29231__auto___42055,jobs,results,process,async))
;
return ((function (__42056,switch__33487__auto__,c__33575__auto___42060,G__41899_42057,G__41899_42058__$1,n__29231__auto___42055,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____0 = (function (){
var statearr_41920 = [null,null,null,null,null,null,null];
(statearr_41920[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__);

(statearr_41920[(1)] = (1));

return statearr_41920;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____1 = (function (state_41912){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_41912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e41921){if((e41921 instanceof Object)){
var ex__33491__auto__ = e41921;
var statearr_41922_42067 = state_41912;
(statearr_41922_42067[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42068 = state_41912;
state_41912 = G__42068;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__ = function(state_41912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____1.call(this,state_41912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__;
})()
;})(__42056,switch__33487__auto__,c__33575__auto___42060,G__41899_42057,G__41899_42058__$1,n__29231__auto___42055,jobs,results,process,async))
})();
var state__33577__auto__ = (function (){var statearr_41923 = f__33576__auto__.call(null);
(statearr_41923[(6)] = c__33575__auto___42060);

return statearr_41923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(__42056,c__33575__auto___42060,G__41899_42057,G__41899_42058__$1,n__29231__auto___42055,jobs,results,process,async))
);


break;
case "async":
var c__33575__auto___42069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42056,c__33575__auto___42069,G__41899_42057,G__41899_42058__$1,n__29231__auto___42055,jobs,results,process,async){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (__42056,c__33575__auto___42069,G__41899_42057,G__41899_42058__$1,n__29231__auto___42055,jobs,results,process,async){
return (function (state_41936){
var state_val_41937 = (state_41936[(1)]);
if((state_val_41937 === (1))){
var state_41936__$1 = state_41936;
var statearr_41938_42070 = state_41936__$1;
(statearr_41938_42070[(2)] = null);

(statearr_41938_42070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41937 === (2))){
var state_41936__$1 = state_41936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41936__$1,(4),jobs);
} else {
if((state_val_41937 === (3))){
var inst_41934 = (state_41936[(2)]);
var state_41936__$1 = state_41936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41936__$1,inst_41934);
} else {
if((state_val_41937 === (4))){
var inst_41926 = (state_41936[(2)]);
var inst_41927 = async.call(null,inst_41926);
var state_41936__$1 = state_41936;
if(cljs.core.truth_(inst_41927)){
var statearr_41939_42071 = state_41936__$1;
(statearr_41939_42071[(1)] = (5));

} else {
var statearr_41940_42072 = state_41936__$1;
(statearr_41940_42072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41937 === (5))){
var state_41936__$1 = state_41936;
var statearr_41941_42073 = state_41936__$1;
(statearr_41941_42073[(2)] = null);

(statearr_41941_42073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41937 === (6))){
var state_41936__$1 = state_41936;
var statearr_41942_42074 = state_41936__$1;
(statearr_41942_42074[(2)] = null);

(statearr_41942_42074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41937 === (7))){
var inst_41932 = (state_41936[(2)]);
var state_41936__$1 = state_41936;
var statearr_41943_42075 = state_41936__$1;
(statearr_41943_42075[(2)] = inst_41932);

(statearr_41943_42075[(1)] = (3));


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
});})(__42056,c__33575__auto___42069,G__41899_42057,G__41899_42058__$1,n__29231__auto___42055,jobs,results,process,async))
;
return ((function (__42056,switch__33487__auto__,c__33575__auto___42069,G__41899_42057,G__41899_42058__$1,n__29231__auto___42055,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____0 = (function (){
var statearr_41944 = [null,null,null,null,null,null,null];
(statearr_41944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__);

(statearr_41944[(1)] = (1));

return statearr_41944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____1 = (function (state_41936){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_41936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e41945){if((e41945 instanceof Object)){
var ex__33491__auto__ = e41945;
var statearr_41946_42076 = state_41936;
(statearr_41946_42076[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42077 = state_41936;
state_41936 = G__42077;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__ = function(state_41936){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____1.call(this,state_41936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__;
})()
;})(__42056,switch__33487__auto__,c__33575__auto___42069,G__41899_42057,G__41899_42058__$1,n__29231__auto___42055,jobs,results,process,async))
})();
var state__33577__auto__ = (function (){var statearr_41947 = f__33576__auto__.call(null);
(statearr_41947[(6)] = c__33575__auto___42069);

return statearr_41947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(__42056,c__33575__auto___42069,G__41899_42057,G__41899_42058__$1,n__29231__auto___42055,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41899_42058__$1)].join('')));

}

var G__42078 = (__42056 + (1));
__42056 = G__42078;
continue;
} else {
}
break;
}

var c__33575__auto___42079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___42079,jobs,results,process,async){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___42079,jobs,results,process,async){
return (function (state_41969){
var state_val_41970 = (state_41969[(1)]);
if((state_val_41970 === (1))){
var state_41969__$1 = state_41969;
var statearr_41971_42080 = state_41969__$1;
(statearr_41971_42080[(2)] = null);

(statearr_41971_42080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (2))){
var state_41969__$1 = state_41969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41969__$1,(4),from);
} else {
if((state_val_41970 === (3))){
var inst_41967 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41969__$1,inst_41967);
} else {
if((state_val_41970 === (4))){
var inst_41950 = (state_41969[(7)]);
var inst_41950__$1 = (state_41969[(2)]);
var inst_41951 = (inst_41950__$1 == null);
var state_41969__$1 = (function (){var statearr_41972 = state_41969;
(statearr_41972[(7)] = inst_41950__$1);

return statearr_41972;
})();
if(cljs.core.truth_(inst_41951)){
var statearr_41973_42081 = state_41969__$1;
(statearr_41973_42081[(1)] = (5));

} else {
var statearr_41974_42082 = state_41969__$1;
(statearr_41974_42082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (5))){
var inst_41953 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41969__$1 = state_41969;
var statearr_41975_42083 = state_41969__$1;
(statearr_41975_42083[(2)] = inst_41953);

(statearr_41975_42083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (6))){
var inst_41950 = (state_41969[(7)]);
var inst_41955 = (state_41969[(8)]);
var inst_41955__$1 = cljs.core.async.chan.call(null,(1));
var inst_41956 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41957 = [inst_41950,inst_41955__$1];
var inst_41958 = (new cljs.core.PersistentVector(null,2,(5),inst_41956,inst_41957,null));
var state_41969__$1 = (function (){var statearr_41976 = state_41969;
(statearr_41976[(8)] = inst_41955__$1);

return statearr_41976;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41969__$1,(8),jobs,inst_41958);
} else {
if((state_val_41970 === (7))){
var inst_41965 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_41977_42084 = state_41969__$1;
(statearr_41977_42084[(2)] = inst_41965);

(statearr_41977_42084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (8))){
var inst_41955 = (state_41969[(8)]);
var inst_41960 = (state_41969[(2)]);
var state_41969__$1 = (function (){var statearr_41978 = state_41969;
(statearr_41978[(9)] = inst_41960);

return statearr_41978;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41969__$1,(9),results,inst_41955);
} else {
if((state_val_41970 === (9))){
var inst_41962 = (state_41969[(2)]);
var state_41969__$1 = (function (){var statearr_41979 = state_41969;
(statearr_41979[(10)] = inst_41962);

return statearr_41979;
})();
var statearr_41980_42085 = state_41969__$1;
(statearr_41980_42085[(2)] = null);

(statearr_41980_42085[(1)] = (2));


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
});})(c__33575__auto___42079,jobs,results,process,async))
;
return ((function (switch__33487__auto__,c__33575__auto___42079,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____0 = (function (){
var statearr_41981 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41981[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__);

(statearr_41981[(1)] = (1));

return statearr_41981;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____1 = (function (state_41969){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_41969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e41982){if((e41982 instanceof Object)){
var ex__33491__auto__ = e41982;
var statearr_41983_42086 = state_41969;
(statearr_41983_42086[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42087 = state_41969;
state_41969 = G__42087;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__ = function(state_41969){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____1.call(this,state_41969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___42079,jobs,results,process,async))
})();
var state__33577__auto__ = (function (){var statearr_41984 = f__33576__auto__.call(null);
(statearr_41984[(6)] = c__33575__auto___42079);

return statearr_41984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___42079,jobs,results,process,async))
);


var c__33575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto__,jobs,results,process,async){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto__,jobs,results,process,async){
return (function (state_42022){
var state_val_42023 = (state_42022[(1)]);
if((state_val_42023 === (7))){
var inst_42018 = (state_42022[(2)]);
var state_42022__$1 = state_42022;
var statearr_42024_42088 = state_42022__$1;
(statearr_42024_42088[(2)] = inst_42018);

(statearr_42024_42088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (20))){
var state_42022__$1 = state_42022;
var statearr_42025_42089 = state_42022__$1;
(statearr_42025_42089[(2)] = null);

(statearr_42025_42089[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (1))){
var state_42022__$1 = state_42022;
var statearr_42026_42090 = state_42022__$1;
(statearr_42026_42090[(2)] = null);

(statearr_42026_42090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (4))){
var inst_41987 = (state_42022[(7)]);
var inst_41987__$1 = (state_42022[(2)]);
var inst_41988 = (inst_41987__$1 == null);
var state_42022__$1 = (function (){var statearr_42027 = state_42022;
(statearr_42027[(7)] = inst_41987__$1);

return statearr_42027;
})();
if(cljs.core.truth_(inst_41988)){
var statearr_42028_42091 = state_42022__$1;
(statearr_42028_42091[(1)] = (5));

} else {
var statearr_42029_42092 = state_42022__$1;
(statearr_42029_42092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (15))){
var inst_42000 = (state_42022[(8)]);
var state_42022__$1 = state_42022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42022__$1,(18),to,inst_42000);
} else {
if((state_val_42023 === (21))){
var inst_42013 = (state_42022[(2)]);
var state_42022__$1 = state_42022;
var statearr_42030_42093 = state_42022__$1;
(statearr_42030_42093[(2)] = inst_42013);

(statearr_42030_42093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (13))){
var inst_42015 = (state_42022[(2)]);
var state_42022__$1 = (function (){var statearr_42031 = state_42022;
(statearr_42031[(9)] = inst_42015);

return statearr_42031;
})();
var statearr_42032_42094 = state_42022__$1;
(statearr_42032_42094[(2)] = null);

(statearr_42032_42094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (6))){
var inst_41987 = (state_42022[(7)]);
var state_42022__$1 = state_42022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42022__$1,(11),inst_41987);
} else {
if((state_val_42023 === (17))){
var inst_42008 = (state_42022[(2)]);
var state_42022__$1 = state_42022;
if(cljs.core.truth_(inst_42008)){
var statearr_42033_42095 = state_42022__$1;
(statearr_42033_42095[(1)] = (19));

} else {
var statearr_42034_42096 = state_42022__$1;
(statearr_42034_42096[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (3))){
var inst_42020 = (state_42022[(2)]);
var state_42022__$1 = state_42022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42022__$1,inst_42020);
} else {
if((state_val_42023 === (12))){
var inst_41997 = (state_42022[(10)]);
var state_42022__$1 = state_42022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42022__$1,(14),inst_41997);
} else {
if((state_val_42023 === (2))){
var state_42022__$1 = state_42022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42022__$1,(4),results);
} else {
if((state_val_42023 === (19))){
var state_42022__$1 = state_42022;
var statearr_42035_42097 = state_42022__$1;
(statearr_42035_42097[(2)] = null);

(statearr_42035_42097[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (11))){
var inst_41997 = (state_42022[(2)]);
var state_42022__$1 = (function (){var statearr_42036 = state_42022;
(statearr_42036[(10)] = inst_41997);

return statearr_42036;
})();
var statearr_42037_42098 = state_42022__$1;
(statearr_42037_42098[(2)] = null);

(statearr_42037_42098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (9))){
var state_42022__$1 = state_42022;
var statearr_42038_42099 = state_42022__$1;
(statearr_42038_42099[(2)] = null);

(statearr_42038_42099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (5))){
var state_42022__$1 = state_42022;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42039_42100 = state_42022__$1;
(statearr_42039_42100[(1)] = (8));

} else {
var statearr_42040_42101 = state_42022__$1;
(statearr_42040_42101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (14))){
var inst_42002 = (state_42022[(11)]);
var inst_42000 = (state_42022[(8)]);
var inst_42000__$1 = (state_42022[(2)]);
var inst_42001 = (inst_42000__$1 == null);
var inst_42002__$1 = cljs.core.not.call(null,inst_42001);
var state_42022__$1 = (function (){var statearr_42041 = state_42022;
(statearr_42041[(11)] = inst_42002__$1);

(statearr_42041[(8)] = inst_42000__$1);

return statearr_42041;
})();
if(inst_42002__$1){
var statearr_42042_42102 = state_42022__$1;
(statearr_42042_42102[(1)] = (15));

} else {
var statearr_42043_42103 = state_42022__$1;
(statearr_42043_42103[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (16))){
var inst_42002 = (state_42022[(11)]);
var state_42022__$1 = state_42022;
var statearr_42044_42104 = state_42022__$1;
(statearr_42044_42104[(2)] = inst_42002);

(statearr_42044_42104[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (10))){
var inst_41994 = (state_42022[(2)]);
var state_42022__$1 = state_42022;
var statearr_42045_42105 = state_42022__$1;
(statearr_42045_42105[(2)] = inst_41994);

(statearr_42045_42105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (18))){
var inst_42005 = (state_42022[(2)]);
var state_42022__$1 = state_42022;
var statearr_42046_42106 = state_42022__$1;
(statearr_42046_42106[(2)] = inst_42005);

(statearr_42046_42106[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42023 === (8))){
var inst_41991 = cljs.core.async.close_BANG_.call(null,to);
var state_42022__$1 = state_42022;
var statearr_42047_42107 = state_42022__$1;
(statearr_42047_42107[(2)] = inst_41991);

(statearr_42047_42107[(1)] = (10));


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
});})(c__33575__auto__,jobs,results,process,async))
;
return ((function (switch__33487__auto__,c__33575__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____0 = (function (){
var statearr_42048 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42048[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__);

(statearr_42048[(1)] = (1));

return statearr_42048;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____1 = (function (state_42022){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_42022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e42049){if((e42049 instanceof Object)){
var ex__33491__auto__ = e42049;
var statearr_42050_42108 = state_42022;
(statearr_42050_42108[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42109 = state_42022;
state_42022 = G__42109;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__ = function(state_42022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____1.call(this,state_42022);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33488__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto__,jobs,results,process,async))
})();
var state__33577__auto__ = (function (){var statearr_42051 = f__33576__auto__.call(null);
(statearr_42051[(6)] = c__33575__auto__);

return statearr_42051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto__,jobs,results,process,async))
);

return c__33575__auto__;
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
var G__42111 = arguments.length;
switch (G__42111) {
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
var G__42114 = arguments.length;
switch (G__42114) {
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
var G__42117 = arguments.length;
switch (G__42117) {
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
var c__33575__auto___42166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___42166,tc,fc){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___42166,tc,fc){
return (function (state_42143){
var state_val_42144 = (state_42143[(1)]);
if((state_val_42144 === (7))){
var inst_42139 = (state_42143[(2)]);
var state_42143__$1 = state_42143;
var statearr_42145_42167 = state_42143__$1;
(statearr_42145_42167[(2)] = inst_42139);

(statearr_42145_42167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (1))){
var state_42143__$1 = state_42143;
var statearr_42146_42168 = state_42143__$1;
(statearr_42146_42168[(2)] = null);

(statearr_42146_42168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (4))){
var inst_42120 = (state_42143[(7)]);
var inst_42120__$1 = (state_42143[(2)]);
var inst_42121 = (inst_42120__$1 == null);
var state_42143__$1 = (function (){var statearr_42147 = state_42143;
(statearr_42147[(7)] = inst_42120__$1);

return statearr_42147;
})();
if(cljs.core.truth_(inst_42121)){
var statearr_42148_42169 = state_42143__$1;
(statearr_42148_42169[(1)] = (5));

} else {
var statearr_42149_42170 = state_42143__$1;
(statearr_42149_42170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (13))){
var state_42143__$1 = state_42143;
var statearr_42150_42171 = state_42143__$1;
(statearr_42150_42171[(2)] = null);

(statearr_42150_42171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (6))){
var inst_42120 = (state_42143[(7)]);
var inst_42126 = p.call(null,inst_42120);
var state_42143__$1 = state_42143;
if(cljs.core.truth_(inst_42126)){
var statearr_42151_42172 = state_42143__$1;
(statearr_42151_42172[(1)] = (9));

} else {
var statearr_42152_42173 = state_42143__$1;
(statearr_42152_42173[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (3))){
var inst_42141 = (state_42143[(2)]);
var state_42143__$1 = state_42143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42143__$1,inst_42141);
} else {
if((state_val_42144 === (12))){
var state_42143__$1 = state_42143;
var statearr_42153_42174 = state_42143__$1;
(statearr_42153_42174[(2)] = null);

(statearr_42153_42174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (2))){
var state_42143__$1 = state_42143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42143__$1,(4),ch);
} else {
if((state_val_42144 === (11))){
var inst_42120 = (state_42143[(7)]);
var inst_42130 = (state_42143[(2)]);
var state_42143__$1 = state_42143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42143__$1,(8),inst_42130,inst_42120);
} else {
if((state_val_42144 === (9))){
var state_42143__$1 = state_42143;
var statearr_42154_42175 = state_42143__$1;
(statearr_42154_42175[(2)] = tc);

(statearr_42154_42175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (5))){
var inst_42123 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42124 = cljs.core.async.close_BANG_.call(null,fc);
var state_42143__$1 = (function (){var statearr_42155 = state_42143;
(statearr_42155[(8)] = inst_42123);

return statearr_42155;
})();
var statearr_42156_42176 = state_42143__$1;
(statearr_42156_42176[(2)] = inst_42124);

(statearr_42156_42176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (14))){
var inst_42137 = (state_42143[(2)]);
var state_42143__$1 = state_42143;
var statearr_42157_42177 = state_42143__$1;
(statearr_42157_42177[(2)] = inst_42137);

(statearr_42157_42177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (10))){
var state_42143__$1 = state_42143;
var statearr_42158_42178 = state_42143__$1;
(statearr_42158_42178[(2)] = fc);

(statearr_42158_42178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (8))){
var inst_42132 = (state_42143[(2)]);
var state_42143__$1 = state_42143;
if(cljs.core.truth_(inst_42132)){
var statearr_42159_42179 = state_42143__$1;
(statearr_42159_42179[(1)] = (12));

} else {
var statearr_42160_42180 = state_42143__$1;
(statearr_42160_42180[(1)] = (13));

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
});})(c__33575__auto___42166,tc,fc))
;
return ((function (switch__33487__auto__,c__33575__auto___42166,tc,fc){
return (function() {
var cljs$core$async$state_machine__33488__auto__ = null;
var cljs$core$async$state_machine__33488__auto____0 = (function (){
var statearr_42161 = [null,null,null,null,null,null,null,null,null];
(statearr_42161[(0)] = cljs$core$async$state_machine__33488__auto__);

(statearr_42161[(1)] = (1));

return statearr_42161;
});
var cljs$core$async$state_machine__33488__auto____1 = (function (state_42143){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_42143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e42162){if((e42162 instanceof Object)){
var ex__33491__auto__ = e42162;
var statearr_42163_42181 = state_42143;
(statearr_42163_42181[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42182 = state_42143;
state_42143 = G__42182;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$state_machine__33488__auto__ = function(state_42143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33488__auto____1.call(this,state_42143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33488__auto____0;
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33488__auto____1;
return cljs$core$async$state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___42166,tc,fc))
})();
var state__33577__auto__ = (function (){var statearr_42164 = f__33576__auto__.call(null);
(statearr_42164[(6)] = c__33575__auto___42166);

return statearr_42164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___42166,tc,fc))
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
var c__33575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto__){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto__){
return (function (state_42203){
var state_val_42204 = (state_42203[(1)]);
if((state_val_42204 === (7))){
var inst_42199 = (state_42203[(2)]);
var state_42203__$1 = state_42203;
var statearr_42205_42223 = state_42203__$1;
(statearr_42205_42223[(2)] = inst_42199);

(statearr_42205_42223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (1))){
var inst_42183 = init;
var state_42203__$1 = (function (){var statearr_42206 = state_42203;
(statearr_42206[(7)] = inst_42183);

return statearr_42206;
})();
var statearr_42207_42224 = state_42203__$1;
(statearr_42207_42224[(2)] = null);

(statearr_42207_42224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (4))){
var inst_42186 = (state_42203[(8)]);
var inst_42186__$1 = (state_42203[(2)]);
var inst_42187 = (inst_42186__$1 == null);
var state_42203__$1 = (function (){var statearr_42208 = state_42203;
(statearr_42208[(8)] = inst_42186__$1);

return statearr_42208;
})();
if(cljs.core.truth_(inst_42187)){
var statearr_42209_42225 = state_42203__$1;
(statearr_42209_42225[(1)] = (5));

} else {
var statearr_42210_42226 = state_42203__$1;
(statearr_42210_42226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (6))){
var inst_42186 = (state_42203[(8)]);
var inst_42183 = (state_42203[(7)]);
var inst_42190 = (state_42203[(9)]);
var inst_42190__$1 = f.call(null,inst_42183,inst_42186);
var inst_42191 = cljs.core.reduced_QMARK_.call(null,inst_42190__$1);
var state_42203__$1 = (function (){var statearr_42211 = state_42203;
(statearr_42211[(9)] = inst_42190__$1);

return statearr_42211;
})();
if(inst_42191){
var statearr_42212_42227 = state_42203__$1;
(statearr_42212_42227[(1)] = (8));

} else {
var statearr_42213_42228 = state_42203__$1;
(statearr_42213_42228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (3))){
var inst_42201 = (state_42203[(2)]);
var state_42203__$1 = state_42203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42203__$1,inst_42201);
} else {
if((state_val_42204 === (2))){
var state_42203__$1 = state_42203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42203__$1,(4),ch);
} else {
if((state_val_42204 === (9))){
var inst_42190 = (state_42203[(9)]);
var inst_42183 = inst_42190;
var state_42203__$1 = (function (){var statearr_42214 = state_42203;
(statearr_42214[(7)] = inst_42183);

return statearr_42214;
})();
var statearr_42215_42229 = state_42203__$1;
(statearr_42215_42229[(2)] = null);

(statearr_42215_42229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (5))){
var inst_42183 = (state_42203[(7)]);
var state_42203__$1 = state_42203;
var statearr_42216_42230 = state_42203__$1;
(statearr_42216_42230[(2)] = inst_42183);

(statearr_42216_42230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (10))){
var inst_42197 = (state_42203[(2)]);
var state_42203__$1 = state_42203;
var statearr_42217_42231 = state_42203__$1;
(statearr_42217_42231[(2)] = inst_42197);

(statearr_42217_42231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (8))){
var inst_42190 = (state_42203[(9)]);
var inst_42193 = cljs.core.deref.call(null,inst_42190);
var state_42203__$1 = state_42203;
var statearr_42218_42232 = state_42203__$1;
(statearr_42218_42232[(2)] = inst_42193);

(statearr_42218_42232[(1)] = (10));


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
});})(c__33575__auto__))
;
return ((function (switch__33487__auto__,c__33575__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33488__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33488__auto____0 = (function (){
var statearr_42219 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42219[(0)] = cljs$core$async$reduce_$_state_machine__33488__auto__);

(statearr_42219[(1)] = (1));

return statearr_42219;
});
var cljs$core$async$reduce_$_state_machine__33488__auto____1 = (function (state_42203){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_42203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e42220){if((e42220 instanceof Object)){
var ex__33491__auto__ = e42220;
var statearr_42221_42233 = state_42203;
(statearr_42221_42233[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42234 = state_42203;
state_42203 = G__42234;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33488__auto__ = function(state_42203){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33488__auto____1.call(this,state_42203);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33488__auto____0;
cljs$core$async$reduce_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33488__auto____1;
return cljs$core$async$reduce_$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto__))
})();
var state__33577__auto__ = (function (){var statearr_42222 = f__33576__auto__.call(null);
(statearr_42222[(6)] = c__33575__auto__);

return statearr_42222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto__))
);

return c__33575__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto__,f__$1){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto__,f__$1){
return (function (state_42240){
var state_val_42241 = (state_42240[(1)]);
if((state_val_42241 === (1))){
var inst_42235 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42240__$1 = state_42240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42240__$1,(2),inst_42235);
} else {
if((state_val_42241 === (2))){
var inst_42237 = (state_42240[(2)]);
var inst_42238 = f__$1.call(null,inst_42237);
var state_42240__$1 = state_42240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42240__$1,inst_42238);
} else {
return null;
}
}
});})(c__33575__auto__,f__$1))
;
return ((function (switch__33487__auto__,c__33575__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33488__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33488__auto____0 = (function (){
var statearr_42242 = [null,null,null,null,null,null,null];
(statearr_42242[(0)] = cljs$core$async$transduce_$_state_machine__33488__auto__);

(statearr_42242[(1)] = (1));

return statearr_42242;
});
var cljs$core$async$transduce_$_state_machine__33488__auto____1 = (function (state_42240){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_42240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e42243){if((e42243 instanceof Object)){
var ex__33491__auto__ = e42243;
var statearr_42244_42246 = state_42240;
(statearr_42244_42246[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42247 = state_42240;
state_42240 = G__42247;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33488__auto__ = function(state_42240){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33488__auto____1.call(this,state_42240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33488__auto____0;
cljs$core$async$transduce_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33488__auto____1;
return cljs$core$async$transduce_$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto__,f__$1))
})();
var state__33577__auto__ = (function (){var statearr_42245 = f__33576__auto__.call(null);
(statearr_42245[(6)] = c__33575__auto__);

return statearr_42245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto__,f__$1))
);

return c__33575__auto__;
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
var G__42249 = arguments.length;
switch (G__42249) {
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
var c__33575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto__){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto__){
return (function (state_42274){
var state_val_42275 = (state_42274[(1)]);
if((state_val_42275 === (7))){
var inst_42256 = (state_42274[(2)]);
var state_42274__$1 = state_42274;
var statearr_42276_42297 = state_42274__$1;
(statearr_42276_42297[(2)] = inst_42256);

(statearr_42276_42297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42275 === (1))){
var inst_42250 = cljs.core.seq.call(null,coll);
var inst_42251 = inst_42250;
var state_42274__$1 = (function (){var statearr_42277 = state_42274;
(statearr_42277[(7)] = inst_42251);

return statearr_42277;
})();
var statearr_42278_42298 = state_42274__$1;
(statearr_42278_42298[(2)] = null);

(statearr_42278_42298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42275 === (4))){
var inst_42251 = (state_42274[(7)]);
var inst_42254 = cljs.core.first.call(null,inst_42251);
var state_42274__$1 = state_42274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42274__$1,(7),ch,inst_42254);
} else {
if((state_val_42275 === (13))){
var inst_42268 = (state_42274[(2)]);
var state_42274__$1 = state_42274;
var statearr_42279_42299 = state_42274__$1;
(statearr_42279_42299[(2)] = inst_42268);

(statearr_42279_42299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42275 === (6))){
var inst_42259 = (state_42274[(2)]);
var state_42274__$1 = state_42274;
if(cljs.core.truth_(inst_42259)){
var statearr_42280_42300 = state_42274__$1;
(statearr_42280_42300[(1)] = (8));

} else {
var statearr_42281_42301 = state_42274__$1;
(statearr_42281_42301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42275 === (3))){
var inst_42272 = (state_42274[(2)]);
var state_42274__$1 = state_42274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42274__$1,inst_42272);
} else {
if((state_val_42275 === (12))){
var state_42274__$1 = state_42274;
var statearr_42282_42302 = state_42274__$1;
(statearr_42282_42302[(2)] = null);

(statearr_42282_42302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42275 === (2))){
var inst_42251 = (state_42274[(7)]);
var state_42274__$1 = state_42274;
if(cljs.core.truth_(inst_42251)){
var statearr_42283_42303 = state_42274__$1;
(statearr_42283_42303[(1)] = (4));

} else {
var statearr_42284_42304 = state_42274__$1;
(statearr_42284_42304[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42275 === (11))){
var inst_42265 = cljs.core.async.close_BANG_.call(null,ch);
var state_42274__$1 = state_42274;
var statearr_42285_42305 = state_42274__$1;
(statearr_42285_42305[(2)] = inst_42265);

(statearr_42285_42305[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42275 === (9))){
var state_42274__$1 = state_42274;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42286_42306 = state_42274__$1;
(statearr_42286_42306[(1)] = (11));

} else {
var statearr_42287_42307 = state_42274__$1;
(statearr_42287_42307[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42275 === (5))){
var inst_42251 = (state_42274[(7)]);
var state_42274__$1 = state_42274;
var statearr_42288_42308 = state_42274__$1;
(statearr_42288_42308[(2)] = inst_42251);

(statearr_42288_42308[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42275 === (10))){
var inst_42270 = (state_42274[(2)]);
var state_42274__$1 = state_42274;
var statearr_42289_42309 = state_42274__$1;
(statearr_42289_42309[(2)] = inst_42270);

(statearr_42289_42309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42275 === (8))){
var inst_42251 = (state_42274[(7)]);
var inst_42261 = cljs.core.next.call(null,inst_42251);
var inst_42251__$1 = inst_42261;
var state_42274__$1 = (function (){var statearr_42290 = state_42274;
(statearr_42290[(7)] = inst_42251__$1);

return statearr_42290;
})();
var statearr_42291_42310 = state_42274__$1;
(statearr_42291_42310[(2)] = null);

(statearr_42291_42310[(1)] = (2));


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
});})(c__33575__auto__))
;
return ((function (switch__33487__auto__,c__33575__auto__){
return (function() {
var cljs$core$async$state_machine__33488__auto__ = null;
var cljs$core$async$state_machine__33488__auto____0 = (function (){
var statearr_42292 = [null,null,null,null,null,null,null,null];
(statearr_42292[(0)] = cljs$core$async$state_machine__33488__auto__);

(statearr_42292[(1)] = (1));

return statearr_42292;
});
var cljs$core$async$state_machine__33488__auto____1 = (function (state_42274){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_42274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e42293){if((e42293 instanceof Object)){
var ex__33491__auto__ = e42293;
var statearr_42294_42311 = state_42274;
(statearr_42294_42311[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42312 = state_42274;
state_42274 = G__42312;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$state_machine__33488__auto__ = function(state_42274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33488__auto____1.call(this,state_42274);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33488__auto____0;
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33488__auto____1;
return cljs$core$async$state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto__))
})();
var state__33577__auto__ = (function (){var statearr_42295 = f__33576__auto__.call(null);
(statearr_42295[(6)] = c__33575__auto__);

return statearr_42295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto__))
);

return c__33575__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async42313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42313 = (function (ch,cs,meta42314){
this.ch = ch;
this.cs = cs;
this.meta42314 = meta42314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42315,meta42314__$1){
var self__ = this;
var _42315__$1 = this;
return (new cljs.core.async.t_cljs$core$async42313(self__.ch,self__.cs,meta42314__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42315){
var self__ = this;
var _42315__$1 = this;
return self__.meta42314;
});})(cs))
;

cljs.core.async.t_cljs$core$async42313.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42313.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42313.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42313.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42313.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42313.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42313.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42314","meta42314",-1550151046,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42313";

cljs.core.async.t_cljs$core$async42313.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async42313");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42313 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42313(ch__$1,cs__$1,meta42314){
return (new cljs.core.async.t_cljs$core$async42313(ch__$1,cs__$1,meta42314));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42313(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33575__auto___42535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___42535,cs,m,dchan,dctr,done){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___42535,cs,m,dchan,dctr,done){
return (function (state_42450){
var state_val_42451 = (state_42450[(1)]);
if((state_val_42451 === (7))){
var inst_42446 = (state_42450[(2)]);
var state_42450__$1 = state_42450;
var statearr_42452_42536 = state_42450__$1;
(statearr_42452_42536[(2)] = inst_42446);

(statearr_42452_42536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (20))){
var inst_42349 = (state_42450[(7)]);
var inst_42361 = cljs.core.first.call(null,inst_42349);
var inst_42362 = cljs.core.nth.call(null,inst_42361,(0),null);
var inst_42363 = cljs.core.nth.call(null,inst_42361,(1),null);
var state_42450__$1 = (function (){var statearr_42453 = state_42450;
(statearr_42453[(8)] = inst_42362);

return statearr_42453;
})();
if(cljs.core.truth_(inst_42363)){
var statearr_42454_42537 = state_42450__$1;
(statearr_42454_42537[(1)] = (22));

} else {
var statearr_42455_42538 = state_42450__$1;
(statearr_42455_42538[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (27))){
var inst_42318 = (state_42450[(9)]);
var inst_42391 = (state_42450[(10)]);
var inst_42393 = (state_42450[(11)]);
var inst_42398 = (state_42450[(12)]);
var inst_42398__$1 = cljs.core._nth.call(null,inst_42391,inst_42393);
var inst_42399 = cljs.core.async.put_BANG_.call(null,inst_42398__$1,inst_42318,done);
var state_42450__$1 = (function (){var statearr_42456 = state_42450;
(statearr_42456[(12)] = inst_42398__$1);

return statearr_42456;
})();
if(cljs.core.truth_(inst_42399)){
var statearr_42457_42539 = state_42450__$1;
(statearr_42457_42539[(1)] = (30));

} else {
var statearr_42458_42540 = state_42450__$1;
(statearr_42458_42540[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (1))){
var state_42450__$1 = state_42450;
var statearr_42459_42541 = state_42450__$1;
(statearr_42459_42541[(2)] = null);

(statearr_42459_42541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (24))){
var inst_42349 = (state_42450[(7)]);
var inst_42368 = (state_42450[(2)]);
var inst_42369 = cljs.core.next.call(null,inst_42349);
var inst_42327 = inst_42369;
var inst_42328 = null;
var inst_42329 = (0);
var inst_42330 = (0);
var state_42450__$1 = (function (){var statearr_42460 = state_42450;
(statearr_42460[(13)] = inst_42328);

(statearr_42460[(14)] = inst_42330);

(statearr_42460[(15)] = inst_42327);

(statearr_42460[(16)] = inst_42368);

(statearr_42460[(17)] = inst_42329);

return statearr_42460;
})();
var statearr_42461_42542 = state_42450__$1;
(statearr_42461_42542[(2)] = null);

(statearr_42461_42542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (39))){
var state_42450__$1 = state_42450;
var statearr_42465_42543 = state_42450__$1;
(statearr_42465_42543[(2)] = null);

(statearr_42465_42543[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (4))){
var inst_42318 = (state_42450[(9)]);
var inst_42318__$1 = (state_42450[(2)]);
var inst_42319 = (inst_42318__$1 == null);
var state_42450__$1 = (function (){var statearr_42466 = state_42450;
(statearr_42466[(9)] = inst_42318__$1);

return statearr_42466;
})();
if(cljs.core.truth_(inst_42319)){
var statearr_42467_42544 = state_42450__$1;
(statearr_42467_42544[(1)] = (5));

} else {
var statearr_42468_42545 = state_42450__$1;
(statearr_42468_42545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (15))){
var inst_42328 = (state_42450[(13)]);
var inst_42330 = (state_42450[(14)]);
var inst_42327 = (state_42450[(15)]);
var inst_42329 = (state_42450[(17)]);
var inst_42345 = (state_42450[(2)]);
var inst_42346 = (inst_42330 + (1));
var tmp42462 = inst_42328;
var tmp42463 = inst_42327;
var tmp42464 = inst_42329;
var inst_42327__$1 = tmp42463;
var inst_42328__$1 = tmp42462;
var inst_42329__$1 = tmp42464;
var inst_42330__$1 = inst_42346;
var state_42450__$1 = (function (){var statearr_42469 = state_42450;
(statearr_42469[(13)] = inst_42328__$1);

(statearr_42469[(18)] = inst_42345);

(statearr_42469[(14)] = inst_42330__$1);

(statearr_42469[(15)] = inst_42327__$1);

(statearr_42469[(17)] = inst_42329__$1);

return statearr_42469;
})();
var statearr_42470_42546 = state_42450__$1;
(statearr_42470_42546[(2)] = null);

(statearr_42470_42546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (21))){
var inst_42372 = (state_42450[(2)]);
var state_42450__$1 = state_42450;
var statearr_42474_42547 = state_42450__$1;
(statearr_42474_42547[(2)] = inst_42372);

(statearr_42474_42547[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (31))){
var inst_42398 = (state_42450[(12)]);
var inst_42402 = done.call(null,null);
var inst_42403 = cljs.core.async.untap_STAR_.call(null,m,inst_42398);
var state_42450__$1 = (function (){var statearr_42475 = state_42450;
(statearr_42475[(19)] = inst_42402);

return statearr_42475;
})();
var statearr_42476_42548 = state_42450__$1;
(statearr_42476_42548[(2)] = inst_42403);

(statearr_42476_42548[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (32))){
var inst_42391 = (state_42450[(10)]);
var inst_42393 = (state_42450[(11)]);
var inst_42390 = (state_42450[(20)]);
var inst_42392 = (state_42450[(21)]);
var inst_42405 = (state_42450[(2)]);
var inst_42406 = (inst_42393 + (1));
var tmp42471 = inst_42391;
var tmp42472 = inst_42390;
var tmp42473 = inst_42392;
var inst_42390__$1 = tmp42472;
var inst_42391__$1 = tmp42471;
var inst_42392__$1 = tmp42473;
var inst_42393__$1 = inst_42406;
var state_42450__$1 = (function (){var statearr_42477 = state_42450;
(statearr_42477[(22)] = inst_42405);

(statearr_42477[(10)] = inst_42391__$1);

(statearr_42477[(11)] = inst_42393__$1);

(statearr_42477[(20)] = inst_42390__$1);

(statearr_42477[(21)] = inst_42392__$1);

return statearr_42477;
})();
var statearr_42478_42549 = state_42450__$1;
(statearr_42478_42549[(2)] = null);

(statearr_42478_42549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (40))){
var inst_42418 = (state_42450[(23)]);
var inst_42422 = done.call(null,null);
var inst_42423 = cljs.core.async.untap_STAR_.call(null,m,inst_42418);
var state_42450__$1 = (function (){var statearr_42479 = state_42450;
(statearr_42479[(24)] = inst_42422);

return statearr_42479;
})();
var statearr_42480_42550 = state_42450__$1;
(statearr_42480_42550[(2)] = inst_42423);

(statearr_42480_42550[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (33))){
var inst_42409 = (state_42450[(25)]);
var inst_42411 = cljs.core.chunked_seq_QMARK_.call(null,inst_42409);
var state_42450__$1 = state_42450;
if(inst_42411){
var statearr_42481_42551 = state_42450__$1;
(statearr_42481_42551[(1)] = (36));

} else {
var statearr_42482_42552 = state_42450__$1;
(statearr_42482_42552[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (13))){
var inst_42339 = (state_42450[(26)]);
var inst_42342 = cljs.core.async.close_BANG_.call(null,inst_42339);
var state_42450__$1 = state_42450;
var statearr_42483_42553 = state_42450__$1;
(statearr_42483_42553[(2)] = inst_42342);

(statearr_42483_42553[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (22))){
var inst_42362 = (state_42450[(8)]);
var inst_42365 = cljs.core.async.close_BANG_.call(null,inst_42362);
var state_42450__$1 = state_42450;
var statearr_42484_42554 = state_42450__$1;
(statearr_42484_42554[(2)] = inst_42365);

(statearr_42484_42554[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (36))){
var inst_42409 = (state_42450[(25)]);
var inst_42413 = cljs.core.chunk_first.call(null,inst_42409);
var inst_42414 = cljs.core.chunk_rest.call(null,inst_42409);
var inst_42415 = cljs.core.count.call(null,inst_42413);
var inst_42390 = inst_42414;
var inst_42391 = inst_42413;
var inst_42392 = inst_42415;
var inst_42393 = (0);
var state_42450__$1 = (function (){var statearr_42485 = state_42450;
(statearr_42485[(10)] = inst_42391);

(statearr_42485[(11)] = inst_42393);

(statearr_42485[(20)] = inst_42390);

(statearr_42485[(21)] = inst_42392);

return statearr_42485;
})();
var statearr_42486_42555 = state_42450__$1;
(statearr_42486_42555[(2)] = null);

(statearr_42486_42555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (41))){
var inst_42409 = (state_42450[(25)]);
var inst_42425 = (state_42450[(2)]);
var inst_42426 = cljs.core.next.call(null,inst_42409);
var inst_42390 = inst_42426;
var inst_42391 = null;
var inst_42392 = (0);
var inst_42393 = (0);
var state_42450__$1 = (function (){var statearr_42487 = state_42450;
(statearr_42487[(10)] = inst_42391);

(statearr_42487[(11)] = inst_42393);

(statearr_42487[(20)] = inst_42390);

(statearr_42487[(21)] = inst_42392);

(statearr_42487[(27)] = inst_42425);

return statearr_42487;
})();
var statearr_42488_42556 = state_42450__$1;
(statearr_42488_42556[(2)] = null);

(statearr_42488_42556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (43))){
var state_42450__$1 = state_42450;
var statearr_42489_42557 = state_42450__$1;
(statearr_42489_42557[(2)] = null);

(statearr_42489_42557[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (29))){
var inst_42434 = (state_42450[(2)]);
var state_42450__$1 = state_42450;
var statearr_42490_42558 = state_42450__$1;
(statearr_42490_42558[(2)] = inst_42434);

(statearr_42490_42558[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (44))){
var inst_42443 = (state_42450[(2)]);
var state_42450__$1 = (function (){var statearr_42491 = state_42450;
(statearr_42491[(28)] = inst_42443);

return statearr_42491;
})();
var statearr_42492_42559 = state_42450__$1;
(statearr_42492_42559[(2)] = null);

(statearr_42492_42559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (6))){
var inst_42382 = (state_42450[(29)]);
var inst_42381 = cljs.core.deref.call(null,cs);
var inst_42382__$1 = cljs.core.keys.call(null,inst_42381);
var inst_42383 = cljs.core.count.call(null,inst_42382__$1);
var inst_42384 = cljs.core.reset_BANG_.call(null,dctr,inst_42383);
var inst_42389 = cljs.core.seq.call(null,inst_42382__$1);
var inst_42390 = inst_42389;
var inst_42391 = null;
var inst_42392 = (0);
var inst_42393 = (0);
var state_42450__$1 = (function (){var statearr_42493 = state_42450;
(statearr_42493[(10)] = inst_42391);

(statearr_42493[(30)] = inst_42384);

(statearr_42493[(29)] = inst_42382__$1);

(statearr_42493[(11)] = inst_42393);

(statearr_42493[(20)] = inst_42390);

(statearr_42493[(21)] = inst_42392);

return statearr_42493;
})();
var statearr_42494_42560 = state_42450__$1;
(statearr_42494_42560[(2)] = null);

(statearr_42494_42560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (28))){
var inst_42409 = (state_42450[(25)]);
var inst_42390 = (state_42450[(20)]);
var inst_42409__$1 = cljs.core.seq.call(null,inst_42390);
var state_42450__$1 = (function (){var statearr_42495 = state_42450;
(statearr_42495[(25)] = inst_42409__$1);

return statearr_42495;
})();
if(inst_42409__$1){
var statearr_42496_42561 = state_42450__$1;
(statearr_42496_42561[(1)] = (33));

} else {
var statearr_42497_42562 = state_42450__$1;
(statearr_42497_42562[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (25))){
var inst_42393 = (state_42450[(11)]);
var inst_42392 = (state_42450[(21)]);
var inst_42395 = (inst_42393 < inst_42392);
var inst_42396 = inst_42395;
var state_42450__$1 = state_42450;
if(cljs.core.truth_(inst_42396)){
var statearr_42498_42563 = state_42450__$1;
(statearr_42498_42563[(1)] = (27));

} else {
var statearr_42499_42564 = state_42450__$1;
(statearr_42499_42564[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (34))){
var state_42450__$1 = state_42450;
var statearr_42500_42565 = state_42450__$1;
(statearr_42500_42565[(2)] = null);

(statearr_42500_42565[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (17))){
var state_42450__$1 = state_42450;
var statearr_42501_42566 = state_42450__$1;
(statearr_42501_42566[(2)] = null);

(statearr_42501_42566[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (3))){
var inst_42448 = (state_42450[(2)]);
var state_42450__$1 = state_42450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42450__$1,inst_42448);
} else {
if((state_val_42451 === (12))){
var inst_42377 = (state_42450[(2)]);
var state_42450__$1 = state_42450;
var statearr_42502_42567 = state_42450__$1;
(statearr_42502_42567[(2)] = inst_42377);

(statearr_42502_42567[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (2))){
var state_42450__$1 = state_42450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42450__$1,(4),ch);
} else {
if((state_val_42451 === (23))){
var state_42450__$1 = state_42450;
var statearr_42503_42568 = state_42450__$1;
(statearr_42503_42568[(2)] = null);

(statearr_42503_42568[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (35))){
var inst_42432 = (state_42450[(2)]);
var state_42450__$1 = state_42450;
var statearr_42504_42569 = state_42450__$1;
(statearr_42504_42569[(2)] = inst_42432);

(statearr_42504_42569[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (19))){
var inst_42349 = (state_42450[(7)]);
var inst_42353 = cljs.core.chunk_first.call(null,inst_42349);
var inst_42354 = cljs.core.chunk_rest.call(null,inst_42349);
var inst_42355 = cljs.core.count.call(null,inst_42353);
var inst_42327 = inst_42354;
var inst_42328 = inst_42353;
var inst_42329 = inst_42355;
var inst_42330 = (0);
var state_42450__$1 = (function (){var statearr_42505 = state_42450;
(statearr_42505[(13)] = inst_42328);

(statearr_42505[(14)] = inst_42330);

(statearr_42505[(15)] = inst_42327);

(statearr_42505[(17)] = inst_42329);

return statearr_42505;
})();
var statearr_42506_42570 = state_42450__$1;
(statearr_42506_42570[(2)] = null);

(statearr_42506_42570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (11))){
var inst_42349 = (state_42450[(7)]);
var inst_42327 = (state_42450[(15)]);
var inst_42349__$1 = cljs.core.seq.call(null,inst_42327);
var state_42450__$1 = (function (){var statearr_42507 = state_42450;
(statearr_42507[(7)] = inst_42349__$1);

return statearr_42507;
})();
if(inst_42349__$1){
var statearr_42508_42571 = state_42450__$1;
(statearr_42508_42571[(1)] = (16));

} else {
var statearr_42509_42572 = state_42450__$1;
(statearr_42509_42572[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (9))){
var inst_42379 = (state_42450[(2)]);
var state_42450__$1 = state_42450;
var statearr_42510_42573 = state_42450__$1;
(statearr_42510_42573[(2)] = inst_42379);

(statearr_42510_42573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (5))){
var inst_42325 = cljs.core.deref.call(null,cs);
var inst_42326 = cljs.core.seq.call(null,inst_42325);
var inst_42327 = inst_42326;
var inst_42328 = null;
var inst_42329 = (0);
var inst_42330 = (0);
var state_42450__$1 = (function (){var statearr_42511 = state_42450;
(statearr_42511[(13)] = inst_42328);

(statearr_42511[(14)] = inst_42330);

(statearr_42511[(15)] = inst_42327);

(statearr_42511[(17)] = inst_42329);

return statearr_42511;
})();
var statearr_42512_42574 = state_42450__$1;
(statearr_42512_42574[(2)] = null);

(statearr_42512_42574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (14))){
var state_42450__$1 = state_42450;
var statearr_42513_42575 = state_42450__$1;
(statearr_42513_42575[(2)] = null);

(statearr_42513_42575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (45))){
var inst_42440 = (state_42450[(2)]);
var state_42450__$1 = state_42450;
var statearr_42514_42576 = state_42450__$1;
(statearr_42514_42576[(2)] = inst_42440);

(statearr_42514_42576[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (26))){
var inst_42382 = (state_42450[(29)]);
var inst_42436 = (state_42450[(2)]);
var inst_42437 = cljs.core.seq.call(null,inst_42382);
var state_42450__$1 = (function (){var statearr_42515 = state_42450;
(statearr_42515[(31)] = inst_42436);

return statearr_42515;
})();
if(inst_42437){
var statearr_42516_42577 = state_42450__$1;
(statearr_42516_42577[(1)] = (42));

} else {
var statearr_42517_42578 = state_42450__$1;
(statearr_42517_42578[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (16))){
var inst_42349 = (state_42450[(7)]);
var inst_42351 = cljs.core.chunked_seq_QMARK_.call(null,inst_42349);
var state_42450__$1 = state_42450;
if(inst_42351){
var statearr_42518_42579 = state_42450__$1;
(statearr_42518_42579[(1)] = (19));

} else {
var statearr_42519_42580 = state_42450__$1;
(statearr_42519_42580[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (38))){
var inst_42429 = (state_42450[(2)]);
var state_42450__$1 = state_42450;
var statearr_42520_42581 = state_42450__$1;
(statearr_42520_42581[(2)] = inst_42429);

(statearr_42520_42581[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (30))){
var state_42450__$1 = state_42450;
var statearr_42521_42582 = state_42450__$1;
(statearr_42521_42582[(2)] = null);

(statearr_42521_42582[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (10))){
var inst_42328 = (state_42450[(13)]);
var inst_42330 = (state_42450[(14)]);
var inst_42338 = cljs.core._nth.call(null,inst_42328,inst_42330);
var inst_42339 = cljs.core.nth.call(null,inst_42338,(0),null);
var inst_42340 = cljs.core.nth.call(null,inst_42338,(1),null);
var state_42450__$1 = (function (){var statearr_42522 = state_42450;
(statearr_42522[(26)] = inst_42339);

return statearr_42522;
})();
if(cljs.core.truth_(inst_42340)){
var statearr_42523_42583 = state_42450__$1;
(statearr_42523_42583[(1)] = (13));

} else {
var statearr_42524_42584 = state_42450__$1;
(statearr_42524_42584[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (18))){
var inst_42375 = (state_42450[(2)]);
var state_42450__$1 = state_42450;
var statearr_42525_42585 = state_42450__$1;
(statearr_42525_42585[(2)] = inst_42375);

(statearr_42525_42585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (42))){
var state_42450__$1 = state_42450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42450__$1,(45),dchan);
} else {
if((state_val_42451 === (37))){
var inst_42318 = (state_42450[(9)]);
var inst_42409 = (state_42450[(25)]);
var inst_42418 = (state_42450[(23)]);
var inst_42418__$1 = cljs.core.first.call(null,inst_42409);
var inst_42419 = cljs.core.async.put_BANG_.call(null,inst_42418__$1,inst_42318,done);
var state_42450__$1 = (function (){var statearr_42526 = state_42450;
(statearr_42526[(23)] = inst_42418__$1);

return statearr_42526;
})();
if(cljs.core.truth_(inst_42419)){
var statearr_42527_42586 = state_42450__$1;
(statearr_42527_42586[(1)] = (39));

} else {
var statearr_42528_42587 = state_42450__$1;
(statearr_42528_42587[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42451 === (8))){
var inst_42330 = (state_42450[(14)]);
var inst_42329 = (state_42450[(17)]);
var inst_42332 = (inst_42330 < inst_42329);
var inst_42333 = inst_42332;
var state_42450__$1 = state_42450;
if(cljs.core.truth_(inst_42333)){
var statearr_42529_42588 = state_42450__$1;
(statearr_42529_42588[(1)] = (10));

} else {
var statearr_42530_42589 = state_42450__$1;
(statearr_42530_42589[(1)] = (11));

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
});})(c__33575__auto___42535,cs,m,dchan,dctr,done))
;
return ((function (switch__33487__auto__,c__33575__auto___42535,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33488__auto__ = null;
var cljs$core$async$mult_$_state_machine__33488__auto____0 = (function (){
var statearr_42531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42531[(0)] = cljs$core$async$mult_$_state_machine__33488__auto__);

(statearr_42531[(1)] = (1));

return statearr_42531;
});
var cljs$core$async$mult_$_state_machine__33488__auto____1 = (function (state_42450){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_42450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e42532){if((e42532 instanceof Object)){
var ex__33491__auto__ = e42532;
var statearr_42533_42590 = state_42450;
(statearr_42533_42590[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42591 = state_42450;
state_42450 = G__42591;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33488__auto__ = function(state_42450){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33488__auto____1.call(this,state_42450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33488__auto____0;
cljs$core$async$mult_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33488__auto____1;
return cljs$core$async$mult_$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___42535,cs,m,dchan,dctr,done))
})();
var state__33577__auto__ = (function (){var statearr_42534 = f__33576__auto__.call(null);
(statearr_42534[(6)] = c__33575__auto___42535);

return statearr_42534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___42535,cs,m,dchan,dctr,done))
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
var G__42593 = arguments.length;
switch (G__42593) {
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
var len__29455__auto___42605 = arguments.length;
var i__29456__auto___42606 = (0);
while(true){
if((i__29456__auto___42606 < len__29455__auto___42605)){
args__29462__auto__.push((arguments[i__29456__auto___42606]));

var G__42607 = (i__29456__auto___42606 + (1));
i__29456__auto___42606 = G__42607;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((3) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29463__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42599){
var map__42600 = p__42599;
var map__42600__$1 = ((((!((map__42600 == null)))?((((map__42600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42600):map__42600);
var opts = map__42600__$1;
var statearr_42602_42608 = state;
(statearr_42602_42608[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__42600,map__42600__$1,opts){
return (function (val){
var statearr_42603_42609 = state;
(statearr_42603_42609[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42600,map__42600__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_42604_42610 = state;
(statearr_42604_42610[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42595){
var G__42596 = cljs.core.first.call(null,seq42595);
var seq42595__$1 = cljs.core.next.call(null,seq42595);
var G__42597 = cljs.core.first.call(null,seq42595__$1);
var seq42595__$2 = cljs.core.next.call(null,seq42595__$1);
var G__42598 = cljs.core.first.call(null,seq42595__$2);
var seq42595__$3 = cljs.core.next.call(null,seq42595__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42596,G__42597,G__42598,seq42595__$3);
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
if(typeof cljs.core.async.t_cljs$core$async42611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42611 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta42612){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta42612 = meta42612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42613,meta42612__$1){
var self__ = this;
var _42613__$1 = this;
return (new cljs.core.async.t_cljs$core$async42611(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta42612__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42613){
var self__ = this;
var _42613__$1 = this;
return self__.meta42612;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42611.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42611.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42611.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42611.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42611.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42611.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42611.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42611.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async42611.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta42612","meta42612",1157197276,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42611";

cljs.core.async.t_cljs$core$async42611.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async42611");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42611 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42611(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42612){
return (new cljs.core.async.t_cljs$core$async42611(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42612));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42611(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33575__auto___42775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___42775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___42775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42715){
var state_val_42716 = (state_42715[(1)]);
if((state_val_42716 === (7))){
var inst_42630 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
var statearr_42717_42776 = state_42715__$1;
(statearr_42717_42776[(2)] = inst_42630);

(statearr_42717_42776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (20))){
var inst_42642 = (state_42715[(7)]);
var state_42715__$1 = state_42715;
var statearr_42718_42777 = state_42715__$1;
(statearr_42718_42777[(2)] = inst_42642);

(statearr_42718_42777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (27))){
var state_42715__$1 = state_42715;
var statearr_42719_42778 = state_42715__$1;
(statearr_42719_42778[(2)] = null);

(statearr_42719_42778[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (1))){
var inst_42617 = (state_42715[(8)]);
var inst_42617__$1 = calc_state.call(null);
var inst_42619 = (inst_42617__$1 == null);
var inst_42620 = cljs.core.not.call(null,inst_42619);
var state_42715__$1 = (function (){var statearr_42720 = state_42715;
(statearr_42720[(8)] = inst_42617__$1);

return statearr_42720;
})();
if(inst_42620){
var statearr_42721_42779 = state_42715__$1;
(statearr_42721_42779[(1)] = (2));

} else {
var statearr_42722_42780 = state_42715__$1;
(statearr_42722_42780[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (24))){
var inst_42666 = (state_42715[(9)]);
var inst_42675 = (state_42715[(10)]);
var inst_42689 = (state_42715[(11)]);
var inst_42689__$1 = inst_42666.call(null,inst_42675);
var state_42715__$1 = (function (){var statearr_42723 = state_42715;
(statearr_42723[(11)] = inst_42689__$1);

return statearr_42723;
})();
if(cljs.core.truth_(inst_42689__$1)){
var statearr_42724_42781 = state_42715__$1;
(statearr_42724_42781[(1)] = (29));

} else {
var statearr_42725_42782 = state_42715__$1;
(statearr_42725_42782[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (4))){
var inst_42633 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
if(cljs.core.truth_(inst_42633)){
var statearr_42726_42783 = state_42715__$1;
(statearr_42726_42783[(1)] = (8));

} else {
var statearr_42727_42784 = state_42715__$1;
(statearr_42727_42784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (15))){
var inst_42660 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
if(cljs.core.truth_(inst_42660)){
var statearr_42728_42785 = state_42715__$1;
(statearr_42728_42785[(1)] = (19));

} else {
var statearr_42729_42786 = state_42715__$1;
(statearr_42729_42786[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (21))){
var inst_42665 = (state_42715[(12)]);
var inst_42665__$1 = (state_42715[(2)]);
var inst_42666 = cljs.core.get.call(null,inst_42665__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42667 = cljs.core.get.call(null,inst_42665__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42668 = cljs.core.get.call(null,inst_42665__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42715__$1 = (function (){var statearr_42730 = state_42715;
(statearr_42730[(9)] = inst_42666);

(statearr_42730[(13)] = inst_42667);

(statearr_42730[(12)] = inst_42665__$1);

return statearr_42730;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42715__$1,(22),inst_42668);
} else {
if((state_val_42716 === (31))){
var inst_42697 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
if(cljs.core.truth_(inst_42697)){
var statearr_42731_42787 = state_42715__$1;
(statearr_42731_42787[(1)] = (32));

} else {
var statearr_42732_42788 = state_42715__$1;
(statearr_42732_42788[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (32))){
var inst_42674 = (state_42715[(14)]);
var state_42715__$1 = state_42715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42715__$1,(35),out,inst_42674);
} else {
if((state_val_42716 === (33))){
var inst_42665 = (state_42715[(12)]);
var inst_42642 = inst_42665;
var state_42715__$1 = (function (){var statearr_42733 = state_42715;
(statearr_42733[(7)] = inst_42642);

return statearr_42733;
})();
var statearr_42734_42789 = state_42715__$1;
(statearr_42734_42789[(2)] = null);

(statearr_42734_42789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (13))){
var inst_42642 = (state_42715[(7)]);
var inst_42649 = inst_42642.cljs$lang$protocol_mask$partition0$;
var inst_42650 = (inst_42649 & (64));
var inst_42651 = inst_42642.cljs$core$ISeq$;
var inst_42652 = (cljs.core.PROTOCOL_SENTINEL === inst_42651);
var inst_42653 = (inst_42650) || (inst_42652);
var state_42715__$1 = state_42715;
if(cljs.core.truth_(inst_42653)){
var statearr_42735_42790 = state_42715__$1;
(statearr_42735_42790[(1)] = (16));

} else {
var statearr_42736_42791 = state_42715__$1;
(statearr_42736_42791[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (22))){
var inst_42674 = (state_42715[(14)]);
var inst_42675 = (state_42715[(10)]);
var inst_42673 = (state_42715[(2)]);
var inst_42674__$1 = cljs.core.nth.call(null,inst_42673,(0),null);
var inst_42675__$1 = cljs.core.nth.call(null,inst_42673,(1),null);
var inst_42676 = (inst_42674__$1 == null);
var inst_42677 = cljs.core._EQ_.call(null,inst_42675__$1,change);
var inst_42678 = (inst_42676) || (inst_42677);
var state_42715__$1 = (function (){var statearr_42737 = state_42715;
(statearr_42737[(14)] = inst_42674__$1);

(statearr_42737[(10)] = inst_42675__$1);

return statearr_42737;
})();
if(cljs.core.truth_(inst_42678)){
var statearr_42738_42792 = state_42715__$1;
(statearr_42738_42792[(1)] = (23));

} else {
var statearr_42739_42793 = state_42715__$1;
(statearr_42739_42793[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (36))){
var inst_42665 = (state_42715[(12)]);
var inst_42642 = inst_42665;
var state_42715__$1 = (function (){var statearr_42740 = state_42715;
(statearr_42740[(7)] = inst_42642);

return statearr_42740;
})();
var statearr_42741_42794 = state_42715__$1;
(statearr_42741_42794[(2)] = null);

(statearr_42741_42794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (29))){
var inst_42689 = (state_42715[(11)]);
var state_42715__$1 = state_42715;
var statearr_42742_42795 = state_42715__$1;
(statearr_42742_42795[(2)] = inst_42689);

(statearr_42742_42795[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (6))){
var state_42715__$1 = state_42715;
var statearr_42743_42796 = state_42715__$1;
(statearr_42743_42796[(2)] = false);

(statearr_42743_42796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (28))){
var inst_42685 = (state_42715[(2)]);
var inst_42686 = calc_state.call(null);
var inst_42642 = inst_42686;
var state_42715__$1 = (function (){var statearr_42744 = state_42715;
(statearr_42744[(7)] = inst_42642);

(statearr_42744[(15)] = inst_42685);

return statearr_42744;
})();
var statearr_42745_42797 = state_42715__$1;
(statearr_42745_42797[(2)] = null);

(statearr_42745_42797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (25))){
var inst_42711 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
var statearr_42746_42798 = state_42715__$1;
(statearr_42746_42798[(2)] = inst_42711);

(statearr_42746_42798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (34))){
var inst_42709 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
var statearr_42747_42799 = state_42715__$1;
(statearr_42747_42799[(2)] = inst_42709);

(statearr_42747_42799[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (17))){
var state_42715__$1 = state_42715;
var statearr_42748_42800 = state_42715__$1;
(statearr_42748_42800[(2)] = false);

(statearr_42748_42800[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (3))){
var state_42715__$1 = state_42715;
var statearr_42749_42801 = state_42715__$1;
(statearr_42749_42801[(2)] = false);

(statearr_42749_42801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (12))){
var inst_42713 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42715__$1,inst_42713);
} else {
if((state_val_42716 === (2))){
var inst_42617 = (state_42715[(8)]);
var inst_42622 = inst_42617.cljs$lang$protocol_mask$partition0$;
var inst_42623 = (inst_42622 & (64));
var inst_42624 = inst_42617.cljs$core$ISeq$;
var inst_42625 = (cljs.core.PROTOCOL_SENTINEL === inst_42624);
var inst_42626 = (inst_42623) || (inst_42625);
var state_42715__$1 = state_42715;
if(cljs.core.truth_(inst_42626)){
var statearr_42750_42802 = state_42715__$1;
(statearr_42750_42802[(1)] = (5));

} else {
var statearr_42751_42803 = state_42715__$1;
(statearr_42751_42803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (23))){
var inst_42674 = (state_42715[(14)]);
var inst_42680 = (inst_42674 == null);
var state_42715__$1 = state_42715;
if(cljs.core.truth_(inst_42680)){
var statearr_42752_42804 = state_42715__$1;
(statearr_42752_42804[(1)] = (26));

} else {
var statearr_42753_42805 = state_42715__$1;
(statearr_42753_42805[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (35))){
var inst_42700 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
if(cljs.core.truth_(inst_42700)){
var statearr_42754_42806 = state_42715__$1;
(statearr_42754_42806[(1)] = (36));

} else {
var statearr_42755_42807 = state_42715__$1;
(statearr_42755_42807[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (19))){
var inst_42642 = (state_42715[(7)]);
var inst_42662 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42642);
var state_42715__$1 = state_42715;
var statearr_42756_42808 = state_42715__$1;
(statearr_42756_42808[(2)] = inst_42662);

(statearr_42756_42808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (11))){
var inst_42642 = (state_42715[(7)]);
var inst_42646 = (inst_42642 == null);
var inst_42647 = cljs.core.not.call(null,inst_42646);
var state_42715__$1 = state_42715;
if(inst_42647){
var statearr_42757_42809 = state_42715__$1;
(statearr_42757_42809[(1)] = (13));

} else {
var statearr_42758_42810 = state_42715__$1;
(statearr_42758_42810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (9))){
var inst_42617 = (state_42715[(8)]);
var state_42715__$1 = state_42715;
var statearr_42759_42811 = state_42715__$1;
(statearr_42759_42811[(2)] = inst_42617);

(statearr_42759_42811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (5))){
var state_42715__$1 = state_42715;
var statearr_42760_42812 = state_42715__$1;
(statearr_42760_42812[(2)] = true);

(statearr_42760_42812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (14))){
var state_42715__$1 = state_42715;
var statearr_42761_42813 = state_42715__$1;
(statearr_42761_42813[(2)] = false);

(statearr_42761_42813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (26))){
var inst_42675 = (state_42715[(10)]);
var inst_42682 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42675);
var state_42715__$1 = state_42715;
var statearr_42762_42814 = state_42715__$1;
(statearr_42762_42814[(2)] = inst_42682);

(statearr_42762_42814[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (16))){
var state_42715__$1 = state_42715;
var statearr_42763_42815 = state_42715__$1;
(statearr_42763_42815[(2)] = true);

(statearr_42763_42815[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (38))){
var inst_42705 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
var statearr_42764_42816 = state_42715__$1;
(statearr_42764_42816[(2)] = inst_42705);

(statearr_42764_42816[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (30))){
var inst_42666 = (state_42715[(9)]);
var inst_42675 = (state_42715[(10)]);
var inst_42667 = (state_42715[(13)]);
var inst_42692 = cljs.core.empty_QMARK_.call(null,inst_42666);
var inst_42693 = inst_42667.call(null,inst_42675);
var inst_42694 = cljs.core.not.call(null,inst_42693);
var inst_42695 = (inst_42692) && (inst_42694);
var state_42715__$1 = state_42715;
var statearr_42765_42817 = state_42715__$1;
(statearr_42765_42817[(2)] = inst_42695);

(statearr_42765_42817[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (10))){
var inst_42617 = (state_42715[(8)]);
var inst_42638 = (state_42715[(2)]);
var inst_42639 = cljs.core.get.call(null,inst_42638,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42640 = cljs.core.get.call(null,inst_42638,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42641 = cljs.core.get.call(null,inst_42638,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42642 = inst_42617;
var state_42715__$1 = (function (){var statearr_42766 = state_42715;
(statearr_42766[(16)] = inst_42641);

(statearr_42766[(7)] = inst_42642);

(statearr_42766[(17)] = inst_42639);

(statearr_42766[(18)] = inst_42640);

return statearr_42766;
})();
var statearr_42767_42818 = state_42715__$1;
(statearr_42767_42818[(2)] = null);

(statearr_42767_42818[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (18))){
var inst_42657 = (state_42715[(2)]);
var state_42715__$1 = state_42715;
var statearr_42768_42819 = state_42715__$1;
(statearr_42768_42819[(2)] = inst_42657);

(statearr_42768_42819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (37))){
var state_42715__$1 = state_42715;
var statearr_42769_42820 = state_42715__$1;
(statearr_42769_42820[(2)] = null);

(statearr_42769_42820[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42716 === (8))){
var inst_42617 = (state_42715[(8)]);
var inst_42635 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42617);
var state_42715__$1 = state_42715;
var statearr_42770_42821 = state_42715__$1;
(statearr_42770_42821[(2)] = inst_42635);

(statearr_42770_42821[(1)] = (10));


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
});})(c__33575__auto___42775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33487__auto__,c__33575__auto___42775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33488__auto__ = null;
var cljs$core$async$mix_$_state_machine__33488__auto____0 = (function (){
var statearr_42771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42771[(0)] = cljs$core$async$mix_$_state_machine__33488__auto__);

(statearr_42771[(1)] = (1));

return statearr_42771;
});
var cljs$core$async$mix_$_state_machine__33488__auto____1 = (function (state_42715){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_42715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e42772){if((e42772 instanceof Object)){
var ex__33491__auto__ = e42772;
var statearr_42773_42822 = state_42715;
(statearr_42773_42822[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42823 = state_42715;
state_42715 = G__42823;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33488__auto__ = function(state_42715){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33488__auto____1.call(this,state_42715);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33488__auto____0;
cljs$core$async$mix_$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33488__auto____1;
return cljs$core$async$mix_$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___42775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33577__auto__ = (function (){var statearr_42774 = f__33576__auto__.call(null);
(statearr_42774[(6)] = c__33575__auto___42775);

return statearr_42774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___42775,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__42825 = arguments.length;
switch (G__42825) {
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
var G__42829 = arguments.length;
switch (G__42829) {
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
return (function (p1__42827_SHARP_){
if(cljs.core.truth_(p1__42827_SHARP_.call(null,topic))){
return p1__42827_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42827_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28286__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42830 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42831){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42831 = meta42831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42832,meta42831__$1){
var self__ = this;
var _42832__$1 = this;
return (new cljs.core.async.t_cljs$core$async42830(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42831__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42832){
var self__ = this;
var _42832__$1 = this;
return self__.meta42831;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42830.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42830.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42830.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42830.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42830.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async42830.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42830.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42830.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42831","meta42831",1422633648,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42830";

cljs.core.async.t_cljs$core$async42830.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async42830");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42830 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42830(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42831){
return (new cljs.core.async.t_cljs$core$async42830(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42831));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42830(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33575__auto___42950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___42950,mults,ensure_mult,p){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___42950,mults,ensure_mult,p){
return (function (state_42904){
var state_val_42905 = (state_42904[(1)]);
if((state_val_42905 === (7))){
var inst_42900 = (state_42904[(2)]);
var state_42904__$1 = state_42904;
var statearr_42906_42951 = state_42904__$1;
(statearr_42906_42951[(2)] = inst_42900);

(statearr_42906_42951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (20))){
var state_42904__$1 = state_42904;
var statearr_42907_42952 = state_42904__$1;
(statearr_42907_42952[(2)] = null);

(statearr_42907_42952[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (1))){
var state_42904__$1 = state_42904;
var statearr_42908_42953 = state_42904__$1;
(statearr_42908_42953[(2)] = null);

(statearr_42908_42953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (24))){
var inst_42883 = (state_42904[(7)]);
var inst_42892 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42883);
var state_42904__$1 = state_42904;
var statearr_42909_42954 = state_42904__$1;
(statearr_42909_42954[(2)] = inst_42892);

(statearr_42909_42954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (4))){
var inst_42835 = (state_42904[(8)]);
var inst_42835__$1 = (state_42904[(2)]);
var inst_42836 = (inst_42835__$1 == null);
var state_42904__$1 = (function (){var statearr_42910 = state_42904;
(statearr_42910[(8)] = inst_42835__$1);

return statearr_42910;
})();
if(cljs.core.truth_(inst_42836)){
var statearr_42911_42955 = state_42904__$1;
(statearr_42911_42955[(1)] = (5));

} else {
var statearr_42912_42956 = state_42904__$1;
(statearr_42912_42956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (15))){
var inst_42877 = (state_42904[(2)]);
var state_42904__$1 = state_42904;
var statearr_42913_42957 = state_42904__$1;
(statearr_42913_42957[(2)] = inst_42877);

(statearr_42913_42957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (21))){
var inst_42897 = (state_42904[(2)]);
var state_42904__$1 = (function (){var statearr_42914 = state_42904;
(statearr_42914[(9)] = inst_42897);

return statearr_42914;
})();
var statearr_42915_42958 = state_42904__$1;
(statearr_42915_42958[(2)] = null);

(statearr_42915_42958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (13))){
var inst_42859 = (state_42904[(10)]);
var inst_42861 = cljs.core.chunked_seq_QMARK_.call(null,inst_42859);
var state_42904__$1 = state_42904;
if(inst_42861){
var statearr_42916_42959 = state_42904__$1;
(statearr_42916_42959[(1)] = (16));

} else {
var statearr_42917_42960 = state_42904__$1;
(statearr_42917_42960[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (22))){
var inst_42889 = (state_42904[(2)]);
var state_42904__$1 = state_42904;
if(cljs.core.truth_(inst_42889)){
var statearr_42918_42961 = state_42904__$1;
(statearr_42918_42961[(1)] = (23));

} else {
var statearr_42919_42962 = state_42904__$1;
(statearr_42919_42962[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (6))){
var inst_42885 = (state_42904[(11)]);
var inst_42883 = (state_42904[(7)]);
var inst_42835 = (state_42904[(8)]);
var inst_42883__$1 = topic_fn.call(null,inst_42835);
var inst_42884 = cljs.core.deref.call(null,mults);
var inst_42885__$1 = cljs.core.get.call(null,inst_42884,inst_42883__$1);
var state_42904__$1 = (function (){var statearr_42920 = state_42904;
(statearr_42920[(11)] = inst_42885__$1);

(statearr_42920[(7)] = inst_42883__$1);

return statearr_42920;
})();
if(cljs.core.truth_(inst_42885__$1)){
var statearr_42921_42963 = state_42904__$1;
(statearr_42921_42963[(1)] = (19));

} else {
var statearr_42922_42964 = state_42904__$1;
(statearr_42922_42964[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (25))){
var inst_42894 = (state_42904[(2)]);
var state_42904__$1 = state_42904;
var statearr_42923_42965 = state_42904__$1;
(statearr_42923_42965[(2)] = inst_42894);

(statearr_42923_42965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (17))){
var inst_42859 = (state_42904[(10)]);
var inst_42868 = cljs.core.first.call(null,inst_42859);
var inst_42869 = cljs.core.async.muxch_STAR_.call(null,inst_42868);
var inst_42870 = cljs.core.async.close_BANG_.call(null,inst_42869);
var inst_42871 = cljs.core.next.call(null,inst_42859);
var inst_42845 = inst_42871;
var inst_42846 = null;
var inst_42847 = (0);
var inst_42848 = (0);
var state_42904__$1 = (function (){var statearr_42924 = state_42904;
(statearr_42924[(12)] = inst_42870);

(statearr_42924[(13)] = inst_42846);

(statearr_42924[(14)] = inst_42845);

(statearr_42924[(15)] = inst_42847);

(statearr_42924[(16)] = inst_42848);

return statearr_42924;
})();
var statearr_42925_42966 = state_42904__$1;
(statearr_42925_42966[(2)] = null);

(statearr_42925_42966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (3))){
var inst_42902 = (state_42904[(2)]);
var state_42904__$1 = state_42904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42904__$1,inst_42902);
} else {
if((state_val_42905 === (12))){
var inst_42879 = (state_42904[(2)]);
var state_42904__$1 = state_42904;
var statearr_42926_42967 = state_42904__$1;
(statearr_42926_42967[(2)] = inst_42879);

(statearr_42926_42967[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (2))){
var state_42904__$1 = state_42904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42904__$1,(4),ch);
} else {
if((state_val_42905 === (23))){
var state_42904__$1 = state_42904;
var statearr_42927_42968 = state_42904__$1;
(statearr_42927_42968[(2)] = null);

(statearr_42927_42968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (19))){
var inst_42885 = (state_42904[(11)]);
var inst_42835 = (state_42904[(8)]);
var inst_42887 = cljs.core.async.muxch_STAR_.call(null,inst_42885);
var state_42904__$1 = state_42904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42904__$1,(22),inst_42887,inst_42835);
} else {
if((state_val_42905 === (11))){
var inst_42845 = (state_42904[(14)]);
var inst_42859 = (state_42904[(10)]);
var inst_42859__$1 = cljs.core.seq.call(null,inst_42845);
var state_42904__$1 = (function (){var statearr_42928 = state_42904;
(statearr_42928[(10)] = inst_42859__$1);

return statearr_42928;
})();
if(inst_42859__$1){
var statearr_42929_42969 = state_42904__$1;
(statearr_42929_42969[(1)] = (13));

} else {
var statearr_42930_42970 = state_42904__$1;
(statearr_42930_42970[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (9))){
var inst_42881 = (state_42904[(2)]);
var state_42904__$1 = state_42904;
var statearr_42931_42971 = state_42904__$1;
(statearr_42931_42971[(2)] = inst_42881);

(statearr_42931_42971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (5))){
var inst_42842 = cljs.core.deref.call(null,mults);
var inst_42843 = cljs.core.vals.call(null,inst_42842);
var inst_42844 = cljs.core.seq.call(null,inst_42843);
var inst_42845 = inst_42844;
var inst_42846 = null;
var inst_42847 = (0);
var inst_42848 = (0);
var state_42904__$1 = (function (){var statearr_42932 = state_42904;
(statearr_42932[(13)] = inst_42846);

(statearr_42932[(14)] = inst_42845);

(statearr_42932[(15)] = inst_42847);

(statearr_42932[(16)] = inst_42848);

return statearr_42932;
})();
var statearr_42933_42972 = state_42904__$1;
(statearr_42933_42972[(2)] = null);

(statearr_42933_42972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (14))){
var state_42904__$1 = state_42904;
var statearr_42937_42973 = state_42904__$1;
(statearr_42937_42973[(2)] = null);

(statearr_42937_42973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (16))){
var inst_42859 = (state_42904[(10)]);
var inst_42863 = cljs.core.chunk_first.call(null,inst_42859);
var inst_42864 = cljs.core.chunk_rest.call(null,inst_42859);
var inst_42865 = cljs.core.count.call(null,inst_42863);
var inst_42845 = inst_42864;
var inst_42846 = inst_42863;
var inst_42847 = inst_42865;
var inst_42848 = (0);
var state_42904__$1 = (function (){var statearr_42938 = state_42904;
(statearr_42938[(13)] = inst_42846);

(statearr_42938[(14)] = inst_42845);

(statearr_42938[(15)] = inst_42847);

(statearr_42938[(16)] = inst_42848);

return statearr_42938;
})();
var statearr_42939_42974 = state_42904__$1;
(statearr_42939_42974[(2)] = null);

(statearr_42939_42974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (10))){
var inst_42846 = (state_42904[(13)]);
var inst_42845 = (state_42904[(14)]);
var inst_42847 = (state_42904[(15)]);
var inst_42848 = (state_42904[(16)]);
var inst_42853 = cljs.core._nth.call(null,inst_42846,inst_42848);
var inst_42854 = cljs.core.async.muxch_STAR_.call(null,inst_42853);
var inst_42855 = cljs.core.async.close_BANG_.call(null,inst_42854);
var inst_42856 = (inst_42848 + (1));
var tmp42934 = inst_42846;
var tmp42935 = inst_42845;
var tmp42936 = inst_42847;
var inst_42845__$1 = tmp42935;
var inst_42846__$1 = tmp42934;
var inst_42847__$1 = tmp42936;
var inst_42848__$1 = inst_42856;
var state_42904__$1 = (function (){var statearr_42940 = state_42904;
(statearr_42940[(13)] = inst_42846__$1);

(statearr_42940[(17)] = inst_42855);

(statearr_42940[(14)] = inst_42845__$1);

(statearr_42940[(15)] = inst_42847__$1);

(statearr_42940[(16)] = inst_42848__$1);

return statearr_42940;
})();
var statearr_42941_42975 = state_42904__$1;
(statearr_42941_42975[(2)] = null);

(statearr_42941_42975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (18))){
var inst_42874 = (state_42904[(2)]);
var state_42904__$1 = state_42904;
var statearr_42942_42976 = state_42904__$1;
(statearr_42942_42976[(2)] = inst_42874);

(statearr_42942_42976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42905 === (8))){
var inst_42847 = (state_42904[(15)]);
var inst_42848 = (state_42904[(16)]);
var inst_42850 = (inst_42848 < inst_42847);
var inst_42851 = inst_42850;
var state_42904__$1 = state_42904;
if(cljs.core.truth_(inst_42851)){
var statearr_42943_42977 = state_42904__$1;
(statearr_42943_42977[(1)] = (10));

} else {
var statearr_42944_42978 = state_42904__$1;
(statearr_42944_42978[(1)] = (11));

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
});})(c__33575__auto___42950,mults,ensure_mult,p))
;
return ((function (switch__33487__auto__,c__33575__auto___42950,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33488__auto__ = null;
var cljs$core$async$state_machine__33488__auto____0 = (function (){
var statearr_42945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42945[(0)] = cljs$core$async$state_machine__33488__auto__);

(statearr_42945[(1)] = (1));

return statearr_42945;
});
var cljs$core$async$state_machine__33488__auto____1 = (function (state_42904){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_42904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e42946){if((e42946 instanceof Object)){
var ex__33491__auto__ = e42946;
var statearr_42947_42979 = state_42904;
(statearr_42947_42979[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42980 = state_42904;
state_42904 = G__42980;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$state_machine__33488__auto__ = function(state_42904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33488__auto____1.call(this,state_42904);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33488__auto____0;
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33488__auto____1;
return cljs$core$async$state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___42950,mults,ensure_mult,p))
})();
var state__33577__auto__ = (function (){var statearr_42948 = f__33576__auto__.call(null);
(statearr_42948[(6)] = c__33575__auto___42950);

return statearr_42948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___42950,mults,ensure_mult,p))
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
var G__42982 = arguments.length;
switch (G__42982) {
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
var G__42985 = arguments.length;
switch (G__42985) {
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
var G__42988 = arguments.length;
switch (G__42988) {
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
var c__33575__auto___43055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___43055,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___43055,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43027){
var state_val_43028 = (state_43027[(1)]);
if((state_val_43028 === (7))){
var state_43027__$1 = state_43027;
var statearr_43029_43056 = state_43027__$1;
(statearr_43029_43056[(2)] = null);

(statearr_43029_43056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43028 === (1))){
var state_43027__$1 = state_43027;
var statearr_43030_43057 = state_43027__$1;
(statearr_43030_43057[(2)] = null);

(statearr_43030_43057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43028 === (4))){
var inst_42991 = (state_43027[(7)]);
var inst_42993 = (inst_42991 < cnt);
var state_43027__$1 = state_43027;
if(cljs.core.truth_(inst_42993)){
var statearr_43031_43058 = state_43027__$1;
(statearr_43031_43058[(1)] = (6));

} else {
var statearr_43032_43059 = state_43027__$1;
(statearr_43032_43059[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43028 === (15))){
var inst_43023 = (state_43027[(2)]);
var state_43027__$1 = state_43027;
var statearr_43033_43060 = state_43027__$1;
(statearr_43033_43060[(2)] = inst_43023);

(statearr_43033_43060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43028 === (13))){
var inst_43016 = cljs.core.async.close_BANG_.call(null,out);
var state_43027__$1 = state_43027;
var statearr_43034_43061 = state_43027__$1;
(statearr_43034_43061[(2)] = inst_43016);

(statearr_43034_43061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43028 === (6))){
var state_43027__$1 = state_43027;
var statearr_43035_43062 = state_43027__$1;
(statearr_43035_43062[(2)] = null);

(statearr_43035_43062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43028 === (3))){
var inst_43025 = (state_43027[(2)]);
var state_43027__$1 = state_43027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43027__$1,inst_43025);
} else {
if((state_val_43028 === (12))){
var inst_43013 = (state_43027[(8)]);
var inst_43013__$1 = (state_43027[(2)]);
var inst_43014 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43013__$1);
var state_43027__$1 = (function (){var statearr_43036 = state_43027;
(statearr_43036[(8)] = inst_43013__$1);

return statearr_43036;
})();
if(cljs.core.truth_(inst_43014)){
var statearr_43037_43063 = state_43027__$1;
(statearr_43037_43063[(1)] = (13));

} else {
var statearr_43038_43064 = state_43027__$1;
(statearr_43038_43064[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43028 === (2))){
var inst_42990 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42991 = (0);
var state_43027__$1 = (function (){var statearr_43039 = state_43027;
(statearr_43039[(9)] = inst_42990);

(statearr_43039[(7)] = inst_42991);

return statearr_43039;
})();
var statearr_43040_43065 = state_43027__$1;
(statearr_43040_43065[(2)] = null);

(statearr_43040_43065[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43028 === (11))){
var inst_42991 = (state_43027[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43027,(10),Object,null,(9));
var inst_43000 = chs__$1.call(null,inst_42991);
var inst_43001 = done.call(null,inst_42991);
var inst_43002 = cljs.core.async.take_BANG_.call(null,inst_43000,inst_43001);
var state_43027__$1 = state_43027;
var statearr_43041_43066 = state_43027__$1;
(statearr_43041_43066[(2)] = inst_43002);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43027__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43028 === (9))){
var inst_42991 = (state_43027[(7)]);
var inst_43004 = (state_43027[(2)]);
var inst_43005 = (inst_42991 + (1));
var inst_42991__$1 = inst_43005;
var state_43027__$1 = (function (){var statearr_43042 = state_43027;
(statearr_43042[(10)] = inst_43004);

(statearr_43042[(7)] = inst_42991__$1);

return statearr_43042;
})();
var statearr_43043_43067 = state_43027__$1;
(statearr_43043_43067[(2)] = null);

(statearr_43043_43067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43028 === (5))){
var inst_43011 = (state_43027[(2)]);
var state_43027__$1 = (function (){var statearr_43044 = state_43027;
(statearr_43044[(11)] = inst_43011);

return statearr_43044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43027__$1,(12),dchan);
} else {
if((state_val_43028 === (14))){
var inst_43013 = (state_43027[(8)]);
var inst_43018 = cljs.core.apply.call(null,f,inst_43013);
var state_43027__$1 = state_43027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43027__$1,(16),out,inst_43018);
} else {
if((state_val_43028 === (16))){
var inst_43020 = (state_43027[(2)]);
var state_43027__$1 = (function (){var statearr_43045 = state_43027;
(statearr_43045[(12)] = inst_43020);

return statearr_43045;
})();
var statearr_43046_43068 = state_43027__$1;
(statearr_43046_43068[(2)] = null);

(statearr_43046_43068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43028 === (10))){
var inst_42995 = (state_43027[(2)]);
var inst_42996 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43027__$1 = (function (){var statearr_43047 = state_43027;
(statearr_43047[(13)] = inst_42995);

return statearr_43047;
})();
var statearr_43048_43069 = state_43027__$1;
(statearr_43048_43069[(2)] = inst_42996);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43027__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43028 === (8))){
var inst_43009 = (state_43027[(2)]);
var state_43027__$1 = state_43027;
var statearr_43049_43070 = state_43027__$1;
(statearr_43049_43070[(2)] = inst_43009);

(statearr_43049_43070[(1)] = (5));


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
});})(c__33575__auto___43055,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33487__auto__,c__33575__auto___43055,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33488__auto__ = null;
var cljs$core$async$state_machine__33488__auto____0 = (function (){
var statearr_43050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43050[(0)] = cljs$core$async$state_machine__33488__auto__);

(statearr_43050[(1)] = (1));

return statearr_43050;
});
var cljs$core$async$state_machine__33488__auto____1 = (function (state_43027){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_43027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e43051){if((e43051 instanceof Object)){
var ex__33491__auto__ = e43051;
var statearr_43052_43071 = state_43027;
(statearr_43052_43071[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43072 = state_43027;
state_43027 = G__43072;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$state_machine__33488__auto__ = function(state_43027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33488__auto____1.call(this,state_43027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33488__auto____0;
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33488__auto____1;
return cljs$core$async$state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___43055,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33577__auto__ = (function (){var statearr_43053 = f__33576__auto__.call(null);
(statearr_43053[(6)] = c__33575__auto___43055);

return statearr_43053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___43055,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__43075 = arguments.length;
switch (G__43075) {
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
var c__33575__auto___43129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___43129,out){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___43129,out){
return (function (state_43107){
var state_val_43108 = (state_43107[(1)]);
if((state_val_43108 === (7))){
var inst_43086 = (state_43107[(7)]);
var inst_43087 = (state_43107[(8)]);
var inst_43086__$1 = (state_43107[(2)]);
var inst_43087__$1 = cljs.core.nth.call(null,inst_43086__$1,(0),null);
var inst_43088 = cljs.core.nth.call(null,inst_43086__$1,(1),null);
var inst_43089 = (inst_43087__$1 == null);
var state_43107__$1 = (function (){var statearr_43109 = state_43107;
(statearr_43109[(9)] = inst_43088);

(statearr_43109[(7)] = inst_43086__$1);

(statearr_43109[(8)] = inst_43087__$1);

return statearr_43109;
})();
if(cljs.core.truth_(inst_43089)){
var statearr_43110_43130 = state_43107__$1;
(statearr_43110_43130[(1)] = (8));

} else {
var statearr_43111_43131 = state_43107__$1;
(statearr_43111_43131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (1))){
var inst_43076 = cljs.core.vec.call(null,chs);
var inst_43077 = inst_43076;
var state_43107__$1 = (function (){var statearr_43112 = state_43107;
(statearr_43112[(10)] = inst_43077);

return statearr_43112;
})();
var statearr_43113_43132 = state_43107__$1;
(statearr_43113_43132[(2)] = null);

(statearr_43113_43132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (4))){
var inst_43077 = (state_43107[(10)]);
var state_43107__$1 = state_43107;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43107__$1,(7),inst_43077);
} else {
if((state_val_43108 === (6))){
var inst_43103 = (state_43107[(2)]);
var state_43107__$1 = state_43107;
var statearr_43114_43133 = state_43107__$1;
(statearr_43114_43133[(2)] = inst_43103);

(statearr_43114_43133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (3))){
var inst_43105 = (state_43107[(2)]);
var state_43107__$1 = state_43107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43107__$1,inst_43105);
} else {
if((state_val_43108 === (2))){
var inst_43077 = (state_43107[(10)]);
var inst_43079 = cljs.core.count.call(null,inst_43077);
var inst_43080 = (inst_43079 > (0));
var state_43107__$1 = state_43107;
if(cljs.core.truth_(inst_43080)){
var statearr_43116_43134 = state_43107__$1;
(statearr_43116_43134[(1)] = (4));

} else {
var statearr_43117_43135 = state_43107__$1;
(statearr_43117_43135[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (11))){
var inst_43077 = (state_43107[(10)]);
var inst_43096 = (state_43107[(2)]);
var tmp43115 = inst_43077;
var inst_43077__$1 = tmp43115;
var state_43107__$1 = (function (){var statearr_43118 = state_43107;
(statearr_43118[(11)] = inst_43096);

(statearr_43118[(10)] = inst_43077__$1);

return statearr_43118;
})();
var statearr_43119_43136 = state_43107__$1;
(statearr_43119_43136[(2)] = null);

(statearr_43119_43136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (9))){
var inst_43087 = (state_43107[(8)]);
var state_43107__$1 = state_43107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43107__$1,(11),out,inst_43087);
} else {
if((state_val_43108 === (5))){
var inst_43101 = cljs.core.async.close_BANG_.call(null,out);
var state_43107__$1 = state_43107;
var statearr_43120_43137 = state_43107__$1;
(statearr_43120_43137[(2)] = inst_43101);

(statearr_43120_43137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (10))){
var inst_43099 = (state_43107[(2)]);
var state_43107__$1 = state_43107;
var statearr_43121_43138 = state_43107__$1;
(statearr_43121_43138[(2)] = inst_43099);

(statearr_43121_43138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (8))){
var inst_43088 = (state_43107[(9)]);
var inst_43077 = (state_43107[(10)]);
var inst_43086 = (state_43107[(7)]);
var inst_43087 = (state_43107[(8)]);
var inst_43091 = (function (){var cs = inst_43077;
var vec__43082 = inst_43086;
var v = inst_43087;
var c = inst_43088;
return ((function (cs,vec__43082,v,c,inst_43088,inst_43077,inst_43086,inst_43087,state_val_43108,c__33575__auto___43129,out){
return (function (p1__43073_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43073_SHARP_);
});
;})(cs,vec__43082,v,c,inst_43088,inst_43077,inst_43086,inst_43087,state_val_43108,c__33575__auto___43129,out))
})();
var inst_43092 = cljs.core.filterv.call(null,inst_43091,inst_43077);
var inst_43077__$1 = inst_43092;
var state_43107__$1 = (function (){var statearr_43122 = state_43107;
(statearr_43122[(10)] = inst_43077__$1);

return statearr_43122;
})();
var statearr_43123_43139 = state_43107__$1;
(statearr_43123_43139[(2)] = null);

(statearr_43123_43139[(1)] = (2));


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
});})(c__33575__auto___43129,out))
;
return ((function (switch__33487__auto__,c__33575__auto___43129,out){
return (function() {
var cljs$core$async$state_machine__33488__auto__ = null;
var cljs$core$async$state_machine__33488__auto____0 = (function (){
var statearr_43124 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43124[(0)] = cljs$core$async$state_machine__33488__auto__);

(statearr_43124[(1)] = (1));

return statearr_43124;
});
var cljs$core$async$state_machine__33488__auto____1 = (function (state_43107){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_43107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e43125){if((e43125 instanceof Object)){
var ex__33491__auto__ = e43125;
var statearr_43126_43140 = state_43107;
(statearr_43126_43140[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43141 = state_43107;
state_43107 = G__43141;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$state_machine__33488__auto__ = function(state_43107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33488__auto____1.call(this,state_43107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33488__auto____0;
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33488__auto____1;
return cljs$core$async$state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___43129,out))
})();
var state__33577__auto__ = (function (){var statearr_43127 = f__33576__auto__.call(null);
(statearr_43127[(6)] = c__33575__auto___43129);

return statearr_43127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___43129,out))
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
var G__43143 = arguments.length;
switch (G__43143) {
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
var c__33575__auto___43188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___43188,out){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___43188,out){
return (function (state_43167){
var state_val_43168 = (state_43167[(1)]);
if((state_val_43168 === (7))){
var inst_43149 = (state_43167[(7)]);
var inst_43149__$1 = (state_43167[(2)]);
var inst_43150 = (inst_43149__$1 == null);
var inst_43151 = cljs.core.not.call(null,inst_43150);
var state_43167__$1 = (function (){var statearr_43169 = state_43167;
(statearr_43169[(7)] = inst_43149__$1);

return statearr_43169;
})();
if(inst_43151){
var statearr_43170_43189 = state_43167__$1;
(statearr_43170_43189[(1)] = (8));

} else {
var statearr_43171_43190 = state_43167__$1;
(statearr_43171_43190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (1))){
var inst_43144 = (0);
var state_43167__$1 = (function (){var statearr_43172 = state_43167;
(statearr_43172[(8)] = inst_43144);

return statearr_43172;
})();
var statearr_43173_43191 = state_43167__$1;
(statearr_43173_43191[(2)] = null);

(statearr_43173_43191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (4))){
var state_43167__$1 = state_43167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43167__$1,(7),ch);
} else {
if((state_val_43168 === (6))){
var inst_43162 = (state_43167[(2)]);
var state_43167__$1 = state_43167;
var statearr_43174_43192 = state_43167__$1;
(statearr_43174_43192[(2)] = inst_43162);

(statearr_43174_43192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (3))){
var inst_43164 = (state_43167[(2)]);
var inst_43165 = cljs.core.async.close_BANG_.call(null,out);
var state_43167__$1 = (function (){var statearr_43175 = state_43167;
(statearr_43175[(9)] = inst_43164);

return statearr_43175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43167__$1,inst_43165);
} else {
if((state_val_43168 === (2))){
var inst_43144 = (state_43167[(8)]);
var inst_43146 = (inst_43144 < n);
var state_43167__$1 = state_43167;
if(cljs.core.truth_(inst_43146)){
var statearr_43176_43193 = state_43167__$1;
(statearr_43176_43193[(1)] = (4));

} else {
var statearr_43177_43194 = state_43167__$1;
(statearr_43177_43194[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (11))){
var inst_43144 = (state_43167[(8)]);
var inst_43154 = (state_43167[(2)]);
var inst_43155 = (inst_43144 + (1));
var inst_43144__$1 = inst_43155;
var state_43167__$1 = (function (){var statearr_43178 = state_43167;
(statearr_43178[(10)] = inst_43154);

(statearr_43178[(8)] = inst_43144__$1);

return statearr_43178;
})();
var statearr_43179_43195 = state_43167__$1;
(statearr_43179_43195[(2)] = null);

(statearr_43179_43195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (9))){
var state_43167__$1 = state_43167;
var statearr_43180_43196 = state_43167__$1;
(statearr_43180_43196[(2)] = null);

(statearr_43180_43196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (5))){
var state_43167__$1 = state_43167;
var statearr_43181_43197 = state_43167__$1;
(statearr_43181_43197[(2)] = null);

(statearr_43181_43197[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (10))){
var inst_43159 = (state_43167[(2)]);
var state_43167__$1 = state_43167;
var statearr_43182_43198 = state_43167__$1;
(statearr_43182_43198[(2)] = inst_43159);

(statearr_43182_43198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (8))){
var inst_43149 = (state_43167[(7)]);
var state_43167__$1 = state_43167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43167__$1,(11),out,inst_43149);
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
});})(c__33575__auto___43188,out))
;
return ((function (switch__33487__auto__,c__33575__auto___43188,out){
return (function() {
var cljs$core$async$state_machine__33488__auto__ = null;
var cljs$core$async$state_machine__33488__auto____0 = (function (){
var statearr_43183 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43183[(0)] = cljs$core$async$state_machine__33488__auto__);

(statearr_43183[(1)] = (1));

return statearr_43183;
});
var cljs$core$async$state_machine__33488__auto____1 = (function (state_43167){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_43167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e43184){if((e43184 instanceof Object)){
var ex__33491__auto__ = e43184;
var statearr_43185_43199 = state_43167;
(statearr_43185_43199[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43200 = state_43167;
state_43167 = G__43200;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$state_machine__33488__auto__ = function(state_43167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33488__auto____1.call(this,state_43167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33488__auto____0;
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33488__auto____1;
return cljs$core$async$state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___43188,out))
})();
var state__33577__auto__ = (function (){var statearr_43186 = f__33576__auto__.call(null);
(statearr_43186[(6)] = c__33575__auto___43188);

return statearr_43186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___43188,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43202 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43202 = (function (f,ch,meta43203){
this.f = f;
this.ch = ch;
this.meta43203 = meta43203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43204,meta43203__$1){
var self__ = this;
var _43204__$1 = this;
return (new cljs.core.async.t_cljs$core$async43202(self__.f,self__.ch,meta43203__$1));
});

cljs.core.async.t_cljs$core$async43202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43204){
var self__ = this;
var _43204__$1 = this;
return self__.meta43203;
});

cljs.core.async.t_cljs$core$async43202.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43202.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43202.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43202.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43202.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43205 = (function (f,ch,meta43203,_,fn1,meta43206){
this.f = f;
this.ch = ch;
this.meta43203 = meta43203;
this._ = _;
this.fn1 = fn1;
this.meta43206 = meta43206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43207,meta43206__$1){
var self__ = this;
var _43207__$1 = this;
return (new cljs.core.async.t_cljs$core$async43205(self__.f,self__.ch,self__.meta43203,self__._,self__.fn1,meta43206__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43205.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43207){
var self__ = this;
var _43207__$1 = this;
return self__.meta43206;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43205.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43205.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43201_SHARP_){
return f1.call(null,(((p1__43201_SHARP_ == null))?null:self__.f.call(null,p1__43201_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43205.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43203","meta43203",-332028363,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43202","cljs.core.async/t_cljs$core$async43202",1830219208,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43206","meta43206",1603262103,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43205";

cljs.core.async.t_cljs$core$async43205.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async43205");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43205 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43205(f__$1,ch__$1,meta43203__$1,___$2,fn1__$1,meta43206){
return (new cljs.core.async.t_cljs$core$async43205(f__$1,ch__$1,meta43203__$1,___$2,fn1__$1,meta43206));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43205(self__.f,self__.ch,self__.meta43203,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async43202.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43202.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43203","meta43203",-332028363,null)], null);
});

cljs.core.async.t_cljs$core$async43202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43202";

cljs.core.async.t_cljs$core$async43202.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async43202");
});

cljs.core.async.__GT_t_cljs$core$async43202 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43202(f__$1,ch__$1,meta43203){
return (new cljs.core.async.t_cljs$core$async43202(f__$1,ch__$1,meta43203));
});

}

return (new cljs.core.async.t_cljs$core$async43202(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43208 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43208 = (function (f,ch,meta43209){
this.f = f;
this.ch = ch;
this.meta43209 = meta43209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43210,meta43209__$1){
var self__ = this;
var _43210__$1 = this;
return (new cljs.core.async.t_cljs$core$async43208(self__.f,self__.ch,meta43209__$1));
});

cljs.core.async.t_cljs$core$async43208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43210){
var self__ = this;
var _43210__$1 = this;
return self__.meta43209;
});

cljs.core.async.t_cljs$core$async43208.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43208.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43208.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43208.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43208.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43208.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43209","meta43209",1797612434,null)], null);
});

cljs.core.async.t_cljs$core$async43208.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43208";

cljs.core.async.t_cljs$core$async43208.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async43208");
});

cljs.core.async.__GT_t_cljs$core$async43208 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43208(f__$1,ch__$1,meta43209){
return (new cljs.core.async.t_cljs$core$async43208(f__$1,ch__$1,meta43209));
});

}

return (new cljs.core.async.t_cljs$core$async43208(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43211 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43211 = (function (p,ch,meta43212){
this.p = p;
this.ch = ch;
this.meta43212 = meta43212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43213,meta43212__$1){
var self__ = this;
var _43213__$1 = this;
return (new cljs.core.async.t_cljs$core$async43211(self__.p,self__.ch,meta43212__$1));
});

cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43213){
var self__ = this;
var _43213__$1 = this;
return self__.meta43212;
});

cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43212","meta43212",175642631,null)], null);
});

cljs.core.async.t_cljs$core$async43211.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43211";

cljs.core.async.t_cljs$core$async43211.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async43211");
});

cljs.core.async.__GT_t_cljs$core$async43211 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43211(p__$1,ch__$1,meta43212){
return (new cljs.core.async.t_cljs$core$async43211(p__$1,ch__$1,meta43212));
});

}

return (new cljs.core.async.t_cljs$core$async43211(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43215 = arguments.length;
switch (G__43215) {
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
var c__33575__auto___43255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___43255,out){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___43255,out){
return (function (state_43236){
var state_val_43237 = (state_43236[(1)]);
if((state_val_43237 === (7))){
var inst_43232 = (state_43236[(2)]);
var state_43236__$1 = state_43236;
var statearr_43238_43256 = state_43236__$1;
(statearr_43238_43256[(2)] = inst_43232);

(statearr_43238_43256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43237 === (1))){
var state_43236__$1 = state_43236;
var statearr_43239_43257 = state_43236__$1;
(statearr_43239_43257[(2)] = null);

(statearr_43239_43257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43237 === (4))){
var inst_43218 = (state_43236[(7)]);
var inst_43218__$1 = (state_43236[(2)]);
var inst_43219 = (inst_43218__$1 == null);
var state_43236__$1 = (function (){var statearr_43240 = state_43236;
(statearr_43240[(7)] = inst_43218__$1);

return statearr_43240;
})();
if(cljs.core.truth_(inst_43219)){
var statearr_43241_43258 = state_43236__$1;
(statearr_43241_43258[(1)] = (5));

} else {
var statearr_43242_43259 = state_43236__$1;
(statearr_43242_43259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43237 === (6))){
var inst_43218 = (state_43236[(7)]);
var inst_43223 = p.call(null,inst_43218);
var state_43236__$1 = state_43236;
if(cljs.core.truth_(inst_43223)){
var statearr_43243_43260 = state_43236__$1;
(statearr_43243_43260[(1)] = (8));

} else {
var statearr_43244_43261 = state_43236__$1;
(statearr_43244_43261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43237 === (3))){
var inst_43234 = (state_43236[(2)]);
var state_43236__$1 = state_43236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43236__$1,inst_43234);
} else {
if((state_val_43237 === (2))){
var state_43236__$1 = state_43236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43236__$1,(4),ch);
} else {
if((state_val_43237 === (11))){
var inst_43226 = (state_43236[(2)]);
var state_43236__$1 = state_43236;
var statearr_43245_43262 = state_43236__$1;
(statearr_43245_43262[(2)] = inst_43226);

(statearr_43245_43262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43237 === (9))){
var state_43236__$1 = state_43236;
var statearr_43246_43263 = state_43236__$1;
(statearr_43246_43263[(2)] = null);

(statearr_43246_43263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43237 === (5))){
var inst_43221 = cljs.core.async.close_BANG_.call(null,out);
var state_43236__$1 = state_43236;
var statearr_43247_43264 = state_43236__$1;
(statearr_43247_43264[(2)] = inst_43221);

(statearr_43247_43264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43237 === (10))){
var inst_43229 = (state_43236[(2)]);
var state_43236__$1 = (function (){var statearr_43248 = state_43236;
(statearr_43248[(8)] = inst_43229);

return statearr_43248;
})();
var statearr_43249_43265 = state_43236__$1;
(statearr_43249_43265[(2)] = null);

(statearr_43249_43265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43237 === (8))){
var inst_43218 = (state_43236[(7)]);
var state_43236__$1 = state_43236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43236__$1,(11),out,inst_43218);
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
});})(c__33575__auto___43255,out))
;
return ((function (switch__33487__auto__,c__33575__auto___43255,out){
return (function() {
var cljs$core$async$state_machine__33488__auto__ = null;
var cljs$core$async$state_machine__33488__auto____0 = (function (){
var statearr_43250 = [null,null,null,null,null,null,null,null,null];
(statearr_43250[(0)] = cljs$core$async$state_machine__33488__auto__);

(statearr_43250[(1)] = (1));

return statearr_43250;
});
var cljs$core$async$state_machine__33488__auto____1 = (function (state_43236){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_43236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e43251){if((e43251 instanceof Object)){
var ex__33491__auto__ = e43251;
var statearr_43252_43266 = state_43236;
(statearr_43252_43266[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43267 = state_43236;
state_43236 = G__43267;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$state_machine__33488__auto__ = function(state_43236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33488__auto____1.call(this,state_43236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33488__auto____0;
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33488__auto____1;
return cljs$core$async$state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___43255,out))
})();
var state__33577__auto__ = (function (){var statearr_43253 = f__33576__auto__.call(null);
(statearr_43253[(6)] = c__33575__auto___43255);

return statearr_43253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___43255,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43269 = arguments.length;
switch (G__43269) {
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
var c__33575__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto__){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto__){
return (function (state_43332){
var state_val_43333 = (state_43332[(1)]);
if((state_val_43333 === (7))){
var inst_43328 = (state_43332[(2)]);
var state_43332__$1 = state_43332;
var statearr_43334_43372 = state_43332__$1;
(statearr_43334_43372[(2)] = inst_43328);

(statearr_43334_43372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (20))){
var inst_43298 = (state_43332[(7)]);
var inst_43309 = (state_43332[(2)]);
var inst_43310 = cljs.core.next.call(null,inst_43298);
var inst_43284 = inst_43310;
var inst_43285 = null;
var inst_43286 = (0);
var inst_43287 = (0);
var state_43332__$1 = (function (){var statearr_43335 = state_43332;
(statearr_43335[(8)] = inst_43284);

(statearr_43335[(9)] = inst_43285);

(statearr_43335[(10)] = inst_43286);

(statearr_43335[(11)] = inst_43309);

(statearr_43335[(12)] = inst_43287);

return statearr_43335;
})();
var statearr_43336_43373 = state_43332__$1;
(statearr_43336_43373[(2)] = null);

(statearr_43336_43373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (1))){
var state_43332__$1 = state_43332;
var statearr_43337_43374 = state_43332__$1;
(statearr_43337_43374[(2)] = null);

(statearr_43337_43374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (4))){
var inst_43273 = (state_43332[(13)]);
var inst_43273__$1 = (state_43332[(2)]);
var inst_43274 = (inst_43273__$1 == null);
var state_43332__$1 = (function (){var statearr_43338 = state_43332;
(statearr_43338[(13)] = inst_43273__$1);

return statearr_43338;
})();
if(cljs.core.truth_(inst_43274)){
var statearr_43339_43375 = state_43332__$1;
(statearr_43339_43375[(1)] = (5));

} else {
var statearr_43340_43376 = state_43332__$1;
(statearr_43340_43376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (15))){
var state_43332__$1 = state_43332;
var statearr_43344_43377 = state_43332__$1;
(statearr_43344_43377[(2)] = null);

(statearr_43344_43377[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (21))){
var state_43332__$1 = state_43332;
var statearr_43345_43378 = state_43332__$1;
(statearr_43345_43378[(2)] = null);

(statearr_43345_43378[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (13))){
var inst_43284 = (state_43332[(8)]);
var inst_43285 = (state_43332[(9)]);
var inst_43286 = (state_43332[(10)]);
var inst_43287 = (state_43332[(12)]);
var inst_43294 = (state_43332[(2)]);
var inst_43295 = (inst_43287 + (1));
var tmp43341 = inst_43284;
var tmp43342 = inst_43285;
var tmp43343 = inst_43286;
var inst_43284__$1 = tmp43341;
var inst_43285__$1 = tmp43342;
var inst_43286__$1 = tmp43343;
var inst_43287__$1 = inst_43295;
var state_43332__$1 = (function (){var statearr_43346 = state_43332;
(statearr_43346[(8)] = inst_43284__$1);

(statearr_43346[(9)] = inst_43285__$1);

(statearr_43346[(10)] = inst_43286__$1);

(statearr_43346[(14)] = inst_43294);

(statearr_43346[(12)] = inst_43287__$1);

return statearr_43346;
})();
var statearr_43347_43379 = state_43332__$1;
(statearr_43347_43379[(2)] = null);

(statearr_43347_43379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (22))){
var state_43332__$1 = state_43332;
var statearr_43348_43380 = state_43332__$1;
(statearr_43348_43380[(2)] = null);

(statearr_43348_43380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (6))){
var inst_43273 = (state_43332[(13)]);
var inst_43282 = f.call(null,inst_43273);
var inst_43283 = cljs.core.seq.call(null,inst_43282);
var inst_43284 = inst_43283;
var inst_43285 = null;
var inst_43286 = (0);
var inst_43287 = (0);
var state_43332__$1 = (function (){var statearr_43349 = state_43332;
(statearr_43349[(8)] = inst_43284);

(statearr_43349[(9)] = inst_43285);

(statearr_43349[(10)] = inst_43286);

(statearr_43349[(12)] = inst_43287);

return statearr_43349;
})();
var statearr_43350_43381 = state_43332__$1;
(statearr_43350_43381[(2)] = null);

(statearr_43350_43381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (17))){
var inst_43298 = (state_43332[(7)]);
var inst_43302 = cljs.core.chunk_first.call(null,inst_43298);
var inst_43303 = cljs.core.chunk_rest.call(null,inst_43298);
var inst_43304 = cljs.core.count.call(null,inst_43302);
var inst_43284 = inst_43303;
var inst_43285 = inst_43302;
var inst_43286 = inst_43304;
var inst_43287 = (0);
var state_43332__$1 = (function (){var statearr_43351 = state_43332;
(statearr_43351[(8)] = inst_43284);

(statearr_43351[(9)] = inst_43285);

(statearr_43351[(10)] = inst_43286);

(statearr_43351[(12)] = inst_43287);

return statearr_43351;
})();
var statearr_43352_43382 = state_43332__$1;
(statearr_43352_43382[(2)] = null);

(statearr_43352_43382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (3))){
var inst_43330 = (state_43332[(2)]);
var state_43332__$1 = state_43332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43332__$1,inst_43330);
} else {
if((state_val_43333 === (12))){
var inst_43318 = (state_43332[(2)]);
var state_43332__$1 = state_43332;
var statearr_43353_43383 = state_43332__$1;
(statearr_43353_43383[(2)] = inst_43318);

(statearr_43353_43383[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (2))){
var state_43332__$1 = state_43332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43332__$1,(4),in$);
} else {
if((state_val_43333 === (23))){
var inst_43326 = (state_43332[(2)]);
var state_43332__$1 = state_43332;
var statearr_43354_43384 = state_43332__$1;
(statearr_43354_43384[(2)] = inst_43326);

(statearr_43354_43384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (19))){
var inst_43313 = (state_43332[(2)]);
var state_43332__$1 = state_43332;
var statearr_43355_43385 = state_43332__$1;
(statearr_43355_43385[(2)] = inst_43313);

(statearr_43355_43385[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (11))){
var inst_43284 = (state_43332[(8)]);
var inst_43298 = (state_43332[(7)]);
var inst_43298__$1 = cljs.core.seq.call(null,inst_43284);
var state_43332__$1 = (function (){var statearr_43356 = state_43332;
(statearr_43356[(7)] = inst_43298__$1);

return statearr_43356;
})();
if(inst_43298__$1){
var statearr_43357_43386 = state_43332__$1;
(statearr_43357_43386[(1)] = (14));

} else {
var statearr_43358_43387 = state_43332__$1;
(statearr_43358_43387[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (9))){
var inst_43320 = (state_43332[(2)]);
var inst_43321 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43332__$1 = (function (){var statearr_43359 = state_43332;
(statearr_43359[(15)] = inst_43320);

return statearr_43359;
})();
if(cljs.core.truth_(inst_43321)){
var statearr_43360_43388 = state_43332__$1;
(statearr_43360_43388[(1)] = (21));

} else {
var statearr_43361_43389 = state_43332__$1;
(statearr_43361_43389[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (5))){
var inst_43276 = cljs.core.async.close_BANG_.call(null,out);
var state_43332__$1 = state_43332;
var statearr_43362_43390 = state_43332__$1;
(statearr_43362_43390[(2)] = inst_43276);

(statearr_43362_43390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (14))){
var inst_43298 = (state_43332[(7)]);
var inst_43300 = cljs.core.chunked_seq_QMARK_.call(null,inst_43298);
var state_43332__$1 = state_43332;
if(inst_43300){
var statearr_43363_43391 = state_43332__$1;
(statearr_43363_43391[(1)] = (17));

} else {
var statearr_43364_43392 = state_43332__$1;
(statearr_43364_43392[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (16))){
var inst_43316 = (state_43332[(2)]);
var state_43332__$1 = state_43332;
var statearr_43365_43393 = state_43332__$1;
(statearr_43365_43393[(2)] = inst_43316);

(statearr_43365_43393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43333 === (10))){
var inst_43285 = (state_43332[(9)]);
var inst_43287 = (state_43332[(12)]);
var inst_43292 = cljs.core._nth.call(null,inst_43285,inst_43287);
var state_43332__$1 = state_43332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43332__$1,(13),out,inst_43292);
} else {
if((state_val_43333 === (18))){
var inst_43298 = (state_43332[(7)]);
var inst_43307 = cljs.core.first.call(null,inst_43298);
var state_43332__$1 = state_43332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43332__$1,(20),out,inst_43307);
} else {
if((state_val_43333 === (8))){
var inst_43286 = (state_43332[(10)]);
var inst_43287 = (state_43332[(12)]);
var inst_43289 = (inst_43287 < inst_43286);
var inst_43290 = inst_43289;
var state_43332__$1 = state_43332;
if(cljs.core.truth_(inst_43290)){
var statearr_43366_43394 = state_43332__$1;
(statearr_43366_43394[(1)] = (10));

} else {
var statearr_43367_43395 = state_43332__$1;
(statearr_43367_43395[(1)] = (11));

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
});})(c__33575__auto__))
;
return ((function (switch__33487__auto__,c__33575__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33488__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33488__auto____0 = (function (){
var statearr_43368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43368[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33488__auto__);

(statearr_43368[(1)] = (1));

return statearr_43368;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33488__auto____1 = (function (state_43332){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_43332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e43369){if((e43369 instanceof Object)){
var ex__33491__auto__ = e43369;
var statearr_43370_43396 = state_43332;
(statearr_43370_43396[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43397 = state_43332;
state_43332 = G__43397;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33488__auto__ = function(state_43332){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33488__auto____1.call(this,state_43332);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33488__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33488__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto__))
})();
var state__33577__auto__ = (function (){var statearr_43371 = f__33576__auto__.call(null);
(statearr_43371[(6)] = c__33575__auto__);

return statearr_43371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto__))
);

return c__33575__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43399 = arguments.length;
switch (G__43399) {
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
var G__43402 = arguments.length;
switch (G__43402) {
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
var G__43405 = arguments.length;
switch (G__43405) {
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
var c__33575__auto___43452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___43452,out){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___43452,out){
return (function (state_43429){
var state_val_43430 = (state_43429[(1)]);
if((state_val_43430 === (7))){
var inst_43424 = (state_43429[(2)]);
var state_43429__$1 = state_43429;
var statearr_43431_43453 = state_43429__$1;
(statearr_43431_43453[(2)] = inst_43424);

(statearr_43431_43453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43430 === (1))){
var inst_43406 = null;
var state_43429__$1 = (function (){var statearr_43432 = state_43429;
(statearr_43432[(7)] = inst_43406);

return statearr_43432;
})();
var statearr_43433_43454 = state_43429__$1;
(statearr_43433_43454[(2)] = null);

(statearr_43433_43454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43430 === (4))){
var inst_43409 = (state_43429[(8)]);
var inst_43409__$1 = (state_43429[(2)]);
var inst_43410 = (inst_43409__$1 == null);
var inst_43411 = cljs.core.not.call(null,inst_43410);
var state_43429__$1 = (function (){var statearr_43434 = state_43429;
(statearr_43434[(8)] = inst_43409__$1);

return statearr_43434;
})();
if(inst_43411){
var statearr_43435_43455 = state_43429__$1;
(statearr_43435_43455[(1)] = (5));

} else {
var statearr_43436_43456 = state_43429__$1;
(statearr_43436_43456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43430 === (6))){
var state_43429__$1 = state_43429;
var statearr_43437_43457 = state_43429__$1;
(statearr_43437_43457[(2)] = null);

(statearr_43437_43457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43430 === (3))){
var inst_43426 = (state_43429[(2)]);
var inst_43427 = cljs.core.async.close_BANG_.call(null,out);
var state_43429__$1 = (function (){var statearr_43438 = state_43429;
(statearr_43438[(9)] = inst_43426);

return statearr_43438;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43429__$1,inst_43427);
} else {
if((state_val_43430 === (2))){
var state_43429__$1 = state_43429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43429__$1,(4),ch);
} else {
if((state_val_43430 === (11))){
var inst_43409 = (state_43429[(8)]);
var inst_43418 = (state_43429[(2)]);
var inst_43406 = inst_43409;
var state_43429__$1 = (function (){var statearr_43439 = state_43429;
(statearr_43439[(7)] = inst_43406);

(statearr_43439[(10)] = inst_43418);

return statearr_43439;
})();
var statearr_43440_43458 = state_43429__$1;
(statearr_43440_43458[(2)] = null);

(statearr_43440_43458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43430 === (9))){
var inst_43409 = (state_43429[(8)]);
var state_43429__$1 = state_43429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43429__$1,(11),out,inst_43409);
} else {
if((state_val_43430 === (5))){
var inst_43409 = (state_43429[(8)]);
var inst_43406 = (state_43429[(7)]);
var inst_43413 = cljs.core._EQ_.call(null,inst_43409,inst_43406);
var state_43429__$1 = state_43429;
if(inst_43413){
var statearr_43442_43459 = state_43429__$1;
(statearr_43442_43459[(1)] = (8));

} else {
var statearr_43443_43460 = state_43429__$1;
(statearr_43443_43460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43430 === (10))){
var inst_43421 = (state_43429[(2)]);
var state_43429__$1 = state_43429;
var statearr_43444_43461 = state_43429__$1;
(statearr_43444_43461[(2)] = inst_43421);

(statearr_43444_43461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43430 === (8))){
var inst_43406 = (state_43429[(7)]);
var tmp43441 = inst_43406;
var inst_43406__$1 = tmp43441;
var state_43429__$1 = (function (){var statearr_43445 = state_43429;
(statearr_43445[(7)] = inst_43406__$1);

return statearr_43445;
})();
var statearr_43446_43462 = state_43429__$1;
(statearr_43446_43462[(2)] = null);

(statearr_43446_43462[(1)] = (2));


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
});})(c__33575__auto___43452,out))
;
return ((function (switch__33487__auto__,c__33575__auto___43452,out){
return (function() {
var cljs$core$async$state_machine__33488__auto__ = null;
var cljs$core$async$state_machine__33488__auto____0 = (function (){
var statearr_43447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43447[(0)] = cljs$core$async$state_machine__33488__auto__);

(statearr_43447[(1)] = (1));

return statearr_43447;
});
var cljs$core$async$state_machine__33488__auto____1 = (function (state_43429){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_43429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e43448){if((e43448 instanceof Object)){
var ex__33491__auto__ = e43448;
var statearr_43449_43463 = state_43429;
(statearr_43449_43463[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43464 = state_43429;
state_43429 = G__43464;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$state_machine__33488__auto__ = function(state_43429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33488__auto____1.call(this,state_43429);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33488__auto____0;
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33488__auto____1;
return cljs$core$async$state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___43452,out))
})();
var state__33577__auto__ = (function (){var statearr_43450 = f__33576__auto__.call(null);
(statearr_43450[(6)] = c__33575__auto___43452);

return statearr_43450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___43452,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43466 = arguments.length;
switch (G__43466) {
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
var c__33575__auto___43532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___43532,out){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___43532,out){
return (function (state_43504){
var state_val_43505 = (state_43504[(1)]);
if((state_val_43505 === (7))){
var inst_43500 = (state_43504[(2)]);
var state_43504__$1 = state_43504;
var statearr_43506_43533 = state_43504__$1;
(statearr_43506_43533[(2)] = inst_43500);

(statearr_43506_43533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (1))){
var inst_43467 = (new Array(n));
var inst_43468 = inst_43467;
var inst_43469 = (0);
var state_43504__$1 = (function (){var statearr_43507 = state_43504;
(statearr_43507[(7)] = inst_43469);

(statearr_43507[(8)] = inst_43468);

return statearr_43507;
})();
var statearr_43508_43534 = state_43504__$1;
(statearr_43508_43534[(2)] = null);

(statearr_43508_43534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (4))){
var inst_43472 = (state_43504[(9)]);
var inst_43472__$1 = (state_43504[(2)]);
var inst_43473 = (inst_43472__$1 == null);
var inst_43474 = cljs.core.not.call(null,inst_43473);
var state_43504__$1 = (function (){var statearr_43509 = state_43504;
(statearr_43509[(9)] = inst_43472__$1);

return statearr_43509;
})();
if(inst_43474){
var statearr_43510_43535 = state_43504__$1;
(statearr_43510_43535[(1)] = (5));

} else {
var statearr_43511_43536 = state_43504__$1;
(statearr_43511_43536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (15))){
var inst_43494 = (state_43504[(2)]);
var state_43504__$1 = state_43504;
var statearr_43512_43537 = state_43504__$1;
(statearr_43512_43537[(2)] = inst_43494);

(statearr_43512_43537[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (13))){
var state_43504__$1 = state_43504;
var statearr_43513_43538 = state_43504__$1;
(statearr_43513_43538[(2)] = null);

(statearr_43513_43538[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (6))){
var inst_43469 = (state_43504[(7)]);
var inst_43490 = (inst_43469 > (0));
var state_43504__$1 = state_43504;
if(cljs.core.truth_(inst_43490)){
var statearr_43514_43539 = state_43504__$1;
(statearr_43514_43539[(1)] = (12));

} else {
var statearr_43515_43540 = state_43504__$1;
(statearr_43515_43540[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (3))){
var inst_43502 = (state_43504[(2)]);
var state_43504__$1 = state_43504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43504__$1,inst_43502);
} else {
if((state_val_43505 === (12))){
var inst_43468 = (state_43504[(8)]);
var inst_43492 = cljs.core.vec.call(null,inst_43468);
var state_43504__$1 = state_43504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43504__$1,(15),out,inst_43492);
} else {
if((state_val_43505 === (2))){
var state_43504__$1 = state_43504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43504__$1,(4),ch);
} else {
if((state_val_43505 === (11))){
var inst_43484 = (state_43504[(2)]);
var inst_43485 = (new Array(n));
var inst_43468 = inst_43485;
var inst_43469 = (0);
var state_43504__$1 = (function (){var statearr_43516 = state_43504;
(statearr_43516[(10)] = inst_43484);

(statearr_43516[(7)] = inst_43469);

(statearr_43516[(8)] = inst_43468);

return statearr_43516;
})();
var statearr_43517_43541 = state_43504__$1;
(statearr_43517_43541[(2)] = null);

(statearr_43517_43541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (9))){
var inst_43468 = (state_43504[(8)]);
var inst_43482 = cljs.core.vec.call(null,inst_43468);
var state_43504__$1 = state_43504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43504__$1,(11),out,inst_43482);
} else {
if((state_val_43505 === (5))){
var inst_43472 = (state_43504[(9)]);
var inst_43477 = (state_43504[(11)]);
var inst_43469 = (state_43504[(7)]);
var inst_43468 = (state_43504[(8)]);
var inst_43476 = (inst_43468[inst_43469] = inst_43472);
var inst_43477__$1 = (inst_43469 + (1));
var inst_43478 = (inst_43477__$1 < n);
var state_43504__$1 = (function (){var statearr_43518 = state_43504;
(statearr_43518[(11)] = inst_43477__$1);

(statearr_43518[(12)] = inst_43476);

return statearr_43518;
})();
if(cljs.core.truth_(inst_43478)){
var statearr_43519_43542 = state_43504__$1;
(statearr_43519_43542[(1)] = (8));

} else {
var statearr_43520_43543 = state_43504__$1;
(statearr_43520_43543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (14))){
var inst_43497 = (state_43504[(2)]);
var inst_43498 = cljs.core.async.close_BANG_.call(null,out);
var state_43504__$1 = (function (){var statearr_43522 = state_43504;
(statearr_43522[(13)] = inst_43497);

return statearr_43522;
})();
var statearr_43523_43544 = state_43504__$1;
(statearr_43523_43544[(2)] = inst_43498);

(statearr_43523_43544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (10))){
var inst_43488 = (state_43504[(2)]);
var state_43504__$1 = state_43504;
var statearr_43524_43545 = state_43504__$1;
(statearr_43524_43545[(2)] = inst_43488);

(statearr_43524_43545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43505 === (8))){
var inst_43477 = (state_43504[(11)]);
var inst_43468 = (state_43504[(8)]);
var tmp43521 = inst_43468;
var inst_43468__$1 = tmp43521;
var inst_43469 = inst_43477;
var state_43504__$1 = (function (){var statearr_43525 = state_43504;
(statearr_43525[(7)] = inst_43469);

(statearr_43525[(8)] = inst_43468__$1);

return statearr_43525;
})();
var statearr_43526_43546 = state_43504__$1;
(statearr_43526_43546[(2)] = null);

(statearr_43526_43546[(1)] = (2));


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
});})(c__33575__auto___43532,out))
;
return ((function (switch__33487__auto__,c__33575__auto___43532,out){
return (function() {
var cljs$core$async$state_machine__33488__auto__ = null;
var cljs$core$async$state_machine__33488__auto____0 = (function (){
var statearr_43527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43527[(0)] = cljs$core$async$state_machine__33488__auto__);

(statearr_43527[(1)] = (1));

return statearr_43527;
});
var cljs$core$async$state_machine__33488__auto____1 = (function (state_43504){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_43504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e43528){if((e43528 instanceof Object)){
var ex__33491__auto__ = e43528;
var statearr_43529_43547 = state_43504;
(statearr_43529_43547[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43548 = state_43504;
state_43504 = G__43548;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$state_machine__33488__auto__ = function(state_43504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33488__auto____1.call(this,state_43504);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33488__auto____0;
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33488__auto____1;
return cljs$core$async$state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___43532,out))
})();
var state__33577__auto__ = (function (){var statearr_43530 = f__33576__auto__.call(null);
(statearr_43530[(6)] = c__33575__auto___43532);

return statearr_43530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___43532,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43550 = arguments.length;
switch (G__43550) {
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
var c__33575__auto___43620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33575__auto___43620,out){
return (function (){
var f__33576__auto__ = (function (){var switch__33487__auto__ = ((function (c__33575__auto___43620,out){
return (function (state_43592){
var state_val_43593 = (state_43592[(1)]);
if((state_val_43593 === (7))){
var inst_43588 = (state_43592[(2)]);
var state_43592__$1 = state_43592;
var statearr_43594_43621 = state_43592__$1;
(statearr_43594_43621[(2)] = inst_43588);

(statearr_43594_43621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (1))){
var inst_43551 = [];
var inst_43552 = inst_43551;
var inst_43553 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43592__$1 = (function (){var statearr_43595 = state_43592;
(statearr_43595[(7)] = inst_43552);

(statearr_43595[(8)] = inst_43553);

return statearr_43595;
})();
var statearr_43596_43622 = state_43592__$1;
(statearr_43596_43622[(2)] = null);

(statearr_43596_43622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (4))){
var inst_43556 = (state_43592[(9)]);
var inst_43556__$1 = (state_43592[(2)]);
var inst_43557 = (inst_43556__$1 == null);
var inst_43558 = cljs.core.not.call(null,inst_43557);
var state_43592__$1 = (function (){var statearr_43597 = state_43592;
(statearr_43597[(9)] = inst_43556__$1);

return statearr_43597;
})();
if(inst_43558){
var statearr_43598_43623 = state_43592__$1;
(statearr_43598_43623[(1)] = (5));

} else {
var statearr_43599_43624 = state_43592__$1;
(statearr_43599_43624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (15))){
var inst_43582 = (state_43592[(2)]);
var state_43592__$1 = state_43592;
var statearr_43600_43625 = state_43592__$1;
(statearr_43600_43625[(2)] = inst_43582);

(statearr_43600_43625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (13))){
var state_43592__$1 = state_43592;
var statearr_43601_43626 = state_43592__$1;
(statearr_43601_43626[(2)] = null);

(statearr_43601_43626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (6))){
var inst_43552 = (state_43592[(7)]);
var inst_43577 = inst_43552.length;
var inst_43578 = (inst_43577 > (0));
var state_43592__$1 = state_43592;
if(cljs.core.truth_(inst_43578)){
var statearr_43602_43627 = state_43592__$1;
(statearr_43602_43627[(1)] = (12));

} else {
var statearr_43603_43628 = state_43592__$1;
(statearr_43603_43628[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (3))){
var inst_43590 = (state_43592[(2)]);
var state_43592__$1 = state_43592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43592__$1,inst_43590);
} else {
if((state_val_43593 === (12))){
var inst_43552 = (state_43592[(7)]);
var inst_43580 = cljs.core.vec.call(null,inst_43552);
var state_43592__$1 = state_43592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43592__$1,(15),out,inst_43580);
} else {
if((state_val_43593 === (2))){
var state_43592__$1 = state_43592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43592__$1,(4),ch);
} else {
if((state_val_43593 === (11))){
var inst_43556 = (state_43592[(9)]);
var inst_43560 = (state_43592[(10)]);
var inst_43570 = (state_43592[(2)]);
var inst_43571 = [];
var inst_43572 = inst_43571.push(inst_43556);
var inst_43552 = inst_43571;
var inst_43553 = inst_43560;
var state_43592__$1 = (function (){var statearr_43604 = state_43592;
(statearr_43604[(11)] = inst_43572);

(statearr_43604[(7)] = inst_43552);

(statearr_43604[(12)] = inst_43570);

(statearr_43604[(8)] = inst_43553);

return statearr_43604;
})();
var statearr_43605_43629 = state_43592__$1;
(statearr_43605_43629[(2)] = null);

(statearr_43605_43629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (9))){
var inst_43552 = (state_43592[(7)]);
var inst_43568 = cljs.core.vec.call(null,inst_43552);
var state_43592__$1 = state_43592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43592__$1,(11),out,inst_43568);
} else {
if((state_val_43593 === (5))){
var inst_43556 = (state_43592[(9)]);
var inst_43553 = (state_43592[(8)]);
var inst_43560 = (state_43592[(10)]);
var inst_43560__$1 = f.call(null,inst_43556);
var inst_43561 = cljs.core._EQ_.call(null,inst_43560__$1,inst_43553);
var inst_43562 = cljs.core.keyword_identical_QMARK_.call(null,inst_43553,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43563 = (inst_43561) || (inst_43562);
var state_43592__$1 = (function (){var statearr_43606 = state_43592;
(statearr_43606[(10)] = inst_43560__$1);

return statearr_43606;
})();
if(cljs.core.truth_(inst_43563)){
var statearr_43607_43630 = state_43592__$1;
(statearr_43607_43630[(1)] = (8));

} else {
var statearr_43608_43631 = state_43592__$1;
(statearr_43608_43631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (14))){
var inst_43585 = (state_43592[(2)]);
var inst_43586 = cljs.core.async.close_BANG_.call(null,out);
var state_43592__$1 = (function (){var statearr_43610 = state_43592;
(statearr_43610[(13)] = inst_43585);

return statearr_43610;
})();
var statearr_43611_43632 = state_43592__$1;
(statearr_43611_43632[(2)] = inst_43586);

(statearr_43611_43632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (10))){
var inst_43575 = (state_43592[(2)]);
var state_43592__$1 = state_43592;
var statearr_43612_43633 = state_43592__$1;
(statearr_43612_43633[(2)] = inst_43575);

(statearr_43612_43633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (8))){
var inst_43556 = (state_43592[(9)]);
var inst_43552 = (state_43592[(7)]);
var inst_43560 = (state_43592[(10)]);
var inst_43565 = inst_43552.push(inst_43556);
var tmp43609 = inst_43552;
var inst_43552__$1 = tmp43609;
var inst_43553 = inst_43560;
var state_43592__$1 = (function (){var statearr_43613 = state_43592;
(statearr_43613[(7)] = inst_43552__$1);

(statearr_43613[(8)] = inst_43553);

(statearr_43613[(14)] = inst_43565);

return statearr_43613;
})();
var statearr_43614_43634 = state_43592__$1;
(statearr_43614_43634[(2)] = null);

(statearr_43614_43634[(1)] = (2));


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
});})(c__33575__auto___43620,out))
;
return ((function (switch__33487__auto__,c__33575__auto___43620,out){
return (function() {
var cljs$core$async$state_machine__33488__auto__ = null;
var cljs$core$async$state_machine__33488__auto____0 = (function (){
var statearr_43615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43615[(0)] = cljs$core$async$state_machine__33488__auto__);

(statearr_43615[(1)] = (1));

return statearr_43615;
});
var cljs$core$async$state_machine__33488__auto____1 = (function (state_43592){
while(true){
var ret_value__33489__auto__ = (function (){try{while(true){
var result__33490__auto__ = switch__33487__auto__.call(null,state_43592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33490__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33490__auto__;
}
break;
}
}catch (e43616){if((e43616 instanceof Object)){
var ex__33491__auto__ = e43616;
var statearr_43617_43635 = state_43592;
(statearr_43617_43635[(5)] = ex__33491__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43636 = state_43592;
state_43592 = G__43636;
continue;
} else {
return ret_value__33489__auto__;
}
break;
}
});
cljs$core$async$state_machine__33488__auto__ = function(state_43592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33488__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33488__auto____1.call(this,state_43592);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33488__auto____0;
cljs$core$async$state_machine__33488__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33488__auto____1;
return cljs$core$async$state_machine__33488__auto__;
})()
;})(switch__33487__auto__,c__33575__auto___43620,out))
})();
var state__33577__auto__ = (function (){var statearr_43618 = f__33576__auto__.call(null);
(statearr_43618[(6)] = c__33575__auto___43620);

return statearr_43618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33577__auto__);
});})(c__33575__auto___43620,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1513400480563
