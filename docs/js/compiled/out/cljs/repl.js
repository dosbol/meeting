// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37821){
var map__37822 = p__37821;
var map__37822__$1 = ((((!((map__37822 == null)))?((((map__37822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37822):map__37822);
var m = map__37822__$1;
var n = cljs.core.get.call(null,map__37822__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37822__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37824_37846 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37825_37847 = null;
var count__37826_37848 = (0);
var i__37827_37849 = (0);
while(true){
if((i__37827_37849 < count__37826_37848)){
var f_37850 = cljs.core._nth.call(null,chunk__37825_37847,i__37827_37849);
cljs.core.println.call(null,"  ",f_37850);

var G__37851 = seq__37824_37846;
var G__37852 = chunk__37825_37847;
var G__37853 = count__37826_37848;
var G__37854 = (i__37827_37849 + (1));
seq__37824_37846 = G__37851;
chunk__37825_37847 = G__37852;
count__37826_37848 = G__37853;
i__37827_37849 = G__37854;
continue;
} else {
var temp__4657__auto___37855 = cljs.core.seq.call(null,seq__37824_37846);
if(temp__4657__auto___37855){
var seq__37824_37856__$1 = temp__4657__auto___37855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37824_37856__$1)){
var c__28034__auto___37857 = cljs.core.chunk_first.call(null,seq__37824_37856__$1);
var G__37858 = cljs.core.chunk_rest.call(null,seq__37824_37856__$1);
var G__37859 = c__28034__auto___37857;
var G__37860 = cljs.core.count.call(null,c__28034__auto___37857);
var G__37861 = (0);
seq__37824_37846 = G__37858;
chunk__37825_37847 = G__37859;
count__37826_37848 = G__37860;
i__37827_37849 = G__37861;
continue;
} else {
var f_37862 = cljs.core.first.call(null,seq__37824_37856__$1);
cljs.core.println.call(null,"  ",f_37862);

var G__37863 = cljs.core.next.call(null,seq__37824_37856__$1);
var G__37864 = null;
var G__37865 = (0);
var G__37866 = (0);
seq__37824_37846 = G__37863;
chunk__37825_37847 = G__37864;
count__37826_37848 = G__37865;
i__37827_37849 = G__37866;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37867 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37867);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37867)))?cljs.core.second.call(null,arglists_37867):arglists_37867));
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
var seq__37828_37868 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37829_37869 = null;
var count__37830_37870 = (0);
var i__37831_37871 = (0);
while(true){
if((i__37831_37871 < count__37830_37870)){
var vec__37832_37872 = cljs.core._nth.call(null,chunk__37829_37869,i__37831_37871);
var name_37873 = cljs.core.nth.call(null,vec__37832_37872,(0),null);
var map__37835_37874 = cljs.core.nth.call(null,vec__37832_37872,(1),null);
var map__37835_37875__$1 = ((((!((map__37835_37874 == null)))?((((map__37835_37874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37835_37874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37835_37874):map__37835_37874);
var doc_37876 = cljs.core.get.call(null,map__37835_37875__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37877 = cljs.core.get.call(null,map__37835_37875__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37873);

cljs.core.println.call(null," ",arglists_37877);

if(cljs.core.truth_(doc_37876)){
cljs.core.println.call(null," ",doc_37876);
} else {
}

var G__37878 = seq__37828_37868;
var G__37879 = chunk__37829_37869;
var G__37880 = count__37830_37870;
var G__37881 = (i__37831_37871 + (1));
seq__37828_37868 = G__37878;
chunk__37829_37869 = G__37879;
count__37830_37870 = G__37880;
i__37831_37871 = G__37881;
continue;
} else {
var temp__4657__auto___37882 = cljs.core.seq.call(null,seq__37828_37868);
if(temp__4657__auto___37882){
var seq__37828_37883__$1 = temp__4657__auto___37882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37828_37883__$1)){
var c__28034__auto___37884 = cljs.core.chunk_first.call(null,seq__37828_37883__$1);
var G__37885 = cljs.core.chunk_rest.call(null,seq__37828_37883__$1);
var G__37886 = c__28034__auto___37884;
var G__37887 = cljs.core.count.call(null,c__28034__auto___37884);
var G__37888 = (0);
seq__37828_37868 = G__37885;
chunk__37829_37869 = G__37886;
count__37830_37870 = G__37887;
i__37831_37871 = G__37888;
continue;
} else {
var vec__37837_37889 = cljs.core.first.call(null,seq__37828_37883__$1);
var name_37890 = cljs.core.nth.call(null,vec__37837_37889,(0),null);
var map__37840_37891 = cljs.core.nth.call(null,vec__37837_37889,(1),null);
var map__37840_37892__$1 = ((((!((map__37840_37891 == null)))?((((map__37840_37891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37840_37891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37840_37891):map__37840_37891);
var doc_37893 = cljs.core.get.call(null,map__37840_37892__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37894 = cljs.core.get.call(null,map__37840_37892__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37890);

cljs.core.println.call(null," ",arglists_37894);

if(cljs.core.truth_(doc_37893)){
cljs.core.println.call(null," ",doc_37893);
} else {
}

var G__37895 = cljs.core.next.call(null,seq__37828_37883__$1);
var G__37896 = null;
var G__37897 = (0);
var G__37898 = (0);
seq__37828_37868 = G__37895;
chunk__37829_37869 = G__37896;
count__37830_37870 = G__37897;
i__37831_37871 = G__37898;
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

var seq__37842 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37843 = null;
var count__37844 = (0);
var i__37845 = (0);
while(true){
if((i__37845 < count__37844)){
var role = cljs.core._nth.call(null,chunk__37843,i__37845);
var temp__4657__auto___37899__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37899__$1)){
var spec_37900 = temp__4657__auto___37899__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37900));
} else {
}

var G__37901 = seq__37842;
var G__37902 = chunk__37843;
var G__37903 = count__37844;
var G__37904 = (i__37845 + (1));
seq__37842 = G__37901;
chunk__37843 = G__37902;
count__37844 = G__37903;
i__37845 = G__37904;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37842);
if(temp__4657__auto____$1){
var seq__37842__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37842__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37842__$1);
var G__37905 = cljs.core.chunk_rest.call(null,seq__37842__$1);
var G__37906 = c__28034__auto__;
var G__37907 = cljs.core.count.call(null,c__28034__auto__);
var G__37908 = (0);
seq__37842 = G__37905;
chunk__37843 = G__37906;
count__37844 = G__37907;
i__37845 = G__37908;
continue;
} else {
var role = cljs.core.first.call(null,seq__37842__$1);
var temp__4657__auto___37909__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37909__$2)){
var spec_37910 = temp__4657__auto___37909__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37910));
} else {
}

var G__37911 = cljs.core.next.call(null,seq__37842__$1);
var G__37912 = null;
var G__37913 = (0);
var G__37914 = (0);
seq__37842 = G__37911;
chunk__37843 = G__37912;
count__37844 = G__37913;
i__37845 = G__37914;
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

//# sourceMappingURL=repl.js.map?rel=1517373781881
