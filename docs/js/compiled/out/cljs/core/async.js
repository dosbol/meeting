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
var G__41748 = arguments.length;
switch (G__41748) {
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
if(typeof cljs.core.async.t_cljs$core$async41749 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41749 = (function (f,blockable,meta41750){
this.f = f;
this.blockable = blockable;
this.meta41750 = meta41750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41751,meta41750__$1){
var self__ = this;
var _41751__$1 = this;
return (new cljs.core.async.t_cljs$core$async41749(self__.f,self__.blockable,meta41750__$1));
});

cljs.core.async.t_cljs$core$async41749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41751){
var self__ = this;
var _41751__$1 = this;
return self__.meta41750;
});

cljs.core.async.t_cljs$core$async41749.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41749.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async41749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async41749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41750","meta41750",-572656017,null)], null);
});

cljs.core.async.t_cljs$core$async41749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41749";

cljs.core.async.t_cljs$core$async41749.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async41749");
});

cljs.core.async.__GT_t_cljs$core$async41749 = (function cljs$core$async$__GT_t_cljs$core$async41749(f__$1,blockable__$1,meta41750){
return (new cljs.core.async.t_cljs$core$async41749(f__$1,blockable__$1,meta41750));
});

}

return (new cljs.core.async.t_cljs$core$async41749(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__41755 = arguments.length;
switch (G__41755) {
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
var G__41758 = arguments.length;
switch (G__41758) {
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
var G__41761 = arguments.length;
switch (G__41761) {
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
var val_41763 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_41763);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_41763,ret){
return (function (){
return fn1.call(null,val_41763);
});})(val_41763,ret))
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
var G__41765 = arguments.length;
switch (G__41765) {
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
var n__29231__auto___41767 = n;
var x_41768 = (0);
while(true){
if((x_41768 < n__29231__auto___41767)){
(a[x_41768] = (0));

var G__41769 = (x_41768 + (1));
x_41768 = G__41769;
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

var G__41770 = (i + (1));
i = G__41770;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async41771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41771 = (function (flag,meta41772){
this.flag = flag;
this.meta41772 = meta41772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_41773,meta41772__$1){
var self__ = this;
var _41773__$1 = this;
return (new cljs.core.async.t_cljs$core$async41771(self__.flag,meta41772__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async41771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_41773){
var self__ = this;
var _41773__$1 = this;
return self__.meta41772;
});})(flag))
;

cljs.core.async.t_cljs$core$async41771.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41771.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async41771.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41771.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41771.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41772","meta41772",-758243981,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async41771.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41771";

cljs.core.async.t_cljs$core$async41771.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async41771");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async41771 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41771(flag__$1,meta41772){
return (new cljs.core.async.t_cljs$core$async41771(flag__$1,meta41772));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async41771(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async41774 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41774 = (function (flag,cb,meta41775){
this.flag = flag;
this.cb = cb;
this.meta41775 = meta41775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41776,meta41775__$1){
var self__ = this;
var _41776__$1 = this;
return (new cljs.core.async.t_cljs$core$async41774(self__.flag,self__.cb,meta41775__$1));
});

cljs.core.async.t_cljs$core$async41774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41776){
var self__ = this;
var _41776__$1 = this;
return self__.meta41775;
});

cljs.core.async.t_cljs$core$async41774.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41774.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async41774.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41774.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async41774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41775","meta41775",918685821,null)], null);
});

cljs.core.async.t_cljs$core$async41774.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41774";

cljs.core.async.t_cljs$core$async41774.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async41774");
});

cljs.core.async.__GT_t_cljs$core$async41774 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41774(flag__$1,cb__$1,meta41775){
return (new cljs.core.async.t_cljs$core$async41774(flag__$1,cb__$1,meta41775));
});

}

