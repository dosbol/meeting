// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37752){
var map__37753 = p__37752;
var map__37753__$1 = ((((!((map__37753 == null)))?((((map__37753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37753):map__37753);
var m = map__37753__$1;
var n = cljs.core.get.call(null,map__37753__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37753__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37755_37777 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37756_37778 = null;
var count__37757_37779 = (0);
var i__37758_37780 = (0);
while(true){
if((i__37758_37780 < count__37757_37779)){
var f_37781 = cljs.core._nth.call(null,chunk__37756_37778,i__37758_37780);
cljs.core.println.call(null,"  ",f_37781);

var G__37782 = seq__37755_37777;
var G__37783 = chunk__37756_37778;
var G__37784 = count__37757_37779;
var G__37785 = (i__37758_37780 + (1));
seq__37755_37777 = G__37782;
chunk__37756_37778 = G__37783;
count__37757_37779 = G__37784;
i__37758_37780 = G__37785;
continue;
} else {
var temp__4657__auto___37786 = cljs.core.seq.call(null,seq__37755_37777);
if(temp__4657__auto___37786){
var seq__37755_37787__$1 = temp__4657__auto___37786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37755_37787__$1)){
var c__28035__auto___37788 = cljs.core.chunk_first.call(null,seq__37755_37787__$1);
var G__37789 = cljs.core.chunk_rest.call(null,seq__37755_37787__$1);
var G__37790 = c__28035__auto___37788;
var G__37791 = cljs.core.count.call(null,c__28035__auto___37788);
var G__37792 = (0);
seq__37755_37777 = G__37789;
chunk__37756_37778 = G__37790;
count__37757_37779 = G__37791;
i__37758_37780 = G__37792;
continue;
} else {
var f_37793 = cljs.core.first.call(null,seq__37755_37787__$1);
cljs.core.println.call(null,"  ",f_37793);

var G__37794 = cljs.core.next.call(null,seq__37755_37787__$1);
var G__37795 = null;
var G__37796 = (0);
var G__37797 = (0);
seq__37755_37777 = G__37794;
chunk__37756_37778 = G__37795;
count__37757_37779 = G__37796;
i__37758_37780 = G__37797;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37798 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27196__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37798);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37798)))?cljs.core.second.call(null,arglists_37798):arglists_37798));
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
var seq__37759_37799 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37760_37800 = null;
var count__37761_37801 = (0);
var i__37762_37802 = (0);
while(true){
if((i__37762_37802 < count__37761_37801)){
var vec__37763_37803 = cljs.core._nth.call(null,chunk__37760_37800,i__37762_37802);
var name_37804 = cljs.core.nth.call(null,vec__37763_37803,(0),null);
var map__37766_37805 = cljs.core.nth.call(null,vec__37763_37803,(1),null);
var map__37766_37806__$1 = ((((!((map__37766_37805 == null)))?((((map__37766_37805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37766_37805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37766_37805):map__37766_37805);
var doc_37807 = cljs.core.get.call(null,map__37766_37806__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37808 = cljs.core.get.call(null,map__37766_37806__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37804);

cljs.core.println.call(null," ",arglists_37808);

if(cljs.core.truth_(doc_37807)){
cljs.core.println.call(null," ",doc_37807);
} else {
}

var G__37809 = seq__37759_37799;
var G__37810 = chunk__37760_37800;
var G__37811 = count__37761_37801;
var G__37812 = (i__37762_37802 + (1));
seq__37759_37799 = G__37809;
chunk__37760_37800 = G__37810;
count__37761_37801 = G__37811;
i__37762_37802 = G__37812;
continue;
} else {
var temp__4657__auto___37813 = cljs.core.seq.call(null,seq__37759_37799);
if(temp__4657__auto___37813){
var seq__37759_37814__$1 = temp__4657__auto___37813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37759_37814__$1)){
var c__28035__auto___37815 = cljs.core.chunk_first.call(null,seq__37759_37814__$1);
var G__37816 = cljs.core.chunk_rest.call(null,seq__37759_37814__$1);
var G__37817 = c__28035__auto___37815;
var G__37818 = cljs.core.count.call(null,c__28035__auto___37815);
var G__37819 = (0);
seq__37759_37799 = G__37816;
chunk__37760_37800 = G__37817;
count__37761_37801 = G__37818;
i__37762_37802 = G__37819;
continue;
} else {
var vec__37768_37820 = cljs.core.first.call(null,seq__37759_37814__$1);
var name_37821 = cljs.core.nth.call(null,vec__37768_37820,(0),null);
var map__37771_37822 = cljs.core.nth.call(null,vec__37768_37820,(1),null);
var map__37771_37823__$1 = ((((!((map__37771_37822 == null)))?((((map__37771_37822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37771_37822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37771_37822):map__37771_37822);
var doc_37824 = cljs.core.get.call(null,map__37771_37823__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37825 = cljs.core.get.call(null,map__37771_37823__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37821);

cljs.core.println.call(null," ",arglists_37825);

if(cljs.core.truth_(doc_37824)){
cljs.core.println.call(null," ",doc_37824);
} else {
}

var G__37826 = cljs.core.next.call(null,seq__37759_37814__$1);
var G__37827 = null;
var G__37828 = (0);
var G__37829 = (0);
seq__37759_37799 = G__37826;
chunk__37760_37800 = G__37827;
count__37761_37801 = G__37828;
i__37762_37802 = G__37829;
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

var seq__37773 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37774 = null;
var count__37775 = (0);
var i__37776 = (0);
while(true){
if((i__37776 < count__37775)){
var role = cljs.core._nth.call(null,chunk__37774,i__37776);
var temp__4657__auto___37830__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37830__$1)){
var spec_37831 = temp__4657__auto___37830__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37831));
} else {
}

var G__37832 = seq__37773;
var G__37833 = chunk__37774;
var G__37834 = count__37775;
var G__37835 = (i__37776 + (1));
seq__37773 = G__37832;
chunk__37774 = G__37833;
count__37775 = G__37834;
i__37776 = G__37835;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37773);
if(temp__4657__auto____$1){
var seq__37773__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37773__$1)){
var c__28035__auto__ = cljs.core.chunk_first.call(null,seq__37773__$1);
var G__37836 = cljs.core.chunk_rest.call(null,seq__37773__$1);
var G__37837 = c__28035__auto__;
var G__37838 = cljs.core.count.call(null,c__28035__auto__);
var G__37839 = (0);
seq__37773 = G__37836;
chunk__37774 = G__37837;
count__37775 = G__37838;
i__37776 = G__37839;
continue;
} else {
var role = cljs.core.first.call(null,seq__37773__$1);
var temp__4657__auto___37840__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37840__$2)){
var spec_37841 = temp__4657__auto___37840__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37841));
} else {
}

var G__37842 = cljs.core.next.call(null,seq__37773__$1);
var G__37843 = null;
var G__37844 = (0);
var G__37845 = (0);
seq__37773 = G__37842;
chunk__37774 = G__37843;
count__37775 = G__37844;
i__37776 = G__37845;
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

//# sourceMappingURL=repl.js.map?rel=1515350497130
