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
var G__39395 = arguments.length;
switch (G__39395) {
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
if(typeof cljs.core.async.t_cljs$core$async39396 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39396 = (function (f,blockable,meta39397){
this.f = f;
this.blockable = blockable;
this.meta39397 = meta39397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39398,meta39397__$1){
var self__ = this;
var _39398__$1 = this;
return (new cljs.core.async.t_cljs$core$async39396(self__.f,self__.blockable,meta39397__$1));
});

cljs.core.async.t_cljs$core$async39396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39398){
var self__ = this;
var _39398__$1 = this;
return self__.meta39397;
});

cljs.core.async.t_cljs$core$async39396.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39396.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39397","meta39397",1782713907,null)], null);
});

cljs.core.async.t_cljs$core$async39396.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39396";

cljs.core.async.t_cljs$core$async39396.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39396");
});

cljs.core.async.__GT_t_cljs$core$async39396 = (function cljs$core$async$__GT_t_cljs$core$async39396(f__$1,blockable__$1,meta39397){
return (new cljs.core.async.t_cljs$core$async39396(f__$1,blockable__$1,meta39397));
});

}

return (new cljs.core.async.t_cljs$core$async39396(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39402 = arguments.length;
switch (G__39402) {
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
var G__39405 = arguments.length;
switch (G__39405) {
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
var G__39408 = arguments.length;
switch (G__39408) {
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
var val_39410 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39410);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39410,ret){
return (function (){
return fn1.call(null,val_39410);
});})(val_39410,ret))
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
var G__39412 = arguments.length;
switch (G__39412) {
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
var n__28140__auto___39414 = n;
var x_39415 = (0);
while(true){
if((x_39415 < n__28140__auto___39414)){
(a[x_39415] = (0));

var G__39416 = (x_39415 + (1));
x_39415 = G__39416;
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

var G__39417 = (i + (1));
i = G__39417;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39418 = (function (flag,meta39419){
this.flag = flag;
this.meta39419 = meta39419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39420,meta39419__$1){
var self__ = this;
var _39420__$1 = this;
return (new cljs.core.async.t_cljs$core$async39418(self__.flag,meta39419__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39420){
var self__ = this;
var _39420__$1 = this;
return self__.meta39419;
});})(flag))
;

cljs.core.async.t_cljs$core$async39418.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39418.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39418.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39418.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39418.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39419","meta39419",-809736253,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39418";

cljs.core.async.t_cljs$core$async39418.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39418");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39418 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39418(flag__$1,meta39419){
return (new cljs.core.async.t_cljs$core$async39418(flag__$1,meta39419));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39418(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39421 = (function (flag,cb,meta39422){
this.flag = flag;
this.cb = cb;
this.meta39422 = meta39422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39423,meta39422__$1){
var self__ = this;
var _39423__$1 = this;
return (new cljs.core.async.t_cljs$core$async39421(self__.flag,self__.cb,meta39422__$1));
});

cljs.core.async.t_cljs$core$async39421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39423){
var self__ = this;
var _39423__$1 = this;
return self__.meta39422;
});

cljs.core.async.t_cljs$core$async39421.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39421.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39421.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39421.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39422","meta39422",345951866,null)], null);
});

cljs.core.async.t_cljs$core$async39421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39421";

cljs.core.async.t_cljs$core$async39421.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39421");
});

cljs.core.async.__GT_t_cljs$core$async39421 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39421(flag__$1,cb__$1,meta39422){
return (new cljs.core.async.t_cljs$core$async39421(flag__$1,cb__$1,meta39422));
});

}