return (new cljs.core.async.t_cljs$core$async41774(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__41777_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41777_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41778_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41778_SHARP_,port], null));
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
var G__41779 = (i + (1));
i = G__41779;
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
var len__29455__auto___41785 = arguments.length;
var i__29456__auto___41786 = (0);
while(true){
if((i__29456__auto___41786 < len__29455__auto___41785)){
args__29462__auto__.push((arguments[i__29456__auto___41786]));

var G__41787 = (i__29456__auto___41786 + (1));
i__29456__auto___41786 = G__41787;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41782){
var map__41783 = p__41782;
var map__41783__$1 = ((((!((map__41783 == null)))?((((map__41783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41783):map__41783);
var opts = map__41783__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41780){
var G__41781 = cljs.core.first.call(null,seq41780);
var seq41780__$1 = cljs.core.next.call(null,seq41780);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41781,seq41780__$1);
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
var G__41789 = arguments.length;
switch (G__41789) {
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
var c__32751__auto___41835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___41835){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___41835){
return (function (state_41813){
var state_val_41814 = (state_41813[(1)]);
if((state_val_41814 === (7))){
var inst_41809 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
var statearr_41815_41836 = state_41813__$1;
(statearr_41815_41836[(2)] = inst_41809);

(statearr_41815_41836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (1))){
var state_41813__$1 = state_41813;
var statearr_41816_41837 = state_41813__$1;
(statearr_41816_41837[(2)] = null);

(statearr_41816_41837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (4))){
var inst_41792 = (state_41813[(7)]);
var inst_41792__$1 = (state_41813[(2)]);
var inst_41793 = (inst_41792__$1 == null);
var state_41813__$1 = (function (){var statearr_41817 = state_41813;
(statearr_41817[(7)] = inst_41792__$1);

return statearr_41817;
})();
if(cljs.core.truth_(inst_41793)){
var statearr_41818_41838 = state_41813__$1;
(statearr_41818_41838[(1)] = (5));

} else {
var statearr_41819_41839 = state_41813__$1;
(statearr_41819_41839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (13))){
var state_41813__$1 = state_41813;
var statearr_41820_41840 = state_41813__$1;
(statearr_41820_41840[(2)] = null);

(statearr_41820_41840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (6))){
var inst_41792 = (state_41813[(7)]);
var state_41813__$1 = state_41813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41813__$1,(11),to,inst_41792);
} else {
if((state_val_41814 === (3))){
var inst_41811 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41813__$1,inst_41811);
} else {
if((state_val_41814 === (12))){
var state_41813__$1 = state_41813;
var statearr_41821_41841 = state_41813__$1;
(statearr_41821_41841[(2)] = null);

(statearr_41821_41841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (2))){
var state_41813__$1 = state_41813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41813__$1,(4),from);
} else {
if((state_val_41814 === (11))){
var inst_41802 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
if(cljs.core.truth_(inst_41802)){
var statearr_41822_41842 = state_41813__$1;
(statearr_41822_41842[(1)] = (12));

} else {
var statearr_41823_41843 = state_41813__$1;
(statearr_41823_41843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (9))){
var state_41813__$1 = state_41813;
var statearr_41824_41844 = state_41813__$1;
(statearr_41824_41844[(2)] = null);

(statearr_41824_41844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (5))){
var state_41813__$1 = state_41813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41825_41845 = state_41813__$1;
(statearr_41825_41845[(1)] = (8));

} else {
var statearr_41826_41846 = state_41813__$1;
(statearr_41826_41846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (14))){
var inst_41807 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
var statearr_41827_41847 = state_41813__$1;
(statearr_41827_41847[(2)] = inst_41807);

(statearr_41827_41847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (10))){
var inst_41799 = (state_41813[(2)]);
var state_41813__$1 = state_41813;
var statearr_41828_41848 = state_41813__$1;
(statearr_41828_41848[(2)] = inst_41799);

(statearr_41828_41848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41814 === (8))){
var inst_41796 = cljs.core.async.close_BANG_.call(null,to);
var state_41813__$1 = state_41813;
var statearr_41829_41849 = state_41813__$1;
(statearr_41829_41849[(2)] = inst_41796);

(statearr_41829_41849[(1)] = (10));


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
});})(c__32751__auto___41835))
;
return ((function (switch__32663__auto__,c__32751__auto___41835){
return (function() {
var cljs$core$async$state_machine__32664__auto__ = null;
var cljs$core$async$state_machine__32664__auto____0 = (function (){
var statearr_41830 = [null,null,null,null,null,null,null,null];
(statearr_41830[(0)] = cljs$core$async$state_machine__32664__auto__);

(statearr_41830[(1)] = (1));

return statearr_41830;
});
var cljs$core$async$state_machine__32664__auto____1 = (function (state_41813){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_41813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e41831){if((e41831 instanceof Object)){
var ex__32667__auto__ = e41831;
var statearr_41832_41850 = state_41813;
(statearr_41832_41850[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41851 = state_41813;
state_41813 = G__41851;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$state_machine__32664__auto__ = function(state_41813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32664__auto____1.call(this,state_41813);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32664__auto____0;
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32664__auto____1;
return cljs$core$async$state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___41835))
})();
var state__32753__auto__ = (function (){var statearr_41833 = f__32752__auto__.call(null);
(statearr_41833[(6)] = c__32751__auto___41835);

return statearr_41833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___41835))
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
return (function (p__41852){
var vec__41853 = p__41852;
var v = cljs.core.nth.call(null,vec__41853,(0),null);
var p = cljs.core.nth.call(null,vec__41853,(1),null);
var job = vec__41853;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32751__auto___42024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___42024,res,vec__41853,v,p,job,jobs,results){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___42024,res,vec__41853,v,p,job,jobs,results){
return (function (state_41860){
var state_val_41861 = (state_41860[(1)]);
if((state_val_41861 === (1))){
var state_41860__$1 = state_41860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41860__$1,(2),res,v);
} else {
if((state_val_41861 === (2))){
var inst_41857 = (state_41860[(2)]);
var inst_41858 = cljs.core.async.close_BANG_.call(null,res);
var state_41860__$1 = (function (){var statearr_41862 = state_41860;
(statearr_41862[(7)] = inst_41857);

return statearr_41862;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41860__$1,inst_41858);
} else {
return null;
}
}
});})(c__32751__auto___42024,res,vec__41853,v,p,job,jobs,results))
;
return ((function (switch__32663__auto__,c__32751__auto___42024,res,vec__41853,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____0 = (function (){
var statearr_41863 = [null,null,null,null,null,null,null,null];
(statearr_41863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__);

(statearr_41863[(1)] = (1));

return statearr_41863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____1 = (function (state_41860){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_41860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e41864){if((e41864 instanceof Object)){
var ex__32667__auto__ = e41864;
var statearr_41865_42025 = state_41860;
(statearr_41865_42025[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42026 = state_41860;
state_41860 = G__42026;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__ = function(state_41860){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____1.call(this,state_41860);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___42024,res,vec__41853,v,p,job,jobs,results))
})();
var state__32753__auto__ = (function (){var statearr_41866 = f__32752__auto__.call(null);
(statearr_41866[(6)] = c__32751__auto___42024);

return statearr_41866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___42024,res,vec__41853,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41867){
var vec__41868 = p__41867;
var v = cljs.core.nth.call(null,vec__41868,(0),null);
var p = cljs.core.nth.call(null,vec__41868,(1),null);
var job = vec__41868;
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
var n__29231__auto___42027 = n;
var __42028 = (0);
while(true){
if((__42028 < n__29231__auto___42027)){
var G__41871_42029 = type;
var G__41871_42030__$1 = (((G__41871_42029 instanceof cljs.core.Keyword))?G__41871_42029.fqn:null);
switch (G__41871_42030__$1) {
case "compute":
var c__32751__auto___42032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42028,c__32751__auto___42032,G__41871_42029,G__41871_42030__$1,n__29231__auto___42027,jobs,results,process,async){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (__42028,c__32751__auto___42032,G__41871_42029,G__41871_42030__$1,n__29231__auto___42027,jobs,results,process,async){
return (function (state_41884){
var state_val_41885 = (state_41884[(1)]);
if((state_val_41885 === (1))){
var state_41884__$1 = state_41884;
var statearr_41886_42033 = state_41884__$1;
(statearr_41886_42033[(2)] = null);

(statearr_41886_42033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41885 === (2))){
var state_41884__$1 = state_41884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41884__$1,(4),jobs);
} else {
if((state_val_41885 === (3))){
var inst_41882 = (state_41884[(2)]);
var state_41884__$1 = state_41884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41884__$1,inst_41882);
} else {
if((state_val_41885 === (4))){
var inst_41874 = (state_41884[(2)]);
var inst_41875 = process.call(null,inst_41874);
var state_41884__$1 = state_41884;
if(cljs.core.truth_(inst_41875)){
var statearr_41887_42034 = state_41884__$1;
(statearr_41887_42034[(1)] = (5));

} else {
var statearr_41888_42035 = state_41884__$1;
(statearr_41888_42035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41885 === (5))){
var state_41884__$1 = state_41884;
var statearr_41889_42036 = state_41884__$1;
(statearr_41889_42036[(2)] = null);

(statearr_41889_42036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41885 === (6))){
var state_41884__$1 = state_41884;
var statearr_41890_42037 = state_41884__$1;
(statearr_41890_42037[(2)] = null);

(statearr_41890_42037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41885 === (7))){
var inst_41880 = (state_41884[(2)]);
var state_41884__$1 = state_41884;
var statearr_41891_42038 = state_41884__$1;
(statearr_41891_42038[(2)] = inst_41880);

(statearr_41891_42038[(1)] = (3));


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
});})(__42028,c__32751__auto___42032,G__41871_42029,G__41871_42030__$1,n__29231__auto___42027,jobs,results,process,async))
;
return ((function (__42028,switch__32663__auto__,c__32751__auto___42032,G__41871_42029,G__41871_42030__$1,n__29231__auto___42027,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____0 = (function (){
var statearr_41892 = [null,null,null,null,null,null,null];
(statearr_41892[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__);

(statearr_41892[(1)] = (1));

return statearr_41892;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____1 = (function (state_41884){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_41884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e41893){if((e41893 instanceof Object)){
var ex__32667__auto__ = e41893;
var statearr_41894_42039 = state_41884;
(statearr_41894_42039[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42040 = state_41884;
state_41884 = G__42040;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__ = function(state_41884){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____1.call(this,state_41884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__;
})()
;})(__42028,switch__32663__auto__,c__32751__auto___42032,G__41871_42029,G__41871_42030__$1,n__29231__auto___42027,jobs,results,process,async))
})();
var state__32753__auto__ = (function (){var statearr_41895 = f__32752__auto__.call(null);
(statearr_41895[(6)] = c__32751__auto___42032);

return statearr_41895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(__42028,c__32751__auto___42032,G__41871_42029,G__41871_42030__$1,n__29231__auto___42027,jobs,results,process,async))
);


break;
case "async":
var c__32751__auto___42041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42028,c__32751__auto___42041,G__41871_42029,G__41871_42030__$1,n__29231__auto___42027,jobs,results,process,async){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (__42028,c__32751__auto___42041,G__41871_42029,G__41871_42030__$1,n__29231__auto___42027,jobs,results,process,async){
return (function (state_41908){
var state_val_41909 = (state_41908[(1)]);
if((state_val_41909 === (1))){
var state_41908__$1 = state_41908;
var statearr_41910_42042 = state_41908__$1;
(statearr_41910_42042[(2)] = null);

(statearr_41910_42042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41909 === (2))){
var state_41908__$1 = state_41908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41908__$1,(4),jobs);
} else {
if((state_val_41909 === (3))){
var inst_41906 = (state_41908[(2)]);
var state_41908__$1 = state_41908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41908__$1,inst_41906);
} else {
if((state_val_41909 === (4))){
var inst_41898 = (state_41908[(2)]);
var inst_41899 = async.call(null,inst_41898);
var state_41908__$1 = state_41908;
if(cljs.core.truth_(inst_41899)){
var statearr_41911_42043 = state_41908__$1;
(statearr_41911_42043[(1)] = (5));

} else {
var statearr_41912_42044 = state_41908__$1;
(statearr_41912_42044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41909 === (5))){
var state_41908__$1 = state_41908;
var statearr_41913_42045 = state_41908__$1;
(statearr_41913_42045[(2)] = null);

(statearr_41913_42045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41909 === (6))){
var state_41908__$1 = state_41908;
var statearr_41914_42046 = state_41908__$1;
(statearr_41914_42046[(2)] = null);

(statearr_41914_42046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41909 === (7))){
var inst_41904 = (state_41908[(2)]);
var state_41908__$1 = state_41908;
var statearr_41915_42047 = state_41908__$1;
(statearr_41915_42047[(2)] = inst_41904);

(statearr_41915_42047[(1)] = (3));


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
});})(__42028,c__32751__auto___42041,G__41871_42029,G__41871_42030__$1,n__29231__auto___42027,jobs,results,process,async))
;
return ((function (__42028,switch__32663__auto__,c__32751__auto___42041,G__41871_42029,G__41871_42030__$1,n__29231__auto___42027,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____0 = (function (){
var statearr_41916 = [null,null,null,null,null,null,null];
(statearr_41916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__);

(statearr_41916[(1)] = (1));

return statearr_41916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____1 = (function (state_41908){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_41908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e41917){if((e41917 instanceof Object)){
var ex__32667__auto__ = e41917;
var statearr_41918_42048 = state_41908;
(statearr_41918_42048[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42049 = state_41908;
state_41908 = G__42049;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__ = function(state_41908){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____1.call(this,state_41908);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__;
})()
;})(__42028,switch__32663__auto__,c__32751__auto___42041,G__41871_42029,G__41871_42030__$1,n__29231__auto___42027,jobs,results,process,async))
})();
var state__32753__auto__ = (function (){var statearr_41919 = f__32752__auto__.call(null);
(statearr_41919[(6)] = c__32751__auto___42041);

return statearr_41919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(__42028,c__32751__auto___42041,G__41871_42029,G__41871_42030__$1,n__29231__auto___42027,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41871_42030__$1)].join('')));

}

var G__42050 = (__42028 + (1));
__42028 = G__42050;
continue;
} else {
}
break;
}

var c__32751__auto___42051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___42051,jobs,results,process,async){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___42051,jobs,results,process,async){
return (function (state_41941){
var state_val_41942 = (state_41941[(1)]);
if((state_val_41942 === (1))){
var state_41941__$1 = state_41941;
var statearr_41943_42052 = state_41941__$1;
(statearr_41943_42052[(2)] = null);

(statearr_41943_42052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41942 === (2))){
var state_41941__$1 = state_41941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41941__$1,(4),from);
} else {
if((state_val_41942 === (3))){
var inst_41939 = (state_41941[(2)]);
var state_41941__$1 = state_41941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41941__$1,inst_41939);
} else {
if((state_val_41942 === (4))){
var inst_41922 = (state_41941[(7)]);
var inst_41922__$1 = (state_41941[(2)]);
var inst_41923 = (inst_41922__$1 == null);
var state_41941__$1 = (function (){var statearr_41944 = state_41941;
(statearr_41944[(7)] = inst_41922__$1);

return statearr_41944;
})();
if(cljs.core.truth_(inst_41923)){
var statearr_41945_42053 = state_41941__$1;
(statearr_41945_42053[(1)] = (5));

} else {
var statearr_41946_42054 = state_41941__$1;
(statearr_41946_42054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41942 === (5))){
var inst_41925 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41941__$1 = state_41941;
var statearr_41947_42055 = state_41941__$1;
(statearr_41947_42055[(2)] = inst_41925);

(statearr_41947_42055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41942 === (6))){
var inst_41922 = (state_41941[(7)]);
var inst_41927 = (state_41941[(8)]);
var inst_41927__$1 = cljs.core.async.chan.call(null,(1));
var inst_41928 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41929 = [inst_41922,inst_41927__$1];
var inst_41930 = (new cljs.core.PersistentVector(null,2,(5),inst_41928,inst_41929,null));
var state_41941__$1 = (function (){var statearr_41948 = state_41941;
(statearr_41948[(8)] = inst_41927__$1);

return statearr_41948;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41941__$1,(8),jobs,inst_41930);
} else {
if((state_val_41942 === (7))){
var inst_41937 = (state_41941[(2)]);
var state_41941__$1 = state_41941;
var statearr_41949_42056 = state_41941__$1;
(statearr_41949_42056[(2)] = inst_41937);

(statearr_41949_42056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41942 === (8))){
var inst_41927 = (state_41941[(8)]);
var inst_41932 = (state_41941[(2)]);
var state_41941__$1 = (function (){var statearr_41950 = state_41941;
(statearr_41950[(9)] = inst_41932);

return statearr_41950;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41941__$1,(9),results,inst_41927);
} else {
if((state_val_41942 === (9))){
var inst_41934 = (state_41941[(2)]);
var state_41941__$1 = (function (){var statearr_41951 = state_41941;
(statearr_41951[(10)] = inst_41934);

return statearr_41951;
})();
var statearr_41952_42057 = state_41941__$1;
(statearr_41952_42057[(2)] = null);

(statearr_41952_42057[(1)] = (2));


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
});})(c__32751__auto___42051,jobs,results,process,async))
;
return ((function (switch__32663__auto__,c__32751__auto___42051,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____0 = (function (){
var statearr_41953 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41953[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__);

(statearr_41953[(1)] = (1));

return statearr_41953;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____1 = (function (state_41941){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_41941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e41954){if((e41954 instanceof Object)){
var ex__32667__auto__ = e41954;
var statearr_41955_42058 = state_41941;
(statearr_41955_42058[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42059 = state_41941;
state_41941 = G__42059;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__ = function(state_41941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____1.call(this,state_41941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___42051,jobs,results,process,async))
})();
var state__32753__auto__ = (function (){var statearr_41956 = f__32752__auto__.call(null);
(statearr_41956[(6)] = c__32751__auto___42051);

return statearr_41956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___42051,jobs,results,process,async))
);


var c__32751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto__,jobs,results,process,async){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto__,jobs,results,process,async){
return (function (state_41994){
var state_val_41995 = (state_41994[(1)]);
if((state_val_41995 === (7))){
var inst_41990 = (state_41994[(2)]);
var state_41994__$1 = state_41994;
var statearr_41996_42060 = state_41994__$1;
(statearr_41996_42060[(2)] = inst_41990);

(statearr_41996_42060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41995 === (20))){
var state_41994__$1 = state_41994;
var statearr_41997_42061 = state_41994__$1;
(statearr_41997_42061[(2)] = null);

(statearr_41997_42061[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41995 === (1))){
var state_41994__$1 = state_41994;
var statearr_41998_42062 = state_41994__$1;
(statearr_41998_42062[(2)] = null);

(statearr_41998_42062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41995 === (4))){
var inst_41959 = (state_41994[(7)]);
var inst_41959__$1 = (state_41994[(2)]);
var inst_41960 = (inst_41959__$1 == null);
var state_41994__$1 = (function (){var statearr_41999 = state_41994;
(statearr_41999[(7)] = inst_41959__$1);

return statearr_41999;
})();
if(cljs.core.truth_(inst_41960)){
var statearr_42000_42063 = state_41994__$1;
(statearr_42000_42063[(1)] = (5));

} else {
var statearr_42001_42064 = state_41994__$1;
(statearr_42001_42064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41995 === (15))){
var inst_41972 = (state_41994[(8)]);
var state_41994__$1 = state_41994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41994__$1,(18),to,inst_41972);
} else {
if((state_val_41995 === (21))){
var inst_41985 = (state_41994[(2)]);
var state_41994__$1 = state_41994;
var statearr_42002_42065 = state_41994__$1;
(statearr_42002_42065[(2)] = inst_41985);

(statearr_42002_42065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41995 === (13))){
var inst_41987 = (state_41994[(2)]);
var state_41994__$1 = (function (){var statearr_42003 = state_41994;
(statearr_42003[(9)] = inst_41987);

return statearr_42003;
})();
var statearr_42004_42066 = state_41994__$1;
(statearr_42004_42066[(2)] = null);

(statearr_42004_42066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41995 === (6))){
var inst_41959 = (state_41994[(7)]);
var state_41994__$1 = state_41994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41994__$1,(11),inst_41959);
} else {
if((state_val_41995 === (17))){
var inst_41980 = (state_41994[(2)]);
var state_41994__$1 = state_41994;
if(cljs.core.truth_(inst_41980)){
var statearr_42005_42067 = state_41994__$1;
(statearr_42005_42067[(1)] = (19));

} else {
var statearr_42006_42068 = state_41994__$1;
(statearr_42006_42068[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41995 === (3))){
var inst_41992 = (state_41994[(2)]);
var state_41994__$1 = state_41994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41994__$1,inst_41992);
} else {
if((state_val_41995 === (12))){
var inst_41969 = (state_41994[(10)]);
var state_41994__$1 = state_41994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41994__$1,(14),inst_41969);
} else {
if((state_val_41995 === (2))){
var state_41994__$1 = state_41994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41994__$1,(4),results);
} else {
if((state_val_41995 === (19))){
var state_41994__$1 = state_41994;
var statearr_42007_42069 = state_41994__$1;
(statearr_42007_42069[(2)] = null);

(statearr_42007_42069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41995 === (11))){
var inst_41969 = (state_41994[(2)]);
var state_41994__$1 = (function (){var statearr_42008 = state_41994;
(statearr_42008[(10)] = inst_41969);

return statearr_42008;
})();
var statearr_42009_42070 = state_41994__$1;
(statearr_42009_42070[(2)] = null);

(statearr_42009_42070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41995 === (9))){
var state_41994__$1 = state_41994;
var statearr_42010_42071 = state_41994__$1;
(statearr_42010_42071[(2)] = null);

(statearr_42010_42071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41995 === (5))){
var state_41994__$1 = state_41994;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42011_42072 = state_41994__$1;
(statearr_42011_42072[(1)] = (8));

} else {
var statearr_42012_42073 = state_41994__$1;
(statearr_42012_42073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41995 === (14))){
var inst_41974 = (state_41994[(11)]);
var inst_41972 = (state_41994[(8)]);
var inst_41972__$1 = (state_41994[(2)]);
var inst_41973 = (inst_41972__$1 == null);
var inst_41974__$1 = cljs.core.not.call(null,inst_41973);
var state_41994__$1 = (function (){var statearr_42013 = state_41994;
(statearr_42013[(11)] = inst_41974__$1);

(statearr_42013[(8)] = inst_41972__$1);

return statearr_42013;
})();
if(inst_41974__$1){
var statearr_42014_42074 = state_41994__$1;
(statearr_42014_42074[(1)] = (15));

} else {
var statearr_42015_42075 = state_41994__$1;
(statearr_42015_42075[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41995 === (16))){
var inst_41974 = (state_41994[(11)]);
var state_41994__$1 = state_41994;
var statearr_42016_42076 = state_41994__$1;
(statearr_42016_42076[(2)] = inst_41974);

(statearr_42016_42076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41995 === (10))){
var inst_41966 = (state_41994[(2)]);
var state_41994__$1 = state_41994;
var statearr_42017_42077 = state_41994__$1;
(statearr_42017_42077[(2)] = inst_41966);

(statearr_42017_42077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41995 === (18))){
var inst_41977 = (state_41994[(2)]);
var state_41994__$1 = state_41994;
var statearr_42018_42078 = state_41994__$1;
(statearr_42018_42078[(2)] = inst_41977);

(statearr_42018_42078[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41995 === (8))){
var inst_41963 = cljs.core.async.close_BANG_.call(null,to);
var state_41994__$1 = state_41994;
var statearr_42019_42079 = state_41994__$1;
(statearr_42019_42079[(2)] = inst_41963);

(statearr_42019_42079[(1)] = (10));


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
});})(c__32751__auto__,jobs,results,process,async))
;
return ((function (switch__32663__auto__,c__32751__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____0 = (function (){
var statearr_42020 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42020[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__);

(statearr_42020[(1)] = (1));

return statearr_42020;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____1 = (function (state_41994){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_41994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e42021){if((e42021 instanceof Object)){
var ex__32667__auto__ = e42021;
var statearr_42022_42080 = state_41994;
(statearr_42022_42080[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42081 = state_41994;
state_41994 = G__42081;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__ = function(state_41994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____1.call(this,state_41994);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32664__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto__,jobs,results,process,async))
})();
var state__32753__auto__ = (function (){var statearr_42023 = f__32752__auto__.call(null);
(statearr_42023[(6)] = c__32751__auto__);

return statearr_42023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto__,jobs,results,process,async))
);

return c__32751__auto__;
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
var G__42083 = arguments.length;
switch (G__42083) {
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
var G__42086 = arguments.length;
switch (G__42086) {
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
var G__42089 = arguments.length;
switch (G__42089) {
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
var c__32751__auto___42138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___42138,tc,fc){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___42138,tc,fc){
return (function (state_42115){
var state_val_42116 = (state_42115[(1)]);
if((state_val_42116 === (7))){
var inst_42111 = (state_42115[(2)]);
var state_42115__$1 = state_42115;
var statearr_42117_42139 = state_42115__$1;
(statearr_42117_42139[(2)] = inst_42111);

(statearr_42117_42139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (1))){
var state_42115__$1 = state_42115;
var statearr_42118_42140 = state_42115__$1;
(statearr_42118_42140[(2)] = null);

(statearr_42118_42140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (4))){
var inst_42092 = (state_42115[(7)]);
var inst_42092__$1 = (state_42115[(2)]);
var inst_42093 = (inst_42092__$1 == null);
var state_42115__$1 = (function (){var statearr_42119 = state_42115;
(statearr_42119[(7)] = inst_42092__$1);

return statearr_42119;
})();
if(cljs.core.truth_(inst_42093)){
var statearr_42120_42141 = state_42115__$1;
(statearr_42120_42141[(1)] = (5));

} else {
var statearr_42121_42142 = state_42115__$1;
(statearr_42121_42142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (13))){
var state_42115__$1 = state_42115;
var statearr_42122_42143 = state_42115__$1;
(statearr_42122_42143[(2)] = null);

(statearr_42122_42143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (6))){
var inst_42092 = (state_42115[(7)]);
var inst_42098 = p.call(null,inst_42092);
var state_42115__$1 = state_42115;
if(cljs.core.truth_(inst_42098)){
var statearr_42123_42144 = state_42115__$1;
(statearr_42123_42144[(1)] = (9));

} else {
var statearr_42124_42145 = state_42115__$1;
(statearr_42124_42145[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (3))){
var inst_42113 = (state_42115[(2)]);
var state_42115__$1 = state_42115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42115__$1,inst_42113);
} else {
if((state_val_42116 === (12))){
var state_42115__$1 = state_42115;
var statearr_42125_42146 = state_42115__$1;
(statearr_42125_42146[(2)] = null);

(statearr_42125_42146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (2))){
var state_42115__$1 = state_42115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42115__$1,(4),ch);
} else {
if((state_val_42116 === (11))){
var inst_42092 = (state_42115[(7)]);
var inst_42102 = (state_42115[(2)]);
var state_42115__$1 = state_42115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42115__$1,(8),inst_42102,inst_42092);
} else {
if((state_val_42116 === (9))){
var state_42115__$1 = state_42115;
var statearr_42126_42147 = state_42115__$1;
(statearr_42126_42147[(2)] = tc);

(statearr_42126_42147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (5))){
var inst_42095 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42096 = cljs.core.async.close_BANG_.call(null,fc);
var state_42115__$1 = (function (){var statearr_42127 = state_42115;
(statearr_42127[(8)] = inst_42095);

return statearr_42127;
})();
var statearr_42128_42148 = state_42115__$1;
(statearr_42128_42148[(2)] = inst_42096);

(statearr_42128_42148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (14))){
var inst_42109 = (state_42115[(2)]);
var state_42115__$1 = state_42115;
var statearr_42129_42149 = state_42115__$1;
(statearr_42129_42149[(2)] = inst_42109);

(statearr_42129_42149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (10))){
var state_42115__$1 = state_42115;
var statearr_42130_42150 = state_42115__$1;
(statearr_42130_42150[(2)] = fc);

(statearr_42130_42150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42116 === (8))){
var inst_42104 = (state_42115[(2)]);
var state_42115__$1 = state_42115;
if(cljs.core.truth_(inst_42104)){
var statearr_42131_42151 = state_42115__$1;
(statearr_42131_42151[(1)] = (12));

} else {
var statearr_42132_42152 = state_42115__$1;
(statearr_42132_42152[(1)] = (13));

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
});})(c__32751__auto___42138,tc,fc))
;
return ((function (switch__32663__auto__,c__32751__auto___42138,tc,fc){
return (function() {
var cljs$core$async$state_machine__32664__auto__ = null;
var cljs$core$async$state_machine__32664__auto____0 = (function (){
var statearr_42133 = [null,null,null,null,null,null,null,null,null];
(statearr_42133[(0)] = cljs$core$async$state_machine__32664__auto__);

(statearr_42133[(1)] = (1));

return statearr_42133;
});
var cljs$core$async$state_machine__32664__auto____1 = (function (state_42115){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_42115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e42134){if((e42134 instanceof Object)){
var ex__32667__auto__ = e42134;
var statearr_42135_42153 = state_42115;
(statearr_42135_42153[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42154 = state_42115;
state_42115 = G__42154;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$state_machine__32664__auto__ = function(state_42115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32664__auto____1.call(this,state_42115);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32664__auto____0;
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32664__auto____1;
return cljs$core$async$state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___42138,tc,fc))
})();
var state__32753__auto__ = (function (){var statearr_42136 = f__32752__auto__.call(null);
(statearr_42136[(6)] = c__32751__auto___42138);

return statearr_42136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___42138,tc,fc))
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
var c__32751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto__){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto__){
return (function (state_42175){
var state_val_42176 = (state_42175[(1)]);
if((state_val_42176 === (7))){
var inst_42171 = (state_42175[(2)]);
var state_42175__$1 = state_42175;
var statearr_42177_42195 = state_42175__$1;
(statearr_42177_42195[(2)] = inst_42171);

(statearr_42177_42195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42176 === (1))){
var inst_42155 = init;
var state_42175__$1 = (function (){var statearr_42178 = state_42175;
(statearr_42178[(7)] = inst_42155);

return statearr_42178;
})();
var statearr_42179_42196 = state_42175__$1;
(statearr_42179_42196[(2)] = null);

(statearr_42179_42196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42176 === (4))){
var inst_42158 = (state_42175[(8)]);
var inst_42158__$1 = (state_42175[(2)]);
var inst_42159 = (inst_42158__$1 == null);
var state_42175__$1 = (function (){var statearr_42180 = state_42175;
(statearr_42180[(8)] = inst_42158__$1);

return statearr_42180;
})();
if(cljs.core.truth_(inst_42159)){
var statearr_42181_42197 = state_42175__$1;
(statearr_42181_42197[(1)] = (5));

} else {
var statearr_42182_42198 = state_42175__$1;
(statearr_42182_42198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42176 === (6))){
var inst_42155 = (state_42175[(7)]);
var inst_42158 = (state_42175[(8)]);
var inst_42162 = (state_42175[(9)]);
var inst_42162__$1 = f.call(null,inst_42155,inst_42158);
var inst_42163 = cljs.core.reduced_QMARK_.call(null,inst_42162__$1);
var state_42175__$1 = (function (){var statearr_42183 = state_42175;
(statearr_42183[(9)] = inst_42162__$1);

return statearr_42183;
})();
if(inst_42163){
var statearr_42184_42199 = state_42175__$1;
(statearr_42184_42199[(1)] = (8));

} else {
var statearr_42185_42200 = state_42175__$1;
(statearr_42185_42200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42176 === (3))){
var inst_42173 = (state_42175[(2)]);
var state_42175__$1 = state_42175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42175__$1,inst_42173);
} else {
if((state_val_42176 === (2))){
var state_42175__$1 = state_42175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42175__$1,(4),ch);
} else {
if((state_val_42176 === (9))){
var inst_42162 = (state_42175[(9)]);
var inst_42155 = inst_42162;
var state_42175__$1 = (function (){var statearr_42186 = state_42175;
(statearr_42186[(7)] = inst_42155);

return statearr_42186;
})();
var statearr_42187_42201 = state_42175__$1;
(statearr_42187_42201[(2)] = null);

(statearr_42187_42201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42176 === (5))){
var inst_42155 = (state_42175[(7)]);
var state_42175__$1 = state_42175;
var statearr_42188_42202 = state_42175__$1;
(statearr_42188_42202[(2)] = inst_42155);

(statearr_42188_42202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42176 === (10))){
var inst_42169 = (state_42175[(2)]);
var state_42175__$1 = state_42175;
var statearr_42189_42203 = state_42175__$1;
(statearr_42189_42203[(2)] = inst_42169);

(statearr_42189_42203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42176 === (8))){
var inst_42162 = (state_42175[(9)]);
var inst_42165 = cljs.core.deref.call(null,inst_42162);
var state_42175__$1 = state_42175;
var statearr_42190_42204 = state_42175__$1;
(statearr_42190_42204[(2)] = inst_42165);

(statearr_42190_42204[(1)] = (10));


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
});})(c__32751__auto__))
;
return ((function (switch__32663__auto__,c__32751__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32664__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32664__auto____0 = (function (){
var statearr_42191 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42191[(0)] = cljs$core$async$reduce_$_state_machine__32664__auto__);

(statearr_42191[(1)] = (1));

return statearr_42191;
});
var cljs$core$async$reduce_$_state_machine__32664__auto____1 = (function (state_42175){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_42175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e42192){if((e42192 instanceof Object)){
var ex__32667__auto__ = e42192;
var statearr_42193_42205 = state_42175;
(statearr_42193_42205[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42206 = state_42175;
state_42175 = G__42206;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32664__auto__ = function(state_42175){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32664__auto____1.call(this,state_42175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32664__auto____0;
cljs$core$async$reduce_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32664__auto____1;
return cljs$core$async$reduce_$_state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto__))
})();
var state__32753__auto__ = (function (){var statearr_42194 = f__32752__auto__.call(null);
(statearr_42194[(6)] = c__32751__auto__);

return statearr_42194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto__))
);

return c__32751__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto__,f__$1){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto__,f__$1){
return (function (state_42212){
var state_val_42213 = (state_42212[(1)]);
if((state_val_42213 === (1))){
var inst_42207 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42212__$1 = state_42212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42212__$1,(2),inst_42207);
} else {
if((state_val_42213 === (2))){
var inst_42209 = (state_42212[(2)]);
var inst_42210 = f__$1.call(null,inst_42209);
var state_42212__$1 = state_42212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42212__$1,inst_42210);
} else {
return null;
}
}
});})(c__32751__auto__,f__$1))
;
return ((function (switch__32663__auto__,c__32751__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32664__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32664__auto____0 = (function (){
var statearr_42214 = [null,null,null,null,null,null,null];
(statearr_42214[(0)] = cljs$core$async$transduce_$_state_machine__32664__auto__);

(statearr_42214[(1)] = (1));

return statearr_42214;
});
var cljs$core$async$transduce_$_state_machine__32664__auto____1 = (function (state_42212){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_42212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e42215){if((e42215 instanceof Object)){
var ex__32667__auto__ = e42215;
var statearr_42216_42218 = state_42212;
(statearr_42216_42218[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42219 = state_42212;
state_42212 = G__42219;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32664__auto__ = function(state_42212){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32664__auto____1.call(this,state_42212);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32664__auto____0;
cljs$core$async$transduce_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32664__auto____1;
return cljs$core$async$transduce_$_state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto__,f__$1))
})();
var state__32753__auto__ = (function (){var statearr_42217 = f__32752__auto__.call(null);
(statearr_42217[(6)] = c__32751__auto__);

return statearr_42217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto__,f__$1))
);

return c__32751__auto__;
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
var G__42221 = arguments.length;
switch (G__42221) {
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
var c__32751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto__){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto__){
return (function (state_42246){
var state_val_42247 = (state_42246[(1)]);
if((state_val_42247 === (7))){
var inst_42228 = (state_42246[(2)]);
var state_42246__$1 = state_42246;
var statearr_42248_42269 = state_42246__$1;
(statearr_42248_42269[(2)] = inst_42228);

(statearr_42248_42269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42247 === (1))){
var inst_42222 = cljs.core.seq.call(null,coll);
var inst_42223 = inst_42222;
var state_42246__$1 = (function (){var statearr_42249 = state_42246;
(statearr_42249[(7)] = inst_42223);

return statearr_42249;
})();
var statearr_42250_42270 = state_42246__$1;
(statearr_42250_42270[(2)] = null);

(statearr_42250_42270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42247 === (4))){
var inst_42223 = (state_42246[(7)]);
var inst_42226 = cljs.core.first.call(null,inst_42223);
var state_42246__$1 = state_42246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42246__$1,(7),ch,inst_42226);
} else {
if((state_val_42247 === (13))){
var inst_42240 = (state_42246[(2)]);
var state_42246__$1 = state_42246;
var statearr_42251_42271 = state_42246__$1;
(statearr_42251_42271[(2)] = inst_42240);

(statearr_42251_42271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42247 === (6))){
var inst_42231 = (state_42246[(2)]);
var state_42246__$1 = state_42246;
if(cljs.core.truth_(inst_42231)){
var statearr_42252_42272 = state_42246__$1;
(statearr_42252_42272[(1)] = (8));

} else {
var statearr_42253_42273 = state_42246__$1;
(statearr_42253_42273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42247 === (3))){
var inst_42244 = (state_42246[(2)]);
var state_42246__$1 = state_42246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42246__$1,inst_42244);
} else {
if((state_val_42247 === (12))){
var state_42246__$1 = state_42246;
var statearr_42254_42274 = state_42246__$1;
(statearr_42254_42274[(2)] = null);

(statearr_42254_42274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42247 === (2))){
var inst_42223 = (state_42246[(7)]);
var state_42246__$1 = state_42246;
if(cljs.core.truth_(inst_42223)){
var statearr_42255_42275 = state_42246__$1;
(statearr_42255_42275[(1)] = (4));

} else {
var statearr_42256_42276 = state_42246__$1;
(statearr_42256_42276[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42247 === (11))){
var inst_42237 = cljs.core.async.close_BANG_.call(null,ch);
var state_42246__$1 = state_42246;
var statearr_42257_42277 = state_42246__$1;
(statearr_42257_42277[(2)] = inst_42237);

(statearr_42257_42277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42247 === (9))){
var state_42246__$1 = state_42246;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42258_42278 = state_42246__$1;
(statearr_42258_42278[(1)] = (11));

} else {
var statearr_42259_42279 = state_42246__$1;
(statearr_42259_42279[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42247 === (5))){
var inst_42223 = (state_42246[(7)]);
var state_42246__$1 = state_42246;
var statearr_42260_42280 = state_42246__$1;
(statearr_42260_42280[(2)] = inst_42223);

(statearr_42260_42280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42247 === (10))){
var inst_42242 = (state_42246[(2)]);
var state_42246__$1 = state_42246;
var statearr_42261_42281 = state_42246__$1;
(statearr_42261_42281[(2)] = inst_42242);

(statearr_42261_42281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42247 === (8))){
var inst_42223 = (state_42246[(7)]);
var inst_42233 = cljs.core.next.call(null,inst_42223);
var inst_42223__$1 = inst_42233;
var state_42246__$1 = (function (){var statearr_42262 = state_42246;
(statearr_42262[(7)] = inst_42223__$1);

return statearr_42262;
})();
var statearr_42263_42282 = state_42246__$1;
(statearr_42263_42282[(2)] = null);

(statearr_42263_42282[(1)] = (2));


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
});})(c__32751__auto__))
;
return ((function (switch__32663__auto__,c__32751__auto__){
return (function() {
var cljs$core$async$state_machine__32664__auto__ = null;
var cljs$core$async$state_machine__32664__auto____0 = (function (){
var statearr_42264 = [null,null,null,null,null,null,null,null];
(statearr_42264[(0)] = cljs$core$async$state_machine__32664__auto__);

(statearr_42264[(1)] = (1));

return statearr_42264;
});
var cljs$core$async$state_machine__32664__auto____1 = (function (state_42246){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_42246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e42265){if((e42265 instanceof Object)){
var ex__32667__auto__ = e42265;
var statearr_42266_42283 = state_42246;
(statearr_42266_42283[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42284 = state_42246;
state_42246 = G__42284;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$state_machine__32664__auto__ = function(state_42246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32664__auto____1.call(this,state_42246);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32664__auto____0;
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32664__auto____1;
return cljs$core$async$state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto__))
})();
var state__32753__auto__ = (function (){var statearr_42267 = f__32752__auto__.call(null);
(statearr_42267[(6)] = c__32751__auto__);

return statearr_42267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto__))
);

return c__32751__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async42285 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42285 = (function (ch,cs,meta42286){
this.ch = ch;
this.cs = cs;
this.meta42286 = meta42286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42287,meta42286__$1){
var self__ = this;
var _42287__$1 = this;
return (new cljs.core.async.t_cljs$core$async42285(self__.ch,self__.cs,meta42286__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42285.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42287){
var self__ = this;
var _42287__$1 = this;
return self__.meta42286;
});})(cs))
;

cljs.core.async.t_cljs$core$async42285.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42285.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42285.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42285.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42285.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42285.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42285.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42286","meta42286",-434332322,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42285.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42285";

cljs.core.async.t_cljs$core$async42285.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async42285");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42285 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42285(ch__$1,cs__$1,meta42286){
return (new cljs.core.async.t_cljs$core$async42285(ch__$1,cs__$1,meta42286));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42285(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32751__auto___42507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___42507,cs,m,dchan,dctr,done){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___42507,cs,m,dchan,dctr,done){
return (function (state_42422){
var state_val_42423 = (state_42422[(1)]);
if((state_val_42423 === (7))){
var inst_42418 = (state_42422[(2)]);
var state_42422__$1 = state_42422;
var statearr_42424_42508 = state_42422__$1;
(statearr_42424_42508[(2)] = inst_42418);

(statearr_42424_42508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (20))){
var inst_42321 = (state_42422[(7)]);
var inst_42333 = cljs.core.first.call(null,inst_42321);
var inst_42334 = cljs.core.nth.call(null,inst_42333,(0),null);
var inst_42335 = cljs.core.nth.call(null,inst_42333,(1),null);
var state_42422__$1 = (function (){var statearr_42425 = state_42422;
(statearr_42425[(8)] = inst_42334);

return statearr_42425;
})();
if(cljs.core.truth_(inst_42335)){
var statearr_42426_42509 = state_42422__$1;
(statearr_42426_42509[(1)] = (22));

} else {
var statearr_42427_42510 = state_42422__$1;
(statearr_42427_42510[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (27))){
var inst_42363 = (state_42422[(9)]);
var inst_42365 = (state_42422[(10)]);
var inst_42370 = (state_42422[(11)]);
var inst_42290 = (state_42422[(12)]);
var inst_42370__$1 = cljs.core._nth.call(null,inst_42363,inst_42365);
var inst_42371 = cljs.core.async.put_BANG_.call(null,inst_42370__$1,inst_42290,done);
var state_42422__$1 = (function (){var statearr_42428 = state_42422;
(statearr_42428[(11)] = inst_42370__$1);

return statearr_42428;
})();
if(cljs.core.truth_(inst_42371)){
var statearr_42429_42511 = state_42422__$1;
(statearr_42429_42511[(1)] = (30));

} else {
var statearr_42430_42512 = state_42422__$1;
(statearr_42430_42512[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (1))){
var state_42422__$1 = state_42422;
var statearr_42431_42513 = state_42422__$1;
(statearr_42431_42513[(2)] = null);

(statearr_42431_42513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (24))){
var inst_42321 = (state_42422[(7)]);
var inst_42340 = (state_42422[(2)]);
var inst_42341 = cljs.core.next.call(null,inst_42321);
var inst_42299 = inst_42341;
var inst_42300 = null;
var inst_42301 = (0);
var inst_42302 = (0);
var state_42422__$1 = (function (){var statearr_42432 = state_42422;
(statearr_42432[(13)] = inst_42302);

(statearr_42432[(14)] = inst_42299);

(statearr_42432[(15)] = inst_42340);

(statearr_42432[(16)] = inst_42301);

(statearr_42432[(17)] = inst_42300);

return statearr_42432;
})();
var statearr_42433_42514 = state_42422__$1;
(statearr_42433_42514[(2)] = null);

(statearr_42433_42514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (39))){
var state_42422__$1 = state_42422;
var statearr_42437_42515 = state_42422__$1;
(statearr_42437_42515[(2)] = null);

(statearr_42437_42515[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (4))){
var inst_42290 = (state_42422[(12)]);
var inst_42290__$1 = (state_42422[(2)]);
var inst_42291 = (inst_42290__$1 == null);
var state_42422__$1 = (function (){var statearr_42438 = state_42422;
(statearr_42438[(12)] = inst_42290__$1);

return statearr_42438;
})();
if(cljs.core.truth_(inst_42291)){
var statearr_42439_42516 = state_42422__$1;
(statearr_42439_42516[(1)] = (5));

} else {
var statearr_42440_42517 = state_42422__$1;
(statearr_42440_42517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (15))){
var inst_42302 = (state_42422[(13)]);
var inst_42299 = (state_42422[(14)]);
var inst_42301 = (state_42422[(16)]);
var inst_42300 = (state_42422[(17)]);
var inst_42317 = (state_42422[(2)]);
var inst_42318 = (inst_42302 + (1));
var tmp42434 = inst_42299;
var tmp42435 = inst_42301;
var tmp42436 = inst_42300;
var inst_42299__$1 = tmp42434;
var inst_42300__$1 = tmp42436;
var inst_42301__$1 = tmp42435;
var inst_42302__$1 = inst_42318;
var state_42422__$1 = (function (){var statearr_42441 = state_42422;
(statearr_42441[(13)] = inst_42302__$1);

(statearr_42441[(14)] = inst_42299__$1);

(statearr_42441[(18)] = inst_42317);

(statearr_42441[(16)] = inst_42301__$1);

(statearr_42441[(17)] = inst_42300__$1);

return statearr_42441;
})();
var statearr_42442_42518 = state_42422__$1;
(statearr_42442_42518[(2)] = null);

(statearr_42442_42518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (21))){
var inst_42344 = (state_42422[(2)]);
var state_42422__$1 = state_42422;
var statearr_42446_42519 = state_42422__$1;
(statearr_42446_42519[(2)] = inst_42344);

(statearr_42446_42519[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (31))){
var inst_42370 = (state_42422[(11)]);
var inst_42374 = done.call(null,null);
var inst_42375 = cljs.core.async.untap_STAR_.call(null,m,inst_42370);
var state_42422__$1 = (function (){var statearr_42447 = state_42422;
(statearr_42447[(19)] = inst_42374);

return statearr_42447;
})();
var statearr_42448_42520 = state_42422__$1;
(statearr_42448_42520[(2)] = inst_42375);

(statearr_42448_42520[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (32))){
var inst_42364 = (state_42422[(20)]);
var inst_42363 = (state_42422[(9)]);
var inst_42365 = (state_42422[(10)]);
var inst_42362 = (state_42422[(21)]);
var inst_42377 = (state_42422[(2)]);
var inst_42378 = (inst_42365 + (1));
var tmp42443 = inst_42364;
var tmp42444 = inst_42363;
var tmp42445 = inst_42362;
var inst_42362__$1 = tmp42445;
var inst_42363__$1 = tmp42444;
var inst_42364__$1 = tmp42443;
var inst_42365__$1 = inst_42378;
var state_42422__$1 = (function (){var statearr_42449 = state_42422;
(statearr_42449[(20)] = inst_42364__$1);

(statearr_42449[(9)] = inst_42363__$1);

(statearr_42449[(10)] = inst_42365__$1);

(statearr_42449[(21)] = inst_42362__$1);

(statearr_42449[(22)] = inst_42377);

return statearr_42449;
})();
var statearr_42450_42521 = state_42422__$1;
(statearr_42450_42521[(2)] = null);

(statearr_42450_42521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (40))){
var inst_42390 = (state_42422[(23)]);
var inst_42394 = done.call(null,null);
var inst_42395 = cljs.core.async.untap_STAR_.call(null,m,inst_42390);
var state_42422__$1 = (function (){var statearr_42451 = state_42422;
(statearr_42451[(24)] = inst_42394);

return statearr_42451;
})();
var statearr_42452_42522 = state_42422__$1;
(statearr_42452_42522[(2)] = inst_42395);

(statearr_42452_42522[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (33))){
var inst_42381 = (state_42422[(25)]);
var inst_42383 = cljs.core.chunked_seq_QMARK_.call(null,inst_42381);
var state_42422__$1 = state_42422;
if(inst_42383){
var statearr_42453_42523 = state_42422__$1;
(statearr_42453_42523[(1)] = (36));

} else {
var statearr_42454_42524 = state_42422__$1;
(statearr_42454_42524[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (13))){
var inst_42311 = (state_42422[(26)]);
var inst_42314 = cljs.core.async.close_BANG_.call(null,inst_42311);
var state_42422__$1 = state_42422;
var statearr_42455_42525 = state_42422__$1;
(statearr_42455_42525[(2)] = inst_42314);

(statearr_42455_42525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (22))){
var inst_42334 = (state_42422[(8)]);
var inst_42337 = cljs.core.async.close_BANG_.call(null,inst_42334);
var state_42422__$1 = state_42422;
var statearr_42456_42526 = state_42422__$1;
(statearr_42456_42526[(2)] = inst_42337);

(statearr_42456_42526[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (36))){
var inst_42381 = (state_42422[(25)]);
var inst_42385 = cljs.core.chunk_first.call(null,inst_42381);
var inst_42386 = cljs.core.chunk_rest.call(null,inst_42381);
var inst_42387 = cljs.core.count.call(null,inst_42385);
var inst_42362 = inst_42386;
var inst_42363 = inst_42385;
var inst_42364 = inst_42387;
var inst_42365 = (0);
var state_42422__$1 = (function (){var statearr_42457 = state_42422;
(statearr_42457[(20)] = inst_42364);

(statearr_42457[(9)] = inst_42363);

(statearr_42457[(10)] = inst_42365);

(statearr_42457[(21)] = inst_42362);

return statearr_42457;
})();
var statearr_42458_42527 = state_42422__$1;
(statearr_42458_42527[(2)] = null);

(statearr_42458_42527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (41))){
var inst_42381 = (state_42422[(25)]);
var inst_42397 = (state_42422[(2)]);
var inst_42398 = cljs.core.next.call(null,inst_42381);
var inst_42362 = inst_42398;
var inst_42363 = null;
var inst_42364 = (0);
var inst_42365 = (0);
var state_42422__$1 = (function (){var statearr_42459 = state_42422;
(statearr_42459[(20)] = inst_42364);

(statearr_42459[(9)] = inst_42363);

(statearr_42459[(10)] = inst_42365);

(statearr_42459[(21)] = inst_42362);

(statearr_42459[(27)] = inst_42397);

return statearr_42459;
})();
var statearr_42460_42528 = state_42422__$1;
(statearr_42460_42528[(2)] = null);

(statearr_42460_42528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (43))){
var state_42422__$1 = state_42422;
var statearr_42461_42529 = state_42422__$1;
(statearr_42461_42529[(2)] = null);

(statearr_42461_42529[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (29))){
var inst_42406 = (state_42422[(2)]);
var state_42422__$1 = state_42422;
var statearr_42462_42530 = state_42422__$1;
(statearr_42462_42530[(2)] = inst_42406);

(statearr_42462_42530[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (44))){
var inst_42415 = (state_42422[(2)]);
var state_42422__$1 = (function (){var statearr_42463 = state_42422;
(statearr_42463[(28)] = inst_42415);

return statearr_42463;
})();
var statearr_42464_42531 = state_42422__$1;
(statearr_42464_42531[(2)] = null);

(statearr_42464_42531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (6))){
var inst_42354 = (state_42422[(29)]);
var inst_42353 = cljs.core.deref.call(null,cs);
var inst_42354__$1 = cljs.core.keys.call(null,inst_42353);
var inst_42355 = cljs.core.count.call(null,inst_42354__$1);
var inst_42356 = cljs.core.reset_BANG_.call(null,dctr,inst_42355);
var inst_42361 = cljs.core.seq.call(null,inst_42354__$1);
var inst_42362 = inst_42361;
var inst_42363 = null;
var inst_42364 = (0);
var inst_42365 = (0);
var state_42422__$1 = (function (){var statearr_42465 = state_42422;
(statearr_42465[(20)] = inst_42364);

(statearr_42465[(9)] = inst_42363);

(statearr_42465[(10)] = inst_42365);

(statearr_42465[(29)] = inst_42354__$1);

(statearr_42465[(21)] = inst_42362);

(statearr_42465[(30)] = inst_42356);

return statearr_42465;
})();
var statearr_42466_42532 = state_42422__$1;
(statearr_42466_42532[(2)] = null);

(statearr_42466_42532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (28))){
var inst_42381 = (state_42422[(25)]);
var inst_42362 = (state_42422[(21)]);
var inst_42381__$1 = cljs.core.seq.call(null,inst_42362);
var state_42422__$1 = (function (){var statearr_42467 = state_42422;
(statearr_42467[(25)] = inst_42381__$1);

return statearr_42467;
})();
if(inst_42381__$1){
var statearr_42468_42533 = state_42422__$1;
(statearr_42468_42533[(1)] = (33));

} else {
var statearr_42469_42534 = state_42422__$1;
(statearr_42469_42534[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (25))){
var inst_42364 = (state_42422[(20)]);
var inst_42365 = (state_42422[(10)]);
var inst_42367 = (inst_42365 < inst_42364);
var inst_42368 = inst_42367;
var state_42422__$1 = state_42422;
if(cljs.core.truth_(inst_42368)){
var statearr_42470_42535 = state_42422__$1;
(statearr_42470_42535[(1)] = (27));

} else {
var statearr_42471_42536 = state_42422__$1;
(statearr_42471_42536[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (34))){
var state_42422__$1 = state_42422;
var statearr_42472_42537 = state_42422__$1;
(statearr_42472_42537[(2)] = null);

(statearr_42472_42537[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (17))){
var state_42422__$1 = state_42422;
var statearr_42473_42538 = state_42422__$1;
(statearr_42473_42538[(2)] = null);

(statearr_42473_42538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (3))){
var inst_42420 = (state_42422[(2)]);
var state_42422__$1 = state_42422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42422__$1,inst_42420);
} else {
if((state_val_42423 === (12))){
var inst_42349 = (state_42422[(2)]);
var state_42422__$1 = state_42422;
var statearr_42474_42539 = state_42422__$1;
(statearr_42474_42539[(2)] = inst_42349);

(statearr_42474_42539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (2))){
var state_42422__$1 = state_42422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42422__$1,(4),ch);
} else {
if((state_val_42423 === (23))){
var state_42422__$1 = state_42422;
var statearr_42475_42540 = state_42422__$1;
(statearr_42475_42540[(2)] = null);

(statearr_42475_42540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (35))){
var inst_42404 = (state_42422[(2)]);
var state_42422__$1 = state_42422;
var statearr_42476_42541 = state_42422__$1;
(statearr_42476_42541[(2)] = inst_42404);

(statearr_42476_42541[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (19))){
var inst_42321 = (state_42422[(7)]);
var inst_42325 = cljs.core.chunk_first.call(null,inst_42321);
var inst_42326 = cljs.core.chunk_rest.call(null,inst_42321);
var inst_42327 = cljs.core.count.call(null,inst_42325);
var inst_42299 = inst_42326;
var inst_42300 = inst_42325;
var inst_42301 = inst_42327;
var inst_42302 = (0);
var state_42422__$1 = (function (){var statearr_42477 = state_42422;
(statearr_42477[(13)] = inst_42302);

(statearr_42477[(14)] = inst_42299);

(statearr_42477[(16)] = inst_42301);

(statearr_42477[(17)] = inst_42300);

return statearr_42477;
})();
var statearr_42478_42542 = state_42422__$1;
(statearr_42478_42542[(2)] = null);

(statearr_42478_42542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (11))){
var inst_42321 = (state_42422[(7)]);
var inst_42299 = (state_42422[(14)]);
var inst_42321__$1 = cljs.core.seq.call(null,inst_42299);
var state_42422__$1 = (function (){var statearr_42479 = state_42422;
(statearr_42479[(7)] = inst_42321__$1);

return statearr_42479;
})();
if(inst_42321__$1){
var statearr_42480_42543 = state_42422__$1;
(statearr_42480_42543[(1)] = (16));

} else {
var statearr_42481_42544 = state_42422__$1;
(statearr_42481_42544[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (9))){
var inst_42351 = (state_42422[(2)]);
var state_42422__$1 = state_42422;
var statearr_42482_42545 = state_42422__$1;
(statearr_42482_42545[(2)] = inst_42351);

(statearr_42482_42545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (5))){
var inst_42297 = cljs.core.deref.call(null,cs);
var inst_42298 = cljs.core.seq.call(null,inst_42297);
var inst_42299 = inst_42298;
var inst_42300 = null;
var inst_42301 = (0);
var inst_42302 = (0);
var state_42422__$1 = (function (){var statearr_42483 = state_42422;
(statearr_42483[(13)] = inst_42302);

(statearr_42483[(14)] = inst_42299);

(statearr_42483[(16)] = inst_42301);

(statearr_42483[(17)] = inst_42300);

return statearr_42483;
})();
var statearr_42484_42546 = state_42422__$1;
(statearr_42484_42546[(2)] = null);

(statearr_42484_42546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (14))){
var state_42422__$1 = state_42422;
var statearr_42485_42547 = state_42422__$1;
(statearr_42485_42547[(2)] = null);

(statearr_42485_42547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (45))){
var inst_42412 = (state_42422[(2)]);
var state_42422__$1 = state_42422;
var statearr_42486_42548 = state_42422__$1;
(statearr_42486_42548[(2)] = inst_42412);

(statearr_42486_42548[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (26))){
var inst_42354 = (state_42422[(29)]);
var inst_42408 = (state_42422[(2)]);
var inst_42409 = cljs.core.seq.call(null,inst_42354);
var state_42422__$1 = (function (){var statearr_42487 = state_42422;
(statearr_42487[(31)] = inst_42408);

return statearr_42487;
})();
if(inst_42409){
var statearr_42488_42549 = state_42422__$1;
(statearr_42488_42549[(1)] = (42));

} else {
var statearr_42489_42550 = state_42422__$1;
(statearr_42489_42550[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (16))){
var inst_42321 = (state_42422[(7)]);
var inst_42323 = cljs.core.chunked_seq_QMARK_.call(null,inst_42321);
var state_42422__$1 = state_42422;
if(inst_42323){
var statearr_42490_42551 = state_42422__$1;
(statearr_42490_42551[(1)] = (19));

} else {
var statearr_42491_42552 = state_42422__$1;
(statearr_42491_42552[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (38))){
var inst_42401 = (state_42422[(2)]);
var state_42422__$1 = state_42422;
var statearr_42492_42553 = state_42422__$1;
(statearr_42492_42553[(2)] = inst_42401);

(statearr_42492_42553[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (30))){
var state_42422__$1 = state_42422;
var statearr_42493_42554 = state_42422__$1;
(statearr_42493_42554[(2)] = null);

(statearr_42493_42554[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (10))){
var inst_42302 = (state_42422[(13)]);
var inst_42300 = (state_42422[(17)]);
var inst_42310 = cljs.core._nth.call(null,inst_42300,inst_42302);
var inst_42311 = cljs.core.nth.call(null,inst_42310,(0),null);
var inst_42312 = cljs.core.nth.call(null,inst_42310,(1),null);
var state_42422__$1 = (function (){var statearr_42494 = state_42422;
(statearr_42494[(26)] = inst_42311);

return statearr_42494;
})();
if(cljs.core.truth_(inst_42312)){
var statearr_42495_42555 = state_42422__$1;
(statearr_42495_42555[(1)] = (13));

} else {
var statearr_42496_42556 = state_42422__$1;
(statearr_42496_42556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (18))){
var inst_42347 = (state_42422[(2)]);
var state_42422__$1 = state_42422;
var statearr_42497_42557 = state_42422__$1;
(statearr_42497_42557[(2)] = inst_42347);

(statearr_42497_42557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (42))){
var state_42422__$1 = state_42422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42422__$1,(45),dchan);
} else {
if((state_val_42423 === (37))){
var inst_42381 = (state_42422[(25)]);
var inst_42390 = (state_42422[(23)]);
var inst_42290 = (state_42422[(12)]);
var inst_42390__$1 = cljs.core.first.call(null,inst_42381);
var inst_42391 = cljs.core.async.put_BANG_.call(null,inst_42390__$1,inst_42290,done);
var state_42422__$1 = (function (){var statearr_42498 = state_42422;
(statearr_42498[(23)] = inst_42390__$1);

return statearr_42498;
})();
if(cljs.core.truth_(inst_42391)){
var statearr_42499_42558 = state_42422__$1;
(statearr_42499_42558[(1)] = (39));

} else {
var statearr_42500_42559 = state_42422__$1;
(statearr_42500_42559[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42423 === (8))){
var inst_42302 = (state_42422[(13)]);
var inst_42301 = (state_42422[(16)]);
var inst_42304 = (inst_42302 < inst_42301);
var inst_42305 = inst_42304;
var state_42422__$1 = state_42422;
if(cljs.core.truth_(inst_42305)){
var statearr_42501_42560 = state_42422__$1;
(statearr_42501_42560[(1)] = (10));

} else {
var statearr_42502_42561 = state_42422__$1;
(statearr_42502_42561[(1)] = (11));

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
});})(c__32751__auto___42507,cs,m,dchan,dctr,done))
;
return ((function (switch__32663__auto__,c__32751__auto___42507,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32664__auto__ = null;
var cljs$core$async$mult_$_state_machine__32664__auto____0 = (function (){
var statearr_42503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42503[(0)] = cljs$core$async$mult_$_state_machine__32664__auto__);

(statearr_42503[(1)] = (1));

return statearr_42503;
});
var cljs$core$async$mult_$_state_machine__32664__auto____1 = (function (state_42422){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_42422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e42504){if((e42504 instanceof Object)){
var ex__32667__auto__ = e42504;
var statearr_42505_42562 = state_42422;
(statearr_42505_42562[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42563 = state_42422;
state_42422 = G__42563;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32664__auto__ = function(state_42422){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32664__auto____1.call(this,state_42422);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32664__auto____0;
cljs$core$async$mult_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32664__auto____1;
return cljs$core$async$mult_$_state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___42507,cs,m,dchan,dctr,done))
})();
var state__32753__auto__ = (function (){var statearr_42506 = f__32752__auto__.call(null);
(statearr_42506[(6)] = c__32751__auto___42507);

return statearr_42506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___42507,cs,m,dchan,dctr,done))
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
var G__42565 = arguments.length;
switch (G__42565) {
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
var len__29455__auto___42577 = arguments.length;
var i__29456__auto___42578 = (0);
while(true){
if((i__29456__auto___42578 < len__29455__auto___42577)){
args__29462__auto__.push((arguments[i__29456__auto___42578]));

var G__42579 = (i__29456__auto___42578 + (1));
i__29456__auto___42578 = G__42579;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((3) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29463__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42571){
var map__42572 = p__42571;
var map__42572__$1 = ((((!((map__42572 == null)))?((((map__42572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42572):map__42572);
var opts = map__42572__$1;
var statearr_42574_42580 = state;
(statearr_42574_42580[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__42572,map__42572__$1,opts){
return (function (val){
var statearr_42575_42581 = state;
(statearr_42575_42581[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42572,map__42572__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_42576_42582 = state;
(statearr_42576_42582[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42567){
var G__42568 = cljs.core.first.call(null,seq42567);
var seq42567__$1 = cljs.core.next.call(null,seq42567);
var G__42569 = cljs.core.first.call(null,seq42567__$1);
var seq42567__$2 = cljs.core.next.call(null,seq42567__$1);
var G__42570 = cljs.core.first.call(null,seq42567__$2);
var seq42567__$3 = cljs.core.next.call(null,seq42567__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42568,G__42569,G__42570,seq42567__$3);
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
if(typeof cljs.core.async.t_cljs$core$async42583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42583 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta42584){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta42584 = meta42584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42585,meta42584__$1){
var self__ = this;
var _42585__$1 = this;
return (new cljs.core.async.t_cljs$core$async42583(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta42584__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42585){
var self__ = this;
var _42585__$1 = this;
return self__.meta42584;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42583.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42583.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42583.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42583.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42583.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42583.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42583.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42583.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async42583.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta42584","meta42584",-1866442039,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42583";

cljs.core.async.t_cljs$core$async42583.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async42583");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42583 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42583(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42584){
return (new cljs.core.async.t_cljs$core$async42583(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42584));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42583(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32751__auto___42747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___42747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___42747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42687){
var state_val_42688 = (state_42687[(1)]);
if((state_val_42688 === (7))){
var inst_42602 = (state_42687[(2)]);
var state_42687__$1 = state_42687;
var statearr_42689_42748 = state_42687__$1;
(statearr_42689_42748[(2)] = inst_42602);

(statearr_42689_42748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (20))){
var inst_42614 = (state_42687[(7)]);
var state_42687__$1 = state_42687;
var statearr_42690_42749 = state_42687__$1;
(statearr_42690_42749[(2)] = inst_42614);

(statearr_42690_42749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (27))){
var state_42687__$1 = state_42687;
var statearr_42691_42750 = state_42687__$1;
(statearr_42691_42750[(2)] = null);

(statearr_42691_42750[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (1))){
var inst_42589 = (state_42687[(8)]);
var inst_42589__$1 = calc_state.call(null);
var inst_42591 = (inst_42589__$1 == null);
var inst_42592 = cljs.core.not.call(null,inst_42591);
var state_42687__$1 = (function (){var statearr_42692 = state_42687;
(statearr_42692[(8)] = inst_42589__$1);

return statearr_42692;
})();
if(inst_42592){
var statearr_42693_42751 = state_42687__$1;
(statearr_42693_42751[(1)] = (2));

} else {
var statearr_42694_42752 = state_42687__$1;
(statearr_42694_42752[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (24))){
var inst_42638 = (state_42687[(9)]);
var inst_42647 = (state_42687[(10)]);
var inst_42661 = (state_42687[(11)]);
var inst_42661__$1 = inst_42638.call(null,inst_42647);
var state_42687__$1 = (function (){var statearr_42695 = state_42687;
(statearr_42695[(11)] = inst_42661__$1);

return statearr_42695;
})();
if(cljs.core.truth_(inst_42661__$1)){
var statearr_42696_42753 = state_42687__$1;
(statearr_42696_42753[(1)] = (29));

} else {
var statearr_42697_42754 = state_42687__$1;
(statearr_42697_42754[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (4))){
var inst_42605 = (state_42687[(2)]);
var state_42687__$1 = state_42687;
if(cljs.core.truth_(inst_42605)){
var statearr_42698_42755 = state_42687__$1;
(statearr_42698_42755[(1)] = (8));

} else {
var statearr_42699_42756 = state_42687__$1;
(statearr_42699_42756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (15))){
var inst_42632 = (state_42687[(2)]);
var state_42687__$1 = state_42687;
if(cljs.core.truth_(inst_42632)){
var statearr_42700_42757 = state_42687__$1;
(statearr_42700_42757[(1)] = (19));

} else {
var statearr_42701_42758 = state_42687__$1;
(statearr_42701_42758[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (21))){
var inst_42637 = (state_42687[(12)]);
var inst_42637__$1 = (state_42687[(2)]);
var inst_42638 = cljs.core.get.call(null,inst_42637__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42639 = cljs.core.get.call(null,inst_42637__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42640 = cljs.core.get.call(null,inst_42637__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42687__$1 = (function (){var statearr_42702 = state_42687;
(statearr_42702[(9)] = inst_42638);

(statearr_42702[(13)] = inst_42639);

(statearr_42702[(12)] = inst_42637__$1);

return statearr_42702;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42687__$1,(22),inst_42640);
} else {
if((state_val_42688 === (31))){
var inst_42669 = (state_42687[(2)]);
var state_42687__$1 = state_42687;
if(cljs.core.truth_(inst_42669)){
var statearr_42703_42759 = state_42687__$1;
(statearr_42703_42759[(1)] = (32));

} else {
var statearr_42704_42760 = state_42687__$1;
(statearr_42704_42760[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (32))){
var inst_42646 = (state_42687[(14)]);
var state_42687__$1 = state_42687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42687__$1,(35),out,inst_42646);
} else {
if((state_val_42688 === (33))){
var inst_42637 = (state_42687[(12)]);
var inst_42614 = inst_42637;
var state_42687__$1 = (function (){var statearr_42705 = state_42687;
(statearr_42705[(7)] = inst_42614);

return statearr_42705;
})();
var statearr_42706_42761 = state_42687__$1;
(statearr_42706_42761[(2)] = null);

(statearr_42706_42761[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (13))){
var inst_42614 = (state_42687[(7)]);
var inst_42621 = inst_42614.cljs$lang$protocol_mask$partition0$;
var inst_42622 = (inst_42621 & (64));
var inst_42623 = inst_42614.cljs$core$ISeq$;
var inst_42624 = (cljs.core.PROTOCOL_SENTINEL === inst_42623);
var inst_42625 = (inst_42622) || (inst_42624);
var state_42687__$1 = state_42687;
if(cljs.core.truth_(inst_42625)){
var statearr_42707_42762 = state_42687__$1;
(statearr_42707_42762[(1)] = (16));

} else {
var statearr_42708_42763 = state_42687__$1;
(statearr_42708_42763[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (22))){
var inst_42646 = (state_42687[(14)]);
var inst_42647 = (state_42687[(10)]);
var inst_42645 = (state_42687[(2)]);
var inst_42646__$1 = cljs.core.nth.call(null,inst_42645,(0),null);
var inst_42647__$1 = cljs.core.nth.call(null,inst_42645,(1),null);
var inst_42648 = (inst_42646__$1 == null);
var inst_42649 = cljs.core._EQ_.call(null,inst_42647__$1,change);
var inst_42650 = (inst_42648) || (inst_42649);
var state_42687__$1 = (function (){var statearr_42709 = state_42687;
(statearr_42709[(14)] = inst_42646__$1);

(statearr_42709[(10)] = inst_42647__$1);

return statearr_42709;
})();
if(cljs.core.truth_(inst_42650)){
var statearr_42710_42764 = state_42687__$1;
(statearr_42710_42764[(1)] = (23));

} else {
var statearr_42711_42765 = state_42687__$1;
(statearr_42711_42765[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (36))){
var inst_42637 = (state_42687[(12)]);
var inst_42614 = inst_42637;
var state_42687__$1 = (function (){var statearr_42712 = state_42687;
(statearr_42712[(7)] = inst_42614);

return statearr_42712;
})();
var statearr_42713_42766 = state_42687__$1;
(statearr_42713_42766[(2)] = null);

(statearr_42713_42766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (29))){
var inst_42661 = (state_42687[(11)]);
var state_42687__$1 = state_42687;
var statearr_42714_42767 = state_42687__$1;
(statearr_42714_42767[(2)] = inst_42661);

(statearr_42714_42767[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (6))){
var state_42687__$1 = state_42687;
var statearr_42715_42768 = state_42687__$1;
(statearr_42715_42768[(2)] = false);

(statearr_42715_42768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (28))){
var inst_42657 = (state_42687[(2)]);
var inst_42658 = calc_state.call(null);
var inst_42614 = inst_42658;
var state_42687__$1 = (function (){var statearr_42716 = state_42687;
(statearr_42716[(7)] = inst_42614);

(statearr_42716[(15)] = inst_42657);

return statearr_42716;
})();
var statearr_42717_42769 = state_42687__$1;
(statearr_42717_42769[(2)] = null);

(statearr_42717_42769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (25))){
var inst_42683 = (state_42687[(2)]);
var state_42687__$1 = state_42687;
var statearr_42718_42770 = state_42687__$1;
(statearr_42718_42770[(2)] = inst_42683);

(statearr_42718_42770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (34))){
var inst_42681 = (state_42687[(2)]);
var state_42687__$1 = state_42687;
var statearr_42719_42771 = state_42687__$1;
(statearr_42719_42771[(2)] = inst_42681);

(statearr_42719_42771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (17))){
var state_42687__$1 = state_42687;
var statearr_42720_42772 = state_42687__$1;
(statearr_42720_42772[(2)] = false);

(statearr_42720_42772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (3))){
var state_42687__$1 = state_42687;
var statearr_42721_42773 = state_42687__$1;
(statearr_42721_42773[(2)] = false);

(statearr_42721_42773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (12))){
var inst_42685 = (state_42687[(2)]);
var state_42687__$1 = state_42687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42687__$1,inst_42685);
} else {
if((state_val_42688 === (2))){
var inst_42589 = (state_42687[(8)]);
var inst_42594 = inst_42589.cljs$lang$protocol_mask$partition0$;
var inst_42595 = (inst_42594 & (64));
var inst_42596 = inst_42589.cljs$core$ISeq$;
var inst_42597 = (cljs.core.PROTOCOL_SENTINEL === inst_42596);
var inst_42598 = (inst_42595) || (inst_42597);
var state_42687__$1 = state_42687;
if(cljs.core.truth_(inst_42598)){
var statearr_42722_42774 = state_42687__$1;
(statearr_42722_42774[(1)] = (5));

} else {
var statearr_42723_42775 = state_42687__$1;
(statearr_42723_42775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (23))){
var inst_42646 = (state_42687[(14)]);
var inst_42652 = (inst_42646 == null);
var state_42687__$1 = state_42687;
if(cljs.core.truth_(inst_42652)){
var statearr_42724_42776 = state_42687__$1;
(statearr_42724_42776[(1)] = (26));

} else {
var statearr_42725_42777 = state_42687__$1;
(statearr_42725_42777[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (35))){
var inst_42672 = (state_42687[(2)]);
var state_42687__$1 = state_42687;
if(cljs.core.truth_(inst_42672)){
var statearr_42726_42778 = state_42687__$1;
(statearr_42726_42778[(1)] = (36));

} else {
var statearr_42727_42779 = state_42687__$1;
(statearr_42727_42779[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (19))){
var inst_42614 = (state_42687[(7)]);
var inst_42634 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42614);
var state_42687__$1 = state_42687;
var statearr_42728_42780 = state_42687__$1;
(statearr_42728_42780[(2)] = inst_42634);

(statearr_42728_42780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (11))){
var inst_42614 = (state_42687[(7)]);
var inst_42618 = (inst_42614 == null);
var inst_42619 = cljs.core.not.call(null,inst_42618);
var state_42687__$1 = state_42687;
if(inst_42619){
var statearr_42729_42781 = state_42687__$1;
(statearr_42729_42781[(1)] = (13));

} else {
var statearr_42730_42782 = state_42687__$1;
(statearr_42730_42782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (9))){
var inst_42589 = (state_42687[(8)]);
var state_42687__$1 = state_42687;
var statearr_42731_42783 = state_42687__$1;
(statearr_42731_42783[(2)] = inst_42589);

(statearr_42731_42783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (5))){
var state_42687__$1 = state_42687;
var statearr_42732_42784 = state_42687__$1;
(statearr_42732_42784[(2)] = true);

(statearr_42732_42784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (14))){
var state_42687__$1 = state_42687;
var statearr_42733_42785 = state_42687__$1;
(statearr_42733_42785[(2)] = false);

(statearr_42733_42785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (26))){
var inst_42647 = (state_42687[(10)]);
var inst_42654 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42647);
var state_42687__$1 = state_42687;
var statearr_42734_42786 = state_42687__$1;
(statearr_42734_42786[(2)] = inst_42654);

(statearr_42734_42786[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (16))){
var state_42687__$1 = state_42687;
var statearr_42735_42787 = state_42687__$1;
(statearr_42735_42787[(2)] = true);

(statearr_42735_42787[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (38))){
var inst_42677 = (state_42687[(2)]);
var state_42687__$1 = state_42687;
var statearr_42736_42788 = state_42687__$1;
(statearr_42736_42788[(2)] = inst_42677);

(statearr_42736_42788[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (30))){
var inst_42638 = (state_42687[(9)]);
var inst_42639 = (state_42687[(13)]);
var inst_42647 = (state_42687[(10)]);
var inst_42664 = cljs.core.empty_QMARK_.call(null,inst_42638);
var inst_42665 = inst_42639.call(null,inst_42647);
var inst_42666 = cljs.core.not.call(null,inst_42665);
var inst_42667 = (inst_42664) && (inst_42666);
var state_42687__$1 = state_42687;
var statearr_42737_42789 = state_42687__$1;
(statearr_42737_42789[(2)] = inst_42667);

(statearr_42737_42789[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (10))){
var inst_42589 = (state_42687[(8)]);
var inst_42610 = (state_42687[(2)]);
var inst_42611 = cljs.core.get.call(null,inst_42610,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42612 = cljs.core.get.call(null,inst_42610,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42613 = cljs.core.get.call(null,inst_42610,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42614 = inst_42589;
var state_42687__$1 = (function (){var statearr_42738 = state_42687;
(statearr_42738[(16)] = inst_42613);

(statearr_42738[(7)] = inst_42614);

(statearr_42738[(17)] = inst_42612);

(statearr_42738[(18)] = inst_42611);

return statearr_42738;
})();
var statearr_42739_42790 = state_42687__$1;
(statearr_42739_42790[(2)] = null);

(statearr_42739_42790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (18))){
var inst_42629 = (state_42687[(2)]);
var state_42687__$1 = state_42687;
var statearr_42740_42791 = state_42687__$1;
(statearr_42740_42791[(2)] = inst_42629);

(statearr_42740_42791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (37))){
var state_42687__$1 = state_42687;
var statearr_42741_42792 = state_42687__$1;
(statearr_42741_42792[(2)] = null);

(statearr_42741_42792[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42688 === (8))){
var inst_42589 = (state_42687[(8)]);
var inst_42607 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42589);
var state_42687__$1 = state_42687;
var statearr_42742_42793 = state_42687__$1;
(statearr_42742_42793[(2)] = inst_42607);

(statearr_42742_42793[(1)] = (10));


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
});})(c__32751__auto___42747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32663__auto__,c__32751__auto___42747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32664__auto__ = null;
var cljs$core$async$mix_$_state_machine__32664__auto____0 = (function (){
var statearr_42743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42743[(0)] = cljs$core$async$mix_$_state_machine__32664__auto__);

(statearr_42743[(1)] = (1));

return statearr_42743;
});
var cljs$core$async$mix_$_state_machine__32664__auto____1 = (function (state_42687){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_42687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e42744){if((e42744 instanceof Object)){
var ex__32667__auto__ = e42744;
var statearr_42745_42794 = state_42687;
(statearr_42745_42794[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42795 = state_42687;
state_42687 = G__42795;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32664__auto__ = function(state_42687){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32664__auto____1.call(this,state_42687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32664__auto____0;
cljs$core$async$mix_$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32664__auto____1;
return cljs$core$async$mix_$_state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___42747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32753__auto__ = (function (){var statearr_42746 = f__32752__auto__.call(null);
(statearr_42746[(6)] = c__32751__auto___42747);

return statearr_42746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___42747,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__42797 = arguments.length;
switch (G__42797) {
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
var G__42801 = arguments.length;
switch (G__42801) {
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
return (function (p1__42799_SHARP_){
if(cljs.core.truth_(p1__42799_SHARP_.call(null,topic))){
return p1__42799_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42799_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28286__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42802 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42803){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42803 = meta42803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42804,meta42803__$1){
var self__ = this;
var _42804__$1 = this;
return (new cljs.core.async.t_cljs$core$async42802(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42803__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42804){
var self__ = this;
var _42804__$1 = this;
return self__.meta42803;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42802.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42802.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42802.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42802.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async42802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42802.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42802.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42803","meta42803",-1653535173,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42802";

cljs.core.async.t_cljs$core$async42802.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async42802");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42802 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42802(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42803){
return (new cljs.core.async.t_cljs$core$async42802(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42803));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42802(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32751__auto___42922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___42922,mults,ensure_mult,p){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___42922,mults,ensure_mult,p){
return (function (state_42876){
var state_val_42877 = (state_42876[(1)]);
if((state_val_42877 === (7))){
var inst_42872 = (state_42876[(2)]);
var state_42876__$1 = state_42876;
var statearr_42878_42923 = state_42876__$1;
(statearr_42878_42923[(2)] = inst_42872);

(statearr_42878_42923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (20))){
var state_42876__$1 = state_42876;
var statearr_42879_42924 = state_42876__$1;
(statearr_42879_42924[(2)] = null);

(statearr_42879_42924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (1))){
var state_42876__$1 = state_42876;
var statearr_42880_42925 = state_42876__$1;
(statearr_42880_42925[(2)] = null);

(statearr_42880_42925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (24))){
var inst_42855 = (state_42876[(7)]);
var inst_42864 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42855);
var state_42876__$1 = state_42876;
var statearr_42881_42926 = state_42876__$1;
(statearr_42881_42926[(2)] = inst_42864);

(statearr_42881_42926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (4))){
var inst_42807 = (state_42876[(8)]);
var inst_42807__$1 = (state_42876[(2)]);
var inst_42808 = (inst_42807__$1 == null);
var state_42876__$1 = (function (){var statearr_42882 = state_42876;
(statearr_42882[(8)] = inst_42807__$1);

return statearr_42882;
})();
if(cljs.core.truth_(inst_42808)){
var statearr_42883_42927 = state_42876__$1;
(statearr_42883_42927[(1)] = (5));

} else {
var statearr_42884_42928 = state_42876__$1;
(statearr_42884_42928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (15))){
var inst_42849 = (state_42876[(2)]);
var state_42876__$1 = state_42876;
var statearr_42885_42929 = state_42876__$1;
(statearr_42885_42929[(2)] = inst_42849);

(statearr_42885_42929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (21))){
var inst_42869 = (state_42876[(2)]);
var state_42876__$1 = (function (){var statearr_42886 = state_42876;
(statearr_42886[(9)] = inst_42869);

return statearr_42886;
})();
var statearr_42887_42930 = state_42876__$1;
(statearr_42887_42930[(2)] = null);

(statearr_42887_42930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (13))){
var inst_42831 = (state_42876[(10)]);
var inst_42833 = cljs.core.chunked_seq_QMARK_.call(null,inst_42831);
var state_42876__$1 = state_42876;
if(inst_42833){
var statearr_42888_42931 = state_42876__$1;
(statearr_42888_42931[(1)] = (16));

} else {
var statearr_42889_42932 = state_42876__$1;
(statearr_42889_42932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (22))){
var inst_42861 = (state_42876[(2)]);
var state_42876__$1 = state_42876;
if(cljs.core.truth_(inst_42861)){
var statearr_42890_42933 = state_42876__$1;
(statearr_42890_42933[(1)] = (23));

} else {
var statearr_42891_42934 = state_42876__$1;
(statearr_42891_42934[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (6))){
var inst_42807 = (state_42876[(8)]);
var inst_42855 = (state_42876[(7)]);
var inst_42857 = (state_42876[(11)]);
var inst_42855__$1 = topic_fn.call(null,inst_42807);
var inst_42856 = cljs.core.deref.call(null,mults);
var inst_42857__$1 = cljs.core.get.call(null,inst_42856,inst_42855__$1);
var state_42876__$1 = (function (){var statearr_42892 = state_42876;
(statearr_42892[(7)] = inst_42855__$1);

(statearr_42892[(11)] = inst_42857__$1);

return statearr_42892;
})();
if(cljs.core.truth_(inst_42857__$1)){
var statearr_42893_42935 = state_42876__$1;
(statearr_42893_42935[(1)] = (19));

} else {
var statearr_42894_42936 = state_42876__$1;
(statearr_42894_42936[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (25))){
var inst_42866 = (state_42876[(2)]);
var state_42876__$1 = state_42876;
var statearr_42895_42937 = state_42876__$1;
(statearr_42895_42937[(2)] = inst_42866);

(statearr_42895_42937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (17))){
var inst_42831 = (state_42876[(10)]);
var inst_42840 = cljs.core.first.call(null,inst_42831);
var inst_42841 = cljs.core.async.muxch_STAR_.call(null,inst_42840);
var inst_42842 = cljs.core.async.close_BANG_.call(null,inst_42841);
var inst_42843 = cljs.core.next.call(null,inst_42831);
var inst_42817 = inst_42843;
var inst_42818 = null;
var inst_42819 = (0);
var inst_42820 = (0);
var state_42876__$1 = (function (){var statearr_42896 = state_42876;
(statearr_42896[(12)] = inst_42817);

(statearr_42896[(13)] = inst_42842);

(statearr_42896[(14)] = inst_42818);

(statearr_42896[(15)] = inst_42820);

(statearr_42896[(16)] = inst_42819);

return statearr_42896;
})();
var statearr_42897_42938 = state_42876__$1;
(statearr_42897_42938[(2)] = null);

(statearr_42897_42938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (3))){
var inst_42874 = (state_42876[(2)]);
var state_42876__$1 = state_42876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42876__$1,inst_42874);
} else {
if((state_val_42877 === (12))){
var inst_42851 = (state_42876[(2)]);
var state_42876__$1 = state_42876;
var statearr_42898_42939 = state_42876__$1;
(statearr_42898_42939[(2)] = inst_42851);

(statearr_42898_42939[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (2))){
var state_42876__$1 = state_42876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42876__$1,(4),ch);
} else {
if((state_val_42877 === (23))){
var state_42876__$1 = state_42876;
var statearr_42899_42940 = state_42876__$1;
(statearr_42899_42940[(2)] = null);

(statearr_42899_42940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (19))){
var inst_42807 = (state_42876[(8)]);
var inst_42857 = (state_42876[(11)]);
var inst_42859 = cljs.core.async.muxch_STAR_.call(null,inst_42857);
var state_42876__$1 = state_42876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42876__$1,(22),inst_42859,inst_42807);
} else {
if((state_val_42877 === (11))){
var inst_42817 = (state_42876[(12)]);
var inst_42831 = (state_42876[(10)]);
var inst_42831__$1 = cljs.core.seq.call(null,inst_42817);
var state_42876__$1 = (function (){var statearr_42900 = state_42876;
(statearr_42900[(10)] = inst_42831__$1);

return statearr_42900;
})();
if(inst_42831__$1){
var statearr_42901_42941 = state_42876__$1;
(statearr_42901_42941[(1)] = (13));

} else {
var statearr_42902_42942 = state_42876__$1;
(statearr_42902_42942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (9))){
var inst_42853 = (state_42876[(2)]);
var state_42876__$1 = state_42876;
var statearr_42903_42943 = state_42876__$1;
(statearr_42903_42943[(2)] = inst_42853);

(statearr_42903_42943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (5))){
var inst_42814 = cljs.core.deref.call(null,mults);
var inst_42815 = cljs.core.vals.call(null,inst_42814);
var inst_42816 = cljs.core.seq.call(null,inst_42815);
var inst_42817 = inst_42816;
var inst_42818 = null;
var inst_42819 = (0);
var inst_42820 = (0);
var state_42876__$1 = (function (){var statearr_42904 = state_42876;
(statearr_42904[(12)] = inst_42817);

(statearr_42904[(14)] = inst_42818);

(statearr_42904[(15)] = inst_42820);

(statearr_42904[(16)] = inst_42819);

return statearr_42904;
})();
var statearr_42905_42944 = state_42876__$1;
(statearr_42905_42944[(2)] = null);

(statearr_42905_42944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (14))){
var state_42876__$1 = state_42876;
var statearr_42909_42945 = state_42876__$1;
(statearr_42909_42945[(2)] = null);

(statearr_42909_42945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (16))){
var inst_42831 = (state_42876[(10)]);
var inst_42835 = cljs.core.chunk_first.call(null,inst_42831);
var inst_42836 = cljs.core.chunk_rest.call(null,inst_42831);
var inst_42837 = cljs.core.count.call(null,inst_42835);
var inst_42817 = inst_42836;
var inst_42818 = inst_42835;
var inst_42819 = inst_42837;
var inst_42820 = (0);
var state_42876__$1 = (function (){var statearr_42910 = state_42876;
(statearr_42910[(12)] = inst_42817);

(statearr_42910[(14)] = inst_42818);

(statearr_42910[(15)] = inst_42820);

(statearr_42910[(16)] = inst_42819);

return statearr_42910;
})();
var statearr_42911_42946 = state_42876__$1;
(statearr_42911_42946[(2)] = null);

(statearr_42911_42946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (10))){
var inst_42817 = (state_42876[(12)]);
var inst_42818 = (state_42876[(14)]);
var inst_42820 = (state_42876[(15)]);
var inst_42819 = (state_42876[(16)]);
var inst_42825 = cljs.core._nth.call(null,inst_42818,inst_42820);
var inst_42826 = cljs.core.async.muxch_STAR_.call(null,inst_42825);
var inst_42827 = cljs.core.async.close_BANG_.call(null,inst_42826);
var inst_42828 = (inst_42820 + (1));
var tmp42906 = inst_42817;
var tmp42907 = inst_42818;
var tmp42908 = inst_42819;
var inst_42817__$1 = tmp42906;
var inst_42818__$1 = tmp42907;
var inst_42819__$1 = tmp42908;
var inst_42820__$1 = inst_42828;
var state_42876__$1 = (function (){var statearr_42912 = state_42876;
(statearr_42912[(12)] = inst_42817__$1);

(statearr_42912[(17)] = inst_42827);

(statearr_42912[(14)] = inst_42818__$1);

(statearr_42912[(15)] = inst_42820__$1);

(statearr_42912[(16)] = inst_42819__$1);

return statearr_42912;
})();
var statearr_42913_42947 = state_42876__$1;
(statearr_42913_42947[(2)] = null);

(statearr_42913_42947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (18))){
var inst_42846 = (state_42876[(2)]);
var state_42876__$1 = state_42876;
var statearr_42914_42948 = state_42876__$1;
(statearr_42914_42948[(2)] = inst_42846);

(statearr_42914_42948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42877 === (8))){
var inst_42820 = (state_42876[(15)]);
var inst_42819 = (state_42876[(16)]);
var inst_42822 = (inst_42820 < inst_42819);
var inst_42823 = inst_42822;
var state_42876__$1 = state_42876;
if(cljs.core.truth_(inst_42823)){
var statearr_42915_42949 = state_42876__$1;
(statearr_42915_42949[(1)] = (10));

} else {
var statearr_42916_42950 = state_42876__$1;
(statearr_42916_42950[(1)] = (11));

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
});})(c__32751__auto___42922,mults,ensure_mult,p))
;
return ((function (switch__32663__auto__,c__32751__auto___42922,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32664__auto__ = null;
var cljs$core$async$state_machine__32664__auto____0 = (function (){
var statearr_42917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42917[(0)] = cljs$core$async$state_machine__32664__auto__);

(statearr_42917[(1)] = (1));

return statearr_42917;
});
var cljs$core$async$state_machine__32664__auto____1 = (function (state_42876){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_42876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e42918){if((e42918 instanceof Object)){
var ex__32667__auto__ = e42918;
var statearr_42919_42951 = state_42876;
(statearr_42919_42951[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42952 = state_42876;
state_42876 = G__42952;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$state_machine__32664__auto__ = function(state_42876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32664__auto____1.call(this,state_42876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32664__auto____0;
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32664__auto____1;
return cljs$core$async$state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___42922,mults,ensure_mult,p))
})();
var state__32753__auto__ = (function (){var statearr_42920 = f__32752__auto__.call(null);
(statearr_42920[(6)] = c__32751__auto___42922);

return statearr_42920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___42922,mults,ensure_mult,p))
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
var G__42954 = arguments.length;
switch (G__42954) {
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
var G__42957 = arguments.length;
switch (G__42957) {
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
var G__42960 = arguments.length;
switch (G__42960) {
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
var c__32751__auto___43027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___43027,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___43027,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42999){
var state_val_43000 = (state_42999[(1)]);
if((state_val_43000 === (7))){
var state_42999__$1 = state_42999;
var statearr_43001_43028 = state_42999__$1;
(statearr_43001_43028[(2)] = null);

(statearr_43001_43028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (1))){
var state_42999__$1 = state_42999;
var statearr_43002_43029 = state_42999__$1;
(statearr_43002_43029[(2)] = null);

(statearr_43002_43029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (4))){
var inst_42963 = (state_42999[(7)]);
var inst_42965 = (inst_42963 < cnt);
var state_42999__$1 = state_42999;
if(cljs.core.truth_(inst_42965)){
var statearr_43003_43030 = state_42999__$1;
(statearr_43003_43030[(1)] = (6));

} else {
var statearr_43004_43031 = state_42999__$1;
(statearr_43004_43031[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (15))){
var inst_42995 = (state_42999[(2)]);
var state_42999__$1 = state_42999;
var statearr_43005_43032 = state_42999__$1;
(statearr_43005_43032[(2)] = inst_42995);

(statearr_43005_43032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (13))){
var inst_42988 = cljs.core.async.close_BANG_.call(null,out);
var state_42999__$1 = state_42999;
var statearr_43006_43033 = state_42999__$1;
(statearr_43006_43033[(2)] = inst_42988);

(statearr_43006_43033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (6))){
var state_42999__$1 = state_42999;
var statearr_43007_43034 = state_42999__$1;
(statearr_43007_43034[(2)] = null);

(statearr_43007_43034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (3))){
var inst_42997 = (state_42999[(2)]);
var state_42999__$1 = state_42999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42999__$1,inst_42997);
} else {
if((state_val_43000 === (12))){
var inst_42985 = (state_42999[(8)]);
var inst_42985__$1 = (state_42999[(2)]);
var inst_42986 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42985__$1);
var state_42999__$1 = (function (){var statearr_43008 = state_42999;
(statearr_43008[(8)] = inst_42985__$1);

return statearr_43008;
})();
if(cljs.core.truth_(inst_42986)){
var statearr_43009_43035 = state_42999__$1;
(statearr_43009_43035[(1)] = (13));

} else {
var statearr_43010_43036 = state_42999__$1;
(statearr_43010_43036[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (2))){
var inst_42962 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42963 = (0);
var state_42999__$1 = (function (){var statearr_43011 = state_42999;
(statearr_43011[(9)] = inst_42962);

(statearr_43011[(7)] = inst_42963);

return statearr_43011;
})();
var statearr_43012_43037 = state_42999__$1;
(statearr_43012_43037[(2)] = null);

(statearr_43012_43037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (11))){
var inst_42963 = (state_42999[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42999,(10),Object,null,(9));
var inst_42972 = chs__$1.call(null,inst_42963);
var inst_42973 = done.call(null,inst_42963);
var inst_42974 = cljs.core.async.take_BANG_.call(null,inst_42972,inst_42973);
var state_42999__$1 = state_42999;
var statearr_43013_43038 = state_42999__$1;
(statearr_43013_43038[(2)] = inst_42974);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42999__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (9))){
var inst_42963 = (state_42999[(7)]);
var inst_42976 = (state_42999[(2)]);
var inst_42977 = (inst_42963 + (1));
var inst_42963__$1 = inst_42977;
var state_42999__$1 = (function (){var statearr_43014 = state_42999;
(statearr_43014[(10)] = inst_42976);

(statearr_43014[(7)] = inst_42963__$1);

return statearr_43014;
})();
var statearr_43015_43039 = state_42999__$1;
(statearr_43015_43039[(2)] = null);

(statearr_43015_43039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (5))){
var inst_42983 = (state_42999[(2)]);
var state_42999__$1 = (function (){var statearr_43016 = state_42999;
(statearr_43016[(11)] = inst_42983);

return statearr_43016;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42999__$1,(12),dchan);
} else {
if((state_val_43000 === (14))){
var inst_42985 = (state_42999[(8)]);
var inst_42990 = cljs.core.apply.call(null,f,inst_42985);
var state_42999__$1 = state_42999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42999__$1,(16),out,inst_42990);
} else {
if((state_val_43000 === (16))){
var inst_42992 = (state_42999[(2)]);
var state_42999__$1 = (function (){var statearr_43017 = state_42999;
(statearr_43017[(12)] = inst_42992);

return statearr_43017;
})();
var statearr_43018_43040 = state_42999__$1;
(statearr_43018_43040[(2)] = null);

(statearr_43018_43040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (10))){
var inst_42967 = (state_42999[(2)]);
var inst_42968 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42999__$1 = (function (){var statearr_43019 = state_42999;
(statearr_43019[(13)] = inst_42967);

return statearr_43019;
})();
var statearr_43020_43041 = state_42999__$1;
(statearr_43020_43041[(2)] = inst_42968);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42999__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (8))){
var inst_42981 = (state_42999[(2)]);
var state_42999__$1 = state_42999;
var statearr_43021_43042 = state_42999__$1;
(statearr_43021_43042[(2)] = inst_42981);

(statearr_43021_43042[(1)] = (5));


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
});})(c__32751__auto___43027,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32663__auto__,c__32751__auto___43027,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32664__auto__ = null;
var cljs$core$async$state_machine__32664__auto____0 = (function (){
var statearr_43022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43022[(0)] = cljs$core$async$state_machine__32664__auto__);

(statearr_43022[(1)] = (1));

return statearr_43022;
});
var cljs$core$async$state_machine__32664__auto____1 = (function (state_42999){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_42999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e43023){if((e43023 instanceof Object)){
var ex__32667__auto__ = e43023;
var statearr_43024_43043 = state_42999;
(statearr_43024_43043[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43044 = state_42999;
state_42999 = G__43044;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$state_machine__32664__auto__ = function(state_42999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32664__auto____1.call(this,state_42999);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32664__auto____0;
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32664__auto____1;
return cljs$core$async$state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___43027,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32753__auto__ = (function (){var statearr_43025 = f__32752__auto__.call(null);
(statearr_43025[(6)] = c__32751__auto___43027);

return statearr_43025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___43027,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__43047 = arguments.length;
switch (G__43047) {
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
var c__32751__auto___43101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___43101,out){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___43101,out){
return (function (state_43079){
var state_val_43080 = (state_43079[(1)]);
if((state_val_43080 === (7))){
var inst_43058 = (state_43079[(7)]);
var inst_43059 = (state_43079[(8)]);
var inst_43058__$1 = (state_43079[(2)]);
var inst_43059__$1 = cljs.core.nth.call(null,inst_43058__$1,(0),null);
var inst_43060 = cljs.core.nth.call(null,inst_43058__$1,(1),null);
var inst_43061 = (inst_43059__$1 == null);
var state_43079__$1 = (function (){var statearr_43081 = state_43079;
(statearr_43081[(9)] = inst_43060);

(statearr_43081[(7)] = inst_43058__$1);

(statearr_43081[(8)] = inst_43059__$1);

return statearr_43081;
})();
if(cljs.core.truth_(inst_43061)){
var statearr_43082_43102 = state_43079__$1;
(statearr_43082_43102[(1)] = (8));

} else {
var statearr_43083_43103 = state_43079__$1;
(statearr_43083_43103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43080 === (1))){
var inst_43048 = cljs.core.vec.call(null,chs);
var inst_43049 = inst_43048;
var state_43079__$1 = (function (){var statearr_43084 = state_43079;
(statearr_43084[(10)] = inst_43049);

return statearr_43084;
})();
var statearr_43085_43104 = state_43079__$1;
(statearr_43085_43104[(2)] = null);

(statearr_43085_43104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43080 === (4))){
var inst_43049 = (state_43079[(10)]);
var state_43079__$1 = state_43079;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43079__$1,(7),inst_43049);
} else {
if((state_val_43080 === (6))){
var inst_43075 = (state_43079[(2)]);
var state_43079__$1 = state_43079;
var statearr_43086_43105 = state_43079__$1;
(statearr_43086_43105[(2)] = inst_43075);

(statearr_43086_43105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43080 === (3))){
var inst_43077 = (state_43079[(2)]);
var state_43079__$1 = state_43079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43079__$1,inst_43077);
} else {
if((state_val_43080 === (2))){
var inst_43049 = (state_43079[(10)]);
var inst_43051 = cljs.core.count.call(null,inst_43049);
var inst_43052 = (inst_43051 > (0));
var state_43079__$1 = state_43079;
if(cljs.core.truth_(inst_43052)){
var statearr_43088_43106 = state_43079__$1;
(statearr_43088_43106[(1)] = (4));

} else {
var statearr_43089_43107 = state_43079__$1;
(statearr_43089_43107[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43080 === (11))){
var inst_43049 = (state_43079[(10)]);
var inst_43068 = (state_43079[(2)]);
var tmp43087 = inst_43049;
var inst_43049__$1 = tmp43087;
var state_43079__$1 = (function (){var statearr_43090 = state_43079;
(statearr_43090[(10)] = inst_43049__$1);

(statearr_43090[(11)] = inst_43068);

return statearr_43090;
})();
var statearr_43091_43108 = state_43079__$1;
(statearr_43091_43108[(2)] = null);

(statearr_43091_43108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43080 === (9))){
var inst_43059 = (state_43079[(8)]);
var state_43079__$1 = state_43079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43079__$1,(11),out,inst_43059);
} else {
if((state_val_43080 === (5))){
var inst_43073 = cljs.core.async.close_BANG_.call(null,out);
var state_43079__$1 = state_43079;
var statearr_43092_43109 = state_43079__$1;
(statearr_43092_43109[(2)] = inst_43073);

(statearr_43092_43109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43080 === (10))){
var inst_43071 = (state_43079[(2)]);
var state_43079__$1 = state_43079;
var statearr_43093_43110 = state_43079__$1;
(statearr_43093_43110[(2)] = inst_43071);

(statearr_43093_43110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43080 === (8))){
var inst_43060 = (state_43079[(9)]);
var inst_43058 = (state_43079[(7)]);
var inst_43049 = (state_43079[(10)]);
var inst_43059 = (state_43079[(8)]);
var inst_43063 = (function (){var cs = inst_43049;
var vec__43054 = inst_43058;
var v = inst_43059;
var c = inst_43060;
return ((function (cs,vec__43054,v,c,inst_43060,inst_43058,inst_43049,inst_43059,state_val_43080,c__32751__auto___43101,out){
return (function (p1__43045_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43045_SHARP_);
});
;})(cs,vec__43054,v,c,inst_43060,inst_43058,inst_43049,inst_43059,state_val_43080,c__32751__auto___43101,out))
})();
var inst_43064 = cljs.core.filterv.call(null,inst_43063,inst_43049);
var inst_43049__$1 = inst_43064;
var state_43079__$1 = (function (){var statearr_43094 = state_43079;
(statearr_43094[(10)] = inst_43049__$1);

return statearr_43094;
})();
var statearr_43095_43111 = state_43079__$1;
(statearr_43095_43111[(2)] = null);

(statearr_43095_43111[(1)] = (2));


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
});})(c__32751__auto___43101,out))
;
return ((function (switch__32663__auto__,c__32751__auto___43101,out){
return (function() {
var cljs$core$async$state_machine__32664__auto__ = null;
var cljs$core$async$state_machine__32664__auto____0 = (function (){
var statearr_43096 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43096[(0)] = cljs$core$async$state_machine__32664__auto__);

(statearr_43096[(1)] = (1));

return statearr_43096;
});
var cljs$core$async$state_machine__32664__auto____1 = (function (state_43079){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_43079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e43097){if((e43097 instanceof Object)){
var ex__32667__auto__ = e43097;
var statearr_43098_43112 = state_43079;
(statearr_43098_43112[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43113 = state_43079;
state_43079 = G__43113;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$state_machine__32664__auto__ = function(state_43079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32664__auto____1.call(this,state_43079);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32664__auto____0;
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32664__auto____1;
return cljs$core$async$state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___43101,out))
})();
var state__32753__auto__ = (function (){var statearr_43099 = f__32752__auto__.call(null);
(statearr_43099[(6)] = c__32751__auto___43101);

return statearr_43099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___43101,out))
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
var G__43115 = arguments.length;
switch (G__43115) {
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
var c__32751__auto___43160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___43160,out){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___43160,out){
return (function (state_43139){
var state_val_43140 = (state_43139[(1)]);
if((state_val_43140 === (7))){
var inst_43121 = (state_43139[(7)]);
var inst_43121__$1 = (state_43139[(2)]);
var inst_43122 = (inst_43121__$1 == null);
var inst_43123 = cljs.core.not.call(null,inst_43122);
var state_43139__$1 = (function (){var statearr_43141 = state_43139;
(statearr_43141[(7)] = inst_43121__$1);

return statearr_43141;
})();
if(inst_43123){
var statearr_43142_43161 = state_43139__$1;
(statearr_43142_43161[(1)] = (8));

} else {
var statearr_43143_43162 = state_43139__$1;
(statearr_43143_43162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43140 === (1))){
var inst_43116 = (0);
var state_43139__$1 = (function (){var statearr_43144 = state_43139;
(statearr_43144[(8)] = inst_43116);

return statearr_43144;
})();
var statearr_43145_43163 = state_43139__$1;
(statearr_43145_43163[(2)] = null);

(statearr_43145_43163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43140 === (4))){
var state_43139__$1 = state_43139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43139__$1,(7),ch);
} else {
if((state_val_43140 === (6))){
var inst_43134 = (state_43139[(2)]);
var state_43139__$1 = state_43139;
var statearr_43146_43164 = state_43139__$1;
(statearr_43146_43164[(2)] = inst_43134);

(statearr_43146_43164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43140 === (3))){
var inst_43136 = (state_43139[(2)]);
var inst_43137 = cljs.core.async.close_BANG_.call(null,out);
var state_43139__$1 = (function (){var statearr_43147 = state_43139;
(statearr_43147[(9)] = inst_43136);

return statearr_43147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43139__$1,inst_43137);
} else {
if((state_val_43140 === (2))){
var inst_43116 = (state_43139[(8)]);
var inst_43118 = (inst_43116 < n);
var state_43139__$1 = state_43139;
if(cljs.core.truth_(inst_43118)){
var statearr_43148_43165 = state_43139__$1;
(statearr_43148_43165[(1)] = (4));

} else {
var statearr_43149_43166 = state_43139__$1;
(statearr_43149_43166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43140 === (11))){
var inst_43116 = (state_43139[(8)]);
var inst_43126 = (state_43139[(2)]);
var inst_43127 = (inst_43116 + (1));
var inst_43116__$1 = inst_43127;
var state_43139__$1 = (function (){var statearr_43150 = state_43139;
(statearr_43150[(10)] = inst_43126);

(statearr_43150[(8)] = inst_43116__$1);

return statearr_43150;
})();
var statearr_43151_43167 = state_43139__$1;
(statearr_43151_43167[(2)] = null);

(statearr_43151_43167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43140 === (9))){
var state_43139__$1 = state_43139;
var statearr_43152_43168 = state_43139__$1;
(statearr_43152_43168[(2)] = null);

(statearr_43152_43168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43140 === (5))){
var state_43139__$1 = state_43139;
var statearr_43153_43169 = state_43139__$1;
(statearr_43153_43169[(2)] = null);

(statearr_43153_43169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43140 === (10))){
var inst_43131 = (state_43139[(2)]);
var state_43139__$1 = state_43139;
var statearr_43154_43170 = state_43139__$1;
(statearr_43154_43170[(2)] = inst_43131);

(statearr_43154_43170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43140 === (8))){
var inst_43121 = (state_43139[(7)]);
var state_43139__$1 = state_43139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43139__$1,(11),out,inst_43121);
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
});})(c__32751__auto___43160,out))
;
return ((function (switch__32663__auto__,c__32751__auto___43160,out){
return (function() {
var cljs$core$async$state_machine__32664__auto__ = null;
var cljs$core$async$state_machine__32664__auto____0 = (function (){
var statearr_43155 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43155[(0)] = cljs$core$async$state_machine__32664__auto__);

(statearr_43155[(1)] = (1));

return statearr_43155;
});
var cljs$core$async$state_machine__32664__auto____1 = (function (state_43139){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_43139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e43156){if((e43156 instanceof Object)){
var ex__32667__auto__ = e43156;
var statearr_43157_43171 = state_43139;
(statearr_43157_43171[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43172 = state_43139;
state_43139 = G__43172;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$state_machine__32664__auto__ = function(state_43139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32664__auto____1.call(this,state_43139);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32664__auto____0;
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32664__auto____1;
return cljs$core$async$state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___43160,out))
})();
var state__32753__auto__ = (function (){var statearr_43158 = f__32752__auto__.call(null);
(statearr_43158[(6)] = c__32751__auto___43160);

return statearr_43158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___43160,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43174 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43174 = (function (f,ch,meta43175){
this.f = f;
this.ch = ch;
this.meta43175 = meta43175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43176,meta43175__$1){
var self__ = this;
var _43176__$1 = this;
return (new cljs.core.async.t_cljs$core$async43174(self__.f,self__.ch,meta43175__$1));
});

cljs.core.async.t_cljs$core$async43174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43176){
var self__ = this;
var _43176__$1 = this;
return self__.meta43175;
});

cljs.core.async.t_cljs$core$async43174.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43174.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43174.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43177 = (function (f,ch,meta43175,_,fn1,meta43178){
this.f = f;
this.ch = ch;
this.meta43175 = meta43175;
this._ = _;
this.fn1 = fn1;
this.meta43178 = meta43178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43179,meta43178__$1){
var self__ = this;
var _43179__$1 = this;
return (new cljs.core.async.t_cljs$core$async43177(self__.f,self__.ch,self__.meta43175,self__._,self__.fn1,meta43178__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43179){
var self__ = this;
var _43179__$1 = this;
return self__.meta43178;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43177.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43173_SHARP_){
return f1.call(null,(((p1__43173_SHARP_ == null))?null:self__.f.call(null,p1__43173_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43177.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43175","meta43175",-385369350,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43174","cljs.core.async/t_cljs$core$async43174",-114766507,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43178","meta43178",-1060777324,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43177";

cljs.core.async.t_cljs$core$async43177.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async43177");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43177 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43177(f__$1,ch__$1,meta43175__$1,___$2,fn1__$1,meta43178){
return (new cljs.core.async.t_cljs$core$async43177(f__$1,ch__$1,meta43175__$1,___$2,fn1__$1,meta43178));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43177(self__.f,self__.ch,self__.meta43175,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async43174.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43175","meta43175",-385369350,null)], null);
});

cljs.core.async.t_cljs$core$async43174.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43174";

cljs.core.async.t_cljs$core$async43174.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async43174");
});

cljs.core.async.__GT_t_cljs$core$async43174 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43174(f__$1,ch__$1,meta43175){
return (new cljs.core.async.t_cljs$core$async43174(f__$1,ch__$1,meta43175));
});

}

return (new cljs.core.async.t_cljs$core$async43174(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43180 = (function (f,ch,meta43181){
this.f = f;
this.ch = ch;
this.meta43181 = meta43181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43182,meta43181__$1){
var self__ = this;
var _43182__$1 = this;
return (new cljs.core.async.t_cljs$core$async43180(self__.f,self__.ch,meta43181__$1));
});

cljs.core.async.t_cljs$core$async43180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43182){
var self__ = this;
var _43182__$1 = this;
return self__.meta43181;
});

cljs.core.async.t_cljs$core$async43180.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43180.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43180.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43180.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43180.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43180.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43181","meta43181",-1271191902,null)], null);
});

cljs.core.async.t_cljs$core$async43180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43180";

cljs.core.async.t_cljs$core$async43180.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async43180");
});

cljs.core.async.__GT_t_cljs$core$async43180 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43180(f__$1,ch__$1,meta43181){
return (new cljs.core.async.t_cljs$core$async43180(f__$1,ch__$1,meta43181));
});

}

return (new cljs.core.async.t_cljs$core$async43180(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43183 = (function (p,ch,meta43184){
this.p = p;
this.ch = ch;
this.meta43184 = meta43184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43185,meta43184__$1){
var self__ = this;
var _43185__$1 = this;
return (new cljs.core.async.t_cljs$core$async43183(self__.p,self__.ch,meta43184__$1));
});

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43185){
var self__ = this;
var _43185__$1 = this;
return self__.meta43184;
});

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43184","meta43184",-1300357782,null)], null);
});

cljs.core.async.t_cljs$core$async43183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43183";

cljs.core.async.t_cljs$core$async43183.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async43183");
});

cljs.core.async.__GT_t_cljs$core$async43183 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43183(p__$1,ch__$1,meta43184){
return (new cljs.core.async.t_cljs$core$async43183(p__$1,ch__$1,meta43184));
});

}

return (new cljs.core.async.t_cljs$core$async43183(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43187 = arguments.length;
switch (G__43187) {
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
var c__32751__auto___43227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___43227,out){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___43227,out){
return (function (state_43208){
var state_val_43209 = (state_43208[(1)]);
if((state_val_43209 === (7))){
var inst_43204 = (state_43208[(2)]);
var state_43208__$1 = state_43208;
var statearr_43210_43228 = state_43208__$1;
(statearr_43210_43228[(2)] = inst_43204);

(statearr_43210_43228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43209 === (1))){
var state_43208__$1 = state_43208;
var statearr_43211_43229 = state_43208__$1;
(statearr_43211_43229[(2)] = null);

(statearr_43211_43229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43209 === (4))){
var inst_43190 = (state_43208[(7)]);
var inst_43190__$1 = (state_43208[(2)]);
var inst_43191 = (inst_43190__$1 == null);
var state_43208__$1 = (function (){var statearr_43212 = state_43208;
(statearr_43212[(7)] = inst_43190__$1);

return statearr_43212;
})();
if(cljs.core.truth_(inst_43191)){
var statearr_43213_43230 = state_43208__$1;
(statearr_43213_43230[(1)] = (5));

} else {
var statearr_43214_43231 = state_43208__$1;
(statearr_43214_43231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43209 === (6))){
var inst_43190 = (state_43208[(7)]);
var inst_43195 = p.call(null,inst_43190);
var state_43208__$1 = state_43208;
if(cljs.core.truth_(inst_43195)){
var statearr_43215_43232 = state_43208__$1;
(statearr_43215_43232[(1)] = (8));

} else {
var statearr_43216_43233 = state_43208__$1;
(statearr_43216_43233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43209 === (3))){
var inst_43206 = (state_43208[(2)]);
var state_43208__$1 = state_43208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43208__$1,inst_43206);
} else {
if((state_val_43209 === (2))){
var state_43208__$1 = state_43208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43208__$1,(4),ch);
} else {
if((state_val_43209 === (11))){
var inst_43198 = (state_43208[(2)]);
var state_43208__$1 = state_43208;
var statearr_43217_43234 = state_43208__$1;
(statearr_43217_43234[(2)] = inst_43198);

(statearr_43217_43234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43209 === (9))){
var state_43208__$1 = state_43208;
var statearr_43218_43235 = state_43208__$1;
(statearr_43218_43235[(2)] = null);

(statearr_43218_43235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43209 === (5))){
var inst_43193 = cljs.core.async.close_BANG_.call(null,out);
var state_43208__$1 = state_43208;
var statearr_43219_43236 = state_43208__$1;
(statearr_43219_43236[(2)] = inst_43193);

(statearr_43219_43236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43209 === (10))){
var inst_43201 = (state_43208[(2)]);
var state_43208__$1 = (function (){var statearr_43220 = state_43208;
(statearr_43220[(8)] = inst_43201);

return statearr_43220;
})();
var statearr_43221_43237 = state_43208__$1;
(statearr_43221_43237[(2)] = null);

(statearr_43221_43237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43209 === (8))){
var inst_43190 = (state_43208[(7)]);
var state_43208__$1 = state_43208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43208__$1,(11),out,inst_43190);
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
});})(c__32751__auto___43227,out))
;
return ((function (switch__32663__auto__,c__32751__auto___43227,out){
return (function() {
var cljs$core$async$state_machine__32664__auto__ = null;
var cljs$core$async$state_machine__32664__auto____0 = (function (){
var statearr_43222 = [null,null,null,null,null,null,null,null,null];
(statearr_43222[(0)] = cljs$core$async$state_machine__32664__auto__);

(statearr_43222[(1)] = (1));

return statearr_43222;
});
var cljs$core$async$state_machine__32664__auto____1 = (function (state_43208){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_43208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e43223){if((e43223 instanceof Object)){
var ex__32667__auto__ = e43223;
var statearr_43224_43238 = state_43208;
(statearr_43224_43238[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43239 = state_43208;
state_43208 = G__43239;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$state_machine__32664__auto__ = function(state_43208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32664__auto____1.call(this,state_43208);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32664__auto____0;
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32664__auto____1;
return cljs$core$async$state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___43227,out))
})();
var state__32753__auto__ = (function (){var statearr_43225 = f__32752__auto__.call(null);
(statearr_43225[(6)] = c__32751__auto___43227);

return statearr_43225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___43227,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43241 = arguments.length;
switch (G__43241) {
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
var c__32751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto__){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto__){
return (function (state_43304){
var state_val_43305 = (state_43304[(1)]);
if((state_val_43305 === (7))){
var inst_43300 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43306_43344 = state_43304__$1;
(statearr_43306_43344[(2)] = inst_43300);

(statearr_43306_43344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (20))){
var inst_43270 = (state_43304[(7)]);
var inst_43281 = (state_43304[(2)]);
var inst_43282 = cljs.core.next.call(null,inst_43270);
var inst_43256 = inst_43282;
var inst_43257 = null;
var inst_43258 = (0);
var inst_43259 = (0);
var state_43304__$1 = (function (){var statearr_43307 = state_43304;
(statearr_43307[(8)] = inst_43259);

(statearr_43307[(9)] = inst_43257);

(statearr_43307[(10)] = inst_43281);

(statearr_43307[(11)] = inst_43258);

(statearr_43307[(12)] = inst_43256);

return statearr_43307;
})();
var statearr_43308_43345 = state_43304__$1;
(statearr_43308_43345[(2)] = null);

(statearr_43308_43345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (1))){
var state_43304__$1 = state_43304;
var statearr_43309_43346 = state_43304__$1;
(statearr_43309_43346[(2)] = null);

(statearr_43309_43346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (4))){
var inst_43245 = (state_43304[(13)]);
var inst_43245__$1 = (state_43304[(2)]);
var inst_43246 = (inst_43245__$1 == null);
var state_43304__$1 = (function (){var statearr_43310 = state_43304;
(statearr_43310[(13)] = inst_43245__$1);

return statearr_43310;
})();
if(cljs.core.truth_(inst_43246)){
var statearr_43311_43347 = state_43304__$1;
(statearr_43311_43347[(1)] = (5));

} else {
var statearr_43312_43348 = state_43304__$1;
(statearr_43312_43348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (15))){
var state_43304__$1 = state_43304;
var statearr_43316_43349 = state_43304__$1;
(statearr_43316_43349[(2)] = null);

(statearr_43316_43349[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (21))){
var state_43304__$1 = state_43304;
var statearr_43317_43350 = state_43304__$1;
(statearr_43317_43350[(2)] = null);

(statearr_43317_43350[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (13))){
var inst_43259 = (state_43304[(8)]);
var inst_43257 = (state_43304[(9)]);
var inst_43258 = (state_43304[(11)]);
var inst_43256 = (state_43304[(12)]);
var inst_43266 = (state_43304[(2)]);
var inst_43267 = (inst_43259 + (1));
var tmp43313 = inst_43257;
var tmp43314 = inst_43258;
var tmp43315 = inst_43256;
var inst_43256__$1 = tmp43315;
var inst_43257__$1 = tmp43313;
var inst_43258__$1 = tmp43314;
var inst_43259__$1 = inst_43267;
var state_43304__$1 = (function (){var statearr_43318 = state_43304;
(statearr_43318[(8)] = inst_43259__$1);

(statearr_43318[(9)] = inst_43257__$1);

(statearr_43318[(14)] = inst_43266);

(statearr_43318[(11)] = inst_43258__$1);

(statearr_43318[(12)] = inst_43256__$1);

return statearr_43318;
})();
var statearr_43319_43351 = state_43304__$1;
(statearr_43319_43351[(2)] = null);

(statearr_43319_43351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (22))){
var state_43304__$1 = state_43304;
var statearr_43320_43352 = state_43304__$1;
(statearr_43320_43352[(2)] = null);

(statearr_43320_43352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (6))){
var inst_43245 = (state_43304[(13)]);
var inst_43254 = f.call(null,inst_43245);
var inst_43255 = cljs.core.seq.call(null,inst_43254);
var inst_43256 = inst_43255;
var inst_43257 = null;
var inst_43258 = (0);
var inst_43259 = (0);
var state_43304__$1 = (function (){var statearr_43321 = state_43304;
(statearr_43321[(8)] = inst_43259);

(statearr_43321[(9)] = inst_43257);

(statearr_43321[(11)] = inst_43258);

(statearr_43321[(12)] = inst_43256);

return statearr_43321;
})();
var statearr_43322_43353 = state_43304__$1;
(statearr_43322_43353[(2)] = null);

(statearr_43322_43353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (17))){
var inst_43270 = (state_43304[(7)]);
var inst_43274 = cljs.core.chunk_first.call(null,inst_43270);
var inst_43275 = cljs.core.chunk_rest.call(null,inst_43270);
var inst_43276 = cljs.core.count.call(null,inst_43274);
var inst_43256 = inst_43275;
var inst_43257 = inst_43274;
var inst_43258 = inst_43276;
var inst_43259 = (0);
var state_43304__$1 = (function (){var statearr_43323 = state_43304;
(statearr_43323[(8)] = inst_43259);

(statearr_43323[(9)] = inst_43257);

(statearr_43323[(11)] = inst_43258);

(statearr_43323[(12)] = inst_43256);

return statearr_43323;
})();
var statearr_43324_43354 = state_43304__$1;
(statearr_43324_43354[(2)] = null);

(statearr_43324_43354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (3))){
var inst_43302 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43304__$1,inst_43302);
} else {
if((state_val_43305 === (12))){
var inst_43290 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43325_43355 = state_43304__$1;
(statearr_43325_43355[(2)] = inst_43290);

(statearr_43325_43355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (2))){
var state_43304__$1 = state_43304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43304__$1,(4),in$);
} else {
if((state_val_43305 === (23))){
var inst_43298 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43326_43356 = state_43304__$1;
(statearr_43326_43356[(2)] = inst_43298);

(statearr_43326_43356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (19))){
var inst_43285 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43327_43357 = state_43304__$1;
(statearr_43327_43357[(2)] = inst_43285);

(statearr_43327_43357[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (11))){
var inst_43256 = (state_43304[(12)]);
var inst_43270 = (state_43304[(7)]);
var inst_43270__$1 = cljs.core.seq.call(null,inst_43256);
var state_43304__$1 = (function (){var statearr_43328 = state_43304;
(statearr_43328[(7)] = inst_43270__$1);

return statearr_43328;
})();
if(inst_43270__$1){
var statearr_43329_43358 = state_43304__$1;
(statearr_43329_43358[(1)] = (14));

} else {
var statearr_43330_43359 = state_43304__$1;
(statearr_43330_43359[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (9))){
var inst_43292 = (state_43304[(2)]);
var inst_43293 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43304__$1 = (function (){var statearr_43331 = state_43304;
(statearr_43331[(15)] = inst_43292);

return statearr_43331;
})();
if(cljs.core.truth_(inst_43293)){
var statearr_43332_43360 = state_43304__$1;
(statearr_43332_43360[(1)] = (21));

} else {
var statearr_43333_43361 = state_43304__$1;
(statearr_43333_43361[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (5))){
var inst_43248 = cljs.core.async.close_BANG_.call(null,out);
var state_43304__$1 = state_43304;
var statearr_43334_43362 = state_43304__$1;
(statearr_43334_43362[(2)] = inst_43248);

(statearr_43334_43362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (14))){
var inst_43270 = (state_43304[(7)]);
var inst_43272 = cljs.core.chunked_seq_QMARK_.call(null,inst_43270);
var state_43304__$1 = state_43304;
if(inst_43272){
var statearr_43335_43363 = state_43304__$1;
(statearr_43335_43363[(1)] = (17));

} else {
var statearr_43336_43364 = state_43304__$1;
(statearr_43336_43364[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (16))){
var inst_43288 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43337_43365 = state_43304__$1;
(statearr_43337_43365[(2)] = inst_43288);

(statearr_43337_43365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (10))){
var inst_43259 = (state_43304[(8)]);
var inst_43257 = (state_43304[(9)]);
var inst_43264 = cljs.core._nth.call(null,inst_43257,inst_43259);
var state_43304__$1 = state_43304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43304__$1,(13),out,inst_43264);
} else {
if((state_val_43305 === (18))){
var inst_43270 = (state_43304[(7)]);
var inst_43279 = cljs.core.first.call(null,inst_43270);
var state_43304__$1 = state_43304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43304__$1,(20),out,inst_43279);
} else {
if((state_val_43305 === (8))){
var inst_43259 = (state_43304[(8)]);
var inst_43258 = (state_43304[(11)]);
var inst_43261 = (inst_43259 < inst_43258);
var inst_43262 = inst_43261;
var state_43304__$1 = state_43304;
if(cljs.core.truth_(inst_43262)){
var statearr_43338_43366 = state_43304__$1;
(statearr_43338_43366[(1)] = (10));

} else {
var statearr_43339_43367 = state_43304__$1;
(statearr_43339_43367[(1)] = (11));

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
});})(c__32751__auto__))
;
return ((function (switch__32663__auto__,c__32751__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32664__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32664__auto____0 = (function (){
var statearr_43340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43340[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32664__auto__);

(statearr_43340[(1)] = (1));

return statearr_43340;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32664__auto____1 = (function (state_43304){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_43304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e43341){if((e43341 instanceof Object)){
var ex__32667__auto__ = e43341;
var statearr_43342_43368 = state_43304;
(statearr_43342_43368[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43369 = state_43304;
state_43304 = G__43369;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32664__auto__ = function(state_43304){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32664__auto____1.call(this,state_43304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32664__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32664__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto__))
})();
var state__32753__auto__ = (function (){var statearr_43343 = f__32752__auto__.call(null);
(statearr_43343[(6)] = c__32751__auto__);

return statearr_43343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto__))
);

return c__32751__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43371 = arguments.length;
switch (G__43371) {
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
var G__43374 = arguments.length;
switch (G__43374) {
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
var G__43377 = arguments.length;
switch (G__43377) {
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
var c__32751__auto___43424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___43424,out){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___43424,out){
return (function (state_43401){
var state_val_43402 = (state_43401[(1)]);
if((state_val_43402 === (7))){
var inst_43396 = (state_43401[(2)]);
var state_43401__$1 = state_43401;
var statearr_43403_43425 = state_43401__$1;
(statearr_43403_43425[(2)] = inst_43396);

(statearr_43403_43425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43402 === (1))){
var inst_43378 = null;
var state_43401__$1 = (function (){var statearr_43404 = state_43401;
(statearr_43404[(7)] = inst_43378);

return statearr_43404;
})();
var statearr_43405_43426 = state_43401__$1;
(statearr_43405_43426[(2)] = null);

(statearr_43405_43426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43402 === (4))){
var inst_43381 = (state_43401[(8)]);
var inst_43381__$1 = (state_43401[(2)]);
var inst_43382 = (inst_43381__$1 == null);
var inst_43383 = cljs.core.not.call(null,inst_43382);
var state_43401__$1 = (function (){var statearr_43406 = state_43401;
(statearr_43406[(8)] = inst_43381__$1);

return statearr_43406;
})();
if(inst_43383){
var statearr_43407_43427 = state_43401__$1;
(statearr_43407_43427[(1)] = (5));

} else {
var statearr_43408_43428 = state_43401__$1;
(statearr_43408_43428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43402 === (6))){
var state_43401__$1 = state_43401;
var statearr_43409_43429 = state_43401__$1;
(statearr_43409_43429[(2)] = null);

(statearr_43409_43429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43402 === (3))){
var inst_43398 = (state_43401[(2)]);
var inst_43399 = cljs.core.async.close_BANG_.call(null,out);
var state_43401__$1 = (function (){var statearr_43410 = state_43401;
(statearr_43410[(9)] = inst_43398);

return statearr_43410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43401__$1,inst_43399);
} else {
if((state_val_43402 === (2))){
var state_43401__$1 = state_43401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43401__$1,(4),ch);
} else {
if((state_val_43402 === (11))){
var inst_43381 = (state_43401[(8)]);
var inst_43390 = (state_43401[(2)]);
var inst_43378 = inst_43381;
var state_43401__$1 = (function (){var statearr_43411 = state_43401;
(statearr_43411[(7)] = inst_43378);

(statearr_43411[(10)] = inst_43390);

return statearr_43411;
})();
var statearr_43412_43430 = state_43401__$1;
(statearr_43412_43430[(2)] = null);

(statearr_43412_43430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43402 === (9))){
var inst_43381 = (state_43401[(8)]);
var state_43401__$1 = state_43401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43401__$1,(11),out,inst_43381);
} else {
if((state_val_43402 === (5))){
var inst_43378 = (state_43401[(7)]);
var inst_43381 = (state_43401[(8)]);
var inst_43385 = cljs.core._EQ_.call(null,inst_43381,inst_43378);
var state_43401__$1 = state_43401;
if(inst_43385){
var statearr_43414_43431 = state_43401__$1;
(statearr_43414_43431[(1)] = (8));

} else {
var statearr_43415_43432 = state_43401__$1;
(statearr_43415_43432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43402 === (10))){
var inst_43393 = (state_43401[(2)]);
var state_43401__$1 = state_43401;
var statearr_43416_43433 = state_43401__$1;
(statearr_43416_43433[(2)] = inst_43393);

(statearr_43416_43433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43402 === (8))){
var inst_43378 = (state_43401[(7)]);
var tmp43413 = inst_43378;
var inst_43378__$1 = tmp43413;
var state_43401__$1 = (function (){var statearr_43417 = state_43401;
(statearr_43417[(7)] = inst_43378__$1);

return statearr_43417;
})();
var statearr_43418_43434 = state_43401__$1;
(statearr_43418_43434[(2)] = null);

(statearr_43418_43434[(1)] = (2));


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
});})(c__32751__auto___43424,out))
;
return ((function (switch__32663__auto__,c__32751__auto___43424,out){
return (function() {
var cljs$core$async$state_machine__32664__auto__ = null;
var cljs$core$async$state_machine__32664__auto____0 = (function (){
var statearr_43419 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43419[(0)] = cljs$core$async$state_machine__32664__auto__);

(statearr_43419[(1)] = (1));

return statearr_43419;
});
var cljs$core$async$state_machine__32664__auto____1 = (function (state_43401){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_43401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e43420){if((e43420 instanceof Object)){
var ex__32667__auto__ = e43420;
var statearr_43421_43435 = state_43401;
(statearr_43421_43435[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43436 = state_43401;
state_43401 = G__43436;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$state_machine__32664__auto__ = function(state_43401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32664__auto____1.call(this,state_43401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32664__auto____0;
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32664__auto____1;
return cljs$core$async$state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___43424,out))
})();
var state__32753__auto__ = (function (){var statearr_43422 = f__32752__auto__.call(null);
(statearr_43422[(6)] = c__32751__auto___43424);

return statearr_43422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___43424,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43438 = arguments.length;
switch (G__43438) {
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
var c__32751__auto___43504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___43504,out){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___43504,out){
return (function (state_43476){
var state_val_43477 = (state_43476[(1)]);
if((state_val_43477 === (7))){
var inst_43472 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
var statearr_43478_43505 = state_43476__$1;
(statearr_43478_43505[(2)] = inst_43472);

(statearr_43478_43505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (1))){
var inst_43439 = (new Array(n));
var inst_43440 = inst_43439;
var inst_43441 = (0);
var state_43476__$1 = (function (){var statearr_43479 = state_43476;
(statearr_43479[(7)] = inst_43440);

(statearr_43479[(8)] = inst_43441);

return statearr_43479;
})();
var statearr_43480_43506 = state_43476__$1;
(statearr_43480_43506[(2)] = null);

(statearr_43480_43506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (4))){
var inst_43444 = (state_43476[(9)]);
var inst_43444__$1 = (state_43476[(2)]);
var inst_43445 = (inst_43444__$1 == null);
var inst_43446 = cljs.core.not.call(null,inst_43445);
var state_43476__$1 = (function (){var statearr_43481 = state_43476;
(statearr_43481[(9)] = inst_43444__$1);

return statearr_43481;
})();
if(inst_43446){
var statearr_43482_43507 = state_43476__$1;
(statearr_43482_43507[(1)] = (5));

} else {
var statearr_43483_43508 = state_43476__$1;
(statearr_43483_43508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (15))){
var inst_43466 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
var statearr_43484_43509 = state_43476__$1;
(statearr_43484_43509[(2)] = inst_43466);

(statearr_43484_43509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (13))){
var state_43476__$1 = state_43476;
var statearr_43485_43510 = state_43476__$1;
(statearr_43485_43510[(2)] = null);

(statearr_43485_43510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (6))){
var inst_43441 = (state_43476[(8)]);
var inst_43462 = (inst_43441 > (0));
var state_43476__$1 = state_43476;
if(cljs.core.truth_(inst_43462)){
var statearr_43486_43511 = state_43476__$1;
(statearr_43486_43511[(1)] = (12));

} else {
var statearr_43487_43512 = state_43476__$1;
(statearr_43487_43512[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (3))){
var inst_43474 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43476__$1,inst_43474);
} else {
if((state_val_43477 === (12))){
var inst_43440 = (state_43476[(7)]);
var inst_43464 = cljs.core.vec.call(null,inst_43440);
var state_43476__$1 = state_43476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43476__$1,(15),out,inst_43464);
} else {
if((state_val_43477 === (2))){
var state_43476__$1 = state_43476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43476__$1,(4),ch);
} else {
if((state_val_43477 === (11))){
var inst_43456 = (state_43476[(2)]);
var inst_43457 = (new Array(n));
var inst_43440 = inst_43457;
var inst_43441 = (0);
var state_43476__$1 = (function (){var statearr_43488 = state_43476;
(statearr_43488[(7)] = inst_43440);

(statearr_43488[(10)] = inst_43456);

(statearr_43488[(8)] = inst_43441);

return statearr_43488;
})();
var statearr_43489_43513 = state_43476__$1;
(statearr_43489_43513[(2)] = null);

(statearr_43489_43513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (9))){
var inst_43440 = (state_43476[(7)]);
var inst_43454 = cljs.core.vec.call(null,inst_43440);
var state_43476__$1 = state_43476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43476__$1,(11),out,inst_43454);
} else {
if((state_val_43477 === (5))){
var inst_43440 = (state_43476[(7)]);
var inst_43444 = (state_43476[(9)]);
var inst_43449 = (state_43476[(11)]);
var inst_43441 = (state_43476[(8)]);
var inst_43448 = (inst_43440[inst_43441] = inst_43444);
var inst_43449__$1 = (inst_43441 + (1));
var inst_43450 = (inst_43449__$1 < n);
var state_43476__$1 = (function (){var statearr_43490 = state_43476;
(statearr_43490[(12)] = inst_43448);

(statearr_43490[(11)] = inst_43449__$1);

return statearr_43490;
})();
if(cljs.core.truth_(inst_43450)){
var statearr_43491_43514 = state_43476__$1;
(statearr_43491_43514[(1)] = (8));

} else {
var statearr_43492_43515 = state_43476__$1;
(statearr_43492_43515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (14))){
var inst_43469 = (state_43476[(2)]);
var inst_43470 = cljs.core.async.close_BANG_.call(null,out);
var state_43476__$1 = (function (){var statearr_43494 = state_43476;
(statearr_43494[(13)] = inst_43469);

return statearr_43494;
})();
var statearr_43495_43516 = state_43476__$1;
(statearr_43495_43516[(2)] = inst_43470);

(statearr_43495_43516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (10))){
var inst_43460 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
var statearr_43496_43517 = state_43476__$1;
(statearr_43496_43517[(2)] = inst_43460);

(statearr_43496_43517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (8))){
var inst_43440 = (state_43476[(7)]);
var inst_43449 = (state_43476[(11)]);
var tmp43493 = inst_43440;
var inst_43440__$1 = tmp43493;
var inst_43441 = inst_43449;
var state_43476__$1 = (function (){var statearr_43497 = state_43476;
(statearr_43497[(7)] = inst_43440__$1);

(statearr_43497[(8)] = inst_43441);

return statearr_43497;
})();
var statearr_43498_43518 = state_43476__$1;
(statearr_43498_43518[(2)] = null);

(statearr_43498_43518[(1)] = (2));


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
});})(c__32751__auto___43504,out))
;
return ((function (switch__32663__auto__,c__32751__auto___43504,out){
return (function() {
var cljs$core$async$state_machine__32664__auto__ = null;
var cljs$core$async$state_machine__32664__auto____0 = (function (){
var statearr_43499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43499[(0)] = cljs$core$async$state_machine__32664__auto__);

(statearr_43499[(1)] = (1));

return statearr_43499;
});
var cljs$core$async$state_machine__32664__auto____1 = (function (state_43476){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_43476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e43500){if((e43500 instanceof Object)){
var ex__32667__auto__ = e43500;
var statearr_43501_43519 = state_43476;
(statearr_43501_43519[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43520 = state_43476;
state_43476 = G__43520;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$state_machine__32664__auto__ = function(state_43476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32664__auto____1.call(this,state_43476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32664__auto____0;
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32664__auto____1;
return cljs$core$async$state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___43504,out))
})();
var state__32753__auto__ = (function (){var statearr_43502 = f__32752__auto__.call(null);
(statearr_43502[(6)] = c__32751__auto___43504);

return statearr_43502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___43504,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43522 = arguments.length;
switch (G__43522) {
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
var c__32751__auto___43592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32751__auto___43592,out){
return (function (){
var f__32752__auto__ = (function (){var switch__32663__auto__ = ((function (c__32751__auto___43592,out){
return (function (state_43564){
var state_val_43565 = (state_43564[(1)]);
if((state_val_43565 === (7))){
var inst_43560 = (state_43564[(2)]);
var state_43564__$1 = state_43564;
var statearr_43566_43593 = state_43564__$1;
(statearr_43566_43593[(2)] = inst_43560);

(statearr_43566_43593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43565 === (1))){
var inst_43523 = [];
var inst_43524 = inst_43523;
var inst_43525 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43564__$1 = (function (){var statearr_43567 = state_43564;
(statearr_43567[(7)] = inst_43525);

(statearr_43567[(8)] = inst_43524);

return statearr_43567;
})();
var statearr_43568_43594 = state_43564__$1;
(statearr_43568_43594[(2)] = null);

(statearr_43568_43594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43565 === (4))){
var inst_43528 = (state_43564[(9)]);
var inst_43528__$1 = (state_43564[(2)]);
var inst_43529 = (inst_43528__$1 == null);
var inst_43530 = cljs.core.not.call(null,inst_43529);
var state_43564__$1 = (function (){var statearr_43569 = state_43564;
(statearr_43569[(9)] = inst_43528__$1);

return statearr_43569;
})();
if(inst_43530){
var statearr_43570_43595 = state_43564__$1;
(statearr_43570_43595[(1)] = (5));

} else {
var statearr_43571_43596 = state_43564__$1;
(statearr_43571_43596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43565 === (15))){
var inst_43554 = (state_43564[(2)]);
var state_43564__$1 = state_43564;
var statearr_43572_43597 = state_43564__$1;
(statearr_43572_43597[(2)] = inst_43554);

(statearr_43572_43597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43565 === (13))){
var state_43564__$1 = state_43564;
var statearr_43573_43598 = state_43564__$1;
(statearr_43573_43598[(2)] = null);

(statearr_43573_43598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43565 === (6))){
var inst_43524 = (state_43564[(8)]);
var inst_43549 = inst_43524.length;
var inst_43550 = (inst_43549 > (0));
var state_43564__$1 = state_43564;
if(cljs.core.truth_(inst_43550)){
var statearr_43574_43599 = state_43564__$1;
(statearr_43574_43599[(1)] = (12));

} else {
var statearr_43575_43600 = state_43564__$1;
(statearr_43575_43600[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43565 === (3))){
var inst_43562 = (state_43564[(2)]);
var state_43564__$1 = state_43564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43564__$1,inst_43562);
} else {
if((state_val_43565 === (12))){
var inst_43524 = (state_43564[(8)]);
var inst_43552 = cljs.core.vec.call(null,inst_43524);
var state_43564__$1 = state_43564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43564__$1,(15),out,inst_43552);
} else {
if((state_val_43565 === (2))){
var state_43564__$1 = state_43564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43564__$1,(4),ch);
} else {
if((state_val_43565 === (11))){
var inst_43532 = (state_43564[(10)]);
var inst_43528 = (state_43564[(9)]);
var inst_43542 = (state_43564[(2)]);
var inst_43543 = [];
var inst_43544 = inst_43543.push(inst_43528);
var inst_43524 = inst_43543;
var inst_43525 = inst_43532;
var state_43564__$1 = (function (){var statearr_43576 = state_43564;
(statearr_43576[(11)] = inst_43542);

(statearr_43576[(7)] = inst_43525);

(statearr_43576[(8)] = inst_43524);

(statearr_43576[(12)] = inst_43544);

return statearr_43576;
})();
var statearr_43577_43601 = state_43564__$1;
(statearr_43577_43601[(2)] = null);

(statearr_43577_43601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43565 === (9))){
var inst_43524 = (state_43564[(8)]);
var inst_43540 = cljs.core.vec.call(null,inst_43524);
var state_43564__$1 = state_43564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43564__$1,(11),out,inst_43540);
} else {
if((state_val_43565 === (5))){
var inst_43532 = (state_43564[(10)]);
var inst_43528 = (state_43564[(9)]);
var inst_43525 = (state_43564[(7)]);
var inst_43532__$1 = f.call(null,inst_43528);
var inst_43533 = cljs.core._EQ_.call(null,inst_43532__$1,inst_43525);
var inst_43534 = cljs.core.keyword_identical_QMARK_.call(null,inst_43525,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43535 = (inst_43533) || (inst_43534);
var state_43564__$1 = (function (){var statearr_43578 = state_43564;
(statearr_43578[(10)] = inst_43532__$1);

return statearr_43578;
})();
if(cljs.core.truth_(inst_43535)){
var statearr_43579_43602 = state_43564__$1;
(statearr_43579_43602[(1)] = (8));

} else {
var statearr_43580_43603 = state_43564__$1;
(statearr_43580_43603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43565 === (14))){
var inst_43557 = (state_43564[(2)]);
var inst_43558 = cljs.core.async.close_BANG_.call(null,out);
var state_43564__$1 = (function (){var statearr_43582 = state_43564;
(statearr_43582[(13)] = inst_43557);

return statearr_43582;
})();
var statearr_43583_43604 = state_43564__$1;
(statearr_43583_43604[(2)] = inst_43558);

(statearr_43583_43604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43565 === (10))){
var inst_43547 = (state_43564[(2)]);
var state_43564__$1 = state_43564;
var statearr_43584_43605 = state_43564__$1;
(statearr_43584_43605[(2)] = inst_43547);

(statearr_43584_43605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43565 === (8))){
var inst_43532 = (state_43564[(10)]);
var inst_43528 = (state_43564[(9)]);
var inst_43524 = (state_43564[(8)]);
var inst_43537 = inst_43524.push(inst_43528);
var tmp43581 = inst_43524;
var inst_43524__$1 = tmp43581;
var inst_43525 = inst_43532;
var state_43564__$1 = (function (){var statearr_43585 = state_43564;
(statearr_43585[(7)] = inst_43525);

(statearr_43585[(8)] = inst_43524__$1);

(statearr_43585[(14)] = inst_43537);

return statearr_43585;
})();
var statearr_43586_43606 = state_43564__$1;
(statearr_43586_43606[(2)] = null);

(statearr_43586_43606[(1)] = (2));


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
});})(c__32751__auto___43592,out))
;
return ((function (switch__32663__auto__,c__32751__auto___43592,out){
return (function() {
var cljs$core$async$state_machine__32664__auto__ = null;
var cljs$core$async$state_machine__32664__auto____0 = (function (){
var statearr_43587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43587[(0)] = cljs$core$async$state_machine__32664__auto__);

(statearr_43587[(1)] = (1));

return statearr_43587;
});
var cljs$core$async$state_machine__32664__auto____1 = (function (state_43564){
while(true){
var ret_value__32665__auto__ = (function (){try{while(true){
var result__32666__auto__ = switch__32663__auto__.call(null,state_43564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32666__auto__;
}
break;
}
}catch (e43588){if((e43588 instanceof Object)){
var ex__32667__auto__ = e43588;
var statearr_43589_43607 = state_43564;
(statearr_43589_43607[(5)] = ex__32667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43608 = state_43564;
state_43564 = G__43608;
continue;
} else {
return ret_value__32665__auto__;
}
break;
}
});
cljs$core$async$state_machine__32664__auto__ = function(state_43564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32664__auto____1.call(this,state_43564);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32664__auto____0;
cljs$core$async$state_machine__32664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32664__auto____1;
return cljs$core$async$state_machine__32664__auto__;
})()
;})(switch__32663__auto__,c__32751__auto___43592,out))
})();
var state__32753__auto__ = (function (){var statearr_43590 = f__32752__auto__.call(null);
(statearr_43590[(6)] = c__32751__auto___43592);

return statearr_43590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32753__auto__);
});})(c__32751__auto___43592,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1512672407668
