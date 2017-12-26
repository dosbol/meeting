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
var G__37846 = arguments.length;
switch (G__37846) {
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
if(typeof cljs.core.async.t_cljs$core$async37847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37847 = (function (f,blockable,meta37848){
this.f = f;
this.blockable = blockable;
this.meta37848 = meta37848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37849,meta37848__$1){
var self__ = this;
var _37849__$1 = this;
return (new cljs.core.async.t_cljs$core$async37847(self__.f,self__.blockable,meta37848__$1));
});

cljs.core.async.t_cljs$core$async37847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37849){
var self__ = this;
var _37849__$1 = this;
return self__.meta37848;
});

cljs.core.async.t_cljs$core$async37847.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37847.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37848","meta37848",-1159030886,null)], null);
});

cljs.core.async.t_cljs$core$async37847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37847";

cljs.core.async.t_cljs$core$async37847.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async37847");
});

cljs.core.async.__GT_t_cljs$core$async37847 = (function cljs$core$async$__GT_t_cljs$core$async37847(f__$1,blockable__$1,meta37848){
return (new cljs.core.async.t_cljs$core$async37847(f__$1,blockable__$1,meta37848));
});

}

return (new cljs.core.async.t_cljs$core$async37847(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37853 = arguments.length;
switch (G__37853) {
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
var G__37856 = arguments.length;
switch (G__37856) {
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
var G__37859 = arguments.length;
switch (G__37859) {
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
var val_37861 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37861);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37861,ret){
return (function (){
return fn1.call(null,val_37861);
});})(val_37861,ret))
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
var G__37863 = arguments.length;
switch (G__37863) {
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
var n__28140__auto___37865 = n;
var x_37866 = (0);
while(true){
if((x_37866 < n__28140__auto___37865)){
(a[x_37866] = (0));

var G__37867 = (x_37866 + (1));
x_37866 = G__37867;
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

var G__37868 = (i + (1));
i = G__37868;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37869 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37869 = (function (flag,meta37870){
this.flag = flag;
this.meta37870 = meta37870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37871,meta37870__$1){
var self__ = this;
var _37871__$1 = this;
return (new cljs.core.async.t_cljs$core$async37869(self__.flag,meta37870__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37871){
var self__ = this;
var _37871__$1 = this;
return self__.meta37870;
});})(flag))
;

cljs.core.async.t_cljs$core$async37869.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37869.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37870","meta37870",1226438627,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37869";

cljs.core.async.t_cljs$core$async37869.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async37869");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37869 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37869(flag__$1,meta37870){
return (new cljs.core.async.t_cljs$core$async37869(flag__$1,meta37870));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37869(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37872 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37872 = (function (flag,cb,meta37873){
this.flag = flag;
this.cb = cb;
this.meta37873 = meta37873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37874,meta37873__$1){
var self__ = this;
var _37874__$1 = this;
return (new cljs.core.async.t_cljs$core$async37872(self__.flag,self__.cb,meta37873__$1));
});

cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37874){
var self__ = this;
var _37874__$1 = this;
return self__.meta37873;
});

cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37873","meta37873",1239507985,null)], null);
});

cljs.core.async.t_cljs$core$async37872.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37872";

cljs.core.async.t_cljs$core$async37872.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async37872");
});

cljs.core.async.__GT_t_cljs$core$async37872 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37872(flag__$1,cb__$1,meta37873){
return (new cljs.core.async.t_cljs$core$async37872(flag__$1,cb__$1,meta37873));
});

}

