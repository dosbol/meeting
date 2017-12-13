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
var G__41756 = arguments.length;
switch (G__41756) {
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
if(typeof cljs.core.async.t_cljs$core$async41757 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41757 = (function (f,blockable,meta41758){
this.f = f;
this.blockable = blockable;
this.meta41758 = meta41758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41759,meta41758__$1){
var self__ = this;
var _41759__$1 = this;
return (new cljs.core.async.t_cljs$core$async41757(self__.f,self__.blockable,meta41758__$1));
});

cljs.core.async.t_cljs$core$async41757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41759){
var self__ = this;
var _41759__$1 = this;
return self__.meta41758;
});

cljs.core.async.t_cljs$core$async41757.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41757.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41757.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async41757.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async41757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41758","meta41758",-1321324246,null)], null);
});

cljs.core.async.t_cljs$core$async41757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41757";

cljs.core.async.t_cljs$core$async41757.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async41757");
});

cljs.core.async.__GT_t_cljs$core$async41757 = (function cljs$core$async$__GT_t_cljs$core$async41757(f__$1,blockable__$1,meta41758){
return (new cljs.core.async.t_cljs$core$async41757(f__$1,blockable__$1,meta41758));
});

}

return (new cljs.core.async.t_cljs$core$async41757(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__41763 = arguments.length;
switch (G__41763) {
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
var G__41766 = arguments.length;
switch (G__41766) {
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
var G__41769 = arguments.length;
switch (G__41769) {
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
var val_41771 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_41771);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_41771,ret){
return (function (){
return fn1.call(null,val_41771);
});})(val_41771,ret))
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
var G__41773 = arguments.length;
switch (G__41773) {
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
var n__29231__auto___41775 = n;
var x_41776 = (0);
while(true){
if((x_41776 < n__29231__auto___41775)){
(a[x_41776] = (0));

var G__41777 = (x_41776 + (1));
x_41776 = G__41777;
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

var G__41778 = (i + (1));
i = G__41778;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async41779 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41779 = (function (flag,meta41780){
this.flag = flag;
this.meta41780 = meta41780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_41781,meta41780__$1){
var self__ = this;
var _41781__$1 = this;
return (new cljs.core.async.t_cljs$core$async41779(self__.flag,meta41780__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async41779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_41781){
var self__ = this;
var _41781__$1 = this;
return self__.meta41780;
});})(flag))
;

cljs.core.async.t_cljs$core$async41779.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41779.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async41779.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41779.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41779.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41780","meta41780",-1862496215,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async41779.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41779";

cljs.core.async.t_cljs$core$async41779.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async41779");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async41779 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41779(flag__$1,meta41780){
return (new cljs.core.async.t_cljs$core$async41779(flag__$1,meta41780));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async41779(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async41782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41782 = (function (flag,cb,meta41783){
this.flag = flag;
this.cb = cb;
this.meta41783 = meta41783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41784,meta41783__$1){
var self__ = this;
var _41784__$1 = this;
return (new cljs.core.async.t_cljs$core$async41782(self__.flag,self__.cb,meta41783__$1));
});

cljs.core.async.t_cljs$core$async41782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41784){
var self__ = this;
var _41784__$1 = this;
return self__.meta41783;
});

cljs.core.async.t_cljs$core$async41782.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async41782.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async41782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41783","meta41783",1639117145,null)], null);
});

cljs.core.async.t_cljs$core$async41782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41782";

cljs.core.async.t_cljs$core$async41782.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async41782");
});

cljs.core.async.__GT_t_cljs$core$async41782 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41782(flag__$1,cb__$1,meta41783){
return (new cljs.core.async.t_cljs$core$async41782(flag__$1,cb__$1,meta41783));
});

}

