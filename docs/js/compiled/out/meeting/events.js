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
meeting.events.blank_title_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blank-title?","blank-title?",-543306182),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__51598 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__51598__$1 = ((((!((map__51598 == null)))?((((map__51598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51598):map__51598);
var db = cljs.core.get.call(null,map__51598__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51599 = cljs.core.get.call(null,map__51598__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__51599,(0),null);
var map__51602 = cljs.core.nth.call(null,vec__51599,(1),null);
var map__51602__$1 = ((((!((map__51602 == null)))?((((map__51602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51602):map__51602);
var title = cljs.core.get.call(null,map__51602__$1,new cljs.core.Keyword(null,"title","title",636505583));
if(clojure.string.blank_QMARK_.call(null,title)){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Title required");
} else {
return context;
}
}));
meeting.events.blank_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blank-start?","blank-start?",-1176534174),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__51605 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__51605__$1 = ((((!((map__51605 == null)))?((((map__51605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51605):map__51605);
var db = cljs.core.get.call(null,map__51605__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51606 = cljs.core.get.call(null,map__51605__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__51606,(0),null);
var map__51609 = cljs.core.nth.call(null,vec__51606,(1),null);
var map__51609__$1 = ((((!((map__51609 == null)))?((((map__51609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51609):map__51609);
var start = cljs.core.get.call(null,map__51609__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var error = cljs.core.get.call(null,map__51605__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if((cljs.core.not.call(null,error)) && (clojure.string.blank_QMARK_.call(null,start))){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Start date-time required");
} else {
return context;
}
}));
meeting.events.blank_end_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"blank-end?","blank-end?",1204049052),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__51612 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__51612__$1 = ((((!((map__51612 == null)))?((((map__51612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51612):map__51612);
var db = cljs.core.get.call(null,map__51612__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51613 = cljs.core.get.call(null,map__51612__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__51613,(0),null);
var map__51616 = cljs.core.nth.call(null,vec__51613,(1),null);
var map__51616__$1 = ((((!((map__51616 == null)))?((((map__51616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51616):map__51616);
var end = cljs.core.get.call(null,map__51616__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var error = cljs.core.get.call(null,map__51612__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if((cljs.core.not.call(null,error)) && (clojure.string.blank_QMARK_.call(null,end))){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"End date-time required");
} else {
return context;
}
}));
meeting.events.invalid_format_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"invalid-format-start?","invalid-format-start?",-1627746461),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__51619 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__51619__$1 = ((((!((map__51619 == null)))?((((map__51619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51619):map__51619);
var db = cljs.core.get.call(null,map__51619__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51620 = cljs.core.get.call(null,map__51619__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__51620,(0),null);
var map__51623 = cljs.core.nth.call(null,vec__51620,(1),null);
var map__51623__$1 = ((((!((map__51623 == null)))?((((map__51623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51623.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51623):map__51623);
var start = cljs.core.get.call(null,map__51623__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var error = cljs.core.get.call(null,map__51619__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if((cljs.core.not.call(null,error)) && (cljs.core.not.call(null,cljs.core.re_matches.call(null,/\d{2}\.\d{2}\.\d{4}\s+\d{2}:\d{2}\s+(AM|PM)/,start)))){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Start date-time format is invalid(should be dd.MM.yyyy hh:mm AM)");
} else {
return context;
}
}));
meeting.events.invalid_format_end_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"invalid-format-end?","invalid-format-end?",1555500143),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__51626 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__51626__$1 = ((((!((map__51626 == null)))?((((map__51626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51626):map__51626);
var db = cljs.core.get.call(null,map__51626__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51627 = cljs.core.get.call(null,map__51626__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__51627,(0),null);
var map__51630 = cljs.core.nth.call(null,vec__51627,(1),null);
var map__51630__$1 = ((((!((map__51630 == null)))?((((map__51630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51630):map__51630);
var end = cljs.core.get.call(null,map__51630__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var error = cljs.core.get.call(null,map__51626__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if((cljs.core.not.call(null,error)) && (cljs.core.not.call(null,cljs.core.re_matches.call(null,/\d{2}\.\d{2}\.\d{4}\s+\d{2}:\d{2}\s+(AM|PM)/,end)))){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"End date-time format is invalid(should be dd.MM.yyyy hh:mm AM)");
} else {
return context;
}
}));
meeting.events.invalid_date_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"invalid-date-start?","invalid-date-start?",2121037716),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__51633 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__51633__$1 = ((((!((map__51633 == null)))?((((map__51633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51633):map__51633);
var db = cljs.core.get.call(null,map__51633__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51634 = cljs.core.get.call(null,map__51633__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__51634,(0),null);
var map__51637 = cljs.core.nth.call(null,vec__51634,(1),null);
var map__51637__$1 = ((((!((map__51637 == null)))?((((map__51637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51637):map__51637);
var start = cljs.core.get.call(null,map__51637__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var error = cljs.core.get.call(null,map__51633__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.not.call(null,error)){
try{cljs_time.format.parse.call(null,meeting.events.datetime_formatter,start);

return context;
}catch (e51640){var e = e51640;
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Start date-time is not valid");
}} else {
return context;
}
}));
meeting.events.invalid_date_end_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"invalid-date-end?","invalid-date-end?",-559542291),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__51641 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__51641__$1 = ((((!((map__51641 == null)))?((((map__51641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51641.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51641):map__51641);
var db = cljs.core.get.call(null,map__51641__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51642 = cljs.core.get.call(null,map__51641__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__51642,(0),null);
var map__51645 = cljs.core.nth.call(null,vec__51642,(1),null);
var map__51645__$1 = ((((!((map__51645 == null)))?((((map__51645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51645.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51645):map__51645);
var end = cljs.core.get.call(null,map__51645__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var error = cljs.core.get.call(null,map__51641__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.not.call(null,error)){
try{cljs_time.format.parse.call(null,meeting.events.datetime_formatter,end);

return context;
}catch (e51648){var e = e51648;
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"End date-time is not valid");
}} else {
return context;
}
}));
meeting.events.past_time_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"past-time-start?","past-time-start?",1337867366),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__51649 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__51649__$1 = ((((!((map__51649 == null)))?((((map__51649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51649):map__51649);
var db = cljs.core.get.call(null,map__51649__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51650 = cljs.core.get.call(null,map__51649__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__51650,(0),null);
var map__51653 = cljs.core.nth.call(null,vec__51650,(1),null);
var map__51653__$1 = ((((!((map__51653 == null)))?((((map__51653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51653):map__51653);
var start = cljs.core.get.call(null,map__51653__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var error = cljs.core.get.call(null,map__51649__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_((function (){var and__27183__auto__ = cljs.core.not.call(null,error);
if(and__27183__auto__){
return cljs_time.core.before_QMARK_.call(null,cljs_time.format.parse.call(null,meeting.events.datetime_formatter,start),cljs_time.core.now.call(null));
} else {
return and__27183__auto__;
}
})())){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Start date-time could not be in past");
} else {
return context;
}
}));
meeting.events.end_before_start_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"end-before-start?","end-before-start?",-1391150180),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__51656 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__51656__$1 = ((((!((map__51656 == null)))?((((map__51656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51656.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51656):map__51656);
var db = cljs.core.get.call(null,map__51656__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51657 = cljs.core.get.call(null,map__51656__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__51657,(0),null);
var map__51660 = cljs.core.nth.call(null,vec__51657,(1),null);
var map__51660__$1 = ((((!((map__51660 == null)))?((((map__51660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51660):map__51660);
var start = cljs.core.get.call(null,map__51660__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__51660__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var error = cljs.core.get.call(null,map__51656__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_((function (){var and__27183__auto__ = cljs.core.not.call(null,error);
if(and__27183__auto__){
return cljs_time.core.before_QMARK_.call(null,cljs_time.format.parse.call(null,meeting.events.datetime_formatter,end),cljs_time.format.parse.call(null,meeting.events.datetime_formatter,start));
} else {
return and__27183__auto__;
}
})())){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"End date-time could not be before start date-time");
} else {
return context;
}
}));
meeting.events.meeting_overlaps_QMARK_ = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"meeting-overlaps?","meeting-overlaps?",-1232386514),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var map__51664 = new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
var map__51664__$1 = ((((!((map__51664 == null)))?((((map__51664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51664):map__51664);
var db = cljs.core.get.call(null,map__51664__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51665 = cljs.core.get.call(null,map__51664__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event = cljs.core.nth.call(null,vec__51665,(0),null);
var map__51668 = cljs.core.nth.call(null,vec__51665,(1),null);
var map__51668__$1 = ((((!((map__51668 == null)))?((((map__51668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51668):map__51668);
var start = cljs.core.get.call(null,map__51668__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__51668__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var error = cljs.core.get.call(null,map__51664__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if((cljs.core.not.call(null,error)) && (((0) < cljs.core.count.call(null,cljs.core.filter.call(null,((function (map__51664,map__51664__$1,db,vec__51665,event,map__51668,map__51668__$1,start,end,error){
return (function (p1__51663_SHARP_){
return cljs_time.core.overlaps_QMARK_.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p1__51663_SHARP_),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(p1__51663_SHARP_),cljs_time.format.parse.call(null,meeting.events.datetime_formatter,start),cljs_time.format.parse.call(null,meeting.events.datetime_formatter,end));
});})(map__51664,map__51664__$1,db,vec__51665,event,map__51668,map__51668__$1,start,end,error))
,cljs.core.vals.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db))))))){
return cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"error","error",-978969032)], null),"Meeting overlaps with existing meetings");
} else {
return context;
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","initialize-db","meeting.events/initialize-db",1529113988),(function (_,___$1){
return meeting.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-panel","meeting.events/set-active-panel",617377240),(function (db,p__51671){
var vec__51672 = p__51671;
var _ = cljs.core.nth.call(null,vec__51672,(0),null);
var active_panel = cljs.core.nth.call(null,vec__51672,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-active-meeting-id","meeting.events/set-active-meeting-id",-1157732228),(function (db,p__51675){
var vec__51676 = p__51675;
var _ = cljs.core.nth.call(null,vec__51676,(0),null);
var id = cljs.core.nth.call(null,vec__51676,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036),id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","unset-active-meeting-id","meeting.events/unset-active-meeting-id",-278435922),(function (db,p__51679){
var vec__51680 = p__51679;
var _ = cljs.core.nth.call(null,vec__51680,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__51680,(1),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","delete-meeting!","meeting.events/delete-meeting!",2001083377),(function (db,p__51683){
var vec__51684 = p__51683;
var _ = cljs.core.nth.call(null,vec__51684,(0),null);
var id = cljs.core.nth.call(null,vec__51684,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.dissoc,id);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","create-meeting!","meeting.events/create-meeting!",-427757798),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.events.blank_title_QMARK_,meeting.events.blank_start_QMARK_,meeting.events.invalid_format_start_QMARK_,meeting.events.invalid_date_start_QMARK_,meeting.events.past_time_start_QMARK_,meeting.events.blank_end_QMARK_,meeting.events.invalid_format_end_QMARK_,meeting.events.invalid_date_end_QMARK_,meeting.events.end_before_start_QMARK_,meeting.events.meeting_overlaps_QMARK_,re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103))], null),(function (cofx,p__51687){
var vec__51688 = p__51687;
var _ = cljs.core.nth.call(null,vec__51688,(0),null);
var new_meeting = cljs.core.nth.call(null,vec__51688,(1),null);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138)], null),cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.merge.call(null,cljs.core.conj.call(null,new_meeting,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"meeting-id","meeting-id",1530187103).cljs$core$IFn$_invoke$arity$1(cofx)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),cljs_time.format.parse.call(null,meeting.events.datetime_formatter,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(new_meeting)),new cljs.core.Keyword(null,"end","end",-268185958),cljs_time.format.parse.call(null,meeting.events.datetime_formatter,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(new_meeting))], null))])),new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cofx))], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("meeting.events","set-hash!","meeting.events/set-hash!",1048468244),(function (cofx,p__51691){
var vec__51692 = p__51691;
var _ = cljs.core.nth.call(null,vec__51692,(0),null);
var location = cljs.core.nth.call(null,vec__51692,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),location], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"change-loc","change-loc",1434962859),(function (location){
return window.location.hash = location;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","update-meeting!","meeting.events/update-meeting!",716738413),(function (db,p__51695){
var vec__51696 = p__51695;
var _ = cljs.core.nth.call(null,vec__51696,(0),null);
var meeting__$1 = cljs.core.nth.call(null,vec__51696,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meetings","meetings",39002138),new cljs.core.Keyword(null,"active-meeting-id","active-meeting-id",471672036).cljs$core$IFn$_invoke$arity$1(db)], null),cljs.core.merge,meeting__$1);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","filter!","meeting.events/filter!",-1924726221),(function (db,p__51699){
var vec__51700 = p__51699;
var _ = cljs.core.nth.call(null,vec__51700,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"filter","filter",-948537934));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","reset-filter!","meeting.events/reset-filter!",376919552),(function (db,p__51703){
var vec__51704 = p__51703;
var _ = cljs.core.nth.call(null,vec__51704,(0),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","set-filter-date!","meeting.events/set-filter-date!",1112430115),(function (db,p__51707){
var vec__51708 = p__51707;
var _ = cljs.core.nth.call(null,vec__51708,(0),null);
var d = cljs.core.nth.call(null,vec__51708,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"filter-date","filter-date",-1447386173),d);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","timer-manage-status!","meeting.events/timer-manage-status!",-1826807801),(function (db,p__51715){
var vec__51716 = p__51715;
var _ = cljs.core.nth.call(null,vec__51716,(0),null);
var started = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__51716,_){
return (function (p1__51712_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__51712_SHARP_)],[cljs.core.assoc.call(null,cljs.core.second.call(null,p1__51712_SHARP_),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"inprocess","inprocess",2078629075))]);
});})(vec__51716,_))
,cljs.core.filter.call(null,((function (vec__51716,_){
return (function (p1__51711_SHARP_){
var and__27183__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__51711_SHARP_)),new cljs.core.Keyword(null,"planned","planned",-1213840184));
if(and__27183__auto__){
return cljs_time.core.before_QMARK_.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__51711_SHARP_)),cljs_time.core.now.call(null));
} else {
return and__27183__auto__;
}
});})(vec__51716,_))
,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db))));
var done = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (started,vec__51716,_){
return (function (p1__51714_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,p1__51714_SHARP_)],[cljs.core.assoc.call(null,cljs.core.second.call(null,p1__51714_SHARP_),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188))]);
});})(started,vec__51716,_))
,cljs.core.filter.call(null,((function (started,vec__51716,_){
return (function (p1__51713_SHARP_){
var and__27183__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__51713_SHARP_)),new cljs.core.Keyword(null,"inprocess","inprocess",2078629075));
if(and__27183__auto__){
return cljs_time.core.before_QMARK_.call(null,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__51713_SHARP_)),cljs_time.core.now.call(null));
} else {
return and__27183__auto__;
}
});})(started,vec__51716,_))
,cljs.core.merge.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db),started))));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"meetings","meetings",39002138),cljs.core.merge.call(null,new cljs.core.Keyword(null,"meetings","meetings",39002138).cljs$core$IFn$_invoke$arity$1(db),started,done));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","timer-set-now!","meeting.events/timer-set-now!",195627536),(function (db,p__51719){
var vec__51720 = p__51719;
var _ = cljs.core.nth.call(null,vec__51720,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"now","now",-1650525531),cljs_time.core.now.call(null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("meeting.events","unset-error!","meeting.events/unset-error!",1576637477),(function (db,p__51723){
var vec__51724 = p__51723;
var _ = cljs.core.nth.call(null,vec__51724,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__51724,(1),null);
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"error","error",-978969032));
}));

//# sourceMappingURL=events.js.map?rel=1516102014406
