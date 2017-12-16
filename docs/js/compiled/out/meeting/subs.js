// Compiled by ClojureScript 1.9.908 {}
goog.provide('meeting.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
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
}),(function (p__33285){
var vec__33286 = p__33285;
var id = cljs.core.nth.call(null,vec__33286,(0),null);
var meetings = cljs.core.nth.call(null,vec__33286,(1),null);
return cljs.core.get.call(null,meetings,id);
}));

//# sourceMappingURL=subs.js.map?rel=1513458291920
