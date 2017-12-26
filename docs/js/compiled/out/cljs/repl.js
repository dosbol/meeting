// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36239){
var map__36240 = p__36239;
var map__36240__$1 = ((((!((map__36240 == null)))?((((map__36240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36240):map__36240);
var m = map__36240__$1;
var n = cljs.core.get.call(null,map__36240__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36240__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36242_36264 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36243_36265 = null;
var count__36244_36266 = (0);
var i__36245_36267 = (0);
while(true){
if((i__36245_36267 < count__36244_36266)){
var f_36268 = cljs.core._nth.call(null,chunk__36243_36265,i__36245_36267);
cljs.core.println.call(null,"  ",f_36268);

var G__36269 = seq__36242_36264;
var G__36270 = chunk__36243_36265;
var G__36271 = count__36244_36266;
var G__36272 = (i__36245_36267 + (1));
seq__36242_36264 = G__36269;
chunk__36243_36265 = G__36270;
count__36244_36266 = G__36271;
i__36245_36267 = G__36272;
continue;
} else {
var temp__4657__auto___36273 = cljs.core.seq.call(null,seq__36242_36264);
if(temp__4657__auto___36273){
var seq__36242_36274__$1 = temp__4657__auto___36273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36242_36274__$1)){
var c__28034__auto___36275 = cljs.core.chunk_first.call(null,seq__36242_36274__$1);
var G__36276 = cljs.core.chunk_rest.call(null,seq__36242_36274__$1);
var G__36277 = c__28034__auto___36275;
var G__36278 = cljs.core.count.call(null,c__28034__auto___36275);
var G__36279 = (0);
seq__36242_36264 = G__36276;
chunk__36243_36265 = G__36277;
count__36244_36266 = G__36278;
i__36245_36267 = G__36279;
continue;
} else {
var f_36280 = cljs.core.first.call(null,seq__36242_36274__$1);
cljs.core.println.call(null,"  ",f_36280);

var G__36281 = cljs.core.next.call(null,seq__36242_36274__$1);
var G__36282 = null;
var G__36283 = (0);
var G__36284 = (0);
seq__36242_36264 = G__36281;
chunk__36243_36265 = G__36282;
count__36244_36266 = G__36283;
i__36245_36267 = G__36284;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36285 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36285);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36285)))?cljs.core.second.call(null,arglists_36285):arglists_36285));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36246_36286 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36247_36287 = null;
var count__36248_36288 = (0);
var i__36249_36289 = (0);
while(true){
if((i__36249_36289 < count__36248_36288)){
var vec__36250_36290 = cljs.core._nth.call(null,chunk__36247_36287,i__36249_36289);
var name_36291 = cljs.core.nth.call(null,vec__36250_36290,(0),null);
var map__36253_36292 = cljs.core.nth.call(null,vec__36250_36290,(1),null);
var map__36253_36293__$1 = ((((!((map__36253_36292 == null)))?((((map__36253_36292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36253_36292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36253_36292):map__36253_36292);
var doc_36294 = cljs.core.get.call(null,map__36253_36293__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36295 = cljs.core.get.call(null,map__36253_36293__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36291);

cljs.core.println.call(null," ",arglists_36295);

if(cljs.core.truth_(doc_36294)){
cljs.core.println.call(null," ",doc_36294);
} else {
}

var G__36296 = seq__36246_36286;
var G__36297 = chunk__36247_36287;
var G__36298 = count__36248_36288;
var G__36299 = (i__36249_36289 + (1));
seq__36246_36286 = G__36296;
chunk__36247_36287 = G__36297;
count__36248_36288 = G__36298;
i__36249_36289 = G__36299;
continue;
} else {
var temp__4657__auto___36300 = cljs.core.seq.call(null,seq__36246_36286);
if(temp__4657__auto___36300){
var seq__36246_36301__$1 = temp__4657__auto___36300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36246_36301__$1)){
var c__28034__auto___36302 = cljs.core.chunk_first.call(null,seq__36246_36301__$1);
var G__36303 = cljs.core.chunk_rest.call(null,seq__36246_36301__$1);
var G__36304 = c__28034__auto___36302;
var G__36305 = cljs.core.count.call(null,c__28034__auto___36302);
var G__36306 = (0);
seq__36246_36286 = G__36303;
chunk__36247_36287 = G__36304;
count__36248_36288 = G__36305;
i__36249_36289 = G__36306;
continue;
} else {
var vec__36255_36307 = cljs.core.first.call(null,seq__36246_36301__$1);
var name_36308 = cljs.core.nth.call(null,vec__36255_36307,(0),null);
var map__36258_36309 = cljs.core.nth.call(null,vec__36255_36307,(1),null);
var map__36258_36310__$1 = ((((!((map__36258_36309 == null)))?((((map__36258_36309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36258_36309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36258_36309):map__36258_36309);
var doc_36311 = cljs.core.get.call(null,map__36258_36310__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36312 = cljs.core.get.call(null,map__36258_36310__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36308);

cljs.core.println.call(null," ",arglists_36312);

if(cljs.core.truth_(doc_36311)){
cljs.core.println.call(null," ",doc_36311);
} else {
}

var G__36313 = cljs.core.next.call(null,seq__36246_36301__$1);
var G__36314 = null;
var G__36315 = (0);
var G__36316 = (0);
seq__36246_36286 = G__36313;
chunk__36247_36287 = G__36314;
count__36248_36288 = G__36315;
i__36249_36289 = G__36316;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36260 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36261 = null;
var count__36262 = (0);
var i__36263 = (0);
while(true){
if((i__36263 < count__36262)){
var role = cljs.core._nth.call(null,chunk__36261,i__36263);
var temp__4657__auto___36317__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36317__$1)){
var spec_36318 = temp__4657__auto___36317__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36318));
} else {
}

var G__36319 = seq__36260;
var G__36320 = chunk__36261;
var G__36321 = count__36262;
var G__36322 = (i__36263 + (1));
seq__36260 = G__36319;
chunk__36261 = G__36320;
count__36262 = G__36321;
i__36263 = G__36322;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36260);
if(temp__4657__auto____$1){
var seq__36260__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36260__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__36260__$1);
var G__36323 = cljs.core.chunk_rest.call(null,seq__36260__$1);
var G__36324 = c__28034__auto__;
var G__36325 = cljs.core.count.call(null,c__28034__auto__);
var G__36326 = (0);
seq__36260 = G__36323;
chunk__36261 = G__36324;
count__36262 = G__36325;
i__36263 = G__36326;
continue;
} else {
var role = cljs.core.first.call(null,seq__36260__$1);
var temp__4657__auto___36327__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36327__$2)){
var spec_36328 = temp__4657__auto___36327__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36328));
} else {
}

var G__36329 = cljs.core.next.call(null,seq__36260__$1);
var G__36330 = null;
var G__36331 = (0);
var G__36332 = (0);
seq__36260 = G__36329;
chunk__36261 = G__36330;
count__36262 = G__36331;
i__36263 = G__36332;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1514289191434
