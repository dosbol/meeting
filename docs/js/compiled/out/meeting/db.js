// Compiled by ClojureScript 1.9.908 {}
goog.provide('meeting.db');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs_time.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("meeting.db","id","meeting.db/id",-1650083549),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("meeting.db","title","meeting.db/title",-170438976),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("meeting.db","status","meeting.db/status",-656998714),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"done","done",-889844188),null,new cljs.core.Keyword(null,"planned","planned",-1213840184),null,new cljs.core.Keyword(null,"inprocess","inprocess",2078629075),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"done","done",-889844188),null,new cljs.core.Keyword(null,"planned","planned",-1213840184),null,new cljs.core.Keyword(null,"inprocess","inprocess",2078629075),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("meeting.db","begin","meeting.db/begin",-1125847262),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("meeting.db","end","meeting.db/end",508356015),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("meeting.db","meeting","meeting.db/meeting",522150007),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.db","id","meeting.db/id",-1650083549),new cljs.core.Keyword("meeting.db","title","meeting.db/title",-170438976),new cljs.core.Keyword("meeting.db","status","meeting.db/status",-656998714),new cljs.core.Keyword("meeting.db","begin","meeting.db/begin",-1125847262),new cljs.core.Keyword("meeting.db","end","meeting.db/end",508356015)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.db","id","meeting.db/id",-1650083549),new cljs.core.Keyword("meeting.db","title","meeting.db/title",-170438976),new cljs.core.Keyword("meeting.db","status","meeting.db/status",-656998714),new cljs.core.Keyword("meeting.db","begin","meeting.db/begin",-1125847262),new cljs.core.Keyword("meeting.db","end","meeting.db/end",508356015)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35080){
return cljs.core.map_QMARK_.call(null,G__35080);
}),(function (G__35080){
return cljs.core.contains_QMARK_.call(null,G__35080,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__35080){
return cljs.core.contains_QMARK_.call(null,G__35080,new cljs.core.Keyword(null,"title","title",636505583));
}),(function (G__35080){
return cljs.core.contains_QMARK_.call(null,G__35080,new cljs.core.Keyword(null,"status","status",-1997798413));
}),(function (G__35080){
return cljs.core.contains_QMARK_.call(null,G__35080,new cljs.core.Keyword(null,"begin","begin",-319034319));
}),(function (G__35080){
return cljs.core.contains_QMARK_.call(null,G__35080,new cljs.core.Keyword(null,"end","end",-268185958));
})], null),(function (G__35080){
return (cljs.core.map_QMARK_.call(null,G__35080)) && (cljs.core.contains_QMARK_.call(null,G__35080,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_.call(null,G__35080,new cljs.core.Keyword(null,"title","title",636505583))) && (cljs.core.contains_QMARK_.call(null,G__35080,new cljs.core.Keyword(null,"status","status",-1997798413))) && (cljs.core.contains_QMARK_.call(null,G__35080,new cljs.core.Keyword(null,"begin","begin",-319034319))) && (cljs.core.contains_QMARK_.call(null,G__35080,new cljs.core.Keyword(null,"end","end",-268185958)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.db","id","meeting.db/id",-1650083549),new cljs.core.Keyword("meeting.db","title","meeting.db/title",-170438976),new cljs.core.Keyword("meeting.db","status","meeting.db/status",-656998714),new cljs.core.Keyword("meeting.db","begin","meeting.db/begin",-1125847262),new cljs.core.Keyword("meeting.db","end","meeting.db/end",508356015)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"end","end",-268185958)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"title","title",636505583))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"status","status",-1997798413))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"begin","begin",-319034319))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"end","end",-268185958)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("meeting.db","meetings","meeting.db/meetings",-751558391),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("meeting.db","id","meeting.db/id",-1650083549),new cljs.core.Keyword("meeting.db","meeting","meeting.db/meeting",522150007)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__35081#","p1__35081#",378067397,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs.core","PersistentTreeMap","cljs.core/PersistentTreeMap",998680439,null),new cljs.core.Symbol(null,"p1__35081#","p1__35081#",378067397,null)))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("meeting.db","id","meeting.db/id",-1650083549),new cljs.core.Keyword("meeting.db","meeting","meeting.db/meeting",522150007)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs.core","PersistentTreeMap","cljs.core/PersistentTreeMap",998680439,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("meeting.db","id","meeting.db/id",-1650083549),new cljs.core.Keyword("meeting.db","meeting","meeting.db/meeting",522150007)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.db","id","meeting.db/id",-1650083549),new cljs.core.Keyword("meeting.db","meeting","meeting.db/meeting",522150007)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.db","id","meeting.db/id",-1650083549),new cljs.core.Keyword("meeting.db","meeting","meeting.db/meeting",522150007)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__35082){
return cljs.core.map_QMARK_.call(null,G__35082);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__28580__auto__,v__28581__auto__){
return cljs.core.nth.call(null,v__28581__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("meeting.db","id","meeting.db/id",-1650083549),new cljs.core.Keyword("meeting.db","meeting","meeting.db/meeting",522150007))], null),null),(function (p1__35081_SHARP_){
return (p1__35081_SHARP_ instanceof cljs.core.PersistentTreeMap);
})], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("meeting.db","showing","meeting.db/showing",1069393939),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"all","all",892129742),null,new cljs.core.Keyword(null,"filter","filter",-948537934),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"all","all",892129742),null,new cljs.core.Keyword(null,"filter","filter",-948537934),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("meeting.db","db","meeting.db/db",1796394744),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.db","meetings","meeting.db/meetings",-751558391),new cljs.core.Keyword("meeting.db","showing","meeting.db/showing",1069393939)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.db","meetings","meeting.db/meetings",-751558391),new cljs.core.Keyword("meeting.db","showing","meeting.db/showing",1069393939)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35083){
return cljs.core.map_QMARK_.call(null,G__35083);
}),(function (G__35083){
return cljs.core.contains_QMARK_.call(null,G__35083,new cljs.core.Keyword(null,"meetings","meetings",39002138));
}),(function (G__35083){
return cljs.core.contains_QMARK_.call(null,G__35083,new cljs.core.Keyword(null,"showing","showing",798009604));
})], null),(function (G__35083){
return (cljs.core.map_QMARK_.call(null,G__35083)) && (cljs.core.contains_QMARK_.call(null,G__35083,new cljs.core.Keyword(null,"meetings","meetings",39002138))) && (cljs.core.contains_QMARK_.call(null,G__35083,new cljs.core.Keyword(null,"showing","showing",798009604)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.db","meetings","meeting.db/meetings",-751558391),new cljs.core.Keyword("meeting.db","showing","meeting.db/showing",1069393939)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138),new cljs.core.Keyword(null,"showing","showing",798009604)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"meetings","meetings",39002138))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"showing","showing",798009604)))], null),null])));
meeting.db.default_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meetings","meetings",39002138),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"meeting with mr. X",new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"planned","planned",-1213840184),new cljs.core.Keyword(null,"timezone","timezone",1831928099),new cljs.core.Keyword(null,"greenwich","greenwich",-756077746),new cljs.core.Keyword(null,"start","start",-355208981),cljs_time.core.from_now.call(null,cljs_time.core.minutes.call(null,(1))),new cljs.core.Keyword(null,"end","end",-268185958),cljs_time.core.from_now.call(null,cljs_time.core.minutes.call(null,(2))),new cljs.core.Keyword(null,"id","id",-1388402092),(1)], null),(2),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"meeting with mr. Y",new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"planned","planned",-1213840184),new cljs.core.Keyword(null,"timezone","timezone",1831928099),new cljs.core.Keyword(null,"greenwich","greenwich",-756077746),new cljs.core.Keyword(null,"start","start",-355208981),cljs_time.core.from_now.call(null,cljs_time.core.minutes.call(null,(2))),new cljs.core.Keyword(null,"end","end",-268185958),cljs_time.core.from_now.call(null,cljs_time.core.minutes.call(null,(3))),new cljs.core.Keyword(null,"id","id",-1388402092),(2)], null)], null)], null);

//# sourceMappingURL=db.js.map?rel=1516053473006
