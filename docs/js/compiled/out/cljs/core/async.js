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
var G__37845 = arguments.length;
switch (G__37845) {
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
if(typeof cljs.core.async.t_cljs$core$async37846 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37846 = (function (f,blockable,meta37847){
this.f = f;
this.blockable = blockable;
this.meta37847 = meta37847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37848,meta37847__$1){
var self__ = this;
var _37848__$1 = this;
return (new cljs.core.async.t_cljs$core$async37846(self__.f,self__.blockable,meta37847__$1));
});

cljs.core.async.t_cljs$core$async37846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37848){
var self__ = this;
var _37848__$1 = this;
return self__.meta37847;
});

cljs.core.async.t_cljs$core$async37846.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37846.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37846.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37846.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37847","meta37847",-162296397,null)], null);
});

cljs.core.async.t_cljs$core$async37846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37846";

cljs.core.async.t_cljs$core$async37846.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async37846");
});

cljs.core.async.__GT_t_cljs$core$async37846 = (function cljs$core$async$__GT_t_cljs$core$async37846(f__$1,blockable__$1,meta37847){
return (new cljs.core.async.t_cljs$core$async37846(f__$1,blockable__$1,meta37847));
});

}

return (new cljs.core.async.t_cljs$core$async37846(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37852 = arguments.length;
switch (G__37852) {
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
var G__37855 = arguments.length;
switch (G__37855) {
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
var G__37858 = arguments.length;
switch (G__37858) {
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
var val_37860 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37860);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37860,ret){
return (function (){
return fn1.call(null,val_37860);
});})(val_37860,ret))
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
var G__37862 = arguments.length;
switch (G__37862) {
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
var n__28140__auto___37864 = n;
var x_37865 = (0);
while(true){
if((x_37865 < n__28140__auto___37864)){
(a[x_37865] = (0));

var G__37866 = (x_37865 + (1));
x_37865 = G__37866;
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

var G__37867 = (i + (1));
i = G__37867;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37868 = (function (flag,meta37869){
this.flag = flag;
this.meta37869 = meta37869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37870,meta37869__$1){
var self__ = this;
var _37870__$1 = this;
return (new cljs.core.async.t_cljs$core$async37868(self__.flag,meta37869__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37870){
var self__ = this;
var _37870__$1 = this;
return self__.meta37869;
});})(flag))
;

cljs.core.async.t_cljs$core$async37868.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37868.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37868.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37868.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37868.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37869","meta37869",1744997705,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37868";

cljs.core.async.t_cljs$core$async37868.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async37868");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37868 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37868(flag__$1,meta37869){
return (new cljs.core.async.t_cljs$core$async37868(flag__$1,meta37869));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37868(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37871 = (function (flag,cb,meta37872){
this.flag = flag;
this.cb = cb;
this.meta37872 = meta37872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37873,meta37872__$1){
var self__ = this;
var _37873__$1 = this;
return (new cljs.core.async.t_cljs$core$async37871(self__.flag,self__.cb,meta37872__$1));
});

cljs.core.async.t_cljs$core$async37871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37873){
var self__ = this;
var _37873__$1 = this;
return self__.meta37872;
});

cljs.core.async.t_cljs$core$async37871.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37871.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37872","meta37872",-1191888239,null)], null);
});

cljs.core.async.t_cljs$core$async37871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37871";

cljs.core.async.t_cljs$core$async37871.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async37871");
});

cljs.core.async.__GT_t_cljs$core$async37871 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37871(flag__$1,cb__$1,meta37872){
return (new cljs.core.async.t_cljs$core$async37871(flag__$1,cb__$1,meta37872));
});

}

