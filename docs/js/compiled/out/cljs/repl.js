// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37373){
var map__37374 = p__37373;
var map__37374__$1 = ((((!((map__37374 == null)))?((((map__37374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37374):map__37374);
var m = map__37374__$1;
var n = cljs.core.get.call(null,map__37374__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37374__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37376_37398 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37377_37399 = null;
var count__37378_37400 = (0);
var i__37379_37401 = (0);
while(true){
if((i__37379_37401 < count__37378_37400)){
var f_37402 = cljs.core._nth.call(null,chunk__37377_37399,i__37379_37401);
cljs.core.println.call(null,"  ",f_37402);

var G__37403 = seq__37376_37398;
var G__37404 = chunk__37377_37399;
var G__37405 = count__37378_37400;
var G__37406 = (i__37379_37401 + (1));
seq__37376_37398 = G__37403;
chunk__37377_37399 = G__37404;
count__37378_37400 = G__37405;
i__37379_37401 = G__37406;
continue;
} else {
var temp__4657__auto___37407 = cljs.core.seq.call(null,seq__37376_37398);
if(temp__4657__auto___37407){
var seq__37376_37408__$1 = temp__4657__auto___37407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37376_37408__$1)){
var c__29125__auto___37409 = cljs.core.chunk_first.call(null,seq__37376_37408__$1);
var G__37410 = cljs.core.chunk_rest.call(null,seq__37376_37408__$1);
var G__37411 = c__29125__auto___37409;
var G__37412 = cljs.core.count.call(null,c__29125__auto___37409);
var G__37413 = (0);
seq__37376_37398 = G__37410;
chunk__37377_37399 = G__37411;
count__37378_37400 = G__37412;
i__37379_37401 = G__37413;
continue;
} else {
var f_37414 = cljs.core.first.call(null,seq__37376_37408__$1);
cljs.core.println.call(null,"  ",f_37414);

var G__37415 = cljs.core.next.call(null,seq__37376_37408__$1);
var G__37416 = null;
var G__37417 = (0);
var G__37418 = (0);
seq__37376_37398 = G__37415;
chunk__37377_37399 = G__37416;
count__37378_37400 = G__37417;
i__37379_37401 = G__37418;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37419 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37419);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37419)))?cljs.core.second.call(null,arglists_37419):arglists_37419));
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
var seq__37380_37420 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37381_37421 = null;
var count__37382_37422 = (0);
var i__37383_37423 = (0);
while(true){
if((i__37383_37423 < count__37382_37422)){
var vec__37384_37424 = cljs.core._nth.call(null,chunk__37381_37421,i__37383_37423);
var name_37425 = cljs.core.nth.call(null,vec__37384_37424,(0),null);
var map__37387_37426 = cljs.core.nth.call(null,vec__37384_37424,(1),null);
var map__37387_37427__$1 = ((((!((map__37387_37426 == null)))?((((map__37387_37426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37387_37426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37387_37426):map__37387_37426);
var doc_37428 = cljs.core.get.call(null,map__37387_37427__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37429 = cljs.core.get.call(null,map__37387_37427__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37425);

cljs.core.println.call(null," ",arglists_37429);

if(cljs.core.truth_(doc_37428)){
cljs.core.println.call(null," ",doc_37428);
} else {
}

var G__37430 = seq__37380_37420;
var G__37431 = chunk__37381_37421;
var G__37432 = count__37382_37422;
var G__37433 = (i__37383_37423 + (1));
seq__37380_37420 = G__37430;
chunk__37381_37421 = G__37431;
count__37382_37422 = G__37432;
i__37383_37423 = G__37433;
continue;
} else {
var temp__4657__auto___37434 = cljs.core.seq.call(null,seq__37380_37420);
if(temp__4657__auto___37434){
var seq__37380_37435__$1 = temp__4657__auto___37434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37380_37435__$1)){
var c__29125__auto___37436 = cljs.core.chunk_first.call(null,seq__37380_37435__$1);
var G__37437 = cljs.core.chunk_rest.call(null,seq__37380_37435__$1);
var G__37438 = c__29125__auto___37436;
var G__37439 = cljs.core.count.call(null,c__29125__auto___37436);
var G__37440 = (0);
seq__37380_37420 = G__37437;
chunk__37381_37421 = G__37438;
count__37382_37422 = G__37439;
i__37383_37423 = G__37440;
continue;
} else {
var vec__37389_37441 = cljs.core.first.call(null,seq__37380_37435__$1);
var name_37442 = cljs.core.nth.call(null,vec__37389_37441,(0),null);
var map__37392_37443 = cljs.core.nth.call(null,vec__37389_37441,(1),null);
var map__37392_37444__$1 = ((((!((map__37392_37443 == null)))?((((map__37392_37443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37392_37443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37392_37443):map__37392_37443);
var doc_37445 = cljs.core.get.call(null,map__37392_37444__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37446 = cljs.core.get.call(null,map__37392_37444__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37442);

cljs.core.println.call(null," ",arglists_37446);

if(cljs.core.truth_(doc_37445)){
cljs.core.println.call(null," ",doc_37445);
} else {
}

var G__37447 = cljs.core.next.call(null,seq__37380_37435__$1);
var G__37448 = null;
var G__37449 = (0);
var G__37450 = (0);
seq__37380_37420 = G__37447;
chunk__37381_37421 = G__37448;
count__37382_37422 = G__37449;
i__37383_37423 = G__37450;
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

var seq__37394 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37395 = null;
var count__37396 = (0);
var i__37397 = (0);
while(true){
if((i__37397 < count__37396)){
var role = cljs.core._nth.call(null,chunk__37395,i__37397);
var temp__4657__auto___37451__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37451__$1)){
var spec_37452 = temp__4657__auto___37451__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37452));
} else {
}

var G__37453 = seq__37394;
var G__37454 = chunk__37395;
var G__37455 = count__37396;
var G__37456 = (i__37397 + (1));
seq__37394 = G__37453;
chunk__37395 = G__37454;
count__37396 = G__37455;
i__37397 = G__37456;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37394);
if(temp__4657__auto____$1){
var seq__37394__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37394__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37394__$1);
var G__37457 = cljs.core.chunk_rest.call(null,seq__37394__$1);
var G__37458 = c__29125__auto__;
var G__37459 = cljs.core.count.call(null,c__29125__auto__);
var G__37460 = (0);
seq__37394 = G__37457;
chunk__37395 = G__37458;
count__37396 = G__37459;
i__37397 = G__37460;
continue;
} else {
var role = cljs.core.first.call(null,seq__37394__$1);
var temp__4657__auto___37461__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37461__$2)){
var spec_37462 = temp__4657__auto___37461__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37462));
} else {
}

var G__37463 = cljs.core.next.call(null,seq__37394__$1);
var G__37464 = null;
var G__37465 = (0);
var G__37466 = (0);
seq__37394 = G__37463;
chunk__37395 = G__37464;
count__37396 = G__37465;
i__37397 = G__37466;
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

//# sourceMappingURL=repl.js.map?rel=1513400449853
