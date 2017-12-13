// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37353){
var map__37354 = p__37353;
var map__37354__$1 = ((((!((map__37354 == null)))?((((map__37354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37354):map__37354);
var m = map__37354__$1;
var n = cljs.core.get.call(null,map__37354__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37354__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37356_37378 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37357_37379 = null;
var count__37358_37380 = (0);
var i__37359_37381 = (0);
while(true){
if((i__37359_37381 < count__37358_37380)){
var f_37382 = cljs.core._nth.call(null,chunk__37357_37379,i__37359_37381);
cljs.core.println.call(null,"  ",f_37382);

var G__37383 = seq__37356_37378;
var G__37384 = chunk__37357_37379;
var G__37385 = count__37358_37380;
var G__37386 = (i__37359_37381 + (1));
seq__37356_37378 = G__37383;
chunk__37357_37379 = G__37384;
count__37358_37380 = G__37385;
i__37359_37381 = G__37386;
continue;
} else {
var temp__4657__auto___37387 = cljs.core.seq.call(null,seq__37356_37378);
if(temp__4657__auto___37387){
var seq__37356_37388__$1 = temp__4657__auto___37387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37356_37388__$1)){
var c__29125__auto___37389 = cljs.core.chunk_first.call(null,seq__37356_37388__$1);
var G__37390 = cljs.core.chunk_rest.call(null,seq__37356_37388__$1);
var G__37391 = c__29125__auto___37389;
var G__37392 = cljs.core.count.call(null,c__29125__auto___37389);
var G__37393 = (0);
seq__37356_37378 = G__37390;
chunk__37357_37379 = G__37391;
count__37358_37380 = G__37392;
i__37359_37381 = G__37393;
continue;
} else {
var f_37394 = cljs.core.first.call(null,seq__37356_37388__$1);
cljs.core.println.call(null,"  ",f_37394);

var G__37395 = cljs.core.next.call(null,seq__37356_37388__$1);
var G__37396 = null;
var G__37397 = (0);
var G__37398 = (0);
seq__37356_37378 = G__37395;
chunk__37357_37379 = G__37396;
count__37358_37380 = G__37397;
i__37359_37381 = G__37398;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37399 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37399);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37399)))?cljs.core.second.call(null,arglists_37399):arglists_37399));
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
var seq__37360_37400 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37361_37401 = null;
var count__37362_37402 = (0);
var i__37363_37403 = (0);
while(true){
if((i__37363_37403 < count__37362_37402)){
var vec__37364_37404 = cljs.core._nth.call(null,chunk__37361_37401,i__37363_37403);
var name_37405 = cljs.core.nth.call(null,vec__37364_37404,(0),null);
var map__37367_37406 = cljs.core.nth.call(null,vec__37364_37404,(1),null);
var map__37367_37407__$1 = ((((!((map__37367_37406 == null)))?((((map__37367_37406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37367_37406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37367_37406):map__37367_37406);
var doc_37408 = cljs.core.get.call(null,map__37367_37407__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37409 = cljs.core.get.call(null,map__37367_37407__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37405);

cljs.core.println.call(null," ",arglists_37409);

if(cljs.core.truth_(doc_37408)){
cljs.core.println.call(null," ",doc_37408);
} else {
}

var G__37410 = seq__37360_37400;
var G__37411 = chunk__37361_37401;
var G__37412 = count__37362_37402;
var G__37413 = (i__37363_37403 + (1));
seq__37360_37400 = G__37410;
chunk__37361_37401 = G__37411;
count__37362_37402 = G__37412;
i__37363_37403 = G__37413;
continue;
} else {
var temp__4657__auto___37414 = cljs.core.seq.call(null,seq__37360_37400);
if(temp__4657__auto___37414){
var seq__37360_37415__$1 = temp__4657__auto___37414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37360_37415__$1)){
var c__29125__auto___37416 = cljs.core.chunk_first.call(null,seq__37360_37415__$1);
var G__37417 = cljs.core.chunk_rest.call(null,seq__37360_37415__$1);
var G__37418 = c__29125__auto___37416;
var G__37419 = cljs.core.count.call(null,c__29125__auto___37416);
var G__37420 = (0);
seq__37360_37400 = G__37417;
chunk__37361_37401 = G__37418;
count__37362_37402 = G__37419;
i__37363_37403 = G__37420;
continue;
} else {
var vec__37369_37421 = cljs.core.first.call(null,seq__37360_37415__$1);
var name_37422 = cljs.core.nth.call(null,vec__37369_37421,(0),null);
var map__37372_37423 = cljs.core.nth.call(null,vec__37369_37421,(1),null);
var map__37372_37424__$1 = ((((!((map__37372_37423 == null)))?((((map__37372_37423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37372_37423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37372_37423):map__37372_37423);
var doc_37425 = cljs.core.get.call(null,map__37372_37424__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37426 = cljs.core.get.call(null,map__37372_37424__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37422);

cljs.core.println.call(null," ",arglists_37426);

if(cljs.core.truth_(doc_37425)){
cljs.core.println.call(null," ",doc_37425);
} else {
}

var G__37427 = cljs.core.next.call(null,seq__37360_37415__$1);
var G__37428 = null;
var G__37429 = (0);
var G__37430 = (0);
seq__37360_37400 = G__37427;
chunk__37361_37401 = G__37428;
count__37362_37402 = G__37429;
i__37363_37403 = G__37430;
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

var seq__37374 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37375 = null;
var count__37376 = (0);
var i__37377 = (0);
while(true){
if((i__37377 < count__37376)){
var role = cljs.core._nth.call(null,chunk__37375,i__37377);
var temp__4657__auto___37431__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37431__$1)){
var spec_37432 = temp__4657__auto___37431__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37432));
} else {
}

var G__37433 = seq__37374;
var G__37434 = chunk__37375;
var G__37435 = count__37376;
var G__37436 = (i__37377 + (1));
seq__37374 = G__37433;
chunk__37375 = G__37434;
count__37376 = G__37435;
i__37377 = G__37436;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37374);
if(temp__4657__auto____$1){
var seq__37374__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37374__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37374__$1);
var G__37437 = cljs.core.chunk_rest.call(null,seq__37374__$1);
var G__37438 = c__29125__auto__;
var G__37439 = cljs.core.count.call(null,c__29125__auto__);
var G__37440 = (0);
seq__37374 = G__37437;
chunk__37375 = G__37438;
count__37376 = G__37439;
i__37377 = G__37440;
continue;
} else {
var role = cljs.core.first.call(null,seq__37374__$1);
var temp__4657__auto___37441__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37441__$2)){
var spec_37442 = temp__4657__auto___37441__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37442));
} else {
}

var G__37443 = cljs.core.next.call(null,seq__37374__$1);
var G__37444 = null;
var G__37445 = (0);
var G__37446 = (0);
seq__37374 = G__37443;
chunk__37375 = G__37444;
count__37376 = G__37445;
i__37377 = G__37446;
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

//# sourceMappingURL=repl.js.map?rel=1513190776188
