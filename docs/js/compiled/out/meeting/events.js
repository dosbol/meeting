// Compiled by ClojureScript 1.9.908 {}
goog.provide('meeting.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('meeting.db');
goog.require('cljs_time.core');
goog.require('clojure.string');
goog.require('cljs_time.format');
if(typeof meeting.events.last_id !== 'undefined'){
} else {
meeting.events.last_id = cljs.core.atom.call(null,(2));
}
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103),(function (cofx,_){
return cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103),cljs.core.swap_BANG_.call(null,meeting.events.last_id,cljs.core.inc));
}));
meeting.events.datetime_formatter = cljs_time.format.formatter.call(null,"dd.MM.yyyy hh:mm A");
meeting.events.filter_queue = (function meeting$events$filter_queue(f,q){
return cljs.core.apply.call(null,cljs.core.conj,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),cljs.core.vec.call(null,cljs.core.filter.call(null,f,q)));
});
meeting.events.not_in_QMARK_ = (function meeting$events$not_in_QMARK_(coll,elem){
return !(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,coll),elem));
});
meeting.events.not_in_validation_interceptors_QMARK_ = (function meeting$events$not_in_validation_interceptors_QMARK_(elem){
return meeting.events.not_in_QMARK_.call(null,meeting.events.validation_interceptors,elem);
});
meeting.events.blank_title_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blank-title?","blank-title?",-543306182),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__68473 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__68473__$1 = ((((!((map__68473 == null)))?((((map__68473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68473):map__68473);
var db = cljs.core.get.call(null,map__68473__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__68474 = cljs.core.get.call(null,map__68473__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__68474,(0),null);
var map__68477 = cljs.core.nth.call(null,vec__68474,(1),null);
var map__68477__$1 = ((((!((map__68477 == null)))?((((map__68477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68477):map__68477);
var title = cljs.core.get.call(null,map__68477__$1,new cljs.core.Keyword(null,"title","title",636505583));
if(clojure.string.blank_QMARK_.call(null,title)){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Title required"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (map__68473,map__68473__$1,db,vec__68474,event,map__68477,map__68477__$1,title){
return (function (p1__68472_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__68472_SHARP_);
});})(map__68473,map__68473__$1,db,vec__68474,event,map__68477,map__68477__$1,title))
);
} else {
return context;
}
}));
meeting.events.blank_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blank-start?","blank-start?",-1176534174),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__68481 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__68481__$1 = ((((!((map__68481 == null)))?((((map__68481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68481):map__68481);
var db = cljs.core.get.call(null,map__68481__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__68482 = cljs.core.get.call(null,map__68481__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__68482,(0),null);
var map__68485 = cljs.core.nth.call(null,vec__68482,(1),null);
var map__68485__$1 = ((((!((map__68485 == null)))?((((map__68485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68485):map__68485);
var start = cljs.core.get.call(null,map__68485__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var error = cljs.core.get.call(null,map__68481__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(clojure.string.blank_QMARK_.call(null,start)){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Start date-time required"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (map__68481,map__68481__$1,db,vec__68482,event,map__68485,map__68485__$1,start,error){
return (function (p1__68480_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__68480_SHARP_);
});})(map__68481,map__68481__$1,db,vec__68482,event,map__68485,map__68485__$1,start,error))
);
} else {
return context;
}
}));
meeting.events.blank_end_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blank-end?","blank-end?",1204049052),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__68489 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__68489__$1 = ((((!((map__68489 == null)))?((((map__68489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68489):map__68489);
var db = cljs.core.get.call(null,map__68489__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__68490 = cljs.core.get.call(null,map__68489__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__68490,(0),null);
var map__68493 = cljs.core.nth.call(null,vec__68490,(1),null);
var map__68493__$1 = ((((!((map__68493 == null)))?((((map__68493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68493):map__68493);
var end = cljs.core.get.call(null,map__68493__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var error = cljs.core.get.call(null,map__68489__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(clojure.string.blank_QMARK_.call(null,end)){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"End date-time required"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (map__68489,map__68489__$1,db,vec__68490,event,map__68493,map__68493__$1,end,error){
return (function (p1__68488_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__68488_SHARP_);
});})(map__68489,map__68489__$1,db,vec__68490,event,map__68493,map__68493__$1,end,error))
);
} else {
return context;
}
}));
meeting.events.invalid_format_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"invalid-format-start?","invalid-format-start?",-1627746461),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__68497 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__68497__$1 = ((((!((map__68497 == null)))?((((map__68497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68497):map__68497);
var db = cljs.core.get.call(null,map__68497__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__68498 = cljs.core.get.call(null,map__68497__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__68498,(0),null);
var map__68501 = cljs.core.nth.call(null,vec__68498,(1),null);
var map__68501__$1 = ((((!((map__68501 == null)))?((((map__68501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68501):map__68501);
var start = cljs.core.get.call(null,map__68501__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var error = cljs.core.get.call(null,map__68497__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.not.call(null,cljs.core.re_matches.call(null,/\d{2}\.\d{2}\.\d{4}\s+\d{2}:\d{2}\s+(AM|PM)/,start))){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Start date-time format is invalid(should be dd.MM.yyyy hh:mm AM)"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (map__68497,map__68497__$1,db,vec__68498,event,map__68501,map__68501__$1,start,error){
return (function (p1__68496_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__68496_SHARP_);
});})(map__68497,map__68497__$1,db,vec__68498,event,map__68501,map__68501__$1,start,error))
);
} else {
return context;
}
}));
meeting.events.invalid_format_end_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"invalid-format-end?","invalid-format-end?",1555500143),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__68505 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__68505__$1 = ((((!((map__68505 == null)))?((((map__68505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68505):map__68505);
var db = cljs.core.get.call(null,map__68505__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__68506 = cljs.core.get.call(null,map__68505__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__68506,(0),null);
var map__68509 = cljs.core.nth.call(null,vec__68506,(1),null);
var map__68509__$1 = ((((!((map__68509 == null)))?((((map__68509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68509):map__68509);
var end = cljs.core.get.call(null,map__68509__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var error = cljs.core.get.call(null,map__68505__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.not.call(null,cljs.core.re_matches.call(null,/\d{2}\.\d{2}\.\d{4}\s+\d{2}:\d{2}\s+(AM|PM)/,end))){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"End date-time format is invalid(should be dd.MM.yyyy hh:mm AM)"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (map__68505,map__68505__$1,db,vec__68506,event,map__68509,map__68509__$1,end,error){
return (function (p1__68504_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__68504_SHARP_);
});})(map__68505,map__68505__$1,db,vec__68506,event,map__68509,map__68509__$1,end,error))
);
} else {
return context;
}
}));
meeting.events.invalid_date_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"invalid-date-start?","invalid-date-start?",2121037716),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__68513 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__68513__$1 = ((((!((map__68513 == null)))?((((map__68513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68513):map__68513);
var db = cljs.core.get.call(null,map__68513__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__68514 = cljs.core.get.call(null,map__68513__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__68514,(0),null);
var map__68517 = cljs.core.nth.call(null,vec__68514,(1),null);
var map__68517__$1 = ((((!((map__68517 == null)))?((((map__68517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68517):map__68517);
var start = cljs.core.get.call(null,map__68517__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var error = cljs.core.get.call(null,map__68513__$1,new cljs.core.Keyword(null,"error","error",-978969032));
try{cljs_time.format.parse.call(null,meeting.events.datetime_formatter,start);

return context;
}catch (e68520){var e = e68520;
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Start date-time is not valid"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (e,map__68513,map__68513__$1,db,vec__68514,event,map__68517,map__68517__$1,start,error){
return (function (p1__68512_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__68512_SHARP_);
});})(e,map__68513,map__68513__$1,db,vec__68514,event,map__68517,map__68517__$1,start,error))
);
}}));
meeting.events.invalid_date_end_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"invalid-date-end?","invalid-date-end?",-559542291),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__68522 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__68522__$1 = ((((!((map__68522 == null)))?((((map__68522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68522):map__68522);
var db = cljs.core.get.call(null,map__68522__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__68523 = cljs.core.get.call(null,map__68522__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__68523,(0),null);
var map__68526 = cljs.core.nth.call(null,vec__68523,(1),null);
var map__68526__$1 = ((((!((map__68526 == null)))?((((map__68526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68526):map__68526);
var end = cljs.core.get.call(null,map__68526__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var error = cljs.core.get.call(null,map__68522__$1,new cljs.core.Keyword(null,"error","error",-978969032));
try{cljs_time.format.parse.call(null,meeting.events.datetime_formatter,end);

return context;
}catch (e68529){var e = e68529;
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"End date-time is not valid"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (e,map__68522,map__68522__$1,db,vec__68523,event,map__68526,map__68526__$1,end,error){
return (function (p1__68521_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__68521_SHARP_);
});})(e,map__68522,map__68522__$1,db,vec__68523,event,map__68526,map__68526__$1,end,error))
);
}}));
meeting.events.past_time_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"past-time-start?","past-time-start?",1337867366),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__68531 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__68531__$1 = ((((!((map__68531 == null)))?((((map__68531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68531):map__68531);
var db = cljs.core.get.call(null,map__68531__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__68532 = cljs.core.get.call(null,map__68531__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__68532,(0),null);
var map__68535 = cljs.core.nth.call(null,vec__68532,(1),null);
var map__68535__$1 = ((((!((map__68535 == null)))?((((map__68535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68535):map__68535);
var start = cljs.core.get.call(null,map__68535__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var error = cljs.core.get.call(null,map__68531__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.format.parse.call(null,meeting.events.datetime_formatter,start),cljs_time.core.now.call(null)))){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Start date-time could not be in past"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (map__68531,map__68531__$1,db,vec__68532,event,map__68535,map__68535__$1,start,error){
return (function (p1__68530_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__68530_SHARP_);
});})(map__68531,map__68531__$1,db,vec__68532,event,map__68535,map__68535__$1,start,error))
);
} else {
return context;
}
}));
meeting.events.end_before_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"end-before-start?","end-before-start?",-1391150180),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__68539 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__68539__$1 = ((((!((map__68539 == null)))?((((map__68539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68539):map__68539);
var db = cljs.core.get.call(null,map__68539__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__68540 = cljs.core.get.call(null,map__68539__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__68540,(0),null);
var map__68543 = cljs.core.nth.call(null,vec__68540,(1),null);
var map__68543__$1 = ((((!((map__68543 == null)))?((((map__68543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68543):map__68543);
var start = cljs.core.get.call(null,map__68543__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__68543__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var error = cljs.core.get.call(null,map__68539__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.format.parse.call(null,meeting.events.datetime_formatter,end),cljs_time.format.parse.call(null,meeting.events.datetime_formatter,start)))){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"End date-time could not be before start date-time"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (map__68539,map__68539__$1,db,vec__68540,event,map__68543,map__68543__$1,start,end,error){
return (function (p1__68538_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__68538_SHARP_);
});})(map__68539,map__68539__$1,db,vec__68540,event,map__68543,map__68543__$1,start,end,error))
);
} else {
return context;
}
}));
meeting.events.meeting_overlaps_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"meeting-overlaps?","meeting-overlaps?",-1232386514),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__68547 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__68547__$1 = ((((!((map__68547 == null)))?((((map__68547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68547):map__68547);
var db = cljs.core.get.call(null,map__68547__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__68548 = cljs.core.get.call(null,map__68547__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__68548,(0),null);
var map__68551 = cljs.core.nth.call(null,vec__68548,(1),null);
var map__68551__$1 = ((((!((map__68551 == null)))?((((map__68551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68551):map__68551);
var start = cljs.core.get.call(null,map__68551__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__68551__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var id = cljs.core.get.call(null,map__68551__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var error = cljs.core.get.call(null,map__68547__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.seq.call(null,cljs.core.filter.call(null,((function (map__68547,map__68547__$1,db,vec__68548,event,map__68551,map__68551__$1,start,end,id,error){
return (function (p1__68546_SHARP_){
var and__27183__auto__ = cljs_time.core.overlaps_QMARK_.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__68546_SHARP_),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(p1__68546_SHARP_),cljs_time.format.parse.call(null,meeting.events.datetime_formatter,start),cljs_time.format.parse.call(null,meeting.events.datetime_formatter,end));
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.not_EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__68546_SHARP_));
} else {
return and__27183__auto__;
}
});})(map__68547,map__68547__$1,db,vec__68548,event,map__68551,map__68551__$1,start,end,id,error))
,cljs.core.vals.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db))))){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Meeting overlaps with existing meetings");
} else {
return context;
}
}));
meeting.events.validation_interceptors = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.events.blank_title_QMARK_,meeting.events.blank_start_QMARK_,meeting.events.invalid_format_start_QMARK_,meeting.events.invalid_date_start_QMARK_,meeting.events.past_time_start_QMARK_,meeting.events.blank_end_QMARK_,meeting.events.invalid_format_end_QMARK_,meeting.events.invalid_date_end_QMARK_,meeting.events.end_before_start_QMARK_,meeting.events.meeting_overlaps_QMARK_], null);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","initialize-db","meeting.events/initialize-db",1529113988),(function (_,___$1){
return meeting.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),(function (db,p__68554){
var vec__68555 = p__68554;
var _ = cljs.core.nth.call(null,vec__68555,(0),null);
var active_panel = cljs.core.nth.call(null,vec__68555,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),(function (db,p__68558){
var vec__68559 = p__68558;
var _ = cljs.core.nth.call(null,vec__68559,(0),null);
var id = cljs.core.nth.call(null,vec__68559,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036),id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922),(function (db,p__68562){
var vec__68563 = p__68562;
var _ = cljs.core.nth.call(null,vec__68563,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__68563,(1),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","delete-meeting!","meeting.events/delete-meeting!",2001083377),(function (db,p__68566){
var vec__68567 = p__68566;
var _ = cljs.core.nth.call(null,vec__68567,(0),null);
var id = cljs.core.nth.call(null,vec__68567,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.dissoc,id);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","create-meeting!","meeting.events/create-meeting!",-427757798),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.events.validation_interceptors,re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103))], null),(function (cofx,p__68570){
var vec__68571 = p__68570;
var _ = cljs.core.nth.call(null,vec__68571,(0),null);
var new_meeting = cljs.core.nth.call(null,vec__68571,(1),null);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.merge.call(null,cljs.core.conj.call(null,new_meeting,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),cljs_time.format.parse.call(null,meeting.events.datetime_formatter,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(new_meeting)),new cljs.core.Keyword(null,"end","end",-268185958),cljs_time.format.parse.call(null,meeting.events.datetime_formatter,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(new_meeting))], null))])),new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","set-hash!","meeting.events/set-hash!",1048468244),(function (cofx,p__68574){
var vec__68575 = p__68574;
var _ = cljs.core.nth.call(null,vec__68575,(0),null);
var location = cljs.core.nth.call(null,vec__68575,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),location], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),(function (location){
return window.location.hash = location;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","update-meeting!","meeting.events/update-meeting!",716738413),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.events.validation_interceptors], null),(function (cofx,p__68578){
var vec__68579 = p__68578;
var _ = cljs.core.nth.call(null,vec__68579,(0),null);
var meeting__$1 = cljs.core.nth.call(null,vec__68579,(1),null);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138),new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx))], null),cljs.core.merge,cljs.core.merge.call(null,meeting__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),cljs_time.format.parse.call(null,meeting.events.datetime_formatter,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(meeting__$1)),new cljs.core.Keyword(null,"end","end",-268185958),cljs_time.format.parse.call(null,meeting.events.datetime_formatter,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(meeting__$1))], null))),new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))], null);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","filter!","meeting.events/filter!",-1924726221),(function (db,p__68582){
var vec__68583 = p__68582;
var _ = cljs.core.nth.call(null,vec__68583,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"filter","filter",-948537934));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","reset-filter!","meeting.events/reset-filter!",376919552),(function (db,p__68586){
var vec__68587 = p__68586;
var _ = cljs.core.nth.call(null,vec__68587,(0),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-filter-date!","meeting.events/set-filter-date!",1112430115),(function (db,p__68590){
var vec__68591 = p__68590;
var _ = cljs.core.nth.call(null,vec__68591,(0),null);
var d = cljs.core.nth.call(null,vec__68591,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173),d);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","timer-manage-status!","meeting.events/timer-manage-status!",-1826807801),(function (db,p__68598){
var vec__68599 = p__68598;
var _ = cljs.core.nth.call(null,vec__68599,(0),null);
var started = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__68599,_){
return (function (p1__68595_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__68595_SHARP_)],[cljs.core.assoc.call(null,cljs.core.second.call(null,p1__68595_SHARP_),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"inprocess","inprocess",2078629075))]);
});})(vec__68599,_))
,cljs.core.filter.call(null,((function (vec__68599,_){
return (function (p1__68594_SHARP_){
var and__27183__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__68594_SHARP_)),new cljs.core.Keyword(null,"planned","planned",-1213840184));
if(and__27183__auto__){
return cljs_time.core.before_QMARK_.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__68594_SHARP_)),cljs_time.core.now.call(null));
} else {
return and__27183__auto__;
}
});})(vec__68599,_))
,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db))));
var done = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (started,vec__68599,_){
return (function (p1__68597_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__68597_SHARP_)],[cljs.core.assoc.call(null,cljs.core.second.call(null,p1__68597_SHARP_),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188))]);
});})(started,vec__68599,_))
,cljs.core.filter.call(null,((function (started,vec__68599,_){
return (function (p1__68596_SHARP_){
var and__27183__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__68596_SHARP_)),new cljs.core.Keyword(null,"inprocess","inprocess",2078629075));
if(and__27183__auto__){
return cljs_time.core.before_QMARK_.call(null,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__68596_SHARP_)),cljs_time.core.now.call(null));
} else {
return and__27183__auto__;
}
});})(started,vec__68599,_))
,cljs.core.merge.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db),started))));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"meetings","meetings",39002138),cljs.core.merge.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db),started,done));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","timer-set-now!","meeting.events/timer-set-now!",195627536),(function (db,p__68602){
var vec__68603 = p__68602;
var _ = cljs.core.nth.call(null,vec__68603,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"now","now",-1650525531),cljs_time.core.now.call(null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","unset-error!","meeting.events/unset-error!",1576637477),(function (db,p__68606){
var vec__68607 = p__68606;
var _ = cljs.core.nth.call(null,vec__68607,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__68607,(1),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"error","error",-978969032));
}));

//# sourceMappingURL=events.js.map?rel=1516280375741