return (new cljs.core.async.t_cljs$core$async39421(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39424_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39424_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39425_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39425_SHARP_,port], null));
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
var G__39426 = (i + (1));
i = G__39426;
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
var len__28364__auto___39432 = arguments.length;
var i__28365__auto___39433 = (0);
while(true){
if((i__28365__auto___39433 < len__28364__auto___39432)){
args__28371__auto__.push((arguments[i__28365__auto___39433]));

var G__39434 = (i__28365__auto___39433 + (1));
i__28365__auto___39433 = G__39434;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39429){
var map__39430 = p__39429;
var map__39430__$1 = ((((!((map__39430 == null)))?((((map__39430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39430):map__39430);
var opts = map__39430__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39427){
var G__39428 = cljs.core.first.call(null,seq39427);
var seq39427__$1 = cljs.core.next.call(null,seq39427);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39428,seq39427__$1);
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
var G__39436 = arguments.length;
switch (G__39436) {
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
var c__30624__auto___39482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___39482){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___39482){
return (function (state_39460){
var state_val_39461 = (state_39460[(1)]);
if((state_val_39461 === (7))){
var inst_39456 = (state_39460[(2)]);
var state_39460__$1 = state_39460;
var statearr_39462_39483 = state_39460__$1;
(statearr_39462_39483[(2)] = inst_39456);

(statearr_39462_39483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (1))){
var state_39460__$1 = state_39460;
var statearr_39463_39484 = state_39460__$1;
(statearr_39463_39484[(2)] = null);

(statearr_39463_39484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (4))){
var inst_39439 = (state_39460[(7)]);
var inst_39439__$1 = (state_39460[(2)]);
var inst_39440 = (inst_39439__$1 == null);
var state_39460__$1 = (function (){var statearr_39464 = state_39460;
(statearr_39464[(7)] = inst_39439__$1);

return statearr_39464;
})();
if(cljs.core.truth_(inst_39440)){
var statearr_39465_39485 = state_39460__$1;
(statearr_39465_39485[(1)] = (5));

} else {
var statearr_39466_39486 = state_39460__$1;
(statearr_39466_39486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (13))){
var state_39460__$1 = state_39460;
var statearr_39467_39487 = state_39460__$1;
(statearr_39467_39487[(2)] = null);

(statearr_39467_39487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (6))){
var inst_39439 = (state_39460[(7)]);
var state_39460__$1 = state_39460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39460__$1,(11),to,inst_39439);
} else {
if((state_val_39461 === (3))){
var inst_39458 = (state_39460[(2)]);
var state_39460__$1 = state_39460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39460__$1,inst_39458);
} else {
if((state_val_39461 === (12))){
var state_39460__$1 = state_39460;
var statearr_39468_39488 = state_39460__$1;
(statearr_39468_39488[(2)] = null);

(statearr_39468_39488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (2))){
var state_39460__$1 = state_39460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39460__$1,(4),from);
} else {
if((state_val_39461 === (11))){
var inst_39449 = (state_39460[(2)]);
var state_39460__$1 = state_39460;
if(cljs.core.truth_(inst_39449)){
var statearr_39469_39489 = state_39460__$1;
(statearr_39469_39489[(1)] = (12));

} else {
var statearr_39470_39490 = state_39460__$1;
(statearr_39470_39490[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (9))){
var state_39460__$1 = state_39460;
var statearr_39471_39491 = state_39460__$1;
(statearr_39471_39491[(2)] = null);

(statearr_39471_39491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (5))){
var state_39460__$1 = state_39460;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39472_39492 = state_39460__$1;
(statearr_39472_39492[(1)] = (8));

} else {
var statearr_39473_39493 = state_39460__$1;
(statearr_39473_39493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (14))){
var inst_39454 = (state_39460[(2)]);
var state_39460__$1 = state_39460;
var statearr_39474_39494 = state_39460__$1;
(statearr_39474_39494[(2)] = inst_39454);

(statearr_39474_39494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (10))){
var inst_39446 = (state_39460[(2)]);
var state_39460__$1 = state_39460;
var statearr_39475_39495 = state_39460__$1;
(statearr_39475_39495[(2)] = inst_39446);

(statearr_39475_39495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39461 === (8))){
var inst_39443 = cljs.core.async.close_BANG_.call(null,to);
var state_39460__$1 = state_39460;
var statearr_39476_39496 = state_39460__$1;
(statearr_39476_39496[(2)] = inst_39443);

(statearr_39476_39496[(1)] = (10));


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
});})(c__30624__auto___39482))
;
return ((function (switch__30536__auto__,c__30624__auto___39482){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_39477 = [null,null,null,null,null,null,null,null];
(statearr_39477[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_39477[(1)] = (1));

return statearr_39477;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_39460){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39478){if((e39478 instanceof Object)){
var ex__30540__auto__ = e39478;
var statearr_39479_39497 = state_39460;
(statearr_39479_39497[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39498 = state_39460;
state_39460 = G__39498;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_39460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_39460);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___39482))
})();
var state__30626__auto__ = (function (){var statearr_39480 = f__30625__auto__.call(null);
(statearr_39480[(6)] = c__30624__auto___39482);

return statearr_39480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___39482))
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
return (function (p__39499){
var vec__39500 = p__39499;
var v = cljs.core.nth.call(null,vec__39500,(0),null);
var p = cljs.core.nth.call(null,vec__39500,(1),null);
var job = vec__39500;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30624__auto___39671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___39671,res,vec__39500,v,p,job,jobs,results){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___39671,res,vec__39500,v,p,job,jobs,results){
return (function (state_39507){
var state_val_39508 = (state_39507[(1)]);
if((state_val_39508 === (1))){
var state_39507__$1 = state_39507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39507__$1,(2),res,v);
} else {
if((state_val_39508 === (2))){
var inst_39504 = (state_39507[(2)]);
var inst_39505 = cljs.core.async.close_BANG_.call(null,res);
var state_39507__$1 = (function (){var statearr_39509 = state_39507;
(statearr_39509[(7)] = inst_39504);

return statearr_39509;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39507__$1,inst_39505);
} else {
return null;
}
}
});})(c__30624__auto___39671,res,vec__39500,v,p,job,jobs,results))
;
return ((function (switch__30536__auto__,c__30624__auto___39671,res,vec__39500,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39510 = [null,null,null,null,null,null,null,null];
(statearr_39510[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39510[(1)] = (1));

return statearr_39510;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39507){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39511){if((e39511 instanceof Object)){
var ex__30540__auto__ = e39511;
var statearr_39512_39672 = state_39507;
(statearr_39512_39672[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39673 = state_39507;
state_39507 = G__39673;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___39671,res,vec__39500,v,p,job,jobs,results))
})();
var state__30626__auto__ = (function (){var statearr_39513 = f__30625__auto__.call(null);
(statearr_39513[(6)] = c__30624__auto___39671);

return statearr_39513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___39671,res,vec__39500,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39514){
var vec__39515 = p__39514;
var v = cljs.core.nth.call(null,vec__39515,(0),null);
var p = cljs.core.nth.call(null,vec__39515,(1),null);
var job = vec__39515;
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
var n__28140__auto___39674 = n;
var __39675 = (0);
while(true){
if((__39675 < n__28140__auto___39674)){
var G__39518_39676 = type;
var G__39518_39677__$1 = (((G__39518_39676 instanceof cljs.core.Keyword))?G__39518_39676.fqn:null);
switch (G__39518_39677__$1) {
case "compute":
var c__30624__auto___39679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39675,c__30624__auto___39679,G__39518_39676,G__39518_39677__$1,n__28140__auto___39674,jobs,results,process,async){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (__39675,c__30624__auto___39679,G__39518_39676,G__39518_39677__$1,n__28140__auto___39674,jobs,results,process,async){
return (function (state_39531){
var state_val_39532 = (state_39531[(1)]);
if((state_val_39532 === (1))){
var state_39531__$1 = state_39531;
var statearr_39533_39680 = state_39531__$1;
(statearr_39533_39680[(2)] = null);

(statearr_39533_39680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39532 === (2))){
var state_39531__$1 = state_39531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39531__$1,(4),jobs);
} else {
if((state_val_39532 === (3))){
var inst_39529 = (state_39531[(2)]);
var state_39531__$1 = state_39531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39531__$1,inst_39529);
} else {
if((state_val_39532 === (4))){
var inst_39521 = (state_39531[(2)]);
var inst_39522 = process.call(null,inst_39521);
var state_39531__$1 = state_39531;
if(cljs.core.truth_(inst_39522)){
var statearr_39534_39681 = state_39531__$1;
(statearr_39534_39681[(1)] = (5));

} else {
var statearr_39535_39682 = state_39531__$1;
(statearr_39535_39682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39532 === (5))){
var state_39531__$1 = state_39531;
var statearr_39536_39683 = state_39531__$1;
(statearr_39536_39683[(2)] = null);

(statearr_39536_39683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39532 === (6))){
var state_39531__$1 = state_39531;
var statearr_39537_39684 = state_39531__$1;
(statearr_39537_39684[(2)] = null);

(statearr_39537_39684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39532 === (7))){
var inst_39527 = (state_39531[(2)]);
var state_39531__$1 = state_39531;
var statearr_39538_39685 = state_39531__$1;
(statearr_39538_39685[(2)] = inst_39527);

(statearr_39538_39685[(1)] = (3));


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
});})(__39675,c__30624__auto___39679,G__39518_39676,G__39518_39677__$1,n__28140__auto___39674,jobs,results,process,async))
;
return ((function (__39675,switch__30536__auto__,c__30624__auto___39679,G__39518_39676,G__39518_39677__$1,n__28140__auto___39674,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39539 = [null,null,null,null,null,null,null];
(statearr_39539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39539[(1)] = (1));

return statearr_39539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39531){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39540){if((e39540 instanceof Object)){
var ex__30540__auto__ = e39540;
var statearr_39541_39686 = state_39531;
(statearr_39541_39686[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39687 = state_39531;
state_39531 = G__39687;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39531){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39531);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(__39675,switch__30536__auto__,c__30624__auto___39679,G__39518_39676,G__39518_39677__$1,n__28140__auto___39674,jobs,results,process,async))
})();
var state__30626__auto__ = (function (){var statearr_39542 = f__30625__auto__.call(null);
(statearr_39542[(6)] = c__30624__auto___39679);

return statearr_39542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(__39675,c__30624__auto___39679,G__39518_39676,G__39518_39677__$1,n__28140__auto___39674,jobs,results,process,async))
);


break;
case "async":
var c__30624__auto___39688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39675,c__30624__auto___39688,G__39518_39676,G__39518_39677__$1,n__28140__auto___39674,jobs,results,process,async){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (__39675,c__30624__auto___39688,G__39518_39676,G__39518_39677__$1,n__28140__auto___39674,jobs,results,process,async){
return (function (state_39555){
var state_val_39556 = (state_39555[(1)]);
if((state_val_39556 === (1))){
var state_39555__$1 = state_39555;
var statearr_39557_39689 = state_39555__$1;
(statearr_39557_39689[(2)] = null);

(statearr_39557_39689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (2))){
var state_39555__$1 = state_39555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39555__$1,(4),jobs);
} else {
if((state_val_39556 === (3))){
var inst_39553 = (state_39555[(2)]);
var state_39555__$1 = state_39555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39555__$1,inst_39553);
} else {
if((state_val_39556 === (4))){
var inst_39545 = (state_39555[(2)]);
var inst_39546 = async.call(null,inst_39545);
var state_39555__$1 = state_39555;
if(cljs.core.truth_(inst_39546)){
var statearr_39558_39690 = state_39555__$1;
(statearr_39558_39690[(1)] = (5));

} else {
var statearr_39559_39691 = state_39555__$1;
(statearr_39559_39691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (5))){
var state_39555__$1 = state_39555;
var statearr_39560_39692 = state_39555__$1;
(statearr_39560_39692[(2)] = null);

(statearr_39560_39692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (6))){
var state_39555__$1 = state_39555;
var statearr_39561_39693 = state_39555__$1;
(statearr_39561_39693[(2)] = null);

(statearr_39561_39693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (7))){
var inst_39551 = (state_39555[(2)]);
var state_39555__$1 = state_39555;
var statearr_39562_39694 = state_39555__$1;
(statearr_39562_39694[(2)] = inst_39551);

(statearr_39562_39694[(1)] = (3));


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
});})(__39675,c__30624__auto___39688,G__39518_39676,G__39518_39677__$1,n__28140__auto___39674,jobs,results,process,async))
;
return ((function (__39675,switch__30536__auto__,c__30624__auto___39688,G__39518_39676,G__39518_39677__$1,n__28140__auto___39674,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39563 = [null,null,null,null,null,null,null];
(statearr_39563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39563[(1)] = (1));

return statearr_39563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39555){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39564){if((e39564 instanceof Object)){
var ex__30540__auto__ = e39564;
var statearr_39565_39695 = state_39555;
(statearr_39565_39695[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39696 = state_39555;
state_39555 = G__39696;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39555){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39555);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(__39675,switch__30536__auto__,c__30624__auto___39688,G__39518_39676,G__39518_39677__$1,n__28140__auto___39674,jobs,results,process,async))
})();
var state__30626__auto__ = (function (){var statearr_39566 = f__30625__auto__.call(null);
(statearr_39566[(6)] = c__30624__auto___39688);

return statearr_39566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(__39675,c__30624__auto___39688,G__39518_39676,G__39518_39677__$1,n__28140__auto___39674,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39518_39677__$1)].join('')));

}

var G__39697 = (__39675 + (1));
__39675 = G__39697;
continue;
} else {
}
break;
}

var c__30624__auto___39698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___39698,jobs,results,process,async){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___39698,jobs,results,process,async){
return (function (state_39588){
var state_val_39589 = (state_39588[(1)]);
if((state_val_39589 === (1))){
var state_39588__$1 = state_39588;
var statearr_39590_39699 = state_39588__$1;
(statearr_39590_39699[(2)] = null);

(statearr_39590_39699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39589 === (2))){
var state_39588__$1 = state_39588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39588__$1,(4),from);
} else {
if((state_val_39589 === (3))){
var inst_39586 = (state_39588[(2)]);
var state_39588__$1 = state_39588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39588__$1,inst_39586);
} else {
if((state_val_39589 === (4))){
var inst_39569 = (state_39588[(7)]);
var inst_39569__$1 = (state_39588[(2)]);
var inst_39570 = (inst_39569__$1 == null);
var state_39588__$1 = (function (){var statearr_39591 = state_39588;
(statearr_39591[(7)] = inst_39569__$1);

return statearr_39591;
})();
if(cljs.core.truth_(inst_39570)){
var statearr_39592_39700 = state_39588__$1;
(statearr_39592_39700[(1)] = (5));

} else {
var statearr_39593_39701 = state_39588__$1;
(statearr_39593_39701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39589 === (5))){
var inst_39572 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39588__$1 = state_39588;
var statearr_39594_39702 = state_39588__$1;
(statearr_39594_39702[(2)] = inst_39572);

(statearr_39594_39702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39589 === (6))){
var inst_39574 = (state_39588[(8)]);
var inst_39569 = (state_39588[(7)]);
var inst_39574__$1 = cljs.core.async.chan.call(null,(1));
var inst_39575 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39576 = [inst_39569,inst_39574__$1];
var inst_39577 = (new cljs.core.PersistentVector(null,2,(5),inst_39575,inst_39576,null));
var state_39588__$1 = (function (){var statearr_39595 = state_39588;
(statearr_39595[(8)] = inst_39574__$1);

return statearr_39595;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39588__$1,(8),jobs,inst_39577);
} else {
if((state_val_39589 === (7))){
var inst_39584 = (state_39588[(2)]);
var state_39588__$1 = state_39588;
var statearr_39596_39703 = state_39588__$1;
(statearr_39596_39703[(2)] = inst_39584);

(statearr_39596_39703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39589 === (8))){
var inst_39574 = (state_39588[(8)]);
var inst_39579 = (state_39588[(2)]);
var state_39588__$1 = (function (){var statearr_39597 = state_39588;
(statearr_39597[(9)] = inst_39579);

return statearr_39597;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39588__$1,(9),results,inst_39574);
} else {
if((state_val_39589 === (9))){
var inst_39581 = (state_39588[(2)]);
var state_39588__$1 = (function (){var statearr_39598 = state_39588;
(statearr_39598[(10)] = inst_39581);

return statearr_39598;
})();
var statearr_39599_39704 = state_39588__$1;
(statearr_39599_39704[(2)] = null);

(statearr_39599_39704[(1)] = (2));


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
});})(c__30624__auto___39698,jobs,results,process,async))
;
return ((function (switch__30536__auto__,c__30624__auto___39698,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0 = (function (){
var statearr_39600 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39600[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39600[(1)] = (1));

return statearr_39600;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39588){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39601){if((e39601 instanceof Object)){
var ex__30540__auto__ = e39601;
var statearr_39602_39705 = state_39588;
(statearr_39602_39705[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39706 = state_39588;
state_39588 = G__39706;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39588){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39588);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___39698,jobs,results,process,async))
})();
var state__30626__auto__ = (function (){var statearr_39603 = f__30625__auto__.call(null);
(statearr_39603[(6)] = c__30624__auto___39698);

return statearr_39603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___39698,jobs,results,process,async))
);


var c__30624__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto__,jobs,results,process,async){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto__,jobs,results,process,async){
return (function (state_39641){
var state_val_39642 = (state_39641[(1)]);
if((state_val_39642 === (7))){
var inst_39637 = (state_39641[(2)]);
var state_39641__$1 = state_39641;
var statearr_39643_39707 = state_39641__$1;
(statearr_39643_39707[(2)] = inst_39637);

(statearr_39643_39707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (20))){
var state_39641__$1 = state_39641;
var statearr_39644_39708 = state_39641__$1;
(statearr_39644_39708[(2)] = null);

(statearr_39644_39708[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (1))){
var state_39641__$1 = state_39641;
var statearr_39645_39709 = state_39641__$1;
(statearr_39645_39709[(2)] = null);

(statearr_39645_39709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (4))){
var inst_39606 = (state_39641[(7)]);
var inst_39606__$1 = (state_39641[(2)]);
var inst_39607 = (inst_39606__$1 == null);
var state_39641__$1 = (function (){var statearr_39646 = state_39641;
(statearr_39646[(7)] = inst_39606__$1);

return statearr_39646;
})();
if(cljs.core.truth_(inst_39607)){
var statearr_39647_39710 = state_39641__$1;
(statearr_39647_39710[(1)] = (5));

} else {
var statearr_39648_39711 = state_39641__$1;
(statearr_39648_39711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (15))){
var inst_39619 = (state_39641[(8)]);
var state_39641__$1 = state_39641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39641__$1,(18),to,inst_39619);
} else {
if((state_val_39642 === (21))){
var inst_39632 = (state_39641[(2)]);
var state_39641__$1 = state_39641;
var statearr_39649_39712 = state_39641__$1;
(statearr_39649_39712[(2)] = inst_39632);

(statearr_39649_39712[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (13))){
var inst_39634 = (state_39641[(2)]);
var state_39641__$1 = (function (){var statearr_39650 = state_39641;
(statearr_39650[(9)] = inst_39634);

return statearr_39650;
})();
var statearr_39651_39713 = state_39641__$1;
(statearr_39651_39713[(2)] = null);

(statearr_39651_39713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (6))){
var inst_39606 = (state_39641[(7)]);
var state_39641__$1 = state_39641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39641__$1,(11),inst_39606);
} else {
if((state_val_39642 === (17))){
var inst_39627 = (state_39641[(2)]);
var state_39641__$1 = state_39641;
if(cljs.core.truth_(inst_39627)){
var statearr_39652_39714 = state_39641__$1;
(statearr_39652_39714[(1)] = (19));

} else {
var statearr_39653_39715 = state_39641__$1;
(statearr_39653_39715[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (3))){
var inst_39639 = (state_39641[(2)]);
var state_39641__$1 = state_39641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39641__$1,inst_39639);
} else {
if((state_val_39642 === (12))){
var inst_39616 = (state_39641[(10)]);
var state_39641__$1 = state_39641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39641__$1,(14),inst_39616);
} else {
if((state_val_39642 === (2))){
var state_39641__$1 = state_39641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39641__$1,(4),results);
} else {
if((state_val_39642 === (19))){
var state_39641__$1 = state_39641;
var statearr_39654_39716 = state_39641__$1;
(statearr_39654_39716[(2)] = null);

(statearr_39654_39716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (11))){
var inst_39616 = (state_39641[(2)]);
var state_39641__$1 = (function (){var statearr_39655 = state_39641;
(statearr_39655[(10)] = inst_39616);

return statearr_39655;
})();
var statearr_39656_39717 = state_39641__$1;
(statearr_39656_39717[(2)] = null);

(statearr_39656_39717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (9))){
var state_39641__$1 = state_39641;
var statearr_39657_39718 = state_39641__$1;
(statearr_39657_39718[(2)] = null);

(statearr_39657_39718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (5))){
var state_39641__$1 = state_39641;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39658_39719 = state_39641__$1;
(statearr_39658_39719[(1)] = (8));

} else {
var statearr_39659_39720 = state_39641__$1;
(statearr_39659_39720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (14))){
var inst_39619 = (state_39641[(8)]);
var inst_39621 = (state_39641[(11)]);
var inst_39619__$1 = (state_39641[(2)]);
var inst_39620 = (inst_39619__$1 == null);
var inst_39621__$1 = cljs.core.not.call(null,inst_39620);
var state_39641__$1 = (function (){var statearr_39660 = state_39641;
(statearr_39660[(8)] = inst_39619__$1);

(statearr_39660[(11)] = inst_39621__$1);

return statearr_39660;
})();
if(inst_39621__$1){
var statearr_39661_39721 = state_39641__$1;
(statearr_39661_39721[(1)] = (15));

} else {
var statearr_39662_39722 = state_39641__$1;
(statearr_39662_39722[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (16))){
var inst_39621 = (state_39641[(11)]);
var state_39641__$1 = state_39641;
var statearr_39663_39723 = state_39641__$1;
(statearr_39663_39723[(2)] = inst_39621);

(statearr_39663_39723[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (10))){
var inst_39613 = (state_39641[(2)]);
var state_39641__$1 = state_39641;
var statearr_39664_39724 = state_39641__$1;
(statearr_39664_39724[(2)] = inst_39613);

(statearr_39664_39724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (18))){
var inst_39624 = (state_39641[(2)]);
var state_39641__$1 = state_39641;
var statearr_39665_39725 = state_39641__$1;
(statearr_39665_39725[(2)] = inst_39624);

(statearr_39665_39725[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39642 === (8))){
var inst_39610 = cljs.core.async.close_BANG_.call(null,to);
var state_39641__$1 = state_39641;
var statearr_39666_39726 = state_39641__$1;
(statearr_39666_39726[(2)] = inst_39610);

(statearr_39666_39726[(1)] = (10));


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
var statearr_39667 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39667[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__);

(statearr_39667[(1)] = (1));

return statearr_39667;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1 = (function (state_39641){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39668){if((e39668 instanceof Object)){
var ex__30540__auto__ = e39668;
var statearr_39669_39727 = state_39641;
(statearr_39669_39727[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39728 = state_39641;
state_39641 = G__39728;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__ = function(state_39641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1.call(this,state_39641);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__,jobs,results,process,async))
})();
var state__30626__auto__ = (function (){var statearr_39670 = f__30625__auto__.call(null);
(statearr_39670[(6)] = c__30624__auto__);

return statearr_39670;
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
var G__39730 = arguments.length;
switch (G__39730) {
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
var G__39733 = arguments.length;
switch (G__39733) {
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
var G__39736 = arguments.length;
switch (G__39736) {
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
var c__30624__auto___39785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___39785,tc,fc){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___39785,tc,fc){
return (function (state_39762){
var state_val_39763 = (state_39762[(1)]);
if((state_val_39763 === (7))){
var inst_39758 = (state_39762[(2)]);
var state_39762__$1 = state_39762;
var statearr_39764_39786 = state_39762__$1;
(statearr_39764_39786[(2)] = inst_39758);

(statearr_39764_39786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39763 === (1))){
var state_39762__$1 = state_39762;
var statearr_39765_39787 = state_39762__$1;
(statearr_39765_39787[(2)] = null);

(statearr_39765_39787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39763 === (4))){
var inst_39739 = (state_39762[(7)]);
var inst_39739__$1 = (state_39762[(2)]);
var inst_39740 = (inst_39739__$1 == null);
var state_39762__$1 = (function (){var statearr_39766 = state_39762;
(statearr_39766[(7)] = inst_39739__$1);

return statearr_39766;
})();
if(cljs.core.truth_(inst_39740)){
var statearr_39767_39788 = state_39762__$1;
(statearr_39767_39788[(1)] = (5));

} else {
var statearr_39768_39789 = state_39762__$1;
(statearr_39768_39789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39763 === (13))){
var state_39762__$1 = state_39762;
var statearr_39769_39790 = state_39762__$1;
(statearr_39769_39790[(2)] = null);

(statearr_39769_39790[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39763 === (6))){
var inst_39739 = (state_39762[(7)]);
var inst_39745 = p.call(null,inst_39739);
var state_39762__$1 = state_39762;
if(cljs.core.truth_(inst_39745)){
var statearr_39770_39791 = state_39762__$1;
(statearr_39770_39791[(1)] = (9));

} else {
var statearr_39771_39792 = state_39762__$1;
(statearr_39771_39792[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39763 === (3))){
var inst_39760 = (state_39762[(2)]);
var state_39762__$1 = state_39762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39762__$1,inst_39760);
} else {
if((state_val_39763 === (12))){
var state_39762__$1 = state_39762;
var statearr_39772_39793 = state_39762__$1;
(statearr_39772_39793[(2)] = null);

(statearr_39772_39793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39763 === (2))){
var state_39762__$1 = state_39762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39762__$1,(4),ch);
} else {
if((state_val_39763 === (11))){
var inst_39739 = (state_39762[(7)]);
var inst_39749 = (state_39762[(2)]);
var state_39762__$1 = state_39762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39762__$1,(8),inst_39749,inst_39739);
} else {
if((state_val_39763 === (9))){
var state_39762__$1 = state_39762;
var statearr_39773_39794 = state_39762__$1;
(statearr_39773_39794[(2)] = tc);

(statearr_39773_39794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39763 === (5))){
var inst_39742 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39743 = cljs.core.async.close_BANG_.call(null,fc);
var state_39762__$1 = (function (){var statearr_39774 = state_39762;
(statearr_39774[(8)] = inst_39742);

return statearr_39774;
})();
var statearr_39775_39795 = state_39762__$1;
(statearr_39775_39795[(2)] = inst_39743);

(statearr_39775_39795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39763 === (14))){
var inst_39756 = (state_39762[(2)]);
var state_39762__$1 = state_39762;
var statearr_39776_39796 = state_39762__$1;
(statearr_39776_39796[(2)] = inst_39756);

(statearr_39776_39796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39763 === (10))){
var state_39762__$1 = state_39762;
var statearr_39777_39797 = state_39762__$1;
(statearr_39777_39797[(2)] = fc);

(statearr_39777_39797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39763 === (8))){
var inst_39751 = (state_39762[(2)]);
var state_39762__$1 = state_39762;
if(cljs.core.truth_(inst_39751)){
var statearr_39778_39798 = state_39762__$1;
(statearr_39778_39798[(1)] = (12));

} else {
var statearr_39779_39799 = state_39762__$1;
(statearr_39779_39799[(1)] = (13));

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
});})(c__30624__auto___39785,tc,fc))
;
return ((function (switch__30536__auto__,c__30624__auto___39785,tc,fc){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_39780 = [null,null,null,null,null,null,null,null,null];
(statearr_39780[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_39780[(1)] = (1));

return statearr_39780;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_39762){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39781){if((e39781 instanceof Object)){
var ex__30540__auto__ = e39781;
var statearr_39782_39800 = state_39762;
(statearr_39782_39800[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39801 = state_39762;
state_39762 = G__39801;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_39762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_39762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___39785,tc,fc))
})();
var state__30626__auto__ = (function (){var statearr_39783 = f__30625__auto__.call(null);
(statearr_39783[(6)] = c__30624__auto___39785);

return statearr_39783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___39785,tc,fc))
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
return (function (state_39822){
var state_val_39823 = (state_39822[(1)]);
if((state_val_39823 === (7))){
var inst_39818 = (state_39822[(2)]);
var state_39822__$1 = state_39822;
var statearr_39824_39842 = state_39822__$1;
(statearr_39824_39842[(2)] = inst_39818);

(statearr_39824_39842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (1))){
var inst_39802 = init;
var state_39822__$1 = (function (){var statearr_39825 = state_39822;
(statearr_39825[(7)] = inst_39802);

return statearr_39825;
})();
var statearr_39826_39843 = state_39822__$1;
(statearr_39826_39843[(2)] = null);

(statearr_39826_39843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (4))){
var inst_39805 = (state_39822[(8)]);
var inst_39805__$1 = (state_39822[(2)]);
var inst_39806 = (inst_39805__$1 == null);
var state_39822__$1 = (function (){var statearr_39827 = state_39822;
(statearr_39827[(8)] = inst_39805__$1);

return statearr_39827;
})();
if(cljs.core.truth_(inst_39806)){
var statearr_39828_39844 = state_39822__$1;
(statearr_39828_39844[(1)] = (5));

} else {
var statearr_39829_39845 = state_39822__$1;
(statearr_39829_39845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (6))){
var inst_39809 = (state_39822[(9)]);
var inst_39802 = (state_39822[(7)]);
var inst_39805 = (state_39822[(8)]);
var inst_39809__$1 = f.call(null,inst_39802,inst_39805);
var inst_39810 = cljs.core.reduced_QMARK_.call(null,inst_39809__$1);
var state_39822__$1 = (function (){var statearr_39830 = state_39822;
(statearr_39830[(9)] = inst_39809__$1);

return statearr_39830;
})();
if(inst_39810){
var statearr_39831_39846 = state_39822__$1;
(statearr_39831_39846[(1)] = (8));

} else {
var statearr_39832_39847 = state_39822__$1;
(statearr_39832_39847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (3))){
var inst_39820 = (state_39822[(2)]);
var state_39822__$1 = state_39822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39822__$1,inst_39820);
} else {
if((state_val_39823 === (2))){
var state_39822__$1 = state_39822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39822__$1,(4),ch);
} else {
if((state_val_39823 === (9))){
var inst_39809 = (state_39822[(9)]);
var inst_39802 = inst_39809;
var state_39822__$1 = (function (){var statearr_39833 = state_39822;
(statearr_39833[(7)] = inst_39802);

return statearr_39833;
})();
var statearr_39834_39848 = state_39822__$1;
(statearr_39834_39848[(2)] = null);

(statearr_39834_39848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (5))){
var inst_39802 = (state_39822[(7)]);
var state_39822__$1 = state_39822;
var statearr_39835_39849 = state_39822__$1;
(statearr_39835_39849[(2)] = inst_39802);

(statearr_39835_39849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (10))){
var inst_39816 = (state_39822[(2)]);
var state_39822__$1 = state_39822;
var statearr_39836_39850 = state_39822__$1;
(statearr_39836_39850[(2)] = inst_39816);

(statearr_39836_39850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39823 === (8))){
var inst_39809 = (state_39822[(9)]);
var inst_39812 = cljs.core.deref.call(null,inst_39809);
var state_39822__$1 = state_39822;
var statearr_39837_39851 = state_39822__$1;
(statearr_39837_39851[(2)] = inst_39812);

(statearr_39837_39851[(1)] = (10));


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
var statearr_39838 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39838[(0)] = cljs$core$async$reduce_$_state_machine__30537__auto__);

(statearr_39838[(1)] = (1));

return statearr_39838;
});
var cljs$core$async$reduce_$_state_machine__30537__auto____1 = (function (state_39822){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39839){if((e39839 instanceof Object)){
var ex__30540__auto__ = e39839;
var statearr_39840_39852 = state_39822;
(statearr_39840_39852[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39853 = state_39822;
state_39822 = G__39853;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30537__auto__ = function(state_39822){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30537__auto____1.call(this,state_39822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30537__auto____0;
cljs$core$async$reduce_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30537__auto____1;
return cljs$core$async$reduce_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_39841 = f__30625__auto__.call(null);
(statearr_39841[(6)] = c__30624__auto__);

return statearr_39841;
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
var G__39855 = arguments.length;
switch (G__39855) {
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
return (function (state_39880){
var state_val_39881 = (state_39880[(1)]);
if((state_val_39881 === (7))){
var inst_39862 = (state_39880[(2)]);
var state_39880__$1 = state_39880;
var statearr_39882_39903 = state_39880__$1;
(statearr_39882_39903[(2)] = inst_39862);

(statearr_39882_39903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39881 === (1))){
var inst_39856 = cljs.core.seq.call(null,coll);
var inst_39857 = inst_39856;
var state_39880__$1 = (function (){var statearr_39883 = state_39880;
(statearr_39883[(7)] = inst_39857);

return statearr_39883;
})();
var statearr_39884_39904 = state_39880__$1;
(statearr_39884_39904[(2)] = null);

(statearr_39884_39904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39881 === (4))){
var inst_39857 = (state_39880[(7)]);
var inst_39860 = cljs.core.first.call(null,inst_39857);
var state_39880__$1 = state_39880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39880__$1,(7),ch,inst_39860);
} else {
if((state_val_39881 === (13))){
var inst_39874 = (state_39880[(2)]);
var state_39880__$1 = state_39880;
var statearr_39885_39905 = state_39880__$1;
(statearr_39885_39905[(2)] = inst_39874);

(statearr_39885_39905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39881 === (6))){
var inst_39865 = (state_39880[(2)]);
var state_39880__$1 = state_39880;
if(cljs.core.truth_(inst_39865)){
var statearr_39886_39906 = state_39880__$1;
(statearr_39886_39906[(1)] = (8));

} else {
var statearr_39887_39907 = state_39880__$1;
(statearr_39887_39907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39881 === (3))){
var inst_39878 = (state_39880[(2)]);
var state_39880__$1 = state_39880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39880__$1,inst_39878);
} else {
if((state_val_39881 === (12))){
var state_39880__$1 = state_39880;
var statearr_39888_39908 = state_39880__$1;
(statearr_39888_39908[(2)] = null);

(statearr_39888_39908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39881 === (2))){
var inst_39857 = (state_39880[(7)]);
var state_39880__$1 = state_39880;
if(cljs.core.truth_(inst_39857)){
var statearr_39889_39909 = state_39880__$1;
(statearr_39889_39909[(1)] = (4));

} else {
var statearr_39890_39910 = state_39880__$1;
(statearr_39890_39910[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39881 === (11))){
var inst_39871 = cljs.core.async.close_BANG_.call(null,ch);
var state_39880__$1 = state_39880;
var statearr_39891_39911 = state_39880__$1;
(statearr_39891_39911[(2)] = inst_39871);

(statearr_39891_39911[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39881 === (9))){
var state_39880__$1 = state_39880;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39892_39912 = state_39880__$1;
(statearr_39892_39912[(1)] = (11));

} else {
var statearr_39893_39913 = state_39880__$1;
(statearr_39893_39913[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39881 === (5))){
var inst_39857 = (state_39880[(7)]);
var state_39880__$1 = state_39880;
var statearr_39894_39914 = state_39880__$1;
(statearr_39894_39914[(2)] = inst_39857);

(statearr_39894_39914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39881 === (10))){
var inst_39876 = (state_39880[(2)]);
var state_39880__$1 = state_39880;
var statearr_39895_39915 = state_39880__$1;
(statearr_39895_39915[(2)] = inst_39876);

(statearr_39895_39915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39881 === (8))){
var inst_39857 = (state_39880[(7)]);
var inst_39867 = cljs.core.next.call(null,inst_39857);
var inst_39857__$1 = inst_39867;
var state_39880__$1 = (function (){var statearr_39896 = state_39880;
(statearr_39896[(7)] = inst_39857__$1);

return statearr_39896;
})();
var statearr_39897_39916 = state_39880__$1;
(statearr_39897_39916[(2)] = null);

(statearr_39897_39916[(1)] = (2));


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
var statearr_39898 = [null,null,null,null,null,null,null,null];
(statearr_39898[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_39898[(1)] = (1));

return statearr_39898;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_39880){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_39880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e39899){if((e39899 instanceof Object)){
var ex__30540__auto__ = e39899;
var statearr_39900_39917 = state_39880;
(statearr_39900_39917[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39918 = state_39880;
state_39880 = G__39918;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_39880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_39880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_39901 = f__30625__auto__.call(null);
(statearr_39901[(6)] = c__30624__auto__);

return statearr_39901;
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
if(typeof cljs.core.async.t_cljs$core$async39919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39919 = (function (ch,cs,meta39920){
this.ch = ch;
this.cs = cs;
this.meta39920 = meta39920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39921,meta39920__$1){
var self__ = this;
var _39921__$1 = this;
return (new cljs.core.async.t_cljs$core$async39919(self__.ch,self__.cs,meta39920__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39921){
var self__ = this;
var _39921__$1 = this;
return self__.meta39920;
});})(cs))
;

cljs.core.async.t_cljs$core$async39919.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39919.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39919.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39919.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39919.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39919.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39919.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39920","meta39920",1662941432,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39919";

cljs.core.async.t_cljs$core$async39919.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39919");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39919 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39919(ch__$1,cs__$1,meta39920){
return (new cljs.core.async.t_cljs$core$async39919(ch__$1,cs__$1,meta39920));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39919(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30624__auto___40141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40141,cs,m,dchan,dctr,done){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40141,cs,m,dchan,dctr,done){
return (function (state_40056){
var state_val_40057 = (state_40056[(1)]);
if((state_val_40057 === (7))){
var inst_40052 = (state_40056[(2)]);
var state_40056__$1 = state_40056;
var statearr_40058_40142 = state_40056__$1;
(statearr_40058_40142[(2)] = inst_40052);

(statearr_40058_40142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (20))){
var inst_39955 = (state_40056[(7)]);
var inst_39967 = cljs.core.first.call(null,inst_39955);
var inst_39968 = cljs.core.nth.call(null,inst_39967,(0),null);
var inst_39969 = cljs.core.nth.call(null,inst_39967,(1),null);
var state_40056__$1 = (function (){var statearr_40059 = state_40056;
(statearr_40059[(8)] = inst_39968);

return statearr_40059;
})();
if(cljs.core.truth_(inst_39969)){
var statearr_40060_40143 = state_40056__$1;
(statearr_40060_40143[(1)] = (22));

} else {
var statearr_40061_40144 = state_40056__$1;
(statearr_40061_40144[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (27))){
var inst_40004 = (state_40056[(9)]);
var inst_39997 = (state_40056[(10)]);
var inst_39999 = (state_40056[(11)]);
var inst_39924 = (state_40056[(12)]);
var inst_40004__$1 = cljs.core._nth.call(null,inst_39997,inst_39999);
var inst_40005 = cljs.core.async.put_BANG_.call(null,inst_40004__$1,inst_39924,done);
var state_40056__$1 = (function (){var statearr_40062 = state_40056;
(statearr_40062[(9)] = inst_40004__$1);

return statearr_40062;
})();
if(cljs.core.truth_(inst_40005)){
var statearr_40063_40145 = state_40056__$1;
(statearr_40063_40145[(1)] = (30));

} else {
var statearr_40064_40146 = state_40056__$1;
(statearr_40064_40146[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (1))){
var state_40056__$1 = state_40056;
var statearr_40065_40147 = state_40056__$1;
(statearr_40065_40147[(2)] = null);

(statearr_40065_40147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (24))){
var inst_39955 = (state_40056[(7)]);
var inst_39974 = (state_40056[(2)]);
var inst_39975 = cljs.core.next.call(null,inst_39955);
var inst_39933 = inst_39975;
var inst_39934 = null;
var inst_39935 = (0);
var inst_39936 = (0);
var state_40056__$1 = (function (){var statearr_40066 = state_40056;
(statearr_40066[(13)] = inst_39936);

(statearr_40066[(14)] = inst_39934);

(statearr_40066[(15)] = inst_39933);

(statearr_40066[(16)] = inst_39935);

(statearr_40066[(17)] = inst_39974);

return statearr_40066;
})();
var statearr_40067_40148 = state_40056__$1;
(statearr_40067_40148[(2)] = null);

(statearr_40067_40148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (39))){
var state_40056__$1 = state_40056;
var statearr_40071_40149 = state_40056__$1;
(statearr_40071_40149[(2)] = null);

(statearr_40071_40149[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (4))){
var inst_39924 = (state_40056[(12)]);
var inst_39924__$1 = (state_40056[(2)]);
var inst_39925 = (inst_39924__$1 == null);
var state_40056__$1 = (function (){var statearr_40072 = state_40056;
(statearr_40072[(12)] = inst_39924__$1);

return statearr_40072;
})();
if(cljs.core.truth_(inst_39925)){
var statearr_40073_40150 = state_40056__$1;
(statearr_40073_40150[(1)] = (5));

} else {
var statearr_40074_40151 = state_40056__$1;
(statearr_40074_40151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (15))){
var inst_39936 = (state_40056[(13)]);
var inst_39934 = (state_40056[(14)]);
var inst_39933 = (state_40056[(15)]);
var inst_39935 = (state_40056[(16)]);
var inst_39951 = (state_40056[(2)]);
var inst_39952 = (inst_39936 + (1));
var tmp40068 = inst_39934;
var tmp40069 = inst_39933;
var tmp40070 = inst_39935;
var inst_39933__$1 = tmp40069;
var inst_39934__$1 = tmp40068;
var inst_39935__$1 = tmp40070;
var inst_39936__$1 = inst_39952;
var state_40056__$1 = (function (){var statearr_40075 = state_40056;
(statearr_40075[(18)] = inst_39951);

(statearr_40075[(13)] = inst_39936__$1);

(statearr_40075[(14)] = inst_39934__$1);

(statearr_40075[(15)] = inst_39933__$1);

(statearr_40075[(16)] = inst_39935__$1);

return statearr_40075;
})();
var statearr_40076_40152 = state_40056__$1;
(statearr_40076_40152[(2)] = null);

(statearr_40076_40152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (21))){
var inst_39978 = (state_40056[(2)]);
var state_40056__$1 = state_40056;
var statearr_40080_40153 = state_40056__$1;
(statearr_40080_40153[(2)] = inst_39978);

(statearr_40080_40153[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (31))){
var inst_40004 = (state_40056[(9)]);
var inst_40008 = done.call(null,null);
var inst_40009 = cljs.core.async.untap_STAR_.call(null,m,inst_40004);
var state_40056__$1 = (function (){var statearr_40081 = state_40056;
(statearr_40081[(19)] = inst_40008);

return statearr_40081;
})();
var statearr_40082_40154 = state_40056__$1;
(statearr_40082_40154[(2)] = inst_40009);

(statearr_40082_40154[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (32))){
var inst_39997 = (state_40056[(10)]);
var inst_39999 = (state_40056[(11)]);
var inst_39998 = (state_40056[(20)]);
var inst_39996 = (state_40056[(21)]);
var inst_40011 = (state_40056[(2)]);
var inst_40012 = (inst_39999 + (1));
var tmp40077 = inst_39997;
var tmp40078 = inst_39998;
var tmp40079 = inst_39996;
var inst_39996__$1 = tmp40079;
var inst_39997__$1 = tmp40077;
var inst_39998__$1 = tmp40078;
var inst_39999__$1 = inst_40012;
var state_40056__$1 = (function (){var statearr_40083 = state_40056;
(statearr_40083[(10)] = inst_39997__$1);

(statearr_40083[(11)] = inst_39999__$1);

(statearr_40083[(20)] = inst_39998__$1);

(statearr_40083[(22)] = inst_40011);

(statearr_40083[(21)] = inst_39996__$1);

return statearr_40083;
})();
var statearr_40084_40155 = state_40056__$1;
(statearr_40084_40155[(2)] = null);

(statearr_40084_40155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (40))){
var inst_40024 = (state_40056[(23)]);
var inst_40028 = done.call(null,null);
var inst_40029 = cljs.core.async.untap_STAR_.call(null,m,inst_40024);
var state_40056__$1 = (function (){var statearr_40085 = state_40056;
(statearr_40085[(24)] = inst_40028);

return statearr_40085;
})();
var statearr_40086_40156 = state_40056__$1;
(statearr_40086_40156[(2)] = inst_40029);

(statearr_40086_40156[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (33))){
var inst_40015 = (state_40056[(25)]);
var inst_40017 = cljs.core.chunked_seq_QMARK_.call(null,inst_40015);
var state_40056__$1 = state_40056;
if(inst_40017){
var statearr_40087_40157 = state_40056__$1;
(statearr_40087_40157[(1)] = (36));

} else {
var statearr_40088_40158 = state_40056__$1;
(statearr_40088_40158[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (13))){
var inst_39945 = (state_40056[(26)]);
var inst_39948 = cljs.core.async.close_BANG_.call(null,inst_39945);
var state_40056__$1 = state_40056;
var statearr_40089_40159 = state_40056__$1;
(statearr_40089_40159[(2)] = inst_39948);

(statearr_40089_40159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (22))){
var inst_39968 = (state_40056[(8)]);
var inst_39971 = cljs.core.async.close_BANG_.call(null,inst_39968);
var state_40056__$1 = state_40056;
var statearr_40090_40160 = state_40056__$1;
(statearr_40090_40160[(2)] = inst_39971);

(statearr_40090_40160[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (36))){
var inst_40015 = (state_40056[(25)]);
var inst_40019 = cljs.core.chunk_first.call(null,inst_40015);
var inst_40020 = cljs.core.chunk_rest.call(null,inst_40015);
var inst_40021 = cljs.core.count.call(null,inst_40019);
var inst_39996 = inst_40020;
var inst_39997 = inst_40019;
var inst_39998 = inst_40021;
var inst_39999 = (0);
var state_40056__$1 = (function (){var statearr_40091 = state_40056;
(statearr_40091[(10)] = inst_39997);

(statearr_40091[(11)] = inst_39999);

(statearr_40091[(20)] = inst_39998);

(statearr_40091[(21)] = inst_39996);

return statearr_40091;
})();
var statearr_40092_40161 = state_40056__$1;
(statearr_40092_40161[(2)] = null);

(statearr_40092_40161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (41))){
var inst_40015 = (state_40056[(25)]);
var inst_40031 = (state_40056[(2)]);
var inst_40032 = cljs.core.next.call(null,inst_40015);
var inst_39996 = inst_40032;
var inst_39997 = null;
var inst_39998 = (0);
var inst_39999 = (0);
var state_40056__$1 = (function (){var statearr_40093 = state_40056;
(statearr_40093[(10)] = inst_39997);

(statearr_40093[(11)] = inst_39999);

(statearr_40093[(27)] = inst_40031);

(statearr_40093[(20)] = inst_39998);

(statearr_40093[(21)] = inst_39996);

return statearr_40093;
})();
var statearr_40094_40162 = state_40056__$1;
(statearr_40094_40162[(2)] = null);

(statearr_40094_40162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (43))){
var state_40056__$1 = state_40056;
var statearr_40095_40163 = state_40056__$1;
(statearr_40095_40163[(2)] = null);

(statearr_40095_40163[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (29))){
var inst_40040 = (state_40056[(2)]);
var state_40056__$1 = state_40056;
var statearr_40096_40164 = state_40056__$1;
(statearr_40096_40164[(2)] = inst_40040);

(statearr_40096_40164[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (44))){
var inst_40049 = (state_40056[(2)]);
var state_40056__$1 = (function (){var statearr_40097 = state_40056;
(statearr_40097[(28)] = inst_40049);

return statearr_40097;
})();
var statearr_40098_40165 = state_40056__$1;
(statearr_40098_40165[(2)] = null);

(statearr_40098_40165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (6))){
var inst_39988 = (state_40056[(29)]);
var inst_39987 = cljs.core.deref.call(null,cs);
var inst_39988__$1 = cljs.core.keys.call(null,inst_39987);
var inst_39989 = cljs.core.count.call(null,inst_39988__$1);
var inst_39990 = cljs.core.reset_BANG_.call(null,dctr,inst_39989);
var inst_39995 = cljs.core.seq.call(null,inst_39988__$1);
var inst_39996 = inst_39995;
var inst_39997 = null;
var inst_39998 = (0);
var inst_39999 = (0);
var state_40056__$1 = (function (){var statearr_40099 = state_40056;
(statearr_40099[(29)] = inst_39988__$1);

(statearr_40099[(10)] = inst_39997);

(statearr_40099[(11)] = inst_39999);

(statearr_40099[(20)] = inst_39998);

(statearr_40099[(30)] = inst_39990);

(statearr_40099[(21)] = inst_39996);

return statearr_40099;
})();
var statearr_40100_40166 = state_40056__$1;
(statearr_40100_40166[(2)] = null);

(statearr_40100_40166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (28))){
var inst_40015 = (state_40056[(25)]);
var inst_39996 = (state_40056[(21)]);
var inst_40015__$1 = cljs.core.seq.call(null,inst_39996);
var state_40056__$1 = (function (){var statearr_40101 = state_40056;
(statearr_40101[(25)] = inst_40015__$1);

return statearr_40101;
})();
if(inst_40015__$1){
var statearr_40102_40167 = state_40056__$1;
(statearr_40102_40167[(1)] = (33));

} else {
var statearr_40103_40168 = state_40056__$1;
(statearr_40103_40168[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (25))){
var inst_39999 = (state_40056[(11)]);
var inst_39998 = (state_40056[(20)]);
var inst_40001 = (inst_39999 < inst_39998);
var inst_40002 = inst_40001;
var state_40056__$1 = state_40056;
if(cljs.core.truth_(inst_40002)){
var statearr_40104_40169 = state_40056__$1;
(statearr_40104_40169[(1)] = (27));

} else {
var statearr_40105_40170 = state_40056__$1;
(statearr_40105_40170[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (34))){
var state_40056__$1 = state_40056;
var statearr_40106_40171 = state_40056__$1;
(statearr_40106_40171[(2)] = null);

(statearr_40106_40171[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (17))){
var state_40056__$1 = state_40056;
var statearr_40107_40172 = state_40056__$1;
(statearr_40107_40172[(2)] = null);

(statearr_40107_40172[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (3))){
var inst_40054 = (state_40056[(2)]);
var state_40056__$1 = state_40056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40056__$1,inst_40054);
} else {
if((state_val_40057 === (12))){
var inst_39983 = (state_40056[(2)]);
var state_40056__$1 = state_40056;
var statearr_40108_40173 = state_40056__$1;
(statearr_40108_40173[(2)] = inst_39983);

(statearr_40108_40173[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (2))){
var state_40056__$1 = state_40056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40056__$1,(4),ch);
} else {
if((state_val_40057 === (23))){
var state_40056__$1 = state_40056;
var statearr_40109_40174 = state_40056__$1;
(statearr_40109_40174[(2)] = null);

(statearr_40109_40174[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (35))){
var inst_40038 = (state_40056[(2)]);
var state_40056__$1 = state_40056;
var statearr_40110_40175 = state_40056__$1;
(statearr_40110_40175[(2)] = inst_40038);

(statearr_40110_40175[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (19))){
var inst_39955 = (state_40056[(7)]);
var inst_39959 = cljs.core.chunk_first.call(null,inst_39955);
var inst_39960 = cljs.core.chunk_rest.call(null,inst_39955);
var inst_39961 = cljs.core.count.call(null,inst_39959);
var inst_39933 = inst_39960;
var inst_39934 = inst_39959;
var inst_39935 = inst_39961;
var inst_39936 = (0);
var state_40056__$1 = (function (){var statearr_40111 = state_40056;
(statearr_40111[(13)] = inst_39936);

(statearr_40111[(14)] = inst_39934);

(statearr_40111[(15)] = inst_39933);

(statearr_40111[(16)] = inst_39935);

return statearr_40111;
})();
var statearr_40112_40176 = state_40056__$1;
(statearr_40112_40176[(2)] = null);

(statearr_40112_40176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (11))){
var inst_39955 = (state_40056[(7)]);
var inst_39933 = (state_40056[(15)]);
var inst_39955__$1 = cljs.core.seq.call(null,inst_39933);
var state_40056__$1 = (function (){var statearr_40113 = state_40056;
(statearr_40113[(7)] = inst_39955__$1);

return statearr_40113;
})();
if(inst_39955__$1){
var statearr_40114_40177 = state_40056__$1;
(statearr_40114_40177[(1)] = (16));

} else {
var statearr_40115_40178 = state_40056__$1;
(statearr_40115_40178[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (9))){
var inst_39985 = (state_40056[(2)]);
var state_40056__$1 = state_40056;
var statearr_40116_40179 = state_40056__$1;
(statearr_40116_40179[(2)] = inst_39985);

(statearr_40116_40179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (5))){
var inst_39931 = cljs.core.deref.call(null,cs);
var inst_39932 = cljs.core.seq.call(null,inst_39931);
var inst_39933 = inst_39932;
var inst_39934 = null;
var inst_39935 = (0);
var inst_39936 = (0);
var state_40056__$1 = (function (){var statearr_40117 = state_40056;
(statearr_40117[(13)] = inst_39936);

(statearr_40117[(14)] = inst_39934);

(statearr_40117[(15)] = inst_39933);

(statearr_40117[(16)] = inst_39935);

return statearr_40117;
})();
var statearr_40118_40180 = state_40056__$1;
(statearr_40118_40180[(2)] = null);

(statearr_40118_40180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (14))){
var state_40056__$1 = state_40056;
var statearr_40119_40181 = state_40056__$1;
(statearr_40119_40181[(2)] = null);

(statearr_40119_40181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (45))){
var inst_40046 = (state_40056[(2)]);
var state_40056__$1 = state_40056;
var statearr_40120_40182 = state_40056__$1;
(statearr_40120_40182[(2)] = inst_40046);

(statearr_40120_40182[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (26))){
var inst_39988 = (state_40056[(29)]);
var inst_40042 = (state_40056[(2)]);
var inst_40043 = cljs.core.seq.call(null,inst_39988);
var state_40056__$1 = (function (){var statearr_40121 = state_40056;
(statearr_40121[(31)] = inst_40042);

return statearr_40121;
})();
if(inst_40043){
var statearr_40122_40183 = state_40056__$1;
(statearr_40122_40183[(1)] = (42));

} else {
var statearr_40123_40184 = state_40056__$1;
(statearr_40123_40184[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (16))){
var inst_39955 = (state_40056[(7)]);
var inst_39957 = cljs.core.chunked_seq_QMARK_.call(null,inst_39955);
var state_40056__$1 = state_40056;
if(inst_39957){
var statearr_40124_40185 = state_40056__$1;
(statearr_40124_40185[(1)] = (19));

} else {
var statearr_40125_40186 = state_40056__$1;
(statearr_40125_40186[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (38))){
var inst_40035 = (state_40056[(2)]);
var state_40056__$1 = state_40056;
var statearr_40126_40187 = state_40056__$1;
(statearr_40126_40187[(2)] = inst_40035);

(statearr_40126_40187[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (30))){
var state_40056__$1 = state_40056;
var statearr_40127_40188 = state_40056__$1;
(statearr_40127_40188[(2)] = null);

(statearr_40127_40188[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (10))){
var inst_39936 = (state_40056[(13)]);
var inst_39934 = (state_40056[(14)]);
var inst_39944 = cljs.core._nth.call(null,inst_39934,inst_39936);
var inst_39945 = cljs.core.nth.call(null,inst_39944,(0),null);
var inst_39946 = cljs.core.nth.call(null,inst_39944,(1),null);
var state_40056__$1 = (function (){var statearr_40128 = state_40056;
(statearr_40128[(26)] = inst_39945);

return statearr_40128;
})();
if(cljs.core.truth_(inst_39946)){
var statearr_40129_40189 = state_40056__$1;
(statearr_40129_40189[(1)] = (13));

} else {
var statearr_40130_40190 = state_40056__$1;
(statearr_40130_40190[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (18))){
var inst_39981 = (state_40056[(2)]);
var state_40056__$1 = state_40056;
var statearr_40131_40191 = state_40056__$1;
(statearr_40131_40191[(2)] = inst_39981);

(statearr_40131_40191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (42))){
var state_40056__$1 = state_40056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40056__$1,(45),dchan);
} else {
if((state_val_40057 === (37))){
var inst_40024 = (state_40056[(23)]);
var inst_39924 = (state_40056[(12)]);
var inst_40015 = (state_40056[(25)]);
var inst_40024__$1 = cljs.core.first.call(null,inst_40015);
var inst_40025 = cljs.core.async.put_BANG_.call(null,inst_40024__$1,inst_39924,done);
var state_40056__$1 = (function (){var statearr_40132 = state_40056;
(statearr_40132[(23)] = inst_40024__$1);

return statearr_40132;
})();
if(cljs.core.truth_(inst_40025)){
var statearr_40133_40192 = state_40056__$1;
(statearr_40133_40192[(1)] = (39));

} else {
var statearr_40134_40193 = state_40056__$1;
(statearr_40134_40193[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40057 === (8))){
var inst_39936 = (state_40056[(13)]);
var inst_39935 = (state_40056[(16)]);
var inst_39938 = (inst_39936 < inst_39935);
var inst_39939 = inst_39938;
var state_40056__$1 = state_40056;
if(cljs.core.truth_(inst_39939)){
var statearr_40135_40194 = state_40056__$1;
(statearr_40135_40194[(1)] = (10));

} else {
var statearr_40136_40195 = state_40056__$1;
(statearr_40136_40195[(1)] = (11));

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
});})(c__30624__auto___40141,cs,m,dchan,dctr,done))
;
return ((function (switch__30536__auto__,c__30624__auto___40141,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30537__auto__ = null;
var cljs$core$async$mult_$_state_machine__30537__auto____0 = (function (){
var statearr_40137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40137[(0)] = cljs$core$async$mult_$_state_machine__30537__auto__);

(statearr_40137[(1)] = (1));

return statearr_40137;
});
var cljs$core$async$mult_$_state_machine__30537__auto____1 = (function (state_40056){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40138){if((e40138 instanceof Object)){
var ex__30540__auto__ = e40138;
var statearr_40139_40196 = state_40056;
(statearr_40139_40196[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40197 = state_40056;
state_40056 = G__40197;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30537__auto__ = function(state_40056){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30537__auto____1.call(this,state_40056);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30537__auto____0;
cljs$core$async$mult_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30537__auto____1;
return cljs$core$async$mult_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40141,cs,m,dchan,dctr,done))
})();
var state__30626__auto__ = (function (){var statearr_40140 = f__30625__auto__.call(null);
(statearr_40140[(6)] = c__30624__auto___40141);

return statearr_40140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40141,cs,m,dchan,dctr,done))
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
var G__40199 = arguments.length;
switch (G__40199) {
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
var len__28364__auto___40211 = arguments.length;
var i__28365__auto___40212 = (0);
while(true){
if((i__28365__auto___40212 < len__28364__auto___40211)){
args__28371__auto__.push((arguments[i__28365__auto___40212]));

var G__40213 = (i__28365__auto___40212 + (1));
i__28365__auto___40212 = G__40213;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40205){
var map__40206 = p__40205;
var map__40206__$1 = ((((!((map__40206 == null)))?((((map__40206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40206):map__40206);
var opts = map__40206__$1;
var statearr_40208_40214 = state;
(statearr_40208_40214[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__40206,map__40206__$1,opts){
return (function (val){
var statearr_40209_40215 = state;
(statearr_40209_40215[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40206,map__40206__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_40210_40216 = state;
(statearr_40210_40216[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40201){
var G__40202 = cljs.core.first.call(null,seq40201);
var seq40201__$1 = cljs.core.next.call(null,seq40201);
var G__40203 = cljs.core.first.call(null,seq40201__$1);
var seq40201__$2 = cljs.core.next.call(null,seq40201__$1);
var G__40204 = cljs.core.first.call(null,seq40201__$2);
var seq40201__$3 = cljs.core.next.call(null,seq40201__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40202,G__40203,G__40204,seq40201__$3);
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
if(typeof cljs.core.async.t_cljs$core$async40217 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40217 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40218){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40218 = meta40218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40219,meta40218__$1){
var self__ = this;
var _40219__$1 = this;
return (new cljs.core.async.t_cljs$core$async40217(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40218__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40217.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40219){
var self__ = this;
var _40219__$1 = this;
return self__.meta40218;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40217.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40217.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40217.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40217.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40217.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40217.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40217.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40217.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async40217.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40218","meta40218",-1175226591,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40217.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40217";

cljs.core.async.t_cljs$core$async40217.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40217");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40217 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40217(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40218){
return (new cljs.core.async.t_cljs$core$async40217(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40218));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40217(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30624__auto___40381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40321){
var state_val_40322 = (state_40321[(1)]);
if((state_val_40322 === (7))){
var inst_40236 = (state_40321[(2)]);
var state_40321__$1 = state_40321;
var statearr_40323_40382 = state_40321__$1;
(statearr_40323_40382[(2)] = inst_40236);

(statearr_40323_40382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (20))){
var inst_40248 = (state_40321[(7)]);
var state_40321__$1 = state_40321;
var statearr_40324_40383 = state_40321__$1;
(statearr_40324_40383[(2)] = inst_40248);

(statearr_40324_40383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (27))){
var state_40321__$1 = state_40321;
var statearr_40325_40384 = state_40321__$1;
(statearr_40325_40384[(2)] = null);

(statearr_40325_40384[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (1))){
var inst_40223 = (state_40321[(8)]);
var inst_40223__$1 = calc_state.call(null);
var inst_40225 = (inst_40223__$1 == null);
var inst_40226 = cljs.core.not.call(null,inst_40225);
var state_40321__$1 = (function (){var statearr_40326 = state_40321;
(statearr_40326[(8)] = inst_40223__$1);

return statearr_40326;
})();
if(inst_40226){
var statearr_40327_40385 = state_40321__$1;
(statearr_40327_40385[(1)] = (2));

} else {
var statearr_40328_40386 = state_40321__$1;
(statearr_40328_40386[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (24))){
var inst_40272 = (state_40321[(9)]);
var inst_40295 = (state_40321[(10)]);
var inst_40281 = (state_40321[(11)]);
var inst_40295__$1 = inst_40272.call(null,inst_40281);
var state_40321__$1 = (function (){var statearr_40329 = state_40321;
(statearr_40329[(10)] = inst_40295__$1);

return statearr_40329;
})();
if(cljs.core.truth_(inst_40295__$1)){
var statearr_40330_40387 = state_40321__$1;
(statearr_40330_40387[(1)] = (29));

} else {
var statearr_40331_40388 = state_40321__$1;
(statearr_40331_40388[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (4))){
var inst_40239 = (state_40321[(2)]);
var state_40321__$1 = state_40321;
if(cljs.core.truth_(inst_40239)){
var statearr_40332_40389 = state_40321__$1;
(statearr_40332_40389[(1)] = (8));

} else {
var statearr_40333_40390 = state_40321__$1;
(statearr_40333_40390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (15))){
var inst_40266 = (state_40321[(2)]);
var state_40321__$1 = state_40321;
if(cljs.core.truth_(inst_40266)){
var statearr_40334_40391 = state_40321__$1;
(statearr_40334_40391[(1)] = (19));

} else {
var statearr_40335_40392 = state_40321__$1;
(statearr_40335_40392[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (21))){
var inst_40271 = (state_40321[(12)]);
var inst_40271__$1 = (state_40321[(2)]);
var inst_40272 = cljs.core.get.call(null,inst_40271__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40273 = cljs.core.get.call(null,inst_40271__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40274 = cljs.core.get.call(null,inst_40271__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40321__$1 = (function (){var statearr_40336 = state_40321;
(statearr_40336[(9)] = inst_40272);

(statearr_40336[(13)] = inst_40273);

(statearr_40336[(12)] = inst_40271__$1);

return statearr_40336;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40321__$1,(22),inst_40274);
} else {
if((state_val_40322 === (31))){
var inst_40303 = (state_40321[(2)]);
var state_40321__$1 = state_40321;
if(cljs.core.truth_(inst_40303)){
var statearr_40337_40393 = state_40321__$1;
(statearr_40337_40393[(1)] = (32));

} else {
var statearr_40338_40394 = state_40321__$1;
(statearr_40338_40394[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (32))){
var inst_40280 = (state_40321[(14)]);
var state_40321__$1 = state_40321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40321__$1,(35),out,inst_40280);
} else {
if((state_val_40322 === (33))){
var inst_40271 = (state_40321[(12)]);
var inst_40248 = inst_40271;
var state_40321__$1 = (function (){var statearr_40339 = state_40321;
(statearr_40339[(7)] = inst_40248);

return statearr_40339;
})();
var statearr_40340_40395 = state_40321__$1;
(statearr_40340_40395[(2)] = null);

(statearr_40340_40395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (13))){
var inst_40248 = (state_40321[(7)]);
var inst_40255 = inst_40248.cljs$lang$protocol_mask$partition0$;
var inst_40256 = (inst_40255 & (64));
var inst_40257 = inst_40248.cljs$core$ISeq$;
var inst_40258 = (cljs.core.PROTOCOL_SENTINEL === inst_40257);
var inst_40259 = (inst_40256) || (inst_40258);
var state_40321__$1 = state_40321;
if(cljs.core.truth_(inst_40259)){
var statearr_40341_40396 = state_40321__$1;
(statearr_40341_40396[(1)] = (16));

} else {
var statearr_40342_40397 = state_40321__$1;
(statearr_40342_40397[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (22))){
var inst_40280 = (state_40321[(14)]);
var inst_40281 = (state_40321[(11)]);
var inst_40279 = (state_40321[(2)]);
var inst_40280__$1 = cljs.core.nth.call(null,inst_40279,(0),null);
var inst_40281__$1 = cljs.core.nth.call(null,inst_40279,(1),null);
var inst_40282 = (inst_40280__$1 == null);
var inst_40283 = cljs.core._EQ_.call(null,inst_40281__$1,change);
var inst_40284 = (inst_40282) || (inst_40283);
var state_40321__$1 = (function (){var statearr_40343 = state_40321;
(statearr_40343[(14)] = inst_40280__$1);

(statearr_40343[(11)] = inst_40281__$1);

return statearr_40343;
})();
if(cljs.core.truth_(inst_40284)){
var statearr_40344_40398 = state_40321__$1;
(statearr_40344_40398[(1)] = (23));

} else {
var statearr_40345_40399 = state_40321__$1;
(statearr_40345_40399[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (36))){
var inst_40271 = (state_40321[(12)]);
var inst_40248 = inst_40271;
var state_40321__$1 = (function (){var statearr_40346 = state_40321;
(statearr_40346[(7)] = inst_40248);

return statearr_40346;
})();
var statearr_40347_40400 = state_40321__$1;
(statearr_40347_40400[(2)] = null);

(statearr_40347_40400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (29))){
var inst_40295 = (state_40321[(10)]);
var state_40321__$1 = state_40321;
var statearr_40348_40401 = state_40321__$1;
(statearr_40348_40401[(2)] = inst_40295);

(statearr_40348_40401[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (6))){
var state_40321__$1 = state_40321;
var statearr_40349_40402 = state_40321__$1;
(statearr_40349_40402[(2)] = false);

(statearr_40349_40402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (28))){
var inst_40291 = (state_40321[(2)]);
var inst_40292 = calc_state.call(null);
var inst_40248 = inst_40292;
var state_40321__$1 = (function (){var statearr_40350 = state_40321;
(statearr_40350[(7)] = inst_40248);

(statearr_40350[(15)] = inst_40291);

return statearr_40350;
})();
var statearr_40351_40403 = state_40321__$1;
(statearr_40351_40403[(2)] = null);

(statearr_40351_40403[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (25))){
var inst_40317 = (state_40321[(2)]);
var state_40321__$1 = state_40321;
var statearr_40352_40404 = state_40321__$1;
(statearr_40352_40404[(2)] = inst_40317);

(statearr_40352_40404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (34))){
var inst_40315 = (state_40321[(2)]);
var state_40321__$1 = state_40321;
var statearr_40353_40405 = state_40321__$1;
(statearr_40353_40405[(2)] = inst_40315);

(statearr_40353_40405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (17))){
var state_40321__$1 = state_40321;
var statearr_40354_40406 = state_40321__$1;
(statearr_40354_40406[(2)] = false);

(statearr_40354_40406[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (3))){
var state_40321__$1 = state_40321;
var statearr_40355_40407 = state_40321__$1;
(statearr_40355_40407[(2)] = false);

(statearr_40355_40407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (12))){
var inst_40319 = (state_40321[(2)]);
var state_40321__$1 = state_40321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40321__$1,inst_40319);
} else {
if((state_val_40322 === (2))){
var inst_40223 = (state_40321[(8)]);
var inst_40228 = inst_40223.cljs$lang$protocol_mask$partition0$;
var inst_40229 = (inst_40228 & (64));
var inst_40230 = inst_40223.cljs$core$ISeq$;
var inst_40231 = (cljs.core.PROTOCOL_SENTINEL === inst_40230);
var inst_40232 = (inst_40229) || (inst_40231);
var state_40321__$1 = state_40321;
if(cljs.core.truth_(inst_40232)){
var statearr_40356_40408 = state_40321__$1;
(statearr_40356_40408[(1)] = (5));

} else {
var statearr_40357_40409 = state_40321__$1;
(statearr_40357_40409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (23))){
var inst_40280 = (state_40321[(14)]);
var inst_40286 = (inst_40280 == null);
var state_40321__$1 = state_40321;
if(cljs.core.truth_(inst_40286)){
var statearr_40358_40410 = state_40321__$1;
(statearr_40358_40410[(1)] = (26));

} else {
var statearr_40359_40411 = state_40321__$1;
(statearr_40359_40411[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (35))){
var inst_40306 = (state_40321[(2)]);
var state_40321__$1 = state_40321;
if(cljs.core.truth_(inst_40306)){
var statearr_40360_40412 = state_40321__$1;
(statearr_40360_40412[(1)] = (36));

} else {
var statearr_40361_40413 = state_40321__$1;
(statearr_40361_40413[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (19))){
var inst_40248 = (state_40321[(7)]);
var inst_40268 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40248);
var state_40321__$1 = state_40321;
var statearr_40362_40414 = state_40321__$1;
(statearr_40362_40414[(2)] = inst_40268);

(statearr_40362_40414[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (11))){
var inst_40248 = (state_40321[(7)]);
var inst_40252 = (inst_40248 == null);
var inst_40253 = cljs.core.not.call(null,inst_40252);
var state_40321__$1 = state_40321;
if(inst_40253){
var statearr_40363_40415 = state_40321__$1;
(statearr_40363_40415[(1)] = (13));

} else {
var statearr_40364_40416 = state_40321__$1;
(statearr_40364_40416[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (9))){
var inst_40223 = (state_40321[(8)]);
var state_40321__$1 = state_40321;
var statearr_40365_40417 = state_40321__$1;
(statearr_40365_40417[(2)] = inst_40223);

(statearr_40365_40417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (5))){
var state_40321__$1 = state_40321;
var statearr_40366_40418 = state_40321__$1;
(statearr_40366_40418[(2)] = true);

(statearr_40366_40418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (14))){
var state_40321__$1 = state_40321;
var statearr_40367_40419 = state_40321__$1;
(statearr_40367_40419[(2)] = false);

(statearr_40367_40419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (26))){
var inst_40281 = (state_40321[(11)]);
var inst_40288 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40281);
var state_40321__$1 = state_40321;
var statearr_40368_40420 = state_40321__$1;
(statearr_40368_40420[(2)] = inst_40288);

(statearr_40368_40420[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (16))){
var state_40321__$1 = state_40321;
var statearr_40369_40421 = state_40321__$1;
(statearr_40369_40421[(2)] = true);

(statearr_40369_40421[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (38))){
var inst_40311 = (state_40321[(2)]);
var state_40321__$1 = state_40321;
var statearr_40370_40422 = state_40321__$1;
(statearr_40370_40422[(2)] = inst_40311);

(statearr_40370_40422[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (30))){
var inst_40272 = (state_40321[(9)]);
var inst_40273 = (state_40321[(13)]);
var inst_40281 = (state_40321[(11)]);
var inst_40298 = cljs.core.empty_QMARK_.call(null,inst_40272);
var inst_40299 = inst_40273.call(null,inst_40281);
var inst_40300 = cljs.core.not.call(null,inst_40299);
var inst_40301 = (inst_40298) && (inst_40300);
var state_40321__$1 = state_40321;
var statearr_40371_40423 = state_40321__$1;
(statearr_40371_40423[(2)] = inst_40301);

(statearr_40371_40423[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (10))){
var inst_40223 = (state_40321[(8)]);
var inst_40244 = (state_40321[(2)]);
var inst_40245 = cljs.core.get.call(null,inst_40244,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40246 = cljs.core.get.call(null,inst_40244,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40247 = cljs.core.get.call(null,inst_40244,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40248 = inst_40223;
var state_40321__$1 = (function (){var statearr_40372 = state_40321;
(statearr_40372[(16)] = inst_40247);

(statearr_40372[(17)] = inst_40245);

(statearr_40372[(7)] = inst_40248);

(statearr_40372[(18)] = inst_40246);

return statearr_40372;
})();
var statearr_40373_40424 = state_40321__$1;
(statearr_40373_40424[(2)] = null);

(statearr_40373_40424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (18))){
var inst_40263 = (state_40321[(2)]);
var state_40321__$1 = state_40321;
var statearr_40374_40425 = state_40321__$1;
(statearr_40374_40425[(2)] = inst_40263);

(statearr_40374_40425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (37))){
var state_40321__$1 = state_40321;
var statearr_40375_40426 = state_40321__$1;
(statearr_40375_40426[(2)] = null);

(statearr_40375_40426[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (8))){
var inst_40223 = (state_40321[(8)]);
var inst_40241 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40223);
var state_40321__$1 = state_40321;
var statearr_40376_40427 = state_40321__$1;
(statearr_40376_40427[(2)] = inst_40241);

(statearr_40376_40427[(1)] = (10));


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
});})(c__30624__auto___40381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30536__auto__,c__30624__auto___40381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30537__auto__ = null;
var cljs$core$async$mix_$_state_machine__30537__auto____0 = (function (){
var statearr_40377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40377[(0)] = cljs$core$async$mix_$_state_machine__30537__auto__);

(statearr_40377[(1)] = (1));

return statearr_40377;
});
var cljs$core$async$mix_$_state_machine__30537__auto____1 = (function (state_40321){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40378){if((e40378 instanceof Object)){
var ex__30540__auto__ = e40378;
var statearr_40379_40428 = state_40321;
(statearr_40379_40428[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40429 = state_40321;
state_40321 = G__40429;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30537__auto__ = function(state_40321){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30537__auto____1.call(this,state_40321);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30537__auto____0;
cljs$core$async$mix_$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30537__auto____1;
return cljs$core$async$mix_$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30626__auto__ = (function (){var statearr_40380 = f__30625__auto__.call(null);
(statearr_40380[(6)] = c__30624__auto___40381);

return statearr_40380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40381,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__40431 = arguments.length;
switch (G__40431) {
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
var G__40435 = arguments.length;
switch (G__40435) {
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
return (function (p1__40433_SHARP_){
if(cljs.core.truth_(p1__40433_SHARP_.call(null,topic))){
return p1__40433_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40433_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40436 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40436 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40437){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40437 = meta40437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40438,meta40437__$1){
var self__ = this;
var _40438__$1 = this;
return (new cljs.core.async.t_cljs$core$async40436(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40437__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40436.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40438){
var self__ = this;
var _40438__$1 = this;
return self__.meta40437;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40436.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40436.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40436.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40436.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40436.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async40436.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40436.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40436.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40437","meta40437",1855550694,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40436";

cljs.core.async.t_cljs$core$async40436.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40436");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40436 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40436(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40437){
return (new cljs.core.async.t_cljs$core$async40436(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40437));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40436(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30624__auto___40556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40556,mults,ensure_mult,p){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40556,mults,ensure_mult,p){
return (function (state_40510){
var state_val_40511 = (state_40510[(1)]);
if((state_val_40511 === (7))){
var inst_40506 = (state_40510[(2)]);
var state_40510__$1 = state_40510;
var statearr_40512_40557 = state_40510__$1;
(statearr_40512_40557[(2)] = inst_40506);

(statearr_40512_40557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (20))){
var state_40510__$1 = state_40510;
var statearr_40513_40558 = state_40510__$1;
(statearr_40513_40558[(2)] = null);

(statearr_40513_40558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (1))){
var state_40510__$1 = state_40510;
var statearr_40514_40559 = state_40510__$1;
(statearr_40514_40559[(2)] = null);

(statearr_40514_40559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (24))){
var inst_40489 = (state_40510[(7)]);
var inst_40498 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40489);
var state_40510__$1 = state_40510;
var statearr_40515_40560 = state_40510__$1;
(statearr_40515_40560[(2)] = inst_40498);

(statearr_40515_40560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (4))){
var inst_40441 = (state_40510[(8)]);
var inst_40441__$1 = (state_40510[(2)]);
var inst_40442 = (inst_40441__$1 == null);
var state_40510__$1 = (function (){var statearr_40516 = state_40510;
(statearr_40516[(8)] = inst_40441__$1);

return statearr_40516;
})();
if(cljs.core.truth_(inst_40442)){
var statearr_40517_40561 = state_40510__$1;
(statearr_40517_40561[(1)] = (5));

} else {
var statearr_40518_40562 = state_40510__$1;
(statearr_40518_40562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (15))){
var inst_40483 = (state_40510[(2)]);
var state_40510__$1 = state_40510;
var statearr_40519_40563 = state_40510__$1;
(statearr_40519_40563[(2)] = inst_40483);

(statearr_40519_40563[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (21))){
var inst_40503 = (state_40510[(2)]);
var state_40510__$1 = (function (){var statearr_40520 = state_40510;
(statearr_40520[(9)] = inst_40503);

return statearr_40520;
})();
var statearr_40521_40564 = state_40510__$1;
(statearr_40521_40564[(2)] = null);

(statearr_40521_40564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (13))){
var inst_40465 = (state_40510[(10)]);
var inst_40467 = cljs.core.chunked_seq_QMARK_.call(null,inst_40465);
var state_40510__$1 = state_40510;
if(inst_40467){
var statearr_40522_40565 = state_40510__$1;
(statearr_40522_40565[(1)] = (16));

} else {
var statearr_40523_40566 = state_40510__$1;
(statearr_40523_40566[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (22))){
var inst_40495 = (state_40510[(2)]);
var state_40510__$1 = state_40510;
if(cljs.core.truth_(inst_40495)){
var statearr_40524_40567 = state_40510__$1;
(statearr_40524_40567[(1)] = (23));

} else {
var statearr_40525_40568 = state_40510__$1;
(statearr_40525_40568[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (6))){
var inst_40491 = (state_40510[(11)]);
var inst_40441 = (state_40510[(8)]);
var inst_40489 = (state_40510[(7)]);
var inst_40489__$1 = topic_fn.call(null,inst_40441);
var inst_40490 = cljs.core.deref.call(null,mults);
var inst_40491__$1 = cljs.core.get.call(null,inst_40490,inst_40489__$1);
var state_40510__$1 = (function (){var statearr_40526 = state_40510;
(statearr_40526[(11)] = inst_40491__$1);

(statearr_40526[(7)] = inst_40489__$1);

return statearr_40526;
})();
if(cljs.core.truth_(inst_40491__$1)){
var statearr_40527_40569 = state_40510__$1;
(statearr_40527_40569[(1)] = (19));

} else {
var statearr_40528_40570 = state_40510__$1;
(statearr_40528_40570[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (25))){
var inst_40500 = (state_40510[(2)]);
var state_40510__$1 = state_40510;
var statearr_40529_40571 = state_40510__$1;
(statearr_40529_40571[(2)] = inst_40500);

(statearr_40529_40571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (17))){
var inst_40465 = (state_40510[(10)]);
var inst_40474 = cljs.core.first.call(null,inst_40465);
var inst_40475 = cljs.core.async.muxch_STAR_.call(null,inst_40474);
var inst_40476 = cljs.core.async.close_BANG_.call(null,inst_40475);
var inst_40477 = cljs.core.next.call(null,inst_40465);
var inst_40451 = inst_40477;
var inst_40452 = null;
var inst_40453 = (0);
var inst_40454 = (0);
var state_40510__$1 = (function (){var statearr_40530 = state_40510;
(statearr_40530[(12)] = inst_40476);

(statearr_40530[(13)] = inst_40454);

(statearr_40530[(14)] = inst_40451);

(statearr_40530[(15)] = inst_40452);

(statearr_40530[(16)] = inst_40453);

return statearr_40530;
})();
var statearr_40531_40572 = state_40510__$1;
(statearr_40531_40572[(2)] = null);

(statearr_40531_40572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (3))){
var inst_40508 = (state_40510[(2)]);
var state_40510__$1 = state_40510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40510__$1,inst_40508);
} else {
if((state_val_40511 === (12))){
var inst_40485 = (state_40510[(2)]);
var state_40510__$1 = state_40510;
var statearr_40532_40573 = state_40510__$1;
(statearr_40532_40573[(2)] = inst_40485);

(statearr_40532_40573[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (2))){
var state_40510__$1 = state_40510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40510__$1,(4),ch);
} else {
if((state_val_40511 === (23))){
var state_40510__$1 = state_40510;
var statearr_40533_40574 = state_40510__$1;
(statearr_40533_40574[(2)] = null);

(statearr_40533_40574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (19))){
var inst_40491 = (state_40510[(11)]);
var inst_40441 = (state_40510[(8)]);
var inst_40493 = cljs.core.async.muxch_STAR_.call(null,inst_40491);
var state_40510__$1 = state_40510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40510__$1,(22),inst_40493,inst_40441);
} else {
if((state_val_40511 === (11))){
var inst_40451 = (state_40510[(14)]);
var inst_40465 = (state_40510[(10)]);
var inst_40465__$1 = cljs.core.seq.call(null,inst_40451);
var state_40510__$1 = (function (){var statearr_40534 = state_40510;
(statearr_40534[(10)] = inst_40465__$1);

return statearr_40534;
})();
if(inst_40465__$1){
var statearr_40535_40575 = state_40510__$1;
(statearr_40535_40575[(1)] = (13));

} else {
var statearr_40536_40576 = state_40510__$1;
(statearr_40536_40576[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (9))){
var inst_40487 = (state_40510[(2)]);
var state_40510__$1 = state_40510;
var statearr_40537_40577 = state_40510__$1;
(statearr_40537_40577[(2)] = inst_40487);

(statearr_40537_40577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (5))){
var inst_40448 = cljs.core.deref.call(null,mults);
var inst_40449 = cljs.core.vals.call(null,inst_40448);
var inst_40450 = cljs.core.seq.call(null,inst_40449);
var inst_40451 = inst_40450;
var inst_40452 = null;
var inst_40453 = (0);
var inst_40454 = (0);
var state_40510__$1 = (function (){var statearr_40538 = state_40510;
(statearr_40538[(13)] = inst_40454);

(statearr_40538[(14)] = inst_40451);

(statearr_40538[(15)] = inst_40452);

(statearr_40538[(16)] = inst_40453);

return statearr_40538;
})();
var statearr_40539_40578 = state_40510__$1;
(statearr_40539_40578[(2)] = null);

(statearr_40539_40578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (14))){
var state_40510__$1 = state_40510;
var statearr_40543_40579 = state_40510__$1;
(statearr_40543_40579[(2)] = null);

(statearr_40543_40579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (16))){
var inst_40465 = (state_40510[(10)]);
var inst_40469 = cljs.core.chunk_first.call(null,inst_40465);
var inst_40470 = cljs.core.chunk_rest.call(null,inst_40465);
var inst_40471 = cljs.core.count.call(null,inst_40469);
var inst_40451 = inst_40470;
var inst_40452 = inst_40469;
var inst_40453 = inst_40471;
var inst_40454 = (0);
var state_40510__$1 = (function (){var statearr_40544 = state_40510;
(statearr_40544[(13)] = inst_40454);

(statearr_40544[(14)] = inst_40451);

(statearr_40544[(15)] = inst_40452);

(statearr_40544[(16)] = inst_40453);

return statearr_40544;
})();
var statearr_40545_40580 = state_40510__$1;
(statearr_40545_40580[(2)] = null);

(statearr_40545_40580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (10))){
var inst_40454 = (state_40510[(13)]);
var inst_40451 = (state_40510[(14)]);
var inst_40452 = (state_40510[(15)]);
var inst_40453 = (state_40510[(16)]);
var inst_40459 = cljs.core._nth.call(null,inst_40452,inst_40454);
var inst_40460 = cljs.core.async.muxch_STAR_.call(null,inst_40459);
var inst_40461 = cljs.core.async.close_BANG_.call(null,inst_40460);
var inst_40462 = (inst_40454 + (1));
var tmp40540 = inst_40451;
var tmp40541 = inst_40452;
var tmp40542 = inst_40453;
var inst_40451__$1 = tmp40540;
var inst_40452__$1 = tmp40541;
var inst_40453__$1 = tmp40542;
var inst_40454__$1 = inst_40462;
var state_40510__$1 = (function (){var statearr_40546 = state_40510;
(statearr_40546[(13)] = inst_40454__$1);

(statearr_40546[(17)] = inst_40461);

(statearr_40546[(14)] = inst_40451__$1);

(statearr_40546[(15)] = inst_40452__$1);

(statearr_40546[(16)] = inst_40453__$1);

return statearr_40546;
})();
var statearr_40547_40581 = state_40510__$1;
(statearr_40547_40581[(2)] = null);

(statearr_40547_40581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (18))){
var inst_40480 = (state_40510[(2)]);
var state_40510__$1 = state_40510;
var statearr_40548_40582 = state_40510__$1;
(statearr_40548_40582[(2)] = inst_40480);

(statearr_40548_40582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40511 === (8))){
var inst_40454 = (state_40510[(13)]);
var inst_40453 = (state_40510[(16)]);
var inst_40456 = (inst_40454 < inst_40453);
var inst_40457 = inst_40456;
var state_40510__$1 = state_40510;
if(cljs.core.truth_(inst_40457)){
var statearr_40549_40583 = state_40510__$1;
(statearr_40549_40583[(1)] = (10));

} else {
var statearr_40550_40584 = state_40510__$1;
(statearr_40550_40584[(1)] = (11));

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
});})(c__30624__auto___40556,mults,ensure_mult,p))
;
return ((function (switch__30536__auto__,c__30624__auto___40556,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40551[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40551[(1)] = (1));

return statearr_40551;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40510){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40552){if((e40552 instanceof Object)){
var ex__30540__auto__ = e40552;
var statearr_40553_40585 = state_40510;
(statearr_40553_40585[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40586 = state_40510;
state_40510 = G__40586;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40510);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40556,mults,ensure_mult,p))
})();
var state__30626__auto__ = (function (){var statearr_40554 = f__30625__auto__.call(null);
(statearr_40554[(6)] = c__30624__auto___40556);

return statearr_40554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40556,mults,ensure_mult,p))
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
var G__40588 = arguments.length;
switch (G__40588) {
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
var G__40591 = arguments.length;
switch (G__40591) {
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
var G__40594 = arguments.length;
switch (G__40594) {
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
var c__30624__auto___40661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40661,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40661,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40633){
var state_val_40634 = (state_40633[(1)]);
if((state_val_40634 === (7))){
var state_40633__$1 = state_40633;
var statearr_40635_40662 = state_40633__$1;
(statearr_40635_40662[(2)] = null);

(statearr_40635_40662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40634 === (1))){
var state_40633__$1 = state_40633;
var statearr_40636_40663 = state_40633__$1;
(statearr_40636_40663[(2)] = null);

(statearr_40636_40663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40634 === (4))){
var inst_40597 = (state_40633[(7)]);
var inst_40599 = (inst_40597 < cnt);
var state_40633__$1 = state_40633;
if(cljs.core.truth_(inst_40599)){
var statearr_40637_40664 = state_40633__$1;
(statearr_40637_40664[(1)] = (6));

} else {
var statearr_40638_40665 = state_40633__$1;
(statearr_40638_40665[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40634 === (15))){
var inst_40629 = (state_40633[(2)]);
var state_40633__$1 = state_40633;
var statearr_40639_40666 = state_40633__$1;
(statearr_40639_40666[(2)] = inst_40629);

(statearr_40639_40666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40634 === (13))){
var inst_40622 = cljs.core.async.close_BANG_.call(null,out);
var state_40633__$1 = state_40633;
var statearr_40640_40667 = state_40633__$1;
(statearr_40640_40667[(2)] = inst_40622);

(statearr_40640_40667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40634 === (6))){
var state_40633__$1 = state_40633;
var statearr_40641_40668 = state_40633__$1;
(statearr_40641_40668[(2)] = null);

(statearr_40641_40668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40634 === (3))){
var inst_40631 = (state_40633[(2)]);
var state_40633__$1 = state_40633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40633__$1,inst_40631);
} else {
if((state_val_40634 === (12))){
var inst_40619 = (state_40633[(8)]);
var inst_40619__$1 = (state_40633[(2)]);
var inst_40620 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40619__$1);
var state_40633__$1 = (function (){var statearr_40642 = state_40633;
(statearr_40642[(8)] = inst_40619__$1);

return statearr_40642;
})();
if(cljs.core.truth_(inst_40620)){
var statearr_40643_40669 = state_40633__$1;
(statearr_40643_40669[(1)] = (13));

} else {
var statearr_40644_40670 = state_40633__$1;
(statearr_40644_40670[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40634 === (2))){
var inst_40596 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40597 = (0);
var state_40633__$1 = (function (){var statearr_40645 = state_40633;
(statearr_40645[(9)] = inst_40596);

(statearr_40645[(7)] = inst_40597);

return statearr_40645;
})();
var statearr_40646_40671 = state_40633__$1;
(statearr_40646_40671[(2)] = null);

(statearr_40646_40671[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40634 === (11))){
var inst_40597 = (state_40633[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40633,(10),Object,null,(9));
var inst_40606 = chs__$1.call(null,inst_40597);
var inst_40607 = done.call(null,inst_40597);
var inst_40608 = cljs.core.async.take_BANG_.call(null,inst_40606,inst_40607);
var state_40633__$1 = state_40633;
var statearr_40647_40672 = state_40633__$1;
(statearr_40647_40672[(2)] = inst_40608);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40633__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40634 === (9))){
var inst_40597 = (state_40633[(7)]);
var inst_40610 = (state_40633[(2)]);
var inst_40611 = (inst_40597 + (1));
var inst_40597__$1 = inst_40611;
var state_40633__$1 = (function (){var statearr_40648 = state_40633;
(statearr_40648[(10)] = inst_40610);

(statearr_40648[(7)] = inst_40597__$1);

return statearr_40648;
})();
var statearr_40649_40673 = state_40633__$1;
(statearr_40649_40673[(2)] = null);

(statearr_40649_40673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40634 === (5))){
var inst_40617 = (state_40633[(2)]);
var state_40633__$1 = (function (){var statearr_40650 = state_40633;
(statearr_40650[(11)] = inst_40617);

return statearr_40650;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40633__$1,(12),dchan);
} else {
if((state_val_40634 === (14))){
var inst_40619 = (state_40633[(8)]);
var inst_40624 = cljs.core.apply.call(null,f,inst_40619);
var state_40633__$1 = state_40633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40633__$1,(16),out,inst_40624);
} else {
if((state_val_40634 === (16))){
var inst_40626 = (state_40633[(2)]);
var state_40633__$1 = (function (){var statearr_40651 = state_40633;
(statearr_40651[(12)] = inst_40626);

return statearr_40651;
})();
var statearr_40652_40674 = state_40633__$1;
(statearr_40652_40674[(2)] = null);

(statearr_40652_40674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40634 === (10))){
var inst_40601 = (state_40633[(2)]);
var inst_40602 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40633__$1 = (function (){var statearr_40653 = state_40633;
(statearr_40653[(13)] = inst_40601);

return statearr_40653;
})();
var statearr_40654_40675 = state_40633__$1;
(statearr_40654_40675[(2)] = inst_40602);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40633__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40634 === (8))){
var inst_40615 = (state_40633[(2)]);
var state_40633__$1 = state_40633;
var statearr_40655_40676 = state_40633__$1;
(statearr_40655_40676[(2)] = inst_40615);

(statearr_40655_40676[(1)] = (5));


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
});})(c__30624__auto___40661,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30536__auto__,c__30624__auto___40661,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40656[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40656[(1)] = (1));

return statearr_40656;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40633){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40657){if((e40657 instanceof Object)){
var ex__30540__auto__ = e40657;
var statearr_40658_40677 = state_40633;
(statearr_40658_40677[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40678 = state_40633;
state_40633 = G__40678;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40633);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40661,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30626__auto__ = (function (){var statearr_40659 = f__30625__auto__.call(null);
(statearr_40659[(6)] = c__30624__auto___40661);

return statearr_40659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40661,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__40681 = arguments.length;
switch (G__40681) {
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
var c__30624__auto___40735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40735,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40735,out){
return (function (state_40713){
var state_val_40714 = (state_40713[(1)]);
if((state_val_40714 === (7))){
var inst_40693 = (state_40713[(7)]);
var inst_40692 = (state_40713[(8)]);
var inst_40692__$1 = (state_40713[(2)]);
var inst_40693__$1 = cljs.core.nth.call(null,inst_40692__$1,(0),null);
var inst_40694 = cljs.core.nth.call(null,inst_40692__$1,(1),null);
var inst_40695 = (inst_40693__$1 == null);
var state_40713__$1 = (function (){var statearr_40715 = state_40713;
(statearr_40715[(7)] = inst_40693__$1);

(statearr_40715[(8)] = inst_40692__$1);

(statearr_40715[(9)] = inst_40694);

return statearr_40715;
})();
if(cljs.core.truth_(inst_40695)){
var statearr_40716_40736 = state_40713__$1;
(statearr_40716_40736[(1)] = (8));

} else {
var statearr_40717_40737 = state_40713__$1;
(statearr_40717_40737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40714 === (1))){
var inst_40682 = cljs.core.vec.call(null,chs);
var inst_40683 = inst_40682;
var state_40713__$1 = (function (){var statearr_40718 = state_40713;
(statearr_40718[(10)] = inst_40683);

return statearr_40718;
})();
var statearr_40719_40738 = state_40713__$1;
(statearr_40719_40738[(2)] = null);

(statearr_40719_40738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40714 === (4))){
var inst_40683 = (state_40713[(10)]);
var state_40713__$1 = state_40713;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40713__$1,(7),inst_40683);
} else {
if((state_val_40714 === (6))){
var inst_40709 = (state_40713[(2)]);
var state_40713__$1 = state_40713;
var statearr_40720_40739 = state_40713__$1;
(statearr_40720_40739[(2)] = inst_40709);

(statearr_40720_40739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40714 === (3))){
var inst_40711 = (state_40713[(2)]);
var state_40713__$1 = state_40713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40713__$1,inst_40711);
} else {
if((state_val_40714 === (2))){
var inst_40683 = (state_40713[(10)]);
var inst_40685 = cljs.core.count.call(null,inst_40683);
var inst_40686 = (inst_40685 > (0));
var state_40713__$1 = state_40713;
if(cljs.core.truth_(inst_40686)){
var statearr_40722_40740 = state_40713__$1;
(statearr_40722_40740[(1)] = (4));

} else {
var statearr_40723_40741 = state_40713__$1;
(statearr_40723_40741[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40714 === (11))){
var inst_40683 = (state_40713[(10)]);
var inst_40702 = (state_40713[(2)]);
var tmp40721 = inst_40683;
var inst_40683__$1 = tmp40721;
var state_40713__$1 = (function (){var statearr_40724 = state_40713;
(statearr_40724[(11)] = inst_40702);

(statearr_40724[(10)] = inst_40683__$1);

return statearr_40724;
})();
var statearr_40725_40742 = state_40713__$1;
(statearr_40725_40742[(2)] = null);

(statearr_40725_40742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40714 === (9))){
var inst_40693 = (state_40713[(7)]);
var state_40713__$1 = state_40713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40713__$1,(11),out,inst_40693);
} else {
if((state_val_40714 === (5))){
var inst_40707 = cljs.core.async.close_BANG_.call(null,out);
var state_40713__$1 = state_40713;
var statearr_40726_40743 = state_40713__$1;
(statearr_40726_40743[(2)] = inst_40707);

(statearr_40726_40743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40714 === (10))){
var inst_40705 = (state_40713[(2)]);
var state_40713__$1 = state_40713;
var statearr_40727_40744 = state_40713__$1;
(statearr_40727_40744[(2)] = inst_40705);

(statearr_40727_40744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40714 === (8))){
var inst_40693 = (state_40713[(7)]);
var inst_40692 = (state_40713[(8)]);
var inst_40683 = (state_40713[(10)]);
var inst_40694 = (state_40713[(9)]);
var inst_40697 = (function (){var cs = inst_40683;
var vec__40688 = inst_40692;
var v = inst_40693;
var c = inst_40694;
return ((function (cs,vec__40688,v,c,inst_40693,inst_40692,inst_40683,inst_40694,state_val_40714,c__30624__auto___40735,out){
return (function (p1__40679_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40679_SHARP_);
});
;})(cs,vec__40688,v,c,inst_40693,inst_40692,inst_40683,inst_40694,state_val_40714,c__30624__auto___40735,out))
})();
var inst_40698 = cljs.core.filterv.call(null,inst_40697,inst_40683);
var inst_40683__$1 = inst_40698;
var state_40713__$1 = (function (){var statearr_40728 = state_40713;
(statearr_40728[(10)] = inst_40683__$1);

return statearr_40728;
})();
var statearr_40729_40745 = state_40713__$1;
(statearr_40729_40745[(2)] = null);

(statearr_40729_40745[(1)] = (2));


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
});})(c__30624__auto___40735,out))
;
return ((function (switch__30536__auto__,c__30624__auto___40735,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40730 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40730[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40730[(1)] = (1));

return statearr_40730;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40713){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40731){if((e40731 instanceof Object)){
var ex__30540__auto__ = e40731;
var statearr_40732_40746 = state_40713;
(statearr_40732_40746[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40747 = state_40713;
state_40713 = G__40747;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40713);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40735,out))
})();
var state__30626__auto__ = (function (){var statearr_40733 = f__30625__auto__.call(null);
(statearr_40733[(6)] = c__30624__auto___40735);

return statearr_40733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40735,out))
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
var G__40749 = arguments.length;
switch (G__40749) {
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
var c__30624__auto___40794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40794,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40794,out){
return (function (state_40773){
var state_val_40774 = (state_40773[(1)]);
if((state_val_40774 === (7))){
var inst_40755 = (state_40773[(7)]);
var inst_40755__$1 = (state_40773[(2)]);
var inst_40756 = (inst_40755__$1 == null);
var inst_40757 = cljs.core.not.call(null,inst_40756);
var state_40773__$1 = (function (){var statearr_40775 = state_40773;
(statearr_40775[(7)] = inst_40755__$1);

return statearr_40775;
})();
if(inst_40757){
var statearr_40776_40795 = state_40773__$1;
(statearr_40776_40795[(1)] = (8));

} else {
var statearr_40777_40796 = state_40773__$1;
(statearr_40777_40796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (1))){
var inst_40750 = (0);
var state_40773__$1 = (function (){var statearr_40778 = state_40773;
(statearr_40778[(8)] = inst_40750);

return statearr_40778;
})();
var statearr_40779_40797 = state_40773__$1;
(statearr_40779_40797[(2)] = null);

(statearr_40779_40797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (4))){
var state_40773__$1 = state_40773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40773__$1,(7),ch);
} else {
if((state_val_40774 === (6))){
var inst_40768 = (state_40773[(2)]);
var state_40773__$1 = state_40773;
var statearr_40780_40798 = state_40773__$1;
(statearr_40780_40798[(2)] = inst_40768);

(statearr_40780_40798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (3))){
var inst_40770 = (state_40773[(2)]);
var inst_40771 = cljs.core.async.close_BANG_.call(null,out);
var state_40773__$1 = (function (){var statearr_40781 = state_40773;
(statearr_40781[(9)] = inst_40770);

return statearr_40781;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40773__$1,inst_40771);
} else {
if((state_val_40774 === (2))){
var inst_40750 = (state_40773[(8)]);
var inst_40752 = (inst_40750 < n);
var state_40773__$1 = state_40773;
if(cljs.core.truth_(inst_40752)){
var statearr_40782_40799 = state_40773__$1;
(statearr_40782_40799[(1)] = (4));

} else {
var statearr_40783_40800 = state_40773__$1;
(statearr_40783_40800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (11))){
var inst_40750 = (state_40773[(8)]);
var inst_40760 = (state_40773[(2)]);
var inst_40761 = (inst_40750 + (1));
var inst_40750__$1 = inst_40761;
var state_40773__$1 = (function (){var statearr_40784 = state_40773;
(statearr_40784[(10)] = inst_40760);

(statearr_40784[(8)] = inst_40750__$1);

return statearr_40784;
})();
var statearr_40785_40801 = state_40773__$1;
(statearr_40785_40801[(2)] = null);

(statearr_40785_40801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (9))){
var state_40773__$1 = state_40773;
var statearr_40786_40802 = state_40773__$1;
(statearr_40786_40802[(2)] = null);

(statearr_40786_40802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (5))){
var state_40773__$1 = state_40773;
var statearr_40787_40803 = state_40773__$1;
(statearr_40787_40803[(2)] = null);

(statearr_40787_40803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (10))){
var inst_40765 = (state_40773[(2)]);
var state_40773__$1 = state_40773;
var statearr_40788_40804 = state_40773__$1;
(statearr_40788_40804[(2)] = inst_40765);

(statearr_40788_40804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (8))){
var inst_40755 = (state_40773[(7)]);
var state_40773__$1 = state_40773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40773__$1,(11),out,inst_40755);
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
});})(c__30624__auto___40794,out))
;
return ((function (switch__30536__auto__,c__30624__auto___40794,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40789 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40789[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40789[(1)] = (1));

return statearr_40789;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40773){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40790){if((e40790 instanceof Object)){
var ex__30540__auto__ = e40790;
var statearr_40791_40805 = state_40773;
(statearr_40791_40805[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40806 = state_40773;
state_40773 = G__40806;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40794,out))
})();
var state__30626__auto__ = (function (){var statearr_40792 = f__30625__auto__.call(null);
(statearr_40792[(6)] = c__30624__auto___40794);

return statearr_40792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40794,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40808 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40808 = (function (f,ch,meta40809){
this.f = f;
this.ch = ch;
this.meta40809 = meta40809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40810,meta40809__$1){
var self__ = this;
var _40810__$1 = this;
return (new cljs.core.async.t_cljs$core$async40808(self__.f,self__.ch,meta40809__$1));
});

cljs.core.async.t_cljs$core$async40808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40810){
var self__ = this;
var _40810__$1 = this;
return self__.meta40809;
});

cljs.core.async.t_cljs$core$async40808.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40808.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40808.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40808.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40808.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40811 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40811 = (function (f,ch,meta40809,_,fn1,meta40812){
this.f = f;
this.ch = ch;
this.meta40809 = meta40809;
this._ = _;
this.fn1 = fn1;
this.meta40812 = meta40812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40813,meta40812__$1){
var self__ = this;
var _40813__$1 = this;
return (new cljs.core.async.t_cljs$core$async40811(self__.f,self__.ch,self__.meta40809,self__._,self__.fn1,meta40812__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40811.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40813){
var self__ = this;
var _40813__$1 = this;
return self__.meta40812;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40811.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40811.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40811.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40811.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40807_SHARP_){
return f1.call(null,(((p1__40807_SHARP_ == null))?null:self__.f.call(null,p1__40807_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40811.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40809","meta40809",953050157,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40808","cljs.core.async/t_cljs$core$async40808",798929959,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40812","meta40812",-45828797,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40811.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40811";

cljs.core.async.t_cljs$core$async40811.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40811");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40811 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40811(f__$1,ch__$1,meta40809__$1,___$2,fn1__$1,meta40812){
return (new cljs.core.async.t_cljs$core$async40811(f__$1,ch__$1,meta40809__$1,___$2,fn1__$1,meta40812));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40811(self__.f,self__.ch,self__.meta40809,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async40808.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40808.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40809","meta40809",953050157,null)], null);
});

cljs.core.async.t_cljs$core$async40808.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40808";

cljs.core.async.t_cljs$core$async40808.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40808");
});

cljs.core.async.__GT_t_cljs$core$async40808 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40808(f__$1,ch__$1,meta40809){
return (new cljs.core.async.t_cljs$core$async40808(f__$1,ch__$1,meta40809));
});

}

return (new cljs.core.async.t_cljs$core$async40808(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40814 = (function (f,ch,meta40815){
this.f = f;
this.ch = ch;
this.meta40815 = meta40815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40816,meta40815__$1){
var self__ = this;
var _40816__$1 = this;
return (new cljs.core.async.t_cljs$core$async40814(self__.f,self__.ch,meta40815__$1));
});

cljs.core.async.t_cljs$core$async40814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40816){
var self__ = this;
var _40816__$1 = this;
return self__.meta40815;
});

cljs.core.async.t_cljs$core$async40814.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40814.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40814.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40814.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40814.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40814.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40815","meta40815",-1916482098,null)], null);
});

cljs.core.async.t_cljs$core$async40814.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40814";

cljs.core.async.t_cljs$core$async40814.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40814");
});

cljs.core.async.__GT_t_cljs$core$async40814 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40814(f__$1,ch__$1,meta40815){
return (new cljs.core.async.t_cljs$core$async40814(f__$1,ch__$1,meta40815));
});

}

return (new cljs.core.async.t_cljs$core$async40814(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async40817 = (function (p,ch,meta40818){
this.p = p;
this.ch = ch;
this.meta40818 = meta40818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40819,meta40818__$1){
var self__ = this;
var _40819__$1 = this;
return (new cljs.core.async.t_cljs$core$async40817(self__.p,self__.ch,meta40818__$1));
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

cljs.core.async.t_cljs$core$async40817.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
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
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40818","meta40818",-283093088,null)], null);
});

cljs.core.async.t_cljs$core$async40817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40817";

cljs.core.async.t_cljs$core$async40817.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async40817");
});

cljs.core.async.__GT_t_cljs$core$async40817 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40817(p__$1,ch__$1,meta40818){
return (new cljs.core.async.t_cljs$core$async40817(p__$1,ch__$1,meta40818));
});

}

return (new cljs.core.async.t_cljs$core$async40817(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40821 = arguments.length;
switch (G__40821) {
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
var c__30624__auto___40861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___40861,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___40861,out){
return (function (state_40842){
var state_val_40843 = (state_40842[(1)]);
if((state_val_40843 === (7))){
var inst_40838 = (state_40842[(2)]);
var state_40842__$1 = state_40842;
var statearr_40844_40862 = state_40842__$1;
(statearr_40844_40862[(2)] = inst_40838);

(statearr_40844_40862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40843 === (1))){
var state_40842__$1 = state_40842;
var statearr_40845_40863 = state_40842__$1;
(statearr_40845_40863[(2)] = null);

(statearr_40845_40863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40843 === (4))){
var inst_40824 = (state_40842[(7)]);
var inst_40824__$1 = (state_40842[(2)]);
var inst_40825 = (inst_40824__$1 == null);
var state_40842__$1 = (function (){var statearr_40846 = state_40842;
(statearr_40846[(7)] = inst_40824__$1);

return statearr_40846;
})();
if(cljs.core.truth_(inst_40825)){
var statearr_40847_40864 = state_40842__$1;
(statearr_40847_40864[(1)] = (5));

} else {
var statearr_40848_40865 = state_40842__$1;
(statearr_40848_40865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40843 === (6))){
var inst_40824 = (state_40842[(7)]);
var inst_40829 = p.call(null,inst_40824);
var state_40842__$1 = state_40842;
if(cljs.core.truth_(inst_40829)){
var statearr_40849_40866 = state_40842__$1;
(statearr_40849_40866[(1)] = (8));

} else {
var statearr_40850_40867 = state_40842__$1;
(statearr_40850_40867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40843 === (3))){
var inst_40840 = (state_40842[(2)]);
var state_40842__$1 = state_40842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40842__$1,inst_40840);
} else {
if((state_val_40843 === (2))){
var state_40842__$1 = state_40842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40842__$1,(4),ch);
} else {
if((state_val_40843 === (11))){
var inst_40832 = (state_40842[(2)]);
var state_40842__$1 = state_40842;
var statearr_40851_40868 = state_40842__$1;
(statearr_40851_40868[(2)] = inst_40832);

(statearr_40851_40868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40843 === (9))){
var state_40842__$1 = state_40842;
var statearr_40852_40869 = state_40842__$1;
(statearr_40852_40869[(2)] = null);

(statearr_40852_40869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40843 === (5))){
var inst_40827 = cljs.core.async.close_BANG_.call(null,out);
var state_40842__$1 = state_40842;
var statearr_40853_40870 = state_40842__$1;
(statearr_40853_40870[(2)] = inst_40827);

(statearr_40853_40870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40843 === (10))){
var inst_40835 = (state_40842[(2)]);
var state_40842__$1 = (function (){var statearr_40854 = state_40842;
(statearr_40854[(8)] = inst_40835);

return statearr_40854;
})();
var statearr_40855_40871 = state_40842__$1;
(statearr_40855_40871[(2)] = null);

(statearr_40855_40871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40843 === (8))){
var inst_40824 = (state_40842[(7)]);
var state_40842__$1 = state_40842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40842__$1,(11),out,inst_40824);
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
});})(c__30624__auto___40861,out))
;
return ((function (switch__30536__auto__,c__30624__auto___40861,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_40856 = [null,null,null,null,null,null,null,null,null];
(statearr_40856[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_40856[(1)] = (1));

return statearr_40856;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_40842){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40857){if((e40857 instanceof Object)){
var ex__30540__auto__ = e40857;
var statearr_40858_40872 = state_40842;
(statearr_40858_40872[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40873 = state_40842;
state_40842 = G__40873;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_40842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_40842);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___40861,out))
})();
var state__30626__auto__ = (function (){var statearr_40859 = f__30625__auto__.call(null);
(statearr_40859[(6)] = c__30624__auto___40861);

return statearr_40859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___40861,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40875 = arguments.length;
switch (G__40875) {
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
return (function (state_40938){
var state_val_40939 = (state_40938[(1)]);
if((state_val_40939 === (7))){
var inst_40934 = (state_40938[(2)]);
var state_40938__$1 = state_40938;
var statearr_40940_40978 = state_40938__$1;
(statearr_40940_40978[(2)] = inst_40934);

(statearr_40940_40978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (20))){
var inst_40904 = (state_40938[(7)]);
var inst_40915 = (state_40938[(2)]);
var inst_40916 = cljs.core.next.call(null,inst_40904);
var inst_40890 = inst_40916;
var inst_40891 = null;
var inst_40892 = (0);
var inst_40893 = (0);
var state_40938__$1 = (function (){var statearr_40941 = state_40938;
(statearr_40941[(8)] = inst_40891);

(statearr_40941[(9)] = inst_40890);

(statearr_40941[(10)] = inst_40892);

(statearr_40941[(11)] = inst_40915);

(statearr_40941[(12)] = inst_40893);

return statearr_40941;
})();
var statearr_40942_40979 = state_40938__$1;
(statearr_40942_40979[(2)] = null);

(statearr_40942_40979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (1))){
var state_40938__$1 = state_40938;
var statearr_40943_40980 = state_40938__$1;
(statearr_40943_40980[(2)] = null);

(statearr_40943_40980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (4))){
var inst_40879 = (state_40938[(13)]);
var inst_40879__$1 = (state_40938[(2)]);
var inst_40880 = (inst_40879__$1 == null);
var state_40938__$1 = (function (){var statearr_40944 = state_40938;
(statearr_40944[(13)] = inst_40879__$1);

return statearr_40944;
})();
if(cljs.core.truth_(inst_40880)){
var statearr_40945_40981 = state_40938__$1;
(statearr_40945_40981[(1)] = (5));

} else {
var statearr_40946_40982 = state_40938__$1;
(statearr_40946_40982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (15))){
var state_40938__$1 = state_40938;
var statearr_40950_40983 = state_40938__$1;
(statearr_40950_40983[(2)] = null);

(statearr_40950_40983[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (21))){
var state_40938__$1 = state_40938;
var statearr_40951_40984 = state_40938__$1;
(statearr_40951_40984[(2)] = null);

(statearr_40951_40984[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (13))){
var inst_40891 = (state_40938[(8)]);
var inst_40890 = (state_40938[(9)]);
var inst_40892 = (state_40938[(10)]);
var inst_40893 = (state_40938[(12)]);
var inst_40900 = (state_40938[(2)]);
var inst_40901 = (inst_40893 + (1));
var tmp40947 = inst_40891;
var tmp40948 = inst_40890;
var tmp40949 = inst_40892;
var inst_40890__$1 = tmp40948;
var inst_40891__$1 = tmp40947;
var inst_40892__$1 = tmp40949;
var inst_40893__$1 = inst_40901;
var state_40938__$1 = (function (){var statearr_40952 = state_40938;
(statearr_40952[(14)] = inst_40900);

(statearr_40952[(8)] = inst_40891__$1);

(statearr_40952[(9)] = inst_40890__$1);

(statearr_40952[(10)] = inst_40892__$1);

(statearr_40952[(12)] = inst_40893__$1);

return statearr_40952;
})();
var statearr_40953_40985 = state_40938__$1;
(statearr_40953_40985[(2)] = null);

(statearr_40953_40985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (22))){
var state_40938__$1 = state_40938;
var statearr_40954_40986 = state_40938__$1;
(statearr_40954_40986[(2)] = null);

(statearr_40954_40986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (6))){
var inst_40879 = (state_40938[(13)]);
var inst_40888 = f.call(null,inst_40879);
var inst_40889 = cljs.core.seq.call(null,inst_40888);
var inst_40890 = inst_40889;
var inst_40891 = null;
var inst_40892 = (0);
var inst_40893 = (0);
var state_40938__$1 = (function (){var statearr_40955 = state_40938;
(statearr_40955[(8)] = inst_40891);

(statearr_40955[(9)] = inst_40890);

(statearr_40955[(10)] = inst_40892);

(statearr_40955[(12)] = inst_40893);

return statearr_40955;
})();
var statearr_40956_40987 = state_40938__$1;
(statearr_40956_40987[(2)] = null);

(statearr_40956_40987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (17))){
var inst_40904 = (state_40938[(7)]);
var inst_40908 = cljs.core.chunk_first.call(null,inst_40904);
var inst_40909 = cljs.core.chunk_rest.call(null,inst_40904);
var inst_40910 = cljs.core.count.call(null,inst_40908);
var inst_40890 = inst_40909;
var inst_40891 = inst_40908;
var inst_40892 = inst_40910;
var inst_40893 = (0);
var state_40938__$1 = (function (){var statearr_40957 = state_40938;
(statearr_40957[(8)] = inst_40891);

(statearr_40957[(9)] = inst_40890);

(statearr_40957[(10)] = inst_40892);

(statearr_40957[(12)] = inst_40893);

return statearr_40957;
})();
var statearr_40958_40988 = state_40938__$1;
(statearr_40958_40988[(2)] = null);

(statearr_40958_40988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (3))){
var inst_40936 = (state_40938[(2)]);
var state_40938__$1 = state_40938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40938__$1,inst_40936);
} else {
if((state_val_40939 === (12))){
var inst_40924 = (state_40938[(2)]);
var state_40938__$1 = state_40938;
var statearr_40959_40989 = state_40938__$1;
(statearr_40959_40989[(2)] = inst_40924);

(statearr_40959_40989[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (2))){
var state_40938__$1 = state_40938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40938__$1,(4),in$);
} else {
if((state_val_40939 === (23))){
var inst_40932 = (state_40938[(2)]);
var state_40938__$1 = state_40938;
var statearr_40960_40990 = state_40938__$1;
(statearr_40960_40990[(2)] = inst_40932);

(statearr_40960_40990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (19))){
var inst_40919 = (state_40938[(2)]);
var state_40938__$1 = state_40938;
var statearr_40961_40991 = state_40938__$1;
(statearr_40961_40991[(2)] = inst_40919);

(statearr_40961_40991[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (11))){
var inst_40890 = (state_40938[(9)]);
var inst_40904 = (state_40938[(7)]);
var inst_40904__$1 = cljs.core.seq.call(null,inst_40890);
var state_40938__$1 = (function (){var statearr_40962 = state_40938;
(statearr_40962[(7)] = inst_40904__$1);

return statearr_40962;
})();
if(inst_40904__$1){
var statearr_40963_40992 = state_40938__$1;
(statearr_40963_40992[(1)] = (14));

} else {
var statearr_40964_40993 = state_40938__$1;
(statearr_40964_40993[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (9))){
var inst_40926 = (state_40938[(2)]);
var inst_40927 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40938__$1 = (function (){var statearr_40965 = state_40938;
(statearr_40965[(15)] = inst_40926);

return statearr_40965;
})();
if(cljs.core.truth_(inst_40927)){
var statearr_40966_40994 = state_40938__$1;
(statearr_40966_40994[(1)] = (21));

} else {
var statearr_40967_40995 = state_40938__$1;
(statearr_40967_40995[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (5))){
var inst_40882 = cljs.core.async.close_BANG_.call(null,out);
var state_40938__$1 = state_40938;
var statearr_40968_40996 = state_40938__$1;
(statearr_40968_40996[(2)] = inst_40882);

(statearr_40968_40996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (14))){
var inst_40904 = (state_40938[(7)]);
var inst_40906 = cljs.core.chunked_seq_QMARK_.call(null,inst_40904);
var state_40938__$1 = state_40938;
if(inst_40906){
var statearr_40969_40997 = state_40938__$1;
(statearr_40969_40997[(1)] = (17));

} else {
var statearr_40970_40998 = state_40938__$1;
(statearr_40970_40998[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (16))){
var inst_40922 = (state_40938[(2)]);
var state_40938__$1 = state_40938;
var statearr_40971_40999 = state_40938__$1;
(statearr_40971_40999[(2)] = inst_40922);

(statearr_40971_40999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40939 === (10))){
var inst_40891 = (state_40938[(8)]);
var inst_40893 = (state_40938[(12)]);
var inst_40898 = cljs.core._nth.call(null,inst_40891,inst_40893);
var state_40938__$1 = state_40938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40938__$1,(13),out,inst_40898);
} else {
if((state_val_40939 === (18))){
var inst_40904 = (state_40938[(7)]);
var inst_40913 = cljs.core.first.call(null,inst_40904);
var state_40938__$1 = state_40938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40938__$1,(20),out,inst_40913);
} else {
if((state_val_40939 === (8))){
var inst_40892 = (state_40938[(10)]);
var inst_40893 = (state_40938[(12)]);
var inst_40895 = (inst_40893 < inst_40892);
var inst_40896 = inst_40895;
var state_40938__$1 = state_40938;
if(cljs.core.truth_(inst_40896)){
var statearr_40972_41000 = state_40938__$1;
(statearr_40972_41000[(1)] = (10));

} else {
var statearr_40973_41001 = state_40938__$1;
(statearr_40973_41001[(1)] = (11));

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
var statearr_40974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40974[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__);

(statearr_40974[(1)] = (1));

return statearr_40974;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____1 = (function (state_40938){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_40938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e40975){if((e40975 instanceof Object)){
var ex__30540__auto__ = e40975;
var statearr_40976_41002 = state_40938;
(statearr_40976_41002[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41003 = state_40938;
state_40938 = G__41003;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__ = function(state_40938){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____1.call(this,state_40938);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30537__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto__))
})();
var state__30626__auto__ = (function (){var statearr_40977 = f__30625__auto__.call(null);
(statearr_40977[(6)] = c__30624__auto__);

return statearr_40977;
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
var G__41005 = arguments.length;
switch (G__41005) {
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
var G__41008 = arguments.length;
switch (G__41008) {
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
var G__41011 = arguments.length;
switch (G__41011) {
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
var c__30624__auto___41058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___41058,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___41058,out){
return (function (state_41035){
var state_val_41036 = (state_41035[(1)]);
if((state_val_41036 === (7))){
var inst_41030 = (state_41035[(2)]);
var state_41035__$1 = state_41035;
var statearr_41037_41059 = state_41035__$1;
(statearr_41037_41059[(2)] = inst_41030);

(statearr_41037_41059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41036 === (1))){
var inst_41012 = null;
var state_41035__$1 = (function (){var statearr_41038 = state_41035;
(statearr_41038[(7)] = inst_41012);

return statearr_41038;
})();
var statearr_41039_41060 = state_41035__$1;
(statearr_41039_41060[(2)] = null);

(statearr_41039_41060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41036 === (4))){
var inst_41015 = (state_41035[(8)]);
var inst_41015__$1 = (state_41035[(2)]);
var inst_41016 = (inst_41015__$1 == null);
var inst_41017 = cljs.core.not.call(null,inst_41016);
var state_41035__$1 = (function (){var statearr_41040 = state_41035;
(statearr_41040[(8)] = inst_41015__$1);

return statearr_41040;
})();
if(inst_41017){
var statearr_41041_41061 = state_41035__$1;
(statearr_41041_41061[(1)] = (5));

} else {
var statearr_41042_41062 = state_41035__$1;
(statearr_41042_41062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41036 === (6))){
var state_41035__$1 = state_41035;
var statearr_41043_41063 = state_41035__$1;
(statearr_41043_41063[(2)] = null);

(statearr_41043_41063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41036 === (3))){
var inst_41032 = (state_41035[(2)]);
var inst_41033 = cljs.core.async.close_BANG_.call(null,out);
var state_41035__$1 = (function (){var statearr_41044 = state_41035;
(statearr_41044[(9)] = inst_41032);

return statearr_41044;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41035__$1,inst_41033);
} else {
if((state_val_41036 === (2))){
var state_41035__$1 = state_41035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41035__$1,(4),ch);
} else {
if((state_val_41036 === (11))){
var inst_41015 = (state_41035[(8)]);
var inst_41024 = (state_41035[(2)]);
var inst_41012 = inst_41015;
var state_41035__$1 = (function (){var statearr_41045 = state_41035;
(statearr_41045[(7)] = inst_41012);

(statearr_41045[(10)] = inst_41024);

return statearr_41045;
})();
var statearr_41046_41064 = state_41035__$1;
(statearr_41046_41064[(2)] = null);

(statearr_41046_41064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41036 === (9))){
var inst_41015 = (state_41035[(8)]);
var state_41035__$1 = state_41035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41035__$1,(11),out,inst_41015);
} else {
if((state_val_41036 === (5))){
var inst_41012 = (state_41035[(7)]);
var inst_41015 = (state_41035[(8)]);
var inst_41019 = cljs.core._EQ_.call(null,inst_41015,inst_41012);
var state_41035__$1 = state_41035;
if(inst_41019){
var statearr_41048_41065 = state_41035__$1;
(statearr_41048_41065[(1)] = (8));

} else {
var statearr_41049_41066 = state_41035__$1;
(statearr_41049_41066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41036 === (10))){
var inst_41027 = (state_41035[(2)]);
var state_41035__$1 = state_41035;
var statearr_41050_41067 = state_41035__$1;
(statearr_41050_41067[(2)] = inst_41027);

(statearr_41050_41067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41036 === (8))){
var inst_41012 = (state_41035[(7)]);
var tmp41047 = inst_41012;
var inst_41012__$1 = tmp41047;
var state_41035__$1 = (function (){var statearr_41051 = state_41035;
(statearr_41051[(7)] = inst_41012__$1);

return statearr_41051;
})();
var statearr_41052_41068 = state_41035__$1;
(statearr_41052_41068[(2)] = null);

(statearr_41052_41068[(1)] = (2));


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
});})(c__30624__auto___41058,out))
;
return ((function (switch__30536__auto__,c__30624__auto___41058,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_41053 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41053[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_41053[(1)] = (1));

return statearr_41053;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_41035){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_41035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e41054){if((e41054 instanceof Object)){
var ex__30540__auto__ = e41054;
var statearr_41055_41069 = state_41035;
(statearr_41055_41069[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41070 = state_41035;
state_41035 = G__41070;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_41035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_41035);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___41058,out))
})();
var state__30626__auto__ = (function (){var statearr_41056 = f__30625__auto__.call(null);
(statearr_41056[(6)] = c__30624__auto___41058);

return statearr_41056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___41058,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41072 = arguments.length;
switch (G__41072) {
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
var c__30624__auto___41138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___41138,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___41138,out){
return (function (state_41110){
var state_val_41111 = (state_41110[(1)]);
if((state_val_41111 === (7))){
var inst_41106 = (state_41110[(2)]);
var state_41110__$1 = state_41110;
var statearr_41112_41139 = state_41110__$1;
(statearr_41112_41139[(2)] = inst_41106);

(statearr_41112_41139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (1))){
var inst_41073 = (new Array(n));
var inst_41074 = inst_41073;
var inst_41075 = (0);
var state_41110__$1 = (function (){var statearr_41113 = state_41110;
(statearr_41113[(7)] = inst_41075);

(statearr_41113[(8)] = inst_41074);

return statearr_41113;
})();
var statearr_41114_41140 = state_41110__$1;
(statearr_41114_41140[(2)] = null);

(statearr_41114_41140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (4))){
var inst_41078 = (state_41110[(9)]);
var inst_41078__$1 = (state_41110[(2)]);
var inst_41079 = (inst_41078__$1 == null);
var inst_41080 = cljs.core.not.call(null,inst_41079);
var state_41110__$1 = (function (){var statearr_41115 = state_41110;
(statearr_41115[(9)] = inst_41078__$1);

return statearr_41115;
})();
if(inst_41080){
var statearr_41116_41141 = state_41110__$1;
(statearr_41116_41141[(1)] = (5));

} else {
var statearr_41117_41142 = state_41110__$1;
(statearr_41117_41142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (15))){
var inst_41100 = (state_41110[(2)]);
var state_41110__$1 = state_41110;
var statearr_41118_41143 = state_41110__$1;
(statearr_41118_41143[(2)] = inst_41100);

(statearr_41118_41143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (13))){
var state_41110__$1 = state_41110;
var statearr_41119_41144 = state_41110__$1;
(statearr_41119_41144[(2)] = null);

(statearr_41119_41144[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (6))){
var inst_41075 = (state_41110[(7)]);
var inst_41096 = (inst_41075 > (0));
var state_41110__$1 = state_41110;
if(cljs.core.truth_(inst_41096)){
var statearr_41120_41145 = state_41110__$1;
(statearr_41120_41145[(1)] = (12));

} else {
var statearr_41121_41146 = state_41110__$1;
(statearr_41121_41146[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (3))){
var inst_41108 = (state_41110[(2)]);
var state_41110__$1 = state_41110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41110__$1,inst_41108);
} else {
if((state_val_41111 === (12))){
var inst_41074 = (state_41110[(8)]);
var inst_41098 = cljs.core.vec.call(null,inst_41074);
var state_41110__$1 = state_41110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41110__$1,(15),out,inst_41098);
} else {
if((state_val_41111 === (2))){
var state_41110__$1 = state_41110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41110__$1,(4),ch);
} else {
if((state_val_41111 === (11))){
var inst_41090 = (state_41110[(2)]);
var inst_41091 = (new Array(n));
var inst_41074 = inst_41091;
var inst_41075 = (0);
var state_41110__$1 = (function (){var statearr_41122 = state_41110;
(statearr_41122[(7)] = inst_41075);

(statearr_41122[(8)] = inst_41074);

(statearr_41122[(10)] = inst_41090);

return statearr_41122;
})();
var statearr_41123_41147 = state_41110__$1;
(statearr_41123_41147[(2)] = null);

(statearr_41123_41147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (9))){
var inst_41074 = (state_41110[(8)]);
var inst_41088 = cljs.core.vec.call(null,inst_41074);
var state_41110__$1 = state_41110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41110__$1,(11),out,inst_41088);
} else {
if((state_val_41111 === (5))){
var inst_41075 = (state_41110[(7)]);
var inst_41074 = (state_41110[(8)]);
var inst_41078 = (state_41110[(9)]);
var inst_41083 = (state_41110[(11)]);
var inst_41082 = (inst_41074[inst_41075] = inst_41078);
var inst_41083__$1 = (inst_41075 + (1));
var inst_41084 = (inst_41083__$1 < n);
var state_41110__$1 = (function (){var statearr_41124 = state_41110;
(statearr_41124[(11)] = inst_41083__$1);

(statearr_41124[(12)] = inst_41082);

return statearr_41124;
})();
if(cljs.core.truth_(inst_41084)){
var statearr_41125_41148 = state_41110__$1;
(statearr_41125_41148[(1)] = (8));

} else {
var statearr_41126_41149 = state_41110__$1;
(statearr_41126_41149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (14))){
var inst_41103 = (state_41110[(2)]);
var inst_41104 = cljs.core.async.close_BANG_.call(null,out);
var state_41110__$1 = (function (){var statearr_41128 = state_41110;
(statearr_41128[(13)] = inst_41103);

return statearr_41128;
})();
var statearr_41129_41150 = state_41110__$1;
(statearr_41129_41150[(2)] = inst_41104);

(statearr_41129_41150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (10))){
var inst_41094 = (state_41110[(2)]);
var state_41110__$1 = state_41110;
var statearr_41130_41151 = state_41110__$1;
(statearr_41130_41151[(2)] = inst_41094);

(statearr_41130_41151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41111 === (8))){
var inst_41074 = (state_41110[(8)]);
var inst_41083 = (state_41110[(11)]);
var tmp41127 = inst_41074;
var inst_41074__$1 = tmp41127;
var inst_41075 = inst_41083;
var state_41110__$1 = (function (){var statearr_41131 = state_41110;
(statearr_41131[(7)] = inst_41075);

(statearr_41131[(8)] = inst_41074__$1);

return statearr_41131;
})();
var statearr_41132_41152 = state_41110__$1;
(statearr_41132_41152[(2)] = null);

(statearr_41132_41152[(1)] = (2));


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
});})(c__30624__auto___41138,out))
;
return ((function (switch__30536__auto__,c__30624__auto___41138,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_41133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41133[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_41133[(1)] = (1));

return statearr_41133;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_41110){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_41110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e41134){if((e41134 instanceof Object)){
var ex__30540__auto__ = e41134;
var statearr_41135_41153 = state_41110;
(statearr_41135_41153[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41154 = state_41110;
state_41110 = G__41154;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_41110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_41110);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___41138,out))
})();
var state__30626__auto__ = (function (){var statearr_41136 = f__30625__auto__.call(null);
(statearr_41136[(6)] = c__30624__auto___41138);

return statearr_41136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___41138,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41156 = arguments.length;
switch (G__41156) {
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
var c__30624__auto___41226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30624__auto___41226,out){
return (function (){
var f__30625__auto__ = (function (){var switch__30536__auto__ = ((function (c__30624__auto___41226,out){
return (function (state_41198){
var state_val_41199 = (state_41198[(1)]);
if((state_val_41199 === (7))){
var inst_41194 = (state_41198[(2)]);
var state_41198__$1 = state_41198;
var statearr_41200_41227 = state_41198__$1;
(statearr_41200_41227[(2)] = inst_41194);

(statearr_41200_41227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41199 === (1))){
var inst_41157 = [];
var inst_41158 = inst_41157;
var inst_41159 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41198__$1 = (function (){var statearr_41201 = state_41198;
(statearr_41201[(7)] = inst_41158);

(statearr_41201[(8)] = inst_41159);

return statearr_41201;
})();
var statearr_41202_41228 = state_41198__$1;
(statearr_41202_41228[(2)] = null);

(statearr_41202_41228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41199 === (4))){
var inst_41162 = (state_41198[(9)]);
var inst_41162__$1 = (state_41198[(2)]);
var inst_41163 = (inst_41162__$1 == null);
var inst_41164 = cljs.core.not.call(null,inst_41163);
var state_41198__$1 = (function (){var statearr_41203 = state_41198;
(statearr_41203[(9)] = inst_41162__$1);

return statearr_41203;
})();
if(inst_41164){
var statearr_41204_41229 = state_41198__$1;
(statearr_41204_41229[(1)] = (5));

} else {
var statearr_41205_41230 = state_41198__$1;
(statearr_41205_41230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41199 === (15))){
var inst_41188 = (state_41198[(2)]);
var state_41198__$1 = state_41198;
var statearr_41206_41231 = state_41198__$1;
(statearr_41206_41231[(2)] = inst_41188);

(statearr_41206_41231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41199 === (13))){
var state_41198__$1 = state_41198;
var statearr_41207_41232 = state_41198__$1;
(statearr_41207_41232[(2)] = null);

(statearr_41207_41232[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41199 === (6))){
var inst_41158 = (state_41198[(7)]);
var inst_41183 = inst_41158.length;
var inst_41184 = (inst_41183 > (0));
var state_41198__$1 = state_41198;
if(cljs.core.truth_(inst_41184)){
var statearr_41208_41233 = state_41198__$1;
(statearr_41208_41233[(1)] = (12));

} else {
var statearr_41209_41234 = state_41198__$1;
(statearr_41209_41234[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41199 === (3))){
var inst_41196 = (state_41198[(2)]);
var state_41198__$1 = state_41198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41198__$1,inst_41196);
} else {
if((state_val_41199 === (12))){
var inst_41158 = (state_41198[(7)]);
var inst_41186 = cljs.core.vec.call(null,inst_41158);
var state_41198__$1 = state_41198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41198__$1,(15),out,inst_41186);
} else {
if((state_val_41199 === (2))){
var state_41198__$1 = state_41198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41198__$1,(4),ch);
} else {
if((state_val_41199 === (11))){
var inst_41162 = (state_41198[(9)]);
var inst_41166 = (state_41198[(10)]);
var inst_41176 = (state_41198[(2)]);
var inst_41177 = [];
var inst_41178 = inst_41177.push(inst_41162);
var inst_41158 = inst_41177;
var inst_41159 = inst_41166;
var state_41198__$1 = (function (){var statearr_41210 = state_41198;
(statearr_41210[(11)] = inst_41176);

(statearr_41210[(7)] = inst_41158);

(statearr_41210[(12)] = inst_41178);

(statearr_41210[(8)] = inst_41159);

return statearr_41210;
})();
var statearr_41211_41235 = state_41198__$1;
(statearr_41211_41235[(2)] = null);

(statearr_41211_41235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41199 === (9))){
var inst_41158 = (state_41198[(7)]);
var inst_41174 = cljs.core.vec.call(null,inst_41158);
var state_41198__$1 = state_41198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41198__$1,(11),out,inst_41174);
} else {
if((state_val_41199 === (5))){
var inst_41162 = (state_41198[(9)]);
var inst_41166 = (state_41198[(10)]);
var inst_41159 = (state_41198[(8)]);
var inst_41166__$1 = f.call(null,inst_41162);
var inst_41167 = cljs.core._EQ_.call(null,inst_41166__$1,inst_41159);
var inst_41168 = cljs.core.keyword_identical_QMARK_.call(null,inst_41159,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41169 = (inst_41167) || (inst_41168);
var state_41198__$1 = (function (){var statearr_41212 = state_41198;
(statearr_41212[(10)] = inst_41166__$1);

return statearr_41212;
})();
if(cljs.core.truth_(inst_41169)){
var statearr_41213_41236 = state_41198__$1;
(statearr_41213_41236[(1)] = (8));

} else {
var statearr_41214_41237 = state_41198__$1;
(statearr_41214_41237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41199 === (14))){
var inst_41191 = (state_41198[(2)]);
var inst_41192 = cljs.core.async.close_BANG_.call(null,out);
var state_41198__$1 = (function (){var statearr_41216 = state_41198;
(statearr_41216[(13)] = inst_41191);

return statearr_41216;
})();
var statearr_41217_41238 = state_41198__$1;
(statearr_41217_41238[(2)] = inst_41192);

(statearr_41217_41238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41199 === (10))){
var inst_41181 = (state_41198[(2)]);
var state_41198__$1 = state_41198;
var statearr_41218_41239 = state_41198__$1;
(statearr_41218_41239[(2)] = inst_41181);

(statearr_41218_41239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41199 === (8))){
var inst_41158 = (state_41198[(7)]);
var inst_41162 = (state_41198[(9)]);
var inst_41166 = (state_41198[(10)]);
var inst_41171 = inst_41158.push(inst_41162);
var tmp41215 = inst_41158;
var inst_41158__$1 = tmp41215;
var inst_41159 = inst_41166;
var state_41198__$1 = (function (){var statearr_41219 = state_41198;
(statearr_41219[(7)] = inst_41158__$1);

(statearr_41219[(14)] = inst_41171);

(statearr_41219[(8)] = inst_41159);

return statearr_41219;
})();
var statearr_41220_41240 = state_41198__$1;
(statearr_41220_41240[(2)] = null);

(statearr_41220_41240[(1)] = (2));


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
});})(c__30624__auto___41226,out))
;
return ((function (switch__30536__auto__,c__30624__auto___41226,out){
return (function() {
var cljs$core$async$state_machine__30537__auto__ = null;
var cljs$core$async$state_machine__30537__auto____0 = (function (){
var statearr_41221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41221[(0)] = cljs$core$async$state_machine__30537__auto__);

(statearr_41221[(1)] = (1));

return statearr_41221;
});
var cljs$core$async$state_machine__30537__auto____1 = (function (state_41198){
while(true){
var ret_value__30538__auto__ = (function (){try{while(true){
var result__30539__auto__ = switch__30536__auto__.call(null,state_41198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30539__auto__;
}
break;
}
}catch (e41222){if((e41222 instanceof Object)){
var ex__30540__auto__ = e41222;
var statearr_41223_41241 = state_41198;
(statearr_41223_41241[(5)] = ex__30540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41242 = state_41198;
state_41198 = G__41242;
continue;
} else {
return ret_value__30538__auto__;
}
break;
}
});
cljs$core$async$state_machine__30537__auto__ = function(state_41198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30537__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30537__auto____1.call(this,state_41198);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30537__auto____0;
cljs$core$async$state_machine__30537__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30537__auto____1;
return cljs$core$async$state_machine__30537__auto__;
})()
;})(switch__30536__auto__,c__30624__auto___41226,out))
})();
var state__30626__auto__ = (function (){var statearr_41224 = f__30625__auto__.call(null);
(statearr_41224[(6)] = c__30624__auto___41226);

return statearr_41224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30626__auto__);
});})(c__30624__auto___41226,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1516053506785
