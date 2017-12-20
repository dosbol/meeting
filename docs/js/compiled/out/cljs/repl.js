// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37387){
var map__37388 = p__37387;
var map__37388__$1 = ((((!((map__37388 == null)))?((((map__37388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37388):map__37388);
var m = map__37388__$1;
var n = cljs.core.get.call(null,map__37388__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37388__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37390_37412 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37391_37413 = null;
var count__37392_37414 = (0);
var i__37393_37415 = (0);
while(true){
if((i__37393_37415 < count__37392_37414)){
var f_37416 = cljs.core._nth.call(null,chunk__37391_37413,i__37393_37415);
cljs.core.println.call(null,"  ",f_37416);

var G__37417 = seq__37390_37412;
var G__37418 = chunk__37391_37413;
var G__37419 = count__37392_37414;
var G__37420 = (i__37393_37415 + (1));
seq__37390_37412 = G__37417;
chunk__37391_37413 = G__37418;
count__37392_37414 = G__37419;
i__37393_37415 = G__37420;
continue;
} else {
var temp__4657__auto___37421 = cljs.core.seq.call(null,seq__37390_37412);
if(temp__4657__auto___37421){
var seq__37390_37422__$1 = temp__4657__auto___37421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37390_37422__$1)){
var c__29125__auto___37423 = cljs.core.chunk_first.call(null,seq__37390_37422__$1);
var G__37424 = cljs.core.chunk_rest.call(null,seq__37390_37422__$1);
var G__37425 = c__29125__auto___37423;
var G__37426 = cljs.core.count.call(null,c__29125__auto___37423);
var G__37427 = (0);
seq__37390_37412 = G__37424;
chunk__37391_37413 = G__37425;
count__37392_37414 = G__37426;
i__37393_37415 = G__37427;
continue;
} else {
var f_37428 = cljs.core.first.call(null,seq__37390_37422__$1);
cljs.core.println.call(null,"  ",f_37428);

var G__37429 = cljs.core.next.call(null,seq__37390_37422__$1);
var G__37430 = null;
var G__37431 = (0);
var G__37432 = (0);
seq__37390_37412 = G__37429;
chunk__37391_37413 = G__37430;
count__37392_37414 = G__37431;
i__37393_37415 = G__37432;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37433 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37433);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37433)))?cljs.core.second.call(null,arglists_37433):arglists_37433));
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
var seq__37394_37434 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37395_37435 = null;
var count__37396_37436 = (0);
var i__37397_37437 = (0);
while(true){
if((i__37397_37437 < count__37396_37436)){
var vec__37398_37438 = cljs.core._nth.call(null,chunk__37395_37435,i__37397_37437);
var name_37439 = cljs.core.nth.call(null,vec__37398_37438,(0),null);
var map__37401_37440 = cljs.core.nth.call(null,vec__37398_37438,(1),null);
var map__37401_37441__$1 = ((((!((map__37401_37440 == null)))?((((map__37401_37440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37401_37440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37401_37440):map__37401_37440);
var doc_37442 = cljs.core.get.call(null,map__37401_37441__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37443 = cljs.core.get.call(null,map__37401_37441__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37439);

cljs.core.println.call(null," ",arglists_37443);

if(cljs.core.truth_(doc_37442)){
cljs.core.println.call(null," ",doc_37442);
} else {
}

var G__37444 = seq__37394_37434;
var G__37445 = chunk__37395_37435;
var G__37446 = count__37396_37436;
var G__37447 = (i__37397_37437 + (1));
seq__37394_37434 = G__37444;
chunk__37395_37435 = G__37445;
count__37396_37436 = G__37446;
i__37397_37437 = G__37447;
continue;
} else {
var temp__4657__auto___37448 = cljs.core.seq.call(null,seq__37394_37434);
if(temp__4657__auto___37448){
var seq__37394_37449__$1 = temp__4657__auto___37448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37394_37449__$1)){
var c__29125__auto___37450 = cljs.core.chunk_first.call(null,seq__37394_37449__$1);
var G__37451 = cljs.core.chunk_rest.call(null,seq__37394_37449__$1);
var G__37452 = c__29125__auto___37450;
var G__37453 = cljs.core.count.call(null,c__29125__auto___37450);
var G__37454 = (0);
seq__37394_37434 = G__37451;
chunk__37395_37435 = G__37452;
count__37396_37436 = G__37453;
i__37397_37437 = G__37454;
continue;
} else {
var vec__37403_37455 = cljs.core.first.call(null,seq__37394_37449__$1);
var name_37456 = cljs.core.nth.call(null,vec__37403_37455,(0),null);
var map__37406_37457 = cljs.core.nth.call(null,vec__37403_37455,(1),null);
var map__37406_37458__$1 = ((((!((map__37406_37457 == null)))?((((map__37406_37457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37406_37457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37406_37457):map__37406_37457);
var doc_37459 = cljs.core.get.call(null,map__37406_37458__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37460 = cljs.core.get.call(null,map__37406_37458__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37456);

cljs.core.println.call(null," ",arglists_37460);

if(cljs.core.truth_(doc_37459)){
cljs.core.println.call(null," ",doc_37459);
} else {
}

var G__37461 = cljs.core.next.call(null,seq__37394_37449__$1);
var G__37462 = null;
var G__37463 = (0);
var G__37464 = (0);
seq__37394_37434 = G__37461;
chunk__37395_37435 = G__37462;
count__37396_37436 = G__37463;
i__37397_37437 = G__37464;
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

var seq__37408 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37409 = null;
var count__37410 = (0);
var i__37411 = (0);
while(true){
if((i__37411 < count__37410)){
var role = cljs.core._nth.call(null,chunk__37409,i__37411);
var temp__4657__auto___37465__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37465__$1)){
var spec_37466 = temp__4657__auto___37465__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37466));
} else {
}

var G__37467 = seq__37408;
var G__37468 = chunk__37409;
var G__37469 = count__37410;
var G__37470 = (i__37411 + (1));
seq__37408 = G__37467;
chunk__37409 = G__37468;
count__37410 = G__37469;
i__37411 = G__37470;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37408);
if(temp__4657__auto____$1){
var seq__37408__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37408__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37408__$1);
var G__37471 = cljs.core.chunk_rest.call(null,seq__37408__$1);
var G__37472 = c__29125__auto__;
var G__37473 = cljs.core.count.call(null,c__29125__auto__);
var G__37474 = (0);
seq__37408 = G__37471;
chunk__37409 = G__37472;
count__37410 = G__37473;
i__37411 = G__37474;
continue;
} else {
var role = cljs.core.first.call(null,seq__37408__$1);
var temp__4657__auto___37475__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37475__$2)){
var spec_37476 = temp__4657__auto___37475__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37476));
} else {
}

var G__37477 = cljs.core.next.call(null,seq__37408__$1);
var G__37478 = null;
var G__37479 = (0);
var G__37480 = (0);
seq__37408 = G__37477;
chunk__37409 = G__37478;
count__37410 = G__37479;
i__37411 = G__37480;
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

//# sourceMappingURL=repl.js.map?rel=1513768310272
