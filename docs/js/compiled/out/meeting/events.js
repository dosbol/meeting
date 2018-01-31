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
meeting.events.assoc_error_fiter_queue = (function meeting$events$assoc_error_fiter_queue(context,error_string){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),error_string),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),(function (p1__35624_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__35624_SHARP_);
}));
});
meeting.events.blank_interceptor_before = (function meeting$events$blank_interceptor_before(key){
return (function (context){
var map__35625 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__35625__$1 = ((((!((map__35625 == null)))?((((map__35625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35625):map__35625);
var vec__35626 = cljs.core.get.call(null,map__35625__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.call(null,vec__35626,(0),null);
var map__35629 = cljs.core.nth.call(null,vec__35626,(1),null);
var map__35629__$1 = ((((!((map__35629 == null)))?((((map__35629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35629):map__35629);
var field = cljs.core.get.call(null,map__35629__$1,key);
if(clojure.string.blank_QMARK_.call(null,field)){
return meeting.events.assoc_error_fiter_queue.call(null,context,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))," required"].join(''));
} else {
return context;
}
});
});
meeting.events.inv_format_interceptor_before = (function meeting$events$inv_format_interceptor_before(key){
return (function (context){
var map__35632 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__35632__$1 = ((((!((map__35632 == null)))?((((map__35632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35632):map__35632);
var vec__35633 = cljs.core.get.call(null,map__35632__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.call(null,vec__35633,(0),null);
var map__35636 = cljs.core.nth.call(null,vec__35633,(1),null);
var map__35636__$1 = ((((!((map__35636 == null)))?((((map__35636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35636):map__35636);
var field = cljs.core.get.call(null,map__35636__$1,key);
if(cljs.core.not.call(null,cljs.core.re_matches.call(null,/\d{2}\.\d{2}\.\d{4}\s+\d{2}:\d{2}\s+(AM|PM)/,field))){
return meeting.events.assoc_error_fiter_queue.call(null,context,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))," date-time format is invalid(should be dd.MM.yyyy hh:mm AM)"].join(''));
} else {
return context;
}
});
});
meeting.events.inv_date_interceptor_before = (function meeting$events$inv_date_interceptor_before(key){
return (function (context){
var map__35639 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__35639__$1 = ((((!((map__35639 == null)))?((((map__35639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35639):map__35639);
var vec__35640 = cljs.core.get.call(null,map__35639__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.call(null,vec__35640,(0),null);
var map__35643 = cljs.core.nth.call(null,vec__35640,(1),null);
var map__35643__$1 = ((((!((map__35643 == null)))?((((map__35643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35643):map__35643);
var field = cljs.core.get.call(null,map__35643__$1,key);
try{return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442),(1),key], null),cljs_time.format.parse.call(null,meeting.events.datetime_formatter,field));
}catch (e35646){var e = e35646;
return meeting.events.assoc_error_fiter_queue.call(null,context,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))," date-time is not valid"].join(''));
}});
});
meeting.events.time_to_utc_BANG_ = (function meeting$events$time_to_utc_BANG_(key){
return (function (context){
var map__35647 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__35647__$1 = ((((!((map__35647 == null)))?((((map__35647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35647):map__35647);
var vec__35648 = cljs.core.get.call(null,map__35647__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.call(null,vec__35648,(0),null);
var map__35651 = cljs.core.nth.call(null,vec__35648,(1),null);
var map__35651__$1 = ((((!((map__35651 == null)))?((((map__35651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35651):map__35651);
var field = cljs.core.get.call(null,map__35651__$1,key);
var timezone = cljs.core.get.call(null,map__35651__$1,new cljs.core.Keyword(null,"timezone","timezone",1831928099));
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442),(1),key], null),cljs_time.core.minus.call(null,field,cljs_time.core.hours.call(null,new cljs.core.Keyword(null,"diff","diff",2135942783).cljs$core$IFn$_invoke$arity$1(timezone))));
});
});
meeting.events.blank_title_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blank-title?","blank-title?",-543306182),new cljs.core.Keyword(null,"before","before",-1633692388),meeting.events.blank_interceptor_before.call(null,new cljs.core.Keyword(null,"title","title",636505583)));
meeting.events.blank_timezone_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blank-timezone?","blank-timezone?",-1813722177),new cljs.core.Keyword(null,"before","before",-1633692388),meeting.events.blank_interceptor_before.call(null,new cljs.core.Keyword(null,"timezone","timezone",1831928099)));
meeting.events.blank_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blank-start?","blank-start?",-1176534174),new cljs.core.Keyword(null,"before","before",-1633692388),meeting.events.blank_interceptor_before.call(null,new cljs.core.Keyword(null,"start","start",-355208981)));
meeting.events.blank_end_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blank-end?","blank-end?",1204049052),new cljs.core.Keyword(null,"before","before",-1633692388),meeting.events.blank_interceptor_before.call(null,new cljs.core.Keyword(null,"end","end",-268185958)));
meeting.events.invalid_format_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"invalid-format-start?","invalid-format-start?",-1627746461),new cljs.core.Keyword(null,"before","before",-1633692388),meeting.events.inv_format_interceptor_before.call(null,new cljs.core.Keyword(null,"start","start",-355208981)));
meeting.events.invalid_format_end_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"invalid-format-end?","invalid-format-end?",1555500143),new cljs.core.Keyword(null,"before","before",-1633692388),meeting.events.inv_format_interceptor_before.call(null,new cljs.core.Keyword(null,"end","end",-268185958)));
meeting.events.invalid_date_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"invalid-date-start?","invalid-date-start?",2121037716),new cljs.core.Keyword(null,"before","before",-1633692388),meeting.events.inv_date_interceptor_before.call(null,new cljs.core.Keyword(null,"start","start",-355208981)));
meeting.events.invalid_date_end_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"invalid-date-end?","invalid-date-end?",-559542291),new cljs.core.Keyword(null,"before","before",-1633692388),meeting.events.inv_date_interceptor_before.call(null,new cljs.core.Keyword(null,"end","end",-268185958)));
meeting.events.time_to_utc_start_BANG_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"time-to-utc-start!","time-to-utc-start!",841816828),new cljs.core.Keyword(null,"before","before",-1633692388),meeting.events.time_to_utc_BANG_.call(null,new cljs.core.Keyword(null,"start","start",-355208981)));
meeting.events.time_to_utc_end_BANG_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"time-to-utc-start!","time-to-utc-start!",841816828),new cljs.core.Keyword(null,"before","before",-1633692388),meeting.events.time_to_utc_BANG_.call(null,new cljs.core.Keyword(null,"end","end",-268185958)));
meeting.events.past_time_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"past-time-start?","past-time-start?",1337867366),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__35654 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__35654__$1 = ((((!((map__35654 == null)))?((((map__35654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35654):map__35654);
var db = cljs.core.get.call(null,map__35654__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35655 = cljs.core.get.call(null,map__35654__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__35655,(0),null);
var map__35658 = cljs.core.nth.call(null,vec__35655,(1),null);
var map__35658__$1 = ((((!((map__35658 == null)))?((((map__35658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35658):map__35658);
var start = cljs.core.get.call(null,map__35658__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var error = cljs.core.get.call(null,map__35654__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,start,cljs_time.core.now.call(null)))){
return meeting.events.assoc_error_fiter_queue.call(null,context,"Start date-time could not be in past");
} else {
return context;
}
}));
meeting.events.end_before_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"end-before-start?","end-before-start?",-1391150180),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__35661 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__35661__$1 = ((((!((map__35661 == null)))?((((map__35661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35661):map__35661);
var db = cljs.core.get.call(null,map__35661__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35662 = cljs.core.get.call(null,map__35661__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__35662,(0),null);
var map__35665 = cljs.core.nth.call(null,vec__35662,(1),null);
var map__35665__$1 = ((((!((map__35665 == null)))?((((map__35665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35665.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35665):map__35665);
var start = cljs.core.get.call(null,map__35665__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__35665__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var error = cljs.core.get.call(null,map__35661__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,end,start))){
return meeting.events.assoc_error_fiter_queue.call(null,context,"End date-time could not be before start date-time");
} else {
return context;
}
}));
meeting.events.meeting_overlaps_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"meeting-overlaps?","meeting-overlaps?",-1232386514),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__35669 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__35669__$1 = ((((!((map__35669 == null)))?((((map__35669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35669):map__35669);
var db = cljs.core.get.call(null,map__35669__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35670 = cljs.core.get.call(null,map__35669__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__35670,(0),null);
var map__35673 = cljs.core.nth.call(null,vec__35670,(1),null);
var map__35673__$1 = ((((!((map__35673 == null)))?((((map__35673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35673):map__35673);
var start = cljs.core.get.call(null,map__35673__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__35673__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var id = cljs.core.get.call(null,map__35673__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var error = cljs.core.get.call(null,map__35669__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.seq.call(null,cljs.core.filter.call(null,((function (map__35669,map__35669__$1,db,vec__35670,event,map__35673,map__35673__$1,start,end,id,error){
return (function (p1__35668_SHARP_){
var and__27183__auto__ = cljs_time.core.overlaps_QMARK_.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__35668_SHARP_),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(p1__35668_SHARP_),start,end);
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.not_EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__35668_SHARP_));
} else {
return and__27183__auto__;
}
});})(map__35669,map__35669__$1,db,vec__35670,event,map__35673,map__35673__$1,start,end,id,error))
,cljs.core.vals.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db))))){
return meeting.events.assoc_error_fiter_queue.call(null,context,"Meeting overlaps with existing meetings");
} else {
return context;
}
}));
meeting.events.validation_interceptors = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.events.blank_title_QMARK_,meeting.events.blank_timezone_QMARK_,meeting.events.blank_start_QMARK_,meeting.events.invalid_format_start_QMARK_,meeting.events.invalid_date_start_QMARK_,meeting.events.time_to_utc_start_BANG_,meeting.events.past_time_start_QMARK_,meeting.events.blank_end_QMARK_,meeting.events.invalid_format_end_QMARK_,meeting.events.invalid_date_end_QMARK_,meeting.events.time_to_utc_end_BANG_,meeting.events.end_before_start_QMARK_,meeting.events.meeting_overlaps_QMARK_], null);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","initialize-db","meeting.events/initialize-db",1529113988),(function (_,___$1){
return meeting.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),(function (db,p__35676){
var vec__35677 = p__35676;
var _ = cljs.core.nth.call(null,vec__35677,(0),null);
var active_panel = cljs.core.nth.call(null,vec__35677,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),(function (db,p__35680){
var vec__35681 = p__35680;
var _ = cljs.core.nth.call(null,vec__35681,(0),null);
var id = cljs.core.nth.call(null,vec__35681,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036),id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922),(function (db,p__35684){
var vec__35685 = p__35684;
var _ = cljs.core.nth.call(null,vec__35685,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35685,(1),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","delete-meeting!","meeting.events/delete-meeting!",2001083377),(function (db,p__35688){
var vec__35689 = p__35688;
var _ = cljs.core.nth.call(null,vec__35689,(0),null);
var id = cljs.core.nth.call(null,vec__35689,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.dissoc,id);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","create-meeting!","meeting.events/create-meeting!",-427757798),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.events.validation_interceptors,re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103))], null),(function (cofx,p__35692){
var vec__35693 = p__35692;
var _ = cljs.core.nth.call(null,vec__35693,(0),null);
var new_meeting = cljs.core.nth.call(null,vec__35693,(1),null);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.conj.call(null,new_meeting,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx)], null))])),new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","set-hash!","meeting.events/set-hash!",1048468244),(function (cofx,p__35696){
var vec__35697 = p__35696;
var _ = cljs.core.nth.call(null,vec__35697,(0),null);
var location = cljs.core.nth.call(null,vec__35697,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),location], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),(function (location){
return window.location.hash = location;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","update-meeting!","meeting.events/update-meeting!",716738413),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.events.validation_interceptors], null),(function (cofx,p__35700){
var vec__35701 = p__35700;
var _ = cljs.core.nth.call(null,vec__35701,(0),null);
var meeting__$1 = cljs.core.nth.call(null,vec__35701,(1),null);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138),new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx))], null),meeting__$1),new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))], null);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","filter!","meeting.events/filter!",-1924726221),(function (db,p__35704){
var vec__35705 = p__35704;
var _ = cljs.core.nth.call(null,vec__35705,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"filter","filter",-948537934));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","reset-filter!","meeting.events/reset-filter!",376919552),(function (db,p__35708){
var vec__35709 = p__35708;
var _ = cljs.core.nth.call(null,vec__35709,(0),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-filter-date!","meeting.events/set-filter-date!",1112430115),(function (db,p__35712){
var vec__35713 = p__35712;
var _ = cljs.core.nth.call(null,vec__35713,(0),null);
var d = cljs.core.nth.call(null,vec__35713,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173),d);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","timer-manage-status!","meeting.events/timer-manage-status!",-1826807801),(function (db,p__35720){
var vec__35721 = p__35720;
var _ = cljs.core.nth.call(null,vec__35721,(0),null);
var started = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__35721,_){
return (function (p1__35717_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__35717_SHARP_)],[cljs.core.assoc.call(null,cljs.core.second.call(null,p1__35717_SHARP_),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"inprocess","inprocess",2078629075))]);
});})(vec__35721,_))
,cljs.core.filter.call(null,((function (vec__35721,_){
return (function (p1__35716_SHARP_){
var and__27183__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__35716_SHARP_)),new cljs.core.Keyword(null,"planned","planned",-1213840184));
if(and__27183__auto__){
return cljs_time.core.before_QMARK_.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__35716_SHARP_)),cljs_time.core.now.call(null));
} else {
return and__27183__auto__;
}
});})(vec__35721,_))
,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db))));
var done = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (started,vec__35721,_){
return (function (p1__35719_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__35719_SHARP_)],[cljs.core.assoc.call(null,cljs.core.second.call(null,p1__35719_SHARP_),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188))]);
});})(started,vec__35721,_))
,cljs.core.filter.call(null,((function (started,vec__35721,_){
return (function (p1__35718_SHARP_){
var and__27183__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__35718_SHARP_)),new cljs.core.Keyword(null,"inprocess","inprocess",2078629075));
if(and__27183__auto__){
return cljs_time.core.before_QMARK_.call(null,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__35718_SHARP_)),cljs_time.core.now.call(null));
} else {
return and__27183__auto__;
}
});})(started,vec__35721,_))
,cljs.core.merge.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db),started))));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"meetings","meetings",39002138),cljs.core.merge.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db),started,done));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","timer-set-now!","meeting.events/timer-set-now!",195627536),(function (db,p__35724){
var vec__35725 = p__35724;
var _ = cljs.core.nth.call(null,vec__35725,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"now","now",-1650525531),cljs_time.core.now.call(null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","unset-error!","meeting.events/unset-error!",1576637477),(function (db,p__35728){
var vec__35729 = p__35728;
var _ = cljs.core.nth.call(null,vec__35729,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35729,(1),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"error","error",-978969032));
}));

//# sourceMappingURL=events.js.map?rel=1517373773869
