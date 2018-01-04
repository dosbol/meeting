// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('meeting.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__47320__delegate = function (x){
if(cljs.core.truth_(meeting.core.mount_root)){
return cljs.core.apply.call(null,meeting.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'meeting.core/mount-root' is missing");
}
};
var G__47320 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__47321__i = 0, G__47321__a = new Array(arguments.length -  0);
while (G__47321__i < G__47321__a.length) {G__47321__a[G__47321__i] = arguments[G__47321__i + 0]; ++G__47321__i;}
  x = new cljs.core.IndexedSeq(G__47321__a,0,null);
} 
return G__47320__delegate.call(this,x);};
G__47320.cljs$lang$maxFixedArity = 0;
G__47320.cljs$lang$applyTo = (function (arglist__47322){
var x = cljs.core.seq(arglist__47322);
return G__47320__delegate(x);
});
G__47320.cljs$core$IFn$_invoke$arity$variadic = G__47320__delegate;
return G__47320;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1515066655102
