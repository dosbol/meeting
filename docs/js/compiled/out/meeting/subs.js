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
}),(function (p__47054){
var vec__47055 = p__47054;
var id = cljs.core.nth.call(null,vec__47055,(0),null);
var meetings = cljs.core.nth.call(null,vec__47055,(1),null);
return cljs.core.get.call(null,meetings,id);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("meeting.subs","showing","meeting.subs/showing",-768250114),(function (db,_){
return new cljs.core.Keyword(null,"showing","showing",798009604).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("meeting.subs","filter-date","meeting.subs/filter-date",1209432509),(function (db,_){
return new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("meeting.subs","visible-meetings","meeting.subs/visible-meetings",2146244548),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.subs","meetings","meeting.subs/meetings",686752292)], null)),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.subs","filter-date","meeting.subs/filter-date",1209432509)], null))], null);
}),(function (p__47059){
var vec__47060 = p__47059;
var meetings = cljs.core.nth.call(null,vec__47060,(0),null);
var d = cljs.core.nth.call(null,vec__47060,(1),null);
if((d == null)){
return meetings;
} else {
return cljs.core.filter.call(null,((function (vec__47060,meetings,d){
return (function (p1__47058_SHARP_){
var or__27195__auto__ = cljs_time.core.within_QMARK_.call(null,new cljs.core.Keyword(null,"begin-date","begin-date",-1169757512).cljs$core$IFn$_invoke$arity$1(p1__47058_SHARP_),new cljs.core.Keyword(null,"end-date","end-date",-208259642).cljs$core$IFn$_invoke$arity$1(p1__47058_SHARP_),d);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs_time.core.equal_QMARK_.call(null,new cljs.core.Keyword(null,"end-date","end-date",-208259642).cljs$core$IFn$_invoke$arity$1(p1__47058_SHARP_),d);
}
});})(vec__47060,meetings,d))
,meetings);
}
}));

//# sourceMappingURL=subs.js.map?rel=1515065158301
