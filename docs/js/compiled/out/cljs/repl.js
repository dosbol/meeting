// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37763){
var map__37764 = p__37763;
var map__37764__$1 = ((((!((map__37764 == null)))?((((map__37764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37764):map__37764);
var m = map__37764__$1;
var n = cljs.core.get.call(null,map__37764__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37764__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37766_37788 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37767_37789 = null;
var count__37768_37790 = (0);
var i__37769_37791 = (0);
while(true){
if((i__37769_37791 < count__37768_37790)){
var f_37792 = cljs.core._nth.call(null,chunk__37767_37789,i__37769_37791);
cljs.core.println.call(null,"  ",f_37792);

var G__37793 = seq__37766_37788;
var G__37794 = chunk__37767_37789;
var G__37795 = count__37768_37790;
var G__37796 = (i__37769_37791 + (1));
seq__37766_37788 = G__37793;
chunk__37767_37789 = G__37794;
count__37768_37790 = G__37795;
i__37769_37791 = G__37796;
continue;
} else {
var temp__4657__auto___37797 = cljs.core.seq.call(null,seq__37766_37788);
if(temp__4657__auto___37797){
var seq__37766_37798__$1 = temp__4657__auto___37797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37766_37798__$1)){
var c__28034__auto___37799 = cljs.core.chunk_first.call(null,seq__37766_37798__$1);
var G__37800 = cljs.core.chunk_rest.call(null,seq__37766_37798__$1);
var G__37801 = c__28034__auto___37799;
var G__37802 = cljs.core.count.call(null,c__28034__auto___37799);
var G__37803 = (0);
seq__37766_37788 = G__37800;
chunk__37767_37789 = G__37801;
count__37768_37790 = G__37802;
i__37769_37791 = G__37803;
continue;
} else {
var f_37804 = cljs.core.first.call(null,seq__37766_37798__$1);
cljs.core.println.call(null,"  ",f_37804);

var G__37805 = cljs.core.next.call(null,seq__37766_37798__$1);
var G__37806 = null;
var G__37807 = (0);
var G__37808 = (0);
seq__37766_37788 = G__37805;
chunk__37767_37789 = G__37806;
count__37768_37790 = G__37807;
i__37769_37791 = G__37808;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37809 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37809);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37809)))?cljs.core.second.call(null,arglists_37809):arglists_37809));
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
var seq__37770_37810 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37771_37811 = null;
var count__37772_37812 = (0);
var i__37773_37813 = (0);
while(true){
if((i__37773_37813 < count__37772_37812)){
var vec__37774_37814 = cljs.core._nth.call(null,chunk__37771_37811,i__37773_37813);
var name_37815 = cljs.core.nth.call(null,vec__37774_37814,(0),null);
var map__37777_37816 = cljs.core.nth.call(null,vec__37774_37814,(1),null);
var map__37777_37817__$1 = ((((!((map__37777_37816 == null)))?((((map__37777_37816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37777_37816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37777_37816):map__37777_37816);
var doc_37818 = cljs.core.get.call(null,map__37777_37817__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37819 = cljs.core.get.call(null,map__37777_37817__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37815);

cljs.core.println.call(null," ",arglists_37819);

if(cljs.core.truth_(doc_37818)){
cljs.core.println.call(null," ",doc_37818);
} else {
}

var G__37820 = seq__37770_37810;
var G__37821 = chunk__37771_37811;
var G__37822 = count__37772_37812;
var G__37823 = (i__37773_37813 + (1));
seq__37770_37810 = G__37820;
chunk__37771_37811 = G__37821;
count__37772_37812 = G__37822;
i__37773_37813 = G__37823;
continue;
} else {
var temp__4657__auto___37824 = cljs.core.seq.call(null,seq__37770_37810);
if(temp__4657__auto___37824){
var seq__37770_37825__$1 = temp__4657__auto___37824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37770_37825__$1)){
var c__28034__auto___37826 = cljs.core.chunk_first.call(null,seq__37770_37825__$1);
var G__37827 = cljs.core.chunk_rest.call(null,seq__37770_37825__$1);
var G__37828 = c__28034__auto___37826;
var G__37829 = cljs.core.count.call(null,c__28034__auto___37826);
var G__37830 = (0);
seq__37770_37810 = G__37827;
chunk__37771_37811 = G__37828;
count__37772_37812 = G__37829;
i__37773_37813 = G__37830;
continue;
} else {
var vec__37779_37831 = cljs.core.first.call(null,seq__37770_37825__$1);
var name_37832 = cljs.core.nth.call(null,vec__37779_37831,(0),null);
var map__37782_37833 = cljs.core.nth.call(null,vec__37779_37831,(1),null);
var map__37782_37834__$1 = ((((!((map__37782_37833 == null)))?((((map__37782_37833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37782_37833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37782_37833):map__37782_37833);
var doc_37835 = cljs.core.get.call(null,map__37782_37834__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37836 = cljs.core.get.call(null,map__37782_37834__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37832);

cljs.core.println.call(null," ",arglists_37836);

if(cljs.core.truth_(doc_37835)){
cljs.core.println.call(null," ",doc_37835);
} else {
}

var G__37837 = cljs.core.next.call(null,seq__37770_37825__$1);
var G__37838 = null;
var G__37839 = (0);
var G__37840 = (0);
seq__37770_37810 = G__37837;
chunk__37771_37811 = G__37838;
count__37772_37812 = G__37839;
i__37773_37813 = G__37840;
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

var seq__37784 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37785 = null;
var count__37786 = (0);
var i__37787 = (0);
while(true){
if((i__37787 < count__37786)){
var role = cljs.core._nth.call(null,chunk__37785,i__37787);
var temp__4657__auto___37841__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37841__$1)){
var spec_37842 = temp__4657__auto___37841__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37842));
} else {
}

var G__37843 = seq__37784;
var G__37844 = chunk__37785;
var G__37845 = count__37786;
var G__37846 = (i__37787 + (1));
seq__37784 = G__37843;
chunk__37785 = G__37844;
count__37786 = G__37845;
i__37787 = G__37846;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37784);
if(temp__4657__auto____$1){
var seq__37784__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37784__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37784__$1);
var G__37847 = cljs.core.chunk_rest.call(null,seq__37784__$1);
var G__37848 = c__28034__auto__;
var G__37849 = cljs.core.count.call(null,c__28034__auto__);
var G__37850 = (0);
seq__37784 = G__37847;
chunk__37785 = G__37848;
count__37786 = G__37849;
i__37787 = G__37850;
continue;
} else {
var role = cljs.core.first.call(null,seq__37784__$1);
var temp__4657__auto___37851__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37851__$2)){
var spec_37852 = temp__4657__auto___37851__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37852));
} else {
}

var G__37853 = cljs.core.next.call(null,seq__37784__$1);
var G__37854 = null;
var G__37855 = (0);
var G__37856 = (0);
seq__37784 = G__37853;
chunk__37785 = G__37854;
count__37786 = G__37855;
i__37787 = G__37856;
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

//# sourceMappingURL=repl.js.map?rel=1515953260064
