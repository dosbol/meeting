// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37818){
var map__37819 = p__37818;
var map__37819__$1 = ((((!((map__37819 == null)))?((((map__37819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37819):map__37819);
var m = map__37819__$1;
var n = cljs.core.get.call(null,map__37819__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37819__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37821_37843 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37822_37844 = null;
var count__37823_37845 = (0);
var i__37824_37846 = (0);
while(true){
if((i__37824_37846 < count__37823_37845)){
var f_37847 = cljs.core._nth.call(null,chunk__37822_37844,i__37824_37846);
cljs.core.println.call(null,"  ",f_37847);

var G__37848 = seq__37821_37843;
var G__37849 = chunk__37822_37844;
var G__37850 = count__37823_37845;
var G__37851 = (i__37824_37846 + (1));
seq__37821_37843 = G__37848;
chunk__37822_37844 = G__37849;
count__37823_37845 = G__37850;
i__37824_37846 = G__37851;
continue;
} else {
var temp__4657__auto___37852 = cljs.core.seq.call(null,seq__37821_37843);
if(temp__4657__auto___37852){
var seq__37821_37853__$1 = temp__4657__auto___37852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37821_37853__$1)){
var c__28034__auto___37854 = cljs.core.chunk_first.call(null,seq__37821_37853__$1);
var G__37855 = cljs.core.chunk_rest.call(null,seq__37821_37853__$1);
var G__37856 = c__28034__auto___37854;
var G__37857 = cljs.core.count.call(null,c__28034__auto___37854);
var G__37858 = (0);
seq__37821_37843 = G__37855;
chunk__37822_37844 = G__37856;
count__37823_37845 = G__37857;
i__37824_37846 = G__37858;
continue;
} else {
var f_37859 = cljs.core.first.call(null,seq__37821_37853__$1);
cljs.core.println.call(null,"  ",f_37859);

var G__37860 = cljs.core.next.call(null,seq__37821_37853__$1);
var G__37861 = null;
var G__37862 = (0);
var G__37863 = (0);
seq__37821_37843 = G__37860;
chunk__37822_37844 = G__37861;
count__37823_37845 = G__37862;
i__37824_37846 = G__37863;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37864 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37864);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37864)))?cljs.core.second.call(null,arglists_37864):arglists_37864));
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
var seq__37825_37865 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37826_37866 = null;
var count__37827_37867 = (0);
var i__37828_37868 = (0);
while(true){
if((i__37828_37868 < count__37827_37867)){
var vec__37829_37869 = cljs.core._nth.call(null,chunk__37826_37866,i__37828_37868);
var name_37870 = cljs.core.nth.call(null,vec__37829_37869,(0),null);
var map__37832_37871 = cljs.core.nth.call(null,vec__37829_37869,(1),null);
var map__37832_37872__$1 = ((((!((map__37832_37871 == null)))?((((map__37832_37871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37832_37871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37832_37871):map__37832_37871);
var doc_37873 = cljs.core.get.call(null,map__37832_37872__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37874 = cljs.core.get.call(null,map__37832_37872__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37870);

cljs.core.println.call(null," ",arglists_37874);

if(cljs.core.truth_(doc_37873)){
cljs.core.println.call(null," ",doc_37873);
} else {
}

var G__37875 = seq__37825_37865;
var G__37876 = chunk__37826_37866;
var G__37877 = count__37827_37867;
var G__37878 = (i__37828_37868 + (1));
seq__37825_37865 = G__37875;
chunk__37826_37866 = G__37876;
count__37827_37867 = G__37877;
i__37828_37868 = G__37878;
continue;
} else {
var temp__4657__auto___37879 = cljs.core.seq.call(null,seq__37825_37865);
if(temp__4657__auto___37879){
var seq__37825_37880__$1 = temp__4657__auto___37879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37825_37880__$1)){
var c__28034__auto___37881 = cljs.core.chunk_first.call(null,seq__37825_37880__$1);
var G__37882 = cljs.core.chunk_rest.call(null,seq__37825_37880__$1);
var G__37883 = c__28034__auto___37881;
var G__37884 = cljs.core.count.call(null,c__28034__auto___37881);
var G__37885 = (0);
seq__37825_37865 = G__37882;
chunk__37826_37866 = G__37883;
count__37827_37867 = G__37884;
i__37828_37868 = G__37885;
continue;
} else {
var vec__37834_37886 = cljs.core.first.call(null,seq__37825_37880__$1);
var name_37887 = cljs.core.nth.call(null,vec__37834_37886,(0),null);
var map__37837_37888 = cljs.core.nth.call(null,vec__37834_37886,(1),null);
var map__37837_37889__$1 = ((((!((map__37837_37888 == null)))?((((map__37837_37888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37837_37888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37837_37888):map__37837_37888);
var doc_37890 = cljs.core.get.call(null,map__37837_37889__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37891 = cljs.core.get.call(null,map__37837_37889__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37887);

cljs.core.println.call(null," ",arglists_37891);

if(cljs.core.truth_(doc_37890)){
cljs.core.println.call(null," ",doc_37890);
} else {
}

var G__37892 = cljs.core.next.call(null,seq__37825_37880__$1);
var G__37893 = null;
var G__37894 = (0);
var G__37895 = (0);
seq__37825_37865 = G__37892;
chunk__37826_37866 = G__37893;
count__37827_37867 = G__37894;
i__37828_37868 = G__37895;
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

var seq__37839 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37840 = null;
var count__37841 = (0);
var i__37842 = (0);
while(true){
if((i__37842 < count__37841)){
var role = cljs.core._nth.call(null,chunk__37840,i__37842);
var temp__4657__auto___37896__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37896__$1)){
var spec_37897 = temp__4657__auto___37896__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37897));
} else {
}

var G__37898 = seq__37839;
var G__37899 = chunk__37840;
var G__37900 = count__37841;
var G__37901 = (i__37842 + (1));
seq__37839 = G__37898;
chunk__37840 = G__37899;
count__37841 = G__37900;
i__37842 = G__37901;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37839);
if(temp__4657__auto____$1){
var seq__37839__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37839__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37839__$1);
var G__37902 = cljs.core.chunk_rest.call(null,seq__37839__$1);
var G__37903 = c__28034__auto__;
var G__37904 = cljs.core.count.call(null,c__28034__auto__);
var G__37905 = (0);
seq__37839 = G__37902;
chunk__37840 = G__37903;
count__37841 = G__37904;
i__37842 = G__37905;
continue;
} else {
var role = cljs.core.first.call(null,seq__37839__$1);
var temp__4657__auto___37906__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37906__$2)){
var spec_37907 = temp__4657__auto___37906__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37907));
} else {
}

var G__37908 = cljs.core.next.call(null,seq__37839__$1);
var G__37909 = null;
var G__37910 = (0);
var G__37911 = (0);
seq__37839 = G__37908;
chunk__37840 = G__37909;
count__37841 = G__37910;
i__37842 = G__37911;
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

//# sourceMappingURL=repl.js.map?rel=1516053487725
