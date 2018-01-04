// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37746){
var map__37747 = p__37746;
var map__37747__$1 = ((((!((map__37747 == null)))?((((map__37747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37747):map__37747);
var m = map__37747__$1;
var n = cljs.core.get.call(null,map__37747__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37747__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37749_37771 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37750_37772 = null;
var count__37751_37773 = (0);
var i__37752_37774 = (0);
while(true){
if((i__37752_37774 < count__37751_37773)){
var f_37775 = cljs.core._nth.call(null,chunk__37750_37772,i__37752_37774);
cljs.core.println.call(null,"  ",f_37775);

var G__37776 = seq__37749_37771;
var G__37777 = chunk__37750_37772;
var G__37778 = count__37751_37773;
var G__37779 = (i__37752_37774 + (1));
seq__37749_37771 = G__37776;
chunk__37750_37772 = G__37777;
count__37751_37773 = G__37778;
i__37752_37774 = G__37779;
continue;
} else {
var temp__4657__auto___37780 = cljs.core.seq.call(null,seq__37749_37771);
if(temp__4657__auto___37780){
var seq__37749_37781__$1 = temp__4657__auto___37780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37749_37781__$1)){
var c__28034__auto___37782 = cljs.core.chunk_first.call(null,seq__37749_37781__$1);
var G__37783 = cljs.core.chunk_rest.call(null,seq__37749_37781__$1);
var G__37784 = c__28034__auto___37782;
var G__37785 = cljs.core.count.call(null,c__28034__auto___37782);
var G__37786 = (0);
seq__37749_37771 = G__37783;
chunk__37750_37772 = G__37784;
count__37751_37773 = G__37785;
i__37752_37774 = G__37786;
continue;
} else {
var f_37787 = cljs.core.first.call(null,seq__37749_37781__$1);
cljs.core.println.call(null,"  ",f_37787);

var G__37788 = cljs.core.next.call(null,seq__37749_37781__$1);
var G__37789 = null;
var G__37790 = (0);
var G__37791 = (0);
seq__37749_37771 = G__37788;
chunk__37750_37772 = G__37789;
count__37751_37773 = G__37790;
i__37752_37774 = G__37791;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37792 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37792);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37792)))?cljs.core.second.call(null,arglists_37792):arglists_37792));
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
var seq__37753_37793 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37754_37794 = null;
var count__37755_37795 = (0);
var i__37756_37796 = (0);
while(true){
if((i__37756_37796 < count__37755_37795)){
var vec__37757_37797 = cljs.core._nth.call(null,chunk__37754_37794,i__37756_37796);
var name_37798 = cljs.core.nth.call(null,vec__37757_37797,(0),null);
var map__37760_37799 = cljs.core.nth.call(null,vec__37757_37797,(1),null);
var map__37760_37800__$1 = ((((!((map__37760_37799 == null)))?((((map__37760_37799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37760_37799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37760_37799):map__37760_37799);
var doc_37801 = cljs.core.get.call(null,map__37760_37800__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37802 = cljs.core.get.call(null,map__37760_37800__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37798);

cljs.core.println.call(null," ",arglists_37802);

if(cljs.core.truth_(doc_37801)){
cljs.core.println.call(null," ",doc_37801);
} else {
}

var G__37803 = seq__37753_37793;
var G__37804 = chunk__37754_37794;
var G__37805 = count__37755_37795;
var G__37806 = (i__37756_37796 + (1));
seq__37753_37793 = G__37803;
chunk__37754_37794 = G__37804;
count__37755_37795 = G__37805;
i__37756_37796 = G__37806;
continue;
} else {
var temp__4657__auto___37807 = cljs.core.seq.call(null,seq__37753_37793);
if(temp__4657__auto___37807){
var seq__37753_37808__$1 = temp__4657__auto___37807;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37753_37808__$1)){
var c__28034__auto___37809 = cljs.core.chunk_first.call(null,seq__37753_37808__$1);
var G__37810 = cljs.core.chunk_rest.call(null,seq__37753_37808__$1);
var G__37811 = c__28034__auto___37809;
var G__37812 = cljs.core.count.call(null,c__28034__auto___37809);
var G__37813 = (0);
seq__37753_37793 = G__37810;
chunk__37754_37794 = G__37811;
count__37755_37795 = G__37812;
i__37756_37796 = G__37813;
continue;
} else {
var vec__37762_37814 = cljs.core.first.call(null,seq__37753_37808__$1);
var name_37815 = cljs.core.nth.call(null,vec__37762_37814,(0),null);
var map__37765_37816 = cljs.core.nth.call(null,vec__37762_37814,(1),null);
var map__37765_37817__$1 = ((((!((map__37765_37816 == null)))?((((map__37765_37816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37765_37816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37765_37816):map__37765_37816);
var doc_37818 = cljs.core.get.call(null,map__37765_37817__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37819 = cljs.core.get.call(null,map__37765_37817__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37815);

cljs.core.println.call(null," ",arglists_37819);

if(cljs.core.truth_(doc_37818)){
cljs.core.println.call(null," ",doc_37818);
} else {
}

var G__37820 = cljs.core.next.call(null,seq__37753_37808__$1);
var G__37821 = null;
var G__37822 = (0);
var G__37823 = (0);
seq__37753_37793 = G__37820;
chunk__37754_37794 = G__37821;
count__37755_37795 = G__37822;
i__37756_37796 = G__37823;
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

var seq__37767 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37768 = null;
var count__37769 = (0);
var i__37770 = (0);
while(true){
if((i__37770 < count__37769)){
var role = cljs.core._nth.call(null,chunk__37768,i__37770);
var temp__4657__auto___37824__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37824__$1)){
var spec_37825 = temp__4657__auto___37824__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37825));
} else {
}

var G__37826 = seq__37767;
var G__37827 = chunk__37768;
var G__37828 = count__37769;
var G__37829 = (i__37770 + (1));
seq__37767 = G__37826;
chunk__37768 = G__37827;
count__37769 = G__37828;
i__37770 = G__37829;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37767);
if(temp__4657__auto____$1){
var seq__37767__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37767__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37767__$1);
var G__37830 = cljs.core.chunk_rest.call(null,seq__37767__$1);
var G__37831 = c__28034__auto__;
var G__37832 = cljs.core.count.call(null,c__28034__auto__);
var G__37833 = (0);
seq__37767 = G__37830;
chunk__37768 = G__37831;
count__37769 = G__37832;
i__37770 = G__37833;
continue;
} else {
var role = cljs.core.first.call(null,seq__37767__$1);
var temp__4657__auto___37834__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37834__$2)){
var spec_37835 = temp__4657__auto___37834__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37835));
} else {
}

var G__37836 = cljs.core.next.call(null,seq__37767__$1);
var G__37837 = null;
var G__37838 = (0);
var G__37839 = (0);
seq__37767 = G__37836;
chunk__37768 = G__37837;
count__37769 = G__37838;
i__37770 = G__37839;
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

//# sourceMappingURL=repl.js.map?rel=1515054904973
