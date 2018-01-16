// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37825){
var map__37826 = p__37825;
var map__37826__$1 = ((((!((map__37826 == null)))?((((map__37826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37826):map__37826);
var m = map__37826__$1;
var n = cljs.core.get.call(null,map__37826__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37826__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37828_37850 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37829_37851 = null;
var count__37830_37852 = (0);
var i__37831_37853 = (0);
while(true){
if((i__37831_37853 < count__37830_37852)){
var f_37854 = cljs.core._nth.call(null,chunk__37829_37851,i__37831_37853);
cljs.core.println.call(null,"  ",f_37854);

var G__37855 = seq__37828_37850;
var G__37856 = chunk__37829_37851;
var G__37857 = count__37830_37852;
var G__37858 = (i__37831_37853 + (1));
seq__37828_37850 = G__37855;
chunk__37829_37851 = G__37856;
count__37830_37852 = G__37857;
i__37831_37853 = G__37858;
continue;
} else {
var temp__4657__auto___37859 = cljs.core.seq.call(null,seq__37828_37850);
if(temp__4657__auto___37859){
var seq__37828_37860__$1 = temp__4657__auto___37859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37828_37860__$1)){
var c__28034__auto___37861 = cljs.core.chunk_first.call(null,seq__37828_37860__$1);
var G__37862 = cljs.core.chunk_rest.call(null,seq__37828_37860__$1);
var G__37863 = c__28034__auto___37861;
var G__37864 = cljs.core.count.call(null,c__28034__auto___37861);
var G__37865 = (0);
seq__37828_37850 = G__37862;
chunk__37829_37851 = G__37863;
count__37830_37852 = G__37864;
i__37831_37853 = G__37865;
continue;
} else {
var f_37866 = cljs.core.first.call(null,seq__37828_37860__$1);
cljs.core.println.call(null,"  ",f_37866);

var G__37867 = cljs.core.next.call(null,seq__37828_37860__$1);
var G__37868 = null;
var G__37869 = (0);
var G__37870 = (0);
seq__37828_37850 = G__37867;
chunk__37829_37851 = G__37868;
count__37830_37852 = G__37869;
i__37831_37853 = G__37870;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37871 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37871);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37871)))?cljs.core.second.call(null,arglists_37871):arglists_37871));
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
var seq__37832_37872 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37833_37873 = null;
var count__37834_37874 = (0);
var i__37835_37875 = (0);
while(true){
if((i__37835_37875 < count__37834_37874)){
var vec__37836_37876 = cljs.core._nth.call(null,chunk__37833_37873,i__37835_37875);
var name_37877 = cljs.core.nth.call(null,vec__37836_37876,(0),null);
var map__37839_37878 = cljs.core.nth.call(null,vec__37836_37876,(1),null);
var map__37839_37879__$1 = ((((!((map__37839_37878 == null)))?((((map__37839_37878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37839_37878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37839_37878):map__37839_37878);
var doc_37880 = cljs.core.get.call(null,map__37839_37879__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37881 = cljs.core.get.call(null,map__37839_37879__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37877);

cljs.core.println.call(null," ",arglists_37881);

if(cljs.core.truth_(doc_37880)){
cljs.core.println.call(null," ",doc_37880);
} else {
}

var G__37882 = seq__37832_37872;
var G__37883 = chunk__37833_37873;
var G__37884 = count__37834_37874;
var G__37885 = (i__37835_37875 + (1));
seq__37832_37872 = G__37882;
chunk__37833_37873 = G__37883;
count__37834_37874 = G__37884;
i__37835_37875 = G__37885;
continue;
} else {
var temp__4657__auto___37886 = cljs.core.seq.call(null,seq__37832_37872);
if(temp__4657__auto___37886){
var seq__37832_37887__$1 = temp__4657__auto___37886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37832_37887__$1)){
var c__28034__auto___37888 = cljs.core.chunk_first.call(null,seq__37832_37887__$1);
var G__37889 = cljs.core.chunk_rest.call(null,seq__37832_37887__$1);
var G__37890 = c__28034__auto___37888;
var G__37891 = cljs.core.count.call(null,c__28034__auto___37888);
var G__37892 = (0);
seq__37832_37872 = G__37889;
chunk__37833_37873 = G__37890;
count__37834_37874 = G__37891;
i__37835_37875 = G__37892;
continue;
} else {
var vec__37841_37893 = cljs.core.first.call(null,seq__37832_37887__$1);
var name_37894 = cljs.core.nth.call(null,vec__37841_37893,(0),null);
var map__37844_37895 = cljs.core.nth.call(null,vec__37841_37893,(1),null);
var map__37844_37896__$1 = ((((!((map__37844_37895 == null)))?((((map__37844_37895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37844_37895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37844_37895):map__37844_37895);
var doc_37897 = cljs.core.get.call(null,map__37844_37896__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37898 = cljs.core.get.call(null,map__37844_37896__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37894);

cljs.core.println.call(null," ",arglists_37898);

if(cljs.core.truth_(doc_37897)){
cljs.core.println.call(null," ",doc_37897);
} else {
}

var G__37899 = cljs.core.next.call(null,seq__37832_37887__$1);
var G__37900 = null;
var G__37901 = (0);
var G__37902 = (0);
seq__37832_37872 = G__37899;
chunk__37833_37873 = G__37900;
count__37834_37874 = G__37901;
i__37835_37875 = G__37902;
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

var seq__37846 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37847 = null;
var count__37848 = (0);
var i__37849 = (0);
while(true){
if((i__37849 < count__37848)){
var role = cljs.core._nth.call(null,chunk__37847,i__37849);
var temp__4657__auto___37903__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37903__$1)){
var spec_37904 = temp__4657__auto___37903__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37904));
} else {
}

var G__37905 = seq__37846;
var G__37906 = chunk__37847;
var G__37907 = count__37848;
var G__37908 = (i__37849 + (1));
seq__37846 = G__37905;
chunk__37847 = G__37906;
count__37848 = G__37907;
i__37849 = G__37908;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37846);
if(temp__4657__auto____$1){
var seq__37846__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37846__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37846__$1);
var G__37909 = cljs.core.chunk_rest.call(null,seq__37846__$1);
var G__37910 = c__28034__auto__;
var G__37911 = cljs.core.count.call(null,c__28034__auto__);
var G__37912 = (0);
seq__37846 = G__37909;
chunk__37847 = G__37910;
count__37848 = G__37911;
i__37849 = G__37912;
continue;
} else {
var role = cljs.core.first.call(null,seq__37846__$1);
var temp__4657__auto___37913__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37913__$2)){
var spec_37914 = temp__4657__auto___37913__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37914));
} else {
}

var G__37915 = cljs.core.next.call(null,seq__37846__$1);
var G__37916 = null;
var G__37917 = (0);
var G__37918 = (0);
seq__37846 = G__37915;
chunk__37847 = G__37916;
count__37848 = G__37917;
i__37849 = G__37918;
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

//# sourceMappingURL=repl.js.map?rel=1516093591019
