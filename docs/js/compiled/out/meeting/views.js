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
meeting.views.skeleton = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"begin-time","begin-time",-1925573305),(0),new cljs.core.Keyword(null,"end-time","end-time",-1849817460),(0)], null);
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
return (function (p__47298){
var map__47299 = p__47298;
var map__47299__$1 = ((((!((map__47299 == null)))?((((map__47299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47299):map__47299);
var id = cljs.core.get.call(null,map__47299__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__47299__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),title], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/meetings/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),"view"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/meetings/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/edit"].join('')], null),"edit"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__47299,map__47299__$1,id,title){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","delete-meeting!","meeting.events/delete-meeting!",2001083377),id], null));
});})(map__47299,map__47299__$1,id,title))
,new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"delete"], null)], null)], null);
});
});
meeting.views.meeting_table = (function meeting$views$meeting_table(){
var meetings = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.subs","visible-meetings","meeting.subs/visible-meetings",2146244548)], null)));
if(cljs.core.seq.call(null,meetings)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Actions"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__28003__auto__ = ((function (meetings){
return (function meeting$views$meeting_table_$_iter__47301(s__47302){
return (new cljs.core.LazySeq(null,((function (meetings){
return (function (){
var s__47302__$1 = s__47302;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__47302__$1);
if(temp__4657__auto__){
var s__47302__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47302__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__47302__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__47304 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__47303 = (0);
while(true){
if((i__47303 < size__28002__auto__)){
var meeting__$1 = cljs.core._nth.call(null,c__28001__auto__,i__47303);
cljs.core.chunk_append.call(null,b__47304,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.views.meeting_row,meeting__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(meeting__$1)], null)));

var G__47305 = (i__47303 + (1));
i__47303 = G__47305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47304),meeting$views$meeting_table_$_iter__47301.call(null,cljs.core.chunk_rest.call(null,s__47302__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47304),null);
}
} else {
var meeting__$1 = cljs.core.first.call(null,s__47302__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.views.meeting_row,meeting__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(meeting__$1)], null)),meeting$views$meeting_table_$_iter__47301.call(null,cljs.core.rest.call(null,s__47302__$2)));
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
return iter__28003__auto__.call(null,meetings);
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

var begin_date = reagent.core.atom.call(null,null);
var end_date = reagent.core.atom.call(null,null);
var begin_time = reagent.core.atom.call(null,(0));
var end_time = reagent.core.atom.call(null,(0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is the Meeting Page.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to Home Page"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),"",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"title",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begin_date,end_date,begin_time,end_time){
return (function (p1__47306_SHARP_){
return cljs.core.swap_BANG_.call(null,meeting.views.new_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),p1__47306_SHARP_);
});})(begin_date,end_date,begin_time,end_time))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),meeting.views.timezones,new cljs.core.Keyword(null,"model","model",331153215),null,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begin_date,end_date,begin_time,end_time){
return (function (p1__47307_SHARP_){
return cljs.core.swap_BANG_.call(null,meeting.views.new_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"timezone","timezone",1831928099),p1__47307_SHARP_);
});})(begin_date,end_date,begin_time,end_time))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"choose timezone"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.datepicker_dropdown,new cljs.core.Keyword(null,"model","model",331153215),begin_date,new cljs.core.Keyword(null,"format","format",-1306924766),"dd.MM.yyyy",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begin_date,end_date,begin_time,end_time){
return (function (d){
cljs.core.swap_BANG_.call(null,meeting.views.new_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"begin-date","begin-date",-1169757512),d);

return cljs.core.reset_BANG_.call(null,begin_date,d);
});})(begin_date,end_date,begin_time,end_time))
], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_time,new cljs.core.Keyword(null,"model","model",331153215),begin_time,new cljs.core.Keyword(null,"show-icon?","show-icon?",-756836459),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begin_date,end_date,begin_time,end_time){
return (function (t){
cljs.core.swap_BANG_.call(null,meeting.views.new_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"begin-time","begin-time",-1925573305),t);

return cljs.core.reset_BANG_.call(null,begin_time,t);
});})(begin_date,end_date,begin_time,end_time))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.datepicker_dropdown,new cljs.core.Keyword(null,"model","model",331153215),end_date,new cljs.core.Keyword(null,"format","format",-1306924766),"dd.MM.yyyy",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begin_date,end_date,begin_time,end_time){
return (function (d){
cljs.core.swap_BANG_.call(null,meeting.views.new_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"end-date","end-date",-208259642),d);

return cljs.core.reset_BANG_.call(null,end_date,d);
});})(begin_date,end_date,begin_time,end_time))
], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_time,new cljs.core.Keyword(null,"model","model",331153215),end_time,new cljs.core.Keyword(null,"show-icon?","show-icon?",-756836459),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begin_date,end_date,begin_time,end_time){
return (function (t){
cljs.core.swap_BANG_.call(null,meeting.views.new_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"end-time","end-time",-1849817460),t);

return cljs.core.reset_BANG_.call(null,end_time,t);
});})(begin_date,end_date,begin_time,end_time))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (begin_date,end_date,begin_time,end_time){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","create-meeting!","meeting.events/create-meeting!",-427757798),cljs.core.deref.call(null,meeting.views.new_meeting)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-hash!","meeting.events/set-hash!",1048468244),""], null));
});})(begin_date,end_date,begin_time,end_time))
], null),"create meeting"], null)], null)], null);
});
meeting.views.view_panel = (function meeting$views$view_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is the view Page.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to Home Page"], null)], null),(function (){var meeting__$1 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.subs","active-meeting","meeting.subs/active-meeting",-1433674092)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"timezone"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Begin date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Begin time"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"End date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"End time"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(meeting__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(meeting__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"timezone","timezone",1831928099).cljs$core$IFn$_invoke$arity$1(meeting__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var or__27195__auto__ = new cljs.core.Keyword(null,"begin-date","begin-date",-1169757512).cljs$core$IFn$_invoke$arity$1(meeting__$1);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return "";
}
})().toString()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"begin-time","begin-time",-1925573305).cljs$core$IFn$_invoke$arity$1(meeting__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var or__27195__auto__ = new cljs.core.Keyword(null,"end-date","end-date",-208259642).cljs$core$IFn$_invoke$arity$1(meeting__$1);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return "";
}
})().toString()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"end-time","end-time",-1849817460).cljs$core$IFn$_invoke$arity$1(meeting__$1)], null)], null)], null)], null);
})()], null);
});
meeting.views.edit_panel = (function meeting$views$edit_panel(){
cljs.core.reset_BANG_.call(null,meeting.views.active_meeting,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.subs","active-meeting","meeting.subs/active-meeting",-1433674092)], null))));

return (function (){
var begin_date = reagent.core.atom.call(null,new cljs.core.Keyword(null,"begin-date","begin-date",-1169757512).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meeting.views.active_meeting)));
var end_date = reagent.core.atom.call(null,new cljs.core.Keyword(null,"end-date","end-date",-208259642).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meeting.views.active_meeting)));
var begin_time = reagent.core.atom.call(null,new cljs.core.Keyword(null,"begin-time","begin-time",-1925573305).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meeting.views.active_meeting)));
var end_time = reagent.core.atom.call(null,new cljs.core.Keyword(null,"end-time","end-time",-1849817460).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meeting.views.active_meeting)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This is the edit Page.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to Home Page"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meeting.views.active_meeting)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"title",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begin_date,end_date,begin_time,end_time){
return (function (p1__47308_SHARP_){
return cljs.core.swap_BANG_.call(null,meeting.views.active_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),p1__47308_SHARP_);
});})(begin_date,end_date,begin_time,end_time))
], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"choices","choices",1385611597),meeting.views.timezones,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"timezone","timezone",1831928099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meeting.views.active_meeting)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begin_date,end_date,begin_time,end_time){
return (function (p1__47309_SHARP_){
return cljs.core.swap_BANG_.call(null,meeting.views.active_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"timezone","timezone",1831928099),p1__47309_SHARP_);
});})(begin_date,end_date,begin_time,end_time))
,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"choose timezone"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.datepicker_dropdown,new cljs.core.Keyword(null,"model","model",331153215),begin_date,new cljs.core.Keyword(null,"format","format",-1306924766),"dd.MM.yyyy",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begin_date,end_date,begin_time,end_time){
return (function (d){
cljs.core.swap_BANG_.call(null,meeting.views.active_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"begin-date","begin-date",-1169757512),d);

return cljs.core.reset_BANG_.call(null,begin_date,d);
});})(begin_date,end_date,begin_time,end_time))
], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_time,new cljs.core.Keyword(null,"model","model",331153215),begin_time,new cljs.core.Keyword(null,"show-icon?","show-icon?",-756836459),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begin_date,end_date,begin_time,end_time){
return (function (t){
cljs.core.swap_BANG_.call(null,meeting.views.active_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"begin-time","begin-time",-1925573305),t);

return cljs.core.reset_BANG_.call(null,begin_time,t);
});})(begin_date,end_date,begin_time,end_time))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.datepicker_dropdown,new cljs.core.Keyword(null,"model","model",331153215),end_date,new cljs.core.Keyword(null,"format","format",-1306924766),"dd.MM.yyyy",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begin_date,end_date,begin_time,end_time){
return (function (d){
cljs.core.swap_BANG_.call(null,meeting.views.active_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"end-date","end-date",-208259642),d);

return cljs.core.reset_BANG_.call(null,end_date,d);
});})(begin_date,end_date,begin_time,end_time))
], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_time,new cljs.core.Keyword(null,"model","model",331153215),end_time,new cljs.core.Keyword(null,"show-icon?","show-icon?",-756836459),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (begin_date,end_date,begin_time,end_time){
return (function (t){
cljs.core.swap_BANG_.call(null,meeting.views.active_meeting,cljs.core.assoc,new cljs.core.Keyword(null,"end-time","end-time",-1849817460),t);

return cljs.core.reset_BANG_.call(null,end_time,t);
});})(begin_date,end_date,begin_time,end_time))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (begin_date,end_date,begin_time,end_time){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","update-meeting!","meeting.events/update-meeting!",716738413),cljs.core.deref.call(null,meeting.views.active_meeting)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.events","set-hash!","meeting.events/set-hash!",1048468244),""], null));
});})(begin_date,end_date,begin_time,end_time))
], null),"save"], null)], null)], null);
});
});
meeting.views.panels = (function meeting$views$panels(panel_name){
var G__47310 = panel_name;
var G__47310__$1 = (((G__47310 instanceof cljs.core.Keyword))?G__47310.fqn:null);
switch (G__47310__$1) {
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meeting.views.show_panel,cljs.core.deref.call(null,active_panel)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Database"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),(function (){var sb__28222__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_47312_47314 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_47313_47315 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_47312_47314,_STAR_print_fn_STAR_47313_47315,sb__28222__auto__,active_panel){
return (function (x__28223__auto__){
return sb__28222__auto__.append(x__28223__auto__);
});})(_STAR_print_newline_STAR_47312_47314,_STAR_print_fn_STAR_47313_47315,sb__28222__auto__,active_panel))
;

try{cljs.pprint.pprint.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("meeting.subs","db","meeting.subs/db",-598217791)], null))));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_47313_47315;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_47312_47314;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28222__auto__)].join('');
})()], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1515066654410
