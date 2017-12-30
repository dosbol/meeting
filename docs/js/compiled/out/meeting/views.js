// Compiled by ClojureScript 1.9.908 {}
goog.provide('meeting.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('meeting.subs');
goog.require('meeting.events');
goog.require('re_com.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
meeting.views.skeleton = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),""], null);
meeting.views.timezones = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"moscow","moscow",-75940991),new cljs.core.Keyword(null,"label","label",1718410804),"Moscow"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"khabarovsk","khabarovsk",-1652873300),new cljs.core.Keyword(null,"label","label",1718410804),"Khabarovsk"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"greenwich","greenwich",-756077746),new cljs.core.Keyword(null,"label","label",1718410804),"Greenwich"], null)], null);
if(typeof meeting.views.new_meeting !== 'undefined'){
} else {
meeting.views.new_meeting = reagent.core.atom.call(null,meeting.views.skeleton);
}
if(typeof meeting.views.active_meeting !== 'undefined'){
} else {
meeting.views.active_meeting = reagent.core.atom.call(null,meeting.views.skeleton);
}
meeting.views.meeting_row = (function meeting$views$meeting_row(){
return (function (p__47496){
var map__47497 = p__47496;
var map__47497__$1 = ((((!((map__47497 == null)))?((((map__47497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47497):map__47497);
var id = cljs.core.get.call(null,map__47497__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__47497__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),title], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/meetings/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),"view"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/meetings/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/edit"].join('')], null),"edit"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__47497,map__47497__$1,id,title){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","delete-meeting!","meeting.events/delete-meeting!",2001083377),id], null));
});})(map__47497,map__47497__$1,id,title))
,new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"delete"], null)], null)], null);
});
});
meeting.views.meeting_table = (function meeting$views$meeting_table(){
var meetings = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.subs","visible-meetings","meeting.subs/visible-meetings",2146244548)], null)));
if(cljs.core.seq.call(null,meetings)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Actions"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__28004__auto__ = ((function (meetings){
return (function meeting$views$meeting_table_$_iter__47499(s__47500){
return (new cljs.core.LazySeq(null,((function (meetings){
return (function (){
var s__47500__$1 = s__47500;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__47500__$1);
if(temp__4657__auto__){
var s__47500__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47500__$2)){
var c__28002__auto__ = cljs.core.chunk_first.call(null,s__47500__$2);
var size__28003__auto__ = cljs.core.count.call(null,c__28002__auto__);
var b__47502 = cljs.core.chunk_buffer.call(null,size__28003__auto__);
if((function (){var i__47501 = (0);
while(true){
if((i__47501 < size__28003__auto__)){
var meeting__$1 = cljs.core._nth.call(null,c__28002__auto__,i__47501);
cljs.core.chunk_append.call(null,b__47502,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.views.meeting_row,meeting__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(meeting__$1)], null)));

var G__47503 = (i__47501 + (1));
i__47501 = G__47503;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47502),meeting$views$meeting_table_$_iter__47499.call(null,cljs.core.chunk_rest.call(null,s__47500__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47502),null);
}
} else {
var meeting__$1 = cljs.core.first.call(null,s__47500__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.views.meeting_row,meeting__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(meeting__$1)], null)),meeting$views$meeting_table_$_iter__47499.call(null,cljs.core.rest.call(null,s__47500__$2)));
}
} else {
return null;
}
break;
}
});})(meetings))
,null,null));
});})(meetings))
;
return iter__28004__auto__.call(null,meetings);
})()], null)], null);
} else {
return null;
}
});
meeting.views.home_panel = (function meeting$views$home_panel(){
var filter_date = reagent.core.atom.call(null,null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Hello. This is the Home Page."].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/meetings/new"], null),"create meeting"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.datepicker_dropdown,new cljs.core.Keyword(null,"model","model",331153215),filter_date,new cljs.core.Keyword(null,"format","format",-1306924766),"dd.MM.yyyy",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (filter_date){
return (function (d){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-filter-date!","meeting.events/set-filter-date!",1112430115),d], null));

return cljs.core.reset_BANG_.call(null,filter_date,d);
});})(filter_date))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"clear filter",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (filter_date){
return (function (){
cljs.core.reset_BANG_.call(null,filter_date,null);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","reset-filter!","meeting.events/reset-filter!",376919552)], null));
});})(filter_date))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.views.meeting_table], null)], null);
});
meeting.views.create_panel = (function meeting$views$create_panel(){
cljs.core.reset_BANG_.call(null,meeting.views.new_meeting,meeting.views.skeleton);

var begindate = reagent.core.atom.call(null,null);
var enddate = reagent.core.atom.call(null,null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is the Meeting Page.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to Home Page"], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),"",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"title",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begindate,enddate){
return (function (p1__47504_SHARP_){
return cljs.core.swap_BANG_.call(null,meeting.views.new_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),p1__47504_SHARP_);
});})(begindate,enddate))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),meeting.views.timezones,new cljs.core.Keyword(null,"model","model",331153215),null,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begindate,enddate){
return (function (p1__47505_SHARP_){
return cljs.core.swap_BANG_.call(null,meeting.views.new_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"timezone","timezone",1831928099),p1__47505_SHARP_);
});})(begindate,enddate))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"choose timezone"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.datepicker_dropdown,new cljs.core.Keyword(null,"model","model",331153215),begindate,new cljs.core.Keyword(null,"format","format",-1306924766),"dd.MM.yyyy",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begindate,enddate){
return (function (d){
cljs.core.swap_BANG_.call(null,meeting.views.new_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"begin","begin",-319034319),d);

return cljs.core.reset_BANG_.call(null,begindate,d);
});})(begindate,enddate))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.datepicker_dropdown,new cljs.core.Keyword(null,"model","model",331153215),enddate,new cljs.core.Keyword(null,"format","format",-1306924766),"dd.MM.yyyy",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begindate,enddate){
return (function (d){
cljs.core.swap_BANG_.call(null,meeting.views.new_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"end","end",-268185958),d);

return cljs.core.reset_BANG_.call(null,enddate,d);
});})(begindate,enddate))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (begindate,enddate){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","create-meeting!","meeting.events/create-meeting!",-427757798),cljs.core.deref.call(null,meeting.views.new_meeting)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-hash!","meeting.events/set-hash!",1048468244),""], null));
});})(begindate,enddate))
], null),"create meeting"], null)], null)], null);
});
meeting.views.view_panel = (function meeting$views$view_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is the view Page.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to Home Page"], null)], null),(function (){var meeting__$1 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.subs","active-meeting","meeting.subs/active-meeting",-1433674092)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"timezone"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Begin"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"End"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(meeting__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(meeting__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"timezone","timezone",1831928099).cljs$core$IFn$_invoke$arity$1(meeting__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var or__27196__auto__ = new cljs.core.Keyword(null,"begin","begin",-319034319).cljs$core$IFn$_invoke$arity$1(meeting__$1);
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
return "";
}
})().toString()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var or__27196__auto__ = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(meeting__$1);
if(cljs.core.truth_(or__27196__auto__)){
return or__27196__auto__;
} else {
return "";
}
})().toString()], null)], null)], null)], null);
})()], null);
});
meeting.views.edit_panel = (function meeting$views$edit_panel(){
cljs.core.reset_BANG_.call(null,meeting.views.active_meeting,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.subs","active-meeting","meeting.subs/active-meeting",-1433674092)], null))));

return (function (){
var begindate = reagent.core.atom.call(null,new cljs.core.Keyword(null,"begin","begin",-319034319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meeting.views.active_meeting)));
var enddate = reagent.core.atom.call(null,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meeting.views.active_meeting)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is the edit Page.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to Home Page"], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meeting.views.active_meeting)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"title",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begindate,enddate){
return (function (p1__47506_SHARP_){
return cljs.core.swap_BANG_.call(null,meeting.views.active_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),p1__47506_SHARP_);
});})(begindate,enddate))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),meeting.views.timezones,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"timezone","timezone",1831928099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meeting.views.active_meeting)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begindate,enddate){
return (function (p1__47507_SHARP_){
return cljs.core.swap_BANG_.call(null,meeting.views.active_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"timezone","timezone",1831928099),p1__47507_SHARP_);
});})(begindate,enddate))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"choose timezone"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.datepicker_dropdown,new cljs.core.Keyword(null,"model","model",331153215),begindate,new cljs.core.Keyword(null,"format","format",-1306924766),"dd.MM.yyyy",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begindate,enddate){
return (function (d){
cljs.core.swap_BANG_.call(null,meeting.views.active_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"begin","begin",-319034319),d);

return cljs.core.reset_BANG_.call(null,begindate,d);
});})(begindate,enddate))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.datepicker_dropdown,new cljs.core.Keyword(null,"model","model",331153215),enddate,new cljs.core.Keyword(null,"format","format",-1306924766),"dd.MM.yyyy",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begindate,enddate){
return (function (d){
cljs.core.swap_BANG_.call(null,meeting.views.active_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"end","end",-268185958),d);

return cljs.core.reset_BANG_.call(null,enddate,d);
});})(begindate,enddate))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (begindate,enddate){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","update-meeting!","meeting.events/update-meeting!",716738413),cljs.core.deref.call(null,meeting.views.active_meeting)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-hash!","meeting.events/set-hash!",1048468244),""], null));
});})(begindate,enddate))
], null),"save"], null)], null)], null);
});
});
meeting.views.panels = (function meeting$views$panels(panel_name){
var G__47508 = panel_name;
var G__47508__$1 = (((G__47508 instanceof cljs.core.Keyword))?G__47508.fqn:null);
switch (G__47508__$1) {
case "home-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.views.home_panel], null);

break;
case "create-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.views.create_panel], null);

break;
case "view-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.views.view_panel], null);

break;
case "edit-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.views.edit_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
});
meeting.views.show_panel = (function meeting$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.views.panels,panel_name], null);
});
meeting.views.main_panel = (function meeting$views$main_panel(){
var active_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.subs","active-panel","meeting.subs/active-panel",-1301583180)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.views.show_panel,cljs.core.deref.call(null,active_panel)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Database"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),(function (){var sb__28223__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_47510_47512 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_47511_47513 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_47510_47512,_STAR_print_fn_STAR_47511_47513,sb__28223__auto__,active_panel){
return (function (x__28224__auto__){
return sb__28223__auto__.append(x__28224__auto__);
});})(_STAR_print_newline_STAR_47510_47512,_STAR_print_fn_STAR_47511_47513,sb__28223__auto__,active_panel))
;

try{cljs.pprint.pprint.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.subs","db","meeting.subs/db",-598217791)], null))));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_47511_47513;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_47510_47512;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28223__auto__)].join('');
})()], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1514665968035
