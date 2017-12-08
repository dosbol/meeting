// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37345){
var map__37346 = p__37345;
var map__37346__$1 = ((((!((map__37346 == null)))?((((map__37346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37346):map__37346);
var m = map__37346__$1;
var n = cljs.core.get.call(null,map__37346__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37346__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37348_37370 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37349_37371 = null;
var count__37350_37372 = (0);
var i__37351_37373 = (0);
while(true){
if((i__37351_37373 < count__37350_37372)){
var f_37374 = cljs.core._nth.call(null,chunk__37349_37371,i__37351_37373);
cljs.core.println.call(null,"  ",f_37374);

var G__37375 = seq__37348_37370;
var G__37376 = chunk__37349_37371;
var G__37377 = count__37350_37372;
var G__37378 = (i__37351_37373 + (1));
seq__37348_37370 = G__37375;
chunk__37349_37371 = G__37376;
count__37350_37372 = G__37377;
i__37351_37373 = G__37378;
continue;
} else {
var temp__4657__auto___37379 = cljs.core.seq.call(null,seq__37348_37370);
if(temp__4657__auto___37379){
var seq__37348_37380__$1 = temp__4657__auto___37379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37348_37380__$1)){
var c__29125__auto___37381 = cljs.core.chunk_first.call(null,seq__37348_37380__$1);
var G__37382 = cljs.core.chunk_rest.call(null,seq__37348_37380__$1);
var G__37383 = c__29125__auto___37381;
var G__37384 = cljs.core.count.call(null,c__29125__auto___37381);
var G__37385 = (0);
seq__37348_37370 = G__37382;
chunk__37349_37371 = G__37383;
count__37350_37372 = G__37384;
i__37351_37373 = G__37385;
continue;
} else {
var f_37386 = cljs.core.first.call(null,seq__37348_37380__$1);
cljs.core.println.call(null,"  ",f_37386);

var G__37387 = cljs.core.next.call(null,seq__37348_37380__$1);
var G__37388 = null;
var G__37389 = (0);
var G__37390 = (0);
seq__37348_37370 = G__37387;
chunk__37349_37371 = G__37388;
count__37350_37372 = G__37389;
i__37351_37373 = G__37390;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37391 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37391);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37391)))?cljs.core.second.call(null,arglists_37391):arglists_37391));
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
var seq__37352_37392 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37353_37393 = null;
var count__37354_37394 = (0);
var i__37355_37395 = (0);
while(true){
if((i__37355_37395 < count__37354_37394)){
var vec__37356_37396 = cljs.core._nth.call(null,chunk__37353_37393,i__37355_37395);
var name_37397 = cljs.core.nth.call(null,vec__37356_37396,(0),null);
var map__37359_37398 = cljs.core.nth.call(null,vec__37356_37396,(1),null);
var map__37359_37399__$1 = ((((!((map__37359_37398 == null)))?((((map__37359_37398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37359_37398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37359_37398):map__37359_37398);
var doc_37400 = cljs.core.get.call(null,map__37359_37399__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37401 = cljs.core.get.call(null,map__37359_37399__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37397);

cljs.core.println.call(null," ",arglists_37401);

if(cljs.core.truth_(doc_37400)){
cljs.core.println.call(null," ",doc_37400);
} else {
}

var G__37402 = seq__37352_37392;
var G__37403 = chunk__37353_37393;
var G__37404 = count__37354_37394;
var G__37405 = (i__37355_37395 + (1));
seq__37352_37392 = G__37402;
chunk__37353_37393 = G__37403;
count__37354_37394 = G__37404;
i__37355_37395 = G__37405;
continue;
} else {
var temp__4657__auto___37406 = cljs.core.seq.call(null,seq__37352_37392);
if(temp__4657__auto___37406){
var seq__37352_37407__$1 = temp__4657__auto___37406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37352_37407__$1)){
var c__29125__auto___37408 = cljs.core.chunk_first.call(null,seq__37352_37407__$1);
var G__37409 = cljs.core.chunk_rest.call(null,seq__37352_37407__$1);
var G__37410 = c__29125__auto___37408;
var G__37411 = cljs.core.count.call(null,c__29125__auto___37408);
var G__37412 = (0);
seq__37352_37392 = G__37409;
chunk__37353_37393 = G__37410;
count__37354_37394 = G__37411;
i__37355_37395 = G__37412;
continue;
} else {
var vec__37361_37413 = cljs.core.first.call(null,seq__37352_37407__$1);
var name_37414 = cljs.core.nth.call(null,vec__37361_37413,(0),null);
var map__37364_37415 = cljs.core.nth.call(null,vec__37361_37413,(1),null);
var map__37364_37416__$1 = ((((!((map__37364_37415 == null)))?((((map__37364_37415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37364_37415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37364_37415):map__37364_37415);
var doc_37417 = cljs.core.get.call(null,map__37364_37416__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37418 = cljs.core.get.call(null,map__37364_37416__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37414);

cljs.core.println.call(null," ",arglists_37418);

if(cljs.core.truth_(doc_37417)){
cljs.core.println.call(null," ",doc_37417);
} else {
}

var G__37419 = cljs.core.next.call(null,seq__37352_37407__$1);
var G__37420 = null;
var G__37421 = (0);
var G__37422 = (0);
seq__37352_37392 = G__37419;
chunk__37353_37393 = G__37420;
count__37354_37394 = G__37421;
i__37355_37395 = G__37422;
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

var seq__37366 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37367 = null;
var count__37368 = (0);
var i__37369 = (0);
while(true){
if((i__37369 < count__37368)){
var role = cljs.core._nth.call(null,chunk__37367,i__37369);
var temp__4657__auto___37423__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37423__$1)){
var spec_37424 = temp__4657__auto___37423__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37424));
} else {
}

var G__37425 = seq__37366;
var G__37426 = chunk__37367;
var G__37427 = count__37368;
var G__37428 = (i__37369 + (1));
seq__37366 = G__37425;
chunk__37367 = G__37426;
count__37368 = G__37427;
i__37369 = G__37428;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37366);
if(temp__4657__auto____$1){
var seq__37366__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37366__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37366__$1);
var G__37429 = cljs.core.chunk_rest.call(null,seq__37366__$1);
var G__37430 = c__29125__auto__;
var G__37431 = cljs.core.count.call(null,c__29125__auto__);
var G__37432 = (0);
seq__37366 = G__37429;
chunk__37367 = G__37430;
count__37368 = G__37431;
i__37369 = G__37432;
continue;
} else {
var role = cljs.core.first.call(null,seq__37366__$1);
var temp__4657__auto___37433__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37433__$2)){
var spec_37434 = temp__4657__auto___37433__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37434));
} else {
}

var G__37435 = cljs.core.next.call(null,seq__37366__$1);
var G__37436 = null;
var G__37437 = (0);
var G__37438 = (0);
seq__37366 = G__37435;
chunk__37367 = G__37436;
count__37368 = G__37437;
i__37369 = G__37438;
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

//# sourceMappingURL=repl.js.map?rel=1512672353299
