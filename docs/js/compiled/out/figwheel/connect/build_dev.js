// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('meeting.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__47518__delegate = function (x){
if(cljs.core.truth_(meeting.core.mount_root)){
return cljs.core.apply.call(null,meeting.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'meeting.core/mount-root' is missing");
}
};
var G__47518 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__47519__i = 0, G__47519__a = new Array(arguments.length -  0);
while (G__47519__i < G__47519__a.length) {G__47519__a[G__47519__i] = arguments[G__47519__i + 0]; ++G__47519__i;}
  x = new cljs.core.IndexedSeq(G__47519__a,0,null);
} 
return G__47518__delegate.call(this,x);};
G__47518.cljs$lang$maxFixedArity = 0;
G__47518.cljs$lang$applyTo = (function (arglist__47520){
var x = cljs.core.seq(arglist__47520);
return G__47518__delegate(x);
});
G__47518.cljs$core$IFn$_invoke$arity$variadic = G__47518__delegate;
return G__47518;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1514665968427
