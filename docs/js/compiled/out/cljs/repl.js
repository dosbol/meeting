// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36238){
var map__36239 = p__36238;
var map__36239__$1 = ((((!((map__36239 == null)))?((((map__36239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36239):map__36239);
var m = map__36239__$1;
var n = cljs.core.get.call(null,map__36239__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36239__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36241_36263 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36242_36264 = null;
var count__36243_36265 = (0);
var i__36244_36266 = (0);
while(true){
if((i__36244_36266 < count__36243_36265)){
var f_36267 = cljs.core._nth.call(null,chunk__36242_36264,i__36244_36266);
cljs.core.println.call(null,"  ",f_36267);

var G__36268 = seq__36241_36263;
var G__36269 = chunk__36242_36264;
var G__36270 = count__36243_36265;
var G__36271 = (i__36244_36266 + (1));
seq__36241_36263 = G__36268;
chunk__36242_36264 = G__36269;
count__36243_36265 = G__36270;
i__36244_36266 = G__36271;
continue;
} else {
var temp__4657__auto___36272 = cljs.core.seq.call(null,seq__36241_36263);
if(temp__4657__auto___36272){
var seq__36241_36273__$1 = temp__4657__auto___36272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36241_36273__$1)){
var c__28034__auto___36274 = cljs.core.chunk_first.call(null,seq__36241_36273__$1);
var G__36275 = cljs.core.chunk_rest.call(null,seq__36241_36273__$1);
var G__36276 = c__28034__auto___36274;
var G__36277 = cljs.core.count.call(null,c__28034__auto___36274);
var G__36278 = (0);
seq__36241_36263 = G__36275;
chunk__36242_36264 = G__36276;
count__36243_36265 = G__36277;
i__36244_36266 = G__36278;
continue;
} else {
var f_36279 = cljs.core.first.call(null,seq__36241_36273__$1);
cljs.core.println.call(null,"  ",f_36279);

var G__36280 = cljs.core.next.call(null,seq__36241_36273__$1);
var G__36281 = null;
var G__36282 = (0);
var G__36283 = (0);
seq__36241_36263 = G__36280;
chunk__36242_36264 = G__36281;
count__36243_36265 = G__36282;
i__36244_36266 = G__36283;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36284 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36284);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36284)))?cljs.core.second.call(null,arglists_36284):arglists_36284));
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
var seq__36245_36285 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36246_36286 = null;
var count__36247_36287 = (0);
var i__36248_36288 = (0);
while(true){
if((i__36248_36288 < count__36247_36287)){
var vec__36249_36289 = cljs.core._nth.call(null,chunk__36246_36286,i__36248_36288);
var name_36290 = cljs.core.nth.call(null,vec__36249_36289,(0),null);
var map__36252_36291 = cljs.core.nth.call(null,vec__36249_36289,(1),null);
var map__36252_36292__$1 = ((((!((map__36252_36291 == null)))?((((map__36252_36291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36252_36291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36252_36291):map__36252_36291);
var doc_36293 = cljs.core.get.call(null,map__36252_36292__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36294 = cljs.core.get.call(null,map__36252_36292__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36290);

cljs.core.println.call(null," ",arglists_36294);

if(cljs.core.truth_(doc_36293)){
cljs.core.println.call(null," ",doc_36293);
} else {
}

var G__36295 = seq__36245_36285;
var G__36296 = chunk__36246_36286;
var G__36297 = count__36247_36287;
var G__36298 = (i__36248_36288 + (1));
seq__36245_36285 = G__36295;
chunk__36246_36286 = G__36296;
count__36247_36287 = G__36297;
i__36248_36288 = G__36298;
continue;
} else {
var temp__4657__auto___36299 = cljs.core.seq.call(null,seq__36245_36285);
if(temp__4657__auto___36299){
var seq__36245_36300__$1 = temp__4657__auto___36299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36245_36300__$1)){
var c__28034__auto___36301 = cljs.core.chunk_first.call(null,seq__36245_36300__$1);
var G__36302 = cljs.core.chunk_rest.call(null,seq__36245_36300__$1);
var G__36303 = c__28034__auto___36301;
var G__36304 = cljs.core.count.call(null,c__28034__auto___36301);
var G__36305 = (0);
seq__36245_36285 = G__36302;
chunk__36246_36286 = G__36303;
count__36247_36287 = G__36304;
i__36248_36288 = G__36305;
continue;
} else {
var vec__36254_36306 = cljs.core.first.call(null,seq__36245_36300__$1);
var name_36307 = cljs.core.nth.call(null,vec__36254_36306,(0),null);
var map__36257_36308 = cljs.core.nth.call(null,vec__36254_36306,(1),null);
var map__36257_36309__$1 = ((((!((map__36257_36308 == null)))?((((map__36257_36308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36257_36308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36257_36308):map__36257_36308);
var doc_36310 = cljs.core.get.call(null,map__36257_36309__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36311 = cljs.core.get.call(null,map__36257_36309__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36307);

cljs.core.println.call(null," ",arglists_36311);

if(cljs.core.truth_(doc_36310)){
cljs.core.println.call(null," ",doc_36310);
} else {
}

var G__36312 = cljs.core.next.call(null,seq__36245_36300__$1);
var G__36313 = null;
var G__36314 = (0);
var G__36315 = (0);
seq__36245_36285 = G__36312;
chunk__36246_36286 = G__36313;
count__36247_36287 = G__36314;
i__36248_36288 = G__36315;
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

var seq__36259 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36260 = null;
var count__36261 = (0);
var i__36262 = (0);
while(true){
if((i__36262 < count__36261)){
var role = cljs.core._nth.call(null,chunk__36260,i__36262);
var temp__4657__auto___36316__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36316__$1)){
var spec_36317 = temp__4657__auto___36316__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36317));
} else {
}

var G__36318 = seq__36259;
var G__36319 = chunk__36260;
var G__36320 = count__36261;
var G__36321 = (i__36262 + (1));
seq__36259 = G__36318;
chunk__36260 = G__36319;
count__36261 = G__36320;
i__36262 = G__36321;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36259);
if(temp__4657__auto____$1){
var seq__36259__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36259__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__36259__$1);
var G__36322 = cljs.core.chunk_rest.call(null,seq__36259__$1);
var G__36323 = c__28034__auto__;
var G__36324 = cljs.core.count.call(null,c__28034__auto__);
var G__36325 = (0);
seq__36259 = G__36322;
chunk__36260 = G__36323;
count__36261 = G__36324;
i__36262 = G__36325;
continue;
} else {
var role = cljs.core.first.call(null,seq__36259__$1);
var temp__4657__auto___36326__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36326__$2)){
var spec_36327 = temp__4657__auto___36326__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36327));
} else {
}

var G__36328 = cljs.core.next.call(null,seq__36259__$1);
var G__36329 = null;
var G__36330 = (0);
var G__36331 = (0);
seq__36259 = G__36328;
chunk__36260 = G__36329;
count__36261 = G__36330;
i__36262 = G__36331;
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

//# sourceMappingURL=repl.js.map?rel=1514366051909
