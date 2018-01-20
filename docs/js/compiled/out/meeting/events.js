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
meeting.events.blank_interceptor_before = (function meeting$events$blank_interceptor_before(key){
return (function (context){
var map__79775 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__79775__$1 = ((((!((map__79775 == null)))?((((map__79775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79775):map__79775);
var vec__79776 = cljs.core.get.call(null,map__79775__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.call(null,vec__79776,(0),null);
var map__79779 = cljs.core.nth.call(null,vec__79776,(1),null);
var map__79779__$1 = ((((!((map__79779 == null)))?((((map__79779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79779):map__79779);
var field = cljs.core.get.call(null,map__79779__$1,key);
if(clojure.string.blank_QMARK_.call(null,field)){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))," required"].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (map__79775,map__79775__$1,vec__79776,_,map__79779,map__79779__$1,field){
return (function (p1__79774_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__79774_SHARP_);
});})(map__79775,map__79775__$1,vec__79776,_,map__79779,map__79779__$1,field))
);
} else {
return context;
}
});
});
meeting.events.inv_format_interceptor_before = (function meeting$events$inv_format_interceptor_before(key){
return (function (context){
var map__79783 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__79783__$1 = ((((!((map__79783 == null)))?((((map__79783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79783):map__79783);
var vec__79784 = cljs.core.get.call(null,map__79783__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.call(null,vec__79784,(0),null);
var map__79787 = cljs.core.nth.call(null,vec__79784,(1),null);
var map__79787__$1 = ((((!((map__79787 == null)))?((((map__79787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79787):map__79787);
var field = cljs.core.get.call(null,map__79787__$1,key);
if(cljs.core.not.call(null,cljs.core.re_matches.call(null,/\d{2}\.\d{2}\.\d{4}\s+\d{2}:\d{2}\s+(AM|PM)/,field))){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))," date-time format is invalid(should be dd.MM.yyyy hh:mm AM)"].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (map__79783,map__79783__$1,vec__79784,_,map__79787,map__79787__$1,field){
return (function (p1__79782_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__79782_SHARP_);
});})(map__79783,map__79783__$1,vec__79784,_,map__79787,map__79787__$1,field))
);
} else {
return context;
}
});
});
meeting.events.inv_date_interceptor_before = (function meeting$events$inv_date_interceptor_before(key){
return (function (context){
var map__79791 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__79791__$1 = ((((!((map__79791 == null)))?((((map__79791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79791):map__79791);
var vec__79792 = cljs.core.get.call(null,map__79791__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.call(null,vec__79792,(0),null);
var map__79795 = cljs.core.nth.call(null,vec__79792,(1),null);
var map__79795__$1 = ((((!((map__79795 == null)))?((((map__79795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79795):map__79795);
var field = cljs.core.get.call(null,map__79795__$1,key);
try{return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442),(1),key], null),cljs_time.format.parse.call(null,meeting.events.datetime_formatter,field));
}catch (e79798){var e = e79798;
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))," date-time is not valid"].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (e,map__79791,map__79791__$1,vec__79792,_,map__79795,map__79795__$1,field){
return (function (p1__79790_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__79790_SHARP_);
});})(e,map__79791,map__79791__$1,vec__79792,_,map__79795,map__79795__$1,field))
);
}});
});
meeting.events.time_to_utc_BANG_ = (function meeting$events$time_to_utc_BANG_(key){
return (function (context){
var map__79799 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__79799__$1 = ((((!((map__79799 == null)))?((((map__79799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79799):map__79799);
var vec__79800 = cljs.core.get.call(null,map__79799__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.call(null,vec__79800,(0),null);
var map__79803 = cljs.core.nth.call(null,vec__79800,(1),null);
var map__79803__$1 = ((((!((map__79803 == null)))?((((map__79803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79803):map__79803);
var field = cljs.core.get.call(null,map__79803__$1,key);
var timezone = cljs.core.get.call(null,map__79803__$1,new cljs.core.Keyword(null,"timezone","timezone",1831928099));
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
var map__79807 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__79807__$1 = ((((!((map__79807 == null)))?((((map__79807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79807):map__79807);
var db = cljs.core.get.call(null,map__79807__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__79808 = cljs.core.get.call(null,map__79807__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__79808,(0),null);
var map__79811 = cljs.core.nth.call(null,vec__79808,(1),null);
var map__79811__$1 = ((((!((map__79811 == null)))?((((map__79811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79811):map__79811);
var start = cljs.core.get.call(null,map__79811__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var error = cljs.core.get.call(null,map__79807__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,start,cljs_time.core.now.call(null)))){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Start date-time could not be in past"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (map__79807,map__79807__$1,db,vec__79808,event,map__79811,map__79811__$1,start,error){
return (function (p1__79806_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__79806_SHARP_);
});})(map__79807,map__79807__$1,db,vec__79808,event,map__79811,map__79811__$1,start,error))
);
} else {
return context;
}
}));
meeting.events.end_before_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"end-before-start?","end-before-start?",-1391150180),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__79815 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__79815__$1 = ((((!((map__79815 == null)))?((((map__79815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79815):map__79815);
var db = cljs.core.get.call(null,map__79815__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__79816 = cljs.core.get.call(null,map__79815__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__79816,(0),null);
var map__79819 = cljs.core.nth.call(null,vec__79816,(1),null);
var map__79819__$1 = ((((!((map__79819 == null)))?((((map__79819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79819):map__79819);
var start = cljs.core.get.call(null,map__79819__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__79819__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var error = cljs.core.get.call(null,map__79815__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,end,start))){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"End date-time could not be before start date-time"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (map__79815,map__79815__$1,db,vec__79816,event,map__79819,map__79819__$1,start,end,error){
return (function (p1__79814_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__79814_SHARP_);
});})(map__79815,map__79815__$1,db,vec__79816,event,map__79819,map__79819__$1,start,end,error))
);
} else {
return context;
}
}));
meeting.events.meeting_overlaps_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"meeting-overlaps?","meeting-overlaps?",-1232386514),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__79823 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__79823__$1 = ((((!((map__79823 == null)))?((((map__79823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79823):map__79823);
var db = cljs.core.get.call(null,map__79823__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__79824 = cljs.core.get.call(null,map__79823__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__79824,(0),null);
var map__79827 = cljs.core.nth.call(null,vec__79824,(1),null);
var map__79827__$1 = ((((!((map__79827 == null)))?((((map__79827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79827):map__79827);
var start = cljs.core.get.call(null,map__79827__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__79827__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var id = cljs.core.get.call(null,map__79827__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var error = cljs.core.get.call(null,map__79823__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.seq.call(null,cljs.core.filter.call(null,((function (map__79823,map__79823__$1,db,vec__79824,event,map__79827,map__79827__$1,start,end,id,error){
return (function (p1__79822_SHARP_){
var and__27183__auto__ = cljs_time.core.overlaps_QMARK_.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__79822_SHARP_),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(p1__79822_SHARP_),start,end);
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.not_EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__79822_SHARP_));
} else {
return and__27183__auto__;
}
});})(map__79823,map__79823__$1,db,vec__79824,event,map__79827,map__79827__$1,start,end,id,error))
,cljs.core.vals.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db))))){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Meeting overlaps with existing meetings");
} else {
return context;
}
}));
meeting.events.validation_interceptors = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.events.blank_title_QMARK_,meeting.events.blank_timezone_QMARK_,meeting.events.blank_start_QMARK_,meeting.events.invalid_format_start_QMARK_,meeting.events.invalid_date_start_QMARK_,meeting.events.time_to_utc_start_BANG_,meeting.events.past_time_start_QMARK_,meeting.events.blank_end_QMARK_,meeting.events.invalid_format_end_QMARK_,meeting.events.invalid_date_end_QMARK_,meeting.events.time_to_utc_end_BANG_,meeting.events.end_before_start_QMARK_,meeting.events.meeting_overlaps_QMARK_], null);
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","initialize-db","meeting.events/initialize-db",1529113988),(function (_,___$1){
return meeting.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),(function (db,p__79830){
var vec__79831 = p__79830;
var _ = cljs.core.nth.call(null,vec__79831,(0),null);
var active_panel = cljs.core.nth.call(null,vec__79831,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),(function (db,p__79834){
var vec__79835 = p__79834;
var _ = cljs.core.nth.call(null,vec__79835,(0),null);
var id = cljs.core.nth.call(null,vec__79835,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036),id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922),(function (db,p__79838){
var vec__79839 = p__79838;
var _ = cljs.core.nth.call(null,vec__79839,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__79839,(1),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","delete-meeting!","meeting.events/delete-meeting!",2001083377),(function (db,p__79842){
var vec__79843 = p__79842;
var _ = cljs.core.nth.call(null,vec__79843,(0),null);
var id = cljs.core.nth.call(null,vec__79843,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.dissoc,id);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","create-meeting!","meeting.events/create-meeting!",-427757798),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.events.validation_interceptors,re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103))], null),(function (cofx,p__79846){
var vec__79847 = p__79846;
var _ = cljs.core.nth.call(null,vec__79847,(0),null);
var new_meeting = cljs.core.nth.call(null,vec__79847,(1),null);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.merge.call(null,cljs.core.conj.call(null,new_meeting,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(new_meeting),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(new_meeting)], null))])),new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","set-hash!","meeting.events/set-hash!",1048468244),(function (cofx,p__79850){
var vec__79851 = p__79850;
var _ = cljs.core.nth.call(null,vec__79851,(0),null);
var location = cljs.core.nth.call(null,vec__79851,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),location], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),(function (location){
return window.location.hash = location;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","update-meeting!","meeting.events/update-meeting!",716738413),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.events.validation_interceptors], null),(function (cofx,p__79854){
var vec__79855 = p__79854;
var _ = cljs.core.nth.call(null,vec__79855,(0),null);
var meeting__$1 = cljs.core.nth.call(null,vec__79855,(1),null);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138),new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx))], null),cljs.core.merge,cljs.core.merge.call(null,meeting__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(meeting__$1),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(meeting__$1)], null))),new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))], null);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","filter!","meeting.events/filter!",-1924726221),(function (db,p__79858){
var vec__79859 = p__79858;
var _ = cljs.core.nth.call(null,vec__79859,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"filter","filter",-948537934));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","reset-filter!","meeting.events/reset-filter!",376919552),(function (db,p__79862){
var vec__79863 = p__79862;
var _ = cljs.core.nth.call(null,vec__79863,(0),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-filter-date!","meeting.events/set-filter-date!",1112430115),(function (db,p__79866){
var vec__79867 = p__79866;
var _ = cljs.core.nth.call(null,vec__79867,(0),null);
var d = cljs.core.nth.call(null,vec__79867,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173),d);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","timer-manage-status!","meeting.events/timer-manage-status!",-1826807801),(function (db,p__79874){
var vec__79875 = p__79874;
var _ = cljs.core.nth.call(null,vec__79875,(0),null);
var started = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__79875,_){
return (function (p1__79871_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__79871_SHARP_)],[cljs.core.assoc.call(null,cljs.core.second.call(null,p1__79871_SHARP_),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"inprocess","inprocess",2078629075))]);
});})(vec__79875,_))
,cljs.core.filter.call(null,((function (vec__79875,_){
return (function (p1__79870_SHARP_){
var and__27183__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__79870_SHARP_)),new cljs.core.Keyword(null,"planned","planned",-1213840184));
if(and__27183__auto__){
return cljs_time.core.before_QMARK_.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__79870_SHARP_)),cljs_time.core.now.call(null));
} else {
return and__27183__auto__;
}
});})(vec__79875,_))
,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db))));
var done = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (started,vec__79875,_){
return (function (p1__79873_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__79873_SHARP_)],[cljs.core.assoc.call(null,cljs.core.second.call(null,p1__79873_SHARP_),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188))]);
});})(started,vec__79875,_))
,cljs.core.filter.call(null,((function (started,vec__79875,_){
return (function (p1__79872_SHARP_){
var and__27183__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__79872_SHARP_)),new cljs.core.Keyword(null,"inprocess","inprocess",2078629075));
if(and__27183__auto__){
return cljs_time.core.before_QMARK_.call(null,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__79872_SHARP_)),cljs_time.core.now.call(null));
} else {
return and__27183__auto__;
}
});})(started,vec__79875,_))
,cljs.core.merge.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db),started))));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"meetings","meetings",39002138),cljs.core.merge.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db),started,done));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","timer-set-now!","meeting.events/timer-set-now!",195627536),(function (db,p__79878){
var vec__79879 = p__79878;
var _ = cljs.core.nth.call(null,vec__79879,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"now","now",-1650525531),cljs_time.core.now.call(null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","unset-error!","meeting.events/unset-error!",1576637477),(function (db,p__79882){
var vec__79883 = p__79882;
var _ = cljs.core.nth.call(null,vec__79883,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__79883,(1),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"error","error",-978969032));
}));

//# sourceMappingURL=events.js.map?rel=1516453717447