return (new cljs.core.async.t_cljs$core$async41782(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__41785_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41785_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41786_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41786_SHARP_,port], null));
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
var G__41787 = (i + (1));
i = G__41787;
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
var len__29455__auto___41793 = arguments.length;
var i__29456__auto___41794 = (0);
while(true){
if((i__29456__auto___41794 < len__29455__auto___41793)){
args__29462__auto__.push((arguments[i__29456__auto___41794]));

var G__41795 = (i__29456__auto___41794 + (1));
i__29456__auto___41794 = G__41795;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41790){
var map__41791 = p__41790;
var map__41791__$1 = ((((!((map__41791 == null)))?((((map__41791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41791):map__41791);
var opts = map__41791__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41788){
var G__41789 = cljs.core.first.call(null,seq41788);
var seq41788__$1 = cljs.core.next.call(null,seq41788);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41789,seq41788__$1);
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
var G__41797 = arguments.length;
switch (G__41797) {
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
var c__33555__auto___41843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___41843){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___41843){
return (function (state_41821){
var state_val_41822 = (state_41821[(1)]);
if((state_val_41822 === (7))){
var inst_41817 = (state_41821[(2)]);
var state_41821__$1 = state_41821;
var statearr_41823_41844 = state_41821__$1;
(statearr_41823_41844[(2)] = inst_41817);

(statearr_41823_41844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41822 === (1))){
var state_41821__$1 = state_41821;
var statearr_41824_41845 = state_41821__$1;
(statearr_41824_41845[(2)] = null);

(statearr_41824_41845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41822 === (4))){
var inst_41800 = (state_41821[(7)]);
var inst_41800__$1 = (state_41821[(2)]);
var inst_41801 = (inst_41800__$1 == null);
var state_41821__$1 = (function (){var statearr_41825 = state_41821;
(statearr_41825[(7)] = inst_41800__$1);

return statearr_41825;
})();
if(cljs.core.truth_(inst_41801)){
var statearr_41826_41846 = state_41821__$1;
(statearr_41826_41846[(1)] = (5));

} else {
var statearr_41827_41847 = state_41821__$1;
(statearr_41827_41847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41822 === (13))){
var state_41821__$1 = state_41821;
var statearr_41828_41848 = state_41821__$1;
(statearr_41828_41848[(2)] = null);

(statearr_41828_41848[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41822 === (6))){
var inst_41800 = (state_41821[(7)]);
var state_41821__$1 = state_41821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41821__$1,(11),to,inst_41800);
} else {
if((state_val_41822 === (3))){
var inst_41819 = (state_41821[(2)]);
var state_41821__$1 = state_41821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41821__$1,inst_41819);
} else {
if((state_val_41822 === (12))){
var state_41821__$1 = state_41821;
var statearr_41829_41849 = state_41821__$1;
(statearr_41829_41849[(2)] = null);

(statearr_41829_41849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41822 === (2))){
var state_41821__$1 = state_41821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41821__$1,(4),from);
} else {
if((state_val_41822 === (11))){
var inst_41810 = (state_41821[(2)]);
var state_41821__$1 = state_41821;
if(cljs.core.truth_(inst_41810)){
var statearr_41830_41850 = state_41821__$1;
(statearr_41830_41850[(1)] = (12));

} else {
var statearr_41831_41851 = state_41821__$1;
(statearr_41831_41851[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41822 === (9))){
var state_41821__$1 = state_41821;
var statearr_41832_41852 = state_41821__$1;
(statearr_41832_41852[(2)] = null);

(statearr_41832_41852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41822 === (5))){
var state_41821__$1 = state_41821;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41833_41853 = state_41821__$1;
(statearr_41833_41853[(1)] = (8));

} else {
var statearr_41834_41854 = state_41821__$1;
(statearr_41834_41854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41822 === (14))){
var inst_41815 = (state_41821[(2)]);
var state_41821__$1 = state_41821;
var statearr_41835_41855 = state_41821__$1;
(statearr_41835_41855[(2)] = inst_41815);

(statearr_41835_41855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41822 === (10))){
var inst_41807 = (state_41821[(2)]);
var state_41821__$1 = state_41821;
var statearr_41836_41856 = state_41821__$1;
(statearr_41836_41856[(2)] = inst_41807);

(statearr_41836_41856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41822 === (8))){
var inst_41804 = cljs.core.async.close_BANG_.call(null,to);
var state_41821__$1 = state_41821;
var statearr_41837_41857 = state_41821__$1;
(statearr_41837_41857[(2)] = inst_41804);

(statearr_41837_41857[(1)] = (10));


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
});})(c__33555__auto___41843))
;
return ((function (switch__33467__auto__,c__33555__auto___41843){
return (function() {
var cljs$core$async$state_machine__33468__auto__ = null;
var cljs$core$async$state_machine__33468__auto____0 = (function (){
var statearr_41838 = [null,null,null,null,null,null,null,null];
(statearr_41838[(0)] = cljs$core$async$state_machine__33468__auto__);

(statearr_41838[(1)] = (1));

return statearr_41838;
});
var cljs$core$async$state_machine__33468__auto____1 = (function (state_41821){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_41821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e41839){if((e41839 instanceof Object)){
var ex__33471__auto__ = e41839;
var statearr_41840_41858 = state_41821;
(statearr_41840_41858[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41859 = state_41821;
state_41821 = G__41859;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$state_machine__33468__auto__ = function(state_41821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33468__auto____1.call(this,state_41821);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33468__auto____0;
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33468__auto____1;
return cljs$core$async$state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___41843))
})();
var state__33557__auto__ = (function (){var statearr_41841 = f__33556__auto__.call(null);
(statearr_41841[(6)] = c__33555__auto___41843);

return statearr_41841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___41843))
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
return (function (p__41860){
var vec__41861 = p__41860;
var v = cljs.core.nth.call(null,vec__41861,(0),null);
var p = cljs.core.nth.call(null,vec__41861,(1),null);
var job = vec__41861;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33555__auto___42032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___42032,res,vec__41861,v,p,job,jobs,results){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___42032,res,vec__41861,v,p,job,jobs,results){
return (function (state_41868){
var state_val_41869 = (state_41868[(1)]);
if((state_val_41869 === (1))){
var state_41868__$1 = state_41868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41868__$1,(2),res,v);
} else {
if((state_val_41869 === (2))){
var inst_41865 = (state_41868[(2)]);
var inst_41866 = cljs.core.async.close_BANG_.call(null,res);
var state_41868__$1 = (function (){var statearr_41870 = state_41868;
(statearr_41870[(7)] = inst_41865);

return statearr_41870;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41868__$1,inst_41866);
} else {
return null;
}
}
});})(c__33555__auto___42032,res,vec__41861,v,p,job,jobs,results))
;
return ((function (switch__33467__auto__,c__33555__auto___42032,res,vec__41861,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____0 = (function (){
var statearr_41871 = [null,null,null,null,null,null,null,null];
(statearr_41871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__);

(statearr_41871[(1)] = (1));

return statearr_41871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____1 = (function (state_41868){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_41868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e41872){if((e41872 instanceof Object)){
var ex__33471__auto__ = e41872;
var statearr_41873_42033 = state_41868;
(statearr_41873_42033[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42034 = state_41868;
state_41868 = G__42034;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__ = function(state_41868){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____1.call(this,state_41868);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___42032,res,vec__41861,v,p,job,jobs,results))
})();
var state__33557__auto__ = (function (){var statearr_41874 = f__33556__auto__.call(null);
(statearr_41874[(6)] = c__33555__auto___42032);

return statearr_41874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___42032,res,vec__41861,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41875){
var vec__41876 = p__41875;
var v = cljs.core.nth.call(null,vec__41876,(0),null);
var p = cljs.core.nth.call(null,vec__41876,(1),null);
var job = vec__41876;
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
var n__29231__auto___42035 = n;
var __42036 = (0);
while(true){
if((__42036 < n__29231__auto___42035)){
var G__41879_42037 = type;
var G__41879_42038__$1 = (((G__41879_42037 instanceof cljs.core.Keyword))?G__41879_42037.fqn:null);
switch (G__41879_42038__$1) {
case "compute":
var c__33555__auto___42040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42036,c__33555__auto___42040,G__41879_42037,G__41879_42038__$1,n__29231__auto___42035,jobs,results,process,async){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (__42036,c__33555__auto___42040,G__41879_42037,G__41879_42038__$1,n__29231__auto___42035,jobs,results,process,async){
return (function (state_41892){
var state_val_41893 = (state_41892[(1)]);
if((state_val_41893 === (1))){
var state_41892__$1 = state_41892;
var statearr_41894_42041 = state_41892__$1;
(statearr_41894_42041[(2)] = null);

(statearr_41894_42041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (2))){
var state_41892__$1 = state_41892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41892__$1,(4),jobs);
} else {
if((state_val_41893 === (3))){
var inst_41890 = (state_41892[(2)]);
var state_41892__$1 = state_41892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41892__$1,inst_41890);
} else {
if((state_val_41893 === (4))){
var inst_41882 = (state_41892[(2)]);
var inst_41883 = process.call(null,inst_41882);
var state_41892__$1 = state_41892;
if(cljs.core.truth_(inst_41883)){
var statearr_41895_42042 = state_41892__$1;
(statearr_41895_42042[(1)] = (5));

} else {
var statearr_41896_42043 = state_41892__$1;
(statearr_41896_42043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (5))){
var state_41892__$1 = state_41892;
var statearr_41897_42044 = state_41892__$1;
(statearr_41897_42044[(2)] = null);

(statearr_41897_42044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (6))){
var state_41892__$1 = state_41892;
var statearr_41898_42045 = state_41892__$1;
(statearr_41898_42045[(2)] = null);

(statearr_41898_42045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (7))){
var inst_41888 = (state_41892[(2)]);
var state_41892__$1 = state_41892;
var statearr_41899_42046 = state_41892__$1;
(statearr_41899_42046[(2)] = inst_41888);

(statearr_41899_42046[(1)] = (3));


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
});})(__42036,c__33555__auto___42040,G__41879_42037,G__41879_42038__$1,n__29231__auto___42035,jobs,results,process,async))
;
return ((function (__42036,switch__33467__auto__,c__33555__auto___42040,G__41879_42037,G__41879_42038__$1,n__29231__auto___42035,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____0 = (function (){
var statearr_41900 = [null,null,null,null,null,null,null];
(statearr_41900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__);

(statearr_41900[(1)] = (1));

return statearr_41900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____1 = (function (state_41892){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_41892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e41901){if((e41901 instanceof Object)){
var ex__33471__auto__ = e41901;
var statearr_41902_42047 = state_41892;
(statearr_41902_42047[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42048 = state_41892;
state_41892 = G__42048;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__ = function(state_41892){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____1.call(this,state_41892);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__;
})()
;})(__42036,switch__33467__auto__,c__33555__auto___42040,G__41879_42037,G__41879_42038__$1,n__29231__auto___42035,jobs,results,process,async))
})();
var state__33557__auto__ = (function (){var statearr_41903 = f__33556__auto__.call(null);
(statearr_41903[(6)] = c__33555__auto___42040);

return statearr_41903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(__42036,c__33555__auto___42040,G__41879_42037,G__41879_42038__$1,n__29231__auto___42035,jobs,results,process,async))
);


break;
case "async":
var c__33555__auto___42049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42036,c__33555__auto___42049,G__41879_42037,G__41879_42038__$1,n__29231__auto___42035,jobs,results,process,async){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (__42036,c__33555__auto___42049,G__41879_42037,G__41879_42038__$1,n__29231__auto___42035,jobs,results,process,async){
return (function (state_41916){
var state_val_41917 = (state_41916[(1)]);
if((state_val_41917 === (1))){
var state_41916__$1 = state_41916;
var statearr_41918_42050 = state_41916__$1;
(statearr_41918_42050[(2)] = null);

(statearr_41918_42050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (2))){
var state_41916__$1 = state_41916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41916__$1,(4),jobs);
} else {
if((state_val_41917 === (3))){
var inst_41914 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41916__$1,inst_41914);
} else {
if((state_val_41917 === (4))){
var inst_41906 = (state_41916[(2)]);
var inst_41907 = async.call(null,inst_41906);
var state_41916__$1 = state_41916;
if(cljs.core.truth_(inst_41907)){
var statearr_41919_42051 = state_41916__$1;
(statearr_41919_42051[(1)] = (5));

} else {
var statearr_41920_42052 = state_41916__$1;
(statearr_41920_42052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (5))){
var state_41916__$1 = state_41916;
var statearr_41921_42053 = state_41916__$1;
(statearr_41921_42053[(2)] = null);

(statearr_41921_42053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (6))){
var state_41916__$1 = state_41916;
var statearr_41922_42054 = state_41916__$1;
(statearr_41922_42054[(2)] = null);

(statearr_41922_42054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41917 === (7))){
var inst_41912 = (state_41916[(2)]);
var state_41916__$1 = state_41916;
var statearr_41923_42055 = state_41916__$1;
(statearr_41923_42055[(2)] = inst_41912);

(statearr_41923_42055[(1)] = (3));


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
});})(__42036,c__33555__auto___42049,G__41879_42037,G__41879_42038__$1,n__29231__auto___42035,jobs,results,process,async))
;
return ((function (__42036,switch__33467__auto__,c__33555__auto___42049,G__41879_42037,G__41879_42038__$1,n__29231__auto___42035,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____0 = (function (){
var statearr_41924 = [null,null,null,null,null,null,null];
(statearr_41924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__);

(statearr_41924[(1)] = (1));

return statearr_41924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____1 = (function (state_41916){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_41916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e41925){if((e41925 instanceof Object)){
var ex__33471__auto__ = e41925;
var statearr_41926_42056 = state_41916;
(statearr_41926_42056[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42057 = state_41916;
state_41916 = G__42057;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__ = function(state_41916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____1.call(this,state_41916);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__;
})()
;})(__42036,switch__33467__auto__,c__33555__auto___42049,G__41879_42037,G__41879_42038__$1,n__29231__auto___42035,jobs,results,process,async))
})();
var state__33557__auto__ = (function (){var statearr_41927 = f__33556__auto__.call(null);
(statearr_41927[(6)] = c__33555__auto___42049);

return statearr_41927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(__42036,c__33555__auto___42049,G__41879_42037,G__41879_42038__$1,n__29231__auto___42035,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41879_42038__$1)].join('')));

}

var G__42058 = (__42036 + (1));
__42036 = G__42058;
continue;
} else {
}
break;
}

var c__33555__auto___42059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___42059,jobs,results,process,async){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___42059,jobs,results,process,async){
return (function (state_41949){
var state_val_41950 = (state_41949[(1)]);
if((state_val_41950 === (1))){
var state_41949__$1 = state_41949;
var statearr_41951_42060 = state_41949__$1;
(statearr_41951_42060[(2)] = null);

(statearr_41951_42060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41950 === (2))){
var state_41949__$1 = state_41949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41949__$1,(4),from);
} else {
if((state_val_41950 === (3))){
var inst_41947 = (state_41949[(2)]);
var state_41949__$1 = state_41949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41949__$1,inst_41947);
} else {
if((state_val_41950 === (4))){
var inst_41930 = (state_41949[(7)]);
var inst_41930__$1 = (state_41949[(2)]);
var inst_41931 = (inst_41930__$1 == null);
var state_41949__$1 = (function (){var statearr_41952 = state_41949;
(statearr_41952[(7)] = inst_41930__$1);

return statearr_41952;
})();
if(cljs.core.truth_(inst_41931)){
var statearr_41953_42061 = state_41949__$1;
(statearr_41953_42061[(1)] = (5));

} else {
var statearr_41954_42062 = state_41949__$1;
(statearr_41954_42062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41950 === (5))){
var inst_41933 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41949__$1 = state_41949;
var statearr_41955_42063 = state_41949__$1;
(statearr_41955_42063[(2)] = inst_41933);

(statearr_41955_42063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41950 === (6))){
var inst_41930 = (state_41949[(7)]);
var inst_41935 = (state_41949[(8)]);
var inst_41935__$1 = cljs.core.async.chan.call(null,(1));
var inst_41936 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41937 = [inst_41930,inst_41935__$1];
var inst_41938 = (new cljs.core.PersistentVector(null,2,(5),inst_41936,inst_41937,null));
var state_41949__$1 = (function (){var statearr_41956 = state_41949;
(statearr_41956[(8)] = inst_41935__$1);

return statearr_41956;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41949__$1,(8),jobs,inst_41938);
} else {
if((state_val_41950 === (7))){
var inst_41945 = (state_41949[(2)]);
var state_41949__$1 = state_41949;
var statearr_41957_42064 = state_41949__$1;
(statearr_41957_42064[(2)] = inst_41945);

(statearr_41957_42064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41950 === (8))){
var inst_41935 = (state_41949[(8)]);
var inst_41940 = (state_41949[(2)]);
var state_41949__$1 = (function (){var statearr_41958 = state_41949;
(statearr_41958[(9)] = inst_41940);

return statearr_41958;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41949__$1,(9),results,inst_41935);
} else {
if((state_val_41950 === (9))){
var inst_41942 = (state_41949[(2)]);
var state_41949__$1 = (function (){var statearr_41959 = state_41949;
(statearr_41959[(10)] = inst_41942);

return statearr_41959;
})();
var statearr_41960_42065 = state_41949__$1;
(statearr_41960_42065[(2)] = null);

(statearr_41960_42065[(1)] = (2));


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
});})(c__33555__auto___42059,jobs,results,process,async))
;
return ((function (switch__33467__auto__,c__33555__auto___42059,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____0 = (function (){
var statearr_41961 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__);

(statearr_41961[(1)] = (1));

return statearr_41961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____1 = (function (state_41949){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_41949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e41962){if((e41962 instanceof Object)){
var ex__33471__auto__ = e41962;
var statearr_41963_42066 = state_41949;
(statearr_41963_42066[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42067 = state_41949;
state_41949 = G__42067;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__ = function(state_41949){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____1.call(this,state_41949);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___42059,jobs,results,process,async))
})();
var state__33557__auto__ = (function (){var statearr_41964 = f__33556__auto__.call(null);
(statearr_41964[(6)] = c__33555__auto___42059);

return statearr_41964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___42059,jobs,results,process,async))
);


var c__33555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto__,jobs,results,process,async){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto__,jobs,results,process,async){
return (function (state_42002){
var state_val_42003 = (state_42002[(1)]);
if((state_val_42003 === (7))){
var inst_41998 = (state_42002[(2)]);
var state_42002__$1 = state_42002;
var statearr_42004_42068 = state_42002__$1;
(statearr_42004_42068[(2)] = inst_41998);

(statearr_42004_42068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (20))){
var state_42002__$1 = state_42002;
var statearr_42005_42069 = state_42002__$1;
(statearr_42005_42069[(2)] = null);

(statearr_42005_42069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (1))){
var state_42002__$1 = state_42002;
var statearr_42006_42070 = state_42002__$1;
(statearr_42006_42070[(2)] = null);

(statearr_42006_42070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (4))){
var inst_41967 = (state_42002[(7)]);
var inst_41967__$1 = (state_42002[(2)]);
var inst_41968 = (inst_41967__$1 == null);
var state_42002__$1 = (function (){var statearr_42007 = state_42002;
(statearr_42007[(7)] = inst_41967__$1);

return statearr_42007;
})();
if(cljs.core.truth_(inst_41968)){
var statearr_42008_42071 = state_42002__$1;
(statearr_42008_42071[(1)] = (5));

} else {
var statearr_42009_42072 = state_42002__$1;
(statearr_42009_42072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (15))){
var inst_41980 = (state_42002[(8)]);
var state_42002__$1 = state_42002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42002__$1,(18),to,inst_41980);
} else {
if((state_val_42003 === (21))){
var inst_41993 = (state_42002[(2)]);
var state_42002__$1 = state_42002;
var statearr_42010_42073 = state_42002__$1;
(statearr_42010_42073[(2)] = inst_41993);

(statearr_42010_42073[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (13))){
var inst_41995 = (state_42002[(2)]);
var state_42002__$1 = (function (){var statearr_42011 = state_42002;
(statearr_42011[(9)] = inst_41995);

return statearr_42011;
})();
var statearr_42012_42074 = state_42002__$1;
(statearr_42012_42074[(2)] = null);

(statearr_42012_42074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (6))){
var inst_41967 = (state_42002[(7)]);
var state_42002__$1 = state_42002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42002__$1,(11),inst_41967);
} else {
if((state_val_42003 === (17))){
var inst_41988 = (state_42002[(2)]);
var state_42002__$1 = state_42002;
if(cljs.core.truth_(inst_41988)){
var statearr_42013_42075 = state_42002__$1;
(statearr_42013_42075[(1)] = (19));

} else {
var statearr_42014_42076 = state_42002__$1;
(statearr_42014_42076[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (3))){
var inst_42000 = (state_42002[(2)]);
var state_42002__$1 = state_42002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42002__$1,inst_42000);
} else {
if((state_val_42003 === (12))){
var inst_41977 = (state_42002[(10)]);
var state_42002__$1 = state_42002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42002__$1,(14),inst_41977);
} else {
if((state_val_42003 === (2))){
var state_42002__$1 = state_42002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42002__$1,(4),results);
} else {
if((state_val_42003 === (19))){
var state_42002__$1 = state_42002;
var statearr_42015_42077 = state_42002__$1;
(statearr_42015_42077[(2)] = null);

(statearr_42015_42077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (11))){
var inst_41977 = (state_42002[(2)]);
var state_42002__$1 = (function (){var statearr_42016 = state_42002;
(statearr_42016[(10)] = inst_41977);

return statearr_42016;
})();
var statearr_42017_42078 = state_42002__$1;
(statearr_42017_42078[(2)] = null);

(statearr_42017_42078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (9))){
var state_42002__$1 = state_42002;
var statearr_42018_42079 = state_42002__$1;
(statearr_42018_42079[(2)] = null);

(statearr_42018_42079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (5))){
var state_42002__$1 = state_42002;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42019_42080 = state_42002__$1;
(statearr_42019_42080[(1)] = (8));

} else {
var statearr_42020_42081 = state_42002__$1;
(statearr_42020_42081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (14))){
var inst_41980 = (state_42002[(8)]);
var inst_41982 = (state_42002[(11)]);
var inst_41980__$1 = (state_42002[(2)]);
var inst_41981 = (inst_41980__$1 == null);
var inst_41982__$1 = cljs.core.not.call(null,inst_41981);
var state_42002__$1 = (function (){var statearr_42021 = state_42002;
(statearr_42021[(8)] = inst_41980__$1);

(statearr_42021[(11)] = inst_41982__$1);

return statearr_42021;
})();
if(inst_41982__$1){
var statearr_42022_42082 = state_42002__$1;
(statearr_42022_42082[(1)] = (15));

} else {
var statearr_42023_42083 = state_42002__$1;
(statearr_42023_42083[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (16))){
var inst_41982 = (state_42002[(11)]);
var state_42002__$1 = state_42002;
var statearr_42024_42084 = state_42002__$1;
(statearr_42024_42084[(2)] = inst_41982);

(statearr_42024_42084[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (10))){
var inst_41974 = (state_42002[(2)]);
var state_42002__$1 = state_42002;
var statearr_42025_42085 = state_42002__$1;
(statearr_42025_42085[(2)] = inst_41974);

(statearr_42025_42085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (18))){
var inst_41985 = (state_42002[(2)]);
var state_42002__$1 = state_42002;
var statearr_42026_42086 = state_42002__$1;
(statearr_42026_42086[(2)] = inst_41985);

(statearr_42026_42086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42003 === (8))){
var inst_41971 = cljs.core.async.close_BANG_.call(null,to);
var state_42002__$1 = state_42002;
var statearr_42027_42087 = state_42002__$1;
(statearr_42027_42087[(2)] = inst_41971);

(statearr_42027_42087[(1)] = (10));


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
});})(c__33555__auto__,jobs,results,process,async))
;
return ((function (switch__33467__auto__,c__33555__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____0 = (function (){
var statearr_42028 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42028[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__);

(statearr_42028[(1)] = (1));

return statearr_42028;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____1 = (function (state_42002){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_42002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e42029){if((e42029 instanceof Object)){
var ex__33471__auto__ = e42029;
var statearr_42030_42088 = state_42002;
(statearr_42030_42088[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42089 = state_42002;
state_42002 = G__42089;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__ = function(state_42002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____1.call(this,state_42002);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto__,jobs,results,process,async))
})();
var state__33557__auto__ = (function (){var statearr_42031 = f__33556__auto__.call(null);
(statearr_42031[(6)] = c__33555__auto__);

return statearr_42031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto__,jobs,results,process,async))
);

return c__33555__auto__;
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
var G__42091 = arguments.length;
switch (G__42091) {
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
var G__42094 = arguments.length;
switch (G__42094) {
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
var G__42097 = arguments.length;
switch (G__42097) {
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
var c__33555__auto___42146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___42146,tc,fc){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___42146,tc,fc){
return (function (state_42123){
var state_val_42124 = (state_42123[(1)]);
if((state_val_42124 === (7))){
var inst_42119 = (state_42123[(2)]);
var state_42123__$1 = state_42123;
var statearr_42125_42147 = state_42123__$1;
(statearr_42125_42147[(2)] = inst_42119);

(statearr_42125_42147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (1))){
var state_42123__$1 = state_42123;
var statearr_42126_42148 = state_42123__$1;
(statearr_42126_42148[(2)] = null);

(statearr_42126_42148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (4))){
var inst_42100 = (state_42123[(7)]);
var inst_42100__$1 = (state_42123[(2)]);
var inst_42101 = (inst_42100__$1 == null);
var state_42123__$1 = (function (){var statearr_42127 = state_42123;
(statearr_42127[(7)] = inst_42100__$1);

return statearr_42127;
})();
if(cljs.core.truth_(inst_42101)){
var statearr_42128_42149 = state_42123__$1;
(statearr_42128_42149[(1)] = (5));

} else {
var statearr_42129_42150 = state_42123__$1;
(statearr_42129_42150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (13))){
var state_42123__$1 = state_42123;
var statearr_42130_42151 = state_42123__$1;
(statearr_42130_42151[(2)] = null);

(statearr_42130_42151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (6))){
var inst_42100 = (state_42123[(7)]);
var inst_42106 = p.call(null,inst_42100);
var state_42123__$1 = state_42123;
if(cljs.core.truth_(inst_42106)){
var statearr_42131_42152 = state_42123__$1;
(statearr_42131_42152[(1)] = (9));

} else {
var statearr_42132_42153 = state_42123__$1;
(statearr_42132_42153[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (3))){
var inst_42121 = (state_42123[(2)]);
var state_42123__$1 = state_42123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42123__$1,inst_42121);
} else {
if((state_val_42124 === (12))){
var state_42123__$1 = state_42123;
var statearr_42133_42154 = state_42123__$1;
(statearr_42133_42154[(2)] = null);

(statearr_42133_42154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (2))){
var state_42123__$1 = state_42123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42123__$1,(4),ch);
} else {
if((state_val_42124 === (11))){
var inst_42100 = (state_42123[(7)]);
var inst_42110 = (state_42123[(2)]);
var state_42123__$1 = state_42123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42123__$1,(8),inst_42110,inst_42100);
} else {
if((state_val_42124 === (9))){
var state_42123__$1 = state_42123;
var statearr_42134_42155 = state_42123__$1;
(statearr_42134_42155[(2)] = tc);

(statearr_42134_42155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (5))){
var inst_42103 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42104 = cljs.core.async.close_BANG_.call(null,fc);
var state_42123__$1 = (function (){var statearr_42135 = state_42123;
(statearr_42135[(8)] = inst_42103);

return statearr_42135;
})();
var statearr_42136_42156 = state_42123__$1;
(statearr_42136_42156[(2)] = inst_42104);

(statearr_42136_42156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (14))){
var inst_42117 = (state_42123[(2)]);
var state_42123__$1 = state_42123;
var statearr_42137_42157 = state_42123__$1;
(statearr_42137_42157[(2)] = inst_42117);

(statearr_42137_42157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (10))){
var state_42123__$1 = state_42123;
var statearr_42138_42158 = state_42123__$1;
(statearr_42138_42158[(2)] = fc);

(statearr_42138_42158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42124 === (8))){
var inst_42112 = (state_42123[(2)]);
var state_42123__$1 = state_42123;
if(cljs.core.truth_(inst_42112)){
var statearr_42139_42159 = state_42123__$1;
(statearr_42139_42159[(1)] = (12));

} else {
var statearr_42140_42160 = state_42123__$1;
(statearr_42140_42160[(1)] = (13));

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
});})(c__33555__auto___42146,tc,fc))
;
return ((function (switch__33467__auto__,c__33555__auto___42146,tc,fc){
return (function() {
var cljs$core$async$state_machine__33468__auto__ = null;
var cljs$core$async$state_machine__33468__auto____0 = (function (){
var statearr_42141 = [null,null,null,null,null,null,null,null,null];
(statearr_42141[(0)] = cljs$core$async$state_machine__33468__auto__);

(statearr_42141[(1)] = (1));

return statearr_42141;
});
var cljs$core$async$state_machine__33468__auto____1 = (function (state_42123){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_42123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e42142){if((e42142 instanceof Object)){
var ex__33471__auto__ = e42142;
var statearr_42143_42161 = state_42123;
(statearr_42143_42161[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42162 = state_42123;
state_42123 = G__42162;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$state_machine__33468__auto__ = function(state_42123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33468__auto____1.call(this,state_42123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33468__auto____0;
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33468__auto____1;
return cljs$core$async$state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___42146,tc,fc))
})();
var state__33557__auto__ = (function (){var statearr_42144 = f__33556__auto__.call(null);
(statearr_42144[(6)] = c__33555__auto___42146);

return statearr_42144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___42146,tc,fc))
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
var c__33555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto__){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto__){
return (function (state_42183){
var state_val_42184 = (state_42183[(1)]);
if((state_val_42184 === (7))){
var inst_42179 = (state_42183[(2)]);
var state_42183__$1 = state_42183;
var statearr_42185_42203 = state_42183__$1;
(statearr_42185_42203[(2)] = inst_42179);

(statearr_42185_42203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (1))){
var inst_42163 = init;
var state_42183__$1 = (function (){var statearr_42186 = state_42183;
(statearr_42186[(7)] = inst_42163);

return statearr_42186;
})();
var statearr_42187_42204 = state_42183__$1;
(statearr_42187_42204[(2)] = null);

(statearr_42187_42204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (4))){
var inst_42166 = (state_42183[(8)]);
var inst_42166__$1 = (state_42183[(2)]);
var inst_42167 = (inst_42166__$1 == null);
var state_42183__$1 = (function (){var statearr_42188 = state_42183;
(statearr_42188[(8)] = inst_42166__$1);

return statearr_42188;
})();
if(cljs.core.truth_(inst_42167)){
var statearr_42189_42205 = state_42183__$1;
(statearr_42189_42205[(1)] = (5));

} else {
var statearr_42190_42206 = state_42183__$1;
(statearr_42190_42206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (6))){
var inst_42170 = (state_42183[(9)]);
var inst_42163 = (state_42183[(7)]);
var inst_42166 = (state_42183[(8)]);
var inst_42170__$1 = f.call(null,inst_42163,inst_42166);
var inst_42171 = cljs.core.reduced_QMARK_.call(null,inst_42170__$1);
var state_42183__$1 = (function (){var statearr_42191 = state_42183;
(statearr_42191[(9)] = inst_42170__$1);

return statearr_42191;
})();
if(inst_42171){
var statearr_42192_42207 = state_42183__$1;
(statearr_42192_42207[(1)] = (8));

} else {
var statearr_42193_42208 = state_42183__$1;
(statearr_42193_42208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (3))){
var inst_42181 = (state_42183[(2)]);
var state_42183__$1 = state_42183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42183__$1,inst_42181);
} else {
if((state_val_42184 === (2))){
var state_42183__$1 = state_42183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42183__$1,(4),ch);
} else {
if((state_val_42184 === (9))){
var inst_42170 = (state_42183[(9)]);
var inst_42163 = inst_42170;
var state_42183__$1 = (function (){var statearr_42194 = state_42183;
(statearr_42194[(7)] = inst_42163);

return statearr_42194;
})();
var statearr_42195_42209 = state_42183__$1;
(statearr_42195_42209[(2)] = null);

(statearr_42195_42209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (5))){
var inst_42163 = (state_42183[(7)]);
var state_42183__$1 = state_42183;
var statearr_42196_42210 = state_42183__$1;
(statearr_42196_42210[(2)] = inst_42163);

(statearr_42196_42210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (10))){
var inst_42177 = (state_42183[(2)]);
var state_42183__$1 = state_42183;
var statearr_42197_42211 = state_42183__$1;
(statearr_42197_42211[(2)] = inst_42177);

(statearr_42197_42211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42184 === (8))){
var inst_42170 = (state_42183[(9)]);
var inst_42173 = cljs.core.deref.call(null,inst_42170);
var state_42183__$1 = state_42183;
var statearr_42198_42212 = state_42183__$1;
(statearr_42198_42212[(2)] = inst_42173);

(statearr_42198_42212[(1)] = (10));


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
});})(c__33555__auto__))
;
return ((function (switch__33467__auto__,c__33555__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33468__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33468__auto____0 = (function (){
var statearr_42199 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42199[(0)] = cljs$core$async$reduce_$_state_machine__33468__auto__);

(statearr_42199[(1)] = (1));

return statearr_42199;
});
var cljs$core$async$reduce_$_state_machine__33468__auto____1 = (function (state_42183){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_42183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e42200){if((e42200 instanceof Object)){
var ex__33471__auto__ = e42200;
var statearr_42201_42213 = state_42183;
(statearr_42201_42213[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42214 = state_42183;
state_42183 = G__42214;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33468__auto__ = function(state_42183){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33468__auto____1.call(this,state_42183);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33468__auto____0;
cljs$core$async$reduce_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33468__auto____1;
return cljs$core$async$reduce_$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto__))
})();
var state__33557__auto__ = (function (){var statearr_42202 = f__33556__auto__.call(null);
(statearr_42202[(6)] = c__33555__auto__);

return statearr_42202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto__))
);

return c__33555__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto__,f__$1){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto__,f__$1){
return (function (state_42220){
var state_val_42221 = (state_42220[(1)]);
if((state_val_42221 === (1))){
var inst_42215 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42220__$1 = state_42220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42220__$1,(2),inst_42215);
} else {
if((state_val_42221 === (2))){
var inst_42217 = (state_42220[(2)]);
var inst_42218 = f__$1.call(null,inst_42217);
var state_42220__$1 = state_42220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42220__$1,inst_42218);
} else {
return null;
}
}
});})(c__33555__auto__,f__$1))
;
return ((function (switch__33467__auto__,c__33555__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33468__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33468__auto____0 = (function (){
var statearr_42222 = [null,null,null,null,null,null,null];
(statearr_42222[(0)] = cljs$core$async$transduce_$_state_machine__33468__auto__);

(statearr_42222[(1)] = (1));

return statearr_42222;
});
var cljs$core$async$transduce_$_state_machine__33468__auto____1 = (function (state_42220){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_42220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e42223){if((e42223 instanceof Object)){
var ex__33471__auto__ = e42223;
var statearr_42224_42226 = state_42220;
(statearr_42224_42226[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42227 = state_42220;
state_42220 = G__42227;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33468__auto__ = function(state_42220){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33468__auto____1.call(this,state_42220);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33468__auto____0;
cljs$core$async$transduce_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33468__auto____1;
return cljs$core$async$transduce_$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto__,f__$1))
})();
var state__33557__auto__ = (function (){var statearr_42225 = f__33556__auto__.call(null);
(statearr_42225[(6)] = c__33555__auto__);

return statearr_42225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto__,f__$1))
);

return c__33555__auto__;
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
var G__42229 = arguments.length;
switch (G__42229) {
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
var c__33555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto__){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto__){
return (function (state_42254){
var state_val_42255 = (state_42254[(1)]);
if((state_val_42255 === (7))){
var inst_42236 = (state_42254[(2)]);
var state_42254__$1 = state_42254;
var statearr_42256_42277 = state_42254__$1;
(statearr_42256_42277[(2)] = inst_42236);

(statearr_42256_42277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42255 === (1))){
var inst_42230 = cljs.core.seq.call(null,coll);
var inst_42231 = inst_42230;
var state_42254__$1 = (function (){var statearr_42257 = state_42254;
(statearr_42257[(7)] = inst_42231);

return statearr_42257;
})();
var statearr_42258_42278 = state_42254__$1;
(statearr_42258_42278[(2)] = null);

(statearr_42258_42278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42255 === (4))){
var inst_42231 = (state_42254[(7)]);
var inst_42234 = cljs.core.first.call(null,inst_42231);
var state_42254__$1 = state_42254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42254__$1,(7),ch,inst_42234);
} else {
if((state_val_42255 === (13))){
var inst_42248 = (state_42254[(2)]);
var state_42254__$1 = state_42254;
var statearr_42259_42279 = state_42254__$1;
(statearr_42259_42279[(2)] = inst_42248);

(statearr_42259_42279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42255 === (6))){
var inst_42239 = (state_42254[(2)]);
var state_42254__$1 = state_42254;
if(cljs.core.truth_(inst_42239)){
var statearr_42260_42280 = state_42254__$1;
(statearr_42260_42280[(1)] = (8));

} else {
var statearr_42261_42281 = state_42254__$1;
(statearr_42261_42281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42255 === (3))){
var inst_42252 = (state_42254[(2)]);
var state_42254__$1 = state_42254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42254__$1,inst_42252);
} else {
if((state_val_42255 === (12))){
var state_42254__$1 = state_42254;
var statearr_42262_42282 = state_42254__$1;
(statearr_42262_42282[(2)] = null);

(statearr_42262_42282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42255 === (2))){
var inst_42231 = (state_42254[(7)]);
var state_42254__$1 = state_42254;
if(cljs.core.truth_(inst_42231)){
var statearr_42263_42283 = state_42254__$1;
(statearr_42263_42283[(1)] = (4));

} else {
var statearr_42264_42284 = state_42254__$1;
(statearr_42264_42284[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42255 === (11))){
var inst_42245 = cljs.core.async.close_BANG_.call(null,ch);
var state_42254__$1 = state_42254;
var statearr_42265_42285 = state_42254__$1;
(statearr_42265_42285[(2)] = inst_42245);

(statearr_42265_42285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42255 === (9))){
var state_42254__$1 = state_42254;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42266_42286 = state_42254__$1;
(statearr_42266_42286[(1)] = (11));

} else {
var statearr_42267_42287 = state_42254__$1;
(statearr_42267_42287[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42255 === (5))){
var inst_42231 = (state_42254[(7)]);
var state_42254__$1 = state_42254;
var statearr_42268_42288 = state_42254__$1;
(statearr_42268_42288[(2)] = inst_42231);

(statearr_42268_42288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42255 === (10))){
var inst_42250 = (state_42254[(2)]);
var state_42254__$1 = state_42254;
var statearr_42269_42289 = state_42254__$1;
(statearr_42269_42289[(2)] = inst_42250);

(statearr_42269_42289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42255 === (8))){
var inst_42231 = (state_42254[(7)]);
var inst_42241 = cljs.core.next.call(null,inst_42231);
var inst_42231__$1 = inst_42241;
var state_42254__$1 = (function (){var statearr_42270 = state_42254;
(statearr_42270[(7)] = inst_42231__$1);

return statearr_42270;
})();
var statearr_42271_42290 = state_42254__$1;
(statearr_42271_42290[(2)] = null);

(statearr_42271_42290[(1)] = (2));


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
});})(c__33555__auto__))
;
return ((function (switch__33467__auto__,c__33555__auto__){
return (function() {
var cljs$core$async$state_machine__33468__auto__ = null;
var cljs$core$async$state_machine__33468__auto____0 = (function (){
var statearr_42272 = [null,null,null,null,null,null,null,null];
(statearr_42272[(0)] = cljs$core$async$state_machine__33468__auto__);

(statearr_42272[(1)] = (1));

return statearr_42272;
});
var cljs$core$async$state_machine__33468__auto____1 = (function (state_42254){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_42254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e42273){if((e42273 instanceof Object)){
var ex__33471__auto__ = e42273;
var statearr_42274_42291 = state_42254;
(statearr_42274_42291[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42292 = state_42254;
state_42254 = G__42292;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$state_machine__33468__auto__ = function(state_42254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33468__auto____1.call(this,state_42254);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33468__auto____0;
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33468__auto____1;
return cljs$core$async$state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto__))
})();
var state__33557__auto__ = (function (){var statearr_42275 = f__33556__auto__.call(null);
(statearr_42275[(6)] = c__33555__auto__);

return statearr_42275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto__))
);

return c__33555__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async42293 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42293 = (function (ch,cs,meta42294){
this.ch = ch;
this.cs = cs;
this.meta42294 = meta42294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42295,meta42294__$1){
var self__ = this;
var _42295__$1 = this;
return (new cljs.core.async.t_cljs$core$async42293(self__.ch,self__.cs,meta42294__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42293.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42295){
var self__ = this;
var _42295__$1 = this;
return self__.meta42294;
});})(cs))
;

cljs.core.async.t_cljs$core$async42293.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42293.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42293.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42293.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42293.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42293.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42293.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42294","meta42294",278979641,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42293.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42293";

cljs.core.async.t_cljs$core$async42293.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async42293");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42293 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42293(ch__$1,cs__$1,meta42294){
return (new cljs.core.async.t_cljs$core$async42293(ch__$1,cs__$1,meta42294));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42293(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33555__auto___42515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___42515,cs,m,dchan,dctr,done){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___42515,cs,m,dchan,dctr,done){
return (function (state_42430){
var state_val_42431 = (state_42430[(1)]);
if((state_val_42431 === (7))){
var inst_42426 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42432_42516 = state_42430__$1;
(statearr_42432_42516[(2)] = inst_42426);

(statearr_42432_42516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (20))){
var inst_42329 = (state_42430[(7)]);
var inst_42341 = cljs.core.first.call(null,inst_42329);
var inst_42342 = cljs.core.nth.call(null,inst_42341,(0),null);
var inst_42343 = cljs.core.nth.call(null,inst_42341,(1),null);
var state_42430__$1 = (function (){var statearr_42433 = state_42430;
(statearr_42433[(8)] = inst_42342);

return statearr_42433;
})();
if(cljs.core.truth_(inst_42343)){
var statearr_42434_42517 = state_42430__$1;
(statearr_42434_42517[(1)] = (22));

} else {
var statearr_42435_42518 = state_42430__$1;
(statearr_42435_42518[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (27))){
var inst_42371 = (state_42430[(9)]);
var inst_42298 = (state_42430[(10)]);
var inst_42373 = (state_42430[(11)]);
var inst_42378 = (state_42430[(12)]);
var inst_42378__$1 = cljs.core._nth.call(null,inst_42371,inst_42373);
var inst_42379 = cljs.core.async.put_BANG_.call(null,inst_42378__$1,inst_42298,done);
var state_42430__$1 = (function (){var statearr_42436 = state_42430;
(statearr_42436[(12)] = inst_42378__$1);

return statearr_42436;
})();
if(cljs.core.truth_(inst_42379)){
var statearr_42437_42519 = state_42430__$1;
(statearr_42437_42519[(1)] = (30));

} else {
var statearr_42438_42520 = state_42430__$1;
(statearr_42438_42520[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (1))){
var state_42430__$1 = state_42430;
var statearr_42439_42521 = state_42430__$1;
(statearr_42439_42521[(2)] = null);

(statearr_42439_42521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (24))){
var inst_42329 = (state_42430[(7)]);
var inst_42348 = (state_42430[(2)]);
var inst_42349 = cljs.core.next.call(null,inst_42329);
var inst_42307 = inst_42349;
var inst_42308 = null;
var inst_42309 = (0);
var inst_42310 = (0);
var state_42430__$1 = (function (){var statearr_42440 = state_42430;
(statearr_42440[(13)] = inst_42308);

(statearr_42440[(14)] = inst_42348);

(statearr_42440[(15)] = inst_42307);

(statearr_42440[(16)] = inst_42309);

(statearr_42440[(17)] = inst_42310);

return statearr_42440;
})();
var statearr_42441_42522 = state_42430__$1;
(statearr_42441_42522[(2)] = null);

(statearr_42441_42522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (39))){
var state_42430__$1 = state_42430;
var statearr_42445_42523 = state_42430__$1;
(statearr_42445_42523[(2)] = null);

(statearr_42445_42523[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (4))){
var inst_42298 = (state_42430[(10)]);
var inst_42298__$1 = (state_42430[(2)]);
var inst_42299 = (inst_42298__$1 == null);
var state_42430__$1 = (function (){var statearr_42446 = state_42430;
(statearr_42446[(10)] = inst_42298__$1);

return statearr_42446;
})();
if(cljs.core.truth_(inst_42299)){
var statearr_42447_42524 = state_42430__$1;
(statearr_42447_42524[(1)] = (5));

} else {
var statearr_42448_42525 = state_42430__$1;
(statearr_42448_42525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (15))){
var inst_42308 = (state_42430[(13)]);
var inst_42307 = (state_42430[(15)]);
var inst_42309 = (state_42430[(16)]);
var inst_42310 = (state_42430[(17)]);
var inst_42325 = (state_42430[(2)]);
var inst_42326 = (inst_42310 + (1));
var tmp42442 = inst_42308;
var tmp42443 = inst_42307;
var tmp42444 = inst_42309;
var inst_42307__$1 = tmp42443;
var inst_42308__$1 = tmp42442;
var inst_42309__$1 = tmp42444;
var inst_42310__$1 = inst_42326;
var state_42430__$1 = (function (){var statearr_42449 = state_42430;
(statearr_42449[(13)] = inst_42308__$1);

(statearr_42449[(15)] = inst_42307__$1);

(statearr_42449[(16)] = inst_42309__$1);

(statearr_42449[(17)] = inst_42310__$1);

(statearr_42449[(18)] = inst_42325);

return statearr_42449;
})();
var statearr_42450_42526 = state_42430__$1;
(statearr_42450_42526[(2)] = null);

(statearr_42450_42526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (21))){
var inst_42352 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42454_42527 = state_42430__$1;
(statearr_42454_42527[(2)] = inst_42352);

(statearr_42454_42527[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (31))){
var inst_42378 = (state_42430[(12)]);
var inst_42382 = done.call(null,null);
var inst_42383 = cljs.core.async.untap_STAR_.call(null,m,inst_42378);
var state_42430__$1 = (function (){var statearr_42455 = state_42430;
(statearr_42455[(19)] = inst_42382);

return statearr_42455;
})();
var statearr_42456_42528 = state_42430__$1;
(statearr_42456_42528[(2)] = inst_42383);

(statearr_42456_42528[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (32))){
var inst_42371 = (state_42430[(9)]);
var inst_42372 = (state_42430[(20)]);
var inst_42370 = (state_42430[(21)]);
var inst_42373 = (state_42430[(11)]);
var inst_42385 = (state_42430[(2)]);
var inst_42386 = (inst_42373 + (1));
var tmp42451 = inst_42371;
var tmp42452 = inst_42372;
var tmp42453 = inst_42370;
var inst_42370__$1 = tmp42453;
var inst_42371__$1 = tmp42451;
var inst_42372__$1 = tmp42452;
var inst_42373__$1 = inst_42386;
var state_42430__$1 = (function (){var statearr_42457 = state_42430;
(statearr_42457[(22)] = inst_42385);

(statearr_42457[(9)] = inst_42371__$1);

(statearr_42457[(20)] = inst_42372__$1);

(statearr_42457[(21)] = inst_42370__$1);

(statearr_42457[(11)] = inst_42373__$1);

return statearr_42457;
})();
var statearr_42458_42529 = state_42430__$1;
(statearr_42458_42529[(2)] = null);

(statearr_42458_42529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (40))){
var inst_42398 = (state_42430[(23)]);
var inst_42402 = done.call(null,null);
var inst_42403 = cljs.core.async.untap_STAR_.call(null,m,inst_42398);
var state_42430__$1 = (function (){var statearr_42459 = state_42430;
(statearr_42459[(24)] = inst_42402);

return statearr_42459;
})();
var statearr_42460_42530 = state_42430__$1;
(statearr_42460_42530[(2)] = inst_42403);

(statearr_42460_42530[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (33))){
var inst_42389 = (state_42430[(25)]);
var inst_42391 = cljs.core.chunked_seq_QMARK_.call(null,inst_42389);
var state_42430__$1 = state_42430;
if(inst_42391){
var statearr_42461_42531 = state_42430__$1;
(statearr_42461_42531[(1)] = (36));

} else {
var statearr_42462_42532 = state_42430__$1;
(statearr_42462_42532[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (13))){
var inst_42319 = (state_42430[(26)]);
var inst_42322 = cljs.core.async.close_BANG_.call(null,inst_42319);
var state_42430__$1 = state_42430;
var statearr_42463_42533 = state_42430__$1;
(statearr_42463_42533[(2)] = inst_42322);

(statearr_42463_42533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (22))){
var inst_42342 = (state_42430[(8)]);
var inst_42345 = cljs.core.async.close_BANG_.call(null,inst_42342);
var state_42430__$1 = state_42430;
var statearr_42464_42534 = state_42430__$1;
(statearr_42464_42534[(2)] = inst_42345);

(statearr_42464_42534[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (36))){
var inst_42389 = (state_42430[(25)]);
var inst_42393 = cljs.core.chunk_first.call(null,inst_42389);
var inst_42394 = cljs.core.chunk_rest.call(null,inst_42389);
var inst_42395 = cljs.core.count.call(null,inst_42393);
var inst_42370 = inst_42394;
var inst_42371 = inst_42393;
var inst_42372 = inst_42395;
var inst_42373 = (0);
var state_42430__$1 = (function (){var statearr_42465 = state_42430;
(statearr_42465[(9)] = inst_42371);

(statearr_42465[(20)] = inst_42372);

(statearr_42465[(21)] = inst_42370);

(statearr_42465[(11)] = inst_42373);

return statearr_42465;
})();
var statearr_42466_42535 = state_42430__$1;
(statearr_42466_42535[(2)] = null);

(statearr_42466_42535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (41))){
var inst_42389 = (state_42430[(25)]);
var inst_42405 = (state_42430[(2)]);
var inst_42406 = cljs.core.next.call(null,inst_42389);
var inst_42370 = inst_42406;
var inst_42371 = null;
var inst_42372 = (0);
var inst_42373 = (0);
var state_42430__$1 = (function (){var statearr_42467 = state_42430;
(statearr_42467[(9)] = inst_42371);

(statearr_42467[(27)] = inst_42405);

(statearr_42467[(20)] = inst_42372);

(statearr_42467[(21)] = inst_42370);

(statearr_42467[(11)] = inst_42373);

return statearr_42467;
})();
var statearr_42468_42536 = state_42430__$1;
(statearr_42468_42536[(2)] = null);

(statearr_42468_42536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (43))){
var state_42430__$1 = state_42430;
var statearr_42469_42537 = state_42430__$1;
(statearr_42469_42537[(2)] = null);

(statearr_42469_42537[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (29))){
var inst_42414 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42470_42538 = state_42430__$1;
(statearr_42470_42538[(2)] = inst_42414);

(statearr_42470_42538[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (44))){
var inst_42423 = (state_42430[(2)]);
var state_42430__$1 = (function (){var statearr_42471 = state_42430;
(statearr_42471[(28)] = inst_42423);

return statearr_42471;
})();
var statearr_42472_42539 = state_42430__$1;
(statearr_42472_42539[(2)] = null);

(statearr_42472_42539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (6))){
var inst_42362 = (state_42430[(29)]);
var inst_42361 = cljs.core.deref.call(null,cs);
var inst_42362__$1 = cljs.core.keys.call(null,inst_42361);
var inst_42363 = cljs.core.count.call(null,inst_42362__$1);
var inst_42364 = cljs.core.reset_BANG_.call(null,dctr,inst_42363);
var inst_42369 = cljs.core.seq.call(null,inst_42362__$1);
var inst_42370 = inst_42369;
var inst_42371 = null;
var inst_42372 = (0);
var inst_42373 = (0);
var state_42430__$1 = (function (){var statearr_42473 = state_42430;
(statearr_42473[(30)] = inst_42364);

(statearr_42473[(9)] = inst_42371);

(statearr_42473[(20)] = inst_42372);

(statearr_42473[(21)] = inst_42370);

(statearr_42473[(11)] = inst_42373);

(statearr_42473[(29)] = inst_42362__$1);

return statearr_42473;
})();
var statearr_42474_42540 = state_42430__$1;
(statearr_42474_42540[(2)] = null);

(statearr_42474_42540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (28))){
var inst_42389 = (state_42430[(25)]);
var inst_42370 = (state_42430[(21)]);
var inst_42389__$1 = cljs.core.seq.call(null,inst_42370);
var state_42430__$1 = (function (){var statearr_42475 = state_42430;
(statearr_42475[(25)] = inst_42389__$1);

return statearr_42475;
})();
if(inst_42389__$1){
var statearr_42476_42541 = state_42430__$1;
(statearr_42476_42541[(1)] = (33));

} else {
var statearr_42477_42542 = state_42430__$1;
(statearr_42477_42542[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (25))){
var inst_42372 = (state_42430[(20)]);
var inst_42373 = (state_42430[(11)]);
var inst_42375 = (inst_42373 < inst_42372);
var inst_42376 = inst_42375;
var state_42430__$1 = state_42430;
if(cljs.core.truth_(inst_42376)){
var statearr_42478_42543 = state_42430__$1;
(statearr_42478_42543[(1)] = (27));

} else {
var statearr_42479_42544 = state_42430__$1;
(statearr_42479_42544[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (34))){
var state_42430__$1 = state_42430;
var statearr_42480_42545 = state_42430__$1;
(statearr_42480_42545[(2)] = null);

(statearr_42480_42545[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (17))){
var state_42430__$1 = state_42430;
var statearr_42481_42546 = state_42430__$1;
(statearr_42481_42546[(2)] = null);

(statearr_42481_42546[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (3))){
var inst_42428 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42430__$1,inst_42428);
} else {
if((state_val_42431 === (12))){
var inst_42357 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42482_42547 = state_42430__$1;
(statearr_42482_42547[(2)] = inst_42357);

(statearr_42482_42547[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (2))){
var state_42430__$1 = state_42430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42430__$1,(4),ch);
} else {
if((state_val_42431 === (23))){
var state_42430__$1 = state_42430;
var statearr_42483_42548 = state_42430__$1;
(statearr_42483_42548[(2)] = null);

(statearr_42483_42548[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (35))){
var inst_42412 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42484_42549 = state_42430__$1;
(statearr_42484_42549[(2)] = inst_42412);

(statearr_42484_42549[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (19))){
var inst_42329 = (state_42430[(7)]);
var inst_42333 = cljs.core.chunk_first.call(null,inst_42329);
var inst_42334 = cljs.core.chunk_rest.call(null,inst_42329);
var inst_42335 = cljs.core.count.call(null,inst_42333);
var inst_42307 = inst_42334;
var inst_42308 = inst_42333;
var inst_42309 = inst_42335;
var inst_42310 = (0);
var state_42430__$1 = (function (){var statearr_42485 = state_42430;
(statearr_42485[(13)] = inst_42308);

(statearr_42485[(15)] = inst_42307);

(statearr_42485[(16)] = inst_42309);

(statearr_42485[(17)] = inst_42310);

return statearr_42485;
})();
var statearr_42486_42550 = state_42430__$1;
(statearr_42486_42550[(2)] = null);

(statearr_42486_42550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (11))){
var inst_42307 = (state_42430[(15)]);
var inst_42329 = (state_42430[(7)]);
var inst_42329__$1 = cljs.core.seq.call(null,inst_42307);
var state_42430__$1 = (function (){var statearr_42487 = state_42430;
(statearr_42487[(7)] = inst_42329__$1);

return statearr_42487;
})();
if(inst_42329__$1){
var statearr_42488_42551 = state_42430__$1;
(statearr_42488_42551[(1)] = (16));

} else {
var statearr_42489_42552 = state_42430__$1;
(statearr_42489_42552[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (9))){
var inst_42359 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42490_42553 = state_42430__$1;
(statearr_42490_42553[(2)] = inst_42359);

(statearr_42490_42553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (5))){
var inst_42305 = cljs.core.deref.call(null,cs);
var inst_42306 = cljs.core.seq.call(null,inst_42305);
var inst_42307 = inst_42306;
var inst_42308 = null;
var inst_42309 = (0);
var inst_42310 = (0);
var state_42430__$1 = (function (){var statearr_42491 = state_42430;
(statearr_42491[(13)] = inst_42308);

(statearr_42491[(15)] = inst_42307);

(statearr_42491[(16)] = inst_42309);

(statearr_42491[(17)] = inst_42310);

return statearr_42491;
})();
var statearr_42492_42554 = state_42430__$1;
(statearr_42492_42554[(2)] = null);

(statearr_42492_42554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (14))){
var state_42430__$1 = state_42430;
var statearr_42493_42555 = state_42430__$1;
(statearr_42493_42555[(2)] = null);

(statearr_42493_42555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (45))){
var inst_42420 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42494_42556 = state_42430__$1;
(statearr_42494_42556[(2)] = inst_42420);

(statearr_42494_42556[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (26))){
var inst_42362 = (state_42430[(29)]);
var inst_42416 = (state_42430[(2)]);
var inst_42417 = cljs.core.seq.call(null,inst_42362);
var state_42430__$1 = (function (){var statearr_42495 = state_42430;
(statearr_42495[(31)] = inst_42416);

return statearr_42495;
})();
if(inst_42417){
var statearr_42496_42557 = state_42430__$1;
(statearr_42496_42557[(1)] = (42));

} else {
var statearr_42497_42558 = state_42430__$1;
(statearr_42497_42558[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (16))){
var inst_42329 = (state_42430[(7)]);
var inst_42331 = cljs.core.chunked_seq_QMARK_.call(null,inst_42329);
var state_42430__$1 = state_42430;
if(inst_42331){
var statearr_42498_42559 = state_42430__$1;
(statearr_42498_42559[(1)] = (19));

} else {
var statearr_42499_42560 = state_42430__$1;
(statearr_42499_42560[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (38))){
var inst_42409 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42500_42561 = state_42430__$1;
(statearr_42500_42561[(2)] = inst_42409);

(statearr_42500_42561[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (30))){
var state_42430__$1 = state_42430;
var statearr_42501_42562 = state_42430__$1;
(statearr_42501_42562[(2)] = null);

(statearr_42501_42562[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (10))){
var inst_42308 = (state_42430[(13)]);
var inst_42310 = (state_42430[(17)]);
var inst_42318 = cljs.core._nth.call(null,inst_42308,inst_42310);
var inst_42319 = cljs.core.nth.call(null,inst_42318,(0),null);
var inst_42320 = cljs.core.nth.call(null,inst_42318,(1),null);
var state_42430__$1 = (function (){var statearr_42502 = state_42430;
(statearr_42502[(26)] = inst_42319);

return statearr_42502;
})();
if(cljs.core.truth_(inst_42320)){
var statearr_42503_42563 = state_42430__$1;
(statearr_42503_42563[(1)] = (13));

} else {
var statearr_42504_42564 = state_42430__$1;
(statearr_42504_42564[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (18))){
var inst_42355 = (state_42430[(2)]);
var state_42430__$1 = state_42430;
var statearr_42505_42565 = state_42430__$1;
(statearr_42505_42565[(2)] = inst_42355);

(statearr_42505_42565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (42))){
var state_42430__$1 = state_42430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42430__$1,(45),dchan);
} else {
if((state_val_42431 === (37))){
var inst_42298 = (state_42430[(10)]);
var inst_42389 = (state_42430[(25)]);
var inst_42398 = (state_42430[(23)]);
var inst_42398__$1 = cljs.core.first.call(null,inst_42389);
var inst_42399 = cljs.core.async.put_BANG_.call(null,inst_42398__$1,inst_42298,done);
var state_42430__$1 = (function (){var statearr_42506 = state_42430;
(statearr_42506[(23)] = inst_42398__$1);

return statearr_42506;
})();
if(cljs.core.truth_(inst_42399)){
var statearr_42507_42566 = state_42430__$1;
(statearr_42507_42566[(1)] = (39));

} else {
var statearr_42508_42567 = state_42430__$1;
(statearr_42508_42567[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42431 === (8))){
var inst_42309 = (state_42430[(16)]);
var inst_42310 = (state_42430[(17)]);
var inst_42312 = (inst_42310 < inst_42309);
var inst_42313 = inst_42312;
var state_42430__$1 = state_42430;
if(cljs.core.truth_(inst_42313)){
var statearr_42509_42568 = state_42430__$1;
(statearr_42509_42568[(1)] = (10));

} else {
var statearr_42510_42569 = state_42430__$1;
(statearr_42510_42569[(1)] = (11));

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
});})(c__33555__auto___42515,cs,m,dchan,dctr,done))
;
return ((function (switch__33467__auto__,c__33555__auto___42515,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33468__auto__ = null;
var cljs$core$async$mult_$_state_machine__33468__auto____0 = (function (){
var statearr_42511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42511[(0)] = cljs$core$async$mult_$_state_machine__33468__auto__);

(statearr_42511[(1)] = (1));

return statearr_42511;
});
var cljs$core$async$mult_$_state_machine__33468__auto____1 = (function (state_42430){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_42430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e42512){if((e42512 instanceof Object)){
var ex__33471__auto__ = e42512;
var statearr_42513_42570 = state_42430;
(statearr_42513_42570[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42571 = state_42430;
state_42430 = G__42571;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33468__auto__ = function(state_42430){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33468__auto____1.call(this,state_42430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33468__auto____0;
cljs$core$async$mult_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33468__auto____1;
return cljs$core$async$mult_$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___42515,cs,m,dchan,dctr,done))
})();
var state__33557__auto__ = (function (){var statearr_42514 = f__33556__auto__.call(null);
(statearr_42514[(6)] = c__33555__auto___42515);

return statearr_42514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___42515,cs,m,dchan,dctr,done))
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
var G__42573 = arguments.length;
switch (G__42573) {
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
var len__29455__auto___42585 = arguments.length;
var i__29456__auto___42586 = (0);
while(true){
if((i__29456__auto___42586 < len__29455__auto___42585)){
args__29462__auto__.push((arguments[i__29456__auto___42586]));

var G__42587 = (i__29456__auto___42586 + (1));
i__29456__auto___42586 = G__42587;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((3) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29463__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42579){
var map__42580 = p__42579;
var map__42580__$1 = ((((!((map__42580 == null)))?((((map__42580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42580):map__42580);
var opts = map__42580__$1;
var statearr_42582_42588 = state;
(statearr_42582_42588[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__42580,map__42580__$1,opts){
return (function (val){
var statearr_42583_42589 = state;
(statearr_42583_42589[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42580,map__42580__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_42584_42590 = state;
(statearr_42584_42590[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42575){
var G__42576 = cljs.core.first.call(null,seq42575);
var seq42575__$1 = cljs.core.next.call(null,seq42575);
var G__42577 = cljs.core.first.call(null,seq42575__$1);
var seq42575__$2 = cljs.core.next.call(null,seq42575__$1);
var G__42578 = cljs.core.first.call(null,seq42575__$2);
var seq42575__$3 = cljs.core.next.call(null,seq42575__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42576,G__42577,G__42578,seq42575__$3);
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
if(typeof cljs.core.async.t_cljs$core$async42591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42591 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta42592){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta42592 = meta42592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42593,meta42592__$1){
var self__ = this;
var _42593__$1 = this;
return (new cljs.core.async.t_cljs$core$async42591(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta42592__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42593){
var self__ = this;
var _42593__$1 = this;
return self__.meta42592;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42591.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async42591.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta42592","meta42592",1861830138,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42591";

cljs.core.async.t_cljs$core$async42591.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async42591");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42591 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42591(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42592){
return (new cljs.core.async.t_cljs$core$async42591(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42592));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42591(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33555__auto___42755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___42755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___42755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42695){
var state_val_42696 = (state_42695[(1)]);
if((state_val_42696 === (7))){
var inst_42610 = (state_42695[(2)]);
var state_42695__$1 = state_42695;
var statearr_42697_42756 = state_42695__$1;
(statearr_42697_42756[(2)] = inst_42610);

(statearr_42697_42756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (20))){
var inst_42622 = (state_42695[(7)]);
var state_42695__$1 = state_42695;
var statearr_42698_42757 = state_42695__$1;
(statearr_42698_42757[(2)] = inst_42622);

(statearr_42698_42757[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (27))){
var state_42695__$1 = state_42695;
var statearr_42699_42758 = state_42695__$1;
(statearr_42699_42758[(2)] = null);

(statearr_42699_42758[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (1))){
var inst_42597 = (state_42695[(8)]);
var inst_42597__$1 = calc_state.call(null);
var inst_42599 = (inst_42597__$1 == null);
var inst_42600 = cljs.core.not.call(null,inst_42599);
var state_42695__$1 = (function (){var statearr_42700 = state_42695;
(statearr_42700[(8)] = inst_42597__$1);

return statearr_42700;
})();
if(inst_42600){
var statearr_42701_42759 = state_42695__$1;
(statearr_42701_42759[(1)] = (2));

} else {
var statearr_42702_42760 = state_42695__$1;
(statearr_42702_42760[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (24))){
var inst_42646 = (state_42695[(9)]);
var inst_42669 = (state_42695[(10)]);
var inst_42655 = (state_42695[(11)]);
var inst_42669__$1 = inst_42646.call(null,inst_42655);
var state_42695__$1 = (function (){var statearr_42703 = state_42695;
(statearr_42703[(10)] = inst_42669__$1);

return statearr_42703;
})();
if(cljs.core.truth_(inst_42669__$1)){
var statearr_42704_42761 = state_42695__$1;
(statearr_42704_42761[(1)] = (29));

} else {
var statearr_42705_42762 = state_42695__$1;
(statearr_42705_42762[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (4))){
var inst_42613 = (state_42695[(2)]);
var state_42695__$1 = state_42695;
if(cljs.core.truth_(inst_42613)){
var statearr_42706_42763 = state_42695__$1;
(statearr_42706_42763[(1)] = (8));

} else {
var statearr_42707_42764 = state_42695__$1;
(statearr_42707_42764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (15))){
var inst_42640 = (state_42695[(2)]);
var state_42695__$1 = state_42695;
if(cljs.core.truth_(inst_42640)){
var statearr_42708_42765 = state_42695__$1;
(statearr_42708_42765[(1)] = (19));

} else {
var statearr_42709_42766 = state_42695__$1;
(statearr_42709_42766[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (21))){
var inst_42645 = (state_42695[(12)]);
var inst_42645__$1 = (state_42695[(2)]);
var inst_42646 = cljs.core.get.call(null,inst_42645__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42647 = cljs.core.get.call(null,inst_42645__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42648 = cljs.core.get.call(null,inst_42645__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42695__$1 = (function (){var statearr_42710 = state_42695;
(statearr_42710[(12)] = inst_42645__$1);

(statearr_42710[(9)] = inst_42646);

(statearr_42710[(13)] = inst_42647);

return statearr_42710;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42695__$1,(22),inst_42648);
} else {
if((state_val_42696 === (31))){
var inst_42677 = (state_42695[(2)]);
var state_42695__$1 = state_42695;
if(cljs.core.truth_(inst_42677)){
var statearr_42711_42767 = state_42695__$1;
(statearr_42711_42767[(1)] = (32));

} else {
var statearr_42712_42768 = state_42695__$1;
(statearr_42712_42768[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (32))){
var inst_42654 = (state_42695[(14)]);
var state_42695__$1 = state_42695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42695__$1,(35),out,inst_42654);
} else {
if((state_val_42696 === (33))){
var inst_42645 = (state_42695[(12)]);
var inst_42622 = inst_42645;
var state_42695__$1 = (function (){var statearr_42713 = state_42695;
(statearr_42713[(7)] = inst_42622);

return statearr_42713;
})();
var statearr_42714_42769 = state_42695__$1;
(statearr_42714_42769[(2)] = null);

(statearr_42714_42769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (13))){
var inst_42622 = (state_42695[(7)]);
var inst_42629 = inst_42622.cljs$lang$protocol_mask$partition0$;
var inst_42630 = (inst_42629 & (64));
var inst_42631 = inst_42622.cljs$core$ISeq$;
var inst_42632 = (cljs.core.PROTOCOL_SENTINEL === inst_42631);
var inst_42633 = (inst_42630) || (inst_42632);
var state_42695__$1 = state_42695;
if(cljs.core.truth_(inst_42633)){
var statearr_42715_42770 = state_42695__$1;
(statearr_42715_42770[(1)] = (16));

} else {
var statearr_42716_42771 = state_42695__$1;
(statearr_42716_42771[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (22))){
var inst_42654 = (state_42695[(14)]);
var inst_42655 = (state_42695[(11)]);
var inst_42653 = (state_42695[(2)]);
var inst_42654__$1 = cljs.core.nth.call(null,inst_42653,(0),null);
var inst_42655__$1 = cljs.core.nth.call(null,inst_42653,(1),null);
var inst_42656 = (inst_42654__$1 == null);
var inst_42657 = cljs.core._EQ_.call(null,inst_42655__$1,change);
var inst_42658 = (inst_42656) || (inst_42657);
var state_42695__$1 = (function (){var statearr_42717 = state_42695;
(statearr_42717[(14)] = inst_42654__$1);

(statearr_42717[(11)] = inst_42655__$1);

return statearr_42717;
})();
if(cljs.core.truth_(inst_42658)){
var statearr_42718_42772 = state_42695__$1;
(statearr_42718_42772[(1)] = (23));

} else {
var statearr_42719_42773 = state_42695__$1;
(statearr_42719_42773[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (36))){
var inst_42645 = (state_42695[(12)]);
var inst_42622 = inst_42645;
var state_42695__$1 = (function (){var statearr_42720 = state_42695;
(statearr_42720[(7)] = inst_42622);

return statearr_42720;
})();
var statearr_42721_42774 = state_42695__$1;
(statearr_42721_42774[(2)] = null);

(statearr_42721_42774[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (29))){
var inst_42669 = (state_42695[(10)]);
var state_42695__$1 = state_42695;
var statearr_42722_42775 = state_42695__$1;
(statearr_42722_42775[(2)] = inst_42669);

(statearr_42722_42775[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (6))){
var state_42695__$1 = state_42695;
var statearr_42723_42776 = state_42695__$1;
(statearr_42723_42776[(2)] = false);

(statearr_42723_42776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (28))){
var inst_42665 = (state_42695[(2)]);
var inst_42666 = calc_state.call(null);
var inst_42622 = inst_42666;
var state_42695__$1 = (function (){var statearr_42724 = state_42695;
(statearr_42724[(7)] = inst_42622);

(statearr_42724[(15)] = inst_42665);

return statearr_42724;
})();
var statearr_42725_42777 = state_42695__$1;
(statearr_42725_42777[(2)] = null);

(statearr_42725_42777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (25))){
var inst_42691 = (state_42695[(2)]);
var state_42695__$1 = state_42695;
var statearr_42726_42778 = state_42695__$1;
(statearr_42726_42778[(2)] = inst_42691);

(statearr_42726_42778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (34))){
var inst_42689 = (state_42695[(2)]);
var state_42695__$1 = state_42695;
var statearr_42727_42779 = state_42695__$1;
(statearr_42727_42779[(2)] = inst_42689);

(statearr_42727_42779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (17))){
var state_42695__$1 = state_42695;
var statearr_42728_42780 = state_42695__$1;
(statearr_42728_42780[(2)] = false);

(statearr_42728_42780[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (3))){
var state_42695__$1 = state_42695;
var statearr_42729_42781 = state_42695__$1;
(statearr_42729_42781[(2)] = false);

(statearr_42729_42781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (12))){
var inst_42693 = (state_42695[(2)]);
var state_42695__$1 = state_42695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42695__$1,inst_42693);
} else {
if((state_val_42696 === (2))){
var inst_42597 = (state_42695[(8)]);
var inst_42602 = inst_42597.cljs$lang$protocol_mask$partition0$;
var inst_42603 = (inst_42602 & (64));
var inst_42604 = inst_42597.cljs$core$ISeq$;
var inst_42605 = (cljs.core.PROTOCOL_SENTINEL === inst_42604);
var inst_42606 = (inst_42603) || (inst_42605);
var state_42695__$1 = state_42695;
if(cljs.core.truth_(inst_42606)){
var statearr_42730_42782 = state_42695__$1;
(statearr_42730_42782[(1)] = (5));

} else {
var statearr_42731_42783 = state_42695__$1;
(statearr_42731_42783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (23))){
var inst_42654 = (state_42695[(14)]);
var inst_42660 = (inst_42654 == null);
var state_42695__$1 = state_42695;
if(cljs.core.truth_(inst_42660)){
var statearr_42732_42784 = state_42695__$1;
(statearr_42732_42784[(1)] = (26));

} else {
var statearr_42733_42785 = state_42695__$1;
(statearr_42733_42785[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (35))){
var inst_42680 = (state_42695[(2)]);
var state_42695__$1 = state_42695;
if(cljs.core.truth_(inst_42680)){
var statearr_42734_42786 = state_42695__$1;
(statearr_42734_42786[(1)] = (36));

} else {
var statearr_42735_42787 = state_42695__$1;
(statearr_42735_42787[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (19))){
var inst_42622 = (state_42695[(7)]);
var inst_42642 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42622);
var state_42695__$1 = state_42695;
var statearr_42736_42788 = state_42695__$1;
(statearr_42736_42788[(2)] = inst_42642);

(statearr_42736_42788[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (11))){
var inst_42622 = (state_42695[(7)]);
var inst_42626 = (inst_42622 == null);
var inst_42627 = cljs.core.not.call(null,inst_42626);
var state_42695__$1 = state_42695;
if(inst_42627){
var statearr_42737_42789 = state_42695__$1;
(statearr_42737_42789[(1)] = (13));

} else {
var statearr_42738_42790 = state_42695__$1;
(statearr_42738_42790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (9))){
var inst_42597 = (state_42695[(8)]);
var state_42695__$1 = state_42695;
var statearr_42739_42791 = state_42695__$1;
(statearr_42739_42791[(2)] = inst_42597);

(statearr_42739_42791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (5))){
var state_42695__$1 = state_42695;
var statearr_42740_42792 = state_42695__$1;
(statearr_42740_42792[(2)] = true);

(statearr_42740_42792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (14))){
var state_42695__$1 = state_42695;
var statearr_42741_42793 = state_42695__$1;
(statearr_42741_42793[(2)] = false);

(statearr_42741_42793[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (26))){
var inst_42655 = (state_42695[(11)]);
var inst_42662 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42655);
var state_42695__$1 = state_42695;
var statearr_42742_42794 = state_42695__$1;
(statearr_42742_42794[(2)] = inst_42662);

(statearr_42742_42794[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (16))){
var state_42695__$1 = state_42695;
var statearr_42743_42795 = state_42695__$1;
(statearr_42743_42795[(2)] = true);

(statearr_42743_42795[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (38))){
var inst_42685 = (state_42695[(2)]);
var state_42695__$1 = state_42695;
var statearr_42744_42796 = state_42695__$1;
(statearr_42744_42796[(2)] = inst_42685);

(statearr_42744_42796[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (30))){
var inst_42646 = (state_42695[(9)]);
var inst_42655 = (state_42695[(11)]);
var inst_42647 = (state_42695[(13)]);
var inst_42672 = cljs.core.empty_QMARK_.call(null,inst_42646);
var inst_42673 = inst_42647.call(null,inst_42655);
var inst_42674 = cljs.core.not.call(null,inst_42673);
var inst_42675 = (inst_42672) && (inst_42674);
var state_42695__$1 = state_42695;
var statearr_42745_42797 = state_42695__$1;
(statearr_42745_42797[(2)] = inst_42675);

(statearr_42745_42797[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (10))){
var inst_42597 = (state_42695[(8)]);
var inst_42618 = (state_42695[(2)]);
var inst_42619 = cljs.core.get.call(null,inst_42618,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42620 = cljs.core.get.call(null,inst_42618,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42621 = cljs.core.get.call(null,inst_42618,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42622 = inst_42597;
var state_42695__$1 = (function (){var statearr_42746 = state_42695;
(statearr_42746[(16)] = inst_42621);

(statearr_42746[(7)] = inst_42622);

(statearr_42746[(17)] = inst_42620);

(statearr_42746[(18)] = inst_42619);

return statearr_42746;
})();
var statearr_42747_42798 = state_42695__$1;
(statearr_42747_42798[(2)] = null);

(statearr_42747_42798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (18))){
var inst_42637 = (state_42695[(2)]);
var state_42695__$1 = state_42695;
var statearr_42748_42799 = state_42695__$1;
(statearr_42748_42799[(2)] = inst_42637);

(statearr_42748_42799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (37))){
var state_42695__$1 = state_42695;
var statearr_42749_42800 = state_42695__$1;
(statearr_42749_42800[(2)] = null);

(statearr_42749_42800[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (8))){
var inst_42597 = (state_42695[(8)]);
var inst_42615 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42597);
var state_42695__$1 = state_42695;
var statearr_42750_42801 = state_42695__$1;
(statearr_42750_42801[(2)] = inst_42615);

(statearr_42750_42801[(1)] = (10));


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
});})(c__33555__auto___42755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33467__auto__,c__33555__auto___42755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33468__auto__ = null;
var cljs$core$async$mix_$_state_machine__33468__auto____0 = (function (){
var statearr_42751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42751[(0)] = cljs$core$async$mix_$_state_machine__33468__auto__);

(statearr_42751[(1)] = (1));

return statearr_42751;
});
var cljs$core$async$mix_$_state_machine__33468__auto____1 = (function (state_42695){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_42695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e42752){if((e42752 instanceof Object)){
var ex__33471__auto__ = e42752;
var statearr_42753_42802 = state_42695;
(statearr_42753_42802[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42803 = state_42695;
state_42695 = G__42803;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33468__auto__ = function(state_42695){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33468__auto____1.call(this,state_42695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33468__auto____0;
cljs$core$async$mix_$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33468__auto____1;
return cljs$core$async$mix_$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___42755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33557__auto__ = (function (){var statearr_42754 = f__33556__auto__.call(null);
(statearr_42754[(6)] = c__33555__auto___42755);

return statearr_42754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___42755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__42805 = arguments.length;
switch (G__42805) {
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
var G__42809 = arguments.length;
switch (G__42809) {
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
return (function (p1__42807_SHARP_){
if(cljs.core.truth_(p1__42807_SHARP_.call(null,topic))){
return p1__42807_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42807_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28286__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42810 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42810 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42811){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42811 = meta42811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42812,meta42811__$1){
var self__ = this;
var _42812__$1 = this;
return (new cljs.core.async.t_cljs$core$async42810(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42811__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42810.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42812){
var self__ = this;
var _42812__$1 = this;
return self__.meta42811;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42810.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42810.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42810.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42810.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42810.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async42810.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42810.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42810.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42811","meta42811",-1894749182,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42810.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42810";

cljs.core.async.t_cljs$core$async42810.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async42810");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42810 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42810(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42811){
return (new cljs.core.async.t_cljs$core$async42810(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42811));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42810(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33555__auto___42930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___42930,mults,ensure_mult,p){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___42930,mults,ensure_mult,p){
return (function (state_42884){
var state_val_42885 = (state_42884[(1)]);
if((state_val_42885 === (7))){
var inst_42880 = (state_42884[(2)]);
var state_42884__$1 = state_42884;
var statearr_42886_42931 = state_42884__$1;
(statearr_42886_42931[(2)] = inst_42880);

(statearr_42886_42931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (20))){
var state_42884__$1 = state_42884;
var statearr_42887_42932 = state_42884__$1;
(statearr_42887_42932[(2)] = null);

(statearr_42887_42932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (1))){
var state_42884__$1 = state_42884;
var statearr_42888_42933 = state_42884__$1;
(statearr_42888_42933[(2)] = null);

(statearr_42888_42933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (24))){
var inst_42863 = (state_42884[(7)]);
var inst_42872 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42863);
var state_42884__$1 = state_42884;
var statearr_42889_42934 = state_42884__$1;
(statearr_42889_42934[(2)] = inst_42872);

(statearr_42889_42934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (4))){
var inst_42815 = (state_42884[(8)]);
var inst_42815__$1 = (state_42884[(2)]);
var inst_42816 = (inst_42815__$1 == null);
var state_42884__$1 = (function (){var statearr_42890 = state_42884;
(statearr_42890[(8)] = inst_42815__$1);

return statearr_42890;
})();
if(cljs.core.truth_(inst_42816)){
var statearr_42891_42935 = state_42884__$1;
(statearr_42891_42935[(1)] = (5));

} else {
var statearr_42892_42936 = state_42884__$1;
(statearr_42892_42936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (15))){
var inst_42857 = (state_42884[(2)]);
var state_42884__$1 = state_42884;
var statearr_42893_42937 = state_42884__$1;
(statearr_42893_42937[(2)] = inst_42857);

(statearr_42893_42937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (21))){
var inst_42877 = (state_42884[(2)]);
var state_42884__$1 = (function (){var statearr_42894 = state_42884;
(statearr_42894[(9)] = inst_42877);

return statearr_42894;
})();
var statearr_42895_42938 = state_42884__$1;
(statearr_42895_42938[(2)] = null);

(statearr_42895_42938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (13))){
var inst_42839 = (state_42884[(10)]);
var inst_42841 = cljs.core.chunked_seq_QMARK_.call(null,inst_42839);
var state_42884__$1 = state_42884;
if(inst_42841){
var statearr_42896_42939 = state_42884__$1;
(statearr_42896_42939[(1)] = (16));

} else {
var statearr_42897_42940 = state_42884__$1;
(statearr_42897_42940[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (22))){
var inst_42869 = (state_42884[(2)]);
var state_42884__$1 = state_42884;
if(cljs.core.truth_(inst_42869)){
var statearr_42898_42941 = state_42884__$1;
(statearr_42898_42941[(1)] = (23));

} else {
var statearr_42899_42942 = state_42884__$1;
(statearr_42899_42942[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (6))){
var inst_42815 = (state_42884[(8)]);
var inst_42865 = (state_42884[(11)]);
var inst_42863 = (state_42884[(7)]);
var inst_42863__$1 = topic_fn.call(null,inst_42815);
var inst_42864 = cljs.core.deref.call(null,mults);
var inst_42865__$1 = cljs.core.get.call(null,inst_42864,inst_42863__$1);
var state_42884__$1 = (function (){var statearr_42900 = state_42884;
(statearr_42900[(11)] = inst_42865__$1);

(statearr_42900[(7)] = inst_42863__$1);

return statearr_42900;
})();
if(cljs.core.truth_(inst_42865__$1)){
var statearr_42901_42943 = state_42884__$1;
(statearr_42901_42943[(1)] = (19));

} else {
var statearr_42902_42944 = state_42884__$1;
(statearr_42902_42944[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (25))){
var inst_42874 = (state_42884[(2)]);
var state_42884__$1 = state_42884;
var statearr_42903_42945 = state_42884__$1;
(statearr_42903_42945[(2)] = inst_42874);

(statearr_42903_42945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (17))){
var inst_42839 = (state_42884[(10)]);
var inst_42848 = cljs.core.first.call(null,inst_42839);
var inst_42849 = cljs.core.async.muxch_STAR_.call(null,inst_42848);
var inst_42850 = cljs.core.async.close_BANG_.call(null,inst_42849);
var inst_42851 = cljs.core.next.call(null,inst_42839);
var inst_42825 = inst_42851;
var inst_42826 = null;
var inst_42827 = (0);
var inst_42828 = (0);
var state_42884__$1 = (function (){var statearr_42904 = state_42884;
(statearr_42904[(12)] = inst_42826);

(statearr_42904[(13)] = inst_42850);

(statearr_42904[(14)] = inst_42828);

(statearr_42904[(15)] = inst_42827);

(statearr_42904[(16)] = inst_42825);

return statearr_42904;
})();
var statearr_42905_42946 = state_42884__$1;
(statearr_42905_42946[(2)] = null);

(statearr_42905_42946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (3))){
var inst_42882 = (state_42884[(2)]);
var state_42884__$1 = state_42884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42884__$1,inst_42882);
} else {
if((state_val_42885 === (12))){
var inst_42859 = (state_42884[(2)]);
var state_42884__$1 = state_42884;
var statearr_42906_42947 = state_42884__$1;
(statearr_42906_42947[(2)] = inst_42859);

(statearr_42906_42947[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (2))){
var state_42884__$1 = state_42884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42884__$1,(4),ch);
} else {
if((state_val_42885 === (23))){
var state_42884__$1 = state_42884;
var statearr_42907_42948 = state_42884__$1;
(statearr_42907_42948[(2)] = null);

(statearr_42907_42948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (19))){
var inst_42815 = (state_42884[(8)]);
var inst_42865 = (state_42884[(11)]);
var inst_42867 = cljs.core.async.muxch_STAR_.call(null,inst_42865);
var state_42884__$1 = state_42884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42884__$1,(22),inst_42867,inst_42815);
} else {
if((state_val_42885 === (11))){
var inst_42839 = (state_42884[(10)]);
var inst_42825 = (state_42884[(16)]);
var inst_42839__$1 = cljs.core.seq.call(null,inst_42825);
var state_42884__$1 = (function (){var statearr_42908 = state_42884;
(statearr_42908[(10)] = inst_42839__$1);

return statearr_42908;
})();
if(inst_42839__$1){
var statearr_42909_42949 = state_42884__$1;
(statearr_42909_42949[(1)] = (13));

} else {
var statearr_42910_42950 = state_42884__$1;
(statearr_42910_42950[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (9))){
var inst_42861 = (state_42884[(2)]);
var state_42884__$1 = state_42884;
var statearr_42911_42951 = state_42884__$1;
(statearr_42911_42951[(2)] = inst_42861);

(statearr_42911_42951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (5))){
var inst_42822 = cljs.core.deref.call(null,mults);
var inst_42823 = cljs.core.vals.call(null,inst_42822);
var inst_42824 = cljs.core.seq.call(null,inst_42823);
var inst_42825 = inst_42824;
var inst_42826 = null;
var inst_42827 = (0);
var inst_42828 = (0);
var state_42884__$1 = (function (){var statearr_42912 = state_42884;
(statearr_42912[(12)] = inst_42826);

(statearr_42912[(14)] = inst_42828);

(statearr_42912[(15)] = inst_42827);

(statearr_42912[(16)] = inst_42825);

return statearr_42912;
})();
var statearr_42913_42952 = state_42884__$1;
(statearr_42913_42952[(2)] = null);

(statearr_42913_42952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (14))){
var state_42884__$1 = state_42884;
var statearr_42917_42953 = state_42884__$1;
(statearr_42917_42953[(2)] = null);

(statearr_42917_42953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (16))){
var inst_42839 = (state_42884[(10)]);
var inst_42843 = cljs.core.chunk_first.call(null,inst_42839);
var inst_42844 = cljs.core.chunk_rest.call(null,inst_42839);
var inst_42845 = cljs.core.count.call(null,inst_42843);
var inst_42825 = inst_42844;
var inst_42826 = inst_42843;
var inst_42827 = inst_42845;
var inst_42828 = (0);
var state_42884__$1 = (function (){var statearr_42918 = state_42884;
(statearr_42918[(12)] = inst_42826);

(statearr_42918[(14)] = inst_42828);

(statearr_42918[(15)] = inst_42827);

(statearr_42918[(16)] = inst_42825);

return statearr_42918;
})();
var statearr_42919_42954 = state_42884__$1;
(statearr_42919_42954[(2)] = null);

(statearr_42919_42954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (10))){
var inst_42826 = (state_42884[(12)]);
var inst_42828 = (state_42884[(14)]);
var inst_42827 = (state_42884[(15)]);
var inst_42825 = (state_42884[(16)]);
var inst_42833 = cljs.core._nth.call(null,inst_42826,inst_42828);
var inst_42834 = cljs.core.async.muxch_STAR_.call(null,inst_42833);
var inst_42835 = cljs.core.async.close_BANG_.call(null,inst_42834);
var inst_42836 = (inst_42828 + (1));
var tmp42914 = inst_42826;
var tmp42915 = inst_42827;
var tmp42916 = inst_42825;
var inst_42825__$1 = tmp42916;
var inst_42826__$1 = tmp42914;
var inst_42827__$1 = tmp42915;
var inst_42828__$1 = inst_42836;
var state_42884__$1 = (function (){var statearr_42920 = state_42884;
(statearr_42920[(12)] = inst_42826__$1);

(statearr_42920[(14)] = inst_42828__$1);

(statearr_42920[(15)] = inst_42827__$1);

(statearr_42920[(16)] = inst_42825__$1);

(statearr_42920[(17)] = inst_42835);

return statearr_42920;
})();
var statearr_42921_42955 = state_42884__$1;
(statearr_42921_42955[(2)] = null);

(statearr_42921_42955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (18))){
var inst_42854 = (state_42884[(2)]);
var state_42884__$1 = state_42884;
var statearr_42922_42956 = state_42884__$1;
(statearr_42922_42956[(2)] = inst_42854);

(statearr_42922_42956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42885 === (8))){
var inst_42828 = (state_42884[(14)]);
var inst_42827 = (state_42884[(15)]);
var inst_42830 = (inst_42828 < inst_42827);
var inst_42831 = inst_42830;
var state_42884__$1 = state_42884;
if(cljs.core.truth_(inst_42831)){
var statearr_42923_42957 = state_42884__$1;
(statearr_42923_42957[(1)] = (10));

} else {
var statearr_42924_42958 = state_42884__$1;
(statearr_42924_42958[(1)] = (11));

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
});})(c__33555__auto___42930,mults,ensure_mult,p))
;
return ((function (switch__33467__auto__,c__33555__auto___42930,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33468__auto__ = null;
var cljs$core$async$state_machine__33468__auto____0 = (function (){
var statearr_42925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42925[(0)] = cljs$core$async$state_machine__33468__auto__);

(statearr_42925[(1)] = (1));

return statearr_42925;
});
var cljs$core$async$state_machine__33468__auto____1 = (function (state_42884){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_42884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e42926){if((e42926 instanceof Object)){
var ex__33471__auto__ = e42926;
var statearr_42927_42959 = state_42884;
(statearr_42927_42959[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42960 = state_42884;
state_42884 = G__42960;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$state_machine__33468__auto__ = function(state_42884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33468__auto____1.call(this,state_42884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33468__auto____0;
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33468__auto____1;
return cljs$core$async$state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___42930,mults,ensure_mult,p))
})();
var state__33557__auto__ = (function (){var statearr_42928 = f__33556__auto__.call(null);
(statearr_42928[(6)] = c__33555__auto___42930);

return statearr_42928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___42930,mults,ensure_mult,p))
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
var G__42962 = arguments.length;
switch (G__42962) {
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
var G__42965 = arguments.length;
switch (G__42965) {
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
var G__42968 = arguments.length;
switch (G__42968) {
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
var c__33555__auto___43035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___43035,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___43035,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43007){
var state_val_43008 = (state_43007[(1)]);
if((state_val_43008 === (7))){
var state_43007__$1 = state_43007;
var statearr_43009_43036 = state_43007__$1;
(statearr_43009_43036[(2)] = null);

(statearr_43009_43036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (1))){
var state_43007__$1 = state_43007;
var statearr_43010_43037 = state_43007__$1;
(statearr_43010_43037[(2)] = null);

(statearr_43010_43037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (4))){
var inst_42971 = (state_43007[(7)]);
var inst_42973 = (inst_42971 < cnt);
var state_43007__$1 = state_43007;
if(cljs.core.truth_(inst_42973)){
var statearr_43011_43038 = state_43007__$1;
(statearr_43011_43038[(1)] = (6));

} else {
var statearr_43012_43039 = state_43007__$1;
(statearr_43012_43039[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (15))){
var inst_43003 = (state_43007[(2)]);
var state_43007__$1 = state_43007;
var statearr_43013_43040 = state_43007__$1;
(statearr_43013_43040[(2)] = inst_43003);

(statearr_43013_43040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (13))){
var inst_42996 = cljs.core.async.close_BANG_.call(null,out);
var state_43007__$1 = state_43007;
var statearr_43014_43041 = state_43007__$1;
(statearr_43014_43041[(2)] = inst_42996);

(statearr_43014_43041[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (6))){
var state_43007__$1 = state_43007;
var statearr_43015_43042 = state_43007__$1;
(statearr_43015_43042[(2)] = null);

(statearr_43015_43042[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (3))){
var inst_43005 = (state_43007[(2)]);
var state_43007__$1 = state_43007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43007__$1,inst_43005);
} else {
if((state_val_43008 === (12))){
var inst_42993 = (state_43007[(8)]);
var inst_42993__$1 = (state_43007[(2)]);
var inst_42994 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42993__$1);
var state_43007__$1 = (function (){var statearr_43016 = state_43007;
(statearr_43016[(8)] = inst_42993__$1);

return statearr_43016;
})();
if(cljs.core.truth_(inst_42994)){
var statearr_43017_43043 = state_43007__$1;
(statearr_43017_43043[(1)] = (13));

} else {
var statearr_43018_43044 = state_43007__$1;
(statearr_43018_43044[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (2))){
var inst_42970 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42971 = (0);
var state_43007__$1 = (function (){var statearr_43019 = state_43007;
(statearr_43019[(7)] = inst_42971);

(statearr_43019[(9)] = inst_42970);

return statearr_43019;
})();
var statearr_43020_43045 = state_43007__$1;
(statearr_43020_43045[(2)] = null);

(statearr_43020_43045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (11))){
var inst_42971 = (state_43007[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43007,(10),Object,null,(9));
var inst_42980 = chs__$1.call(null,inst_42971);
var inst_42981 = done.call(null,inst_42971);
var inst_42982 = cljs.core.async.take_BANG_.call(null,inst_42980,inst_42981);
var state_43007__$1 = state_43007;
var statearr_43021_43046 = state_43007__$1;
(statearr_43021_43046[(2)] = inst_42982);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43007__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (9))){
var inst_42971 = (state_43007[(7)]);
var inst_42984 = (state_43007[(2)]);
var inst_42985 = (inst_42971 + (1));
var inst_42971__$1 = inst_42985;
var state_43007__$1 = (function (){var statearr_43022 = state_43007;
(statearr_43022[(10)] = inst_42984);

(statearr_43022[(7)] = inst_42971__$1);

return statearr_43022;
})();
var statearr_43023_43047 = state_43007__$1;
(statearr_43023_43047[(2)] = null);

(statearr_43023_43047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (5))){
var inst_42991 = (state_43007[(2)]);
var state_43007__$1 = (function (){var statearr_43024 = state_43007;
(statearr_43024[(11)] = inst_42991);

return statearr_43024;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43007__$1,(12),dchan);
} else {
if((state_val_43008 === (14))){
var inst_42993 = (state_43007[(8)]);
var inst_42998 = cljs.core.apply.call(null,f,inst_42993);
var state_43007__$1 = state_43007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43007__$1,(16),out,inst_42998);
} else {
if((state_val_43008 === (16))){
var inst_43000 = (state_43007[(2)]);
var state_43007__$1 = (function (){var statearr_43025 = state_43007;
(statearr_43025[(12)] = inst_43000);

return statearr_43025;
})();
var statearr_43026_43048 = state_43007__$1;
(statearr_43026_43048[(2)] = null);

(statearr_43026_43048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (10))){
var inst_42975 = (state_43007[(2)]);
var inst_42976 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43007__$1 = (function (){var statearr_43027 = state_43007;
(statearr_43027[(13)] = inst_42975);

return statearr_43027;
})();
var statearr_43028_43049 = state_43007__$1;
(statearr_43028_43049[(2)] = inst_42976);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43007__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43008 === (8))){
var inst_42989 = (state_43007[(2)]);
var state_43007__$1 = state_43007;
var statearr_43029_43050 = state_43007__$1;
(statearr_43029_43050[(2)] = inst_42989);

(statearr_43029_43050[(1)] = (5));


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
});})(c__33555__auto___43035,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33467__auto__,c__33555__auto___43035,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33468__auto__ = null;
var cljs$core$async$state_machine__33468__auto____0 = (function (){
var statearr_43030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43030[(0)] = cljs$core$async$state_machine__33468__auto__);

(statearr_43030[(1)] = (1));

return statearr_43030;
});
var cljs$core$async$state_machine__33468__auto____1 = (function (state_43007){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_43007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e43031){if((e43031 instanceof Object)){
var ex__33471__auto__ = e43031;
var statearr_43032_43051 = state_43007;
(statearr_43032_43051[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43052 = state_43007;
state_43007 = G__43052;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$state_machine__33468__auto__ = function(state_43007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33468__auto____1.call(this,state_43007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33468__auto____0;
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33468__auto____1;
return cljs$core$async$state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___43035,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33557__auto__ = (function (){var statearr_43033 = f__33556__auto__.call(null);
(statearr_43033[(6)] = c__33555__auto___43035);

return statearr_43033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___43035,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__43055 = arguments.length;
switch (G__43055) {
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
var c__33555__auto___43109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___43109,out){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___43109,out){
return (function (state_43087){
var state_val_43088 = (state_43087[(1)]);
if((state_val_43088 === (7))){
var inst_43066 = (state_43087[(7)]);
var inst_43067 = (state_43087[(8)]);
var inst_43066__$1 = (state_43087[(2)]);
var inst_43067__$1 = cljs.core.nth.call(null,inst_43066__$1,(0),null);
var inst_43068 = cljs.core.nth.call(null,inst_43066__$1,(1),null);
var inst_43069 = (inst_43067__$1 == null);
var state_43087__$1 = (function (){var statearr_43089 = state_43087;
(statearr_43089[(7)] = inst_43066__$1);

(statearr_43089[(9)] = inst_43068);

(statearr_43089[(8)] = inst_43067__$1);

return statearr_43089;
})();
if(cljs.core.truth_(inst_43069)){
var statearr_43090_43110 = state_43087__$1;
(statearr_43090_43110[(1)] = (8));

} else {
var statearr_43091_43111 = state_43087__$1;
(statearr_43091_43111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43088 === (1))){
var inst_43056 = cljs.core.vec.call(null,chs);
var inst_43057 = inst_43056;
var state_43087__$1 = (function (){var statearr_43092 = state_43087;
(statearr_43092[(10)] = inst_43057);

return statearr_43092;
})();
var statearr_43093_43112 = state_43087__$1;
(statearr_43093_43112[(2)] = null);

(statearr_43093_43112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43088 === (4))){
var inst_43057 = (state_43087[(10)]);
var state_43087__$1 = state_43087;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43087__$1,(7),inst_43057);
} else {
if((state_val_43088 === (6))){
var inst_43083 = (state_43087[(2)]);
var state_43087__$1 = state_43087;
var statearr_43094_43113 = state_43087__$1;
(statearr_43094_43113[(2)] = inst_43083);

(statearr_43094_43113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43088 === (3))){
var inst_43085 = (state_43087[(2)]);
var state_43087__$1 = state_43087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43087__$1,inst_43085);
} else {
if((state_val_43088 === (2))){
var inst_43057 = (state_43087[(10)]);
var inst_43059 = cljs.core.count.call(null,inst_43057);
var inst_43060 = (inst_43059 > (0));
var state_43087__$1 = state_43087;
if(cljs.core.truth_(inst_43060)){
var statearr_43096_43114 = state_43087__$1;
(statearr_43096_43114[(1)] = (4));

} else {
var statearr_43097_43115 = state_43087__$1;
(statearr_43097_43115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43088 === (11))){
var inst_43057 = (state_43087[(10)]);
var inst_43076 = (state_43087[(2)]);
var tmp43095 = inst_43057;
var inst_43057__$1 = tmp43095;
var state_43087__$1 = (function (){var statearr_43098 = state_43087;
(statearr_43098[(10)] = inst_43057__$1);

(statearr_43098[(11)] = inst_43076);

return statearr_43098;
})();
var statearr_43099_43116 = state_43087__$1;
(statearr_43099_43116[(2)] = null);

(statearr_43099_43116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43088 === (9))){
var inst_43067 = (state_43087[(8)]);
var state_43087__$1 = state_43087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43087__$1,(11),out,inst_43067);
} else {
if((state_val_43088 === (5))){
var inst_43081 = cljs.core.async.close_BANG_.call(null,out);
var state_43087__$1 = state_43087;
var statearr_43100_43117 = state_43087__$1;
(statearr_43100_43117[(2)] = inst_43081);

(statearr_43100_43117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43088 === (10))){
var inst_43079 = (state_43087[(2)]);
var state_43087__$1 = state_43087;
var statearr_43101_43118 = state_43087__$1;
(statearr_43101_43118[(2)] = inst_43079);

(statearr_43101_43118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43088 === (8))){
var inst_43057 = (state_43087[(10)]);
var inst_43066 = (state_43087[(7)]);
var inst_43068 = (state_43087[(9)]);
var inst_43067 = (state_43087[(8)]);
var inst_43071 = (function (){var cs = inst_43057;
var vec__43062 = inst_43066;
var v = inst_43067;
var c = inst_43068;
return ((function (cs,vec__43062,v,c,inst_43057,inst_43066,inst_43068,inst_43067,state_val_43088,c__33555__auto___43109,out){
return (function (p1__43053_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43053_SHARP_);
});
;})(cs,vec__43062,v,c,inst_43057,inst_43066,inst_43068,inst_43067,state_val_43088,c__33555__auto___43109,out))
})();
var inst_43072 = cljs.core.filterv.call(null,inst_43071,inst_43057);
var inst_43057__$1 = inst_43072;
var state_43087__$1 = (function (){var statearr_43102 = state_43087;
(statearr_43102[(10)] = inst_43057__$1);

return statearr_43102;
})();
var statearr_43103_43119 = state_43087__$1;
(statearr_43103_43119[(2)] = null);

(statearr_43103_43119[(1)] = (2));


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
});})(c__33555__auto___43109,out))
;
return ((function (switch__33467__auto__,c__33555__auto___43109,out){
return (function() {
var cljs$core$async$state_machine__33468__auto__ = null;
var cljs$core$async$state_machine__33468__auto____0 = (function (){
var statearr_43104 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43104[(0)] = cljs$core$async$state_machine__33468__auto__);

(statearr_43104[(1)] = (1));

return statearr_43104;
});
var cljs$core$async$state_machine__33468__auto____1 = (function (state_43087){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_43087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e43105){if((e43105 instanceof Object)){
var ex__33471__auto__ = e43105;
var statearr_43106_43120 = state_43087;
(statearr_43106_43120[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43121 = state_43087;
state_43087 = G__43121;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$state_machine__33468__auto__ = function(state_43087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33468__auto____1.call(this,state_43087);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33468__auto____0;
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33468__auto____1;
return cljs$core$async$state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___43109,out))
})();
var state__33557__auto__ = (function (){var statearr_43107 = f__33556__auto__.call(null);
(statearr_43107[(6)] = c__33555__auto___43109);

return statearr_43107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___43109,out))
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
var G__43123 = arguments.length;
switch (G__43123) {
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
var c__33555__auto___43168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___43168,out){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___43168,out){
return (function (state_43147){
var state_val_43148 = (state_43147[(1)]);
if((state_val_43148 === (7))){
var inst_43129 = (state_43147[(7)]);
var inst_43129__$1 = (state_43147[(2)]);
var inst_43130 = (inst_43129__$1 == null);
var inst_43131 = cljs.core.not.call(null,inst_43130);
var state_43147__$1 = (function (){var statearr_43149 = state_43147;
(statearr_43149[(7)] = inst_43129__$1);

return statearr_43149;
})();
if(inst_43131){
var statearr_43150_43169 = state_43147__$1;
(statearr_43150_43169[(1)] = (8));

} else {
var statearr_43151_43170 = state_43147__$1;
(statearr_43151_43170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43148 === (1))){
var inst_43124 = (0);
var state_43147__$1 = (function (){var statearr_43152 = state_43147;
(statearr_43152[(8)] = inst_43124);

return statearr_43152;
})();
var statearr_43153_43171 = state_43147__$1;
(statearr_43153_43171[(2)] = null);

(statearr_43153_43171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43148 === (4))){
var state_43147__$1 = state_43147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43147__$1,(7),ch);
} else {
if((state_val_43148 === (6))){
var inst_43142 = (state_43147[(2)]);
var state_43147__$1 = state_43147;
var statearr_43154_43172 = state_43147__$1;
(statearr_43154_43172[(2)] = inst_43142);

(statearr_43154_43172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43148 === (3))){
var inst_43144 = (state_43147[(2)]);
var inst_43145 = cljs.core.async.close_BANG_.call(null,out);
var state_43147__$1 = (function (){var statearr_43155 = state_43147;
(statearr_43155[(9)] = inst_43144);

return statearr_43155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43147__$1,inst_43145);
} else {
if((state_val_43148 === (2))){
var inst_43124 = (state_43147[(8)]);
var inst_43126 = (inst_43124 < n);
var state_43147__$1 = state_43147;
if(cljs.core.truth_(inst_43126)){
var statearr_43156_43173 = state_43147__$1;
(statearr_43156_43173[(1)] = (4));

} else {
var statearr_43157_43174 = state_43147__$1;
(statearr_43157_43174[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43148 === (11))){
var inst_43124 = (state_43147[(8)]);
var inst_43134 = (state_43147[(2)]);
var inst_43135 = (inst_43124 + (1));
var inst_43124__$1 = inst_43135;
var state_43147__$1 = (function (){var statearr_43158 = state_43147;
(statearr_43158[(8)] = inst_43124__$1);

(statearr_43158[(10)] = inst_43134);

return statearr_43158;
})();
var statearr_43159_43175 = state_43147__$1;
(statearr_43159_43175[(2)] = null);

(statearr_43159_43175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43148 === (9))){
var state_43147__$1 = state_43147;
var statearr_43160_43176 = state_43147__$1;
(statearr_43160_43176[(2)] = null);

(statearr_43160_43176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43148 === (5))){
var state_43147__$1 = state_43147;
var statearr_43161_43177 = state_43147__$1;
(statearr_43161_43177[(2)] = null);

(statearr_43161_43177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43148 === (10))){
var inst_43139 = (state_43147[(2)]);
var state_43147__$1 = state_43147;
var statearr_43162_43178 = state_43147__$1;
(statearr_43162_43178[(2)] = inst_43139);

(statearr_43162_43178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43148 === (8))){
var inst_43129 = (state_43147[(7)]);
var state_43147__$1 = state_43147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43147__$1,(11),out,inst_43129);
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
});})(c__33555__auto___43168,out))
;
return ((function (switch__33467__auto__,c__33555__auto___43168,out){
return (function() {
var cljs$core$async$state_machine__33468__auto__ = null;
var cljs$core$async$state_machine__33468__auto____0 = (function (){
var statearr_43163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43163[(0)] = cljs$core$async$state_machine__33468__auto__);

(statearr_43163[(1)] = (1));

return statearr_43163;
});
var cljs$core$async$state_machine__33468__auto____1 = (function (state_43147){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_43147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e43164){if((e43164 instanceof Object)){
var ex__33471__auto__ = e43164;
var statearr_43165_43179 = state_43147;
(statearr_43165_43179[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43180 = state_43147;
state_43147 = G__43180;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$state_machine__33468__auto__ = function(state_43147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33468__auto____1.call(this,state_43147);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33468__auto____0;
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33468__auto____1;
return cljs$core$async$state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___43168,out))
})();
var state__33557__auto__ = (function (){var statearr_43166 = f__33556__auto__.call(null);
(statearr_43166[(6)] = c__33555__auto___43168);

return statearr_43166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___43168,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43182 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43182 = (function (f,ch,meta43183){
this.f = f;
this.ch = ch;
this.meta43183 = meta43183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43184,meta43183__$1){
var self__ = this;
var _43184__$1 = this;
return (new cljs.core.async.t_cljs$core$async43182(self__.f,self__.ch,meta43183__$1));
});

cljs.core.async.t_cljs$core$async43182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43184){
var self__ = this;
var _43184__$1 = this;
return self__.meta43183;
});

cljs.core.async.t_cljs$core$async43182.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43182.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43182.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43182.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43182.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43185 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43185 = (function (f,ch,meta43183,_,fn1,meta43186){
this.f = f;
this.ch = ch;
this.meta43183 = meta43183;
this._ = _;
this.fn1 = fn1;
this.meta43186 = meta43186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43187,meta43186__$1){
var self__ = this;
var _43187__$1 = this;
return (new cljs.core.async.t_cljs$core$async43185(self__.f,self__.ch,self__.meta43183,self__._,self__.fn1,meta43186__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43187){
var self__ = this;
var _43187__$1 = this;
return self__.meta43186;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43185.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43185.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43185.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43185.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43181_SHARP_){
return f1.call(null,(((p1__43181_SHARP_ == null))?null:self__.f.call(null,p1__43181_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43185.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43183","meta43183",1964912702,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43182","cljs.core.async/t_cljs$core$async43182",623343555,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43186","meta43186",-1513264836,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43185.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43185";

cljs.core.async.t_cljs$core$async43185.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async43185");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43185 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43185(f__$1,ch__$1,meta43183__$1,___$2,fn1__$1,meta43186){
return (new cljs.core.async.t_cljs$core$async43185(f__$1,ch__$1,meta43183__$1,___$2,fn1__$1,meta43186));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43185(self__.f,self__.ch,self__.meta43183,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async43182.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43182.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43183","meta43183",1964912702,null)], null);
});

cljs.core.async.t_cljs$core$async43182.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43182";

cljs.core.async.t_cljs$core$async43182.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async43182");
});

cljs.core.async.__GT_t_cljs$core$async43182 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43182(f__$1,ch__$1,meta43183){
return (new cljs.core.async.t_cljs$core$async43182(f__$1,ch__$1,meta43183));
});

}

return (new cljs.core.async.t_cljs$core$async43182(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43188 = (function (f,ch,meta43189){
this.f = f;
this.ch = ch;
this.meta43189 = meta43189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43190,meta43189__$1){
var self__ = this;
var _43190__$1 = this;
return (new cljs.core.async.t_cljs$core$async43188(self__.f,self__.ch,meta43189__$1));
});

cljs.core.async.t_cljs$core$async43188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43190){
var self__ = this;
var _43190__$1 = this;
return self__.meta43189;
});

cljs.core.async.t_cljs$core$async43188.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43188.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43188.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43188.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43188.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43188.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43189","meta43189",-1276439394,null)], null);
});

cljs.core.async.t_cljs$core$async43188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43188";

cljs.core.async.t_cljs$core$async43188.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async43188");
});

cljs.core.async.__GT_t_cljs$core$async43188 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43188(f__$1,ch__$1,meta43189){
return (new cljs.core.async.t_cljs$core$async43188(f__$1,ch__$1,meta43189));
});

}

return (new cljs.core.async.t_cljs$core$async43188(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43191 = (function (p,ch,meta43192){
this.p = p;
this.ch = ch;
this.meta43192 = meta43192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43193,meta43192__$1){
var self__ = this;
var _43193__$1 = this;
return (new cljs.core.async.t_cljs$core$async43191(self__.p,self__.ch,meta43192__$1));
});

cljs.core.async.t_cljs$core$async43191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43193){
var self__ = this;
var _43193__$1 = this;
return self__.meta43192;
});

cljs.core.async.t_cljs$core$async43191.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43191.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43191.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43191.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43191.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43191.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43191.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43192","meta43192",779956704,null)], null);
});

cljs.core.async.t_cljs$core$async43191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43191";

cljs.core.async.t_cljs$core$async43191.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async43191");
});

cljs.core.async.__GT_t_cljs$core$async43191 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43191(p__$1,ch__$1,meta43192){
return (new cljs.core.async.t_cljs$core$async43191(p__$1,ch__$1,meta43192));
});

}

return (new cljs.core.async.t_cljs$core$async43191(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43195 = arguments.length;
switch (G__43195) {
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
var c__33555__auto___43235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___43235,out){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___43235,out){
return (function (state_43216){
var state_val_43217 = (state_43216[(1)]);
if((state_val_43217 === (7))){
var inst_43212 = (state_43216[(2)]);
var state_43216__$1 = state_43216;
var statearr_43218_43236 = state_43216__$1;
(statearr_43218_43236[(2)] = inst_43212);

(statearr_43218_43236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43217 === (1))){
var state_43216__$1 = state_43216;
var statearr_43219_43237 = state_43216__$1;
(statearr_43219_43237[(2)] = null);

(statearr_43219_43237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43217 === (4))){
var inst_43198 = (state_43216[(7)]);
var inst_43198__$1 = (state_43216[(2)]);
var inst_43199 = (inst_43198__$1 == null);
var state_43216__$1 = (function (){var statearr_43220 = state_43216;
(statearr_43220[(7)] = inst_43198__$1);

return statearr_43220;
})();
if(cljs.core.truth_(inst_43199)){
var statearr_43221_43238 = state_43216__$1;
(statearr_43221_43238[(1)] = (5));

} else {
var statearr_43222_43239 = state_43216__$1;
(statearr_43222_43239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43217 === (6))){
var inst_43198 = (state_43216[(7)]);
var inst_43203 = p.call(null,inst_43198);
var state_43216__$1 = state_43216;
if(cljs.core.truth_(inst_43203)){
var statearr_43223_43240 = state_43216__$1;
(statearr_43223_43240[(1)] = (8));

} else {
var statearr_43224_43241 = state_43216__$1;
(statearr_43224_43241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43217 === (3))){
var inst_43214 = (state_43216[(2)]);
var state_43216__$1 = state_43216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43216__$1,inst_43214);
} else {
if((state_val_43217 === (2))){
var state_43216__$1 = state_43216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43216__$1,(4),ch);
} else {
if((state_val_43217 === (11))){
var inst_43206 = (state_43216[(2)]);
var state_43216__$1 = state_43216;
var statearr_43225_43242 = state_43216__$1;
(statearr_43225_43242[(2)] = inst_43206);

(statearr_43225_43242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43217 === (9))){
var state_43216__$1 = state_43216;
var statearr_43226_43243 = state_43216__$1;
(statearr_43226_43243[(2)] = null);

(statearr_43226_43243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43217 === (5))){
var inst_43201 = cljs.core.async.close_BANG_.call(null,out);
var state_43216__$1 = state_43216;
var statearr_43227_43244 = state_43216__$1;
(statearr_43227_43244[(2)] = inst_43201);

(statearr_43227_43244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43217 === (10))){
var inst_43209 = (state_43216[(2)]);
var state_43216__$1 = (function (){var statearr_43228 = state_43216;
(statearr_43228[(8)] = inst_43209);

return statearr_43228;
})();
var statearr_43229_43245 = state_43216__$1;
(statearr_43229_43245[(2)] = null);

(statearr_43229_43245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43217 === (8))){
var inst_43198 = (state_43216[(7)]);
var state_43216__$1 = state_43216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43216__$1,(11),out,inst_43198);
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
});})(c__33555__auto___43235,out))
;
return ((function (switch__33467__auto__,c__33555__auto___43235,out){
return (function() {
var cljs$core$async$state_machine__33468__auto__ = null;
var cljs$core$async$state_machine__33468__auto____0 = (function (){
var statearr_43230 = [null,null,null,null,null,null,null,null,null];
(statearr_43230[(0)] = cljs$core$async$state_machine__33468__auto__);

(statearr_43230[(1)] = (1));

return statearr_43230;
});
var cljs$core$async$state_machine__33468__auto____1 = (function (state_43216){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_43216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e43231){if((e43231 instanceof Object)){
var ex__33471__auto__ = e43231;
var statearr_43232_43246 = state_43216;
(statearr_43232_43246[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43247 = state_43216;
state_43216 = G__43247;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$state_machine__33468__auto__ = function(state_43216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33468__auto____1.call(this,state_43216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33468__auto____0;
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33468__auto____1;
return cljs$core$async$state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___43235,out))
})();
var state__33557__auto__ = (function (){var statearr_43233 = f__33556__auto__.call(null);
(statearr_43233[(6)] = c__33555__auto___43235);

return statearr_43233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___43235,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43249 = arguments.length;
switch (G__43249) {
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
var c__33555__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto__){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto__){
return (function (state_43312){
var state_val_43313 = (state_43312[(1)]);
if((state_val_43313 === (7))){
var inst_43308 = (state_43312[(2)]);
var state_43312__$1 = state_43312;
var statearr_43314_43352 = state_43312__$1;
(statearr_43314_43352[(2)] = inst_43308);

(statearr_43314_43352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (20))){
var inst_43278 = (state_43312[(7)]);
var inst_43289 = (state_43312[(2)]);
var inst_43290 = cljs.core.next.call(null,inst_43278);
var inst_43264 = inst_43290;
var inst_43265 = null;
var inst_43266 = (0);
var inst_43267 = (0);
var state_43312__$1 = (function (){var statearr_43315 = state_43312;
(statearr_43315[(8)] = inst_43267);

(statearr_43315[(9)] = inst_43265);

(statearr_43315[(10)] = inst_43266);

(statearr_43315[(11)] = inst_43289);

(statearr_43315[(12)] = inst_43264);

return statearr_43315;
})();
var statearr_43316_43353 = state_43312__$1;
(statearr_43316_43353[(2)] = null);

(statearr_43316_43353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (1))){
var state_43312__$1 = state_43312;
var statearr_43317_43354 = state_43312__$1;
(statearr_43317_43354[(2)] = null);

(statearr_43317_43354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (4))){
var inst_43253 = (state_43312[(13)]);
var inst_43253__$1 = (state_43312[(2)]);
var inst_43254 = (inst_43253__$1 == null);
var state_43312__$1 = (function (){var statearr_43318 = state_43312;
(statearr_43318[(13)] = inst_43253__$1);

return statearr_43318;
})();
if(cljs.core.truth_(inst_43254)){
var statearr_43319_43355 = state_43312__$1;
(statearr_43319_43355[(1)] = (5));

} else {
var statearr_43320_43356 = state_43312__$1;
(statearr_43320_43356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (15))){
var state_43312__$1 = state_43312;
var statearr_43324_43357 = state_43312__$1;
(statearr_43324_43357[(2)] = null);

(statearr_43324_43357[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (21))){
var state_43312__$1 = state_43312;
var statearr_43325_43358 = state_43312__$1;
(statearr_43325_43358[(2)] = null);

(statearr_43325_43358[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (13))){
var inst_43267 = (state_43312[(8)]);
var inst_43265 = (state_43312[(9)]);
var inst_43266 = (state_43312[(10)]);
var inst_43264 = (state_43312[(12)]);
var inst_43274 = (state_43312[(2)]);
var inst_43275 = (inst_43267 + (1));
var tmp43321 = inst_43265;
var tmp43322 = inst_43266;
var tmp43323 = inst_43264;
var inst_43264__$1 = tmp43323;
var inst_43265__$1 = tmp43321;
var inst_43266__$1 = tmp43322;
var inst_43267__$1 = inst_43275;
var state_43312__$1 = (function (){var statearr_43326 = state_43312;
(statearr_43326[(14)] = inst_43274);

(statearr_43326[(8)] = inst_43267__$1);

(statearr_43326[(9)] = inst_43265__$1);

(statearr_43326[(10)] = inst_43266__$1);

(statearr_43326[(12)] = inst_43264__$1);

return statearr_43326;
})();
var statearr_43327_43359 = state_43312__$1;
(statearr_43327_43359[(2)] = null);

(statearr_43327_43359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (22))){
var state_43312__$1 = state_43312;
var statearr_43328_43360 = state_43312__$1;
(statearr_43328_43360[(2)] = null);

(statearr_43328_43360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (6))){
var inst_43253 = (state_43312[(13)]);
var inst_43262 = f.call(null,inst_43253);
var inst_43263 = cljs.core.seq.call(null,inst_43262);
var inst_43264 = inst_43263;
var inst_43265 = null;
var inst_43266 = (0);
var inst_43267 = (0);
var state_43312__$1 = (function (){var statearr_43329 = state_43312;
(statearr_43329[(8)] = inst_43267);

(statearr_43329[(9)] = inst_43265);

(statearr_43329[(10)] = inst_43266);

(statearr_43329[(12)] = inst_43264);

return statearr_43329;
})();
var statearr_43330_43361 = state_43312__$1;
(statearr_43330_43361[(2)] = null);

(statearr_43330_43361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (17))){
var inst_43278 = (state_43312[(7)]);
var inst_43282 = cljs.core.chunk_first.call(null,inst_43278);
var inst_43283 = cljs.core.chunk_rest.call(null,inst_43278);
var inst_43284 = cljs.core.count.call(null,inst_43282);
var inst_43264 = inst_43283;
var inst_43265 = inst_43282;
var inst_43266 = inst_43284;
var inst_43267 = (0);
var state_43312__$1 = (function (){var statearr_43331 = state_43312;
(statearr_43331[(8)] = inst_43267);

(statearr_43331[(9)] = inst_43265);

(statearr_43331[(10)] = inst_43266);

(statearr_43331[(12)] = inst_43264);

return statearr_43331;
})();
var statearr_43332_43362 = state_43312__$1;
(statearr_43332_43362[(2)] = null);

(statearr_43332_43362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (3))){
var inst_43310 = (state_43312[(2)]);
var state_43312__$1 = state_43312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43312__$1,inst_43310);
} else {
if((state_val_43313 === (12))){
var inst_43298 = (state_43312[(2)]);
var state_43312__$1 = state_43312;
var statearr_43333_43363 = state_43312__$1;
(statearr_43333_43363[(2)] = inst_43298);

(statearr_43333_43363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (2))){
var state_43312__$1 = state_43312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43312__$1,(4),in$);
} else {
if((state_val_43313 === (23))){
var inst_43306 = (state_43312[(2)]);
var state_43312__$1 = state_43312;
var statearr_43334_43364 = state_43312__$1;
(statearr_43334_43364[(2)] = inst_43306);

(statearr_43334_43364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (19))){
var inst_43293 = (state_43312[(2)]);
var state_43312__$1 = state_43312;
var statearr_43335_43365 = state_43312__$1;
(statearr_43335_43365[(2)] = inst_43293);

(statearr_43335_43365[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (11))){
var inst_43264 = (state_43312[(12)]);
var inst_43278 = (state_43312[(7)]);
var inst_43278__$1 = cljs.core.seq.call(null,inst_43264);
var state_43312__$1 = (function (){var statearr_43336 = state_43312;
(statearr_43336[(7)] = inst_43278__$1);

return statearr_43336;
})();
if(inst_43278__$1){
var statearr_43337_43366 = state_43312__$1;
(statearr_43337_43366[(1)] = (14));

} else {
var statearr_43338_43367 = state_43312__$1;
(statearr_43338_43367[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (9))){
var inst_43300 = (state_43312[(2)]);
var inst_43301 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43312__$1 = (function (){var statearr_43339 = state_43312;
(statearr_43339[(15)] = inst_43300);

return statearr_43339;
})();
if(cljs.core.truth_(inst_43301)){
var statearr_43340_43368 = state_43312__$1;
(statearr_43340_43368[(1)] = (21));

} else {
var statearr_43341_43369 = state_43312__$1;
(statearr_43341_43369[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (5))){
var inst_43256 = cljs.core.async.close_BANG_.call(null,out);
var state_43312__$1 = state_43312;
var statearr_43342_43370 = state_43312__$1;
(statearr_43342_43370[(2)] = inst_43256);

(statearr_43342_43370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (14))){
var inst_43278 = (state_43312[(7)]);
var inst_43280 = cljs.core.chunked_seq_QMARK_.call(null,inst_43278);
var state_43312__$1 = state_43312;
if(inst_43280){
var statearr_43343_43371 = state_43312__$1;
(statearr_43343_43371[(1)] = (17));

} else {
var statearr_43344_43372 = state_43312__$1;
(statearr_43344_43372[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (16))){
var inst_43296 = (state_43312[(2)]);
var state_43312__$1 = state_43312;
var statearr_43345_43373 = state_43312__$1;
(statearr_43345_43373[(2)] = inst_43296);

(statearr_43345_43373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43313 === (10))){
var inst_43267 = (state_43312[(8)]);
var inst_43265 = (state_43312[(9)]);
var inst_43272 = cljs.core._nth.call(null,inst_43265,inst_43267);
var state_43312__$1 = state_43312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43312__$1,(13),out,inst_43272);
} else {
if((state_val_43313 === (18))){
var inst_43278 = (state_43312[(7)]);
var inst_43287 = cljs.core.first.call(null,inst_43278);
var state_43312__$1 = state_43312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43312__$1,(20),out,inst_43287);
} else {
if((state_val_43313 === (8))){
var inst_43267 = (state_43312[(8)]);
var inst_43266 = (state_43312[(10)]);
var inst_43269 = (inst_43267 < inst_43266);
var inst_43270 = inst_43269;
var state_43312__$1 = state_43312;
if(cljs.core.truth_(inst_43270)){
var statearr_43346_43374 = state_43312__$1;
(statearr_43346_43374[(1)] = (10));

} else {
var statearr_43347_43375 = state_43312__$1;
(statearr_43347_43375[(1)] = (11));

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
});})(c__33555__auto__))
;
return ((function (switch__33467__auto__,c__33555__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33468__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33468__auto____0 = (function (){
var statearr_43348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43348[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33468__auto__);

(statearr_43348[(1)] = (1));

return statearr_43348;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33468__auto____1 = (function (state_43312){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_43312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e43349){if((e43349 instanceof Object)){
var ex__33471__auto__ = e43349;
var statearr_43350_43376 = state_43312;
(statearr_43350_43376[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43377 = state_43312;
state_43312 = G__43377;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33468__auto__ = function(state_43312){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33468__auto____1.call(this,state_43312);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33468__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33468__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto__))
})();
var state__33557__auto__ = (function (){var statearr_43351 = f__33556__auto__.call(null);
(statearr_43351[(6)] = c__33555__auto__);

return statearr_43351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto__))
);

return c__33555__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43379 = arguments.length;
switch (G__43379) {
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
var G__43382 = arguments.length;
switch (G__43382) {
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
var G__43385 = arguments.length;
switch (G__43385) {
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
var c__33555__auto___43432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___43432,out){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___43432,out){
return (function (state_43409){
var state_val_43410 = (state_43409[(1)]);
if((state_val_43410 === (7))){
var inst_43404 = (state_43409[(2)]);
var state_43409__$1 = state_43409;
var statearr_43411_43433 = state_43409__$1;
(statearr_43411_43433[(2)] = inst_43404);

(statearr_43411_43433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (1))){
var inst_43386 = null;
var state_43409__$1 = (function (){var statearr_43412 = state_43409;
(statearr_43412[(7)] = inst_43386);

return statearr_43412;
})();
var statearr_43413_43434 = state_43409__$1;
(statearr_43413_43434[(2)] = null);

(statearr_43413_43434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (4))){
var inst_43389 = (state_43409[(8)]);
var inst_43389__$1 = (state_43409[(2)]);
var inst_43390 = (inst_43389__$1 == null);
var inst_43391 = cljs.core.not.call(null,inst_43390);
var state_43409__$1 = (function (){var statearr_43414 = state_43409;
(statearr_43414[(8)] = inst_43389__$1);

return statearr_43414;
})();
if(inst_43391){
var statearr_43415_43435 = state_43409__$1;
(statearr_43415_43435[(1)] = (5));

} else {
var statearr_43416_43436 = state_43409__$1;
(statearr_43416_43436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (6))){
var state_43409__$1 = state_43409;
var statearr_43417_43437 = state_43409__$1;
(statearr_43417_43437[(2)] = null);

(statearr_43417_43437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (3))){
var inst_43406 = (state_43409[(2)]);
var inst_43407 = cljs.core.async.close_BANG_.call(null,out);
var state_43409__$1 = (function (){var statearr_43418 = state_43409;
(statearr_43418[(9)] = inst_43406);

return statearr_43418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43409__$1,inst_43407);
} else {
if((state_val_43410 === (2))){
var state_43409__$1 = state_43409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43409__$1,(4),ch);
} else {
if((state_val_43410 === (11))){
var inst_43389 = (state_43409[(8)]);
var inst_43398 = (state_43409[(2)]);
var inst_43386 = inst_43389;
var state_43409__$1 = (function (){var statearr_43419 = state_43409;
(statearr_43419[(10)] = inst_43398);

(statearr_43419[(7)] = inst_43386);

return statearr_43419;
})();
var statearr_43420_43438 = state_43409__$1;
(statearr_43420_43438[(2)] = null);

(statearr_43420_43438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (9))){
var inst_43389 = (state_43409[(8)]);
var state_43409__$1 = state_43409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43409__$1,(11),out,inst_43389);
} else {
if((state_val_43410 === (5))){
var inst_43389 = (state_43409[(8)]);
var inst_43386 = (state_43409[(7)]);
var inst_43393 = cljs.core._EQ_.call(null,inst_43389,inst_43386);
var state_43409__$1 = state_43409;
if(inst_43393){
var statearr_43422_43439 = state_43409__$1;
(statearr_43422_43439[(1)] = (8));

} else {
var statearr_43423_43440 = state_43409__$1;
(statearr_43423_43440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (10))){
var inst_43401 = (state_43409[(2)]);
var state_43409__$1 = state_43409;
var statearr_43424_43441 = state_43409__$1;
(statearr_43424_43441[(2)] = inst_43401);

(statearr_43424_43441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43410 === (8))){
var inst_43386 = (state_43409[(7)]);
var tmp43421 = inst_43386;
var inst_43386__$1 = tmp43421;
var state_43409__$1 = (function (){var statearr_43425 = state_43409;
(statearr_43425[(7)] = inst_43386__$1);

return statearr_43425;
})();
var statearr_43426_43442 = state_43409__$1;
(statearr_43426_43442[(2)] = null);

(statearr_43426_43442[(1)] = (2));


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
});})(c__33555__auto___43432,out))
;
return ((function (switch__33467__auto__,c__33555__auto___43432,out){
return (function() {
var cljs$core$async$state_machine__33468__auto__ = null;
var cljs$core$async$state_machine__33468__auto____0 = (function (){
var statearr_43427 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43427[(0)] = cljs$core$async$state_machine__33468__auto__);

(statearr_43427[(1)] = (1));

return statearr_43427;
});
var cljs$core$async$state_machine__33468__auto____1 = (function (state_43409){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_43409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e43428){if((e43428 instanceof Object)){
var ex__33471__auto__ = e43428;
var statearr_43429_43443 = state_43409;
(statearr_43429_43443[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43444 = state_43409;
state_43409 = G__43444;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$state_machine__33468__auto__ = function(state_43409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33468__auto____1.call(this,state_43409);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33468__auto____0;
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33468__auto____1;
return cljs$core$async$state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___43432,out))
})();
var state__33557__auto__ = (function (){var statearr_43430 = f__33556__auto__.call(null);
(statearr_43430[(6)] = c__33555__auto___43432);

return statearr_43430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___43432,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43446 = arguments.length;
switch (G__43446) {
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
var c__33555__auto___43512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___43512,out){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___43512,out){
return (function (state_43484){
var state_val_43485 = (state_43484[(1)]);
if((state_val_43485 === (7))){
var inst_43480 = (state_43484[(2)]);
var state_43484__$1 = state_43484;
var statearr_43486_43513 = state_43484__$1;
(statearr_43486_43513[(2)] = inst_43480);

(statearr_43486_43513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (1))){
var inst_43447 = (new Array(n));
var inst_43448 = inst_43447;
var inst_43449 = (0);
var state_43484__$1 = (function (){var statearr_43487 = state_43484;
(statearr_43487[(7)] = inst_43448);

(statearr_43487[(8)] = inst_43449);

return statearr_43487;
})();
var statearr_43488_43514 = state_43484__$1;
(statearr_43488_43514[(2)] = null);

(statearr_43488_43514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (4))){
var inst_43452 = (state_43484[(9)]);
var inst_43452__$1 = (state_43484[(2)]);
var inst_43453 = (inst_43452__$1 == null);
var inst_43454 = cljs.core.not.call(null,inst_43453);
var state_43484__$1 = (function (){var statearr_43489 = state_43484;
(statearr_43489[(9)] = inst_43452__$1);

return statearr_43489;
})();
if(inst_43454){
var statearr_43490_43515 = state_43484__$1;
(statearr_43490_43515[(1)] = (5));

} else {
var statearr_43491_43516 = state_43484__$1;
(statearr_43491_43516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (15))){
var inst_43474 = (state_43484[(2)]);
var state_43484__$1 = state_43484;
var statearr_43492_43517 = state_43484__$1;
(statearr_43492_43517[(2)] = inst_43474);

(statearr_43492_43517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (13))){
var state_43484__$1 = state_43484;
var statearr_43493_43518 = state_43484__$1;
(statearr_43493_43518[(2)] = null);

(statearr_43493_43518[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (6))){
var inst_43449 = (state_43484[(8)]);
var inst_43470 = (inst_43449 > (0));
var state_43484__$1 = state_43484;
if(cljs.core.truth_(inst_43470)){
var statearr_43494_43519 = state_43484__$1;
(statearr_43494_43519[(1)] = (12));

} else {
var statearr_43495_43520 = state_43484__$1;
(statearr_43495_43520[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (3))){
var inst_43482 = (state_43484[(2)]);
var state_43484__$1 = state_43484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43484__$1,inst_43482);
} else {
if((state_val_43485 === (12))){
var inst_43448 = (state_43484[(7)]);
var inst_43472 = cljs.core.vec.call(null,inst_43448);
var state_43484__$1 = state_43484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43484__$1,(15),out,inst_43472);
} else {
if((state_val_43485 === (2))){
var state_43484__$1 = state_43484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43484__$1,(4),ch);
} else {
if((state_val_43485 === (11))){
var inst_43464 = (state_43484[(2)]);
var inst_43465 = (new Array(n));
var inst_43448 = inst_43465;
var inst_43449 = (0);
var state_43484__$1 = (function (){var statearr_43496 = state_43484;
(statearr_43496[(7)] = inst_43448);

(statearr_43496[(10)] = inst_43464);

(statearr_43496[(8)] = inst_43449);

return statearr_43496;
})();
var statearr_43497_43521 = state_43484__$1;
(statearr_43497_43521[(2)] = null);

(statearr_43497_43521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (9))){
var inst_43448 = (state_43484[(7)]);
var inst_43462 = cljs.core.vec.call(null,inst_43448);
var state_43484__$1 = state_43484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43484__$1,(11),out,inst_43462);
} else {
if((state_val_43485 === (5))){
var inst_43457 = (state_43484[(11)]);
var inst_43448 = (state_43484[(7)]);
var inst_43449 = (state_43484[(8)]);
var inst_43452 = (state_43484[(9)]);
var inst_43456 = (inst_43448[inst_43449] = inst_43452);
var inst_43457__$1 = (inst_43449 + (1));
var inst_43458 = (inst_43457__$1 < n);
var state_43484__$1 = (function (){var statearr_43498 = state_43484;
(statearr_43498[(11)] = inst_43457__$1);

(statearr_43498[(12)] = inst_43456);

return statearr_43498;
})();
if(cljs.core.truth_(inst_43458)){
var statearr_43499_43522 = state_43484__$1;
(statearr_43499_43522[(1)] = (8));

} else {
var statearr_43500_43523 = state_43484__$1;
(statearr_43500_43523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (14))){
var inst_43477 = (state_43484[(2)]);
var inst_43478 = cljs.core.async.close_BANG_.call(null,out);
var state_43484__$1 = (function (){var statearr_43502 = state_43484;
(statearr_43502[(13)] = inst_43477);

return statearr_43502;
})();
var statearr_43503_43524 = state_43484__$1;
(statearr_43503_43524[(2)] = inst_43478);

(statearr_43503_43524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (10))){
var inst_43468 = (state_43484[(2)]);
var state_43484__$1 = state_43484;
var statearr_43504_43525 = state_43484__$1;
(statearr_43504_43525[(2)] = inst_43468);

(statearr_43504_43525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43485 === (8))){
var inst_43457 = (state_43484[(11)]);
var inst_43448 = (state_43484[(7)]);
var tmp43501 = inst_43448;
var inst_43448__$1 = tmp43501;
var inst_43449 = inst_43457;
var state_43484__$1 = (function (){var statearr_43505 = state_43484;
(statearr_43505[(7)] = inst_43448__$1);

(statearr_43505[(8)] = inst_43449);

return statearr_43505;
})();
var statearr_43506_43526 = state_43484__$1;
(statearr_43506_43526[(2)] = null);

(statearr_43506_43526[(1)] = (2));


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
});})(c__33555__auto___43512,out))
;
return ((function (switch__33467__auto__,c__33555__auto___43512,out){
return (function() {
var cljs$core$async$state_machine__33468__auto__ = null;
var cljs$core$async$state_machine__33468__auto____0 = (function (){
var statearr_43507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43507[(0)] = cljs$core$async$state_machine__33468__auto__);

(statearr_43507[(1)] = (1));

return statearr_43507;
});
var cljs$core$async$state_machine__33468__auto____1 = (function (state_43484){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_43484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e43508){if((e43508 instanceof Object)){
var ex__33471__auto__ = e43508;
var statearr_43509_43527 = state_43484;
(statearr_43509_43527[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43528 = state_43484;
state_43484 = G__43528;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$state_machine__33468__auto__ = function(state_43484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33468__auto____1.call(this,state_43484);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33468__auto____0;
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33468__auto____1;
return cljs$core$async$state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___43512,out))
})();
var state__33557__auto__ = (function (){var statearr_43510 = f__33556__auto__.call(null);
(statearr_43510[(6)] = c__33555__auto___43512);

return statearr_43510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___43512,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43530 = arguments.length;
switch (G__43530) {
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
var c__33555__auto___43600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33555__auto___43600,out){
return (function (){
var f__33556__auto__ = (function (){var switch__33467__auto__ = ((function (c__33555__auto___43600,out){
return (function (state_43572){
var state_val_43573 = (state_43572[(1)]);
if((state_val_43573 === (7))){
var inst_43568 = (state_43572[(2)]);
var state_43572__$1 = state_43572;
var statearr_43574_43601 = state_43572__$1;
(statearr_43574_43601[(2)] = inst_43568);

(statearr_43574_43601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43573 === (1))){
var inst_43531 = [];
var inst_43532 = inst_43531;
var inst_43533 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43572__$1 = (function (){var statearr_43575 = state_43572;
(statearr_43575[(7)] = inst_43532);

(statearr_43575[(8)] = inst_43533);

return statearr_43575;
})();
var statearr_43576_43602 = state_43572__$1;
(statearr_43576_43602[(2)] = null);

(statearr_43576_43602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43573 === (4))){
var inst_43536 = (state_43572[(9)]);
var inst_43536__$1 = (state_43572[(2)]);
var inst_43537 = (inst_43536__$1 == null);
var inst_43538 = cljs.core.not.call(null,inst_43537);
var state_43572__$1 = (function (){var statearr_43577 = state_43572;
(statearr_43577[(9)] = inst_43536__$1);

return statearr_43577;
})();
if(inst_43538){
var statearr_43578_43603 = state_43572__$1;
(statearr_43578_43603[(1)] = (5));

} else {
var statearr_43579_43604 = state_43572__$1;
(statearr_43579_43604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43573 === (15))){
var inst_43562 = (state_43572[(2)]);
var state_43572__$1 = state_43572;
var statearr_43580_43605 = state_43572__$1;
(statearr_43580_43605[(2)] = inst_43562);

(statearr_43580_43605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43573 === (13))){
var state_43572__$1 = state_43572;
var statearr_43581_43606 = state_43572__$1;
(statearr_43581_43606[(2)] = null);

(statearr_43581_43606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43573 === (6))){
var inst_43532 = (state_43572[(7)]);
var inst_43557 = inst_43532.length;
var inst_43558 = (inst_43557 > (0));
var state_43572__$1 = state_43572;
if(cljs.core.truth_(inst_43558)){
var statearr_43582_43607 = state_43572__$1;
(statearr_43582_43607[(1)] = (12));

} else {
var statearr_43583_43608 = state_43572__$1;
(statearr_43583_43608[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43573 === (3))){
var inst_43570 = (state_43572[(2)]);
var state_43572__$1 = state_43572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43572__$1,inst_43570);
} else {
if((state_val_43573 === (12))){
var inst_43532 = (state_43572[(7)]);
var inst_43560 = cljs.core.vec.call(null,inst_43532);
var state_43572__$1 = state_43572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43572__$1,(15),out,inst_43560);
} else {
if((state_val_43573 === (2))){
var state_43572__$1 = state_43572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43572__$1,(4),ch);
} else {
if((state_val_43573 === (11))){
var inst_43536 = (state_43572[(9)]);
var inst_43540 = (state_43572[(10)]);
var inst_43550 = (state_43572[(2)]);
var inst_43551 = [];
var inst_43552 = inst_43551.push(inst_43536);
var inst_43532 = inst_43551;
var inst_43533 = inst_43540;
var state_43572__$1 = (function (){var statearr_43584 = state_43572;
(statearr_43584[(7)] = inst_43532);

(statearr_43584[(11)] = inst_43550);

(statearr_43584[(12)] = inst_43552);

(statearr_43584[(8)] = inst_43533);

return statearr_43584;
})();
var statearr_43585_43609 = state_43572__$1;
(statearr_43585_43609[(2)] = null);

(statearr_43585_43609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43573 === (9))){
var inst_43532 = (state_43572[(7)]);
var inst_43548 = cljs.core.vec.call(null,inst_43532);
var state_43572__$1 = state_43572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43572__$1,(11),out,inst_43548);
} else {
if((state_val_43573 === (5))){
var inst_43536 = (state_43572[(9)]);
var inst_43540 = (state_43572[(10)]);
var inst_43533 = (state_43572[(8)]);
var inst_43540__$1 = f.call(null,inst_43536);
var inst_43541 = cljs.core._EQ_.call(null,inst_43540__$1,inst_43533);
var inst_43542 = cljs.core.keyword_identical_QMARK_.call(null,inst_43533,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43543 = (inst_43541) || (inst_43542);
var state_43572__$1 = (function (){var statearr_43586 = state_43572;
(statearr_43586[(10)] = inst_43540__$1);

return statearr_43586;
})();
if(cljs.core.truth_(inst_43543)){
var statearr_43587_43610 = state_43572__$1;
(statearr_43587_43610[(1)] = (8));

} else {
var statearr_43588_43611 = state_43572__$1;
(statearr_43588_43611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43573 === (14))){
var inst_43565 = (state_43572[(2)]);
var inst_43566 = cljs.core.async.close_BANG_.call(null,out);
var state_43572__$1 = (function (){var statearr_43590 = state_43572;
(statearr_43590[(13)] = inst_43565);

return statearr_43590;
})();
var statearr_43591_43612 = state_43572__$1;
(statearr_43591_43612[(2)] = inst_43566);

(statearr_43591_43612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43573 === (10))){
var inst_43555 = (state_43572[(2)]);
var state_43572__$1 = state_43572;
var statearr_43592_43613 = state_43572__$1;
(statearr_43592_43613[(2)] = inst_43555);

(statearr_43592_43613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43573 === (8))){
var inst_43532 = (state_43572[(7)]);
var inst_43536 = (state_43572[(9)]);
var inst_43540 = (state_43572[(10)]);
var inst_43545 = inst_43532.push(inst_43536);
var tmp43589 = inst_43532;
var inst_43532__$1 = tmp43589;
var inst_43533 = inst_43540;
var state_43572__$1 = (function (){var statearr_43593 = state_43572;
(statearr_43593[(7)] = inst_43532__$1);

(statearr_43593[(8)] = inst_43533);

(statearr_43593[(14)] = inst_43545);

return statearr_43593;
})();
var statearr_43594_43614 = state_43572__$1;
(statearr_43594_43614[(2)] = null);

(statearr_43594_43614[(1)] = (2));


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
});})(c__33555__auto___43600,out))
;
return ((function (switch__33467__auto__,c__33555__auto___43600,out){
return (function() {
var cljs$core$async$state_machine__33468__auto__ = null;
var cljs$core$async$state_machine__33468__auto____0 = (function (){
var statearr_43595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43595[(0)] = cljs$core$async$state_machine__33468__auto__);

(statearr_43595[(1)] = (1));

return statearr_43595;
});
var cljs$core$async$state_machine__33468__auto____1 = (function (state_43572){
while(true){
var ret_value__33469__auto__ = (function (){try{while(true){
var result__33470__auto__ = switch__33467__auto__.call(null,state_43572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33470__auto__;
}
break;
}
}catch (e43596){if((e43596 instanceof Object)){
var ex__33471__auto__ = e43596;
var statearr_43597_43615 = state_43572;
(statearr_43597_43615[(5)] = ex__33471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43616 = state_43572;
state_43572 = G__43616;
continue;
} else {
return ret_value__33469__auto__;
}
break;
}
});
cljs$core$async$state_machine__33468__auto__ = function(state_43572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33468__auto____1.call(this,state_43572);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33468__auto____0;
cljs$core$async$state_machine__33468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33468__auto____1;
return cljs$core$async$state_machine__33468__auto__;
})()
;})(switch__33467__auto__,c__33555__auto___43600,out))
})();
var state__33557__auto__ = (function (){var statearr_43598 = f__33556__auto__.call(null);
(statearr_43598[(6)] = c__33555__auto___43600);

return statearr_43598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33557__auto__);
});})(c__33555__auto___43600,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1513190815707
