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
var map__77813 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__77813__$1 = ((((!((map__77813 == null)))?((((map__77813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77813):map__77813);
var vec__77814 = cljs.core.get.call(null,map__77813__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.call(null,vec__77814,(0),null);
var map__77817 = cljs.core.nth.call(null,vec__77814,(1),null);
var map__77817__$1 = ((((!((map__77817 == null)))?((((map__77817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77817):map__77817);
var field = cljs.core.get.call(null,map__77817__$1,key);
if(clojure.string.blank_QMARK_.call(null,field)){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))," required"].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (map__77813,map__77813__$1,vec__77814,_,map__77817,map__77817__$1,field){
return (function (p1__77812_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__77812_SHARP_);
});})(map__77813,map__77813__$1,vec__77814,_,map__77817,map__77817__$1,field))
);
} else {
return context;
}
});
});
meeting.events.inv_format_interceptor_before = (function meeting$events$inv_format_interceptor_before(key){
return (function (context){
var map__77821 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__77821__$1 = ((((!((map__77821 == null)))?((((map__77821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77821):map__77821);
var vec__77822 = cljs.core.get.call(null,map__77821__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.call(null,vec__77822,(0),null);
var map__77825 = cljs.core.nth.call(null,vec__77822,(1),null);
var map__77825__$1 = ((((!((map__77825 == null)))?((((map__77825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77825):map__77825);
var field = cljs.core.get.call(null,map__77825__$1,key);
if(cljs.core.not.call(null,cljs.core.re_matches.call(null,/\d{2}\.\d{2}\.\d{4}\s+\d{2}:\d{2}\s+(AM|PM)/,field))){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))," date-time format is invalid(should be dd.MM.yyyy hh:mm AM)"].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (map__77821,map__77821__$1,vec__77822,_,map__77825,map__77825__$1,field){
return (function (p1__77820_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__77820_SHARP_);
});})(map__77821,map__77821__$1,vec__77822,_,map__77825,map__77825__$1,field))
);
} else {
return context;
}
});
});
meeting.events.inv_date_interceptor_before = (function meeting$events$inv_date_interceptor_before(key){
return (function (context){
var map__77829 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__77829__$1 = ((((!((map__77829 == null)))?((((map__77829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77829):map__77829);
var vec__77830 = cljs.core.get.call(null,map__77829__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.call(null,vec__77830,(0),null);
var map__77833 = cljs.core.nth.call(null,vec__77830,(1),null);
var map__77833__$1 = ((((!((map__77833 == null)))?((((map__77833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77833):map__77833);
var field = cljs.core.get.call(null,map__77833__$1,key);
try{return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442),(1),key], null),cljs_time.format.parse.call(null,meeting.events.datetime_formatter,field));
}catch (e77836){var e = e77836;
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))," date-time is not valid"].join('')),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (e,map__77829,map__77829__$1,vec__77830,_,map__77833,map__77833__$1,field){
return (function (p1__77828_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__77828_SHARP_);
});})(e,map__77829,map__77829__$1,vec__77830,_,map__77833,map__77833__$1,field))
);
}});
});
meeting.events.time_to_utc_BANG_ = (function meeting$events$time_to_utc_BANG_(key){
return (function (context){
var map__77837 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__77837__$1 = ((((!((map__77837 == null)))?((((map__77837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77837):map__77837);
var vec__77838 = cljs.core.get.call(null,map__77837__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.call(null,vec__77838,(0),null);
var map__77841 = cljs.core.nth.call(null,vec__77838,(1),null);
var map__77841__$1 = ((((!((map__77841 == null)))?((((map__77841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77841):map__77841);
var field = cljs.core.get.call(null,map__77841__$1,key);
var timezone = cljs.core.get.call(null,map__77841__$1,new cljs.core.Keyword(null,"timezone","timezone",1831928099));
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
var map__77845 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__77845__$1 = ((((!((map__77845 == null)))?((((map__77845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77845):map__77845);
var db = cljs.core.get.call(null,map__77845__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__77846 = cljs.core.get.call(null,map__77845__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__77846,(0),null);
var map__77849 = cljs.core.nth.call(null,vec__77846,(1),null);
var map__77849__$1 = ((((!((map__77849 == null)))?((((map__77849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77849):map__77849);
var start = cljs.core.get.call(null,map__77849__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var error = cljs.core.get.call(null,map__77845__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,start,cljs_time.core.now.call(null)))){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Start date-time could not be in past"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (map__77845,map__77845__$1,db,vec__77846,event,map__77849,map__77849__$1,start,error){
return (function (p1__77844_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__77844_SHARP_);
});})(map__77845,map__77845__$1,db,vec__77846,event,map__77849,map__77849__$1,start,error))
);
} else {
return context;
}
}));
meeting.events.end_before_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"end-before-start?","end-before-start?",-1391150180),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__77853 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__77853__$1 = ((((!((map__77853 == null)))?((((map__77853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77853):map__77853);
var db = cljs.core.get.call(null,map__77853__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__77854 = cljs.core.get.call(null,map__77853__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__77854,(0),null);
var map__77857 = cljs.core.nth.call(null,vec__77854,(1),null);
var map__77857__$1 = ((((!((map__77857 == null)))?((((map__77857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77857):map__77857);
var start = cljs.core.get.call(null,map__77857__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__77857__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var error = cljs.core.get.call(null,map__77853__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,end,start))){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"End date-time could not be before start date-time"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),((function (map__77853,map__77853__$1,db,vec__77854,event,map__77857,map__77857__$1,start,end,error){
return (function (p1__77852_SHARP_){
return meeting.events.filter_queue.call(null,meeting.events.not_in_validation_interceptors_QMARK_,p1__77852_SHARP_);
});})(map__77853,map__77853__$1,db,vec__77854,event,map__77857,map__77857__$1,start,end,error))
);
} else {
return context;
}
}));
meeting.events.meeting_overlaps_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"meeting-overlaps?","meeting-overlaps?",-1232386514),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__77861 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__77861__$1 = ((((!((map__77861 == null)))?((((map__77861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77861):map__77861);
var db = cljs.core.get.call(null,map__77861__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__77862 = cljs.core.get.call(null,map__77861__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__77862,(0),null);
var map__77865 = cljs.core.nth.call(null,vec__77862,(1),null);
var map__77865__$1 = ((((!((map__77865 == null)))?((((map__77865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77865):map__77865);
var start = cljs.core.get.call(null,map__77865__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__77865__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var id = cljs.core.get.call(null,map__77865__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var error = cljs.core.get.call(null,map__77861__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.seq.call(null,cljs.core.filter.call(null,((function (map__77861,map__77861__$1,db,vec__77862,event,map__77865,map__77865__$1,start,end,id,error){
return (function (p1__77860_SHARP_){
var and__27183__auto__ = cljs_time.core.overlaps_QMARK_.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__77860_SHARP_),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(p1__77860_SHARP_),start,end);
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.not_EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__77860_SHARP_));
} else {
return and__27183__auto__;
}
});})(map__77861,map__77861__$1,db,vec__77862,event,map__77865,map__77865__$1,start,end,id,error))
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),(function (db,p__77868){
var vec__77869 = p__77868;
var _ = cljs.core.nth.call(null,vec__77869,(0),null);
var active_panel = cljs.core.nth.call(null,vec__77869,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),(function (db,p__77872){
var vec__77873 = p__77872;
var _ = cljs.core.nth.call(null,vec__77873,(0),null);
var id = cljs.core.nth.call(null,vec__77873,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036),id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922),(function (db,p__77876){
var vec__77877 = p__77876;
var _ = cljs.core.nth.call(null,vec__77877,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__77877,(1),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","delete-meeting!","meeting.events/delete-meeting!",2001083377),(function (db,p__77880){
var vec__77881 = p__77880;
var _ = cljs.core.nth.call(null,vec__77881,(0),null);
var id = cljs.core.nth.call(null,vec__77881,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.dissoc,id);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","create-meeting!","meeting.events/create-meeting!",-427757798),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.events.validation_interceptors,re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103))], null),(function (cofx,p__77884){
var vec__77885 = p__77884;
var _ = cljs.core.nth.call(null,vec__77885,(0),null);
var new_meeting = cljs.core.nth.call(null,vec__77885,(1),null);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.merge.call(null,cljs.core.conj.call(null,new_meeting,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(new_meeting),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(new_meeting)], null))])),new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","set-hash!","meeting.events/set-hash!",1048468244),(function (cofx,p__77888){
var vec__77889 = p__77888;
var _ = cljs.core.nth.call(null,vec__77889,(0),null);
var location = cljs.core.nth.call(null,vec__77889,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),location], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),(function (location){
return window.location.hash = location;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","update-meeting!","meeting.events/update-meeting!",716738413),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.events.validation_interceptors], null),(function (cofx,p__77892){
var vec__77893 = p__77892;
var _ = cljs.core.nth.call(null,vec__77893,(0),null);
var meeting__$1 = cljs.core.nth.call(null,vec__77893,(1),null);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138),new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx))], null),cljs.core.merge,cljs.core.merge.call(null,meeting__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(meeting__$1),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(meeting__$1)], null))),new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))], null);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","filter!","meeting.events/filter!",-1924726221),(function (db,p__77896){
var vec__77897 = p__77896;
var _ = cljs.core.nth.call(null,vec__77897,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"filter","filter",-948537934));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","reset-filter!","meeting.events/reset-filter!",376919552),(function (db,p__77900){
var vec__77901 = p__77900;
var _ = cljs.core.nth.call(null,vec__77901,(0),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-filter-date!","meeting.events/set-filter-date!",1112430115),(function (db,p__77904){
var vec__77905 = p__77904;
var _ = cljs.core.nth.call(null,vec__77905,(0),null);
var d = cljs.core.nth.call(null,vec__77905,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173),d);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","timer-manage-status!","meeting.events/timer-manage-status!",-1826807801),(function (db,p__77912){
var vec__77913 = p__77912;
var _ = cljs.core.nth.call(null,vec__77913,(0),null);
var started = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__77913,_){
return (function (p1__77909_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__77909_SHARP_)],[cljs.core.assoc.call(null,cljs.core.second.call(null,p1__77909_SHARP_),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"inprocess","inprocess",2078629075))]);
});})(vec__77913,_))
,cljs.core.filter.call(null,((function (vec__77913,_){
return (function (p1__77908_SHARP_){
var and__27183__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__77908_SHARP_)),new cljs.core.Keyword(null,"planned","planned",-1213840184));
if(and__27183__auto__){
return cljs_time.core.before_QMARK_.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__77908_SHARP_)),cljs_time.core.now.call(null));
} else {
return and__27183__auto__;
}
});})(vec__77913,_))
,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db))));
var done = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (started,vec__77913,_){
return (function (p1__77911_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__77911_SHARP_)],[cljs.core.assoc.call(null,cljs.core.second.call(null,p1__77911_SHARP_),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188))]);
});})(started,vec__77913,_))
,cljs.core.filter.call(null,((function (started,vec__77913,_){
return (function (p1__77910_SHARP_){
var and__27183__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__77910_SHARP_)),new cljs.core.Keyword(null,"inprocess","inprocess",2078629075));
if(and__27183__auto__){
return cljs_time.core.before_QMARK_.call(null,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__77910_SHARP_)),cljs_time.core.now.call(null));
} else {
return and__27183__auto__;
}
});})(started,vec__77913,_))
,cljs.core.merge.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db),started))));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"meetings","meetings",39002138),cljs.core.merge.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db),started,done));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","timer-set-now!","meeting.events/timer-set-now!",195627536),(function (db,p__77916){
var vec__77917 = p__77916;
var _ = cljs.core.nth.call(null,vec__77917,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"now","now",-1650525531),cljs_time.core.now.call(null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","unset-error!","meeting.events/unset-error!",1576637477),(function (db,p__77920){
var vec__77921 = p__77920;
var _ = cljs.core.nth.call(null,vec__77921,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__77921,(1),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"error","error",-978969032));
}));

//# sourceMappingURL=events.js.map?rel=1516445449711
