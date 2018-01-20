// Compiled by ClojureScript 1.9.908 {}
goog.provide('meeting.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs_time.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("meeting.subs","active-panel","meeting.subs/active-panel",-1301583180),(function (db,_){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("meeting.subs","db","meeting.subs/db",-598217791),(function (db,_){
return db;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("meeting.subs","meetings","meeting.subs/meetings",686752292),(function (db,_){
return cljs.core.vals.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("meeting.subs","meetings-raw","meeting.subs/meetings-raw",1443678768),(function (db,_){
return new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("meeting.subs","active-meeting-id","meeting.subs/active-meeting-id",1908472538),(function (db,_){
return new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("meeting.subs","active-meeting","meeting.subs/active-meeting",-1433674092),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.subs","active-meeting-id","meeting.subs/active-meeting-id",1908472538)], null)),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.subs","meetings-raw","meeting.subs/meetings-raw",1443678768)], null))], null);
}),(function (p__80075){
var vec__80076 = p__80075;
var id = cljs.core.nth.call(null,vec__80076,(0),null);
var meetings = cljs.core.nth.call(null,vec__80076,(1),null);
var m = cljs.core.get.call(null,meetings,id);
if(cljs.core.truth_(id)){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs_time.core.plus.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(m),cljs_time.core.hours.call(null,new cljs.core.Keyword(null,"diff","diff",2135942783).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timezone","timezone",1831928099).cljs$core$IFn$_invoke$arity$1(m))))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958)], null),cljs_time.core.plus.call(null,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(m),cljs_time.core.hours.call(null,new cljs.core.Keyword(null,"diff","diff",2135942783).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timezone","timezone",1831928099).cljs$core$IFn$_invoke$arity$1(m)))));
} else {
return null;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("meeting.subs","showing","meeting.subs/showing",-768250114),(function (db,_){
return new cljs.core.Keyword(null,"showing","showing",798009604).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("meeting.subs","filter-date","meeting.subs/filter-date",1209432509),(function (db,_){
return new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("meeting.subs","visible-meetings","meeting.subs/visible-meetings",2146244548),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.subs","meetings","meeting.subs/meetings",686752292)], null)),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.subs","filter-date","meeting.subs/filter-date",1209432509)], null))], null);
}),(function (p__80082){
var vec__80083 = p__80082;
var meetings = cljs.core.nth.call(null,vec__80083,(0),null);
var d = cljs.core.nth.call(null,vec__80083,(1),null);
if((d == null)){
return meetings;
} else {
return cljs.core.filter.call(null,((function (vec__80083,meetings,d){
return (function (p1__80081_SHARP_){
var or__27195__auto__ = cljs_time.core.within_QMARK_.call(null,p1__80081_SHARP_,d);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs_time.core.equal_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__80081_SHARP_)),cljs_time.core.month.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__80081_SHARP_)),cljs_time.core.day.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__80081_SHARP_))),d);
}
});})(vec__80083,meetings,d))
,cljs.core.map.call(null,((function (vec__80083,meetings,d){
return (function (p1__80080_SHARP_){
return cljs.core.update_in.call(null,p1__80080_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958)], null),cljs_time.core.local_date_time);
});})(vec__80083,meetings,d))
,cljs.core.map.call(null,((function (vec__80083,meetings,d){
return (function (p1__80079_SHARP_){
return cljs.core.update_in.call(null,p1__80079_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981)], null),cljs_time.core.local_date_time);
});})(vec__80083,meetings,d))
,meetings)));
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("meeting.subs","error","meeting.subs/error",582614042),(function (db,_){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1516454450505
