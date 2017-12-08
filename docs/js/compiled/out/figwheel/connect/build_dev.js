// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('meeting.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__45922__delegate = function (x){
if(cljs.core.truth_(meeting.core.mount_root)){
return cljs.core.apply.call(null,meeting.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'meeting.core/mount-root' is missing");
}
};
var G__45922 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__45923__i = 0, G__45923__a = new Array(arguments.length -  0);
while (G__45923__i < G__45923__a.length) {G__45923__a[G__45923__i] = arguments[G__45923__i + 0]; ++G__45923__i;}
  x = new cljs.core.IndexedSeq(G__45923__a,0,null);
} 
return G__45922__delegate.call(this,x);};
G__45922.cljs$lang$maxFixedArity = 0;
G__45922.cljs$lang$applyTo = (function (arglist__45924){
var x = cljs.core.seq(arglist__45924);
return G__45922__delegate(x);
});
G__45922.cljs$core$IFn$_invoke$arity$variadic = G__45922__delegate;
return G__45922;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1512677428652
