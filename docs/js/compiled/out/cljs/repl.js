// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37748){
var map__37749 = p__37748;
var map__37749__$1 = ((((!((map__37749 == null)))?((((map__37749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37749):map__37749);
var m = map__37749__$1;
var n = cljs.core.get.call(null,map__37749__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37749__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37751_37773 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37752_37774 = null;
var count__37753_37775 = (0);
var i__37754_37776 = (0);
while(true){
if((i__37754_37776 < count__37753_37775)){
var f_37777 = cljs.core._nth.call(null,chunk__37752_37774,i__37754_37776);
cljs.core.println.call(null,"  ",f_37777);

var G__37778 = seq__37751_37773;
var G__37779 = chunk__37752_37774;
var G__37780 = count__37753_37775;
var G__37781 = (i__37754_37776 + (1));
seq__37751_37773 = G__37778;
chunk__37752_37774 = G__37779;
count__37753_37775 = G__37780;
i__37754_37776 = G__37781;
continue;
} else {
var temp__4657__auto___37782 = cljs.core.seq.call(null,seq__37751_37773);
if(temp__4657__auto___37782){
var seq__37751_37783__$1 = temp__4657__auto___37782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37751_37783__$1)){
var c__28035__auto___37784 = cljs.core.chunk_first.call(null,seq__37751_37783__$1);
var G__37785 = cljs.core.chunk_rest.call(null,seq__37751_37783__$1);
var G__37786 = c__28035__auto___37784;
var G__37787 = cljs.core.count.call(null,c__28035__auto___37784);
var G__37788 = (0);
seq__37751_37773 = G__37785;
chunk__37752_37774 = G__37786;
count__37753_37775 = G__37787;
i__37754_37776 = G__37788;
continue;
} else {
var f_37789 = cljs.core.first.call(null,seq__37751_37783__$1);
cljs.core.println.call(null,"  ",f_37789);

var G__37790 = cljs.core.next.call(null,seq__37751_37783__$1);
var G__37791 = null;
var G__37792 = (0);
var G__37793 = (0);
seq__37751_37773 = G__37790;
chunk__37752_37774 = G__37791;
count__37753_37775 = G__37792;
i__37754_37776 = G__37793;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37794 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27196__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37794);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37794)))?cljs.core.second.call(null,arglists_37794):arglists_37794));
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
var seq__37755_37795 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37756_37796 = null;
var count__37757_37797 = (0);
var i__37758_37798 = (0);
while(true){
if((i__37758_37798 < count__37757_37797)){
var vec__37759_37799 = cljs.core._nth.call(null,chunk__37756_37796,i__37758_37798);
var name_37800 = cljs.core.nth.call(null,vec__37759_37799,(0),null);
var map__37762_37801 = cljs.core.nth.call(null,vec__37759_37799,(1),null);
var map__37762_37802__$1 = ((((!((map__37762_37801 == null)))?((((map__37762_37801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37762_37801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37762_37801):map__37762_37801);
var doc_37803 = cljs.core.get.call(null,map__37762_37802__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37804 = cljs.core.get.call(null,map__37762_37802__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37800);

cljs.core.println.call(null," ",arglists_37804);

if(cljs.core.truth_(doc_37803)){
cljs.core.println.call(null," ",doc_37803);
} else {
}

var G__37805 = seq__37755_37795;
var G__37806 = chunk__37756_37796;
var G__37807 = count__37757_37797;
var G__37808 = (i__37758_37798 + (1));
seq__37755_37795 = G__37805;
chunk__37756_37796 = G__37806;
count__37757_37797 = G__37807;
i__37758_37798 = G__37808;
continue;
} else {
var temp__4657__auto___37809 = cljs.core.seq.call(null,seq__37755_37795);
if(temp__4657__auto___37809){
var seq__37755_37810__$1 = temp__4657__auto___37809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37755_37810__$1)){
var c__28035__auto___37811 = cljs.core.chunk_first.call(null,seq__37755_37810__$1);
var G__37812 = cljs.core.chunk_rest.call(null,seq__37755_37810__$1);
var G__37813 = c__28035__auto___37811;
var G__37814 = cljs.core.count.call(null,c__28035__auto___37811);
var G__37815 = (0);
seq__37755_37795 = G__37812;
chunk__37756_37796 = G__37813;
count__37757_37797 = G__37814;
i__37758_37798 = G__37815;
continue;
} else {
var vec__37764_37816 = cljs.core.first.call(null,seq__37755_37810__$1);
var name_37817 = cljs.core.nth.call(null,vec__37764_37816,(0),null);
var map__37767_37818 = cljs.core.nth.call(null,vec__37764_37816,(1),null);
var map__37767_37819__$1 = ((((!((map__37767_37818 == null)))?((((map__37767_37818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37767_37818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37767_37818):map__37767_37818);
var doc_37820 = cljs.core.get.call(null,map__37767_37819__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37821 = cljs.core.get.call(null,map__37767_37819__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37817);

cljs.core.println.call(null," ",arglists_37821);

if(cljs.core.truth_(doc_37820)){
cljs.core.println.call(null," ",doc_37820);
} else {
}

var G__37822 = cljs.core.next.call(null,seq__37755_37810__$1);
var G__37823 = null;
var G__37824 = (0);
var G__37825 = (0);
seq__37755_37795 = G__37822;
chunk__37756_37796 = G__37823;
count__37757_37797 = G__37824;
i__37758_37798 = G__37825;
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

var seq__37769 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37770 = null;
var count__37771 = (0);
var i__37772 = (0);
while(true){
if((i__37772 < count__37771)){
var role = cljs.core._nth.call(null,chunk__37770,i__37772);
var temp__4657__auto___37826__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37826__$1)){
var spec_37827 = temp__4657__auto___37826__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37827));
} else {
}

var G__37828 = seq__37769;
var G__37829 = chunk__37770;
var G__37830 = count__37771;
var G__37831 = (i__37772 + (1));
seq__37769 = G__37828;
chunk__37770 = G__37829;
count__37771 = G__37830;
i__37772 = G__37831;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37769);
if(temp__4657__auto____$1){
var seq__37769__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37769__$1)){
var c__28035__auto__ = cljs.core.chunk_first.call(null,seq__37769__$1);
var G__37832 = cljs.core.chunk_rest.call(null,seq__37769__$1);
var G__37833 = c__28035__auto__;
var G__37834 = cljs.core.count.call(null,c__28035__auto__);
var G__37835 = (0);
seq__37769 = G__37832;
chunk__37770 = G__37833;
count__37771 = G__37834;
i__37772 = G__37835;
continue;
} else {
var role = cljs.core.first.call(null,seq__37769__$1);
var temp__4657__auto___37836__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37836__$2)){
var spec_37837 = temp__4657__auto___37836__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37837));
} else {
}

var G__37838 = cljs.core.next.call(null,seq__37769__$1);
var G__37839 = null;
var G__37840 = (0);
var G__37841 = (0);
seq__37769 = G__37838;
chunk__37770 = G__37839;
count__37771 = G__37840;
i__37772 = G__37841;
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

//# sourceMappingURL=repl.js.map?rel=1514660153604