return (new cljs.core.async.t_cljs$core$async37872(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37875_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37875_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37876_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37876_SHARP_,port], null));
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
var G__37877 = (i + (1));
i = G__37877;
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
var len__28364__auto___37883 = arguments.length;
var i__28365__auto___37884 = (0);
while(true){
if((i__28365__auto___37884 < len__28364__auto___37883)){
args__28371__auto__.push((arguments[i__28365__auto___37884]));

var G__37885 = (i__28365__auto___37884 + (1));
i__28365__auto___37884 = G__37885;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37880){
var map__37881 = p__37880;
var map__37881__$1 = ((((!((map__37881 == null)))?((((map__37881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37881):map__37881);
var opts = map__37881__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37878){
var G__37879 = cljs.core.first.call(null,seq37878);
var seq37878__$1 = cljs.core.next.call(null,seq37878);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37879,seq37878__$1);
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
var G__37887 = arguments.length;
switch (G__37887) {
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
var c__29745__auto___37933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___37933){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___37933){
return (function (state_37911){
var state_val_37912 = (state_37911[(1)]);
if((state_val_37912 === (7))){
var inst_37907 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
var statearr_37913_37934 = state_37911__$1;
(statearr_37913_37934[(2)] = inst_37907);

(statearr_37913_37934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (1))){
var state_37911__$1 = state_37911;
var statearr_37914_37935 = state_37911__$1;
(statearr_37914_37935[(2)] = null);

(statearr_37914_37935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (4))){
var inst_37890 = (state_37911[(7)]);
var inst_37890__$1 = (state_37911[(2)]);
var inst_37891 = (inst_37890__$1 == null);
var state_37911__$1 = (function (){var statearr_37915 = state_37911;
(statearr_37915[(7)] = inst_37890__$1);

return statearr_37915;
})();
if(cljs.core.truth_(inst_37891)){
var statearr_37916_37936 = state_37911__$1;
(statearr_37916_37936[(1)] = (5));

} else {
var statearr_37917_37937 = state_37911__$1;
(statearr_37917_37937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (13))){
var state_37911__$1 = state_37911;
var statearr_37918_37938 = state_37911__$1;
(statearr_37918_37938[(2)] = null);

(statearr_37918_37938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (6))){
var inst_37890 = (state_37911[(7)]);
var state_37911__$1 = state_37911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37911__$1,(11),to,inst_37890);
} else {
if((state_val_37912 === (3))){
var inst_37909 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37911__$1,inst_37909);
} else {
if((state_val_37912 === (12))){
var state_37911__$1 = state_37911;
var statearr_37919_37939 = state_37911__$1;
(statearr_37919_37939[(2)] = null);

(statearr_37919_37939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (2))){
var state_37911__$1 = state_37911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37911__$1,(4),from);
} else {
if((state_val_37912 === (11))){
var inst_37900 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
if(cljs.core.truth_(inst_37900)){
var statearr_37920_37940 = state_37911__$1;
(statearr_37920_37940[(1)] = (12));

} else {
var statearr_37921_37941 = state_37911__$1;
(statearr_37921_37941[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (9))){
var state_37911__$1 = state_37911;
var statearr_37922_37942 = state_37911__$1;
(statearr_37922_37942[(2)] = null);

(statearr_37922_37942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (5))){
var state_37911__$1 = state_37911;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37923_37943 = state_37911__$1;
(statearr_37923_37943[(1)] = (8));

} else {
var statearr_37924_37944 = state_37911__$1;
(statearr_37924_37944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (14))){
var inst_37905 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
var statearr_37925_37945 = state_37911__$1;
(statearr_37925_37945[(2)] = inst_37905);

(statearr_37925_37945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (10))){
var inst_37897 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
var statearr_37926_37946 = state_37911__$1;
(statearr_37926_37946[(2)] = inst_37897);

(statearr_37926_37946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (8))){
var inst_37894 = cljs.core.async.close_BANG_.call(null,to);
var state_37911__$1 = state_37911;
var statearr_37927_37947 = state_37911__$1;
(statearr_37927_37947[(2)] = inst_37894);

(statearr_37927_37947[(1)] = (10));


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
});})(c__29745__auto___37933))
;
return ((function (switch__29657__auto__,c__29745__auto___37933){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_37928 = [null,null,null,null,null,null,null,null];
(statearr_37928[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_37928[(1)] = (1));

return statearr_37928;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_37911){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_37911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e37929){if((e37929 instanceof Object)){
var ex__29661__auto__ = e37929;
var statearr_37930_37948 = state_37911;
(statearr_37930_37948[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37949 = state_37911;
state_37911 = G__37949;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_37911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_37911);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___37933))
})();
var state__29747__auto__ = (function (){var statearr_37931 = f__29746__auto__.call(null);
(statearr_37931[(6)] = c__29745__auto___37933);

return statearr_37931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___37933))
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
return (function (p__37950){
var vec__37951 = p__37950;
var v = cljs.core.nth.call(null,vec__37951,(0),null);
var p = cljs.core.nth.call(null,vec__37951,(1),null);
var job = vec__37951;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29745__auto___38122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___38122,res,vec__37951,v,p,job,jobs,results){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___38122,res,vec__37951,v,p,job,jobs,results){
return (function (state_37958){
var state_val_37959 = (state_37958[(1)]);
if((state_val_37959 === (1))){
var state_37958__$1 = state_37958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37958__$1,(2),res,v);
} else {
if((state_val_37959 === (2))){
var inst_37955 = (state_37958[(2)]);
var inst_37956 = cljs.core.async.close_BANG_.call(null,res);
var state_37958__$1 = (function (){var statearr_37960 = state_37958;
(statearr_37960[(7)] = inst_37955);

return statearr_37960;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37958__$1,inst_37956);
} else {
return null;
}
}
});})(c__29745__auto___38122,res,vec__37951,v,p,job,jobs,results))
;
return ((function (switch__29657__auto__,c__29745__auto___38122,res,vec__37951,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0 = (function (){
var statearr_37961 = [null,null,null,null,null,null,null,null];
(statearr_37961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__);

(statearr_37961[(1)] = (1));

return statearr_37961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1 = (function (state_37958){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_37958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e37962){if((e37962 instanceof Object)){
var ex__29661__auto__ = e37962;
var statearr_37963_38123 = state_37958;
(statearr_37963_38123[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38124 = state_37958;
state_37958 = G__38124;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = function(state_37958){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1.call(this,state_37958);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___38122,res,vec__37951,v,p,job,jobs,results))
})();
var state__29747__auto__ = (function (){var statearr_37964 = f__29746__auto__.call(null);
(statearr_37964[(6)] = c__29745__auto___38122);

return statearr_37964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___38122,res,vec__37951,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37965){
var vec__37966 = p__37965;
var v = cljs.core.nth.call(null,vec__37966,(0),null);
var p = cljs.core.nth.call(null,vec__37966,(1),null);
var job = vec__37966;
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
var n__28140__auto___38125 = n;
var __38126 = (0);
while(true){
if((__38126 < n__28140__auto___38125)){
var G__37969_38127 = type;
var G__37969_38128__$1 = (((G__37969_38127 instanceof cljs.core.Keyword))?G__37969_38127.fqn:null);
switch (G__37969_38128__$1) {
case "compute":
var c__29745__auto___38130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38126,c__29745__auto___38130,G__37969_38127,G__37969_38128__$1,n__28140__auto___38125,jobs,results,process,async){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (__38126,c__29745__auto___38130,G__37969_38127,G__37969_38128__$1,n__28140__auto___38125,jobs,results,process,async){
return (function (state_37982){
var state_val_37983 = (state_37982[(1)]);
if((state_val_37983 === (1))){
var state_37982__$1 = state_37982;
var statearr_37984_38131 = state_37982__$1;
(statearr_37984_38131[(2)] = null);

(statearr_37984_38131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37983 === (2))){
var state_37982__$1 = state_37982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37982__$1,(4),jobs);
} else {
if((state_val_37983 === (3))){
var inst_37980 = (state_37982[(2)]);
var state_37982__$1 = state_37982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37982__$1,inst_37980);
} else {
if((state_val_37983 === (4))){
var inst_37972 = (state_37982[(2)]);
var inst_37973 = process.call(null,inst_37972);
var state_37982__$1 = state_37982;
if(cljs.core.truth_(inst_37973)){
var statearr_37985_38132 = state_37982__$1;
(statearr_37985_38132[(1)] = (5));

} else {
var statearr_37986_38133 = state_37982__$1;
(statearr_37986_38133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37983 === (5))){
var state_37982__$1 = state_37982;
var statearr_37987_38134 = state_37982__$1;
(statearr_37987_38134[(2)] = null);

(statearr_37987_38134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37983 === (6))){
var state_37982__$1 = state_37982;
var statearr_37988_38135 = state_37982__$1;
(statearr_37988_38135[(2)] = null);

(statearr_37988_38135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37983 === (7))){
var inst_37978 = (state_37982[(2)]);
var state_37982__$1 = state_37982;
var statearr_37989_38136 = state_37982__$1;
(statearr_37989_38136[(2)] = inst_37978);

(statearr_37989_38136[(1)] = (3));


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
});})(__38126,c__29745__auto___38130,G__37969_38127,G__37969_38128__$1,n__28140__auto___38125,jobs,results,process,async))
;
return ((function (__38126,switch__29657__auto__,c__29745__auto___38130,G__37969_38127,G__37969_38128__$1,n__28140__auto___38125,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0 = (function (){
var statearr_37990 = [null,null,null,null,null,null,null];
(statearr_37990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__);

(statearr_37990[(1)] = (1));

return statearr_37990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1 = (function (state_37982){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_37982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e37991){if((e37991 instanceof Object)){
var ex__29661__auto__ = e37991;
var statearr_37992_38137 = state_37982;
(statearr_37992_38137[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38138 = state_37982;
state_37982 = G__38138;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = function(state_37982){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1.call(this,state_37982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__;
})()
;})(__38126,switch__29657__auto__,c__29745__auto___38130,G__37969_38127,G__37969_38128__$1,n__28140__auto___38125,jobs,results,process,async))
})();
var state__29747__auto__ = (function (){var statearr_37993 = f__29746__auto__.call(null);
(statearr_37993[(6)] = c__29745__auto___38130);

return statearr_37993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(__38126,c__29745__auto___38130,G__37969_38127,G__37969_38128__$1,n__28140__auto___38125,jobs,results,process,async))
);


break;
case "async":
var c__29745__auto___38139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38126,c__29745__auto___38139,G__37969_38127,G__37969_38128__$1,n__28140__auto___38125,jobs,results,process,async){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (__38126,c__29745__auto___38139,G__37969_38127,G__37969_38128__$1,n__28140__auto___38125,jobs,results,process,async){
return (function (state_38006){
var state_val_38007 = (state_38006[(1)]);
if((state_val_38007 === (1))){
var state_38006__$1 = state_38006;
var statearr_38008_38140 = state_38006__$1;
(statearr_38008_38140[(2)] = null);

(statearr_38008_38140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (2))){
var state_38006__$1 = state_38006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38006__$1,(4),jobs);
} else {
if((state_val_38007 === (3))){
var inst_38004 = (state_38006[(2)]);
var state_38006__$1 = state_38006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38006__$1,inst_38004);
} else {
if((state_val_38007 === (4))){
var inst_37996 = (state_38006[(2)]);
var inst_37997 = async.call(null,inst_37996);
var state_38006__$1 = state_38006;
if(cljs.core.truth_(inst_37997)){
var statearr_38009_38141 = state_38006__$1;
(statearr_38009_38141[(1)] = (5));

} else {
var statearr_38010_38142 = state_38006__$1;
(statearr_38010_38142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (5))){
var state_38006__$1 = state_38006;
var statearr_38011_38143 = state_38006__$1;
(statearr_38011_38143[(2)] = null);

(statearr_38011_38143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (6))){
var state_38006__$1 = state_38006;
var statearr_38012_38144 = state_38006__$1;
(statearr_38012_38144[(2)] = null);

(statearr_38012_38144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38007 === (7))){
var inst_38002 = (state_38006[(2)]);
var state_38006__$1 = state_38006;
var statearr_38013_38145 = state_38006__$1;
(statearr_38013_38145[(2)] = inst_38002);

(statearr_38013_38145[(1)] = (3));


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
});})(__38126,c__29745__auto___38139,G__37969_38127,G__37969_38128__$1,n__28140__auto___38125,jobs,results,process,async))
;
return ((function (__38126,switch__29657__auto__,c__29745__auto___38139,G__37969_38127,G__37969_38128__$1,n__28140__auto___38125,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0 = (function (){
var statearr_38014 = [null,null,null,null,null,null,null];
(statearr_38014[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__);

(statearr_38014[(1)] = (1));

return statearr_38014;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1 = (function (state_38006){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e38015){if((e38015 instanceof Object)){
var ex__29661__auto__ = e38015;
var statearr_38016_38146 = state_38006;
(statearr_38016_38146[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38147 = state_38006;
state_38006 = G__38147;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = function(state_38006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1.call(this,state_38006);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__;
})()
;})(__38126,switch__29657__auto__,c__29745__auto___38139,G__37969_38127,G__37969_38128__$1,n__28140__auto___38125,jobs,results,process,async))
})();
var state__29747__auto__ = (function (){var statearr_38017 = f__29746__auto__.call(null);
(statearr_38017[(6)] = c__29745__auto___38139);

return statearr_38017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(__38126,c__29745__auto___38139,G__37969_38127,G__37969_38128__$1,n__28140__auto___38125,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37969_38128__$1)].join('')));

}

var G__38148 = (__38126 + (1));
__38126 = G__38148;
continue;
} else {
}
break;
}

var c__29745__auto___38149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___38149,jobs,results,process,async){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___38149,jobs,results,process,async){
return (function (state_38039){
var state_val_38040 = (state_38039[(1)]);
if((state_val_38040 === (1))){
var state_38039__$1 = state_38039;
var statearr_38041_38150 = state_38039__$1;
(statearr_38041_38150[(2)] = null);

(statearr_38041_38150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (2))){
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38039__$1,(4),from);
} else {
if((state_val_38040 === (3))){
var inst_38037 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38039__$1,inst_38037);
} else {
if((state_val_38040 === (4))){
var inst_38020 = (state_38039[(7)]);
var inst_38020__$1 = (state_38039[(2)]);
var inst_38021 = (inst_38020__$1 == null);
var state_38039__$1 = (function (){var statearr_38042 = state_38039;
(statearr_38042[(7)] = inst_38020__$1);

return statearr_38042;
})();
if(cljs.core.truth_(inst_38021)){
var statearr_38043_38151 = state_38039__$1;
(statearr_38043_38151[(1)] = (5));

} else {
var statearr_38044_38152 = state_38039__$1;
(statearr_38044_38152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (5))){
var inst_38023 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38039__$1 = state_38039;
var statearr_38045_38153 = state_38039__$1;
(statearr_38045_38153[(2)] = inst_38023);

(statearr_38045_38153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (6))){
var inst_38020 = (state_38039[(7)]);
var inst_38025 = (state_38039[(8)]);
var inst_38025__$1 = cljs.core.async.chan.call(null,(1));
var inst_38026 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38027 = [inst_38020,inst_38025__$1];
var inst_38028 = (new cljs.core.PersistentVector(null,2,(5),inst_38026,inst_38027,null));
var state_38039__$1 = (function (){var statearr_38046 = state_38039;
(statearr_38046[(8)] = inst_38025__$1);

return statearr_38046;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38039__$1,(8),jobs,inst_38028);
} else {
if((state_val_38040 === (7))){
var inst_38035 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38047_38154 = state_38039__$1;
(statearr_38047_38154[(2)] = inst_38035);

(statearr_38047_38154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (8))){
var inst_38025 = (state_38039[(8)]);
var inst_38030 = (state_38039[(2)]);
var state_38039__$1 = (function (){var statearr_38048 = state_38039;
(statearr_38048[(9)] = inst_38030);

return statearr_38048;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38039__$1,(9),results,inst_38025);
} else {
if((state_val_38040 === (9))){
var inst_38032 = (state_38039[(2)]);
var state_38039__$1 = (function (){var statearr_38049 = state_38039;
(statearr_38049[(10)] = inst_38032);

return statearr_38049;
})();
var statearr_38050_38155 = state_38039__$1;
(statearr_38050_38155[(2)] = null);

(statearr_38050_38155[(1)] = (2));


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
});})(c__29745__auto___38149,jobs,results,process,async))
;
return ((function (switch__29657__auto__,c__29745__auto___38149,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0 = (function (){
var statearr_38051 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__);

(statearr_38051[(1)] = (1));

return statearr_38051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1 = (function (state_38039){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e38052){if((e38052 instanceof Object)){
var ex__29661__auto__ = e38052;
var statearr_38053_38156 = state_38039;
(statearr_38053_38156[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38157 = state_38039;
state_38039 = G__38157;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = function(state_38039){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1.call(this,state_38039);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___38149,jobs,results,process,async))
})();
var state__29747__auto__ = (function (){var statearr_38054 = f__29746__auto__.call(null);
(statearr_38054[(6)] = c__29745__auto___38149);

return statearr_38054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___38149,jobs,results,process,async))
);


var c__29745__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto__,jobs,results,process,async){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto__,jobs,results,process,async){
return (function (state_38092){
var state_val_38093 = (state_38092[(1)]);
if((state_val_38093 === (7))){
var inst_38088 = (state_38092[(2)]);
var state_38092__$1 = state_38092;
var statearr_38094_38158 = state_38092__$1;
(statearr_38094_38158[(2)] = inst_38088);

(statearr_38094_38158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (20))){
var state_38092__$1 = state_38092;
var statearr_38095_38159 = state_38092__$1;
(statearr_38095_38159[(2)] = null);

(statearr_38095_38159[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (1))){
var state_38092__$1 = state_38092;
var statearr_38096_38160 = state_38092__$1;
(statearr_38096_38160[(2)] = null);

(statearr_38096_38160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (4))){
var inst_38057 = (state_38092[(7)]);
var inst_38057__$1 = (state_38092[(2)]);
var inst_38058 = (inst_38057__$1 == null);
var state_38092__$1 = (function (){var statearr_38097 = state_38092;
(statearr_38097[(7)] = inst_38057__$1);

return statearr_38097;
})();
if(cljs.core.truth_(inst_38058)){
var statearr_38098_38161 = state_38092__$1;
(statearr_38098_38161[(1)] = (5));

} else {
var statearr_38099_38162 = state_38092__$1;
(statearr_38099_38162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (15))){
var inst_38070 = (state_38092[(8)]);
var state_38092__$1 = state_38092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38092__$1,(18),to,inst_38070);
} else {
if((state_val_38093 === (21))){
var inst_38083 = (state_38092[(2)]);
var state_38092__$1 = state_38092;
var statearr_38100_38163 = state_38092__$1;
(statearr_38100_38163[(2)] = inst_38083);

(statearr_38100_38163[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (13))){
var inst_38085 = (state_38092[(2)]);
var state_38092__$1 = (function (){var statearr_38101 = state_38092;
(statearr_38101[(9)] = inst_38085);

return statearr_38101;
})();
var statearr_38102_38164 = state_38092__$1;
(statearr_38102_38164[(2)] = null);

(statearr_38102_38164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (6))){
var inst_38057 = (state_38092[(7)]);
var state_38092__$1 = state_38092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38092__$1,(11),inst_38057);
} else {
if((state_val_38093 === (17))){
var inst_38078 = (state_38092[(2)]);
var state_38092__$1 = state_38092;
if(cljs.core.truth_(inst_38078)){
var statearr_38103_38165 = state_38092__$1;
(statearr_38103_38165[(1)] = (19));

} else {
var statearr_38104_38166 = state_38092__$1;
(statearr_38104_38166[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (3))){
var inst_38090 = (state_38092[(2)]);
var state_38092__$1 = state_38092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38092__$1,inst_38090);
} else {
if((state_val_38093 === (12))){
var inst_38067 = (state_38092[(10)]);
var state_38092__$1 = state_38092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38092__$1,(14),inst_38067);
} else {
if((state_val_38093 === (2))){
var state_38092__$1 = state_38092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38092__$1,(4),results);
} else {
if((state_val_38093 === (19))){
var state_38092__$1 = state_38092;
var statearr_38105_38167 = state_38092__$1;
(statearr_38105_38167[(2)] = null);

(statearr_38105_38167[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (11))){
var inst_38067 = (state_38092[(2)]);
var state_38092__$1 = (function (){var statearr_38106 = state_38092;
(statearr_38106[(10)] = inst_38067);

return statearr_38106;
})();
var statearr_38107_38168 = state_38092__$1;
(statearr_38107_38168[(2)] = null);

(statearr_38107_38168[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (9))){
var state_38092__$1 = state_38092;
var statearr_38108_38169 = state_38092__$1;
(statearr_38108_38169[(2)] = null);

(statearr_38108_38169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (5))){
var state_38092__$1 = state_38092;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38109_38170 = state_38092__$1;
(statearr_38109_38170[(1)] = (8));

} else {
var statearr_38110_38171 = state_38092__$1;
(statearr_38110_38171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (14))){
var inst_38072 = (state_38092[(11)]);
var inst_38070 = (state_38092[(8)]);
var inst_38070__$1 = (state_38092[(2)]);
var inst_38071 = (inst_38070__$1 == null);
var inst_38072__$1 = cljs.core.not.call(null,inst_38071);
var state_38092__$1 = (function (){var statearr_38111 = state_38092;
(statearr_38111[(11)] = inst_38072__$1);

(statearr_38111[(8)] = inst_38070__$1);

return statearr_38111;
})();
if(inst_38072__$1){
var statearr_38112_38172 = state_38092__$1;
(statearr_38112_38172[(1)] = (15));

} else {
var statearr_38113_38173 = state_38092__$1;
(statearr_38113_38173[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (16))){
var inst_38072 = (state_38092[(11)]);
var state_38092__$1 = state_38092;
var statearr_38114_38174 = state_38092__$1;
(statearr_38114_38174[(2)] = inst_38072);

(statearr_38114_38174[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (10))){
var inst_38064 = (state_38092[(2)]);
var state_38092__$1 = state_38092;
var statearr_38115_38175 = state_38092__$1;
(statearr_38115_38175[(2)] = inst_38064);

(statearr_38115_38175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (18))){
var inst_38075 = (state_38092[(2)]);
var state_38092__$1 = state_38092;
var statearr_38116_38176 = state_38092__$1;
(statearr_38116_38176[(2)] = inst_38075);

(statearr_38116_38176[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38093 === (8))){
var inst_38061 = cljs.core.async.close_BANG_.call(null,to);
var state_38092__$1 = state_38092;
var statearr_38117_38177 = state_38092__$1;
(statearr_38117_38177[(2)] = inst_38061);

(statearr_38117_38177[(1)] = (10));


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
var statearr_38118 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38118[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__);

(statearr_38118[(1)] = (1));

return statearr_38118;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1 = (function (state_38092){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e38119){if((e38119 instanceof Object)){
var ex__29661__auto__ = e38119;
var statearr_38120_38178 = state_38092;
(statearr_38120_38178[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38179 = state_38092;
state_38092 = G__38179;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__ = function(state_38092){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1.call(this,state_38092);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto__,jobs,results,process,async))
})();
var state__29747__auto__ = (function (){var statearr_38121 = f__29746__auto__.call(null);
(statearr_38121[(6)] = c__29745__auto__);

return statearr_38121;
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
var G__38181 = arguments.length;
switch (G__38181) {
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
var G__38184 = arguments.length;
switch (G__38184) {
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
var G__38187 = arguments.length;
switch (G__38187) {
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
var c__29745__auto___38236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___38236,tc,fc){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___38236,tc,fc){
return (function (state_38213){
var state_val_38214 = (state_38213[(1)]);
if((state_val_38214 === (7))){
var inst_38209 = (state_38213[(2)]);
var state_38213__$1 = state_38213;
var statearr_38215_38237 = state_38213__$1;
(statearr_38215_38237[(2)] = inst_38209);

(statearr_38215_38237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (1))){
var state_38213__$1 = state_38213;
var statearr_38216_38238 = state_38213__$1;
(statearr_38216_38238[(2)] = null);

(statearr_38216_38238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (4))){
var inst_38190 = (state_38213[(7)]);
var inst_38190__$1 = (state_38213[(2)]);
var inst_38191 = (inst_38190__$1 == null);
var state_38213__$1 = (function (){var statearr_38217 = state_38213;
(statearr_38217[(7)] = inst_38190__$1);

return statearr_38217;
})();
if(cljs.core.truth_(inst_38191)){
var statearr_38218_38239 = state_38213__$1;
(statearr_38218_38239[(1)] = (5));

} else {
var statearr_38219_38240 = state_38213__$1;
(statearr_38219_38240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (13))){
var state_38213__$1 = state_38213;
var statearr_38220_38241 = state_38213__$1;
(statearr_38220_38241[(2)] = null);

(statearr_38220_38241[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (6))){
var inst_38190 = (state_38213[(7)]);
var inst_38196 = p.call(null,inst_38190);
var state_38213__$1 = state_38213;
if(cljs.core.truth_(inst_38196)){
var statearr_38221_38242 = state_38213__$1;
(statearr_38221_38242[(1)] = (9));

} else {
var statearr_38222_38243 = state_38213__$1;
(statearr_38222_38243[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (3))){
var inst_38211 = (state_38213[(2)]);
var state_38213__$1 = state_38213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38213__$1,inst_38211);
} else {
if((state_val_38214 === (12))){
var state_38213__$1 = state_38213;
var statearr_38223_38244 = state_38213__$1;
(statearr_38223_38244[(2)] = null);

(statearr_38223_38244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (2))){
var state_38213__$1 = state_38213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38213__$1,(4),ch);
} else {
if((state_val_38214 === (11))){
var inst_38190 = (state_38213[(7)]);
var inst_38200 = (state_38213[(2)]);
var state_38213__$1 = state_38213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38213__$1,(8),inst_38200,inst_38190);
} else {
if((state_val_38214 === (9))){
var state_38213__$1 = state_38213;
var statearr_38224_38245 = state_38213__$1;
(statearr_38224_38245[(2)] = tc);

(statearr_38224_38245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (5))){
var inst_38193 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38194 = cljs.core.async.close_BANG_.call(null,fc);
var state_38213__$1 = (function (){var statearr_38225 = state_38213;
(statearr_38225[(8)] = inst_38193);

return statearr_38225;
})();
var statearr_38226_38246 = state_38213__$1;
(statearr_38226_38246[(2)] = inst_38194);

(statearr_38226_38246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (14))){
var inst_38207 = (state_38213[(2)]);
var state_38213__$1 = state_38213;
var statearr_38227_38247 = state_38213__$1;
(statearr_38227_38247[(2)] = inst_38207);

(statearr_38227_38247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (10))){
var state_38213__$1 = state_38213;
var statearr_38228_38248 = state_38213__$1;
(statearr_38228_38248[(2)] = fc);

(statearr_38228_38248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38214 === (8))){
var inst_38202 = (state_38213[(2)]);
var state_38213__$1 = state_38213;
if(cljs.core.truth_(inst_38202)){
var statearr_38229_38249 = state_38213__$1;
(statearr_38229_38249[(1)] = (12));

} else {
var statearr_38230_38250 = state_38213__$1;
(statearr_38230_38250[(1)] = (13));

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
});})(c__29745__auto___38236,tc,fc))
;
return ((function (switch__29657__auto__,c__29745__auto___38236,tc,fc){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_38231 = [null,null,null,null,null,null,null,null,null];
(statearr_38231[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_38231[(1)] = (1));

return statearr_38231;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_38213){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e38232){if((e38232 instanceof Object)){
var ex__29661__auto__ = e38232;
var statearr_38233_38251 = state_38213;
(statearr_38233_38251[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38252 = state_38213;
state_38213 = G__38252;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_38213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_38213);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___38236,tc,fc))
})();
var state__29747__auto__ = (function (){var statearr_38234 = f__29746__auto__.call(null);
(statearr_38234[(6)] = c__29745__auto___38236);

return statearr_38234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___38236,tc,fc))
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
return (function (state_38273){
var state_val_38274 = (state_38273[(1)]);
if((state_val_38274 === (7))){
var inst_38269 = (state_38273[(2)]);
var state_38273__$1 = state_38273;
var statearr_38275_38293 = state_38273__$1;
(statearr_38275_38293[(2)] = inst_38269);

(statearr_38275_38293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (1))){
var inst_38253 = init;
var state_38273__$1 = (function (){var statearr_38276 = state_38273;
(statearr_38276[(7)] = inst_38253);

return statearr_38276;
})();
var statearr_38277_38294 = state_38273__$1;
(statearr_38277_38294[(2)] = null);

(statearr_38277_38294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (4))){
var inst_38256 = (state_38273[(8)]);
var inst_38256__$1 = (state_38273[(2)]);
var inst_38257 = (inst_38256__$1 == null);
var state_38273__$1 = (function (){var statearr_38278 = state_38273;
(statearr_38278[(8)] = inst_38256__$1);

return statearr_38278;
})();
if(cljs.core.truth_(inst_38257)){
var statearr_38279_38295 = state_38273__$1;
(statearr_38279_38295[(1)] = (5));

} else {
var statearr_38280_38296 = state_38273__$1;
(statearr_38280_38296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (6))){
var inst_38260 = (state_38273[(9)]);
var inst_38256 = (state_38273[(8)]);
var inst_38253 = (state_38273[(7)]);
var inst_38260__$1 = f.call(null,inst_38253,inst_38256);
var inst_38261 = cljs.core.reduced_QMARK_.call(null,inst_38260__$1);
var state_38273__$1 = (function (){var statearr_38281 = state_38273;
(statearr_38281[(9)] = inst_38260__$1);

return statearr_38281;
})();
if(inst_38261){
var statearr_38282_38297 = state_38273__$1;
(statearr_38282_38297[(1)] = (8));

} else {
var statearr_38283_38298 = state_38273__$1;
(statearr_38283_38298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (3))){
var inst_38271 = (state_38273[(2)]);
var state_38273__$1 = state_38273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38273__$1,inst_38271);
} else {
if((state_val_38274 === (2))){
var state_38273__$1 = state_38273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38273__$1,(4),ch);
} else {
if((state_val_38274 === (9))){
var inst_38260 = (state_38273[(9)]);
var inst_38253 = inst_38260;
var state_38273__$1 = (function (){var statearr_38284 = state_38273;
(statearr_38284[(7)] = inst_38253);

return statearr_38284;
})();
var statearr_38285_38299 = state_38273__$1;
(statearr_38285_38299[(2)] = null);

(statearr_38285_38299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (5))){
var inst_38253 = (state_38273[(7)]);
var state_38273__$1 = state_38273;
var statearr_38286_38300 = state_38273__$1;
(statearr_38286_38300[(2)] = inst_38253);

(statearr_38286_38300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (10))){
var inst_38267 = (state_38273[(2)]);
var state_38273__$1 = state_38273;
var statearr_38287_38301 = state_38273__$1;
(statearr_38287_38301[(2)] = inst_38267);

(statearr_38287_38301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38274 === (8))){
var inst_38260 = (state_38273[(9)]);
var inst_38263 = cljs.core.deref.call(null,inst_38260);
var state_38273__$1 = state_38273;
var statearr_38288_38302 = state_38273__$1;
(statearr_38288_38302[(2)] = inst_38263);

(statearr_38288_38302[(1)] = (10));


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
var statearr_38289 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38289[(0)] = cljs$core$async$reduce_$_state_machine__29658__auto__);

(statearr_38289[(1)] = (1));

return statearr_38289;
});
var cljs$core$async$reduce_$_state_machine__29658__auto____1 = (function (state_38273){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e38290){if((e38290 instanceof Object)){
var ex__29661__auto__ = e38290;
var statearr_38291_38303 = state_38273;
(statearr_38291_38303[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38304 = state_38273;
state_38273 = G__38304;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29658__auto__ = function(state_38273){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29658__auto____1.call(this,state_38273);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29658__auto____0;
cljs$core$async$reduce_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29658__auto____1;
return cljs$core$async$reduce_$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto__))
})();
var state__29747__auto__ = (function (){var statearr_38292 = f__29746__auto__.call(null);
(statearr_38292[(6)] = c__29745__auto__);

return statearr_38292;
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
var G__38306 = arguments.length;
switch (G__38306) {
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
return (function (state_38331){
var state_val_38332 = (state_38331[(1)]);
if((state_val_38332 === (7))){
var inst_38313 = (state_38331[(2)]);
var state_38331__$1 = state_38331;
var statearr_38333_38354 = state_38331__$1;
(statearr_38333_38354[(2)] = inst_38313);

(statearr_38333_38354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38332 === (1))){
var inst_38307 = cljs.core.seq.call(null,coll);
var inst_38308 = inst_38307;
var state_38331__$1 = (function (){var statearr_38334 = state_38331;
(statearr_38334[(7)] = inst_38308);

return statearr_38334;
})();
var statearr_38335_38355 = state_38331__$1;
(statearr_38335_38355[(2)] = null);

(statearr_38335_38355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38332 === (4))){
var inst_38308 = (state_38331[(7)]);
var inst_38311 = cljs.core.first.call(null,inst_38308);
var state_38331__$1 = state_38331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38331__$1,(7),ch,inst_38311);
} else {
if((state_val_38332 === (13))){
var inst_38325 = (state_38331[(2)]);
var state_38331__$1 = state_38331;
var statearr_38336_38356 = state_38331__$1;
(statearr_38336_38356[(2)] = inst_38325);

(statearr_38336_38356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38332 === (6))){
var inst_38316 = (state_38331[(2)]);
var state_38331__$1 = state_38331;
if(cljs.core.truth_(inst_38316)){
var statearr_38337_38357 = state_38331__$1;
(statearr_38337_38357[(1)] = (8));

} else {
var statearr_38338_38358 = state_38331__$1;
(statearr_38338_38358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38332 === (3))){
var inst_38329 = (state_38331[(2)]);
var state_38331__$1 = state_38331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38331__$1,inst_38329);
} else {
if((state_val_38332 === (12))){
var state_38331__$1 = state_38331;
var statearr_38339_38359 = state_38331__$1;
(statearr_38339_38359[(2)] = null);

(statearr_38339_38359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38332 === (2))){
var inst_38308 = (state_38331[(7)]);
var state_38331__$1 = state_38331;
if(cljs.core.truth_(inst_38308)){
var statearr_38340_38360 = state_38331__$1;
(statearr_38340_38360[(1)] = (4));

} else {
var statearr_38341_38361 = state_38331__$1;
(statearr_38341_38361[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38332 === (11))){
var inst_38322 = cljs.core.async.close_BANG_.call(null,ch);
var state_38331__$1 = state_38331;
var statearr_38342_38362 = state_38331__$1;
(statearr_38342_38362[(2)] = inst_38322);

(statearr_38342_38362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38332 === (9))){
var state_38331__$1 = state_38331;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38343_38363 = state_38331__$1;
(statearr_38343_38363[(1)] = (11));

} else {
var statearr_38344_38364 = state_38331__$1;
(statearr_38344_38364[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38332 === (5))){
var inst_38308 = (state_38331[(7)]);
var state_38331__$1 = state_38331;
var statearr_38345_38365 = state_38331__$1;
(statearr_38345_38365[(2)] = inst_38308);

(statearr_38345_38365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38332 === (10))){
var inst_38327 = (state_38331[(2)]);
var state_38331__$1 = state_38331;
var statearr_38346_38366 = state_38331__$1;
(statearr_38346_38366[(2)] = inst_38327);

(statearr_38346_38366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38332 === (8))){
var inst_38308 = (state_38331[(7)]);
var inst_38318 = cljs.core.next.call(null,inst_38308);
var inst_38308__$1 = inst_38318;
var state_38331__$1 = (function (){var statearr_38347 = state_38331;
(statearr_38347[(7)] = inst_38308__$1);

return statearr_38347;
})();
var statearr_38348_38367 = state_38331__$1;
(statearr_38348_38367[(2)] = null);

(statearr_38348_38367[(1)] = (2));


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
var statearr_38349 = [null,null,null,null,null,null,null,null];
(statearr_38349[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_38349[(1)] = (1));

return statearr_38349;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_38331){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e38350){if((e38350 instanceof Object)){
var ex__29661__auto__ = e38350;
var statearr_38351_38368 = state_38331;
(statearr_38351_38368[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38369 = state_38331;
state_38331 = G__38369;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_38331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_38331);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto__))
})();
var state__29747__auto__ = (function (){var statearr_38352 = f__29746__auto__.call(null);
(statearr_38352[(6)] = c__29745__auto__);

return statearr_38352;
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
if(typeof cljs.core.async.t_cljs$core$async38370 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38370 = (function (ch,cs,meta38371){
this.ch = ch;
this.cs = cs;
this.meta38371 = meta38371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38372,meta38371__$1){
var self__ = this;
var _38372__$1 = this;
return (new cljs.core.async.t_cljs$core$async38370(self__.ch,self__.cs,meta38371__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38370.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38372){
var self__ = this;
var _38372__$1 = this;
return self__.meta38371;
});})(cs))
;

cljs.core.async.t_cljs$core$async38370.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38370.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38370.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38370.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38370.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38370.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38370.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38371","meta38371",1386589725,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38370";

cljs.core.async.t_cljs$core$async38370.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async38370");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38370 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38370(ch__$1,cs__$1,meta38371){
return (new cljs.core.async.t_cljs$core$async38370(ch__$1,cs__$1,meta38371));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38370(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29745__auto___38592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___38592,cs,m,dchan,dctr,done){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___38592,cs,m,dchan,dctr,done){
return (function (state_38507){
var state_val_38508 = (state_38507[(1)]);
if((state_val_38508 === (7))){
var inst_38503 = (state_38507[(2)]);
var state_38507__$1 = state_38507;
var statearr_38509_38593 = state_38507__$1;
(statearr_38509_38593[(2)] = inst_38503);

(statearr_38509_38593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (20))){
var inst_38406 = (state_38507[(7)]);
var inst_38418 = cljs.core.first.call(null,inst_38406);
var inst_38419 = cljs.core.nth.call(null,inst_38418,(0),null);
var inst_38420 = cljs.core.nth.call(null,inst_38418,(1),null);
var state_38507__$1 = (function (){var statearr_38510 = state_38507;
(statearr_38510[(8)] = inst_38419);

return statearr_38510;
})();
if(cljs.core.truth_(inst_38420)){
var statearr_38511_38594 = state_38507__$1;
(statearr_38511_38594[(1)] = (22));

} else {
var statearr_38512_38595 = state_38507__$1;
(statearr_38512_38595[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (27))){
var inst_38375 = (state_38507[(9)]);
var inst_38455 = (state_38507[(10)]);
var inst_38448 = (state_38507[(11)]);
var inst_38450 = (state_38507[(12)]);
var inst_38455__$1 = cljs.core._nth.call(null,inst_38448,inst_38450);
var inst_38456 = cljs.core.async.put_BANG_.call(null,inst_38455__$1,inst_38375,done);
var state_38507__$1 = (function (){var statearr_38513 = state_38507;
(statearr_38513[(10)] = inst_38455__$1);

return statearr_38513;
})();
if(cljs.core.truth_(inst_38456)){
var statearr_38514_38596 = state_38507__$1;
(statearr_38514_38596[(1)] = (30));

} else {
var statearr_38515_38597 = state_38507__$1;
(statearr_38515_38597[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (1))){
var state_38507__$1 = state_38507;
var statearr_38516_38598 = state_38507__$1;
(statearr_38516_38598[(2)] = null);

(statearr_38516_38598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (24))){
var inst_38406 = (state_38507[(7)]);
var inst_38425 = (state_38507[(2)]);
var inst_38426 = cljs.core.next.call(null,inst_38406);
var inst_38384 = inst_38426;
var inst_38385 = null;
var inst_38386 = (0);
var inst_38387 = (0);
var state_38507__$1 = (function (){var statearr_38517 = state_38507;
(statearr_38517[(13)] = inst_38386);

(statearr_38517[(14)] = inst_38425);

(statearr_38517[(15)] = inst_38385);

(statearr_38517[(16)] = inst_38387);

(statearr_38517[(17)] = inst_38384);

return statearr_38517;
})();
var statearr_38518_38599 = state_38507__$1;
(statearr_38518_38599[(2)] = null);

(statearr_38518_38599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (39))){
var state_38507__$1 = state_38507;
var statearr_38522_38600 = state_38507__$1;
(statearr_38522_38600[(2)] = null);

(statearr_38522_38600[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (4))){
var inst_38375 = (state_38507[(9)]);
var inst_38375__$1 = (state_38507[(2)]);
var inst_38376 = (inst_38375__$1 == null);
var state_38507__$1 = (function (){var statearr_38523 = state_38507;
(statearr_38523[(9)] = inst_38375__$1);

return statearr_38523;
})();
if(cljs.core.truth_(inst_38376)){
var statearr_38524_38601 = state_38507__$1;
(statearr_38524_38601[(1)] = (5));

} else {
var statearr_38525_38602 = state_38507__$1;
(statearr_38525_38602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (15))){
var inst_38386 = (state_38507[(13)]);
var inst_38385 = (state_38507[(15)]);
var inst_38387 = (state_38507[(16)]);
var inst_38384 = (state_38507[(17)]);
var inst_38402 = (state_38507[(2)]);
var inst_38403 = (inst_38387 + (1));
var tmp38519 = inst_38386;
var tmp38520 = inst_38385;
var tmp38521 = inst_38384;
var inst_38384__$1 = tmp38521;
var inst_38385__$1 = tmp38520;
var inst_38386__$1 = tmp38519;
var inst_38387__$1 = inst_38403;
var state_38507__$1 = (function (){var statearr_38526 = state_38507;
(statearr_38526[(18)] = inst_38402);

(statearr_38526[(13)] = inst_38386__$1);

(statearr_38526[(15)] = inst_38385__$1);

(statearr_38526[(16)] = inst_38387__$1);

(statearr_38526[(17)] = inst_38384__$1);

return statearr_38526;
})();
var statearr_38527_38603 = state_38507__$1;
(statearr_38527_38603[(2)] = null);

(statearr_38527_38603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (21))){
var inst_38429 = (state_38507[(2)]);
var state_38507__$1 = state_38507;
var statearr_38531_38604 = state_38507__$1;
(statearr_38531_38604[(2)] = inst_38429);

(statearr_38531_38604[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (31))){
var inst_38455 = (state_38507[(10)]);
var inst_38459 = done.call(null,null);
var inst_38460 = cljs.core.async.untap_STAR_.call(null,m,inst_38455);
var state_38507__$1 = (function (){var statearr_38532 = state_38507;
(statearr_38532[(19)] = inst_38459);

return statearr_38532;
})();
var statearr_38533_38605 = state_38507__$1;
(statearr_38533_38605[(2)] = inst_38460);

(statearr_38533_38605[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (32))){
var inst_38448 = (state_38507[(11)]);
var inst_38447 = (state_38507[(20)]);
var inst_38450 = (state_38507[(12)]);
var inst_38449 = (state_38507[(21)]);
var inst_38462 = (state_38507[(2)]);
var inst_38463 = (inst_38450 + (1));
var tmp38528 = inst_38448;
var tmp38529 = inst_38447;
var tmp38530 = inst_38449;
var inst_38447__$1 = tmp38529;
var inst_38448__$1 = tmp38528;
var inst_38449__$1 = tmp38530;
var inst_38450__$1 = inst_38463;
var state_38507__$1 = (function (){var statearr_38534 = state_38507;
(statearr_38534[(22)] = inst_38462);

(statearr_38534[(11)] = inst_38448__$1);

(statearr_38534[(20)] = inst_38447__$1);

(statearr_38534[(12)] = inst_38450__$1);

(statearr_38534[(21)] = inst_38449__$1);

return statearr_38534;
})();
var statearr_38535_38606 = state_38507__$1;
(statearr_38535_38606[(2)] = null);

(statearr_38535_38606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (40))){
var inst_38475 = (state_38507[(23)]);
var inst_38479 = done.call(null,null);
var inst_38480 = cljs.core.async.untap_STAR_.call(null,m,inst_38475);
var state_38507__$1 = (function (){var statearr_38536 = state_38507;
(statearr_38536[(24)] = inst_38479);

return statearr_38536;
})();
var statearr_38537_38607 = state_38507__$1;
(statearr_38537_38607[(2)] = inst_38480);

(statearr_38537_38607[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (33))){
var inst_38466 = (state_38507[(25)]);
var inst_38468 = cljs.core.chunked_seq_QMARK_.call(null,inst_38466);
var state_38507__$1 = state_38507;
if(inst_38468){
var statearr_38538_38608 = state_38507__$1;
(statearr_38538_38608[(1)] = (36));

} else {
var statearr_38539_38609 = state_38507__$1;
(statearr_38539_38609[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (13))){
var inst_38396 = (state_38507[(26)]);
var inst_38399 = cljs.core.async.close_BANG_.call(null,inst_38396);
var state_38507__$1 = state_38507;
var statearr_38540_38610 = state_38507__$1;
(statearr_38540_38610[(2)] = inst_38399);

(statearr_38540_38610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (22))){
var inst_38419 = (state_38507[(8)]);
var inst_38422 = cljs.core.async.close_BANG_.call(null,inst_38419);
var state_38507__$1 = state_38507;
var statearr_38541_38611 = state_38507__$1;
(statearr_38541_38611[(2)] = inst_38422);

(statearr_38541_38611[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (36))){
var inst_38466 = (state_38507[(25)]);
var inst_38470 = cljs.core.chunk_first.call(null,inst_38466);
var inst_38471 = cljs.core.chunk_rest.call(null,inst_38466);
var inst_38472 = cljs.core.count.call(null,inst_38470);
var inst_38447 = inst_38471;
var inst_38448 = inst_38470;
var inst_38449 = inst_38472;
var inst_38450 = (0);
var state_38507__$1 = (function (){var statearr_38542 = state_38507;
(statearr_38542[(11)] = inst_38448);

(statearr_38542[(20)] = inst_38447);

(statearr_38542[(12)] = inst_38450);

(statearr_38542[(21)] = inst_38449);

return statearr_38542;
})();
var statearr_38543_38612 = state_38507__$1;
(statearr_38543_38612[(2)] = null);

(statearr_38543_38612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (41))){
var inst_38466 = (state_38507[(25)]);
var inst_38482 = (state_38507[(2)]);
var inst_38483 = cljs.core.next.call(null,inst_38466);
var inst_38447 = inst_38483;
var inst_38448 = null;
var inst_38449 = (0);
var inst_38450 = (0);
var state_38507__$1 = (function (){var statearr_38544 = state_38507;
(statearr_38544[(27)] = inst_38482);

(statearr_38544[(11)] = inst_38448);

(statearr_38544[(20)] = inst_38447);

(statearr_38544[(12)] = inst_38450);

(statearr_38544[(21)] = inst_38449);

return statearr_38544;
})();
var statearr_38545_38613 = state_38507__$1;
(statearr_38545_38613[(2)] = null);

(statearr_38545_38613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (43))){
var state_38507__$1 = state_38507;
var statearr_38546_38614 = state_38507__$1;
(statearr_38546_38614[(2)] = null);

(statearr_38546_38614[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (29))){
var inst_38491 = (state_38507[(2)]);
var state_38507__$1 = state_38507;
var statearr_38547_38615 = state_38507__$1;
(statearr_38547_38615[(2)] = inst_38491);

(statearr_38547_38615[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (44))){
var inst_38500 = (state_38507[(2)]);
var state_38507__$1 = (function (){var statearr_38548 = state_38507;
(statearr_38548[(28)] = inst_38500);

return statearr_38548;
})();
var statearr_38549_38616 = state_38507__$1;
(statearr_38549_38616[(2)] = null);

(statearr_38549_38616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (6))){
var inst_38439 = (state_38507[(29)]);
var inst_38438 = cljs.core.deref.call(null,cs);
var inst_38439__$1 = cljs.core.keys.call(null,inst_38438);
var inst_38440 = cljs.core.count.call(null,inst_38439__$1);
var inst_38441 = cljs.core.reset_BANG_.call(null,dctr,inst_38440);
var inst_38446 = cljs.core.seq.call(null,inst_38439__$1);
var inst_38447 = inst_38446;
var inst_38448 = null;
var inst_38449 = (0);
var inst_38450 = (0);
var state_38507__$1 = (function (){var statearr_38550 = state_38507;
(statearr_38550[(30)] = inst_38441);

(statearr_38550[(29)] = inst_38439__$1);

(statearr_38550[(11)] = inst_38448);

(statearr_38550[(20)] = inst_38447);

(statearr_38550[(12)] = inst_38450);

(statearr_38550[(21)] = inst_38449);

return statearr_38550;
})();
var statearr_38551_38617 = state_38507__$1;
(statearr_38551_38617[(2)] = null);

(statearr_38551_38617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (28))){
var inst_38466 = (state_38507[(25)]);
var inst_38447 = (state_38507[(20)]);
var inst_38466__$1 = cljs.core.seq.call(null,inst_38447);
var state_38507__$1 = (function (){var statearr_38552 = state_38507;
(statearr_38552[(25)] = inst_38466__$1);

return statearr_38552;
})();
if(inst_38466__$1){
var statearr_38553_38618 = state_38507__$1;
(statearr_38553_38618[(1)] = (33));

} else {
var statearr_38554_38619 = state_38507__$1;
(statearr_38554_38619[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (25))){
var inst_38450 = (state_38507[(12)]);
var inst_38449 = (state_38507[(21)]);
var inst_38452 = (inst_38450 < inst_38449);
var inst_38453 = inst_38452;
var state_38507__$1 = state_38507;
if(cljs.core.truth_(inst_38453)){
var statearr_38555_38620 = state_38507__$1;
(statearr_38555_38620[(1)] = (27));

} else {
var statearr_38556_38621 = state_38507__$1;
(statearr_38556_38621[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (34))){
var state_38507__$1 = state_38507;
var statearr_38557_38622 = state_38507__$1;
(statearr_38557_38622[(2)] = null);

(statearr_38557_38622[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (17))){
var state_38507__$1 = state_38507;
var statearr_38558_38623 = state_38507__$1;
(statearr_38558_38623[(2)] = null);

(statearr_38558_38623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (3))){
var inst_38505 = (state_38507[(2)]);
var state_38507__$1 = state_38507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38507__$1,inst_38505);
} else {
if((state_val_38508 === (12))){
var inst_38434 = (state_38507[(2)]);
var state_38507__$1 = state_38507;
var statearr_38559_38624 = state_38507__$1;
(statearr_38559_38624[(2)] = inst_38434);

(statearr_38559_38624[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (2))){
var state_38507__$1 = state_38507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38507__$1,(4),ch);
} else {
if((state_val_38508 === (23))){
var state_38507__$1 = state_38507;
var statearr_38560_38625 = state_38507__$1;
(statearr_38560_38625[(2)] = null);

(statearr_38560_38625[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (35))){
var inst_38489 = (state_38507[(2)]);
var state_38507__$1 = state_38507;
var statearr_38561_38626 = state_38507__$1;
(statearr_38561_38626[(2)] = inst_38489);

(statearr_38561_38626[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (19))){
var inst_38406 = (state_38507[(7)]);
var inst_38410 = cljs.core.chunk_first.call(null,inst_38406);
var inst_38411 = cljs.core.chunk_rest.call(null,inst_38406);
var inst_38412 = cljs.core.count.call(null,inst_38410);
var inst_38384 = inst_38411;
var inst_38385 = inst_38410;
var inst_38386 = inst_38412;
var inst_38387 = (0);
var state_38507__$1 = (function (){var statearr_38562 = state_38507;
(statearr_38562[(13)] = inst_38386);

(statearr_38562[(15)] = inst_38385);

(statearr_38562[(16)] = inst_38387);

(statearr_38562[(17)] = inst_38384);

return statearr_38562;
})();
var statearr_38563_38627 = state_38507__$1;
(statearr_38563_38627[(2)] = null);

(statearr_38563_38627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (11))){
var inst_38406 = (state_38507[(7)]);
var inst_38384 = (state_38507[(17)]);
var inst_38406__$1 = cljs.core.seq.call(null,inst_38384);
var state_38507__$1 = (function (){var statearr_38564 = state_38507;
(statearr_38564[(7)] = inst_38406__$1);

return statearr_38564;
})();
if(inst_38406__$1){
var statearr_38565_38628 = state_38507__$1;
(statearr_38565_38628[(1)] = (16));

} else {
var statearr_38566_38629 = state_38507__$1;
(statearr_38566_38629[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (9))){
var inst_38436 = (state_38507[(2)]);
var state_38507__$1 = state_38507;
var statearr_38567_38630 = state_38507__$1;
(statearr_38567_38630[(2)] = inst_38436);

(statearr_38567_38630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (5))){
var inst_38382 = cljs.core.deref.call(null,cs);
var inst_38383 = cljs.core.seq.call(null,inst_38382);
var inst_38384 = inst_38383;
var inst_38385 = null;
var inst_38386 = (0);
var inst_38387 = (0);
var state_38507__$1 = (function (){var statearr_38568 = state_38507;
(statearr_38568[(13)] = inst_38386);

(statearr_38568[(15)] = inst_38385);

(statearr_38568[(16)] = inst_38387);

(statearr_38568[(17)] = inst_38384);

return statearr_38568;
})();
var statearr_38569_38631 = state_38507__$1;
(statearr_38569_38631[(2)] = null);

(statearr_38569_38631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (14))){
var state_38507__$1 = state_38507;
var statearr_38570_38632 = state_38507__$1;
(statearr_38570_38632[(2)] = null);

(statearr_38570_38632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (45))){
var inst_38497 = (state_38507[(2)]);
var state_38507__$1 = state_38507;
var statearr_38571_38633 = state_38507__$1;
(statearr_38571_38633[(2)] = inst_38497);

(statearr_38571_38633[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (26))){
var inst_38439 = (state_38507[(29)]);
var inst_38493 = (state_38507[(2)]);
var inst_38494 = cljs.core.seq.call(null,inst_38439);
var state_38507__$1 = (function (){var statearr_38572 = state_38507;
(statearr_38572[(31)] = inst_38493);

return statearr_38572;
})();
if(inst_38494){
var statearr_38573_38634 = state_38507__$1;
(statearr_38573_38634[(1)] = (42));

} else {
var statearr_38574_38635 = state_38507__$1;
(statearr_38574_38635[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (16))){
var inst_38406 = (state_38507[(7)]);
var inst_38408 = cljs.core.chunked_seq_QMARK_.call(null,inst_38406);
var state_38507__$1 = state_38507;
if(inst_38408){
var statearr_38575_38636 = state_38507__$1;
(statearr_38575_38636[(1)] = (19));

} else {
var statearr_38576_38637 = state_38507__$1;
(statearr_38576_38637[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (38))){
var inst_38486 = (state_38507[(2)]);
var state_38507__$1 = state_38507;
var statearr_38577_38638 = state_38507__$1;
(statearr_38577_38638[(2)] = inst_38486);

(statearr_38577_38638[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (30))){
var state_38507__$1 = state_38507;
var statearr_38578_38639 = state_38507__$1;
(statearr_38578_38639[(2)] = null);

(statearr_38578_38639[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (10))){
var inst_38385 = (state_38507[(15)]);
var inst_38387 = (state_38507[(16)]);
var inst_38395 = cljs.core._nth.call(null,inst_38385,inst_38387);
var inst_38396 = cljs.core.nth.call(null,inst_38395,(0),null);
var inst_38397 = cljs.core.nth.call(null,inst_38395,(1),null);
var state_38507__$1 = (function (){var statearr_38579 = state_38507;
(statearr_38579[(26)] = inst_38396);

return statearr_38579;
})();
if(cljs.core.truth_(inst_38397)){
var statearr_38580_38640 = state_38507__$1;
(statearr_38580_38640[(1)] = (13));

} else {
var statearr_38581_38641 = state_38507__$1;
(statearr_38581_38641[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (18))){
var inst_38432 = (state_38507[(2)]);
var state_38507__$1 = state_38507;
var statearr_38582_38642 = state_38507__$1;
(statearr_38582_38642[(2)] = inst_38432);

(statearr_38582_38642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (42))){
var state_38507__$1 = state_38507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38507__$1,(45),dchan);
} else {
if((state_val_38508 === (37))){
var inst_38375 = (state_38507[(9)]);
var inst_38466 = (state_38507[(25)]);
var inst_38475 = (state_38507[(23)]);
var inst_38475__$1 = cljs.core.first.call(null,inst_38466);
var inst_38476 = cljs.core.async.put_BANG_.call(null,inst_38475__$1,inst_38375,done);
var state_38507__$1 = (function (){var statearr_38583 = state_38507;
(statearr_38583[(23)] = inst_38475__$1);

return statearr_38583;
})();
if(cljs.core.truth_(inst_38476)){
var statearr_38584_38643 = state_38507__$1;
(statearr_38584_38643[(1)] = (39));

} else {
var statearr_38585_38644 = state_38507__$1;
(statearr_38585_38644[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38508 === (8))){
var inst_38386 = (state_38507[(13)]);
var inst_38387 = (state_38507[(16)]);
var inst_38389 = (inst_38387 < inst_38386);
var inst_38390 = inst_38389;
var state_38507__$1 = state_38507;
if(cljs.core.truth_(inst_38390)){
var statearr_38586_38645 = state_38507__$1;
(statearr_38586_38645[(1)] = (10));

} else {
var statearr_38587_38646 = state_38507__$1;
(statearr_38587_38646[(1)] = (11));

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
});})(c__29745__auto___38592,cs,m,dchan,dctr,done))
;
return ((function (switch__29657__auto__,c__29745__auto___38592,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29658__auto__ = null;
var cljs$core$async$mult_$_state_machine__29658__auto____0 = (function (){
var statearr_38588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38588[(0)] = cljs$core$async$mult_$_state_machine__29658__auto__);

(statearr_38588[(1)] = (1));

return statearr_38588;
});
var cljs$core$async$mult_$_state_machine__29658__auto____1 = (function (state_38507){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e38589){if((e38589 instanceof Object)){
var ex__29661__auto__ = e38589;
var statearr_38590_38647 = state_38507;
(statearr_38590_38647[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38648 = state_38507;
state_38507 = G__38648;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29658__auto__ = function(state_38507){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29658__auto____1.call(this,state_38507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29658__auto____0;
cljs$core$async$mult_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29658__auto____1;
return cljs$core$async$mult_$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___38592,cs,m,dchan,dctr,done))
})();
var state__29747__auto__ = (function (){var statearr_38591 = f__29746__auto__.call(null);
(statearr_38591[(6)] = c__29745__auto___38592);

return statearr_38591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___38592,cs,m,dchan,dctr,done))
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
var G__38650 = arguments.length;
switch (G__38650) {
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
var len__28364__auto___38662 = arguments.length;
var i__28365__auto___38663 = (0);
while(true){
if((i__28365__auto___38663 < len__28364__auto___38662)){
args__28371__auto__.push((arguments[i__28365__auto___38663]));

var G__38664 = (i__28365__auto___38663 + (1));
i__28365__auto___38663 = G__38664;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38656){
var map__38657 = p__38656;
var map__38657__$1 = ((((!((map__38657 == null)))?((((map__38657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38657):map__38657);
var opts = map__38657__$1;
var statearr_38659_38665 = state;
(statearr_38659_38665[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38657,map__38657__$1,opts){
return (function (val){
var statearr_38660_38666 = state;
(statearr_38660_38666[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38657,map__38657__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38661_38667 = state;
(statearr_38661_38667[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38652){
var G__38653 = cljs.core.first.call(null,seq38652);
var seq38652__$1 = cljs.core.next.call(null,seq38652);
var G__38654 = cljs.core.first.call(null,seq38652__$1);
var seq38652__$2 = cljs.core.next.call(null,seq38652__$1);
var G__38655 = cljs.core.first.call(null,seq38652__$2);
var seq38652__$3 = cljs.core.next.call(null,seq38652__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38653,G__38654,G__38655,seq38652__$3);
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
if(typeof cljs.core.async.t_cljs$core$async38668 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38668 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta38669){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta38669 = meta38669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38670,meta38669__$1){
var self__ = this;
var _38670__$1 = this;
return (new cljs.core.async.t_cljs$core$async38668(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta38669__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38668.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38670){
var self__ = this;
var _38670__$1 = this;
return self__.meta38669;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38668.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38668.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38668.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38668.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38668.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38668.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38668.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38668.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async38668.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta38669","meta38669",-801319523,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38668.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38668";

cljs.core.async.t_cljs$core$async38668.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async38668");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38668 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38668(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38669){
return (new cljs.core.async.t_cljs$core$async38668(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38669));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38668(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29745__auto___38832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___38832,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___38832,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38772){
var state_val_38773 = (state_38772[(1)]);
if((state_val_38773 === (7))){
var inst_38687 = (state_38772[(2)]);
var state_38772__$1 = state_38772;
var statearr_38774_38833 = state_38772__$1;
(statearr_38774_38833[(2)] = inst_38687);

(statearr_38774_38833[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (20))){
var inst_38699 = (state_38772[(7)]);
var state_38772__$1 = state_38772;
var statearr_38775_38834 = state_38772__$1;
(statearr_38775_38834[(2)] = inst_38699);

(statearr_38775_38834[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (27))){
var state_38772__$1 = state_38772;
var statearr_38776_38835 = state_38772__$1;
(statearr_38776_38835[(2)] = null);

(statearr_38776_38835[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (1))){
var inst_38674 = (state_38772[(8)]);
var inst_38674__$1 = calc_state.call(null);
var inst_38676 = (inst_38674__$1 == null);
var inst_38677 = cljs.core.not.call(null,inst_38676);
var state_38772__$1 = (function (){var statearr_38777 = state_38772;
(statearr_38777[(8)] = inst_38674__$1);

return statearr_38777;
})();
if(inst_38677){
var statearr_38778_38836 = state_38772__$1;
(statearr_38778_38836[(1)] = (2));

} else {
var statearr_38779_38837 = state_38772__$1;
(statearr_38779_38837[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (24))){
var inst_38746 = (state_38772[(9)]);
var inst_38723 = (state_38772[(10)]);
var inst_38732 = (state_38772[(11)]);
var inst_38746__$1 = inst_38723.call(null,inst_38732);
var state_38772__$1 = (function (){var statearr_38780 = state_38772;
(statearr_38780[(9)] = inst_38746__$1);

return statearr_38780;
})();
if(cljs.core.truth_(inst_38746__$1)){
var statearr_38781_38838 = state_38772__$1;
(statearr_38781_38838[(1)] = (29));

} else {
var statearr_38782_38839 = state_38772__$1;
(statearr_38782_38839[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (4))){
var inst_38690 = (state_38772[(2)]);
var state_38772__$1 = state_38772;
if(cljs.core.truth_(inst_38690)){
var statearr_38783_38840 = state_38772__$1;
(statearr_38783_38840[(1)] = (8));

} else {
var statearr_38784_38841 = state_38772__$1;
(statearr_38784_38841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (15))){
var inst_38717 = (state_38772[(2)]);
var state_38772__$1 = state_38772;
if(cljs.core.truth_(inst_38717)){
var statearr_38785_38842 = state_38772__$1;
(statearr_38785_38842[(1)] = (19));

} else {
var statearr_38786_38843 = state_38772__$1;
(statearr_38786_38843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (21))){
var inst_38722 = (state_38772[(12)]);
var inst_38722__$1 = (state_38772[(2)]);
var inst_38723 = cljs.core.get.call(null,inst_38722__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38724 = cljs.core.get.call(null,inst_38722__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38725 = cljs.core.get.call(null,inst_38722__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38772__$1 = (function (){var statearr_38787 = state_38772;
(statearr_38787[(12)] = inst_38722__$1);

(statearr_38787[(13)] = inst_38724);

(statearr_38787[(10)] = inst_38723);

return statearr_38787;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38772__$1,(22),inst_38725);
} else {
if((state_val_38773 === (31))){
var inst_38754 = (state_38772[(2)]);
var state_38772__$1 = state_38772;
if(cljs.core.truth_(inst_38754)){
var statearr_38788_38844 = state_38772__$1;
(statearr_38788_38844[(1)] = (32));

} else {
var statearr_38789_38845 = state_38772__$1;
(statearr_38789_38845[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (32))){
var inst_38731 = (state_38772[(14)]);
var state_38772__$1 = state_38772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38772__$1,(35),out,inst_38731);
} else {
if((state_val_38773 === (33))){
var inst_38722 = (state_38772[(12)]);
var inst_38699 = inst_38722;
var state_38772__$1 = (function (){var statearr_38790 = state_38772;
(statearr_38790[(7)] = inst_38699);

return statearr_38790;
})();
var statearr_38791_38846 = state_38772__$1;
(statearr_38791_38846[(2)] = null);

(statearr_38791_38846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (13))){
var inst_38699 = (state_38772[(7)]);
var inst_38706 = inst_38699.cljs$lang$protocol_mask$partition0$;
var inst_38707 = (inst_38706 & (64));
var inst_38708 = inst_38699.cljs$core$ISeq$;
var inst_38709 = (cljs.core.PROTOCOL_SENTINEL === inst_38708);
var inst_38710 = (inst_38707) || (inst_38709);
var state_38772__$1 = state_38772;
if(cljs.core.truth_(inst_38710)){
var statearr_38792_38847 = state_38772__$1;
(statearr_38792_38847[(1)] = (16));

} else {
var statearr_38793_38848 = state_38772__$1;
(statearr_38793_38848[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (22))){
var inst_38731 = (state_38772[(14)]);
var inst_38732 = (state_38772[(11)]);
var inst_38730 = (state_38772[(2)]);
var inst_38731__$1 = cljs.core.nth.call(null,inst_38730,(0),null);
var inst_38732__$1 = cljs.core.nth.call(null,inst_38730,(1),null);
var inst_38733 = (inst_38731__$1 == null);
var inst_38734 = cljs.core._EQ_.call(null,inst_38732__$1,change);
var inst_38735 = (inst_38733) || (inst_38734);
var state_38772__$1 = (function (){var statearr_38794 = state_38772;
(statearr_38794[(14)] = inst_38731__$1);

(statearr_38794[(11)] = inst_38732__$1);

return statearr_38794;
})();
if(cljs.core.truth_(inst_38735)){
var statearr_38795_38849 = state_38772__$1;
(statearr_38795_38849[(1)] = (23));

} else {
var statearr_38796_38850 = state_38772__$1;
(statearr_38796_38850[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (36))){
var inst_38722 = (state_38772[(12)]);
var inst_38699 = inst_38722;
var state_38772__$1 = (function (){var statearr_38797 = state_38772;
(statearr_38797[(7)] = inst_38699);

return statearr_38797;
})();
var statearr_38798_38851 = state_38772__$1;
(statearr_38798_38851[(2)] = null);

(statearr_38798_38851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (29))){
var inst_38746 = (state_38772[(9)]);
var state_38772__$1 = state_38772;
var statearr_38799_38852 = state_38772__$1;
(statearr_38799_38852[(2)] = inst_38746);

(statearr_38799_38852[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (6))){
var state_38772__$1 = state_38772;
var statearr_38800_38853 = state_38772__$1;
(statearr_38800_38853[(2)] = false);

(statearr_38800_38853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (28))){
var inst_38742 = (state_38772[(2)]);
var inst_38743 = calc_state.call(null);
var inst_38699 = inst_38743;
var state_38772__$1 = (function (){var statearr_38801 = state_38772;
(statearr_38801[(7)] = inst_38699);

(statearr_38801[(15)] = inst_38742);

return statearr_38801;
})();
var statearr_38802_38854 = state_38772__$1;
(statearr_38802_38854[(2)] = null);

(statearr_38802_38854[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (25))){
var inst_38768 = (state_38772[(2)]);
var state_38772__$1 = state_38772;
var statearr_38803_38855 = state_38772__$1;
(statearr_38803_38855[(2)] = inst_38768);

(statearr_38803_38855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (34))){
var inst_38766 = (state_38772[(2)]);
var state_38772__$1 = state_38772;
var statearr_38804_38856 = state_38772__$1;
(statearr_38804_38856[(2)] = inst_38766);

(statearr_38804_38856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (17))){
var state_38772__$1 = state_38772;
var statearr_38805_38857 = state_38772__$1;
(statearr_38805_38857[(2)] = false);

(statearr_38805_38857[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (3))){
var state_38772__$1 = state_38772;
var statearr_38806_38858 = state_38772__$1;
(statearr_38806_38858[(2)] = false);

(statearr_38806_38858[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (12))){
var inst_38770 = (state_38772[(2)]);
var state_38772__$1 = state_38772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38772__$1,inst_38770);
} else {
if((state_val_38773 === (2))){
var inst_38674 = (state_38772[(8)]);
var inst_38679 = inst_38674.cljs$lang$protocol_mask$partition0$;
var inst_38680 = (inst_38679 & (64));
var inst_38681 = inst_38674.cljs$core$ISeq$;
var inst_38682 = (cljs.core.PROTOCOL_SENTINEL === inst_38681);
var inst_38683 = (inst_38680) || (inst_38682);
var state_38772__$1 = state_38772;
if(cljs.core.truth_(inst_38683)){
var statearr_38807_38859 = state_38772__$1;
(statearr_38807_38859[(1)] = (5));

} else {
var statearr_38808_38860 = state_38772__$1;
(statearr_38808_38860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (23))){
var inst_38731 = (state_38772[(14)]);
var inst_38737 = (inst_38731 == null);
var state_38772__$1 = state_38772;
if(cljs.core.truth_(inst_38737)){
var statearr_38809_38861 = state_38772__$1;
(statearr_38809_38861[(1)] = (26));

} else {
var statearr_38810_38862 = state_38772__$1;
(statearr_38810_38862[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (35))){
var inst_38757 = (state_38772[(2)]);
var state_38772__$1 = state_38772;
if(cljs.core.truth_(inst_38757)){
var statearr_38811_38863 = state_38772__$1;
(statearr_38811_38863[(1)] = (36));

} else {
var statearr_38812_38864 = state_38772__$1;
(statearr_38812_38864[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (19))){
var inst_38699 = (state_38772[(7)]);
var inst_38719 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38699);
var state_38772__$1 = state_38772;
var statearr_38813_38865 = state_38772__$1;
(statearr_38813_38865[(2)] = inst_38719);

(statearr_38813_38865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (11))){
var inst_38699 = (state_38772[(7)]);
var inst_38703 = (inst_38699 == null);
var inst_38704 = cljs.core.not.call(null,inst_38703);
var state_38772__$1 = state_38772;
if(inst_38704){
var statearr_38814_38866 = state_38772__$1;
(statearr_38814_38866[(1)] = (13));

} else {
var statearr_38815_38867 = state_38772__$1;
(statearr_38815_38867[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (9))){
var inst_38674 = (state_38772[(8)]);
var state_38772__$1 = state_38772;
var statearr_38816_38868 = state_38772__$1;
(statearr_38816_38868[(2)] = inst_38674);

(statearr_38816_38868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (5))){
var state_38772__$1 = state_38772;
var statearr_38817_38869 = state_38772__$1;
(statearr_38817_38869[(2)] = true);

(statearr_38817_38869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (14))){
var state_38772__$1 = state_38772;
var statearr_38818_38870 = state_38772__$1;
(statearr_38818_38870[(2)] = false);

(statearr_38818_38870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (26))){
var inst_38732 = (state_38772[(11)]);
var inst_38739 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38732);
var state_38772__$1 = state_38772;
var statearr_38819_38871 = state_38772__$1;
(statearr_38819_38871[(2)] = inst_38739);

(statearr_38819_38871[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (16))){
var state_38772__$1 = state_38772;
var statearr_38820_38872 = state_38772__$1;
(statearr_38820_38872[(2)] = true);

(statearr_38820_38872[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (38))){
var inst_38762 = (state_38772[(2)]);
var state_38772__$1 = state_38772;
var statearr_38821_38873 = state_38772__$1;
(statearr_38821_38873[(2)] = inst_38762);

(statearr_38821_38873[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (30))){
var inst_38724 = (state_38772[(13)]);
var inst_38723 = (state_38772[(10)]);
var inst_38732 = (state_38772[(11)]);
var inst_38749 = cljs.core.empty_QMARK_.call(null,inst_38723);
var inst_38750 = inst_38724.call(null,inst_38732);
var inst_38751 = cljs.core.not.call(null,inst_38750);
var inst_38752 = (inst_38749) && (inst_38751);
var state_38772__$1 = state_38772;
var statearr_38822_38874 = state_38772__$1;
(statearr_38822_38874[(2)] = inst_38752);

(statearr_38822_38874[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (10))){
var inst_38674 = (state_38772[(8)]);
var inst_38695 = (state_38772[(2)]);
var inst_38696 = cljs.core.get.call(null,inst_38695,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38697 = cljs.core.get.call(null,inst_38695,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38698 = cljs.core.get.call(null,inst_38695,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38699 = inst_38674;
var state_38772__$1 = (function (){var statearr_38823 = state_38772;
(statearr_38823[(7)] = inst_38699);

(statearr_38823[(16)] = inst_38698);

(statearr_38823[(17)] = inst_38696);

(statearr_38823[(18)] = inst_38697);

return statearr_38823;
})();
var statearr_38824_38875 = state_38772__$1;
(statearr_38824_38875[(2)] = null);

(statearr_38824_38875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (18))){
var inst_38714 = (state_38772[(2)]);
var state_38772__$1 = state_38772;
var statearr_38825_38876 = state_38772__$1;
(statearr_38825_38876[(2)] = inst_38714);

(statearr_38825_38876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (37))){
var state_38772__$1 = state_38772;
var statearr_38826_38877 = state_38772__$1;
(statearr_38826_38877[(2)] = null);

(statearr_38826_38877[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38773 === (8))){
var inst_38674 = (state_38772[(8)]);
var inst_38692 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38674);
var state_38772__$1 = state_38772;
var statearr_38827_38878 = state_38772__$1;
(statearr_38827_38878[(2)] = inst_38692);

(statearr_38827_38878[(1)] = (10));


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
});})(c__29745__auto___38832,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29657__auto__,c__29745__auto___38832,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29658__auto__ = null;
var cljs$core$async$mix_$_state_machine__29658__auto____0 = (function (){
var statearr_38828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38828[(0)] = cljs$core$async$mix_$_state_machine__29658__auto__);

(statearr_38828[(1)] = (1));

return statearr_38828;
});
var cljs$core$async$mix_$_state_machine__29658__auto____1 = (function (state_38772){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e38829){if((e38829 instanceof Object)){
var ex__29661__auto__ = e38829;
var statearr_38830_38879 = state_38772;
(statearr_38830_38879[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38880 = state_38772;
state_38772 = G__38880;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29658__auto__ = function(state_38772){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29658__auto____1.call(this,state_38772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29658__auto____0;
cljs$core$async$mix_$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29658__auto____1;
return cljs$core$async$mix_$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___38832,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29747__auto__ = (function (){var statearr_38831 = f__29746__auto__.call(null);
(statearr_38831[(6)] = c__29745__auto___38832);

return statearr_38831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___38832,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__38882 = arguments.length;
switch (G__38882) {
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
var G__38886 = arguments.length;
switch (G__38886) {
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
return (function (p1__38884_SHARP_){
if(cljs.core.truth_(p1__38884_SHARP_.call(null,topic))){
return p1__38884_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38884_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38887 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38888){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38888 = meta38888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38889,meta38888__$1){
var self__ = this;
var _38889__$1 = this;
return (new cljs.core.async.t_cljs$core$async38887(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38888__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38889){
var self__ = this;
var _38889__$1 = this;
return self__.meta38888;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38887.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38887.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38887.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38887.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async38887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38887.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38888","meta38888",-227046701,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38887.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38887";

cljs.core.async.t_cljs$core$async38887.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async38887");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38887 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38887(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38888){
return (new cljs.core.async.t_cljs$core$async38887(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38888));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38887(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29745__auto___39007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39007,mults,ensure_mult,p){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39007,mults,ensure_mult,p){
return (function (state_38961){
var state_val_38962 = (state_38961[(1)]);
if((state_val_38962 === (7))){
var inst_38957 = (state_38961[(2)]);
var state_38961__$1 = state_38961;
var statearr_38963_39008 = state_38961__$1;
(statearr_38963_39008[(2)] = inst_38957);

(statearr_38963_39008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (20))){
var state_38961__$1 = state_38961;
var statearr_38964_39009 = state_38961__$1;
(statearr_38964_39009[(2)] = null);

(statearr_38964_39009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (1))){
var state_38961__$1 = state_38961;
var statearr_38965_39010 = state_38961__$1;
(statearr_38965_39010[(2)] = null);

(statearr_38965_39010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (24))){
var inst_38940 = (state_38961[(7)]);
var inst_38949 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38940);
var state_38961__$1 = state_38961;
var statearr_38966_39011 = state_38961__$1;
(statearr_38966_39011[(2)] = inst_38949);

(statearr_38966_39011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (4))){
var inst_38892 = (state_38961[(8)]);
var inst_38892__$1 = (state_38961[(2)]);
var inst_38893 = (inst_38892__$1 == null);
var state_38961__$1 = (function (){var statearr_38967 = state_38961;
(statearr_38967[(8)] = inst_38892__$1);

return statearr_38967;
})();
if(cljs.core.truth_(inst_38893)){
var statearr_38968_39012 = state_38961__$1;
(statearr_38968_39012[(1)] = (5));

} else {
var statearr_38969_39013 = state_38961__$1;
(statearr_38969_39013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (15))){
var inst_38934 = (state_38961[(2)]);
var state_38961__$1 = state_38961;
var statearr_38970_39014 = state_38961__$1;
(statearr_38970_39014[(2)] = inst_38934);

(statearr_38970_39014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (21))){
var inst_38954 = (state_38961[(2)]);
var state_38961__$1 = (function (){var statearr_38971 = state_38961;
(statearr_38971[(9)] = inst_38954);

return statearr_38971;
})();
var statearr_38972_39015 = state_38961__$1;
(statearr_38972_39015[(2)] = null);

(statearr_38972_39015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (13))){
var inst_38916 = (state_38961[(10)]);
var inst_38918 = cljs.core.chunked_seq_QMARK_.call(null,inst_38916);
var state_38961__$1 = state_38961;
if(inst_38918){
var statearr_38973_39016 = state_38961__$1;
(statearr_38973_39016[(1)] = (16));

} else {
var statearr_38974_39017 = state_38961__$1;
(statearr_38974_39017[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (22))){
var inst_38946 = (state_38961[(2)]);
var state_38961__$1 = state_38961;
if(cljs.core.truth_(inst_38946)){
var statearr_38975_39018 = state_38961__$1;
(statearr_38975_39018[(1)] = (23));

} else {
var statearr_38976_39019 = state_38961__$1;
(statearr_38976_39019[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (6))){
var inst_38892 = (state_38961[(8)]);
var inst_38940 = (state_38961[(7)]);
var inst_38942 = (state_38961[(11)]);
var inst_38940__$1 = topic_fn.call(null,inst_38892);
var inst_38941 = cljs.core.deref.call(null,mults);
var inst_38942__$1 = cljs.core.get.call(null,inst_38941,inst_38940__$1);
var state_38961__$1 = (function (){var statearr_38977 = state_38961;
(statearr_38977[(7)] = inst_38940__$1);

(statearr_38977[(11)] = inst_38942__$1);

return statearr_38977;
})();
if(cljs.core.truth_(inst_38942__$1)){
var statearr_38978_39020 = state_38961__$1;
(statearr_38978_39020[(1)] = (19));

} else {
var statearr_38979_39021 = state_38961__$1;
(statearr_38979_39021[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (25))){
var inst_38951 = (state_38961[(2)]);
var state_38961__$1 = state_38961;
var statearr_38980_39022 = state_38961__$1;
(statearr_38980_39022[(2)] = inst_38951);

(statearr_38980_39022[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (17))){
var inst_38916 = (state_38961[(10)]);
var inst_38925 = cljs.core.first.call(null,inst_38916);
var inst_38926 = cljs.core.async.muxch_STAR_.call(null,inst_38925);
var inst_38927 = cljs.core.async.close_BANG_.call(null,inst_38926);
var inst_38928 = cljs.core.next.call(null,inst_38916);
var inst_38902 = inst_38928;
var inst_38903 = null;
var inst_38904 = (0);
var inst_38905 = (0);
var state_38961__$1 = (function (){var statearr_38981 = state_38961;
(statearr_38981[(12)] = inst_38927);

(statearr_38981[(13)] = inst_38904);

(statearr_38981[(14)] = inst_38903);

(statearr_38981[(15)] = inst_38902);

(statearr_38981[(16)] = inst_38905);

return statearr_38981;
})();
var statearr_38982_39023 = state_38961__$1;
(statearr_38982_39023[(2)] = null);

(statearr_38982_39023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (3))){
var inst_38959 = (state_38961[(2)]);
var state_38961__$1 = state_38961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38961__$1,inst_38959);
} else {
if((state_val_38962 === (12))){
var inst_38936 = (state_38961[(2)]);
var state_38961__$1 = state_38961;
var statearr_38983_39024 = state_38961__$1;
(statearr_38983_39024[(2)] = inst_38936);

(statearr_38983_39024[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (2))){
var state_38961__$1 = state_38961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38961__$1,(4),ch);
} else {
if((state_val_38962 === (23))){
var state_38961__$1 = state_38961;
var statearr_38984_39025 = state_38961__$1;
(statearr_38984_39025[(2)] = null);

(statearr_38984_39025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (19))){
var inst_38892 = (state_38961[(8)]);
var inst_38942 = (state_38961[(11)]);
var inst_38944 = cljs.core.async.muxch_STAR_.call(null,inst_38942);
var state_38961__$1 = state_38961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38961__$1,(22),inst_38944,inst_38892);
} else {
if((state_val_38962 === (11))){
var inst_38916 = (state_38961[(10)]);
var inst_38902 = (state_38961[(15)]);
var inst_38916__$1 = cljs.core.seq.call(null,inst_38902);
var state_38961__$1 = (function (){var statearr_38985 = state_38961;
(statearr_38985[(10)] = inst_38916__$1);

return statearr_38985;
})();
if(inst_38916__$1){
var statearr_38986_39026 = state_38961__$1;
(statearr_38986_39026[(1)] = (13));

} else {
var statearr_38987_39027 = state_38961__$1;
(statearr_38987_39027[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (9))){
var inst_38938 = (state_38961[(2)]);
var state_38961__$1 = state_38961;
var statearr_38988_39028 = state_38961__$1;
(statearr_38988_39028[(2)] = inst_38938);

(statearr_38988_39028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (5))){
var inst_38899 = cljs.core.deref.call(null,mults);
var inst_38900 = cljs.core.vals.call(null,inst_38899);
var inst_38901 = cljs.core.seq.call(null,inst_38900);
var inst_38902 = inst_38901;
var inst_38903 = null;
var inst_38904 = (0);
var inst_38905 = (0);
var state_38961__$1 = (function (){var statearr_38989 = state_38961;
(statearr_38989[(13)] = inst_38904);

(statearr_38989[(14)] = inst_38903);

(statearr_38989[(15)] = inst_38902);

(statearr_38989[(16)] = inst_38905);

return statearr_38989;
})();
var statearr_38990_39029 = state_38961__$1;
(statearr_38990_39029[(2)] = null);

(statearr_38990_39029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (14))){
var state_38961__$1 = state_38961;
var statearr_38994_39030 = state_38961__$1;
(statearr_38994_39030[(2)] = null);

(statearr_38994_39030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (16))){
var inst_38916 = (state_38961[(10)]);
var inst_38920 = cljs.core.chunk_first.call(null,inst_38916);
var inst_38921 = cljs.core.chunk_rest.call(null,inst_38916);
var inst_38922 = cljs.core.count.call(null,inst_38920);
var inst_38902 = inst_38921;
var inst_38903 = inst_38920;
var inst_38904 = inst_38922;
var inst_38905 = (0);
var state_38961__$1 = (function (){var statearr_38995 = state_38961;
(statearr_38995[(13)] = inst_38904);

(statearr_38995[(14)] = inst_38903);

(statearr_38995[(15)] = inst_38902);

(statearr_38995[(16)] = inst_38905);

return statearr_38995;
})();
var statearr_38996_39031 = state_38961__$1;
(statearr_38996_39031[(2)] = null);

(statearr_38996_39031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (10))){
var inst_38904 = (state_38961[(13)]);
var inst_38903 = (state_38961[(14)]);
var inst_38902 = (state_38961[(15)]);
var inst_38905 = (state_38961[(16)]);
var inst_38910 = cljs.core._nth.call(null,inst_38903,inst_38905);
var inst_38911 = cljs.core.async.muxch_STAR_.call(null,inst_38910);
var inst_38912 = cljs.core.async.close_BANG_.call(null,inst_38911);
var inst_38913 = (inst_38905 + (1));
var tmp38991 = inst_38904;
var tmp38992 = inst_38903;
var tmp38993 = inst_38902;
var inst_38902__$1 = tmp38993;
var inst_38903__$1 = tmp38992;
var inst_38904__$1 = tmp38991;
var inst_38905__$1 = inst_38913;
var state_38961__$1 = (function (){var statearr_38997 = state_38961;
(statearr_38997[(17)] = inst_38912);

(statearr_38997[(13)] = inst_38904__$1);

(statearr_38997[(14)] = inst_38903__$1);

(statearr_38997[(15)] = inst_38902__$1);

(statearr_38997[(16)] = inst_38905__$1);

return statearr_38997;
})();
var statearr_38998_39032 = state_38961__$1;
(statearr_38998_39032[(2)] = null);

(statearr_38998_39032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (18))){
var inst_38931 = (state_38961[(2)]);
var state_38961__$1 = state_38961;
var statearr_38999_39033 = state_38961__$1;
(statearr_38999_39033[(2)] = inst_38931);

(statearr_38999_39033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38962 === (8))){
var inst_38904 = (state_38961[(13)]);
var inst_38905 = (state_38961[(16)]);
var inst_38907 = (inst_38905 < inst_38904);
var inst_38908 = inst_38907;
var state_38961__$1 = state_38961;
if(cljs.core.truth_(inst_38908)){
var statearr_39000_39034 = state_38961__$1;
(statearr_39000_39034[(1)] = (10));

} else {
var statearr_39001_39035 = state_38961__$1;
(statearr_39001_39035[(1)] = (11));

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
});})(c__29745__auto___39007,mults,ensure_mult,p))
;
return ((function (switch__29657__auto__,c__29745__auto___39007,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_39002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39002[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_39002[(1)] = (1));

return statearr_39002;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_38961){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_38961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39003){if((e39003 instanceof Object)){
var ex__29661__auto__ = e39003;
var statearr_39004_39036 = state_38961;
(statearr_39004_39036[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39037 = state_38961;
state_38961 = G__39037;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_38961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_38961);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39007,mults,ensure_mult,p))
})();
var state__29747__auto__ = (function (){var statearr_39005 = f__29746__auto__.call(null);
(statearr_39005[(6)] = c__29745__auto___39007);

return statearr_39005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39007,mults,ensure_mult,p))
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
var G__39039 = arguments.length;
switch (G__39039) {
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
var G__39042 = arguments.length;
switch (G__39042) {
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
var G__39045 = arguments.length;
switch (G__39045) {
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
var c__29745__auto___39112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39112,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39112,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39084){
var state_val_39085 = (state_39084[(1)]);
if((state_val_39085 === (7))){
var state_39084__$1 = state_39084;
var statearr_39086_39113 = state_39084__$1;
(statearr_39086_39113[(2)] = null);

(statearr_39086_39113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (1))){
var state_39084__$1 = state_39084;
var statearr_39087_39114 = state_39084__$1;
(statearr_39087_39114[(2)] = null);

(statearr_39087_39114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (4))){
var inst_39048 = (state_39084[(7)]);
var inst_39050 = (inst_39048 < cnt);
var state_39084__$1 = state_39084;
if(cljs.core.truth_(inst_39050)){
var statearr_39088_39115 = state_39084__$1;
(statearr_39088_39115[(1)] = (6));

} else {
var statearr_39089_39116 = state_39084__$1;
(statearr_39089_39116[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (15))){
var inst_39080 = (state_39084[(2)]);
var state_39084__$1 = state_39084;
var statearr_39090_39117 = state_39084__$1;
(statearr_39090_39117[(2)] = inst_39080);

(statearr_39090_39117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (13))){
var inst_39073 = cljs.core.async.close_BANG_.call(null,out);
var state_39084__$1 = state_39084;
var statearr_39091_39118 = state_39084__$1;
(statearr_39091_39118[(2)] = inst_39073);

(statearr_39091_39118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (6))){
var state_39084__$1 = state_39084;
var statearr_39092_39119 = state_39084__$1;
(statearr_39092_39119[(2)] = null);

(statearr_39092_39119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (3))){
var inst_39082 = (state_39084[(2)]);
var state_39084__$1 = state_39084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39084__$1,inst_39082);
} else {
if((state_val_39085 === (12))){
var inst_39070 = (state_39084[(8)]);
var inst_39070__$1 = (state_39084[(2)]);
var inst_39071 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39070__$1);
var state_39084__$1 = (function (){var statearr_39093 = state_39084;
(statearr_39093[(8)] = inst_39070__$1);

return statearr_39093;
})();
if(cljs.core.truth_(inst_39071)){
var statearr_39094_39120 = state_39084__$1;
(statearr_39094_39120[(1)] = (13));

} else {
var statearr_39095_39121 = state_39084__$1;
(statearr_39095_39121[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (2))){
var inst_39047 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39048 = (0);
var state_39084__$1 = (function (){var statearr_39096 = state_39084;
(statearr_39096[(7)] = inst_39048);

(statearr_39096[(9)] = inst_39047);

return statearr_39096;
})();
var statearr_39097_39122 = state_39084__$1;
(statearr_39097_39122[(2)] = null);

(statearr_39097_39122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (11))){
var inst_39048 = (state_39084[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39084,(10),Object,null,(9));
var inst_39057 = chs__$1.call(null,inst_39048);
var inst_39058 = done.call(null,inst_39048);
var inst_39059 = cljs.core.async.take_BANG_.call(null,inst_39057,inst_39058);
var state_39084__$1 = state_39084;
var statearr_39098_39123 = state_39084__$1;
(statearr_39098_39123[(2)] = inst_39059);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39084__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (9))){
var inst_39048 = (state_39084[(7)]);
var inst_39061 = (state_39084[(2)]);
var inst_39062 = (inst_39048 + (1));
var inst_39048__$1 = inst_39062;
var state_39084__$1 = (function (){var statearr_39099 = state_39084;
(statearr_39099[(10)] = inst_39061);

(statearr_39099[(7)] = inst_39048__$1);

return statearr_39099;
})();
var statearr_39100_39124 = state_39084__$1;
(statearr_39100_39124[(2)] = null);

(statearr_39100_39124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (5))){
var inst_39068 = (state_39084[(2)]);
var state_39084__$1 = (function (){var statearr_39101 = state_39084;
(statearr_39101[(11)] = inst_39068);

return statearr_39101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39084__$1,(12),dchan);
} else {
if((state_val_39085 === (14))){
var inst_39070 = (state_39084[(8)]);
var inst_39075 = cljs.core.apply.call(null,f,inst_39070);
var state_39084__$1 = state_39084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39084__$1,(16),out,inst_39075);
} else {
if((state_val_39085 === (16))){
var inst_39077 = (state_39084[(2)]);
var state_39084__$1 = (function (){var statearr_39102 = state_39084;
(statearr_39102[(12)] = inst_39077);

return statearr_39102;
})();
var statearr_39103_39125 = state_39084__$1;
(statearr_39103_39125[(2)] = null);

(statearr_39103_39125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (10))){
var inst_39052 = (state_39084[(2)]);
var inst_39053 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39084__$1 = (function (){var statearr_39104 = state_39084;
(statearr_39104[(13)] = inst_39052);

return statearr_39104;
})();
var statearr_39105_39126 = state_39084__$1;
(statearr_39105_39126[(2)] = inst_39053);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39084__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39085 === (8))){
var inst_39066 = (state_39084[(2)]);
var state_39084__$1 = state_39084;
var statearr_39106_39127 = state_39084__$1;
(statearr_39106_39127[(2)] = inst_39066);

(statearr_39106_39127[(1)] = (5));


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
});})(c__29745__auto___39112,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29657__auto__,c__29745__auto___39112,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_39107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39107[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_39107[(1)] = (1));

return statearr_39107;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_39084){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39108){if((e39108 instanceof Object)){
var ex__29661__auto__ = e39108;
var statearr_39109_39128 = state_39084;
(statearr_39109_39128[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39129 = state_39084;
state_39084 = G__39129;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_39084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_39084);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39112,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29747__auto__ = (function (){var statearr_39110 = f__29746__auto__.call(null);
(statearr_39110[(6)] = c__29745__auto___39112);

return statearr_39110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39112,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__39132 = arguments.length;
switch (G__39132) {
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
var c__29745__auto___39186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39186,out){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39186,out){
return (function (state_39164){
var state_val_39165 = (state_39164[(1)]);
if((state_val_39165 === (7))){
var inst_39143 = (state_39164[(7)]);
var inst_39144 = (state_39164[(8)]);
var inst_39143__$1 = (state_39164[(2)]);
var inst_39144__$1 = cljs.core.nth.call(null,inst_39143__$1,(0),null);
var inst_39145 = cljs.core.nth.call(null,inst_39143__$1,(1),null);
var inst_39146 = (inst_39144__$1 == null);
var state_39164__$1 = (function (){var statearr_39166 = state_39164;
(statearr_39166[(7)] = inst_39143__$1);

(statearr_39166[(8)] = inst_39144__$1);

(statearr_39166[(9)] = inst_39145);

return statearr_39166;
})();
if(cljs.core.truth_(inst_39146)){
var statearr_39167_39187 = state_39164__$1;
(statearr_39167_39187[(1)] = (8));

} else {
var statearr_39168_39188 = state_39164__$1;
(statearr_39168_39188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (1))){
var inst_39133 = cljs.core.vec.call(null,chs);
var inst_39134 = inst_39133;
var state_39164__$1 = (function (){var statearr_39169 = state_39164;
(statearr_39169[(10)] = inst_39134);

return statearr_39169;
})();
var statearr_39170_39189 = state_39164__$1;
(statearr_39170_39189[(2)] = null);

(statearr_39170_39189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (4))){
var inst_39134 = (state_39164[(10)]);
var state_39164__$1 = state_39164;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39164__$1,(7),inst_39134);
} else {
if((state_val_39165 === (6))){
var inst_39160 = (state_39164[(2)]);
var state_39164__$1 = state_39164;
var statearr_39171_39190 = state_39164__$1;
(statearr_39171_39190[(2)] = inst_39160);

(statearr_39171_39190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (3))){
var inst_39162 = (state_39164[(2)]);
var state_39164__$1 = state_39164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39164__$1,inst_39162);
} else {
if((state_val_39165 === (2))){
var inst_39134 = (state_39164[(10)]);
var inst_39136 = cljs.core.count.call(null,inst_39134);
var inst_39137 = (inst_39136 > (0));
var state_39164__$1 = state_39164;
if(cljs.core.truth_(inst_39137)){
var statearr_39173_39191 = state_39164__$1;
(statearr_39173_39191[(1)] = (4));

} else {
var statearr_39174_39192 = state_39164__$1;
(statearr_39174_39192[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (11))){
var inst_39134 = (state_39164[(10)]);
var inst_39153 = (state_39164[(2)]);
var tmp39172 = inst_39134;
var inst_39134__$1 = tmp39172;
var state_39164__$1 = (function (){var statearr_39175 = state_39164;
(statearr_39175[(11)] = inst_39153);

(statearr_39175[(10)] = inst_39134__$1);

return statearr_39175;
})();
var statearr_39176_39193 = state_39164__$1;
(statearr_39176_39193[(2)] = null);

(statearr_39176_39193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (9))){
var inst_39144 = (state_39164[(8)]);
var state_39164__$1 = state_39164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39164__$1,(11),out,inst_39144);
} else {
if((state_val_39165 === (5))){
var inst_39158 = cljs.core.async.close_BANG_.call(null,out);
var state_39164__$1 = state_39164;
var statearr_39177_39194 = state_39164__$1;
(statearr_39177_39194[(2)] = inst_39158);

(statearr_39177_39194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (10))){
var inst_39156 = (state_39164[(2)]);
var state_39164__$1 = state_39164;
var statearr_39178_39195 = state_39164__$1;
(statearr_39178_39195[(2)] = inst_39156);

(statearr_39178_39195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (8))){
var inst_39143 = (state_39164[(7)]);
var inst_39144 = (state_39164[(8)]);
var inst_39134 = (state_39164[(10)]);
var inst_39145 = (state_39164[(9)]);
var inst_39148 = (function (){var cs = inst_39134;
var vec__39139 = inst_39143;
var v = inst_39144;
var c = inst_39145;
return ((function (cs,vec__39139,v,c,inst_39143,inst_39144,inst_39134,inst_39145,state_val_39165,c__29745__auto___39186,out){
return (function (p1__39130_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39130_SHARP_);
});
;})(cs,vec__39139,v,c,inst_39143,inst_39144,inst_39134,inst_39145,state_val_39165,c__29745__auto___39186,out))
})();
var inst_39149 = cljs.core.filterv.call(null,inst_39148,inst_39134);
var inst_39134__$1 = inst_39149;
var state_39164__$1 = (function (){var statearr_39179 = state_39164;
(statearr_39179[(10)] = inst_39134__$1);

return statearr_39179;
})();
var statearr_39180_39196 = state_39164__$1;
(statearr_39180_39196[(2)] = null);

(statearr_39180_39196[(1)] = (2));


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
});})(c__29745__auto___39186,out))
;
return ((function (switch__29657__auto__,c__29745__auto___39186,out){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_39181 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39181[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_39181[(1)] = (1));

return statearr_39181;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_39164){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39182){if((e39182 instanceof Object)){
var ex__29661__auto__ = e39182;
var statearr_39183_39197 = state_39164;
(statearr_39183_39197[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39198 = state_39164;
state_39164 = G__39198;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_39164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_39164);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39186,out))
})();
var state__29747__auto__ = (function (){var statearr_39184 = f__29746__auto__.call(null);
(statearr_39184[(6)] = c__29745__auto___39186);

return statearr_39184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39186,out))
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
var G__39200 = arguments.length;
switch (G__39200) {
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
var c__29745__auto___39245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39245,out){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39245,out){
return (function (state_39224){
var state_val_39225 = (state_39224[(1)]);
if((state_val_39225 === (7))){
var inst_39206 = (state_39224[(7)]);
var inst_39206__$1 = (state_39224[(2)]);
var inst_39207 = (inst_39206__$1 == null);
var inst_39208 = cljs.core.not.call(null,inst_39207);
var state_39224__$1 = (function (){var statearr_39226 = state_39224;
(statearr_39226[(7)] = inst_39206__$1);

return statearr_39226;
})();
if(inst_39208){
var statearr_39227_39246 = state_39224__$1;
(statearr_39227_39246[(1)] = (8));

} else {
var statearr_39228_39247 = state_39224__$1;
(statearr_39228_39247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (1))){
var inst_39201 = (0);
var state_39224__$1 = (function (){var statearr_39229 = state_39224;
(statearr_39229[(8)] = inst_39201);

return statearr_39229;
})();
var statearr_39230_39248 = state_39224__$1;
(statearr_39230_39248[(2)] = null);

(statearr_39230_39248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (4))){
var state_39224__$1 = state_39224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39224__$1,(7),ch);
} else {
if((state_val_39225 === (6))){
var inst_39219 = (state_39224[(2)]);
var state_39224__$1 = state_39224;
var statearr_39231_39249 = state_39224__$1;
(statearr_39231_39249[(2)] = inst_39219);

(statearr_39231_39249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (3))){
var inst_39221 = (state_39224[(2)]);
var inst_39222 = cljs.core.async.close_BANG_.call(null,out);
var state_39224__$1 = (function (){var statearr_39232 = state_39224;
(statearr_39232[(9)] = inst_39221);

return statearr_39232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39224__$1,inst_39222);
} else {
if((state_val_39225 === (2))){
var inst_39201 = (state_39224[(8)]);
var inst_39203 = (inst_39201 < n);
var state_39224__$1 = state_39224;
if(cljs.core.truth_(inst_39203)){
var statearr_39233_39250 = state_39224__$1;
(statearr_39233_39250[(1)] = (4));

} else {
var statearr_39234_39251 = state_39224__$1;
(statearr_39234_39251[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (11))){
var inst_39201 = (state_39224[(8)]);
var inst_39211 = (state_39224[(2)]);
var inst_39212 = (inst_39201 + (1));
var inst_39201__$1 = inst_39212;
var state_39224__$1 = (function (){var statearr_39235 = state_39224;
(statearr_39235[(10)] = inst_39211);

(statearr_39235[(8)] = inst_39201__$1);

return statearr_39235;
})();
var statearr_39236_39252 = state_39224__$1;
(statearr_39236_39252[(2)] = null);

(statearr_39236_39252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (9))){
var state_39224__$1 = state_39224;
var statearr_39237_39253 = state_39224__$1;
(statearr_39237_39253[(2)] = null);

(statearr_39237_39253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (5))){
var state_39224__$1 = state_39224;
var statearr_39238_39254 = state_39224__$1;
(statearr_39238_39254[(2)] = null);

(statearr_39238_39254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (10))){
var inst_39216 = (state_39224[(2)]);
var state_39224__$1 = state_39224;
var statearr_39239_39255 = state_39224__$1;
(statearr_39239_39255[(2)] = inst_39216);

(statearr_39239_39255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (8))){
var inst_39206 = (state_39224[(7)]);
var state_39224__$1 = state_39224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39224__$1,(11),out,inst_39206);
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
});})(c__29745__auto___39245,out))
;
return ((function (switch__29657__auto__,c__29745__auto___39245,out){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_39240 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39240[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_39240[(1)] = (1));

return statearr_39240;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_39224){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39241){if((e39241 instanceof Object)){
var ex__29661__auto__ = e39241;
var statearr_39242_39256 = state_39224;
(statearr_39242_39256[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39257 = state_39224;
state_39224 = G__39257;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_39224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_39224);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39245,out))
})();
var state__29747__auto__ = (function (){var statearr_39243 = f__29746__auto__.call(null);
(statearr_39243[(6)] = c__29745__auto___39245);

return statearr_39243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39245,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39259 = (function (f,ch,meta39260){
this.f = f;
this.ch = ch;
this.meta39260 = meta39260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39261,meta39260__$1){
var self__ = this;
var _39261__$1 = this;
return (new cljs.core.async.t_cljs$core$async39259(self__.f,self__.ch,meta39260__$1));
});

cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39261){
var self__ = this;
var _39261__$1 = this;
return self__.meta39260;
});

cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39262 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39262 = (function (f,ch,meta39260,_,fn1,meta39263){
this.f = f;
this.ch = ch;
this.meta39260 = meta39260;
this._ = _;
this.fn1 = fn1;
this.meta39263 = meta39263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39264,meta39263__$1){
var self__ = this;
var _39264__$1 = this;
return (new cljs.core.async.t_cljs$core$async39262(self__.f,self__.ch,self__.meta39260,self__._,self__.fn1,meta39263__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39264){
var self__ = this;
var _39264__$1 = this;
return self__.meta39263;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39262.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39262.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39262.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39262.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39258_SHARP_){
return f1.call(null,(((p1__39258_SHARP_ == null))?null:self__.f.call(null,p1__39258_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39262.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39260","meta39260",645098583,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39259","cljs.core.async/t_cljs$core$async39259",-344064317,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39263","meta39263",-1668992621,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39262";

cljs.core.async.t_cljs$core$async39262.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39262");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39262 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39262(f__$1,ch__$1,meta39260__$1,___$2,fn1__$1,meta39263){
return (new cljs.core.async.t_cljs$core$async39262(f__$1,ch__$1,meta39260__$1,___$2,fn1__$1,meta39263));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39262(self__.f,self__.ch,self__.meta39260,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39260","meta39260",645098583,null)], null);
});

cljs.core.async.t_cljs$core$async39259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39259";

cljs.core.async.t_cljs$core$async39259.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39259");
});

cljs.core.async.__GT_t_cljs$core$async39259 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39259(f__$1,ch__$1,meta39260){
return (new cljs.core.async.t_cljs$core$async39259(f__$1,ch__$1,meta39260));
});

}

return (new cljs.core.async.t_cljs$core$async39259(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39265 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39265 = (function (f,ch,meta39266){
this.f = f;
this.ch = ch;
this.meta39266 = meta39266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39267,meta39266__$1){
var self__ = this;
var _39267__$1 = this;
return (new cljs.core.async.t_cljs$core$async39265(self__.f,self__.ch,meta39266__$1));
});

cljs.core.async.t_cljs$core$async39265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39267){
var self__ = this;
var _39267__$1 = this;
return self__.meta39266;
});

cljs.core.async.t_cljs$core$async39265.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39265.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39265.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39265.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39265.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39265.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39266","meta39266",1436953891,null)], null);
});

cljs.core.async.t_cljs$core$async39265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39265";

cljs.core.async.t_cljs$core$async39265.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39265");
});

cljs.core.async.__GT_t_cljs$core$async39265 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39265(f__$1,ch__$1,meta39266){
return (new cljs.core.async.t_cljs$core$async39265(f__$1,ch__$1,meta39266));
});

}

return (new cljs.core.async.t_cljs$core$async39265(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39268 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39268 = (function (p,ch,meta39269){
this.p = p;
this.ch = ch;
this.meta39269 = meta39269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39270,meta39269__$1){
var self__ = this;
var _39270__$1 = this;
return (new cljs.core.async.t_cljs$core$async39268(self__.p,self__.ch,meta39269__$1));
});

cljs.core.async.t_cljs$core$async39268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39270){
var self__ = this;
var _39270__$1 = this;
return self__.meta39269;
});

cljs.core.async.t_cljs$core$async39268.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39268.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39268.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39268.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39268.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39268.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39268.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39269","meta39269",66812181,null)], null);
});

cljs.core.async.t_cljs$core$async39268.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39268";

cljs.core.async.t_cljs$core$async39268.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async39268");
});

cljs.core.async.__GT_t_cljs$core$async39268 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39268(p__$1,ch__$1,meta39269){
return (new cljs.core.async.t_cljs$core$async39268(p__$1,ch__$1,meta39269));
});

}

return (new cljs.core.async.t_cljs$core$async39268(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39272 = arguments.length;
switch (G__39272) {
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
var c__29745__auto___39312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39312,out){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39312,out){
return (function (state_39293){
var state_val_39294 = (state_39293[(1)]);
if((state_val_39294 === (7))){
var inst_39289 = (state_39293[(2)]);
var state_39293__$1 = state_39293;
var statearr_39295_39313 = state_39293__$1;
(statearr_39295_39313[(2)] = inst_39289);

(statearr_39295_39313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39294 === (1))){
var state_39293__$1 = state_39293;
var statearr_39296_39314 = state_39293__$1;
(statearr_39296_39314[(2)] = null);

(statearr_39296_39314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39294 === (4))){
var inst_39275 = (state_39293[(7)]);
var inst_39275__$1 = (state_39293[(2)]);
var inst_39276 = (inst_39275__$1 == null);
var state_39293__$1 = (function (){var statearr_39297 = state_39293;
(statearr_39297[(7)] = inst_39275__$1);

return statearr_39297;
})();
if(cljs.core.truth_(inst_39276)){
var statearr_39298_39315 = state_39293__$1;
(statearr_39298_39315[(1)] = (5));

} else {
var statearr_39299_39316 = state_39293__$1;
(statearr_39299_39316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39294 === (6))){
var inst_39275 = (state_39293[(7)]);
var inst_39280 = p.call(null,inst_39275);
var state_39293__$1 = state_39293;
if(cljs.core.truth_(inst_39280)){
var statearr_39300_39317 = state_39293__$1;
(statearr_39300_39317[(1)] = (8));

} else {
var statearr_39301_39318 = state_39293__$1;
(statearr_39301_39318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39294 === (3))){
var inst_39291 = (state_39293[(2)]);
var state_39293__$1 = state_39293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39293__$1,inst_39291);
} else {
if((state_val_39294 === (2))){
var state_39293__$1 = state_39293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39293__$1,(4),ch);
} else {
if((state_val_39294 === (11))){
var inst_39283 = (state_39293[(2)]);
var state_39293__$1 = state_39293;
var statearr_39302_39319 = state_39293__$1;
(statearr_39302_39319[(2)] = inst_39283);

(statearr_39302_39319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39294 === (9))){
var state_39293__$1 = state_39293;
var statearr_39303_39320 = state_39293__$1;
(statearr_39303_39320[(2)] = null);

(statearr_39303_39320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39294 === (5))){
var inst_39278 = cljs.core.async.close_BANG_.call(null,out);
var state_39293__$1 = state_39293;
var statearr_39304_39321 = state_39293__$1;
(statearr_39304_39321[(2)] = inst_39278);

(statearr_39304_39321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39294 === (10))){
var inst_39286 = (state_39293[(2)]);
var state_39293__$1 = (function (){var statearr_39305 = state_39293;
(statearr_39305[(8)] = inst_39286);

return statearr_39305;
})();
var statearr_39306_39322 = state_39293__$1;
(statearr_39306_39322[(2)] = null);

(statearr_39306_39322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39294 === (8))){
var inst_39275 = (state_39293[(7)]);
var state_39293__$1 = state_39293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39293__$1,(11),out,inst_39275);
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
});})(c__29745__auto___39312,out))
;
return ((function (switch__29657__auto__,c__29745__auto___39312,out){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_39307 = [null,null,null,null,null,null,null,null,null];
(statearr_39307[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_39307[(1)] = (1));

return statearr_39307;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_39293){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39308){if((e39308 instanceof Object)){
var ex__29661__auto__ = e39308;
var statearr_39309_39323 = state_39293;
(statearr_39309_39323[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39324 = state_39293;
state_39293 = G__39324;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_39293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_39293);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39312,out))
})();
var state__29747__auto__ = (function (){var statearr_39310 = f__29746__auto__.call(null);
(statearr_39310[(6)] = c__29745__auto___39312);

return statearr_39310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39312,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39326 = arguments.length;
switch (G__39326) {
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
return (function (state_39389){
var state_val_39390 = (state_39389[(1)]);
if((state_val_39390 === (7))){
var inst_39385 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
var statearr_39391_39429 = state_39389__$1;
(statearr_39391_39429[(2)] = inst_39385);

(statearr_39391_39429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (20))){
var inst_39355 = (state_39389[(7)]);
var inst_39366 = (state_39389[(2)]);
var inst_39367 = cljs.core.next.call(null,inst_39355);
var inst_39341 = inst_39367;
var inst_39342 = null;
var inst_39343 = (0);
var inst_39344 = (0);
var state_39389__$1 = (function (){var statearr_39392 = state_39389;
(statearr_39392[(8)] = inst_39342);

(statearr_39392[(9)] = inst_39366);

(statearr_39392[(10)] = inst_39343);

(statearr_39392[(11)] = inst_39341);

(statearr_39392[(12)] = inst_39344);

return statearr_39392;
})();
var statearr_39393_39430 = state_39389__$1;
(statearr_39393_39430[(2)] = null);

(statearr_39393_39430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (1))){
var state_39389__$1 = state_39389;
var statearr_39394_39431 = state_39389__$1;
(statearr_39394_39431[(2)] = null);

(statearr_39394_39431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (4))){
var inst_39330 = (state_39389[(13)]);
var inst_39330__$1 = (state_39389[(2)]);
var inst_39331 = (inst_39330__$1 == null);
var state_39389__$1 = (function (){var statearr_39395 = state_39389;
(statearr_39395[(13)] = inst_39330__$1);

return statearr_39395;
})();
if(cljs.core.truth_(inst_39331)){
var statearr_39396_39432 = state_39389__$1;
(statearr_39396_39432[(1)] = (5));

} else {
var statearr_39397_39433 = state_39389__$1;
(statearr_39397_39433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (15))){
var state_39389__$1 = state_39389;
var statearr_39401_39434 = state_39389__$1;
(statearr_39401_39434[(2)] = null);

(statearr_39401_39434[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (21))){
var state_39389__$1 = state_39389;
var statearr_39402_39435 = state_39389__$1;
(statearr_39402_39435[(2)] = null);

(statearr_39402_39435[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (13))){
var inst_39342 = (state_39389[(8)]);
var inst_39343 = (state_39389[(10)]);
var inst_39341 = (state_39389[(11)]);
var inst_39344 = (state_39389[(12)]);
var inst_39351 = (state_39389[(2)]);
var inst_39352 = (inst_39344 + (1));
var tmp39398 = inst_39342;
var tmp39399 = inst_39343;
var tmp39400 = inst_39341;
var inst_39341__$1 = tmp39400;
var inst_39342__$1 = tmp39398;
var inst_39343__$1 = tmp39399;
var inst_39344__$1 = inst_39352;
var state_39389__$1 = (function (){var statearr_39403 = state_39389;
(statearr_39403[(8)] = inst_39342__$1);

(statearr_39403[(10)] = inst_39343__$1);

(statearr_39403[(14)] = inst_39351);

(statearr_39403[(11)] = inst_39341__$1);

(statearr_39403[(12)] = inst_39344__$1);

return statearr_39403;
})();
var statearr_39404_39436 = state_39389__$1;
(statearr_39404_39436[(2)] = null);

(statearr_39404_39436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (22))){
var state_39389__$1 = state_39389;
var statearr_39405_39437 = state_39389__$1;
(statearr_39405_39437[(2)] = null);

(statearr_39405_39437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (6))){
var inst_39330 = (state_39389[(13)]);
var inst_39339 = f.call(null,inst_39330);
var inst_39340 = cljs.core.seq.call(null,inst_39339);
var inst_39341 = inst_39340;
var inst_39342 = null;
var inst_39343 = (0);
var inst_39344 = (0);
var state_39389__$1 = (function (){var statearr_39406 = state_39389;
(statearr_39406[(8)] = inst_39342);

(statearr_39406[(10)] = inst_39343);

(statearr_39406[(11)] = inst_39341);

(statearr_39406[(12)] = inst_39344);

return statearr_39406;
})();
var statearr_39407_39438 = state_39389__$1;
(statearr_39407_39438[(2)] = null);

(statearr_39407_39438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (17))){
var inst_39355 = (state_39389[(7)]);
var inst_39359 = cljs.core.chunk_first.call(null,inst_39355);
var inst_39360 = cljs.core.chunk_rest.call(null,inst_39355);
var inst_39361 = cljs.core.count.call(null,inst_39359);
var inst_39341 = inst_39360;
var inst_39342 = inst_39359;
var inst_39343 = inst_39361;
var inst_39344 = (0);
var state_39389__$1 = (function (){var statearr_39408 = state_39389;
(statearr_39408[(8)] = inst_39342);

(statearr_39408[(10)] = inst_39343);

(statearr_39408[(11)] = inst_39341);

(statearr_39408[(12)] = inst_39344);

return statearr_39408;
})();
var statearr_39409_39439 = state_39389__$1;
(statearr_39409_39439[(2)] = null);

(statearr_39409_39439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (3))){
var inst_39387 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39389__$1,inst_39387);
} else {
if((state_val_39390 === (12))){
var inst_39375 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
var statearr_39410_39440 = state_39389__$1;
(statearr_39410_39440[(2)] = inst_39375);

(statearr_39410_39440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (2))){
var state_39389__$1 = state_39389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39389__$1,(4),in$);
} else {
if((state_val_39390 === (23))){
var inst_39383 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
var statearr_39411_39441 = state_39389__$1;
(statearr_39411_39441[(2)] = inst_39383);

(statearr_39411_39441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (19))){
var inst_39370 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
var statearr_39412_39442 = state_39389__$1;
(statearr_39412_39442[(2)] = inst_39370);

(statearr_39412_39442[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (11))){
var inst_39355 = (state_39389[(7)]);
var inst_39341 = (state_39389[(11)]);
var inst_39355__$1 = cljs.core.seq.call(null,inst_39341);
var state_39389__$1 = (function (){var statearr_39413 = state_39389;
(statearr_39413[(7)] = inst_39355__$1);

return statearr_39413;
})();
if(inst_39355__$1){
var statearr_39414_39443 = state_39389__$1;
(statearr_39414_39443[(1)] = (14));

} else {
var statearr_39415_39444 = state_39389__$1;
(statearr_39415_39444[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (9))){
var inst_39377 = (state_39389[(2)]);
var inst_39378 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39389__$1 = (function (){var statearr_39416 = state_39389;
(statearr_39416[(15)] = inst_39377);

return statearr_39416;
})();
if(cljs.core.truth_(inst_39378)){
var statearr_39417_39445 = state_39389__$1;
(statearr_39417_39445[(1)] = (21));

} else {
var statearr_39418_39446 = state_39389__$1;
(statearr_39418_39446[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (5))){
var inst_39333 = cljs.core.async.close_BANG_.call(null,out);
var state_39389__$1 = state_39389;
var statearr_39419_39447 = state_39389__$1;
(statearr_39419_39447[(2)] = inst_39333);

(statearr_39419_39447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (14))){
var inst_39355 = (state_39389[(7)]);
var inst_39357 = cljs.core.chunked_seq_QMARK_.call(null,inst_39355);
var state_39389__$1 = state_39389;
if(inst_39357){
var statearr_39420_39448 = state_39389__$1;
(statearr_39420_39448[(1)] = (17));

} else {
var statearr_39421_39449 = state_39389__$1;
(statearr_39421_39449[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (16))){
var inst_39373 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
var statearr_39422_39450 = state_39389__$1;
(statearr_39422_39450[(2)] = inst_39373);

(statearr_39422_39450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (10))){
var inst_39342 = (state_39389[(8)]);
var inst_39344 = (state_39389[(12)]);
var inst_39349 = cljs.core._nth.call(null,inst_39342,inst_39344);
var state_39389__$1 = state_39389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39389__$1,(13),out,inst_39349);
} else {
if((state_val_39390 === (18))){
var inst_39355 = (state_39389[(7)]);
var inst_39364 = cljs.core.first.call(null,inst_39355);
var state_39389__$1 = state_39389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39389__$1,(20),out,inst_39364);
} else {
if((state_val_39390 === (8))){
var inst_39343 = (state_39389[(10)]);
var inst_39344 = (state_39389[(12)]);
var inst_39346 = (inst_39344 < inst_39343);
var inst_39347 = inst_39346;
var state_39389__$1 = state_39389;
if(cljs.core.truth_(inst_39347)){
var statearr_39423_39451 = state_39389__$1;
(statearr_39423_39451[(1)] = (10));

} else {
var statearr_39424_39452 = state_39389__$1;
(statearr_39424_39452[(1)] = (11));

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
var statearr_39425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39425[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__);

(statearr_39425[(1)] = (1));

return statearr_39425;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____1 = (function (state_39389){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39426){if((e39426 instanceof Object)){
var ex__29661__auto__ = e39426;
var statearr_39427_39453 = state_39389;
(statearr_39427_39453[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39454 = state_39389;
state_39389 = G__39454;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__ = function(state_39389){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____1.call(this,state_39389);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29658__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto__))
})();
var state__29747__auto__ = (function (){var statearr_39428 = f__29746__auto__.call(null);
(statearr_39428[(6)] = c__29745__auto__);

return statearr_39428;
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
var G__39456 = arguments.length;
switch (G__39456) {
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
var G__39459 = arguments.length;
switch (G__39459) {
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
var G__39462 = arguments.length;
switch (G__39462) {
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
var c__29745__auto___39509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39509,out){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39509,out){
return (function (state_39486){
var state_val_39487 = (state_39486[(1)]);
if((state_val_39487 === (7))){
var inst_39481 = (state_39486[(2)]);
var state_39486__$1 = state_39486;
var statearr_39488_39510 = state_39486__$1;
(statearr_39488_39510[(2)] = inst_39481);

(statearr_39488_39510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (1))){
var inst_39463 = null;
var state_39486__$1 = (function (){var statearr_39489 = state_39486;
(statearr_39489[(7)] = inst_39463);

return statearr_39489;
})();
var statearr_39490_39511 = state_39486__$1;
(statearr_39490_39511[(2)] = null);

(statearr_39490_39511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (4))){
var inst_39466 = (state_39486[(8)]);
var inst_39466__$1 = (state_39486[(2)]);
var inst_39467 = (inst_39466__$1 == null);
var inst_39468 = cljs.core.not.call(null,inst_39467);
var state_39486__$1 = (function (){var statearr_39491 = state_39486;
(statearr_39491[(8)] = inst_39466__$1);

return statearr_39491;
})();
if(inst_39468){
var statearr_39492_39512 = state_39486__$1;
(statearr_39492_39512[(1)] = (5));

} else {
var statearr_39493_39513 = state_39486__$1;
(statearr_39493_39513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (6))){
var state_39486__$1 = state_39486;
var statearr_39494_39514 = state_39486__$1;
(statearr_39494_39514[(2)] = null);

(statearr_39494_39514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (3))){
var inst_39483 = (state_39486[(2)]);
var inst_39484 = cljs.core.async.close_BANG_.call(null,out);
var state_39486__$1 = (function (){var statearr_39495 = state_39486;
(statearr_39495[(9)] = inst_39483);

return statearr_39495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39486__$1,inst_39484);
} else {
if((state_val_39487 === (2))){
var state_39486__$1 = state_39486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39486__$1,(4),ch);
} else {
if((state_val_39487 === (11))){
var inst_39466 = (state_39486[(8)]);
var inst_39475 = (state_39486[(2)]);
var inst_39463 = inst_39466;
var state_39486__$1 = (function (){var statearr_39496 = state_39486;
(statearr_39496[(7)] = inst_39463);

(statearr_39496[(10)] = inst_39475);

return statearr_39496;
})();
var statearr_39497_39515 = state_39486__$1;
(statearr_39497_39515[(2)] = null);

(statearr_39497_39515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (9))){
var inst_39466 = (state_39486[(8)]);
var state_39486__$1 = state_39486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39486__$1,(11),out,inst_39466);
} else {
if((state_val_39487 === (5))){
var inst_39463 = (state_39486[(7)]);
var inst_39466 = (state_39486[(8)]);
var inst_39470 = cljs.core._EQ_.call(null,inst_39466,inst_39463);
var state_39486__$1 = state_39486;
if(inst_39470){
var statearr_39499_39516 = state_39486__$1;
(statearr_39499_39516[(1)] = (8));

} else {
var statearr_39500_39517 = state_39486__$1;
(statearr_39500_39517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (10))){
var inst_39478 = (state_39486[(2)]);
var state_39486__$1 = state_39486;
var statearr_39501_39518 = state_39486__$1;
(statearr_39501_39518[(2)] = inst_39478);

(statearr_39501_39518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39487 === (8))){
var inst_39463 = (state_39486[(7)]);
var tmp39498 = inst_39463;
var inst_39463__$1 = tmp39498;
var state_39486__$1 = (function (){var statearr_39502 = state_39486;
(statearr_39502[(7)] = inst_39463__$1);

return statearr_39502;
})();
var statearr_39503_39519 = state_39486__$1;
(statearr_39503_39519[(2)] = null);

(statearr_39503_39519[(1)] = (2));


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
});})(c__29745__auto___39509,out))
;
return ((function (switch__29657__auto__,c__29745__auto___39509,out){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_39504 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39504[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_39504[(1)] = (1));

return statearr_39504;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_39486){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39505){if((e39505 instanceof Object)){
var ex__29661__auto__ = e39505;
var statearr_39506_39520 = state_39486;
(statearr_39506_39520[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39521 = state_39486;
state_39486 = G__39521;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_39486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_39486);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39509,out))
})();
var state__29747__auto__ = (function (){var statearr_39507 = f__29746__auto__.call(null);
(statearr_39507[(6)] = c__29745__auto___39509);

return statearr_39507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39509,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39523 = arguments.length;
switch (G__39523) {
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
var c__29745__auto___39589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39589,out){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39589,out){
return (function (state_39561){
var state_val_39562 = (state_39561[(1)]);
if((state_val_39562 === (7))){
var inst_39557 = (state_39561[(2)]);
var state_39561__$1 = state_39561;
var statearr_39563_39590 = state_39561__$1;
(statearr_39563_39590[(2)] = inst_39557);

(statearr_39563_39590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39562 === (1))){
var inst_39524 = (new Array(n));
var inst_39525 = inst_39524;
var inst_39526 = (0);
var state_39561__$1 = (function (){var statearr_39564 = state_39561;
(statearr_39564[(7)] = inst_39525);

(statearr_39564[(8)] = inst_39526);

return statearr_39564;
})();
var statearr_39565_39591 = state_39561__$1;
(statearr_39565_39591[(2)] = null);

(statearr_39565_39591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39562 === (4))){
var inst_39529 = (state_39561[(9)]);
var inst_39529__$1 = (state_39561[(2)]);
var inst_39530 = (inst_39529__$1 == null);
var inst_39531 = cljs.core.not.call(null,inst_39530);
var state_39561__$1 = (function (){var statearr_39566 = state_39561;
(statearr_39566[(9)] = inst_39529__$1);

return statearr_39566;
})();
if(inst_39531){
var statearr_39567_39592 = state_39561__$1;
(statearr_39567_39592[(1)] = (5));

} else {
var statearr_39568_39593 = state_39561__$1;
(statearr_39568_39593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39562 === (15))){
var inst_39551 = (state_39561[(2)]);
var state_39561__$1 = state_39561;
var statearr_39569_39594 = state_39561__$1;
(statearr_39569_39594[(2)] = inst_39551);

(statearr_39569_39594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39562 === (13))){
var state_39561__$1 = state_39561;
var statearr_39570_39595 = state_39561__$1;
(statearr_39570_39595[(2)] = null);

(statearr_39570_39595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39562 === (6))){
var inst_39526 = (state_39561[(8)]);
var inst_39547 = (inst_39526 > (0));
var state_39561__$1 = state_39561;
if(cljs.core.truth_(inst_39547)){
var statearr_39571_39596 = state_39561__$1;
(statearr_39571_39596[(1)] = (12));

} else {
var statearr_39572_39597 = state_39561__$1;
(statearr_39572_39597[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39562 === (3))){
var inst_39559 = (state_39561[(2)]);
var state_39561__$1 = state_39561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39561__$1,inst_39559);
} else {
if((state_val_39562 === (12))){
var inst_39525 = (state_39561[(7)]);
var inst_39549 = cljs.core.vec.call(null,inst_39525);
var state_39561__$1 = state_39561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39561__$1,(15),out,inst_39549);
} else {
if((state_val_39562 === (2))){
var state_39561__$1 = state_39561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39561__$1,(4),ch);
} else {
if((state_val_39562 === (11))){
var inst_39541 = (state_39561[(2)]);
var inst_39542 = (new Array(n));
var inst_39525 = inst_39542;
var inst_39526 = (0);
var state_39561__$1 = (function (){var statearr_39573 = state_39561;
(statearr_39573[(10)] = inst_39541);

(statearr_39573[(7)] = inst_39525);

(statearr_39573[(8)] = inst_39526);

return statearr_39573;
})();
var statearr_39574_39598 = state_39561__$1;
(statearr_39574_39598[(2)] = null);

(statearr_39574_39598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39562 === (9))){
var inst_39525 = (state_39561[(7)]);
var inst_39539 = cljs.core.vec.call(null,inst_39525);
var state_39561__$1 = state_39561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39561__$1,(11),out,inst_39539);
} else {
if((state_val_39562 === (5))){
var inst_39534 = (state_39561[(11)]);
var inst_39525 = (state_39561[(7)]);
var inst_39529 = (state_39561[(9)]);
var inst_39526 = (state_39561[(8)]);
var inst_39533 = (inst_39525[inst_39526] = inst_39529);
var inst_39534__$1 = (inst_39526 + (1));
var inst_39535 = (inst_39534__$1 < n);
var state_39561__$1 = (function (){var statearr_39575 = state_39561;
(statearr_39575[(11)] = inst_39534__$1);

(statearr_39575[(12)] = inst_39533);

return statearr_39575;
})();
if(cljs.core.truth_(inst_39535)){
var statearr_39576_39599 = state_39561__$1;
(statearr_39576_39599[(1)] = (8));

} else {
var statearr_39577_39600 = state_39561__$1;
(statearr_39577_39600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39562 === (14))){
var inst_39554 = (state_39561[(2)]);
var inst_39555 = cljs.core.async.close_BANG_.call(null,out);
var state_39561__$1 = (function (){var statearr_39579 = state_39561;
(statearr_39579[(13)] = inst_39554);

return statearr_39579;
})();
var statearr_39580_39601 = state_39561__$1;
(statearr_39580_39601[(2)] = inst_39555);

(statearr_39580_39601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39562 === (10))){
var inst_39545 = (state_39561[(2)]);
var state_39561__$1 = state_39561;
var statearr_39581_39602 = state_39561__$1;
(statearr_39581_39602[(2)] = inst_39545);

(statearr_39581_39602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39562 === (8))){
var inst_39534 = (state_39561[(11)]);
var inst_39525 = (state_39561[(7)]);
var tmp39578 = inst_39525;
var inst_39525__$1 = tmp39578;
var inst_39526 = inst_39534;
var state_39561__$1 = (function (){var statearr_39582 = state_39561;
(statearr_39582[(7)] = inst_39525__$1);

(statearr_39582[(8)] = inst_39526);

return statearr_39582;
})();
var statearr_39583_39603 = state_39561__$1;
(statearr_39583_39603[(2)] = null);

(statearr_39583_39603[(1)] = (2));


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
});})(c__29745__auto___39589,out))
;
return ((function (switch__29657__auto__,c__29745__auto___39589,out){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_39584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39584[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_39584[(1)] = (1));

return statearr_39584;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_39561){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39585){if((e39585 instanceof Object)){
var ex__29661__auto__ = e39585;
var statearr_39586_39604 = state_39561;
(statearr_39586_39604[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39605 = state_39561;
state_39561 = G__39605;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_39561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_39561);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39589,out))
})();
var state__29747__auto__ = (function (){var statearr_39587 = f__29746__auto__.call(null);
(statearr_39587[(6)] = c__29745__auto___39589);

return statearr_39587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39589,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39607 = arguments.length;
switch (G__39607) {
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
var c__29745__auto___39677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29745__auto___39677,out){
return (function (){
var f__29746__auto__ = (function (){var switch__29657__auto__ = ((function (c__29745__auto___39677,out){
return (function (state_39649){
var state_val_39650 = (state_39649[(1)]);
if((state_val_39650 === (7))){
var inst_39645 = (state_39649[(2)]);
var state_39649__$1 = state_39649;
var statearr_39651_39678 = state_39649__$1;
(statearr_39651_39678[(2)] = inst_39645);

(statearr_39651_39678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (1))){
var inst_39608 = [];
var inst_39609 = inst_39608;
var inst_39610 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39649__$1 = (function (){var statearr_39652 = state_39649;
(statearr_39652[(7)] = inst_39609);

(statearr_39652[(8)] = inst_39610);

return statearr_39652;
})();
var statearr_39653_39679 = state_39649__$1;
(statearr_39653_39679[(2)] = null);

(statearr_39653_39679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (4))){
var inst_39613 = (state_39649[(9)]);
var inst_39613__$1 = (state_39649[(2)]);
var inst_39614 = (inst_39613__$1 == null);
var inst_39615 = cljs.core.not.call(null,inst_39614);
var state_39649__$1 = (function (){var statearr_39654 = state_39649;
(statearr_39654[(9)] = inst_39613__$1);

return statearr_39654;
})();
if(inst_39615){
var statearr_39655_39680 = state_39649__$1;
(statearr_39655_39680[(1)] = (5));

} else {
var statearr_39656_39681 = state_39649__$1;
(statearr_39656_39681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (15))){
var inst_39639 = (state_39649[(2)]);
var state_39649__$1 = state_39649;
var statearr_39657_39682 = state_39649__$1;
(statearr_39657_39682[(2)] = inst_39639);

(statearr_39657_39682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (13))){
var state_39649__$1 = state_39649;
var statearr_39658_39683 = state_39649__$1;
(statearr_39658_39683[(2)] = null);

(statearr_39658_39683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (6))){
var inst_39609 = (state_39649[(7)]);
var inst_39634 = inst_39609.length;
var inst_39635 = (inst_39634 > (0));
var state_39649__$1 = state_39649;
if(cljs.core.truth_(inst_39635)){
var statearr_39659_39684 = state_39649__$1;
(statearr_39659_39684[(1)] = (12));

} else {
var statearr_39660_39685 = state_39649__$1;
(statearr_39660_39685[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (3))){
var inst_39647 = (state_39649[(2)]);
var state_39649__$1 = state_39649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39649__$1,inst_39647);
} else {
if((state_val_39650 === (12))){
var inst_39609 = (state_39649[(7)]);
var inst_39637 = cljs.core.vec.call(null,inst_39609);
var state_39649__$1 = state_39649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39649__$1,(15),out,inst_39637);
} else {
if((state_val_39650 === (2))){
var state_39649__$1 = state_39649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39649__$1,(4),ch);
} else {
if((state_val_39650 === (11))){
var inst_39617 = (state_39649[(10)]);
var inst_39613 = (state_39649[(9)]);
var inst_39627 = (state_39649[(2)]);
var inst_39628 = [];
var inst_39629 = inst_39628.push(inst_39613);
var inst_39609 = inst_39628;
var inst_39610 = inst_39617;
var state_39649__$1 = (function (){var statearr_39661 = state_39649;
(statearr_39661[(7)] = inst_39609);

(statearr_39661[(11)] = inst_39627);

(statearr_39661[(8)] = inst_39610);

(statearr_39661[(12)] = inst_39629);

return statearr_39661;
})();
var statearr_39662_39686 = state_39649__$1;
(statearr_39662_39686[(2)] = null);

(statearr_39662_39686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (9))){
var inst_39609 = (state_39649[(7)]);
var inst_39625 = cljs.core.vec.call(null,inst_39609);
var state_39649__$1 = state_39649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39649__$1,(11),out,inst_39625);
} else {
if((state_val_39650 === (5))){
var inst_39617 = (state_39649[(10)]);
var inst_39610 = (state_39649[(8)]);
var inst_39613 = (state_39649[(9)]);
var inst_39617__$1 = f.call(null,inst_39613);
var inst_39618 = cljs.core._EQ_.call(null,inst_39617__$1,inst_39610);
var inst_39619 = cljs.core.keyword_identical_QMARK_.call(null,inst_39610,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39620 = (inst_39618) || (inst_39619);
var state_39649__$1 = (function (){var statearr_39663 = state_39649;
(statearr_39663[(10)] = inst_39617__$1);

return statearr_39663;
})();
if(cljs.core.truth_(inst_39620)){
var statearr_39664_39687 = state_39649__$1;
(statearr_39664_39687[(1)] = (8));

} else {
var statearr_39665_39688 = state_39649__$1;
(statearr_39665_39688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (14))){
var inst_39642 = (state_39649[(2)]);
var inst_39643 = cljs.core.async.close_BANG_.call(null,out);
var state_39649__$1 = (function (){var statearr_39667 = state_39649;
(statearr_39667[(13)] = inst_39642);

return statearr_39667;
})();
var statearr_39668_39689 = state_39649__$1;
(statearr_39668_39689[(2)] = inst_39643);

(statearr_39668_39689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (10))){
var inst_39632 = (state_39649[(2)]);
var state_39649__$1 = state_39649;
var statearr_39669_39690 = state_39649__$1;
(statearr_39669_39690[(2)] = inst_39632);

(statearr_39669_39690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39650 === (8))){
var inst_39609 = (state_39649[(7)]);
var inst_39617 = (state_39649[(10)]);
var inst_39613 = (state_39649[(9)]);
var inst_39622 = inst_39609.push(inst_39613);
var tmp39666 = inst_39609;
var inst_39609__$1 = tmp39666;
var inst_39610 = inst_39617;
var state_39649__$1 = (function (){var statearr_39670 = state_39649;
(statearr_39670[(7)] = inst_39609__$1);

(statearr_39670[(8)] = inst_39610);

(statearr_39670[(14)] = inst_39622);

return statearr_39670;
})();
var statearr_39671_39691 = state_39649__$1;
(statearr_39671_39691[(2)] = null);

(statearr_39671_39691[(1)] = (2));


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
});})(c__29745__auto___39677,out))
;
return ((function (switch__29657__auto__,c__29745__auto___39677,out){
return (function() {
var cljs$core$async$state_machine__29658__auto__ = null;
var cljs$core$async$state_machine__29658__auto____0 = (function (){
var statearr_39672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39672[(0)] = cljs$core$async$state_machine__29658__auto__);

(statearr_39672[(1)] = (1));

return statearr_39672;
});
var cljs$core$async$state_machine__29658__auto____1 = (function (state_39649){
while(true){
var ret_value__29659__auto__ = (function (){try{while(true){
var result__29660__auto__ = switch__29657__auto__.call(null,state_39649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29660__auto__;
}
break;
}
}catch (e39673){if((e39673 instanceof Object)){
var ex__29661__auto__ = e39673;
var statearr_39674_39692 = state_39649;
(statearr_39674_39692[(5)] = ex__29661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39693 = state_39649;
state_39649 = G__39693;
continue;
} else {
return ret_value__29659__auto__;
}
break;
}
});
cljs$core$async$state_machine__29658__auto__ = function(state_39649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29658__auto____1.call(this,state_39649);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29658__auto____0;
cljs$core$async$state_machine__29658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29658__auto____1;
return cljs$core$async$state_machine__29658__auto__;
})()
;})(switch__29657__auto__,c__29745__auto___39677,out))
})();
var state__29747__auto__ = (function (){var statearr_39675 = f__29746__auto__.call(null);
(statearr_39675[(6)] = c__29745__auto___39677);

return statearr_39675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29747__auto__);
});})(c__29745__auto___39677,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1514289209795