return (new cljs.core.async.t_cljs$core$async37871(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37874_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37874_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37875_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37875_SHARP_,port], null));
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
var G__37876 = (i + (1));
i = G__37876;
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
var len__28364__auto___37882 = arguments.length;
var i__28365__auto___37883 = (0);
while(true){
if((i__28365__auto___37883 < len__28364__auto___37882)){
args__28371__auto__.push((arguments[i__28365__auto___37883]));

var G__37884 = (i__28365__auto___37883 + (1));
i__28365__auto___37883 = G__37884;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37879){
var map__37880 = p__37879;
var map__37880__$1 = ((((!((map__37880 == null)))?((((map__37880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37880):map__37880);
var opts = map__37880__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37877){
var G__37878 = cljs.core.first.call(null,seq37877);
var seq37877__$1 = cljs.core.next.call(null,seq37877);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37878,seq37877__$1);
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
var G__37886 = arguments.length;
switch (G__37886) {
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
var c__29745__auto___37932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___37932){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___37932){
return (function (state_37910){
var state_val_37911 = (state_37910[(1)]);
if((state_val_37911 === (7))){
var inst_37906 = (state_37910[(2)]);
var state_37910__$1 = state_37910;
var statearr_37912_37933 = state_37910__$1;
(statearr_37912_37933[(2)] = inst_37906);

(statearr_37912_37933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (1))){
var state_37910__$1 = state_37910;
var statearr_37913_37934 = state_37910__$1;
(statearr_37913_37934[(2)] = null);

(statearr_37913_37934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (4))){
var inst_37889 = (state_37910[(7)]);
var inst_37889__$1 = (state_37910[(2)]);
var inst_37890 = (inst_37889__$1 == null);
var state_37910__$1 = (function (){var statearr_37914 = state_37910;
(statearr_37914[(7)] = inst_37889__$1);

return statearr_37914;
})();
if(cljs.core.truth_(inst_37890)){
var statearr_37915_37935 = state_37910__$1;
(statearr_37915_37935[(1)] = (5));

} else {
var statearr_37916_37936 = state_37910__$1;
(statearr_37916_37936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (13))){
var state_37910__$1 = state_37910;
var statearr_37917_37937 = state_37910__$1;
(statearr_37917_37937[(2)] = null);

(statearr_37917_37937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (6))){
var inst_37889 = (state_37910[(7)]);
var state_37910__$1 = state_37910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37910__$1,(11),to,inst_37889);
} else {
if((state_val_37911 === (3))){
var inst_37908 = (state_37910[(2)]);
var state_37910__$1 = state_37910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37910__$1,inst_37908);
} else {
if((state_val_37911 === (12))){
var state_37910__$1 = state_37910;
var statearr_37918_37938 = state_37910__$1;
(statearr_37918_37938[(2)] = null);

(statearr_37918_37938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (2))){
var state_37910__$1 = state_37910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37910__$1,(4),from);
} else {
if((state_val_37911 === (11))){
var inst_37899 = (state_37910[(2)]);
var state_37910__$1 = state_37910;
if(cljs.core.truth_(inst_37899)){
var statearr_37919_37939 = state_37910__$1;
(statearr_37919_37939[(1)] = (12));

} else {
var statearr_37920_37940 = state_37910__$1;
(statearr_37920_37940[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (9))){
var state_37910__$1 = state_37910;
var statearr_37921_37941 = state_37910__$1;
(statearr_37921_37941[(2)] = null);

(statearr_37921_37941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (5))){
var state_37910__$1 = state_37910;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37922_37942 = state_37910__$1;
(statearr_37922_37942[(1)] = (8));

} else {
var statearr_37923_37943 = state_37910__$1;
(statearr_37923_37943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (14))){
var inst_37904 = (state_37910[(2)]);
var state_37910__$1 = state_37910;
var statearr_37924_37944 = state_37910__$1;
(statearr_37924_37944[(2)] = inst_37904);

(statearr_37924_37944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (10))){
var inst_37896 = (state_37910[(2)]);
var state_37910__$1 = state_37910;
var statearr_37925_37945 = state_37910__$1;
(statearr_37925_37945[(2)] = inst_37896);

(statearr_37925_37945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37911 === (8))){
var inst_37893 = cljs.core.async.close_BANG_.call(null,to);
var state_37910__$1 = state_37910;
var statearr_37926_37946 = state_37910__$1;
(statearr_37926_37946[(2)] = inst_37893);

(statearr_37926_37946[(1)] = (10));


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
});})(c__29745__auto___37932))
;
return ((function (switch__29657__auto__,c__29745__auto___37932){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_37927 = [null,null,null,null,null,null,null,null];
(statearr_37927[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_37927[(1)] = (1));

return statearr_37927;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_37910){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_37910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e37928){if((e37928 instanceof Object)){
var ex__29661__auto__ = e37928;
var statearr_37929_37947 = state_37910;
(statearr_37929_37947[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37948 = state_37910;
state_37910 = G__37948;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_37910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_37910);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___37932))
})();
var state__29747__auto__ = (function (){var statearr_37930 = f__29746__auto__.call(null);
(statearr_37930[(6)] = c__29745__auto___37932);

return statearr_37930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___37932))
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
return (function (p__37949){
var vec__37950 = p__37949;
var v = cljs.core.nth.call(null,vec__37950,(0),null);
var p = cljs.core.nth.call(null,vec__37950,(1),null);
var job = vec__37950;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29745__auto___38121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___38121,res,vec__37950,v,p,job,jobs,results){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___38121,res,vec__37950,v,p,job,jobs,results){
return (function (state_37957){
var state_val_37958 = (state_37957[(1)]);
if((state_val_37958 === (1))){
var state_37957__$1 = state_37957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37957__$1,(2),res,v);
} else {
if((state_val_37958 === (2))){
var inst_37954 = (state_37957[(2)]);
var inst_37955 = cljs.core.async.close_BANG_.call(null,res);
var state_37957__$1 = (function (){var statearr_37959 = state_37957;
(statearr_37959[(7)] = inst_37954);

return statearr_37959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37957__$1,inst_37955);
} else {
return null;
}
}
});})(c__29745__auto___38121,res,vec__37950,v,p,job,jobs,results))
;
return ((function (switch__29657__auto__,c__29745__auto___38121,res,vec__37950,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0 = (function (){
var statearr_37960 = [null,null,null,null,null,null,null,null];
(statearr_37960[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__);

(statearr_37960[(1)] = (1));

return statearr_37960;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1 = (function (state_37957){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_37957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e37961){if((e37961 instanceof Object)){
var ex__29661__auto__ = e37961;
var statearr_37962_38122 = state_37957;
(statearr_37962_38122[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38123 = state_37957;
state_37957 = G__38123;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = function(state_37957){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1.call(this,state_37957);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___38121,res,vec__37950,v,p,job,jobs,results))
})();
var state__29747__auto__ = (function (){var statearr_37963 = f__29746__auto__.call(null);
(statearr_37963[(6)] = c__29745__auto___38121);

return statearr_37963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___38121,res,vec__37950,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37964){
var vec__37965 = p__37964;
var v = cljs.core.nth.call(null,vec__37965,(0),null);
var p = cljs.core.nth.call(null,vec__37965,(1),null);
var job = vec__37965;
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
var n__28140__auto___38124 = n;
var __38125 = (0);
while(true){
if((__38125 < n__28140__auto___38124)){
var G__37968_38126 = type;
var G__37968_38127__$1 = (((G__37968_38126 instanceof cljs.core.Keyword))?G__37968_38126.fqn:null);
switch (G__37968_38127__$1) {
case "compute":
var c__29745__auto___38129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38125,c__29745__auto___38129,G__37968_38126,G__37968_38127__$1,n__28140__auto___38124,jobs,results,process,async){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (__38125,c__29745__auto___38129,G__37968_38126,G__37968_38127__$1,n__28140__auto___38124,jobs,results,process,async){
return (function (state_37981){
var state_val_37982 = (state_37981[(1)]);
if((state_val_37982 === (1))){
var state_37981__$1 = state_37981;
var statearr_37983_38130 = state_37981__$1;
(statearr_37983_38130[(2)] = null);

(statearr_37983_38130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37982 === (2))){
var state_37981__$1 = state_37981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37981__$1,(4),jobs);
} else {
if((state_val_37982 === (3))){
var inst_37979 = (state_37981[(2)]);
var state_37981__$1 = state_37981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37981__$1,inst_37979);
} else {
if((state_val_37982 === (4))){
var inst_37971 = (state_37981[(2)]);
var inst_37972 = process.call(null,inst_37971);
var state_37981__$1 = state_37981;
if(cljs.core.truth_(inst_37972)){
var statearr_37984_38131 = state_37981__$1;
(statearr_37984_38131[(1)] = (5));

} else {
var statearr_37985_38132 = state_37981__$1;
(statearr_37985_38132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37982 === (5))){
var state_37981__$1 = state_37981;
var statearr_37986_38133 = state_37981__$1;
(statearr_37986_38133[(2)] = null);

(statearr_37986_38133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37982 === (6))){
var state_37981__$1 = state_37981;
var statearr_37987_38134 = state_37981__$1;
(statearr_37987_38134[(2)] = null);

(statearr_37987_38134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37982 === (7))){
var inst_37977 = (state_37981[(2)]);
var state_37981__$1 = state_37981;
var statearr_37988_38135 = state_37981__$1;
(statearr_37988_38135[(2)] = inst_37977);

(statearr_37988_38135[(1)] = (3));


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
});})(__38125,c__29745__auto___38129,G__37968_38126,G__37968_38127__$1,n__28140__auto___38124,jobs,results,process,async))
;
return ((function (__38125,switch__29657__auto__,c__29745__auto___38129,G__37968_38126,G__37968_38127__$1,n__28140__auto___38124,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0 = (function (){
var statearr_37989 = [null,null,null,null,null,null,null];
(statearr_37989[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__);

(statearr_37989[(1)] = (1));

return statearr_37989;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1 = (function (state_37981){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_37981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e37990){if((e37990 instanceof Object)){
var ex__29661__auto__ = e37990;
var statearr_37991_38136 = state_37981;
(statearr_37991_38136[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38137 = state_37981;
state_37981 = G__38137;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = function(state_37981){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1.call(this,state_37981);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__;
})()
;})(__38125,switch__29657__auto__,c__29745__auto___38129,G__37968_38126,G__37968_38127__$1,n__28140__auto___38124,jobs,results,process,async))
})();
var state__29747__auto__ = (function (){var statearr_37992 = f__29746__auto__.call(null);
(statearr_37992[(6)] = c__29745__auto___38129);

return statearr_37992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(__38125,c__29745__auto___38129,G__37968_38126,G__37968_38127__$1,n__28140__auto___38124,jobs,results,process,async))
);


break;
case "async":
var c__29745__auto___38138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38125,c__29745__auto___38138,G__37968_38126,G__37968_38127__$1,n__28140__auto___38124,jobs,results,process,async){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (__38125,c__29745__auto___38138,G__37968_38126,G__37968_38127__$1,n__28140__auto___38124,jobs,results,process,async){
return (function (state_38005){
var state_val_38006 = (state_38005[(1)]);
if((state_val_38006 === (1))){
var state_38005__$1 = state_38005;
var statearr_38007_38139 = state_38005__$1;
(statearr_38007_38139[(2)] = null);

(statearr_38007_38139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38006 === (2))){
var state_38005__$1 = state_38005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38005__$1,(4),jobs);
} else {
if((state_val_38006 === (3))){
var inst_38003 = (state_38005[(2)]);
var state_38005__$1 = state_38005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38005__$1,inst_38003);
} else {
if((state_val_38006 === (4))){
var inst_37995 = (state_38005[(2)]);
var inst_37996 = async.call(null,inst_37995);
var state_38005__$1 = state_38005;
if(cljs.core.truth_(inst_37996)){
var statearr_38008_38140 = state_38005__$1;
(statearr_38008_38140[(1)] = (5));

} else {
var statearr_38009_38141 = state_38005__$1;
(statearr_38009_38141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38006 === (5))){
var state_38005__$1 = state_38005;
var statearr_38010_38142 = state_38005__$1;
(statearr_38010_38142[(2)] = null);

(statearr_38010_38142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38006 === (6))){
var state_38005__$1 = state_38005;
var statearr_38011_38143 = state_38005__$1;
(statearr_38011_38143[(2)] = null);

(statearr_38011_38143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38006 === (7))){
var inst_38001 = (state_38005[(2)]);
var state_38005__$1 = state_38005;
var statearr_38012_38144 = state_38005__$1;
(statearr_38012_38144[(2)] = inst_38001);

(statearr_38012_38144[(1)] = (3));


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
});})(__38125,c__29745__auto___38138,G__37968_38126,G__37968_38127__$1,n__28140__auto___38124,jobs,results,process,async))
;
return ((function (__38125,switch__29657__auto__,c__29745__auto___38138,G__37968_38126,G__37968_38127__$1,n__28140__auto___38124,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0 = (function (){
var statearr_38013 = [null,null,null,null,null,null,null];
(statearr_38013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__);

(statearr_38013[(1)] = (1));

return statearr_38013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1 = (function (state_38005){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e38014){if((e38014 instanceof Object)){
var ex__29661__auto__ = e38014;
var statearr_38015_38145 = state_38005;
(statearr_38015_38145[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38146 = state_38005;
state_38005 = G__38146;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = function(state_38005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1.call(this,state_38005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__;
})()
;})(__38125,switch__29657__auto__,c__29745__auto___38138,G__37968_38126,G__37968_38127__$1,n__28140__auto___38124,jobs,results,process,async))
})();
var state__29747__auto__ = (function (){var statearr_38016 = f__29746__auto__.call(null);
(statearr_38016[(6)] = c__29745__auto___38138);

return statearr_38016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(__38125,c__29745__auto___38138,G__37968_38126,G__37968_38127__$1,n__28140__auto___38124,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37968_38127__$1)].join('')));

}

var G__38147 = (__38125 + (1));
__38125 = G__38147;
continue;
} else {
}
break;
}

var c__29745__auto___38148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___38148,jobs,results,process,async){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___38148,jobs,results,process,async){
return (function (state_38038){
var state_val_38039 = (state_38038[(1)]);
if((state_val_38039 === (1))){
var state_38038__$1 = state_38038;
var statearr_38040_38149 = state_38038__$1;
(statearr_38040_38149[(2)] = null);

(statearr_38040_38149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (2))){
var state_38038__$1 = state_38038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38038__$1,(4),from);
} else {
if((state_val_38039 === (3))){
var inst_38036 = (state_38038[(2)]);
var state_38038__$1 = state_38038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38038__$1,inst_38036);
} else {
if((state_val_38039 === (4))){
var inst_38019 = (state_38038[(7)]);
var inst_38019__$1 = (state_38038[(2)]);
var inst_38020 = (inst_38019__$1 == null);
var state_38038__$1 = (function (){var statearr_38041 = state_38038;
(statearr_38041[(7)] = inst_38019__$1);

return statearr_38041;
})();
if(cljs.core.truth_(inst_38020)){
var statearr_38042_38150 = state_38038__$1;
(statearr_38042_38150[(1)] = (5));

} else {
var statearr_38043_38151 = state_38038__$1;
(statearr_38043_38151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (5))){
var inst_38022 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38038__$1 = state_38038;
var statearr_38044_38152 = state_38038__$1;
(statearr_38044_38152[(2)] = inst_38022);

(statearr_38044_38152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (6))){
var inst_38019 = (state_38038[(7)]);
var inst_38024 = (state_38038[(8)]);
var inst_38024__$1 = cljs.core.async.chan.call(null,(1));
var inst_38025 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38026 = [inst_38019,inst_38024__$1];
var inst_38027 = (new cljs.core.PersistentVector(null,2,(5),inst_38025,inst_38026,null));
var state_38038__$1 = (function (){var statearr_38045 = state_38038;
(statearr_38045[(8)] = inst_38024__$1);

return statearr_38045;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38038__$1,(8),jobs,inst_38027);
} else {
if((state_val_38039 === (7))){
var inst_38034 = (state_38038[(2)]);
var state_38038__$1 = state_38038;
var statearr_38046_38153 = state_38038__$1;
(statearr_38046_38153[(2)] = inst_38034);

(statearr_38046_38153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (8))){
var inst_38024 = (state_38038[(8)]);
var inst_38029 = (state_38038[(2)]);
var state_38038__$1 = (function (){var statearr_38047 = state_38038;
(statearr_38047[(9)] = inst_38029);

return statearr_38047;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38038__$1,(9),results,inst_38024);
} else {
if((state_val_38039 === (9))){
var inst_38031 = (state_38038[(2)]);
var state_38038__$1 = (function (){var statearr_38048 = state_38038;
(statearr_38048[(10)] = inst_38031);

return statearr_38048;
})();
var statearr_38049_38154 = state_38038__$1;
(statearr_38049_38154[(2)] = null);

(statearr_38049_38154[(1)] = (2));


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
});})(c__29745__auto___38148,jobs,results,process,async))
;
return ((function (switch__29657__auto__,c__29745__auto___38148,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0 = (function (){
var statearr_38050 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38050[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__);

(statearr_38050[(1)] = (1));

return statearr_38050;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1 = (function (state_38038){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e38051){if((e38051 instanceof Object)){
var ex__29661__auto__ = e38051;
var statearr_38052_38155 = state_38038;
(statearr_38052_38155[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38156 = state_38038;
state_38038 = G__38156;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = function(state_38038){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1.call(this,state_38038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___38148,jobs,results,process,async))
})();
var state__29747__auto__ = (function (){var statearr_38053 = f__29746__auto__.call(null);
(statearr_38053[(6)] = c__29745__auto___38148);

return statearr_38053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___38148,jobs,results,process,async))
);


var c__29745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto__,jobs,results,process,async){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto__,jobs,results,process,async){
return (function (state_38091){
var state_val_38092 = (state_38091[(1)]);
if((state_val_38092 === (7))){
var inst_38087 = (state_38091[(2)]);
var state_38091__$1 = state_38091;
var statearr_38093_38157 = state_38091__$1;
(statearr_38093_38157[(2)] = inst_38087);

(statearr_38093_38157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (20))){
var state_38091__$1 = state_38091;
var statearr_38094_38158 = state_38091__$1;
(statearr_38094_38158[(2)] = null);

(statearr_38094_38158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (1))){
var state_38091__$1 = state_38091;
var statearr_38095_38159 = state_38091__$1;
(statearr_38095_38159[(2)] = null);

(statearr_38095_38159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (4))){
var inst_38056 = (state_38091[(7)]);
var inst_38056__$1 = (state_38091[(2)]);
var inst_38057 = (inst_38056__$1 == null);
var state_38091__$1 = (function (){var statearr_38096 = state_38091;
(statearr_38096[(7)] = inst_38056__$1);

return statearr_38096;
})();
if(cljs.core.truth_(inst_38057)){
var statearr_38097_38160 = state_38091__$1;
(statearr_38097_38160[(1)] = (5));

} else {
var statearr_38098_38161 = state_38091__$1;
(statearr_38098_38161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (15))){
var inst_38069 = (state_38091[(8)]);
var state_38091__$1 = state_38091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38091__$1,(18),to,inst_38069);
} else {
if((state_val_38092 === (21))){
var inst_38082 = (state_38091[(2)]);
var state_38091__$1 = state_38091;
var statearr_38099_38162 = state_38091__$1;
(statearr_38099_38162[(2)] = inst_38082);

(statearr_38099_38162[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (13))){
var inst_38084 = (state_38091[(2)]);
var state_38091__$1 = (function (){var statearr_38100 = state_38091;
(statearr_38100[(9)] = inst_38084);

return statearr_38100;
})();
var statearr_38101_38163 = state_38091__$1;
(statearr_38101_38163[(2)] = null);

(statearr_38101_38163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (6))){
var inst_38056 = (state_38091[(7)]);
var state_38091__$1 = state_38091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38091__$1,(11),inst_38056);
} else {
if((state_val_38092 === (17))){
var inst_38077 = (state_38091[(2)]);
var state_38091__$1 = state_38091;
if(cljs.core.truth_(inst_38077)){
var statearr_38102_38164 = state_38091__$1;
(statearr_38102_38164[(1)] = (19));

} else {
var statearr_38103_38165 = state_38091__$1;
(statearr_38103_38165[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (3))){
var inst_38089 = (state_38091[(2)]);
var state_38091__$1 = state_38091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38091__$1,inst_38089);
} else {
if((state_val_38092 === (12))){
var inst_38066 = (state_38091[(10)]);
var state_38091__$1 = state_38091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38091__$1,(14),inst_38066);
} else {
if((state_val_38092 === (2))){
var state_38091__$1 = state_38091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38091__$1,(4),results);
} else {
if((state_val_38092 === (19))){
var state_38091__$1 = state_38091;
var statearr_38104_38166 = state_38091__$1;
(statearr_38104_38166[(2)] = null);

(statearr_38104_38166[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (11))){
var inst_38066 = (state_38091[(2)]);
var state_38091__$1 = (function (){var statearr_38105 = state_38091;
(statearr_38105[(10)] = inst_38066);

return statearr_38105;
})();
var statearr_38106_38167 = state_38091__$1;
(statearr_38106_38167[(2)] = null);

(statearr_38106_38167[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (9))){
var state_38091__$1 = state_38091;
var statearr_38107_38168 = state_38091__$1;
(statearr_38107_38168[(2)] = null);

(statearr_38107_38168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (5))){
var state_38091__$1 = state_38091;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38108_38169 = state_38091__$1;
(statearr_38108_38169[(1)] = (8));

} else {
var statearr_38109_38170 = state_38091__$1;
(statearr_38109_38170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (14))){
var inst_38071 = (state_38091[(11)]);
var inst_38069 = (state_38091[(8)]);
var inst_38069__$1 = (state_38091[(2)]);
var inst_38070 = (inst_38069__$1 == null);
var inst_38071__$1 = cljs.core.not.call(null,inst_38070);
var state_38091__$1 = (function (){var statearr_38110 = state_38091;
(statearr_38110[(11)] = inst_38071__$1);

(statearr_38110[(8)] = inst_38069__$1);

return statearr_38110;
})();
if(inst_38071__$1){
var statearr_38111_38171 = state_38091__$1;
(statearr_38111_38171[(1)] = (15));

} else {
var statearr_38112_38172 = state_38091__$1;
(statearr_38112_38172[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (16))){
var inst_38071 = (state_38091[(11)]);
var state_38091__$1 = state_38091;
var statearr_38113_38173 = state_38091__$1;
(statearr_38113_38173[(2)] = inst_38071);

(statearr_38113_38173[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (10))){
var inst_38063 = (state_38091[(2)]);
var state_38091__$1 = state_38091;
var statearr_38114_38174 = state_38091__$1;
(statearr_38114_38174[(2)] = inst_38063);

(statearr_38114_38174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (18))){
var inst_38074 = (state_38091[(2)]);
var state_38091__$1 = state_38091;
var statearr_38115_38175 = state_38091__$1;
(statearr_38115_38175[(2)] = inst_38074);

(statearr_38115_38175[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38092 === (8))){
var inst_38060 = cljs.core.async.close_BANG_.call(null,to);
var state_38091__$1 = state_38091;
var statearr_38116_38176 = state_38091__$1;
(statearr_38116_38176[(2)] = inst_38060);

(statearr_38116_38176[(1)] = (10));


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
});})(c__29745__auto__,jobs,results,process,async))
;
return ((function (switch__29657__auto__,c__29745__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0 = (function (){
var statearr_38117 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38117[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__);

(statearr_38117[(1)] = (1));

return statearr_38117;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1 = (function (state_38091){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e38118){if((e38118 instanceof Object)){
var ex__29661__auto__ = e38118;
var statearr_38119_38177 = state_38091;
(statearr_38119_38177[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38178 = state_38091;
state_38091 = G__38178;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = function(state_38091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1.call(this,state_38091);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto__,jobs,results,process,async))
})();
var state__29747__auto__ = (function (){var statearr_38120 = f__29746__auto__.call(null);
(statearr_38120[(6)] = c__29745__auto__);

return statearr_38120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto__,jobs,results,process,async))
);

return c__29745__auto__;
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
var G__38180 = arguments.length;
switch (G__38180) {
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
var G__38183 = arguments.length;
switch (G__38183) {
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
var G__38186 = arguments.length;
switch (G__38186) {
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
var c__29745__auto___38235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___38235,tc,fc){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___38235,tc,fc){
return (function (state_38212){
var state_val_38213 = (state_38212[(1)]);
if((state_val_38213 === (7))){
var inst_38208 = (state_38212[(2)]);
var state_38212__$1 = state_38212;
var statearr_38214_38236 = state_38212__$1;
(statearr_38214_38236[(2)] = inst_38208);

(statearr_38214_38236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38213 === (1))){
var state_38212__$1 = state_38212;
var statearr_38215_38237 = state_38212__$1;
(statearr_38215_38237[(2)] = null);

(statearr_38215_38237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38213 === (4))){
var inst_38189 = (state_38212[(7)]);
var inst_38189__$1 = (state_38212[(2)]);
var inst_38190 = (inst_38189__$1 == null);
var state_38212__$1 = (function (){var statearr_38216 = state_38212;
(statearr_38216[(7)] = inst_38189__$1);

return statearr_38216;
})();
if(cljs.core.truth_(inst_38190)){
var statearr_38217_38238 = state_38212__$1;
(statearr_38217_38238[(1)] = (5));

} else {
var statearr_38218_38239 = state_38212__$1;
(statearr_38218_38239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38213 === (13))){
var state_38212__$1 = state_38212;
var statearr_38219_38240 = state_38212__$1;
(statearr_38219_38240[(2)] = null);

(statearr_38219_38240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38213 === (6))){
var inst_38189 = (state_38212[(7)]);
var inst_38195 = p.call(null,inst_38189);
var state_38212__$1 = state_38212;
if(cljs.core.truth_(inst_38195)){
var statearr_38220_38241 = state_38212__$1;
(statearr_38220_38241[(1)] = (9));

} else {
var statearr_38221_38242 = state_38212__$1;
(statearr_38221_38242[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38213 === (3))){
var inst_38210 = (state_38212[(2)]);
var state_38212__$1 = state_38212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38212__$1,inst_38210);
} else {
if((state_val_38213 === (12))){
var state_38212__$1 = state_38212;
var statearr_38222_38243 = state_38212__$1;
(statearr_38222_38243[(2)] = null);

(statearr_38222_38243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38213 === (2))){
var state_38212__$1 = state_38212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38212__$1,(4),ch);
} else {
if((state_val_38213 === (11))){
var inst_38189 = (state_38212[(7)]);
var inst_38199 = (state_38212[(2)]);
var state_38212__$1 = state_38212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38212__$1,(8),inst_38199,inst_38189);
} else {
if((state_val_38213 === (9))){
var state_38212__$1 = state_38212;
var statearr_38223_38244 = state_38212__$1;
(statearr_38223_38244[(2)] = tc);

(statearr_38223_38244[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38213 === (5))){
var inst_38192 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38193 = cljs.core.async.close_BANG_.call(null,fc);
var state_38212__$1 = (function (){var statearr_38224 = state_38212;
(statearr_38224[(8)] = inst_38192);

return statearr_38224;
})();
var statearr_38225_38245 = state_38212__$1;
(statearr_38225_38245[(2)] = inst_38193);

(statearr_38225_38245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38213 === (14))){
var inst_38206 = (state_38212[(2)]);
var state_38212__$1 = state_38212;
var statearr_38226_38246 = state_38212__$1;
(statearr_38226_38246[(2)] = inst_38206);

(statearr_38226_38246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38213 === (10))){
var state_38212__$1 = state_38212;
var statearr_38227_38247 = state_38212__$1;
(statearr_38227_38247[(2)] = fc);

(statearr_38227_38247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38213 === (8))){
var inst_38201 = (state_38212[(2)]);
var state_38212__$1 = state_38212;
if(cljs.core.truth_(inst_38201)){
var statearr_38228_38248 = state_38212__$1;
(statearr_38228_38248[(1)] = (12));

} else {
var statearr_38229_38249 = state_38212__$1;
(statearr_38229_38249[(1)] = (13));

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
});})(c__29745__auto___38235,tc,fc))
;
return ((function (switch__29657__auto__,c__29745__auto___38235,tc,fc){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_38230 = [null,null,null,null,null,null,null,null,null];
(statearr_38230[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_38230[(1)] = (1));

return statearr_38230;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_38212){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e38231){if((e38231 instanceof Object)){
var ex__29661__auto__ = e38231;
var statearr_38232_38250 = state_38212;
(statearr_38232_38250[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38251 = state_38212;
state_38212 = G__38251;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_38212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_38212);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___38235,tc,fc))
})();
var state__29747__auto__ = (function (){var statearr_38233 = f__29746__auto__.call(null);
(statearr_38233[(6)] = c__29745__auto___38235);

return statearr_38233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___38235,tc,fc))
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
var c__29745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto__){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto__){
return (function (state_38272){
var state_val_38273 = (state_38272[(1)]);
if((state_val_38273 === (7))){
var inst_38268 = (state_38272[(2)]);
var state_38272__$1 = state_38272;
var statearr_38274_38292 = state_38272__$1;
(statearr_38274_38292[(2)] = inst_38268);

(statearr_38274_38292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (1))){
var inst_38252 = init;
var state_38272__$1 = (function (){var statearr_38275 = state_38272;
(statearr_38275[(7)] = inst_38252);

return statearr_38275;
})();
var statearr_38276_38293 = state_38272__$1;
(statearr_38276_38293[(2)] = null);

(statearr_38276_38293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (4))){
var inst_38255 = (state_38272[(8)]);
var inst_38255__$1 = (state_38272[(2)]);
var inst_38256 = (inst_38255__$1 == null);
var state_38272__$1 = (function (){var statearr_38277 = state_38272;
(statearr_38277[(8)] = inst_38255__$1);

return statearr_38277;
})();
if(cljs.core.truth_(inst_38256)){
var statearr_38278_38294 = state_38272__$1;
(statearr_38278_38294[(1)] = (5));

} else {
var statearr_38279_38295 = state_38272__$1;
(statearr_38279_38295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (6))){
var inst_38255 = (state_38272[(8)]);
var inst_38259 = (state_38272[(9)]);
var inst_38252 = (state_38272[(7)]);
var inst_38259__$1 = f.call(null,inst_38252,inst_38255);
var inst_38260 = cljs.core.reduced_QMARK_.call(null,inst_38259__$1);
var state_38272__$1 = (function (){var statearr_38280 = state_38272;
(statearr_38280[(9)] = inst_38259__$1);

return statearr_38280;
})();
if(inst_38260){
var statearr_38281_38296 = state_38272__$1;
(statearr_38281_38296[(1)] = (8));

} else {
var statearr_38282_38297 = state_38272__$1;
(statearr_38282_38297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (3))){
var inst_38270 = (state_38272[(2)]);
var state_38272__$1 = state_38272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38272__$1,inst_38270);
} else {
if((state_val_38273 === (2))){
var state_38272__$1 = state_38272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38272__$1,(4),ch);
} else {
if((state_val_38273 === (9))){
var inst_38259 = (state_38272[(9)]);
var inst_38252 = inst_38259;
var state_38272__$1 = (function (){var statearr_38283 = state_38272;
(statearr_38283[(7)] = inst_38252);

return statearr_38283;
})();
var statearr_38284_38298 = state_38272__$1;
(statearr_38284_38298[(2)] = null);

(statearr_38284_38298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (5))){
var inst_38252 = (state_38272[(7)]);
var state_38272__$1 = state_38272;
var statearr_38285_38299 = state_38272__$1;
(statearr_38285_38299[(2)] = inst_38252);

(statearr_38285_38299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (10))){
var inst_38266 = (state_38272[(2)]);
var state_38272__$1 = state_38272;
var statearr_38286_38300 = state_38272__$1;
(statearr_38286_38300[(2)] = inst_38266);

(statearr_38286_38300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38273 === (8))){
var inst_38259 = (state_38272[(9)]);
var inst_38262 = cljs.core.deref.call(null,inst_38259);
var state_38272__$1 = state_38272;
var statearr_38287_38301 = state_38272__$1;
(statearr_38287_38301[(2)] = inst_38262);

(statearr_38287_38301[(1)] = (10));


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
});})(c__29745__auto__))
;
return ((function (switch__29657__auto__,c__29745__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29658__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29658__auto____0 = (function (){
var statearr_38288 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38288[(0)] = cljs$core$async$reduce_$_state_machine__29658__auto__);

(statearr_38288[(1)] = (1));

return statearr_38288;
});
var cljs$core$async$reduce_$_state_machine__29658__auto____1 = (function (state_38272){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e38289){if((e38289 instanceof Object)){
var ex__29661__auto__ = e38289;
var statearr_38290_38302 = state_38272;
(statearr_38290_38302[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38303 = state_38272;
state_38272 = G__38303;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29658__auto__ = function(state_38272){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29658__auto____1.call(this,state_38272);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29658__auto____0;
cljs$core$async$reduce_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29658__auto____1;
return cljs$core$async$reduce_$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto__))
})();
var state__29747__auto__ = (function (){var statearr_38291 = f__29746__auto__.call(null);
(statearr_38291[(6)] = c__29745__auto__);

return statearr_38291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto__))
);

return c__29745__auto__;
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
var G__38305 = arguments.length;
switch (G__38305) {
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
var c__29745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto__){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto__){
return (function (state_38330){
var state_val_38331 = (state_38330[(1)]);
if((state_val_38331 === (7))){
var inst_38312 = (state_38330[(2)]);
var state_38330__$1 = state_38330;
var statearr_38332_38353 = state_38330__$1;
(statearr_38332_38353[(2)] = inst_38312);

(statearr_38332_38353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (1))){
var inst_38306 = cljs.core.seq.call(null,coll);
var inst_38307 = inst_38306;
var state_38330__$1 = (function (){var statearr_38333 = state_38330;
(statearr_38333[(7)] = inst_38307);

return statearr_38333;
})();
var statearr_38334_38354 = state_38330__$1;
(statearr_38334_38354[(2)] = null);

(statearr_38334_38354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (4))){
var inst_38307 = (state_38330[(7)]);
var inst_38310 = cljs.core.first.call(null,inst_38307);
var state_38330__$1 = state_38330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38330__$1,(7),ch,inst_38310);
} else {
if((state_val_38331 === (13))){
var inst_38324 = (state_38330[(2)]);
var state_38330__$1 = state_38330;
var statearr_38335_38355 = state_38330__$1;
(statearr_38335_38355[(2)] = inst_38324);

(statearr_38335_38355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (6))){
var inst_38315 = (state_38330[(2)]);
var state_38330__$1 = state_38330;
if(cljs.core.truth_(inst_38315)){
var statearr_38336_38356 = state_38330__$1;
(statearr_38336_38356[(1)] = (8));

} else {
var statearr_38337_38357 = state_38330__$1;
(statearr_38337_38357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (3))){
var inst_38328 = (state_38330[(2)]);
var state_38330__$1 = state_38330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38330__$1,inst_38328);
} else {
if((state_val_38331 === (12))){
var state_38330__$1 = state_38330;
var statearr_38338_38358 = state_38330__$1;
(statearr_38338_38358[(2)] = null);

(statearr_38338_38358[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (2))){
var inst_38307 = (state_38330[(7)]);
var state_38330__$1 = state_38330;
if(cljs.core.truth_(inst_38307)){
var statearr_38339_38359 = state_38330__$1;
(statearr_38339_38359[(1)] = (4));

} else {
var statearr_38340_38360 = state_38330__$1;
(statearr_38340_38360[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (11))){
var inst_38321 = cljs.core.async.close_BANG_.call(null,ch);
var state_38330__$1 = state_38330;
var statearr_38341_38361 = state_38330__$1;
(statearr_38341_38361[(2)] = inst_38321);

(statearr_38341_38361[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (9))){
var state_38330__$1 = state_38330;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38342_38362 = state_38330__$1;
(statearr_38342_38362[(1)] = (11));

} else {
var statearr_38343_38363 = state_38330__$1;
(statearr_38343_38363[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (5))){
var inst_38307 = (state_38330[(7)]);
var state_38330__$1 = state_38330;
var statearr_38344_38364 = state_38330__$1;
(statearr_38344_38364[(2)] = inst_38307);

(statearr_38344_38364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (10))){
var inst_38326 = (state_38330[(2)]);
var state_38330__$1 = state_38330;
var statearr_38345_38365 = state_38330__$1;
(statearr_38345_38365[(2)] = inst_38326);

(statearr_38345_38365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38331 === (8))){
var inst_38307 = (state_38330[(7)]);
var inst_38317 = cljs.core.next.call(null,inst_38307);
var inst_38307__$1 = inst_38317;
var state_38330__$1 = (function (){var statearr_38346 = state_38330;
(statearr_38346[(7)] = inst_38307__$1);

return statearr_38346;
})();
var statearr_38347_38366 = state_38330__$1;
(statearr_38347_38366[(2)] = null);

(statearr_38347_38366[(1)] = (2));


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
});})(c__29745__auto__))
;
return ((function (switch__29657__auto__,c__29745__auto__){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_38348 = [null,null,null,null,null,null,null,null];
(statearr_38348[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_38348[(1)] = (1));

return statearr_38348;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_38330){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e38349){if((e38349 instanceof Object)){
var ex__29661__auto__ = e38349;
var statearr_38350_38367 = state_38330;
(statearr_38350_38367[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38368 = state_38330;
state_38330 = G__38368;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_38330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_38330);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto__))
})();
var state__29747__auto__ = (function (){var statearr_38351 = f__29746__auto__.call(null);
(statearr_38351[(6)] = c__29745__auto__);

return statearr_38351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto__))
);

return c__29745__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async38369 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38369 = (function (ch,cs,meta38370){
this.ch = ch;
this.cs = cs;
this.meta38370 = meta38370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38371,meta38370__$1){
var self__ = this;
var _38371__$1 = this;
return (new cljs.core.async.t_cljs$core$async38369(self__.ch,self__.cs,meta38370__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38369.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38371){
var self__ = this;
var _38371__$1 = this;
return self__.meta38370;
});})(cs))
;

cljs.core.async.t_cljs$core$async38369.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38369.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38369.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38369.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38369.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38369.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38369.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38370","meta38370",954045156,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38369.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38369";

cljs.core.async.t_cljs$core$async38369.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async38369");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38369 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38369(ch__$1,cs__$1,meta38370){
return (new cljs.core.async.t_cljs$core$async38369(ch__$1,cs__$1,meta38370));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38369(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29745__auto___38591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___38591,cs,m,dchan,dctr,done){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___38591,cs,m,dchan,dctr,done){
return (function (state_38506){
var state_val_38507 = (state_38506[(1)]);
if((state_val_38507 === (7))){
var inst_38502 = (state_38506[(2)]);
var state_38506__$1 = state_38506;
var statearr_38508_38592 = state_38506__$1;
(statearr_38508_38592[(2)] = inst_38502);

(statearr_38508_38592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (20))){
var inst_38405 = (state_38506[(7)]);
var inst_38417 = cljs.core.first.call(null,inst_38405);
var inst_38418 = cljs.core.nth.call(null,inst_38417,(0),null);
var inst_38419 = cljs.core.nth.call(null,inst_38417,(1),null);
var state_38506__$1 = (function (){var statearr_38509 = state_38506;
(statearr_38509[(8)] = inst_38418);

return statearr_38509;
})();
if(cljs.core.truth_(inst_38419)){
var statearr_38510_38593 = state_38506__$1;
(statearr_38510_38593[(1)] = (22));

} else {
var statearr_38511_38594 = state_38506__$1;
(statearr_38511_38594[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (27))){
var inst_38454 = (state_38506[(9)]);
var inst_38374 = (state_38506[(10)]);
var inst_38447 = (state_38506[(11)]);
var inst_38449 = (state_38506[(12)]);
var inst_38454__$1 = cljs.core._nth.call(null,inst_38447,inst_38449);
var inst_38455 = cljs.core.async.put_BANG_.call(null,inst_38454__$1,inst_38374,done);
var state_38506__$1 = (function (){var statearr_38512 = state_38506;
(statearr_38512[(9)] = inst_38454__$1);

return statearr_38512;
})();
if(cljs.core.truth_(inst_38455)){
var statearr_38513_38595 = state_38506__$1;
(statearr_38513_38595[(1)] = (30));

} else {
var statearr_38514_38596 = state_38506__$1;
(statearr_38514_38596[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (1))){
var state_38506__$1 = state_38506;
var statearr_38515_38597 = state_38506__$1;
(statearr_38515_38597[(2)] = null);

(statearr_38515_38597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (24))){
var inst_38405 = (state_38506[(7)]);
var inst_38424 = (state_38506[(2)]);
var inst_38425 = cljs.core.next.call(null,inst_38405);
var inst_38383 = inst_38425;
var inst_38384 = null;
var inst_38385 = (0);
var inst_38386 = (0);
var state_38506__$1 = (function (){var statearr_38516 = state_38506;
(statearr_38516[(13)] = inst_38383);

(statearr_38516[(14)] = inst_38386);

(statearr_38516[(15)] = inst_38385);

(statearr_38516[(16)] = inst_38424);

(statearr_38516[(17)] = inst_38384);

return statearr_38516;
})();
var statearr_38517_38598 = state_38506__$1;
(statearr_38517_38598[(2)] = null);

(statearr_38517_38598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (39))){
var state_38506__$1 = state_38506;
var statearr_38521_38599 = state_38506__$1;
(statearr_38521_38599[(2)] = null);

(statearr_38521_38599[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (4))){
var inst_38374 = (state_38506[(10)]);
var inst_38374__$1 = (state_38506[(2)]);
var inst_38375 = (inst_38374__$1 == null);
var state_38506__$1 = (function (){var statearr_38522 = state_38506;
(statearr_38522[(10)] = inst_38374__$1);

return statearr_38522;
})();
if(cljs.core.truth_(inst_38375)){
var statearr_38523_38600 = state_38506__$1;
(statearr_38523_38600[(1)] = (5));

} else {
var statearr_38524_38601 = state_38506__$1;
(statearr_38524_38601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (15))){
var inst_38383 = (state_38506[(13)]);
var inst_38386 = (state_38506[(14)]);
var inst_38385 = (state_38506[(15)]);
var inst_38384 = (state_38506[(17)]);
var inst_38401 = (state_38506[(2)]);
var inst_38402 = (inst_38386 + (1));
var tmp38518 = inst_38383;
var tmp38519 = inst_38385;
var tmp38520 = inst_38384;
var inst_38383__$1 = tmp38518;
var inst_38384__$1 = tmp38520;
var inst_38385__$1 = tmp38519;
var inst_38386__$1 = inst_38402;
var state_38506__$1 = (function (){var statearr_38525 = state_38506;
(statearr_38525[(13)] = inst_38383__$1);

(statearr_38525[(14)] = inst_38386__$1);

(statearr_38525[(15)] = inst_38385__$1);

(statearr_38525[(18)] = inst_38401);

(statearr_38525[(17)] = inst_38384__$1);

return statearr_38525;
})();
var statearr_38526_38602 = state_38506__$1;
(statearr_38526_38602[(2)] = null);

(statearr_38526_38602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (21))){
var inst_38428 = (state_38506[(2)]);
var state_38506__$1 = state_38506;
var statearr_38530_38603 = state_38506__$1;
(statearr_38530_38603[(2)] = inst_38428);

(statearr_38530_38603[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (31))){
var inst_38454 = (state_38506[(9)]);
var inst_38458 = done.call(null,null);
var inst_38459 = cljs.core.async.untap_STAR_.call(null,m,inst_38454);
var state_38506__$1 = (function (){var statearr_38531 = state_38506;
(statearr_38531[(19)] = inst_38458);

return statearr_38531;
})();
var statearr_38532_38604 = state_38506__$1;
(statearr_38532_38604[(2)] = inst_38459);

(statearr_38532_38604[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (32))){
var inst_38446 = (state_38506[(20)]);
var inst_38448 = (state_38506[(21)]);
var inst_38447 = (state_38506[(11)]);
var inst_38449 = (state_38506[(12)]);
var inst_38461 = (state_38506[(2)]);
var inst_38462 = (inst_38449 + (1));
var tmp38527 = inst_38446;
var tmp38528 = inst_38448;
var tmp38529 = inst_38447;
var inst_38446__$1 = tmp38527;
var inst_38447__$1 = tmp38529;
var inst_38448__$1 = tmp38528;
var inst_38449__$1 = inst_38462;
var state_38506__$1 = (function (){var statearr_38533 = state_38506;
(statearr_38533[(20)] = inst_38446__$1);

(statearr_38533[(22)] = inst_38461);

(statearr_38533[(21)] = inst_38448__$1);

(statearr_38533[(11)] = inst_38447__$1);

(statearr_38533[(12)] = inst_38449__$1);

return statearr_38533;
})();
var statearr_38534_38605 = state_38506__$1;
(statearr_38534_38605[(2)] = null);

(statearr_38534_38605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (40))){
var inst_38474 = (state_38506[(23)]);
var inst_38478 = done.call(null,null);
var inst_38479 = cljs.core.async.untap_STAR_.call(null,m,inst_38474);
var state_38506__$1 = (function (){var statearr_38535 = state_38506;
(statearr_38535[(24)] = inst_38478);

return statearr_38535;
})();
var statearr_38536_38606 = state_38506__$1;
(statearr_38536_38606[(2)] = inst_38479);

(statearr_38536_38606[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (33))){
var inst_38465 = (state_38506[(25)]);
var inst_38467 = cljs.core.chunked_seq_QMARK_.call(null,inst_38465);
var state_38506__$1 = state_38506;
if(inst_38467){
var statearr_38537_38607 = state_38506__$1;
(statearr_38537_38607[(1)] = (36));

} else {
var statearr_38538_38608 = state_38506__$1;
(statearr_38538_38608[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (13))){
var inst_38395 = (state_38506[(26)]);
var inst_38398 = cljs.core.async.close_BANG_.call(null,inst_38395);
var state_38506__$1 = state_38506;
var statearr_38539_38609 = state_38506__$1;
(statearr_38539_38609[(2)] = inst_38398);

(statearr_38539_38609[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (22))){
var inst_38418 = (state_38506[(8)]);
var inst_38421 = cljs.core.async.close_BANG_.call(null,inst_38418);
var state_38506__$1 = state_38506;
var statearr_38540_38610 = state_38506__$1;
(statearr_38540_38610[(2)] = inst_38421);

(statearr_38540_38610[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (36))){
var inst_38465 = (state_38506[(25)]);
var inst_38469 = cljs.core.chunk_first.call(null,inst_38465);
var inst_38470 = cljs.core.chunk_rest.call(null,inst_38465);
var inst_38471 = cljs.core.count.call(null,inst_38469);
var inst_38446 = inst_38470;
var inst_38447 = inst_38469;
var inst_38448 = inst_38471;
var inst_38449 = (0);
var state_38506__$1 = (function (){var statearr_38541 = state_38506;
(statearr_38541[(20)] = inst_38446);

(statearr_38541[(21)] = inst_38448);

(statearr_38541[(11)] = inst_38447);

(statearr_38541[(12)] = inst_38449);

return statearr_38541;
})();
var statearr_38542_38611 = state_38506__$1;
(statearr_38542_38611[(2)] = null);

(statearr_38542_38611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (41))){
var inst_38465 = (state_38506[(25)]);
var inst_38481 = (state_38506[(2)]);
var inst_38482 = cljs.core.next.call(null,inst_38465);
var inst_38446 = inst_38482;
var inst_38447 = null;
var inst_38448 = (0);
var inst_38449 = (0);
var state_38506__$1 = (function (){var statearr_38543 = state_38506;
(statearr_38543[(20)] = inst_38446);

(statearr_38543[(27)] = inst_38481);

(statearr_38543[(21)] = inst_38448);

(statearr_38543[(11)] = inst_38447);

(statearr_38543[(12)] = inst_38449);

return statearr_38543;
})();
var statearr_38544_38612 = state_38506__$1;
(statearr_38544_38612[(2)] = null);

(statearr_38544_38612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (43))){
var state_38506__$1 = state_38506;
var statearr_38545_38613 = state_38506__$1;
(statearr_38545_38613[(2)] = null);

(statearr_38545_38613[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (29))){
var inst_38490 = (state_38506[(2)]);
var state_38506__$1 = state_38506;
var statearr_38546_38614 = state_38506__$1;
(statearr_38546_38614[(2)] = inst_38490);

(statearr_38546_38614[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (44))){
var inst_38499 = (state_38506[(2)]);
var state_38506__$1 = (function (){var statearr_38547 = state_38506;
(statearr_38547[(28)] = inst_38499);

return statearr_38547;
})();
var statearr_38548_38615 = state_38506__$1;
(statearr_38548_38615[(2)] = null);

(statearr_38548_38615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (6))){
var inst_38438 = (state_38506[(29)]);
var inst_38437 = cljs.core.deref.call(null,cs);
var inst_38438__$1 = cljs.core.keys.call(null,inst_38437);
var inst_38439 = cljs.core.count.call(null,inst_38438__$1);
var inst_38440 = cljs.core.reset_BANG_.call(null,dctr,inst_38439);
var inst_38445 = cljs.core.seq.call(null,inst_38438__$1);
var inst_38446 = inst_38445;
var inst_38447 = null;
var inst_38448 = (0);
var inst_38449 = (0);
var state_38506__$1 = (function (){var statearr_38549 = state_38506;
(statearr_38549[(20)] = inst_38446);

(statearr_38549[(30)] = inst_38440);

(statearr_38549[(21)] = inst_38448);

(statearr_38549[(11)] = inst_38447);

(statearr_38549[(29)] = inst_38438__$1);

(statearr_38549[(12)] = inst_38449);

return statearr_38549;
})();
var statearr_38550_38616 = state_38506__$1;
(statearr_38550_38616[(2)] = null);

(statearr_38550_38616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (28))){
var inst_38465 = (state_38506[(25)]);
var inst_38446 = (state_38506[(20)]);
var inst_38465__$1 = cljs.core.seq.call(null,inst_38446);
var state_38506__$1 = (function (){var statearr_38551 = state_38506;
(statearr_38551[(25)] = inst_38465__$1);

return statearr_38551;
})();
if(inst_38465__$1){
var statearr_38552_38617 = state_38506__$1;
(statearr_38552_38617[(1)] = (33));

} else {
var statearr_38553_38618 = state_38506__$1;
(statearr_38553_38618[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (25))){
var inst_38448 = (state_38506[(21)]);
var inst_38449 = (state_38506[(12)]);
var inst_38451 = (inst_38449 < inst_38448);
var inst_38452 = inst_38451;
var state_38506__$1 = state_38506;
if(cljs.core.truth_(inst_38452)){
var statearr_38554_38619 = state_38506__$1;
(statearr_38554_38619[(1)] = (27));

} else {
var statearr_38555_38620 = state_38506__$1;
(statearr_38555_38620[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (34))){
var state_38506__$1 = state_38506;
var statearr_38556_38621 = state_38506__$1;
(statearr_38556_38621[(2)] = null);

(statearr_38556_38621[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (17))){
var state_38506__$1 = state_38506;
var statearr_38557_38622 = state_38506__$1;
(statearr_38557_38622[(2)] = null);

(statearr_38557_38622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (3))){
var inst_38504 = (state_38506[(2)]);
var state_38506__$1 = state_38506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38506__$1,inst_38504);
} else {
if((state_val_38507 === (12))){
var inst_38433 = (state_38506[(2)]);
var state_38506__$1 = state_38506;
var statearr_38558_38623 = state_38506__$1;
(statearr_38558_38623[(2)] = inst_38433);

(statearr_38558_38623[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (2))){
var state_38506__$1 = state_38506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38506__$1,(4),ch);
} else {
if((state_val_38507 === (23))){
var state_38506__$1 = state_38506;
var statearr_38559_38624 = state_38506__$1;
(statearr_38559_38624[(2)] = null);

(statearr_38559_38624[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (35))){
var inst_38488 = (state_38506[(2)]);
var state_38506__$1 = state_38506;
var statearr_38560_38625 = state_38506__$1;
(statearr_38560_38625[(2)] = inst_38488);

(statearr_38560_38625[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (19))){
var inst_38405 = (state_38506[(7)]);
var inst_38409 = cljs.core.chunk_first.call(null,inst_38405);
var inst_38410 = cljs.core.chunk_rest.call(null,inst_38405);
var inst_38411 = cljs.core.count.call(null,inst_38409);
var inst_38383 = inst_38410;
var inst_38384 = inst_38409;
var inst_38385 = inst_38411;
var inst_38386 = (0);
var state_38506__$1 = (function (){var statearr_38561 = state_38506;
(statearr_38561[(13)] = inst_38383);

(statearr_38561[(14)] = inst_38386);

(statearr_38561[(15)] = inst_38385);

(statearr_38561[(17)] = inst_38384);

return statearr_38561;
})();
var statearr_38562_38626 = state_38506__$1;
(statearr_38562_38626[(2)] = null);

(statearr_38562_38626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (11))){
var inst_38383 = (state_38506[(13)]);
var inst_38405 = (state_38506[(7)]);
var inst_38405__$1 = cljs.core.seq.call(null,inst_38383);
var state_38506__$1 = (function (){var statearr_38563 = state_38506;
(statearr_38563[(7)] = inst_38405__$1);

return statearr_38563;
})();
if(inst_38405__$1){
var statearr_38564_38627 = state_38506__$1;
(statearr_38564_38627[(1)] = (16));

} else {
var statearr_38565_38628 = state_38506__$1;
(statearr_38565_38628[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (9))){
var inst_38435 = (state_38506[(2)]);
var state_38506__$1 = state_38506;
var statearr_38566_38629 = state_38506__$1;
(statearr_38566_38629[(2)] = inst_38435);

(statearr_38566_38629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (5))){
var inst_38381 = cljs.core.deref.call(null,cs);
var inst_38382 = cljs.core.seq.call(null,inst_38381);
var inst_38383 = inst_38382;
var inst_38384 = null;
var inst_38385 = (0);
var inst_38386 = (0);
var state_38506__$1 = (function (){var statearr_38567 = state_38506;
(statearr_38567[(13)] = inst_38383);

(statearr_38567[(14)] = inst_38386);

(statearr_38567[(15)] = inst_38385);

(statearr_38567[(17)] = inst_38384);

return statearr_38567;
})();
var statearr_38568_38630 = state_38506__$1;
(statearr_38568_38630[(2)] = null);

(statearr_38568_38630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (14))){
var state_38506__$1 = state_38506;
var statearr_38569_38631 = state_38506__$1;
(statearr_38569_38631[(2)] = null);

(statearr_38569_38631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (45))){
var inst_38496 = (state_38506[(2)]);
var state_38506__$1 = state_38506;
var statearr_38570_38632 = state_38506__$1;
(statearr_38570_38632[(2)] = inst_38496);

(statearr_38570_38632[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (26))){
var inst_38438 = (state_38506[(29)]);
var inst_38492 = (state_38506[(2)]);
var inst_38493 = cljs.core.seq.call(null,inst_38438);
var state_38506__$1 = (function (){var statearr_38571 = state_38506;
(statearr_38571[(31)] = inst_38492);

return statearr_38571;
})();
if(inst_38493){
var statearr_38572_38633 = state_38506__$1;
(statearr_38572_38633[(1)] = (42));

} else {
var statearr_38573_38634 = state_38506__$1;
(statearr_38573_38634[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (16))){
var inst_38405 = (state_38506[(7)]);
var inst_38407 = cljs.core.chunked_seq_QMARK_.call(null,inst_38405);
var state_38506__$1 = state_38506;
if(inst_38407){
var statearr_38574_38635 = state_38506__$1;
(statearr_38574_38635[(1)] = (19));

} else {
var statearr_38575_38636 = state_38506__$1;
(statearr_38575_38636[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (38))){
var inst_38485 = (state_38506[(2)]);
var state_38506__$1 = state_38506;
var statearr_38576_38637 = state_38506__$1;
(statearr_38576_38637[(2)] = inst_38485);

(statearr_38576_38637[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (30))){
var state_38506__$1 = state_38506;
var statearr_38577_38638 = state_38506__$1;
(statearr_38577_38638[(2)] = null);

(statearr_38577_38638[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (10))){
var inst_38386 = (state_38506[(14)]);
var inst_38384 = (state_38506[(17)]);
var inst_38394 = cljs.core._nth.call(null,inst_38384,inst_38386);
var inst_38395 = cljs.core.nth.call(null,inst_38394,(0),null);
var inst_38396 = cljs.core.nth.call(null,inst_38394,(1),null);
var state_38506__$1 = (function (){var statearr_38578 = state_38506;
(statearr_38578[(26)] = inst_38395);

return statearr_38578;
})();
if(cljs.core.truth_(inst_38396)){
var statearr_38579_38639 = state_38506__$1;
(statearr_38579_38639[(1)] = (13));

} else {
var statearr_38580_38640 = state_38506__$1;
(statearr_38580_38640[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (18))){
var inst_38431 = (state_38506[(2)]);
var state_38506__$1 = state_38506;
var statearr_38581_38641 = state_38506__$1;
(statearr_38581_38641[(2)] = inst_38431);

(statearr_38581_38641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (42))){
var state_38506__$1 = state_38506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38506__$1,(45),dchan);
} else {
if((state_val_38507 === (37))){
var inst_38474 = (state_38506[(23)]);
var inst_38465 = (state_38506[(25)]);
var inst_38374 = (state_38506[(10)]);
var inst_38474__$1 = cljs.core.first.call(null,inst_38465);
var inst_38475 = cljs.core.async.put_BANG_.call(null,inst_38474__$1,inst_38374,done);
var state_38506__$1 = (function (){var statearr_38582 = state_38506;
(statearr_38582[(23)] = inst_38474__$1);

return statearr_38582;
})();
if(cljs.core.truth_(inst_38475)){
var statearr_38583_38642 = state_38506__$1;
(statearr_38583_38642[(1)] = (39));

} else {
var statearr_38584_38643 = state_38506__$1;
(statearr_38584_38643[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (8))){
var inst_38386 = (state_38506[(14)]);
var inst_38385 = (state_38506[(15)]);
var inst_38388 = (inst_38386 < inst_38385);
var inst_38389 = inst_38388;
var state_38506__$1 = state_38506;
if(cljs.core.truth_(inst_38389)){
var statearr_38585_38644 = state_38506__$1;
(statearr_38585_38644[(1)] = (10));

} else {
var statearr_38586_38645 = state_38506__$1;
(statearr_38586_38645[(1)] = (11));

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
});})(c__29745__auto___38591,cs,m,dchan,dctr,done))
;
return ((function (switch__29657__auto__,c__29745__auto___38591,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29658__auto__ = null;
var cljs$core$async$mult_$_state_machine__29658__auto____0 = (function (){
var statearr_38587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38587[(0)] = cljs$core$async$mult_$_state_machine__29658__auto__);

(statearr_38587[(1)] = (1));

return statearr_38587;
});
var cljs$core$async$mult_$_state_machine__29658__auto____1 = (function (state_38506){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e38588){if((e38588 instanceof Object)){
var ex__29661__auto__ = e38588;
var statearr_38589_38646 = state_38506;
(statearr_38589_38646[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38647 = state_38506;
state_38506 = G__38647;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29658__auto__ = function(state_38506){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29658__auto____1.call(this,state_38506);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29658__auto____0;
cljs$core$async$mult_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29658__auto____1;
return cljs$core$async$mult_$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___38591,cs,m,dchan,dctr,done))
})();
var state__29747__auto__ = (function (){var statearr_38590 = f__29746__auto__.call(null);
(statearr_38590[(6)] = c__29745__auto___38591);

return statearr_38590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___38591,cs,m,dchan,dctr,done))
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
var G__38649 = arguments.length;
switch (G__38649) {
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
var len__28364__auto___38661 = arguments.length;
var i__28365__auto___38662 = (0);
while(true){
if((i__28365__auto___38662 < len__28364__auto___38661)){
args__28371__auto__.push((arguments[i__28365__auto___38662]));

var G__38663 = (i__28365__auto___38662 + (1));
i__28365__auto___38662 = G__38663;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38655){
var map__38656 = p__38655;
var map__38656__$1 = ((((!((map__38656 == null)))?((((map__38656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38656.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38656):map__38656);
var opts = map__38656__$1;
var statearr_38658_38664 = state;
(statearr_38658_38664[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38656,map__38656__$1,opts){
return (function (val){
var statearr_38659_38665 = state;
(statearr_38659_38665[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38656,map__38656__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38660_38666 = state;
(statearr_38660_38666[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38651){
var G__38652 = cljs.core.first.call(null,seq38651);
var seq38651__$1 = cljs.core.next.call(null,seq38651);
var G__38653 = cljs.core.first.call(null,seq38651__$1);
var seq38651__$2 = cljs.core.next.call(null,seq38651__$1);
var G__38654 = cljs.core.first.call(null,seq38651__$2);
var seq38651__$3 = cljs.core.next.call(null,seq38651__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38652,G__38653,G__38654,seq38651__$3);
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
if(typeof cljs.core.async.t_cljs$core$async38667 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38667 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta38668){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta38668 = meta38668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38669,meta38668__$1){
var self__ = this;
var _38669__$1 = this;
return (new cljs.core.async.t_cljs$core$async38667(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta38668__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38669){
var self__ = this;
var _38669__$1 = this;
return self__.meta38668;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38667.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async38667.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta38668","meta38668",-1590398907,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38667.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38667";

cljs.core.async.t_cljs$core$async38667.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async38667");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38667 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38667(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38668){
return (new cljs.core.async.t_cljs$core$async38667(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38668));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38667(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29745__auto___38831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___38831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___38831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38771){
var state_val_38772 = (state_38771[(1)]);
if((state_val_38772 === (7))){
var inst_38686 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
var statearr_38773_38832 = state_38771__$1;
(statearr_38773_38832[(2)] = inst_38686);

(statearr_38773_38832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (20))){
var inst_38698 = (state_38771[(7)]);
var state_38771__$1 = state_38771;
var statearr_38774_38833 = state_38771__$1;
(statearr_38774_38833[(2)] = inst_38698);

(statearr_38774_38833[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (27))){
var state_38771__$1 = state_38771;
var statearr_38775_38834 = state_38771__$1;
(statearr_38775_38834[(2)] = null);

(statearr_38775_38834[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (1))){
var inst_38673 = (state_38771[(8)]);
var inst_38673__$1 = calc_state.call(null);
var inst_38675 = (inst_38673__$1 == null);
var inst_38676 = cljs.core.not.call(null,inst_38675);
var state_38771__$1 = (function (){var statearr_38776 = state_38771;
(statearr_38776[(8)] = inst_38673__$1);

return statearr_38776;
})();
if(inst_38676){
var statearr_38777_38835 = state_38771__$1;
(statearr_38777_38835[(1)] = (2));

} else {
var statearr_38778_38836 = state_38771__$1;
(statearr_38778_38836[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (24))){
var inst_38745 = (state_38771[(9)]);
var inst_38731 = (state_38771[(10)]);
var inst_38722 = (state_38771[(11)]);
var inst_38745__$1 = inst_38722.call(null,inst_38731);
var state_38771__$1 = (function (){var statearr_38779 = state_38771;
(statearr_38779[(9)] = inst_38745__$1);

return statearr_38779;
})();
if(cljs.core.truth_(inst_38745__$1)){
var statearr_38780_38837 = state_38771__$1;
(statearr_38780_38837[(1)] = (29));

} else {
var statearr_38781_38838 = state_38771__$1;
(statearr_38781_38838[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (4))){
var inst_38689 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
if(cljs.core.truth_(inst_38689)){
var statearr_38782_38839 = state_38771__$1;
(statearr_38782_38839[(1)] = (8));

} else {
var statearr_38783_38840 = state_38771__$1;
(statearr_38783_38840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (15))){
var inst_38716 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
if(cljs.core.truth_(inst_38716)){
var statearr_38784_38841 = state_38771__$1;
(statearr_38784_38841[(1)] = (19));

} else {
var statearr_38785_38842 = state_38771__$1;
(statearr_38785_38842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (21))){
var inst_38721 = (state_38771[(12)]);
var inst_38721__$1 = (state_38771[(2)]);
var inst_38722 = cljs.core.get.call(null,inst_38721__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38723 = cljs.core.get.call(null,inst_38721__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38724 = cljs.core.get.call(null,inst_38721__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38771__$1 = (function (){var statearr_38786 = state_38771;
(statearr_38786[(12)] = inst_38721__$1);

(statearr_38786[(11)] = inst_38722);

(statearr_38786[(13)] = inst_38723);

return statearr_38786;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38771__$1,(22),inst_38724);
} else {
if((state_val_38772 === (31))){
var inst_38753 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
if(cljs.core.truth_(inst_38753)){
var statearr_38787_38843 = state_38771__$1;
(statearr_38787_38843[(1)] = (32));

} else {
var statearr_38788_38844 = state_38771__$1;
(statearr_38788_38844[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (32))){
var inst_38730 = (state_38771[(14)]);
var state_38771__$1 = state_38771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38771__$1,(35),out,inst_38730);
} else {
if((state_val_38772 === (33))){
var inst_38721 = (state_38771[(12)]);
var inst_38698 = inst_38721;
var state_38771__$1 = (function (){var statearr_38789 = state_38771;
(statearr_38789[(7)] = inst_38698);

return statearr_38789;
})();
var statearr_38790_38845 = state_38771__$1;
(statearr_38790_38845[(2)] = null);

(statearr_38790_38845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (13))){
var inst_38698 = (state_38771[(7)]);
var inst_38705 = inst_38698.cljs$lang$protocol_mask$partition0$;
var inst_38706 = (inst_38705 & (64));
var inst_38707 = inst_38698.cljs$core$ISeq$;
var inst_38708 = (cljs.core.PROTOCOL_SENTINEL === inst_38707);
var inst_38709 = (inst_38706) || (inst_38708);
var state_38771__$1 = state_38771;
if(cljs.core.truth_(inst_38709)){
var statearr_38791_38846 = state_38771__$1;
(statearr_38791_38846[(1)] = (16));

} else {
var statearr_38792_38847 = state_38771__$1;
(statearr_38792_38847[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (22))){
var inst_38731 = (state_38771[(10)]);
var inst_38730 = (state_38771[(14)]);
var inst_38729 = (state_38771[(2)]);
var inst_38730__$1 = cljs.core.nth.call(null,inst_38729,(0),null);
var inst_38731__$1 = cljs.core.nth.call(null,inst_38729,(1),null);
var inst_38732 = (inst_38730__$1 == null);
var inst_38733 = cljs.core._EQ_.call(null,inst_38731__$1,change);
var inst_38734 = (inst_38732) || (inst_38733);
var state_38771__$1 = (function (){var statearr_38793 = state_38771;
(statearr_38793[(10)] = inst_38731__$1);

(statearr_38793[(14)] = inst_38730__$1);

return statearr_38793;
})();
if(cljs.core.truth_(inst_38734)){
var statearr_38794_38848 = state_38771__$1;
(statearr_38794_38848[(1)] = (23));

} else {
var statearr_38795_38849 = state_38771__$1;
(statearr_38795_38849[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (36))){
var inst_38721 = (state_38771[(12)]);
var inst_38698 = inst_38721;
var state_38771__$1 = (function (){var statearr_38796 = state_38771;
(statearr_38796[(7)] = inst_38698);

return statearr_38796;
})();
var statearr_38797_38850 = state_38771__$1;
(statearr_38797_38850[(2)] = null);

(statearr_38797_38850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (29))){
var inst_38745 = (state_38771[(9)]);
var state_38771__$1 = state_38771;
var statearr_38798_38851 = state_38771__$1;
(statearr_38798_38851[(2)] = inst_38745);

(statearr_38798_38851[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (6))){
var state_38771__$1 = state_38771;
var statearr_38799_38852 = state_38771__$1;
(statearr_38799_38852[(2)] = false);

(statearr_38799_38852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (28))){
var inst_38741 = (state_38771[(2)]);
var inst_38742 = calc_state.call(null);
var inst_38698 = inst_38742;
var state_38771__$1 = (function (){var statearr_38800 = state_38771;
(statearr_38800[(15)] = inst_38741);

(statearr_38800[(7)] = inst_38698);

return statearr_38800;
})();
var statearr_38801_38853 = state_38771__$1;
(statearr_38801_38853[(2)] = null);

(statearr_38801_38853[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (25))){
var inst_38767 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
var statearr_38802_38854 = state_38771__$1;
(statearr_38802_38854[(2)] = inst_38767);

(statearr_38802_38854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (34))){
var inst_38765 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
var statearr_38803_38855 = state_38771__$1;
(statearr_38803_38855[(2)] = inst_38765);

(statearr_38803_38855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (17))){
var state_38771__$1 = state_38771;
var statearr_38804_38856 = state_38771__$1;
(statearr_38804_38856[(2)] = false);

(statearr_38804_38856[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (3))){
var state_38771__$1 = state_38771;
var statearr_38805_38857 = state_38771__$1;
(statearr_38805_38857[(2)] = false);

(statearr_38805_38857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (12))){
var inst_38769 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38771__$1,inst_38769);
} else {
if((state_val_38772 === (2))){
var inst_38673 = (state_38771[(8)]);
var inst_38678 = inst_38673.cljs$lang$protocol_mask$partition0$;
var inst_38679 = (inst_38678 & (64));
var inst_38680 = inst_38673.cljs$core$ISeq$;
var inst_38681 = (cljs.core.PROTOCOL_SENTINEL === inst_38680);
var inst_38682 = (inst_38679) || (inst_38681);
var state_38771__$1 = state_38771;
if(cljs.core.truth_(inst_38682)){
var statearr_38806_38858 = state_38771__$1;
(statearr_38806_38858[(1)] = (5));

} else {
var statearr_38807_38859 = state_38771__$1;
(statearr_38807_38859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (23))){
var inst_38730 = (state_38771[(14)]);
var inst_38736 = (inst_38730 == null);
var state_38771__$1 = state_38771;
if(cljs.core.truth_(inst_38736)){
var statearr_38808_38860 = state_38771__$1;
(statearr_38808_38860[(1)] = (26));

} else {
var statearr_38809_38861 = state_38771__$1;
(statearr_38809_38861[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (35))){
var inst_38756 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
if(cljs.core.truth_(inst_38756)){
var statearr_38810_38862 = state_38771__$1;
(statearr_38810_38862[(1)] = (36));

} else {
var statearr_38811_38863 = state_38771__$1;
(statearr_38811_38863[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (19))){
var inst_38698 = (state_38771[(7)]);
var inst_38718 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38698);
var state_38771__$1 = state_38771;
var statearr_38812_38864 = state_38771__$1;
(statearr_38812_38864[(2)] = inst_38718);

(statearr_38812_38864[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (11))){
var inst_38698 = (state_38771[(7)]);
var inst_38702 = (inst_38698 == null);
var inst_38703 = cljs.core.not.call(null,inst_38702);
var state_38771__$1 = state_38771;
if(inst_38703){
var statearr_38813_38865 = state_38771__$1;
(statearr_38813_38865[(1)] = (13));

} else {
var statearr_38814_38866 = state_38771__$1;
(statearr_38814_38866[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (9))){
var inst_38673 = (state_38771[(8)]);
var state_38771__$1 = state_38771;
var statearr_38815_38867 = state_38771__$1;
(statearr_38815_38867[(2)] = inst_38673);

(statearr_38815_38867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (5))){
var state_38771__$1 = state_38771;
var statearr_38816_38868 = state_38771__$1;
(statearr_38816_38868[(2)] = true);

(statearr_38816_38868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (14))){
var state_38771__$1 = state_38771;
var statearr_38817_38869 = state_38771__$1;
(statearr_38817_38869[(2)] = false);

(statearr_38817_38869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (26))){
var inst_38731 = (state_38771[(10)]);
var inst_38738 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38731);
var state_38771__$1 = state_38771;
var statearr_38818_38870 = state_38771__$1;
(statearr_38818_38870[(2)] = inst_38738);

(statearr_38818_38870[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (16))){
var state_38771__$1 = state_38771;
var statearr_38819_38871 = state_38771__$1;
(statearr_38819_38871[(2)] = true);

(statearr_38819_38871[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (38))){
var inst_38761 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
var statearr_38820_38872 = state_38771__$1;
(statearr_38820_38872[(2)] = inst_38761);

(statearr_38820_38872[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (30))){
var inst_38731 = (state_38771[(10)]);
var inst_38722 = (state_38771[(11)]);
var inst_38723 = (state_38771[(13)]);
var inst_38748 = cljs.core.empty_QMARK_.call(null,inst_38722);
var inst_38749 = inst_38723.call(null,inst_38731);
var inst_38750 = cljs.core.not.call(null,inst_38749);
var inst_38751 = (inst_38748) && (inst_38750);
var state_38771__$1 = state_38771;
var statearr_38821_38873 = state_38771__$1;
(statearr_38821_38873[(2)] = inst_38751);

(statearr_38821_38873[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (10))){
var inst_38673 = (state_38771[(8)]);
var inst_38694 = (state_38771[(2)]);
var inst_38695 = cljs.core.get.call(null,inst_38694,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38696 = cljs.core.get.call(null,inst_38694,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38697 = cljs.core.get.call(null,inst_38694,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38698 = inst_38673;
var state_38771__$1 = (function (){var statearr_38822 = state_38771;
(statearr_38822[(16)] = inst_38695);

(statearr_38822[(7)] = inst_38698);

(statearr_38822[(17)] = inst_38696);

(statearr_38822[(18)] = inst_38697);

return statearr_38822;
})();
var statearr_38823_38874 = state_38771__$1;
(statearr_38823_38874[(2)] = null);

(statearr_38823_38874[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (18))){
var inst_38713 = (state_38771[(2)]);
var state_38771__$1 = state_38771;
var statearr_38824_38875 = state_38771__$1;
(statearr_38824_38875[(2)] = inst_38713);

(statearr_38824_38875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (37))){
var state_38771__$1 = state_38771;
var statearr_38825_38876 = state_38771__$1;
(statearr_38825_38876[(2)] = null);

(statearr_38825_38876[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38772 === (8))){
var inst_38673 = (state_38771[(8)]);
var inst_38691 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38673);
var state_38771__$1 = state_38771;
var statearr_38826_38877 = state_38771__$1;
(statearr_38826_38877[(2)] = inst_38691);

(statearr_38826_38877[(1)] = (10));


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
});})(c__29745__auto___38831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29657__auto__,c__29745__auto___38831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29658__auto__ = null;
var cljs$core$async$mix_$_state_machine__29658__auto____0 = (function (){
var statearr_38827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38827[(0)] = cljs$core$async$mix_$_state_machine__29658__auto__);

(statearr_38827[(1)] = (1));

return statearr_38827;
});
var cljs$core$async$mix_$_state_machine__29658__auto____1 = (function (state_38771){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e38828){if((e38828 instanceof Object)){
var ex__29661__auto__ = e38828;
var statearr_38829_38878 = state_38771;
(statearr_38829_38878[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38879 = state_38771;
state_38771 = G__38879;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29658__auto__ = function(state_38771){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29658__auto____1.call(this,state_38771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29658__auto____0;
cljs$core$async$mix_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29658__auto____1;
return cljs$core$async$mix_$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___38831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29747__auto__ = (function (){var statearr_38830 = f__29746__auto__.call(null);
(statearr_38830[(6)] = c__29745__auto___38831);

return statearr_38830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___38831,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__38881 = arguments.length;
switch (G__38881) {
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
var G__38885 = arguments.length;
switch (G__38885) {
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
return (function (p1__38883_SHARP_){
if(cljs.core.truth_(p1__38883_SHARP_.call(null,topic))){
return p1__38883_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38883_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38886 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38886 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38887){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38887 = meta38887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38888,meta38887__$1){
var self__ = this;
var _38888__$1 = this;
return (new cljs.core.async.t_cljs$core$async38886(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38887__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38888){
var self__ = this;
var _38888__$1 = this;
return self__.meta38887;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38886.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38887","meta38887",199987112,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38886.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38886";

cljs.core.async.t_cljs$core$async38886.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async38886");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38886 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38886(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38887){
return (new cljs.core.async.t_cljs$core$async38886(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38887));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38886(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29745__auto___39006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39006,mults,ensure_mult,p){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39006,mults,ensure_mult,p){
return (function (state_38960){
var state_val_38961 = (state_38960[(1)]);
if((state_val_38961 === (7))){
var inst_38956 = (state_38960[(2)]);
var state_38960__$1 = state_38960;
var statearr_38962_39007 = state_38960__$1;
(statearr_38962_39007[(2)] = inst_38956);

(statearr_38962_39007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (20))){
var state_38960__$1 = state_38960;
var statearr_38963_39008 = state_38960__$1;
(statearr_38963_39008[(2)] = null);

(statearr_38963_39008[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (1))){
var state_38960__$1 = state_38960;
var statearr_38964_39009 = state_38960__$1;
(statearr_38964_39009[(2)] = null);

(statearr_38964_39009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (24))){
var inst_38939 = (state_38960[(7)]);
var inst_38948 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38939);
var state_38960__$1 = state_38960;
var statearr_38965_39010 = state_38960__$1;
(statearr_38965_39010[(2)] = inst_38948);

(statearr_38965_39010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (4))){
var inst_38891 = (state_38960[(8)]);
var inst_38891__$1 = (state_38960[(2)]);
var inst_38892 = (inst_38891__$1 == null);
var state_38960__$1 = (function (){var statearr_38966 = state_38960;
(statearr_38966[(8)] = inst_38891__$1);

return statearr_38966;
})();
if(cljs.core.truth_(inst_38892)){
var statearr_38967_39011 = state_38960__$1;
(statearr_38967_39011[(1)] = (5));

} else {
var statearr_38968_39012 = state_38960__$1;
(statearr_38968_39012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (15))){
var inst_38933 = (state_38960[(2)]);
var state_38960__$1 = state_38960;
var statearr_38969_39013 = state_38960__$1;
(statearr_38969_39013[(2)] = inst_38933);

(statearr_38969_39013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (21))){
var inst_38953 = (state_38960[(2)]);
var state_38960__$1 = (function (){var statearr_38970 = state_38960;
(statearr_38970[(9)] = inst_38953);

return statearr_38970;
})();
var statearr_38971_39014 = state_38960__$1;
(statearr_38971_39014[(2)] = null);

(statearr_38971_39014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (13))){
var inst_38915 = (state_38960[(10)]);
var inst_38917 = cljs.core.chunked_seq_QMARK_.call(null,inst_38915);
var state_38960__$1 = state_38960;
if(inst_38917){
var statearr_38972_39015 = state_38960__$1;
(statearr_38972_39015[(1)] = (16));

} else {
var statearr_38973_39016 = state_38960__$1;
(statearr_38973_39016[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (22))){
var inst_38945 = (state_38960[(2)]);
var state_38960__$1 = state_38960;
if(cljs.core.truth_(inst_38945)){
var statearr_38974_39017 = state_38960__$1;
(statearr_38974_39017[(1)] = (23));

} else {
var statearr_38975_39018 = state_38960__$1;
(statearr_38975_39018[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (6))){
var inst_38941 = (state_38960[(11)]);
var inst_38891 = (state_38960[(8)]);
var inst_38939 = (state_38960[(7)]);
var inst_38939__$1 = topic_fn.call(null,inst_38891);
var inst_38940 = cljs.core.deref.call(null,mults);
var inst_38941__$1 = cljs.core.get.call(null,inst_38940,inst_38939__$1);
var state_38960__$1 = (function (){var statearr_38976 = state_38960;
(statearr_38976[(11)] = inst_38941__$1);

(statearr_38976[(7)] = inst_38939__$1);

return statearr_38976;
})();
if(cljs.core.truth_(inst_38941__$1)){
var statearr_38977_39019 = state_38960__$1;
(statearr_38977_39019[(1)] = (19));

} else {
var statearr_38978_39020 = state_38960__$1;
(statearr_38978_39020[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (25))){
var inst_38950 = (state_38960[(2)]);
var state_38960__$1 = state_38960;
var statearr_38979_39021 = state_38960__$1;
(statearr_38979_39021[(2)] = inst_38950);

(statearr_38979_39021[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (17))){
var inst_38915 = (state_38960[(10)]);
var inst_38924 = cljs.core.first.call(null,inst_38915);
var inst_38925 = cljs.core.async.muxch_STAR_.call(null,inst_38924);
var inst_38926 = cljs.core.async.close_BANG_.call(null,inst_38925);
var inst_38927 = cljs.core.next.call(null,inst_38915);
var inst_38901 = inst_38927;
var inst_38902 = null;
var inst_38903 = (0);
var inst_38904 = (0);
var state_38960__$1 = (function (){var statearr_38980 = state_38960;
(statearr_38980[(12)] = inst_38901);

(statearr_38980[(13)] = inst_38926);

(statearr_38980[(14)] = inst_38904);

(statearr_38980[(15)] = inst_38903);

(statearr_38980[(16)] = inst_38902);

return statearr_38980;
})();
var statearr_38981_39022 = state_38960__$1;
(statearr_38981_39022[(2)] = null);

(statearr_38981_39022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (3))){
var inst_38958 = (state_38960[(2)]);
var state_38960__$1 = state_38960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38960__$1,inst_38958);
} else {
if((state_val_38961 === (12))){
var inst_38935 = (state_38960[(2)]);
var state_38960__$1 = state_38960;
var statearr_38982_39023 = state_38960__$1;
(statearr_38982_39023[(2)] = inst_38935);

(statearr_38982_39023[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (2))){
var state_38960__$1 = state_38960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38960__$1,(4),ch);
} else {
if((state_val_38961 === (23))){
var state_38960__$1 = state_38960;
var statearr_38983_39024 = state_38960__$1;
(statearr_38983_39024[(2)] = null);

(statearr_38983_39024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (19))){
var inst_38941 = (state_38960[(11)]);
var inst_38891 = (state_38960[(8)]);
var inst_38943 = cljs.core.async.muxch_STAR_.call(null,inst_38941);
var state_38960__$1 = state_38960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38960__$1,(22),inst_38943,inst_38891);
} else {
if((state_val_38961 === (11))){
var inst_38915 = (state_38960[(10)]);
var inst_38901 = (state_38960[(12)]);
var inst_38915__$1 = cljs.core.seq.call(null,inst_38901);
var state_38960__$1 = (function (){var statearr_38984 = state_38960;
(statearr_38984[(10)] = inst_38915__$1);

return statearr_38984;
})();
if(inst_38915__$1){
var statearr_38985_39025 = state_38960__$1;
(statearr_38985_39025[(1)] = (13));

} else {
var statearr_38986_39026 = state_38960__$1;
(statearr_38986_39026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (9))){
var inst_38937 = (state_38960[(2)]);
var state_38960__$1 = state_38960;
var statearr_38987_39027 = state_38960__$1;
(statearr_38987_39027[(2)] = inst_38937);

(statearr_38987_39027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (5))){
var inst_38898 = cljs.core.deref.call(null,mults);
var inst_38899 = cljs.core.vals.call(null,inst_38898);
var inst_38900 = cljs.core.seq.call(null,inst_38899);
var inst_38901 = inst_38900;
var inst_38902 = null;
var inst_38903 = (0);
var inst_38904 = (0);
var state_38960__$1 = (function (){var statearr_38988 = state_38960;
(statearr_38988[(12)] = inst_38901);

(statearr_38988[(14)] = inst_38904);

(statearr_38988[(15)] = inst_38903);

(statearr_38988[(16)] = inst_38902);

return statearr_38988;
})();
var statearr_38989_39028 = state_38960__$1;
(statearr_38989_39028[(2)] = null);

(statearr_38989_39028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (14))){
var state_38960__$1 = state_38960;
var statearr_38993_39029 = state_38960__$1;
(statearr_38993_39029[(2)] = null);

(statearr_38993_39029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (16))){
var inst_38915 = (state_38960[(10)]);
var inst_38919 = cljs.core.chunk_first.call(null,inst_38915);
var inst_38920 = cljs.core.chunk_rest.call(null,inst_38915);
var inst_38921 = cljs.core.count.call(null,inst_38919);
var inst_38901 = inst_38920;
var inst_38902 = inst_38919;
var inst_38903 = inst_38921;
var inst_38904 = (0);
var state_38960__$1 = (function (){var statearr_38994 = state_38960;
(statearr_38994[(12)] = inst_38901);

(statearr_38994[(14)] = inst_38904);

(statearr_38994[(15)] = inst_38903);

(statearr_38994[(16)] = inst_38902);

return statearr_38994;
})();
var statearr_38995_39030 = state_38960__$1;
(statearr_38995_39030[(2)] = null);

(statearr_38995_39030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (10))){
var inst_38901 = (state_38960[(12)]);
var inst_38904 = (state_38960[(14)]);
var inst_38903 = (state_38960[(15)]);
var inst_38902 = (state_38960[(16)]);
var inst_38909 = cljs.core._nth.call(null,inst_38902,inst_38904);
var inst_38910 = cljs.core.async.muxch_STAR_.call(null,inst_38909);
var inst_38911 = cljs.core.async.close_BANG_.call(null,inst_38910);
var inst_38912 = (inst_38904 + (1));
var tmp38990 = inst_38901;
var tmp38991 = inst_38903;
var tmp38992 = inst_38902;
var inst_38901__$1 = tmp38990;
var inst_38902__$1 = tmp38992;
var inst_38903__$1 = tmp38991;
var inst_38904__$1 = inst_38912;
var state_38960__$1 = (function (){var statearr_38996 = state_38960;
(statearr_38996[(12)] = inst_38901__$1);

(statearr_38996[(17)] = inst_38911);

(statearr_38996[(14)] = inst_38904__$1);

(statearr_38996[(15)] = inst_38903__$1);

(statearr_38996[(16)] = inst_38902__$1);

return statearr_38996;
})();
var statearr_38997_39031 = state_38960__$1;
(statearr_38997_39031[(2)] = null);

(statearr_38997_39031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (18))){
var inst_38930 = (state_38960[(2)]);
var state_38960__$1 = state_38960;
var statearr_38998_39032 = state_38960__$1;
(statearr_38998_39032[(2)] = inst_38930);

(statearr_38998_39032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38961 === (8))){
var inst_38904 = (state_38960[(14)]);
var inst_38903 = (state_38960[(15)]);
var inst_38906 = (inst_38904 < inst_38903);
var inst_38907 = inst_38906;
var state_38960__$1 = state_38960;
if(cljs.core.truth_(inst_38907)){
var statearr_38999_39033 = state_38960__$1;
(statearr_38999_39033[(1)] = (10));

} else {
var statearr_39000_39034 = state_38960__$1;
(statearr_39000_39034[(1)] = (11));

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
});})(c__29745__auto___39006,mults,ensure_mult,p))
;
return ((function (switch__29657__auto__,c__29745__auto___39006,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_39001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39001[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_39001[(1)] = (1));

return statearr_39001;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_38960){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39002){if((e39002 instanceof Object)){
var ex__29661__auto__ = e39002;
var statearr_39003_39035 = state_38960;
(statearr_39003_39035[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39036 = state_38960;
state_38960 = G__39036;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_38960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_38960);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39006,mults,ensure_mult,p))
})();
var state__29747__auto__ = (function (){var statearr_39004 = f__29746__auto__.call(null);
(statearr_39004[(6)] = c__29745__auto___39006);

return statearr_39004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39006,mults,ensure_mult,p))
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
var G__39038 = arguments.length;
switch (G__39038) {
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
var G__39041 = arguments.length;
switch (G__39041) {
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
var G__39044 = arguments.length;
switch (G__39044) {
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
var c__29745__auto___39111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39111,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39111,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39083){
var state_val_39084 = (state_39083[(1)]);
if((state_val_39084 === (7))){
var state_39083__$1 = state_39083;
var statearr_39085_39112 = state_39083__$1;
(statearr_39085_39112[(2)] = null);

(statearr_39085_39112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (1))){
var state_39083__$1 = state_39083;
var statearr_39086_39113 = state_39083__$1;
(statearr_39086_39113[(2)] = null);

(statearr_39086_39113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (4))){
var inst_39047 = (state_39083[(7)]);
var inst_39049 = (inst_39047 < cnt);
var state_39083__$1 = state_39083;
if(cljs.core.truth_(inst_39049)){
var statearr_39087_39114 = state_39083__$1;
(statearr_39087_39114[(1)] = (6));

} else {
var statearr_39088_39115 = state_39083__$1;
(statearr_39088_39115[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (15))){
var inst_39079 = (state_39083[(2)]);
var state_39083__$1 = state_39083;
var statearr_39089_39116 = state_39083__$1;
(statearr_39089_39116[(2)] = inst_39079);

(statearr_39089_39116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (13))){
var inst_39072 = cljs.core.async.close_BANG_.call(null,out);
var state_39083__$1 = state_39083;
var statearr_39090_39117 = state_39083__$1;
(statearr_39090_39117[(2)] = inst_39072);

(statearr_39090_39117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (6))){
var state_39083__$1 = state_39083;
var statearr_39091_39118 = state_39083__$1;
(statearr_39091_39118[(2)] = null);

(statearr_39091_39118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (3))){
var inst_39081 = (state_39083[(2)]);
var state_39083__$1 = state_39083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39083__$1,inst_39081);
} else {
if((state_val_39084 === (12))){
var inst_39069 = (state_39083[(8)]);
var inst_39069__$1 = (state_39083[(2)]);
var inst_39070 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39069__$1);
var state_39083__$1 = (function (){var statearr_39092 = state_39083;
(statearr_39092[(8)] = inst_39069__$1);

return statearr_39092;
})();
if(cljs.core.truth_(inst_39070)){
var statearr_39093_39119 = state_39083__$1;
(statearr_39093_39119[(1)] = (13));

} else {
var statearr_39094_39120 = state_39083__$1;
(statearr_39094_39120[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (2))){
var inst_39046 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39047 = (0);
var state_39083__$1 = (function (){var statearr_39095 = state_39083;
(statearr_39095[(9)] = inst_39046);

(statearr_39095[(7)] = inst_39047);

return statearr_39095;
})();
var statearr_39096_39121 = state_39083__$1;
(statearr_39096_39121[(2)] = null);

(statearr_39096_39121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (11))){
var inst_39047 = (state_39083[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39083,(10),Object,null,(9));
var inst_39056 = chs__$1.call(null,inst_39047);
var inst_39057 = done.call(null,inst_39047);
var inst_39058 = cljs.core.async.take_BANG_.call(null,inst_39056,inst_39057);
var state_39083__$1 = state_39083;
var statearr_39097_39122 = state_39083__$1;
(statearr_39097_39122[(2)] = inst_39058);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39083__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (9))){
var inst_39047 = (state_39083[(7)]);
var inst_39060 = (state_39083[(2)]);
var inst_39061 = (inst_39047 + (1));
var inst_39047__$1 = inst_39061;
var state_39083__$1 = (function (){var statearr_39098 = state_39083;
(statearr_39098[(10)] = inst_39060);

(statearr_39098[(7)] = inst_39047__$1);

return statearr_39098;
})();
var statearr_39099_39123 = state_39083__$1;
(statearr_39099_39123[(2)] = null);

(statearr_39099_39123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (5))){
var inst_39067 = (state_39083[(2)]);
var state_39083__$1 = (function (){var statearr_39100 = state_39083;
(statearr_39100[(11)] = inst_39067);

return statearr_39100;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39083__$1,(12),dchan);
} else {
if((state_val_39084 === (14))){
var inst_39069 = (state_39083[(8)]);
var inst_39074 = cljs.core.apply.call(null,f,inst_39069);
var state_39083__$1 = state_39083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39083__$1,(16),out,inst_39074);
} else {
if((state_val_39084 === (16))){
var inst_39076 = (state_39083[(2)]);
var state_39083__$1 = (function (){var statearr_39101 = state_39083;
(statearr_39101[(12)] = inst_39076);

return statearr_39101;
})();
var statearr_39102_39124 = state_39083__$1;
(statearr_39102_39124[(2)] = null);

(statearr_39102_39124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (10))){
var inst_39051 = (state_39083[(2)]);
var inst_39052 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39083__$1 = (function (){var statearr_39103 = state_39083;
(statearr_39103[(13)] = inst_39051);

return statearr_39103;
})();
var statearr_39104_39125 = state_39083__$1;
(statearr_39104_39125[(2)] = inst_39052);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39083__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (8))){
var inst_39065 = (state_39083[(2)]);
var state_39083__$1 = state_39083;
var statearr_39105_39126 = state_39083__$1;
(statearr_39105_39126[(2)] = inst_39065);

(statearr_39105_39126[(1)] = (5));


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
});})(c__29745__auto___39111,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29657__auto__,c__29745__auto___39111,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_39106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39106[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_39106[(1)] = (1));

return statearr_39106;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_39083){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39107){if((e39107 instanceof Object)){
var ex__29661__auto__ = e39107;
var statearr_39108_39127 = state_39083;
(statearr_39108_39127[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39128 = state_39083;
state_39083 = G__39128;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_39083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_39083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39111,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29747__auto__ = (function (){var statearr_39109 = f__29746__auto__.call(null);
(statearr_39109[(6)] = c__29745__auto___39111);

return statearr_39109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39111,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__39131 = arguments.length;
switch (G__39131) {
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
var c__29745__auto___39185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39185,out){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39185,out){
return (function (state_39163){
var state_val_39164 = (state_39163[(1)]);
if((state_val_39164 === (7))){
var inst_39143 = (state_39163[(7)]);
var inst_39142 = (state_39163[(8)]);
var inst_39142__$1 = (state_39163[(2)]);
var inst_39143__$1 = cljs.core.nth.call(null,inst_39142__$1,(0),null);
var inst_39144 = cljs.core.nth.call(null,inst_39142__$1,(1),null);
var inst_39145 = (inst_39143__$1 == null);
var state_39163__$1 = (function (){var statearr_39165 = state_39163;
(statearr_39165[(7)] = inst_39143__$1);

(statearr_39165[(9)] = inst_39144);

(statearr_39165[(8)] = inst_39142__$1);

return statearr_39165;
})();
if(cljs.core.truth_(inst_39145)){
var statearr_39166_39186 = state_39163__$1;
(statearr_39166_39186[(1)] = (8));

} else {
var statearr_39167_39187 = state_39163__$1;
(statearr_39167_39187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (1))){
var inst_39132 = cljs.core.vec.call(null,chs);
var inst_39133 = inst_39132;
var state_39163__$1 = (function (){var statearr_39168 = state_39163;
(statearr_39168[(10)] = inst_39133);

return statearr_39168;
})();
var statearr_39169_39188 = state_39163__$1;
(statearr_39169_39188[(2)] = null);

(statearr_39169_39188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (4))){
var inst_39133 = (state_39163[(10)]);
var state_39163__$1 = state_39163;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39163__$1,(7),inst_39133);
} else {
if((state_val_39164 === (6))){
var inst_39159 = (state_39163[(2)]);
var state_39163__$1 = state_39163;
var statearr_39170_39189 = state_39163__$1;
(statearr_39170_39189[(2)] = inst_39159);

(statearr_39170_39189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (3))){
var inst_39161 = (state_39163[(2)]);
var state_39163__$1 = state_39163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39163__$1,inst_39161);
} else {
if((state_val_39164 === (2))){
var inst_39133 = (state_39163[(10)]);
var inst_39135 = cljs.core.count.call(null,inst_39133);
var inst_39136 = (inst_39135 > (0));
var state_39163__$1 = state_39163;
if(cljs.core.truth_(inst_39136)){
var statearr_39172_39190 = state_39163__$1;
(statearr_39172_39190[(1)] = (4));

} else {
var statearr_39173_39191 = state_39163__$1;
(statearr_39173_39191[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (11))){
var inst_39133 = (state_39163[(10)]);
var inst_39152 = (state_39163[(2)]);
var tmp39171 = inst_39133;
var inst_39133__$1 = tmp39171;
var state_39163__$1 = (function (){var statearr_39174 = state_39163;
(statearr_39174[(11)] = inst_39152);

(statearr_39174[(10)] = inst_39133__$1);

return statearr_39174;
})();
var statearr_39175_39192 = state_39163__$1;
(statearr_39175_39192[(2)] = null);

(statearr_39175_39192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (9))){
var inst_39143 = (state_39163[(7)]);
var state_39163__$1 = state_39163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39163__$1,(11),out,inst_39143);
} else {
if((state_val_39164 === (5))){
var inst_39157 = cljs.core.async.close_BANG_.call(null,out);
var state_39163__$1 = state_39163;
var statearr_39176_39193 = state_39163__$1;
(statearr_39176_39193[(2)] = inst_39157);

(statearr_39176_39193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (10))){
var inst_39155 = (state_39163[(2)]);
var state_39163__$1 = state_39163;
var statearr_39177_39194 = state_39163__$1;
(statearr_39177_39194[(2)] = inst_39155);

(statearr_39177_39194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (8))){
var inst_39143 = (state_39163[(7)]);
var inst_39144 = (state_39163[(9)]);
var inst_39133 = (state_39163[(10)]);
var inst_39142 = (state_39163[(8)]);
var inst_39147 = (function (){var cs = inst_39133;
var vec__39138 = inst_39142;
var v = inst_39143;
var c = inst_39144;
return ((function (cs,vec__39138,v,c,inst_39143,inst_39144,inst_39133,inst_39142,state_val_39164,c__29745__auto___39185,out){
return (function (p1__39129_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39129_SHARP_);
});
;})(cs,vec__39138,v,c,inst_39143,inst_39144,inst_39133,inst_39142,state_val_39164,c__29745__auto___39185,out))
})();
var inst_39148 = cljs.core.filterv.call(null,inst_39147,inst_39133);
var inst_39133__$1 = inst_39148;
var state_39163__$1 = (function (){var statearr_39178 = state_39163;
(statearr_39178[(10)] = inst_39133__$1);

return statearr_39178;
})();
var statearr_39179_39195 = state_39163__$1;
(statearr_39179_39195[(2)] = null);

(statearr_39179_39195[(1)] = (2));


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
});})(c__29745__auto___39185,out))
;
return ((function (switch__29657__auto__,c__29745__auto___39185,out){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_39180 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39180[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_39180[(1)] = (1));

return statearr_39180;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_39163){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39181){if((e39181 instanceof Object)){
var ex__29661__auto__ = e39181;
var statearr_39182_39196 = state_39163;
(statearr_39182_39196[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39197 = state_39163;
state_39163 = G__39197;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_39163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_39163);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39185,out))
})();
var state__29747__auto__ = (function (){var statearr_39183 = f__29746__auto__.call(null);
(statearr_39183[(6)] = c__29745__auto___39185);

return statearr_39183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39185,out))
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
var G__39199 = arguments.length;
switch (G__39199) {
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
var c__29745__auto___39244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39244,out){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39244,out){
return (function (state_39223){
var state_val_39224 = (state_39223[(1)]);
if((state_val_39224 === (7))){
var inst_39205 = (state_39223[(7)]);
var inst_39205__$1 = (state_39223[(2)]);
var inst_39206 = (inst_39205__$1 == null);
var inst_39207 = cljs.core.not.call(null,inst_39206);
var state_39223__$1 = (function (){var statearr_39225 = state_39223;
(statearr_39225[(7)] = inst_39205__$1);

return statearr_39225;
})();
if(inst_39207){
var statearr_39226_39245 = state_39223__$1;
(statearr_39226_39245[(1)] = (8));

} else {
var statearr_39227_39246 = state_39223__$1;
(statearr_39227_39246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39224 === (1))){
var inst_39200 = (0);
var state_39223__$1 = (function (){var statearr_39228 = state_39223;
(statearr_39228[(8)] = inst_39200);

return statearr_39228;
})();
var statearr_39229_39247 = state_39223__$1;
(statearr_39229_39247[(2)] = null);

(statearr_39229_39247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39224 === (4))){
var state_39223__$1 = state_39223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39223__$1,(7),ch);
} else {
if((state_val_39224 === (6))){
var inst_39218 = (state_39223[(2)]);
var state_39223__$1 = state_39223;
var statearr_39230_39248 = state_39223__$1;
(statearr_39230_39248[(2)] = inst_39218);

(statearr_39230_39248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39224 === (3))){
var inst_39220 = (state_39223[(2)]);
var inst_39221 = cljs.core.async.close_BANG_.call(null,out);
var state_39223__$1 = (function (){var statearr_39231 = state_39223;
(statearr_39231[(9)] = inst_39220);

return statearr_39231;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39223__$1,inst_39221);
} else {
if((state_val_39224 === (2))){
var inst_39200 = (state_39223[(8)]);
var inst_39202 = (inst_39200 < n);
var state_39223__$1 = state_39223;
if(cljs.core.truth_(inst_39202)){
var statearr_39232_39249 = state_39223__$1;
(statearr_39232_39249[(1)] = (4));

} else {
var statearr_39233_39250 = state_39223__$1;
(statearr_39233_39250[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39224 === (11))){
var inst_39200 = (state_39223[(8)]);
var inst_39210 = (state_39223[(2)]);
var inst_39211 = (inst_39200 + (1));
var inst_39200__$1 = inst_39211;
var state_39223__$1 = (function (){var statearr_39234 = state_39223;
(statearr_39234[(8)] = inst_39200__$1);

(statearr_39234[(10)] = inst_39210);

return statearr_39234;
})();
var statearr_39235_39251 = state_39223__$1;
(statearr_39235_39251[(2)] = null);

(statearr_39235_39251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39224 === (9))){
var state_39223__$1 = state_39223;
var statearr_39236_39252 = state_39223__$1;
(statearr_39236_39252[(2)] = null);

(statearr_39236_39252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39224 === (5))){
var state_39223__$1 = state_39223;
var statearr_39237_39253 = state_39223__$1;
(statearr_39237_39253[(2)] = null);

(statearr_39237_39253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39224 === (10))){
var inst_39215 = (state_39223[(2)]);
var state_39223__$1 = state_39223;
var statearr_39238_39254 = state_39223__$1;
(statearr_39238_39254[(2)] = inst_39215);

(statearr_39238_39254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39224 === (8))){
var inst_39205 = (state_39223[(7)]);
var state_39223__$1 = state_39223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39223__$1,(11),out,inst_39205);
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
});})(c__29745__auto___39244,out))
;
return ((function (switch__29657__auto__,c__29745__auto___39244,out){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_39239 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39239[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_39239[(1)] = (1));

return statearr_39239;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_39223){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39240){if((e39240 instanceof Object)){
var ex__29661__auto__ = e39240;
var statearr_39241_39255 = state_39223;
(statearr_39241_39255[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39256 = state_39223;
state_39223 = G__39256;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_39223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_39223);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39244,out))
})();
var state__29747__auto__ = (function (){var statearr_39242 = f__29746__auto__.call(null);
(statearr_39242[(6)] = c__29745__auto___39244);

return statearr_39242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39244,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39258 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39258 = (function (f,ch,meta39259){
this.f = f;
this.ch = ch;
this.meta39259 = meta39259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39260,meta39259__$1){
var self__ = this;
var _39260__$1 = this;
return (new cljs.core.async.t_cljs$core$async39258(self__.f,self__.ch,meta39259__$1));
});

cljs.core.async.t_cljs$core$async39258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39260){
var self__ = this;
var _39260__$1 = this;
return self__.meta39259;
});

cljs.core.async.t_cljs$core$async39258.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39258.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39258.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39258.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39258.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39261 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39261 = (function (f,ch,meta39259,_,fn1,meta39262){
this.f = f;
this.ch = ch;
this.meta39259 = meta39259;
this._ = _;
this.fn1 = fn1;
this.meta39262 = meta39262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39263,meta39262__$1){
var self__ = this;
var _39263__$1 = this;
return (new cljs.core.async.t_cljs$core$async39261(self__.f,self__.ch,self__.meta39259,self__._,self__.fn1,meta39262__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39261.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39263){
var self__ = this;
var _39263__$1 = this;
return self__.meta39262;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39261.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39261.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39257_SHARP_){
return f1.call(null,(((p1__39257_SHARP_ == null))?null:self__.f.call(null,p1__39257_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39261.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39259","meta39259",-776173605,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39258","cljs.core.async/t_cljs$core$async39258",928684641,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39262","meta39262",2070062431,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39261.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39261";

cljs.core.async.t_cljs$core$async39261.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39261");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39261 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39261(f__$1,ch__$1,meta39259__$1,___$2,fn1__$1,meta39262){
return (new cljs.core.async.t_cljs$core$async39261(f__$1,ch__$1,meta39259__$1,___$2,fn1__$1,meta39262));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39261(self__.f,self__.ch,self__.meta39259,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async39258.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39258.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39259","meta39259",-776173605,null)], null);
});

cljs.core.async.t_cljs$core$async39258.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39258";

cljs.core.async.t_cljs$core$async39258.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39258");
});

cljs.core.async.__GT_t_cljs$core$async39258 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39258(f__$1,ch__$1,meta39259){
return (new cljs.core.async.t_cljs$core$async39258(f__$1,ch__$1,meta39259));
});

}

return (new cljs.core.async.t_cljs$core$async39258(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39264 = (function (f,ch,meta39265){
this.f = f;
this.ch = ch;
this.meta39265 = meta39265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39266,meta39265__$1){
var self__ = this;
var _39266__$1 = this;
return (new cljs.core.async.t_cljs$core$async39264(self__.f,self__.ch,meta39265__$1));
});

cljs.core.async.t_cljs$core$async39264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39266){
var self__ = this;
var _39266__$1 = this;
return self__.meta39265;
});

cljs.core.async.t_cljs$core$async39264.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39264.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39264.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39265","meta39265",-1615527844,null)], null);
});

cljs.core.async.t_cljs$core$async39264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39264";

cljs.core.async.t_cljs$core$async39264.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39264");
});

cljs.core.async.__GT_t_cljs$core$async39264 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39264(f__$1,ch__$1,meta39265){
return (new cljs.core.async.t_cljs$core$async39264(f__$1,ch__$1,meta39265));
});

}

return (new cljs.core.async.t_cljs$core$async39264(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39267 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39267 = (function (p,ch,meta39268){
this.p = p;
this.ch = ch;
this.meta39268 = meta39268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39269,meta39268__$1){
var self__ = this;
var _39269__$1 = this;
return (new cljs.core.async.t_cljs$core$async39267(self__.p,self__.ch,meta39268__$1));
});

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39269){
var self__ = this;
var _39269__$1 = this;
return self__.meta39268;
});

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39268","meta39268",1736728731,null)], null);
});

cljs.core.async.t_cljs$core$async39267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39267";

cljs.core.async.t_cljs$core$async39267.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39267");
});

cljs.core.async.__GT_t_cljs$core$async39267 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39267(p__$1,ch__$1,meta39268){
return (new cljs.core.async.t_cljs$core$async39267(p__$1,ch__$1,meta39268));
});

}

return (new cljs.core.async.t_cljs$core$async39267(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39271 = arguments.length;
switch (G__39271) {
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
var c__29745__auto___39311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39311,out){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39311,out){
return (function (state_39292){
var state_val_39293 = (state_39292[(1)]);
if((state_val_39293 === (7))){
var inst_39288 = (state_39292[(2)]);
var state_39292__$1 = state_39292;
var statearr_39294_39312 = state_39292__$1;
(statearr_39294_39312[(2)] = inst_39288);

(statearr_39294_39312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39293 === (1))){
var state_39292__$1 = state_39292;
var statearr_39295_39313 = state_39292__$1;
(statearr_39295_39313[(2)] = null);

(statearr_39295_39313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39293 === (4))){
var inst_39274 = (state_39292[(7)]);
var inst_39274__$1 = (state_39292[(2)]);
var inst_39275 = (inst_39274__$1 == null);
var state_39292__$1 = (function (){var statearr_39296 = state_39292;
(statearr_39296[(7)] = inst_39274__$1);

return statearr_39296;
})();
if(cljs.core.truth_(inst_39275)){
var statearr_39297_39314 = state_39292__$1;
(statearr_39297_39314[(1)] = (5));

} else {
var statearr_39298_39315 = state_39292__$1;
(statearr_39298_39315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39293 === (6))){
var inst_39274 = (state_39292[(7)]);
var inst_39279 = p.call(null,inst_39274);
var state_39292__$1 = state_39292;
if(cljs.core.truth_(inst_39279)){
var statearr_39299_39316 = state_39292__$1;
(statearr_39299_39316[(1)] = (8));

} else {
var statearr_39300_39317 = state_39292__$1;
(statearr_39300_39317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39293 === (3))){
var inst_39290 = (state_39292[(2)]);
var state_39292__$1 = state_39292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39292__$1,inst_39290);
} else {
if((state_val_39293 === (2))){
var state_39292__$1 = state_39292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39292__$1,(4),ch);
} else {
if((state_val_39293 === (11))){
var inst_39282 = (state_39292[(2)]);
var state_39292__$1 = state_39292;
var statearr_39301_39318 = state_39292__$1;
(statearr_39301_39318[(2)] = inst_39282);

(statearr_39301_39318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39293 === (9))){
var state_39292__$1 = state_39292;
var statearr_39302_39319 = state_39292__$1;
(statearr_39302_39319[(2)] = null);

(statearr_39302_39319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39293 === (5))){
var inst_39277 = cljs.core.async.close_BANG_.call(null,out);
var state_39292__$1 = state_39292;
var statearr_39303_39320 = state_39292__$1;
(statearr_39303_39320[(2)] = inst_39277);

(statearr_39303_39320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39293 === (10))){
var inst_39285 = (state_39292[(2)]);
var state_39292__$1 = (function (){var statearr_39304 = state_39292;
(statearr_39304[(8)] = inst_39285);

return statearr_39304;
})();
var statearr_39305_39321 = state_39292__$1;
(statearr_39305_39321[(2)] = null);

(statearr_39305_39321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39293 === (8))){
var inst_39274 = (state_39292[(7)]);
var state_39292__$1 = state_39292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39292__$1,(11),out,inst_39274);
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
});})(c__29745__auto___39311,out))
;
return ((function (switch__29657__auto__,c__29745__auto___39311,out){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_39306 = [null,null,null,null,null,null,null,null,null];
(statearr_39306[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_39306[(1)] = (1));

return statearr_39306;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_39292){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39307){if((e39307 instanceof Object)){
var ex__29661__auto__ = e39307;
var statearr_39308_39322 = state_39292;
(statearr_39308_39322[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39323 = state_39292;
state_39292 = G__39323;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_39292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_39292);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39311,out))
})();
var state__29747__auto__ = (function (){var statearr_39309 = f__29746__auto__.call(null);
(statearr_39309[(6)] = c__29745__auto___39311);

return statearr_39309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39311,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39325 = arguments.length;
switch (G__39325) {
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
var c__29745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto__){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto__){
return (function (state_39388){
var state_val_39389 = (state_39388[(1)]);
if((state_val_39389 === (7))){
var inst_39384 = (state_39388[(2)]);
var state_39388__$1 = state_39388;
var statearr_39390_39428 = state_39388__$1;
(statearr_39390_39428[(2)] = inst_39384);

(statearr_39390_39428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (20))){
var inst_39354 = (state_39388[(7)]);
var inst_39365 = (state_39388[(2)]);
var inst_39366 = cljs.core.next.call(null,inst_39354);
var inst_39340 = inst_39366;
var inst_39341 = null;
var inst_39342 = (0);
var inst_39343 = (0);
var state_39388__$1 = (function (){var statearr_39391 = state_39388;
(statearr_39391[(8)] = inst_39342);

(statearr_39391[(9)] = inst_39340);

(statearr_39391[(10)] = inst_39343);

(statearr_39391[(11)] = inst_39365);

(statearr_39391[(12)] = inst_39341);

return statearr_39391;
})();
var statearr_39392_39429 = state_39388__$1;
(statearr_39392_39429[(2)] = null);

(statearr_39392_39429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (1))){
var state_39388__$1 = state_39388;
var statearr_39393_39430 = state_39388__$1;
(statearr_39393_39430[(2)] = null);

(statearr_39393_39430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (4))){
var inst_39329 = (state_39388[(13)]);
var inst_39329__$1 = (state_39388[(2)]);
var inst_39330 = (inst_39329__$1 == null);
var state_39388__$1 = (function (){var statearr_39394 = state_39388;
(statearr_39394[(13)] = inst_39329__$1);

return statearr_39394;
})();
if(cljs.core.truth_(inst_39330)){
var statearr_39395_39431 = state_39388__$1;
(statearr_39395_39431[(1)] = (5));

} else {
var statearr_39396_39432 = state_39388__$1;
(statearr_39396_39432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (15))){
var state_39388__$1 = state_39388;
var statearr_39400_39433 = state_39388__$1;
(statearr_39400_39433[(2)] = null);

(statearr_39400_39433[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (21))){
var state_39388__$1 = state_39388;
var statearr_39401_39434 = state_39388__$1;
(statearr_39401_39434[(2)] = null);

(statearr_39401_39434[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (13))){
var inst_39342 = (state_39388[(8)]);
var inst_39340 = (state_39388[(9)]);
var inst_39343 = (state_39388[(10)]);
var inst_39341 = (state_39388[(12)]);
var inst_39350 = (state_39388[(2)]);
var inst_39351 = (inst_39343 + (1));
var tmp39397 = inst_39342;
var tmp39398 = inst_39340;
var tmp39399 = inst_39341;
var inst_39340__$1 = tmp39398;
var inst_39341__$1 = tmp39399;
var inst_39342__$1 = tmp39397;
var inst_39343__$1 = inst_39351;
var state_39388__$1 = (function (){var statearr_39402 = state_39388;
(statearr_39402[(8)] = inst_39342__$1);

(statearr_39402[(9)] = inst_39340__$1);

(statearr_39402[(14)] = inst_39350);

(statearr_39402[(10)] = inst_39343__$1);

(statearr_39402[(12)] = inst_39341__$1);

return statearr_39402;
})();
var statearr_39403_39435 = state_39388__$1;
(statearr_39403_39435[(2)] = null);

(statearr_39403_39435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (22))){
var state_39388__$1 = state_39388;
var statearr_39404_39436 = state_39388__$1;
(statearr_39404_39436[(2)] = null);

(statearr_39404_39436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (6))){
var inst_39329 = (state_39388[(13)]);
var inst_39338 = f.call(null,inst_39329);
var inst_39339 = cljs.core.seq.call(null,inst_39338);
var inst_39340 = inst_39339;
var inst_39341 = null;
var inst_39342 = (0);
var inst_39343 = (0);
var state_39388__$1 = (function (){var statearr_39405 = state_39388;
(statearr_39405[(8)] = inst_39342);

(statearr_39405[(9)] = inst_39340);

(statearr_39405[(10)] = inst_39343);

(statearr_39405[(12)] = inst_39341);

return statearr_39405;
})();
var statearr_39406_39437 = state_39388__$1;
(statearr_39406_39437[(2)] = null);

(statearr_39406_39437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (17))){
var inst_39354 = (state_39388[(7)]);
var inst_39358 = cljs.core.chunk_first.call(null,inst_39354);
var inst_39359 = cljs.core.chunk_rest.call(null,inst_39354);
var inst_39360 = cljs.core.count.call(null,inst_39358);
var inst_39340 = inst_39359;
var inst_39341 = inst_39358;
var inst_39342 = inst_39360;
var inst_39343 = (0);
var state_39388__$1 = (function (){var statearr_39407 = state_39388;
(statearr_39407[(8)] = inst_39342);

(statearr_39407[(9)] = inst_39340);

(statearr_39407[(10)] = inst_39343);

(statearr_39407[(12)] = inst_39341);

return statearr_39407;
})();
var statearr_39408_39438 = state_39388__$1;
(statearr_39408_39438[(2)] = null);

(statearr_39408_39438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (3))){
var inst_39386 = (state_39388[(2)]);
var state_39388__$1 = state_39388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39388__$1,inst_39386);
} else {
if((state_val_39389 === (12))){
var inst_39374 = (state_39388[(2)]);
var state_39388__$1 = state_39388;
var statearr_39409_39439 = state_39388__$1;
(statearr_39409_39439[(2)] = inst_39374);

(statearr_39409_39439[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (2))){
var state_39388__$1 = state_39388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39388__$1,(4),in$);
} else {
if((state_val_39389 === (23))){
var inst_39382 = (state_39388[(2)]);
var state_39388__$1 = state_39388;
var statearr_39410_39440 = state_39388__$1;
(statearr_39410_39440[(2)] = inst_39382);

(statearr_39410_39440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (19))){
var inst_39369 = (state_39388[(2)]);
var state_39388__$1 = state_39388;
var statearr_39411_39441 = state_39388__$1;
(statearr_39411_39441[(2)] = inst_39369);

(statearr_39411_39441[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (11))){
var inst_39340 = (state_39388[(9)]);
var inst_39354 = (state_39388[(7)]);
var inst_39354__$1 = cljs.core.seq.call(null,inst_39340);
var state_39388__$1 = (function (){var statearr_39412 = state_39388;
(statearr_39412[(7)] = inst_39354__$1);

return statearr_39412;
})();
if(inst_39354__$1){
var statearr_39413_39442 = state_39388__$1;
(statearr_39413_39442[(1)] = (14));

} else {
var statearr_39414_39443 = state_39388__$1;
(statearr_39414_39443[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (9))){
var inst_39376 = (state_39388[(2)]);
var inst_39377 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39388__$1 = (function (){var statearr_39415 = state_39388;
(statearr_39415[(15)] = inst_39376);

return statearr_39415;
})();
if(cljs.core.truth_(inst_39377)){
var statearr_39416_39444 = state_39388__$1;
(statearr_39416_39444[(1)] = (21));

} else {
var statearr_39417_39445 = state_39388__$1;
(statearr_39417_39445[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (5))){
var inst_39332 = cljs.core.async.close_BANG_.call(null,out);
var state_39388__$1 = state_39388;
var statearr_39418_39446 = state_39388__$1;
(statearr_39418_39446[(2)] = inst_39332);

(statearr_39418_39446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (14))){
var inst_39354 = (state_39388[(7)]);
var inst_39356 = cljs.core.chunked_seq_QMARK_.call(null,inst_39354);
var state_39388__$1 = state_39388;
if(inst_39356){
var statearr_39419_39447 = state_39388__$1;
(statearr_39419_39447[(1)] = (17));

} else {
var statearr_39420_39448 = state_39388__$1;
(statearr_39420_39448[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (16))){
var inst_39372 = (state_39388[(2)]);
var state_39388__$1 = state_39388;
var statearr_39421_39449 = state_39388__$1;
(statearr_39421_39449[(2)] = inst_39372);

(statearr_39421_39449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39389 === (10))){
var inst_39343 = (state_39388[(10)]);
var inst_39341 = (state_39388[(12)]);
var inst_39348 = cljs.core._nth.call(null,inst_39341,inst_39343);
var state_39388__$1 = state_39388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39388__$1,(13),out,inst_39348);
} else {
if((state_val_39389 === (18))){
var inst_39354 = (state_39388[(7)]);
var inst_39363 = cljs.core.first.call(null,inst_39354);
var state_39388__$1 = state_39388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39388__$1,(20),out,inst_39363);
} else {
if((state_val_39389 === (8))){
var inst_39342 = (state_39388[(8)]);
var inst_39343 = (state_39388[(10)]);
var inst_39345 = (inst_39343 < inst_39342);
var inst_39346 = inst_39345;
var state_39388__$1 = state_39388;
if(cljs.core.truth_(inst_39346)){
var statearr_39422_39450 = state_39388__$1;
(statearr_39422_39450[(1)] = (10));

} else {
var statearr_39423_39451 = state_39388__$1;
(statearr_39423_39451[(1)] = (11));

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
});})(c__29745__auto__))
;
return ((function (switch__29657__auto__,c__29745__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____0 = (function (){
var statearr_39424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39424[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__);

(statearr_39424[(1)] = (1));

return statearr_39424;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____1 = (function (state_39388){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39425){if((e39425 instanceof Object)){
var ex__29661__auto__ = e39425;
var statearr_39426_39452 = state_39388;
(statearr_39426_39452[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39453 = state_39388;
state_39388 = G__39453;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__ = function(state_39388){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____1.call(this,state_39388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto__))
})();
var state__29747__auto__ = (function (){var statearr_39427 = f__29746__auto__.call(null);
(statearr_39427[(6)] = c__29745__auto__);

return statearr_39427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto__))
);

return c__29745__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39455 = arguments.length;
switch (G__39455) {
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
var G__39458 = arguments.length;
switch (G__39458) {
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
var G__39461 = arguments.length;
switch (G__39461) {
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
var c__29745__auto___39508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39508,out){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39508,out){
return (function (state_39485){
var state_val_39486 = (state_39485[(1)]);
if((state_val_39486 === (7))){
var inst_39480 = (state_39485[(2)]);
var state_39485__$1 = state_39485;
var statearr_39487_39509 = state_39485__$1;
(statearr_39487_39509[(2)] = inst_39480);

(statearr_39487_39509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39486 === (1))){
var inst_39462 = null;
var state_39485__$1 = (function (){var statearr_39488 = state_39485;
(statearr_39488[(7)] = inst_39462);

return statearr_39488;
})();
var statearr_39489_39510 = state_39485__$1;
(statearr_39489_39510[(2)] = null);

(statearr_39489_39510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39486 === (4))){
var inst_39465 = (state_39485[(8)]);
var inst_39465__$1 = (state_39485[(2)]);
var inst_39466 = (inst_39465__$1 == null);
var inst_39467 = cljs.core.not.call(null,inst_39466);
var state_39485__$1 = (function (){var statearr_39490 = state_39485;
(statearr_39490[(8)] = inst_39465__$1);

return statearr_39490;
})();
if(inst_39467){
var statearr_39491_39511 = state_39485__$1;
(statearr_39491_39511[(1)] = (5));

} else {
var statearr_39492_39512 = state_39485__$1;
(statearr_39492_39512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39486 === (6))){
var state_39485__$1 = state_39485;
var statearr_39493_39513 = state_39485__$1;
(statearr_39493_39513[(2)] = null);

(statearr_39493_39513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39486 === (3))){
var inst_39482 = (state_39485[(2)]);
var inst_39483 = cljs.core.async.close_BANG_.call(null,out);
var state_39485__$1 = (function (){var statearr_39494 = state_39485;
(statearr_39494[(9)] = inst_39482);

return statearr_39494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39485__$1,inst_39483);
} else {
if((state_val_39486 === (2))){
var state_39485__$1 = state_39485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39485__$1,(4),ch);
} else {
if((state_val_39486 === (11))){
var inst_39465 = (state_39485[(8)]);
var inst_39474 = (state_39485[(2)]);
var inst_39462 = inst_39465;
var state_39485__$1 = (function (){var statearr_39495 = state_39485;
(statearr_39495[(10)] = inst_39474);

(statearr_39495[(7)] = inst_39462);

return statearr_39495;
})();
var statearr_39496_39514 = state_39485__$1;
(statearr_39496_39514[(2)] = null);

(statearr_39496_39514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39486 === (9))){
var inst_39465 = (state_39485[(8)]);
var state_39485__$1 = state_39485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39485__$1,(11),out,inst_39465);
} else {
if((state_val_39486 === (5))){
var inst_39465 = (state_39485[(8)]);
var inst_39462 = (state_39485[(7)]);
var inst_39469 = cljs.core._EQ_.call(null,inst_39465,inst_39462);
var state_39485__$1 = state_39485;
if(inst_39469){
var statearr_39498_39515 = state_39485__$1;
(statearr_39498_39515[(1)] = (8));

} else {
var statearr_39499_39516 = state_39485__$1;
(statearr_39499_39516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39486 === (10))){
var inst_39477 = (state_39485[(2)]);
var state_39485__$1 = state_39485;
var statearr_39500_39517 = state_39485__$1;
(statearr_39500_39517[(2)] = inst_39477);

(statearr_39500_39517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39486 === (8))){
var inst_39462 = (state_39485[(7)]);
var tmp39497 = inst_39462;
var inst_39462__$1 = tmp39497;
var state_39485__$1 = (function (){var statearr_39501 = state_39485;
(statearr_39501[(7)] = inst_39462__$1);

return statearr_39501;
})();
var statearr_39502_39518 = state_39485__$1;
(statearr_39502_39518[(2)] = null);

(statearr_39502_39518[(1)] = (2));


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
});})(c__29745__auto___39508,out))
;
return ((function (switch__29657__auto__,c__29745__auto___39508,out){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_39503 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39503[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_39503[(1)] = (1));

return statearr_39503;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_39485){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39504){if((e39504 instanceof Object)){
var ex__29661__auto__ = e39504;
var statearr_39505_39519 = state_39485;
(statearr_39505_39519[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39520 = state_39485;
state_39485 = G__39520;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_39485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_39485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39508,out))
})();
var state__29747__auto__ = (function (){var statearr_39506 = f__29746__auto__.call(null);
(statearr_39506[(6)] = c__29745__auto___39508);

return statearr_39506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39508,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39522 = arguments.length;
switch (G__39522) {
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
var c__29745__auto___39588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39588,out){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39588,out){
return (function (state_39560){
var state_val_39561 = (state_39560[(1)]);
if((state_val_39561 === (7))){
var inst_39556 = (state_39560[(2)]);
var state_39560__$1 = state_39560;
var statearr_39562_39589 = state_39560__$1;
(statearr_39562_39589[(2)] = inst_39556);

(statearr_39562_39589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39561 === (1))){
var inst_39523 = (new Array(n));
var inst_39524 = inst_39523;
var inst_39525 = (0);
var state_39560__$1 = (function (){var statearr_39563 = state_39560;
(statearr_39563[(7)] = inst_39524);

(statearr_39563[(8)] = inst_39525);

return statearr_39563;
})();
var statearr_39564_39590 = state_39560__$1;
(statearr_39564_39590[(2)] = null);

(statearr_39564_39590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39561 === (4))){
var inst_39528 = (state_39560[(9)]);
var inst_39528__$1 = (state_39560[(2)]);
var inst_39529 = (inst_39528__$1 == null);
var inst_39530 = cljs.core.not.call(null,inst_39529);
var state_39560__$1 = (function (){var statearr_39565 = state_39560;
(statearr_39565[(9)] = inst_39528__$1);

return statearr_39565;
})();
if(inst_39530){
var statearr_39566_39591 = state_39560__$1;
(statearr_39566_39591[(1)] = (5));

} else {
var statearr_39567_39592 = state_39560__$1;
(statearr_39567_39592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39561 === (15))){
var inst_39550 = (state_39560[(2)]);
var state_39560__$1 = state_39560;
var statearr_39568_39593 = state_39560__$1;
(statearr_39568_39593[(2)] = inst_39550);

(statearr_39568_39593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39561 === (13))){
var state_39560__$1 = state_39560;
var statearr_39569_39594 = state_39560__$1;
(statearr_39569_39594[(2)] = null);

(statearr_39569_39594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39561 === (6))){
var inst_39525 = (state_39560[(8)]);
var inst_39546 = (inst_39525 > (0));
var state_39560__$1 = state_39560;
if(cljs.core.truth_(inst_39546)){
var statearr_39570_39595 = state_39560__$1;
(statearr_39570_39595[(1)] = (12));

} else {
var statearr_39571_39596 = state_39560__$1;
(statearr_39571_39596[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39561 === (3))){
var inst_39558 = (state_39560[(2)]);
var state_39560__$1 = state_39560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39560__$1,inst_39558);
} else {
if((state_val_39561 === (12))){
var inst_39524 = (state_39560[(7)]);
var inst_39548 = cljs.core.vec.call(null,inst_39524);
var state_39560__$1 = state_39560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39560__$1,(15),out,inst_39548);
} else {
if((state_val_39561 === (2))){
var state_39560__$1 = state_39560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39560__$1,(4),ch);
} else {
if((state_val_39561 === (11))){
var inst_39540 = (state_39560[(2)]);
var inst_39541 = (new Array(n));
var inst_39524 = inst_39541;
var inst_39525 = (0);
var state_39560__$1 = (function (){var statearr_39572 = state_39560;
(statearr_39572[(7)] = inst_39524);

(statearr_39572[(8)] = inst_39525);

(statearr_39572[(10)] = inst_39540);

return statearr_39572;
})();
var statearr_39573_39597 = state_39560__$1;
(statearr_39573_39597[(2)] = null);

(statearr_39573_39597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39561 === (9))){
var inst_39524 = (state_39560[(7)]);
var inst_39538 = cljs.core.vec.call(null,inst_39524);
var state_39560__$1 = state_39560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39560__$1,(11),out,inst_39538);
} else {
if((state_val_39561 === (5))){
var inst_39533 = (state_39560[(11)]);
var inst_39524 = (state_39560[(7)]);
var inst_39525 = (state_39560[(8)]);
var inst_39528 = (state_39560[(9)]);
var inst_39532 = (inst_39524[inst_39525] = inst_39528);
var inst_39533__$1 = (inst_39525 + (1));
var inst_39534 = (inst_39533__$1 < n);
var state_39560__$1 = (function (){var statearr_39574 = state_39560;
(statearr_39574[(11)] = inst_39533__$1);

(statearr_39574[(12)] = inst_39532);

return statearr_39574;
})();
if(cljs.core.truth_(inst_39534)){
var statearr_39575_39598 = state_39560__$1;
(statearr_39575_39598[(1)] = (8));

} else {
var statearr_39576_39599 = state_39560__$1;
(statearr_39576_39599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39561 === (14))){
var inst_39553 = (state_39560[(2)]);
var inst_39554 = cljs.core.async.close_BANG_.call(null,out);
var state_39560__$1 = (function (){var statearr_39578 = state_39560;
(statearr_39578[(13)] = inst_39553);

return statearr_39578;
})();
var statearr_39579_39600 = state_39560__$1;
(statearr_39579_39600[(2)] = inst_39554);

(statearr_39579_39600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39561 === (10))){
var inst_39544 = (state_39560[(2)]);
var state_39560__$1 = state_39560;
var statearr_39580_39601 = state_39560__$1;
(statearr_39580_39601[(2)] = inst_39544);

(statearr_39580_39601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39561 === (8))){
var inst_39533 = (state_39560[(11)]);
var inst_39524 = (state_39560[(7)]);
var tmp39577 = inst_39524;
var inst_39524__$1 = tmp39577;
var inst_39525 = inst_39533;
var state_39560__$1 = (function (){var statearr_39581 = state_39560;
(statearr_39581[(7)] = inst_39524__$1);

(statearr_39581[(8)] = inst_39525);

return statearr_39581;
})();
var statearr_39582_39602 = state_39560__$1;
(statearr_39582_39602[(2)] = null);

(statearr_39582_39602[(1)] = (2));


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
});})(c__29745__auto___39588,out))
;
return ((function (switch__29657__auto__,c__29745__auto___39588,out){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_39583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39583[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_39583[(1)] = (1));

return statearr_39583;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_39560){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39584){if((e39584 instanceof Object)){
var ex__29661__auto__ = e39584;
var statearr_39585_39603 = state_39560;
(statearr_39585_39603[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39604 = state_39560;
state_39560 = G__39604;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_39560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_39560);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39588,out))
})();
var state__29747__auto__ = (function (){var statearr_39586 = f__29746__auto__.call(null);
(statearr_39586[(6)] = c__29745__auto___39588);

return statearr_39586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39588,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39606 = arguments.length;
switch (G__39606) {
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
var c__29745__auto___39676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39676,out){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39676,out){
return (function (state_39648){
var state_val_39649 = (state_39648[(1)]);
if((state_val_39649 === (7))){
var inst_39644 = (state_39648[(2)]);
var state_39648__$1 = state_39648;
var statearr_39650_39677 = state_39648__$1;
(statearr_39650_39677[(2)] = inst_39644);

(statearr_39650_39677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (1))){
var inst_39607 = [];
var inst_39608 = inst_39607;
var inst_39609 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39648__$1 = (function (){var statearr_39651 = state_39648;
(statearr_39651[(7)] = inst_39609);

(statearr_39651[(8)] = inst_39608);

return statearr_39651;
})();
var statearr_39652_39678 = state_39648__$1;
(statearr_39652_39678[(2)] = null);

(statearr_39652_39678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (4))){
var inst_39612 = (state_39648[(9)]);
var inst_39612__$1 = (state_39648[(2)]);
var inst_39613 = (inst_39612__$1 == null);
var inst_39614 = cljs.core.not.call(null,inst_39613);
var state_39648__$1 = (function (){var statearr_39653 = state_39648;
(statearr_39653[(9)] = inst_39612__$1);

return statearr_39653;
})();
if(inst_39614){
var statearr_39654_39679 = state_39648__$1;
(statearr_39654_39679[(1)] = (5));

} else {
var statearr_39655_39680 = state_39648__$1;
(statearr_39655_39680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (15))){
var inst_39638 = (state_39648[(2)]);
var state_39648__$1 = state_39648;
var statearr_39656_39681 = state_39648__$1;
(statearr_39656_39681[(2)] = inst_39638);

(statearr_39656_39681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (13))){
var state_39648__$1 = state_39648;
var statearr_39657_39682 = state_39648__$1;
(statearr_39657_39682[(2)] = null);

(statearr_39657_39682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (6))){
var inst_39608 = (state_39648[(8)]);
var inst_39633 = inst_39608.length;
var inst_39634 = (inst_39633 > (0));
var state_39648__$1 = state_39648;
if(cljs.core.truth_(inst_39634)){
var statearr_39658_39683 = state_39648__$1;
(statearr_39658_39683[(1)] = (12));

} else {
var statearr_39659_39684 = state_39648__$1;
(statearr_39659_39684[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (3))){
var inst_39646 = (state_39648[(2)]);
var state_39648__$1 = state_39648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39648__$1,inst_39646);
} else {
if((state_val_39649 === (12))){
var inst_39608 = (state_39648[(8)]);
var inst_39636 = cljs.core.vec.call(null,inst_39608);
var state_39648__$1 = state_39648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39648__$1,(15),out,inst_39636);
} else {
if((state_val_39649 === (2))){
var state_39648__$1 = state_39648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39648__$1,(4),ch);
} else {
if((state_val_39649 === (11))){
var inst_39616 = (state_39648[(10)]);
var inst_39612 = (state_39648[(9)]);
var inst_39626 = (state_39648[(2)]);
var inst_39627 = [];
var inst_39628 = inst_39627.push(inst_39612);
var inst_39608 = inst_39627;
var inst_39609 = inst_39616;
var state_39648__$1 = (function (){var statearr_39660 = state_39648;
(statearr_39660[(7)] = inst_39609);

(statearr_39660[(8)] = inst_39608);

(statearr_39660[(11)] = inst_39628);

(statearr_39660[(12)] = inst_39626);

return statearr_39660;
})();
var statearr_39661_39685 = state_39648__$1;
(statearr_39661_39685[(2)] = null);

(statearr_39661_39685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (9))){
var inst_39608 = (state_39648[(8)]);
var inst_39624 = cljs.core.vec.call(null,inst_39608);
var state_39648__$1 = state_39648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39648__$1,(11),out,inst_39624);
} else {
if((state_val_39649 === (5))){
var inst_39609 = (state_39648[(7)]);
var inst_39616 = (state_39648[(10)]);
var inst_39612 = (state_39648[(9)]);
var inst_39616__$1 = f.call(null,inst_39612);
var inst_39617 = cljs.core._EQ_.call(null,inst_39616__$1,inst_39609);
var inst_39618 = cljs.core.keyword_identical_QMARK_.call(null,inst_39609,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39619 = (inst_39617) || (inst_39618);
var state_39648__$1 = (function (){var statearr_39662 = state_39648;
(statearr_39662[(10)] = inst_39616__$1);

return statearr_39662;
})();
if(cljs.core.truth_(inst_39619)){
var statearr_39663_39686 = state_39648__$1;
(statearr_39663_39686[(1)] = (8));

} else {
var statearr_39664_39687 = state_39648__$1;
(statearr_39664_39687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (14))){
var inst_39641 = (state_39648[(2)]);
var inst_39642 = cljs.core.async.close_BANG_.call(null,out);
var state_39648__$1 = (function (){var statearr_39666 = state_39648;
(statearr_39666[(13)] = inst_39641);

return statearr_39666;
})();
var statearr_39667_39688 = state_39648__$1;
(statearr_39667_39688[(2)] = inst_39642);

(statearr_39667_39688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (10))){
var inst_39631 = (state_39648[(2)]);
var state_39648__$1 = state_39648;
var statearr_39668_39689 = state_39648__$1;
(statearr_39668_39689[(2)] = inst_39631);

(statearr_39668_39689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39649 === (8))){
var inst_39608 = (state_39648[(8)]);
var inst_39616 = (state_39648[(10)]);
var inst_39612 = (state_39648[(9)]);
var inst_39621 = inst_39608.push(inst_39612);
var tmp39665 = inst_39608;
var inst_39608__$1 = tmp39665;
var inst_39609 = inst_39616;
var state_39648__$1 = (function (){var statearr_39669 = state_39648;
(statearr_39669[(7)] = inst_39609);

(statearr_39669[(14)] = inst_39621);

(statearr_39669[(8)] = inst_39608__$1);

return statearr_39669;
})();
var statearr_39670_39690 = state_39648__$1;
(statearr_39670_39690[(2)] = null);

(statearr_39670_39690[(1)] = (2));


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
});})(c__29745__auto___39676,out))
;
return ((function (switch__29657__auto__,c__29745__auto___39676,out){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_39671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39671[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_39671[(1)] = (1));

return statearr_39671;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_39648){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39672){if((e39672 instanceof Object)){
var ex__29661__auto__ = e39672;
var statearr_39673_39691 = state_39648;
(statearr_39673_39691[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39692 = state_39648;
state_39648 = G__39692;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_39648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_39648);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39676,out))
})();
var state__29747__auto__ = (function (){var statearr_39674 = f__29746__auto__.call(null);
(statearr_39674[(6)] = c__29745__auto___39676);

return statearr_39674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39676,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1514366062777
