// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37766){
var map__37767 = p__37766;
var map__37767__$1 = ((((!((map__37767 == null)))?((((map__37767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37767):map__37767);
var m = map__37767__$1;
var n = cljs.core.get.call(null,map__37767__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37767__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37769_37791 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37770_37792 = null;
var count__37771_37793 = (0);
var i__37772_37794 = (0);
while(true){
if((i__37772_37794 < count__37771_37793)){
var f_37795 = cljs.core._nth.call(null,chunk__37770_37792,i__37772_37794);
cljs.core.println.call(null,"  ",f_37795);

var G__37796 = seq__37769_37791;
var G__37797 = chunk__37770_37792;
var G__37798 = count__37771_37793;
var G__37799 = (i__37772_37794 + (1));
seq__37769_37791 = G__37796;
chunk__37770_37792 = G__37797;
count__37771_37793 = G__37798;
i__37772_37794 = G__37799;
continue;
} else {
var temp__4657__auto___37800 = cljs.core.seq.call(null,seq__37769_37791);
if(temp__4657__auto___37800){
var seq__37769_37801__$1 = temp__4657__auto___37800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37769_37801__$1)){
var c__28034__auto___37802 = cljs.core.chunk_first.call(null,seq__37769_37801__$1);
var G__37803 = cljs.core.chunk_rest.call(null,seq__37769_37801__$1);
var G__37804 = c__28034__auto___37802;
var G__37805 = cljs.core.count.call(null,c__28034__auto___37802);
var G__37806 = (0);
seq__37769_37791 = G__37803;
chunk__37770_37792 = G__37804;
count__37771_37793 = G__37805;
i__37772_37794 = G__37806;
continue;
} else {
var f_37807 = cljs.core.first.call(null,seq__37769_37801__$1);
cljs.core.println.call(null,"  ",f_37807);

var G__37808 = cljs.core.next.call(null,seq__37769_37801__$1);
var G__37809 = null;
var G__37810 = (0);
var G__37811 = (0);
seq__37769_37791 = G__37808;
chunk__37770_37792 = G__37809;
count__37771_37793 = G__37810;
i__37772_37794 = G__37811;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37812 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37812);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37812)))?cljs.core.second.call(null,arglists_37812):arglists_37812));
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
var seq__37773_37813 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37774_37814 = null;
var count__37775_37815 = (0);
var i__37776_37816 = (0);
while(true){
if((i__37776_37816 < count__37775_37815)){
var vec__37777_37817 = cljs.core._nth.call(null,chunk__37774_37814,i__37776_37816);
var name_37818 = cljs.core.nth.call(null,vec__37777_37817,(0),null);
var map__37780_37819 = cljs.core.nth.call(null,vec__37777_37817,(1),null);
var map__37780_37820__$1 = ((((!((map__37780_37819 == null)))?((((map__37780_37819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37780_37819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37780_37819):map__37780_37819);
var doc_37821 = cljs.core.get.call(null,map__37780_37820__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37822 = cljs.core.get.call(null,map__37780_37820__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37818);

cljs.core.println.call(null," ",arglists_37822);

if(cljs.core.truth_(doc_37821)){
cljs.core.println.call(null," ",doc_37821);
} else {
}

var G__37823 = seq__37773_37813;
var G__37824 = chunk__37774_37814;
var G__37825 = count__37775_37815;
var G__37826 = (i__37776_37816 + (1));
seq__37773_37813 = G__37823;
chunk__37774_37814 = G__37824;
count__37775_37815 = G__37825;
i__37776_37816 = G__37826;
continue;
} else {
var temp__4657__auto___37827 = cljs.core.seq.call(null,seq__37773_37813);
if(temp__4657__auto___37827){
var seq__37773_37828__$1 = temp__4657__auto___37827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37773_37828__$1)){
var c__28034__auto___37829 = cljs.core.chunk_first.call(null,seq__37773_37828__$1);
var G__37830 = cljs.core.chunk_rest.call(null,seq__37773_37828__$1);
var G__37831 = c__28034__auto___37829;
var G__37832 = cljs.core.count.call(null,c__28034__auto___37829);
var G__37833 = (0);
seq__37773_37813 = G__37830;
chunk__37774_37814 = G__37831;
count__37775_37815 = G__37832;
i__37776_37816 = G__37833;
continue;
} else {
var vec__37782_37834 = cljs.core.first.call(null,seq__37773_37828__$1);
var name_37835 = cljs.core.nth.call(null,vec__37782_37834,(0),null);
var map__37785_37836 = cljs.core.nth.call(null,vec__37782_37834,(1),null);
var map__37785_37837__$1 = ((((!((map__37785_37836 == null)))?((((map__37785_37836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37785_37836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37785_37836):map__37785_37836);
var doc_37838 = cljs.core.get.call(null,map__37785_37837__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37839 = cljs.core.get.call(null,map__37785_37837__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37835);

cljs.core.println.call(null," ",arglists_37839);

if(cljs.core.truth_(doc_37838)){
cljs.core.println.call(null," ",doc_37838);
} else {
}

var G__37840 = cljs.core.next.call(null,seq__37773_37828__$1);
var G__37841 = null;
var G__37842 = (0);
var G__37843 = (0);
seq__37773_37813 = G__37840;
chunk__37774_37814 = G__37841;
count__37775_37815 = G__37842;
i__37776_37816 = G__37843;
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

var seq__37787 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37788 = null;
var count__37789 = (0);
var i__37790 = (0);
while(true){
if((i__37790 < count__37789)){
var role = cljs.core._nth.call(null,chunk__37788,i__37790);
var temp__4657__auto___37844__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37844__$1)){
var spec_37845 = temp__4657__auto___37844__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37845));
} else {
}

var G__37846 = seq__37787;
var G__37847 = chunk__37788;
var G__37848 = count__37789;
var G__37849 = (i__37790 + (1));
seq__37787 = G__37846;
chunk__37788 = G__37847;
count__37789 = G__37848;
i__37790 = G__37849;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37787);
if(temp__4657__auto____$1){
var seq__37787__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37787__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37787__$1);
var G__37850 = cljs.core.chunk_rest.call(null,seq__37787__$1);
var G__37851 = c__28034__auto__;
var G__37852 = cljs.core.count.call(null,c__28034__auto__);
var G__37853 = (0);
seq__37787 = G__37850;
chunk__37788 = G__37851;
count__37789 = G__37852;
i__37790 = G__37853;
continue;
} else {
var role = cljs.core.first.call(null,seq__37787__$1);
var temp__4657__auto___37854__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37854__$2)){
var spec_37855 = temp__4657__auto___37854__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37855));
} else {
}

var G__37856 = cljs.core.next.call(null,seq__37787__$1);
var G__37857 = null;
var G__37858 = (0);
var G__37859 = (0);
seq__37787 = G__37856;
chunk__37788 = G__37857;
count__37789 = G__37858;
i__37790 = G__37859;
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

//# sourceMappingURL=repl.js.map?rel=1515855011920
