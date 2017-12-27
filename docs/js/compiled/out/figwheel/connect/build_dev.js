// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('meeting.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__46267__delegate = function (x){
if(cljs.core.truth_(meeting.core.mount_root)){
return cljs.core.apply.call(null,meeting.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'meeting.core/mount-root' is missing");
}
};
var G__46267 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__46268__i = 0, G__46268__a = new Array(arguments.length -  0);
while (G__46268__i < G__46268__a.length) {G__46268__a[G__46268__i] = arguments[G__46268__i + 0]; ++G__46268__i;}
  x = new cljs.core.IndexedSeq(G__46268__a,0,null);
} 
return G__46267__delegate.call(this,x);};
G__46267.cljs$lang$maxFixedArity = 0;
G__46267.cljs$lang$applyTo = (function (arglist__46269){
var x = cljs.core.seq(arglist__46269);
return G__46267__delegate(x);
});
G__46267.cljs$core$IFn$_invoke$arity$variadic = G__46267__delegate;
return G__46267;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1514378721306
