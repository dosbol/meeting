// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('meeting.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__46513__delegate = function (x){
if(cljs.core.truth_(meeting.core.mount_root)){
return cljs.core.apply.call(null,meeting.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'meeting.core/mount-root' is missing");
}
};
var G__46513 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__46514__i = 0, G__46514__a = new Array(arguments.length -  0);
while (G__46514__i < G__46514__a.length) {G__46514__a[G__46514__i] = arguments[G__46514__i + 0]; ++G__46514__i;}
  x = new cljs.core.IndexedSeq(G__46514__a,0,null);
} 
return G__46513__delegate.call(this,x);};
G__46513.cljs$lang$maxFixedArity = 0;
G__46513.cljs$lang$applyTo = (function (arglist__46515){
var x = cljs.core.seq(arglist__46515);
return G__46513__delegate(x);
});
G__46513.cljs$core$IFn$_invoke$arity$variadic = G__46513__delegate;
return G__46513;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1514319509050
