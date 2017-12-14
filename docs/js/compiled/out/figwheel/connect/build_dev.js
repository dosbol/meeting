// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('meeting.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__32497__delegate = function (x){
if(cljs.core.truth_(meeting.core.mount_root)){
return cljs.core.apply.call(null,meeting.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'meeting.core/mount-root' is missing");
}
};
var G__32497 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__32498__i = 0, G__32498__a = new Array(arguments.length -  0);
while (G__32498__i < G__32498__a.length) {G__32498__a[G__32498__i] = arguments[G__32498__i + 0]; ++G__32498__i;}
  x = new cljs.core.IndexedSeq(G__32498__a,0,null);
} 
return G__32497__delegate.call(this,x);};
G__32497.cljs$lang$maxFixedArity = 0;
G__32497.cljs$lang$applyTo = (function (arglist__32499){
var x = cljs.core.seq(arglist__32499);
return G__32497__delegate(x);
});
G__32497.cljs$core$IFn$_invoke$arity$variadic = G__32497__delegate;
return G__32497;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1513248744307
